<?php

require_once ('screenShot.php');
require_once ('upload.php');


function TakeScreenShots(){

    $customer_key = "d0c274";
    $secret_phrase = ""; //leave secret phrase empty, if not needed

    $url[0] = htmlspecialchars($_GET['url1']);
    $url[1] = htmlspecialchars($_GET['url2']);
    $url[2] = htmlspecialchars($_GET['url3']);
    $url[3] = htmlspecialchars($_GET['url4']);
    $url[4] = htmlspecialchars($_GET['url5']);

    $data = [];
    foreach ($url as $item){
        $file =  TakeScreenShot($customer_key, $secret_phrase, $item);
        array_push($data, upload($file));
    }
    return json_encode($data);
}


echo TakeScreenShots();
