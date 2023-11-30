const API_URL = `http://localhost:3000`;

async function getProducts() {
	try {
		const response = await fetch(`${API_URL}/products`);
		const products = await response.json();
		const productList = document.getElementById("productList");
		products.forEach((product) => {
			const productCard = document.createElement("div");
			productCard.className = "product-card";

			productCard.innerHTML = `
				<img src="${product.imageUrl}" alt="${product.name}" />
				<h3>${product.name}</h3>
				<p>ID: ${product.id}</p>
				<p>catalog number: ${product.catalog_id}</p>
				<p>price: ${product.price}</p>
			`;

			productList.appendChild(productCard);
		});
	} catch (error) {
		console.log(error);
	}
}

getProducts();
