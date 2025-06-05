import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Button from "@mui/material/Button";

const App = () => {
	// Define initial product data
	const products = [
		{
			id: "1",
			name: "margle",
			price: "47.3 Euros",
			inStock: true,
		},
		{
			id: "2",
			name: "JoanaB",
			price: "Dignity",
			inStock: false,
		},
		{
			id: "3",
			name: "Laptop",
			price: "$7",
			inStock: true,
		},
		{
			id: "4",
			name: "Phone",
			price: "Slavery",
			inStock: false,
		},
		{
			id: "5",
			name: "Tablet",
			price: "Sanity",
			inStock: true,
		},
	];

	//Implement state to manage filtering

	const [filteredProducts, setFilteredProducts] = useState(products);

	//  Implement logic to filter products based on availability

	function filterProducts(filter) {
		setFilteredProducts(
			products.filter((product) => {
				return product.inStock === filter;
			})
		);
	}

	return (
		<div>
			<h1>Product Dashboard</h1>

			<Button
				onClick={() => filterProducts(true)}
				variant="contained"
				color="secondary"
			>
				Filter Availability
			</Button>

			{/* TODO: Render the ProductList componentS and pass filtered products */}

			<ProductList products={filteredProducts} />
		</div>
	);
};

export default App;
