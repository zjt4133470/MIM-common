/*
 * 公共JS
 * 1.成功或失敗的提示框
 * 2.弹窗
 * 3.验证码倒计时
 */

!function () {
    if (typeof(jQuery) !== 'function') {
        throw new Error('请先引入jQuery');
    }
    /**
     * 定义 MIM
     * @type {Object}
     */
    var _cmm = {};
    window.CMM = _cmm;
}(),
    function () {
        var callback = {
            'onSuccess': {},
            'onError': {}
        };
        /*成功或失敗的提示框*/
        CMM.prompt = function (width, time, bool, state) {
            /*
            * @param width弹框宽度，time消失时间（毫秒级），bool（true或false）state提示的语句，
            * */
            var set = "";
            clearTimeout(set);
            var div = $("<div></div>").css({
                width: "100%",
                position: "fixed",
                opacity: "0",
                zIndex: "999999"
            }).animate({top: "50px", opacity: '1'}, 500).appendTo($("body"));
            if (bool == true) {
                var div_box = $("<div></div>").css({
                    webkitBoxAlign: "center",
                    msFlexAlign: "center",
                    alignItems: "center",
                    width: width + "px",
                    borderColor: "#e1f3d8",
                    height: "50px",
                    margin: "0px auto",
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
            } else if (bool == false) {
                var div_other = $("<div></div>").css({
                    webkitBoxAlign: "center",
                    msFlexAlign: "center",
                    alignItems: "center",
                    width: width + "px",
                    borderColor: "#fde2e2",
                    height: "50px",
                    margin: "0px auto",
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
        CMM.confirm = function (width, state, successCallback, failCallback, _confirm, deselect) {
            /*
            * @param width弹框宽度，state提示语句，successCallback成功回调，failCallback失败回调，
            * _confirm确定（非必填），deselect取消（非必填）
            * */
            if (_confirm == "" || _confirm == null || _confirm == undefined) {
                _confirm = "确定";
            }
            if (deselect == "" || deselect == null || deselect == undefined) {
                deselect = "取消";
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

            var button2 = $('<button>' + deselect + '</button>').css({
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
        }

        CMM.countDown = function (time, cssInit, cssEnd) {
        /*倒计时调用（必须为button）
        @param time倒计时时间 cssInit开始样式 cssEnd点击结束后样式
        * */
            var time = time;
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
        }

    }();