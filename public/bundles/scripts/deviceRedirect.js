//08190444
var browser = function() {
    if (browser.prototype._cachedResult)
        return browser.prototype._cachedResult;
    var n = !!window.opera || navigator.userAgent.indexOf(" OPR/") >= 0
      , t = typeof InstallTrigger != "undefined"
      , i = Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0
      , r = !!window.chrome && !n
      , u = /*@cc_on!@*/
    !1 || !!document.documentMode;
    return browser.prototype._cachedResult = n ? "Opera" : t ? "Firefox" : i ? "Safari" : r ? "Chrome" : u ? "IE" : ""
}
;
(function() {
    "use strict";
    function e(n) {
        var t = document.cookie.match(new RegExp(n + "=([^;]+)"));
        return t && (t = JSON.parse(t[1])),
        t
    }
    function l(n, t) {
        var i = [n, "=", JSON.stringify(t), "; path=/;"].join("");
        document.cookie = i
    }
    var r = browser(), u = new MobileDetect(window.navigator.userAgent), o = location.href.indexOf("financials") > 0 && location.pathname.split("/").length === 4, s = {
        Opera: 1,
        Firefox: 35,
        Safari: 7,
        Chrome: 31,
        IE: o ? 10 : 9
    }, t, n, i;
    if (u.version(r) * 1 < (s[r] || 0) && (location.href = "/" + global.lan + "/upgrade-your-browser"),
    u.mobile()) {
        var h = e("fromMobile") == !0
          , c = location.host.indexOf(".") != -1 ? location.host.substring(location.host.indexOf(".") + 1) : "null"
          , f = h || document.referrer.indexOf(location.host) == -1 && document.referrer.indexOf(c) != -1;
        if (f)
            l("fromMobile", f);
        else {
            if (t = e("affiliateInfo"),
            n = "",
            t !== null )
                for (i = 0; i < t.Data.length; i++)
                    n += "&" + t.Data[i].Key + "=" + t.Data[i].Value;
            n = location.pathname.indexOf("?") !== -1 ? location.pathname + n : location.pathname + n.replace("&", "?");
            location.href = global.domains.mobile + n
        }
    }
})()
