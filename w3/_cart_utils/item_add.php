<?php
	include 'cart_set.php';
	
	if(isset($_POST['id'])) {
		$id = $_POST['id'];
	}

	$product = (object) array('id'=>$id, 'cant'=>1);
	array_push($_SESSION['cart']->prod_list, $product);

	/*if(array_key_exists('id',$_SESSION['cart']->prod_list)){
		if(array_search($id, array_column($_SESSION['cart']->prod_list, 'id'))){
			print_r(current($_SESSION['cart']->prod_list));
		} else {
			$product = (object) array('id'=>$id, 'cant'=>1);
			array_push($_SESSION['cart']->prod_list, $product);
		}
	} else {
		$product = (object) array('id'=>$id, 'cant'=>1);
		array_push($_SESSION['cart']->prod_list, $product);
	}*/
	
	print_r($_SESSION);
	/*if(isset($_SESSION['cart'])) {
		$prodCnt = count($_SESSION['cart']->product);
		$product = (object) array('id'=>$prodCnt, 'description'=>"nuevo producto {$prodCnt}");

		array_push($_SESSION['cart']->product, $product);
		
		echo(json_encode($product));
	}*/
?>

Array (	[cart] => stdClass Object (
	 [prod_list] => Array (
	 	[0] => stdClass Object ( [id] => 1 [cant] => 1 )
	 	[1] => stdClass Object ( [id] => 1 [cant] => 1 )
	 )
))
2