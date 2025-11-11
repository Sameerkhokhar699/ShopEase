// JS for home page
const cartCount = document.getElementById("cart-count");
  const buttons = document.querySelectorAll(".add-to-cart");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Visual feedback on button
      btn.innerText = "✅ Added!";
      btn.classList.add("bg-green-600");
      setTimeout(() => {
        btn.innerText = "🛒 Add";
        btn.classList.remove("bg-green-600");
      }, 1500);

      // Update cart counter
      let currentCount = parseInt(cartCount.innerText);
      cartCount.innerText = currentCount + 1;

      // Small bounce animation
      cartCount.classList.add("scale-125");
      setTimeout(() => cartCount.classList.remove("scale-125"), 300);
    });
  });
  
  const menuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
// JS for cart page 

// JS for about page
// JS for products page

// JS for checkout page
// JS for contact page
// JS for order summary page

// checkout functionality added
// document.addEventListener("DOMContentLoaded", () => {
//   const cartContainer = document.getElementById("cartItemsContainer");
//   const totalPriceElement = document.getElementById("cartTotal");
//   const cartCountElement = document.getElementById("cartCount");
//   const checkoutBtn = document.querySelector(".checkout-btn"); // Add class to button

//   let cart = JSON.parse(localStorage.getItem("cart")) || [];

//   function renderCart() {
//     cartContainer.innerHTML = "";
//     let total = 0;

//     if (cart.length === 0) {
//       cartContainer.innerHTML = `
//         <div class="text-center py-16 bg-white rounded-3xl shadow-md border border-gray-100">
//           <p class="text-gray-500 text-lg">Your cart is empty 😔</p>
//           <a href="products.html" class="text-indigo-600 font-semibold mt-4 inline-block hover:underline">
//             Continue Shopping →
//           </a>
//         </div>`;
//       totalPriceElement.textContent = "$0.00";
//       cartCountElement.textContent = "0";
//       return;
//     }

//     cart.forEach((item, index) => {
//       total += item.price;
//       const itemHTML = `
//         <div class="flex items-center justify-between bg-white border border-gray-100 rounded-2xl p-5 shadow-md hover:shadow-xl transition duration-300">
//           <div class="flex items-center space-x-6">
//             <img src="${item.image}" alt="${item.name}" class="w-24 h-24 object-cover rounded-xl border border-gray-100">
//             <div>
//               <h4 class="text-lg font-semibold text-gray-800">${item.name}</h4>
//               <p class="text-indigo-600 font-bold mt-1">$${item.price.toFixed(2)}</p>
//             </div>
//           </div>
//           <button class="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-red-600 transition duration-300"
//             onclick="removeItem(${index})">
//             Remove
//           </button>
//         </div>`;
//       cartContainer.insertAdjacentHTML("beforeend", itemHTML);
//     });

//     totalPriceElement.textContent = `$${total.toFixed(2)}`;
//     cartCountElement.textContent = cart.length;
//   }

//   window.removeItem = (index) => {
//     cart.splice(index, 1);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     renderCart();
//   };

//   // ✅ Proceed to Checkout functionality
//   checkoutBtn?.addEventListener("click", () => {
//     if (cart.length === 0) {
//       alert("Your cart is empty!");
//       return;
//     }
//     window.location.href = "checkout.html";
//   });

//   renderCart();
// });

// // order summary page functionality added

//     const orderSummary = document.getElementById("orderSummary");
//     const summaryTotal = document.getElementById("summaryTotal");
//     const checkoutForm = document.getElementById("checkoutForm");

//     let cart = JSON.parse(localStorage.getItem("cart")) || [];

//     function renderSummary() {
//       orderSummary.innerHTML = "";
//       let total = 0;

//       if (cart.length === 0) {
//         orderSummary.innerHTML = `<p class='text-gray-500'>No items in your cart.</p>`;
//         summaryTotal.textContent = "$0.00";
//         return;
//       }

//       cart.forEach(item => {
//         total += item.price;
//         const itemEl = `
//           <div class="flex justify-between items-center border-b pb-2">
//             <div>
//               <h4 class="font-medium">${item.name}</h4>
//               <p class="text-sm text-gray-500">$${item.price.toFixed(2)}</p>
//             </div>
//           </div>`;
//         orderSummary.insertAdjacentHTML("beforeend", itemEl);
//       });
//       summaryTotal.textContent = `$${total.toFixed(2)}`;
//     }

//     checkoutForm.addEventListener("submit", (e) => {
//       e.preventDefault();
//       alert("✅ Order placed successfully!");
//       localStorage.removeItem("cart");
//       window.location.href = "home.html";
//     });

//     renderSummary();
// toast notification function
// ====================
// TOAST NOTIFICATION FUNCTION
// ====================
function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  const toast = document.createElement("div");

  // Define colors & icons based on type
  let bgColor, icon;
  switch (type) {
    case "success":
      bgColor = "bg-green-100 border-green-400 text-green-800";
      icon = `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M5 13l4 4L19 7" />
        </svg>`;
      break;
    case "error":
      bgColor = "bg-red-100 border-red-400 text-red-800";
      icon = `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M6 18L18 6M6 6l12 12" />
        </svg>`;
      break;
    default:
      bgColor = "bg-blue-100 border-blue-400 text-blue-800";
      icon = `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M13 16h-1v-4h-1m1-4h.01M12 20h.01" />
        </svg>`;
  }

  // ✅ Fully responsive, text-fitting toast layout
  toast.innerHTML = `
    <div class="flex items-start gap-4 ${bgColor} px-6 py-5 rounded-2xl shadow-2xl border max-w-[90vw] sm:max-w-[550px] min-w-[320px] backdrop-blur-md break-words whitespace-normal">
      <div class="p-2 rounded-full bg-white shadow-md flex-shrink-0">${icon}</div>
      <p class="text-base font-semibold leading-snug flex-1">${message}</p>
    </div>
  `;

  toast.className =
    "opacity-0 translate-x-8 translate-y-2 scale-95 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]";

  container.appendChild(toast);

  // Bounce-in animation
  setTimeout(() => {
    toast.classList.remove("opacity-0", "translate-x-8", "translate-y-2", "scale-95");
    toast.classList.add("opacity-100", "translate-x-0", "translate-y-0", "scale-100");
  }, 50);

  // Fade-out after 4s
  setTimeout(() => {
    toast.classList.remove("opacity-100", "translate-x-0", "scale-100");
    toast.classList.add("opacity-0", "translate-x-5", "scale-95");
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}
