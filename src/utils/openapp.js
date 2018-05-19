
/**
 * 打开（下载）App 
 */
export const openApp = function(){  

	// 判断浏览器
    var Navigator = navigator.userAgent;
    var ifChrome = Navigator.match(/Chrome/i) != null && Navigator.match(/Version\/\d+\.\d+(\.\d+)?\sChrome\//i) == null ? true : false;  
    var ifAndroid = (Navigator.match(/(Android);?[\s\/]+([\d.]+)?/)) ? true : false;
    var ifiPad = (Navigator.match(/(iPad).*OS\s([\d_]+)/)) ? true : false;
    var ifiPhone = (!ifiPad && Navigator.match(/(iPhone\sOS)\s([\d_]+)/)) ? true : false;
    var ifSafari = (ifiPhone || ifiPad) && Navigator.match(/Safari/);
    var version = 0;
    ifSafari && (version = Navigator.match(/Version\/([\d\.]+)/));
    version = parseFloat(version[1], 10);
    // 是否从微信打开
    var ifWeixin = navigator.userAgent.indexOf("MicroMessenger") >= 0; // weixin
    if(ifWeixin){  
        window.location.href='http://a.app.qq.com/o/simple.jsp?pkgname=com.jingdong.app.mall&g_f=991850';  
    }else{//非微信浏览器  
        if (ifSafari) {
        	console.log('iPhone')
//          var loadDateTime = new Date();  
//          window.setTimeout(function() {  
//              var timeOutDateTime = new Date();  
//              if (timeOutDateTime - loadDateTime < 5000) {  
//                  window.location = "http://union.m.jd.com/download/go.action?to=http%3A%2F%2Fitunes.apple.com%2Fcn%2Fapp%2Fid414245413&client=apple&unionId=12532&subunionId=m-top&key=e4dd45c0f480d8a08c4621b4fff5de74";//ios下载地址  
//              } else {  
//              window.close();  
//              }  
//          },2000);  
//          window.location = "sharetest://data/test?type=1&value=2";  
			var ifr = document.createElement("iframe");
	        ifr.src = "sharetest://data/test?type=1&value=2"; /***打开app的协议，有ios同事提供***/
	        ifr.style.display = "none";
	        document.body.appendChild(ifr);
	        window.setTimeout(function(){
	          document.body.removeChild(ifr);
	           window.location.href = "http://union.m.jd.com/download/go.action?to=http%3A%2F%2Fitunes.apple.com%2Fcn%2Fapp%2Fid414245413&client=apple&unionId=12532&subunionId=m-top&key=e4dd45c0f480d8a08c4621b4fff5de74"; /***下载app的地址***/
	        },2000)
          }else if (ifAndroid) {  
            var state = null;  
            console.log('安卓')
            try {  
                window.location = 'sharetest://data/test?type=1&value=2'; 
                setTimeout(function(){  
                    window.location= "http://h5.m.jd.com/active/download/download.html?channel=jd-m"; //android下载地址  
                    },500);
            } catch(e) {}  
        }  
    } 	
} 

