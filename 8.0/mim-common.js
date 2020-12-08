/**
 * mim-common.js
 * @version 8.0
 * @author 王富贵
 * @todo more things to abstract, e.g. Loading css etc.
 */
!function () {
    if (typeof (jQuery) !== 'function') {
        throw new Error('请先引入jQuery');
    }
    /**
     * 定义 MIM
     * @type {Object}
     */
    window.MIM = {};
}(),
    function () {
        /**
         * MIM 配置项
         * @type {Object}
         */
        MIM.config = {
            debug: true, // 开启调试模式
            bo: $("body"),
            su: 'success',
            da: 'danger',
            wa: 'warning',
            in: 'info',
            msl: $("mim-select"),
            mbt: $('mim-button'),
            mip: $('mim-input'),
            mmn: $('mim-menu'),
            mld: $('mim-loading'),
            mmc: $('mim-row mim-col'),
            mmr: $('mim-row'),
            mmt: $('mim-table'),
        };
    }(),
    function () {
        /*************** 以下是公有函数 ***************/

        /*
       * 公有函数，用于展示信息  prompt提示框
       * @param  {[type]} state type time bool[description]
       * @return {[type]}     [description]
       **/
        jQuery.prompt = MIM.prompt = function (state, type, time, bool) {
            if (type !== MIM.config.su && type !== MIM.config.da && type !== MIM.config.wa && type !== MIM.config.in) {
                _alert('(prompt) Please enter the correct word and type.');
                return
            }
            if (typeof (time) !== "number") {
                _alert('(prompt) The config time must be a valid number.');
                return
            }
            if (typeof (bool) !== "boolean") {
                _alert('(prompt) The config bool must be a valid boolean.');
                return
            }
            var div, bool_, set = '', color, top = 60, num, div_p;
            clearTimeout(set);
            bool_ = bool;
            num = $('.mim_number').length;
            if ($('div').hasClass('mim_number')) {
                top = (num + 1) * 60
            }
            switch (type) {
                case MIM.config.su:
                    color = '&#xe885;';
                    break;
                case MIM.config.da:
                    color = '&#xe887;';
                    break;
                case MIM.config.wa:
                    color = '&#xe888;';
                    break;
                case MIM.config.in:
                    color = '&#xe886;';
                    break;
            }
            switch (type) {
                case type:
                    div = $("<div class='mim-prompt_" + type + "_box mim_number'></div>").animate({
                        top: top + 'px',
                        opacity: '1'
                    }, 500).appendTo(MIM.config.bo);
                    div_p = $("<p class='mim-prompt_" + type + "_p'><i class='iconfont' style='margin-left: 0'>" + color + "</i><span>" + state + "</span></p>").appendTo(div);
                    if (bool_) {
                        $("<i class='iconfont mim-prompt_i'>&#xe70e;</i>").click(function () {
                            div.animate({marginTop: "-60px", opacity: '0'}, 500, function () {
                                div.remove();
                            });
                        }).appendTo(div_p);
                    }

            }
            if (time) {
                set = setTimeout(function () {
                    div.animate({marginTop: "-60px", opacity: '0'}, 500, function () {
                        div.remove();
                    });
                    clearTimeout(set);
                }, time);
            }
        };

        /*
       * 公有函数，用于信息提示，messageBox 弹窗
       * @param  {[type]} type obj[description]
       * @return {[type]}   [description]
       **/
        jQuery.messageBox = MIM.messageBox = function (type, obj) {
            if (type !== "$alert" && type !== "$confirm") {
                _alert('(messageBox) Please enter the correct word and type.');
                return
            }
            if (typeof (obj) !== "object") {
                _alert('(messageBox) The config obj must be a valid object.');
                return
            }
            var buttonText, title, content, callback, showClose, closeOnClickModal, confirmButtonText, cancelButtonText,
                confirmType, confirmCloseOnClickModal, confirmSuccessCallback, confirmErrorCallback, confirmIcon = '';
            title = obj.title;
            content = obj.content;
            showClose = obj.showClose;
            MIM.config.bo.css("overflow", "hidden");
            if (type === "$alert") {
                buttonText = obj.buttonText;
                callback = obj.callback;
                closeOnClickModal = obj.closeOnClickModal;
            } else if (type === "$confirm") {
                confirmButtonText = obj.confirmButtonText;
                cancelButtonText = obj.cancelButtonText;
                confirmType = obj.type;
                confirmCloseOnClickModal = obj.closeOnClickModal;
                confirmSuccessCallback = obj.successCallback;
                confirmErrorCallback = obj.errorCallback
            }
            showClose = (showClose === "" || showClose == null || typeof (showClose) == 'undefined') ? true : showClose;
            closeOnClickModal = (closeOnClickModal === "" || closeOnClickModal == null || typeof (closeOnClickModal) == 'undefined') ? false : closeOnClickModal;
            confirmCloseOnClickModal = (confirmCloseOnClickModal === "" || confirmCloseOnClickModal == null || typeof (confirmCloseOnClickModal) == 'undefined') ? false : confirmCloseOnClickModal;
            if (typeof (showClose) !== "boolean" || typeof (closeOnClickModal) !== "boolean") {
                _alert('(messageBox) The config showClose/closeOnClickModal must be a valid boolean.');
                return
            }
            switch (type) {
                case"$alert":
                    var alertDiv = $("<div class='mim-confirm_out'></div>").appendTo(MIM.config.bo);
                    if (closeOnClickModal) {
                        alertDiv.click(function () {
                            alertDiv.remove();
                            MIM.config.bo.css("overflow", "auto");
                        })
                    }
                    var alertDiv1 = $("<div class='mim-confirm_inner'></div>").appendTo(alertDiv);
                    alertDiv1.click(function (e) {
                        e.stopPropagation();
                    });
                    var alertH = $("<h2 class='mim-confirm_h'><span>" + title + "</span></h2>").appendTo(alertDiv1);
                    if (showClose) {
                        var alertI = $("<i class='iconfont'>&#xe70e;</i>").click(function () {
                            alertDiv.remove();
                            MIM.config.bo.css("overflow", "auto");
                            MIM.prompt('取消操作', 'info', 3000, false);
                        }).appendTo(alertH);
                    }
                    var alertP = $("<div class='mim-confirm_p'><p><span class='alterSpan'>" + content + "</span></p></div>").appendTo(alertDiv1);
                    var alertButton1 = $('<button class="mim-confirm_button1">' + buttonText + '</button>').click(function () {
                        alertDiv.remove();
                        MIM.config.bo.css("overflow", "auto");
                        callback();
                    }).appendTo(alertDiv1);
                    break;
                case"$confirm":
                    if (confirmType === MIM.config.su) {
                        confirmIcon = "<i class='iconfont' style='color: #67c23a'>&#xe885;</i>"
                    } else if (confirmType === MIM.config.da) {
                        confirmIcon = "<i class='iconfont' style='color: #F56C6C'>&#xe887;</i>"
                    } else if (confirmType === MIM.config.wa) {
                        confirmIcon = "<i class='iconfont' style='color: #E6A23C'>&#xe888;</i>"
                    } else if (confirmType === MIM.config.in) {
                        confirmIcon = "<i class='iconfont' style='color: #909399'>&#xe886;</i>"
                    }
                    var confirmDiv = $("<div class='mim-confirm_out'></div>").appendTo(MIM.config.bo);
                    if (confirmCloseOnClickModal) {
                        confirmDiv.click(function () {
                            confirmDiv.remove();
                            MIM.config.bo.css("overflow", "auto");
                        })
                    }
                    var confirmDiv1 = $("<div class='mim-confirm_inner'></div>").appendTo(confirmDiv);
                    confirmDiv1.click(function (e) {
                        e.stopPropagation();
                    });
                    var confirmH = $("<h2 class='mim-confirm_h'><span>" + title + "</span></h2>").appendTo(confirmDiv1);
                    if (showClose) {
                        var confirmI = $("<i class='iconfont'>&#xe70e;</i>").click(function () {
                            confirmDiv.remove();
                            MIM.config.bo.css("overflow", "auto");
                            MIM.prompt('取消操作', 'info', 3000, false);
                        }).appendTo(confirmH);
                    }
                    var confirmP = $("<div class='mim-confirm_p'><p>" + confirmIcon + "<span>" + content + "</span></p></div>").appendTo(confirmDiv1);
                    var confirmButtonTextButton = $('<button class="mim-confirm_button1">' + confirmButtonText + '</button>').click(function () {
                        confirmDiv.remove();
                        MIM.config.bo.css("overflow", "auto");
                        confirmSuccessCallback();
                    }).appendTo(confirmDiv1);
                    var cancelButtonTextButton = $('<button class="mim-confirm_button2">' + cancelButtonText + '</button>').click(function () {
                        confirmDiv.remove();
                        MIM.config.bo.css("overflow", "auto");
                        confirmErrorCallback();
                    }).appendTo(confirmDiv1);
                    break;
            }
        };

        /*
       * 公有函数，用于验证码倒计时，countDown倒计时
       * @param  {[type]} time  obj state[description]
       * @return {[type]} time_  [description]
       **/
        jQuery.fn.countDown = MIM.countDown = function (time, cssObj, state) {
            if (typeof (time) !== "number") {
                _alert('(countDown) The config time must be a valid number.');
                return
            }
            var time_ = time, that = '', state_ = state, cssInit, cssEnd, thatDisabled, state_html;
            if (cssObj) {
                cssInit = cssObj.cssInit;
                cssEnd = cssObj.cssEnd;
            } else {
                cssInit = '';
                cssEnd = '';
            }
            cssInit = (cssInit === "" || cssInit == null || typeof (cssInit) == 'undefined') ? {} : cssInit;
            cssEnd = (cssEnd === "" || cssEnd == null || typeof (cssEnd) == 'undefined') ? {} : cssEnd;
            if ($(this)[0] === window.MIM) {
                var event = window.event;
                that = event.srcElement ? event.srcElement : event.target;
                state_html = that.innerHTML;
                thatDisabled = that.getAttribute('disabled');
                thatDisabled = (thatDisabled === "" || thatDisabled == null || typeof (thatDisabled) == 'undefined') ? '' : thatDisabled;
                that = $(that);
                if (!thatDisabled) {
                    countdownTime();
                }
            } else {
                that = $(this);
                state_html = that.html();
                that.on('click', function () {
                    if (!that.attr("disabled")) {
                        countdownTime();
                    }
                });
            }
            state_ = (state_ === "" || state_ == null || typeof (state_) == 'undefined') ? state_html : state_;

            function countdownTime() {
                var test_;
                if (time_ >= 1) {
                    time_ -= 1;
                    if (time_ === 0) {
                        that.css(cssInit).removeAttr("disabled").html(state_);
                        return time_ = time;
                    }
                    that.css(cssEnd).attr("disabled", "disabled").html(time_ + "s后重试");
                    test_ = setTimeout(function () {
                        countdownTime();
                        clearTimeout(test_);
                    }, 1000);
                }
            }
        };

        /*
       * 公有函数，用于格式化时间，timeFilter时间格式化
       * @param  {[type]} value before later [description]
       * @return {[type]}  time  [description]
       **/
        jQuery.timeFilter = MIM.timeFilter = function (value, before, later) {
            if (before !== false && typeof (before) !== "string" || before === "") {
                _alert('(timeFilter) The before must be a valid and it not empty string/true.');
                return
            }
            if (later !== false && typeof (later) !== "string" || later === "") {
                _alert('(timeFilter) The later must be a valid and it not empty string/true.');
                return
            }
            var oDate = new Date();
            oDate.setTime(value * 1000);
            var y = oDate.getFullYear();
            var M = oDate.getMonth() + 1;
            M = parseInt(M) < 10 ? M = '0' + M : M;
            var d = oDate.getDate();
            d = parseInt(d) < 10 ? d = '0' + d : d;
            var h = oDate.getHours();
            h = parseInt(h) < 10 ? h = '0' + h : h;
            var m = oDate.getMinutes();
            m = parseInt(m) < 10 ? m = '0' + m : m;
            var s = oDate.getSeconds();
            s = parseInt(s) < 10 ? s = '0' + s : s;
            if (before !== false && later !== false) {
                return y + before + M + before + d + ' ' + h + later + m + later + s
            } else if (later === false) {
                return y + before + M + before + d
            } else if (before === false) {
                return h + later + m + later + s
            }
        };

        /*
     * 公有函数，用于点赞样式，likeResult点赞
     * @param  {[type]} str css [description]
     * @return {[type]}    [description]
     **/
        jQuery.fn.likeResult = MIM.likeResult = function (str, css) {
            css = (css === "" || css == null || typeof (css) == 'undefined') ? '' : css;
            if (typeof (css) !== "object" && css !== '') {
                _alert('(likeResult) The config css must be a valid object.');
                return
            }
            var that = '';
            if ($(this)[0] === window.MIM) {
                var event = window.event;
                that = event.srcElement ? event.srcElement : event.target;
                that = $(that);
                likeResultFn();
            } else {
                that = $(this);
                $(this).on('click', function () {
                    likeResultFn();
                });
            }

            function likeResultFn() {
                var y = that.offset().top;
                var x = that.offset().left;
                var div = $("<div>" + str + "</div>").css({
                    position: "fixed",
                    top: y,
                    left: x,
                    marginTop: "-25px",
                    color: "#F56C6C",
                    fontWeight: "600",
                    zIndex: "999999999",
                }).animate({marginTop: "-100px", opacity: '0'}, 2000, function () {
                    div.remove()
                }).appendTo(MIM.config.bo);
                if (css) {
                    div.css(css);
                }
            }
        };

        /*
       * 公有函数，用于验证手机号邮箱等，自定义验证
       * @param  {[type]} str value bool[description]
       * @return {[type]}  1 验证通过  2 填入为空  3 格式不正确  [description]
       **/
        jQuery.verifyReg = MIM.verifyReg = function (str, value, bool) {
            var mobileReg = /^0?(13|15|18|17|14|19|16)[0-9]{9}$/; /*手机号验证*/
            var emailReg = /^[\.a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;/*邮箱验证*/
            if (str === "phone") {
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
            } else if (str === "email") {
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
                    if (!str.test(value)) {
                        return 3
                    } else {
                        return 1
                    }
                } else {
                    return 1
                }
            }
        };

        /*
      * 公有函数，用于滚动条上升，goToTop
      * @param  {[type]}     [description]
      * @return {[type]}    [description]
      **/
        jQuery.goToTop = MIM.goToTop = function () {
            if ($(window).scrollTop() !== 0) {
                $('html , body').animate({scrollTop: 0}, 'slow');
            }
        };

        /*
         * 公有函数，用于调用ajax，ajax调用
         * @param  {[type]} url data async type dataType beforeSendFn[description]
         * @return {[type]} successfn  errorfn [description]
         **/
        jQuery.ajaxUtils = MIM.ajaxUtils = function (url, data, async, type, dataType, successfn, errorfn, beforeSendFn) {
            async = (async == null || async === "" || typeof (async) == "undefined") ? "true" : async;
            type = (type == null || type === "" || typeof (type) == "undefined") ? "post" : type;
            dataType = (dataType == null || dataType === "" || typeof (dataType) == "undefined") ? "json" : dataType;
            data = (data == null || data === "" || typeof (data) == "undefined") ? {} : data;
            beforeSendFn = (beforeSendFn == null || beforeSendFn === "" || typeof (beforeSendFn) == "undefined") ? function () {

            } : beforeSendFn;
            $.ajax({
                type: type,
                async: async,
                data: data,
                url: url,
                dataType: dataType,
                beforeSend: function (xhr) {
                    beforeSendFn(xhr)
                },
                success: function (d) {
                    successfn(d)
                },
                error: function (e) {
                    errorfn(e);
                }
            });
        };

        /*
      * 公有函数，用于拖拽，简单的拖拽
      * @param  {[type]}   [description]
      * @return {[type]}  [description]
      **/
        jQuery.fn.divDrag = function () {
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

        /*
       * 公有函数，用于初始化select，select 选择器初始化
       * @param  {[type]} data  [description]
       * @return {[type]}  [description]
       **/
        jQuery.fn.selectInit = function (data) {
            var clearable = $(this).attr('clearable');
            var placeholder = $(this).attr('placeholder');
            var mimSpans = '';
            clearable = (typeof (clearable) == "undefined") ? '' : true;
            placeholder = (placeholder == null || placeholder === "" || typeof (placeholder) == "undefined") ? "请选择" : placeholder;
            if (clearable) {
                var that = $(this);
                that.hover(function () {
                    mimSpans = $('<mim-spans class="iconfont">&#xe643;</mim-spans>').click(function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                        that.find('input').val('');
                        that.find('div ul li').removeClass('pitch-select');
                        that.find('option:selected').html('');
                    }).appendTo(that);
                }, function () {
                    mimSpans.remove();
                })
            }
            var res = data;
            $('<input type="text" class="mim-select" placeholder=' + placeholder + ' readonly>').appendTo($(this));
            $('<mim-span class="iconfont">&#xe668;</mim-span>').appendTo($(this));
            var div = $('<div></div>').appendTo($(this));
            var ul = $('<ul></ul>').appendTo(div);
            var select = $('<select style="display: none"></select>').appendTo(div);
            $('<option></option>').appendTo(select);
            for (var op = 0; op < res.length; op++) {
                var disableds = res[op].disabled;
                disableds = (disableds == null || disableds === "" || typeof (disableds) == "undefined") ? "false" : 'disabled';
                var option = $('<option idIndex=' + res[op].id + ' disabled = ' + disableds + '>' + res[op].value + '</option>').appendTo(select);
            }
            for (var i = 0; i < res.length; i++) {
                var disabled = res[i].disabled;
                disabled = (disabled == null || disabled === "" || typeof (disabled) == "undefined") ? "false" : 'disabled';
                $('<li idIndex = ' + res[i].id + ' disabled = ' + disabled + ' disabled-select = ' + disabled + '>' + res[i].value + '</li>').click(function (e) {
                    var disabled_elect = $(this).attr('disabled-select');
                    if (disabled_elect !== 'disabled') {
                        $(this).parent().parent().prev().prev().val($(this).html());
                        $(this).addClass('pitch-select').siblings().removeClass('pitch-select');
                        var that = $(this);
                        for (var op = 0; op < $(this).parent().next().find('option').length; op++) {
                            if (that.parent().next().find('option').eq(op).attr('idIndex') === that.attr('idIndex')) {
                                that.parent().next().find('option').eq(op).attr('selected', 'selected').siblings().removeAttr('selected');
                            }
                        }
                    } else {
                        $(this).addClass('no-pitch-select');
                    }
                }).appendTo(ul)
            }
        };

        /*
      * 公有函数，用于抽屉初始化，drawerInit抽屉初始化
      * @param  {[type]} str [description]
      * @return {[type]}    [description]
      **/
        jQuery.fn.drawerInit = MIM.drawerInit = function (str) {
            str = (str === "" || str == null || typeof (str) == 'undefined') ? '' : str;
            if (typeof (str) !== "string" && str !== '') {
                _alert('(drawerInit) The config str must be a valid string.');
                return
            }
            var that = '';
            if ($(this)[0] === window.MIM) {
                var event = window.event;
                that = event.srcElement ? event.srcElement : event.target;
                that = $(that);
                drawer();
            } else {
                that = $(this);
                $(this).on('click', function () {
                    drawer();
                });
            }

            function drawer() {
                MIM.config.bo.css('overflow', 'hidden');
                var mimDrawer = $('.' + str + '');
                var title = mimDrawer.attr('drawerTitle');
                var size = mimDrawer.attr('size');
                var direction = mimDrawer.attr('direction');
                var mimDrawerCont = $('<mim-drawer-cont><h2><span>' + title + '</span><i class="iconfont mim-closeChangeDiv">&#xe70e;</i></h2></mim-drawer-cont>');
                mimDrawer.find('mim-drawer-content').appendTo(mimDrawerCont);
                if (mimDrawer.find('mim-drawer-cont').length === 1) {
                    mimDrawer.find('mim-drawer-cont').first().remove()
                }
                mimDrawer.append(mimDrawerCont);
                mimDrawer.click(function () {
                    mimDrawer.hide();
                    mimDrawerCont.hide();
                    MIM.config.bo.css('overflow', 'auto');
                }).show();
                $('.mim-closeChangeDiv').click(function () {
                    mimDrawer.hide();
                    mimDrawerCont.hide();
                    MIM.config.bo.css('overflow', 'auto');
                });
                mimDrawerCont.click(function (e) {
                    e.stopPropagation();
                });
                switch (direction) {
                    case 'rtl':
                        mimDrawer.find('mim-drawer-cont').css({
                            width: 0,
                            right: 0,
                            height: 'calc(100vh)'
                        }).animate({width: size, opacity: '1'}, 0);
                        break;
                    case 'ltr':
                        mimDrawer.find('mim-drawer-cont').css({
                            width: 0,
                            left: 0,
                            height: 'calc(100vh)'
                        }).animate({width: size, opacity: '1'}, 0);
                        break;
                    case 'ttb':
                        mimDrawer.find('mim-drawer-cont').css({
                            top: 0,
                            width: '100%',
                            height: 0
                        }).animate({height: size, opacity: '1'}, 0);
                        break;
                    case 'btt':
                        mimDrawer.find('mim-drawer-cont').css({
                            bottom: 0,
                            width: '100%',
                            height: 0
                        }).animate({height: size, opacity: '1'}, 0);
                        break;
                }
            }
        };

        /*
   * 公有函数，用于抽Notification初始化， Notification 通知
   * @param  {[type]} type obj [description]
   * @return {[type]}    [description]
   **/
        jQuery.fn.notification = MIM.notification = function (type, obj) {
            if (type !== "$notify") {
                _alert('(notification) Please enter the correct word and type.');
                return
            }
            if (typeof (obj) !== "object") {
                _alert('(notification) The config obj must be a valid object.');
                return
            }
            var that = '';
            if ($(this)[0] === window.MIM) {
                var event = window.event;
                that = event.srcElement ? event.srcElement : event.target;
                that = $(that);
                notificationFn();
            } else {
                that = $(this);
                $(this).on('click', function () {
                    notificationFn();
                });
            }

            function notificationFn() {
                var top = 25;
                var sets = '';
                clearTimeout(sets);
                var num = $('.mim-notification').length;
                if ($('div').hasClass('mim-notification')) {
                    top = $('.mim-notification').eq(Number(num) - 1).innerHeight() * (Number(num)) + top * (Number(num) + 1);
                }
                var title = obj.title;
                var message = obj.message;
                var duration = obj.duration;
                var notificationType = obj.type;
                var position = obj.position;
                var showClose = obj.showClose;
                var confirmIcont = "";
                var div = '';
                if (notificationType === MIM.config.su) {
                    confirmIcont = "<i class='iconfont' style='color: #67c23a;margin-left: 0;font-size: 18px !important;vertical-align: middle;'>&#xe885;</i>"
                } else if (notificationType === MIM.config.da) {
                    confirmIcont = "<i class='iconfont' style='color: #F56C6C;margin-left: 0;font-size: 18px !important;vertical-align: middle;'>&#xe887;</i>"
                } else if (notificationType === MIM.config.wa) {
                    confirmIcont = "<i class='iconfont' style='color: #E6A23C;margin-left: 0;font-size: 18px !important;vertical-align: middle;'>&#xe888;</i>"
                } else if (notificationType === MIM.config.in) {
                    confirmIcont = "<i class='iconfont' style='color: #909399;margin-left: 0;font-size: 18px !important;vertical-align: middle;'>&#xe886;</i>"
                }
                position = (position == null || position === "" || typeof (position) == "undefined") ? "" : position;
                showClose = (showClose == null || showClose === "" || typeof (showClose) == "undefined") ? "" : showClose;
                if (position === "") {
                    div = $("<div class='mim-notification'></div>").css('top', top + 'px').animate({right: '20px'}, 300).appendTo(MIM.config.bo);
                } else if (position === 'top-right') {
                    div = $("<div class='mim-notification'></div>").css('top', top + 'px').animate({right: '20px'}, 300).appendTo(MIM.config.bo);
                } else if (position === 'bottom-right') {
                    div = $("<div class='mim-notification'></div>").css('bottom', top + 'px').animate({right: '20px'}, 300).appendTo(MIM.config.bo);
                } else if (position === 'top-left') {
                    div = $("<div class='mim-notification'></div>").css('top', top + 'px').animate({left: '20px'}, 300).appendTo(MIM.config.bo);
                } else if (position === 'bottom-left') {
                    div = $("<div class='mim-notification'></div>").css('bottom', top + 'px').animate({left: '20px'}, 300).appendTo(MIM.config.bo);
                }
                if (title) {
                    $('<div class="mim-notification-header"><p>' + confirmIcont + '<span>' + title + '</span><i class="iconfont mim-iconfontDel">&#xe70e;</i></p></div>').appendTo(div);
                    $('<div class="mim-notification-cont mim_multi_line">' + message + '</div>').appendTo(div);
                } else {
                    $('<div class="mim-notification-header"><p>' + confirmIcont + '<span class="mim-ellipsis" style="font-size: 14px;font-weight: 400;">' + message + '</span><i class="iconfont mim-iconfontDel">&#xe70e;</i></p></div>').appendTo(div);
                }

                if (showClose === false) {
                    $('.mim-iconfontDel').remove()
                } else {
                    $('.mim-iconfontDel').show().on('click', function () {
                        $(this).parent().parent().parent().remove()
                    });
                }
                if (duration) {
                    sets = setTimeout(function () {
                        div.animate({marginTop: "-50px", opacity: '0'}, 500, function () {
                            div.remove();
                        });
                        clearTimeout(sets);
                    }, duration);
                }
            }
        };

        /*************** 以下是私有函数 ***************/

        /*
         * 私有函数，用于alert信息msg
         * @param  {[type]} msg [description]
         * @return {[type]}     [description]
         **/

        function _alert(msg) {
            if (MIM.config.debug) {
                alert(msg);
            } else {
                console.log('[False:' + _getNowFormatDate() + ']' + msg);
            }
        }

        /*
         * 私有函数，返回格式化后的现在时间
         * @return {[type]} [description]
         **/
        function _getNowFormatDate() {
            var date = new Date(), seperator1 = "-", seperator2 = ":", currentdate, month, strDate;
            month = date.getMonth() + 1;
            strDate = date.getDate();
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }
            currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
                + " " + date.getHours() + seperator2 + date.getMinutes()
                + seperator2 + date.getSeconds();
            return currentdate;
        }
    }();
$(function () {
    /*************** 以下是mim-ui ***************/

    //button按钮
    for (var b = 0; b < MIM.config.mbt.length; b++) {
        if (MIM.config.mbt.eq(b).attr('loading') === 'true') {
            $('<i style="color: #ffffff" class="iconfont mim-loading">&#xe687;</i>').appendTo(MIM.config.mbt.eq(b))
        }
        if (MIM.config.mbt.eq(b).attr('disabled')) {
            MIM.config.mbt.eq(b).unbind();
            MIM.config.mbt.eq(b).on("click", function (e) {
                e.stopPropagation();
                e.preventDefault();
            });
        }
        switch (MIM.config.mbt.eq(b).attr('size')) {
            case 'medium':
                MIM.config.mbt.eq(b).css({
                    height: '36px',
                    lineHeight: '36px'
                });
                break;
            case 'small':
                MIM.config.mbt.eq(b).css({
                    height: '32px',
                    lineHeight: '32px'
                });
                break;
            case 'mini':
                MIM.config.mbt.eq(b).css({
                    height: '28px',
                    lineHeight: '28px'
                });
                break;
        }
    }

    //input
    for (var iu = 0; iu < MIM.config.mip.length; iu++) {
        var mimInput = MIM.config.mip.eq(iu);
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
        type = (type === "" || type == null || typeof (type) == "undefined") ? 'text' : type;
        placeholder = (placeholder === "" || placeholder == null || typeof (placeholder) == "undefined") ? '' : placeholder;
        value = (value === "" || value == null || typeof (value) == "undefined") ? '' : value;
        mimClass = (mimClass === "" || mimClass == null || typeof (mimClass) == "undefined") ? '' : mimClass;
        mimId = (mimId === "" || mimId == null || typeof (mimId) == "undefined") ? '' : mimId;
        disabled = (disabled === "" || disabled == null || typeof (disabled) == "undefined") ? '' : disabled;
        prefixIcon = (prefixIcon === "" || prefixIcon == null || typeof (prefixIcon) == "undefined") ? '' : prefixIcon;
        suffixIcon = (suffixIcon === "" || suffixIcon == null || typeof (suffixIcon) == "undefined") ? '' : suffixIcon;
        maxlength = (maxlength === "" || maxlength == null || typeof (maxlength) == "undefined") ? '' : maxlength;
        showWordLimit = (typeof (showWordLimit) == "undefined") ? '' : true;
        mimSize = (mimSize === "" || mimSize == null || typeof (mimSize) == "undefined") ? '' : mimSize;
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
                    MIM.config.mip.find('input').eq(iu).css({
                        height: '36px',
                        lineHeight: '36px'
                    });
                    break;
                case 'small':
                    MIM.config.mip.find('input').eq(iu).css({
                        height: '32px',
                        lineHeight: '32px'
                    });
                    break;
                case 'mini':
                    MIM.config.mip.find('input').eq(iu).css({
                        height: '28px',
                        lineHeight: '28px'
                    });
                    break;
            }
        }
    }

    // select 选择框
    for (var se = 0; se < MIM.config.msl.length; se++) {
        var mimSelect = MIM.config.msl.eq(se);
        mimSelect.find('mim-span').on("click", function () {
            $(this).prev().focus();
        });
        mimSelect.find('input').val(mimSelect.find('option:selected').html());
        mimSelect.on("click", function (e) {
            e.stopPropagation();
            e.preventDefault();
            var offHeight = $(this).offset().top - $(window).scrollTop();
            offHeight = $(window).height() - offHeight;
            var divHeight = $(this).find('div').height();
            if (offHeight - 40 <= divHeight) {
                $(this).find('div').css({
                    bottom: '50px'
                })
            } else {
                $(this).find('div').css({
                    bottom: 'auto'
                })
            }
            if ($(this).attr('bool') !== 'false') {
                if ($(this).find('div ul li.no-pitch-select').attr('disabled-select') === 'disabled') {
                    $(this).find('div ul li').removeClass('no-pitch-select');
                } else {
                    $(this).find('div').fadeOut();
                    $(this).find('mim-span').css({
                        transform: "rotate(0deg)"
                    });
                    $(this).attr('bool', 'false')
                }
            } else {
                $(this).find('div').fadeIn();
                $(this).find('mim-span').css({
                    transform: "rotate(180deg)"
                });
                $(this).attr('bool', 'true')
            }
        });
        $('html , body').on("click", function () {
            MIM.config.msl.attr('bool', 'false').find('div').fadeOut();
            MIM.config.msl.find('mim-span').css({
                transform: "rotate(0deg)"
            });
        });

    }


    //侧边栏
    for (var mm = 0; mm < MIM.config.mmn.length; mm++) {
        var backgroundColor = MIM.config.mmn.eq(mm).attr('background-color');
        backgroundColor = (backgroundColor === "" || backgroundColor == null || typeof (backgroundColor) == "undefined") ? '#ffffff' : backgroundColor;
        if (backgroundColor) {
            MIM.config.mmn.eq(mm).find('ul li').css({
                'background': backgroundColor
            });
        }

        var textColor = MIM.config.mmn.eq(mm).attr('text-color');
        textColor = (textColor === "" || textColor == null || typeof (textColor) == "undefined") ? '#000000' : textColor;
        if (textColor) {
            MIM.config.mmn.eq(mm).find('ul .mim-menu').css({
                'color': textColor
            });
            MIM.config.mmn.eq(mm).find('.second-mim-menu li').css({
                'color': textColor
            });
        }

        var hoverBgColor = MIM.config.mmn.eq(mm).attr('hover-bgColor');
        hoverBgColor = (hoverBgColor === "" || hoverBgColor == null || typeof (hoverBgColor) == "undefined") ? '' : hoverBgColor;
        var hoverTextColor = MIM.config.mmn.eq(mm).attr('hover-textColor');
        hoverTextColor = (hoverTextColor === "" || hoverTextColor == null || typeof (hoverTextColor) == "undefined") ? '' : hoverTextColor;
        if (hoverBgColor || hoverTextColor) {
            var hoverBgColors = hoverBgColor;
            var hoverTextColors = hoverTextColor;
            var textColors = textColor;
            MIM.config.mmn.eq(mm).find('ul .mim-menu').hover(function () {
                if (!$(this).hasClass("disabled")) {
                    $(this).css({
                        'background-color': hoverBgColors,
                        'color': hoverTextColors
                    });
                }
            }, function () {
                $(this).css({
                    'background': 'none',
                    'color': textColors
                });
            });
            MIM.config.mmn.eq(mm).find('ul .mim-menu-item').hover(function () {
                if (!$(this).hasClass("disabled")) {
                    $(this).css({
                        'background-color': hoverBgColors,
                        'color': hoverTextColors
                    })
                }
            }, function () {
                $(this).css({
                    'background': 'none',
                    'color': textColors
                })
            });
        } else {
            MIM.config.mmn.eq(mm).find('ul .mim-menu').hover(function () {
                $(this).css({
                    'background-color': '#ecf5ff',
                });
            }, function () {
                $(this).css({
                    'background': 'none',
                });
            });
            MIM.config.mmn.eq(mm).find('ul .mim-menu-item').hover(function () {
                $(this).css({
                    'background-color': '#ecf5ff',
                })
            }, function () {
                $(this).css({
                    'background': 'none',
                })
            });
        }
        var active = MIM.config.mmn.eq(mm).attr('default-active');
        active = (active === "" || active == null || typeof (active) == "undefined") ? '' : active;
        if (active) {
            for (var is = 0; is < MIM.config.mmn.eq(mm).find('ul li').length; is++) {
                if (MIM.config.mmn.eq(mm).find('ul li').eq(is).find('span').attr('index') === active) {
                    MIM.config.mmn.eq(mm).find('ul li').eq(is).addClass('is-active').siblings().removeClass('is-active');
                    MIM.config.mmn.eq(mm).find('ul li').eq(is).parent().parent().siblings().removeClass('is-active');
                    MIM.config.mmn.eq(mm).find('ul li').eq(is).siblings().children().children().removeClass('is-active');
                    MIM.config.mmn.eq(mm).find('ul li').eq(is).parent().parent().siblings().children().children().removeClass('is-active')
                }
            }
        }
    }
    $('mim-menu ul li .disabled').unbind();
    $('mim-menu ul li').on('click', function (e) {
        e.stopPropagation();
        e.preventDefault();
        if ($(this).find('.icon-copy-down').length !== 0) {
            var bool = $(this).find('.icon-copy-down').attr('bool');
            if (bool === 'false') {
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
                if (!$(this).hasClass('disabled')) {
                    $(this).addClass('is-active').siblings().removeClass('is-active');
                    $(this).parent().parent().siblings().removeClass('is-active');
                    $(this).siblings().children().children().removeClass('is-active');
                    $(this).parent().parent().siblings().children().children().removeClass('is-active')
                }
            }
        }
    });

    //加载页
    for (var lo = 0; lo < MIM.config.mld.length; lo++) {
        var loadingDiv = $('<div class="mim-loading-div"></div>');
        var loadingIcon = $('<div class="mim-loading-icon"></div>');
        loadingIcon.appendTo(loadingDiv.appendTo(MIM.config.mld.eq(lo)));
        var loadingSpinner = MIM.config.mld.eq(lo).attr('loading-spinner');
        loadingSpinner = (loadingSpinner === "" || loadingSpinner == null || typeof (loadingSpinner) == "undefined") ? '' : loadingSpinner;
        if (loadingSpinner) {
            loadingIcon.remove();
            var loadingIconIconfont = $('<i class="mim-loading-icon-iconfont iconfont">' + loadingSpinner + '</i>');
            loadingIconIconfont.appendTo(loadingDiv)
        }
        var loadingText = MIM.config.mld.eq(lo).attr('loading-text');
        loadingText = (loadingText === "" || loadingText == null || typeof (loadingText) == "undefined") ? '' : loadingText;
        if (loadingText) {
            $('<p  class="mim-loadingText">' + loadingText + '</p>').appendTo(loadingDiv)
        }
        var loadingBackground = MIM.config.mld.eq(lo).attr('loading-background');
        loadingBackground = (loadingBackground === "" || loadingBackground == null || typeof (loadingBackground) == "undefined") ? '' : loadingBackground;
        if (loadingBackground) {
            MIM.config.mld.eq(lo).css({
                backgroundColor: loadingBackground
            })
        }
        var fullscreen = MIM.config.mld.eq(lo).attr('fullscreen');
        fullscreen = (fullscreen === "" || fullscreen == null || typeof (fullscreen) == "undefined") ? '' : fullscreen;
        if (fullscreen) {
            MIM.config.mld.eq(lo).css({
                zIndex: '99999999',
                position: "fixed",
            });
            $('html , body').css({
                overflowY: 'hidden',
            })
        }
    }

    // Layout 布局
    for (var i = 0; i < MIM.config.mmc.length; i++) {
        var spanWidth = MIM.config.mmc.eq(i).attr('span');
        var spanWidthLeft = MIM.config.mmc.eq(i).attr('offset');
        spanWidth = 24 / spanWidth;
        spanWidth = 1 / spanWidth;
        spanWidth = spanWidth * 100;
        spanWidthLeft = 24 / spanWidthLeft;
        spanWidthLeft = 1 / spanWidthLeft;
        spanWidthLeft = spanWidthLeft * 100;
        MIM.config.mmc.eq(i).css({
            "float": "left",
            "boxSizing": "border-box",
            "width": spanWidth + '%',
            "marginLeft": spanWidthLeft + '%',
            "minHeight": "36px"
        })
    }
    for (var j = 0; j < MIM.config.mmr.length; j++) {
        var paddingWidth = MIM.config.mmr.eq(j).attr('gutter');
        paddingWidth = paddingWidth / 2;
        MIM.config.mmr.eq(j).find('mim-col').css({
            marginLeft: paddingWidth,
            marginRight: paddingWidth
        });
        if (paddingWidth) {
            MIM.config.mmr.eq(j).find('mim-col').first().css({
                marginLeft: 0
            });
            MIM.config.mmr.eq(j).find('mim-col').last().css({
                marginRight: 0
            });
        }
    }

    // table表格
    for (var ta = 0; ta < MIM.config.mmt.length; ta++) {
        var mimTable = MIM.config.mmt.eq(ta);
        var mimTableStripe = MIM.config.mmt.eq(ta).attr('stripe');
        var mimTableBorder = MIM.config.mmt.eq(ta).attr('border');
        var mimTableHeight = MIM.config.mmt.eq(ta).attr('height');
        mimTableStripe = (mimTableStripe === "" || mimTableStripe == null || typeof (mimTableStripe) == "undefined") ? '' : mimTableStripe;
        mimTableBorder = (mimTableBorder === "" || mimTableBorder == null || typeof (mimTableBorder) == "undefined") ? '' : mimTableBorder;
        mimTableHeight = (mimTableHeight === "" || mimTableHeight == null || typeof (mimTableHeight) == "undefined") ? '' : mimTableHeight;
        if (mimTableStripe !== 'false' && mimTableStripe !== '') {
            var trLength = MIM.config.mmt.eq(ta).find('table tr').length;
            for (var tl = 0; tl < trLength; tl++) {
                if (tl % 2 === 0 && tl !== 0) {
                    MIM.config.mmt.eq(ta).find('table tr').eq(tl).css("background", '#F2F6FC')
                }
            }
        }
        if (mimTableBorder !== 'false' && mimTableBorder !== '') {
            MIM.config.mmt.eq(ta).find('.mim-table tr .is-leaf').css('borderRight', '1px solid #ebeef5')
        }
        if (mimTableHeight) {
            var mimTableHeightOriginal = MIM.config.mmt.eq(ta).find('.mim-table-body-wrapper').css('height');
            mimTableHeightOriginal = mimTableHeightOriginal.substring(0, mimTableHeightOriginal.length - 2);
            if (mimTableHeightOriginal > mimTableHeight) {
                MIM.config.mmt.eq(ta).find('.mim-table-body-wrapper').css({
                    display: 'inline-block',
                    height: mimTableHeight
                });
                MIM.config.mmt.eq(ta).find('.mim-table-header-wrapper tr').append($('<th width="17px" style="border: 1px solid #ebeef5"></th>'))
            }
        }
    }
});
