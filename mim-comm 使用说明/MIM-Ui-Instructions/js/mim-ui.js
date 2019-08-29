$(function () {
    //最新版本号
    var versionNumber = '6.4';
    $('.versionNumber').html(versionNumber);
    //最新压缩版css
    $('#cssText').html('@import "//at.alicdn.com/t/font_1321360_w5r2mgdah0a.css";@font-face{font-family:\'iconfont\';src:url(\'//at.alicdn.com/t/font_1321360_w5r2mgdah0a.eot\');src:url(\'//at.alicdn.com/t/font_1321360_w5r2mgdah0a.eot?#iefix\') format(\'embedded-opentype\'),url(\'//at.alicdn.com/t/font_1321360_w5r2mgdah0a.woff2\') format(\'woff2\'),url(\'//at.alicdn.com/t/font_1321360_w5r2mgdah0a.woff\') format(\'woff\'),url(\'//at.alicdn.com/t/font_1321360_w5r2mgdah0a.ttf\') format(\'truetype\'),url(\'//at.alicdn.com/t/font_1321360_w5r2mgdah0a.svg#iconfont\') format(\'svg\');}.iconfont{font-size:25px !important;font-style:normal;margin:0 10px;-webkit-font-smoothing:antialiased;-webkit-text-stroke-width:0.2px;-moz-osx-font-smoothing:grayscale;}*{margin:0;padding:0;outline:0;box-sizing:content-box;background:transparent;-webkit-tap-highlight-color:transparent;font-family:-apple-system,BlinkMacSystemFont,"Helvetica Neue",Helvetica,"PingFang SC",Arial,sans-serif}.mim-prompt_success_box,.mim-prompt_error_box,.mim-prompt_warning_box,.mim-prompt_info_box{width:412px;height:25px;padding:10px;z-index:999999;border-radius:4px;position:fixed;left:50%;transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;}.mim-prompt_success_p,.mim-prompt_error_p,.mim-prompt_warning_p,.mim-prompt_info_p{height:25px;line-height:25px;font-size:14px;float:left;}.mim-prompt_success_p span,.mim-prompt_error_p span,.mim-prompt_warning_p span,.mim-prompt_info_p span{width:320px;display:inline-block;line-height:25px;height:25px;vertical-align:top;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}.mim-prompt_i{color:#909399;cursor:pointer;}.mim-prompt_success_box{background-color:#f0f9eb;border:1px solid #67C23A;}.mim-prompt_success_p{color:#67C23A;}.mim-prompt_error_box{background-color:rgb(253,226,226);border:1px solid #F56C6C;}.mim-prompt_error_p{color:#F56C6C;}.mim-prompt_warning_box{background-color:rgb(250,236,216);border:1px solid #E6A23C;}.mim-prompt_warning_p{color:#E6A23C;}.mim-prompt_info_box{background-color:rgb(233,233,235);border:1px solid #909399;}.mim-prompt_info_p{color:#909399;}.mim-confirm_out{width:100%;height:100%;position:fixed;background-color:rgba(0,0,0,.3);top:0;z-index:999999;}.mim-confirm_inner{position:absolute;width:450px;height:160px;left:50%;top:50%;margin-top:-100px;margin-left:-225px;background-color:#ffffff;border-radius:5px;border:1px solid #999;box-shadow:0 0 20px 1px rgba(0,0,0,.3);}.mim-confirm_h{font-size:20px;line-height:1;color:#303133;padding:10px 0 0 10px;text-align:left;letter-spacing:1px;font-weight:normal;}.mim-confirm_h span{vertical-align:top;}.mim-confirm_h i{font-size:20px !important;float:right;cursor:pointer;}.mim-confirm_p{color:#606266;font-size:18px;width:100%;min-height:55px;margin-top:25px;text-align:left;letter-spacing:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}.mim-confirm_p i{color:#E6A23C;font-size:30px !important;display:inline-block;vertical-align:middle;}.mim-confirm_p span{display:inline-block;vertical-align:middle;font-size:14px;}.mim-confirm_button1,.mim-confirm_button2{cursor:pointer;min-width:75px;font-size:12px;height:35px;line-height:35px;color:#ffffff;text-align:center;letter-spacing:3px;-webkit-appearance:none;border:0;outline:none;border-radius:4px;float:right;}.mim-confirm_button1{background-color:#409eff;border:1px solid #409eff;margin-right:15px;}.mim-confirm_button2{float:right;border:1px solid #dcdfe6;background-color:#ffffff;color:#606266;margin-right:15px;}mim-button{user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;cursor:pointer;border-radius:4px;display:inline-block;padding:0 10px;height:40px;line-height:40px;text-align:center;font-size:14px;font-weight:500;color:#ffffff;}mim-button .iconfont{font-size:14px !important;display:inline-block;vertical-align:top;font-style:normal;margin:0 5px 0 0;}mim-button .onlyIconfont{margin:0 10px;}mim-button[type=default]{background-color:#ffffff;border:1px solid #dcdfe6;color:#606266;}mim-button[plain][type=default]{background:#fff;border:1px solid #dcdfe6;color:#606266;}mim-button[plain][type=default]:hover{background:#fff;border-color:#409eff;color:#409eff;}mim-button[type=text]{color:#66b1ff;display:inline;padding:0;}mim-button[type=text][disabled]{color:#c0c4cc;}mim-button[disabled]{cursor:not-allowed;pointer-events:none;opacity:.6;}mim-button[round]{border-radius:20px;padding:0 15px;}mim-button[type=primary]{background-color:#409eff;border:1px solid #409eff;}mim-button[plain][type =primary]{color:#409eff;background:#ecf5ff;border-color:#b3d8ff;}mim-button[plain][type =primary]:hover,mim-button[plain][type =primary]:active,mim-button[plain][type =primary]:focus{color:#ffffff;background-color:#409eff;border:1px solid #409eff;outline:none;}.mim-loading{float:left;animation:MIMloading 1.5s linear infinite;}@keyframes MIMloading{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}mim-button[type=danger]{background-color:#f56c6c;border:1px solid #f56c6c;}mim-button[plain][type=danger]{color:#f56c6c;background:#fef0f0;border-color:#fbc4c4;}mim-button[plain][type=danger]:hover,mim-button[plain][type=danger]:active,mim-button[plain][type=danger]:focus{color:#ffffff;background-color:#f56c6c;border:1px solid #f56c6c;}mim-button[type=success]{background-color:#67c23a;border:1px solid #67c23a;}mim-button[plain][type=success]{color:#67c23a;background:#f0f9eb;border-color:#c2e7b0;}mim-button[plain][type=success]:hover,mim-button[plain][type=danger]:active,mim-button[plain][type=danger]:focus{color:#ffffff;background-color:#67c23a;border:1px solid #67c23a;}mim-button[type=warning]{background-color:#e6a23c;border:1px solid #e6a23c;}mim-button[plain][type=warning]{color:#e6a23c;background:#fdf6ec;border-color:#f5dab1;}mim-button[plain][type=warning]:hover,mim-button[plain][type=warning]:active,mim-button[plain][type=warning]:focus{color:#ffffff;background-color:#e6a23c;border:1px solid #e6a23c;}mim-button[type=info]{background-color:#909399;border:1px solid #909399;}mim-button[plain][type=info]{color:#909399;background:#f4f4f5;border-color:#d3d4d6;}mim-button[plain][type=info]:hover,mim-button[plain][type=info]:active,mim-button[plain][type=info]:focus{color:#ffffff;background-color:#909399;border:1px solid #909399;}mim-button:hover{opacity:.8;}mim-button:active{opacity:1;}mim-button[type=default]:hover{color:#409eff;border-color:#c6e2ff;background-color:#ecf5ff;}mim-button[type=default]:active{background-color:#ffffff;border:1px solid #dcdfe6;color:#606266;}mim-button[type=text]:active{color:#409eff;}.iconfontRight{float:right;margin-left:5px !important;}mim-container{display:flex;flex:1;flex-basis:auto;box-sizing:border-box;min-width:0;flex-direction:column;}mim-header{display:block;height:60px;padding:0 20px;line-height:60px;}mim-aside{display:flex;flex-direction:row;flex:1;flex-basis:auto;box-sizing:border-box;min-width:0;min-height:160px;}mim-main{display:block;padding:20px;flex:1;flex-basis:auto;min-height:160px;}mim-footer{display:block;height:60px;padding:0 20px;line-height:60px;}mim-row{display:flex;width:100%;position:relative;box-sizing:border-box;zoom:1;}mim-row:before,mim-row:after{display:table;content:"";height:0;clear:both;visibility:hidden;}mim-col{float:left;box-sizing:border-box;width:100%;min-height:36px;}mim-loading{position:absolute;height:100%;z-index:9999999;background-color:hsla(0,0%,100%,.9);margin:0;top:0;right:0;bottom:0;left:0;transition:opacity .3s;user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;}.mim-loading-div{width:100px;height:100px;top:50%;left:50%;margin-top:-50px;margin-left:-50px;text-align:center;z-index:99999999;position:absolute;}.mim-loading-icon{user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;display:inline-block;width:40px;height:40px;border-radius:50%;border:#dfdfdf solid 2.5px;border-left-color:#19b6f8;animation:UIloading 1s linear infinite;}.mim-loadingText{color:#409eff;margin-top:20px;width:100%;text-align:center;font-size:16px;}.mim-loading-icon-iconfont{user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;display:inline-block;font-size:40px !important;animation:UIloading 1s linear infinite;color:#409eff;}@keyframes UIloading{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}input::-webkit-input-placeholder{color:#b8c4ce !important;}input::-moz-placeholder{color:#b8c4ce !important;}input::-ms-input-placeholder{color:#b8c4ce !important;}mim-input{width:200px;height:40px;line-height:40px;position:relative;font-size:14px;display:inline-block;}mim-input .mim-input{cursor:pointer !important;width:100%;-webkit-appearance:none;background-color:#fff;background-image:none;border-radius:4px;border:1px solid #dcdfe6;box-sizing:border-box;color:#606266;display:inline-block;font-size:inherit;height:40px;line-height:40px;outline:none;padding:0 15px;transition:border-color .2s cubic-bezier(.645,.045,.355,1);}.mim-input:hover{border-color:#c0c4cc;}.mim-input:focus{outline:none;border-color:#409eff;}mim-input .mim-input[disabled]{background-color:#f5f7fa;border-color:#e4e7ed;color:#c0c4cc;cursor:not-allowed !important;}mim-input mim-span{position:absolute;top:0;right:0;color:#c0c4cc;}mim-input .mim-p{position:absolute;top:0;right:0;margin-right:5px;color:#909399;}mim-input .mim-p b{font-weight:normal;color:#909399;}mim-input .clearInput{display:none;}mim-input .iconfont{cursor:pointer;font-size:14px !important;user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;}mim-input .prefix-icon{position:absolute;top:0;left:0;color:#c0c4cc;width:14px;}mim-menu{position:relative;width:100%;user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;}mim-menu ul li{list-style:none;width:100%;}mim-menu ul li .disabled{cursor:not-allowed;pointer-events:none;}mim-menu ul li .disabled:hover{background-color:transparent !important;}mim-menu ul li .mim-menu{height:56px;line-height:56px;font-size:14px;padding:0 20px;list-style:none;cursor:pointer;position:relative;transition:border-color .3s,background-color .3s,color .3s;box-sizing:border-box;white-space:nowrap;}mim-menu ul li .mim-menu *{vertical-align:middle;}mim-menu ul li .disabled{opacity:.25;cursor:not-allowed !important;}.mim-menu .iconfont{vertical-align:middle;margin:0 5px 0 0;width:24px;text-align:center;font-size:18px !important;color:#909399;}mim-menu ul li .mim-menu .icon-copy-down{position:absolute;font-size:12px !important;color:#909399;right:20px;width:12px;margin:0;vertical-align:middle;transition:transform .3s;}mim-menu ul .mim-menu:hover{background-color:#ecf5ff;}mim-menu ul .mim-menu-item:hover{background-color:#ecf5ff;}mim-menu ul .is-active span,mim-menu ul .is-active .iconfont{color:#409eff !important;}.second-mim-menu{display:none;}mim-menu .second-mim-menu li{height:50px;line-height:50px;padding:0 55px;font-size:14px;color:#303133;list-style:none;cursor:pointer;position:relative;transition:border-color .3s,background-color .3s,color .3s;box-sizing:border-box;white-space:nowrap;}mim-table{display:inline-block;}mim-table .mim-table{width:100%;border:0;border-collapse:collapse;}mim-table .mim-table tr .is-leaf{text-align:left;white-space:nowrap;overflow:hidden;user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;padding:12px 0;min-width:0;box-sizing:border-box;text-overflow:ellipsis;vertical-align:middle;position:relative;border-bottom:1px solid #ebeef5;font-size:14px;}mim-table .mim-table tr th{color:#909399;}mim-table .mim-table tr td{color:#606266}mim-table .mim-table tr .is-leaf .cell{position:relative;word-wrap:normal;vertical-align:middle;width:100%;display:inline-block;box-sizing:border-box;text-overflow:ellipsis;overflow:hidden;white-space:normal;word-break:break-all;line-height:23px;padding-left:10px;padding-right:10px;user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;}.mim-table-body-wrapper{overflow-y:auto;width:100%;border:0;border-collapse:collapse;}mim-select{width:240px;height:40px;line-height:40px;position:relative;font-size:14px;display:inline-block;user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;}mim-select .mim-select{cursor:pointer !important;width:100%;-webkit-appearance:none;background-color:#fff;background-image:none;border-radius:4px;border:1px solid #dcdfe6;box-sizing:border-box;color:#606266;display:inline-block;font-size:inherit;height:40px;line-height:40px;outline:none;padding:0 15px;transition:border-color .2s cubic-bezier(.645,.045,.355,1);padding-right:30px;user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;}.mim-select:hover{border-color:#c0c4cc;}.mim-select:focus{outline:none;border-color:#409eff;}mim-select mim-span{position:absolute;top:0;right:0;color:#c0c4cc;transition:transform .3s;}mim-select mim-spans{position:absolute;top:8px;right:0;color:#c0c4cc;z-index:10;transition:transform .3s;background-color:#ffffff;height:25px;line-height:25px;}mim-select .iconfont{font-size:14px !important;cursor:pointer;}mim-select div{position:absolute;z-index:99;width:238px;background-color:#ffffff;box-shadow:0 2px 12px 0 rgba(0,0,0,0.1);margin-top:10px;display:none;overflow-y:auto;max-height:300px;}mim-select div::-webkit-scrollbar{width:8px;height:8px;}mim-select div::-webkit-scrollbar-thumb{cursor:pointer;border-radius:3px;background-color:#c0c4cc;}mim-select div ul{margin:10px 0;}mim-select div ul li{list-style:none;line-height:40px;font-size:14px;height:40px;padding:0 15px;cursor:pointer;}mim-select div ul [disabled=disabled]{color:#999999;cursor:not-allowed;pointer-events:none;opacity:.6;}mim-select div ul li:hover{background-color:#f5f7fa;}.pitch-select{color:#409eff !important;font-weight:700 !important;}');
    //最新压缩版js
    $('#jsText').html('!function(){if(typeof(jQuery)!==\'function\'){throw new Error(\'请先引入jQuery\')}var _mim={};window.$$=window.MIM=_mim}(),function(){jQuery.fn.prompt=MIM.prompt=function(state,type,time,bool){var div,bool_,set=\'\';if(bool==true||bool==\'true\'){bool_=true}else{bool_=false}clearTimeout(set);switch(type){case"success":div=$("<div class=\'mim-prompt_success_box\'></div>").animate({top:"50px",opacity:\'1\'},500).appendTo($("body"));var div_success=$("<p class=\'mim-prompt_success_p\'><i class=\'iconfont\'></i><span>"+state+"</span></p>").appendTo(div);if(bool_){$("<i class=\'iconfont mim-prompt_i\'></i>").click(function(){div.animate({marginTop:"-50px",opacity:\'0\'},500,function(){div.remove()})}).appendTo(div_success)}break;case"error":div=$("<div class=\'mim-prompt_error_box\'></div>").animate({top:"50px",opacity:\'1\'},500).appendTo($("body"));var div_error=$("<p class=\'mim-prompt_error_p\'><i class=\'iconfont\'></i><span>"+state+"</span></p>").appendTo(div);if(bool_){$("<i class=\'iconfont mim-prompt_i\'></i>").click(function(){div.animate({marginTop:"-50px",opacity:\'0\'},500,function(){div.remove()})}).appendTo(div_error)}break;case"warning":div=$("<div class=\'mim-prompt_warning_box\'></div>").animate({top:"50px",opacity:\'1\'},500).appendTo($("body"));var div_warning=$("<p class=\'mim-prompt_warning_p\'><i class=\'iconfont\'></i><span>"+state+"</span></p>").appendTo(div);if(bool_){$("<i class=\'iconfont mim-prompt_i\'></i>").click(function(){div.animate({marginTop:"-50px",opacity:\'0\'},500,function(){div.remove()})}).appendTo(div_warning)}break;case"info":div=$("<div class=\'mim-prompt_info_box\'></div>").animate({top:"50px",opacity:\'1\'},500).appendTo($("body"));var div_info=$("<p class=\'mim-prompt_info_p\'><i class=\'iconfont\'></i><span>"+state+"</span></p>").appendTo(div);if(bool_){$("<i class=\'iconfont mim-prompt_i\'></i>").click(function(){div.animate({marginTop:"-50px",opacity:\'0\'},500,function(){div.remove()})}).appendTo(div_info)}break}set=setTimeout(function(){div.animate({marginTop:"-50px",opacity:\'0\'},500,function(){div.remove()});clearTimeout(set)},time)};jQuery.fn.confirm=MIM.confirm=function(state,successCallback,_confirm,_deselect){_confirm=(_confirm==""||_confirm==null||typeof(_confirm)==\'undefined\')?"确定":_confirm;_deselect=(_deselect==""||_deselect==null||typeof(_deselect)==\'undefined\')?"取消":_deselect;var div=$("<div class=\'mim-confirm_out\'></div>").appendTo($("body"));var div1=$("<div class=\'mim-confirm_inner\'></div>").appendTo(div);var h=$("<h2 class=\'mim-confirm_h\'><span>提示</span></h2>").appendTo(div1);var i=$("<i class=\'iconfont\'></i>").click(function(){div.remove();MIM.prompt(\'取消操作\',\'info\',3000)}).appendTo(h);var p=$("<p class=\'mim-confirm_p\'><i class=\'iconfont\'></i><span>"+state+"</span></p>").appendTo(div1);var button1=$(\'<button class="mim-confirm_button1">\'+_confirm+\'</button>\').click(function(){div.remove();successCallback()}).appendTo(div1);var button2=$(\'<button class="mim-confirm_button2">\'+_deselect+\'</button>\').click(function(){div.remove();MIM.prompt(\'取消操作\',\'info\',3000)}).appendTo(div1)};jQuery.fn.countDown=MIM.countDown=function(times,cssInit,cssEnd){var time=times;var that=$(this);$(this).on(\'click\',function(){countdownTime()});function countdownTime(){var test1;if(time>=1){time-=1;if(time==0){that.css(cssInit);that.css({cursor:"pointer"}).removeAttr("disabled").html("获取验证码");return time=times}that.css(cssEnd);that.css({cursor:"not-allowed"}).attr("disabled","disabled").html(time+"s后重试");test1=setTimeout(function(){countdownTime();clearTimeout(test1)},1000)}}};jQuery.fn.timeFilter=MIM.timeFilter=function(value,before,later){var oDate=new Date();oDate.setTime(value*1000);var y=oDate.getFullYear();var M=oDate.getMonth()+1;parseInt(M)<10?M=\'0\'+M:M=M;var d=oDate.getDate();parseInt(d)<10?d=\'0\'+d:d=d;var h=oDate.getHours();parseInt(h)<10?h=\'0\'+h:h=h;var m=oDate.getMinutes();parseInt(m)<10?m=\'0\'+m:m=m;var s=oDate.getSeconds();parseInt(s)<10?s=\'0\'+s:s=s;if(before!==false&&later!==false){return y+before+M+before+d+\' \'+h+later+m+later+s}else if(later==false){return y+before+M+before+d}else if(before==false){return h+later+m+later+s}};jQuery.fn.likeResult=MIM.likeResult=function(str,css){$(this).on(\'click\',function(){var that=$(this);var y=that.offset().top;var x=that.offset().left;var div=$("<div>"+str+"</div>").css({position:"fixed",top:y,left:x,marginTop:"-25px",color:"#d60000",fontWeight:"600",zIndex:"999999999",}).animate({marginTop:"-100px",opacity:\'0\'},2000,function(){div.remove()}).appendTo($(\'body\'));if(css==""||css==null||css==undefined){}else{div.css(css)}})};jQuery.fn.verifyReg=MIM.verifyReg=function(str,value,bool){var mobileReg=/^0?(13|15|18|17|14|19|16)[0-9]{9}$/;var emailReg=/^[\\.a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\\.[a-zA-Z0-9_-]+)+$/;var regularReg=str;if(str=="phone"){if(bool){if(!value){return 2}}if(!!bool){if(!mobileReg.test(value)){return 3}else{return 1}}else{return 1}}else if(str=="email"){if(bool){if(!value){return 2}}if(!!value){if(!emailReg.test(value)){return 3}else{return 1}}else{return 1}}else{if(bool){if(!value){return 2}}if(!!bool){if(!regularReg.test(value)){return 3}else{return 1}}else{return 1}}};jQuery.fn.goToTop=MIM.goToTop=function(){if($(window).scrollTop()!==0){$(\'html , body\').animate({scrollTop:0},\'slow\')}};jQuery.fn.ajaxUtils=MIM.ajaxUtils=function(url,data,async,type,dataType,successfn,errorfn){async=(async==null||async==""||typeof(async)=="undefined")?"true":async;type=(type==null||type==""||typeof(type)=="undefined")?"post":type;dataType=(dataType==null||dataType==""||typeof(dataType)=="undefined")?"json":dataType;data=(data==null||data==""||typeof(data)=="undefined")?{}:data;$.ajax({type:type,async:async,data:data,url:url,dataType:dataType,success:function(d){successfn(d)},error:function(e){errorfn(e)}})};jQuery.fn.divDrag=MIM.divDrag=function(){$(this).on(\'mousedown\',function(){$(this).css("cursor","move");var event=window.event||arguments.callee.caller.arguments[0];var distanceX=event.clientX-$(this).offset().left;var distanceY=event.clientY-$(this).offset().top;$(this).on(\'mousemove\',function(){$(this).css("cursor","move");var event=window.event||arguments.callee.caller.arguments[0];var ox=event.clientX-distanceX;var oy=event.clientY-distanceY;$(this).css({left:ox+"px",top:oy+"px"})});$(this).on(\'mouseup\',function(){var event=window.event||arguments.callee.caller.arguments[0];$(this).css("cursor","default");$(this).off("mousemove")})})};jQuery.fn.selectInit=MIM.selectInit=function(data){var clearable=$(this).attr(\'clearable\');clearable=(clearable==null||clearable==""||typeof(clearable)=="undefined")?"":clearable;var mimSpans=\'\';if(clearable==\'true\'){var that=$(this)$(this).hover(function(){mimSpans=$(\'<mim-spans class="iconfont"></mim-spans>\').click(function(e){e.stopPropagation();e.preventDefault();that.find(\'input\').val(\'\');that.find(\'div ul li\').removeClass(\'pitch-select\');that.find(\'option:selected\').html(\'\')}).appendTo($(this))},function(){mimSpans.remove()})}var res=data;$(\'<input type="text" class="mim-select" placeholder="请选择" readonly>\').appendTo($(this));$(\'<mim-span class="iconfont"></mim-span>\').appendTo($(this));var div=$(\'<div></div>\').appendTo($(this));var ul=$(\'<ul></ul>\').appendTo(div);var select=$(\'<select style="display: none"></select>\').appendTo(div);$(\'<option></option>\').appendTo(select);for(var op=0;op<res.length;op++){var option=$(\'<option idIndex=\'+res[op].id+\'>\'+res[op].value+\'</option>\').appendTo(select)}for(var i=0;i<res.length;i++){var disabled=res[i].disabled;disabled=(disabled==null||disabled==""||typeof(disabled)=="undefined")?"":\'disabled\';$(\'<li idIndex=\'+res[i].id+\' disabled = \'+disabled+\'>\'+res[i].value+\'</li>\').click(function(){$(this).parent().parent().prev().prev().val($(this).html());$(this).addClass(\'pitch-select\').siblings().removeClass(\'pitch-select\');var that=$(this);for(var op=0;op<$(\'select option\').length;op++){if($(\'select option\').eq(op).attr(\'idIndex\')==that.attr(\'idIndex\')){$(\'select option\').eq(op).attr(\'selected\',\'selected\').siblings().removeAttr(\'selected\')}}}).appendTo(ul)}}}();$(function(){for(var b=0;b<$(\'mim-button\').length;b++){if($(\'mim-button\').eq(b).attr(\'loading\')==\'true\'){$(\'<i class="iconfont mim-loading"></i>\').appendTo($(\'mim-button\').eq(b))}switch($(\'mim-button\').eq(b).attr(\'size\')){case\'medium\':$(\'mim-button\').eq(b).css({height:\'36px\',lineHeight:\'36px\'});break;case\'small\':$(\'mim-button\').eq(b).css({height:\'32px\',lineHeight:\'32px\'});break;case\'mini\':$(\'mim-button\').eq(b).css({height:\'28px\',lineHeight:\'28px\'});break}}for(var iu=0;iu<$(\'mim-input\').length;iu++){var mimInput=$(\'mim-input\').eq(iu);var placeholder=mimInput.attr(\'placeholder\');var value=mimInput.attr(\'value\');var type=mimInput.attr(\'type\');var mimClass=mimInput.attr(\'class\');var mimId=mimInput.attr(\'id\');var disabled=mimInput.attr(\'disabled\');var clearable=mimInput.attr(\'clearable\');var showPassword=mimInput.attr(\'show-password\');var maxlength=mimInput.attr(\'maxlength\');var showWordLimit=mimInput.attr(\'show-word-limit\');var prefixIcon=mimInput.attr(\'prefix-icon\');var suffixIcon=mimInput.attr(\'suffix-icon\');var mimSize=mimInput.attr(\'size\');type=(type==""||type==null||typeof(type)=="undefined")?\'text\':type;placeholder=(placeholder==""||placeholder==null||typeof(placeholder)=="undefined")?\'\':placeholder;value=(value==""||value==null||typeof(value)=="undefined")?\'\':value;mimClass=(mimClass==""||mimClass==null||typeof(mimClass)=="undefined")?\'\':mimClass;mimId=(mimId==""||mimId==null||typeof(mimId)=="undefined")?\'\':mimId;disabled=(disabled==""||disabled==null||typeof(disabled)=="undefined")?\'\':disabled;prefixIcon=(prefixIcon==""||prefixIcon==null||typeof(prefixIcon)=="undefined")?\'\':prefixIcon;suffixIcon=(suffixIcon==""||suffixIcon==null||typeof(suffixIcon)=="undefined")?\'\':suffixIcon;maxlength=(maxlength==""||maxlength==null||typeof(maxlength)=="undefined")?\'\':maxlength;showWordLimit=(typeof(showWordLimit)=="undefined")?\'\':true;mimSize=(mimSize==""||mimSize==null||typeof(mimSize)=="undefined")?\'\':mimSize;clearable=(typeof(clearable)=="undefined")?\'\':true;showPassword=(typeof(showPassword)=="undefined")?\'\':true;var input_=$(\'<input type = \'+type+\' class="mim-input" />\');input_.appendTo(mimInput);if(placeholder){input_.attr(\'placeholder\',placeholder)}if(value){input_.attr(\'value\',value)}if(mimClass){input_.attr(\'class\',\'\'+mimClass+\' mim-input\');mimInput.removeAttr(\'class\')}if(mimId){input_.attr(\'id\',mimId);mimInput.removeAttr(\'id\')}if(disabled){input_.attr(\'disabled\',disabled)}if(maxlength){input_.attr(\'maxlength\',maxlength)}if(showWordLimit){input_.css(\'padding-right\',\'50px\');var maxlengthInput=$(\' <mim-p class="mim-p"><b class="mim-maxlengthlength">0</b> / <b>\'+maxlength+\'</b></mim-p>\').appendTo(mimInput)input_.keyup(function(){$(this).next().find(\'.mim-maxlengthlength\').html($(this).val().length)})}if(clearable){var clearInput=$(\'<mim-span class="iconfont clearInput"></mim-span>\');input_.css(\'padding-right\',\'30px\');input_.keyup(function(){$(this).next().css(\'display\',\'inline-block\')});clearInput.on(\'click\',function(){$(this).prev().val(\'\');$(this).css(\'display\',\'none\')});clearInput.appendTo(mimInput)}if(showPassword){var showpassword=$(\'<mim-span class="iconfont showPassword"></mim-span>\');var noPassword=$(\'<mim-span class="iconfont noPassword" style="display: none"></mim-span>\');input_.css(\'padding-right\',\'30px\');showpassword.on(\'click\',function(){$(this).hide();$(this).prev().attr(\'type\',\'text\');$(this).next().show()}).appendTo(mimInput);noPassword.on(\'click\',function(){$(this).prev().prev().attr(\'type\',\'password\');$(this).prev().show();$(this).hide()}).appendTo(mimInput)}if(prefixIcon){var prefixIcons=$(\'<mim-span class="iconfont prefix-icon">\'+prefixIcon+\'</mim-span>\');input_.css(\'padding-left\',\'30px\');prefixIcons.appendTo(mimInput)}if(suffixIcon){var suffixIcons=$(\'<mim-span class="iconfont suffix-icon">\'+suffixIcon+\'</mim-span>\');input_.css(\'padding-right\',\'30px\');suffixIcons.appendTo(mimInput)}if(mimSize){switch(mimSize){case\'medium\':$(\'mim-input\').find(\'input\').eq(iu).css({height:\'36px\',lineHeight:\'36px\'});break;case\'small\':$(\'mim-input\').find(\'input\').eq(iu).css({height:\'32px\',lineHeight:\'32px\'});break;case\'mini\':$(\'mim-input\').find(\'input\').eq(iu).css({height:\'28px\',lineHeight:\'28px\'});break}}}for(var mm=0;mm<$(\'mim-menu\').length;mm++){var backgroundColor=$(\'mim-menu\').eq(mm).attr(\'background-color\');backgroundColor=(backgroundColor==""||backgroundColor==null||typeof(backgroundColor)=="undefined")?\'#ffffff\':backgroundColor;if(backgroundColor){$(\'mim-menu\').eq(mm).find(\'ul li\').css({\'background\':backgroundColor})}var textColor=$(\'mim-menu\').eq(mm).attr(\'text-color\');textColor=(textColor==""||textColor==null||typeof(textColor)=="undefined")?\'#000000\':textColor;if(textColor){$(\'mim-menu\').eq(mm).find(\'ul .mim-menu\').css({\'color\':textColor});$(\'mim-menu\').eq(mm).find(\'.second-mim-menu li\').css({\'color\':textColor})}var hoverBgColor=$(\'mim-menu\').eq(mm).attr(\'hover-bgColor\');hoverBgColor=(hoverBgColor==""||hoverBgColor==null||typeof(hoverBgColor)=="undefined")?\'\':hoverBgColor;var hoverTextColor=$(\'mim-menu\').eq(mm).attr(\'hover-textColor\');hoverTextColor=(hoverTextColor==""||hoverTextColor==null||typeof(hoverTextColor)=="undefined")?\'\':hoverTextColor;if(hoverBgColor||hoverTextColor){var hoverBgColors=hoverBgColor;var hoverTextColors=hoverTextColor;var textColors=textColor $(\'mim-menu\').eq(mm).find(\'ul .mim-menu\').hover(function(){$(this).css({\'background-color\':hoverBgColors,\'color\':hoverTextColors})},function(){$(this).css({\'background\':\'none\',\'color\':textColors})});$(\'mim-menu\').eq(mm).find(\'ul .mim-menu-item\').hover(function(){$(this).css({\'background-color\':hoverBgColors,\'color\':hoverTextColors})},function(){$(this).css({\'background\':\'none\',\'color\':textColors})})}else{$(\'mim-menu\').eq(mm).find(\'ul .mim-menu\').hover(function(){$(this).css({\'background-color\':\'#ecf5ff\',})},function(){$(this).css({\'background\':\'none\',})});$(\'mim-menu\').eq(mm).find(\'ul .mim-menu-item\').hover(function(){$(this).css({\'background-color\':\'#ecf5ff\',})},function(){$(this).css({\'background\':\'none\',})})}var active=$(\'mim-menu\').eq(mm).attr(\'default-active\');active=(active==""||active==null||typeof(active)=="undefined")?\'\':active;if(active){for(var is=0;is<$(\'mim-menu\').eq(mm).find(\'ul li\').length;is++){if($(\'mim-menu\').eq(mm).find(\'ul li\').eq(is).find(\'span\').attr(\'index\')==active){$(\'mim-menu\').eq(mm).find(\'ul li\').eq(is).addClass(\'is-active\').siblings().removeClass(\'is-active\');$(\'mim-menu\').eq(mm).find(\'ul li\').eq(is).parent().parent().siblings().removeClass(\'is-active\');$(\'mim-menu\').eq(mm).find(\'ul li\').eq(is).siblings().children().children().removeClass(\'is-active\');$(\'mim-menu\').eq(mm).find(\'ul li\').eq(is).parent().parent().siblings().children().children().removeClass(\'is-active\')}}}}$(\'mim-menu ul li\').on(\'click\',function(e){e.preventDefault();e.stopPropagation();if($(this).find(\'.icon-copy-down\').length!==0){var bool=$(this).find(\'.icon-copy-down\').attr(\'bool\');if(bool==\'false\'){$(this).find(\'.icon-copy-down\').css({transform:"rotate(180deg)"});$(this).find(".second-mim-menu").fadeIn(500);$(this).find(\'.icon-copy-down\').attr(\'bool\',\'true\')}else{$(this).find(\'.icon-copy-down\').css({transform:"rotate(0deg)",});$(this).find(".second-mim-menu").fadeOut(500);$(this).find(\'.icon-copy-down\').attr(\'bool\',\'false\')}}else{if($(this).find(\'.disabled\').length!==0){}else{$(this).addClass(\'is-active\').siblings().removeClass(\'is-active\');$(this).parent().parent().siblings().removeClass(\'is-active\');$(this).siblings().children().children().removeClass(\'is-active\');$(this).parent().parent().siblings().children().children().removeClass(\'is-active\')}}});$(\'mim-menu ul li .disabled\').unbind(\'click\');for(var lo=0;lo<$(\'mim-loading\').length;lo++){var loadings=$(\'mim-loading\').eq(lo).attr(\'loading\');loadings=(loadings==""||loadings==null||typeof(loadings)=="undefined")?\'\':loadings;if(loadings==\'true\'){var loadingDiv=$(\'<div class="mim-loading-div"></div>\');var loadingIcon=$(\'<div class="mim-loading-icon"></div>\');loadingDiv.appendTo($(\'mim-loading\').eq(lo));loadingIcon.css({marginTop:\'25px\'}).appendTo(loadingDiv);var loadingSpinner=$(\'mim-loading\').eq(lo).attr(\'loading-spinner\');loadingSpinner=(loadingSpinner==""||loadingSpinner==null||typeof(loadingSpinner)=="undefined")?\'\':loadingSpinner;if(loadingSpinner){loadingIcon.remove();var loadingIconIconfont=$(\'<i class="mim-loading-icon-iconfont iconfont">\'+loadingSpinner+\'</i>\');loadingIconIconfont.appendTo(loadingDiv)}var loadingText=$(\'mim-loading\').eq(lo).attr(\'loading-text\');loadingText=(loadingText==""||loadingText==null||typeof(loadingText)=="undefined")?\'\':loadingText;if(loadingText){$(\'<p  class="mim-loadingText">\'+loadingText+\'</p>\').appendTo(loadingDiv)}var loadingBackground=$(\'mim-loading\').eq(lo).attr(\'loading-background\');loadingBackground=(loadingBackground==""||loadingBackground==null||typeof(loadingBackground)=="undefined")?\'\':loadingBackground;if(loadingBackground){$(\'mim-loading\').eq(lo).css({backgroundColor:loadingBackground})}var fullscreen=$(\'mim-loading\').eq(lo).attr(\'fullscreen\');fullscreen=(fullscreen==""||fullscreen==null||typeof(fullscreen)=="undefined")?\'\':fullscreen;if(fullscreen){$(\'html , body\').css({overflowY:\'hidden\'})}}else if(loadings==\'false\'){$(\'mim-loading\').eq(lo).hide()}}for(var i=0;i<$(\'mim-row mim-col\').length;i++){var spanWidth=$(\'mim-row mim-col\').eq(i).attr(\'span\');var spanWidthLeft=$(\'mim-row mim-col\').eq(i).attr(\'offset\');spanWidth=24/spanWidth;spanWidth=1/spanWidth;spanWidth=spanWidth*100;spanWidthLeft=24/spanWidthLeft;spanWidthLeft=1/spanWidthLeft;spanWidthLeft=spanWidthLeft*100;$(\'mim-row mim-col\').eq(i).css({"float":"left","boxSizing":"border-box","width":spanWidth+\'%\',"marginLeft":spanWidthLeft+\'%\',"minHeight":"36px"})}for(var j=0;j<$(\'mim-row\').length;j++){var paddingWidth=$(\'mim-row\').eq(j).attr(\'gutter\');paddingWidth=paddingWidth/2;$(\'mim-row\').eq(j).find(\'mim-col\').css({marginLeft:paddingWidth,marginRight:paddingWidth})}for(var ta=0;ta<$(\'mim-table\').length;ta++){var mimTable=$(\'mim-table\').eq(ta);var mimTableStripe=$(\'mim-table\').eq(ta).attr(\'stripe\');var mimTableBorder=$(\'mim-table\').eq(ta).attr(\'border\');var mimTableHeight=$(\'mim-table\').eq(ta).attr(\'height\');mimTableStripe=(mimTableStripe==""||mimTableStripe==null||typeof(mimTableStripe)=="undefined")?\'\':mimTableStripe;mimTableBorder=(mimTableBorder==""||mimTableBorder==null||typeof(mimTableBorder)=="undefined")?\'\':mimTableBorder;mimTableHeight=(mimTableHeight==""||mimTableHeight==null||typeof(mimTableHeight)=="undefined")?\'\':mimTableHeight;if(mimTableStripe!==\'false\'&&mimTableStripe!==\'\'){var trLength=$(\'mim-table\').eq(ta).find(\'table tr\').length;for(var tl=0;tl<trLength;tl++){if(tl%2==0&&tl!==0){$(\'mim-table\').eq(ta).find(\'table tr\').eq(tl).css("background",\'#F2F6FC\')}}}if(mimTableBorder!==\'false\'&&mimTableBorder!==\'\'){$(\'mim-table\').eq(ta).find(\'.mim-table tr .is-leaf\').css(\'border\',\'1px solid #ebeef5\')}if(mimTableHeight){var mimTableHeightOriginal=$(\'mim-table\').eq(ta).find(\'.mim-table-body-wrapper\').css(\'height\');mimTableHeightOriginal=mimTableHeightOriginal.substring(0,mimTableHeightOriginal.length-2);if(mimTableHeightOriginal>mimTableHeight){$(\'mim-table\').eq(ta).find(\'.mim-table-body-wrapper\').css({display:\'inline-block\',height:mimTableHeight});$(\'mim-table\').eq(ta).find(\'.mim-table-header-wrapper tr\').append($(\'<th width="17px" style="border: 1px solid #ebeef5"></th>\'))}}}for(var se=0;se<$(\'mim-select\').length;se++){var mimSelect=$(\'mim-select\').eq(se);var bool=\'\';mimSelect.find(\'mim-span\').on(\'click\',function(){$(this).prev().focus()});$(\'body\').click(function(){$(\'mim-select\').find(\'div\').fadeOut();$(\'mim-select\').attr(\'bool\',\'false\');$(\'mim-select\').find(\'mim-span\').css({transform:"rotate(0deg)"})});mimSelect.find(\'input\').val(mimSelect.find(\'option:selected\').html());mimSelect.on(\'click\',function(e){e.stopPropagation();e.preventDefault();bool=$(this).attr(\'bool\');var offHeight=$(this).offset().top-$(window).scrollTop();offHeight=$(window).height()-offHeight;var divHeight=$(this).find(\'div\').height();if(offHeight-40<=divHeight){$(this).find(\'div\').css({bottom:\'50px\'})}else{$(this).find(\'div\').css({bottom:\'auto\'})}if(bool!==\'false\'){$(this).find(\'div\').fadeOut();$(this).find(\'mim-span\').css({transform:"rotate(0deg)"});$(this).attr(\'bool\',\'false\')}else{$(this).find(\'div\').fadeIn();$(this).find(\'mim-span\').css({transform:"rotate(180deg)"});$(this).attr(\'bool\',\'true\')}})}});');
    //当前时间展示
    setInterval(function () {
        $('.currentTime').html(MIM.timeFilter(new Date() / 1000, "-", ":"))
        $('.currentTimeYear').html(MIM.timeFilter(new Date() / 1000, "/", false))
        $('.currentTimeDate').html(MIM.timeFilter(new Date() / 1000, false, ":"))
    }, 1000);
    //进入页面展示

    $('.homePage').show();

    $('mim-menu ul li').on('click', function () {
        var index = $(this).find('span').attr('index');
        showPage(index)
    });

    //展示页面
    function showPage(index) {
        switch (index) {
            case "homePage":
                $('.homePage').show().siblings().hide();
                break;
            case "handQuickly":
                $('.handQuickly').show().siblings().hide();
                break;
            case "newCss":
                $('.newCss').show().siblings().hide();
                break;
            case "newJs":
                $('.newJs').show().siblings().hide();
                break;
            case "layout":
                $('.layout').show().siblings().hide();
                break;
            case "container":
                $('.container').show().siblings().hide();
                break;
            case "buttonSwitch":
                $('.buttonSwitch').show().siblings().hide();
                break;
            case "inputBox":
                $('.inputBox').show().siblings().hide();
                break;
            case "navSide":
                $('.navSide').show().siblings().hide();
                break;
            case "mimLoading":
                $('.mimLoading').show().siblings().hide();
                break;
            case "mimTable":
                $('.mimTable').show().siblings().hide();
                break;
            case "mimSelect":
                $('.mimSelect').show().siblings().hide();
                break;
            case "alertSide":
                $('.alertSide').show().siblings().hide();
                break;
            case "confirmPop":
                $('.confirmPop').show().siblings().hide();
                break;
            case "verificationDown":
                $('.verificationDown').show().siblings().hide();
                break;
            case "timeFormatting":
                $('.timeFormatting').show().siblings().hide();
                break;
            case "likeResultStyle":
                $('.likeResultStyle').show().siblings().hide();
                break;
            case "customStyle":
                $('.customStyle').show().siblings().hide();
                break;
            case "returnTop":
                $('.returnTop').show().siblings().hide();
                break;
            case "easyDrag":
                $('.easyDrag').show().siblings().hide();
                break;
            case "easyAjax":
                $('.easyAjax').show().siblings().hide();
                break;
            case "versionUpdating":
                $('.versionUpdating').show().siblings().hide();
                break;
        }
    }

    //侧边栏被选中展示
    function menuCheckShow(index) {
        for (var i = 0; i < $('mim-menu ul li').length; i++) {
            if ($('mim-menu ul li').eq(i).find('span').attr('index') == index) {
                $('mim-menu ul li').eq(i).addClass('is-active').siblings().removeClass('is-active');
                $('mim-menu ul li').eq(i).parent().parent().siblings().removeClass('is-active');
                $('mim-menu ul li').eq(i).siblings().children().children().removeClass('is-active');
                $('mim-menu ul li').eq(i).parent().parent().siblings().children().children().removeClass('is-active')
            }
        }
    }

    //下一页
    $(".nextPage").on('click', function () {
        var index = $(this).find('span').attr('index');
        showPage(index);
        menuCheckShow(index)
    });
    //上一页
    $(".previousPage").on('click', function () {
        var index = $(this).find('span').attr('index');
        showPage(index);
        menuCheckShow(index)
    });
    //最新css链接
    $('.linkCss').on('click', function () {
        window.open('https://github.com/zjt4133470/MIM-common/blob/master/' + versionNumber + '/mim-common.css', '_blank')
    });
    //最新js链接
    $('.linkjs').on('click', function () {
        window.open('https://github.com/zjt4133470/MIM-common/blob/master/' + versionNumber + '/mim-common.js', '_blank')
    });
    //最新css下载链接
    $('.linkCss_download').on('click', function () {

        window.open('https://raw.githubusercontent.com/zjt4133470/MIM-common/master/' + versionNumber + '/mim-common.css', '_blank')
    });
    //最新js下载链接
    $('.linkjs_download').on('click', function () {
        window.open('https://raw.githubusercontent.com/zjt4133470/MIM-common/master/' + versionNumber + '/mim-common.js', '_blank')
    });
    //点击复制css
    $(".copyCss").on('click', function () {
        var cssText = document.getElementById("cssText");//对象是content
        cssText.select(); //选择对象
        document.execCommand("Copy"); //执行浏览器复制命令
        MIM.prompt("复制成功", "success", "3000");
    });
    //点击复制js
    $(".copyjs").on('click', function () {
        var jsText = document.getElementById("jsText");//对象是content
        jsText.select(); //选择对象
        document.execCommand("Copy"); //执行浏览器复制命令
        MIM.prompt("复制成功", "success", "3000");
    });

    //向上
    function scrollFn(className) {
        $(className).scroll(function () {
            var scroll_len = $(className).scrollTop();
            if (scroll_len > 0) {
                $(className).find('.upward .iconfont').fadeIn();
            } else {
                $(className).find('.upward .iconfont').fadeOut();
            }
        });
    }

    scrollFn('.layout');
    scrollFn('.container');
    scrollFn('.buttonSwitch');
    scrollFn('.inputBox');
    scrollFn('.navSide');
    scrollFn('.mimLoading');
    scrollFn('.alertSide');
    scrollFn('.confirmPop');
    scrollFn('.verificationDown');
    scrollFn('.timeFormatting');
    scrollFn('.likeResultStyle');
    scrollFn('.customStyle');
    scrollFn('.returnTop');
    scrollFn('.easyDrag');
    scrollFn('.easyAjax');
    scrollFn('.versionUpdating');
    scrollFn('.mimTable');
    scrollFn('.mimSelect');
    $('.upward .iconfont').on('click', function () {
        $('.layout').animate({scrollTop: 0}, 'slow');
        $('.container').animate({scrollTop: 0}, 'slow');
        $('.buttonSwitch').animate({scrollTop: 0}, 'slow');
        $('.inputBox').animate({scrollTop: 0}, 'slow');
        $('.navSide').animate({scrollTop: 0}, 'slow');
        $('.alertSide').animate({scrollTop: 0}, 'slow');
        $('.confirmPop').animate({scrollTop: 0}, 'slow');
        $('.verificationDown').animate({scrollTop: 0}, 'slow');
        $('.timeFormatting').animate({scrollTop: 0}, 'slow');
        $('.likeResultStyle').animate({scrollTop: 0}, 'slow');
        $('.customStyle').animate({scrollTop: 0}, 'slow');
        $('.returnTop').animate({scrollTop: 0}, 'slow');
        $('.easyDrag').animate({scrollTop: 0}, 'slow');
        $('.easyAjax').animate({scrollTop: 0}, 'slow');
        $('.versionUpdating').animate({scrollTop: 0}, 'slow');
        $('.mimLoading').animate({scrollTop: 0}, 'slow');
        $('.mimTable').animate({scrollTop: 0}, 'slow');
        $('.mimSelect').animate({scrollTop: 0}, 'slow');
    });
    // 代码显示
    var layoutBasicsShowBool = false, layoutIntervalBool = false, layoutMixtureBool = false, layoutOffsetBool = false,
        containerBasicsBool = false, buttonBasicsBool = false, buttonForbiddenBool = false, buttonTextBool = false,
        buttonIconBool = false, buttonLoaginBool = false, buttonSizeBool = false, inputBasics = false,
        inputDisabledBool = false, inputClearBool = false, inputPasswordBool = false, inputIconBool = false,
        inputSizeBool = false, inputWordLimitBool = false, navSideBool = false, navSideStyleBool = false,
        mimLoadingBool = false, mimLoadingStyleBool = false, mimLoadingEntiretyBool = false, mimTableBool = false,
        mimTableStripeBool = false, mimButtonborderBool = false, mimSelectBool = false, mimSelectClearableBool = false,
        mimSelectDisabledBool = false

    function showHiddenFn(needShowButton, needshow, bool) {
        $(needShowButton).on('click', function () {
            bool = !bool;
            if (bool) {
                $(needShowButton).html('隐藏代码');
                $(needshow).fadeIn(500);
            } else {
                $(needShowButton).html('显示代码');
                $(needshow).fadeOut(500);
            }
        });
    }

    showHiddenFn('#layoutBasicsShow', '#layoutBasics', layoutBasicsShowBool);
    showHiddenFn('#layoutIntervalShow', '#layoutInterval', layoutIntervalBool);
    showHiddenFn('#layoutMixtureShow', '#layoutMixture', layoutMixtureBool);
    showHiddenFn('#layoutOffsetShow', '#layoutOffset', layoutOffsetBool);
    showHiddenFn('#containerBasicsShow', '#containerBasics', containerBasicsBool);
    showHiddenFn('#buttonBasicsShow', '#buttonBasics', buttonBasicsBool);
    showHiddenFn('#buttonForbiddenShow', '#buttonForbidden', buttonForbiddenBool);
    showHiddenFn('#buttonTextShow', '#buttonText', buttonTextBool);
    showHiddenFn('#buttonIconShow', '#buttonIcon', buttonIconBool);
    showHiddenFn('#buttonLoaginShow', '#buttonLoagin', buttonIconBool);
    showHiddenFn('#buttonSizeShow', '#buttonSize', buttonSizeBool);
    showHiddenFn('#inputBasicsShow', '#inputBasics', buttonSizeBool);
    showHiddenFn('#inputDisabledShow', '#inputDisabled', buttonSizeBool);
    showHiddenFn('#inputClearShow', '#inputClear', buttonSizeBool);
    showHiddenFn('#inputPasswordShow', '#inputPassword', buttonSizeBool);
    showHiddenFn('#inputIconShow', '#inputIcon', buttonSizeBool);
    showHiddenFn('#inputSizeShow', '#inputSize', buttonSizeBool);
    showHiddenFn('#inputWordLimitShow', '#inputWordLimit', buttonSizeBool);
    showHiddenFn('#navSideShow', '#navSide', buttonSizeBool);
    showHiddenFn('#navSideStyleShow', '#navSideStyle', buttonSizeBool);
    showHiddenFn('#mimLoadingShow', '#mimLoading', buttonSizeBool);
    showHiddenFn('#mimLoadingStyleShow', '#mimLoadingStyle', buttonSizeBool);
    showHiddenFn('#mimLoadingEntiretyShow', '#mimLoadingEntirety', buttonSizeBool);
    showHiddenFn('#mimTableShow', '#mimTable', buttonSizeBool);
    showHiddenFn('#mimTableStripeShow', '#mimTableStripe', buttonSizeBool);
    showHiddenFn('#mimButtonborderShow', '#mimButtonborder', buttonSizeBool);
    showHiddenFn('#mimSelectShow', '#mimSelect', buttonSizeBool);
    showHiddenFn('#mimSelectClearableShow', '#mimSelectClearable', buttonSizeBool);
    showHiddenFn('#mimSelectDisabledShow', '#mimSelectDisabled', buttonSizeBool);
});
//整页加载展示
$('#loadingClickShow').click(function () {
    $('#loadingClickShowDiv').show()
    setTimeout(function () {
        $('#loadingClickShowDiv').hide()
    }, 3000)
});
//点击复制代码
$('.basisInput .basisInput_div p mim-button').click(function () {
    var basisInputHtml = $(this).prev();
    basisInputHtml.select();
    document.execCommand("Copy");
    MIM.prompt("复制成功", "success", "3000");
});
//倒计时演示
$('.countdown').countDown('60', {}, {});
//点我赞
$('.clickMeLike').likeResult('赞+1', {});
//点击验证(手机号)
$('.clickValidationPhone').click(function () {
    var phoneVerify = MIM.verifyReg('phone', $('.phoneNumber').val(), true);
    switch (phoneVerify) {
        case 1:
            MIM.prompt('手机号验证通过', 'success', 3000);
            $('.phoneNumber').css({
                borderColor: '#67C23A'
            });
            break;
        case 2:
            MIM.prompt('请输入手机号', 'warning', 3000);
            $('.phoneNumber').css({
                borderColor: '#E6A23C'
            });
            break;
        case 3:
            MIM.prompt('输入手机号有误', 'error', 3000);
            $('.phoneNumber').css({
                borderColor: '#F56C6C'
            });
            break;
    }
});
//点击验证(邮箱)
$('.clickValidationEmail').click(function () {
    var emailVerify = MIM.verifyReg('email', $('.emailNumber').val(), false);
    switch (emailVerify) {
        case 1:
            MIM.prompt('邮箱验证通过', 'success', 3000);
            $('.emailNumber').css('borderColor', '#67C23A');
            break;
        case 2:
            MIM.prompt('请输入邮箱', 'warning', 3000);
            $('.emailNumber').css('borderColor', '#E6A23C');
            break;
        case 3:
            MIM.prompt('输入邮箱格式有误', 'error', 3000);
            $('.emailNumber').css('borderColor', '#F56C6C');
            break;
    }
});
//身份证验证
$('.clickValidationIdCard').click(function () {
    var idVerify = MIM.verifyReg(/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/, $('.idCardNumber').val(), true);
    switch (idVerify) {
        case 1:
            MIM.prompt('身份证号验证通过', 'success', 3000);
            $('.idCardNumber').css('borderColor', '#67C23A');
            break;
        case 2:
            MIM.prompt('请输入身份证号', 'warning', 3000);
            $('.idCardNumber').css('borderColor', '#E6A23C');
            break;
        case 3:
            MIM.prompt('输入身份证号格式有误', 'error', 3000);
            $('.idCardNumber').css('borderColor', '#F56C6C');
            break;
    }
});
//拖拽
$('#divDragDiv').divDrag();
//初始化select
var options = [{
    id: 'layout',
    value: 'Layout布局',
}, {
    id: 'container',
    value: 'Container 布局'
}, {
    id: 'buttonSwitch',
    value: 'Button按钮'
}, {
    id: 'inputBox',
    value: 'Input 输入框'
}, {
    id: 'navSide',
    value: 'NavSide 导航侧栏'
}, {
    id: 'mimLoading',
    value: 'Loading 加载'
}, {
    id: 'mimTable',
    value: 'Table 表格'
}, {
    id: 'mimSelect',
    value: 'Select 下拉框'
}, {
    id: 'alertSide',
    value: 'Alert 提示框'
}, {
    id: 'confirmPop',
    value: 'Confirm 弹窗'
}, {
    id: 'verificationDown',
    value: '验证码倒计时'
}, {
    id: 'timeFormatting',
    value: '时间格式化'
}, {
    id: 'likeResultStyle',
    value: '点赞样式'
}, {
    id: 'customStyle',
    value: '自定义验证'
}, {
    id: 'returnTop',
    value: '返回顶部'
}, {
    id: 'easyDrag',
    value: '简易拖拽',
    disabled: 'true'
}, {
    id: 'easyAjax',
    value: '简易AJAX封装'
}];
$('.selects').selectInit(options);
$('.selects').find('ul li').on('click', function () {
    var selectOption = $('.selects option:selected').attr('idIndex');
    $('.' + selectOption + '').show().siblings().hide();
    for (var i = 0; i < $('mim-menu ul li').length; i++) {
        if ($('mim-menu ul li').eq(i).find('span').attr('index') == selectOption) {
            $('mim-menu ul li').eq(i).addClass('is-active').siblings().removeClass('is-active');
            $('mim-menu ul li').eq(i).parent().parent().siblings().removeClass('is-active');
            $('mim-menu ul li').eq(i).siblings().children().children().removeClass('is-active');
            $('mim-menu ul li').eq(i).parent().parent().siblings().children().children().removeClass('is-active')
        }
    }
});

var options_two = [{
    id: '1',
    value: '黄金糕',
}, {
    id: '2',
    value: '双皮奶'
}, {
    id: '3',
    value: '蚵仔煎'
}, {
    id: '4',
    value: '龙须面'
}, {
    id: '5',
    value: '北京烤鸭'
}];
var options_four = [{
    id: '1',
    value: '黄金糕',
}, {
    id: '2',
    value: '双皮奶'
}, {
    id: '3',
    value: '蚵仔煎'
}, {
    id: '4',
    value: '龙须面',
    disabled: 'true'
}, {
    id: '5',
    value: '北京烤鸭'
}];
$('.selects_two').selectInit(options_two);
$('.selects_three').selectInit(options_two);
$('.selects_four').selectInit(options_four);