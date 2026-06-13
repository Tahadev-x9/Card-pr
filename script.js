// Store product info and navigate to detail page
function goToProduct(name, price, image, description) {
  const product = { name, price, image, description };
  localStorage.setItem("selectedProduct", JSON.stringify(product));
  window.location.href = "product.html";
}

// Populate product detail page on load
window.addEventListener("DOMContentLoaded", () => {
  const nameEl = document.getElementById("productName");
  if (!nameEl) return;

  const raw = localStorage.getItem("selectedProduct");
  if (!raw) return;

  const product = JSON.parse(raw);

  nameEl.textContent = product.name;
  document.getElementById("productPrice").textContent = product.price;
  document.getElementById("productImage").src = product.image;
  document.getElementById("productImage").alt = product.name;
  document.getElementById("productDescription").textContent = product.description;

  // Quantity selector
  let qty = 1;
  const qtyValue = document.getElementById("qtyValue");
  const qtyMinus = document.getElementById("qtyMinus");
  const qtyPlus = document.getElementById("qtyPlus");

  qtyMinus.addEventListener("click", () => {
    if (qty > 1) {
      qty--;
      qtyValue.textContent = qty;
    }
  });

  qtyPlus.addEventListener("click", () => {
    qty++;
    qtyValue.textContent = qty;
  });

  // Cart and buy actions
  document.querySelector(".cart-btn").addEventListener("click", () => {
    alert(`Added ${qty} × ${product.name} to your cart.`);
  });

  document.querySelector(".buy-btn").addEventListener("click", () => {
    alert(`Proceeding to checkout with ${qty} × ${product.name}.`);
  });
});
