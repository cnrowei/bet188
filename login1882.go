package main

import (
	//"crypto/md5"
	//"encoding/hex"
	"encoding/json"
	"fmt"
	//"io"
	"io/ioutil"
	//"log"
	"net/http"
	"net/url"
	//"regexp"
	//"strings"
)

type Login struct {
	RedirectUrl string        `json:"redirectUrl"`
	MemberType  int           `json:"memberType"`
	ReturnCode  string        `json:"returnCode"`
	RecDomain   []interface{} `json:"recDomain"`
}

type WebWeChat struct {
	token   string
	cookies []*http.Cookie
}

func NewWebWeChat() *WebWeChat {
	w := new(WebWeChat)
	return w
}

func (w *WebWeChat) login() (bool, string) {

	login_url := "https://m.188euro.com/zh-cn/user/login"
	post_login_info_url := "https://m.188euro.com/service/userapi/login"
	//getbalance_url := "https://www.188euro.com/service/userapi/getBalance"

	username := "conku188"
	password := "ishgishg9"

	c := &http.Client{}
	jar, err := cookiejar.New(nil)
	if err != nil {
		fmt.Println(err)
	}

	req, err := http.NewRequest("GET", login_url, nil)
	res, err := c.Do(req)

	res.Body.Close()

	//post数据
	v := url.Values{}
	v.Add("Ud", username)
	v.Add("Pd", password)
	v.Add("BlackBox", "")

	c.Jar = jar
	req, err = c.PostForm(post_login_info_url, v)
	resp, err := client.Do(req)

	data, _ := ioutil.ReadAll(resp.Body)

	defer resp.Body.Close()

	if err != nil {
		fmt.Println(err.Error())
	}

	//fmt.Println(string(data))

	//s := string(data)
	//doc := json.NewDecoder(strings.NewReader(s))

	var login Login

	err = json.Unmarshal(data, &login)
	if err != nil {
		fmt.Println(err.Error())
	}

	if login.ReturnCode == "0000" {
		w.cookies = res.Cookies()
		return true, login.RedirectUrl
	}
	return false, ""

	/*
		s := string(data)
		fmt.Printf("%s", s)

		var m Msg
		if err := doc.Decode(&m); err == io.EOF {
			fmt.Println(err)
		} else if err != nil {
			log.Println(err)
			return false
		}

		fmt.Println(m)

		if m.ErrCode == 0 || m.ErrCode == 65201 || m.ErrCode == 65202 {
			w.token = strings.Split(m.ErrMsg, "=")[3]

			fmt.Printf("token:%v\n", w.token)

			w.cookies = resp.Cookies()

			fmt.Println(w.cookies)
			return true
		}

		switch m.ErrCode {
		case -1:
			fmt.Println("系统错误，请稍候再试。")
		case -2:
			fmt.Println("帐号或密码错误。")
		case -3:
			fmt.Println("您输入的帐号或者密码不正确，请重新输入。")
		case -4:
			fmt.Println("不存在该帐户。")
		case -5:
			fmt.Println("您目前处于访问受限状态。")
		case -6:
			fmt.Println("请输入图中的验证码")
		case -7:
			fmt.Println("此帐号已绑定私人微信号，不可用于公众平台登录。")
		case -8:
			fmt.Println("邮箱已存在。")
		case -32:
			fmt.Println("您输入的验证码不正确，请重新输入。")
		case -200:
			fmt.Println("因频繁提交虚假资料，该帐号被拒绝登录。")
		case -94:
			fmt.Println("请使用邮箱登陆。")
		case 10:
			fmt.Println("该公众会议号已经过期，无法再登录使用。")
		case -100:
			fmt.Println("海外帐号请在公众平台海外版登录,<a href=\"http://admin.wechat.com/\">点击登录</a>")
		default:
			fmt.Println("未知的返回。")
		}
	*/

}

func (w *WebWeChat) GetFakeId() bool {
	//msg_url := "https://mp.weixin.qq.com/cgi-bin/contactmanage?t=user/index&pagesize=10&pageidx=0&type=0&groupid=0&token=%s&lang=zh_CN"
	//referer_url := "https://mp.weixin.qq.com/cgi-bin/home?t=home/index&lang=zh_CN&token=%s"

	getbalance_url := "https://www.188euro.com/service/userapi/getBalance"

	req, _ := http.NewRequest("GET", getbalance_url, nil)

	//fmt.Println(w.token)
	//req.Header.Set("Referer", fmt.Sprintf(referer_url, w.token))

	for i := range w.cookies {
		req.AddCookie(w.cookies[i])
		fmt.Println(w.cookies[i])
	}

	client := new(http.Client)
	resp, _ := client.Do(req)
	data, _ := ioutil.ReadAll(resp.Body)

	//fmt.Println(string(data))
	fmt.Println(string(data))

	return true
}

func main() {
	wechat := NewWebWeChat()

	islogin, rurls := wechat.login()

	if islogin == true {
		fmt.Println(rurls)
		wechat.GetFakeId()
		//log.Println(wechat.GetFakeId())
		//tofakeid := "333215495" //my fakeid for test
		//wechat.SendTextMsg(tofakeid, "Hello Phil.")
	} else {
		fmt.Println("wechat login failed.")
	}
}
