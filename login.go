package main

import (
	//"encoding/base64"
	//"crypto/md5"
	//"encoding/hex"
	"encoding/json"
	"fmt"
	//"io/ioutil"
	//"math/rand"
	//"io"
	"io/ioutil"
	"net/http"
	//"net/http/cookiejar"
	"net/url"
	"strings"
	//"time"
	//"log"
	"os"
)

func main() {

	v := url.Values{}
	v.Add("Pd", "ishgishg9")
	v.Add("Ud", "conku188")
	//v.Add("BlackBox", "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")

	// jar, err := cookiejar.New(nil)
	// if err != nil {
	// 	panic(err)
	// }

	// var client http.Client
	// client.Jar = jar

	//req, err := http.NewRequest("POST", "https://www.188euro.com/service/userapi/login", strings.NewReader(v.Encode()))
	urls := "https://www.188euro.com/service/userapi/login"
	//urls := "http://localhost:8090/service/userapi/login"
	js, _ := json.Marshal(v)
	req, err := http.NewRequest("POST", urls, strings.NewReader(string(js)))
	req.Header.Set("Content-Type", "application/json;charset=UTF-8")
	req.Header.Set("Content-Length", "2227")
	req.Header.Add("Accept", "application/json, text/plain, */*")
	req.Header.Add("Accept-Encoding", "gzip, deflate, br")
	req.Header.Add("Accept-Language", "zh-cn,zh;q=0.8,en-us;q=0.5,en;q=0.3")
	req.Header.Add("Connection", "keep-alive")
	req.Header.Add("Host", "www.188euro.com")
	req.Header.Add("Origin", "https://www.188euro.com")
	req.Header.Add("Referer", "https://www.188euro.com/zh-cn/")
	req.Header.Add("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36")
	//response, err := client.Do(req)

	if err != nil {
		fmt.Println(err.Error())
	}

	var w WebWeChat

	client := new(http.Client)
	resp, err := client.Do(req)

	if err != nil {
		fmt.Println(err.Error())
	}

	//{"redirectUrl":null,"memberType":0,"returnCode":"0002","recDomain":null}
	//{"redirectUrl":null,"memberType":0,"returnCode":"0005","recDomain":null}

	data, err := ioutil.ReadAll(resp.Body)

	if err != nil {
		fmt.Println(err.Error())
	}

	html := string(data)

	fmt.Println(resp.StatusCode)

	if resp.StatusCode == 200 {

		//w.cookies = resp.Cookies()

		//doc := json.NewDecoder(strings.NewReader(html))
		fmt.Println(html)
		//fmt.Println(doc)
		// type Msg struct {
		// 	RedirectUrl string `json:"redirectUrl"`
		// 	MemberType  int    `json:"memberType"`
		// 	ReturnCode  string `json:"returnCode"`
		// 	RecDomain   string `json:"recDomain"`
		// }

		// var s Msg

		// err = json.Unmarshal(data, &s)
		// if err != nil {
		// 	fmt.Println(err.Error())
		// }

		// var m Msg
		// if err := doc.Decode(&m); err == io.EOF {
		// 	fmt.Println(err)
		// } else if err != nil {
		// 	log.Println("ERROR:", err.Error())
		// }
		//fmt.Println(s)
		//fmt.Println(doc)
		//fmt.Println(data)
		w.cookies = resp.Cookies()
	}
}

type WebWeChat struct {
	token   string
	cookies []*http.Cookie
}

/*
func (w *WebWeChat) login() bool {
	login_url := "https://mp.weixin.qq.com/cgi-bin/login?lang=zh_CN"
	email := "songbohr@163.com"
	password := "xxx"
	h := md5.New()
	h.Write([]byte(password))
	password = hex.EncodeToString(h.Sum(nil))
	fmt.Println(password)
	post_arg := url.Values{"username": {email}, "pwd": {password}, "imgcode": {""}, "f": {"json"}}

	fmt.Println(strings.NewReader(post_arg.Encode()))
	req, err := http.NewRequest("POST", login_url, strings.NewReader(post_arg.Encode()))
	req.Header.Set("Referer", "https://mp.weixin.qq.com/")

	if err != nil {
		log.Fatal(err)
	}

	resp, _ := client.Do(req)
	data, _ := ioutil.ReadAll(resp.Body)

	s := string(data)
	fmt.Printf("%s", s)

	doc := json.NewDecoder(strings.NewReader(s))

	type Msg struct {
		Ret                     int
		ErrMsg                  string
		ShowVerifyCode, ErrCode int
	}

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

	return false
}
*/

func login2() string {
	//func login2(header map[string]interface{}) string {

	//currentTime := time.Now().Unix() + int64(rand.Float32()*999)

	// v := url.Values{}
	// v.Set("entry", "weibo")
	// v.Add("gateway", "1")
	// v.Add("from", "")
	// v.Add("savestate", "7")
	// v.Add("useticket", "1")
	// v.Add("service", "miniblog")
	// // v.Add("servertime", cov(header["servertime"]))
	// // v.Add("rsakv", cov(header["rsakv"]))
	// // v.Add("pcid", cov(header["pcid"]))
	// // v.Add("nonce", cov(header["nonce"]))
	// v.Add("pwencode", "rsa2")
	// v.Add("returntype", "META")
	// v.Add("encoding", "UTF-8")
	// v.Add("vsnf", "1")
	// v.Add("pagerefer", "")
	// v.Add("url", "http://weibo.com/ajaxlogin.php?framelogin=1&callback=parent.sinaSSOController.feedBackUrlCallBack")

	// v.Add("su", base64.StdEncoding.EncodeToString([]byte("XXX@gmail.com")))

	// password := sinaRSA2SSOEncoder(cov(header["pubkey"]), "wangshangyou", cov(header["servertime"]), cov(header["nonce"]))
	// v.Add("sp", password)

	//currentTime1 := time.Now().Unix() + int64(rand.Float32()*999)

	//prelt := fmt.Sprintf("%f", math.Max(float64(currentTime1-currentTime), 100.0))

	//prelt = strings.Trim(prelt, ".000000")

	//v.Add("prelt", prelt)

	// v中是登录帐号、密码等内容
	v := url.Values{}
	v.Add("Pd", "value")
	v.Add("Ud", "value")

	client := &http.Client{}

	reqest, err := http.NewRequest("POST", "http://localhost:8090/service/userapi/login", strings.NewReader(v.Encode()))

	if err != nil {
		fmt.Println("Fatal error ", err.Error())
		os.Exit(0)
	}

	reqest.Header.Set("Content-Type", "application/x-www-form-urlencoded; param=value")

	reqest.Header.Add("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")
	reqest.Header.Add("Accept-Encoding", "gzip, deflate")
	reqest.Header.Add("Accept-Language", "zh-cn,zh;q=0.8,en-us;q=0.5,en;q=0.3")
	reqest.Header.Add("Connection", "keep-alive")
	reqest.Header.Add("Host", "login.sina.com.cn")
	reqest.Header.Add("Referer", "http://weibo.com/")
	reqest.Header.Add("User-Agent", "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:12.0) Gecko/20100101 Firefox/12.0")
	response, err := client.Do(reqest)

	defer response.Body.Close()

	if err != nil {
		fmt.Println("Fatal error ", err.Error())
		os.Exit(0)
	}

	fmt.Println(response.StatusCode)

	if response.StatusCode == 200 {
		fmt.Println(response.Body)
	}

	// if response.StatusCode == 200 {

	// 	var body []byte

	// 	switch response.Header.Get("Content-Encoding") {
	// 	case "gzip":
	// 		reader, _ := gzip.NewReader(response.Body)
	// 		body = dumpGZIP(reader)
	// 	default:
	// 		bodyByte, _ := ioutil.ReadAll(response.Body)
	// 		body = bodyByte
	// 	}

	// 	r := regexp.MustCompile(`location.replace\("(.*?)"\)`)
	// 	rs := r.FindStringSubmatch(string(body))

	// 	// if strings.Contains(rs[1], "retcode=0") {

	// 	// }

	// 	return rs[1]
	// }

	return ""
}
