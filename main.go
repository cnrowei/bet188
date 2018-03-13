package main

import (
	"github.com/gin-gonic/gin"
	//"github.com/gin-gonic/gin/binding"
	"net/http"
)

func main() {
	router := gin.Default()
	//模板路径定义
	router.LoadHTMLGlob("templates/*")

	//JSON 格式
	router.GET("/zh-cn/sports/lottery/competition/full-time-asian-handicap-and-over-under", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})

	router.POST("/service/healthapi/needrefresh", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"NeedRefreshPage": false,
			"redirectUrl":     nil,
		})
	})

	router.POST("/service/userapi/login", func(c *gin.Context) {
		//pd := c.MustGet("Pd") //binding.MultipartForm
		c.JSON(200, gin.H{
			"NeedRefreshPage": nil,
			"redirectUrl":     nil,
		})
	})

	router.GET("/service/msghubapi/getAnnouncement", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"NeedRefreshPage": false,
			"redirectUrl":     nil,
		})
	})

	//模板定义
	router.GET("/", func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.tmpl", gin.H{
			"title": "Main website",
		})
	})

	//参数定义
	router.GET("/hello/:name", func(c *gin.Context) {
		name := c.Params.ByName("name")
		//name1 := c.Set(key, value)

		message := "Hello " + name
		urls := c.Request.URL
		c.String(http.StatusOK, message)
		c.String(http.StatusOK, urls.RequestURI())
	})

	router.POST("/post/:id", func(c *gin.Context) {
		//var form LoginForm
		//c.BindWith(&form, binding.MultipartForm)
		//data := form.UserName + "---" + form.UserMsg
		//c.String(http.StatusOK, data)

		//插入数据DB
		// db, err := sql.Open("sqlite3", "./houhuiyang.db")
		// checkErr(err)
		// stmt, err := db.Prepare("INSERT INTO ubook(uname, ugbook, created) values(?, ?, ?)")
		// checkErr(err)
		// res, err := stmt.Exec(form.UserName, form.UserMsg, "2015-04-19")
		// checkErr(err)
		// id, err := res.LastInsertId() //id, err := res.LastInsertId()
		// checkErr(err)
		// fmt.Println(id)
		//c.JSON(http.StatusOK, gin.H{"InsertId": id, "UserName": form.UserName, "UserMsg": form.UserMsg})
		c.Redirect(http.StatusMovedPermanently, "http://123.57.253.46:8080/views")
	})

	//设置静态文件访问
	router.Static("/188", "./188")
	router.Static("/public", "./public")

	router.Run(":8090")
}
