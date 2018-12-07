<?php
	include 'cart_set.php';
	
	if(isset($_POST['id'])) {
		$id = $_POST['id'];
	}

	echo $id;
	if(count($_SESSION['cart']->prod_list) > 0){
		$itemId = array_search($id, array_column($_SESSION['cart']->prod_list, 'id'));
		if($itemId >= 0){
			$_SESSION['cart']->prod_list[$itemId]->cant = $_SESSION['cart']->prod_list[$itemId]->cant + 1;
		} else {
			$product = (object) array('id'=>$id, 'cant'=>1);
			array_push($_SESSION['cart']->prod_list, $product);
		}
	} else {
		$product = (object) array('id'=>$id, 'cant'=>1);
		array_push($_SESSION['cart']->prod_list, $product);
	}
	
	print_r($_SESSION);
	/*if(isset($_SESSION['cart'])) {
		$prodCnt = count($_SESSION['cart']->product);
		$product = (object) array('id'=>$prodCnt, 'description'=>"nuevo producto {$prodCnt}");

		array_push($_SESSION['cart']->product, $product);
		
		echo(json_encode($product));
	}*/
?>
