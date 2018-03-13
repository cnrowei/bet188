package main

import (
	//"github.com/mozillazg/request"
	"fmt"
	"io/ioutil"
	"net/http"
	//"net/http/cookiejar"
	"net/url"
	"strings"
)

type Jar struct {
	cookies []*http.Cookie
}

func (jar *Jar) SetCookies(u *url.URL, cookies []*http.Cookie) {
	jar.cookies = cookies
}

func (jar *Jar) Cookies(u *url.URL) []*http.Cookie {
	return jar.cookies
}

func TestCookies() {

	post_login_url := "https://www.188euro.com/service/userapi/login"
	//getbalance_url := "https://www.188euro.com/service/userapi/getBalance"
	//getbalance_url := "https://www.188euro.com/service/userapi/getBalance"
	home_url := "https://www.188euro.com/zh-cn/"

	username := "conku188"
	password := "ishgishg9"

	jar := new(Jar)
	client := &http.Client{}
	client.Jar = jar

	v := url.Values{}
	v.Add("Ud", username)
	v.Add("Pd", password)
	v.Add("BlackBox", "")

	body := ioutil.NopCloser(strings.NewReader(v.Encode()))

	loginRequest, err := http.NewRequest("POST", post_login_url, body)
	loginRequest.Header.Set("Content-Type", "application/x-www-form-urlencoded; param=value")
	// loginRequest.Header.Set("Content-Type", "application/json;charset=UTF-8")
	// loginRequest.Header.Set("Content-Length", "2227")
	loginRequest.Header.Add("Accept", "application/json, text/plain, */*")
	loginRequest.Header.Add("Accept-Encoding", "gzip, deflate, br")
	loginRequest.Header.Add("Accept-Language", "zh-cn,zh;q=0.8,en-us;q=0.5,en;q=0.3")
	// loginRequest.Header.Add("Connection", "keep-alive")
	loginRequest.Header.Add("Host", "www.188euro.com")
	loginRequest.Header.Add("Origin", "https://www.188euro.com")
	loginRequest.Header.Add("Referer", "https://www.188euro.com/zh-cn/")
	loginRequest.Header.Add("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36")

	resp, err := client.Do(loginRequest)
	if err != nil {
		fmt.Println("Error:", err.Error())
	}
	//if resp.StatusCode == 200 {
	data, _ := ioutil.ReadAll(resp.Body)
	resp.Body.Close()

	fmt.Println(resp.StatusCode)
	fmt.Println(string(data))

	cookies := resp.Cookies()

	request, _ := http.NewRequest("GET", home_url, nil)
	// request.Header.Set("Content-Type", "application/json;charset=UTF-8")
	// request.Header.Add("Accept", "application/json, text/plain, */*")
	// request.Header.Add("Host", "www.188euro.com")
	// request.Header.Add("Origin", "https://www.188euro.com")
	// request.Header.Add("Referer", "https://www.188euro.com/zh-cn/")
	// request.Header.Add("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36")

	//fmt.Println("cookies:", cookies)

	for _, v := range cookies {
		request.AddCookie(v)
		//fmt.Println("cookie:", v)
	}

	resp, _ = client.Do(request)
	data, _ = ioutil.ReadAll(resp.Body)
	resp.Body.Close()

	// for _, v := range client.Jar.Cookies {
	// 	//request.AddCookie(v)
	// 	fmt.Println("cookie:", v)
	// }
	//fmt.Println(client.Jar.)
	fmt.Println(string(data))
}

func main() {
	TestCookies()
}
