<?php

// API access key from Google API's Console
define( 'API_ACCESS_KEY', 'AIzaSyD9JJLNWM-wzeKa1zGUnmfR6anNB3EVpJI' );


$registrationIds = array( $_GET['id'] );

// prep the bundle
$msg = array
(
	'body' 	=> 'Message Body is here \n New line is here',
	'title'	=> 'This is my notification title',
	'icon'		=> 'fb-icon.png'
);

$fields = array
(
	'notification'	=> $msg,
	'registration_ids' => $registrationIds	
);
 
$headers = array
(
	'Authorization: key=' . API_ACCESS_KEY,
	'Content-Type: application/json'
);
 
$ch = curl_init();
curl_setopt( $ch,CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send' );
curl_setopt( $ch,CURLOPT_POST, true );
curl_setopt( $ch,CURLOPT_HTTPHEADER, $headers );
curl_setopt( $ch,CURLOPT_RETURNTRANSFER, true );
curl_setopt( $ch,CURLOPT_SSL_VERIFYPEER, false );
curl_setopt( $ch,CURLOPT_POSTFIELDS, json_encode( $fields ) );
$result = curl_exec($ch );
curl_close( $ch );

echo $result;

?>