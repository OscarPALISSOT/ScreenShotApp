<?php

require_once ("ScreenshotMachine.php");


$customer_key = "d0c274";
$secret_phrase = ""; //leave secret phrase empty, if not needed
$url = htmlspecialchars($_GET['url1']);

function TakeScreenShot($customer_key, $secret_phrase, $Url) {

    $machine = new ScreenshotMachine($customer_key, $secret_phrase);

    //mandatory parameter
    $options['url'] = $Url;

    // all next parameters are optional, see our website screenshot API guide for more details
    $options['dimension'] = "1920x1080";
    $options['device'] = "desktop";
    $options['format'] = "jpg";
    $options['cacheLimit'] = "0";
    $options['delay'] = "200";
    $options['zoom'] = "100";
    $api_url = $machine->generate_screenshot_api_url($options);
    $data = array("content" => '<img src="' . $api_url . '">');
    return json_encode($data);
}

echo TakeScreenShot($customer_key, $secret_phrase, $url);