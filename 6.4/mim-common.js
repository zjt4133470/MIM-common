/**
 * mim-common.js
 * @version 6.4
 * @author 王富贵
 * @todo more things to abstract, e.g. Loading css etc.
 * Licensed under the MIT license.
 * 1.提示框
 * 2.确认弹窗
 * 3.验证码倒计时
 * 4.时间格式化
 * 5.点赞
 * 6.自定义验证（提供手机号和邮箱认证）
 * 7.点击返回顶部
 * 8.简单的AJAX封装
 * 9.简单的拖拽(注：移动的元素必须为绝对定位)
 */
!function () {
    if (typeof (jQuery) !== 'function') {
        throw new Error('请先引入jQuery');
    }
    /**
     * 定义 MIM
     * @type {Object}
     */
    var _mim = {};
    window.$$ = window.MIM = _mim;
}(), function () {
    /*成功或失敗的提示框*/
    jQuery.fn.prompt = MIM.prompt = function (state, type, time, bool) {
        /*
        * @param time消失时间（毫秒级），type (success:成功、error：失败、warning：警告、info：消息)
        * state提示的语句
        * bool是否可以手动关闭（true：可以、‘’||false 不可以手动关闭）
        * */
        var div, bool_, set = '';
        if (bool == true || bool == 'true') {
            bool_ = true
        } else {
            bool_ = false
        }
        clearTimeout(set);
        switch (type) {
            case "success":
                div = $("<div class='mim-prompt_success_box'></div>").animate({
                    top: "50px",
                    opacity: '1'
                }, 500).appendTo($("body"));
                var div_success = $("<p class='mim-prompt_success_p'><i class='iconfont'>&#xe63b;</i><span>" + state + "</span></p>").appendTo(div);
                if (bool_) {
                    $("<i class='iconfont mim-prompt_i'>&#xe70e;</i>").click(function () {
                        div.animate({marginTop: "-50px", opacity: '0'}, 500, function () {
                            div.remove();
                        });
                    }).appendTo(div_success);
                }
                break;
            case "error":
                div = $("<div class='mim-prompt_error_box'></div>").animate({
                    top: "50px",
                    opacity: '1'
                }, 500).appendTo($("body"));
                var div_error = $("<p class='mim-prompt_error_p'><i class='iconfont'>&#xe635;</i><span>" + state + "</span></p>").appendTo(div);
                if (bool_) {
                    $("<i class='iconfont mim-prompt_i'>&#xe70e;</i>").click(function () {
                        div.animate({marginTop: "-50px", opacity: '0'}, 500, function () {
                            div.remove();
                        });
                    }).appendTo(div_error);
                }
                break;
            case "warning":
                div = $("<div class='mim-prompt_warning_box'></div>").animate({
                    top: "50px",
                    opacity: '1'
                }, 500).appendTo($("body"));
                var div_warning = $("<p class='mim-prompt_warning_p'><i class='iconfont'>&#xe61b;</i><span>" + state + "</span></p>").appendTo(div);
                if (bool_) {
                    $("<i class='iconfont mim-prompt_i'>&#xe70e;</i>").click(function () {
                        div.animate({marginTop: "-50px", opacity: '0'}, 500, function () {
                            div.remove();
                        });
                    }).appendTo(div_warning);
                }
                break;
            case "info":
                div = $("<div class='mim-prompt_info_box'></div>").animate({
                    top: "50px",
                    opacity: '1'
                }, 500).appendTo($("body"));
                var div_info = $("<p class='mim-prompt_info_p'><i class='iconfont'>&#xe613;</i><span>" + state + "</span></p>").appendTo(div);
                if (bool_) {
                    $("<i class='iconfont mim-prompt_i'>&#xe70e;</i>").click(function () {
                        div.animate({marginTop: "-50px", opacity: '0'}, 500, function () {
                            div.remove();
                        });
                    }).appendTo(div_info);
                }
                break;
        }
        set = setTimeout(function () {
            div.animate({marginTop: "-50px", opacity: '0'}, 500, function () {
                div.remove();
            });
            clearTimeout(set);
        }, time);
    };

    /*（confirm）弹窗*/
    jQuery.fn.confirm = MIM.confirm = function (state, successCallback, _confirm, _deselect) {
        /*
        * @param state提示语句，successCallback成功回调
        * _confirm确定（非必填），deselect取消（非必填）
        * 适用层级z-index:9999999
        * */
        _confirm = (_confirm == "" || _confirm == null || typeof (_confirm) == 'undefined') ? "确定" : _confirm;
        _deselect = (_deselect == "" || _deselect == null || typeof (_deselect) == 'undefined') ? "取消" : _deselect;
        var div = $("<div class='mim-confirm_out'></div>").appendTo($("body"));
        var div1 = $("<div class='mim-confirm_inner'></div>").appendTo(div);
        var h = $("<h2 class='mim-confirm_h'><span>提示</span></h2>").appendTo(div1);
        var i = $("<i class='iconfont'>&#xe70e;</i>").click(function () {
            div.remove();
            MIM.prompt('取消操作', 'info', 3000);
        }).appendTo(h);
        var p = $("<p class='mim-confirm_p'><i class='iconfont'>&#xe61b;</i><span>" + state + "</span></p>").appendTo(div1);
        var button1 = $('<button class="mim-confirm_button1">' + _confirm + '</button>').click(function () {
            div.remove();
            successCallback();
        }).appendTo(div1);

        var button2 = $('<button class="mim-confirm_button2">' + _deselect + '</button>').click(function () {
            div.remove();
            MIM.prompt('取消操作', 'info', 3000);
        }).appendTo(div1);
    };

    //验证码倒计时
    jQuery.fn.countDown = MIM.countDown = function (times, cssInit, cssEnd) {
        /*倒计时调用（必须为button）
        @param time倒计时时间 cssInit开始样式 cssEnd点击结束后样式
        * */
        var time = times;
        var that = $(this);
        $(this).on('click', function () {
            countdownTime();
        });

        function countdownTime() {
            var test1;
            if (time >= 1) {
                time -= 1;
                if (time == 0) {
                    that.css(cssInit);
                    that.css({
                        cursor: "pointer"
                    }).removeAttr("disabled").html("获取验证码");
                    return time = times;
                }
                //点击后按钮变化
                that.css(cssEnd);
                that.css({
                    cursor: "not-allowed"
                }).attr("disabled", "disabled").html(time + "s后重试");
                test1 = setTimeout(function () {
                    countdownTime();
                    clearTimeout(test1);
                }, 1000);
            }
        }
    };

    //时间格式化
    jQuery.fn.timeFilter = MIM.timeFilter = function (value, before, later) {
        /*
      * @param value要转换的时间戳 before年月日中间的格式 later时分中间的格式
      * before（必填）（若年月日不需要则填false）
      * later（必填）（若时分不需要则填false）
      * */
        var oDate = new Date();
        oDate.setTime(value * 1000);
        var y = oDate.getFullYear();
        var M = oDate.getMonth() + 1;
        parseInt(M) < 10 ? M = '0' + M : M = M;
        var d = oDate.getDate();
        parseInt(d) < 10 ? d = '0' + d : d = d;
        var h = oDate.getHours();
        parseInt(h) < 10 ? h = '0' + h : h = h;
        var m = oDate.getMinutes();
        parseInt(m) < 10 ? m = '0' + m : m = m;
        var s = oDate.getSeconds();
        parseInt(s) < 10 ? s = '0' + s : s = s;

        if (before !== false && later !== false) {
            return y + before + M + before + d + ' ' + h + later + m + later + s
        } else if (later == false) {
            return y + before + M + before + d
        } else if (before == false) {
            return h + later + m + later + s
        }
    };

    //点赞
    jQuery.fn.likeResult = MIM.likeResult = function (str, css) {
        /*
        * @param str提示的语句 css展示的样式(默认字体颜色d60000)
        * */
        $(this).on('click', function () {
            var that = $(this);
            var y = that.offset().top;
            var x = that.offset().left;
            var div = $("<div>" + str + "</div>").css({
                position: "fixed",
                top: y,
                left: x,
                marginTop: "-25px",
                color: "#d60000",
                fontWeight: "600",
                zIndex: "999999999",
            }).animate({marginTop: "-100px", opacity: '0'}, 2000, function () {
                div.remove()
            }).appendTo($('body'));
            if (css == "" || css == null || css == undefined) {
            } else {
                div.css(css);
            }
        });
    };

    //自定义验证
    jQuery.fn.verifyReg = MIM.verifyReg = function (str, value, bool) {
        /*
        * @param str验证类型（提供手机号和邮箱）或者验证的正则表达式 value验证的数值 bool是否必填
        * @return 1 验证通过  2 填入为空  3 格式不正确
        * */
        var mobileReg = /^0?(13|15|18|17|14|19|16)[0-9]{9}$/; /*手机号验证*/
        var emailReg = /^[\.a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;/*邮箱验证*/
        var regularReg = str;
        if (str == "phone") {
            if (bool) {
                if (!value) {
                    return 2
                }
            }
            if (!!bool) {
                if (!mobileReg.test(value)) {
                    return 3
                } else {
                    return 1
                }
            } else {
                return 1
            }
        } else if (str == "email") {
            if (bool) {
                if (!value) {
                    return 2
                }
            }
            if (!!value) {
                if (!emailReg.test(value)) {
                    return 3
                } else {
                    return 1
                }
            } else {
                return 1
            }
        } else {
            if (bool) {
                if (!value) {
                    return 2
                }
            }
            if (!!bool) {
                if (!regularReg.test(value)) {
                    return 3
                } else {
                    return 1
                }
            } else {
                return 1
            }
        }
    };

    // 点击返回顶部
    jQuery.fn.goToTop = MIM.goToTop = function () {
        if ($(window).scrollTop() !== 0) {
            $('html , body').animate({scrollTop: 0}, 'slow');
        }
    };

    //简单的AJAX封装
    jQuery.fn.ajaxUtils = MIM.ajaxUtils = function (url, data, async, type, dataType, successfn, errorfn) {
        /*
        * @param url路径，data传入数据，async是否异步（默认异步）,type类型（默认post）
        * dataType传入类型（默认json）,successfn成功回调,errorfn失败回调
        * @return successfn(成功回调) errorfn（失败回调）
        * */
        async = (async == null || async == "" || typeof (async) == "undefined") ? "true" : async;
        type = (type == null || type == "" || typeof (type) == "undefined") ? "post" : type;
        dataType = (dataType == null || dataType == "" || typeof (dataType) == "undefined") ? "json" : dataType;
        data = (data == null || data == "" || typeof (data) == "undefined") ? {} : data;
        $.ajax({
            type: type,
            async: async,
            data: data,
            url: url,
            dataType: dataType,
            success: function (d) {
                successfn(d)
            },
            error: function (e) {
                errorfn(e);
            }
        });
    };

    //简单的拖拽
    jQuery.fn.divDrag = MIM.divDrag = function () {
        $(this).on('mousedown', function () {
            $(this).css("cursor", "move");
            var event = window.event || arguments.callee.caller.arguments[0];
            var distanceX = event.clientX - $(this).offset().left;
            var distanceY = event.clientY - $(this).offset().top;
            $(this).on('mousemove', function () {
                $(this).css("cursor", "move");
                var event = window.event || arguments.callee.caller.arguments[0];
                var ox = event.clientX - distanceX;
                var oy = event.clientY - distanceY;
                $(this).css({
                    left: ox + "px",//移动后的left的值
                    top: oy + "px" //移动后y的值
                })
            });
            $(this).on('mouseup', function () {
                var event = window.event || arguments.callee.caller.arguments[0];
                $(this).css("cursor", "default");//还原鼠标指针样式
                $(this).off("mousemove");
            })
        });
    };
}();
//mim-ui
$(function () {

    //button

    for (var b = 0; b < $('mim-button').length; b++) {
        if ($('mim-button').eq(b).attr('loading') == 'true') {
            $('<i class="iconfont mim-loading">&#xe687;</i>').appendTo($('mim-button').eq(b))
        }

        switch ($('mim-button').eq(b).attr('size')) {
            case 'medium':
                $('mim-button').eq(b).css({
                    height: '36px',
                    lineHeight: '36px'
                });
                break;
            case 'small':
                $('mim-button').eq(b).css({
                    height: '32px',
                    lineHeight: '32px'
                });
                break;
            case 'mini':
                $('mim-button').eq(b).css({
                    height: '28px',
                    lineHeight: '28px'
                });
                break;
        }
    }

    //input
    for (var iu = 0; iu < $('mim-input').length; iu++) {
        var mimInput = $('mim-input').eq(iu);
        var placeholder = mimInput.attr('placeholder');
        var value = mimInput.attr('value');
        var type = mimInput.attr('type');
        var mimClass = mimInput.attr('class');
        var mimId = mimInput.attr('id');
        var disabled = mimInput.attr('disabled');
        var clearable = mimInput.attr('clearable');
        var showPassword = mimInput.attr('show-password');
        var maxlength = mimInput.attr('maxlength');
        var showWordLimit = mimInput.attr('show-word-limit');
        var prefixIcon = mimInput.attr('prefix-icon');
        var suffixIcon = mimInput.attr('suffix-icon');
        var mimSize = mimInput.attr('size');
        type = (type == "" || type == null || typeof (type) == "undefined") ? 'text' : type;
        placeholder = (placeholder == "" || placeholder == null || typeof (placeholder) == "undefined") ? '' : placeholder;
        value = (value == "" || value == null || typeof (value) == "undefined") ? '' : value;
        mimClass = (mimClass == "" || mimClass == null || typeof (mimClass) == "undefined") ? '' : mimClass;
        mimId = (mimId == "" || mimId == null || typeof (mimId) == "undefined") ? '' : mimId;
        disabled = (disabled == "" || disabled == null || typeof (disabled) == "undefined") ? '' : disabled;
        prefixIcon = (prefixIcon == "" || prefixIcon == null || typeof (prefixIcon) == "undefined") ? '' : prefixIcon;
        suffixIcon = (suffixIcon == "" || suffixIcon == null || typeof (suffixIcon) == "undefined") ? '' : suffixIcon;
        maxlength = (maxlength == "" || maxlength == null || typeof (maxlength) == "undefined") ? '' : maxlength;
        showWordLimit = (typeof (showWordLimit) == "undefined") ? '' : true;
        mimSize = (mimSize == "" || mimSize == null || typeof (mimSize) == "undefined") ? '' : mimSize;
        clearable = (typeof (clearable) == "undefined") ? '' : true;
        showPassword = (typeof (showPassword) == "undefined") ? '' : true;
        var input_ = $('<input type = ' + type + ' class="mim-input" />');
        input_.appendTo(mimInput);
        if (placeholder) {
            input_.attr('placeholder', placeholder)
        }
        if (value) {
            input_.attr('value', value)
        }
        if (mimClass) {
            input_.attr('class', '' + mimClass + ' mim-input');
            mimInput.removeAttr('class');
        }
        if (mimId) {
            input_.attr('id', mimId);
            mimInput.removeAttr('id');
        }
        if (disabled) {
            input_.attr('disabled', disabled)
        }
        if (maxlength) {
            input_.attr('maxlength', maxlength);

        }
        if (showWordLimit) {
            input_.css('padding-right', '50px');
            var maxlengthInput = $(' <mim-p class="mim-p"><b class="mim-maxlengthlength">0</b> / <b>' + maxlength + '</b></mim-p>').appendTo(mimInput)
            input_.keyup(function () {
                $(this).next().find('.mim-maxlengthlength').html($(this).val().length)
            })
        }
        if (clearable) {
            var clearInput = $('<mim-span class="iconfont clearInput">&#xe643;</mim-span>');
            input_.css('padding-right', '30px');
            input_.keyup(function () {
                $(this).next().css('display', 'inline-block');
            });
            clearInput.on('click', function () {
                $(this).prev().val('');
                $(this).css('display', 'none');
            });
            clearInput.appendTo(mimInput);
        }
        if (showPassword) {
            var showpassword = $('<mim-span class="iconfont showPassword">&#xe640;</mim-span>');
            var noPassword = $('<mim-span class="iconfont noPassword" style="display: none">&#xe614;</mim-span>');
            input_.css('padding-right', '30px');
            showpassword.on('click', function () {
                $(this).hide();
                $(this).prev().attr('type', 'text');
                $(this).next().show()
            }).appendTo(mimInput);

            noPassword.on('click', function () {
                $(this).prev().prev().attr('type', 'password');
                $(this).prev().show();
                $(this).hide();
            }).appendTo(mimInput);
        }
        if (prefixIcon) {
            var prefixIcons = $('<mim-span class="iconfont prefix-icon">' + prefixIcon + '</mim-span>');
            input_.css('padding-left', '30px');
            prefixIcons.appendTo(mimInput)
        }
        if (suffixIcon) {
            var suffixIcons = $('<mim-span class="iconfont suffix-icon">' + suffixIcon + '</mim-span>');
            input_.css('padding-right', '30px');
            suffixIcons.appendTo(mimInput)
        }
        if (mimSize) {
            switch (mimSize) {
                case 'medium':
                    $('mim-input').find('input').eq(iu).css({
                        height: '36px',
                        lineHeight: '36px'
                    });
                    break;
                case 'small':
                    $('mim-input').find('input').eq(iu).css({
                        height: '32px',
                        lineHeight: '32px'
                    });
                    break;
                case 'mini':
                    $('mim-input').find('input').eq(iu).css({
                        height: '28px',
                        lineHeight: '28px'
                    });
                    break;
            }
        }
    }

    //侧边栏
    for (var mm = 0; mm < $('mim-menu').length; mm++) {

        var backgroundColor = $('mim-menu').eq(mm).attr('background-color');
        backgroundColor = (backgroundColor == "" || backgroundColor == null || typeof (backgroundColor) == "undefined") ? '#ffffff' : backgroundColor;
        if (backgroundColor) {
            $('mim-menu').eq(mm).find('ul li').css({
                'background': backgroundColor
            });
        }

        var textColor = $('mim-menu').eq(mm).attr('text-color');
        textColor = (textColor == "" || textColor == null || typeof (textColor) == "undefined") ? '#000000' : textColor;
        if (textColor) {
            $('mim-menu').eq(mm).find('ul .mim-menu').css({
                'color': textColor
            });
            $('mim-menu').eq(mm).find('.second-mim-menu li').css({
                'color': textColor
            });
        }

        var hoverBgColor = $('mim-menu').eq(mm).attr('hover-bgColor');
        hoverBgColor = (hoverBgColor == "" || hoverBgColor == null || typeof (hoverBgColor) == "undefined") ? '' : hoverBgColor;
        var hoverTextColor = $('mim-menu').eq(mm).attr('hover-textColor');
        hoverTextColor = (hoverTextColor == "" || hoverTextColor == null || typeof (hoverTextColor) == "undefined") ? '' : hoverTextColor;
        if (hoverBgColor || hoverTextColor) {
            var hoverBgColors = hoverBgColor;
            var hoverTextColors = hoverTextColor;
            var textColors = textColor
            $('mim-menu').eq(mm).find('ul .mim-menu').hover(function () {
                $(this).css({
                    'background-color': hoverBgColors,
                    'color': hoverTextColors
                });
            }, function () {
                $(this).css({
                    'background': 'none',
                    'color': textColors
                });
            });
            $('mim-menu').eq(mm).find('ul .mim-menu-item').hover(function () {
                $(this).css({
                    'background-color': hoverBgColors,
                    'color': hoverTextColors
                })
            }, function () {
                $(this).css({
                    'background': 'none',
                    'color': textColors
                })
            });
        } else {
            $('mim-menu').eq(mm).find('ul .mim-menu').hover(function () {
                $(this).css({
                    'background-color': '#ecf5ff',
                });
            }, function () {
                $(this).css({
                    'background': 'none',
                });
            });
            $('mim-menu').eq(mm).find('ul .mim-menu-item').hover(function () {
                $(this).css({
                    'background-color': '#ecf5ff',
                })
            }, function () {
                $(this).css({
                    'background': 'none',
                })
            });
        }
        var active = $('mim-menu').eq(mm).attr('default-active');
        active = (active == "" || active == null || typeof (active) == "undefined") ? '' : active;
        if (active) {
            for (var is = 0; is < $('mim-menu').eq(mm).find('ul li').length; is++) {
                if ($('mim-menu').eq(mm).find('ul li').eq(is).find('span').attr('index') == active) {
                    $('mim-menu').eq(mm).find('ul li').eq(is).addClass('is-active').siblings().removeClass('is-active');
                    $('mim-menu').eq(mm).find('ul li').eq(is).parent().parent().siblings().removeClass('is-active');
                    $('mim-menu').eq(mm).find('ul li').eq(is).siblings().children().children().removeClass('is-active');
                    $('mim-menu').eq(mm).find('ul li').eq(is).parent().parent().siblings().children().children().removeClass('is-active')
                }
            }
        }
    }
    $('mim-menu ul li').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        if ($(this).find('.icon-copy-down').length !== 0) {
            var bool = $(this).find('.icon-copy-down').attr('bool');
            if (bool == 'false') {
                $(this).find('.icon-copy-down').css({
                    transform: "rotate(180deg)"
                });
                $(this).find(".second-mim-menu").fadeIn(500);
                $(this).find('.icon-copy-down').attr('bool', 'true')
            } else {
                $(this).find('.icon-copy-down').css({
                    transform: "rotate(0deg)",
                });
                $(this).find(".second-mim-menu").fadeOut(500);
                $(this).find('.icon-copy-down').attr('bool', 'false')
            }
        } else {
            if ($(this).find('.disabled').length !== 0) {

            } else {
                $(this).addClass('is-active').siblings().removeClass('is-active');
                $(this).parent().parent().siblings().removeClass('is-active');
                $(this).siblings().children().children().removeClass('is-active');
                $(this).parent().parent().siblings().children().children().removeClass('is-active')
            }
        }
    });


    $('mim-menu ul li .disabled').click(function (e) {
        e.stopPropagation();
        e.preventDefault();
    });

    //加载页
    for (var lo = 0; lo < $('mim-loading').length; lo++) {
        var loadings = $('mim-loading').eq(lo).attr('loading');
        loadings = (loadings == "" || loadings == null || typeof (loadings) == "undefined") ? '' : loadings;
        if (loadings == 'true') {
            var loadingDiv = $('<div class="mim-loading-div"></div>');
            var loadingIcon = $('<div class="mim-loading-icon"></div>');
            loadingDiv.appendTo($('mim-loading').eq(lo));
            loadingIcon.css({
                marginTop: '25px'
            }).appendTo(loadingDiv);
            var loadingSpinner = $('mim-loading').eq(lo).attr('loading-spinner');
            loadingSpinner = (loadingSpinner == "" || loadingSpinner == null || typeof (loadingSpinner) == "undefined") ? '' : loadingSpinner;
            if (loadingSpinner) {
                loadingIcon.remove();
                var loadingIconIconfont = $('<i class="mim-loading-icon-iconfont iconfont">' + loadingSpinner + '</i>');
                loadingIconIconfont.appendTo(loadingDiv)
            }
            var loadingText = $('mim-loading').eq(lo).attr('loading-text');
            loadingText = (loadingText == "" || loadingText == null || typeof (loadingText) == "undefined") ? '' : loadingText;
            if (loadingText) {
                $('<p  class="mim-loadingText">' + loadingText + '</p>').appendTo(loadingDiv)
            }
            var loadingBackground = $('mim-loading').eq(lo).attr('loading-background');
            loadingBackground = (loadingBackground == "" || loadingBackground == null || typeof (loadingBackground) == "undefined") ? '' : loadingBackground;
            if (loadingBackground) {
                $('mim-loading').eq(lo).css({
                    backgroundColor: loadingBackground
                })
            }
            var fullscreen = $('mim-loading').eq(lo).attr('fullscreen');
            fullscreen = (fullscreen == "" || fullscreen == null || typeof (fullscreen) == "undefined") ? '' : fullscreen;
            if (fullscreen) {
                $('html , body').css({
                    overflowY: 'hidden'
                })
            }
        } else if (loadings == 'false') {
            $('mim-loading').eq(lo).hide();
        }
    }
    // Layout 布局
    for (var i = 0; i < $('mim-row mim-col').length; i++) {
        var spanWidth = $('mim-row mim-col').eq(i).attr('span');
        var spanWidthLeft = $('mim-row mim-col').eq(i).attr('offset');
        spanWidth = 24 / spanWidth;
        spanWidth = 1 / spanWidth;
        spanWidth = spanWidth * 100;
        spanWidthLeft = 24 / spanWidthLeft;
        spanWidthLeft = 1 / spanWidthLeft;
        spanWidthLeft = spanWidthLeft * 100;
        $('mim-row mim-col').eq(i).css({
            "float": "left",
            "boxSizing": "border-box",
            "width": spanWidth + '%',
            "marginLeft": spanWidthLeft + '%',
            "minHeight": "36px"
        })
    }
    for (var j = 0; j < $('mim-row').length; j++) {
        var paddingWidth = $('mim-row').eq(j).attr('gutter');
        paddingWidth = paddingWidth / 2;
        $('mim-row').eq(j).find('mim-col').css({
            marginLeft: paddingWidth,
            marginRight: paddingWidth
        })
    }

    // table表格
    for (var ta = 0; ta < $('mim-table').length; ta++) {
        var mimTable = $('mim-table').eq(ta);
        var mimTableStripe = $('mim-table').eq(ta).attr('stripe');
        var mimTableBorder = $('mim-table').eq(ta).attr('border');
        var mimTableHeight = $('mim-table').eq(ta).attr('height');
        mimTableStripe = (mimTableStripe == "" || mimTableStripe == null || typeof (mimTableStripe) == "undefined") ? '' : mimTableStripe;
        mimTableBorder = (mimTableBorder == "" || mimTableBorder == null || typeof (mimTableBorder) == "undefined") ? '' : mimTableBorder;
        mimTableHeight = (mimTableHeight == "" || mimTableHeight == null || typeof (mimTableHeight) == "undefined") ? '' : mimTableHeight;
        if (mimTableStripe !== 'false' && mimTableStripe !== '') {
            var trLength = $('mim-table').eq(ta).find('table tr').length;
            for (var tl = 0; tl < trLength; tl++) {
                if (tl % 2 == 0 && tl !== 0) {
                    $('mim-table').eq(ta).find('table tr').eq(tl).css("background", '#F2F6FC')
                }
            }
        }
        if (mimTableBorder !== 'false' && mimTableBorder !== '') {
            $('mim-table').eq(ta).find('.mim-table tr .is-leaf').css('border', '1px solid #ebeef5')
        }
        if (mimTableHeight) {
            var mimTableHeightOriginal = $('mim-table').eq(ta).find('.mim-table-body-wrapper').css('height');
            mimTableHeightOriginal = mimTableHeightOriginal.substring(0, mimTableHeightOriginal.length - 2);
            if (mimTableHeightOriginal > mimTableHeight) {
                $('mim-table').eq(ta).find('.mim-table-body-wrapper').css({
                    display: 'inline-block',
                    height: mimTableHeight
                });
                $('mim-table').eq(ta).find('.mim-table-header-wrapper tr').append($('<th width="17px" style="border: 1px solid #ebeef5"></th>'))
            }
        }
    }
});