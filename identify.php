<?php
// just a simple comment

$imgData=$_POST["img"];
$img0 = imagecreatefromjpeg($imgData);
$w = imagesx($img0);
$h = imagesy($img0);

$h1 = 0.8*$h;
$w1 = 3*$h1/4;

$img1=imagecreatetruecolor ($w1,$h1);
imagecopy($img1,$img0, 0, 0, ($w-$w1)/2, ($h-$h1)/2, $w1, $h1);

ob_start();
header( "Content-type: image/jpeg" );
imagejpeg( $img1, NULL, 100 );
imagedestroy( $img1 );
imagedestroy( $img0 );
$i = ob_get_clean();

echo "<img src='data:image/jpeg;base64," . base64_encode( $i )."'/>";
