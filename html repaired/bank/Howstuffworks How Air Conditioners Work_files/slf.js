var ANV='2.1.10';					// Script Version
var ANSID='11686';						// Partner ID
var ANDPF;						// Data Provider Global Flag
var ANID='TID';						// ID cookie name
var ANDPU="http://anrtt.tacoda.net/rtt/blank.gif?";	// Data Provider Request URL
var ANAS="http://anad.tacoda.net";			// Ad Server URL

// Do Not Change Anything Below This Line
//----------------------------------------

var tcdacmd;		// DO NOT GIVE THIS VARIABLE A VALUE!!!!
var ANGPC='';var ANDSZ=2;var ANVAC='a';var ANVSZ=ANDSZ;
var ANVPC='OTH';var ANVSC='';var ANRD='';var ANVDT=0;
var ANVDA=0;var ANVAD=0;var ANPC=new Array();var ANADS = new Array();
ANPC["ART"]=2;ANPC["AUC"]=3;ANPC["CAR"]=4;ANPC["BTY"]=5;ANPC["BZN"]=6;ANPC["BZS"]=7;ANPC["JOB"]=8;ANPC["DEC"]=9;ANPC["DFT"]=10;ANPC["EDU"]=11;ANPC["FOD"]=12;ANPC["FOR"]=13;ANPC["GAM"]=14;ANPC["GDN"]=15;ANPC["GLF"]=16;ANPC["HLT"]=17;ANPC["HCM"]=18;ANPC["HIM"]=19;ANPC["INV"]=20;ANPC["LCN"]=21;ANPC["MOV"]=22;ANPC["MUS"]=23;ANPC["NTN"]=24;ANPC["NLF"]=25;ANPC["OLF"]=26;ANPC["PAR"]=27;ANPC["PFZ"]=28;ANPC["PEL"]=29;ANPC["PIC"]=30;ANPC["PRG"]=31;ANPC["RES"]=32;ANPC["LUV"]=33;ANPC["REL"]=34;ANPC["RET"]=35;ANPC["SBZ"]=36;ANPC["SPT"]=37;ANPC["TCN"]=38;ANPC["TBH"]=39;ANPC["TBS"]=40;ANPC["TCS"]=41;ANPC["TEL"]=42;ANPC["TEV"]=43;ANPC["TOY"]=44;ANPC["TVL"]=45;ANPC["WIR"]=46;ANPC["WDN"]=47;ANPC["CPH"]=55;ANPC["CPL"]=56;ANPC["CPM"]=57;ANPC["CPC"]=53;ANPC["CPF"]=54;ANPC["CST"]=63;ANPC["CSH"]=62;ANPC["CSE"]=61;ANPC["CVH"]=66;ANPC["CSL"]=67;ANPC["CSM"]=68;ANPC["CSC"]=64;ANPC["CSF"]=65;ANPC["CTC"]=58;ANPC["CTF"]=59;ANPC["CTS"]=60;ANPC["CMV"]=49;ANPC["CML"]=50;ANPC["CWV"]=88;ANPC["CWL"]=89;ANPC["CFV"]=48;ANPC["JCH"]=75;ANPC["JLV"]=78;ANPC["JOR"]=83;ANPC["JNY"]=82;ANPC["JLA"]=79;ANPC["JBO"]=72;ANPC["JSF"]=85;ANPC["JMI"]=81;ANPC["JDC"]=87;ANPC["JEU"]=76;ANPC["JCB"]=73;ANPC["JAF"]=69;ANPC["JAS"]=71;ANPC["JPC"]=84;ANPC["JSA"]=86;ANPC["JMX"]=80;ANPC["JCA"]=74;ANPC["JHW"]=77;ANPC["JAK"]=70;ANPC["OTH"]=52;ANPC["NON"]=51;ANPC["APP"]=1;ANPC["AAA"]=90;ANPC["AAB"]=91;ANPC["AAC"]=92;ANPC["AAD"]=93;ANPC["AAE"]=94;ANPC["AAF"]=95;ANPC["AAG"]=96;ANPC["AAH"]=97;ANPC["AAI"]=98;ANPC["AAJ"]=99;ANPC["AAK"]=100;ANPC["AAL"]=103;ANPC["AAM"]=113;ANPC["AAN"]=114;ANPC["AAO"]=115;ANPC["AAP"]=116;ANPC["AAQ"]=117;ANPC["AAR"]=118;ANPC["AAS"]=119;ANPC["AAT"]=120;ANPC["AAU"]=121;ANPC["AAV"]=122;ANPC["AAW"]=123;ANPC["AAX"]=124;ANPC["AAY"]=125;ANPC["AAZ"]=126;ANPC["ABA"]=127;ANPC["ABB"]=128;ANPC["ABC"]=129;ANPC["ABD"]=130;ANPC["ABE"]=131;
ANADS=["468x60a","728x90a","300x250a","120x600a","160x600a","468x60a|728x90a","120x600a|160x600a"];
function ANGRD() {
if (top != self || ANRD != '') {return ANRD;}
var rf=top.location.href;var i=j=0;i=rf.indexOf('/');i=rf.indexOf('/',++i);j=rf.indexOf('/',++i);r=rf.substring(i,j);return r;}
function ANTR(s) {
while (s.charAt(0) == ' ') s = s.substring(1);while (s.charAt(s.length - 1) == ' ') s = s.substring(0, s.length - 1);return s;}
function ANLC(S) {
var B=E=0;var st='';S=S.toUpperCase();
while (E<S.length) {
E=S.indexOf('|',B);if (E==-1) {E=S.length;}
st=st+ANPC[S.substring(B,E)]+'&';B=E+1;}
if (st==null) {return '';}
else {return st;}}
function TCDA(ps) {
ps=ps.toUpperCase();var pa=ps.split(";");
for (p in pa) {
kv=pa[p].split("=");k=kv[0];v=kv[1];if (k!=null) k=ANTR(k);if (v!=null) v=ANTR(v);
switch (k) {
case ("SA"): if (v!=null&&v!='') ANVAC=v;break;
case ("SZ"): if (v!=null&&v!='') ANVSZ=v;break;
case ("CC"): if (v!=null&&v!='') ANVPC=v;break;
case ("SC"): if (v!=null&&v!='') ANVSC=v;break;
case ("RD"): if (v!=null&&v!='') ANRD=v.toLowerCase();break;
case ("DT"): ANVDT=1;break;
case ("DA"): ANVDA=1;break;
case ("AD"): ANVAD=1;break;
default: if (v!=null&&v!='') AMSAP(k,v);}}
if (ANVDT==1) ANDP(ANVPC);ANVDT=0;
if (ANVAD==1) {ANAP(ANVAC,ANVSZ);ANVAD=0;}
if (ANVDA==1) {AMSDP(ANSID,ANVPC,ANVSC);ANVDA=0;}
return;}
function AMSAP(k,v) {return;}
function AMSDP(sid,pc,sc) {return;}
function ANDP(pc) {
if (ANDPF==1) {return;} else {ANDPF=1;}
ANVPC=pc;var ci = ANLC(ANVPC);var r=ANGRD();
if (ci!='') {if (navigator.userAgent.indexOf("Opera")!=-1||navigator.userAgent.indexOf("Safari")!=-1) {document.write('<IMG'+' STYLE="display: none" SRC="'+ANDPU+ci+'si='+ANSID+'&r='+r+'&v='+ANV+'&cb='+Math.random()+'" WIDTH="1" HEIGHT="1" BORDER="0">');}
else {document.write('<IMG'+' STYLE="display: none" SRC="'+ANDPU+ci+'si='+ANSID+'&r='+r+'&v='+ANV+'&cb='+Math.random()+'" WIDTH="1" HEIGHT="1" BORDER="0">');}}}
function ANAP(ac,sz,pc) {
if (sz <= ANADS.length) {
ANVAC=ac.toLowerCase();var au='<scr'+'ipt src="'+ANAS+'/cgi-bin/ads/';if (sz==4||sz==5||sz==7) au+='sk';else au+='ad';
au+=ANSID+ANVAC+'.cgi/v=2.0S/sz='+ANADS[sz-1]+'/'+Math.round(Math.random()*100000)+'/RETURN-CODE/JS/" LANGUAGE="JavaScript"></scr'+'ipt>';document.write(au);}
ANVSZ=ANDSZ;}

if (tcdacmd != undefined && tcdacmd != "") {TCDA(tcdacmd);}