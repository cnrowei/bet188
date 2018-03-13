package main

import (
    "net/http" 
    "net/http/cookiejar"
    "net/url"
    "log"
)

type MyTransport struct {
    Transport RoundTripper
}

func (t *MyTransport) transport() http.RoundTripper {
    if nil != t.Transport {
        return t.Transport
    }
    return http.DefaultTransport 
}

func (t *MyTransport) RoundTrip(req *http.Request) (*http.Response, error) {
    req.Header.Set("User-Agent", "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729)") 
    return t.transport().RoundTrip(req)
}

var c Client

type Client {
    http.Client
}

func NewClient() *Client {
    t := &MyTransport{}
    jar, err := cookiejar.New(nil)
    if nil != err {
        log.Fatal(err)
    }
    return &Client{ Transort: t, Jar: jar }
}

func main() {
    c = NewClient()
    // sUrl 是登录验证页面地址
    sUrl := "http://localhost/login"
    // v中是登录帐号、密码等内容
    v := url.Values{
        "username": "test",
        "password": "test",
    }
     req, err := http.NewRequest("POST", sUrl, v)
    // 执行登录操作
    res, err := c.Do(req)
    if nil != err {
        log.Fatal(err)
    }
}