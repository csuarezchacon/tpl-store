<?php
	session_start();

	if(!isset($_SESSION['cart'])) {
		$cart = (object) array(
			'prod_list' => array()
		);
		
		$_SESSION['cart'] = $cart;
	}
?>
