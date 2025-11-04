const generateProducts = () => {
  const products = [];
  
  const laptopBrands = [
    { name: 'ASUS ROG', models: ['Zephyrus G16', 'Strix G16', 'TUF Gaming', 'Flow X13', 'Duo 16', 'Zephyrus M16'] },
    { name: 'Razer', models: ['Blade 16', 'Blade 15 Advanced', 'Blade Pro 17', 'Book 13', 'Stealth 16'] },
    { name: 'MSI', models: ['Raider GE78', 'Stealth 16 Studio', 'Titan GT77', 'Bravo 15', 'Sword 15'] },
    { name: 'Dell Alienware', models: ['m18', 'm16', 'm15', 'x17', 'x16', 'x15'] },
    { name: 'Lenovo Legion', models: ['Pro 9i', '9i Gen 7', '7i Gen 8', '5 Pro', 'Y Series'] },
    { name: 'HP Omen', models: ['17', '16', '15', 'Transcend 16', 'Max 14'] },
    { name: 'Acer Predator', models: ['Triton 900', 'Triton 500', 'Helios 300', 'Triton 16'] },
    { name: 'LG Gram', models: ['17 Ultra', '16 Pro', '14 Ultra', 'Pro 16'] },
    { name: 'ASUS VivoBook', models: ['Pro 16X OLED', 'S 15 OLED', 'Flip 13', 'Pro 14'] },
    { name: 'Gigabyte Aorus', models: ['17 XE', '15 XE', '14 XE', '7 XE'] }
  ];

  const pcConfigs = [
    { name: 'RTX 4090 Beast', cpu: 'i9-13900K', gpu: 'RTX 4090', ram: '64GB', ssd: '4TB NVMe' },
    { name: 'RTX 4080 Pro', cpu: 'i9-13900K', gpu: 'RTX 4080', ram: '48GB', ssd: '2TB NVMe' },
    { name: 'RTX 4070 Gaming', cpu: 'i7-13700K', gpu: 'RTX 4070', ram: '32GB', ssd: '1TB NVMe' },
    { name: 'RTX 4060 Ti Budget', cpu: 'i5-13600K', gpu: 'RTX 4060 Ti', ram: '16GB', ssd: '512GB SSD' },
    { name: 'Ryzen 7 Ultra', cpu: 'Ryzen 9 7950X', gpu: 'RTX 4090', ram: '64GB', ssd: '4TB NVMe' },
    { name: 'Ryzen 5 Mid', cpu: 'Ryzen 7 7700X', gpu: 'RTX 4070', ram: '32GB', ssd: '1TB NVMe' }
  ];

  let id = 1;

  // صور لابتوبات محلية - عادي، جيمينج، احترافي
  const laptopNormalImages = ['images/laptops/laptop-normal/لابتوب عادي.jpg'];
  const laptopGamingImages = [
    'images/laptops/laptop-gaming/لابتوب جيمينج 1.jpg',
    'images/laptops/laptop-gaming/لابتوب جيمينج 2.jpg',
    'images/laptops/laptop-gaming/لابتوب جيمينج 3.jpg'
  ];
  const laptopProfessionalImages = ['images/laptops/laptop-professional/لابتوب احترافي.jpg'];

  // 30 لابتوب عادي
  for (let i = 0; i < 30; i++) {
    const brand = laptopBrands[i % laptopBrands.length];
    const model = brand.models[Math.floor(Math.random() * brand.models.length)];
    const specs = [
      `${['Intel i5-11400H', 'Intel i7-11800H', 'Ryzen 5 5600H', 'Ryzen 7 5800H'][Math.floor(Math.random() * 4)]}`,
      `${['RTX 3050', 'RTX 3060', 'GTX 1650 Ti', 'RTX 3050 Ti'][Math.floor(Math.random() * 4)]}`,
      `${[8, 16, 32][Math.floor(Math.random() * 3)]}GB RAM`,
      `${[512, 1024][Math.floor(Math.random() * 2)]}GB SSD`,
      `${[14, 15.6][Math.floor(Math.random() * 2)]}\" Display`,
      `${[60, 120][Math.floor(Math.random() * 2)]}Hz Refresh`
    ];
    
    const basePrice = 800 + Math.random() * 1500;
    products.push({
      id: id++,
      name: `${brand.name} ${model} - عادي`,
      price: Math.round(basePrice),
      category: 'laptop',
      type: 'laptop-normal',
      desc: `لابتوب عادي من ${brand.name} - مناسب للعمل والدراسة`,
      specs: specs,
      image: laptopNormalImages[i % laptopNormalImages.length]
    });
  }

  // 35 لابتوب جيمينج
  for (let i = 0; i < 35; i++) {
    const brand = laptopBrands[i % laptopBrands.length];
    const model = brand.models[Math.floor(Math.random() * brand.models.length)];
    const specs = [
      `${['Intel i7-12700H', 'Intel i9-12900H', 'Ryzen 7 6800H', 'Ryzen 9 6900HX'][Math.floor(Math.random() * 4)]}`,
      `${['RTX 3070', 'RTX 3070 Ti', 'RTX 3080', 'RTX 3080 Ti'][Math.floor(Math.random() * 4)]}`,
      `${[16, 32, 48][Math.floor(Math.random() * 3)]}GB RAM`,
      `${[512, 1024, 2048][Math.floor(Math.random() * 3)]}GB SSD NVMe`,
      `${[15.6, 16, 17][Math.floor(Math.random() * 3)]}\" Display`,
      `${[144, 165, 240][Math.floor(Math.random() * 3)]}Hz Refresh`
    ];
    
    const basePrice = 1500 + Math.random() * 2500;
    products.push({
      id: id++,
      name: `${brand.name} ${model} - جيمينج`,
      price: Math.round(basePrice),
      category: 'laptop',
      type: 'laptop-gaming',
      desc: `لابتوب جيمينغ احترافي من ${brand.name} - ${model}`,
      specs: specs,
      image: laptopGamingImages[i % laptopGamingImages.length]
    });
  }

  // 15 لابتوب احترافي
  for (let i = 0; i < 15; i++) {
    const brand = laptopBrands[i % laptopBrands.length];
    const model = brand.models[Math.floor(Math.random() * brand.models.length)];
    const specs = [
      `${['Intel i9-13900HX', 'Intel i7-13700H', 'Ryzen 9 7945HX'][Math.floor(Math.random() * 3)]}`,
      `${['RTX 4090', 'RTX 4080', 'RTX 4070'][Math.floor(Math.random() * 3)]}`,
      `${[32, 48, 64][Math.floor(Math.random() * 3)]}GB RAM`,
      `${[1024, 2048, 4096][Math.floor(Math.random() * 3)]}GB SSD NVMe`,
      `${[15.6, 16, 17][Math.floor(Math.random() * 3)]}\" Display`,
      `${[60, 120, 144][Math.floor(Math.random() * 3)]}Hz Refresh`
    ];
    
    const basePrice = 3000 + Math.random() * 2000;
    products.push({
      id: id++,
      name: `${brand.name} ${model} - احترافي`,
      price: Math.round(basePrice),
      category: 'laptop',
      type: 'laptop-professional',
      desc: `لابتوب احترافي من ${brand.name} - للعمل الاحترافي والإنتاجية`,
      specs: specs,
      image: laptopProfessionalImages[i % laptopProfessionalImages.length]
    });
  }

  // صور أجهزة كمبيوتر محلية - جيمينج فقط حالياً
  const pcGamingImages = [
    'images/pcs/pc-gaming/جهاز بي سي جيمينج.jpg',
    'images/pcs/pc-gaming/جهاز بي سي جيمينج 2.jpg',
    'images/pcs/pc-gaming/جهاز بي سي جيمينج 3.jpg'
  ];

  for (let i = 0; i < 70; i++) {
    const config = pcConfigs[i % pcConfigs.length];
    const builder = ['Custom Build', 'Pre-Built', 'Gaming Beast', 'Performance Pro', 'Extreme Setup'][Math.floor(Math.random() * 5)];
    
    products.push({
      id: id++,
      name: `${builder} - ${config.name}`,
      price: Math.round(2500 + Math.random() * 5000),
      category: 'pc',
      type: 'pc-gaming',
      desc: `كمبيوتر جيمينغ احترافي مخصص - ${config.name}`,
      specs: [config.cpu, config.gpu, config.ram, config.ssd, 'RGB Lighting', 'Liquid Cooling'],
      image: pcGamingImages[i % pcGamingImages.length]
    });
  }

  // صور الاكسسوارات المحلية
  const mouseImages = [
    'images/accessories/mouse/ماوس جيمينج 1.jpg',
    'images/accessories/mouse/ماوس جيمينج 2.jpg',
    'images/accessories/mouse/ماوس جيمينج 3.jpg'
  ];

  const keyboardImages = [
    'images/accessories/keyboard/كيبورد.jpg',
    'images/accessories/keyboard/كيبورد جيمينج.jpg'
  ];

  const headsetImages = [
    'images/accessories/headset/سماعة جيميني.jpg',
    'images/accessories/headset/سماعة جيمينج 2.jpg',
    'images/accessories/headset/سماعة جيمينج 3.jpg',
    'images/accessories/headset/اري بود جيمينج1.jpg',
    'images/accessories/headset/اري بود جيمينج2.jpg'
  ];

  const monitorImages = [
    'images/accessories/monitor/شاشه جيمينج 1.jpg',
    'images/accessories/monitor/شاشه جيمينج 2.jpg',
    'images/accessories/monitor/شاشه جيمينج 3.jpg'
  ];

  const chairImages = [
    'images/accessories/chair/كرسي جيمينج احمر.jpg',
    'images/accessories/chair/كرسي جيمينج ازرق.jpg',
    'images/accessories/chair/كرسي جيمينج اسود.jpg'
  ];

  const setupImages = [
    'images/accessories/setup/سيت اب غرفه 1.jpg',
    'images/accessories/setup/سيت اب غرفه 2.jpg',
    'images/accessories/setup/سيت اب غرفه 3.jpg',
    'images/accessories/setup/سيت اب غرفه 4.jpg'
  ];

  // ماوسات جيمينج - 6 منتجات
  for (let i = 0; i < 6; i++) {
    products.push({
      id: id++,
      name: `ماوس جيمينج ${i + 1}`,
      price: Math.round(150 + Math.random() * 350),
      category: 'accessories',
      type: 'mouse',
      desc: `ماوس جيمينج احترافي مع دقة عالية و RGB`,
      specs: ['DPI عالي', 'استجابة سريعة', 'RGB Lighting', 'مريح للقبضة'],
      image: mouseImages[i % mouseImages.length]
    });
  }

  // لوحات مفاتيح جيمينج - 6 منتجات
  for (let i = 0; i < 6; i++) {
    products.push({
      id: id++,
      name: `لوحة مفاتيح ${i + 1}`,
      price: Math.round(200 + Math.random() * 400),
      category: 'accessories',
      type: 'keyboard',
      desc: `لوحة مفاتيح جيمينج ميكانيكية احترافية`,
      specs: ['مفاتيح ميكانيكية', 'RGB Lighting', 'مقاومة للماء', 'استجابة فورية'],
      image: keyboardImages[i % keyboardImages.length]
    });
  }

  // سماعات جيمينج - 8 منتجات
  for (let i = 0; i < 8; i++) {
    products.push({
      id: id++,
      name: `سماعة جيمينج ${i + 1}`,
      price: Math.round(250 + Math.random() * 450),
      category: 'accessories',
      type: 'headset',
      desc: `سماعة جيمينج احترافية مع صوت محيطي 7.1`,
      specs: ['صوت محيطي 7.1', 'ميكروفون احترافي', 'RGB Lighting', 'مريحة للارتداء الطويل'],
      image: headsetImages[i % headsetImages.length]
    });
  }

  // شاشات جيمينج - 9 منتجات
  for (let i = 0; i < 9; i++) {
    products.push({
      id: id++,
      name: `شاشة جيمينج ${i + 1}`,
      price: Math.round(600 + Math.random() * 800),
      category: 'accessories',
      type: 'monitor',
      desc: `شاشة جيمينج بتحديث سريع وألوان زاهية`,
      specs: ['تحديث 144Hz+', 'وقت الاستجابة سريع', 'دقة عالية', 'تقنية G-Sync/FreeSync'],
      image: monitorImages[i % monitorImages.length]
    });
  }

  // كراسي جيمينج - 9 منتجات
  for (let i = 0; i < 9; i++) {
    products.push({
      id: id++,
      name: `كرسي جيمينج ${i + 1}`,
      price: Math.round(800 + Math.random() * 1200),
      category: 'accessories',
      type: 'chair',
      desc: `كرسي جيمينج احترافي مريح وعملي`,
      specs: ['جودة عالية', 'دعم كامل للظهر', 'قابل للتعديل', 'متين وموثوق'],
      image: chairImages[i % chairImages.length]
    });
  }

  // سيتاب غرفة جيمينج - 8 منتجات
  for (let i = 0; i < 8; i++) {
    products.push({
      id: id++,
      name: `سيتاب غرفة جيمينج ${i + 1}`,
      price: Math.round(2000 + Math.random() * 3000),
      category: 'accessories',
      type: 'setup',
      desc: `سيتاب غرفة جيمينج كامل مع تجهيزات احترافية`,
      specs: ['شاملة وكاملة', 'تصميم احترافي', 'إضاءة جيدة', 'مساحة واسعة'],
      image: setupImages[i % setupImages.length]
    });
  }

  return products;
};

const products = generateProducts();

const bundles = [
  {
    id: 'bundle1',
    name: 'الباقة الاحترافية الكاملة',
    items: [1, 2, 3],
    originalPrice: products.slice(0, 3).reduce((s, p) => s + p.price, 0),
    bundlePrice: Math.round(products.slice(0, 3).reduce((s, p) => s + p.price, 0) * 0.85),
    discount: 15
  },
  {
    id: 'bundle2',
    name: 'باقة الألعاب الثقيلة',
    items: [5, 6, 7],
    originalPrice: products.slice(4, 7).reduce((s, p) => s + p.price, 0),
    bundlePrice: Math.round(products.slice(4, 7).reduce((s, p) => s + p.price, 0) * 0.82),
    discount: 18
  },
  {
    id: 'bundle3',
    name: 'باقة الأداء العالي',
    items: [10, 11, 12],
    originalPrice: products.slice(9, 12).reduce((s, p) => s + p.price, 0),
    bundlePrice: Math.round(products.slice(9, 12).reduce((s, p) => s + p.price, 0) * 0.80),
    discount: 20
  }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let userDetails = JSON.parse(localStorage.getItem('userDetails')) || {
  name: '',
  email: '',
  phone: '',
  country: '',
  city: ''
};

const currencyRates = {
  'SAR': { symbol: 'ر.س', rate: 1 },
  'USD': { symbol: '$', rate: 0.27 },
  'EUR': { symbol: '€', rate: 0.25 },
  'AED': { symbol: 'د.إ', rate: 0.99 },
  'KWD': { symbol: 'د.ك', rate: 0.083 },
  'YER': { symbol: 'ر.ي', rate: 67.5 }
};

let currentCurrency = 'SAR';

function formatPrice(price, currency = currentCurrency) {
  const rate = currencyRates[currency].rate;
  const converted = Math.round(price * rate * 100) / 100;
  const symbol = currencyRates[currency].symbol;
  
  return `${symbol}${converted.toLocaleString('ar-SA')}`;
}

function renderProducts(filter = 'all', page = 1) {
  const grid = document.getElementById('product-grid');
  const search = document.getElementById('search-input')?.value?.toLowerCase() || '';
  const priceFilter = document.getElementById('price-filter')?.value || 'all';
  
  let filtered = products.filter(p => {
    if (filter !== 'all' && p.category !== filter) return false;
    if (search && !p.name.includes(search) && !p.desc.includes(search)) return false;
    if (priceFilter === 'premium' && p.price < 3000) return false;
    if (priceFilter === 'mid' && (p.price < 1500 || p.price >= 3000)) return false;
    if (priceFilter === 'entry' && p.price >= 1500) return false;
    return true;
  });

  const itemsPerPage = 24;
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const start = (page - 1) * itemsPerPage;
  const paged = filtered.slice(start, start + itemsPerPage);

  if (!grid) return;

  grid.innerHTML = paged.map(p => `
    <div class="product-card" data-id="${p.id}">
      <div class="product-image">
        <img src="${p.image}" alt="${p.name}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 500 350%22%3E%3Crect fill=%22%23222%22 width=%22500%22 height=%22350%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2232%22 fill=%22%23888%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3EGaming Device%3C/text%3E%3C/svg%3E'" loading="lazy">
        <div class="product-badge">${p.category === 'laptop' ? '<i class="fas fa-laptop"></i>' : '<i class="fas fa-desktop"></i>'}</div>
      </div>
      <div class="product-info">
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.desc}</div>
        <div class="product-specs">
          ${p.specs.map((s, i) => i < 3 ? `<div class="spec-item"><i class="fas fa-check"></i> ${s}</div>` : '').join('')}
        </div>
        <div class="specs-toggle" onclick="toggleSpecs(${p.id})"><i class="fas fa-chevron-down"></i> عرض المزيد من المواصفات</div>
        <div class="all-specs" id="specs-${p.id}" style="display:none;">
          ${p.specs.map(s => `<div class="spec-item"><i class="fas fa-check"></i> ${s}</div>`).join('')}
        </div>
        <div class="product-footer">
          <div class="product-price">${formatPrice(p.price)}</div>
          <button class="add-to-cart" onclick="addToCart(${p.id})">أضف للسلة</button>
        </div>
      </div>
    </div>
  `).join('');

  if (totalPages > 1) {
    const pagination = document.getElementById('pagination');
    if (pagination) {
      pagination.innerHTML = `
        ${page > 1 ? `<button onclick="renderProducts('${filter}', ${page - 1})" class="page-btn"><i class="fas fa-chevron-right"></i> السابق</button>` : ''}
        <span class="page-info">الصفحة ${page} من ${totalPages}</span>
        ${page < totalPages ? `<button onclick="renderProducts('${filter}', ${page + 1})" class="page-btn">التالي <i class="fas fa-chevron-left"></i></button>` : ''}
      `;
    }
  }
}

function toggleSpecs(productId) {
  const specsDiv = document.getElementById(`specs-${productId}`);
  if (specsDiv) {
    specsDiv.style.display = specsDiv.style.display === 'none' ? 'block' : 'none';
  }
}

function renderBundles() {
  const grid = document.getElementById('bundle-grid');
  if (!grid) return;

  grid.innerHTML = bundles.map(b => {
    const bundleItems = b.items.map(id => products.find(p => p.id === id)).filter(Boolean);
    return `
      <div class="product-card" style="position: relative;">
        <span class="bundle-badge">توفير ${b.discount}%</span>
        <div class="product-image" style="background: linear-gradient(135deg, #1a1a1a, #2d1b00);">
          <div style="text-align: center; color: #d4af37; height: 100%; display: flex; align-items: center; justify-content: center;">
            <div>
              <div style="font-size: 3rem; margin-bottom: 0.5rem;">🎁</div>
              <div style="font-size: 0.9rem;">باقة متكاملة</div>
            </div>
          </div>
        </div>
        <div class="product-info">
          <div class="product-name">${b.name}</div>
          <div class="product-desc" style="margin-bottom: 0.5rem;">
            ${bundleItems.length} منتج احترافي
          </div>
          <div style="color: #b0b0b0; font-size: 0.85rem; margin-bottom: 1rem; max-height: 100px; overflow-y: auto;">
            ${bundleItems.map(item => `<div style="padding: 0.3rem 0;">• ${item.name}</div>`).join('')}
          </div>
          <div class="product-footer">
            <div>
              <div style="color: #888; text-decoration: line-through; font-size: 0.9rem;">
                ${formatPrice(b.originalPrice)}
              </div>
              <div class="product-price">${formatPrice(b.bundlePrice)}</div>
            </div>
            <button class="add-to-cart" onclick="addBundleToCart('${b.id}')">أضف الباقة</button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existingItem = cart.find(item => item.id === productId);
  if (existingItem) {
    existingItem.qty += 1;
  } else {
    cart.push({ ...product, qty: 1, addedDate: new Date().toISOString() });
  }

  saveCart();
  updateCartCount();
  showNotification(`تم إضافة ${product.name} للسلة`);
}

function addBundleToCart(bundleId) {
  const bundle = bundles.find(b => b.id === bundleId);
  if (!bundle) return;

  const bundleItem = {
    id: bundleId,
    name: bundle.name,
    price: bundle.bundlePrice,
    qty: 1,
    isBundle: true,
    items: bundle.items,
    addedDate: new Date().toISOString()
  };

  const existing = cart.find(item => item.id === bundleId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push(bundleItem);
  }

  saveCart();
  updateCartCount();
  showNotification(`تم إضافة ${bundle.name} للسلة`);
}

function removeFromCart(cartIndex) {
  cart.splice(cartIndex, 1);
  saveCart();
  updateCartCount();
  renderCart();
}

function updateQty(cartIndex, newQty) {
  if (newQty <= 0) {
    removeFromCart(cartIndex);
  } else {
    cart[cartIndex].qty = newQty;
    saveCart();
    updateCartCount();
    renderCart();
  }
}

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartCount() {
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const cartCount = document.querySelector('.cart-count');
  if (cartCount) cartCount.textContent = totalItems;
}

function renderCart() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  const cartSubtotal = document.getElementById('cart-subtotal');
  const cartTax = document.getElementById('cart-tax');
  const cartShipping = document.getElementById('cart-shipping');

  if (!cartItems) return;

  if (cart.length === 0) {
    cartItems.innerHTML = '<div class="empty-cart"><p>السلة فارغة</p><p style="font-size: 0.9rem; color: #888;">ابدأ التسوق الآن</p></div>';
    if (cartTotal) cartTotal.textContent = formatPrice(0);
    if (cartSubtotal) cartSubtotal.textContent = formatPrice(0);
    if (cartTax) cartTax.textContent = formatPrice(0);
    if (cartShipping) cartShipping.textContent = formatPrice(0);
    return;
  }

  let subtotal = 0;
  cartItems.innerHTML = cart.map((item, index) => {
    const itemTotal = item.price * item.qty;
    subtotal += itemTotal;
    return `
      <div class="cart-item">
        <div class="item-details">
          <h4>${item.name}</h4>
          <p>${item.desc || 'منتج متميز'}</p>
          <small>تمت الإضافة: ${new Date(item.addedDate).toLocaleDateString('ar-SA')}</small>
        </div>
        <div class="item-footer">
          <div class="item-controls">
            <button class="qty-btn" onclick="updateQty(${index}, ${item.qty - 1})" title="تقليل الكمية"><i class="fas fa-minus"></i></button>
            <input type="number" value="${item.qty}" min="1" style="width: 50px; text-align: center; background: rgba(212, 175, 55, 0.05); border: 1px solid #d4af37; color: #e0e0e0; border-radius: 5px; padding: 0.4rem;" onchange="updateQty(${index}, parseInt(this.value))">
            <button class="qty-btn" onclick="updateQty(${index}, ${item.qty + 1})" title="زيادة الكمية"><i class="fas fa-plus"></i></button>
          </div>
          <div class="item-price">${formatPrice(itemTotal)}</div>
          <button class="remove-btn" onclick="removeFromCart(${index})"><i class="fas fa-trash"></i> حذف</button>
        </div>
      </div>
    `;
  }).join('');

  const tax = Math.round(subtotal * 0.15);
  const shipping = subtotal > 500 ? 0 : 50;
  const total = subtotal + tax + shipping;

  if (cartSubtotal) cartSubtotal.textContent = formatPrice(subtotal);
  if (cartTax) cartTax.textContent = formatPrice(tax);
  if (cartShipping) {
    cartShipping.innerHTML = shipping === 0 ? 
      `<span style="color: #4caf50;">مجاني</span>` : 
      formatPrice(shipping);
  }
  if (cartTotal) cartTotal.innerHTML = `<strong>${formatPrice(total)}</strong>`;
}

function openCart() {
  const modal = document.getElementById('cart-modal');
  if (modal) {
    modal.classList.add('active');
    renderCart();
    document.body.style.overflow = 'hidden';
  }
}

function closeCart() {
  const modal = document.getElementById('cart-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

function showOrderDetails() {
  const detailsForm = document.getElementById('order-details-form');
  const cartItems = document.getElementById('cart-items');
  const cartSummary = document.querySelector('.cart-summary');
  const orderDetailsBtn = document.getElementById('order-details-btn');
  
  if (detailsForm) {
    if (detailsForm.style.display === 'none' || !detailsForm.style.display) {
      detailsForm.style.display = 'block';
      if (orderDetailsBtn) {
        orderDetailsBtn.innerHTML = '<i class="fas fa-chevron-up"></i> إخفاء تفاصيل الطلب';
      }
      // Scroll إلى أعلى النموذج
      setTimeout(() => {
        detailsForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } else {
      detailsForm.style.display = 'none';
      if (orderDetailsBtn) {
        orderDetailsBtn.innerHTML = '<i class="fas fa-clipboard"></i> إضافة تفاصيل الطلب';
      }
    }
  }
}

function saveOrderDetails() {
  const form = document.getElementById('order-details-form');
  if (!form) return;

  userDetails = {
    name: document.getElementById('customer-name')?.value || '',
    email: document.getElementById('customer-email')?.value || '',
    phone: document.getElementById('customer-phone')?.value || '',
    country: document.getElementById('customer-country')?.value || '',
    city: document.getElementById('customer-city')?.value || ''
  };

  localStorage.setItem('userDetails', JSON.stringify(userDetails));
  showNotification('تم حفظ بيانات الطلب');
}

function generateInvoice() {
  if (cart.length === 0) {
    alert('السلة فارغة!');
    return;
  }

  let subtotal = 0;
  const invoiceNum = `INV-${Date.now()}`;
  const invoiceDate = new Date().toLocaleDateString('ar-SA');
  
  let invoiceHTML = `
    <!DOCTYPE html>
    <html dir="rtl" lang="ar">
    <head>
      <meta charset="utf-8">
      <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
      <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"><\/script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"><\/script>
      <script>
        function savePDFLocal() {
          const invoiceNum = document.querySelector('strong') ? document.querySelectorAll('strong')[4].textContent : 'INV-' + Date.now();
          const filename = 'فاتورة_' + invoiceNum + '_' + new Date().toLocaleDateString('ar-SA') + '.pdf';
          
          // استخراج بيانات الفاتورة
          const invoiceElement = document.querySelector('.invoice');
          
          if (!invoiceElement) {
            alert('⚠️ لم يتم العثور على الفاتورة!');
            return;
          }
          
          alert('⏳ جاري تحضير الفاتورة...');
          
          // استخدام html2canvas لعمل صورة من الفاتورة
          html2canvas(invoiceElement, {
            scale: 2,
            useCORS: true,
            allowTaint: true,
            backgroundColor: '#ffffff',
            logging: false,
            letterRendering: true
          }).then(function(canvas) {
            const imgWidth = 210; // عرض A4 بـ mm
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            
            const jsPDF = window.jspdf ? window.jspdf.jsPDF : window.jsPDF;
            if (!jsPDF) {
              alert('❌ مكتبة jsPDF غير محملة. يرجى إعادة تحميل الصفحة');
              downloadInvoiceHTML(filename);
              return;
            }
            const pdf = new jsPDF({
              orientation: 'portrait',
              unit: 'mm',
              format: 'a4'
            });
            
            let heightLeft = imgHeight;
            let position = 0;
            const imgData = canvas.toDataURL('image/jpeg', 0.95);
            
            // إذا كانت الصورة أطول من صفحة واحدة
            while (heightLeft >= 0) {
              pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
              heightLeft -= 297; // ارتفاع صفحة A4
              position -= 297;
              if (heightLeft > 0) {
                pdf.addPage();
              }
            }
            
            pdf.save(filename);
            alert('✅ تم حفظ الفاتورة كـ PDF بنجاح!');
          }).catch(function(err) {
            console.error('Canvas Error:', err);
            alert('⚠️ خطأ في إنشاء الصورة، جاري البحث عن بديل...');
            downloadInvoiceHTML(filename);
          });
        }
        
        function downloadInvoiceHTML(filename) {
          const link = document.createElement('a');
          const html = document.documentElement.innerHTML;
          link.setAttribute('href', 'data:text/html;charset=utf-8,' + encodeURIComponent(html));
          link.setAttribute('download', filename.replace('.pdf', '.html'));
          link.style.display = 'none';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          alert('✅ تم حفظ الفاتورة كـ HTML!');
        }
      <\/script>
      <style>
        * { box-sizing: border-box; }
        @media print {
          body { margin: 0; padding: 0; }
          .invoice { page-break-inside: avoid; }
          .no-print { display: none !important; }
        }
        html, body { 
          font-family: 'Cairo', Arial, sans-serif; 
          background: white; 
          color: #333; 
          margin: 0; 
          padding: 0;
          width: 100%;
          height: 100%;
        }
        body { 
          background: white;
          padding: 10px;
        }
        .invoice { 
          padding: 2rem; 
          background: white; 
          max-width: 900px; 
          margin: 0 auto;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
          border-radius: 8px;
        }
        .header { 
          text-align: center; 
          border-bottom: 3px solid #d4af37; 
          padding-bottom: 1.5rem; 
          margin-bottom: 2rem; 
        }
        .header h1 { 
          color: #d4af37; 
          margin: 0; 
          font-size: 2rem;
          font-weight: 900;
        }
        .header p { 
          margin: 0.5rem 0; 
          color: #666; 
          font-size: 0.95rem;
          font-weight: 600;
        }
        .customer-info { 
          display: grid; 
          grid-template-columns: 1fr 1fr; 
          gap: 2rem; 
          margin-bottom: 2rem; 
          padding: 1.5rem; 
          background: #f9f9f9; 
          border-radius: 8px; 
          border-left: 4px solid #d4af37;
          border: 2px solid #d4af37;
        }
        .info-section { }
        .info-section h3 { 
          color: #d4af37; 
          margin-top: 0; 
          border-bottom: 2px solid #d4af37; 
          padding-bottom: 0.5rem; 
          font-size: 1rem;
          font-weight: 700;
        }
        .info-section p { 
          margin: 0.5rem 0; 
          font-size: 0.9rem;
          line-height: 1.6;
        }
        .info-section strong { 
          color: #000; 
          font-weight: 600;
        }
        table { 
          width: 100%; 
          border-collapse: collapse; 
          margin-bottom: 2rem;
          border: 2px solid #d4af37;
        }
        th { 
          background: #d4af37; 
          color: #000; 
          padding: 0.8rem;
          text-align: right; 
          font-weight: 700; 
          font-size: 0.95rem;
        }
        td { 
          padding: 0.8rem; 
          border-bottom: 1px solid #ddd; 
          text-align: right;
          font-size: 0.9rem;
        }
        tr:nth-child(even) { background: #fafafa; }
        tr:nth-child(odd) { background: #ffffff; }
        .summary { 
          background: #f0f0f0; 
          padding: 1.5rem; 
          border-radius: 8px; 
          margin: 2rem 0; 
          border: 2px solid #d4af37;
        }
        .summary-row { 
          display: flex; 
          justify-content: space-between; 
          margin: 0.7rem 0; 
          font-size: 0.95rem;
          font-weight: 600;
        }
        .summary-row strong { color: #d4af37; }
        .summary-row.total { 
          font-weight: bold; 
          color: #d4af37; 
          font-size: 1.2rem; 
          border-top: 2px solid #d4af37; 
          padding-top: 0.7rem; 
          margin-top: 1rem; 
        }
        .footer { 
          text-align: center; 
          color: #666; 
          font-size: 0.9rem; 
          border-top: 2px solid #ddd; 
          padding-top: 1rem; 
          margin-top: 2rem;
          font-weight: 600;
        }
        .footer p { 
          margin: 0.3rem 0;
          line-height: 1.5;
        }
        .controls { 
          text-align: center; 
          margin: 2rem 0; 
          gap: 1rem; 
          display: flex; 
          justify-content: center; 
          flex-wrap: wrap; 
        }
        .controls button { 
          padding: 0.8rem 1.5rem; 
          font-size: 0.9rem; 
          border: none; 
          border-radius: 5px; 
          cursor: pointer; 
          font-family: 'Cairo', Arial; 
          font-weight: bold; 
          transition: all 0.3s; 
        }
        .btn-print { background: #d4af37; color: #000; }
        .btn-print:hover { background: #e0c856; }
        .btn-pdf { background: #ff6b6b; color: white; }
        .btn-pdf:hover { background: #ff5252; }
        .btn-close { background: #999; color: white; }
        .btn-close:hover { background: #777; }
      </style>
    </head>
    <body>
      <div class="invoice">
        <div class="header">
          <h1>🎮 العبدلي جيمينغ</h1>
          <p>متجر متخصص في الألعاب والإكسسوارات الاحترافية</p>
          <p>📄 فاتورة الطلب الرسمية</p>
        </div>
        
        <div class="customer-info">
          <div class="info-section">
            <h3>📋 بيانات الطلب</h3>
            <p><strong>الاسم:</strong> ${userDetails.name || 'لم يتم إدخاله'}</p>
            <p><strong>البريد:</strong> ${userDetails.email || 'لم يتم إدخاله'}</p>
            <p><strong>الهاتف:</strong> ${userDetails.phone || 'لم يتم إدخاله'}</p>
            <p><strong>المدينة:</strong> ${userDetails.city || 'لم يتم إدخاله'}</p>
            <p><strong>الدولة:</strong> ${userDetails.country || 'لم يتم إدخاله'}</p>
          </div>
          <div class="info-section">
            <h3>📌 معلومات الفاتورة</h3>
            <p><strong>رقم الفاتورة:</strong> ${invoiceNum}</p>
            <p><strong>التاريخ:</strong> ${invoiceDate}</p>
            <p><strong>الوقت:</strong> ${new Date().toLocaleTimeString('ar-SA')}</p>
            <p><strong>الحالة:</strong> ✓ قيد المعالجة</p>
            <p><strong>العملة:</strong> ${currencyRates[currentCurrency].symbol}</p>
          </div>
        </div>
        
        <table>
          <thead>
            <tr>
              <th>المنتج</th>
              <th>السعر</th>
              <th>الكمية</th>
              <th>المجموع</th>
            </tr>
          </thead>
          <tbody>
  `;

  cart.forEach((item, idx) => {
    const itemTotal = item.price * item.qty;
    subtotal += itemTotal;
    invoiceHTML += `
      <tr>
        <td>${idx + 1}. ${item.name}</td>
        <td>${formatPrice(item.price)}</td>
        <td>${item.qty}</td>
        <td><strong>${formatPrice(itemTotal)}</strong></td>
      </tr>
    `;
  });

  const tax = Math.round(subtotal * 0.15);
  const shipping = subtotal > 500 ? 0 : 50;
  const total = subtotal + tax + shipping;

  invoiceHTML += `
          </tbody>
        </table>
        
        <div class="summary">
          <div class="summary-row">
            <span>المجموع الفرعي:</span>
            <strong>${formatPrice(subtotal)}</strong>
          </div>
          <div class="summary-row">
            <span>الضريبة (15%):</span>
            <strong>${formatPrice(tax)}</strong>
          </div>
          <div class="summary-row">
            <span>الشحن:</span>
            <strong>${shipping === 0 ? '✓ مجاني' : formatPrice(shipping)}</strong>
          </div>
          <div class="summary-row total">
            <span>الإجمالي النهائي:</span>
            <strong>${formatPrice(total)}</strong>
          </div>
        </div>
        
        <div class="controls no-print" id="invoice-controls">
          <button class="btn-print" onclick="window.print()">🖨️ طباعة الفاتورة</button>
          <button class="btn-pdf" onclick="handleSavePDF()">📥 حفظ PDF</button>
          <button class="btn-close" onclick="window.close()">✕ إغلاق</button>
        </div>
        
        <script>
          function handleSavePDF() {
            if (typeof html2canvas === 'undefined' || typeof jspdf === 'undefined') {
              alert('⏳ المكتبات قيد التحميل... جاري الانتظار');
              setTimeout(handleSavePDF, 1000);
              return;
            }
            if (window.opener) {
              window.opener.savePDF();
            } else {
              savePDFLocal();
            }
          }
        </script>
        
        <div class="footer">
          <p style="font-weight: bold; color: #d4af37; margin-bottom: 1rem;">✓ شكراً لتعاملك معنا</p>
          <p>☎️ للتواصل: 783650750 | 📧 sales@alabdali-gaming.com</p>
          <p>🌐 support@alabdali-gaming.com</p>
          <p style="margin-top: 1.5rem; border-top: 1px solid #ccc; padding-top: 1rem;">العبدلي جيمينغ © 2025 - جميع الحقوق محفوظة | خدمة عملاء متميزة 24/7</p>
        </div>
      </div>
    </body>
    </html>
  `;

  const printWindow = window.open('', '', 'width=1000,height=900');
  printWindow.document.write(invoiceHTML);
  printWindow.document.close();
  
  // حفظ الفاتورة في session storage للاستخدام في PDF
  window.lastInvoiceHTML = invoiceHTML;
  window.lastInvoiceNum = invoiceNum;
  window.lastInvoiceDate = invoiceDate;
  
  setTimeout(() => {
    if (!printWindow.closed) {
      printWindow.focus();
    }
  }, 500);
}

function savePDF() {
  if (!window.lastInvoiceHTML) {
    showNotification('⚠️ الرجاء فتح الفاتورة أولاً');
    return;
  }

  showNotification('⏳ جاري تحضير ملف PDF...');
  
  const invoiceNum = window.lastInvoiceNum || `INV-${Date.now()}`;
  const filename = `فاتورة_${invoiceNum}_${new Date().toLocaleDateString('ar-SA')}.pdf`;
  
  // إنشاء عنصر مؤقت يحتوي على الفاتورة
  const element = document.createElement('div');
  element.innerHTML = window.lastInvoiceHTML;
  element.style.cssText = 'position: absolute; left: -9999px; top: -9999px;';
  document.body.appendChild(element);
  
  // البحث عن عنصر الفاتورة
  const invoiceElement = element.querySelector('.invoice');
  
  if (!invoiceElement) {
    document.body.removeChild(element);
    showNotification('⚠️ خطأ: لم يتم العثور على بيانات الفاتورة');
    return;
  }
  
  // استخدام html2canvas و jsPDF لعمل صورة من الفاتورة
  if (typeof html2canvas !== 'undefined' && typeof jspdf !== 'undefined') {
    html2canvas(invoiceElement, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      logging: false,
      letterRendering: true
    }).then(function(canvas) {
      const imgWidth = 210; // عرض A4
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      const jsPDF = window.jspdf ? window.jspdf.jsPDF : window.jsPDF;
      if (!jsPDF) {
        document.body.removeChild(element);
        showNotification('❌ خطأ: مكتبة jsPDF غير محملة بشكل صحيح');
        return;
      }
      
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });
      
      let heightLeft = imgHeight;
      let position = 0;
      const imgData = canvas.toDataURL('image/jpeg', 0.95);
      
      while (heightLeft >= 0) {
        pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
        heightLeft -= 297;
        position -= 297;
        if (heightLeft > 0) {
          pdf.addPage();
        }
      }
      
      pdf.save(filename);
      document.body.removeChild(element);
      showNotification('✅ تم حفظ الفاتورة بنجاح!');
    }).catch(function(err) {
      console.error('Canvas Error:', err);
      document.body.removeChild(element);
      showNotification('❌ خطأ في إنشاء الفاتورة');
    });
  } else {
    console.error('html2canvas:', typeof html2canvas);
    console.error('jspdf:', typeof jspdf);
    document.body.removeChild(element);
    
    // محاولة إعادة تحميل المكتبات
    showNotification('⏳ جاري تحميل المكتبات مجدداً...');
    
    // تحميل المكتبات ديناميكياً
    loadLibraries().then(() => {
      setTimeout(() => savePDF(), 500); // إعادة المحاولة
    }).catch(() => {
      showNotification('❌ خطأ: المكتبات غير متاحة. يرجى التحقق من الإنترنت وحاول مجدداً');
    });
  }
}

function loadLibraries() {
  return Promise.all([
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js'),
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js')
  ]);
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

function downloadViaCanvas(filename) {
  if (!filename) {
    filename = window.lastInvoiceNum ? `فاتورة_${window.lastInvoiceNum}.html` : 'invoice.html';
  }
  
  showNotification('📥 جاري حفظ الفاتورة كـ HTML...');
  
  // طريقة بديلة: حفظ كـ HTML
  const link = document.createElement('a');
  link.setAttribute('href', 'data:text/html;charset=utf-8,' + encodeURIComponent(window.lastInvoiceHTML));
  link.setAttribute('download', filename.replace('.pdf', '.html'));
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function showNotification(message) {
  const notif = document.createElement('div');
  notif.textContent = message;
  notif.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: linear-gradient(135deg, #d4af37, #ffcc00);
    color: black;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    font-weight: 700;
    z-index: 3000;
    animation: slideIn 0.3s ease;
    box-shadow: 0 5px 20px rgba(0,0,0,0.3);
  `;
  document.body.appendChild(notif);
  setTimeout(() => notif.remove(), 3000);
}

document.addEventListener('DOMContentLoaded', () => {
  // فحص تحميل المكتبات المطلوبة
  setTimeout(() => {
    if (typeof html2canvas === 'undefined' || typeof jspdf === 'undefined') {
      console.warn('⚠️ تحذير: المكتبات المطلوبة لحفظ PDF قيد التحميل...');
    }
  }, 2000);
  
  // تهيئة الموضوع (Dark/Light Mode)
  initTheme();
  
  renderProducts();
  renderBundles();
  updateCartCount();

  const cartBtn = document.getElementById('cart-btn');
  const closeModal = document.getElementById('close-modal');
  const checkoutBtn = document.getElementById('checkout-btn');
  const categoryFilter = document.getElementById('category-filter');
  const searchInput = document.getElementById('search-input');
  const priceFilter = document.getElementById('price-filter');
  const currencySelect = document.getElementById('currency-select');
  const orderDetailsBtn = document.getElementById('order-details-btn');
  const saveDetailsBtn = document.getElementById('save-details-btn');
  const themeToggleBtn = document.getElementById('theme-toggle');

  if (cartBtn) cartBtn.addEventListener('click', openCart);
  if (closeModal) closeModal.addEventListener('click', closeCart);
  if (checkoutBtn) checkoutBtn.addEventListener('click', generateInvoice);
  if (categoryFilter) categoryFilter.addEventListener('change', (e) => renderProducts(e.target.value));
  if (searchInput) searchInput.addEventListener('input', () => renderProducts(document.getElementById('category-filter')?.value || 'all'));
  if (priceFilter) priceFilter.addEventListener('change', () => renderProducts(document.getElementById('category-filter')?.value || 'all'));
  if (currencySelect) currencySelect.addEventListener('change', (e) => {
    currentCurrency = e.target.value;
    renderCart();
  });
  if (orderDetailsBtn) orderDetailsBtn.addEventListener('click', showOrderDetails);
  if (saveDetailsBtn) saveDetailsBtn.addEventListener('click', saveOrderDetails);
  if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);

  document.getElementById('cart-modal')?.addEventListener('click', (e) => {
    if (e.target.id === 'cart-modal') closeCart();
  });
});

window.addEventListener('beforeprint', () => {
  document.body.style.background = 'white';
});

window.addEventListener('afterprint', () => {
  const body = document.body;
  if (body.classList.contains('light-mode')) {
    body.style.background = 'linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%)';
  } else {
    body.style.background = 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)';
  }
});

// ===== DARK MODE / LIGHT MODE ===== 
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  const themeToggleBtn = document.getElementById('theme-toggle');
  
  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    if (themeToggleBtn) themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    document.body.classList.remove('light-mode');
    if (themeToggleBtn) themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
  }
}

function toggleTheme() {
  const body = document.body;
  const themeToggleBtn = document.getElementById('theme-toggle');
  
  if (body.classList.contains('light-mode')) {
    // تبديل إلى الوضع الليلي
    body.classList.remove('light-mode');
    localStorage.setItem('theme', 'dark');
    if (themeToggleBtn) themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
    showNotification('✓ تم تفعيل الوضع الليلي');
  } else {
    // تبديل إلى الوضع النهاري
    body.classList.add('light-mode');
    localStorage.setItem('theme', 'light');
    if (themeToggleBtn) themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    showNotification('✓ تم تفعيل الوضع النهاري');
  }
}
