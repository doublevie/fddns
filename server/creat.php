<?php
$res = array();
$res['status'] = 'error';
$name = $adress = $phone = $client = '';
extract($_POST);
if ($name != '' && $adress != '' && ($client == 'em' || $client = 'menumax' )) {
  $ddns = new PDO('sqlite:data/main.db');
$tocken = md5(uniqid(rand(), true));
$DATETIME = date('Y-m-d H:i:s');
$ddns->exec("INSERT INTO $client (NAME,ADRESS,PHONE,TOCKEN,DATETIME) VALUES ('$name','$adress','$tel','$token','$DATETIME') ;");
$res['status'] = 'ok';
$res['token'] = $tocken;
}


exit( $_GET['callback'] . ' (' . stripslashes($res) . ');' );

 ?>
