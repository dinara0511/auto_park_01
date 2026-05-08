/* ============================================
   AUTOPARTS — MAIN JAVASCRIPT
   ============================================ */

// ——————————————————————————————————————
// DATA
// ——————————————————————————————————————

const PRODUCTS = [
  {
    id: 1,
    name: "Масло моторное Mobil 1 5W-30 4L",
    art: "MOB-5W30-4L",
    brand: "Mobil",
    price: 3200,
    oldPrice: 3800,
    cat: "oils",
    emoji: "🛢️",
    badge: "sale",
    stock: true,
  },
  {
    id: 2,
    name: "Фильтр масляный Mann W 712/95",
    art: "MAN-W71295",
    brand: "Mann",
    price: 850,
    oldPrice: null,
    cat: "filters",
    emoji: "🔧",
    badge: null,
    stock: true,
  },
  {
    id: 3,
    name: "Колодки тормозные Brembo P 28 009",
    art: "BRE-P28009",
    brand: "Brembo",
    price: 4500,
    oldPrice: 5200,
    cat: "brakes",
    emoji: "🔴",
    badge: "sale",
    stock: true,
  },
  {
    id: 4,
    name: "Свечи зажигания NGK BKR6E-11 (к-т 4шт)",
    art: "NGK-BKR6E11",
    brand: "NGK",
    price: 1200,
    oldPrice: null,
    cat: "spark",
    emoji: "⚡",
    badge: null,
    stock: true,
  },
  {
    id: 5,
    name: "Ремень ГРМ Gates T43250",
    art: "GAT-T43250",
    brand: "Gates",
    price: 2100,
    oldPrice: null,
    cat: "timing",
    emoji: "⚙️",
    badge: null,
    stock: true,
  },
  {
    id: 6,
    name: "Масло трансмиссионное Toyota ATF Type T-IV 4L",
    art: "TOY-ATF-T4",
    brand: "Toyota",
    price: 2800,
    oldPrice: 3200,
    cat: "oils",
    emoji: "🛢️",
    badge: "sale",
    stock: false,
  },
  {
    id: 7,
    name: "Фильтр воздушный Bosch S 0200",
    art: "BOS-S0200",
    brand: "Bosch",
    price: 650,
    oldPrice: null,
    cat: "filters",
    emoji: "🔧",
    badge: null,
    stock: true,
  },
  {
    id: 8,
    name: "Амортизатор Sachs 315 038",
    art: "SAC-315038",
    brand: "Sachs",
    price: 6800,
    oldPrice: 7500,
    cat: "suspension",
    emoji: "🔩",
    badge: "sale",
    stock: true,
  },
  {
    id: 9,
    name: "Масло моторное Castrol Edge 5W-40 4L",
    art: "CAS-5W40-4L",
    brand: "Castrol",
    price: 3500,
    oldPrice: null,
    cat: "oils",
    emoji: "🛢️",
    badge: "new",
    stock: true,
  },
  {
    id: 10,
    name: "Колодки тормозные Bosch BP1116",
    art: "BOS-BP1116",
    brand: "Bosch",
    price: 2900,
    oldPrice: null,
    cat: "brakes",
    emoji: "🔴",
    badge: "new",
    stock: true,
  },
  {
    id: 11,
    name: "Свечи iridium NGK ILKAR7L11 (4шт)",
    art: "NGK-ILK7L11",
    brand: "NGK",
    price: 3200,
    oldPrice: null,
    cat: "spark",
    emoji: "⚡",
    badge: "new",
    stock: true,
  },
  {
    id: 12,
    name: "Комплект ГРМ Gates KP1B018HD-1",
    art: "GAT-KP1B018",
    brand: "Gates",
    price: 8500,
    oldPrice: 9800,
    cat: "timing",
    emoji: "⚙️",
    badge: "new",
    stock: true,
  },
  {
    id: 13,
    name: "Набор ключей рожковых 8-24мм 8пр.",
    art: "TOOL-8KEY",
    brand: "Bosch",
    price: 1800,
    oldPrice: null,
    cat: "tools",
    emoji: "🔨",
    badge: null,
    stock: true,
  },
  {
    id: 14,
    name: "Фильтр топливный Bosch F026402076",
    art: "BOS-F402076",
    brand: "Bosch",
    price: 720,
    oldPrice: null,
    cat: "filters",
    emoji: "🔧",
    badge: "new",
    stock: true,
  },
  {
    id: 15,
    name: "Амортизатор KYB 341392",
    art: "KYB-341392",
    brand: "KYB",
    price: 4200,
    oldPrice: null,
    cat: "suspension",
    emoji: "🔩",
    badge: null,
    stock: true,
  },
  {
    id: 16,
    name: "Масло моторное Shell Helix Ultra 5W-40 4L",
    art: "SHE-5W40-4L",
    brand: "Shell",
    price: 4100,
    oldPrice: 4600,
    cat: "oils",
    emoji: "🛢️",
    badge: "sale",
    stock: true,
  },
];

const CAR_DATA = {
  Toyota: {
    models: ["Camry", "Corolla", "RAV4", "Land Cruiser", "Highlander", "Yaris"],
    years: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
  },
  BMW: {
    models: ["3 Series", "5 Series", "X5", "X3", "7 Series", "X1"],
    years: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
  },
  Mercedes: {
    models: ["C-Class", "E-Class", "GLC", "GLE", "A-Class", "S-Class"],
    years: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
  },
  Audi: {
    models: ["A4", "A6", "Q5", "Q7", "A3", "Q3"],
    years: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
  },
  Honda: {
    models: ["Civic", "Accord", "CR-V", "Pilot", "HR-V", "Fit"],
    years: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
  },
  Hyundai: {
    models: ["Sonata", "Elantra", "Tucson", "Santa Fe", "Creta", "i30"],
    years: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
  },
  KIA: {
    models: ["Optima", "Sportage", "Sorento", "Carnival", "Stinger", "K5"],
    years: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
  },
  Volkswagen: {
    models: ["Passat", "Golf", "Tiguan", "Touareg", "Jetta", "Polo"],
    years: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
  },
};

// ——————————————————————————————————————
// CART & WISHLIST (localStorage)
// ——————————————————————————————————————

function getCart() {
  try {
    return JSON.parse(localStorage.getItem("ap_cart") || "[]");
  } catch {
    return [];
  }
}
function saveCart(cart) {
  localStorage.setItem("ap_cart", JSON.stringify(cart));
  updateHeaderBadges();
}
function getWishlist() {
  try {
    return JSON.parse(localStorage.getItem("ap_wish") || "[]");
  } catch {
    return [];
  }
}
function saveWishlist(w) {
  localStorage.setItem("ap_wish", JSON.stringify(w));
  updateHeaderBadges();
}

function addToCart(productId) {
  const cart = getCart();
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return;
  const existing = cart.find((i) => i.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: productId, qty: 1 });
  }
  saveCart(cart);
  showToast(`✅ ${product.name.slice(0, 30)}... добавлен в корзину`);
}

function toggleWishlist(productId) {
  let wish = getWishlist();
  const idx = wish.indexOf(productId);
  if (idx > -1) {
    wish.splice(idx, 1);
    showToast("💔 Удалено из избранного");
  } else {
    wish.push(productId);
    showToast("❤️ Добавлено в избранное");
  }
  saveWishlist(wish);
  return idx === -1;
}

function updateHeaderBadges() {
  const cart = getCart();
  const wish = getWishlist();
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);
  const wishCount = wish.length;

  const cc = document.getElementById("cart-count");
  const wc = document.getElementById("wishlist-count");
  if (cc) {
    cc.textContent = cartCount;
    cc.classList.toggle("visible", cartCount > 0);
  }
  if (wc) {
    wc.textContent = wishCount;
    wc.classList.toggle("visible", wishCount > 0);
  }
}

// ——————————————————————————————————————
// TOAST
// ——————————————————————————————————————

let toastTimer;
function showToast(msg) {
  const t = document.getElementById("toast");
  if (!t) return;
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2800);
}

// ——————————————————————————————————————
// PRODUCT CARD RENDER
// ——————————————————————————————————————

function renderProductCard(product) {
  const wish = getWishlist();
  const isWished = wish.includes(product.id);
  const discount = product.oldPrice
    ? Math.round((1 - product.price / product.oldPrice) * 100)
    : 0;

  return `
    <div class="product-card" data-id="${product.id}">
      ${product.badge ? `<div class="product-card__badge product-card__badge--${product.badge}">${product.badge === "new" ? "Новинка" : "-" + discount + "%"}</div>` : ""}
      <button class="product-card__wish ${isWished ? "active" : ""}" onclick="handleWish(${product.id}, this)" title="В избранное">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="${isWished ? "currentColor" : "none"}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
      </button>
      <a href="product.html?id=${product.id}" class="product-card__img">
        <div class="product-card__img-placeholder">${product.emoji}</div>
      </a>
      <div class="product-card__body">
        <div class="product-card__art">${product.art}</div>
        <a href="product.html?id=${product.id}" class="product-card__name">${product.name}</a>
        <div class="product-card__footer">
          <div class="product-card__prices">
            <div class="product-card__price">${product.price.toLocaleString()} сом</div>
            ${product.oldPrice ? `<div class="product-card__old-price">${product.oldPrice.toLocaleString()} сом</div>` : ""}
          </div>
          <button class="btn-cart" onclick="handleAddToCart(${product.id}, this)" title="В корзину">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
          </button>
        </div>
      </div>
    </div>`;
}

function handleAddToCart(id, btn) {
  addToCart(id);
  btn.classList.add("added");
  btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>`;
  setTimeout(() => {
    btn.classList.remove("added");
    btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>`;
  }, 1500);
}

function handleWish(id, btn) {
  const added = toggleWishlist(id);
  btn.classList.toggle("active", added);
  btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="${added ? "currentColor" : "none"}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`;
}

// ——————————————————————————————————————
// HOMEPAGE
// ——————————————————————————————————————

function initHomepage() {
  const popularGrid = document.getElementById("popular-grid");
  const newGrid = document.getElementById("new-grid");
  if (!popularGrid) return;

  const popular = PRODUCTS.filter((p) => p.badge === "sale")
    .concat(PRODUCTS.filter((p) => !p.badge))
    .slice(0, 8);
  const newest = PRODUCTS.filter((p) => p.badge === "new").slice(0, 8);

  popularGrid.innerHTML = popular.map(renderProductCard).join("");
  newGrid.innerHTML = newest.map(renderProductCard).join("");
}

// ——————————————————————————————————————
// CAR SELECTOR
// ——————————————————————————————————————

function initCarSelector() {
  const makeEl = document.getElementById("car-make");
  const modelEl = document.getElementById("car-model");
  const yearEl = document.getElementById("car-year");
  const searchBtn = document.getElementById("car-search-btn");

  if (!makeEl) return;

  makeEl.addEventListener("change", () => {
    const make = makeEl.value;
    modelEl.innerHTML = '<option value="">Модель</option>';
    yearEl.innerHTML = '<option value="">Год</option>';
    if (make && CAR_DATA[make]) {
      CAR_DATA[make].models.forEach((m) => {
        modelEl.innerHTML += `<option>${m}</option>`;
      });
      modelEl.disabled = false;
    } else {
      modelEl.disabled = true;
      yearEl.disabled = true;
    }
  });

  modelEl.addEventListener("change", () => {
    const make = makeEl.value;
    yearEl.innerHTML = '<option value="">Год</option>';
    if (modelEl.value && CAR_DATA[make]) {
      CAR_DATA[make].years.forEach((y) => {
        yearEl.innerHTML += `<option>${y}</option>`;
      });
      yearEl.disabled = false;
    } else {
      yearEl.disabled = true;
    }
  });

  searchBtn.addEventListener("click", () => {
    const make = makeEl.value;
    const model = modelEl.value;
    const year = yearEl.value;
    if (make)
      window.location.href = `catalog.html?make=${make}&model=${model}&year=${year}`;
    else showToast("⚠️ Выберите марку автомобиля");
  });
}

// ——————————————————————————————————————
// MOBILE MENU
// ——————————————————————————————————————

function initMobileMenu() {
  const burger = document.getElementById("burger");
  const menu = document.getElementById("mobile-menu");
  if (!burger || !menu) return;
  burger.addEventListener("click", () => {
    menu.classList.toggle("open");
    const isOpen = menu.classList.contains("open");
    burger.querySelectorAll("span")[0].style.transform = isOpen
      ? "rotate(45deg) translate(5px, 5px)"
      : "";
    burger.querySelectorAll("span")[1].style.opacity = isOpen ? "0" : "";
    burger.querySelectorAll("span")[2].style.transform = isOpen
      ? "rotate(-45deg) translate(5px, -5px)"
      : "";
  });
}

// ——————————————————————————————————————
// SCROLL EFFECTS
// ——————————————————————————————————————

function initScrollEffects() {
  const header = document.getElementById("header");
  if (!header) return;
  window.addEventListener(
    "scroll",
    () => {
      if (window.scrollY > 10)
        header.style.boxShadow = "0 4px 32px rgba(0,0,0,0.4)";
      else header.style.boxShadow = "";
    },
    { passive: true },
  );

  // Fade in on scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.style.opacity = "1";
          e.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 },
  );

  document.querySelectorAll(".cat-card, .product-card").forEach((el, i) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = `opacity 0.4s ${i * 0.05}s ease, transform 0.4s ${i * 0.05}s ease`;
    observer.observe(el);
  });
}

// ——————————————————————————————————————
// CATALOG PAGE
// ——————————————————————————————————————

function initCatalog() {
  const grid = document.getElementById("catalog-grid");
  if (!grid) return;

  const params = new URLSearchParams(window.location.search);
  const catFilter = params.get("cat");
  const makeFilter = params.get("make");

  let filtered = [...PRODUCTS];
  if (catFilter) filtered = filtered.filter((p) => p.cat === catFilter);

  const countEl = document.getElementById("catalog-count");
  if (countEl)
    countEl.innerHTML = `Найдено <strong>${filtered.length}</strong> товаров`;

  const sortEl = document.getElementById("catalog-sort");
  if (sortEl) {
    sortEl.addEventListener("change", () => {
      if (sortEl.value === "price-asc")
        filtered.sort((a, b) => a.price - b.price);
      else if (sortEl.value === "price-desc")
        filtered.sort((a, b) => b.price - a.price);
      else if (sortEl.value === "new")
        filtered = filtered
          .filter((p) => p.badge === "new")
          .concat(filtered.filter((p) => p.badge !== "new"));
      grid.innerHTML = filtered.map(renderProductCard).join("");
      initScrollEffects();
    });
  }

  grid.innerHTML = filtered.length
    ? filtered.map(renderProductCard).join("")
    : `<div class="empty-state" style="grid-column:1/-1"><div class="empty-state__icon">🔍</div><div class="empty-state__title">Товары не найдены</div><p class="empty-state__sub">Попробуйте изменить фильтры</p></div>`;

  // Filter checkboxes
  document
    .querySelectorAll('.filter-option input[type="checkbox"]')
    .forEach((cb) => {
      cb.addEventListener("change", () => {
        const checkedBrands = [
          ...document.querySelectorAll(".filter-brand:checked"),
        ].map((c) => c.value);
        let res = [...PRODUCTS];
        if (catFilter) res = res.filter((p) => p.cat === catFilter);
        if (checkedBrands.length)
          res = res.filter((p) => checkedBrands.includes(p.brand));
        grid.innerHTML = res.map(renderProductCard).join("");
        if (countEl)
          countEl.innerHTML = `Найдено <strong>${res.length}</strong> товаров`;
      });
    });
}

// ——————————————————————————————————————
// PRODUCT PAGE
// ——————————————————————————————————————

function initProduct() {
  const main = document.getElementById("product-main");
  if (!main) return;

  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  const product = PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];

  document.title = product.name + " — AutoParts";

  const nameEl = document.getElementById("prod-name");
  const artEl = document.getElementById("prod-art");
  const brandEl = document.getElementById("prod-brand");
  const priceEl = document.getElementById("prod-price");
  const oldPriceEl = document.getElementById("prod-old-price");
  const stockEl = document.getElementById("prod-stock");
  const emojiEl = document.getElementById("prod-emoji");
  const addCartBtn = document.getElementById("prod-add-cart");
  const wishBtn = document.getElementById("prod-wish");

  if (nameEl) nameEl.textContent = product.name;
  if (artEl) artEl.textContent = "Артикул: " + product.art;
  if (brandEl) brandEl.textContent = product.brand;
  if (priceEl) priceEl.textContent = product.price.toLocaleString() + " сом";
  if (emojiEl) emojiEl.textContent = product.emoji;
  if (oldPriceEl && product.oldPrice) {
    oldPriceEl.textContent = product.oldPrice.toLocaleString() + " сом";
    oldPriceEl.style.display = "inline";
  }
  if (stockEl) {
    stockEl.innerHTML = `<div class="stock-dot stock-dot--${product.stock ? "green" : "red"}"></div> ${product.stock ? "В наличии" : "Нет в наличии"}`;
    stockEl.style.color = product.stock ? "var(--success)" : "var(--primary)";
  }

  if (addCartBtn) {
    addCartBtn.addEventListener("click", () => {
      addToCart(product.id);
      addCartBtn.textContent = "✅ Добавлено!";
      addCartBtn.style.background = "var(--success)";
      setTimeout(() => {
        addCartBtn.textContent = "🛒 В корзину";
        addCartBtn.style.background = "";
      }, 2000);
    });
  }

  if (wishBtn) {
    const isWished = getWishlist().includes(product.id);
    wishBtn.style.color = isWished ? "var(--primary)" : "";
    wishBtn.addEventListener("click", () => {
      const added = toggleWishlist(product.id);
      wishBtn.style.color = added ? "var(--primary)" : "";
    });
  }

  // Tabs
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".tab-btn")
        .forEach((b) => b.classList.remove("active"));
      document
        .querySelectorAll(".tab-panel")
        .forEach((p) => (p.style.display = "none"));
      btn.classList.add("active");
      const target = document.getElementById("tab-" + btn.dataset.tab);
      if (target) target.style.display = "block";
    });
  });

  // Related products
  const relGrid = document.getElementById("related-grid");
  if (relGrid) {
    const related = PRODUCTS.filter(
      (p) => p.cat === product.cat && p.id !== product.id,
    ).slice(0, 4);
    relGrid.innerHTML = related.map(renderProductCard).join("");
  }
}

// ——————————————————————————————————————
// CART PAGE
// ——————————————————————————————————————

function initCart() {
  const cartContainer = document.getElementById("cart-items");
  if (!cartContainer) return;

  function renderCart() {
    const cart = getCart();
    if (!cart.length) {
      cartContainer.innerHTML = `<div class="empty-state"><div class="empty-state__icon">🛒</div><div class="empty-state__title">Корзина пуста</div><p class="empty-state__sub">Добавьте товары из каталога</p><a href="catalog.html" class="btn btn--primary">Перейти в каталог</a></div>`;
      updateSummary(cart);
      return;
    }

    cartContainer.innerHTML = cart
      .map((item) => {
        const p = PRODUCTS.find((pr) => pr.id === item.id);
        if (!p) return "";
        return `
        <div class="cart-item" data-id="${p.id}">
          <div class="cart-item__img">${p.emoji}</div>
          <div>
            <div class="cart-item__name">${p.name}</div>
            <div class="cart-item__art">Арт: ${p.art}</div>
          </div>
          <div class="cart-item__price">${p.price.toLocaleString()} сом</div>
          <div class="qty-control">
            <button class="qty-btn" onclick="changeQty(${p.id}, -1)">−</button>
            <input class="qty-value" type="number" value="${item.qty}" min="1" onchange="setQty(${p.id}, this.value)">
            <button class="qty-btn" onclick="changeQty(${p.id}, 1)">+</button>
          </div>
          <div class="cart-item__total">${(p.price * item.qty).toLocaleString()} сом</div>
          <button class="cart-delete" onclick="removeFromCart(${p.id})" title="Удалить">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>
          </button>
        </div>`;
      })
      .join("");

    updateSummary(cart);
  }

  function updateSummary(cart) {
    const subtotal = cart.reduce((s, item) => {
      const p = PRODUCTS.find((pr) => pr.id === item.id);
      return s + (p ? p.price * item.qty : 0);
    }, 0);
    const delivery = subtotal > 5000 ? 0 : 250;
    const total = subtotal + delivery;

    const subEl = document.getElementById("summary-sub");
    const delEl = document.getElementById("summary-del");
    const totEl = document.getElementById("summary-total");
    if (subEl) subEl.textContent = subtotal.toLocaleString() + " сом";
    if (delEl)
      delEl.textContent = delivery === 0 ? "Бесплатно" : delivery + " сом";
    if (totEl) totEl.textContent = total.toLocaleString() + " сом";
  }

  renderCart();
}

window.changeQty = function (id, delta) {
  const cart = getCart();
  const item = cart.find((i) => i.id === id);
  if (item) {
    item.qty = Math.max(1, item.qty + delta);
    saveCart(cart);
    initCart();
  }
};
window.setQty = function (id, val) {
  const cart = getCart();
  const item = cart.find((i) => i.id === id);
  if (item) {
    item.qty = Math.max(1, parseInt(val) || 1);
    saveCart(cart);
    initCart();
  }
};
window.removeFromCart = function (id) {
  const cart = getCart().filter((i) => i.id !== id);
  saveCart(cart);
  initCart();
  showToast("🗑️ Товар удалён из корзины");
};

// ——————————————————————————————————————
// CHECKOUT
// ——————————————————————————————————————

function initCheckout() {
  const form = document.getElementById("checkout-form");
  if (!form) return;

  const summaryEl = document.getElementById("checkout-summary");
  if (summaryEl) {
    const cart = getCart();
    let html = cart
      .map((item) => {
        const p = PRODUCTS.find((pr) => pr.id === item.id);
        if (!p) return "";
        return `<div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--border-light);font-size:13px"><span>${p.emoji} ${p.name.slice(0, 30)}... ×${item.qty}</span><strong>${(p.price * item.qty).toLocaleString()} сом</strong></div>`;
      })
      .join("");
    const total = cart.reduce((s, item) => {
      const p = PRODUCTS.find((pr) => pr.id === item.id);
      return s + (p ? p.price * item.qty : 0);
    }, 0);
    html += `<div style="display:flex;justify-content:space-between;padding:16px 0 0;font-weight:700;font-size:16px"><span>Итого:</span><span style="font-family:var(--font-display);font-size:24px;color:var(--primary)">${total.toLocaleString()} сом</span></div>`;
    summaryEl.innerHTML = html;
  }

  // Payment options
  document.querySelectorAll(".payment-option").forEach((opt) => {
    opt.addEventListener("click", () => {
      document
        .querySelectorAll(".payment-option")
        .forEach((o) => o.classList.remove("selected"));
      opt.classList.add("selected");
      opt.querySelector("input").checked = true;
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const orderNum = "AP-" + Date.now().toString().slice(-6);
    localStorage.setItem("ap_last_order", orderNum);
    localStorage.removeItem("ap_cart");
    window.location.href = "thanks.html";
  });
}

// ——————————————————————————————————————
// THANKS PAGE
// ——————————————————————————————————————

function initThanks() {
  const numEl = document.getElementById("order-number");
  if (numEl) {
    const num =
      localStorage.getItem("ap_last_order") ||
      "AP-" + Math.floor(Math.random() * 999999);
    numEl.textContent = num;
  }
}

// ——————————————————————————————————————
// ACCOUNT PAGE
// ——————————————————————————————————————

function initAccount() {
  const tabs = document.querySelectorAll(".account-nav__link[data-tab]");
  const panels = document.querySelectorAll(".account-panel");
  if (!tabs.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      e.preventDefault();
      tabs.forEach((t) => t.classList.remove("active"));
      panels.forEach((p) => (p.style.display = "none"));
      tab.classList.add("active");
      const target = document.getElementById("panel-" + tab.dataset.tab);
      if (target) target.style.display = "block";
    });
  });

  // Wishlist panel
  const wishPanel = document.getElementById("panel-wish");
  if (wishPanel) {
    const wish = getWishlist();
    const wishProducts = PRODUCTS.filter((p) => wish.includes(p.id));
    const wishGrid = wishPanel.querySelector(".products__grid");
    if (wishGrid) {
      wishGrid.innerHTML = wishProducts.length
        ? wishProducts.map(renderProductCard).join("")
        : `<div class="empty-state" style="grid-column:1/-1"><div class="empty-state__icon">❤️</div><div class="empty-state__title">Избранное пусто</div><p class="empty-state__sub">Добавляйте товары, нажимая ♡</p></div>`;
    }
  }
}

// ——————————————————————————————————————
// AUTH FORMS
// ——————————————————————————————————————

function initAuth() {
  const loginForm = document.getElementById("login-form");
  const regForm = document.getElementById("reg-form");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      showToast("✅ Вы успешно вошли!");
      setTimeout(() => (window.location.href = "account.html"), 1200);
    });
  }

  if (regForm) {
    regForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const pass = regForm.querySelector("#reg-pass").value;
      const pass2 = regForm.querySelector("#reg-pass2").value;
      if (pass !== pass2) {
        showToast("⚠️ Пароли не совпадают!");
        return;
      }
      showToast("✅ Регистрация успешна!");
      setTimeout(() => (window.location.href = "account.html"), 1200);
    });
  }
}

// ——————————————————————————————————————
// INIT ALL
// ——————————————————————————————————————

document.addEventListener("DOMContentLoaded", () => {
  updateHeaderBadges();
  initMobileMenu();
  initHomepage();
  initCarSelector();
  initCatalog();
  initProduct();
  initCart();
  initCheckout();
  initThanks();
  initAccount();
  initAuth();

  // Trigger scroll effects after dynamic content renders
  requestAnimationFrame(() => {
    setTimeout(initScrollEffects, 100);
  });
});
