<?php
	include 'cart_set.php';
	
	if(isset($_POST['id'])) {
		$id = $_POST['id'];
	}

	$cant = count($_SESSION['cart']->prod_list);
	for ($index=0; $index < $cant; $index++) { 
		echo($cant . " " . $index . " " . $id);
		if ($_SESSION['cart']->prod_list[$index]->id == $id) {
			unset($_SESSION['cart']->prod_list[$index]);
			break;
		}
	}

	$_SESSION['cart']->prod_list = array_values($_SESSION['cart']->prod_list);
?>