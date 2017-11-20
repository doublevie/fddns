<?php
header('Access-Control-Allow-Origin: *');
header('XDomainRequestAllowed: 1');
$res = array();
$res['status'] = 'error';
$name = $adress =  $client = '';
extract($_POST);
$res['status'] = $client;
if ($name != '' && $adress != '' && ($client == 'em' || $client == 'menumax' )) {
  $ddns = new PDO('sqlite:data/main.db');
$tocken = md5(uniqid(rand(), true));
$DATETIME = date('Y-m-d H:i:s');
$res['status'] = 'ok';
$ddns->exec("INSERT INTO $client (NAME,ADRESS,TOKEN,DATETIME) VALUES ('$name','$adress' ,'$tocken','$DATETIME') ;")  OR $res['status'] = $ddns->errorInfo();
$res['token'] = $tocken;
}
$res = json_encode($res);

exit($res);

 ?>
