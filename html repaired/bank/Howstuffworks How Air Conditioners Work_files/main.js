function browserAcceptsCookies() {
	var HSW_acceptsCookies = false;
	if (document.cookie == '') {
		document.cookie = 'HSW_acceptsCookies=yes';
		if (document.cookie.indexOf('HSW_acceptsCookies=yes') != -1) {
			HSW_acceptsCookies = true;
		}
	}
	else {
		HSW_acceptsCookies = true;
	}
	return (HSW_acceptsCookies);
}

function recordStats(webpage,referer) {
  var _bs = '<img height=1 width=1 border=0 src="';
  if (location.protocol == 'https:') {
    _bs = _bs + 'https://store.howstuffworks.com/howstuffworks/';
  }
  else {
    if (location.hostname == 'www.flexplay.com') {
      _bs = _bs + 'http://www.flexplay.com/';
    }
    else {
       if (location.hostname == 'www.lidrock.com') 
         _bs = _bs + 'http://lidrock.howstuffworks.com/';
       else {
          if (location.hostname == 'lidrock.howstuffworks.com') 
             _bs = _bs + 'http://lidrock.howstuffworks.com/';
          else {
             if (location.hostname == 'www.stuffo.com') 
               _bs = _bs + 'http://www.stuffo.com/';
             else 
                _bs = _bs + 'http://www.howstuffworks.com/';
             }
	 }
    }
  }
  _bs = _bs + 'begin.php?check=1&webpage=' + webpage + '&referer=' + referer;
  if (browserAcceptsCookies()) {
    _bs = _bs + "&test=1";
  }
  _bs = _bs + '">';
  document.write(_bs);
}

function OpenWindow(url) {
	newwindow = window.open ("/" + url, 'HowStuffWorks', 'status=no,toolbar=no,location=no,menubar=no,scrollbars=yes,resizable=yes,width=485,height=675');
}

function OpenWindow2(url,h,w) {
	newwindow = window.open ("/" + url, 'HowStuffWorks', 'status=no,toolbar=no,location=no,menubar=no,scrollbars=no,resizable=no,width=' + w + ',height=' + h);
}

var RN = new String (Math.random());
var RNS = RN.substring(2,11);

function DisplayAds (sitepage, position, width, height)
{
  var oas = 'http://ad.howstuffworks.com/RealMedia/ads/';
  var oaspage = sitepage + '/1' + RNS + '@' + position;
  if (haveSpider) browser_ok = 0;
  else            browser_ok = 1;

  if (browser_ok == 1) {
     if (_version < 11) {
       document.write ('<A HREF="' + oas + 'click_nx.ads/' + oaspage + '" TARGET="_top"><IMG SRC="' + oas + 'adstream_nx.ads/' + oaspage + '" BORDER="0" WIDTH="' + width + '" HEIGHT="' + height + '"></a>');
     } else {
       document.write ('<SCRIPT LANGUAGE="JavaScript1.1" SRC="' + oas + 'adstream_jx.ads/' + oaspage + '">');
       document.write ('\<\!-- --\>');
       document.write ('\<\/SCRIPT\>');
       document.write ('\<\!-- --\>');
     }
    }
}

function showImage(html)
{
  windowOps = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=yes," +
              "width=500,height=500,left=250,top=50";
  ImageWindow = window.open("","ImageWindow",windowOps);
  windowHTML = '<html><body><base href="http://www.howstuffworks.com/"><center><font face="arial,helvetica">' + html +
               '<p><font face="arial,helvetica">' +
               '<a href="javascript:window.close();">Click here</a> to close this window.</font></center>' +
               '</body></html>';
	self.ImageWindow.document.clear();
  self.ImageWindow.document.write(windowHTML);
	self.ImageWindow.focus();
	self.ImageWindow.document.close();
}

function tryIt(HTML)
{
  windowOps = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=yes," +
              "width=500,height=500,left=250,top=50";
  ImageWindow = window.open("","ImageWindow",windowOps);
  windowHTML = '<html><body>' + HTML +
               '<p><font face="arial,helvetica">' +
               '<A HREF="javascript:window.close();">Click here</a> to close this window.</font>' +
               '</body></html>';
  self.ImageWindow.document.clear();
  self.ImageWindow.document.write(windowHTML);
  self.ImageWindow.focus();
  self.ImageWindow.document.close();
}

function shopTI(url,lid) {
   if (url.indexOf("LINKIN_ID") == -1) {
      url="http://"+escape(url.substring(7))+"/LINKIN_ID-"+lid;
      }
   return url;
   }
