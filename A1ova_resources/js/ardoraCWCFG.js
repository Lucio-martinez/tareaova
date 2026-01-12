//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1;
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime; var tiAudio=false;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fDefs="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk=""; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="QTFvdmE="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["QQ==","UA==","Ug==","RQ==","Tg==","RA==","SQ==","Wg==","QQ==","Sg==","RQ==","Og=="],["Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og=="],["SQ==","Tg==","VA==","RQ==","Ug==","QQ==","Qw==","VA==","SQ==","Vg==","Tw==","Og=="],["Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","QQ=="],["RQ==","Vg==","QQ==","TA==","VQ==","QQ==","Qw==","SQ==","Tw==","Tg==","Og==","Ug=="],["Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","RA=="],["Qw==","Tw==","Tg==","VA==","RQ==","Tg==","SQ==","RA==","Tw==","Og==","Og==","Tw=="],["Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Ug=="],["Og==","Og==","Og==","Og==","Og==","Og==","TQ==","SQ==","RA==","Tw==","QQ==","QQ=="],["Og==","Og==","Og==","Og==","Og==","Og==","Tw==","Vg==","QQ==","Og==","Og==","Og=="]];
var x1=[1,1,7,7,12,1,1];
var y1=[1,3,10,9,4,5,7];
var x2=[11,11,9,12,12,10,9];
var y2=[1,3,10,9,9,5,7];
var imaCW=["","","","","","",""];
var audioCW=["","","","","","",""];
var defCW=["Proceso mediante el cual se adquieren conocimientos, habilidades y actitudes.","Tipo de recurso que permite la participación activa del estudiante.","Recurso digital diseñado para facilitar el aprendizaje autónomo.","Modelo de diseño instruccional centrado en el aprendizaje activo.","Herramienta de autor utilizada para crear actividades educativas.","Proceso para valorar el logro de los aprendizajes.","Conjunto de saberes que se desarrollan en un proceso educativo."];
var altCW=["","","","","","",""];
var colNum=12;
var rowNum=10;
