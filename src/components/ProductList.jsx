import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
	// Check if the product list is empty and display a message if needed
	if (Object.keys(products).length === 0) {
		console.log("ERROR; no products found");
		return <p>No products found</p>;
	}

	return (
		<div>
			{/* TODO: Iterate over the products array and render a ProductCard for each product */}
			{products.map((product) => (
				<ProductCard
					key={product.id}
					name={product.name}
					price={product.price}
					inStock={product.inStock}
				/>
			))}
		</div>
	);
};

export default ProductList;
