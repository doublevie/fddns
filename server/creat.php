<?php
header('Access-Control-Allow-Origin: *');
header('XDomainRequestAllowed: 1');
$res = array();
$res['status'] = 'error';
$name = $adress = $phone = $client = '';
extract($_POST);
if ($name != '' && $adress != '' && ($client == 'em' || $client = 'menumax' )) {
  $ddns = new PDO('sqlite:data/main.db');
$tocken = md5(uniqid(rand(), true));
$DATETIME = date('Y-m-d H:i:s');
$ddns->exec("INSERT INTO $client (NAME,ADRESS,PHONE,TOCKEN,DATETIME) VALUES ('$name','$adress','$phone','$tocken','$DATETIME') ;");
$res['status'] = 'ok';
$res['token'] = $tocken;
}
$res = json_encode($res);

// exit( $_GET['callback'] . ' (' . stripslashes($res) . ');' );
exit( $res   );

 ?>
