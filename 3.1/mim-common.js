/**
 * mim-common.js
 * @version 3.1
 * @author 王富贵
 * @todo more things to abstract, e.g. Loading css etc.
 * Licensed under the MIT license.
 * 1.成功或失敗的提示框
 * 2.弹窗
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
  jQuery.fn.prompt = MIM.prompt = function (state, bool, time) {
    /*
    * @param time消失时间（毫秒级），bool（true成功或false失败）state提示的语句，
    * */
    var set = "";
    clearTimeout(set);
    var div = $("<div class ='mim-prompt_out'></div>").animate({top: "50px", opacity: '1'}, 500).appendTo($("body"));
    if (bool == true || bool == "true") {
      var div_box = $("<div class='mim-prompt_div_box'></div>").appendTo(div);
      var div_p = $("<p class='mim-prompt_div_p'>" + state + "</p>").appendTo(div_box);
    } else if (bool == false || bool == "false") {
      var div_other = $("<div class='mim-prompt_div_other'></div>").appendTo(div);
      var div_other_p = $("<p class='mim-prompt_div_p1'>" + state + "</p>").appendTo(div_other);
    }
    set = setTimeout(function () {
      div.animate({marginTop: "-50px", opacity: '0'}, 500, function () {
        div.remove();
      });
      clearTimeout(set);
    }, time);
  };

  /*（confirm）弹窗*/
  jQuery.fn.confirm = MIM.confirm = function (state, successCallback, failCallback, _confirm, _deselect) {
    /*
    * @param state提示语句，successCallback成功回调，failCallback失败回调，
    * _confirm确定（非必填），deselect取消（非必填）
    * 适用层级z-index:9999999
    * */
    _confirm = (_confirm == "" || _confirm == null || typeof (_confirm) == 'undefined') ? "确定" : _confirm;
    _deselect = (_deselect == "" || _deselect == null || typeof (_deselect) == 'undefined') ? "取消" : _deselect;
    var div = $("<div class='mim-confirm_out'></div>").appendTo($("body"));
    var div1 = $("<div class='mim-confirm_inner'></div>").appendTo(div);
    var p = $("<p class='mim-confirm_p'>" + state + "</p>").appendTo(div1);
    var button1 = $('<button class="mim-confirm_button1">' + _confirm + '</button>').click(function () {
      div.remove();
      successCallback();
    }).appendTo(div1);

    var button2 = $('<button class="mim-confirm_button2">' + _deselect + '</button>').click(function () {
      div.remove();
      failCallback();
    }).appendTo(div1);
  };

  //验证码倒计时
  jQuery.fn.countDown = MIM.countDown = function (time, cssInit, cssEnd) {
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
    parseInt(m) < 10 ? s = '0' + s : s = s;

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
    var that = $(event.target);
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
    if ($(window).scrollTop() == 0) {

    } else {
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
  jQuery.fn.divDrag  = MIM. divDrag = function () {
    $(that).css("cursor","move");
    var event = window.event || arguments.callee.caller.arguments[0];
    var that = event.srcElement ? event.srcElement : event.target;
    var distanceX = event.clientX - $(that).offset().left;
    var distanceY = event.clientY - $(that).offset().top;
    $(that).on('mousemove',function () {
      var event = window.event || arguments.callee.caller.arguments[0];
      var ox = event.clientX - distanceX;
      var oy = event.clientY - distanceY;
      $(that).css({
        left:ox+"px",//移动后的left的值
        top:oy + "px" //移动后y的值
      })
    })
    $(that).on('mouseup',function () {
      var event = window.event || arguments.callee.caller.arguments[0];
      $(that).css("cursor","default");//还原鼠标指针样式
      $(that).off("mousemove");
    })
  };

}();
