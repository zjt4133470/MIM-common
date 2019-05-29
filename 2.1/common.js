/*
 * COMMON.JS
 * 1.成功或失敗的提示框
 * 2.弹窗
 * 3.验证码倒计时
 * 4.时间格式化
 * 5.点赞
 * 6.自定义验证（提供手机号和邮箱认证）
 * 7.点击返回顶部
 */

!function () {
    if (typeof(jQuery) !== 'function') {
        throw new Error('请先引入jQuery');
    }
    /**
     * 定义 MIM
     * @type {Object}
     */
    var _mim = {};
    window.$$ = window.MIM = _mim;
}(),
    function () {
        /*成功或失敗的提示框*/
        MIM.prompt = function (width, time, bool, state) {
            /*
            * @param width弹框宽度(默认单位px)，time消失时间（毫秒级），bool（true或false）state提示的语句，
            * 适用层级z-index:999999
            * */
            var set = "";
            clearTimeout(set);
            var div = $("<div></div>").css({
                width: "100%",
                position: "fixed",
                opacity: "0",
                zIndex: "999999"
            }).animate({top: "50px", opacity: '1'}, 500).appendTo($("body"));
            if (bool == true || bool == "true") {
                var div_box = $("<div></div>").css({
                    webkitBoxAlign: "center",
                    msFlexAlign: "center",
                    alignItems: "center",
                    width: width + "px",
                    borderColor: "#e1f3d8",
                    height: "50px",
                    margin: "0px auto",
                    //成功提示框的样式
                    backgroundColor: "#f0f9eb",
                    borderRadius: "4px",
                    border: "1px solid #0fce1b",
                    boxShadow: "0px 0px 10px 1px rgba(15, 206, 27, .2)"
                }).appendTo(div);
                var div_p = $("<p>" + state + "</p>").css({
                    color: "rgba(15,206,27,1)",
                    fontSize: "18px",
                    lineHeight: "50px",
                    textAlign: "center"
                }).appendTo(div_box);
            } else if (bool == false || bool == "false") {
                var div_other = $("<div></div>").css({
                    webkitBoxAlign: "center",
                    msFlexAlign: "center",
                    alignItems: "center",
                    width: width + "px",
                    borderColor: "#fde2e2",
                    height: "50px",
                    margin: "0px auto",
                    //失败提示框的样式
                    backgroundColor: "#fef0f0",
                    borderRadius: "4px",
                    border: "1px solid #e1f3d8",
                    boxShadow: "0px 0px 10px 1px rgba(254, 110, 110, .5)"
                }).appendTo(div);
                var div_other_p = $("<p>" + state + "</p>").css({
                    color: "rgba(254, 110, 110, 1)",
                    fontSize: "18px",
                    lineHeight: "50px",
                    textAlign: "center"
                }).appendTo(div_other);
            }
            set = setTimeout(function () {
                div.animate({marginTop: "-50px", opacity: '0'}, 500, function () {
                    div.remove();
                });
                clearTimeout(set);
            }, time);
        };

        /*（confirm）弹窗*/
        MIM.confirm = function (width, state, successCallback, failCallback, _confirm, _deselect) {
            /*
            * @param width弹框宽度(默人单位px)，state提示语句，successCallback成功回调，failCallback失败回调，
            * _confirm确定（非必填），deselect取消（非必填）
            * 适用层级z-index:9999999
            * */
            if (_confirm == "" || _confirm == null || _confirm == undefined) {
                _confirm = "确定";
            }
            if (_deselect == "" || _deselect == null || _deselect == undefined) {
                _deselect = "取消";
            }
            var div = $("<div></div>").css({
                width: "100%",
                height: "100%",
                position: "fixed",
                backgroundColor: "rgba(0,0,0,.5)",
                top: "0",
                zIndex: "9999999"
            }).appendTo($("body"));
            var div1 = $("<div></div>").css({
                position: "absolute",
                width: width,
                height: "200px",
                left: "50%",
                top: "50%",
                marginTop: "-100px",
                marginLeft: -width / 2,
                backgroundColor: "rgba(255,255,255,1)",
                borderRadius: "5px",
                border: "1px solid #999",
                boxShadow: "0px 0px 20px 1px rgba(0, 0, 0, .5)"
            }).appendTo(div);
            var p = $("<p>" + state + "</p>").css({
                color: "rgba(0,0,0,1)",
                fontSize: "18px",
                width: width,
                marginTop: "50px",
                textAlign: "center",
                letterSpacing: "1px"
            }).appendTo(div1);
            var button1 = $('<button>' + _confirm + '</button>').css({
                cursor: "pointer",
                minWidth: "80px",
                height: "40px",
                color: "rgba(255,255,255,1)",
                fontSize: "14px",
                marginTop: "50px",
                textAlign: "center",
                letterSpacing: "3px",
                marginLeft: width / 10 + "px",
                outline: "none",
                border: "none",
                borderRadius: "4px",
                backgroundColor: "#d60000"
            }).click(function () {
                div.remove();
                successCallback();
            }).appendTo(div1);

            var button2 = $('<button>' + _deselect + '</button>').css({
                float: "right",
                cursor: "pointer",
                minWidth: "80px",
                height: "40px",
                color: "rgba(255,255,255,1)",
                fontSize: "14px",
                marginTop: "50px",
                textAlign: "center",
                letterSpacing: "3px",
                marginRight: width / 10 + "px",
                outline: "none",
                border: "none",
                borderRadius: "4px",
                backgroundColor: "rgba(153,153,153,.8)"
            }).click(function () {
                div.remove();
                failCallback();
            }).appendTo(div1);
        };

        //验证码倒计时
        MIM.countDown = function (time, cssInit, cssEnd) {
        /*倒计时调用（必须为button）
        @param time倒计时时间 cssInit开始样式 cssEnd点击结束后样式
        * */
            var time = time;
            //适用于IE 火狐 谷歌
            var event = window.event || arguments.callee.caller.arguments[0];
            var that = event.srcElement ? event.srcElement : event.target;
            CountdownTime();
            function CountdownTime() {
                var test1;
                if (time >= 1) {
                    time -= 1;
                    if (time == 0) {
                        $(that).css(cssInit);
                        $(that).css({
                            cursor: "pointer"
                        }).removeAttr("disabled").html("获取验证码");
                        return;
                    }
                    //点击后按钮变化
                    $(that).css(cssEnd);
                    $(that).css({
                        cursor: "not-allowed"
                    }).attr("disabled", "disabled").html(time + "s后重试");
                    test1 = setTimeout(function () {
                        CountdownTime();
                        clearTimeout(test1);
                    }, 1000);
                }
            }
        };

        //时间格式化
        MIM.timeFilter = function (value,before,later) {
            /*
          * @param value要转换的时间戳 before年月日中间的格式 later时分中间的格式
          * before（必填）（若年月日不需要则填false）
          * later（必填）（若时分不需要则填false）
          * */
             var oDate = new Date();
            oDate.setTime(value * 1000);
            var y = oDate.getFullYear();
            var M = oDate.getMonth() +1;
            parseInt(M) < 10 ? M = '0' + M : M = M;
            var d = oDate.getDate();
            parseInt(d) < 10 ? d = '0' + d : d = d;
            var h = oDate.getHours();
            parseInt(h) < 10 ? h = '0' + h : h = h;
            var m = oDate.getMinutes();
            parseInt(m) < 10 ? m = '0' + m : m = m;
            var s = oDate.getSeconds();
            parseInt(m) < 10 ? s = '0' + s : s = s;

            if(before!==false && later!==false){
                return y + before + M + before + d + ' ' + h + later + m + later + s
            }else if(later == false){
                return y + before + M + before + d
            }else if(before == false){
                return  h + later + m + later + s
            }
        };
        //点赞
        MIM.likeResult = function (str,css) {
            /*
        * @param str提示的语句 css展示的样式(默认字体颜色d60000)
        * */
            if (css == "" || css == null || css == undefined) {
                var that = $(event.target);
                var y = that.offset().top;
                var x = that.offset().left;
                var div = $("<div>" + str + " +1</div>").css({
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
            } else {
                var that = $(event.target);
                var y = that.offset().top;
                var x = that.offset().left;
                var div = $("<div>" + str + " +1</div>").css({
                    position: "fixed",
                    top: y,
                    left: x,
                    marginTop: "-25px",
                    fontWeight: "600",
                    zIndex: "999999999"
                }).animate({marginTop: "-100px", opacity: '0'}, 2000, function () {
                    div.remove()
                }).appendTo($('body'));
                div.css(css);
            }
        };

        //自定义验证
        MIM.verifyReg = function (str,value,bool) {
            /*
        * @param str验证类型（提供手机号和邮箱）或者验证的正则表达式 value验证的数值 bool是否必填
        * @return 1 验证通过  2 填入为空  3 格式不正确
        * */
            var mobileReg=/^0?(13|15|18|17|14|19|16)[0-9]{9}$/; /*手机号验证*/
            var emailReg=/^[\.a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;/*邮箱验证*/
            var regularReg = str
            if(str == "phone"){
                if(bool){
                    if(!value){
                        return 2
                    }
                }
                if(!!bool){
                    if(!mobileReg.test(value)){
                            return 3
                        }else{
                            return 1
                        }
                    }else{
                            return 1
                }
            }else if(str == "email"){
                if(bool){
                    if(!value){
                        return 2
                    }
                }
                if(!!value){
                    if(!emailReg.test(value)){
                        return 3
                    }else{
                        return 1
                    }
                }else{
                    return 1
                }
            }else{
                if(bool){
                    if(!value){
                        return 2
                    }
                }
                if(!!bool){
                    if(!regularReg.test(value)){
                        return 3
                    }else{
                        return 1
                    }
                }else{
                    return 1
                }
            }
        };

        // 点击返回顶部
        MIM.goToTop = function () {
            if ($(window).scrollTop() == 0) {
                return;
            } else {
                $('html , body').animate({scrollTop: 0}, 'slow');
            }
        };

    }();
