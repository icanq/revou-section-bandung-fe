const API_URL = `http://localhost:3000`;

async function getProducts() {
	try {
		const response = await fetch(`${API_URL}/products`);
		const products = await response.json();
		const productContainer = document.getElementById("product-container");
		console.log(products);
		products.forEach((product) => {
			const newProductList = document.createElement("li");
			newProductList.textContent = `${product.name} - ${product.price}`;
			productContainer.appendChild(newProductList);
		});
	} catch (error) {
		console.log(error);
	}
}

getProducts();
