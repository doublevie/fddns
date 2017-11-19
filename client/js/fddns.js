
var fddns = {
  base : 'http://localhost/server/' ,
  name : '' ,
  adress : '' ,
  phone : '' ,
  saveTo : 'save.php' ,

  init : function(param){
if (param.name) this.name = param.name ;
if (param.client) this.client = param.client ;
if (param.adress) this.adress = param.adress ;
if (param.phone) this.phone = param.phone ;
if (param.saveTo) this.saveTo = param.saveTo ;
if (param.base) this.base = param.base ;
if (param.callback) this.cb = param.callback ;
fddns.run();
} ,
run : function(){

  $.ajax({
      type: 'POST',
      url: fddns.base+'creat.php',
      crossDomain: true,
      data: {'name':fddns.name ,'client':fddns.client ,'adress':fddns.adress  , 'phone':fddns.phone },
      dataType: 'text',
      success: function(responseData, textStatus, jqXHR) {
           // console.log(responseData);
var res = JSON.parse(responseData);
if (fddns.cb) fddns.cb(res);

      },
      error: function (responseData, textStatus, errorThrown) {

        console.log('error 5');
      }
  });




}
}
