
var fddns = {
  name : '' ,
  adress : '' ,
  phone : '' ,
  saveTo : 'save.php' ,
  cb : function(e) ,
  init : function(param){
if (param.name) this.name = param.name ;
if (param.adress) this.adress = param.adress ;
if (param.phone) this.phone = param.phone ;
if (param.saveTo) this.saveTo = param.saveTo ;
if (param.cb) this.cb = param.cb ;
ffdns.run();
} ,
run : function(){
/*  JQUERY IONLY
if (!typeOf($)) {

    return;
  }
*/
$(function(){
  $.ajax({
    url: "https://api.github.com/users/jeresig",
    dataType: "jsonp",
    jsonpCallback: "logResults"
  });

});




}
}
