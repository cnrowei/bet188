// https project main.go
package main

import (
	"crypto/tls"
	//"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"net/http/cookiejar"
	"net/url"
)

type item struct {
	Id, List_type, Severity            int
	list_type_string, Name, Expiration string
	list_type_name, Severity_name      string
}
type resData struct {
	Total_count, Total_page, Expect_page, Num_per_page int
	Sort_by, Sort_order                                string
	List                                               []item
}

func check(err error) {
	if err != nil {
		panic(err)
	}
}
func main() {

	//登录URL，即提供账号登录的URL
	loginUrl := "https://www.188euro.com/service/userapi/login"
	loginData := url.Values{"Ud": {"conku188"}, "Pd": {"ishgishg9"}, "BlackBox": {""}}

	//目标URL，即需要访问的URL
	//targetUrl := "https://www.188euro.com/service/userapi/getBalance"
	targetUrl := "https://www.188euro.com/zh-cn/"

	var resp *http.Response
	var err error
	var data []byte

	tr := &http.Transport{
		TLSClientConfig:    &tls.Config{InsecureSkipVerify: true},
		DisableCompression: true,
	}
	client := &http.Client{Transport: tr}

	//启用cookie
	client.Jar, _ = cookiejar.New(nil)
	resp, err = client.PostForm(loginUrl, loginData)
	check(err)
	if data, err = ioutil.ReadAll(resp.Body); err == nil {
		fmt.Printf("%s\n", data)
	}

	resp, err = client.Get(targetUrl)
	check(err)

	if data, err = ioutil.ReadAll(resp.Body); err == nil {
		fmt.Printf("%s\n", data)
	}

	//解析返回的JSON数据
	// var message resData
	// err = json.Unmarshal(data, &message)
	// check(err)

	// fmt.Printf("%+v\n", message)
	// fmt.Printf("%v\t%v\n", message.Total_count, message.List[0].Name)

}
