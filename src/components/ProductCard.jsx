import React from "react";
import styles from "../styles/ProductCard.module.css";

const ProductCard = ({ name, price, inStock }) => {

  function remove

	return (
		<div
			className={`${styles.card} ${
				inStock ? styles.inStock : styles.outOfStockClass
			}`}
		>
			{/*/\ Apply conditional class to <li> above for out-of-stock items */}

			{/*Display product name */}

			<h3>{name}</h3>

			{/* Display product price */}
			<h4>Price: {price}</h4>

			{/* TODO: Show if the product is in stock or out of stock */}
			<p>{inStock ? "Product is in stock" : "Produxt is out of stock"}</p>
		</div>
	);
};

export default ProductCard;
