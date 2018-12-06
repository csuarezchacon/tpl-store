<?php
	include 'cart_set.php';
	
	if(isset($_POST['index'])) {
		$index = $_POST['index'];
	}

	/*if(isset($_SESSION['cart'])) {
		unset($_SESSION["cart"]->product[$index]);
		echo $index;
	}*/
?>