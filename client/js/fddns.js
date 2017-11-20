
var fddns = {
  base : 'http://localhost/server/' ,
  name : '' ,
  adress : '' ,
  phone : '' ,
  client : 'em' ,
  saveTo : 'save.php' ,
check : function(par){
  console.log('checking');
  $.ajax({
      type: 'GET',
      url: 'fddns/check.php',
      dataType: 'text',
      success: function(responseData, textStatus, jqXHR) {
 if (par.callback) {
   par.callback(responseData);
 }
      },
      error: function (responseData, textStatus, errorThrown) {

        console.log('error 5');
      }
  });
},
  init : function(param){
if (param.name) this.name = param.name ;
if (param.client) this.client = param.client ;
if (param.adress) this.adress = param.adress ;

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
      data: {'name':fddns.name ,'client':fddns.client ,'adress':fddns.adress  },
      dataType: 'text',
      success: function(responseData, textStatus, jqXHR) {

var res = JSON.parse(responseData);
if (fddns.cb) fddns.cb(res);

if (res.token !== undefined) fddns.save(res.token);
      },
      error: function (responseData, textStatus, errorThrown) {

        console.log('error 5');
      }
  });




} ,
save : funcion() {
  
}

}
