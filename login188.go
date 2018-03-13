package main

import (
	"fmt"
	//"github.com/PuerkitoBio/goquery"
	//"io"
	"io/ioutil"
	"net/http"
	"net/http/cookiejar"
	"net/url"
	//"os"
)

var cookies []*http.Cookie

const (
	spider_base_url string = "http://www.jikexueyuan.com/path/docker/"
	verify_code_url string = "http://passport.jikexueyuan.com/sso/verify" //验证码

	login_url           string = "https://www.188euro.com/zh-cn/"                     //cookies
	post_login_info_url string = "https://www.188euro.com/service/userapi/login"      //POST地址
	getbalance_url      string = "https://www.188euro.com/service/userapi/getBalance" //账户记录

	username string = "conku188"
	password string = "ishgishg9"
)

func getResultHtml(get_url string) *http.Response {
	c := &http.Client{}
	Jar, _ := cookiejar.New(nil)
	getURL, _ := url.Parse(get_url)
	Jar.SetCookies(getURL, cookies)
	c.Jar = Jar
	res, _ := c.Get(get_url)
	return res
}

func login() {

	//获取登陆界面的cookie
	c := &http.Client{}
	req, _ := http.NewRequest("GET", login_url, nil)
	res, _ := c.Do(req)

	//req.URL, _ = url.Parse(verify_code_url)
	var temp_cookies = res.Cookies()
	fmt.Println(temp_cookies)

	for _, v := range res.Cookies() {
		req.AddCookie(v)
	}

	// 获取验证码
	// var verify_code string
	// for {
	// 	res, _ = c.Do(req)
	// 	file, _ := os.Create("verify.gif")
	// 	io.Copy(file, res.Body)

	// 	fmt.Println("请查看verify.gif， 然后输入验证码， 看不清输入0重新获取验证码")
	// 	fmt.Scanf("%s", &verify_code)
	// 	if verify_code != "0" {
	// 		break
	// 	}
	// 	res.Body.Close()
	// }

	res.Body.Close()

	//post数据
	v := url.Values{}
	v.Add("Ud", username)
	v.Add("Pd", password)
	v.Add("BlackBox", "")

	//postURL, _ := url.Parse(post_login_info_url)
	// Jar, _ := cookiejar.New(nil)
	// Jar.SetCookies(postURL, temp_cookies)
	// c.Jar = Jar

	res, _ = c.PostForm(post_login_info_url, v)
	//res.Header.Set("Content-Type", "application/json;charset=UTF-8")
	// res.Header.Set("Content-Length", "2227")
	// res.Header.Add("Accept", "application/json, text/plain, */*")
	// res.Header.Add("Accept-Encoding", "gzip, deflate, br")
	// res.Header.Add("Accept-Language", "zh-cn,zh;q=0.8,en-us;q=0.5,en;q=0.3")
	// res.Header.Add("Connection", "keep-alive")
	// res.Header.Add("Host", "www.188euro.com")
	//res.Header.Add("Origin", "https://www.188euro.com")
	//res.Header.Add("Referer", "https://www.188euro.com/zh-cn/")
	//res.Header.Add("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36")

	cookies = res.Cookies()
	fmt.Println(res.Cookies())
	data, _ := ioutil.ReadAll(res.Body)
	res.Body.Close()

	req2, _ := http.NewRequest("GET", getbalance_url, nil)
	res2, _ := c.Do(req2)
	for _, v := range res.Cookies() {
		req2.AddCookie(v)
	}
	//var cookies2 = res2.Cookies()

	//fmt.Println(cookies2)
	//{"redirectUrl":"/loginredirect?q=tvQw2SkgOhPV3%2bj7ly%2f3%2fute2bjHiSQQ99dcFybU91U%3d&u=%2fzh-cn%2fsports","memberType":1,"returnCode":"0000","recDomain":[]}

	//跳转到这个页面在获取cookies
	//https://www.188euro.com/loginredirect?q=ljiKdyMuG6qo7Ctt993j1GV%2fPgkih%2fdYd8kHV%2fTTP1s%3d&u=/zh-cn/
	fmt.Println(string(data))

	// res2 := getResultHtml(getbalance_url)

	data2, _ := ioutil.ReadAll(res2.Body)
	fmt.Println(string(data2))
	// fmt.Println(cookies)
}

type DownloadBean struct {
	dirname  string
	filename string
	href     string
}

func main() {

	login()

	if cookies == nil {
		fmt.Println("cookies is nil!")
	}
	for _, v := range cookies {
		fmt.Println(v)
	}

	/*
		var bash_str string = "#!/bin/bash \n"
		baseMap := map[string]string{}
		doc, _ := goquery.NewDocumentFromResponse(getResultHtml(spider_base_url))
		doc.Find(".lesson-info-h2").Each(func(i int, contentSelection *goquery.Selection) {
			selection := contentSelection.Find("a")
			base_href, _ := selection.Attr("href")
			dir_name := selection.Text()
			bash_str += "mkdir \"" + dir_name + "\"\n"
			baseMap[dir_name] = base_href
			fmt.Println(dir_name, "-->", base_href)

		})
		downloadList := []DownloadBean{}

		for k, v := range baseMap {
			doc, _ := goquery.NewDocumentFromResponse(getResultHtml(v))
			doc.Find(".lessonvideo-list dd h2").Each(func(i int, contentSelection *goquery.Selection) {
				selection := contentSelection.Find("a")
				href, _ := selection.Attr("href")
				filename := selection.Text()
				fmt.Println(k, "-->", filename, "-->", href)
				bean := DownloadBean{dirname: k, href: href, filename: filename}
				downloadList = append(downloadList, bean)
			})
		}

		for _, v := range downloadList {
			doc, _ := goquery.NewDocumentFromResponse(getResultHtml(v.href))
			doc.Find("source").Each(func(i int, contentSelection *goquery.Selection) {
				download_url, _ := contentSelection.Attr("src")
				one_file := "wget " + download_url + "  -O \"./" + v.dirname + "/" + v.filename + ".mp4\"\n"
				bash_str += one_file
				fmt.Println(one_file)
			})
		}

		err := ioutil.WriteFile("./download.sh", []byte(bash_str), 0x777)
		if err != nil {
			panic(err.Error())
		}

		fmt.Println("写入脚本完成")
	*/
}
