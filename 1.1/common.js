//成功或失敗的提示框
var prompt = function prompt(width, time, bool, state) {
  var set = "";
  clearTimeout(set);
  var div = $("<div></div>").css({
    width: "100%",
    position: "fixed",
    opacity: "0",
    zIndex: "999999"
  }).animate({ top: "50px", opacity: '1' }, 500).appendTo($("body"));
  if (bool == true) {
    var div1 = $("<div></div>").css({
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
      boxShadow: "0px 0px 10px 1px rgba(15, 206, 27, .5)"
    }).appendTo(div);
    var p = $("<p>" + state + "</p>").css({
      color: "rgba(15,206,27,1)",
      fontSize: "18px",
      lineHeight: "50px",
      textAlign: "center"
    }).appendTo(div1);
  } else if (bool == false) {
    var div1 = $("<div></div>").css({
      width: width + "px",
      borderColor: "#fde2e2",
      height: "50px",
      margin: "0px auto",
      backgroundColor: "#fef0f0",
      borderRadius: "4px",
      border: "1px solid #e1f3d8",
      boxShadow: "0px 0px 10px 1px rgba(254, 110, 110, .5)"
    }).appendTo(div);
    var p = $("<p>" + state + "</p>").css({
      color: "rgba(254, 110, 110, 1)",
      fontSize: "18px",
      lineHeight: "50px",
      textAlign: "center"
    }).appendTo(div1);
  }
  set = setTimeout(function () {
    div.animate({ marginTop: "-50px", opacity: '0' }, 500, function () {
      div.remove();
    });
    clearTimeout(set);
  }, time);
};

//时间格式化
var timeFilter = function timeFilter(value) {
  var oDate = new Date();
  oDate.setTime(value * 1000);
  var y = oDate.getFullYear();
  var m = oDate.getMonth() + 1;
  parseInt(m) < 10 ? m = '0' + m : m = m;
  var d = oDate.getDate();
  parseInt(d) < 10 ? d = '0' + d : d = d;
  return y + '/' + m + '/' + d;
};

var timeFilter1 = function timeFilter1(value) {
  var oDate = new Date();
  oDate.setTime(value * 1000);
  var y = oDate.getFullYear();
  var m = oDate.getMonth() + 1;
  parseInt(m) < 10 ? m = '0' + m : m = m;
  var d = oDate.getDate();
  parseInt(d) < 10 ? d = '0' + d : d = d;
  return y + '年' + m + '月' + d + '日';
};

var timeFilter2 = function timeFilter2(value) {
  var oDate = new Date();
  oDate.setTime(value * 1000);
  var h = oDate.getHours();
  parseInt(h) < 10 ? h = '0' + h : h = h;
  var m = oDate.getMinutes();
  parseInt(m) < 10 ? m = '0' + m : m = m;
  return h + ':' + m;
};

var timeFilter3 = function timeFilter3(value) {
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
  return y + '-' + M + '-' + d + ' ' + h + ':' + m;
};

var timeFilter4 = function timeFilter4(value) {
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
  return y + '/' + M + '/' + d + ' ' + h + ':' + m;
};

//（confirm）弹窗
var confirm = function confirm(width, state, successCallback, _confirm, deselect, failCallback) {
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
};

//验证码倒计时
var countDown = function countDown(ev, time, css1, css2) {
  var time = time;
  var event = window.event || ev;
  var that = event.srcElement ? event.srcElement : event.target;
  CountdownTime();
  function CountdownTime() {
    var test1;
    if (time >= 1) {
      time -= 1;
      if (time == 0) {
        $(that).css(css1);
        $(that).css({
          cursor: "pointer"
        }).removeAttr("disabled").html("获取验证码");
        return;
      }
      //点击后按钮变化
      $(that).css(css2);
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

//验证的封装
var verification = function (type, str, successCallback, failCallback) {
  //手机号验证
  if ("phone" == type) {
    if (str == "") {
      prompt("500", "2000", false, "请您输入手机号");
    } else {
      window.event.preventDefault();
      var re = /^[1][3,4,5,7,8][0-9]{9}$/;
      if (re.test(str)) {
        successCallback()
      } else {
        failCallback()
      }
    }
  } else if ("code4" == type) {
    //4位验证码验证
    if (str == "") {
      prompt("500", "2000", false, "请您输入验证码");
    } else {
      window.event.preventDefault();
      var re = /^\d{4}$/;
      if (re.test(str)) {
        successCallback()
      } else {
        failCallback()
      }
    }
  } else if ("code6" == type) {
    //6位验证码验证
    if (str == "") {
      prompt("500", "2000", false, "请您输入验证码");
    } else {
      window.event.preventDefault();
      var re = /^\d{6}$/;
      if (re.test(str)) {
        successCallback()
      } else {
        failCallback()
      }
    }
  } else if ("Email" == type) {
    //Emali验证
    if (str == "") {
      prompt("500", "2000", false, "请您输入邮箱");
    } else {
      window.event.preventDefault();
      var re = /^[\.a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      if (re.test(str)) {
        successCallback();
      } else {
        failCallback()
      }
    }
  } else if ("IDcard" == type) {
    //身份证验证
    if (str == "") {
      prompt("500", "2000", false, "请您输入身份证号");
    } else {
      window.event.preventDefault();
      var re = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
      if (re.test(str)) {
        successCallback()
      } else {
        failCallback()
      }
    }
  } else if ("special" == type) {
    //座机验证
    if (str == "") {
      prompt("500", "2000", false, "请您输入联系方式");
    } else {
      window.event.preventDefault();
      var re = /^[0-9-]+$/;
      if (re.test(str)) {
        successCallback()
      } else {
        failCallback()
      }
    }
  }else if ("password" == type) {
    //密码验证
    if (str == "") {
      prompt("500", "2000", false, "请您输入密码");
    } else {
      window.event.preventDefault();
      var re = /^.{6,}$/;
      if (re.test(str)) {
        successCallback()
      } else {
        failCallback()
      }
    }
  }
}

/*图片上传阿里云*/
// sha验证
var shaEvt = function shaEvt(files) {
  var _this = this;
  var fr = new FileReader();
  fr.readAsArrayBuffer(files);
  return new Promise(function (resolve) {
    fr.onload = function () {
      var data = new Uint8Array(fr.result);
      var result = sha1(data);
      var hex = Array.prototype.map.call(result, function (e) {
        return (e < 16 ? "0" : "") + e.toString(16);
      }).join("");
      var timer = null;
      timer = setInterval(function () {
        if (hex) {
          resolve({ "sha1": hex });
          clearInterval(timer);
        }
      }, 10);
    };
  });
};
//md5验证
var mdEvt = function mdEvt(files) {
  return new Promise(function (resolve) {
    var _this = this;
    var blobSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice,
      file = files,
      chunkSize = 2097152,
      // read in chunks of 2MB
      chunks = Math.ceil(file.size / chunkSize),
      currentChunk = 0,
      spark = new SparkMD5.ArrayBuffer(),
      frOnload = function frOnload(e) {
        spark.append(e.target.result); // append array buffer
        currentChunk++;
        if (currentChunk < chunks) {
          loadNext();
        } else {
          var result = spark.end();
          var timer = null;
          timer = setInterval(function () {
            if (result) {
              resolve({ "md5": result });
              clearInterval(timer);
            }
          }, 10);
        }
      },
      frOnerror = function frOnerror() {
        console.log("糟糕，好像哪里错了");
      };

    function loadNext() {
      var fileReader = new FileReader();
      fileReader.onload = frOnload;
      fileReader.onerror = frOnerror;
      var start = currentChunk * chunkSize,
        end = start + chunkSize >= file.size ? file.size : start + chunkSize;
      fileReader.readAsArrayBuffer(blobSlice.call(file, start, end));
    }

    loadNext();
  });
};
// 记录文件名
var nameEvt = function nameEvt(files) {
  return new Promise(function (resolve) {
    resolve({ "name": files.name });
  });
};
//判断文件类型
var typeEvt = function typeEvt(files) {
  var type;
  return new Promise(function (resolve) {
    if (files.name.indexOf('mp3') >= 0 || files.name.indexOf('aac') >= 0 || files.name.indexOf('m4a') >= 0) {
      type = 2;
    } else if (files.name.indexOf('mp4') >= 0) {
      type = 3;
    } else if (files.type.indexOf('image') >= 0) {
      type = 1;
    } else if (files.type.indexOf('pdf') >= 0) {
      type = 4;
    } else if (files.name.indexOf('doc') >= 0) {
      type = 5;
    } else if (files.name.indexOf('ppt') >= 0) {
      type = 6;
    } else if (files.name.indexOf('xls') >= 0) {
      type = 7;
    } else if (files.name.indexOf('zip') >= 0 || files.name.indexOf('rar') >= 0) {
      type = 8;
    } else if (files.name.indexOf('txt') >= 0) {
      type = 9;
    } else {
      type = -1;
    }
    resolve({ "type": type });
  });
};
//base64地址
var baseEvt = function baseEvt(file) {
  var base_src;
  return new Promise(function (resolve) {
    if (file.type.indexOf('image') >= 0) {
      var reader = new FileReader();
      reader.onload = function (e) {
        base_src = e.target.result;
        resolve({ "base_src": base_src });
      };
      reader.readAsDataURL(file);
    } else {
      resolve({ "base_src": '' });
    }
  });
};
//获取文件大小
var getFileSize = function getFileSize(files) {
  var size;
  return new Promise(function (resolve) {
    resolve({ "size": files.size });
  });
};
// 获取上传文件的所有内容
var getAllFilesMsg = function getAllFilesMsg(files) {
  var result = [];
  return new Promise(function (resolve, reject) {
    Promise.all([mdEvt(files[0]), shaEvt(files[0]), nameEvt(files[0]), typeEvt(files[0]), getFileSize(files[0]), baseEvt(files[0])]).then(function (res) {
      var temp = {};
      for (var i = 0; i < res.length; i++) {
        temp[Object.keys(res[i])] = res[i][Object.keys(res[i])];
        temp['percent'] = 0;
      }
      result.push(temp);
      resolve(result);
    });
  });
};
//实例化文件上传oss  URL传完整获取上传凭证地址  method:post/get
var multipartUploadWithSts = function multipartUploadWithSts(URL, method) {
  //文件上传
  return new Promise(function (resolve) {
    //http://pc-api.power.com/tools/stssign.php
    OSS.urllib.request(URL, { method: method }, function (err, response) {
      if (err) {
        return alert(err);
      }
      try {
        var result = JSON.parse(response);
      } catch (e) {
        var errmsg = 'parse sts response info error: ' + e.message;
        return alert(errmsg);
      }
      var client = new OSS.Wrapper({
        accessKeyId: result.data.Credentials.AccessKeyId,
        accessKeySecret: result.data.Credentials.AccessKeySecret,
        stsToken: result.data.Credentials.SecurityToken,
        region: 'oss-cn-beijing',
        bucket: result.data.bucket
      });
      resolve(client);
    });
  });
};
// 分片文件上传
var filesUploadEvt = function filesUploadEvt(e) {
  var checkpoint_temp;
  if (e.cpt) {
    e.oss.multipartUpload(e.strampName, e.file, {
      checkpoint: e.cpt,
      // progress: /*#__PURE__*/regeneratorRuntime.mark(function progress(percent, cpt) {
      //     return regeneratorRuntime.wrap(function progress$(_context) {
      //         while (1) {
      //             switch (_context.prev = _context.next) {
      //                 case 0:
      //                     console.log('Progress: ' + percent);
      //                     checkpoint_temp = cpt;
      //                     e.progress({ "storeAs": e.storeAs, "percent": percent });
      //
      //                 case 3:
      //                 case "end":
      //                     return _context.stop();
      //             }
      //         }
      //     }, progress, this);
      // })
    }).then(function (result) {
      var index = result.res.requestUrls[0].indexOf('?');
      var url = index == -1 ? result.res.requestUrls[0] : result.res.requestUrls[0].slice(0, result.res.requestUrls[0].indexOf('?'));
      e.lists.address = url;
      e.lists.thumb = '';
      e.success(e.lists);
      console.log(result);
    }).catch(function (err) {
      console.log(111);
      // e.error({
      //     'ossClient': e.oss,
      //     "storeAs": e.storeAs,
      //     "file": e.file,
      //     'strampName': e.strampName,
      //     "cpt": checkpoint_temp
      // })
    });
  } else {
    e.oss.multipartUpload(e.strampName, e.file, {
      parallel: 2,
      // progress: /*#__PURE__*/regeneratorRuntime.mark(function progress(percent, cpt) {
      //     return regeneratorRuntime.wrap(function progress$(_context2) {
      //         while (1) {
      //             switch (_context2.prev = _context2.next) {
      //                 case 0:
      //                     checkpoint_temp = cpt;
      //                     e.progress({ "storeAs": e.storeAs, "percent": percent });
      //
      //                 case 2:
      //                 case "end":
      //                     return _context2.stop();
      //             }
      //         }
      //     }, progress, this);
      // })
    }).then(function (result) {
      var index = result.res.requestUrls[0].indexOf('?');
      var url = index == -1 ? result.res.requestUrls[0] : result.res.requestUrls[0].slice(0, result.res.requestUrls[0].indexOf('?'));
      e.lists.address = url;
      e.lists.thumb = '';
      e.success(e.lists);
    }).catch(function (err) {
      console.log(err, "11111111111111111111111");
      // e.error({
      //   'ossClient': e.oss,
      //   "storeAs": e.storeAs,
      //   "file": e.file,
      //   'strampName': e.strampName,
      //   "cpt": checkpoint_temp
      // })
    });
  }
};
//不分片文件上传
var blobUploadEvt = function blobUploadEvt(e) {
  e.ossClient.put(e.strampPath, e.blobFile).then(function (result) {
    e.success(result);
  }).catch(function (err) {});
};

//分享的统计
var shareEvt = function (id,type) {
  $.ajax({
    type: "post",
    url: URL + "?m=api&c=ajax&a=countSharePv",
    data:{
      id:id,
      type:type
    },
    success: function (data) {
    },
    error: function (arr) {
      console.log(arr)
    }
  });
};

