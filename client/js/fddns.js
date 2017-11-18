
var fddns = {
  base : 'http://example.com/server/' ,
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

$(function(){
  $.ajax({
    url: fddns.base,
    dataType: "jsonp",
    jsonpCallback: "logResults"
  });

});




}
}
