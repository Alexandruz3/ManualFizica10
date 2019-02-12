

function showImg( pFileName, pTitle, p1, p2) {
  imgWin = window.open( "", "image", "width=600,height=500,scrollbars,resizable,left=150,top=100");
  imgWin.document.write('<html><head><title>' + pTitle + '</title></head>');	
  imgWin.document.write('<BODY>');
  imgWin.document.write('<font size=+2>' + p1 + '</font>');
  imgWin.document.write('<p align=center><font size=+1>' + p2 +'</font>');
  imgWin.document.write('<p align=center><img src="' + pFileName + '" width=512><p>');
  imgWin.document.write('<p></font></body></html>');
  imgWin.document.close();	
  
  imgWin.focus();
}

function showVrml( pFileName, pTitle, p1, p2) {
  imgWin = window.open( "", "vrml", "width=600,height=500,scrollbars,resizable,left=150,top=100");
  imgWin.document.write('<html><head><title>' + pTitle + '</title></head>');	
  imgWin.document.write('<BODY>');
  imgWin.document.write('<font size=+2>' + p1 + '</font>');
  imgWin.document.write('<p align=center><font size=+1>' + p2 +'</font>');
  imgWin.document.write('<p align=center><EMBED src="' + pFileName + '" width=100% height=100% vrml_dashboard=FALSE vrml_background_color=#ffffff><p>');
  imgWin.document.write('<p></font></body></html>');
  imgWin.document.close();	
  
  imgWin.focus();
}

function showBlackVrml( pFileName, pTitle, p1, p2) {
  imgWin = window.open( "", "vrml", "width=600,height=500,scrollbars,resizable,left=150,top=100");
  imgWin.document.write('<html><head><title>' + pTitle + '</title></head>');	
  imgWin.document.write('<BODY bgcolor=#000000 text=#ffffff>');
  imgWin.document.write('<font size=+2>' + p1 + '</font>');
  imgWin.document.write('<p align=center><font size=+1>' + p2 +'</font>');
  imgWin.document.write('<p align=center><EMBED src="' + pFileName + '" width=100% height=100% vrml_dashboard=FALSE vrml_background_color=#000000><p>');
  imgWin.document.write('<p></font></body></html>');
  imgWin.document.close();	
  
  imgWin.focus();
}







