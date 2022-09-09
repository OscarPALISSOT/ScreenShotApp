<?php

require_once ("ScreenshotMachine.php");
require_once ("upload.php");

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
    return $api_url;
}