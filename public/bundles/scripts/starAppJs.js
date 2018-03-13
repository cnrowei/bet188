//08190444
function isValidDate(n) {
    var t = n.split("-")
      , i = new Date(t[0],t[1] - 1,t[2]);
    return i.getFullYear() == t[0] && i.getMonth() + 1 == t[1] && i.getDate() == Number(t[2])
}
function getFromSearch(n) {
    return unescape(location.search.replace(new RegExp("^(?:.*[&\\?]" + escape(n).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$","i"), "$1"))
}
function getGuid() {
    function n() {
        return Math.floor((1 + Math.random()) * 65536).toString(16).substring(1)
    }
    return n() + n() + "-" + n() + "-" + n() + "-" + n() + "-" + n() + n() + n()
}
function contentsVersionNo() {
    return "?v=" + global.cv
}
function radomVersionNo() {
    return "?v=" + parseInt((new Date).valueOf() / 3e5)
}
function receiveMessage(n) {
    var t = n.data, u, f, i, e, r;
    switch (t.topic) {
    case "setHistory":
        u = {
            caller: "sbk"
        };
        url = t.data.url || "";
        Modernizr.history && history.replaceState(u, "", url);
        break;
    case "updateBalance":
        $(".bal-refresh").trigger("click");
        break;
    case "showDialog":
        f = angular.element("*[ng-app]").injector().get("dataService");
        i = angular.element("body").scope();
        i.msg = {
            title: t.data.title,
            content: t.data.message
        };
        f.dialog(i);
        break;
    case "resize":
        e = t.data.windowName;
        $("[name=" + e + "]").height(t.data.height);
        break;
    case "updateWinSize":
        r = t.data;
        window.resizeTo(r.width, r.height)
    }
}
function sendMessage(n, t, i) {
    n.postMessage && n.postMessage(t, i)
}
function signalRHub(n, t, i, r, u, f) {
    function e() {
        return
    }
    return e
}
var md = new MobileDetect(window.navigator.userAgent);
Date.prototype.addDays = function(n) {
    var t = new Date(this.valueOf());
    return t.setDate(t.getDate() + parseInt(n)),
    t
}
;
Date.prototype.timeDiff = function(n) {
    n = n || "hour";
    var t = this > new Date ? this - new Date : 0
      , i = {
        days: 0,
        hours: 0,
        mins: 0,
        secs: 0,
        totalms: t
    };
    switch (n) {
    case "period":
    case "days":
        i.days = Math.floor(t / 864e5);
        i.hours = new Date(t).getUTCHours();
        break;
    case "hour":
        i.hours = Math.floor(t / 36e5)
    }
    return i.mins = new Date(t).getUTCMinutes(),
    i.secs = new Date(t).getUTCSeconds(),
    i
}
;
Date.prototype.toLocalDate = function() {
    var t = this.valueOf()
      , n = new Date(t);
    return new Date(n.getFullYear(),n.getMonth(),n.getDate())
}
;
Date.prototype.getAges = function() {
    var n = new Date
      , r = n.getFullYear()
      , i = n.getMonth()
      , u = n.getDate()
      , t = r - this.getFullYear();
    return i < this.getMonth() ? t-- : i == this.getMonth() && u < this.getDate() && t--,
    t
}
;
String.prototype.format = function() {
    var n = arguments;
    return this.replace(/{(\d+)}/g, function(t, i) {
        return typeof n[i] != "undefined" ? n[i] : t
    })
}
;
window.addEventListener && window.addEventListener("message", receiveMessage, !1),
function() {
    "use strict";
    function u() {
        var n = $(window).scrollTop();
        Math.abs(t - n) <= i || global.prodName == "sports" || (n > t && n > r ? ($("nav.navbar").removeClass("nav-down").removeClass("nav-down-down").addClass("nav-up"),
        $("nav#navmenu-products-mobile").removeClass("show"),
        $("body").removeClass("show-navmenu-products-mobile"),
        $(".static-searchbox").removeClass("nav-down").addClass("nav-up")) : n + $(window).height() < $(document).height() && ($("nav.navbar").removeClass("nav-up").removeClass("nav-down-down").addClass("nav-down"),
        $(".static-searchbox").removeClass("nav-up").addClass("nav-down")),
        t = n)
    }
    var n, t = 0, i = 5, r = $("header").outerHeight();
    $(window).scroll(function() {
        n = !0
    });
    setInterval(function() {
        n && (u(),
        n = !1)
    }, 250);
    $("body").on("mousedown", ".icon-eye", function() {
        $(this).closest(".input-group").find('[type="password"]').attr("type", "text")
    }).on("mouseup mouseleave", ".icon-eye", function() {
        $(this).closest(".input-group").find('[type="text"]').attr("type", "password")
    });
    $("body").on("click", "#scrollScreenCapsLeft", function() {
        var n = $(this);
        n.parent().find("ul").animate({
            left: "250px"
        }, {
            complete: function() {
                n.parent().find("ul").prepend(n.parent().find("li").eq(n.parent().find("li").length - 1));
                n.parent().find("ul").css("left", "auto")
            }
        })
    }).on("click", "#scrollScreenCapsRight", function() {
        var n = $(this);
        n.parent().find("ul").animate({
            right: "250px",
            speed: 1e3
        }, {
            complete: function() {
                n.parent().find("ul").append(n.parent().find("li").eq(0));
                n.parent().find("ul").css("right", "auto")
            }
        })
    })
}(),
function() {
    "use strict";
    function s() {
        return function(n) {
            return Math.abs(n || 0)
        }
    }
    function h() {
        var n = {
            weekdayNames: {
                Mon: "txtComMonday",
                Tue: "txtComTuesday",
                Wed: "txtComWednesday",
                Thu: "txtComThursday",
                Fri: "txtComFriday",
                Sat: "txtComSaturday",
                Sun: "txtComSunday"
            },
            monthNames: ["txtComStJan", "txtComStFeb", "txtComStMar", "txtComStApr", "txtComStMay", "txtComStJun", "txtComStJul", "txtComStAug", "txtComStSep", "txtComStOct", "txtComStNov", "txtComStDec"],
            prodNames: {
                "1103": "navEurocupRoot",
                "1100": "navSbkRoot",
                "2100": "navRacingRoot",
                "3100": "navESportsRoot",
                "4100": "navCsnRoot",
                "5100": "navLiveCsnRoot",
                "8100": "navLottoRoot",
                "9100": "navBingoRoot",
                "6100": "navPokerRoot",
                "7100": "navFinsRoot",
                "10100": "navPromoRoot"
            }
        };
        return function(t, i) {
            var u = parseInt(t), r;
            switch (u) {
            case NaN:
                r = t;
                break;
            default:
                r = n[i][t]
            }
            return r
        }
    }
    function c() {
        return function(n, t, i, r) {
            r = r || !1;
            var u = [];
            return angular.forEach(n, function(n) {
                if (!angular.isUndefined(n[t])) {
                    var f = angular.isArray(n[t]) ? n[t] : n[t].split(",").map(function(n) {
                        return n
                    })
                      , e = f.indexOf("*") != -1 || f.indexOf(i) != -1;
                    (r && e || !r && !e) && u.push(n)
                }
            }),
            u
        }
    }
    function t(n, t) {
        var i = {
            "en-gb": "{0} dd, yyyy",
            "id-id": "dd {0} yyyy",
            "km-kh": "dd {0} yyyy",
            "ja-jp": "yyyy年 {0}dd日",
            "ko-kr": "yyyy {0} dd",
            "th-th": "dd {0} yyyy",
            "vi-vn": "dd {0} yyyy",
            "zh-cn": "yyyy年 {0}dd日",
            "pt-br": "dd {0} yyyy"
        };
        return function(r, u, f) {
            r = r || "";
            u = u || uv.geod.timezone;
            var e = n("date")(r, i[global.lan] + (f ? " HH:mm" : ""), u)
              , o = n("quicki18n")(new Date(r).getMonth(), "monthNames")
              , s = t.instant(o);
            return e.replace("{0}", s)
        }
    }
    function i(n, t) {
        return function(i, r) {
            i = i || "";
            r = r || uv.geod.timezone;
            var u = n("date")(i, "EEE", r)
              , f = n("quicki18n")(u, "weekdayNames");
            return t.instant(f)
        }
    }
    function n(n) {
        return function(t, i) {
            var u = "", f, r, e;
            t = t || [];
            i = i || "";
            f = new RegExp(global.domains.oldContents,"ig");
            try {
                r = i == "" ? t : n("filter")(t, {
                    key: i
                }, !0)[0];
                e = n("filter")(r.lanVals, {
                    LangCode: global.lan
                }, !0)[0] || n("filter")(r.lanVals, {
                    LangCode: "en-gb"
                }, !0)[0] || r.lanVals[0];
                u = e.Value
            } catch (o) {}
            return u.replace(f, global.domains.content)
        }
    }
    function r(n) {
        return function(t, i) {
            var r = "", u;
            t = t || [];
            i = i || "";
            try {
                u = n("filter")(t, {
                    code: global.lan
                }, !0)[0] || n("filter")(t, {
                    code: "en-gb"
                }, !0)[0] || {};
                r = u[i]
            } catch (f) {}
            return r
        }
    }
    function l() {
        return function(n) {
            var i = [], r, u, t;
            if (n.length < 1)
                return i;
            for (r = n.length === 2 ? parseInt(n[1]) : parseInt(n[0]),
            u = n.length === 2 ? parseInt(n[0]) : 1,
            t = u; t <= r; t++)
                i.push(t);
            return i
        }
    }
    function a() {
        return function(n, t, i, r, u) {
            n = n || [];
            u = u || !1;
            t = t || 0;
            i = i || 0;
            r = r || 1;
            var f = Math.floor((t - i) / r)
              , e = n.slice(0, f - 1)
              , o = n.slice(f - 1, n.length);
            return u ? o : e
        }
    }
    function u(n) {
        return function(t) {
            return n.trustAsResourceUrl(t)
        }
    }
    function v() {
        return function(n, t) {
            var i = Math.pow(10, t)
              , r = n >= 0 ? 1 : -1;
            return r * Math.floor(r * n * i) / i
        }
    }
    function f(n, t, i, r, u, f) {
        return {
            paramsMethod: ["GET", "JSONP"],
            fetch: function(r, e, o, s, h) {
                var c = {}, l;
                s = s || 30;
                h = h || !0;
                angular.copy(o, c);
                c = c || {};
                l = c.guId || "";
                r == "JSONP" && (c.callback = "JSON_CALLBACK");
                var y = this.paramsMethod.indexOf(r) == -1 ? {
                    method: r,
                    url: e,
                    data: c
                } : {
                    method: r,
                    url: e,
                    params: c
                }, p = n(y), a = t.defer(), w = this.dialog, v;
                return l != "" && (i.ajaxStackObj[l] = !0,
                delete c.guId,
                v = u(function() {
                    if (i.ajaxStackObj[l] && (a.resolve(),
                    h)) {
                        i.msg = {
                            title: f.instant("txtCommonHelp"),
                            content: f.instant("msgCommonSystemError")
                        };
                        var n = w(i);
                        n.result.then(function() {
                            location.reload()
                        })
                    }
                }, s * 1e3)),
                p.success(function(n) {
                    a.resolve(n);
                    l && (delete i.ajaxStackObj[l],
                    u.cancel(v))
                }).error(function(n) {
                    a.reject(n);
                    l && (delete i.ajaxStackObj[l],
                    u.cancel(v))
                }),
                a.promise
            },
            dialog: function(n, t) {
                t = t || {
                    templateUrl: "/public/resource/templates/modal/messageAlert.html",
                    controller: "modalInstanceCtrl"
                };
                return r.open({
                    scope: n,
                    size: t.size,
                    animation: t.animation,
                    templateUrl: t.templateUrl,
                    controller: t.controller,
                    windowClass: t.windowClass || "modal-align-mid",
                    backdrop: angular.isDefined(t.backdrop) ? t.backdrop : !0,
                    resolve: {
                        items: function() {
                            return t.items
                        }
                    }
                })
            },
            mi: function(n, t) {
                function r() {
                    n.fade = !0
                }
                var t = t || 6;
                i.miList.push(n);
                u(r, t * 1e3)
            }
        }
    }
    function y() {
        return {
            launch: function(n) {
                var t = 600, i = 600, r, u;
                switch (n.game) {
                case "bingo":
                    t = 750;
                    i = 650;
                    break;
                case "casino":
                    t = 1e3;
                    i = 660;
                    break;
                case "lotto":
                    t = 1220;
                    i = 880;
                    break;
                case "poker":
                    t = 1e3;
                    i = 695;
                    break;
                case "live-csn":
                    t = 1e3;
                    i = 720
                }
                r = (window.innerWidth - t) / 2;
                u = (window.innerHeight - i) / 2;
                window.open(n.url, n.windowName, "width=" + t + ",height=" + i + ",left=" + r + ",top=" + u + ",resizable=1")
            }
        }
    }
    function e(n, t, i, r, u, f, e, o, s) {
        function c() {
            if (!uv.sessionD.login) {
                uv.geod.utcoffset = (new Date).getTimezoneOffset();
                var n = r("date")(Math.abs(uv.geod.utcoffset) * 1e3, "mm:ss", "+00:00");
                uv.geod.timezone = uv.geod.utcoffset > 0 ? "-" + n : "+" + n
            }
        }
        function l() {
            var u = r("attrsFilter")(global.prods, "allows", uv.pd.r, !0), f, t, e, o, h;
            u = r("filter")(u, function(n) {
                return uv.sessionD.disableProds.length == 0 || uv.sessionD.disableProds.indexOf(n.index) == -1
            }, !0);
            n.restRegions = r("filter")(global.regs, {
                code: "!" + uv.pd.r
            });
            n.currRegion = r("filter")(global.regs, {
                code: uv.pd.r
            });
            n.availableProds = r("filter")(u, function(n) {
                return n.regexPath != null
            });
            n.availableRules = r("filter")(u, function(n) {
                return n.regexPath != null && n.regexPath != ""
            });
            n.availableNews = r("filter")(u, function(n) {
                return n.isNews == !0
            });
            f = r("filter")(global.emails || [], function(n) {
                return n.accountCategory == "CS"
            });
            f.length == 1 && (n.conditEmails = r("filter")(f[0].group, function(n) {
                return n.supportRegs.indexOf(uv.pd.r) != -1 && n.supportLans.indexOf(global.lan) != -1
            }) || "");
            t = location.pathname.split("/").length > 2 ? location.pathname.split("/")[2].toLowerCase() : "home";
            t = new RegExp("/|asia|multiprogramme|programme/g").test(t) ? "sports" : t;
            global.prodName = r("filter")(n.availableRules, {
                name: t
            }, !0).length == 1 ? t : "home";
            n.cooperativeSet.sponsor = r("attrsFilter")(global.cooperativeSet.sponsor.partners, "allows", uv.geod.country, !0);
            global.prodName == "sports" && (uv.pd.sv = location.pathname.indexOf(global.lan + "/asia") != 1 ? 1 : 2);
            i.putObject("prefer", uv.pd, {
                path: "/",
                expires: (new Date).addDays(30)
            });
            uv.sessionD.mberType <= 1 && (n.cooperativeSet.paymentMethod = r("attrsFilter")(global.cooperativeSet.paymentMethod.partners, "allows", uv.pd.r, !0),
            n.cooperativeSet.socialMedia = r("attrsFilter")(global.cooperativeSet.socialMedia.partners, "allows", uv.pd.r, !0),
            angular.forEach(n.cooperativeSet.socialMedia, function(n) {
                var t = r("filter")(s[n.name], function(n) {
                    return n.allow.indexOf(uv.pd.r) != -1 || n.allow == "default"
                }, !0);
                s[n.name] && t.length > 0 && (n.partnerUrl = n.partnerUrl + t[0].account)
            }));
            e = r("attrsFilter")(global.cooperativeSet.responsibleGaming.licenses, "prods", global.prodName, !0);
            n.cooperativeSet.responsibleGaming = r("attrsFilter")(e, "allows", uv.pd.r, !0);
            o = r("attrsFilter")(global.cooperativeSet.securityTrust.licenses, "prods", global.prodName, !0);
            n.cooperativeSet.securityTrust = r("attrsFilter")(o, "allows", uv.pd.r, !0);
            h = r("attrsFilter")(global.cooperativeSet.issueLicenses.licenses, "prods", global.prodName, !0);
            n.cooperativeSet.issueLicenses = r("attrsFilter")(h, "allows", uv.pd.r, !0);
            angular.forEach(global.generals.sports.feeds.Schedule, function(n) {
                var t = {
                    home: {},
                    away: {}
                };
                t.home = r("filter")(global.generals.sports.feeds.DailyBoxScore || [], {
                    fv1: n.fv1,
                    fv2: n.fv3
                }, !0)[0];
                t.away = r("filter")(global.generals.sports.feeds.DailyBoxScore || [], {
                    fv1: n.fv1,
                    fv2: n.fv4
                }, !0)[0];
                n.boxscore = t
            })
        }
        function a() {
            var r = !uv.sessionD.login && uv.sessionD.loginId != "", t = getFromSearch("_a"), i;
            if (uv.sessionD.loginId && t)
                switch (t) {
                case "0001":
                    h = {
                        templateUrl: "/public/resource/templates/modal/user/changePassword.html",
                        controller: "userModalChangePassCtrl"
                    };
                    i = e.dialog(n, h);
                    i.result.then(function(t) {
                        n.msg = t;
                        var i = e.fetch("POST", "/service/userapi/logout");
                        i.then(function() {
                            localStorage.removeItem("recommendDomain");
                            var t = e.dialog(n);
                            t.result.then(function() {
                                location.href = location.pathname
                            }, function() {
                                location.href = location.pathname
                            })
                        })
                    });
                    break;
                default:
                    f(v, 1e3)
                }
        }
        function v() {
            var i = getFromSearch("_a"), t;
            n.msg = {
                title: u.instant("txtBtnLogin"),
                content: u.instant("msgLoginError" + i)
            };
            e.fetch("POST", "/service/userapi/logout");
            t = e.fetch("POST", "/service/userapi/logout");
            t.then(function() {
                localStorage.removeItem("recommendDomain");
                var t = e.dialog(n);
                t.result.then(function() {
                    location.href = location.pathname
                }, function() {
                    location.href = location.pathname
                })
            })
        }
        function y() {
            var t = {
                isLogin: n.client.sessionD.login,
                CurrentPage: window.location.pathname,
                IsActive: $("body").hasClass("visible")
            }
              , i = e.fetch("POST", "/service/healthapi/needrefresh", t);
            i.then(function(n) {
                n.NeedRefreshPage && (window.location.href = "/" + global.lan)
            })
        }
        function p(t, r) {
            var u = {
                r: t || ""
            }
              , f = e.fetch("POST", "/service/userapi/setpreferences", u);
            f.then(function(t) {
                n.client.pd = t;
                i.putObject("prefer", uv.pd, {
                    path: "/",
                    expires: (new Date).addDays(30)
                });
                window.location = r
            });
            event.stopPropagation();
            event.preventDefault()
        }
        function w(n) {
            return r("translate")(n.value).toString()
        }
        function b() {
            return "/" + global.lan + "/" + (uv.pd.sv == 1 ? "sports" : "asia")
        }
        n.global = global;
        n.client = uv;
        n.ajaxStackObj = {
            guIdSet: {}
        };
        n.availableProds = [];
        n.miList = [];
        n.gameBackground = "";
        n.cooperativeSet = {
            sponsor: [],
            paymentMethod: [],
            responsibleGaming: [],
            socialMedia: [],
            issueLicenses: [],
            securityTrust: []
        };
        n.msgCounter = {
            notifi: 0,
            inbox: 0
        };
        n.firstLaunch = global.firstLaunch === "True";
        n.switchRegion = p;
        n.translated = w;
        n.getSportsView = b;
        n.msg = {};
        var h = {}
          , k = t(y, 3e4);
        c();
        a();
        l()
    }
    function o(n, t) {
        function i() {
            t.close()
        }
        function r() {
            t.dismiss("cancel")
        }
        n.close = r;
        n.confirm = i
    }
    angular.module("starApp", ["pascalprecht.translate", "ngCookies", "ui.bootstrap", "ngSanitize", "flow", "infinite-scroll", "angular.filter", "ngAnimate"]).factory("gameService", y).factory("dataService", f).constant("socialMedia", {
        youtube: [{
            allow: "Brazil",
            account: "188BETBRASIL"
        }, {
            allow: "UK,ROE",
            account: "188BET"
        }, {
            allow: "Vietnam",
            account: "c/188BETVietNamofficial"
        }, {
            allow: "default",
            account: "188BETASIA"
        }],
        twitter: [{
            allow: "Brazil",
            account: "188betbrasil"
        }, {
            allow: "Indonesia",
            account: "188BETINDONESIA"
        }, {
            allow: "default",
            account: "188BET"
        }],
        facebook: [{
            allow: "Japan,Korea,Malaysia,ROA,ROW",
            account: "ASIA188BET"
        }, {
            allow: "Brazil",
            account: "188BETBRASIL"
        }, {
            allow: "UK,ROE",
            account: "188BETUK"
        }, {
            allow: "Cambodia",
            account: "188BETCAMBODIA"
        }, {
            allow: "Indonesia",
            account: "188BETINDONESIA"
        }, {
            allow: "Thailand",
            account: "188BETTHAILAND"
        }, {
            allow: "Vietnam",
            account: "188BETVIETNAM"
        }, {
            allow: "default",
            account: "188BET"
        }]
    }).config(["$translateProvider", "$sceDelegateProvider", "$provide", function(n, t, i) {
        i.decorator("$browser", ["$delegate", function(n) {
            return n.onUrlChange = function() {}
            ,
            n.url = function() {
                return ""
            }
            ,
            n
        }
        ]);
        t.resourceUrlWhitelist(["self", global.domains.content + "**"]);
        n.useStaticFilesLoader({
            prefix: global.domains.cdn + "/public/resource/i18n/",
            suffix: ".json?rv=" + global.rv
        });
        n.preferredLanguage(global.lan);
        n.useSanitizeValueStrategy("escaped")
    }
    ]).run(e).filter("attrsFilter", c).filter("getResource", n).filter("getLocalizations", r).filter("quicki18n", h).filter("forloopRange", l).filter("navCollapse", a).filter("localizedDate", t).filter("localizedDay", i).filter("abs", s).filter("trustUrl", u).filter("floorNumber", v).controller("modalInstanceCtrl", o);
    angular.module("infinite-scroll").value("THROTTLE_MILLISECONDS", 3e4);
    n.$inject = ["$filter", "$sce"];
    r.$inject = ["$filter"];
    n.$inject = ["$filter", "$sce"];
    t.$inject = ["$filter", "$translate"];
    i.$inject = ["$filter", "$translate"];
    u.$inject = ["$sce"];
    f.$inject = ["$http", "$q", "$rootScope", "$uibModal", "$timeout", "$translate"];
    e.$inject = ["$rootScope", "$interval", "$cookies", "$filter", "$translate", "$timeout", "dataService", "signalRHub", "socialMedia"];
    o.$inject = ["$scope", "$uibModalInstance"]
}(),
function() {
    "use strict";
    function n(n, t, i, r, u) {
        function f(n) {
            var t = window.location.pathname.replace(global.lan, n);
            window.location.href = t + window.location.search
        }
        function e(n) {
            var i = t("filter")(global.prods, {
                index: n
            }, !0)[0]
              , r = i.allows.indexOf("*") != -1 || i.allows.indexOf(uv.pd.r) != -1
              , u = i.forbiddens.indexOf(uv.geod.cc) != -1;
            return r && !u
        }
        function o(n) {
            return window.location.pathname.indexOf("/" + global.lan + "/" + n) == 0 || global.prodName == n
        }
        function s() {
            var t = location.pathname.split("/")
              , i = t.length > 2 ? t[2] : "home"
              , n = "/" + global.lan + "/";
            switch (i) {
            case "sports":
            case "financials":
            case "lotto":
            case "racing":
                n += "my-account/statement/betting-history/" + i + "/settled-bets";
                break;
            case "casino":
                n += "my-account/statement/betting-history/casino";
                break;
            case "live":
                n += "my-account/statement/betting-history/live";
                break;
            default:
                n += "my-account/statement/transaction-history/summary"
            }
            return n
        }
        function h() {
            u.getMsgCounter()
        }
        n.switchLang = f;
        n.indexMenu = o;
        n.checkAvailable = e;
        n.statementUrl = s();
        h();
        n.closeDropDown = function() {
            $('[data-toggle="dropdown"]').parent().removeClass("open")
        }
    }
    function t(n) {
        function t() {
            n.showhelpMenu = !n.showhelpMenu
        }
        n.toggleMenu = t;
        n.showhelpMenu = !1
    }
    function f(n) {
        function t() {
            location.pathname.split("/").forEach(function(t) {
                n.openStatus[t] = !0
            })
        }
        function i(n) {
            return location.pathname.indexOf(n) !== -1
        }
        n.openStatus = {};
        n.isExpanded = i;
        t()
    }
    function i(n) {
        function i() {
            var i = location.pathname.split("/"), r;
            n.widget.selectedCatgory = i.length > 3 ? i[3] : "sports";
            r = typeof errorContentPath != "undefined" ? "/" + global.lan + "/" + errorContentPath : location.pathname;
            n.contentUrl = global.domains.content + t + r + ".html" + contentsVersionNo()
        }
        n.onInit = i;
        n.contentUrl = "";
        var t = uv.pd.r != "UK" ? "/MB" : "/UKMB";
        n.sbkbettingRulesUrl = global.domains.content + t + "/" + global.lan + "/rules/sports/bettingRules.html";
        n.widget = {
            selectedCatgory: ""
        };
        i();
        $("head #webteamstyle").prop("href", global.domains.content + "/components/webteam/webteam.css" + contentsVersionNo())
    }
    function r(n, t, i) {
        function c() {
            var t, r, c, l, a;
            if (u != "") {
                t = e.length == 1 ? e[0].status : 0;
                switch (t) {
                case 0:
                    if (u == 1100 && s.indexOf(f[3]) == -1)
                        return;
                    r = {
                        productIndex: u * 1,
                        languageId: global.lanId * 1,
                        countryId: o == 0 ? 204 : o,
                        date: h
                    };
                    c = i.fetch("JSONP", global.domains.piper, r);
                    c.then(function(t) {
                        n.content = t.content
                    });
                    break;
                default:
                    l = global.domains.content + "/MB" + location.pathname + ".html";
                    a = i.fetch("GET", l);
                    a.then(function(t) {
                        n.module.effectiveTo = e[0].effectiveTo;
                        n.content = t
                    })
                }
            }
        }
        n.onInit = c;
        n.module = {
            effectiveTo: 0
        };
        var f = location.pathname.split("/")
          , s = ["getbanner", "getfooter"]
          , r = f[2] != "" ? f[2] : "home";
        r = global.prodName == "sports" ? global.prodName : r;
        var u = r == "demo" ? getFromSearch("productIndex") : global.generals[r] ? global.generals[r].Id : 100
          , o = r == "demo" ? getFromSearch("countryId") * 1 : uv.pd.cid * 1
          , h = r == "demo" ? getFromSearch("date") : ""
          , e = t("filter")(global.modules, {
            id: u
        }, !0)
    }
    function u(n, t) {
        var i = "https://www.youtube.com/embed/";
        i += n.videoId;
        i += "?autoplay=1&autohide=1&modestbranding=1&showinfo=0&controls=0";
        n.videoUrl = t.trustAsResourceUrl(i)
    }
    angular.module("starApp").controller("headerCtrl", n).controller("youtubeCtrl", u).controller("assistToolsCtrl", t).controller("staticContentCtrl", i).controller("piperSubcriberCtrl", r).directive("resizingFrame", ["$window", function(n) {
        return {
            restrict: "A",
            link: function(t, i, r) {
                function e() {
                    if (u)
                        $(i).height(n.innerHeight - u);
                    else if (f) {
                        var t = $(i).height();
                        $(i).width(t * f * 1)
                    }
                }
                var u = r.restHeight
                  , f = r.resizingRatio;
                e();
                angular.element(n).bind("resize", e)
            }
        }
    }
    ]).directive("msHeader", ["$window", "$timeout", function(n, t) {
        return {
            restrict: "A",
            controller: "headerCtrl",
            templateUrl: "/public/resource/templates/common/header.tpl.html",
            link: function(i, r) {
                function u() {
                    var u = $(r).find("#nav-wrapper").width() - 10
                      , f = $(r).find("#logo-188bet").width() + $(r).find("#hdr-panel").width() + 160
                      , n = u - f
                      , t = $(r).find("#menu-products >li");
                    i.maxIndex = 9;
                    angular.forEach(t, function(r, u) {
                        var f = $(r).width();
                        n > 0 && (n = n < f || t.length == u + 1 ? 0 : n - f,
                        i.maxIndex = n == 0 ? u : i.maxIndex)
                    })
                }
                i.maxIndex = 9;
                t(u, 1e3);
                angular.element(n).bind("resize", u)
            }
        }
    }
    , ]).directive("msLobbyheader", [function() {
        return {
            restrict: "A",
            controller: "headerCtrl",
            templateUrl: "/public/resource/templates/common/lobbyheader.tpl.html"
        }
    }
    , ]).directive("msFooter", ["$window", "$timeout", function(n, t) {
        return {
            restrict: "A",
            templateUrl: "/public/resource/templates/common/footer.tpl.html",
            link: function() {
                function i() {
                    var n = $("body").height();
                    sendMessage(parent, {
                        topic: "setBannerHeight",
                        data: {
                            t: "b",
                            h: n
                        }
                    }, global.domains.sbkframeInDomain)
                }
                global.prodName == "sports" && (angular.element(n).bind("resize", function() {
                    t(i, 1e3)
                }),
                t(i, 1e3))
            }
        }
    }
    , ]).directive("msLobbyfooter", [function() {
        return {
            restrict: "A",
            templateUrl: "/public/resource/templates/common/lobbyfooter.tpl.html"
        }
    }
    , ]).directive("starClock", ["dateFilter", "$rootScope", function(n, t) {
        return function(i, r, u) {
            function e() {
                r.text(n(new Date, f, t.client.geod.timezone.replace(":", "")) + " (GMT" + t.client.geod.timezone + ")")
            }
            var f, o;
            i.$watch(u.format, function(n) {
                f = n;
                e()
            });
            o = window.setInterval(e, 1e3)
        }
    }
    , ]).directive("countdownTimer", ["$interval", function(n) {
        return {
            restrict: "A",
            scope: {
                countdownTimer: "="
            },
            transclude: !0,
            link: function(t, i, r, u, f) {
                function o() {
                    var n = t.countdownTimer;
                    angular.isUndefined(n) || (t.clock = new Date(n * 1).timeDiff(e))
                }
                var e, s;
                e = r.maxUnit || "hours";
                t.$watch("countdownTimer", o);
                o();
                f(t, function(n) {
                    i.append(n)
                });
                e != "days" && (s = n(o, 1e3))
            }
        }
    }
    , ]).directive("userPanel", [function() {
        return {
            restrict: "A",
            controller: "userPanelCtrl"
        }
    }
    , ]).directive("announcement", ["msgService", "$timeout", function(n, t) {
        return {
            restrict: "A",
            templateUrl: "/public/resource/templates/common/announcement.tpl.html",
            link: function(i, r) {
                function f() {
                    t(function() {
                        function f() {
                            i.runConfig.isRun && (u + i.runConfig.position <= 0 && (i.runConfig.position = n),
                            i.runConfig.position -= .4,
                            $("#announceHeaderBar").css("margin-left", i.runConfig.position))
                        }
                        var t = $(r).find(".marquee-list")
                          , u = t.outerWidth()
                          , n = $(r).find(".media-body").outerWidth();
                        i.runConfig.position = n;
                        window.setInterval(f, 10)
                    })
                }
                i.runConfig = {
                    isRun: !0
                };
                i.topAnnouncement = [];
                var u = n.getAnnouncement();
                u.then(function(n) {
                    i.topAnnouncement = n.Items.filter(function(n) {
                        return n.sender.indexOf("pos=both") !== -1 || n.sender.indexOf("pos=public") !== -1
                    });
                    f()
                })
            }
        }
    }
    , ]).directive("userRegistration", [function() {
        return {
            restrict: "A",
            controller: "userRegistrationCtrl",
            templateUrl: "/public/resource/templates/registration/registration.tpl.html"
        }
    }
    , ]).directive("assistTools", [function() {
        return {
            restrict: "A",
            controller: "assistToolsCtrl",
            templateUrl: "/public/resource/templates/bars/assistTools.tpl.html",
            link: function(n, t) {
                n.showhelpMenu = !1;
                t.bind("click", function(n) {
                    n.stopPropagation()
                });
                angular.element(document.body).on("click", function() {
                    n.$apply(function() {
                        n.showhelpMenu && (n.showhelpMenu = !n.showhelpMenu)
                    })
                })
            }
        }
    }
    , ]).directive("myAccountSidebar", [function() {
        return {
            restrict: "E",
            link: f,
            templateUrl: "/public/resource/templates/bars/static-leftbar.tpl.html"
        }
    }
    , ]).directive("staticContent", [function() {
        return {
            restrict: "A",
            controller: "staticContentCtrl"
        }
    }
    , ]).directive("rulesContent", ["$window", function(n) {
        return {
            restrict: "A",
            templateUrl: "/public/resource/templates/help/rules.tpl.html",
            link: function(t, i) {
                t.categoryWidth = $(i).width();
                angular.element(n).bind("resize", function() {
                    t.categoryWidth = $(i).width()
                })
            }
        }
    }
    , ]).directive("youtube", ["dataService", function(n) {
        return {
            restrict: "A",
            link: function(t, i) {
                i.bind("click", function() {
                    t.videoId = $(i).attr("youtube");
                    n.dialog(t, {
                        size: "video",
                        windowClass: "center-modal",
                        templateUrl: "/public/resource/templates/modal/youtubeplayer.tpl.html",
                        controller: "youtubeCtrl"
                    })
                })
            }
        }
    }
    , ]).directive("qrcode", ["dataService", function(n) {
        return {
            restrict: "A",
            link: function(t, i) {
                i.bind("click", function() {
                    t.partnerName = $(i).attr("qrcode");
                    n.dialog(t, {
                        size: "qrcode",
                        windowClass: "center-modal",
                        templateUrl: "/public/resource/templates/modal/qrcode.tpl.html",
                        controller: "modalInstanceCtrl"
                    })
                })
            }
        }
    }
    , ]).directive("sportRulesSelection", ["$location", function() {
        return {
            restrict: "A",
            link: function(n, t) {
                var i = window.location.pathname.split("/");
                n.selectedSport = i.length > 4 ? i[2] + "/" + i[3] + "/" + i[4] : "";
                n.selectedSport !== "" && t.find("span.var-txt").text(t.find("a[ng-href*='" + n.selectedSport + "']").text())
            }
        }
    }
    , ]).directive("socialMedia", [function() {
        return {
            restrict: "A",
            templateUrl: "/public/resource/templates/common/socialmedia.tpl.html"
        }
    }
    , ]).directive("microInteraction", [function() {
        return {
            restrict: "A",
            replace: !0,
            templateUrl: "/public/resource/templates/common/microInteraction.tpl.html"
        }
    }
    , ]).directive("carousel188", ["$compile", function(n) {
        return {
            restrict: "A",
            link: function(t, i) {
                var r, u;
                t.items = i.find(".carousel-inner .item");
                $(t.items[0]).addClass("active");
                r = "<div class='container pos-relative carousel-navigation hidden-xs'><ol class='carousel-indicators'>";
                r += "<li class='' ng-if='items.length > 1' data-slide-to='{{$index}}' data-target='#carousel-example-generic' ng-repeat='item in items '><\/li>";
                r += "<\/ol><\/div>";
                u = n(angular.element(r))(t);
                i.find("div.carousel-inner").append(u)
            }
        }
    }
    , ]).directive("piperSub", ["$compile", function(n) {
        return {
            restrict: "A",
            controller: "piperSubcriberCtrl",
            link: function(t, i, r) {
                var f = r.piperSub
                  , u = ""
                  , e = new RegExp(global.domains.oldContents,"ig");
                t.$watch(r.dynamicHtml, function(r) {
                    var s, o;
                    r && (r = r.replace(e, global.domains.content),
                    f ? (u = $(r).filter("." + f),
                    o = f == "sbk-center" ? "t" : "r",
                    setTimeout(function() {
                        var n = $("body").height();
                        sendMessage(parent, {
                            topic: "setBannerHeight",
                            data: {
                                t: o,
                                h: n > 15 ? n : 0
                            }
                        }, global.domains.sbkframeInDomain);
                        console.log("trigger setBannerHeight" + o + n)
                    }, 1e3)) : (s = $(r),
                    u = "",
                    angular.forEach(s, function(n) {
                        var t = $(n).find("#carousel-example-generic").length > 0;
                        angular.isUndefined($(n).prop("outerHTML")) || (u += t ? $(n).prop("outerHTML") : "<div>" + $(n).prop("outerHTML") + "<\/div>")
                    })),
                    i.html(u),
                    n(i.contents())(t),
                    $("head #webteamstyle").prop("href", global.domains.content + "/components/webteam/webteam.css" + contentsVersionNo()))
                })
            }
        }
    }
    , ]).directive("numericOnly", function() {
        return {
            require: "ngModel",
            link: function(n, t, i, r) {
                r.$parsers.push(function(n) {
                    var t = n ? n.replace(/[^\d.-]/g, "") : null ;
                    return t != n && (r.$setViewValue(t),
                    r.$render()),
                    t
                });
                r.$formatters.push(function(n) {
                    return n == -1 ? "" : n
                })
            }
        }
    }).directive("bindHtmlCompile", ["$compile", function(n) {
        return {
            restrict: "A",
            link: function(t, i, r) {
                t.$watch(function() {
                    return t.$eval(r.bindHtmlCompile)
                }, function(r) {
                    i.html(r);
                    n(i.contents())(t)
                })
            }
        }
    }
    ]).directive("scrolly", function() {
        return {
            restrict: "A",
            link: function(n, t, i) {
                var r = t[0];
                t.bind("scroll", function() {
                    r.scrollTop + r.offsetHeight >= r.scrollHeight && n.$apply(i.scrolly)
                })
            }
        }
    }).directive("noDisrupt", ["$window", function(n) {
        return {
            restrict: "A",
            link: function(t, i, r) {
                var u = ["/my-account/banking/deposit", "/my-account/banking/withdraw"].some(function(n) {
                    return location.pathname.indexOf(n) !== -1
                });
                u || i.click(function(t) {
                    var i = r.href
                      , u = r.windowName;
                    n.open(i, u).focus();
                    t.preventDefault()
                })
            }
        }
    }
    ]).directive("fixInside", function() {
        return {
            link: function(n, t) {
                var i = t[0].getBoundingClientRect()
                  , u = i.left < 0
                  , r = i.right - $(window).width()
                  , f = r > 0;
                u && t.css("left", "-=" + i.left);
                f && t.css("left", "-=" + r)
            }
        }
    }).directive("optionStyle", function() {
        return {
            restrict: "A",
            priority: 1e4,
            link: function(n, t, i) {
                for (var f = n[i.optionStyle], u = t.find("option"), r = 0; r < u.length; r++)
                    angular.element(u[r]).attr("color", f[r].Code)
            }
        }
    }).directive("windowOpen", ["$window", function(n) {
        return {
            restrict: "A",
            link: function(t, i, r) {
                var u = r.windowOpen.toLowerCase(), f, e;
                switch (u) {
                case "livechat":
                    r.$set("href", "{0}/{1}/live-chat?region={2}".format(global.domains.livechat, global.lan, uv.pd.r));
                    r.$set("windowStyle", "width=800, height=600");
                    break;
                case "statement":
                    angular.isUndefined(r.ngHref) && angular.isUndefined(r.href) && r.$set("href", "/{1}/my-account/statement/transaction-history/summary".format(global.lan));
                    r.$set("windowStyle", "width=1050px,height=700px,scrollbars=1");
                    break;
                case "luckywheel":
                    r.$set("windowStyle", "width=480,height=768,top=5,left=" + (window.top.outerWidth / 2 - 240))
                }
                i.click(function() {
                    return f = r.href,
                    e = r.windowStyle,
                    n.open(f, u, e).focus(),
                    !1
                })
            }
        }
    }
    ]).directive("maintenanceChecker", ["$filter", "$compile", "dataService", function(n, t, i) {
        return {
            restrict: "A",
            link: function(r, u, f) {
                var h = parseInt(f.pageKey), e, o, s;
                r.module = n("filter")(global.modules, {
                    id: h
                }, !0);
                e = r.module.length == 1 ? r.module[0].status : 0;
                e && (o = global.domains.content + "/MB" + location.pathname + ".html",
                s = i.fetch("GET", o),
                s.then(function(n) {
                    r.effectiveTo = angular.isDefined(r.module) && angular.isDefined(r.module[0].effectiveTo) ? r.module[0].effectiveTo : "";
                    u.html(n);
                    t(u.contents())(r)
                }))
            }
        }
    }
    ]).directive("countryFlag", [function() {
        return {
            require: "ngModel",
            restrict: "A",
            link: function(n, t, i, r) {
                function e(n) {
                    o();
                    var t = u.find("option");
                    angular.forEach(t, function(t, i) {
                        var u = $(t)
                          , r = n[i]
                          , f = angular.isDefined(r) ? r.Code.toLowerCase() : "";
                        u.attr("data-icon", "flag-icon flag-icon-" + f)
                    })
                }
                function o() {
                    var n = u.find("option");
                    n.first().text() === "" && n.first().remove()
                }
                function f() {
                    r.$viewValue && u.val(r.$viewValue);
                    u.selectpicker("refresh")
                }
                var u = $(t);
                n.$watch(i.countryFlag, function(n) {
                    angular.isDefined(n) && (e(n),
                    f())
                }, !0);
                n.$watch(i.ngModel, function() {
                    f()
                })
            }
        }
    }
    , ]);
    n.$inject = ["$scope", "$filter", "$document", "dataService", "msgService"];
    t.$inject = ["$scope", "$window", "$timeout"];
    i.$inject = ["$scope"];
    r.$inject = ["$scope", "$filter", "dataService"];
    u.$inject = ["$scope", "$sce"]
}(),
function() {
    "use strict";
    function n(n, t, i, r) {
        function e() {
            switch (f) {
            case "bingo":
                o()
            }
        }
        function o() {
            if (!uv.sessionD.aliases || !uv.sessionD.aliases.an || uv.sessionD.aliases.an === "")
                t.dialog(n, {
                    templateUrl: "/public/resource/templates/modal/bingo/createAlias.tpl.html",
                    controller: "bingoCreateAliasCtrl",
                    animation: !0,
                    backdrop: "static"
                }),
                event.stopPropagation(),
                event.preventDefault()
        }
        var u = r.location.pathname.split("/")
          , f = u[2];
        n.onInit = e
    }
    function t(n, t, i, r) {
        function f(f) {
            var e = i.fetch("POST", "/service/bingoApi/createAlias", {
                alias: f,
                guId: u
            });
            e.then(function(u) {
                u.Status ? (n.msg.content = r.instant("msgBingoCreateAliasSuccess"),
                i.dialog(n).result.then(function() {
                    t.close();
                    location.reload()
                })) : u.ErrorCode === 103 ? (n.msg.content = r.instant("msgBingoAliasExisted"),
                i.dialog(n)) : (n.msg.content = r.instant("msgComErrOccur"),
                i.dialog(n))
            })
        }
        var u = getGuid();
        n.createAlias = f;
        n.guId = u;
        n.msg = {
            title: r.instant("titBingoCreateAlias")
        }
    }
    angular.module("starApp").controller("bingoCreateAliasCtrl", t).controller("gameLobbyCtrl", n);
    t.$inject = ["$scope", "$uibModalInstance", "dataService", "$translate"];
    n.$inject = ["$scope", "dataService", "$translate", "$window", "$log"]
}(),
function() {
    "use strict";
    function n(n, t, i, r) {
        function u() {
            var f = t("attrsFilter")(global.generals.bingo.categories, "disallow", uv.pd.r)
              , e = r.fetch("GET", "/service/prodApi/getprodFeeds", {
                prodName: "bingo",
                feedKey: "BingoRoom"
            });
            e.then(function(n) {
                var i = n.BingoRoom;
                angular.forEach(f, function(n) {
                    var r = t("filter")(i, {
                        fv1: n.uniqueKey
                    }, !0);
                    r.length > 0 && (n.identifier = r[0].fv0,
                    n.roomId = r[0].fv1,
                    n.gameName = r[0].fv2,
                    n.pot = r[0].fv3,
                    n.bonuspot = r[0].fv4,
                    n.price = r[0].fv5,
                    n.players = r[0].fv6,
                    n.startTime = r[0].fv7)
                })
            });
            n.roomInfos = f;
            i(u, 12e4)
        }
        n.widget = {};
        n.onInit = u
    }
    function t(n, t, i, r) {
        function u() {
            var s = global.generals.bingo.categories, e = location.pathname.split("/"), o;
            n.gameName = e.length === 4 ? e[3] : "";
            n.roomInfo = t("filter")(s, {
                uniqueKey: n.gameName
            }, !0)[0];
            o = r.fetch("GET", "/service/prodApi/getprodFeeds", {
                prodName: "bingo",
                feedKey: ""
            });
            o.then(function(i) {
                var r = t("filter")(i.BingoRoom, {
                    fv1: n.gameName
                }, !0)[0]
                  , u = t("filter")(i.BingoGame, {
                    fv1: n.gameName
                }, !0);
                n.roomInfo.identifier = r.fv0;
                n.roomInfo.roomId = r.fv1;
                n.roomInfo.gameName = r.fv2;
                n.roomInfo.pot = r.fv3;
                n.roomInfo.bonuspot = r.fv4;
                n.roomInfo.price = r.fv5;
                n.roomInfo.players = r.fv6;
                n.roomInfo.startTime = r.fv7;
                angular.forEach(u, function(t) {
                    var i = {};
                    i.gameName = t.fv5;
                    i.startTime = t.fv6;
                    i.price = t.fv7;
                    i.bonusTicket = t.fv9;
                    n.totalGames.push(i)
                });
                f(n.widget.tabIndex)
            });
            i(u, 3e5)
        }
        function f(i) {
            var r;
            n.widget.pageIndex = 1;
            var f = (new Date).getDay()
              , u = i - f
              , e = (new Date).addDays(u).setHours(0, 0, 0, 0)
              , o = (new Date).addDays(u + 1).setHours(0, 0, 0, 0);
            n.currnetGames = t("filter")(n.totalGames, function(n) {
                return n.startTime * 1 >= e && n.startTime * 1 <= o
            }, !0);
            n.widget.tabIndex = i;
            r = n.widget.pageIndex * n.widget.pageSize - n.widget.pageSize;
            n.widget.totalPage = Math.ceil(n.currnetGames.length / n.widget.pageSize);
            n.perPageGames = n.currnetGames.slice(r, r + n.widget.pageSize)
        }
        n.gameName = "";
        n.totalGames = [];
        n.perPageGames = [];
        n.widget = {
            tabIndex: (new Date).getDay(),
            pageIndex: 1,
            pageSize: 10,
            totalPage: 1
        };
        n.onInit = u;
        n.switchWeekDay = f;
        n.$watch("widget.pageIndex", function() {
            var t = n.widget.pageIndex * n.widget.pageSize - n.widget.pageSize;
            n.perPageGames = n.currnetGames.slice(t, t + n.widget.pageSize)
        })
    }
    angular.module("starApp").controller("bingoRoomlistCtrl", n).controller("bingoRoominfoCtrl", t).directive("bingoRoomlist", [function() {
        return {
            restrict: "A",
            controller: "bingoRoomlistCtrl",
            templateUrl: "/public/resource/templates/widgets/bingo-roomlist.wg.html"
        }
    }
    ]).directive("bingolauncher", ["$translate", "dataService", "gameService", "$rootScope", function(n, t, i, r) {
        return {
            restrict: "A",
            link: function(u, f, e) {
                function h(n) {
                    s.url = n;
                    e.$set("href", n);
                    e.$set("target", s.windowName)
                }
                var c = "/" + global.lan + "/bingo/lobby?roomId=" + (e.bingolauncher || "")
                  , s = {
                    game: "bingo",
                    windowName: "bingogamelauncher"
                }
                  , o = r.$new();
                h(c);
                u.$watch(function() {
                    return $(f).attr("bingolauncher")
                }, function(n) {
                    var t = "/" + global.lan + "/bingo/lobby?roomId=" + n;
                    h(t)
                });
                f.bind("click", function() {
                    if (!uv.sessionD.login)
                        return o.msg = {
                            title: n.instant("txtBtnLogin"),
                            content: n.instant("msgCommonRequestLogin")
                        },
                        t.dialog(o),
                        event.stopPropagation(),
                        event.preventDefault(),
                        !1;
                    if (uv.sessionD.suspended || uv.sessionD.excluded)
                        return o.msg = {
                            title: n.instant("txtBtnLogin"),
                            content: n.instant("msgResGamingExclusion")
                        },
                        t.dialog(o),
                        event.stopPropagation(),
                        event.preventDefault(),
                        !1;
                    i.launch(s)
                })
            }
        }
    }
    ]).directive("bingoGamepopup", [function() {
        return {
            restrict: "A",
            templateUrl: "/public/resource/templates/widgets/bingo-gamePopup.tpl.html"
        }
    }
    ]).directive("bingoGameinfo", [function() {
        return {
            restrict: "A",
            controller: "bingoRoominfoCtrl",
            templateUrl: "/public/resource/templates/widgets/bingo-roomInfo.tpl.html"
        }
    }
    ]);
    n.$inject = ["$scope", "$filter", "$timeout", "dataService"];
    t.$inject = ["$scope", "$filter", "$timeout", "dataService"]
}(),
function() {
    "use strict";
    function n(n) {
        return function(t) {
            var i = n("filter")(global.generals.casino.feeds.Jackpot, function(n) {
                return n.keyIndex == t && n.fv4 == "Flash" && (n.fv2 == uv.geod.cc || n.fv2 == "*")
            }, !0);
            return i.length > 0 ? i[0].fv1 * 1 : 0
        }
    }
    function t(n, t) {
        function i() {
            var i = t.fetch("GET", "/service/prodApi/getprodTips", {
                prodName: "casino",
                counter: 3
            });
            i.then(function(t) {
                t = t || [];
                var i = t.length > 0 ? Math.floor(Math.random() * 10 + 1) % t.length : -1;
                n.randomTip = t.length > 0 ? t[i] : {}
            })
        }
        n.onInit = i;
        i()
    }
    function i(n, t, i, r, u, f, e, o) {
        function s(n, t) {
            var i, r;
            for (n = n || [],
            t = t || [],
            i = !1,
            r = 0; r < t.length; r++)
                if (i = n.indexOf(t[r]) != -1,
                i)
                    break;
            return i
        }
        function h() {
            if (n.totalgames.length == 0) {
                n.csngames = [];
                return
            }
            n.filteredgames = t("orderBy")(n.totalgames.slice(1, n.totalgames.length), n.czfilter.sortBy, !0);
            n.filteredgames = n.czfilter.theme.length != 0 ? t("filter")(n.filteredgames, function(t) {
                return s(n.czfilter.theme, t.attrs.CsnThemes)
            }) : n.filteredgames;
            n.filteredgames = n.czfilter.bounsType.length != 0 && n.widget.selCategory.indexOf("Slots") == -1 ? t("filter")(n.filteredgames, function(t) {
                return s(n.czfilter.bounsType, t.attrs.SlotBonusType)
            }) : n.filteredgames;
            n.filteredgames = n.czfilter.winlines.length != 0 && n.widget.selCategory.indexOf("Slots") == -1 ? t("filter")(n.filteredgames, function(t) {
                return n.czfilter.winlines.indexOf(t.attrs.SlotWinLine.toString()) !== -1
            }) : n.filteredgames;
            n.filteredgames = n.czfilter.minBets.length != 0 ? t("filter")(n.filteredgames, function(t) {
                return n.czfilter.minBets.length == 0 || n.czfilter.minBets.indexOf(t.minBets) !== -1
            }) : n.filteredgames;
            n.widget.showfeatureGame = t("filter")(n.totalgames, {
                uniqueKey: n.featureGame.uniqueKey
            }, !0).length == 1;
            n.csngames = n.filteredgames.slice(0, n.widget.gameLimit)
        }
        function c(i) {
            if (n.widget.selCategory != i) {
                n.widget.selCategory = i || n.widget.selCategory;
                n.guId = getGuid();
                var r = {
                    Category: n.widget.selCategory,
                    lan: global.lan,
                    guId: n.guId
                }
                  , u = f.fetch("POST", "/service/casinoApi/getgames", r);
                u.then(function(r) {
                    n.widget.gameLimit = 20;
                    n.totalgames = r;
                    angular.forEach(n.totalgames, function(r) {
                        if (r.minBets = r.attrs.CsnMinBet.toString(),
                        r.jackpot = t("jackpot")(r.uniqueKey),
                        i == "") {
                            var u = {
                                uniqueKey: r.uniqueKey,
                                Name: t("getResource")(r.resource, "DisplayName")
                            };
                            (uv.sessionD.login == !0 || r.attrs.SupportDemo.toString() == "true") && n.searchOptions.push(u)
                        }
                    });
                    n.featureGame = n.totalgames[0] || null ;
                    n.groupAttrs.Themes = t("filter")(global.generals.casino.resource, {
                        localizationType: 901
                    }, !0);
                    n.groupAttrs.BonusType = t("filter")(global.generals.casino.resource, {
                        localizationType: 902
                    }, !0);
                    n.groupAttrs.WinLine = t("countBy")(n.totalgames, "attrs.SlotWinLine");
                    n.groupAttrs.MinBet = t("countBy")(n.totalgames, "minBets");
                    n.filteredgames = r.slice(1, n.totalgames.length);
                    h()
                })
            }
        }
        function l() {
            n.general = global.generals.casino;
            n.general.categories = t("attrsFilter")(global.generals.casino.categories, "disallow", uv.pd.r);
            c("")
        }
        function a() {
            n.widget.gameLimit = n.widget.gameLimit + 20;
            n.csngames = n.filteredgames.slice(0, n.widget.gameLimit)
        }
        function v(t) {
            var i = n.favoritegames.indexOf(t);
            i == -1 ? n.favoritegames.push(t) : (n.favoritegames.splice(i, 1),
            f.fetch("GET", "/service/casinoApi/setfavoritegames", {
                favoritegames: n.favoritegames.toString()
            }));
            uv.pd.favs = n.favoritegames.toString();
            r.putObject("prefer", uv.pd, {
                path: "/",
                expires: (new Date).addDays(30)
            })
        }
        function y() {
            var t = f.dialog(n, {
                size: "lg",
                templateUrl: "/public/resource/templates/modal/casino/csn-gamefilter.tpl.html",
                controller: "csnGameFilterCtrl"
            });
            t.result.then(function(t) {
                n.czfilter = t
            })
        }
        function p(n, t, i) {
            if (n.stopPropagation(),
            n.preventDefault(),
            angular.isArray(t)) {
                var r = t.indexOf(i);
                r != -1 ? t.splice(r, 1) : t.push(i)
            }
        }
        function w(t) {
            var i = uv.sessionD.login == !0 ? "real" : "fun"
              , r = {
                game: "casino",
                windowName: "casinogamelauncher",
                url: "/" + global.lan + "/casino/lobby?playfor=" + i + "&gameName=" + t.uniqueKey,
                templateUrl: "/public/resource/templates/modal/messageAlert.html",
                backdrop: "static",
                controller: "modalInstanceCtrl"
            };
            o.launch(i, r, t.uniqueKey);
            event.stopPropagation();
            event.preventDefault();
            n.widget.searchKey = ""
        }
        n.widget = {
            selCategory: "all",
            gameLimit: 20,
            searchKey: "",
            showfeatureGame: !0
        };
        n.featureGame = {};
        n.csngames = [];
        n.filteredgames = [];
        n.totalgames = [];
        n.searchOptions = [];
        n.guId = 0;
        n.favoritegames = uv.pd.favs.split(",").map(function(n) {
            return n * 1
        });
        n.czfilter = {
            sortBy: "betCount",
            theme: [],
            winlines: [],
            bounsType: [],
            minBets: []
        };
        n.groupAttrs = {
            MinBet: [],
            Themes: [],
            WinLine: [],
            BonusType: []
        };
        n.onInit = l;
        n.toggleFavgames = v;
        n.switchCategory = c;
        n.loadmoreGames = a;
        n.toggleFilter = y;
        n.updatefilter = p;
        n.selectResult = w;
        n.$watch("czfilter", h, !0)
    }
    function r(n, t, i, r) {
        function f() {
            r.close(n.preczfilter)
        }
        function u() {
            n.preczfilter.theme = [];
            n.preczfilter.winlines = [];
            n.preczfilter.bounsType = [];
            n.preczfilter.minBets = []
        }
        function e() {
            r.dismiss("cancel")
        }
        n.preczfilter = {
            sortBy: "betCount",
            theme: [],
            winlines: [],
            bounsType: [],
            minBets: []
        };
        n.close = e;
        n.submitFilter = f;
        n.deselectAll = u;
        u();
        n.preczfilter.sortBy = n.czfilter.sortBy;
        n.preczfilter.theme = n.czfilter.theme;
        n.preczfilter.winlines = n.czfilter.winlines;
        n.preczfilter.bounsType = n.czfilter.bounsType;
        n.preczfilter.minBets = n.czfilter.minBets
    }
    function u(n, t, i, r, u, f, e, o) {
        function s() {
            uv.sessionD.login || t.specificGame.playfor != "fun" || o(l, 3e5);
            var r = f.gameUniquekey
              , u = {
                gameName: r == "lobby" ? getFromSearch("gameName") : r,
                Language: global.lan,
                guId: t.guId
            }
              , s = e.fetch("GET", "/service/casinoApi/getGameInfo", u);
            s.then(function(r) {
                uv.pd.ratelist = uv.pd.ratelist || {};
                t.gameInfo = r;
                t.specificGame.id = r.id;
                t.specificGame.rate = uv.pd.ratelist[r.id] || 0;
                t.gameInfo.jackpot = i("jackpot")(t.gameInfo.uniqueKey);
                n.gameBackground = i("getResource")(r.resource, "GameBackground");
                var u = i("filter")(r.resource, {
                    localizationType: "!0"
                });
                angular.forEach(u, function(n) {
                    var r = i("getResource")(n);
                    r != "" && n.key != "GameBackground" && n.key != "Preview" && t.mediaSrcs.push({
                        localizationType: n.localizationType,
                        key: n.key,
                        val: r
                    })
                })
            })
        }
        function h(n) {
            var i = t.favoritegames.indexOf(n);
            i == -1 ? t.favoritegames.push(n) : (t.favoritegames.splice(i, 1),
            e.fetch("GET", "/service/casinoApi/setfavoritegames", {
                favoritegames: t.favoritegames.toString()
            }));
            uv.pd.favs = t.favoritegames.toString();
            u.putObject("prefer", uv.pd, {
                path: "/",
                expires: (new Date).addDays(30)
            })
        }
        function c() {
            e.dialog("", {
                size: "change-game",
                templateUrl: "/public/resource/templates/modal/casino/casino-changegame.tpl.html",
                controller: "csnChangegameCtrl"
            })
        }
        function l() {
            e.dialog(null , {
                templateUrl: "/public/resource/templates/modal/casino/play4Fun.tpl.html",
                controller: "p4FunModalCtrl",
                animation: !0,
                size: "sm"
            })
        }
        t.gameInfo = {};
        t.randomTip = {};
        t.mediaSrcs = [];
        t.favoritegames = uv.pd.favs.split(",").map(function(n) {
            return n * 1
        });
        t.specificGame = {
            id: "",
            rate: 0,
            loginId: "",
            playfor: getFromSearch("playfor")
        };
        t.Oninit = s;
        t.changeGame = c;
        t.toggleFavgames = h;
        t.guId = getGuid();
        t.$watch("specificGame", function(n) {
            if (n.id != "" && n.rate != 0) {
                var i = angular.isUndefined(uv.pd.ratelist[n.id])
                  , r = i ? n.rate : n.rate - uv.pd.ratelist[n.id];
                t.gameInfo.rateCount = i ? t.gameInfo.rateCount + 1 : t.gameInfo.rateCount;
                t.gameInfo.totalRate = t.gameInfo.totalRate + r;
                t.gameInfo.rating = t.gameInfo.rateCount != 0 ? t.gameInfo.totalRate / t.gameInfo.rateCount : 0;
                uv.pd.ratelist[n.id] = n.rate;
                r != 0 && (e.fetch("GET", "/service/casinoApi/setGameRating", {
                    gameId: n.id,
                    rating: r,
                    addCount: i
                }),
                u.putObject("prefer", uv.pd, {
                    path: "/",
                    expires: (new Date).addDays(30)
                }))
            }
        }, !0)
    }
    function f(n, t, i, r, u) {
        function e() {
            var r = {
                Category: "all",
                LanguageCode: global.lan
            }
              , u = i.fetch("POST", "/service/casinoApi/getgames", r);
            u.then(function(i) {
                n.totalgames = t("filter")(i, function(n) {
                    return f == "real" || n.attrs.SupportDemo.toString() == "true"
                }, !0);
                n.csngames = n.totalgames.slice(0, n.gameLimit)
            })
        }
        function o(t) {
            (uv.sessionD.suspended || uv.sessionD.excluded) && f == "real" ? (n.msg = {
                title: u.instant("txtBtnLogin"),
                content: u.instant("msgResGamingExclusion")
            },
            i.dialog(n),
            event.stopPropagation(),
            event.preventDefault()) : location.href = "/" + global.lan + "/casino/lobby?playfor=" + f + "&gameName=" + t
        }
        function s() {
            r.dismiss("cancel")
        }
        function h() {
            n.csngames.length != n.totalgames.length && (n.gameLimit = n.gameLimit + 20,
            n.csngames = n.totalgames.slice(0, n.gameLimit))
        }
        n.gameLimit = 20;
        n.totalgames = [];
        n.filtergames = [];
        n.csngames = [];
        n.searchKey = "";
        n.onInit = e;
        n.modalClose = s;
        n.switchGame = o;
        n.loadMoreGames = h;
        var f = getFromSearch("playfor") || "fun";
        n.$watch("searchKey", function(i) {
            n.filtergames = t("filter")(n.totalgames, function(n) {
                var r = t("getResource")(n.resource, "DisplayName");
                return r.toLowerCase().indexOf(i.toLowerCase()) != -1
            });
            n.csngames = n.filtergames.slice(0, n.gameLimit)
        })
    }
    function e(n, t, i, r, u) {
        function f() {
            var t = {
                recentlyGames: n.suggestGame.recentlygame.toString(),
                counter: n.widget.counter,
                language: global.lan
            }
              , r = i.fetch("GET", "/service/casinoApi/getSuggestGames", t);
            r.then(function(t) {
                n.suggestGame.recentlygames = t.recentlygames.filter(function(n) {
                    return n != null
                });
                n.suggestGame.recommendgames = t.recommendgames
            })
        }
        n.onInit = f;
        n.global = global;
        n.widget = {
            gamesType: r.casinoSuggestgame,
            counter: 3
        };
        n.suggestGame = {
            recentlygame: [],
            recommandGames: []
        };
        n.suggestGame.recentlygame = u.getObject("recentlyGames") || []
    }
    function o(n, t) {
        function i() {}
        function r() {
            return n.cooperativeSet.socialMedia.some(function(n) {
                return n.name === "facebook"
            })
        }
        function u() {
            $(".input-username>input").trigger("focus");
            t.close()
        }
        function f() {
            t.dismiss("cancel")
        }
        n.currentDomain = location.origin;
        n.close = f;
        n.login = u;
        n.onInit = i;
        n.isShowFb = r
    }
    function s(n, t, i, r, u) {
        function f(f, e, o) {
            var h = n.$new(), a, s, c, l;
            f == "fun" ? u.launch(e) : uv.sessionD.login || f != "real" ? (uv.sessionD.suspended || uv.sessionD.excluded) && f == "real" ? (h.msg = {
                title: t.instant("txtBtnLogin"),
                content: t.instant("msgResGamingExclusion")
            },
            r.dialog(h)) : uv.geod.cc == "IDR" || uv.geod.cc == "VND" || uv.geod.cc == "KRW" ? (h.msg = {
                title: t.instant("txtComNotice"),
                content: t.instant("msgCsnTruncated")
            },
            a = r.dialog(h, e),
            a.result.then(function() {
                u.launch(e)
            })) : u.launch(e) : (h.msg = {
                title: t.instant("txtBtnLogin"),
                content: t.instant("msgCommonRequestLogin")
            },
            r.dialog(h));
            s = i.getObject("recentlyGames") || [];
            c = s.indexOf(o);
            c != -1 && s.splice(c, 1);
            s.push(o);
            l = s.length > 3 ? s.length - 3 : 0;
            i.putObject("recentlyGames", s.slice(l, l + 3), {
                path: "/"
            })
        }
        return {
            launch: f
        }
    }
    function h() {
        function t() {
            var t = angular.isUndefined(n[global.lan]) ? "en_US" : n[global.lan];
            (function(n, i, r) {
                var u, f = n.getElementsByTagName(i)[0];
                n.getElementById(r) || (u = n.createElement(i),
                u.id = r,
                u.src = "//connect.facebook.net/{lang}/sdk.js#xfbml=1&appId=219151658144170&version=v2.3".replace("{lang}", t),
                f.parentNode.insertBefore(u, f))
            })(document, "script", "facebook-jssdk")
        }
        var n = {
            "en-gb": "en_US",
            "zh-cn": "zh_CN",
            "vi-vn": "vi_VN",
            "th-th": "th_TH",
            "id-id": "id_ID",
            "km-kh": "km_KH"
        };
        return {
            share: t
        }
    }
    angular.module("starApp").controller("csnGamelistCtrl", i).controller("csnGameFilterCtrl", r).controller("csnGameInfoCtrl", u).controller("csnChangegameCtrl", f).controller("casinoSuggestgameCtrl", e).controller("csnTipsCtrl", t).controller("p4FunModalCtrl", o).factory("fbService", h).factory("casinoLaunchService", s).filter("jackpot", n).directive("casinoGamelist", ["$window", function(n) {
        return {
            restrict: "A",
            controller: "csnGamelistCtrl",
            templateUrl: "/public/resource/templates/widgets/casino-gamelist.wg.html",
            link: function(t, i) {
                t.categoryWidth = $(i).width();
                angular.element(n).bind("resize", function() {
                    t.categoryWidth = $(i).width()
                })
            }
        }
    }
    ]).directive("casinoGameinfo", [function() {
        return {
            restrict: "A",
            controller: "csnGameInfoCtrl",
            templateUrl: "/public/resource/templates/widgets/casino-gameInfo.tpl.html"
        }
    }
    ]).directive("casinoSinglegame", [function() {
        return {
            restrict: "A",
            scope: !0,
            controller: "csnGameInfoCtrl",
            templateUrl: "/public/resource/templates/widgets/casino-singlegame.wg.html"
        }
    }
    ]).directive("casinoSuggestgame", [function() {
        return {
            restrict: "A",
            scope: !0,
            controller: "casinoSuggestgameCtrl",
            templateUrl: "/public/resource/templates/widgets/casino-suggestGame.tpl.html"
        }
    }
    ]).directive("csnGamepopup", [function() {
        return {
            restrict: "A",
            templateUrl: "/public/resource/templates/widgets/casino-gamePopup.tpl.html"
        }
    }
    ]).directive("casinoTips", [function() {
        return {
            restrict: "A",
            controller: "csnTipsCtrl"
        }
    }
    ]).directive("csnlauncher", ["$translate", "dataService", "$cookies", "gameService", "$rootScope", "casinoLaunchService", function(n, t, i, r, u, f) {
        return {
            restrict: "A",
            link: function(n, t, i) {
                function o(n, t) {
                    e = t;
                    var r = "/" + global.lan + "/casino/lobby?playfor=" + n + "&gameName=" + t;
                    u.url = r;
                    i.$set("href", r);
                    i.$set("target", u.windowName)
                }
                var r = i.playfor || "fun"
                  , e = i.csnlauncher
                  , u = {
                    game: "casino",
                    windowName: "casinogamelauncher",
                    templateUrl: "/public/resource/templates/modal/messageAlert.html",
                    backdrop: "static",
                    controller: "modalInstanceCtrl"
                };
                o(r, i.csnlauncher);
                n.$watch(function() {
                    return $(t).attr("csnlauncher")
                }, function(n) {
                    o(r, n)
                });
                t.bind("click", function() {
                    f.launch(r, u, e);
                    event.stopPropagation();
                    event.preventDefault()
                })
            }
        }
    }
    ]).directive("jackpot", ["$filter", "$interval", function(n, t) {
        return {
            restrict: "A",
            scope: {
                uniqueKey: "=jackpot",
                txtuniqueKey: "@jackpot"
            },
            link: function(i, r) {
                function e(i) {
                    angular.isUndefined(i) || (u = n("jackpot")(i),
                    r.text(u > 0 ? n("currency")(u, uv.geod.symbol) : ""),
                    angular.isDefined(f) && t.cancel(f),
                    u > 0 && (f = t(o, 1e3)))
                }
                function o() {
                    u = u + .01;
                    r.text(n("currency")(u, uv.geod.symbol))
                }
                var u = 0, f;
                e(i.txtuniqueKey);
                i.$watch("uniqueKey", function(n) {
                    e(n)
                })
            }
        }
    }
    ]).directive("loadingImg", function() {
        return {
            restrict: "A",
            link: function(n, t) {
                t.find("img").on("load", function() {
                    t.removeClass("load-spinner")
                }).on("error", function() {
                    t.removeClass("load-spinner")
                })
            }
        }
    }).directive("csnRealityCheckListener", function() {
        return {
            restrict: "A",
            link: function(n, t) {
                if (uv.pd.r === "UK") {
                    var i = "https://quickfire.gcontent.eu/"
                      , r = t[0].contentWindow;
                    n.$on("realityCheck.show", function() {
                        r.postMessage("StopGamePlay", i)
                    });
                    n.$on("realityCheck.no", function() {
                        r.postMessage("ReStartGamePlay", i)
                    })
                }
            }
        }
    });
    s.$inject = ["$rootScope", "$translate", "$cookies", "dataService", "gameService"];
    t.$inject = ["$scope", "dataService"];
    i.$inject = ["$scope", "$filter", "$q", "$cookies", "$translate", "dataService", "gameService", "casinoLaunchService"];
    r.$inject = ["$scope", "$filter", "$q", "$uibModalInstance", "dataService"];
    u.$inject = ["$rootScope", "$scope", "$filter", "$q", "$cookies", "$attrs", "dataService", "$timeout"];
    f.$inject = ["$scope", "$filter", "dataService", "$uibModalInstance", "$translate"];
    e.$inject = ["$scope", "$filter", "dataService", "$attrs", "$cookies"];
    o.$inject = ["$scope", "$uibModalInstance", "fbService"];
    n.$inject = ["$filter"]
}(),
function() {
    "use strict";
    function n(n, t, i) {
        function r() {
            n.msg = {
                title: i.instant("navFinsRoot"),
                content: i.instant("msgCommonRequestLogin")
            };
            t.dialog(n)
        }
        function u() {
            n.msg = {
                title: i.instant("navFinsRoot"),
                content: i.instant("msgResGamingExclusion")
            };
            t.dialog(n)
        }
        function f(r) {
            n.msg = {
                title: i.instant("navFinsRoot"),
                content: r
            };
            return t.dialog(n, {
                templateUrl: "/public/resource/templates/modal/messagePrompt.html",
                controller: "modalInstanceCtrl"
            })
        }
        n.popupNeedLogin = r;
        n.popupSelfExcludeOrSuspended = u;
        n.popupConfirmPlaceBet = f
    }
    function t(n, t) {
        function u() {
            $(".leftContainer .activeOption").trigger("click");
            n.fins = f();
            e();
            n.fins.isSingle && o()
        }
        function f() {
            var e, r, n, u, t = location.pathname.toLowerCase().split("/").pop(), f;
            return t.indexOf("my-statistics") !== -1 || t.indexOf("past-expiries") !== -1 ? (n = angular.isDefined(i) && angular.isDefined(i.isSingle) ? i.isSingle : !0,
            u = "/{0}/financials/{1}-{2}".format(global.lan, "digital", n ? "multi" : "single")) : (f = t.split("-"),
            n = f[1] === "single",
            r = f[0],
            u = "/{0}/financials/{1}-{2}".format(global.lan, r, n ? "multi" : "single")),
            e = n ? "single" : "multi",
            {
                view: t,
                viewType: e,
                gameType: r,
                isSingle: n,
                switchUrl: u
            }
        }
        function e() {
            t.putObject(r, {
                isSingle: n.fins.isSingle
            }, {
                path: "/"
            })
        }
        function o() {
            if (!angular.isUndefined(widgets.links.tradologic) && !angular.isUndefined(widgets.links.tradologic.option)) {
                n.selectedAsset = widgets.links.tradologic.option.name;
                $(window).on(widgets.events.linkOptionUpdated, function() {
                    n.$apply(function() {
                        n.selectedAsset = widgets.links.tradologic.option.name
                    })
                })
            }
        }
        var r = "fins"
          , i = t.getObject(r);
        n.fins = {};
        n.global = global;
        n.widgetMessage = widgetMessage;
        u()
    }
    angular.module("starApp").controller("financialsParentCtrl", n).controller("financialsCtrl", t).factory("finsService", ["dataService", "$q", function(n, t) {
        function i() {
            function u(n) {
                var t = "";
                try {
                    t = angular.fromJson(n).data.sessionId
                } catch (r) {
                    console.error(r)
                }
                i.resolve(t)
            }
            function f(n) {
                console.error(n);
                i.reject(n)
            }
            var i = t.defer()
              , r = n.fetch("GET", "/service/finsApi/GetAnonymousToken");
            return r.then(u, f),
            i.promise
        }
        return {
            getTradeRoomSessionId: i
        }
    }
    , ]).directive("financialsGame", ["finsService", function(n) {
        return {
            restrict: "A",
            templateUrl: "/public/resource/templates/widgets/financials-game.wg.html",
            scope: !0,
            link: function(t) {
                var i = window.location.href
                  , r = i.indexOf("financials/") + 11
                  , u = i.slice(0, r) + "view/" + i.slice(r);
                uv.sessionD.login ? n.getTradeRoomSessionId().then(function(n) {
                    t.iframeSrc = "{0}?hash={1}".format(u, n)
                }) : t.iframeSrc = u
            }
        }
    }
    , ]).directive("financialsTradetable", ["finsService", function(n) {
        return {
            restrict: "A",
            templateUrl: "/public/resource/templates/widgets/financials-tradeTable.wg.html",
            scope: !0,
            link: function(t) {
                var i = window.location.href
                  , u = i.indexOf("financials/") + 11
                  , r = i.slice(0, u) + "view/trade-table";
                uv.sessionD.login ? n.getTradeRoomSessionId().then(function(n) {
                    t.iframeSrc = "{0}?hash={1}".format(r, n)
                }) : t.iframeSrc = r
            }
        }
    }
    , ]).directive("tradeHeader", [function() {
        return {
            restrict: "AE",
            transclude: !0,
            scope: {
                selectedAsset: "=",
                green: "=",
                red: "="
            },
            template: '<span class="goOrDonwLabel">' + widgetMessage.Trade_Header + "<\/span>"
        }
    }
    , ]).directive("disableTranslate", [function() {
        return {
            restrict: "A",
            controller: ["$scope", function(n) {
                n.disableTranslate = !0
            }
            , ]
        }
    }
    , ]).directive("finslauncher", ["$translate", "$window", function(n, t) {
        return {
            restrict: "A",
            link: function(n, i) {
                i.bind("click", function() {
                    var n = t.parent.angular.element(t.frameElement).scope(), i;
                    angular.isDefined(n) && (uv.sessionD.login ? uv.sessionD.excluded || uv.sessionD.suspended ? n.popupSelfExcludeOrSuspended() : (i = n.popupConfirmPlaceBet(widgetMessage.PleaceBet_ConfirmMsg),
                    i.result.then(function() {
                        $(".widgetBuyButton").trigger("click")
                    })) : n.popupNeedLogin())
                })
            }
        }
    }
    , ]).directive("autoHeightFrame", [function() {
        return {
            link: function(n, t) {
                function r() {
                    n.$watch(function() {
                        return i.contentWindow.document.getElementsByTagName("html")[0].scrollHeight
                    }, function(n) {
                        i.height = n + "px"
                    })
                }
                var i = t[0];
                i.onload = r
            }
        }
    }
    , ]);
    n.$inject = ["$scope", "dataService", "$translate"];
    t.$inject = ["$scope", "$cookies", "dataService", "$window"]
}(),
function() {
    "use strict";
    function n(n, t, i, r, u) {
        function o() {
            n.promoGuid = getGuid();
            var i = {
                countryId: uv.pd.cid,
                channelId: 1,
                member: uv.sessionD.login ? uv.sessionD.ssid : "",
                guId: n.promoGuid
            }
              , r = u.fetch("JSONP", e + "GetEligiblePromo", i);
            r.then(function(i) {
                angular.forEach(i.promotions, function(i) {
                    i.localization = t("filter")(i.localizations, {
                        code: global.lan
                    }, !0)[0] || t("orderBy")(i.localizations, "id")[0] || {
                        bannerUrl: ""
                    };
                    n.availablePromos.push(i)
                });
                angular.forEach(i.promoCategories, function(i) {
                    i.localization = t("filter")(i.localizations, {
                        languageCode: global.lan
                    }, !0)[0] || t("orderBy")(i.localizations, "id")[0];
                    i.counter = t("filter")(n.availablePromos, {
                        categoryId: i.categoryId
                    }, !0).length;
                    n.promoCategories.push(i)
                });
                f("all")
            })
        }
        function f(i) {
            if (n.widget.selPromoType != i) {
                n.widget.selPromoType = i;
                n.filteredPromos = t("filter")(n.availablePromos, function(n) {
                    return i === "all" || n.categoryId == i
                });
                n.filteredCategories = t("filter")(n.promoCategories, function(i) {
                    return t("filter")(n.filteredPromos, {
                        categoryId: i.categoryId
                    }, !0).length > 0
                });
                var u = window.location.hash;
                u != "" && r(function() {
                    var n = $(u), t;
                    n.length > 0 && n[0].scrollIntoView();
                    t = n[0].getBoundingClientRect().top;
                    window.scrollBy(0, t)
                }, 1e3)
            }
        }
        var e = global.domains.aps;
        n.promoGuid = 0;
        n.availablePromos = [];
        n.filteredPromos = [];
        n.promoCategories = [];
        n.filteredCategories = [];
        n.widget = {
            selPromoType: ""
        };
        n.onInit = o;
        n.switchPromoType = f;
        n.promoTncUrl = global.domains.content + "/MB/" + global.lan + "/promo-general-tnc.html"
    }
    function t(n, t, i, r, u, f) {
        function s() {
            n.promoGuid = getGuid();
            var u = {
                member: uv.sessionD.login ? uv.sessionD.ssid : "",
                promoCode: n.promoCode,
                channelId: 1,
                guId: n.promoGuid
            }
              , f = r.fetch("JSONP", o + "checkMemberEligible", u);
            f.then(function(r) {
                n.promoDetail = r.promotion;
                n.promoSetting = angular.fromJson(r.promotionDetailSetting);
                n.promoDetail.termsTpl = global.domains.content + "/templates/Promotions/finalclause.html";
                n.promoDetail.tncTpl = global.domains.content + "/templates/Promotions/tncLabel.html";
                n.promoDetail.regionalTerms = uv.pd.r + "." + global.lan;
                n.isClaimed = r.result.remark == "Duplicate Claim Violation";
                n.warningMsg = t("filter")(r.message, {
                    id: global.lanId * 1
                }, !0)[0] || i.instant("txtSecureForgotUserName");
                n.isEligible = r.result.isEligible && uv.sessionD.suspended == !1;
                n.prizeWon = n.promoSetting.isLuckyWheel && r.memAllowListRemark.toLowerCase();
                v()
            })
        }
        function l() {
            if (n.promoDetail.allowArray.enableClaimWTPW == !1) {
                n.msg = {
                    title: i.instant("navPromoRoot"),
                    content: n.warningMsg.text
                };
                var t = r.dialog(n, {
                    templateUrl: "/public/resource/templates/modal/messagePrompt.html",
                    controller: "modalInstanceCtrl"
                });
                t.result.then(h)
            } else
                n.claimPromo()
        }
        function h() {
            n.promoGuid = getGuid();
            var u = n.promoSetting.isLuckyWheel ? uv.pd.did ? uv.pd.did : "-1" : uv.pd.did
              , f = {
                token: uv.sessionD.ssid,
                promoCode: n.promoCode,
                did: u,
                promoType: n.promoDetail.promoType.id,
                channelId: 1,
                guId: n.promoGuid
            }
              , e = r.fetch("JSONP", o + "claimPromo", f);
            e.then(function(u) {
                var h = u.result.isVaild, f = "", e, o, c;
                if (h) {
                    if (n.promoSetting.isLuckyWheel) {
                        a();
                        return
                    }
                    e = u.result.bonus;
                    f = i.instant("msgPromoSuccessClaim") + (e > 0 ? "<br/>" + i.instant("msgPromoRewardBouns", {
                        bouns: e,
                        currency: uv.geod.cc
                    }) : "")
                } else
                    o = t("filter")(u.result.messages || [], {
                        id: global.lanId * 1
                    }, !0)[0],
                    f = typeof o == "undefined" ? i.instant("msgPromoNotQualified") : o.text;
                n.isEligible = h ? !1 : n.isEligible;
                n.msg = {
                    title: i.instant("navPromoRoot"),
                    content: f
                };
                c = r.dialog(n);
                c.result.then(function() {
                    s()
                })
            })
        }
        function a() {
            if (n.spinComplete = !1,
            n.isEligible) {
                var t = 11
                  , r = e(360) / t
                  , i = r * (t - n.wheelStopAt + .5);
                spin_nums_out.rotation = 0;
                spin_nums_spade.rotation = e(1440) + i;
                TweenLite.to(spin_nums_out, 7, {
                    rotation: e(1440) + i,
                    onUpdate: y,
                    onComplete: n.prizeWon == "spade" ? p : c
                })
            }
            n.isEligible = !1
        }
        function v() {
            n.wheelStopAt = {
                diamond: 4,
                joker: 1,
                spade: 2,
                heart: 5,
                clubs: 7
            }[n.prizeWon];
            n.checkPrize = angular.isUndefined(n.wheelStopAt)
        }
        function y() {
            var r = spin_nums_out.rotation
              , n = r % (6.28 / 24)
              , t = .06
              , i = .12;
            n <= t ? spin_tg.rotation = e(-45 * n / .05) : n > t && n < i && (spin_tg.rotation = e(-45 * (i - n) / t))
        }
        function p() {
            spin_container.addChild(spin_nums_spade);
            spin_container.addChild(spin_logo);
            firePixieDust();
            c()
        }
        function c() {
            setTimeout(function() {
                $(".ui-popup").show();
                $(".ui-result").fitText(1.9);
                $(".sub-line").fitText(3.2);
                $(".x-btn").fitText(.1);
                $(".try-again").fitText(1.1)
            }, 1500);
            spin_tg.rotation = 0
        }
        function e(n) {
            return 3.14 * (n / 180)
        }
        var o = global.domains.aps;
        n.contentPath = global.domains.content + f.contentPath + contentsVersionNo();
        n.englishVersionUrl = location.pathname.replace(global.lan, "en-gb");
        n.promoCode = f.promoContent || f.luckyWheel;
        n.onInit = s;
        n.checkClaimpromo = l;
        n.claimPromo = h;
        n.isWinners = location.pathname.toLowerCase().indexOf("/winners") != -1;
        f.luckyWheel && (spin_tg.rotation = 0)
    }
    function i(n, t, i, r, u, f) {
        function o() {
            var r = location.pathname.split("/")
              , u = location.hash.split("#");
            t.widget.catgories = t.newsType == "all" ? n.availableNews : global.generals[t.newsType].categories;
            t.widget.selectedCatgory = u.length > 1 ? u[1] : t.newsType == "all" ? "all" : global.generals[t.newsType].categories[0].uniqueKey;
            switch (r[2]) {
            case "news":
                t.widget.month = r.length > 3 ? r[3] : i("date")(new Date, "MMyyyy", uv.sessionD.timezone);
                break;
            case "2016-euro":
                t.widget.month = r.length > 3 ? -1 : 0;
                break;
            default:
                t.widget.month = 0
            }
            e("", !1);
            s()
        }
        function s() {
            for (var f = [], r = new Date, u, e, o, s, h, n = 0; n < 48; n++)
                u = new Date(r.getFullYear(),r.getMonth() - n,1),
                f.push({
                    val: u.valueOf(),
                    month: u.getMonth(),
                    year: u.getFullYear(),
                    subOpts: []
                });
            for (e = f.slice(0, r.getMonth() + 1),
            n = 1; n <= 2; n++)
                o = r.getFullYear() - n,
                s = i("filter")(f, {
                    year: o
                }, !0),
                e.push({
                    val: s[0].val,
                    month: "",
                    year: o,
                    subOpts: s
                });
            h = t.widget.month == 0 || t.widget.month == -1 ? r : new Date(t.widget.month.substr(2),parseInt(t.widget.month.substr(0, 2)) - 1);
            t.options.selected = {
                val: h,
                month: h.getMonth()
            };
            t.options.month = e
        }
        function e(i, r) {
            if (t.widget.selectedCatgory != i) {
                t.widget.guId = getGuid();
                t.widget.selectedCatgory = i || t.widget.selectedCatgory;
                var u = t.widget.selectedCatgory == "all" ? n.availableNews.map(function(n) {
                    return n.hashTag
                }).toString() : t.widget.selectedCatgory
                  , e = {
                    languageCode: global.lan,
                    keyword: u,
                    month: t.widget.month,
                    guId: t.widget.guId
                }
                  , o = f.fetch("GET", "/service/newsApi/GetMonthNews", e);
                o.then(function(n) {
                    t.widget.reuslt = n;
                    var i = r ? location.pathname + "#" + t.widget.selectedCatgory : location.pathname;
                    window.history.pushState("", "", i)
                })
            }
        }
        function h(n, t) {
            var i = n !== "all" ? "#" + n : "";
            window.location.href = "/" + global.lan + "/news/" + t + i
        }
        t.onInit = o;
        t.switchCatgory = e;
        t.widget = {
            selectedCatgory: "all",
            guId: "",
            catgories: [],
            month: 0,
            reuslt: []
        };
        t.options = {
            month: [],
            selected: {
                month: 0,
                val: 0
            }
        };
        t.newsType = u.generalNewslist || "all";
        t.redirectUrl = h
    }
    function r(n, t, i, r) {
        function f() {
            var i = !0
              , u = r.fetch("GET", "/service/prodApi/getprodFeeds", {
                prodName: "esports",
                feedKey: ""
            });
            u.then(function(r) {
                n.widget.categories = [];
                var u = r.GroupCompetitions;
                angular.forEach(global.generals.esports.categories, function(i) {
                    var r = t("filter")(u, {
                        fv1: i.uniqueKey
                    }, !0);
                    r.length > 0 && n.widget.categories.push({
                        id: r[0].fv0,
                        name: i.uniqueKey,
                        competitions: r[0].fv10,
                        resource: i.resource
                    })
                });
                o(n.widget.selectedCatgory, i)
            })
        }
        function e() {
            angular.isDefined(u) && (i.cancel(u),
            u = undefined)
        }
        function o(o, s) {
            if (s || n.widget.selectedCatgory != o) {
                e();
                n.widget.selectedCatgory = o || n.widget.selectedCatgory;
                var h = t("filter")(n.widget.categories, {
                    id: n.widget.selectedCatgory
                }, !0)[0]
                  , c = global.domains.sbkfeed + "/en-gb/Service/OddsService?GetEventsByCompetitions"
                  , l = {
                    Language: global.lan,
                    SportId: 23,
                    CompetitionIds: h.competitions,
                    OddsType: uv.sessionD.oddsType,
                    TimeZoneUtcOffset: uv.geod.utcoffset
                }
                  , a = r.fetch("JSONP", c, l);
                a.then(function(t) {
                    n.widget.reuslt.inplay = t["inplay-evs"] || [];
                    n.widget.reuslt.furture = t["further-evs"] || [];
                    n.widget.timer = (new Date).valueOf() + 9e4;
                    u = i(f, 9e4)
                })
            }
        }
        n.onInit = f;
        n.switchCatgory = o;
        n.stopInterval = e;
        n.widget = {
            timer: 90,
            selectedCatgory: "1",
            categories: [],
            reuslt: {
                inplay: [],
                furture: []
            }
        };
        var u
    }
    function u(n, t, i, r, u) {
        function e() {
            n.widget.guId = getGuid();
            var t = {
                regionCode: uv.pd.r,
                languageCode: global.lan,
                category: "all",
                guId: n.widget.guId
            };
            i.all({
                regionFaqs: u.fetch("GET", "/service/faqsApi/getRegionFaqs", t),
                top5Faqs: u.fetch("GET", "/service/faqsApi/getTop5Faqs", t)
            }).then(function(t) {
                n.top5Faqs = t.top5Faqs;
                n.availableFaqs = t.regionFaqs.categories;
                n.allFaqs = t.regionFaqs.allcontents;
                angular.forEach(n.availableFaqs, function(t) {
                    n.categories.push({
                        code: t.code,
                        resource: t.resource,
                        priority: t.priority
                    })
                });
                var i = location.pathname.split("/");
                f(i.length > 3 ? i[3] : "all")
            })
        }
        function f(i) {
            n.widget.selectedCatgory != i && (n.widget.selectedCatgory = i,
            n.filteredFaqs = i !== "all" ? t("filter")(n.availableFaqs, {
                code: n.widget.selectedCatgory
            }) : n.availableFaqs.slice(0, n.availableFaqs.length))
        }
        function o(t, i) {
            t = t || "No";
            switch (t) {
            case "Yes":
                n.msg = {
                    title: r.instant("titCommonMessage"),
                    content: r.instant("msgFaqsThanksForFeedBack")
                };
                u.dialog(n);
                break;
            default:
                n.msg = {
                    title: r.instant("titCommonMessage"),
                    content: r.instant("msgFaqsSpeakToLiveChat")
                };
                n.faqId = i;
                var f = u.dialog(n, {
                    templateUrl: "/public/resource/templates/modal/messagePrompt.html",
                    controller: "modalInstanceCtrl"
                });
                f.result.then(function() {
                    var n = global.domains.star + global.lan + "/live-chat?region=" + uv.pd.r;
                    window.open(n, "LiveChat", "width=810, height=660")
                })
            }
        }
        n.availableFaqs = [];
        n.filteredFaqs = [];
        n.top5Faqs = [];
        n.allFaqs = [];
        n.matchFaqs = [];
        n.categories = [];
        n.widget = {
            selCategory: "all",
            searchKey: "",
            guId: ""
        };
        n.onInit = e;
        n.switchFaqsCategory = f;
        n.feedback = o;
        n.confirm = confirm;
        n.$watch("widget.searchKey", function(i) {
            n.matchFaqs = t("filter")(n.allFaqs, function(n) {
                return n.tags.indexOf(i) != -1 || n.subject.indexOf(i) != -1
            })
        })
    }
    function f(n, t, i, r, u) {
        function f() {
            var t = {
                regionCode: uv.pd.r,
                languageCode: global.lan
            }
              , i = u.fetch("GET", "/service/faqsApi/getRegionFaqsCategories", t);
            i.then(function(t) {
                n.faqsCategories = t
            })
        }
        n.onInit = f
    }
    function e(n, t, i, r, u, f) {
        function o() {
            n.form.guId = getGuid;
            r.all({
                payOpts: f.fetch("GET", "/service/prodApi/getPaymentOpts", n.form),
                filtersOpts: f.fetch("GET", "/service/prodApi/GetAllFilters", {
                    lanaguageCode: global.lan
                })
            }).then(function(t) {
                var i = JSON.parse(t.payOpts) || {};
                n.allpaymentOpts = i[n.widget.optType][0].pOpts;
                n.widget.opts = t.filtersOpts;
                e()
            })
        }
        function e() {
            n.filteredOpts = t("filter")(n.allpaymentOpts, function(t) {
                return t.supportedCountry.indexOf(n.czfilter.selcountry) != -1 && t.supportedCurrency.indexOf(n.czfilter.selcurrency) != -1
            }, !0);
            angular.forEach(n.allpaymentOpts, function(n) {
                n.showDesc = !1
            })
        }
        n.onInit = o;
        n.form = {
            guId: ""
        };
        n.widget = {
            optType: i.paymentoptsContent || "Deposit",
            opts: {
                countries: [],
                currencies: []
            }
        };
        n.czfilter = {
            selcountry: uv.pd.c,
            selcurrency: uv.geod.cc
        };
        n.allpaymentOpts = [];
        n.filteredOpts = [];
        n.$watch("czfilter.selcountry", e);
        n.$watch("czfilter.selcurrency", e)
    }
    angular.module("starApp").controller("promolistCtrl", n).controller("promoTnCCtrl", t).controller("newslistCtrl", i).controller("esportsGrouplistCtrl", r).controller("faqsCtrl", u).controller("faqsCategoriesCtrl", f).controller("paymentOptsCtrl", e).directive("faqsContent", [function() {
        return {
            restrict: "A",
            controller: "faqsCtrl",
            templateUrl: "/public/resource/templates/help/faqs.tpl.html"
        }
    }
    ]).directive("faqsCategories", [function() {
        return {
            restrict: "A",
            controller: "faqsCategoriesCtrl"
        }
    }
    ]).directive("generalPromolist", ["$window", function(n) {
        return {
            restrict: "A",
            controller: "promolistCtrl",
            templateUrl: "/public/resource/templates/widgets/general-promolist.wg.html",
            link: function(t, i) {
                t.categoryWidth = $(i).width();
                angular.element(n).bind("resize", function() {
                    t.categoryWidth = $(i).width()
                })
            }
        }
    }
    ]).directive("generalNewslist", ["$window", function(n) {
        return {
            restrict: "A",
            scope: !0,
            controller: "newslistCtrl",
            templateUrl: "/public/resource/templates/widgets/general-newslist.wg.html",
            link: function(t, i) {
                t.categoryWidth = $(i).width();
                angular.element(n).bind("resize", function() {
                    t.categoryWidth = $(i).width()
                })
            }
        }
    }
    ]).directive("sbkItems", function() {
        return {
            restrict: "A",
            link: function(n) {
                n.sportsItems = [{
                    key: "football",
                    value: "navSbkRulesFootball"
                }, {
                    key: "american-football",
                    value: "navSbkRulesAmericanFootball"
                }, {
                    key: "cricket",
                    value: "navSbkRulesCricket"
                }, {
                    key: "lottery",
                    value: "navSbkRulesLottery"
                }, {
                    key: "tennis",
                    value: "navSbkRulesTennis"
                }, {
                    key: "baseball",
                    value: "navSbkRulesBaseball"
                }, {
                    key: "cycling",
                    value: "navSbkRulesCycling"
                }, {
                    key: "golf",
                    value: "navSbkRulesGolf"
                }, {
                    key: "motor-racing",
                    value: "navSbkRulesMotorRacing"
                }, {
                    key: "track-and-field",
                    value: "navSbkRulesTrackandField"
                }, {
                    key: "basketball",
                    value: "navSbkRulesBasketball"
                }, {
                    key: "darts",
                    value: "navSbkRulesDarts"
                }, {
                    key: "handball",
                    value: "navSbkRulesHandball"
                }, {
                    key: "rugby",
                    value: "navSbkRulesRugby"
                }, {
                    key: "volleyball",
                    value: "navSbkRulesVolleyball"
                }, {
                    key: "boxing",
                    value: "navSbkRulesBoxing"
                }, {
                    key: "specials",
                    value: "navSbkRulesSpecials"
                }, {
                    key: "ice-hockey",
                    value: "navSbkRulesIceHockey"
                }, {
                    key: "financial-bets",
                    value: "navFinsRoot"
                }]
            }
        }
    }).directive("esportsGrouplist", [function() {
        return {
            restrict: "A",
            controller: "esportsGrouplistCtrl",
            templateUrl: "/public/resource/templates/widgets/esports-grouplist.wg.html"
        }
    }
    ]).directive("promoContent", [function() {
        return {
            restrict: "A",
            controller: "promoTnCCtrl",
            templateUrl: "/public/resource/templates/help/promoTnC.tpl.html"
        }
    }
    ]).directive("paymentoptsContent", [function() {
        return {
            restrict: "A",
            controller: "paymentOptsCtrl",
            templateUrl: "/public/resource/templates/help/faqs-banking.tpl.html"
        }
    }
    ]).directive("luckyWheel", [function() {
        return {
            restrict: "A",
            controller: "promoTnCCtrl"
        }
    }
    ]);
    n.$inject = ["$scope", "$filter", "$translate", "$timeout", "dataService"];
    t.$inject = ["$scope", "$filter", "$translate", "dataService", "$element", "$attrs"];
    i.$inject = ["$rootScope", "$scope", "$filter", "$translate", "$attrs", "dataService"];
    r.$inject = ["$scope", "$filter", "$interval", "dataService"];
    u.$inject = ["$scope", "$filter", "$q", "$translate", "dataService"];
    f.$inject = ["$scope", "$filter", "$q", "$translate", "dataService"];
    e.$inject = ["$scope", "$filter", "$attrs", "$q", "$translate", "dataService"]
}(),
function() {
    "use strict";
    function n(n, t, i, r) {
        function f() {
            n.general = global.generals.live;
            n.general.partners = n.general.partners.filter(function(n) {
                return n.attrs.SupportDesktop[0] === "true"
            });
            n.general.partners = t("attrsFilter")(n.general.partners, "disallow", uv.pd.r);
            angular.forEach(n.general.partners, function(n) {
                n.isMaintain = t("filter")(global.modules, function(t) {
                    return t.id == global.generals.live.Id + n.id && t.status != 0
                }, !0).length > 0
            });
            var i = n.general.partners.length > 1 ? -1 : 11;
            u(i)
        }
        function u(t) {
            t = t || n.widget.selpartner;
            var i = {
                Partner: t,
                LanguageCode: global.lan
            }
              , u = r.fetch("POST", "/service/livecsnApi/getcategoryGames", i);
            u.then(function(i) {
                n.widget.selpartner = t;
                n.categorygames = i
            })
        }
        function e(n) {
            return function(i) {
                return t("filter")(n, {
                    partnerId: i.id
                }, !0).length > 0
            }
        }
        n.widget = {
            selpartner: -1,
            gameLimit: 20,
            filterSwitch: !1
        };
        n.categorygames = [];
        n.onInit = f;
        n.getCategoryGames = u;
        n.filterperGame = e
    }
    function t(n, t, i, r) {
        function u() {
            var t = location.pathname.split("/"), i, u;
            n.gameName = t.length === 4 ? t[3] : "";
            n.general = global.generals.live;
            i = {
                gameName: n.gameName
            };
            u = r.fetch("GET", "/service/livecsnApi/getCategoryGameInfo", i);
            u.then(function(t) {
                n.categameInfo = t
            })
        }
        function f(n) {
            return function(i) {
                return t("filter")(n, {
                    partnerId: i.id
                }, !0).length > 0
            }
        }
        n.categameInfo = {};
        n.onInit = u;
        n.filterperGame = f
    }
    angular.module("starApp").controller("liveGamelistCtrl", n).controller("liveGameinfoCtrl", t).directive("liveGamelist", [function() {
        return {
            restrict: "A",
            controller: "liveGamelistCtrl",
            templateUrl: "/public/resource/templates/widgets/live-gamelist.wg.html"
        }
    }
    ]).directive("liveGamepopup", [function() {
        return {
            restrict: "A",
            templateUrl: "/public/resource/templates/widgets/live-gamePopup.tpl.html"
        }
    }
    ]).directive("livelauncher", ["$filter", "$translate", "gameService", "dataService", "$rootScope", function(n, t, i, r, u) {
        return {
            restrict: "A",
            link: function(f, e, o) {
                function p() {
                    return s.partnerName == "Imperial-Suite" ? (window.open(s.url, s.windowName, "left=20,top=100,width=1024,height=768,toolbar=0,resizable=1"),
                    !1) : !0
                }
                function a() {
                    var i = "", u = n("filter")(global.generals.live.partners, {
                        id: v * 1
                    }, !0)[0], t, r, f;
                    switch (y) {
                    case "download":
                        t = n("filter")(u.resource, {
                            key: "DownloadSrc"
                        }, !0);
                        angular.isUndefined(t) || angular.isUndefined(t[0].lanVals) || t[0].lanVals.length == 0 ? e.remove() : (r = n("filter")(t[0].lanVals, {
                            LangCode: global.lan
                        }, !0),
                        f = n("filter")(t[0].lanVals, {
                            LangCode: "en-gb"
                        }, !0),
                        i = r && r.length != 0 ? r[0].Value : f[0].Value);
                        break;
                    default:
                        i = "/" + global.lan + "/live/lobby?partnerName=" + u.uniqueKey;
                        angular.isUndefined(c) || (i += "&gameType=" + c)
                    }
                    o.$set("href", i);
                    o.$set("target", s.windowName);
                    s.url = i;
                    s.partnerName = u.uniqueKey
                }
                var v = o.livelauncher || ""
                  , y = o.launcherType || "playNow"
                  , c = o.launcherGame || ""
                  , s = {
                    game: "live-csn",
                    windowName: "livecsngamelauncher"
                }
                  , h = u.$new()
                  , l = {
                    templateUrl: "/public/resource/templates/modal/messageAlert.html",
                    backdrop: "static",
                    controller: "modalInstanceCtrl"
                };
                a();
                f.$watch(o, a);
                f.openLiveWindow = p;
                e.bind("click", function() {
                    var n;
                    uv.sessionD.login ? uv.sessionD.suspended || uv.sessionD.excluded ? (h.msg = {
                        title: t.instant("txtBtnLogin"),
                        content: t.instant("msgResGamingExclusion")
                    },
                    r.dialog(h)) : s.partnerName == "Royal-Suite" && (uv.geod.cc == "IDR" || uv.geod.cc == "VND" || uv.geod.cc == "KRW") ? (h.msg = {
                        title: t.instant("txtComNotice"),
                        content: t.instant("msgCsnTruncated")
                    },
                    n = r.dialog(h, l),
                    n.result.then(function() {
                        i.launch(s)
                    })) : s.partnerName == "Imperial-Suite" && (uv.geod.cc == "IDR" || uv.geod.cc == "VND") ? (h.msg = {
                        title: t.instant("txtComNotice"),
                        content: t.instant("msgCsnTruncated")
                    },
                    n = r.dialog(h, l),
                    n.result.then(function() {
                        i.launch(s)
                    })) : i.launch(s) : (h.msg = {
                        title: t.instant("txtBtnLogin"),
                        content: t.instant("msgCommonRequestLogin")
                    },
                    r.dialog(h));
                    event.stopPropagation();
                    event.preventDefault()
                })
            }
        }
    }
    ]).directive("liveGameinfo", [function() {
        return {
            restrict: "A",
            controller: "liveGameinfoCtrl",
            templateUrl: "/public/resource/templates/widgets/live-gameInfo.tpl.html"
        }
    }
    ]);
    n.$inject = ["$scope", "$filter", "$translate", "dataService"];
    t.$inject = ["$scope", "$filter", "$translate", "dataService"]
}(),
function() {
    "use strict";
    function n(n, t, i, r, u) {
        function f() {
            n.intervalTime && i.cancel(n.intervalTime);
            n.marketInfos = global.generals.lotto.categories;
            var o = u.fetch("GET", "/service/prodApi/getprodFeeds", {
                prodName: "lotto",
                feedKey: ""
            });
            o.then(function(r) {
                n.marketfeed = t("orderBy")(r.KenoMarket, "fv2");
                var u = e(n.marketInfos);
                n.intervalTime = i(function() {
                    var r = -1
                      , u = t("filter")(n.marketInfos, function(n) {
                        return n.startTime < (new Date).valueOf() && n.status == "open"
                    }, !0);
                    u.length > 0 && (r = e(u));
                    r == 0 && i.cancel(n.intervalTime)
                }, 1e3);
                u == 0 && i.cancel(n.intervalTime)
            });
            r(f, 3e5)
        }
        function e(i) {
            angular.forEach(i, function(i) {
                var f = (new Date).valueOf()
                  , r = t("filter")(n.marketfeed, function(n) {
                    return n.fv0 == i.uniqueKey && n.fv2 > f
                }, !0)
                  , u = t("filter")(n.marketfeed, {
                    fv0: i.uniqueKey
                }, !0);
                r.length > 0 ? (i.marketName = r[0].fv0,
                i.drawNumber = r[0].fv1,
                i.startTime = r[0].fv2,
                i.counterId = r[0].fv3,
                i.status = "open") : u.length > 0 && (i.marketName = u[0].fv0,
                i.drawNumber = u[0].fv1,
                i.startTime = u[0].fv2,
                i.counterId = u[0].fv3,
                i.status = "closed")
            });
            var r = t("filter")(n.marketInfos, function(n) {
                return n.status == "open"
            }, !0);
            return r.length
        }
        n.widget = {};
        n.onInit = f
    }
    function t(n, t) {
        function i() {
            n.lottoPartners = t("attrsFilter")(global.generals.lotto.partners, "disallow", uv.pd.r);
            n.lottoPartners = n.lottoPartners.filter(function(n) {
                return n.attrs.SupportDesktop[0] === "true"
            })
        }
        n.onInit = i
    }
    angular.module("starApp").controller("lottoMarketinfoCtrl", n).controller("lottoinfoCtrl", t).directive("lottoMarketlist", [function() {
        return {
            restrict: "A",
            controller: "lottoMarketinfoCtrl",
            templateUrl: "/public/resource/templates/widgets/lotto-marketlist.wg.html"
        }
    }
    ]).directive("lottoIlotto", [function() {
        return {
            restrict: "A",
            controller: "lottoinfoCtrl",
            templateUrl: "/public/resource/templates/widgets/lotto-ilotto.wg.html"
        }
    }
    ]).directive("lottolauncher", ["$translate", "dataService", "gameService", function(n, t, i) {
        return {
            restrict: "A",
            link: function(r, u, f) {
                function o(n) {
                    e.url = n;
                    f.$set("href", n);
                    f.$set("target", e.windowName)
                }
                var s = "/" + global.lan + "/lotto/lobby"
                  , e = {
                    game: "lotto",
                    windowName: "lottogamelauncher"
                };
                o(s);
                r.$watch(function() {
                    return $(u).attr("lottolauncher")
                }, function(n) {
                    if (n) {
                        var t = "/" + global.lan + "/lotto/lobby" + (n ? "?partnerId=" + n : "");
                        o(t)
                    }
                });
                r.$watch(function() {
                    return $(u).attr("counterlauncher")
                }, function(n) {
                    if (n) {
                        var t = "/" + global.lan + "/lotto/lobby" + (n ? "?counterId=" + n : "");
                        o(t)
                    }
                });
                u.bind("click", function() {
                    if (!uv.sessionD.login)
                        return r.msg = {
                            title: n.instant("txtBtnLogin"),
                            content: n.instant("msgCommonRequestLogin")
                        },
                        t.dialog(r),
                        event.stopPropagation(),
                        event.preventDefault(),
                        !1;
                    if (uv.sessionD.suspended || uv.sessionD.excluded)
                        return r.msg = {
                            title: n.instant("txtBtnLogin"),
                            content: n.instant("msgResGamingExclusion")
                        },
                        t.dialog(r),
                        event.stopPropagation(),
                        event.preventDefault(),
                        !1;
                    i.launch(e)
                })
            }
        }
    }
    ]).directive("lottoMarketbox", [function() {
        return {
            restrict: "A",
            link: function(n, t) {
                t.bind("mouseover", function() {
                    t.addClass("active")
                }).bind("mouseleave", function() {
                    t.removeClass("active")
                })
            }
        }
    }
    ]);
    n.$inject = ["$scope", "$filter", "$interval", "$timeout", "dataService"];
    t.$inject = ["$scope", "$filter"]
}(),
function() {
    "use strict";
    function n(n, t, i, r, u, f) {
        function s() {
            var t = f.fetch("POST", "/service/pokerApi/getTournaments", {
                Category: "TournamentsFeed"
            });
            t.then(function(t) {
                n.widget.pageIndex = 1;
                n.tournaments = t;
                e(0)
            })
        }
        function e(i) {
            var r;
            n.widget.pageIndex = 1;
            var u = o[i]
              , f = (new Date).valueOf()
              , e = t("filter")(n.tournaments, function(n) {
                var t = n.attrs["buy-in"] * 1 + n.attrs.fee * 1;
                return t >= u.min && t <= u.max && n.createDate >= f
            }, !0);
            n.currnetGames = t("orderBy")(e, "createDate");
            n.widget.tabIndex = i;
            r = n.widget.pageIndex * n.widget.pageSize - n.widget.pageSize;
            n.widget.totalPage = Math.ceil(n.currnetGames.length / n.widget.pageSize);
            n.perPageGames = n.currnetGames.slice(r, r + n.widget.pageSize)
        }
        n.tournaments = [];
        n.currnetGames = [];
        n.perPageGames = [];
        n.widget = {
            tabIndex: 1,
            pageIndex: 1,
            pageSize: 10,
            totalPage: 1,
            sortcolum: "",
            reverse: !1
        };
        n.onInit = s;
        n.switchTournaments = e;
        var o = [{
            min: .01,
            max: 50
        }, {
            min: 50,
            max: 99999
        }, {
            min: 0,
            max: .01
        }];
        n.$watch("widget.pageIndex", function() {
            var t = n.widget.pageIndex * n.widget.pageSize - n.widget.pageSize;
            n.perPageGames = n.currnetGames.slice(t, t + n.widget.pageSize)
        })
    }
    angular.module("starApp").controller("pokerTournamentsCtrl", n).directive("pokerTournaments", [function() {
        return {
            restrict: "A",
            controller: "pokerTournamentsCtrl",
            templateUrl: "/public/resource/templates/widgets/poker-tournaments.wg.html"
        }
    }
    ]).directive("badbeatJackpot", ["$filter", function(n) {
        return {
            restrict: "A",
            link: function(t, i) {
                var r = global.generals.poker.feeds.BadbeatJackpot || "";
                i.text(n("currency")(r[0].fv0, "€"))
            }
        }
    }
    ]).directive("pokerlauncher", ["$translate", "$filter", "gameService", "dataService", "$rootScope", function(n, t, i, r, u) {
        return {
            restrict: "A",
            link: function(f, e, o) {
                var c = o.pokerlauncher
                  , l = t("filter")(global.generals.poker.partners, {
                    id: 8
                }, !0)
                  , a = t("filter")(l[0].resource, {
                    key: "DownloadSrc"
                }, !0)
                  , h = {
                    game: "poker",
                    windowName: "pokergamelauncher"
                }
                  , v = c != "instant" ? l.length == 1 && a[0].lanVals[0].Value ? a[0].lanVals[0].Value : "" : "/" + global.lan + "/poker/postform"
                  , s = u.$new();
                o.$set("href", v);
                o.$set("target", h.windowName);
                e.bind("click", function() {
                    if (uv.sessionD.suspended || uv.sessionD.excluded)
                        return s.msg = {
                            title: n.instant("txtBtnLogin"),
                            content: n.instant("msgResGamingExclusion")
                        },
                        r.dialog(s),
                        !1;
                    if (c == "instant" && !uv.sessionD.login)
                        return s.msg = {
                            title: n.instant("txtBtnLogin"),
                            content: n.instant("msgCommonRequestLogin")
                        },
                        r.dialog(s),
                        !1;
                    if (c == "instant") {
                        if (h.url = v,
                        uv.geod.cc == "IDR" || uv.geod.cc == "VND" || uv.geod.cc == "KRW") {
                            s.msg = {
                                title: n.instant("txtComNotice"),
                                content: n.instant("msgPokerCurrencyCondition")
                            };
                            var t = r.dialog(s, h);
                            t.result.then(function() {
                                i.launch(h)
                            })
                        } else
                            i.launch(h);
                        event.stopPropagation();
                        event.preventDefault()
                    }
                })
            }
        }
    }
    ]);
    n.$inject = ["$scope", "$filter", "$q", "$cookies", "$translate", "dataService"]
}(),
function() {
    "use strict";
    angular.module("starApp").directive("racingGame", ["dataService", function(n) {
        return {
            restrict: "A",
            templateUrl: "/public/resource/templates/widgets/racing-game.wg.html",
            scope: !0,
            link: function(t) {
                var i = n.fetch("GET", "/service/racingApi/getFrameSrc", {
                    language: global.lan
                });
                i.then(function(n) {
                    t.iframeSrc = n
                })
            }
        }
    }
    , ]).filter("trusted", ["$sce", function(n) {
        return function(t) {
            return n.trustAsResourceUrl(t)
        }
    }
    , ])
}(),
function() {
    "use strict";
    function r() {
        var n = {
            Albania: "ALB",
            France: "FRA",
            Romania: "ROU",
            Switzerland: "SUI",
            England: "ENG",
            Russia: "RUS",
            Slovakia: "SVK",
            Wales: "WAL",
            Germany: "GER",
            "Northern Ireland": "NIR",
            Poland: "POL",
            Ukraine: "UKR",
            Croatia: "CRO",
            "Czech Republic": "CZE",
            Spain: "ESP",
            Turkey: "TUR",
            Belgium: "BEL",
            "Republic Of Ireland": "IRL",
            Italy: "ITA",
            Sweden: "SWE",
            Austria: "AUT",
            Hungary: "HUN",
            Iceland: "ISL",
            Portugal: "POR"
        };
        return function(t) {
            return n[t] || n.France
        }
    }
    function n(n, t, i, r) {
        function u() {
            n.sportId = i.sportid || "";
            n.competitionId = i.competitionid || "-1";
            n.eventId = (i.eventid || "0") * 1;
            n.widgetEvs.guId = getGuid();
            var u = global.domains.sbkfeed + "/" + global.lan + "/Service/OddsService?GetEventsByCompetitions"
              , f = {
                guId: n.widgetEvs.guId,
                Language: global.lan,
                SportId: n.sportId,
                CompetitionIds: n.competitionId,
                OddsType: uv.sessionD.oddsType,
                TimeZoneUtcOffset: uv.geod.utcoffset
            }
              , e = r.fetch("JSONP", u, f);
            e.then(function(i) {
                n.widgetEvs.furture = i["further-evs"] || [];
                n.widgetEvs.targetEv = t("filter")(n.widgetEvs.furture[0].events, {
                    eventId: n.eventId
                }, !0)[0] || {}
            })
        }
        n.widgetEvs = {
            guId: 0,
            inplay: [],
            furture: [],
            targetEv: {}
        };
        u()
    }
    function t(n, t, i, r, u) {
        function o() {
            angular.isDefined(f) && (r.cancel(f),
            f = undefined)
        }
        function s(n) {
            if (t.widgetEvs.furture && t.widgetEvs.furture[0].events.length != 0) {
                var i = t.widgetEvs.furture[0].events.length < t.widgetEvs.targetIndex ? 0 : t.widgetEvs.targetIndex
                  , r = Math.min(t.widgetEvs.counter, t.widgetEvs.furture[0].events.length);
                switch (n) {
                case "prev":
                    i = i - 1 < 0 ? r - 1 : i - 1;
                    break;
                case "next":
                    i = (i + 1) % r
                }
                $("#carousel-eurocup-match").carousel(i);
                t.widgetEvs.targetIndex = i;
                t.widgetEvs.counter = r;
                t.widgetEvs.targetEv = t.widgetEvs.furture[0].events[i];
                h(t.widgetEvs.targetEv)
            }
        }
        function e() {
            t.sportsId = t.sportsId || "";
            t.competitionIds = t.competitionIds || "-1";
            o();
            t.widgetEvs.isLoading = !0;
            var n = global.domains.sbkfeed + "/" + global.lan + "/Service/OddsService?GetEventsByCompetitions"
              , h = {
                guId: t.widgetEvs.guId,
                Language: global.lan,
                SportId: t.sportsId,
                CompetitionIds: t.competitionIds,
                OddsType: uv.sessionD.oddsType,
                TimeZoneUtcOffset: uv.geod.utcoffset
            }
              , c = u.fetch("JSONP", n, h);
            c.then(function(n) {
                t.widgetEvs.inplay = n["inplay-evs"] || [];
                t.widgetEvs.furture = n["further-evs"] || [];
                t.widgetEvs.timer = (new Date).valueOf() + 9e4;
                angular.forEach(t.widgetEvs.furture[0].events || [], function(n) {
                    n.data.HomeShort = i("getTeamname")(n.data.HomeShort);
                    n.data.AwayShort = i("getTeamname")(n.data.AwayShort)
                });
                s();
                f = r(e, 9e4);
                t.widgetEvs.isLoading = !1
            }, function() {
                t.widgetEvs.isLoading = !1
            })
        }
        function h(n) {
            var r = i("date")(n.eventDate, "MMdd", "+0:00") + n.data.HomeShort + n.data.AwayShort + ".html";
            t.contentPath = global.domains.content + "/MB/" + global.lan + "/2016-euro/headtohead/" + r
        }
        t.wgclient = {
            timezone: uv.geod.timezone,
            lan: global.lan
        };
        t.onInit = e;
        t.stopInterval = o;
        t.setContentPath = h;
        t.changeTargetEv = s;
        t.widgetEvs = {
            isLoading: !1,
            timer: 90,
            allevs: [],
            inplay: [],
            furture: [],
            counter: 3,
            targetIndex: 0,
            targetEv: null
        };
        t.contentPath = "";
        var f;
        e()
    }
    function i(n, t, i, r, u) {
        function o() {
            angular.isDefined(f) && (r.cancel(f),
            f = undefined)
        }
        function e() {
            t.sportsId = t.sportsId || "";
            t.competitionIds = t.competitionIds || "-1";
            o();
            t.widgetEvs.isLoading = !0;
            var n = global.domains.sbkfeed + "/" + global.lan + "/Service/OddsService?GetEventsByCompetitions"
              , s = {
                guId: t.widgetEvs.guId,
                Language: global.lan,
                SportId: t.sportsId,
                CompetitionIds: t.competitionIds,
                OddsType: uv.sessionD.oddsType,
                TimeZoneUtcOffset: uv.geod.utcoffset
            }
              , h = u.fetch("JSONP", n, s);
            h.then(function(n) {
                t.widgetEvs.inplay = n["inplay-evs"] || [];
                t.widgetEvs.furture = n["further-evs"] || [];
                t.widgetEvs.timer = (new Date).valueOf() + 9e4;
                var u = t.widgetEvs.inplay.length > 0 ? t.widgetEvs.inplay[0].events : []
                  , o = t.widgetEvs.furture.length > 0 ? t.widgetEvs.furture[0].events : [];
                u.push.apply(u, o);
                angular.forEach(u, function(n) {
                    n.data.HomeShort = i("getTeamname")(n.data.HomeShort);
                    n.data.AwayShort = i("getTeamname")(n.data.AwayShort)
                });
                t.widgetEvs.allevs = u;
                f = r(e, 9e4);
                t.widgetEvs.isLoading = !1
            }, function() {
                t.widgetEvs.isLoading = !1
            })
        }
        function s() {
            var n = (new Date).valueOf()
              , i = 72e5;
            n > 1465930800001 + i && (t.widgetEvs.activeTab = 1);
            n > 1466276400001 + i && (t.widgetEvs.activeTab = 2);
            n > 1466622000001 + i && (t.widgetEvs.activeTab = 3)
        }
        t.onInit = e;
        t.widgetEvs = {
            isLoading: !1,
            timer: 90,
            allevs: [],
            inplay: [],
            furture: [],
            activeTab: 0
        };
        s();
        var f;
        e()
    }
    angular.module("starApp").filter("getTeamname", r).controller("sportsEventCtrl", n).controller("sportsScheduleCtrl", i).controller("sportsUpcomingpanelCtrl", t).directive("sportsEventodds", [function() {
        return {
            restrict: "A",
            controller: "sportsEventCtrl"
        }
    }
    ]).directive("sportsEurocupSchedule", [function() {
        return {
            restrict: "A",
            scope: {
                sportsId: "@sportsOddsfeed",
                competitionIds: "@competitionids"
            },
            controller: "sportsScheduleCtrl",
            templateUrl: "/public/resource/templates/widgets/sports-eurocup-schedule.wg.html"
        }
    }
    ]).directive("eurocupGroupstage", ["$filter", function(n) {
        return {
            restrict: "A",
            scope: {
                seasonid: "@eurocupGroupstage"
            },
            templateUrl: "/public/resource/templates/widgets/eurocup-groupstage.tpl.html",
            link: function(t, i, r) {
                function f() {
                    for (var f = [], o = new Date(n("date")(t.matchfrom, "MM/dd/yyyy UTC" + uv.geod.timezone)).valueOf(), e = 864e5, r, i = o; i < t.matchto; )
                        r = {
                            eventDate: i,
                            matches: []
                        },
                        r.matches = n("filter")(u, function(n) {
                            return n.fv2 * 1 >= i && n.fv2 * 1 < i + e
                        }, !0),
                        f.push(r),
                        i = i + e;
                    t.schduleMatchesBydate = f
                }
                function e(t) {
                    angular.forEach(u, function(i) {
                        var r = n("filter")(t, function(n) {
                            return n.eventDate == i.fv2 * 1 && (n.data.HomeShort == i.fv3 || n.data.HomeShort == i.fv4)
                        });
                        i.evOdds = r.length > 0 ? r[0] : {};
                        i.needSwitch = r.length > 0 && r[0].data.HomeShort != i.fv3;
                        i.isInplay = i.fv2 * 1 < (new Date).valueOf();
                        i.isInplay && r.length > 0 && (i.boxscore.home = {
                            fv4: i.evOdds.data.HomeScore || "0"
                        },
                        i.boxscore.away = {
                            fv4: i.evOdds.data.AwayScore || "0"
                        })
                    });
                    f()
                }
                t.matchfrom = (r.matchfrom || 0) * 1;
                t.matchto = (r.matchto || 0) * 1;
                t.wgclient = {
                    timezone: uv.geod.timezone,
                    lan: global.lan
                };
                var u = n("filter")(global.generals.sports.feeds.Schedule, function(n) {
                    return n.fv0 == t.seasonid && n.fv2 * 1 >= t.matchfrom && n.fv2 * 1 < t.matchto
                }, !0);
                t.schduleMatchesBydate = [];
                t.parentWidgetEvs = t.$parent.widgetEvs;
                t.$watch("parentWidgetEvs", function() {
                    if (t.parentWidgetEvs.allevs.length == 0) {
                        f();
                        return
                    }
                    e(t.parentWidgetEvs.allevs)
                }, !0)
            }
        }
    }
    ]).directive("eurocupPlayoff", ["$filter", function(n) {
        return {
            restrict: "A",
            scope: {
                seasonid: "@eurocupPlayoff",
                matchfrom: "@matchfrom",
                matchto: "@matchto"
            },
            templateUrl: "/public/resource/templates/widgets/eurocup-playoff.tpl.html",
            link: function(t) {
                function i(i) {
                    angular.forEach(t.playoffmatches, function(t) {
                        var r = n("filter")(i, function(n) {
                            return n.eventDate == t.fv2 * 1
                        });
                        t.evOdds = r.length > 0 ? r[0] : {};
                        t.needSwitch = r.length > 0 && r[0].data.HomeShort != t.fv3;
                        t.isInplay = t.fv2 * 1 < (new Date).valueOf();
                        t.isInplay && r.length > 0 && (t.boxscore.home = {
                            fv4: t.evOdds.data.HomeScore || "0"
                        },
                        t.boxscore.away = {
                            fv4: t.evOdds.data.AwayScore || "0"
                        })
                    })
                }
                t.wgclient = {
                    timezone: uv.geod.timezone,
                    lan: global.lan
                };
                t.matchfrom = t.matchfrom * 1;
                t.matchto = t.matchto * 1;
                t.playoffmatches = n("filter")(global.generals.sports.feeds.Schedule, function(n) {
                    return n.fv0 == t.seasonid && n.fv2 * 1 >= t.matchfrom && n.fv2 * 1 < t.matchto
                }, !0);
                t.parentWidgetEvs = t.$parent.widgetEvs;
                t.$watch("parentWidgetEvs", function() {
                    t.parentWidgetEvs.allevs.length != 0 && i(t.parentWidgetEvs.allevs)
                }, !0)
            }
        }
    }
    ]).directive("sportsStanding", ["$filter", function(n) {
        return {
            restrict: "A",
            scope: {
                seasonid: "@sportsStanding"
            },
            templateUrl: "/public/resource/templates/widgets/sports-standing.wg.html",
            link: function(t) {
                t.wgclient = {
                    timezone: uv.geod.timezone,
                    lan: global.lan
                };
                t.teamStanding = n("filter")(global.generals.sports.feeds.Standing, {
                    fv0: t.seasonid
                }, !0);
                angular.forEach(t.teamStanding, function(n) {
                    n.fv4 = n.fv4 != "" ? n.fv4 * 1 : 0;
                    n.fv5 = n.fv5 != "" ? n.fv5 * 1 : 0;
                    n.fv6 = n.fv6 != "" ? n.fv6 * 1 : 0;
                    n.fv7 = n.fv7 != "" ? n.fv7 * 1 : 0;
                    n.fv8 = n.fv8 != "" ? n.fv8 * 1 : 0;
                    n.played = n.fv5 * 1 + n.fv6 * 1 + n.fv7 * 1
                })
            }
        }
    }
    ]).directive("sportsUpcomingpanel", [function() {
        return {
            restrict: "A",
            scope: {
                sportsId: "@sportsOddsfeed",
                competitionIds: "@competitionids"
            },
            controller: "sportsUpcomingpanelCtrl",
            templateUrl: "/public/resource/templates/widgets/sports-upcomingpanel.wg.html"
        }
    }
    ]);
    n.$inject = ["$scope", "$filter", "$attrs", "dataService"];
    i.$inject = ["$rootScope", "$scope", "$filter", "$interval", "dataService"];
    t.$inject = ["$rootScope", "$scope", "$filter", "$interval", "dataService"]
}(),
function(n, t) {
    "use strict";
    function i(i, r, u, f, e) {
        function y() {
            var n = u.getObject(h);
            return angular.isDefined(n) ? n : {}
        }
        function p() {
            return Boolean(n.opener)
        }
        function w() {
            if (k()) {
                t("body").addClass("inIframe");
                return
            }
            uv.sessionD.login ? (d(),
            g(),
            tt()) : (c(),
            nt())
        }
        function b() {
            o.lowBalance = o.inboxReminder = !1;
            u.putObject(h, o, {
                path: "/"
            });
            localStorage.removeItem("recommendDomain")
        }
        function k() {
            try {
                return n.self !== n.top
            } catch (t) {
                return !0
            }
        }
        function c() {
            function c() {
                u++;
                u >= 60 && (l(),
                clearInterval(f),
                s("idle"))
            }
            function l() {
                r.idleUrl = "{0}Idle/{1}/index.html".format(global.domains.content, global.lan);
                var t = {
                    templateUrl: n ? "/public/resource/templates/modal/idle.register.tpl.html" : "/public/resource/templates/modal/idle.tpl.html",
                    controller: "modalInstanceCtrl",
                    animation: !0,
                    backdrop: !1,
                    size: n ? "sm" : "",
                    windowClass: "modal-align-bottom-right idle-open"
                };
                i.dialog(r, t)
            }
            var n, u, f;
            if (o.cookieNotify && (n = location.pathname.indexOf("/sign-up") !== -1,
            !o.idle || n)) {
                var e = location.href
                  , h = ["forbidden", "page-not-found", "error"].filter(function(n) {
                    return e.indexOf(n) !== -1
                }).length > 0;
                if (!h) {
                    u = 0;
                    f = setInterval(c, 1e3);
                    t(document).on("mousemove keypress", function() {
                        u = 0
                    })
                }
            }
        }
        function d() {
            var n, u, t, f, o;
            if (uv.sessionD.landinged) {
                if (n = JSON.parse(localStorage.getItem("recommendDomain")),
                u = !0,
                n && (u = n.isShowRecDomains,
                f = n.aId == uv.sessionD.aId,
                t = n.recDomains),
                n && (!n || f) || (t = uv.sessionD.recdomain),
                !u || !t || t.length == 0)
                    return a();
                o = l(t);
                o.then(function(n) {
                    var u = n.filter(function(n) {
                        return n.isSucess == !0
                    }), t, f, o;
                    if (u.length != 0)
                        return t = e.defer(),
                        f = {
                            templateUrl: "/public/resource/templates/modal/user/recommendedDomain.tpl.html",
                            controller: "modalInstanceCtrl",
                            animation: !0,
                            size: "sm",
                            windowClass: "modal-align-mid"
                        },
                        r.recDomain = u,
                        o = i.dialog(r, f),
                        o.result.then(function() {
                            t.resolve()
                        }).finally(function() {
                            t.resolve();
                            var i = {
                                isShowRecDomains: !0,
                                aid: uv.sessionD.aId,
                                recDomains: n
                            };
                            localStorage.setItem("recommendDomain", JSON.stringify(i));
                            uv.sessionD.landinged = !1;
                            a()
                        }),
                        t.promise
                })
            }
        }
        function l(n) {
            var r = [], u = 3, t;
            return n.forEach(function(n) {
                r.push(i.fetch("GET", n.domain + "/google5dba05b2e477d3e4.html", null , u, !1))
            }),
            t = e.defer(),
            Q.allSettled(r).then(function(i) {
                i.forEach(function(t, i) {
                    var r = t.state === "fulfilled" && t.value == "google-site-verification: google5dba05b2e477d3e4.html";
                    n[i].domain = n[i].domain.replace("//", "");
                    n[i].isSucess = r;
                    n[i].remark = t.state
                });
                t.resolve(n)
            }),
            t.promise
        }
        function a() {
            var n, t;
            o.lowBalance || (n = uv.sessionD.balance <= global.lowBalance[uv.geod.cc],
            uv.sessionD.mberType === 1 && n && (t = {
                templateUrl: "/public/resource/templates/modal/lowBalance.tpl.html",
                controller: "modalInstanceCtrl",
                animation: !0,
                size: "sm",
                windowClass: "modal-align-mid"
            },
            i.dialog(null , t)),
            s("lowBalance"))
        }
        function g() {
            function n() {
                var n = r.msgCounter.inbox
                  , t = r.msgCounter.notifi
                  , u = r.msgCounter.inbox > 0
                  , e = r.msgCounter.notifi > 0;
                e && u ? f("msgInboxHasMailAndNotify").then(function(r) {
                    i.mi({
                        body: r.format(n, t)
                    })
                }) : u ? f("msgInboxHasMail").then(function(t) {
                    i.mi({
                        body: t.format(n)
                    })
                }) : e && f("msgInboxHasNotification").then(function(n) {
                    i.mi({
                        body: n.format(t)
                    })
                });
                s("inboxReminder")
            }
            o.inboxReminder || r.$on("getMsgCounter", n)
        }
        function nt() {
            if (!o.cookieNotify)
                i.dialog(r, {
                    templateUrl: "/public/resource/templates/modal/idle.cookie.tpl.html",
                    controller: "modalInstanceCtrl",
                    animation: !0,
                    backdrop: !1,
                    size: "sm",
                    windowClass: "modal-align-bottom-right"
                }).result.then(function() {
                    s("cookieNotify");
                    c()
                })
        }
        function s(n) {
            o[n] = !0;
            u.putObject(h, o, {
                path: "/",
                expires: (new Date).addDays(30)
            })
        }
        function tt() {
            function s() {
                e++;
                e % o != 0 || t || h()
            }
            function h() {
                function o() {
                    function s() {
                        v ? n.close() : location.href = "/";
                        e("Yes")
                    }
                    function h() {
                        r.$broadcast("realityCheck.no");
                        e("No")
                    }
                    function c() {
                        t = !1
                    }
                    function e(n) {
                        var t = {
                            title: "RealityCheckRespond",
                            newValue: n,
                            remarks: location.href,
                            isCreate: !0
                        };
                        i.fetch("POST", "/service/userapi/createMemberAuditLog", t)
                    }
                    t = !0;
                    r.$broadcast("realityCheck.show");
                    r.msg = {
                        title: f.instant("txtComAlert"),
                        content: f.instant("msgResGamingRemindEndSession").format(u)
                    };
                    var o = i.dialog(r, {
                        size: "sm",
                        templateUrl: "/public/resource/templates/modal/realityCheck.tpl.html",
                        controller: "modalInstanceCtrl",
                        backdrop: "static"
                    }).result;
                    o.then(s, h).finally(c)
                }
                function s() {
                    function e() {
                        t = !1
                    }
                    t = !0;
                    r.msg = {
                        title: f.instant("txtComNotice"),
                        content: f.instant("msgProfileRemindCustomer").format(u)
                    };
                    var n = i.dialog(r, {
                        size: "sm",
                        templateUrl: "/public/resource/templates/modal/messageAlert.html",
                        controller: "modalInstanceCtrl"
                    }).result;
                    n.finally(e)
                }
                var e = uv.pd.r === "UK";
                e ? o() : s()
            }
            var e = 0
              , c = setInterval(s, 1e3)
              , u = uv.sessionD.remindDuration
              , o = u * 3600
              , t = !1
        }
        var h = "check"
          , o = y()
          , v = p();
        return {
            init: w,
            initLoginCheck: b,
            checkAvailableDomain: l
        }
    }
    angular.module("starApp").factory("checkService", i).directive("checkServiceDirective", ["checkService", function(n) {
        return {
            restrict: "A",
            link: function() {
                n.init()
            }
        }
    }
    , ]);
    i.$inject = ["dataService", "$rootScope", "$cookies", "$translate", "$q"]
}(window, $),
function() {
    "use strict";
    function t(t, i, r, u, f, e, o, s) {
        function c() {
            var s = typeof ioGetBlackbox != "undefined" ? ioGetBlackbox() : "", t, f;
            i.loginform.guId = getGuid();
            t = {
                BlackBox: s.blackbox,
                Ud: i.loginform.username,
                Pd: i.loginform.password,
                guId: i.loginform.guId
            };
            f = e.fetch("POST", "/service/userapi/login", t);
            console.log(t);

            f.then(function(t) {
                var f, c, l, s;
                switch (t.returnCode) {
                case "0000":
                case "0001":
                    o.initLoginCheck();
                    t.redirectUrl.indexOf("/") != 0 || t.memberType != 1 ? window.location.href = t.memberType == 1 ? t.redirectUrl : global.domains.credit + t.redirectUrl : (f = {
                        isShowRecDomains: !1,
                        aid: "",
                        recDomains: []
                    },
                    t.returnCode == "0001" || t.recDomain.length == 0 ? (localStorage.setItem("recommendDomain", JSON.stringify(f)),
                    h(t)) : (c = o.checkAvailableDomain(t.recDomain),
                    c.then(function(n) {
                        var i = u("filter")(n, {
                            isSucess: !0
                        })
                          , o = u("filter")(i, {
                            domain: location.hostname
                        }).length > 0
                          , r = !o && i.length != 0 ? "//" + i[0].domain : ""
                          , s = {
                            failList: u("filter")(n, {
                                isSucess: !1
                            }),
                            orginalDomain: location.hostname,
                            loginDomain: r || location.hostname
                        };
                        e.fetch("POST", "/service/userapi/adddomainsreport", s);
                        r || (f.isShowRecDomains = !1,
                        f.recDomains = n,
                        localStorage.setItem("recommendDomain", JSON.stringify(f)));
                        h(t, r)
                    })));
                    break;
                case "0005":
                    i.msg = {
                        title: r.instant("txtBtnLogin"),
                        content: r.instant("msgLoginError" + t.returnCode)
                    };
                    l = {
                        templateUrl: "/public/resource/templates/modal/user/loginWithCaptcha.html",
                        controller: "userModalCaptchaLoginCtrl"
                    };
                    s = e.dialog(i, l);
                    s.rendered.then(function() {
                        n()
                    });
                    s.result.then(function(n) {
                        i.msg = {
                            title: r.instant("txtBtnLogin"),
                            content: r.instant("msgLoginError" + n)
                        };
                        e.dialog(i)
                    });
                    break;
                default:
                    i.msg = {
                        title: r.instant("txtBtnLogin"),
                        content: r.instant("msgLoginError" + t.returnCode)
                    };
                    e.dialog(i)
                }
            })
        }
        function h(n, t) {
            var t = t || ""
              , i = location.pathname + encodeURIComponent(location.search)
              , r = n.redirectUrl.substr(n.redirectUrl.indexOf("&u="))
              , u = n.redirectUrl.replace(r, "&u=" + i);
            window.location = t + u
        }
        function l(t) {
            var r = {}, u;
            switch (t) {
            case "forgotpassword":
                r = {
                    templateUrl: "/public/resource/templates/modal/user/forgotpassword.html",
                    controller: "userModal4gotPassCtrl"
                };
                break;
            case "forgotusername":
                r = {
                    templateUrl: "/public/resource/templates/modal/user/forgotusername.html",
                    controller: "userModal4gotUnCtrl"
                }
            }
            u = e.dialog(i, r);
            u.rendered.then(function() {
                n()
            });
            u.result.then(function(n) {
                i.msg = n;
                e.dialog(i)
            })
        }
        function a() {
            uv.pd.sb = !uv.pd.sb;
            f.putObject("prefer", uv.pd, {
                path: "/",
                expires: (new Date).addDays(30)
            })
        }
        function v() {
            var n = e.fetch("POST", "/service/userapi/logout", {
                Ud: i.loginform.username
            });
            n.then(function(n) {
                localStorage.removeItem("recommendDomain");
                window.location.href = n.redirectUrl
            })
        }
        function y() {
            i.paymentMaintenance.pch = u("filter")(global.modules, function(n) {
                return n.id == 103 && n.status != 0
            }, !0).length > 0;
            i.paymentMaintenance.transfer = u("filter")(global.modules, function(n) {
                return n.id == 102 && n.status != 0
            }, !0).length > 0;
            i.paymentUrl.deposit = i.paymentMaintenance.pch ? "#" : "/" + global.lan + "/my-account/banking/deposit";
            i.paymentUrl.withdrawal = i.paymentMaintenance.pch ? "#" : "/" + global.lan + "/my-account/banking/withdrawal";
            i.paymentUrl.transfer = i.paymentMaintenance.transfer ? "#" : "/" + global.lan + "/my-account/banking/transfer"
        }
        i.loginform = {
            username: "",
            password: ""
        };
        i.showBalance = !0;
        i.onInit = y;
        i.submitLogin = c;
        i.submitLogOut = v;
        i.getBalance = s.refreshBalance;
        i.toggleBalance = a;
        i.userAssistance = l;
        i.paymentMaintenance = {
            pch: !1,
            transfer: !1
        };
        i.paymentUrl = {
            deposit: "",
            withdrawal: "",
            transfer: ""
        }
    }
    function i(t, i, r, u) {
        function f() {
            var r = {
                Ud: t.formData.username,
                Pd: t.formData.password,
                CaptchaText: t.formData.captcha
            }
              , f = u.fetch("POST", "/service/userapi/loginCaptcha", r);
            f.then(function(r) {
                switch (r.returnCode) {
                case "0000":
                case "0001":
                    window.location.href = r.redirectUrl;
                    break;
                case "0011":
                    i.close("0011");
                    break;
                default:
                    n();
                    t.errorCode = r.returnCode
                }
            })
        }
        function e() {
            i.dismiss("cancel")
        }
        t.close = e;
        t.submit = f;
        t.errorCode = "";
        t.refreshCaptcha = n;
        t.refreshCaptcha();
        t.formData = {
            username: "",
            password: "",
            captcha: ""
        }
    }
    function r(t, i, r, u) {
        function f() {
            t.formData.guId = getGuid();
            var f = {
                OldPassword: t.formData.currentPass,
                NewPassword: t.formData.newPassword,
                NewPasswordConfirm: t.formData.confirmPassword,
                CaptchaText: t.formData.captcha,
                guId: t.formData.guId
            }
              , e = u.fetch("POST", "/service/userapi/changepassword", f);
            e.then(function(u) {
                switch (u) {
                case 0:
                    t.msg = {
                        title: r.instant("txtProfileChangePassword"),
                        content: r.instant("msgSecureChangePassSuccess")
                    };
                    i.close(t.msg);
                    break;
                default:
                    n();
                    t.errorCode = u
                }
            })
        }
        function e() {
            i.dismiss("cancel")
        }
        t.close = e;
        t.submit = f;
        t.errorCode = "";
        t.pattern = {
            userId: new RegExp("^([0-9]|[a-zA-Z]){5,16}$"),
            password: new RegExp("^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]{6,})$")
        };
        t.refreshCaptcha = n;
        t.formData = {
            currentPass: "",
            newPassword: "",
            confirmPassword: "",
            captcha: "",
            guId: getGuid()
        };
        t.pattern = {
            phoneNo: new RegExp("^\\d{1,10}$"),
            nospecChar: new RegExp("^(?=.*$)(?!.*[~!@#$%^&*()-+'\";`><?|{|}])"),
            nodigits: new RegExp("^\\D{1,10}$"),
            userId: new RegExp("^([0-9]|[a-zA-Z]){5,16}$"),
            password: new RegExp("^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]{6,})$"),
            captha: new RegExp("^[a-zA-Z0-9]{5}$")
        }
    }
    function u(t, i, r, u) {
        function f() {
            t.formData.guId = getGuid();
            var f = {
                Email: t.formData.email,
                CaptchaText: t.formData.captcha,
                guId: t.formData.guId
            }
              , e = u.fetch("POST", "/service/userapi/forgotUsername", f);
            e.then(function(u) {
                switch (u) {
                case 0:
                    t.msg = {
                        title: r.instant("txtSecureForgotUserName"),
                        content: r.instant("msgSecureGetUserSuccess")
                    };
                    i.close(t.msg);
                    break;
                default:
                    n();
                    t.errorCode = u
                }
            })
        }
        function e() {
            i.dismiss("cancel")
        }
        t.close = e;
        t.submit = f;
        t.errorCode = "";
        t.refreshCaptcha = n;
        t.formData = {
            email: "",
            captcha: "",
            guId: getGuid()
        };
        t.pattern = {
            phoneNo: new RegExp("^\\d{1,10}$"),
            nospecChar: new RegExp("^(?=.*$)(?!.*[~!@#$%^&*()-+'\";`><?|{|}])"),
            nodigits: new RegExp("^\\D{1,10}$"),
            userId: new RegExp("^([0-9]|[a-zA-Z]){5,16}$"),
            password: new RegExp("^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]{6,})$"),
            captha: new RegExp("^[a-zA-Z0-9]{5}$")
        }
    }
    function f(t, i, r, u) {
        function f() {
            if (t.formData.email) {
                var i = {
                    Email: t.formData.email
                }
                  , r = u.fetch("POST", "/service/userapi/verifyrequiredemail", i);
                r.then(function(i) {
                    t.errorCode = 0;
                    switch (i.returnCode) {
                    case 0:
                        t.formData.secQuestion = i.SecureQuestion;
                        break;
                    default:
                        n();
                        t.errorCode = i.returnCode
                    }
                })
            }
        }
        function e() {
            t.formData.guId = getGuid();
            var f = {
                Email: t.formData.email,
                SecQuestion: t.formData.secQuestion,
                SecAnswer: t.formData.secAnswer,
                CaptchaText: t.formData.captcha,
                guId: t.formData.guId
            }
              , e = u.fetch("POST", "/service/userapi/verifyrequiredfields", f);
            e.then(function(u) {
                switch (u) {
                case 0:
                    t.msg = {
                        title: r.instant("txtSecureForgotPassword"),
                        content: r.instant("msgSecureResetPass")
                    };
                    i.close(t.msg);
                    break;
                default:
                    n();
                    t.errorCode = u
                }
            })
        }
        function o() {
            i.dismiss("cancel")
        }
        t.close = o;
        t.errorCode = 0;
        t.verifyEmail = f;
        t.verifyRequiredFields = e;
        t.refreshCaptcha = n;
        t.formSetp = 1;
        t.formData = {
            email: "",
            secQuestion: "",
            secAnswer: "",
            captcha: "",
            guId: ""
        };
        t.form2Data = {
            password: "",
            confirmPassword: ""
        };
        t.pattern = {
            phoneNo: new RegExp("^\\d{1,10}$"),
            nospecChar: new RegExp("^(?=.*$)(?!.*[~!@#$%^&*()-+'\";`><?|{|}])"),
            nodigits: new RegExp("^\\D{1,10}$"),
            userId: new RegExp("^([0-9]|[a-zA-Z]){5,16}$"),
            password: new RegExp("^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]{6,})$"),
            captha: new RegExp("^[a-zA-Z0-9]{5}$")
        }
    }
    function e(n, t, i) {
        function u() {
            n.guId = getGuid();
            var t = {
                languageCode: global.lan,
                guId: n.guId
            }
              , u = i.fetch("GET", "/service/userApi/getProfileVerificationDetail", t);
            u.then(function(t) {
                n.profileDocs = t;
                angular.forEach(n.profileDocs, function(n) {
                    var t = n.expiryDate - (new Date).valueOf();
                    n.expiredFlag = n.docStatus != "Accepted" || n.expiryDate == 0 ? 0 : t < 0 ? 2 : t < r ? 1 : 0;
                    n.expired = t < 0 ? 2 : t < r ? 1 : 0
                })
            })
        }
        function f(t, r) {
            var f, e;
            n.uploadDocType = t;
            f = {
                size: "fileupload",
                templateUrl: "/public/resource/templates/modal/fileupload.tpl.html",
                controller: "userFilesUploadCtrl"
            };
            n.docIdentifier = r;
            e = i.dialog(n, f);
            e.result.then(function(t) {
                u();
                n.msg = t;
                i.dialog(n)
            })
        }
        n.profileDocs = [];
        n.OnInit = u;
        n.guId = "";
        n.uploadFiles = f;
        var r = 5184e6
    }
    function o(n, t, i, r, u) {
        function o(t) {
            angular.forEach(t, function(t) {
                var i = new FileReader;
                i.onload = function() {
                    n.$apply(function() {
                        var u = t.size > f("byte") ? "sizing" : /\.(jpeg|jpg|exif|tiff|gif|bmp|png|pdf)$/i.test(t.name) ? "valid" : "extension"
                          , r = {
                            fileBody: i.result,
                            fileName: t.name,
                            size: t.size,
                            error: u
                        };
                        n.formData.files.push(r);
                        n.formData.isInvalid = n.formData.isInvalid || r.error != "valid"
                    })
                }
                ;
                i.readAsDataURL(t.file)
            })
        }
        function s(t, i) {
            var r = n.formData.files.indexOf(t);
            r != -1 && (n.formData.files.splice(r, 1),
            i.removeFile(i.files.find(function(n) {
                return n.name == t.fileName && n.size == t.size
            })));
            n.formData.isInvalid = u("filter")(n.formData.files, {
                error: "!valid"
            }, !0).length > 0
        }
        function h() {
            var t = i.fetch("GET", "/service/corshubapi/getcorshubtoken");
            t.then(function(t) {
                angular.isDefined(t) && t.length > 8 ? a(t) : n.hasError = !0
            })
        }
        function c() {
            e() ? h() : l()
        }
        function e() {
            return angular.isDefined(global.domains.corshub) && global.domains.corshub != ""
        }
        function f(t) {
            return e() ? n.sizeLimit.cors[t] : n.sizeLimit.noncors[t]
        }
        function l() {
            n.formData.guId = getGuid();
            n.formData.files = u("filter")(n.formData.files, function(n) {
                return n.size <= f("byte")
            });
            var e = i.fetch("POST", "/service/userapi/vaildateUploadFiles", n.formData);
            e.then(function(i) {
                switch (i) {
                case 0:
                    n.hasError = !1;
                    n.msg = {
                        title: r.instant("txtKycUploadDoc") + ': <span class="file-name">(' + n.docIdentifier + ")<\/span>",
                        content: r.instant("msgKycUploadSuccess")
                    };
                    t.close(n.msg);
                    break;
                default:
                    n.hasError = !0
                }
            })
        }
        function a(e) {
            n.formData.guId = getGuid();
            n.formData.corsHubToken = e;
            n.formData.files = u("filter")(n.formData.files, function(n) {
                return n.size <= f("byte")
            });
            var o = i.fetch("POST", global.domains.corshub + "/service/crosapi/vaildateUploadFiles", n.formData, 300);
            o.then(function(i) {
                switch (i) {
                case 0:
                    n.hasError = !1;
                    n.msg = {
                        title: r.instant("txtKycUploadDoc") + ': <span class="file-name">(' + n.docIdentifier + ")<\/span>",
                        content: r.instant("msgKycUploadSuccess")
                    };
                    t.close(n.msg);
                    break;
                default:
                    n.hasError = !0
                }
            })
        }
        function v() {
            t.dismiss("cancel")
        }
        n.close = v;
        n.confirm = c;
        n.hasError = !1;
        n.formData = {
            docType: n.uploadDocType,
            comment: "",
            files: [],
            isInvalid: !1,
            guId: ""
        };
        n.validfiles = o;
        n.removeFile = s;
        n.sizeLimit = {
            cors: {
                byte: 4194304,
                uiMsg: "4MB"
            },
            noncors: {
                byte: 512e3,
                uiMsg: "500KB"
            }
        };
        n.maxSizeMsg = f("uiMsg")
    }
    function n() {
        var n, t;
        !event || (event.stopPropagation(),
        event.preventDefault());
        n = $("#captchaImg");
        $("#captchaText").val("");
        t = n.attr("src");
        n.attr("src", t + "?" + (new Date).valueOf()).text("")
    }
    function s(n, t) {
        function i() {
            var i = t.fetch("GET", "/service/userapi/getBalance");
            i.then(function(t) {
                t.login || Location.reload();
                n.client.sessionD.balance = t.balance
            })
        }
        return {
            refreshBalance: i
        }
    }
    angular.module("starApp").controller("userPanelCtrl", t).controller("userModal4gotUnCtrl", u).controller("userModal4gotPassCtrl", f).controller("userModalCaptchaLoginCtrl", i).controller("userModalChangePassCtrl", r).controller("profileVerificationCtrl", e).controller("userFilesUploadCtrl", o).factory("userSerive", s).directive("profileVerification", [function() {
        return {
            restrict: "A",
            controller: "profileVerificationCtrl",
            templateUrl: "/public/resource/templates/myaccount/profile-verification.tpl.html"
        }
    }
    ]);
    t.$inject = ["$rootScope", "$scope", "$translate", "$filter", "$cookies", "dataService", "checkService", "userSerive"];
    u.$inject = ["$scope", "$uibModalInstance", "$translate", "dataService"];
    f.$inject = ["$scope", "$uibModalInstance", "$translate", "dataService"];
    i.$inject = ["$scope", "$uibModalInstance", "$translate", "dataService"];
    r.$inject = ["$scope", "$uibModalInstance", "$translate", "dataService"];
    o.$inject = ["$scope", "$uibModalInstance", "dataService", "$translate", "$filter"];
    e.$inject = ["$scope", "$translate", "dataService"];
    s.$inject = ["$rootScope", "dataService"]
}(),
function() {
    "use strict";
    function n(n, t, r, u, f) {
        function s(i) {
            i = i || (uv.pd.r == "UK" ? {
                Code: "GB",
                Id: 221
            } : {
                Code: uv.pd.c,
                Id: uv.pd.cid
            });
            t.all({
                form: f.fetch("GET", "/service/registerApi/getRegisterform", {
                    countryCode: i.Code
                }),
                preference: f.fetch("GET", "/service/registerApi/getCountryPreference", {
                    countryId: i.Id,
                    LanguageCode: global.lan
                }),
                options: f.fetch("GET", "/service/registerApi/getRegisterOptions", {
                    LanguageCode: global.lan
                })
            }).then(function(t) {
                n.options = t.options;
                n.preference = t.preference;
                n.registerForm = JSON.parse(t.form);
                n.required = {
                    MiddleName: n.registerForm.MiddleName === null ,
                    FamilyName: n.registerForm.FamilyName === null ,
                    BuildingName: n.registerForm.BuildingName === null
                };
                n.registerForm.LangCode = global.lan;
                n.registerForm.MobileNo = "";
                n.registerForm.HomeNo = "";
                n.registerForm.EmailUpdate = !0;
                n.registerForm.CountryName = "";
                r("filter")(t.options.countries, {
                    Name: n.preference.countryName
                }).length > 0 && (n.registerForm.CountryName = n.preference.countryName);
                n.registerForm.NationalityName = n.preference.countryName;
                n.registerForm.PlaceOfBirthName = n.preference.countryName;
                var i = r("filter")(n.options.phoneExt, function(t) {
                    return t.Id == n.preference.phoneExt
                }, !0).length > 0;
                n.registerForm.MobileExt = i ? n.preference.phoneExt : "-";
                n.registerForm.HomeExt = i ? n.preference.phoneExt : "-";
                n.registerForm.CurrencyCode = n.preference.defcurrency;
                n.registerForm.TimeZone = uv.geod.timezone;
                n.options.currencies = r("filter")(n.options.currencies, function(i) {
                    return t.options !== undefined && n.preference.currencies.indexOf(i.Code) != -1
                })
            })
        }
        function e(n) {
            return n && n != "" ? n + "," : ""
        }
        function h() {
            n.addressForm.guId = getGuid();
            var t = f.fetch("GET", "/service/registerApi/getAddressInfos", {
                postCode: n.registerForm.PostalCode,
                guId: n.addressForm.guId
            });
            t.then(function(t) {
                var i = {}, r = t.result == "Success" && t.rtn[0].ZipPostcode !== "", o, s;
                switch (r) {
                case !0:
                    angular.forEach(t.rtn, function(n) {
                        var t = e(n.Premise) + e(n.Building) + e(n.Street) + e(n.City) + e(n.ZipPostcode);
                        n.label = t.substring(0, t.length - 1)
                    });
                    n.addressForm = {
                        selectedOpt: t.rtn[0],
                        infomations: t.rtn
                    };
                    i = {
                        templateUrl: "/public/resource/templates/modal/user/addressInfos.html",
                        controller: "id3ModalAddressCtrl"
                    };
                    break;
                default:
                    o = t.result == "Success" ? "msgJoinUsPostalCodeUK" : "msgJoinUsUKServiceUnavailable";
                    n.msg = {
                        title: u.instant("txtJoinUsSignUp"),
                        content: u.instant(o)
                    }
                }
                s = f.dialog(n, r ? i : null );
                s.result.then(function(t) {
                    t && (n.addressForm.selectedOpt = t,
                    n.registerForm.BuildingName = t.Premise,
                    n.registerForm.BuildingNumber = t.Building,
                    n.registerForm.Street = t.Street,
                    n.registerForm.City = t.City,
                    n.registerForm.PostalCode = t.ZipPostcode)
                })
            })
        }
        function c() {
            var r = typeof ioGetBlackbox != "undefined" ? ioGetBlackbox() : "", t;
            n.registerForm.BlackBox = r.blackbox;
            n.registerForm.BirthDate = n.birth.date + "/" + n.birth.month + "/" + n.birth.year;
            n.registerForm.guId = getGuid();
            t = f.fetch("POST", "/service/registerApi/submitRegistration", n.registerForm, 90);
            t.then(function(t) {
                switch (t.returnCode) {
                case "0000":
                    window.location.href = t.redirectUrl;
                    break;
                default:
                    i();
                    n.errorCode = t.returnCode;
                    n.errorList = t.errorList;
                    n.errorList.indexOf("0004") != -1 ? n.wizard.stepIndex = 2 : n.errorList.indexOf("0003") != -1 ? n.wizard.stepIndex = 3 : (n.msg = {
                        title: u.instant("txtJoinUsSignUp"),
                        content: u.instant("msgCommonSystemError")
                    },
                    f.dialog(n))
                }
            }, function() {
                n.msg = {
                    title: u.instant("txtJoinUsSignUp"),
                    content: u.instant("msgCommonSystemError")
                };
                f.dialog(n)
            })
        }
        var o = (new Date).getFullYear();
        n.options = {};
        n.required = {
            MiddleName: !1,
            FamilyName: !1
        };
        n.dateoptions = {
            date: [31],
            month: [12],
            year: [o - 90, o - 18]
        };
        n.verifyForm = {
            userId: !1,
            email: !1,
            guId: 0
        };
        n.preference = {};
        n.registerForm = {};
        n.errorList = [];
        n.birth = {
            date: "-1",
            month: "-1",
            year: "-1"
        };
        n.wizard = {
            stepIndex: 1,
            validateStatus: !1,
            showHomeNo: !1
        };
        n.addressForm = {
            selectedOpt: "",
            infomations: [],
            guId: ""
        };
        n.pattern = {
            phoneNo: new RegExp("^\\d{1,15}$"),
            nospecCharDigit: new RegExp("^(?=.*$)(?!.*[~,_:!@#$%^&*\\[\\]()-+'\";`><?|{|}1-9])"),
            nospecChar: new RegExp("^(?=.*$)(?!.*[~,_:!@#$%^&*\\[\\]()-+'\";`><?|{|}])"),
            postCode: new RegExp("^[a-zA-Z0-9-\\s]{0,20}$"),
            nodigits: new RegExp("^\\D{1,30}$"),
            userId: new RegExp("^([0-9]|[a-zA-Z]){5,16}$"),
            password: new RegExp("^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]{6,})$"),
            captha: new RegExp("^[a-zA-Z0-9]{5}$")
        };
        n.onInit = s;
        n.refreshCaptcha = i;
        n.submitForm = c;
        n.getAddressInfo = h;
        n.$watch("registerForm.UserId", function(t) {
            if (t && n.accountForm.userId.$valid) {
                n.verifyForm.guId = getGuid();
                var i = f.fetch("POST", "/service/registerApi/verifyLoginId", {
                    loginId: t,
                    guId: n.verifyForm.guId
                });
                i.then(function(t) {
                    n.verifyForm.userId = t
                })
            }
        });
        n.$watch("registerForm.Email", function(t) {
            if (t && n.contactForm.email.$valid) {
                n.verifyForm.guId = getGuid();
                var i = f.fetch("POST", "/service/registerApi/verifyEmail", {
                    emailAddress: t,
                    guId: n.verifyForm.guId
                });
                i.then(function(t) {
                    n.verifyForm.email = t
                })
            }
        });
        n.wizardStep1 = {
            validate: function(t) {
                return !t.$dirty && t.$invalid ? !1 : n.wizardStep1.validateCountry() ? n.wizardStep1.propsValidate(t, "salutation") ? n.wizardStep1.propsValidate(t, "firstName") ? n.wizardStep1.propsValidate(t, "middleName") ? n.wizardStep1.propsValidate(t, "lastName") ? n.wizardStep1.propsValidate(t, "nationality") ? n.wizardStep1.propsValidate(t, "placeofbirth") ? n.wizardStep1.propsValidate(t, "dateofbirth") ? !0 : !1 : !1 : !1 : !1 : !1 : !1 : !1 : !1
            },
            validateCountry: function() {
                if (!n.options.countries)
                    return !1;
                return n.registerForm.CountryName && r("filter")(n.options.countries, {
                    Name: n.registerForm.CountryName
                }, !0).length > 0
            },
            propsValidate: function(t, i) {
                var u = !0, f;
                if (!t || !i || !t[i])
                    return !0;
                switch (i) {
                case "salutation":
                    if (!t.$dirty)
                        return !1;
                    u = n.registerForm.GenderId != -1;
                    break;
                case "middleName":
                    u = t[i].$valid;
                    break;
                case "firstName":
                case "lastName":
                    if (!t[i].$dirty)
                        return !1;
                    u = t[i].$valid;
                    break;
                case "nationality":
                    if (!n.options.nationalities || !n.registerForm.NationalityName)
                        return !1;
                    u = r("filter")(n.options.nationalities, {
                        Name: n.registerForm.NationalityName
                    }, !0).length > 0;
                    break;
                case "placeofbirth":
                    if (!n.options.nationalities || !n.registerForm.PlaceOfBirthName)
                        return !1;
                    u = r("filter")(n.options.nationalities, {
                        Name: n.registerForm.PlaceOfBirthName
                    }, !0).length > 0;
                    break;
                case "dateofbirth":
                    if (!t[i].$dirty || !isValidDate(n.birth.year + "-" + n.birth.month + "-" + n.birth.date))
                        return !1;
                    f = new Date(n.birth.year,n.birth.month - 1,n.birth.date).getAges();
                    u = n.birth.date !== "-1" && n.birth.month !== "-1" && n.birth.year !== "-1" && f >= 18
                }
                return u
            }
        };
        n.wizardStep2 = {
            validate: function(t) {
                return !t.$dirty && t.$invalid ? !1 : n.wizardStep2.propsValidate(t, "address") ? n.wizardStep2.propsValidate(t, "postalCode") ? n.wizardStep2.propsValidate(t, "city") ? n.wizardStep2.propsValidate(t, "email") ? n.wizardStep2.propsValidate(t, "confirmEmail") ? !n.wizardStep2.propsValidate(t, "mobileNo") && !n.wizardStep2.propsValidate(t, "homeNo") ? !1 : n.wizardStep2.propsValidate(t, "buildingName") ? n.wizardStep2.propsValidate(t, "buildingNumber") ? n.wizardStep2.propsValidate(t, "street") ? n.wizardStep2.propsValidate(t, "region") ? !0 : !1 : !1 : !1 : !1 : !1 : !1 : !1 : !1 : !1
            },
            propsValidate: function(t, i) {
                var r = !0;
                if (!t || !i || !t[i])
                    return !0;
                if (!t.$dirty)
                    return !1;
                switch (i) {
                case "address":
                case "postalCode":
                    if (!t[i].$dirty)
                        return !1;
                    r = t[i].$valid;
                    break;
                case "city":
                case "buildingNumber":
                case "street":
                    if (!t[i].$dirty && !n.addressForm.selectedOpt)
                        return !1;
                    r = t[i].$valid;
                    break;
                case "buildingName":
                case "region":
                    r = t[i].$valid;
                    break;
                case "email":
                    if (!t[i].$dirty)
                        return !1;
                    r = t[i].$valid && n.verifyForm.email == !0;
                    break;
                case "confirmEmail":
                    if (!t[i].$dirty)
                        return !1;
                    r = t[i].$valid && n.registerForm.EmailConfirm.toLowerCase() === n.registerForm.Email.toLowerCase();
                    break;
                case "mobileNo":
                    if (!t[i].$dirty)
                        return !1;
                    r = n.registerForm.MobileExt !== "-" && t[i].$valid;
                    break;
                case "homeNo":
                    if (!t[i].$dirty)
                        return !1;
                    r = n.registerForm.HomeExt !== "-" && t[i].$valid
                }
                return r
            }
        };
        n.wizardStep3 = {
            validate: function(t) {
                return !t.$dirty && t.$invalid ? !1 : n.wizardStep3.propsValidate(t, "userId") ? n.wizardStep3.propsValidate(t, "passwd") ? n.wizardStep3.propsValidate(t, "passConfirm") ? n.wizardStep3.propsValidate(t, "secureQ") ? n.wizardStep3.propsValidate(t, "secureAnswer") ? n.wizardStep3.propsValidate(t, "currency") ? !0 : !1 : !1 : !1 : !1 : !1 : !1
            },
            propsValidate: function(t, i) {
                var r = !0;
                if (!t || !i || !t[i])
                    return !0;
                if (!t.$dirty)
                    return !1;
                switch (i) {
                case "userId":
                    if (!t[i].$dirty)
                        return !1;
                    r = t[i].$valid && n.verifyForm.userId == !0;
                    break;
                case "passwd":
                    if (!t[i].$dirty)
                        return !1;
                    r = t[i].$valid && n.registerForm.Passwd.toLowerCase() != n.registerForm.UserId.toLowerCase();
                    break;
                case "passConfirm":
                    if (!t[i].$dirty)
                        return !1;
                    r = t[i].$valid && n.registerForm.PasswdConfirm === n.registerForm.Passwd;
                    break;
                case "secureQ":
                    if (!t[i].$dirty)
                        return !1;
                    r = n.registerForm.SecQuestion != -1;
                    break;
                case "secureAnswer":
                    if (!t[i].$dirty)
                        return !1;
                    r = t[i].$valid;
                    break;
                case "currency":
                    r = n.registerForm.CurrencyId != -1
                }
                return r
            }
        };
        n.$watch("registerForm.CountryName", function(t) {
            function u(n, t) {
                return !n || !t || !n.Name ? !1 : n.Name.toLowerCase().trim() === t.toLowerCase().trim()
            }
            if (n.options.countries && t && !t.Id) {
                var i = r("filter")(n.options.countries, t, u);
                i.length > 0 && (t = i[0])
            }
            n.options.countries && t && t.Id && t.Code && s(t)
        })
    }
    function t(n, t, i) {
        function r() {
            i.close(n.addressForm.selectedOpt)
        }
        function u() {
            i.dismiss("cancel")
        }
        n.close = u;
        n.confirm = r
    }
    function i() {
        var n, t;
        event.stopPropagation();
        event.preventDefault();
        n = $("#captchaImg2");
        $("#captchaCode").val("");
        t = n.attr("src");
        n.attr("src", t + "?" + (new Date).valueOf()).text("")
    }
    angular.module("starApp").controller("userRegistrationCtrl", n).controller("id3ModalAddressCtrl", t);
    n.$inject = ["$scope", "$q", "$filter", "$translate", "dataService", "$element", "$timeout"];
    t.$inject = ["$scope", "$filter", "$uibModalInstance", "$translate"]
}(),
function() {
    "use strict";
    function n(n, t, i, r) {
        if (uv.sessionD.nsdl && location.pathname.indexOf("deposit") != -1) {
            n.depositLimitVm = {
                period: 1
            };
            r.dialog(n, {
                templateUrl: "/Public/resource/templates/modal/DepositLimitPrompt.html",
                controller: "despositLimitPromptCtrl",
                backdrop: "static"
            })
        }
    }
    function t(n, t, i, r) {
        function f(n) {
            r.fetch("POST", "/service/myaccounttapi/SetDepositLimit", n).then(u)
        }
        function e() {
            r.fetch("POST", "/service/myaccounttapi/rejectDepositLimit").then(u)
        }
        function u(u) {
            u ? t.close() : (n.msg = {
                title: i.instant("navBankingDeposit"),
                content: i.instant("msgResGameDepositLimitFailed")
            },
            r.dialog(n))
        }
        n.confirm = f;
        n.reject = e
    }
    angular.module("starApp").controller("bankingPaymentCtrl", n).controller("despositLimitPromptCtrl", t);
    n.$inject = ["$scope", "$translate", "myAccountConst", "dataService"];
    t.$inject = ["$scope", "$uibModalInstance", "$translate", "dataService"]
}(window, $),
function() {
    "use strict";
    function n(n, t, i, r, u) {
        function o() {
            (uv.sessionD.excluded || uv.sessionD.suspended) && r(["txtStatementTransfer", "msgResGamingExclusion"]).then(function(t) {
                n.msg = {
                    title: t.txtStatementTransfer,
                    content: t.msgResGamingExclusion
                };
                n.hideClose = !0;
                i.dialog(n)
            });
            u.refreshBalance();
            h()
        }
        function s() {
            var n = !1, t = global.generals.live.partners.filter(function(n) {
                return n.uniqueKey === "Imperial-Suite"
            })[0], i;
            return angular.isDefined(t) && (i = t.disallow.some(function(n) {
                return n === uv.pd.r
            }),
            n = !i),
            n
        }
        function h() {
            var t = i.fetch("GET", e + "GetTransferBalance", {
                guId: f
            });
            t.then(function(t) {
                n.balance = t
            })
        }
        function c(t) {
            var i = 0;
            switch (t.from) {
            case 0:
                i = n.balance.sportsBook;
                break;
            case 6:
                i = n.balance.imperialSuite;
                break;
            case 12:
                i = n.balance.bingo
            }
            return t.from === t.to || t.from < 0 || t.to < 0 || t.amount <= 0 || t.amount > i ? !1 : !0
        }
        function l(t) {
            if ((uv.geod.cc === "VND" || uv.geod.cc === "IDR") && t.amount < 1e3)
                return n.msg = {
                    title: r.instant("txtStatementTransfer"),
                    content: r.instant("msgTransferErrorMinLimit") + 1e3 + uv.geod.cc
                },
                i.dialog(n),
                !1;
            var u = uv.sessionD.aliases && uv.sessionD.aliases.an !== null && uv.sessionD.aliases.an !== "";
            return (t.from === 12 || t.to === 12) && !u ? (n.msg = {
                title: r.instant("txtStatementTransfer"),
                content: r.instant("msgTransferCreatAliasFirst")
            },
            i.dialog(n),
            !1) : !0
        }
        function a(t) {
            if (l(t)) {
                t.guId = f;
                var o = i.fetch("POST", e + "Transfer", t);
                o.then(function(t) {
                    var f;
                    switch (t.statusCode) {
                    case 0:
                        u.refreshBalance();
                        n.msg = t;
                        f = {
                            templateUrl: "/public/resource/templates/modal/user/transferSuccessPrompt.tpl.html",
                            controller: "modalInstanceCtrl",
                            backdrop: "static"
                        };
                        i.dialog(n, f);
                        break;
                    case 203:
                        n.msg = {
                            title: r.instant("txtStatementTransfer"),
                            content: r.instant("msgTransferErrorMaxLimit")
                        };
                        i.dialog(n);
                        break;
                    case 205:
                        n.msg = {
                            title: r.instant("txtStatementTransfer"),
                            content: r.instant("msgTransferRestrictWithdrawal")
                        };
                        i.dialog(n);
                        break;
                    default:
                        n.msg = {
                            title: r.instant("txtStatementTransfer"),
                            content: r.instant("msgTransferErrorGeneral")
                        };
                        i.dialog(n)
                    }
                })
            }
        }
        var e = t.myAccountRootApi
          , f = getGuid();
        n.guId = f;
        n.transferData = {
            from: -1,
            to: -1,
            amount: 0
        };
        n.transfer = a;
        n.isValidTransferForm = c;
        n.isImperialSuiteAvalible = s();
        o()
    }
    angular.module("starApp").controller("transferCtrl", n);
    n.$inject = ["$scope", "myAccountConst", "dataService", "$translate", "userSerive"]
}(window, $),
function(n, t) {
    "use strict";
    function i(n, i, r, u, f, e) {
        function a() {
            var t = e.all({
                options: i.fetch("GET", o + "getProfileOptions", {
                    LanguageCode: global.lan,
                    guId: h
                }),
                profileVm: i.fetch("GET", o + "getProfile")
            });
            t.then(function(t) {
                var i, r, u;
                n.options = t.options;
                i = t.profileVm;
                i.howDoYouLearnAnswer.indexOf("Others,") !== -1 ? (i.howDoYouLearnOther = i.howDoYouLearnAnswer.substring(7),
                i.howDoYouLearn = i.howDoYouLearnAnswer.substring(0, 7)) : i.howDoYouLearn = i.howDoYouLearnAnswer;
                n.profileVm = i;
                s = angular.copy(i);
                r = uv.pd.r === "UK";
                u = n.profileVm.isPhotoIdAccept && n.profileVm.isAddressAccept;
                n.disableProp = n.profileVm.hasDeposit || n.profileVm.hasAdjustment || n.profileVm.kycStatus === 1 || u || r
            })
        }
        function y(n) {
            var i = t(document.forms.profileForm[n])
              , r = i.prop("tagName").toLowerCase() === "select";
            return r ? i.find("option:selected").text() : i.val()
        }
        function p() {
            return JSON.stringify(n.profileVm) !== JSON.stringify(s)
        }
        function v() {
            var i = n.profileVm, u = s, r = [], t;
            for (t in i)
                i[t] !== u[t] && r.push(t);
            n.differProp = r
        }
        function w(n, t) {
            if (!angular.isArray(t))
                return "";
            for (var i = 0; i < t.length; i++)
                if (n === t[i].Id)
                    return t[i].Name
        }
        function b(t, i) {
            var r = !0, u = t[i], f, e;
            if (!t || !i || !u)
                return !0;
            switch (i) {
            case "nationalityId":
            case "placeOfBirthId":
                if (!n.options.nationalities)
                    return !1;
                f = _.find(n.options.nationalities, {
                    Name: u.$viewValue
                });
                r = angular.isDefined(f);
                r && u.$setViewValue(f.Id);
                break;
            case "dayOfBirth":
                if (!isValidDate(n.profileVm.yearOfBirth + "-" + n.profileVm.monthOfBirth + "-" + n.profileVm.dayOfBirth))
                    return !1;
                e = new Date(n.profileVm.yearOfBirth,n.profileVm.monthOfBirth - 1,n.profileVm.dayOfBirth).getAges();
                r = n.profileVm.yearOfBirth !== "-1" && n.profileVm.monthOfBirth !== "-1" && n.profileVm.dayOfBirth !== "-1" && e >= 18
            }
            u.$setValidity(i, r)
        }
        function k() {
            if (!uv.sessionD.suspended) {
                var t = i.dialog(n, {
                    templateUrl: "/public/resource/templates/modal/user/changePassword.html",
                    controller: "userModalChangePassCtrl"
                });
                t.result.then(function(t) {
                    n.msg = t;
                    i.dialog(n);
                    location.reload()
                })
            }
        }
        function d(t) {
            t.guId = h;
            var u = i.fetch("PUT", o + "updateProfile", t);
            n.msg = {
                title: r.instant("txtComNotice")
            };
            u.then(function(t) {
                switch (t) {
                case 0:
                    n.msg.content = r.instant("msgProfileUpdateSucess");
                    i.dialog(n).result.then(function() {
                        location.reload()
                    });
                    break;
                case 3:
                    n.msg.content = r.instant("msgSecureInvalidSecQnOrAnswer");
                    i.dialog(n);
                    break;
                case 4:
                    n.msg.content = r.instant("msgJoinUsEmailExisted");
                    i.dialog(n);
                    break;
                default:
                    n.msg.content = r.instant("msgProfileUpdateFailed");
                    i.dialog(n)
                }
            })
        }
        function g(t) {
            if (n.options.nationalities && t)
                return n.options.nationalities.filter(function(n) {
                    return n.Id === t
                })[0].Name
        }
        function nt() {
            n.profileVm.howDoYouLearn !== "Others," && (n.profileVm.howDoYouLearnOther = "");
            n.profileVm.howDoYouLearnAnswer = n.profileVm.howDoYouLearn + n.profileVm.howDoYouLearnOther
        }
        function tt() {
            if (uv.sessionD.suspended) {
                n.msg = {
                    title: r.instant("txtComNotice"),
                    content: r.instant("msgResGamingSuspended")
                };
                i.dialog(n, {
                    backdrop: "static",
                    templateUrl: "/public/resource/templates/modal/messageAlert.html",
                    controller: "modalInstanceCtrl"
                }).result.then(function() {
                    a()
                })
            } else
                n.profileCtrl.state = "confirm",
                v()
        }
        var o = u.myAccountRootApi, s = {}, c = (new Date).getFullYear(), h = getGuid(), l;
        n.profileVm = {};
        n.differProp = [];
        n.options = [];
        n.disableProp = !1;
        n.requireFullName = uv.pd.r === "China" || uv.pd.r === "Indonesia" || uv.pd.r === "Vietnam";
        n.requireMiddleName = uv.pd.r === "UK";
        n.dateFormat = "dd/MM/yyyy, HH:mm:ss";
        n.dateoptions = {
            date: [31],
            month: [12],
            year: [c - 90, c - 18]
        };
        n.timezoneOptions = ["-12:00", "-11:00", "-10:00", "-09:00", "-08:00", "-07:00", "-06:00", "-05:00", "-04:00", "-03:00", "-02:00", "-01:00", "+00:00", "+01:00", "+02:00", "+03:00", "+03:30", "+04:00", "+04:30", "+05:00", "+05:30", "+05:45", "+06:00", "+06:30", "+07:00", "+08:00", "+09:00", "+09:30", "+10:00", "+11:00", "+12:00", "+13:00", ];
        n.profileCtrl = {
            state: "listing",
            guId: h
        };
        n.pattern = {
            phoneNo: new RegExp("^\\d{1,15}$"),
            nospecCharDigit: new RegExp("^(?=.*$)(?!.*[~,_:!@#$%^&*\\[\\]()-+'\";`><?|{|}1-9])"),
            nospecChar: new RegExp("^(?=.*$)(?!.*[~,_:!@#$%^&*\\[\\]()-+'\";`><?|{|}])"),
            postCode: new RegExp("^[a-zA-Z0-9-\\s]{0,20}$"),
            nodigits: new RegExp("^\\D{1,30}$")
        };
        n.onInit = a;
        n.changePassword = k;
        n.getDifferent = v;
        n.validate = b;
        n.formatNameObj = w;
        n.getText = y;
        n.updateProfile = d;
        n.getCountryName = g;
        n.isProfileChanged = p;
        n.updateHowDoYouLearnAnswer = nt;
        n.goNextStep = tt;
        l = localStorage.getItem("recommendDomain") || !1;
        n.recUrl = l ? JSON.parse(localStorage.getItem("recommendDomain")).recDomains.filter(function(n) {
            return n.isSucess == !0
        }) : []
    }
    angular.module("starApp").controller("profileCtrl", i).directive("profileListing", [function() {
        function n() {
            var n = uv.sessionD.mberType === 1;
            return n ? "/public/resource/templates/myAccount/profile.listing.tpl.html" : "/public/resource/templates/myAccount/profile.credit.tpl.html"
        }
        return {
            restrict: "E",
            templateUrl: n()
        }
    }
    , ]).directive("profileConfirm", [function() {
        return {
            restrict: "E",
            templateUrl: "/public/resource/templates/myAccount/profile.confirm.tpl.html"
        }
    }
    , ]).directive("toNum", function() {
        return {
            require: "ngModel",
            link: function(n, t, i, r) {
                r.$parsers.push(function(n) {
                    return parseInt(n, 10)
                });
                r.$formatters.push(function(n) {
                    return "" + n
                })
            }
        }
    }).directive("bookMark", function() {
        return {
            link: function(i, r) {
                t(r).click(function() {
                    if (n.sidebar && n.sidebar.addPanel)
                        n.sidebar.addPanel(document.title, n.location.href, "");
                    else if (n.external && "AddFavorite"in n.external)
                        n.external.AddFavorite(location.href, document.title);
                    else {
                        if (n.opera && n.print)
                            return this.title = document.title,
                            !0;
                        alert("Press " + (navigator.userAgent.toLowerCase().indexOf("mac") !== -1 ? "Command/Cmd" : "CTRL") + " + D to bookmark this page.")
                    }
                })
            }
        }
    }).directive("novalidateWhenDisable", function() {
        return {
            require: "form",
            restrict: "A",
            link: function(n, i, r, u) {
                var f = i.find("input");
                angular.forEach(f, function(i) {
                    var r = t(i);
                    n.$watch(function() {
                        return n.$eval(r.attr("ng-disabled"))
                    }, function(n) {
                        if (n) {
                            var t = u[r.attr("name")];
                            angular.isDefined(t) && u.$removeControl(t)
                        }
                    })
                })
            }
        }
    });
    i.$inject = ["$scope", "dataService", "$translate", "myAccountConst", "$timeout", "$q", "$cookies"]
}(window, $),
function() {
    "use strict";
    function n(n, t, i, r) {
        function e() {
            var t = r.fetch("GET", "/service/myaccounttapi/GetResGamingSetting", {
                guId: u
            });
            t.then(function(t) {
                n.resGamingSetting = t
            })
        }
        function s(i) {
            var u, h;
            if (uv.sessionD.suspended)
                n.msg = {
                    title: t.instant("txtComNotice"),
                    content: t.instant("msgResGamingSuspended")
                },
                u = {
                    backdrop: "static",
                    templateUrl: "/public/resource/templates/modal/messageAlert.html",
                    controller: "modalInstanceCtrl"
                },
                r.dialog(n, u).result.then(function() {
                    e()
                });
            else {
                i.et = i.et * 1;
                var s = {
                    exlusion: "#SelfExclusionPeriod",
                    timeOut: "#TimeOutPeriod"
                }
                  , f = i.et == 1 ? s.exlusion : s.timeOut
                  , c = $(f + " option:selected").text();
                switch (i.et) {
                case 1:
                    u = {
                        templateUrl: "/public/resource/templates/modal/messagePrompt.html",
                        controller: "modalInstanceCtrl"
                    };
                    n.msg = {
                        title: t.instant("navCorAffairsResponsibleGaming"),
                        content: t.instant("msgResGamingselfExclusionConfirm", {
                            period: c
                        })
                    };
                    h = r.dialog(n, u);
                    h.result.then(function() {
                        o(i, f)
                    });
                    break;
                case 2:
                    o(i, f)
                }
            }
        }
        function o(i, f) {
            var o = {}, a = $(f + " option:selected").text(), s = h($(f).val()), l;
            i.lp = a;
            i.ep = t.instant(s.key + "OnlyEn", {
                value: s.value
            });
            i.guId = u;
            l = r.fetch("POST", "/service/myaccounttapi/setExclusion", i);
            l.then(function(u) {
                switch (u) {
                case "0000":
                    n.msg.content = t.instant("msgResGamingAppliedSelfExclusion", {
                        period: i.lp
                    });
                    o = {
                        templateUrl: "/Public/resource/templates/modal/User/selfExclusionPrompt.html",
                        controller: "modalInstanceCtrl",
                        backdrop: "static"
                    };
                    r.dialog(n, o).result.then(function() {
                        location.href = "/{0}/my-account/banking/withdrawal".format(global.lan)
                    }, e);
                    break;
                case "0001":
                    n.msg.title = t.instant("txtResGamingTimeOut");
                    n.msg.content = t.instant("msgResGamingAppliedTimeOut", {
                        period: i.lp
                    });
                    o = {
                        templateUrl: "/Public/resource/templates/modal/User/timeoutPrompt.html",
                        controller: "modalInstanceCtrl",
                        backdrop: "static"
                    };
                    r.dialog(n, o).result.then(function() {
                        c()
                    });
                    break;
                default:
                    n.msg.content = t.instant("msgResGamingFailUpdate");
                    r.dialog(n)
                }
            })
        }
        function h(n) {
            var i = n >= 100 && n <= 4200 ? "day" : "month"
              , t = {
                key: 0,
                value: 0
            };
            switch (i) {
            case "day":
                t.key = n / 100 <= 1 ? "txtCommonHours" : n / 100 == 30 ? "txtCommonmonths" : "txtCommonweeks";
                t.value = t.key == "txtCommonHours" ? 24 : t.key == "txtCommonweeks" ? n / 700 : 1;
                break;
            case "month":
                t.key = n >= 12 ? "txtCommonyears" : "txtCommonmonths";
                t.value = n >= 12 ? n / 12 : n
            }
            return t
        }
        function c() {
            var t = r.fetch("POST", "/service/userapi/logout", {
                Ud: n.loginform.username
            });
            t.then(function(n) {
                localStorage.removeItem("recommendDomain");
                window.location.href = n.redirectUrl
            })
        }
        var u = getGuid(), f;
        n.guId = u;
        n.resGamingSetting = {};
        n.livechatUrl = "/" + global.lan + "/live-chat?region=" + uv.pd.r;
        f = uv.pd.r != "UK" ? "/MB" : "/UKMB";
        n.resGamingContentUrl = global.domains.content + f + "/" + global.lan + "/corporate-affairs/responsible-gaming.html" + contentsVersionNo();
        n.contentUrl = global.domains.content + f + location.pathname + ".html" + contentsVersionNo();
        n.onInit = e;
        n.setExclusion = s
    }
    angular.module("starApp").controller("resGamingCtrl", n).directive("setTimeOut", [function() {
        return {
            restrict: "A",
            templateUrl: "/public/resource/templates/myaccount/account-settings/setTimeOut.tpl.html"
        }
    }
    , ]).directive("setDepositLimit", ["dataService", "$translate", "$q", "$filter", function(n, t, i, r) {
        return {
            restrict: "A",
            templateUrl: "/public/resource/templates/myaccount/account-settings/setDepositLimit.tpl.html",
            link: function(u) {
                function f() {
                    i.all({
                        depositLimitVm: n.fetch("GET", "/service/myaccounttapi/getDepositLimit"),
                        unConfirmDepositLimitVm: n.fetch("GET", "/service/myaccounttapi/getUnConfirmedDepositLimit")
                    }).then(function(n) {
                        var t, i;
                        u.originalDepositLimit = angular.copy(n.depositLimitVm);
                        u.depositLimitVm = n.depositLimitVm;
                        u.depositLimitVm.period < 0 && (u.depositLimitVm.period = 1);
                        u.unConfirmDepositLimitVm = n.unConfirmDepositLimitVm;
                        u.hasUnConfirmLimit = n.unConfirmDepositLimitVm.dateApplied !== 0;
                        v = u.depositLimitVm.dateApplied > 0;
                        t = new Date;
                        o = new Date(n.unConfirmDepositLimitVm.dateApplied);
                        e = o.addDays(1);
                        a = o.addDays(3);
                        i = u.depositLimitVm.limit === -1;
                        u.inConfirmPeriod = t > e && t < a;
                        u.showRemoveLimitBtn = !u.hasUnConfirmLimit && !u.inConfirmPeriod && !i;
                        y()
                    })
                }
                function y() {
                    var n, i, r, f, o;
                    u.hasUnConfirmLimit ? (n = u.unConfirmDepositLimitVm.limit === -1,
                    u.inConfirmPeriod ? (i = t.instant("msgRGDepositLimitConfirmRemove"),
                    r = t.instant("msgRGDepositLimitConfirmChange", {
                        period: s(u.unConfirmDepositLimitVm.period),
                        limit: u.unConfirmDepositLimitVm.limit
                    }),
                    u.hintMessage = n ? i : r) : (f = t.instant("msgRGDepositLimitConfirmRemoveTime", {
                        timestamp: h(e)
                    }),
                    o = t.instant("msgRGDepositLimitConfirmIncreaseTime", {
                        period: s(u.unConfirmDepositLimitVm.period),
                        limit: u.unConfirmDepositLimitVm.limit,
                        timestamp: h(e)
                    }),
                    u.hintMessage = n ? f : o)) : v && (u.hintMessage = "{0} {1}".format(h(u.depositLimitVm.dateApplied), t.instant("txtResGamingLastChange")))
                }
                function s(n) {
                    return u.depositLimitOptions.filter(function(t) {
                        return t.value === n
                    })[0].text
                }
                function h(n) {
                    var t = r("date")(n, "dd/MM/yyyy HH:mm", uv.geod.timezone);
                    return "{0}(GMT {1})".format(t, uv.geod.timezone)
                }
                function p(i) {
                    function h() {
                        i.guId = l;
                        var r = n.fetch("POST", "/service/myaccounttapi/SetDepositLimit", i);
                        r.then(function(r) {
                            var s;
                            s = r ? e ? t.instant("msgRGDepositLimitComfirmIncrease24") : t.instant("msgRGDepositLimitConfirmChange", {
                                period: o,
                                limit: i.limit
                            }) : t.instant("msgResGameDepositLimitFailed");
                            u.msg.content = s;
                            n.dialog(u);
                            f()
                        })
                    }
                    var e, r, o;
                    if (uv.sessionD.suspended)
                        u.msg = {
                            title: t.instant("txtComNotice"),
                            content: t.instant("msgResGamingSuspended")
                        },
                        r = {
                            backdrop: "static",
                            templateUrl: "/public/resource/templates/modal/messageAlert.html",
                            controller: "modalInstanceCtrl"
                        },
                        n.dialog(u, r).result.then(function() {
                            f()
                        });
                    else {
                        if (e = c(i) > c(u.originalDepositLimit),
                        u.hasUnConfirmLimit && e) {
                            w();
                            u.depositLimitVm = angular.copy(u.originalDepositLimit);
                            return
                        }
                        r = {
                            templateUrl: "/public/resource/templates/modal/messagePrompt.html",
                            controller: "modalInstanceCtrl"
                        };
                        o = s(i.period);
                        u.msg.content = t.instant("msgRGDepositLimitApplied", {
                            period: o,
                            limit: i.limit
                        });
                        u.msg.rightBtnTxt = "txtComConfirm";
                        n.dialog(u, r).result.then(h)
                    }
                }
                function w() {
                    var i = u.unConfirmDepositLimitVm.limit
                      , r = i === -1;
                    u.msg.content = r ? t.instant("msgRGDepositLimitInMiddleRemove") : t.instant("msgRGDepositLimitInMiddle", {
                        limit: i
                    });
                    n.dialog(u)
                }
                function c(n) {
                    if (!angular.isUndefined(n))
                        return n.limit === -1 ? Infinity : n.limit / n.period
                }
                function b() {
                    function r() {
                        var i = {
                            period: 1,
                            limit: -1,
                            guId: u.guId
                        }
                          , r = n.fetch("POST", "/service/myaccounttapi/SetDepositLimit", i);
                        r.then(function(i) {
                            var r;
                            r = i ? t.instant("msgRGDepositLimitConfirmRemove24") : t.instant("msgResGameDepositLimitFailed");
                            u.msg.content = r;
                            n.dialog(u);
                            f()
                        })
                    }
                    var i;
                    uv.sessionD.suspended ? (u.msg = {
                        title: t.instant("txtComNotice"),
                        content: t.instant("msgResGamingSuspended")
                    },
                    i = {
                        backdrop: "static",
                        templateUrl: "/public/resource/templates/modal/messageAlert.html",
                        controller: "modalInstanceCtrl"
                    },
                    n.dialog(u, i).result.then(function() {
                        f()
                    })) : (i = {
                        templateUrl: "/public/resource/templates/modal/messagePrompt.html",
                        controller: "modalInstanceCtrl"
                    },
                    u.msg.content = t.instant("msgRGDepositLimitAppliedRemove"),
                    u.msg.rightBtnTxt = "txtComConfirm",
                    n.dialog(u, i).result.then(r))
                }
                function k() {
                    var i, r = {
                        guId: u.guId
                    }, e = n.fetch("POST", "/service/myaccounttapi/confirmDepositLimit", r);
                    e.then(function(r) {
                        i = r ? "msgResGameDepositLimitSuccess" : "msgResGameDepositLimitFailed";
                        u.msg.content = t.instant(i);
                        n.dialog(u);
                        f()
                    })
                }
                var l, o, e, a, v;
                angular.isUndefined(u.guId) ? u.guId = getGuid() : l = u.guId;
                u.setDepositLimit = p;
                u.confirmDepositLimit = k;
                u.removeDepositLimit = b;
                u.getDailyLimit = c;
                u.msg = {
                    title: t.instant("txtResGamingDailyDepositLimits")
                };
                u.depositLimitOptions = [{
                    value: 1,
                    text: t.instant("txtResGamingDaily")
                }, {
                    value: 7,
                    text: t.instant("txtCommondays", {
                        value: 7
                    })
                }, {
                    value: 30,
                    text: t.instant("txtCommondays", {
                        value: 30
                    })
                }, ];
                f()
            }
        }
    }
    , ]);
    n.$inject = ["$scope", "$translate", "myAccountConst", "dataService"]
}(),
function(n, t) {
    "use strict";
    function e() {
        function n(n, i, r) {
            function f() {
                u.find("table").parent().slideToggle();
                u.find("span").toggleClass("icon-caretdownthin").toggleClass("icon-caretupthin")
            }
            var u = t(i);
            n.attrPartnerId = r.partnerId;
            n.attrPartnerKey = r.partnerKey;
            n.collapseTable = f
        }
        return {
            restrict: "AE",
            scope: !0,
            link: n,
            templateUrl: "/public/resource/templates/myaccount/statement/bettinghistory/live/settled-bets.table.tpl.html"
        }
    }
    function i(n) {
        return {
            restrict: "AE",
            scope: !0,
            controller: "bettingHistoryDetailCtrl",
            templateUrl: "/public/resource/templates/myaccount/statement/bettinghistory/" + n.getProduct() + "/settled-bets-detail.table.tpl.html"
        }
    }
    function o() {
        var t = n.location.pathname.split("/")
          , i = {
            sports: "navSbkRoot",
            racing: "navRacingRoot",
            esports: "navESportsRoot",
            casino: "navCsnRoot",
            live: "navLiveCsnRoot",
            livecsn: "navLiveCsnRoot",
            lotto: "navLottoRoot",
            bingo: "navBingoRoot",
            poker: "navPokerRoot",
            financials: "navFinsRoot"
        };
        return {
            getProdKey: function(n) {
                return i[n.toLowerCase()]
            },
            getProduct: function() {
                return angular.isUndefined(t[5]) ? "" : t[5].toLowerCase()
            },
            getPage: function() {
                return angular.isUndefined(t[6]) ? "settled-bets" : t[6].toLowerCase()
            }
        }
    }
    function r(t) {
        var i = n.location.pathname.split("/")
          , r = angular.isDefined(i[5]) && i[5] == "live" ? "livecsn" : t.getPage();
        return {
            restrict: "AE",
            controller: "bettingHistoryCtrl",
            templateUrl: "/public/resource/templates/myaccount/statement/bettinghistory/" + r + ".layout.tpl.html"
        }
    }
    function u(t, i, r, u, f) {
        function c(n) {
            for (var t in n)
                n[t].result = JSON.parse(n[t].result);
            return n
        }
        var o;
        t.betHisCtrlDetail = {
            guId: getGuid()
        };
        var e = n.location.pathname.split("/")
          , s = e[5]
          , h = {
            guId: t.betHisCtrlDetail.guId,
            language: e[1],
            token: uv.sessionD.statementToken,
            channelProductId: global.generals[s].Id,
            partnerId: getFromSearch("partnerId"),
            jsDateFrom: getFromSearch("betDate"),
            jsDateTo: getFromSearch("betDate"),
            gameType: getFromSearch("gameType")
        };
        t.sumStake = function(n) {
            var i = 0, t;
            if (n.length != 0) {
                for (t in n)
                    n[t].status == 1 && (i += n[t].stake);
                return i
            }
            return 0
        }
        ;
        o = f.fetch("GET", "/service/myaccounttapi/GetSettleBetDetail", h);
        o.then(function(n) {
            t.settlebetListDetail = [];
            t.settlebetParlayListDetail = [];
            n.length > 0 && "parlay".indexOf(n[0].uniqueGameID.toLowerCase()) > -1 ? t.settlebetParlayListDetail = c(n) : n.length > 0 && "parlay".indexOf(n[0].uniqueGameID.toLowerCase()) < 0 && (t.settlebetListDetail = n)
        })
    }
    function f(n, t, i, r, u) {
        function h() {
            switch (e) {
            case "settled-bets":
                s(n.dateRange);
                break;
            case "unsettled-bets":
                a();
                break;
            default:
                console.log("The page does not have init function, need check!")
            }
        }
        function c(n, t) {
            return function(i) {
                if (angular.isUndefined(t) || t === "")
                    return !0;
                var u = i[n]
                  , r = 0;
                return u > 0 && (r = 1),
                parseInt(u) === 0 && (r = 0),
                u < 0 && (r = -1),
                r == t
            }
        }
        function l() {
            return "/public/resource/templates/myaccount/statement/bettinghistory/{0}/{1}.table.tpl.html".format(f, e)
        }
        function s(t) {
            n.dateRange = t;
            var i = {
                token: uv.sessionD.statementToken,
                channelProductId: global.generals[f].Id,
                partnerIds: _.map(global.generals[f].partners, "id"),
                jsDateFrom: t.dateFrom,
                jsDateTo: t.dateTo,
                language: global.lan,
                region: uv.pd.r,
                guId: o
            }
              , r = u.fetch("GET", "/service/myaccounttapi/GetSettleBet", i);
            r.then(function(t) {
                n.betHisCtrl.settlebetModel = t
            })
        }
        function a() {
            var t = {
                token: uv.sessionD.statementToken,
                channelProductId: global.generals[f].Id,
                partnerIds: _.map(global.generals[f].partners, "id"),
                language: global.lan,
                region: uv.pd.r,
                guId: o
            }
              , i = u.fetch("GET", "/service/myaccounttapi/GetUnSettleBet", t);
            i.then(function(t) {
                n.betHisCtrl.settlebetModel = t
            })
        }
        function v(n, t) {
            return n.filter(function(n) {
                var i, r = n.extend.reqId === t;
                return r && (i = n.selections.some(function(n) {
                    return n.extend.eachWay === ""
                })),
                i
            })[0]
        }
        var f = r.getProduct()
          , e = r.getPage()
          , o = getGuid();
        n.betHisCtrl = {
            settlebetModel: [],
            currentLottoIndex: -1,
            partnerFilter: 0,
            winlossFilter: "",
            prod: f,
            guId: o,
            prodKey: r.getProdKey(f),
            title: e == "settled-bets" ? "txtStatementBetHistorySettledBets" : "txtStatementBetHistoryUnsettledBets",
            serachByRange: s,
            getProdTable: l,
            winOrLose: c,
            getRacingMainBet: v
        };
        n.dateRange = t.getDateRange(0);
        n.selectWinLoseList = [{
            key: "txtCommonAll",
            value: ""
        }, {
            key: "txtStatementDraw",
            value: 0
        }, {
            key: "txtStatementWin",
            value: 1
        }, {
            key: "txtStatementLose",
            value: -1
        }, ];
        n.selectProcesssList = [{
            key: "txtCommonAll",
            value: ""
        }, {
            key: "txtStatementPending",
            value: 0
        }, {
            key: "txtStatementWin",
            value: 1
        }, {
            key: "txtStatementLose",
            value: -1
        }, ];
        n.selectPartnerSitesList = [{
            key: "txtCommonAll",
            value: 0
        }, {
            key: "titLivsCsnGrandSuite",
            value: 9
        }, {
            key: "titLivsCsnVipsuite",
            value: 3
        }, {
            key: "titLivsCsnImperialSuite",
            value: 6
        }, {
            key: "titLivsCsnRoyalSuite",
            value: 11
        }, ];
        h()
    }
    angular.module("starApp").controller("bettingHistoryCtrl", f).directive("bettingHistory", r).controller("bettingHistoryDetailCtrl", u).directive("bettingHistoryDetail", i).directive("livecsnTable", e).factory("betHistoryService", o);
    r.$inject = ["betHistoryService"];
    i.$inject = ["betHistoryService"];
    f.$inject = ["$scope", "statementService", "myAccountConst", "betHistoryService", "dataService"];
    u.$inject = ["$scope", "statementService", "myAccountConst", "betHistoryService", "dataService"]
}(window, $),
function() {
    "use strict";
    function n(n) {
        return angular.extend({}, n[0], {
            templateUrl: "/public/resource/templates/myAccount/accordion.tpl.html"
        })
    }
    function t(n) {
        return angular.extend({}, n[0], {
            templateUrl: "/public/resource/templates/myAccount/accordionGroup.tpl.html"
        })
    }
    function r() {
        return function(n, t) {
            var r, i;
            if (!angular.isArray(n))
                return 0;
            if (angular.isDefined(t)) {
                for (r = 0,
                i = n.length - 1; i >= 0; i--)
                    r += parseFloat(n[i][t]);
                return r
            }
            return n.reduce(function(n, t) {
                return parseFloat(n) + parseFloat(t)
            })
        }
    }
    function u() {
        return {
            getDateRange: function(n, t) {
                if (!angular.isNumber(n))
                    return n;
                t = angular.isDefined(t) ? t : !0;
                var i = new Date
                  , r = new Date(i.getFullYear(),i.getMonth(),i.getDate())
                  , u = t ? r.addDays(1) : r
                  , f = r.addDays(n);
                return {
                    dateTo: u.valueOf(),
                    dateFrom: f.valueOf()
                }
            }
        }
    }
    function f() {
        function n(n, t) {
            var i = $(t);
            i.click(function() {
                window.print()
            })
        }
        return {
            restrict: "E",
            link: n
        }
    }
    function i(n) {
        function t(t) {
            t.maxDateRange = angular.isDefined(t.maxDateRange) ? t.maxDateRange : 30;
            t.getDateRange = n.getDateRange;
            t.daysFilterUrl = t.maxDateRange == 30 ? "/public/resource/templates/myaccount/daysFilter.html" : "/public/resource/templates/myaccount/3monthsFilter.html"
        }
        return {
            restrict: "AE",
            scope: {
                searchFn: "&searchFn",
                dateRange: "=dateRange",
                maxDateRange: "=maxDateRange"
            },
            link: t,
            template: '<div ng-include="daysFilterUrl"><\/div>'
        }
    }
    function e() {
        function n(n) {
            function i() {
                var i = new Date(n.dateRange.dateFrom)
                  , r = new Date(n.dateRange.dateTo);
                n.dateRangeForm.$setValidity("rangeValidation", i < r && (r.getTime() - i.getTime()) / t <= n.maxDateRange)
            }
            n.validate = i;
            var t = 864e5;
            n.maxDateRange = angular.isDefined(n.maxDateRange) ? n.maxDateRange : 30
        }
        return {
            restrict: "AE",
            scope: {
                searchFn: "&searchFn",
                dateRange: "=dateRange",
                maxDateRange: "=maxDateRange"
            },
            link: n,
            templateUrl: "/public/resource/templates/myaccount/dateRangeFilter.html"
        }
    }
    function o() {
        function n(n, t, i, r) {
            var e, o, f, s, u;
            n.maxDateRange = angular.isDefined(n.maxDateRange) ? n.maxDateRange : 30;
            e = "-" + n.maxDateRange + "d";
            o = 864e5;
            r.$formatters.push(function(n) {
                var t = new Date(n);
                return u.getDate() + "/" + u.getMonth() + "/" + u.getFullYear()
            });
            r.$parsers.push(function(n) {
                var t = n.split("/");
                return new Date(parseInt(t[2]),parseInt(t[1]) - 1,parseInt(t[0])).getTime()
            });
            n.datePattern = new RegExp(/^[0-9]*/);
            f = $(t);
            f.ngdatepicker({
                orientation: "bottom",
                autoclose: !0,
                forceParse: !0,
                startDate: e,
                endDate: "+2d",
                format: "dd/mm/yyyy"
            });
            n.$watch(function() {
                return r.$modelValue
            }, function(n) {
                n !== undefined && f.ngdatepicker("update", new Date(n))
            });
            angular.isDefined(i.default) && f.ngdatepicker("update", new Date(u.getFullYear(),u.getMonth(),u.getDate()).addDays(i.default));
            s = Math.ceil((parseInt(n.initDate) - (new Date).getTime()) / o);
            u = new Date;
            f.ngdatepicker("update", new Date(u.getFullYear(),u.getMonth(),u.getDate()).addDays(s))
        }
        return {
            restrict: "A",
            link: n,
            require: "ngModel",
            scope: {
                maxDateRange: "=maxDateRange",
                initDate: "@initDate"
            }
        }
    }
    function s() {
        function n(n) {
            for (var t in n.list)
                n.currentselectvalue === n.list[t].value && (n.currentselectkey = n.list[t].key);
            n.changeselect = function(t) {
                n.currentselectvalue = t.value;
                n.currentselectkey = t.key
            }
        }
        return {
            restrict: "AE",
            link: n,
            scope: {
                currentselectvalue: "=currentValue",
                list: "=source"
            },
            templateUrl: "/public/resource/templates/myAccount/statementSelect.tpl.html"
        }
    }
    angular.module("starApp").directive("dateRangeFilter", e).directive("daysFilter", i).directive("printButton", f).directive("datePicker", o).directive("myaccAccordion", n).directive("myaccAccordionGroup", t).directive("statementSelect", s).factory("statementService", u).filter("sum", r).constant("myAccountConst", {
        myAccountRootApi: "/service/myaccounttapi/"
    });
    n.$inject = ["uibAccordionDirective"];
    t.$inject = ["uibAccordionGroupDirective"];
    i.$inject = ["statementService"]
}(),
function() {
    "use strict";
    function n(n, t, i, r, u) {
        function v() {
            switch (h) {
            case "deposit":
                f = "GetDepositHistory";
                n.tranHisCtrl.pageKey = "navStatementDeposit";
                n.tranHisCtrl.statusFilter = "";
                n.tranHisCtrl.selectFilterList = [{
                    key: "txtCommonAll",
                    value: ""
                }, {
                    key: "txtStatementPending",
                    value: 1
                }, {
                    key: "txtStatementProcessing",
                    value: 2
                }, {
                    key: "txtStatementApproved",
                    value: 3
                }, {
                    key: "txtStatementRejected",
                    value: 4
                }, ];
                e(n.dateRange);
                break;
            case "withdrawal":
                f = "GetWithdrawHistory";
                n.tranHisCtrl.pageKey = "navStatementWithdrawal";
                n.tranHisCtrl.statusFilter = "";
                n.tranHisCtrl.selectFilterList = [{
                    key: "txtCommonAll",
                    value: ""
                }, {
                    key: "txtStatementPending",
                    value: 1
                }, {
                    key: "txtStatementProcessing",
                    value: 2
                }, {
                    key: "txtStatementApproved",
                    value: 3
                }, {
                    key: "txtStatementRejected",
                    value: 4
                }, ];
                e(n.dateRange);
                break;
            case "transfer":
                f = "GetTransferHistory";
                n.tranHisCtrl.pageKey = "navStatementTransfer";
                n.tranHisCtrl.statusFilter = "";
                n.tranHisCtrl.selectFilterList = [{
                    key: "txtCommonAll",
                    value: ""
                }, {
                    key: "txtTransferStatusSuccess",
                    value: 0
                }, {
                    key: "txtTransferStatusFailed",
                    value: 98
                }, ];
                e(n.dateRange);
                break;
            case "summary":
                f = "GetSummaryHistory";
                n.tranHisCtrl.pageKey = "txtStatementSummary";
                n.tranHisCtrl.statusFilter = "";
                n.tranHisCtrl.selectFilterList = [];
                e(n.dateRange);
                break;
            case "adjustment":
                f = "GetAdjustmentHistory";
                n.tranHisCtrl.pageKey = "navStatementAdjustment";
                n.tranHisCtrl.statusFilter = "";
                n.tranHisCtrl.selectFilterList = [{
                    key: "txtCommonAll",
                    value: ""
                }, {
                    key: "txtStatementApproved",
                    value: "APPROVED"
                }, {
                    key: "txtStatementPending",
                    value: "PENDING"
                }, ];
                e(n.dateRange);
                break;
            case "promotions":
                f = global.domains.aps + "getPromoStatement";
                n.tranHisCtrl.pageKey = "navPromoRoot";
                n.tranHisCtrl.statusFilter = "";
                n.tranHisCtrl.selectFilterList = [];
                n.dateRange = i.getDateRange(-6);
                n.dateMaxRange = 90;
                e(n.dateRange)
            }
        }
        function y(n) {
            switch (n) {
            case "6":
                return "txtStatementOrientalSuite";
            case "12":
                return "navBingoRoot";
            case "0":
                return "txtStatementSportbook";
            default:
                return console.log("key not found, id is {0}".format(n)),
                ""
            }
        }
        function p(i) {
            function f() {
                var r = t.fetch("GET", c + "CancelWithdraw", {
                    transactionId: i
                });
                r.then(function(i) {
                    switch (i) {
                    case "000":
                        e();
                        break;
                    case "101":
                        n.msg.content = u.instant("msgWithDrawalCancelFail101");
                        t.dialog(n);
                        break;
                    default:
                        n.msg.content = u.instant("msgSecurePassGeneralError");
                        t.dialog(n)
                    }
                })
            }
            n.msg = {
                title: u.instant("txtStatementCancelRequest"),
                content: u.instant("msgStatementConfirmCancelRequest"),
                needCancelBtn: !0
            };
            var r = t.dialog(n);
            r.result.then(f)
        }
        function e(i) {
            var r, u, e, l;
            angular.isDefined(i) && (o = i.dateFrom,
            s = i.dateTo,
            n.dateRange = i);
            switch (h) {
            case "promotions":
                r = {
                    token: uv.sessionD.ssid,
                    periodFrom: o,
                    periodTo: s,
                    guId: n.tranHisCtrl.guId
                };
                u = t.fetch("JSONP", f, r);
                u.then(function(t) {
                    n.tranHisCtrl.transModel = t.claimedRecords
                });
                break;
            default:
                e = {
                    jsDateFrom: o,
                    jsDateTo: s,
                    language: global.lan,
                    guId: n.tranHisCtrl.guId
                };
                l = t.fetch("GET", c + f, e);
                l.then(function(t) {
                    n.tranHisCtrl.transModel = t
                })
            }
        }
        function w(n) {
            var t;
            n = n.toLowerCase();
            switch (n) {
            case "casino":
            case "live":
                t = "/" + global.lan + "/my-account/statement/betting-history/" + n;
                break;
            case "fromsports":
            case "fromcasino":
            case "frombingo":
                t = "/" + global.lan + "/my-account/statement/transaction-history/transfer";
                break;
            case "deposit":
            case "withdrawal":
            case "adjustment":
                t = "/" + global.lan + "/my-account/statement/transaction-history/" + n;
                break;
            default:
                t = "/" + global.lan + "/my-account/statement/betting-history/{0}/settled-bets".format(n)
            }
            return t
        }
        var f, l, o, s, c = r.myAccountRootApi, h = location.pathname.split("/")[5] || "", a = getGuid();
        n.dateMaxRange = 30;
        n.dateRange = i.getDateRange(0);
        n.tranHisCtrl = {
            transModel: [],
            guId: a,
            pageKey: l,
            getTable: "/public/resource/templates/myaccount/statement/transactionHistory/{0}.table.tpl.html".format(h),
            serachByRange: e,
            cancelWithdraw: p,
            getTransferKey: y,
            getTxnTypeLink: w
        };
        v()
    }
    angular.module("starApp").controller("transHistoryCtrl", n);
    n.$inject = ["$scope", "dataService", "statementService", "myAccountConst", "$translate"]
}(),
function() {
    "use strict";
    function n(n, t, i, r, u, f) {
        function e(n) {
            t.compose.attachments.push(n)
        }
        function o(e) {
            function c() {
                t.msg = {
                    title: f.instant("navInbox"),
                    content: f.instant("msgInboxSendSuccess")
                };
                n.dialog(t).result.then(function() {
                    i.close()
                })
            }
            function l() {
                t.msg = {
                    title: f.instant("navInbox"),
                    content: f.instant("msgInboxSendFail")
                };
                n.dialog(t)
            }
            var o = u.getDefaultCategoryByLan(global.lan)
              , s = {
                subject: e.subject,
                recipient: o.senderUri,
                catId: o.catId,
                body: e.body.split("\n")
            }
              , h = r.send(s);
            h.then(c, l)
        }
        function s() {
            i.dismiss("cancel")
        }
        t.compose = {
            cancel: s,
            send: o,
            attach: e,
            attachments: []
        }
    }
    angular.module("starApp").controller("composeCtrl", n);
    n.$inject = ["dataService", "$scope", "$uibModalInstance", "msgService", "categoryService", "$translate"]
}(window, $),
function() {
    "use strict";
    function r() {
        return function(n, t, i) {
            if (angular.isArray(n)) {
                var r = (i - 1) * t;
                return n.length < r ? [] : n.slice(r, r + t)
            }
            return n
        }
    }
    function u() {
        return function(n) {
            return n ? String(n).replace(/<[^>]+>/gm, "") : ""
        }
    }
    function n(n) {
        return function(t) {
            return n.trustAsHtml(t)
        }
    }
    function t(n) {
        return function(t, i) {
            if (!angular.isArray(t))
                return t;
            var r = []
              , f = t.map(function(n) {
                return n[i]
            })
              , u = n("unique")(f);
            return t.forEach(function(n) {
                var t = n[i]
                  , f = u.indexOf(t);
                t !== null && f != -1 ? (u.splice(f, 1),
                r.push(n)) : t === null && r.push(n)
            }),
            r
        }
    }
    function i() {
        function n(n) {
            var i = n.catId
              , t = "188bet";
            return categorInfo.forEach(function(n) {
                if (n.catId === i && n.lan === global.lan) {
                    t = n.name;
                    return
                }
            }),
            t
        }
        function t(n) {
            var t, i = categorInfo.filter(function(n) {
                return n.name.toLowerCase() === "188bet"
            }), r = i.length;
            return r === 0 ? t = {
                senderUri: "mailto:188bet@188bet.com"
            } : r === 1 ? t = i[0] : r > 1 && i.forEach(function(i) {
                i.lan === n && (t = i)
            }),
            t
        }
        return {
            getCateName: n,
            getDefaultCategoryByLan: t
        }
    }
    angular.module("starApp").directive("readMessage", [function() {
        return {
            templateUrl: "/public/resource/templates/inbox/messageReading.tpl.html"
        }
    }
    , ]).directive("listMessage", [function() {
        return {
            templateUrl: "/public/resource/templates/inbox/messageListing.tpl.html"
        }
    }
    , ]).directive("announcementListing", [function() {
        return {
            templateUrl: "/public/resource/templates/inbox/announcementListing.tpl.html"
        }
    }
    , ]).filter("htmlToPlaintext", u).filter("trustAsHtml", n).filter("distinctNotNull", t).filter("dataInPage", r).factory("categoryService", i).constant("inboxConst", {
        inboxRootApi: "/service/msghubapi/",
        dateFormat: "MM/dd/yyyy, HH:mm:ss"
    }).constant("msgStatus", {
        unRead: 0,
        read: 1,
        archive: 2,
        replied: 3
    }).constant("channelType", {
        inbox: {
            url: "inbox",
            canReply: !0,
            hasStatus: !0,
            canCompose: !0,
            canDelete: !0,
            canCheck: !0,
            enumValue: 0
        },
        notifications: {
            url: "notifications",
            canReply: !1,
            hasStatus: !0,
            canCompose: !1,
            canDelete: !0,
            canCheck: !0,
            enumValue: 1
        },
        Mi: {
            url: "",
            canReply: !1,
            hasStatus: !1,
            canCompose: !1,
            canDelete: !1,
            canCheck: !1,
            enumValue: 2
        },
        announcement: {
            url: "announcement",
            canReply: !1,
            hasStatus: !0,
            canCompose: !1,
            canDelete: !1,
            canCheck: !0,
            enumValue: 3
        }
    });
    n.$inject = ["$sce"];
    t.$inject = ["$filter"];
    i.$inject = ["$translate"]
}(window, $),
function() {
    "use strict";
    function n(n, t, i, r, u, f, e, o, s) {
        function h() {
            var r = o.location.pathname.split("/").pop(), i, t;
            for (i in e)
                if (t = e[i],
                t.url === r) {
                    u.initChannel(t);
                    n.channel = u.getCurrentChannel();
                    break
                }
        }
        function c(t, e) {
            function c() {
                e.body = "";
                n.msg = {
                    title: r.instant("navInbox"),
                    content: r.instant("msgInboxSendSuccess")
                };
                t.unshift(s);
                i.dialog(n);
                u.markAsRequest([o], f.replied)
            }
            function a() {
                n.msg = {
                    title: r.instant("navInbox"),
                    content: r.instant("msgInboxSendFail")
                };
                i.dialog(n)
            }
            var o = l(t).slice(0)[0]
              , s = {
                subject: o.subject,
                refId: o.refId == null ? o.id : o.refId,
                sender: u.memberUri,
                catId: o.catId,
                recipient: o.sender,
                body: e.body.split("\n"),
                contentType: "text/plain"
            }
              , h = u.send(s);
            h.then(c, a)
        }
        function l(n) {
            return n.filter(function(n) {
                return n.sender != u.memberUri
            })
        }
        function a() {
            var n = i.dialog(null , {
                templateUrl: "/public/resource/templates/modal/inbox/compose.tpl.html",
                controller: "composeCtrl",
                items: [],
                animation: !0
            })
        }
        n.inbox = {
            state: "listing",
            dateFormat: t.dateFormat,
            openComposeModal: a,
            reply: c,
            getCateName: s.getCateName
        };
        n.channel = {};
        n.msgStatus = f;
        n.channelType = e;
        n.msgService = u;
        h()
    }
    angular.module("starApp").controller("inboxCtrl", n);
    n.$inject = ["$scope", "inboxConst", "dataService", "$translate", "msgService", "msgStatus", "channelType", "$window", "categoryService"]
}(window, $),
function(n) {
    "use strict";
    function t(t, i, r, u, f, e, o, s) {
        function k(n) {
            h.channelType !== n && (g(n),
            h.channelType = n,
            h.currentIndex = 0,
            h.currentMsg = [],
            p(n, 1, 20))
        }
        function d() {
            return h
        }
        function g(t) {
            var i = t.url;
            i !== n.location.href.split("/").pop() && (n.history.pushState ? n.history.pushState(null , document.title, i) : location.href = "/{0}/{1}".format(global.lan, i))
        }
        function p(n, i, u) {
            var f = n === r.announcement
              , e = {
                channel: n.enumValue,
                pageIndex: i,
                pageSize: u,
                guId: c
            }
              , o = f ? y() : t.fetch("GET", a + "getSummary", e);
            o.then(function(n) {
                var t = n.PageIndex === n.TotalPages;
                n.PageSize = u;
                n.startIndex = (n.PageIndex - 1) * n.PageSize + 1;
                n.endIndex = t ? n.TotalCount : n.startIndex + n.PageSize - 1;
                h.pageList = n
            })
        }
        function y() {
            if (!v) {
                var n = {
                    region: uv.pd.r,
                    lan: global.lan,
                    pageIndex: 1,
                    pageSize: 1e3,
                    guId: c
                };
                v = t.fetch("GET", i.inboxRootApi + "getAnnouncement", n)
            }
            return v
        }
        function nt(n) {
            p(h.channelType, h.pageList.PageIndex + n, 20)
        }
        function tt(n, t) {
            h.channelType === t && h.pageList.Items.unshift(n)
        }
        function it(n) {
            var i = h.pageList.Items, r = i.length, t = h.currentIndex + n, u;
            t === -1 ? t = r - 1 : t === r && (t = 0);
            u = i[t];
            w(u)
        }
        function rt() {
            h.pageList.TotalCount -= 1;
            var n = h.pageList.Items.splice(h.currentIndex, 1)
              , t = 0;
            n[0].status === u.unRead && t++;
            l(n, u.archive, t)
        }
        function ut(n) {
            return e.log("prepare send msg, subject:" + n.subject + ",body:" + n.body),
            n.guId = c,
            t.fetch("POST", a + "sendMsg", n)
        }
        function w(n) {
            var f = h.pageList.Items, i, r;
            h.currentIndex = f.indexOf(n);
            n.status === u.unRead && l([n], u.read, 1);
            i = {
                refId: n.refId == null ? n.id : n.refId,
                channelType: h.channelType.enumValue,
                pageIndex: 1,
                pageSize: 100,
                guId: c
            };
            r = t.fetch("GET", a + "getMsg", i);
            r.then(function(n) {
                h.currentMsg = n.Items
            })
        }
        function ft() {
            for (var t = [], r = 0, i = h.pageList.Items, n = i.length; n--; )
                i[n].isChecked && (i[n].status === u.unRead && r++,
                t = t.concat(i.splice(n, 1)));
            h.pageList.TotalCount -= t.length;
            l(t, u.archive, r)
        }
        function l(n, i, r) {
            if (h.channelType.hasStatus && n.length !== 0) {
                et(r);
                var u = n.map(function(n) {
                    return n.status = i,
                    n.id
                })
                  , f = {
                    MessageIDList: u,
                    ChangeTo: i,
                    RecipientUri: n[0].recipient,
                    Name: uv.sessionD.memberCode,
                    Host: "188bet"
                }
                  , o = t.fetch("POST", a + "markAs", f);
                o.then(function() {
                    e.log("success mark as")
                }, function(n) {
                    e.log(n)
                })
            }
        }
        function et(n) {
            if (angular.isNumber(n))
                switch (h.channelType) {
                case r.inbox:
                    f.msgCounter.inbox -= n;
                    break;
                case r.notifications:
                    f.msgCounter.notifi -= n;
                    break;
                case r.announcement:
                    f.msgCounter.announcement -= n
                }
        }
        function ot() {
            var n = [];
            h.pageList.Items.forEach(function(t) {
                t.isChecked && t.status === u.unRead && n.push(t)
            });
            l(n, u.read, n.length)
        }
        function st() {
            h.allChecked = !h.allChecked;
            h.pageList.Items.forEach(function(n) {
                n.isChecked = h.allChecked
            })
        }
        function ht() {
            return h.pageList && h.pageList.Items.length > 0 ? (h.allChecked = h.pageList.Items.every(function(n) {
                return n.isChecked
            }),
            h.allChecked) : !1
        }
        function ct() {
            if (uv.sessionD.login) {
                var n = s.all({
                    msgCounter: t.fetch("GET", "/service/MsgHubApi/GetMsgCounter"),
                    announcementPageList: y()
                });
                n.then(function(n) {
                    f.msgCounter = n.msgCounter;
                    var i = n.announcementPageList
                      , t = 0
                      , r = i.Items.forEach(function(n) {
                        n.status === u.unRead && n.sender.indexOf("pos=public") === -1 && t++
                    });
                    f.msgCounter.announcement = t;
                    f.$emit("getMsgCounter")
                })
            }
        }
        function lt(n) {
            var t = n.sender;
            return t.indexOf("pos=both") !== -1 || t.indexOf("pos=member") !== -1
        }
        var h = {}, a = i.inboxRootApi, b = "mailto:{0}@188bet".format(uv.sessionD.memberCode), v, c = getGuid();
        return {
            guId: c,
            memberUri: b,
            isAllChecked: ht,
            initChannel: k,
            getCurrentChannel: d,
            send: ut,
            getMessageDetail: w,
            getAnnouncement: y,
            deleteMsg: ft,
            markAsRead: ot,
            markAsRequest: l,
            checkAll: st,
            getNextMessageDetail: it,
            deleteCurrent: rt,
            nextPage: nt,
            receiveMsg: tt,
            getMsgCounter: ct,
            filterBySender: lt
        }
    }
    angular.module("starApp").factory("msgService", t);
    t.$inject = ["dataService", "inboxConst", "channelType", "msgStatus", "$rootScope", "$log", "$sanitize", "$q"]
}(window, $);
angular.module("starApp").factory("signalRHub", signalRHub);
signalRHub.$inject = ["$rootScope", "dataService", "channelType", "$log", "msgService", "$translate"],
function() {
    "use strict";
    function n(n) {
        function r(t) {
            t == liveagent.BUTTON_EVENT.BUTTON_AVAILABLE ? i || (i = !0,
            location.href = "/{0}/pre-chat?endpoint={1}".format(global.lan, liveChat_Url)) : t == liveagent.BUTTON_EVENT.BUTTON_UNAVAILABLE && (n.$apply(function() {
                n.agentOffline = !0
            }),
            console.log("btnEventHandler has been trigger, button unavailable."))
        }
        var i = !1, t;
        window.name = "liveChat";
        liveagent.init(Liveagent_Init_Url, Deployment_Id, Org_Id);
        liveagent.addButtonEventHandler(Button_Id, r);
        t = document.createElement("a");
        liveagent.showWhenOffline(Button_Id, t);
        liveagent.showWhenOnline(Button_Id, t)
    }
    angular.module("starApp").controller("liveChatCtrl", n);
    n.$inject = ["$scope"]
}($),
function() {
    "use strict";
    function n(n, t, i) {
        function u(u) {
            u.guId = r;
            var f = t.fetch("POST", "/service/livechatApi/insertSurvey", u);
            f.then(function(r) {
                if (r && r.success) {
                    n.msg = {
                        title: i.instant("txtComNotice"),
                        content: i.instant("txtHelpLiveChatThankYou")
                    };
                    var u = t.dialog(n);
                    u.result.then(function() {
                        setTimeout(function() {
                            window.close()
                        }, 2e3)
                    })
                }
            })
        }
        var r = getGuid();
        n.guId = r;
        n.improvementCheck = {};
        n.survey = {
            ChatKey__c: chatKey
        };
        n.insertSurvey = u;
        n.$watchCollection("improvementCheck", function() {
            n.survey.ImprovementAreaM__c = "";
            angular.forEach(n.improvementCheck, function(t) {
                angular.isDefined(t) && (n.survey.ImprovementAreaM__c += t + ";")
            })
        })
    }
    angular.module("starApp").controller("postChatCtrl", n);
    n.$inject = ["$scope", "dataService", "$translate"]
}($),
function(n) {
    "use strict";
    function t(t, i, r) {
        function e() {
            n("#visitorName").after('<input type="hidden" name="liveagent.prechat.query:accountEmail" value="Account,Account.Email__c" /><input type="hidden" name="liveagent.prechat:caseOrigin" value="Live Chat" /><input type="hidden" name="liveagent.prechat.findorcreate.map:Case" value="Origin,caseOrigin;Subject,caseSubject;" /><input type="hidden" name="liveagent.prechat.findorcreate.map.doCreate:Case" value="Origin,true;Subject,true;" /><input type="hidden" name="liveagent.prechat.findorcreate.saveToTranscript:Case" value="Case" /><input type="hidden" name="liveagent.prechat.findorcreate.showOnCreate:Case" value="true" /><input type="hidden" name="liveagent.prechat.findorcreate.map:Account" value="FirstName,accountFirstName;LastName,accountLastName;Email__c,accountEmail;" /><input type="hidden" name="liveagent.prechat.findorcreate.map.doFind:Account" value="Email__c,true;" /><input type="hidden" name="liveagent.prechat.findorcreate.map.isExactMatch:Account" value="Email__c,true;" /><input type="hidden" name="liveagent.prechat.findorcreate.map.doCreate:Account" value="FirstName,true;LastName,true;Email__c,true;" /><input type="hidden" name="liveagent.prechat.findorcreate.saveToTranscript:Account" value="Account" /><input type="hidden" name="liveagent.prechat.findorcreate.showOnCreate:Account" value="true" /><input type= "hidden" name="liveagent.prechat.findorcreate.linkToEntity:Account" value="Case,AccountId" />');
            var t = n("#nonMemberForm");
            t.attr("action", f);
            t.submit()
        }
        function o(e) {
            var o = i.fetch("GET", "/service/livechatApi/validatemember", {
                memberCode: e.memberCode,
                email: e.email || "",
                guId: u
            });
            o.then(function(u) {
                if (u.records && u.records[0] && u.records[0].LoginID__c && u.records[0].LoginID__c.toUpperCase() === e.memberCode.toUpperCase()) {
                    n("#visitorName").after('<input type="hidden" name="liveagent.prechat.findorcreate.map:Account" value="Email__c,contactEmail;LoginID__c,accountMemberCode" /><input type="hidden" name="liveagent.prechat.findorcreate.map.doFind:Account" value="Email__c,true;LoginID__c,true;" /><input type="hidden" name="liveagent.prechat.findorcreate.map.isExactMatch:Account" value="Email__c,true;LoginID__c,true;" /><input type="hidden" name="liveagent.prechat.findorcreate.map.doCreate:Account" value="Email__c,true;LoginID__c,true;" /><input type="hidden" name="liveagent.prechat.findorcreate.saveToTranscript:Account" value="Account" /><input type="hidden" name="liveagent.prechat.findorcreate.showOnCreate:Account" value="true" /><input type="hidden" name="liveagent.prechat:caseOrigin" value="Live Chat" /><input type="hidden" name="liveagent.prechat.findorcreate.map:Case" value="Origin,caseOrigin;Subject,caseSubject;" /><input type="hidden" name="liveagent.prechat.findorcreate.map.doCreate:Case" value="Origin,true;Subject,true;" /><input type="hidden" name="liveagent.prechat.findorcreate.saveToTranscript:Case" value="Case" /><input type="hidden" name="liveagent.prechat.findorcreate.showOnCreate:Case" value="true" /><input type= "hidden" name="liveagent.prechat.findorcreate.linkToEntity:Account" value="Case,AccountId" />');
                    var o = n("#memberForm");
                    o.attr("action", f);
                    o.submit()
                } else
                    t.msg = {
                        title: r.instant("txtComNotice"),
                        content: r.instant("msgHelpLiveChatInvalidMemberCode")
                    },
                    i.dialog(t)
            })
        }
        var u = getGuid()
          , f = decodeURIComponent(getFromSearch("endpoint"));
        t.guId = u;
        t.requireFullName = ["china", "vietnam", "indonesia"].indexOf(uv.pd.r.toLowerCase()) !== -1;
        t.startMemberChat = o;
        t.startNonMemberChat = e
    }
    angular.module("starApp").controller("preChatCtrl", t);
    t.$inject = ["$scope", "dataService", "$translate"]
}($)
