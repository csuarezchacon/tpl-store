<?php
	include 'cart_set.php';

	/*if(!isset($_SESSION['cart'])) {
		$cart = (object) array(
			'product' => array()
		);
		$_SESSION['cart'] = $cart;
	}*/
	
	echo(json_encode($_SESSION['cart']));
?>