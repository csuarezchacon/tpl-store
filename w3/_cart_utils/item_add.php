<?php
	include 'cart_set.php';
	
	if(isset($_POST['id'])) {
		$id = $_POST['id'];
	}
	
	$cant = count($_SESSION['cart']->prod_list);
	$newRow = TRUE;
	echo($cant . " " . $index . " " . $id);
	if ($cant > 0) {
		for ($index=0; $index <= $cant; $index++) { 
			if ($_SESSION['cart']->prod_list[$index]->id == $id) {
				$_SESSION['cart']->prod_list[$index]->cant = $_SESSION['cart']->prod_list[$index]->cant + 1;
				$newRow = FALSE;
				break;
			}
		}
		if ($newRow) {
			$product = (object) array('id'=>$id, 'cant'=>1);
			array_push($_SESSION['cart']->prod_list, $product);
		}
	} else {
		$product = (object) array('id'=>$id, 'cant'=>1);
		array_push($_SESSION['cart']->prod_list, $product);
		$newRow = TRUE;
	}
	
	print_r($_SESSION);
?>
