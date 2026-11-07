const storeCatalog = {
  food: [
    { id: 'jollibee', name: 'Jollibee', icon: '🍔', delivery: '15-20 min', description: 'Classic Filipino favorites', products: [
      { id: 'jc1', name: 'Chickenjoy', price: 89, emoji: '🍗' },
      { id: 'jc2', name: 'Jolly Spaghetti', price: 99, emoji: '🍝' },
      { id: 'jc3', name: 'Burger Steak', price: 119, emoji: '🍔' },
      { id: 'jc4', name: 'Yumburger', price: 49, emoji: '🍔' }
    ] },
    { id: 'greenwich', name: 'Greenwich', icon: '🍕', delivery: '18-25 min', description: 'Pizza and pasta', products: [
      { id: 'gr1', name: 'Baked Mac', price: 109, emoji: '🍝' },
      { id: 'gr2', name: 'Pizza Combo', price: 249, emoji: '🍕' },
      { id: 'gr3', name: 'Classic Lasagna', price: 179, emoji: '🍝' },
      { id: 'gr4', name: 'Chicken Alfredo', price: 159, emoji: '🍝' }
    ] },
    { id: 'chowking', name: 'Chowking', icon: '🥢', delivery: '12-18 min', description: 'Rice meals and noodles', products: [
      { id: 'ck1', name: 'Chao Fan', price: 89, emoji: '🥡' },
      { id: 'ck2', name: 'Noodles', price: 79, emoji: '🍜' },
      { id: 'ck3', name: 'Pork Siomai', price: 69, emoji: '🥟' },
      { id: 'ck4', name: 'Family Meal', price: 349, emoji: '🥘' }
    ] },
    { id: 'mcdonalds', name: 'McDonald\'s', icon: '🍟', delivery: '15-20 min', description: 'Fast food classics', products: [
      { id: 'mc1', name: 'Big Mac', price: 141, emoji: '🍔' },
      { id: 'mc2', name: 'Fries', price: 59, emoji: '🍟' },
      { id: 'mc3', name: 'Coke Float', price: 69, emoji: '🥤' },
      { id: 'mc4', name: 'Chicken McDo', price: 109, emoji: '🍗' }
    ] },
    { id: 'red-ribbon', name: 'Red Ribbon', icon: '🎂', delivery: '20-30 min', description: 'Cakes and comfort food', products: [
      { id: 'rr1', name: 'Black Forest', price: 69, emoji: '🍰' },
      { id: 'rr2', name: 'Chicken Roll', price: 80, emoji: '🍗' },
      { id: 'rr3', name: 'Cheese Cake', price: 95, emoji: '🍰' },
      { id: 'rr4', name: 'Bites Box', price: 179, emoji: '🧁' }
    ] },
    { id: 'mix-match', name: 'Mix & Match', icon: '🥗', delivery: '14-18 min', description: 'Healthy bowls and rice', products: [
      { id: 'mm1', name: 'Chicken Bowl', price: 129, emoji: '🥗' },
      { id: 'mm2', name: 'Veggie Rice', price: 99, emoji: '🥬' },
      { id: 'mm3', name: 'Fruit Tea', price: 60, emoji: '🍹' },
      { id: 'mm4', name: 'Protein Set', price: 189, emoji: '🥗' }
    ] },
    { id: 'rahayo', name: 'Rahayo', icon: '🥘', delivery: '20-25 min', description: 'Pakbet and local dishes', products: [
      { id: 'rh1', name: 'Adobo Bowl', price: 149, emoji: '🍛' },
      { id: 'rh2', name: 'Pork Sisig', price: 179, emoji: '🍲' },
      { id: 'rh3', name: 'Laing', price: 129, emoji: '🥬' },
      { id: 'rh4', name: 'Rice & Egg', price: 69, emoji: '🍳' }
    ] },
    { id: 'kudos', name: 'Kudos', icon: '☕', delivery: '10-15 min', description: 'Coffee and snacks', products: [
      { id: 'kd1', name: 'KBL Coffee', price: 75, emoji: '☕' },
      { id: 'kd2', name: 'Mochi Donut', price: 65, emoji: '🍩' },
      { id: 'kd3', name: 'Crispy Chicken', price: 120, emoji: '🍗' },
      { id: 'kd4', name: 'Milk Tea', price: 89, emoji: '🧋' }
    ] }
  ],
  grocery: [
    { id: 'farmers-market', name: 'Farmers Basket', icon: '🥬', delivery: '30-40 min', description: 'Fresh groceries and produce', products: [
      { id: 'fb1', name: 'Rice 5kg', price: 245, emoji: '🌾' },
      { id: 'fb2', name: 'Chicken Broiler', price: 180, emoji: '🐔' },
      { id: 'fb3', name: 'Fruit Pack', price: 260, emoji: '🍇' },
      { id: 'fb4', name: 'Vegetable Mix', price: 120, emoji: '🥕' }
    ] },
    { id: 'everyday', name: 'Everyday Mart', icon: '🛒', delivery: '15-20 min', description: 'Daily essentials', products: [
      { id: 'em1', name: 'Toiletries', price: 125, emoji: '🧴' },
      { id: 'em2', name: 'Drinking Water', price: 45, emoji: '💧' },
      { id: 'em3', name: 'Laundry Pack', price: 150, emoji: '🧺' },
      { id: 'em4', name: 'Snacks Bundle', price: 110, emoji: '🥨' }
    ] }
  ],
  market: [
    { id: 'public-market', name: 'Public Market', icon: '🌿', delivery: '25-35 min', description: 'Fresh market picks', products: [
      { id: 'pm1', name: 'Fish Basket', price: 210, emoji: '🐟' },
      { id: 'pm2', name: 'Banana Bundle', price: 75, emoji: '🍌' },
      { id: 'pm3', name: 'Eggs 30 pcs', price: 140, emoji: '🥚' },
      { id: 'pm4', name: 'Herbs Pack', price: 80, emoji: '🌱' }
    ] }
  ],
  pharmacy: [
    { id: 'medico', name: 'Medico Plus', icon: '💊', delivery: '15-25 min', description: 'Pharmacy and wellness', products: [
      { id: 'md1', name: 'Vitamin C', price: 120, emoji: '💊' },
      { id: 'md2', name: 'Pain Relief', price: 85, emoji: '💉' },
      { id: 'md3', name: 'Hand Sanitizer', price: 60, emoji: '🧴' },
      { id: 'md4', name: 'First Aid Kit', price: 230, emoji: '🩹' }
    ] }
  ],
  mall: [
    { id: 'city-mall', name: 'City Mall', icon: '🛍️', delivery: '20-30 min', description: 'Retail essentials', products: [
      { id: 'cm1', name: 'Smart Watch', price: 1599, emoji: '⌚' },
      { id: 'cm2', name: 'Socks Bundle', price: 110, emoji: '🧦' },
      { id: 'cm3', name: 'Phone Cable', price: 190, emoji: '🔌' },
      { id: 'cm4', name: 'Travel Kit', price: 320, emoji: '🧳' }
    ] }
  ]
};

const state = {
  category: 'food',
  storeId: 'jollibee',
  cart: [],
  tickets: 3,
  wallet: 420,
  spinHistory: []
};

const categoryButtons = document.querySelectorAll('.category-btn');
const storeList = document.getElementById('store-list');
const menuItems = document.getElementById('menu-items');
const storeName = document.getElementById('store-name');
const cartCount = document.getElementById('cart-count');
const ticketCount = document.getElementById('ticket-count');
const checkoutSubtotal = document.getElementById('checkout-subtotal');
const checkoutTotal = document.getElementById('checkout-total');
const checkoutModal = document.getElementById('checkout-modal');
const modalOverlay = document.getElementById('modal-overlay');
const floatingChat = document.getElementById('floating-chat');
const askChoyBtn = document.getElementById('ask-choy-btn');
const voucherPanel = document.getElementById('voucher-panel');
const gamesPanel = document.getElementById('games-panel');
const mapPanel = document.getElementById('map-panel');
const spinResult = document.getElementById('spin-result');

function formatPeso(value) {
  return `₱ ${value.toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function playSound() {
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) return;

  const audioCtx = new AudioCtx();
  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();

  oscillator.type = 'triangle';
  oscillator.frequency.setValueAtTime(520, audioCtx.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(760, audioCtx.currentTime + 0.12);
  gainNode.gain.setValueAtTime(0.0001, audioCtx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.08, audioCtx.currentTime + 0.02);
  gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.18);

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);
  oscillator.start();
  oscillator.stop(audioCtx.currentTime + 0.2);
}

function renderStores() {
  const stores = storeCatalog[state.category] || [];
  storeList.innerHTML = stores.map((store) => `
    <button class="store-card ${store.id === state.storeId ? 'active' : ''}" data-store-id="${store.id}">
      <div class="store-logo">${store.icon}</div>
      <div>
        <h5>${store.name}</h5>
        <span>${store.delivery}</span>
      </div>
    </button>
  `).join('');

  document.querySelectorAll('.store-card').forEach((card) => {
    card.addEventListener('click', () => {
      state.storeId = card.dataset.storeId;
      renderStores();
      renderMenu();
      playSound();
    });
  });
}

function renderMenu() {
  const stores = storeCatalog[state.category] || [];
  const selectedStore = stores.find((store) => store.id === state.storeId) || stores[0];

  if (!selectedStore) return;

  storeName.textContent = selectedStore.name;
  menuItems.innerHTML = selectedStore.products.map((product) => `
    <article class="product-card">
      <div class="product-image">${product.emoji}</div>
      <h5>${product.name}</h5>
      <div class="product-meta">
        <span class="price-tag">${formatPeso(product.price)}</span>
        <button class="add-btn" data-product-id="${product.id}">Add</button>
      </div>
    </article>
  `).join('');

  document.querySelectorAll('.add-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const product = selectedStore.products.find((item) => item.id === button.dataset.productId);
      if (!product) return;
      const existing = state.cart.find((item) => item.id === product.id);
      if (existing) {
        existing.qty += 1;
      } else {
        state.cart.push({ ...product, qty: 1, store: selectedStore.name });
      }
      renderCart();
      playSound();
    });
  });
}

function renderCart() {
  const total = state.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const totalWithFee = total + 25;
  cartCount.textContent = state.cart.reduce((sum, item) => sum + item.qty, 0);
  checkoutSubtotal.textContent = formatPeso(total);
  checkoutTotal.textContent = formatPeso(totalWithFee);
}

function switchView(targetId) {
  document.querySelectorAll('.view').forEach((view) => view.classList.toggle('active', view.id === targetId));
  document.querySelectorAll('.nav-tab').forEach((tab) => tab.classList.toggle('active', tab.dataset.target === targetId));
}

function bindNavTabs() {
  document.querySelectorAll('.nav-tab').forEach((tab) => {
    tab.addEventListener('click', () => switchView(tab.dataset.target));
  });
}

function bindCategoryButtons() {
  categoryButtons.forEach((button) => {
    button.addEventListener('click', () => {
      state.category = button.dataset.category;
      const firstStore = (storeCatalog[state.category] || [])[0];
      if (firstStore) state.storeId = firstStore.id;
      document.querySelectorAll('.category-btn').forEach((item) => item.classList.toggle('active', item === button));
      renderStores();
      renderMenu();
      playSound();
    });
  });
}

function openCheckout() {
  if (!state.cart.length) {
    alert('Your cart is empty. Add items first.');
    return;
  }
  checkoutModal.classList.remove('hidden');
  modalOverlay.classList.remove('hidden');
}

function closeCheckout() {
  checkoutModal.classList.add('hidden');
  modalOverlay.classList.add('hidden');
}

function openPanel(panel) {
  panel.classList.remove('hidden');
}

function closePanel(panel) {
  panel.classList.add('hidden');
}

function initPromos() {
  const slides = [...document.querySelectorAll('.promo-slide')];
  let index = 0;
  setInterval(() => {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
  }, 3000);
}

function bindOrders() {
  document.querySelectorAll('.order-action').forEach((button) => {
    button.addEventListener('click', () => {
      const action = button.dataset.order;
      if (action === 'accept' || action === 'pickup' || action === 'transit' || action === 'proof') {
        playSound();
        button.textContent = action === 'accept' ? 'Accepted' : action === 'pickup' ? 'Pickup sent' : action === 'transit' ? 'In Transit' : 'Proof saved';
      }
    });
  });

  document.getElementById('sound-order-btn').addEventListener('click', () => playSound());
}

function bindCommonActions() {
  document.getElementById('focus-cart').addEventListener('click', openCheckout);
  document.getElementById('place-order-btn').addEventListener('click', () => {
    alert('Order placed successfully. Rider assignment in progress.');
    closeCheckout();
  });
  document.querySelector('.close-modal').addEventListener('click', closeCheckout);
  modalOverlay.addEventListener('click', closeCheckout);

  document.querySelector('.close-chat').addEventListener('click', () => floatingChat.classList.add('hidden'));
  askChoyBtn.addEventListener('click', () => {
    floatingChat.classList.remove('hidden');
    playSound();
  });

  document.querySelector('[data-feature="voucher"]').addEventListener('click', () => openPanel(voucherPanel));
  document.querySelector('[data-feature="games"]').addEventListener('click', () => openPanel(gamesPanel));
  document.querySelector('[data-feature="map"]').addEventListener('click', () => openPanel(mapPanel));
  document.querySelector('[data-feature="support"]').addEventListener('click', () => floatingChat.classList.remove('hidden'));

  document.querySelectorAll('.close-side').forEach((button) => {
    button.addEventListener('click', () => {
      const panel = button.closest('.side-panel');
      if (panel) closePanel(panel);
    });
  });
}

function spinWheel() {
  if (state.tickets <= 0) {
    spinResult.textContent = 'No tickets left. Earn more by ordering at least ₱500.';
    return;
  }

  state.tickets -= 1;
  ticketCount.textContent = state.tickets;

  const rewards = [
    { label: '₱2 Choy Wallet', weight: 70 },
    { label: 'Try Again', weight: 15 },
    { label: '₱5 Choy Wallet', weight: 5 },
    { label: '10% OFF', weight: 5 },
    { label: 'Free Delivery', weight: 5 }
  ];

  const totalWeight = rewards.reduce((sum, item) => sum + item.weight, 0);
  let random = Math.random() * totalWeight;
  let chosen = rewards[0];

  for (const reward of rewards) {
    random -= reward.weight;
    if (random <= 0) {
      chosen = reward;
      break;
    }
  }

  state.spinHistory.push(chosen.label);
  spinResult.textContent = `You won: ${chosen.label}`;

  if (chosen.label === '₱2 Choy Wallet') {
    state.wallet += 2;
  }

  if (chosen.label === '₱5 Choy Wallet') {
    state.wallet += 5;
  }

  if (chosen.label === '10% OFF') {
    spinResult.textContent = `${spinResult.textContent} • coupon added to your vouchers`;
  }

  if (chosen.label === 'Free Delivery') {
    spinResult.textContent = `${spinResult.textContent} • one-time code ready`;
  }

  playSound();
}

function bindSpinGame() {
  document.getElementById('spin-button').addEventListener('click', spinWheel);
}

function init() {
  bindNavTabs();
  bindCategoryButtons();
  bindCommonActions();
  bindOrders();
  bindSpinGame();
  initPromos();
  renderStores();
  renderMenu();
  renderCart();
  ticketCount.textContent = state.tickets;
}

init();
