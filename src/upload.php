<?php

require_once "googleAPI.php";


use Google\Service\Drive;

# TODO - PHP client currently chokes on fetching start page token
function uploadBasic($fileToUpload){
    try {
        $client = getClient();
        $client->addScope(Drive::DRIVE);
        $driveService = new Drive($client);
        // Create the file on your Google Drive
        $fileMetadata = new Google_Service_Drive_DriveFile(array(
            'name' => 'test'));
        $content = file_get_contents($fileToUpload);
        $file = $driveService->files->create($fileMetadata, array(
            'data' => $content,
            'fields' => 'id'));
        printf("File ID: %s\n", $file->id);
        printf("File url: %s\n", "https://drive.google.com/file/d/". $file->id . "/view");
    } catch(Exception $e) {
        echo "Error Message: ".$e;
    }
}

uploadBasic('a.jpg');