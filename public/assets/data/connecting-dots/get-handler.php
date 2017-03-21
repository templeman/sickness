<?php
if(isset($_POST['iteration'])) {
	$j = $_POST['iteration'];
}
$states = array('states1.txt', 'states2.txt', 'states3.txt', 'states4.txt', 'states5.txt', 'states6.txt', 'states7.txt', 'states8.txt', 'states9.txt', 'states10.txt', 'states11.txt', 'states12.txt', 'states13.txt', 'states14.txt', 'states15.txt', 'states16.txt', 'states17.txt', 'states18.txt', 'states19.txt', 'states20.txt', 'states21.txt', 'states22.txt'); 
$current_file = 'states'.$j.'.txt';
$file = file_get_contents($current_file);
// $states = explode(",", $file);

echo $file;

?>
