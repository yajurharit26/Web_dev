let cart = [];

function updateCart() {
  const cartList = document.getElementById("cartList");
  cartList.innerHTML = "";
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    cartList.appendChild(li);
  });
}

function addProduct(product) {
  if (product && product.trim()) {
    cart.push(product.trim());
    updateCart();
  }
}

function addProductFromInput() {
  const input = document.getElementById("productInput");
  const product = input.value.trim();
  if (product) {
    cart.push(product);
    updateCart();
    input.value = "";
  }
}

function placeOrder() {
  const orderSummaryElem = document.getElementById("orderSummaryBox");
  if (cart.length === 0) {
    orderSummaryElem.innerHTML = "<span>Cart is empty!</span>";
    return;
  }
  const result = successfulOrder(cart);
  orderSummaryElem.innerHTML = `
    <div class="order-id">Order ID: ${result.orderId}</div>
    <div>Total Products: <b>${result.totalProducts}</b></div>
    <div>Total Amount: <b>₹${result.totalAmount}</b></div>
    <div>Products:
      <ul>
        ${result.products.map((p) => `<li>${p}</li>`).join("")}
      </ul>
    </div>
    <div>Payment Status: <span class="success">${
      result.paymentStatus
    }</span></div>
    <div class="success">${result.message}</div>
  `;
  cart = [];
  updateCart();
}

function orderDetail(cart) {
  // 1. Total no of products
  // 2. Total Amount of Products nos * 1000
  const totalProducts = cart.length;
  const totalAmount = totalProducts * 1000;
  return {
    totalProducts,
    totalAmount,
    products: cart,
  };
}

function orderSummary(cart) {
  // total price and total product
  // then generated orderId
  const { totalProducts, totalAmount, products } = orderDetail(cart);
  const orderId = "ORD" + Math.floor(Math.random() * 1000000);
  return {
    orderId,
    totalProducts,
    totalAmount,
    products,
  };
}

function paymentGateway(order) {
  // orderId, product details and price .. Payment is successful
  return {
    ...order,
    paymentStatus: "Payment Successful",
  };
}

function successfulOrder(cart) {
  // it will give all the details about the payment product name and everything
  const summary = orderSummary(cart);
  const payment = paymentGateway(summary);
  return {
    ...payment,
    message: "Order placed successfully!",
  };
}
