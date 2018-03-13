(function($) {
    //#region Documentation
    //
    // **Possible parameters:**
    //
    // _Event handler:_
    //
    // str showEvent        Defines the event that activates the tooltip.
    //                            Possible values: mouseover, focus, click, dblclick, change etc.
    //                            Default: "mouseover"
    // str hideEvent        Defines the event that hides the tooltip.
    //                            Possible values: mouseout, blur, click, dblclick, change etc.
    //                            Default: "mouseout"
    //
    // _CSS ids and classes:_
    //
    // str ttClass            Class for the tooltip for overriding and additional styling.
    //                            Default: "tt_tip"
    // str activeClass    Class for the trigger element while tooltip is displayed.
    //                            Default: "tt_active"
    // str ttIdPrefix     Prefix for the element ID that identifies the tooltip ID.
    //                            Example: element with id="test" looks for tooltip container with id="tt_test"
    //                            Default: "tt_"
    //
    // _Positioning:_
    //
    // str align:            Preferred horizontal alignment of the tooltip. 
    //                            Values: "absCenter", "center", "right", "left", "flushRight", and "flushLeft".
    //                            Default: "flushLeft".
    // str vAlign:            Preferred vertical alignment of the tooltip.
    //                            Values: "absCenter", "center", "above" and "below".
    //                            Default: "above"
    // int windowMargin    The tooltip's minimum margin from the window's edge.
    //                            Default: 5
    // int distanceX        The tooltip's horizontal distance from the trigger element.
    //                            Not used if align is flushLeft, flushRight or centered.
    //                            Default: 0    
    // int distanceY        The tooltip's vertical distance from the trigger element.
    //                            Not used for if vAlign is centered.
    //                            Default: 2
    // int nudgeX            Nudge along x axis. Use negative int to nudge left; positive int to nudge right.
    //                            Default: 0
    // int nudgeY            Nudge along y axis. Use negative int to nudge up; positive int to nudge down.
    //                            Default: 0
    //
    // _Timing:_
    //
    // int timeOut        Time that tooltip is displayed after mouseout.
    //                            Default: 1000
    // int delay            Delay before displaying tooltip.
    //                            Default: 500
    // int fadeOut            Time it take for the tooltip to fade out.
    //                            Default: 250
    // int fadeIn            Time it take for the tooltip to fade in.
    //                            Default: 100
    //
    // _Styling:_
    //
    // obj css                Object with CSS rules, applied in addition to default styles.
    //                            As with jQuery CSS, use JavaScript CSS syntax, or quote properties.
    //                            Example: "css: {textAlign: 'left'}" or "css: {'text-align': 'left'}"
    //                            Default: Empty.
    // bool zoom            Use a zoom effect to animate the tooltip from the dimensions 
    //                            and point of origin of the target element.
    //                            Special case: If target and tooltip are both images, the image will zoom as well
    //                            Default: false
    //#endregion

    // status : show / hide
    var toolTips = new Array();
    var tt_index = 1;

    //#region clearOneTip
    $.fn.clearOneTip = function() {
        return $(this).tt({ status: 'clear' });
    }
    //#endregion

    //#region showOneTip
    $.fn.showOneTip = function(newTitle) {
        return $(this).tt({ status: 'show', newTitle: newTitle });
    }
    //#endregion

    //#region hideOneTip
    $.fn.hideOneTip = function(newTitle) {
        return $(this).tt({ status: 'hide', newTitle: newTitle });
    }
    //#endregion

    //#region tt
    $.fn.tt = function(options) {
        // build main options before element iteration
        var opts = $.extend({}, $.fn.tt.defaults, options);
        var allObjs = this;

        return this.each(function() {
            var $this = $(this),
                $ttTooltip,
                $ttOrg;

            // cheat to show / hide ToolTip
            if (opts.status) {
                $this = toolTips['tt_' + $this.attr("id")];
                $ttTooltip = $this.toolTip;
                o = $this.options;

                // support clear mode (text is empty)
                if (opts.newTitle || opts.status == 'clear') {
                    // $this.attr('title', opts.newTitle)
                    $this.ttTitle = opts.newTitle;
                }

                if (opts.status == 'show') {
                    showTip(); return;
                } else if (opts.status == 'clear') {
                    hideTip(); return;
                } else if (opts.status == 'hide') {
                    hideTip(); return;
                }
            }

            if (toolTips['tt_' + $this.attr("id")]) {
                // already existed
                // return;
            }

            // Support for the meta plugin
            var o = $.meta ? $.extend({}, opts, $this.data()) : opts;

            //Storage object for cached positioning values
            $this.cache = { valid: false };
            $this.isOn = false;
            $this.options = o;

            //Support for tooltips on the title attribute
            //Either use the trigger element's title attr or the target element, if it exists.
            if ($this.attr('id').length === 0 || !($('#' + o.ttIdPrefix + $this.attr('id'))[0])) {
                o.useTitle = true;
                // $this.attr('id', 'tt_' + tt_index++);
                $this.ttTitle = $this.oldTitle = $this.attr('title');
                $this.attr('title', '');
                // $ttTooltip = $('<div>' + $this.ttTitle + '</div>').hide();
                var html = "<div class='tooltip-content'>" + $this.ttTitle + "<div class='tooltip-arr'></div></div>";
                $ttTooltip = $('<div>' + html + '</div>').hide();
            } else {
                $ttTooltip = $('#' + o.ttIdPrefix + $this.attr('id')).hide();
                var orgPos = $('<i id="org_' + $.data($this) + '"/>').insertAfter($ttTooltip).hide();
            }
            //Set initial styles: Define standard styles if no custom class is set.
            var css = o.ttClass !== 'tt_tip' ? { position: 'absolute'} : {
                position: 'absolute',
                font: '11px "lucida grande", tahoma, helvetica, arial, sans-serif',
                border: '1px solid #123',
                background: '#ffd',
                padding: '.5em',
                '-webkit-border-radius': '5px',
                '-webkit-box-shadow': '0 6px 15px rgba(0,0,0,.6)',
                '-moz-border-radius': '5px',
                '-moz-box-shadow': '0 6px 15px rgba(0,0,0,.6)'
            };
            //Extend with options css properties
            css = $.extend({}, css, o.css);

            //Set initial styling and class names from options.
            $ttTooltip.addClass(o.ttClass).css(css);

            $this.bind(o.showEvent, delayShowTip);
            $this.toolTip = $ttTooltip;

            toolTips['tt_' + $this.attr("id")] = $this;

            if (o.hideOnKey)
                $this.bind('keypress', function(e) {
                    hideTip();
                });

            if (o.visibleOnScroll) {
                //On scroll, recalculate position so we don't go offsreen.
                $(window).bind('scroll', function() {
                    //Don't do anything igf the tooltip iis not on!'
                    if ($this.isOn) {
                        $ttTooltip.css(getTooltipPosition());
                    }
                });
            }

            //On resize, kill cached position data and recalculate.
            $(window).bind('resize', function() {
                $this.cache.valid = false;
                //Don't reposition if tooltip isn't on!
                if ($this.isOn) {
                    $ttTooltip.css(getTooltipPosition());
                }
            });

            //
            // private functions
            //

            //#region delayShowTip - A wrapper for the showTip function in order to enable delaying it.
            function delayShowTip() {
                clearTimeout($this.delayTimer);
                clearTimeout($this.hideTimer);
                $this.delayTimer = setTimeout(showTip, o.delay);
                $this.one(o.hideEvent, hideTip);
            }
            //#endregion

            //#region hideTip - Hide the Tooltip and do some cleanup.
            function hideTip() {
                clearTimeout($this.delayTimer);
                clearTimeout($this.hideTimer);
                $this.hideTimer = setTimeout(function() {
                    //TODO: Is there a better way to handle nested tooltips? With a global bool isNested?
                    //Don't hide tooltips that contain nested tooltips - wait for child element's activeClass to go away.
                    if ($ttTooltip.find('.' + o.activeClass)[0]) {
                        hideTip();
                        return;
                    }
                    $this.removeClass(o.activeClass);
                    $ttTooltip.fadeOut(o.fadeOut, function() {
                        $this.isOn = false;
                        //Cleanup: Put that content back where you found it!
                        if (orgPos) {
                            $ttTooltip.insertBefore(orgPos);
                        }
                    });
                },
                o.timeOut);
            }
            //#endregion

            //#region showTip
            function showTip() {
                //If we use the target element's title, build the content.
                // if (o.useTitle) {
                // if ($this.ttTitle.length === 0) return;
                // }
                if (o.isCaptcha){
                    var html = "<div class='tooltip-content-c'>" + $this.ttTitle + "<div class='tooltip-arr-c'></div></div>";
                    $ttTooltip.html('<div>' + html + '</div>');
                }
                else if ($this.ttTitle) {
                    var html = "<div class='tooltip-content'>" + $this.ttTitle + "<div class='tooltip-arr'></div></div>";
                    $ttTooltip.html('<div>' + html + '</div>');
                }

                //Move the tooltip to body to avoid issues with position and overflow CSS settings on the page.
                $ttTooltip.appendTo('body');
                $this.addClass(o.activeClass);
                $this.isOn = true;

                //Get target dimensions and position of the tooltip
                var tipPosition = getTooltipPosition();

                //UAT-1006 - Don't want to force to recompute the position of tooltip
                //when object is either on top or bottom
                /*if ($(window).scrollTop() > $this.cache.elmOffset.top - $this.cache.ttDim.h) {
                $(window).scrollTop($this.cache.elmOffset.top - $this.cache.ttDim.h - 10);
                var tipPosition = getTooltipPosition();
                }*/

                //adjust padding, arrow when en-gb (UAT-1187)
                if (o.adjustments) {
                    if (o.adjustments.currentLang == 'en-gb') {
                        $(".tooltip-arr").css('left', o.adjustments.tt_arrow_css.left);
                        $(".tooltip-content").css('padding', o.adjustments.tt_content_css.padding);
                    }
                    else
                        $(".tooltip-arr").css('margin-left', o.adjustments.tt_content_css.margin_left.replace('-', ''));
                    $(".tooltip-content").css({ 'margin-left': o.adjustments.tt_content_css.margin_left });
                }


                //Zoom!
                if (o.zoom) {
                    var ratio = ($this.cache.elmDim.h * $this.cache.elmDim.w) / ($this.cache.ttInnerDim.h * $this.cache.ttInnerDim.w);
                    // Named CSS attributes to scale by this area ratio:
                    var cssAttrs = { 'fontSize': '' };
                    var startCSS = {
                        opacity: 0,
                        left: $this.cache.elmOffset.left,
                        top: $this.cache.elmOffset.top,
                        width: $this.cache.elmDim.w,
                        height: $this.cache.elmDim.h
                    };
                    var endCSS = $.extend({}, tipPosition, {
                        width: $this.cache.ttInnerDim.w + 1,
                        height: $this.cache.ttInnerDim.h + 1,
                        opacity: 1
                    });
                    for (i in cssAttrs) {
                        cssAttrs[i] = endCSS[i] = $ttTooltip.css(i);
                        startCSS[i] = parseInt(cssAttrs[i].split('px')[0], 10) * ratio;
                    };
                    //Set initial dimensions and position to be equal to the target element's
                    $ttTooltip.css(startCSS);
                    //Temporarily unbind events
                    $ttTooltip.unbind(o.hideEvent, hideTip);
                    $this.unbind(o.showEvent, delayShowTip).unbind(o.hideEvent, hideTip);
                    $ttTooltip.addClass(o.ttClass).animate(endCSS, o.fadeIn, function() {
                        //Rebind events.
                        $ttTooltip.bind(o.hideEvent, hideTip);
                        //Bind the showEvent. The hideEvent is bound on show.
                        $this.bind(o.showEvent, delayShowTip);
                    });
                } else {
                    if ($this.ttTitle) {
                        $ttTooltip.addClass(o.ttClass).css(tipPosition).fadeIn(o.fadeIn);
                    }
                }

                for (var idx in toolTips) {
                    if (toolTips[idx].attr && toolTips[idx].attr("id") != $this[0].id) {
                        toolTips[idx].toolTip.hide();
                    }
                }

                if (o.autoHide) setTimeout(hideTip, 4000);
            }
            //#endregion

            //#region updateCache
            function updateCache() {
                // if ($this.cache.valid) return;
                $this.cache = {
                    elmOffset: $this.offset(),
                    elmDim: {
                        w: $this.outerWidth(),
                        h: $this.outerHeight()
                    },
                    ttDim: {
                        w: $ttTooltip.outerWidth(),
                        h: $ttTooltip.outerHeight()
                    },
                    ttInnerDim: {
                        w: $ttTooltip.width(),
                        h: $ttTooltip.height()
                    },
                    vp: {
                        w: $(window).width(),
                        h: $(window).height()
                    },
                    valid: true
                };
            }
            //#endregion

            //#region getTooltipPosition
            function getTooltipPosition() {
                updateCache();
                //Save as copy of the original preferences.
                var align = {
                    vert: o.vAlign,
                    hor: o.align
                };

                //Scroll position
                var scroll = {
                    left: $(document.documentElement.body).scrollLeft(),
                    top: $(document.documentElement.body).scrollTop()
                };

                //All the possible positions for the tooltip
                var pos = {
                    top: {
                        above: $this.cache.elmOffset.top - $this.cache.ttDim.h - o.distanceY + o.nudgeY,
                        below: $this.cache.elmOffset.top + $this.cache.elmDim.h + o.distanceY + o.nudgeY,
                        center: $this.cache.elmOffset.top - $this.cache.ttDim.h / 2 + $this.cache.elmDim.h / 2,
                        flushTop: $this.cache.elmOffset.top,
                        flushBottom: $this.cache.elmOffset.top + $this.cache.elmDim.h + $this.cache.ttDim.h,
                        absTop: scroll.top + o.windowMargin,
                        absBottom: $this.cache.vp.h + scroll.top - $this.cache.ttDim.h - o.windowMargin,
                        absCenter: scroll.top + $this.cache.vp.h / 2 - $this.cache.ttDim.h / 2
                    },
                    left: {
                        left: $this.cache.elmOffset.left - $this.cache.ttDim.w - o.distanceX + o.nudgeX,
                        right: $this.cache.elmOffset.left + $this.cache.elmDim.w + o.distanceX + o.nudgeX,
                        center: $this.cache.elmOffset.left - $this.cache.ttDim.w / 2 + $this.cache.elmDim.w / 2,
                        flushLeft: $this.cache.elmOffset.left,
                        flushRight: $this.cache.elmOffset.left + $this.cache.elmDim.w - $this.cache.ttDim.w,
                        absLeft: scroll.left + o.windowMargin,
                        absRight: $this.cache.vp.w + scroll.left - $this.cache.ttDim.w - o.windowMargin,
                        absCenter: scroll.left + $this.cache.vp.w / 2 - $this.cache.ttDim.w / 2
                    }
                };

                //Booleans for whether there is space for the tooltip in a variety of positions.
                //Compares tooltip offset to the absolute top/left position keeping tooltip on-screen
                var space = {
                    above: pos.top[align.vert] < pos.top.absTop ? false : true,
                    below: pos.top[align.vert] > pos.top.absBottom ? false : true,
                    left: pos.left[align.hor] < pos.left.absLeft ? false : true,
                    right: pos.left[align.hor] > pos.left.absRight ? false : true
                };
                //Move the tooltip around if there isn't space in the current position.
                if ($this.cache.vp.h < $this.cache.ttDim.h) align.vert = 'absTop';
                else if (!space.above && !space.below && align.vert == 'below') {
                    align.vert = 'absBottom';
                } else if ((align.vert === 'above' || align.vert === 'center') && !space.above) {
                    align.vert = 'absTop';
                } else if ((align.vert === 'below' || align.vert === 'center') && !space.below) {
                    align.vert = 'absBottom';
                }

                if (!space.left && !space.right) {
                    align.hor = 'absLeft';
                } else if ((/^right|flushLeft|center$/i).test(align.hor) && !space.right) {
                    align.hor = 'absRight';
                } else if ((/^left|flushRight|center$/i).test(align.hor) && !space.left) {
                    align.hor = 'absLeft';
                }
                return {
                    left: pos.left[align.hor],
                    top: pos.top[align.vert]
                };
            }
            //#endregion
        });
    };
    //#endregion

    //#region cons - private function for debugging
    function cons(message) {
        if (window.console && window.console.log) {
            console.log(message);
        }
    };
    //#endregion

    //#region plugin defaults
    $.fn.tt.defaults = {
        showEvent: 'click',
        hideEvent: 'none',
        align: 'right',
        vAlign: 'center',
        visibleOnScroll: false,
        windowMargin: 0,
        distanceX: 2,
        distanceY: 10,
        nudgeX: 0,
        nudgeY: 0,
        ttClass: 'tt_tip',
        activeClass: 'tt_active',
        ttIdPrefix: 'tt_',
        timeOut: 0,
        delay: 0,
        fadeIn: 0,
        fadeOut: 0,
        zoom: false,
        autoHide: true // by default, the tooltip disappears after 4 seconds, change it on showTip()
    };
    //#endregion
})(jQuery);

/*
Tooltips: now it is used by Betslip
imported by Alex, and then Yilin merge the code from Lib/jquery.tipsy.js
*/
(function($) {
    $.tipsy = {
        //#region init
        init: function($eles, options) {
            //options = $.extend({}, this.defaults, options);

            return $eles.each(function() {

                if (!$(this).attr('title')) return;
                if ($(this).attr('title') || typeof ($(this).attr('ttp2')) != 'string') {
                    $(this).attr('ttp2', $(this).attr('title') || '').removeAttr('title');
                }

                // HT: Currently this tipsy.init only change the "title" attribute to "ttp" attribute.
                // Then in Common.js, will have script to find all the element which have "ttp" attribute then show the tooltip when mouse over.
                // If want to show stylish tooltip, you can directly add "ttp" to <span>, <a>, <div>, etc...

            //                var opts = options;
            //                var self = $(this);
            //                var timer = null, timerTT = null;

            //                $(window).scroll(function() {
            //                    if (timer) clearTimeout(timer);
            //                    timer = setTimeout(function() {
            //                        if ($.data(self[0], 'cancel.tipsy')) {
            //                            var pos = $.data(self[0], 'position.tipsy');
            //                            var cur = self.offset();
            //                            var tip = $.data(self[0], 'active.tipsy');
            //                            if (cur.top != pos.top || cur.left != pos.left) {
            //                                if (tip) { tip.remove(); }
            //                                showToolTips()
            //                            } else {
            //                                if (tip) { tip.remove(); }
            //                            }
            //                        }
            //                    }, "150");
            //                });

            //                //#region showToolTips
            //                var showToolTips = function() {
            //                    var _this = self[0];
            //                    var gravity = $.data(_this, 'tipsy.p');
            //                    opts = gravity ? $.extend(options, { gravity: gravity }) : options;
            //                    var pos = $.extend({}, $(_this).offset(), { width: _this.offsetWidth, height: _this.offsetHeight });
            //                    
            //                    if (pos.top < $(window).scrollTop() + options.spacing) return;  //remove this criteria: pos.top < options.offset + options.spacing || 

            //                    $.data(_this, 'cancel.tipsy', true);

            //                    var tip = $.data(_this, 'active.tipsy');
            //                    var direction = $(_this).hasClass('tip-l') ? 'left' : 'right';
            //                    if (!tip) {
            //                        tip = $('<span class="tipsy tipsy-' + direction + ' tipsy-top"><span class="tipsy-arrow"></span><span class="tipsy-txt"></span></span>');
            //                        tip.css({ position: 'absolute', zIndex: 100000 });
            //                        $.data(_this, 'active.tipsy', tip);
            //                    }
            //                    var title;
            //                    if (typeof opts.title == 'string') {
            //                        title = $(_this).attr(opts.title == 'title' ? 'ttp' : opts.title);
            //                    } else if (typeof opts.title == 'function') {
            //                        title = opts.title.call(_this);
            //                    }

            //                    tip.find('span.tipsy-txt')[opts.html ? 'html' : 'text'](title || opts.fallback);

            //                    $.data(_this, 'position.tipsy', pos);
            //                    tip.remove().appendTo(document.body);
            //                    var actualWidth = tip.outerWidth(true), actualHeight = tip.outerHeight(true);
            //                    var gravity = (typeof opts.gravity == 'function') ? opts.gravity.call(_this) : opts.gravity;
            //                    tip.css({ top: 0, left: 0, visibility: 'hidden', display: 'block' });
            //                    var $tipArrow = $(".tipsy-arrow", tip);
            //                    var arrowOffset = direction == 'left' ? $tipArrow.offset().left + $tipArrow.width() / 2 : (tip.width() - ($tipArrow.offset().left + $tipArrow.width() / 2)) - tip.width();

            //                    if (gravity.charAt(0) == 'a') {
            //                        //ex: gravity = 'aw' , -> auto, default is w
            //                        //ex: gravity = 'ae' , -> auto, default is e
            //                        //ex: gravity = 'as' , -> auto, default is s
            //                        //ex: gravity = 'an' , -> auto, default is n
            //                        var wWidth = $(window).width();
            //                        var wHeight = $(window).height();
            //                        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            //                        if (gravity.length > 1) {
            //                            switch (gravity.charAt(1)) {
            //                                //case 'w': if (actualWidth + pos.left > wWidth) gravity = 'e'; else gravity = 'w'; break;
            //                                //case 'e': if (pos.left + pos.width < 0) gravity = 'w'; else gravity = 'e'; break;
            //                                case 's': if (pos.top - scrollTop + pos.height + actualHeight > wHeight) gravity = 'n'; else gravity = 's'; break;
            //                                case 'n': if (pos.top - (scrollTop + actualHeight) < 0) gravity = 's'; else gravity = 'n'; break;
            //                            }
            //                        }
            //                    }
            //                    switch (gravity.charAt(0)) {
            //                        case 'n':
            //                            tip.css({ top: pos.top - actualHeight, left: direction == 'left' ? (pos.left + pos.width / 2 - arrowOffset) : (pos.left + pos.width / 2 + arrowOffset)}).removeClass('tipsy-top').addClass('tipsy-bottom');
            //                            break;
            //                        case 's':
            //                            tip.css({ top: pos.top + pos.height, left: direction == 'left' ? (pos.left + pos.width / 2 - arrowOffset) : (pos.left + pos.width / 2 + arrowOffset)}).removeClass('tipsy-bottom').addClass('tipsy-top');
            //                            break;
            //                        //case 'e':
            //                            //tip.css({ top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth }).addClass('tipsy-east');
            //                            //break;
            //                        //case 'w':
            //                            //tip.css({ top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }).addClass('tipsy-west');
            //                            //break;
            //                    }

            //                    if (opts.fade) {
            //                        tip.css({ opacity: 0, display: 'block', visibility: 'visible' }).animate({ opacity: 0.8 });
            //                    } else {
            //                        tip.css({ visibility: 'visible' });
            //                    }

            //                    timerTT = setTimeout((function() {
            //                        $.data(_this, 'cancel.tipsy', false);
            //                        if ($.data(_this, 'cancel.tipsy')) return;
            //                        var tip = $.data(_this, 'active.tipsy');
            //                        if (opts.fade) {
            //                            tip.stop().fadeOut(function() { $(this).remove(); });
            //                        } else {
            //                            if (tip) {
            //                                tip.remove();
            //                            }
            //                        }
            //                    }), 4000);
            //                };
            //                //#endregion

            //                //#region hideToolTips
            //                var hideToolTips = function() {
            //                    var _this = self[0];
            //                    $.data(_this, 'cancel.tipsy', false);
            //                    if (timerTT != null) { clearTimeout(timerTT); }
            //                    timerTT = setTimeout(function() {
            //                        if ($.data(_this, 'cancel.tipsy')) return;
            //                        var tip = $.data(_this, 'active.tipsy');
            //                        if (opts.fade) {
            //                            tip.stop().fadeOut(function() { $(this).remove(); });
            //                        } else {
            //                            if (tip) {
            //                                tip.remove();
            //                            }
            //                        }
            //                    }, 100);
            //                };
            //                //#endregion

            //                $(this).hover(showToolTips , hideToolTips);

            });

        }
        //#endregion

        //#region position
        //        position: function($ele, gravity) {
        //            $ele.each(function() {
        //                $.data(this, 'tipsy.p', gravity);
        //            });
        //        },
        //#endregion

        //#region defaults
        //        defaults: {
        //            delayIn: 0,
        //            delayOut: 0.1,
        //            fade: false,
        //            fallback: '',
        //            gravity: 'as',
        //            html: true,
        //            opacity: 1.0,
        //            title: 'title'
        //        }
        //#endregion
    };

})(jQuery);