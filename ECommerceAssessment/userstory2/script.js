let allProducts = [];
let sortAsc = true;

async function fetchProducts() {
  const loading = document.getElementById("loading");
  const productList = document.getElementById("productList");
  
  try {
    loading.style.display = "block";

    // Try local JSON first
    let response = await fetch("products.json");
    if (!response.ok) throw new Error("Local fetch blocked");

    const data = await response.json();
    allProducts = data;
    console.log("Loaded from local products.json ");
    loading.style.display = "none";
    renderProducts(allProducts);

  } catch (err) {
    console.warn("Local file fetch failed , switching to online API...");
    try {
      //  Fallback: FakeStoreAPI
      const response2 = await fetch("https://fakestoreapi.com/products");
      if (!response2.ok) throw new Error("API error");
      const data2 = await response2.json();

      // Convert FakeStore data to match our structure
      allProducts = data2.map(item => ({
        id: item.id,
        name: item.title,
        category: item.category.includes("men") || item.category.includes("women") ? "fashion" : "electronics",
        price: Math.round(item.price * 80), // Convert to ₹
        image: item.image
      }));

      loading.style.display = "none";
      renderProducts(allProducts);
    } catch (apiErr) {
      console.error("Both sources failed:", apiErr);
      loading.innerHTML = `<p class='text-danger fw-bold'>Failed to load products. Please try again later.</p>`;
    }
  }

  // Attach events after load (works for both local & API)
  document.getElementById("categoryFilter").addEventListener("change", filterProducts);
  document.getElementById("priceFilter").addEventListener("change", filterProducts);
  document.getElementById("sortBtn").addEventListener("click", sortByPrice);
}

function renderProducts(products) {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";

  if (products.length === 0) {
    productList.innerHTML = `<p class="text-center text-muted">No products found.</p>`;
    return;
  }

  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "col-sm-6 col-md-4 col-lg-3 mb-4";
    card.innerHTML = `
      <div class="card product-card h-100">
        <img src="${p.image}" class="card-img-top" alt="${p.name}" style="height:200px;object-fit:cover;">
        <div class="card-body d-flex flex-column">
          <h6 class="card-title">${p.name}</h6>
          <p class="text-muted mb-1">${p.category}</p>
          <h5 class="text-success mt-auto">₹${p.price}</h5>
        </div>
      </div>`;
    productList.appendChild(card);
  });
}

function filterProducts() {
  const categoryVal = document.getElementById("categoryFilter").value;
  const priceVal = document.getElementById("priceFilter").value;

  let filtered = allProducts.filter(p => {
    const categoryMatch = categoryVal === "all" || p.category === categoryVal;
    const priceMatch =
      priceVal === "all" ||
      (priceVal === "low" && p.price < 1000) ||
      (priceVal === "medium" && p.price >= 1000 && p.price <= 5000) ||
      (priceVal === "high" && p.price > 5000);
    return categoryMatch && priceMatch;
  });

  renderProducts(filtered);
}

function sortByPrice() {
  sortAsc = !sortAsc;
  const sorted = [...allProducts].sort((a, b) =>
    sortAsc ? a.price - b.price : b.price - a.price
  );
  renderProducts(sorted);
}

fetchProducts();
