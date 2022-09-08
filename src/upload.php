<?php

require_once "googleAPI.php";


use Google\Service\Drive;

# TODO - PHP client currently chokes on fetching start page token
function uploadBasic(){
    try {
        $client = getClient();
        $client->addScope(Drive::DRIVE);
        $driveService = new Drive($client);
        // Create the file on your Google Drive
        $fileMetadata = new Google_Service_Drive_DriveFile(array(
            'name' => 'a.jpg'));
        $content = file_get_contents('a.jpg');
        $mimeType=mime_content_type('a.jpg');
        $file = $driveService->files->create($fileMetadata, array(
            'data' => $content,
            'mimeType' => $mimeType,
            'fields' => 'id'));
        printf("File ID: %s\n", $file->id);
    } catch(Exception $e) {
        echo "Error Message: ".$e;
    }
}

uploadBasic();