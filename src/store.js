/* =====================================================
   NovaTech — shared data store
   Products · Cart · Orders · Users · Messages · Session
   Backed by localStorage (client-side demo)
   ===================================================== */
window.NT = (function () {
  "use strict";

  var KEYS = {
    products: "nt_products",
    cart: "nt_cart",
    orders: "nt_orders",
    users: "nt_users",
    session: "nt_session",
    messages: "nt_messages",
    listings: "nt_listings",
    owner: "nt_owner",
  };

  function read(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
      return fallback;
    }
  }
  function write(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  /* ---------- seed catalog ---------- */
  var SEED_PRODUCTS = [
    {
      id: 1,
      name: "ASUS ROG Strix G17",
      category: "Laptops & tablets",
      price: 1199,
      badge: "New",
      rating: 4.9,
      reviews: 142,
      image:
        "https://dlcdnwebimgs.asus.com/files/media/202602/fd89bd74-4b0f-4c4c-84e0-7e6c8a9218a3/v2/images/kv.webp",
      description:
        "A 17-inch gaming powerhouse tuned for high refresh rates and marathon sessions.",
      features: [
        "Intel Core i9 HX",
        "GeForce RTX 5080",
        "240Hz QHD display",
        "1TB NVMe SSD",
      ],
    },
    {
      id: 2,
      name: "ASUS ROG Zephyrus G16",
      category: "Laptops & tablets",
      price: 149,
      badge: "",
      rating: 4.7,
      reviews: 96,
      image:
        "https://www.notebookcheck.net/fileadmin/Notebooks/Asus/ROG_Zephyrus_G16_2024_GU605M/IMG_2191.JPG",
      description:
        "Ultra-thin and light with a brilliant display, made for creators who game.",
      features: [
        "16-inch 2.5K OLED",
        "AMD Ryzen AI 9",
        "0.9in alloy body",
        "90Wh battery",
      ],
    },
    {
      id: 3,
      name: "MSI Stealth 16 AI Studio",
      category: "Laptops & tablets",
      price: 299,
      badge: "Best seller",
      rating: 4.8,
      reviews: 203,
      image:
        "https://storage-asset.msi.com/global/picture/product/product_17364092396736869361fbdf883425af4e3a79c775.webp",
      description:
        "Creator-focused stealth laptop with AI acceleration and a gorgeous 4K panel.",
      features: [
        "16-inch 4K UHD+",
        "Intel Core Ultra 9",
        "RTX 5070 Ti",
        "AI Studio software",
      ],
    },
    {
      id: 4,
      name: "ASUS ROG Flow Z13",
      category: "Laptops & tablets",
      price: 1299,
      badge: "New",
      rating: 4.6,
      reviews: 58,
      image:
        "https://dlcdnwebimgs.asus.com/files/media/2523515c-4a57-41a5-9004-67490621ae51/v1/images/large/1x/scenario_photo_z13.jpg",
      description:
        "A detachable 2-in-1 gaming tablet that goes anywhere the game takes you.",
      features: [
        "13.4-inch 180Hz touch",
        "GeForce RTX 5070",
        "Detachable keyboard",
        "Rapid liquid cooling",
      ],
    },
    {
      id: 5,
      name: "ASUS ROG Strix G18",
      category: "Laptops & tablets",
      price: 1399,
      badge: "",
      rating: 4.9,
      reviews: 187,
      image:
        "https://press.asus.com/assets/w_894,h_671/2f8577ad-b316-4647-89df-1ed7a6a7668a/2026%20ROG%20Strix%20SCAR%2018_G835_Scenario_1.jpg",
      description:
        "Desktop-class performance in an 18-inch frame with customizable lighting.",
      features: [
        "18-inch 2.5K 240Hz",
        "Intel Core Ultra 9",
        "RTX 5090",
        "Tri-fan cooling",
      ],
    },
    {
      id: 6,
      name: "ASUS ROG Flow X16",
      category: "Laptops & tablets",
      price: 129,
      badge: "",
      rating: 4.5,
      reviews: 74,
      image:
        "https://media.ldlc.com/r1600/ld/products/00/05/95/83/LD0005958347.jpg",
      description:
        "Convertible 16-inch creative laptop with a touch display and strong GPU.",
      features: [
        "16-inch QHD+ touch",
        "GeForce RTX 4070",
        "360° hinge",
        "Dolby Atmos audio",
      ],
    },
    {
      id: 7,
      name: "MSI Cyborg 15",
      category: "Laptops & tablets",
      price: 79,
      badge: "",
      rating: 4.4,
      reviews: 121,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1VneqcadAB1HXV5t0SdPXp-GwpmblqyiOB0u3B1WhYA&s=10",
      description:
        "Semi-transparent cyberpunk design with solid esports-ready specs.",
      features: [
        "15.6-inch 144Hz",
        "Core i7 H",
        "RTX 4060",
        "Translucent shell",
      ],
    },
    {
      id: 8,
      name: "MSI Katana 17 HX",
      category: "Laptops & tablets",
      price: 249,
      badge: "Best seller",
      rating: 4.7,
      reviews: 164,
      image: "assets/images/msi-gaming.jpg",
      description: "Big-screen gaming laptop that keeps cool under pressure.",
      features: ["17.3-inch 165Hz", "Core i7 HX", "RTX 4070", "Cooler Boost 5"],
    },
    {
      id: 9,
      name: "NovaBook Air 14",
      category: "Laptops & tablets",
      price: 1899,
      badge: "New",
      rating: 4.8,
      reviews: 89,
      image: "assets/images/laptop.jpg",
      description:
        "An impossibly light ultrabook built for deep focus and real momentum.",
      features: [
        "14.2-inch 3K anti-glare",
        "All-day battery",
        "Ultra-fast silicon",
        "0.6in ultra-thin body",
      ],
    },
    {
      id: 10,
      name: "NovaSound Pro Headphones",
      category: "Audio",
      price: 299,
      badge: "New",
      rating: 4.9,
      reviews: 312,
      image: "assets/images/headphones.jpg",
      description:
        "Immersive sound, pinpoint clarity, and quiet wherever you need it.",
      features: [
        "Active noise cancelling",
        "40h battery",
        "Hi-Res certified",
        "Multipoint pairing",
      ],
    },
    {
      id: 11,
      name: "NovaSound Speaker 360",
      category: "Audio",
      price: 199,
      badge: "",
      rating: 4.6,
      reviews: 148,
      image: "assets/images/speaker.jpg",
      description: "Room-filling 360-degree sound in a compact, premium shell.",
      features: [
        "360° surround audio",
        "Bluetooth 5.3",
        "12h playtime",
        "Water resistant",
      ],
    },
    {
      id: 12,
      name: "NovaPod Earbuds",
      category: "Audio",
      price: 149,
      badge: "",
      rating: 4.5,
      reviews: 276,
      image: "assets/images/audio.png",
      description:
        "True-wireless earbuds with rich bass and a pocket-size case.",
      features: [
        "Hybrid ANC",
        "30h total battery",
        "Wireless charging",
        "Touch controls",
      ],
    },
    {
      id: 13,
      name: "NovaKey Mechanical Keyboard",
      category: "Accessories",
      price: 129,
      badge: "",
      rating: 4.7,
      reviews: 98,
      image: "assets/images/keyboard.jpg",
      description:
        "A satisfying, programmable keyboard built for every brilliant idea.",
      features: [
        "Hot-swap switches",
        "RGB per-key lighting",
        "Aluminium frame",
        "PBT keycaps",
      ],
    },
    {
      id: 14,
      name: "NovaHub 7-in-1 USB-C",
      category: "Accessories",
      price: 59,
      badge: "",
      rating: 4.6,
      reviews: 241,
      image: "assets/images/hub.jpg",
      description:
        "One compact dock for HDMI, Ethernet, SD, and fast power delivery.",
      features: [
        "4K HDMI out",
        "100W pass-through",
        "SD/TF readers",
        "Gigabit Ethernet",
      ],
    },
    {
      id: 15,
      name: "NovaCharge GaN 100W",
      category: "Accessories",
      price: 49,
      badge: "",
      rating: 4.8,
      reviews: 367,
      image: "assets/images/charger.jpg",
      description: "Tiny gallium-nitride charger that powers a whole setup.",
      features: [
        "100W max output",
        "GaN V technology",
        "2x USB-C + USB-A",
        "Foldable prongs",
      ],
    },
    {
      id: 16,
      name: "NovaWatch S2",
      category: "Wearables",
      price: 249,
      badge: "New",
      rating: 4.7,
      reviews: 154,
      image: "assets/images/watch.jpg",
      description: "Your health, activity, and day, perfectly in sync.",
      features: [
        "AMOLED always-on",
        "GPS + heart rate",
        "14-day battery",
        "5ATM water resistant",
      ],
    },
    {
      id: 17,
      name: "NovaView 27 4K Monitor",
      category: "Accessories",
      price: 399,
      badge: "",
      rating: 4.8,
      reviews: 132,
      image: "assets/images/monitor.jpg",
      description: "Studio-grade colour and razor-sharp 4K for work and play.",
      features: [
        "27-inch 4K IPS",
        "98% DCI-P3",
        "USB-C 90W",
        "Height adjustable",
      ],
    },
  ];

  function seed() {
    // Use the safe read() helper instead of direct localStorage access.
    // Some mobile/private browsers throw when accessing localStorage directly,
    // which can abort the script and prevent products from rendering.
    if (!read(KEYS.products, null)) write(KEYS.products, SEED_PRODUCTS);
  }
  seed();

  /* ---------- small utils ---------- */
  function uid() {
    return "id" + Math.random().toString(36).slice(2, 10);
  }
  function sanitize(text) {
    return String(text == null ? "" : text).replace(/[<>"']/g, "");
  }
  function formatPrice(n) {
    return (
      "$" +
      Number(n || 0).toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    );
  }
  function dateFmt(iso) {
    return new Date(iso).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }

  /* ---------- events ---------- */
  var listeners = {};
  function on(event, fn) {
    (listeners[event] = listeners[event] || []).push(fn);
  }
  function emit(event) {
    (listeners[event] || []).forEach(function (fn) {
      fn();
    });
  }

  /* ---------- toast ---------- */
  function toast(message) {
    var el = document.createElement("div");
    el.className = "toast";
    el.textContent = message;
    document.body.appendChild(el);
    setTimeout(function () {
      el.classList.add("show");
    }, 10);
    setTimeout(function () {
      el.classList.remove("show");
      setTimeout(function () {
        el.remove();
      }, 300);
    }, 2600);
  }

  /* ---------- products ---------- */
  function products() {
    return read(KEYS.products, []);
  }
  function saveProducts(list) {
    write(KEYS.products, list);
    emit("products");
  }
  function getProduct(id) {
    return products().find(function (p) {
      return p.id === Number(id);
    });
  }

  /* ---------- cart ---------- */
  function cartItems() {
    return read(KEYS.cart, []);
  }
  function saveCart(items) {
    write(KEYS.cart, items);
    emit("cart");
  }
  function cartAdd(productId, qty) {
    var items = cartItems();
    var id = Number(productId);
    var found = items.find(function (i) {
      return i.productId === id;
    });
    if (found) found.qty += Number(qty) || 1;
    else items.push({ productId: id, qty: Number(qty) || 1 });
    saveCart(items);
  }
  function cartSetQty(productId, qty) {
    var items = cartItems();
    var id = Number(productId);
    var found = items.find(function (i) {
      return i.productId === id;
    });
    if (!found) return;
    if (Number(qty) <= 0) cartRemove(id);
    else {
      found.qty = Number(qty);
      saveCart(items);
    }
  }
  function cartRemove(productId) {
    saveCart(
      cartItems().filter(function (i) {
        return i.productId !== Number(productId);
      }),
    );
  }
  function cartCount() {
    return cartItems().reduce(function (sum, i) {
      return sum + i.qty;
    }, 0);
  }
  function cartTotal() {
    return cartItems().reduce(function (sum, i) {
      var p = getProduct(i.productId);
      return sum + (p ? p.price * i.qty : 0);
    }, 0);
  }
  function cartDetailed() {
    return cartItems()
      .map(function (i) {
        var p = getProduct(i.productId);
        return p
          ? { product: p, qty: i.qty, lineTotal: p.price * i.qty }
          : null;
      })
      .filter(Boolean);
  }

  /* ---------- orders ---------- */
  function orders() {
    return read(KEYS.orders, []);
  }
  function saveOrders(list) {
    write(KEYS.orders, list);
    emit("orders");
  }
  function placeOrder(info) {
    var order = {
      id: "NT" + Date.now().toString().slice(-8),
      userId: info.userId || null,
      customer: info.name,
      email: info.email,
      address: info.address,
      city: info.city,
      zip: info.zip,
      items: cartDetailed().map(function (i) {
        return {
          id: i.product.id,
          name: i.product.name,
          price: i.product.price,
          qty: i.qty,
        };
      }),
      total: cartTotal(),
      status: "Processing",
      date: new Date().toISOString(),
    };
    saveOrders(orders().concat([order]));
    saveCart([]);
    return order;
  }
  function updateOrderStatus(id, status) {
    saveOrders(
      orders().map(function (o) {
        return o.id === id ? Object.assign({}, o, { status: status }) : o;
      }),
    );
  }
  function ordersForUser(userId) {
    return orders().filter(function (o) {
      return o.userId === userId;
    });
  }

  /* ---------- users + session ---------- */
  function users() {
    return read(KEYS.users, []);
  }
  function saveUsers(list) {
    write(KEYS.users, list);
    emit("auth");
  }
  function findUser(email) {
    var e = String(email || "")
      .trim()
      .toLowerCase();
    return users().find(function (u) {
      return u.email === e;
    });
  }
  function createUser(name, email, password, role) {
    var user = {
      id: uid(),
      name: name,
      email: String(email).trim().toLowerCase(),
      password: password,
      role: role || "customer",
      createdAt: Date.now(),
    };
    saveUsers(users().concat([user]));
    return user;
  }
  function setSession(id) {
    write(KEYS.session, id);
    emit("auth");
  }
  function clearSession() {
    localStorage.removeItem(KEYS.session);
    emit("auth");
  }
  function currentUser() {
    var id = read(KEYS.session, null);
    if (!id) return null;
    return (
      users().find(function (u) {
        return u.id === id;
      }) || null
    );
  }
  function setUserAvatar(userId, dataUrl) {
    saveUsers(
      users().map(function (u) {
        return u.id === userId ? Object.assign({}, u, { avatar: dataUrl }) : u;
      }),
    );
  }

  /* ---------- contact messages ---------- */
  function messages() {
    return read(KEYS.messages, []);
  }
  function saveMessages(list) {
    write(KEYS.messages, list);
    emit("messages");
  }
  function addMessage(msg) {
    msg.id = uid();
    msg.date = new Date().toISOString();
    saveMessages(messages().concat([msg]));
  }

  /* ---------- seller listings ---------- */
  function listings() {
    return read(KEYS.listings, []);
  }
  function saveListings(list) {
    write(KEYS.listings, list);
    emit("listings");
  }
  function addListing(data) {
    var listing = {
      id: uid(),
      userId: data.userId || null,
      seller: data.seller || "Guest",
      email: data.email || "",
      name: data.name,
      category: data.category || "Accessories",
      price: Number(data.price) || 0,
      condition: data.condition || "New",
      image: data.image || "assets/images/image.png",
      description: data.description || "",
      status: "active",
      date: new Date().toISOString(),
    };
    saveListings(listings().concat([listing]));
    return listing;
  }
  function publicListings() {
    return listings().filter(function (l) {
      return l.status === "active" || l.status === "approved";
    });
  }
  function approveListing(id) {
    var found = listings().find(function (l) {
      return l.id === id;
    });
    if (!found || found.status === "approved") return null;
    var list = products();
    var newId =
      list.reduce(function (max, p) {
        return Math.max(max, p.id);
      }, 0) + 1;
    var product = {
      id: newId,
      name: found.name,
      category: found.category,
      price: found.price,
      badge: "Community",
      rating: 4.5,
      reviews: 0,
      image: found.image,
      description:
        "Listed by " +
        found.seller +
        " — " +
        found.condition +
        " condition. " +
        found.description,
    };
    saveProducts(list.concat([product]));
    saveListings(
      listings().map(function (l) {
        return l.id === id ? Object.assign({}, l, { status: "approved" }) : l;
      }),
    );
    return product;
  }
  function deleteListing(id) {
    saveListings(
      listings().filter(function (l) {
        return l.id !== id;
      }),
    );
  }

  /* ---------- rendering helpers ---------- */
  function renderCard(p, i) {
    var badge = p.badge
      ? '<span class="label">' + sanitize(p.badge) + "</span>"
      : "";
    var delay = Math.min((i || 0) * 70, 420);
    return (
      '<article class="product" data-reveal style="--rd:' +
      delay +
      'ms" onclick="location.href=\'product.html?id=' +
      p.id +
      "'\">" +
      '<div class="product-image">' +
      badge +
      "<button class=\"heart\" onclick=\"event.stopPropagation();this.textContent=this.textContent==='♡'?'♥':'♡'\">♡</button>" +
      '<img src="' +
      p.image +
      '" alt="' +
      sanitize(p.name) +
      '" loading="lazy">' +
      "</div>" +
      '<div class="p-info"><span class="stars">★★★★★</span><h3>' +
      sanitize(p.name) +
      "</h3>" +
      '<span class="price">' +
      formatPrice(p.price) +
      "</span></div>" +
      "</article>"
    );
  }
  function renderGrid(containerId, list) {
    var el = document.getElementById(containerId);
    if (!el) return;
    if (!list || !list.length) {
      el.innerHTML =
        '<div class="empty">No products yet. Check back soon.</div>';
      return;
    }
    el.innerHTML = list.map(renderCard).join("");
    if (window.NT.reveal) window.NT.reveal();
  }
  function renderListingCard(l, i) {
    var delay = Math.min((i || 0) * 70, 420);
    return (
      '<article class="product community-card" data-reveal style="--rd:' +
      delay +
      'ms">' +
      '<div class="product-image">' +
      '<span class="label">Community</span>' +
      '<img src="' +
      l.image +
      '" alt="' +
      sanitize(l.name) +
      '" loading="lazy">' +
      "</div>" +
      '<div class="p-info">' +
      '<span class="stars">' +
      sanitize(l.seller) +
      "</span>" +
      "<h3>" +
      sanitize(l.name) +
      "</h3>" +
      '<span class="price">' +
      formatPrice(l.price) +
      "</span>" +
      '<span class="community-meta">' +
      sanitize(l.condition) +
      " · " +
      dateFmt(l.date) +
      "</span>" +
      "</div>" +
      "</article>"
    );
  }
  function renderListingGrid(containerId, list) {
    var el = document.getElementById(containerId);
    if (!el) return;
    if (!list || !list.length) {
      el.innerHTML =
        '<div class="empty">No community listings yet. Be the first to sell.</div>';
      return;
    }
    el.innerHTML = list.map(renderListingCard).join("");
    if (window.NT.reveal) window.NT.reveal();
  }

  return {
    /* utils */
    uid: uid,
    sanitize: sanitize,
    formatPrice: formatPrice,
    dateFmt: dateFmt,
    toast: toast,
    /* events */
    on: on,
    /* products */
    products: products,
    saveProducts: saveProducts,
    getProduct: getProduct,
    /* cart */
    cartItems: cartItems,
    cartAdd: cartAdd,
    cartSetQty: cartSetQty,
    cartRemove: cartRemove,
    cartCount: cartCount,
    cartTotal: cartTotal,
    cartDetailed: cartDetailed,
    /* orders */
    orders: orders,
    saveOrders: saveOrders,
    placeOrder: placeOrder,
    updateOrderStatus: updateOrderStatus,
    ordersForUser: ordersForUser,
    /* users + session */
    users: users,
    saveUsers: saveUsers,
    findUser: findUser,
    createUser: createUser,
    setSession: setSession,
    clearSession: clearSession,
    currentUser: currentUser,
    setUserAvatar: setUserAvatar,
    /* messages */
    messages: messages,
    saveMessages: saveMessages,
    addMessage: addMessage,
    /* listings */
    listings: listings,
    saveListings: saveListings,
    addListing: addListing,
    publicListings: publicListings,
    approveListing: approveListing,
    deleteListing: deleteListing,
    /* rendering */
    renderCard: renderCard,
    renderGrid: renderGrid,
    renderListingCard: renderListingCard,
    renderListingGrid: renderListingGrid,
  };
})();
