<?php
	include 'cart_set.php';

	if(!isset($_SESSION['cart'])) {
		$prodList = (object) array(
			'prod_list' => array()
		);
		$_SESSION['cart'] = $prodList;
	}
	
	echo(json_encode($_SESSION['cart']->prod_list));
?>