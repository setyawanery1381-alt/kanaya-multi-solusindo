/**
 * PT Kanaya Multi Solusindo - Interactive App Engine & CMS Logic
 * 100% Matching Visual Mockup & PRD Requirements
 * Enhanced with Direct Photo / Image File Upload (FileReader & Base64 Compression)
 */

window.currentLang = (function() {
  try {
    const s = localStorage.getItem('KMS_CURRENT_LANG');
    if (s) return s;
  } catch (e) {}
  const b = (typeof navigator !== 'undefined' ? (navigator.language || (navigator.languages && navigator.languages[0]) || '') : '').toLowerCase();
  return b.startsWith('en') ? 'en' : 'id';
})();
var currentLang = window.currentLang;
window.currentSlideIndex = 0;
var currentSlideIndex = 0;

let currentCategory = 'all';
let currentSubCategory = 'all';
let searchQuery = '';
let selectedProduct = null;

// Hero Slideshow State
let slideInterval = null;
const SLIDE_DURATION = 5000; // 5 seconds per slide
let isSlidePaused = false;

// Admin Authentication State (Default bawaan awal sebelum diubah oleh klien)
const DEFAULT_ADMIN_USER = 'admin';
const DEFAULT_ADMIN_PASS = 'kanaya2026';

document.addEventListener('DOMContentLoaded', () => {
  initIcons();
  refreshAllPublicContent();
  initCatalogFilters();
  handleRouting();
  checkAdminButtonVisibility();
  initHeroTouchSwipe();

  // Hash route listener
  window.addEventListener('hashchange', () => {
    handleRouting();
    checkAdminButtonVisibility();
  });

  // Search input listener
  const searchInput = document.getElementById('catalog-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderProducts();
    });
  }

  // Mobile menu button
  const mobileBtn = document.getElementById('mobile-menu-btn');
  if (mobileBtn) {
    mobileBtn.addEventListener('click', toggleMobileMenu);
  }

  // Close mobile menu on outside tap
  document.addEventListener('click', (e) => {
    const drawer = document.getElementById('mobile-drawer');
    const btn = document.getElementById('mobile-menu-btn');
    if (drawer && !drawer.classList.contains('hidden') && !drawer.contains(e.target) && btn && !btn.contains(e.target)) {
      toggleMobileMenu();
    }
  });
});

function initIcons() {
  if (window.lucide) {
    lucide.createIcons();
  }
}

/**
 * ==================== IMAGE FILE UPLOADER HELPER ====================
 * Reads uploaded file via FileReader, compresses using in-memory Canvas,
 * displays instant preview, and sets value for form submission.
 */
function handleImageFileInput(fileInput, previewImgId, targetHiddenId) {
  const file = fileInput.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const img = new Image();
    img.onload = function() {
      // Resize to max 1200px width/height to keep localStorage fast & lightweight
      const canvas = document.createElement('canvas');
      let width = img.width;
      let height = img.height;
      const maxDim = 1200;
      if (width > maxDim || height > maxDim) {
        if (width > height) {
          height = Math.round((height * maxDim) / width);
          width = maxDim;
        } else {
          width = Math.round((width * maxDim) / height);
          height = maxDim;
        }
      }
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);
      
      const isPng = file.type === 'image/png';
      const dataUrl = canvas.toDataURL(isPng ? 'image/png' : 'image/jpeg', 0.88);

      const preview = document.getElementById(previewImgId);
      if (preview) {
        preview.src = dataUrl;
        preview.classList.remove('hidden');
      }
      const target = document.getElementById(targetHiddenId);
      if (target) {
        target.value = dataUrl;
      }
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

/**
 * ==================== REFRESH PUBLIC CONTENT ====================
 */
function refreshAllPublicContent() {
  const data = window.KMS_DATA;
  if (!data) return;

  const c = data.company.contacts || {};

  // Compute Active URLs
  let waClean = (c.whatsappNumber || c.whatsapp || '628131052840').replace(/[^0-9]/g, '');
  if (waClean.startsWith('0')) {
    waClean = '62' + waClean.slice(1);
  }
  const waUrl = `https://wa.me/${waClean}?text=Halo%20PT%20Kanaya%20Multi%20Solusindo,%20saya%20ingin%20berkonsultasi%20mengenai%20kebutuhan%20pengadaan%20barang.`;
  const emailSalesUrl = `mailto:${c.emailSales || 'sales@kanayamulti.com'}`;
  const emailAdminUrl = `mailto:${c.emailAdmin || 'admin@kanayamulti.com'}`;
  let igUrl = c.instagramUrl;
  if (!igUrl && c.instagram) {
    igUrl = `https://instagram.com/${c.instagram.replace('@', '').trim()}`;
  }
  if (!igUrl) {
    igUrl = 'https://instagram.com/kanayamultisolusindo';
  }

  // Header & Contact Bars (Text)
  const topEmail = document.getElementById('top-email');
  const topWa = document.getElementById('top-wa');
  const topIg = document.getElementById('top-ig');
  const footerAddress = document.getElementById('footer-address');
  const footerPhone = document.getElementById('footer-phone');
  const footerEmailSales = document.getElementById('footer-email-sales');
  const footerEmailAdmin = document.getElementById('footer-email-admin');
  const footerIg = document.getElementById('footer-ig');
  const footerTagline = document.getElementById('footer-tagline');

  // TikTok & LinkedIn URLs
  const tiktokUrl = c.tiktokUrl || (c.tiktok ? `https://www.tiktok.com/@${c.tiktok.replace('@', '').trim()}` : 'https://www.tiktok.com/@pt_kanayamultisolusindo?_r=1&_t=ZS-99aLXp9ql8C');
  const linkedinUrl = c.linkedinUrl || 'https://www.linkedin.com/in/pt-kanaya-multi-solusindo-661959435/';

  if (topEmail) topEmail.textContent = c.emailAdmin || 'admin@kanayamulti.com';
  if (topWa) topWa.textContent = c.whatsapp || '0813-1052-840';
  if (topIg) topIg.textContent = c.instagram || '@kanayamultisolusindo';
  if (footerAddress) footerAddress.textContent = c.address;
  if (footerPhone) footerPhone.textContent = c.whatsapp || '0813-1052-840';
  if (footerEmailSales) footerEmailSales.textContent = c.emailSales || 'sales@kanayamulti.com';
  if (footerEmailAdmin) footerEmailAdmin.textContent = c.emailAdmin || 'admin@kanayamulti.com';
  if (footerTagline) footerTagline.textContent = c.footerTagline || data.company.tagline;
  const footerHours = document.getElementById('footer-hours');
  if (footerHours) footerHours.textContent = c.operationalHours || 'Senin - Jumat | 08.00 - 17.00 WIB';
  const footerMapsBtn = document.getElementById('footer-maps-btn');
  if (footerMapsBtn) footerMapsBtn.href = c.mapsUrl || 'https://maps.google.com/?q=Ruko+Sentra+EM.6+Harapan+Indah+Bekasi';

  // Header TikTok & LinkedIn
  const topTiktok = document.getElementById('top-tiktok');
  const topTiktokLink = document.getElementById('top-tiktok-link');
  const topLinkedin = document.getElementById('top-linkedin');
  const topLinkedinLink = document.getElementById('top-linkedin-link');
  if (topTiktok) topTiktok.textContent = c.tiktok || 'TikTok';
  if (topTiktokLink) topTiktokLink.href = tiktokUrl;
  if (topLinkedin) topLinkedin.textContent = c.linkedin || 'LinkedIn';
  if (topLinkedinLink) topLinkedinLink.href = linkedinUrl;

  // Header & Navigation Action Links (Hrefs)
  const topEmailLink = document.getElementById('top-email-link');
  const topWaLink = document.getElementById('top-wa-link');
  const topIgLink = document.getElementById('top-ig-link');
  const navCtaWa = document.getElementById('nav-cta-wa-btn');
  const mobileCtaWa = document.getElementById('mobile-cta-wa-btn');
  const floatingWaBtn = document.getElementById('floating-wa-btn');
  const homeBottomCtaWa = document.getElementById('home-bottom-cta-wa');

  if (topEmailLink) topEmailLink.href = emailAdminUrl;
  if (topWaLink) topWaLink.href = waUrl;
  if (topIgLink) topIgLink.href = igUrl;
  if (navCtaWa) navCtaWa.href = waUrl;
  if (mobileCtaWa) mobileCtaWa.href = waUrl;
  if (floatingWaBtn) floatingWaBtn.href = waUrl;
  if (homeBottomCtaWa) homeBottomCtaWa.href = waUrl;

  // Contact Page Elements
  const cWa = document.getElementById('contact-wa-display');
  const cEmailSales = document.getElementById('contact-email-sales');
  const cEmailAdmin = document.getElementById('contact-email-admin');
  const cAddress = document.getElementById('contact-address-display');
  const cIg = document.getElementById('contact-ig-display');
  const contactWaLink = document.getElementById('contact-wa-link');
  const contactEmailSalesLink = document.getElementById('contact-email-sales-link');
  const contactEmailAdminLink = document.getElementById('contact-email-admin-link');
  const contactIgLink = document.getElementById('contact-ig-link');

  const contactTiktokLink = document.getElementById('contact-tiktok-link');
  const contactTiktokDisplay = document.getElementById('contact-tiktok-display');
  const contactLinkedinLink = document.getElementById('contact-linkedin-link');
  const contactLinkedinDisplay = document.getElementById('contact-linkedin-display');

  if (cWa) cWa.textContent = c.whatsapp || '0813-1052-840';
  if (cEmailSales) cEmailSales.textContent = c.emailSales || 'sales@kanayamulti.com';
  if (cEmailAdmin) cEmailAdmin.textContent = c.emailAdmin || 'admin@kanayamulti.com';
  if (cAddress) cAddress.textContent = c.address;
  if (cIg) cIg.textContent = c.instagram || '@kanayamultisolusindo';
  if (contactTiktokDisplay) contactTiktokDisplay.textContent = c.tiktok || '@pt_kanayamultisolusindo';
  if (contactLinkedinDisplay) contactLinkedinDisplay.textContent = c.linkedin || 'PT Kanaya Multi Solusindo';

  if (contactWaLink) contactWaLink.href = waUrl;
  if (contactEmailSalesLink) contactEmailSalesLink.href = emailSalesUrl;
  if (contactEmailAdminLink) contactEmailAdminLink.href = emailAdminUrl;
  if (contactIgLink) contactIgLink.href = igUrl;
  if (contactTiktokLink) contactTiktokLink.href = tiktokUrl;
  if (contactLinkedinLink) contactLinkedinLink.href = linkedinUrl;

  // Dynamic Google Maps Embed & Navigation Link (Both Contact & Home Views)
  const mapAddressText = document.getElementById('map-address-text');
  const openGmapsLink = document.getElementById('open-gmaps-link');
  const gmapsIframe = document.getElementById('gmaps-iframe');
  const contactAddressMapLink = document.getElementById('contact-address-map-link');
  const homeMapAddressText = document.getElementById('home-map-address-text');
  const homeOpenGmapsLink = document.getElementById('home-open-gmaps-link');
  const homeGmapsIframe = document.getElementById('home-gmaps-iframe');

  const fullAddr = `${c.address || 'Ruko Sentra Harapan Indah'}${c.city ? ', ' + c.city : ', Bekasi'}`;
  if (mapAddressText) mapAddressText.textContent = fullAddr;
  if (homeMapAddressText) homeMapAddressText.textContent = fullAddr;
  const mapQuery = encodeURIComponent(fullAddr);
  const mapsHref = c.mapsUrl || `https://maps.google.com/?q=${mapQuery}`;
  if (openGmapsLink) openGmapsLink.href = mapsHref;
  if (homeOpenGmapsLink) homeOpenGmapsLink.href = mapsHref;
  if (contactAddressMapLink) contactAddressMapLink.href = mapsHref;
  if (gmapsIframe) gmapsIframe.src = `https://maps.google.com/maps?q=${mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  if (homeGmapsIframe) homeGmapsIframe.src = `https://maps.google.com/maps?q=${mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  // Footer Action Links (Hrefs & Labels)
  const footerWaLink = document.getElementById('footer-wa-link');
  const footerMailLink = document.getElementById('footer-mail-link');
  const footerIgLink = document.getElementById('footer-ig-link');
  const footerTiktokLink = document.getElementById('footer-tiktok-link');
  const footerLinkedinLink = document.getElementById('footer-linkedin-link');
  const footerContactWaLink = document.getElementById('footer-contact-wa-link');
  const footerContactEmailSalesLink = document.getElementById('footer-contact-email-sales-link');
  const footerContactEmailAdminLink = document.getElementById('footer-contact-email-admin-link');
  const footerContactIgLink = document.getElementById('footer-contact-ig-link');
  const footerContactTiktokLink = document.getElementById('footer-contact-tiktok-link');
  const footerContactLinkedinLink = document.getElementById('footer-contact-linkedin-link');
  const footerTiktok = document.getElementById('footer-tiktok');
  const footerLinkedin = document.getElementById('footer-linkedin');

  if (footerWaLink) footerWaLink.href = waUrl;
  if (footerMailLink) footerMailLink.href = emailAdminUrl;
  if (footerIgLink) footerIgLink.href = igUrl;
  if (footerTiktokLink) footerTiktokLink.href = tiktokUrl;
  if (footerLinkedinLink) footerLinkedinLink.href = linkedinUrl;
  if (footerContactWaLink) footerContactWaLink.href = waUrl;
  if (footerContactEmailSalesLink) footerContactEmailSalesLink.href = emailSalesUrl;
  if (footerContactEmailAdminLink) footerContactEmailAdminLink.href = emailAdminUrl;
  if (footerContactIgLink) footerContactIgLink.href = igUrl;
  if (footerContactTiktokLink) footerContactTiktokLink.href = tiktokUrl;
  if (footerContactLinkedinLink) footerContactLinkedinLink.href = linkedinUrl;
  if (footerTiktok) footerTiktok.textContent = c.tiktok || '@pt_kanayamultisolusindo';
  if (footerLinkedin) footerLinkedin.textContent = c.linkedin || 'PT Kanaya Multi Solusindo';

  // About Texts
  const homeAboutTitle = document.getElementById('home-about-title');
  const homeAboutText = document.getElementById('home-about-text');
  if (homeAboutTitle) homeAboutTitle.textContent = "Mengenal Kanaya Multi Solusindo";
  if (homeAboutText) homeAboutText.innerHTML = data.company.aboutShort;

  const aboutFullBox = document.getElementById('about-full-text');
  const isEn = (typeof currentLang !== 'undefined' && currentLang === 'en');
  if (aboutFullBox) {
    const text = isEn 
      ? "PT Kanaya Multi Solusindo is an Indonesian private enterprise specializing in general procurement and supply chain solutions for corporate and industrial sectors.\n\nFounded with a vision to become an agile, dependable partner, we bridge industrial enterprises with high-grade supplies ranging from plastic packaging, logistics consumables, office stationery, to safety gear and specialty products."
      : (data.company.aboutFull || '');
    const paragraphs = text.split('\n\n');
    aboutFullBox.innerHTML = `
      <h2 class="font-heading text-2xl sm:text-3xl font-extrabold text-corporate-dark mb-4">${isEn ? 'Company Profile' : 'Profil Perusahaan'}</h2>
      <div class="w-12 h-1 bg-amber-500 mb-6 rounded-full"></div>
      ${paragraphs.map(p => `<p>${p}</p>`).join('')}
    `;
  }

  // Vision & Mission
  const visionText = document.getElementById('about-vision-text');
  if (visionText) {
    visionText.textContent = isEn 
      ? `"To become an independent, distinguished, trustworthy enterprise oriented towards sustainability, and capable of creating meaningful positive impact for the surrounding environment."`
      : `"${data.vision}"`;
  }

  const missionsList = document.getElementById('about-missions-list');
  if (missionsList) {
    const missions = isEn ? [
      "Providing high-grade procurement supplies and services with uncompromising consistency and efficiency.",
      "Developing sustainable B2B partnerships grounded in transparency, integrity, and reciprocal growth.",
      "Delivering scheduled and adaptive delivery solutions aligned with strict operational timelines of client factories.",
      "Contributing responsibly toward social and environmental sustainability across our operations."
    ] : data.missions;
    missionsList.innerHTML = missions.map((m, idx) => `
      <li class="flex items-start gap-4">
        <span class="w-7 h-7 rounded-full bg-corporate text-amber-400 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">${idx + 1}</span>
        <p class="text-slate-700 text-sm leading-relaxed">${m}</p>
      </li>
    `).join('');
  }

  // Why Kanaya & Values Grid (Rendered inside view-about)
  renderWhyKanayaSection();
  renderValuesGrid('about-values-grid');

  // Hero Slideshow
  renderHeroSlides();
  startHeroSlider();

  // Home Categories, Clients, Gallery & Catalog
  initHomeCategories();
  initClientsGrid();
  initGalleryGrid();
  renderSolutionsGrid();
  renderStatsBar();
}

/**
 * Render Bagian Mengapa Perusahaan Memilih Bermitra dengan Kanaya & 4 Jaminan Kemitraan
 */
function renderWhyKanayaSection() {
  const isEn = (typeof currentLang !== 'undefined' && currentLang === 'en');
  const whyData = (window.KMS_DATA && window.KMS_DATA.whyKanaya) || (typeof DEFAULT_KMS_DATA !== 'undefined' ? DEFAULT_KMS_DATA.whyKanaya : null);
  if (!whyData) return;

  const badgeEl = document.getElementById('about-why-badge');
  const titleEl = document.getElementById('about-why-title');
  const subtitleEl = document.getElementById('about-why-subtitle');
  if (badgeEl) badgeEl.textContent = isEn ? "B2B COMPETITIVE ADVANTAGE" : (whyData.badge || "Keunggulan Kompetitif B2B");
  if (titleEl) titleEl.textContent = isEn ? "Why Do Leading Companies Partner with Kanaya?" : (whyData.title || "Mengapa Perusahaan Memilih Bermitra dengan Kanaya?");
  if (subtitleEl) subtitleEl.textContent = isEn ? "We are not just a goods supplier, but a strategic procurement partner ensuring official legality, authentic product quality, and punctual supply schedules for smooth industrial operations." : (whyData.subtitle || "Kami bukan sekadar penyedia barang, melainkan mitra strategis pengadaan...");

  const grid = document.getElementById('about-why-grid');
  if (grid) {
    const items = (isEn && window.KMS_WHY_ITEMS_I18N && window.KMS_WHY_ITEMS_I18N.en) ? window.KMS_WHY_ITEMS_I18N.en : (whyData.items || []);
    grid.innerHTML = items.map((val, idx) => {
      const icon = idx === 0 ? 'shield-check' : idx === 1 ? 'user-check' : 'award';
      const gradient = idx === 0 ? 'from-blue-600 to-corporate' : idx === 1 ? 'from-amber-500 to-amber-600' : 'from-emerald-600 to-teal-700';
      const badgeClass = idx === 0 ? 'bg-blue-50 text-blue-800 border-blue-200' : idx === 1 ? 'bg-amber-50 text-amber-800 border-amber-200' : 'bg-emerald-50 text-emerald-800 border-emerald-200';
      const iconBg = idx === 0 ? 'bg-gradient-to-br from-blue-700 to-corporate text-white' : idx === 1 ? 'bg-gradient-to-br from-amber-500 to-amber-600 text-slate-950' : 'bg-gradient-to-br from-emerald-600 to-teal-700 text-white';

      const points = val.points || [];

      return `
        <div class="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden flex flex-col justify-between group">
          <div class="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${gradient}"></div>
          <div>
            <div class="flex items-center justify-between gap-2 mb-6">
              <div class="w-14 h-14 rounded-2xl ${iconBg} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <i data-lucide="${icon}" class="w-7 h-7"></i>
              </div>
              <span class="text-[11px] font-bold px-3 py-1 rounded-full border ${badgeClass} shadow-xs">
                ${val.badge || (isEn ? 'Advantage' : 'Keunggulan')}
              </span>
            </div>
            <h4 class="font-heading font-extrabold text-xl text-corporate-dark mb-3 tracking-tight">
              ${val.title}
            </h4>
            <p class="text-slate-600 leading-relaxed text-sm mb-6">
              ${val.desc}
            </p>
          </div>
          <ul class="space-y-3 pt-6 border-t border-slate-100">
            ${points.map(pt => `
              <li class="flex items-start gap-2.5 text-xs text-slate-700">
                <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5"></i>
                <span class="font-medium">${pt}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      `;
    }).join('');
  }

  // Guarantees strip
  const strip = document.getElementById('about-guarantees-strip');
  if (strip) {
    const colors = [
      { bg: 'bg-blue-50', text: 'text-corporate', icon: 'file-check-2' },
      { bg: 'bg-amber-50', text: 'text-amber-600', icon: 'clock' },
      { bg: 'bg-emerald-50', text: 'text-emerald-600', icon: 'shield-check' },
      { bg: 'bg-purple-50', text: 'text-purple-600', icon: 'truck' }
    ];
    const guarantees = isEn ? [
      { title: "Valid Tax Invoices", desc: "Official PT legality & VAT compliant", icon: "file-check-2" },
      { title: "Fast Response", desc: "Quotations within hours", icon: "clock" },
      { title: "Quality Guarantee", desc: "Factory original standard", icon: "shield-check" },
      { title: "On-Time Supply", desc: "Reliable distribution fleet", icon: "truck" }
    ] : (whyData.guarantees || [
      { title: "Faktur Pajak Sah", desc: "Legalitas PT & PPN resmi", icon: "file-check-2" },
      { title: "Fast Response", desc: "Penawaran hitungan jam", icon: "clock" },
      { title: "Jaminan Kualitas", desc: "Standar pabrik teruji", icon: "shield-check" },
      { title: "Tepat Waktu", desc: "Armada pasokan andal", icon: "truck" }
    ]);

    strip.innerHTML = guarantees.map((g, idx) => {
      const c = colors[idx] || colors[0];
      return `
        <div class="flex items-center gap-3.5">
          <div class="w-12 h-12 rounded-xl ${c.bg} ${c.text} flex items-center justify-center flex-shrink-0 shadow-xs">
            <i data-lucide="${g.icon || c.icon}" class="w-6 h-6"></i>
          </div>
          <div>
            <div class="text-sm font-bold text-slate-900">${g.title}</div>
            <div class="text-xs text-slate-500">${g.desc}</div>
          </div>
        </div>
      `;
    }).join('');
  }

  if (window.lucide) lucide.createIcons();
}

function renderValuesGrid(elementId) {
  const container = document.getElementById(elementId);
  if (!container) return;
  const values = window.KMS_DATA.values || [];

  const defaultDetails = {
    "profesional": {
      badge: "Legalitas 100% Resmi",
      gradient: "from-blue-600 to-corporate",
      badgeClass: "bg-blue-50 text-blue-800 border-blue-200",
      iconBg: "bg-gradient-to-br from-blue-700 to-corporate text-white",
      points: [
        "Perusahaan Berbadan Hukum Resmi (PT)",
        "Faktur Pajak PPN & e-Billing Sah",
        "Sistem TOP (Term of Payment) Fleksibel"
      ]
    },
    "customer-focus": {
      badge: "Layanan Cepat & Fleksibel",
      gradient: "from-amber-500 to-amber-600",
      badgeClass: "bg-amber-50 text-amber-800 border-amber-200",
      iconBg: "bg-gradient-to-br from-amber-500 to-amber-600 text-slate-950",
      points: [
        "Dedicated Account Representative B2B",
        "Respon Cepat WhatsApp & Penawaran Hitungan Jam",
        "Pengiriman Terjadwal Langsung ke Pabrik / Gudang"
      ]
    },
    "kualitas-pelayanan": {
      badge: "Garansi Mutu 100%",
      gradient: "from-emerald-600 to-teal-700",
      badgeClass: "bg-emerald-50 text-emerald-800 border-emerald-200",
      iconBg: "bg-gradient-to-br from-emerald-600 to-teal-700 text-white",
      points: [
        "Produk Terstandarisasi K3 & Mutu Industri",
        "Garansi Retur 100% Jika Barang Cacat / Tidak Sesuai",
        "Penyediaan Sampel Produk untuk Trial"
      ]
    }
  };

  container.innerHTML = values.map((val, idx) => {
    const key = val.id || (idx === 0 ? "profesional" : idx === 1 ? "customer-focus" : "kualitas-pelayanan");
    const det = defaultDetails[key] || {
      badge: "Standar Korporat",
      gradient: "from-corporate to-blue-700",
      badgeClass: "bg-slate-100 text-slate-700 border-slate-200",
      iconBg: "bg-corporate text-white",
      points: [
        "Standar Mutu Industri Teruji",
        "Proses Pengadaan Cepat & Transparan",
        "Dukungan Penuh Tim Profesional"
      ]
    };

    return `
      <div class="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden flex flex-col justify-between group">
        <!-- Top Accent Gradient Line -->
        <div class="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${det.gradient}"></div>

        <div>
          <!-- Top Row: Icon Container + Badge -->
          <div class="flex items-center justify-between gap-3 mb-6">
            <div class="w-14 h-14 rounded-2xl ${det.iconBg} flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 flex-shrink-0">
              <i data-lucide="${val.icon || 'shield-check'}" class="w-7 h-7"></i>
            </div>
            <span class="px-3 py-1 rounded-full text-[11px] font-bold tracking-wide border ${det.badgeClass}">
              ${det.badge}
            </span>
          </div>

          <!-- Title & Subtitle -->
          <h3 class="font-heading font-extrabold text-xl text-slate-900 group-hover:text-corporate transition-colors mb-3">
            ${val.title}
          </h3>
          <p class="text-slate-600 text-sm leading-relaxed mb-6">
            ${val.desc}
          </p>

          <!-- Feature Bullet Points with Checkmarks -->
          <div class="space-y-3 pt-5 border-t border-slate-100 mb-6">
            ${det.points.map(pt => `
              <div class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                <div class="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i data-lucide="check" class="w-3 h-3 stroke-[3]"></i>
                </div>
                <span>${pt}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Card Bottom Link / Action -->
        <div class="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-corporate group-hover:text-amber-600 transition-colors">
          <span>Keunggulan Layanan B2B</span>
          <i data-lucide="arrow-right" class="w-4 h-4 group-hover:translate-x-1.5 transition-transform"></i>
        </div>
      </div>
    `;
  }).join('');
  initIcons();
}

/**
 * ==================== HERO SLIDESHOW LOGIC ====================
 */
function renderHeroSlides() {
  const wrapper = document.getElementById('hero-slides-wrapper');
  const dotsContainer = document.getElementById('hero-dots-container');
  if (!wrapper || !dotsContainer) return;

  const slides = window.KMS_DATA.heroSlides || [];
  if (slides.length === 0) return;

  // Build Slides HTML (Exact Classic Layout matching Photo 2, seamless background image)
  wrapper.innerHTML = slides.map((slide, idx) => `
    <div class="hero-slide ${idx === currentSlideIndex ? 'active' : ''}" id="hero-slide-${idx}">
      <!-- Slide Background Image with Clearer Visibility -->
      <img src="${slide.image}" alt="${slide.title}" class="hero-slide-bg">
      
      <!-- Content Container -->
      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-16 lg:py-24 w-full">
        <div class="max-w-2xl">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-corporate text-[11px] sm:text-xs font-bold mb-3 sm:mb-5 shadow-sm">
            <span class="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            <span>${slide.badge || 'PT Kanaya Multi Solusindo'}</span>
          </div>
          <h2 class="font-heading text-2xl sm:text-4xl lg:text-5xl font-black leading-tight text-corporate-dark mb-3 sm:mb-5 break-words">
            ${slide.title}
          </h2>
          <p class="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 font-normal">
            ${slide.subtitle}
          </p>
          <div class="flex items-center gap-2.5 sm:gap-4 flex-wrap">
            <a href="${slide.btnPrimaryLink || '#products'}" onclick="navigateTo('${(slide.btnPrimaryLink || 'products').replace('#', '')}')" 
               class="btn-gold px-4 sm:px-7 py-2.5 sm:py-3.5 rounded-xl text-xs sm:text-base font-bold flex items-center justify-center gap-1.5 sm:gap-2 shadow">
              <span>${slide.btnPrimaryText || 'Lihat Produk'}</span>
              <i data-lucide="arrow-right" class="w-3.5 h-3.5 sm:w-4 sm:h-4"></i>
            </a>
            <a href="${slide.btnSecondaryLink || '#contact'}" onclick="navigateTo('${(slide.btnSecondaryLink || 'contact').replace('#', '')}')" 
               class="btn-outline-navy px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-xl text-xs sm:text-base font-semibold transition flex items-center justify-center gap-1.5 sm:gap-2 bg-white/80 backdrop-blur-sm">
              <span>${slide.btnSecondaryText || 'Hubungi Kami'}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  // Build Dots
  dotsContainer.innerHTML = slides.map((_, idx) => `
    <div onclick="goToHeroSlide(${idx})" class="slide-dot ${idx === currentSlideIndex ? 'active' : ''}" id="slide-dot-${idx}"></div>
  `).join('');

  initIcons();
}

function updateHeroSlideUI() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.slide-dot');

  slides.forEach((slide, idx) => {
    if (idx === currentSlideIndex) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });

  dots.forEach((dot, idx) => {
    if (idx === currentSlideIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });

  const progressBar = document.getElementById('hero-progress-bar');
  if (progressBar) {
    progressBar.style.transition = 'none';
    progressBar.style.width = '0%';
    setTimeout(() => {
      progressBar.style.transition = `width ${SLIDE_DURATION}ms linear`;
      progressBar.style.width = '100%';
    }, 50);
  }
}

function nextHeroSlide() {
  const slides = window.KMS_DATA.heroSlides || [];
  if (slides.length <= 1) return;
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  updateHeroSlideUI();
}

function prevHeroSlide() {
  const slides = window.KMS_DATA.heroSlides || [];
  if (slides.length <= 1) return;
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  updateHeroSlideUI();
}

function goToHeroSlide(idx) {
  currentSlideIndex = idx;
  updateHeroSlideUI();
  restartHeroSlider();
}

function startHeroSlider() {
  if (slideInterval) clearInterval(slideInterval);
  updateHeroSlideUI();
  slideInterval = setInterval(() => {
    if (!isSlidePaused) {
      nextHeroSlide();
    }
  }, SLIDE_DURATION);
}

function pauseHeroSlider() {
  isSlidePaused = true;
}

function resumeHeroSlider() {
  isSlidePaused = false;
}

function restartHeroSlider() {
  startHeroSlider();
}

/**
 * Mobile Touch / Swipe Navigation for Hero Slider
 */
let heroTouchStartX = 0;
let heroTouchEndX = 0;

function initHeroTouchSwipe() {
  const slider = document.getElementById('hero-slider-box');
  if (!slider) return;

  slider.addEventListener('touchstart', (e) => {
    heroTouchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  slider.addEventListener('touchend', (e) => {
    heroTouchEndX = e.changedTouches[0].screenX;
    const threshold = 45;
    if (heroTouchEndX < heroTouchStartX - threshold) {
      nextHeroSlide();
      restartHeroSlider();
    } else if (heroTouchEndX > heroTouchStartX + threshold) {
      prevHeroSlide();
      restartHeroSlider();
    }
  }, { passive: true });
}

/**
 * ==================== ROUTING & NAVIGATION ====================
 */
function handleRouting() {
  const hash = window.location.hash.replace('#', '') || 'home';

  if (hash === 'admin') {
    if (!isAdminLoggedIn()) {
      openAdminLoginModal();
      window.location.hash = 'home';
      return;
    }
    showView('admin');
    initAdminDashboard();
    return;
  }

  if (hash.startsWith('product-detail')) {
    const params = new URLSearchParams(hash.split('?')[1]);
    const productId = params.get('id') || 'plastic-stretch-film';
    showProductDetail(productId);
    updateNavActive('products');
  } else {
    showView(hash);
    updateNavActive(hash);
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
  setTimeout(initIcons, 50);
}

function navigateTo(viewId) {
  window.location.hash = viewId;
}

function showView(viewId) {
  const views = document.querySelectorAll('.page-view');
  views.forEach(v => v.classList.add('hidden'));

  const targetView = document.getElementById(`view-${viewId}`);
  if (targetView) {
    targetView.classList.remove('hidden');
  } else {
    const homeView = document.getElementById('view-home');
    if (homeView) homeView.classList.remove('hidden');
  }

  if (viewId === 'products') {
    renderProducts();
  }
}

function updateNavActive(target) {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    if (link.getAttribute('data-nav') === target) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

function toggleMobileMenu() {
  const drawer = document.getElementById('mobile-drawer');
  const btn = document.getElementById('mobile-menu-btn');
  if (drawer) {
    const isHidden = drawer.classList.toggle('hidden');
    if (btn) {
      btn.innerHTML = isHidden ? '<i data-lucide="menu" class="w-6 h-6"></i>' : '<i data-lucide="x" class="w-6 h-6"></i>';
      initIcons();
    }
  }
}

function checkAdminButtonVisibility() {
  const adminBtns = document.querySelectorAll('.admin-only-btn');
  const logged = isAdminLoggedIn();
  adminBtns.forEach(btn => {
    if (logged) {
      btn.classList.remove('hidden');
    } else {
      btn.classList.add('hidden');
    }
  });
}

function goToAdminTab(tabName) {
  window.location.hash = 'admin';
  setTimeout(() => {
    switchAdminTab(tabName);
  }, 100);
}

/**
 * ==================== HOME CATEGORIES ====================
 */
function initHomeCategories() {
  const container = document.getElementById('home-categories-grid');
  if (!container) return;

  const isEn = (typeof currentLang !== 'undefined' && currentLang === 'en');
  const catI18n = (window.KMS_CATEGORIES_I18N && window.KMS_CATEGORIES_I18N[isEn ? 'en' : 'id']) || {};

  container.innerHTML = window.KMS_DATA.categories.map(cat => {
    const cData = catI18n[cat.id] || {};
    const desc = cData.desc || cat.desc;
    const itemCount = cData.itemCount || cat.itemCount || (isEn ? 'Procurement Solution' : 'Solusi Pengadaan');
    const btnText = isEn ? 'View Products' : 'Lihat Produk';

    return `
    <div class="bg-white rounded-2xl overflow-hidden card-hover group flex flex-col justify-between">
      <div>
        <div class="relative h-48 overflow-hidden bg-slate-100">
          <img src="${cat.image}" alt="${cat.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
          <div class="absolute top-3 left-3 bg-corporate text-amber-400 text-xs font-bold px-2.5 py-1 rounded-md shadow-sm">
            ${itemCount}
          </div>
        </div>
        <div class="p-6">
          <h3 class="font-heading font-extrabold text-lg text-corporate-dark mb-2 group-hover:text-corporate transition-colors">
            ${cat.name}
          </h3>
          <p class="text-slate-600 text-sm leading-relaxed line-clamp-2">
            ${desc}
          </p>
        </div>
      </div>
      <div class="px-6 pb-6 pt-0">
        <button onclick="navigateToCategory('${cat.id}')" class="w-full py-2.5 rounded-lg border border-slate-200 hover:border-corporate hover:bg-corporate hover:text-white text-xs font-bold text-slate-700 transition flex items-center justify-center gap-1.5">
          <span>${btnText}</span>
          <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
        </button>
      </div>
    </div>
  `;
  }).join('');
  initIcons();
}

function navigateToCategory(catId) {
  currentCategory = catId;
  currentSubCategory = 'all';
  window.location.hash = 'products';
  setTimeout(() => {
    updateCategoryPillState();
    renderProducts();
  }, 100);
}

/**
 * ==================== PRODUCT CATALOG & FILTER ====================
 */
function initCatalogFilters() {
  const list = document.getElementById('category-filter-list');
  if (!list) return;

  let html = `
    <button onclick="filterCategory('all')" id="cat-pill-all" class="cat-pill w-full text-left px-3.5 py-2 rounded-lg font-medium text-slate-700 hover:bg-slate-200/70 active">
      ${(typeof currentLang !== 'undefined' && currentLang === 'en') ? 'All Categories' : 'Semua Kategori'} (${window.KMS_DATA.products.length})
    </button>
  `;

  const isEn = (typeof currentLang !== 'undefined' && currentLang === 'en');
  window.KMS_DATA.categories.forEach(cat => {
    const count = window.KMS_DATA.products.filter(p => p.categoryId === cat.id).length;
    let catTitle = cat.name;
    if (isEn && window.KMS_CATEGORIES_I18N && window.KMS_CATEGORIES_I18N.en && window.KMS_CATEGORIES_I18N.en[cat.id]) {
      catTitle = window.KMS_CATEGORIES_I18N.en[cat.id].title;
    }
    html += `
      <button onclick="filterCategory('${cat.id}')" id="cat-pill-${cat.id}" class="cat-pill w-full text-left px-3.5 py-2 rounded-lg font-medium text-slate-700 hover:bg-slate-200/70">
        ${catTitle} ${count > 0 ? `(${count})` : ''}
      </button>
    `;
  });

  list.innerHTML = html;
  renderProducts();
}

function filterCategory(catId) {
  currentCategory = catId;
  currentSubCategory = 'all';
  updateCategoryPillState();
  renderProducts();
}

function filterSubCategory(subId) {
  currentSubCategory = subId;
  renderProducts();
}

function updateCategoryPillState() {
  const pills = document.querySelectorAll('.cat-pill');
  pills.forEach(p => p.classList.remove('active'));

  const activePill = document.getElementById(`cat-pill-${currentCategory}`);
  if (activePill) {
    activePill.classList.add('active');
  }

  const titleElem = document.getElementById('active-category-title');
  if (titleElem) {
    const isEn = (typeof currentLang !== 'undefined' && currentLang === 'en');
    if (currentCategory === 'all') {
      titleElem.textContent = isEn ? 'All Categories' : 'Semua Kategori';
    } else {
      const cat = window.KMS_DATA.categories.find(c => c.id === currentCategory);
      let catTitle = cat ? cat.name : (isEn ? 'Category' : 'Kategori');
      if (isEn && cat && window.KMS_CATEGORIES_I18N && window.KMS_CATEGORIES_I18N.en && window.KMS_CATEGORIES_I18N.en[cat.id]) {
        catTitle = window.KMS_CATEGORIES_I18N.en[cat.id].title;
      }
      titleElem.textContent = catTitle;
    }
  }
}

function renderProducts() {
  const grid = document.getElementById('products-catalog-grid');
  const countElem = document.getElementById('product-count-display');
  const subFilterBar = document.getElementById('subcategory-filter-bar');
  if (!grid) return;

  const isEn = (typeof currentLang !== 'undefined' && currentLang === 'en');

  // Render Subcategory Tabs for categories that have subcategories
  if (subFilterBar) {
    if (currentCategory !== 'all') {
      const categoryProducts = (window.KMS_DATA.products || []).filter(p => p.categoryId === currentCategory);
      const subcategories = [...new Set(categoryProducts.map(p => p.subCategory).filter(Boolean))];

      if (subcategories.length > 0) {
        subFilterBar.classList.remove('hidden');
        const allSubText = isEn ? 'All Subcategories' : 'Semua Subkategori';
        let subHtml = `
          <button onclick="filterSubCategory('all')" class="px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${currentSubCategory === 'all' ? 'bg-corporate text-white shadow-sm' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}">
            ${allSubText} (${categoryProducts.length})
          </button>
        `;
        subcategories.forEach(sub => {
          const subCount = categoryProducts.filter(p => p.subCategory === sub).length;
          const isActive = currentSubCategory === sub;
          const subLabel = isEn ? ((window.KMS_SUBCAT_I18N && window.KMS_SUBCAT_I18N[sub]) || sub) : sub;
          subHtml += `
            <button onclick="filterSubCategory('${sub}')" class="px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${isActive ? 'bg-corporate text-white shadow-sm' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}">
              ${subLabel} (${subCount})
            </button>
          `;
        });
        subFilterBar.innerHTML = subHtml;
      } else {
        subFilterBar.classList.add('hidden');
        subFilterBar.innerHTML = '';
      }
    } else {
      subFilterBar.classList.add('hidden');
      subFilterBar.innerHTML = '';
    }
  }

  let filtered = window.KMS_DATA.products || [];

  if (currentCategory !== 'all') {
    filtered = filtered.filter(p => p.categoryId === currentCategory);
  }

  if (currentSubCategory !== 'all') {
    filtered = filtered.filter(p => p.subCategory === currentSubCategory);
  }

  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(p => {
      const en = (window.KMS_PRODUCTS_EN && window.KMS_PRODUCTS_EN[p.id]) || {};
      return p.name.toLowerCase().includes(q) ||
        (en.name && en.name.toLowerCase().includes(q)) ||
        (p.shortDesc && p.shortDesc.toLowerCase().includes(q)) ||
        (en.shortDesc && en.shortDesc.toLowerCase().includes(q)) ||
        (p.categoryName && p.categoryName.toLowerCase().includes(q)) ||
        (p.subCategory && p.subCategory.toLowerCase().includes(q));
    });
  }

  if (countElem) {
    countElem.textContent = filtered.length;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-16 text-center bg-slate-50 rounded-2xl border border-slate-200">
        <i data-lucide="package-x" class="w-12 h-12 text-slate-400 mx-auto mb-3"></i>
        <h4 class="font-heading font-bold text-slate-800 text-base mb-1">${isEn ? 'No Products Found' : 'Produk Tidak Ditemukan'}</h4>
        <p class="text-xs text-slate-500 max-w-sm mx-auto mb-4">
          ${isEn ? 'No products matched your search or selected filter. Please contact our team for custom procurement needs.' : 'Tidak ada produk yang cocok dengan pencarian atau filter yang dipilih. Silakan hubungi tim kami untuk pengadaan khusus.'}
        </p>
        <button onclick="openInquiryModal()" class="btn-gold px-5 py-2 rounded-lg text-xs font-semibold">
          ${isEn ? 'Inquire Custom Needs' : 'Tanyakan Kebutuhan Khusus'}
        </button>
      </div>
    `;
    initIcons();
    return;
  }

  grid.innerHTML = filtered.map(p => {
    const en = (window.KMS_PRODUCTS_EN && window.KMS_PRODUCTS_EN[p.id]) || {};
    const pName = isEn ? (en.name || p.name) : p.name;
    const pShortDesc = isEn ? (en.shortDesc || p.shortDesc || '') : (p.shortDesc || '');
    const pTag = isEn ? (en.tag || (window.KMS_TAGS_EN && window.KMS_TAGS_EN[p.tag]) || p.tag) : p.tag;
    const pBadge = isEn ? (en.badge || (window.KMS_BADGES_EN && window.KMS_BADGES_EN[p.badge]) || p.badge) : p.badge;
    const pSubCat = isEn ? ((window.KMS_SUBCAT_I18N && window.KMS_SUBCAT_I18N[p.subCategory]) || p.subCategory) : p.subCategory;
    let pCatName = p.categoryName || '';
    if (isEn && window.KMS_CATEGORIES_I18N && window.KMS_CATEGORIES_I18N.en && window.KMS_CATEGORIES_I18N.en[p.categoryId]) {
      pCatName = window.KMS_CATEGORIES_I18N.en[p.categoryId].title;
    }

    return `
    <div class="bg-white rounded-2xl overflow-hidden card-hover flex flex-col justify-between border border-slate-200">
      <div>
        <div class="relative h-48 bg-slate-50 overflow-hidden cursor-pointer" onclick="openProductDetailView('${p.id}')">
          <img src="${p.image}" alt="${pName}" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500">
          <span class="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-white/95 backdrop-blur-sm text-corporate shadow-sm">
            ${pSubCat || pCatName || (isEn ? 'Product' : 'Produk')}
          </span>
          ${pTag ? `
            <span class="absolute top-3 right-3 px-2 py-0.5 rounded-md text-[10px] font-bold bg-amber-500 text-slate-950">
              ${pTag}
            </span>
          ` : ''}
        </div>
        <div class="p-5">
          <div class="flex items-center gap-1.5 mb-1.5 flex-wrap">
            <span class="text-[10px] font-bold text-amber-700 bg-amber-100/70 px-2 py-0.5 rounded">${pCatName}</span>
            ${pSubCat ? `<span class="text-[10px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">${pSubCat}</span>` : ''}
          </div>
          <h3 class="font-heading font-extrabold text-base text-corporate-dark mb-1.5 line-clamp-1 hover:text-corporate cursor-pointer" onclick="openProductDetailView('${p.id}')">
            ${pName}
          </h3>
          <p class="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-4">
            ${pShortDesc}
          </p>
        </div>
      </div>
      <div class="px-5 pb-5 pt-0 grid grid-cols-2 gap-2">
        <button onclick="openProductDetailView('${p.id}')" class="py-2 rounded-lg border border-slate-200 hover:border-corporate hover:text-corporate text-xs font-bold text-slate-700 transition text-center">
          ${isEn ? 'View Details' : 'Lihat Detail'}
        </button>
        <button onclick="quickInquireProduct('${p.id}')" class="btn-gold py-2 rounded-lg text-xs font-bold text-center flex items-center justify-center gap-1">
          <i data-lucide="send" class="w-3.5 h-3.5"></i>
          <span>${isEn ? 'Inquire' : 'Inquiry'}</span>
        </button>
      </div>
    </div>
  `;
  }).join('');

  initIcons();
}

/**
 * ==================== PRODUCT DETAIL VIEW ====================
 */
function openProductDetailView(productId) {
  window.location.hash = `product-detail?id=${productId}`;
}

function showProductDetail(productId) {
  const product = window.KMS_DATA.products.find(p => p.id === productId) || window.KMS_DATA.products[0];
  selectedProduct = product;
  window.selectedProduct = product;

  showView('product-detail');

  const isEn = (typeof currentLang !== 'undefined' && currentLang === 'en');
  const enP = (isEn && window.KMS_PRODUCTS_EN && window.KMS_PRODUCTS_EN[product.id]) ? window.KMS_PRODUCTS_EN[product.id] : null;

  // Category & Subcategory translated names
  let catName = product.categoryName;
  if (isEn && window.KMS_CATEGORIES_I18N && window.KMS_CATEGORIES_I18N.en && window.KMS_CATEGORIES_I18N.en[product.categoryId]) {
    catName = window.KMS_CATEGORIES_I18N.en[product.categoryId].title;
  }
  let subCatName = product.subCategory;
  if (isEn && product.subCategory && window.KMS_SUBCAT_I18N && window.KMS_SUBCAT_I18N[product.subCategory]) {
    subCatName = window.KMS_SUBCAT_I18N[product.subCategory];
  }

  const prodName = enP ? (enP.name || product.name) : product.name;
  const prodBadge = isEn 
    ? ((enP && enP.badge) || (window.KMS_BADGES_EN && window.KMS_BADGES_EN[product.badge]) || product.badge || subCatName || catName)
    : (product.badge || subCatName || catName);
  const prodDesc = enP 
    ? (enP.fullDesc || enP.shortDesc || product.fullDesc || product.shortDesc)
    : (product.fullDesc || product.shortDesc);

  // Update Breadcrumb links in detail view
  const crumbHome = document.querySelector('#view-product-detail .breadcrumb-container a[onclick*="navigateTo(\'home\')"]');
  if (crumbHome) crumbHome.textContent = isEn ? 'Home' : 'Beranda';
  const crumbProd = document.querySelector('#view-product-detail .breadcrumb-container a[onclick*="navigateTo(\'products\')"]');
  if (crumbProd) crumbProd.textContent = isEn ? 'Products' : 'Produk';

  const crumbCatEl = document.getElementById('detail-breadcrumb-cat');
  if (crumbCatEl) crumbCatEl.textContent = subCatName ? `${catName} / ${subCatName}` : catName;
  const crumbNameEl = document.getElementById('detail-breadcrumb-name');
  if (crumbNameEl) crumbNameEl.textContent = prodName;
  const badgeEl = document.getElementById('detail-badge');
  if (badgeEl) badgeEl.textContent = prodBadge;
  const titleEl = document.getElementById('detail-title');
  if (titleEl) titleEl.textContent = prodName;
  const descEl = document.getElementById('detail-short-desc');
  if (descEl) descEl.textContent = prodDesc;

  // Headings & CTA buttons in product detail
  const advHeadingSpan = document.querySelector('#view-product-detail .bg-corporate-softBlue h4 span');
  if (advHeadingSpan) advHeadingSpan.textContent = isEn ? 'Key Advantages:' : 'Keunggulan Utama:';

  const specsHeadingSpan = document.querySelector('#view-product-detail div:not(.bg-corporate-softBlue) > h4 span');
  if (specsHeadingSpan) specsHeadingSpan.textContent = isEn ? 'Technical Specifications:' : 'Spesifikasi Teknis:';

  const btnInquirySpan = document.querySelector('#btn-inquiry-detail span');
  if (btnInquirySpan) btnInquirySpan.textContent = isEn ? 'Submit Inquiry' : 'Ajukan Inquiry';

  const btnDownloadSpan = document.querySelector('#view-product-detail button[onclick*="downloadProductCatalog"] span');
  if (btnDownloadSpan) btnDownloadSpan.textContent = isEn ? 'Download Catalog' : 'Download Katalog';

  const relatedHeading = document.querySelector('#view-product-detail .border-t.border-slate-200 h3');
  if (relatedHeading) relatedHeading.textContent = isEn ? 'Other Products in this Category' : 'Produk Lainnya di Kategori Ini';

  const relatedViewAll = document.querySelector('#view-product-detail .border-t.border-slate-200 a[onclick*="navigateTo(\'products\')"]');
  if (relatedViewAll) relatedViewAll.textContent = isEn ? 'View All →' : 'Lihat Semua →';

  const mainImg = document.getElementById('detail-main-img');
  if (mainImg) {
    mainImg.src = product.image;
    mainImg.alt = prodName;
  }

  const thumbsContainer = document.getElementById('detail-gallery-thumbs');
  const gallery = product.gallery && product.gallery.length ? product.gallery : [product.image];
  if (thumbsContainer) {
    thumbsContainer.innerHTML = gallery.map((imgUrl, idx) => `
      <div onclick="changeDetailImage('${imgUrl}')" class="w-16 h-16 rounded-lg overflow-hidden border-2 border-slate-200 hover:border-amber-500 cursor-pointer flex-shrink-0">
        <img src="${imgUrl}" alt="Thumb ${idx + 1}" class="w-full h-full object-cover">
      </div>
    `).join('');
  }

  const advList = document.getElementById('detail-advantages-list');
  const advantages = (enP && enP.advantages && enP.advantages.length) ? enP.advantages : (product.advantages || [
    isEn ? "Industry-standard tested material quality" : "Kualitas material teruji standar industri",
    isEn ? "Supports regular procurement and custom specifications" : "Mendukung pengadaan reguler dan pesanan khusus",
    isEn ? "Responsive service and scheduled on-time delivery" : "Layanan responsif dan pengiriman terjadwal"
  ]);
  if (advList) {
    advList.innerHTML = advantages.map(adv => `
      <li class="flex items-start gap-2.5">
        <i data-lucide="check" class="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5"></i>
        <span>${adv}</span>
      </li>
    `).join('');
  }

  const specsTbody = document.getElementById('detail-specs-tbody');
  const specs = (enP && enP.specs && enP.specs.length) ? enP.specs : (product.specs || [
    { key: isEn ? "Category" : "Kategori", val: catName },
    { key: isEn ? "Condition" : "Kondisi", val: isEn ? "Brand New / Factory Original" : "Baru / Original Pabrik" },
    { key: isEn ? "Minimum Order" : "Minimum Order", val: isEn ? "Consultable based on project requirements" : "Dapat dikonsultasikan sesuai kebutuhan" }
  ]);
  if (specsTbody) {
    specsTbody.innerHTML = specs.map(s => `
      <tr class="border-b border-slate-200">
        <td class="py-2.5 px-4 font-bold text-slate-700 bg-slate-50 w-1/3">${s.key}</td>
        <td class="py-2.5 px-4 text-slate-900">${s.val}</td>
      </tr>
    `).join('');
  }

  const relatedGrid = document.getElementById('detail-related-grid');
  const related = window.KMS_DATA.products.filter(p => p.categoryId === product.categoryId && p.id !== product.id).slice(0, 4);
  
  if (relatedGrid) {
    if (related.length > 0) {
      relatedGrid.innerHTML = related.map(rel => {
        const relEn = (isEn && window.KMS_PRODUCTS_EN && window.KMS_PRODUCTS_EN[rel.id]) ? window.KMS_PRODUCTS_EN[rel.id] : null;
        let relCatName = rel.categoryName;
        if (isEn && window.KMS_CATEGORIES_I18N && window.KMS_CATEGORIES_I18N.en && window.KMS_CATEGORIES_I18N.en[rel.categoryId]) {
          relCatName = window.KMS_CATEGORIES_I18N.en[rel.categoryId].title;
        }
        const relName = relEn ? (relEn.name || rel.name) : rel.name;
        const btnText = isEn ? "View Details" : "Lihat Detail";
        return `
          <div class="bg-white rounded-xl overflow-hidden border border-slate-200 p-4 card-hover flex flex-col justify-between">
            <div>
              <div class="h-32 rounded-lg overflow-hidden mb-3 bg-slate-100">
                <img src="${rel.image}" alt="${relName}" class="w-full h-full object-cover">
              </div>
              <div class="text-[10px] font-bold text-amber-600 uppercase mb-1">${relCatName}</div>
              <h4 class="font-heading font-extrabold text-sm text-corporate-dark mb-2 line-clamp-1">${relName}</h4>
            </div>
            <button onclick="openProductDetailView('${rel.id}')" class="w-full py-1.5 text-xs font-bold text-corporate border border-slate-200 rounded-lg hover:bg-slate-50 mt-2">
              ${btnText}
            </button>
          </div>
        `;
      }).join('');
    } else {
      const emptyMsg = isEn ? "No other related products found in this category." : "Tidak ada produk terkait lainnya pada kategori ini.";
      relatedGrid.innerHTML = `<div class="col-span-full text-xs text-slate-500 italic">${emptyMsg}</div>`;
    }
  }

  initIcons();
}

function changeDetailImage(url) {
  const mainImg = document.getElementById('detail-main-img');
  if (mainImg) mainImg.src = url;
}

function downloadProductCatalog() {
  alert("Katalog digital PDF PT Kanaya Multi Solusindo sedang dipersiapkan. Anda juga dapat langsung mengajukan formulir inquiry atau menghubungi WhatsApp kami untuk mendapatkan brosur & penawaran resmi.");
}

/**
 * ==================== CLIENTS & GALLERY ====================
 */
function initClientsGrid() {
  const clients = (window.KMS_DATA && window.KMS_DATA.clients) ? window.KMS_DATA.clients : [];

  // 1. Render on Klien Kami Page (#view-clients)
  const container = document.getElementById('client-logos-grid');
  if (container && clients.length > 0) {
    container.innerHTML = clients.map(client => `
      <div class="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm card-hover flex flex-col items-center justify-center text-center h-44 relative group">
        <div class="h-20 w-full flex items-center justify-center p-2 mb-2">
          <img src="${client.logo}" alt="${client.name}" class="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition duration-300">
        </div>
        <div class="text-[11px] font-extrabold text-corporate-dark line-clamp-1">${client.shortName}</div>
        <div class="text-[9.5px] text-slate-400 line-clamp-1 mt-0.5">${client.industry}</div>
      </div>
    `).join('');
  }

  // 2. Render on Homepage (#view-home under Mengenal Kanaya)
  const homeContainer = document.getElementById('home-clients-grid');
  if (homeContainer && clients.length > 0) {
    homeContainer.innerHTML = clients.map(client => `
      <div class="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-corporate/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-center justify-center text-center group cursor-pointer" onclick="navigateTo('clients')">
        <div class="h-16 w-full flex items-center justify-center p-2 mb-3">
          <img src="${client.logo}" alt="${client.name}" class="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300">
        </div>
        <div class="text-xs font-extrabold text-corporate-dark line-clamp-1 group-hover:text-corporate transition-colors">${client.shortName}</div>
        <div class="text-[10px] text-slate-500 line-clamp-1 mt-1 font-medium">${client.industry}</div>
      </div>
    `).join('');
  }
}

function initGalleryGrid() {
  const container = document.getElementById('gallery-grid');
  if (!container) return;

  const isEn = (typeof currentLang !== 'undefined' && currentLang === 'en');
  const galI18n = (window.KMS_GALLERY_I18N && window.KMS_GALLERY_I18N[isEn ? 'en' : 'id']) || [];

  container.innerHTML = window.KMS_DATA.gallery.map((item, idx) => {
    const gData = galI18n[idx] || {};
    const title = gData.title || item.title;
    const category = gData.category || item.category;
    const desc = gData.desc || item.desc;

    return `
    <div class="bg-white rounded-2xl overflow-hidden border border-slate-200 card-hover group">
      <div class="relative h-56 overflow-hidden bg-slate-100">
        <img src="${item.image}" alt="${title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
        <span class="absolute top-3 left-3 bg-corporate text-amber-400 text-xs font-bold px-2.5 py-1 rounded-md shadow-sm">
          ${category}
        </span>
      </div>
      <div class="p-6">
        <h3 class="font-heading font-extrabold text-lg text-corporate-dark mb-2">
          ${title}
        </h3>
        <p class="text-slate-600 text-sm leading-relaxed">
          ${desc}
        </p>
      </div>
    </div>
  `;
  }).join('');
  initIcons();
}

function renderSolutionsGrid() {
  const container = document.getElementById('solutions-cards-grid');
  if (!container) return;

  container.innerHTML = window.KMS_DATA.solutions.map(sol => `
    <div class="bg-white rounded-2xl p-8 border border-slate-200 card-hover flex flex-col justify-between shadow-sm">
      <div>
        <div class="w-12 h-12 rounded-xl bg-blue-50 text-corporate flex items-center justify-center mb-5">
          <i data-lucide="${sol.icon || 'briefcase'}" class="w-6 h-6"></i>
        </div>
        <span class="text-xs font-bold text-amber-600 uppercase tracking-wider">${sol.badge}</span>
        <h3 class="font-heading font-extrabold text-xl text-corporate-dark mt-1 mb-3">${sol.title}</h3>
        <p class="text-slate-600 text-sm leading-relaxed">${sol.desc}</p>
      </div>
      <div class="mt-6 pt-4 border-t border-slate-100">
        <a href="#contact" onclick="navigateTo('contact')" class="text-xs font-bold text-corporate hover:text-amber-600 flex items-center gap-1">
          <span>Diskusikan Kebutuhan Anda</span>
          <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
        </a>
      </div>
    </div>
  `).join('');
  initIcons();
}

function renderStatsBar() {
  const container = document.getElementById('why-stats-bar');
  if (!container) return;

  const isEn = (typeof currentLang !== 'undefined' && currentLang === 'en');
  const stats = (isEn && window.KMS_STATS_I18N && window.KMS_STATS_I18N.en) ? window.KMS_STATS_I18N.en : (window.KMS_DATA.stats || []);

  container.innerHTML = stats.map((st, idx) => `
    <div class="${idx > 0 ? 'border-t sm:border-t-0 sm:border-l border-slate-700/80 pt-6 sm:pt-0 sm:pl-6' : ''}">
      <div class="font-heading font-black text-3xl sm:text-4xl text-amber-400 mb-1">${st.number}</div>
      <div class="text-sm font-bold text-white">${st.label}</div>
      <div class="text-xs text-slate-400 mt-1">${st.sublabel}</div>
    </div>
  `).join('');
}

/**
 * ==================== INQUIRIES & WHATSAPP ====================
 */
function openInquiryModal(productName = '') {
  const modal = document.getElementById('inquiry-modal');
  const prodInput = document.getElementById('modal-product');
  if (modal) {
    modal.classList.remove('hidden');
    if (prodInput) {
      prodInput.value = productName || (selectedProduct ? selectedProduct.name : 'Permintaan Pengadaan Umum');
    }
  }
}

function closeInquiryModal() {
  const modal = document.getElementById('inquiry-modal');
  if (modal) modal.classList.add('hidden');
}

function quickInquireProduct(productId) {
  const p = window.KMS_DATA.products.find(item => item.id === productId);
  if (p) {
    selectedProduct = p;
    openInquiryModal(p.name);
  } else {
    openInquiryModal();
  }
}

function openProductInquiry() {
  if (selectedProduct) {
    openInquiryModal(selectedProduct.name);
  } else {
    openInquiryModal();
  }
}

function handleInquirySubmit(e) {
  e.preventDefault();
  const inquiry = {
    name: document.getElementById('form-name').value,
    company: document.getElementById('form-company').value,
    email: document.getElementById('form-email').value,
    phone: document.getElementById('form-wa').value,
    product: document.getElementById('form-product').value,
    qty: document.getElementById('form-qty').value || '-',
    message: document.getElementById('form-message').value
  };

  saveInquiry(inquiry);

  const alertBox = document.getElementById('form-success-alert');
  if (alertBox) {
    alertBox.classList.remove('hidden');
    alertBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  const form = document.getElementById('contact-inquiry-form');
  if (form) form.reset();
}

function sendInquiryViaWA() {
  const name = document.getElementById('form-name').value || '-';
  const company = document.getElementById('form-company').value || '-';
  const email = document.getElementById('form-email').value || '-';
  const wa = document.getElementById('form-wa').value || '-';
  const product = document.getElementById('form-product').value || '-';
  const qty = document.getElementById('form-qty').value || '-';
  const message = document.getElementById('form-message').value || '-';

  if (name !== '-' || product !== '-') {
    saveInquiry({ name, company, email, phone: wa, product, qty, message });
  }

  const waText = 
`*INQUIRY PENGADAAN - PT KANAYA MULTI SOLUSINDO*
-----------------------------------------------
*Nama Pemohon*: ${name}
*Perusahaan*: ${company}
*Email*: ${email}
*No. Kontak*: ${wa}
*Produk/Kebutuhan*: ${product}
*Estimasi Jumlah*: ${qty}
*Spesifikasi / Catatan*:
${message}
-----------------------------------------------
Mohon informasi ketersediaan dan penawaran harga resmi. Terima kasih.`;

  const waNumber = window.KMS_DATA.company.contacts.whatsappNumber || '628131052840';
  window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(waText)}`, '_blank');
}

function handleModalInquirySubmit(e) {
  e.preventDefault();
  const inquiry = {
    name: document.getElementById('modal-name').value,
    company: document.getElementById('modal-company').value,
    email: '-',
    phone: document.getElementById('modal-wa').value,
    product: document.getElementById('modal-product').value,
    qty: document.getElementById('modal-qty').value || '-',
    message: document.getElementById('modal-note').value || '-'
  };

  saveInquiry(inquiry);
  alert("Inquiry Anda telah berhasil dicatat oleh sistem PT Kanaya Multi Solusindo. Tim kami akan segera menindaklanjutinya!");
  closeInquiryModal();
}

function sendModalViaWA() {
  const name = document.getElementById('modal-name').value || '-';
  const company = document.getElementById('modal-company').value || '-';
  const wa = document.getElementById('modal-wa').value || '-';
  const product = document.getElementById('modal-product').value || '-';
  const qty = document.getElementById('modal-qty').value || '-';
  const note = document.getElementById('modal-note').value || '-';

  saveInquiry({ name, company, email: '-', phone: wa, product, qty, message: note });

  const waText = 
`*INQUIRY CEPAT - PT KANAYA MULTI SOLUSINDO*
-----------------------------------------------
*Nama*: ${name}
*Perusahaan*: ${company}
*No. WhatsApp*: ${wa}
*Kebutuhan Produk*: ${product}
*Kuantitas*: ${qty}
*Catatan*: ${note}
-----------------------------------------------
Mohon penawaran harga resminya. Terima kasih.`;

  const waNumber = window.KMS_DATA.company.contacts.whatsappNumber || '628131052840';
  window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(waText)}`, '_blank');
  closeInquiryModal();
}

/**
 * ==================== CUSTOM PRODUCT INQUIRY HANDLERS ====================
 */
function openCustomProductModal(prefillCategory) {
  const modal = document.getElementById('custom-product-modal');
  if (!modal) return;

  if (prefillCategory) {
    const catSelect = document.getElementById('custom-req-category');
    if (catSelect) {
      for (let i = 0; i < catSelect.options.length; i++) {
        if (catSelect.options[i].value.toLowerCase().includes(prefillCategory.toLowerCase())) {
          catSelect.selectedIndex = i;
          break;
        }
      }
    }
  }

  modal.classList.remove('hidden');
}

function closeCustomProductModal() {
  const modal = document.getElementById('custom-product-modal');
  if (modal) modal.classList.add('hidden');
}

function handleCustomProductSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('custom-req-name').value.trim();
  const company = document.getElementById('custom-req-company').value.trim();
  const phone = document.getElementById('custom-req-phone').value.trim();
  const category = document.getElementById('custom-req-category').value;
  const productName = document.getElementById('custom-req-product-name').value.trim();
  const qty = document.getElementById('custom-req-qty').value.trim() || '-';
  const notes = document.getElementById('custom-req-notes').value.trim() || '-';

  const inquiry = {
    name: name,
    company: company,
    email: '-',
    phone: phone,
    product: `[Request Khusus: ${category}] ${productName}`,
    qty: qty,
    message: notes,
    type: 'custom_product_inquiry'
  };

  saveInquiry(inquiry);
  alert('Permintaan pengadaan produk khusus Anda telah berhasil tercatat di sistem PT Kanaya Multi Solusindo! Tim kami akan segera menindaklanjuti via nomor WhatsApp Anda.');
  closeCustomProductModal();
}

function sendCustomReqViaWA() {
  const name = (document.getElementById('custom-req-name') && document.getElementById('custom-req-name').value.trim()) || '-';
  const company = (document.getElementById('custom-req-company') && document.getElementById('custom-req-company').value.trim()) || '-';
  const phone = (document.getElementById('custom-req-phone') && document.getElementById('custom-req-phone').value.trim()) || '-';
  const category = (document.getElementById('custom-req-category') && document.getElementById('custom-req-category').value) || '-';
  const productName = (document.getElementById('custom-req-product-name') && document.getElementById('custom-req-product-name').value.trim()) || '-';
  const qty = (document.getElementById('custom-req-qty') && document.getElementById('custom-req-qty').value.trim()) || '-';
  const notes = (document.getElementById('custom-req-notes') && document.getElementById('custom-req-notes').value.trim()) || '-';

  saveInquiry({
    name,
    company,
    email: '-',
    phone,
    product: `[Request Khusus: ${category}] ${productName}`,
    qty,
    message: notes,
    type: 'custom_product_inquiry'
  });

  const waText = 
`*REQUEST PRODUK KHUSUS (MANUAL INQUIRY) - PT KANAYA MULTI SOLUSINDO*
--------------------------------------------------
*Nama PIC*: ${name}
*Perusahaan*: ${company}
*No. WhatsApp*: ${phone}
*Kategori*: ${category}
*Nama Produk / Material*: ${productName}
*Estimasi Kuantitas*: ${qty}
*Catatan & Spesifikasi Teknis*: ${notes}
--------------------------------------------------
Produk di atas belum terdaftar di katalog website. Mohon informasi ketersediaan pasokan dan penawaran harga resmi (Quotation). Terima kasih.`;

  const waNumber = (window.KMS_DATA && window.KMS_DATA.company && window.KMS_DATA.company.contacts && window.KMS_DATA.company.contacts.whatsappNumber) || '628131052840';
  window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(waText)}`, '_blank');
  closeCustomProductModal();
}

/**
 * ==================== BILINGUAL TRANSLATOR ====================
 */
function setLanguage(lang) {
  if (typeof window.setLanguageKms === 'function') {
    window.setLanguageKms(lang);
  } else if (typeof window.applyKmsLanguage === 'function') {
    window.applyKmsLanguage(lang);
  } else {
    currentLang = lang;
    const btnId = document.getElementById('lang-id');
    const btnEn = document.getElementById('lang-en');

    if (lang === 'en') {
      if (btnEn) btnEn.className = 'px-2.5 py-0.5 rounded-full font-semibold bg-amber-500 text-slate-950 transition-all';
      if (btnId) btnId.className = 'px-2.5 py-0.5 rounded-full font-medium text-slate-300 hover:text-white transition-all';
    } else {
      if (btnId) btnId.className = 'px-2.5 py-0.5 rounded-full font-semibold bg-amber-500 text-slate-950 transition-all';
      if (btnEn) btnEn.className = 'px-2.5 py-0.5 rounded-full font-medium text-slate-300 hover:text-white transition-all';
    }
  }
}

/**
 * ==================== ADMIN AUTHENTICATION & PORTAL ====================
 */
function openAdminPortal() {
  if (isAdminLoggedIn()) {
    window.location.hash = 'admin';
  } else {
    openAdminLoginModal();
  }
}

function openAdminLoginModal() {
  const modal = document.getElementById('admin-login-modal');
  const errorMsg = document.getElementById('login-error-msg');
  if (modal) modal.classList.remove('hidden');
  if (errorMsg) errorMsg.classList.add('hidden');
}

function closeAdminLoginModal() {
  const modal = document.getElementById('admin-login-modal');
  if (modal) modal.classList.add('hidden');
}

function isAdminLoggedIn() {
  return sessionStorage.getItem('KMS_ADMIN_LOGGED_IN') === 'true';
}

function handleAdminLoginSubmit(e) {
  e.preventDefault();
  const u = document.getElementById('login-username').value.trim();
  const p = document.getElementById('login-password').value.trim();
  const errorMsg = document.getElementById('login-error-msg');

  // Ambil kredensial admin aktif (sinkron dari Cloud Firestore atau default awal)
  const validUser = localStorage.getItem('KMS_CUSTOM_USER') || DEFAULT_ADMIN_USER;
  const validPass = localStorage.getItem('KMS_CUSTOM_PASS') || DEFAULT_ADMIN_PASS;

  if (u === validUser && p === validPass) {
    sessionStorage.setItem('KMS_ADMIN_LOGGED_IN', 'true');
    closeAdminLoginModal();
    window.location.hash = 'admin';
  } else {
    if (errorMsg) errorMsg.classList.remove('hidden');
  }
}

function adminLogout() {
  sessionStorage.removeItem('KMS_ADMIN_LOGGED_IN');
  window.location.hash = 'home';
  alert('Anda telah keluar dari CMS Admin.');
}

function changeAdminCredentials(e) {
  e.preventDefault();
  const newUser = (document.getElementById('adm-new-user')?.value || 'admin').trim();
  const newPass = document.getElementById('adm-new-pass').value.trim();

  if (newUser.length < 3) {
    alert('Username minimal 3 karakter!');
    return;
  }
  if (newPass.length < 5) {
    alert('Password minimal 5 karakter!');
    return;
  }

  // 1. Simpan ke LocalStorage browser
  localStorage.setItem('KMS_CUSTOM_USER', newUser);
  localStorage.setItem('KMS_CUSTOM_PASS', newPass);

  // 2. Simpan permanen ke Cloud Firestore agar berlaku di seluruh browser & perangkat
  if (typeof kmsDb !== 'undefined' && kmsDb) {
    kmsDb.collection('cms').doc('website_data').set({
      adminUsername: newUser,
      adminPassword: newPass
    }, { merge: true }).then(() => {
      console.log('✅ Akun admin berhasil diperbarui di Cloud Firestore.');
      if (typeof showSyncNotice === 'function') {
        showSyncNotice('Akun Admin Tersimpan di Cloud');
      }
    }).catch(err => console.warn('Gagal sinkron akun admin ke Firestore:', err));
  }

  alert(`Akun admin berhasil diubah!\nUsername: ${newUser}\nPassword baru tersimpan permanen di cloud sampai ada perubahan kembali.`);
  document.getElementById('adm-new-pass').value = '';
}

function changeAdminPassword(e) {
  changeAdminCredentials(e);
}

/**
 * ==================== CMS ADMIN DASHBOARD LOGIC ====================
 */
function initAdminDashboard() {
  updateAdminStats();
  renderAdminAnalytics();
  renderAdminSlides();
  populateAdminProfileForm();
  populateAdminContactsForm();
  populateAdminWhyKanaya();
  renderAdminCategories();
  renderAdminProductsTable();
  renderAdminSolutions();
  populateAdminStatsInputs();
  renderAdminClients();
  renderAdminGallery();
  renderAdminInquiries();
  initIcons();
}

function switchAdminTab(tabName) {
  const panels = document.querySelectorAll('.admin-tab-panel');
  panels.forEach(p => p.classList.add('hidden'));

  const targetPanel = document.getElementById(`admin-panel-${tabName}`);
  if (targetPanel) targetPanel.classList.remove('hidden');

  const buttons = document.querySelectorAll('.admin-sidebar-link');
  buttons.forEach(b => b.classList.remove('active'));
  const activeBtn = document.getElementById(`tab-btn-${tabName}`);
  if (activeBtn) activeBtn.classList.add('active');

  if (tabName === 'overview') {
    renderAdminAnalytics();
    updateAdminStats();
  } else if (tabName === 'contacts') {
    populateAdminContactsForm();
  } else if (tabName === 'profile') {
    populateAdminProfileForm();
  } else if (tabName === 'solutions') {
    populateAdminWhyKanaya();
  }

  initIcons();
}

/**
 * Render Visitor Analytics Dashboard Metrics in Admin CMS
 */
function renderAdminAnalytics() {
  const container = document.getElementById('admin-analytics-widget');
  if (!container) return;

  const a = window.KMS_ANALYTICS || {};
  const today = new Date().toISOString().split('T')[0];
  const todayViews = a[`views_${today}`] || 0;
  const totalViews = a.totalViews || (todayViews > 0 ? todayViews : 1);
  const uniqueVisitors = a.uniqueVisitors || (Math.max(1, Math.round(totalViews * 0.45)));
  const mobileViews = a.mobileViews || (Math.round(totalViews * 0.58));
  const desktopViews = a.desktopViews || (Math.max(0, totalViews - mobileViews));

  const totalDev = (mobileViews + desktopViews) || 1;
  const mobilePct = Math.round((mobileViews / totalDev) * 100);
  const desktopPct = Math.round((desktopViews / totalDev) * 100);

  const setT = (id, txt) => {
    const el = document.getElementById(id);
    if (el) el.textContent = txt;
  };

  setT('anl-total-views', totalViews.toLocaleString('id-ID'));
  setT('anl-unique-visitors', uniqueVisitors.toLocaleString('id-ID'));
  setT('anl-today-views', todayViews.toLocaleString('id-ID'));
  setT('anl-mobile-pct', mobilePct + '%');
  setT('anl-desktop-pct', desktopPct + '%');
  setT('anl-mobile-views', `${mobileViews.toLocaleString('id-ID')} HP`);
  setT('anl-desktop-views', `${desktopViews.toLocaleString('id-ID')} PC`);

  const barMobile = document.getElementById('anl-bar-mobile');
  const barDesktop = document.getElementById('anl-bar-desktop');
  if (barMobile) barMobile.style.width = mobilePct + '%';
  if (barDesktop) barDesktop.style.width = desktopPct + '%';
}

function updateAdminStats() {
  const pCount = (window.KMS_DATA.products || []).length;
  const cCount = (window.KMS_DATA.categories || []).length;
  const sCount = (window.KMS_DATA.heroSlides || []).length;
  const inqList = loadInquiries();

  const elP = document.getElementById('stat-total-products');
  const elC = document.getElementById('stat-total-categories');
  const elS = document.getElementById('stat-total-slides');
  const elI = document.getElementById('stat-total-inquiries');
  const badge = document.getElementById('admin-inbox-badge');

  if (elP) elP.textContent = pCount;
  if (elC) elC.textContent = cCount;
  if (elS) elS.textContent = sCount;
  if (elI) elI.textContent = inqList.length;
  if (badge) badge.textContent = inqList.length;
}

/**
 * CMS: Hero Slides Editor
 */
function renderAdminSlides() {
  const container = document.getElementById('admin-slides-list');
  if (!container) return;

  const slides = window.KMS_DATA.heroSlides || [];
  container.innerHTML = slides.map((slide) => `
    <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 border border-slate-200 rounded-xl bg-slate-50">
      <div class="flex items-center gap-4">
        <img src="${slide.image}" alt="${slide.title}" class="w-20 h-14 object-cover rounded-lg border">
        <div>
          <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-corporate">${slide.badge}</span>
          <h4 class="font-heading font-extrabold text-sm text-corporate-dark mt-1 line-clamp-1">${slide.title}</h4>
          <p class="text-xs text-slate-500 line-clamp-1">${slide.subtitle}</p>
        </div>
      </div>
      <div class="flex items-center gap-2 self-end sm:self-auto">
        <button onclick="editSlideModal('${slide.id}')" class="px-3 py-1.5 rounded-lg bg-blue-50 text-corporate font-bold text-xs hover:bg-blue-100 flex items-center gap-1">
          <i data-lucide="edit" class="w-3.5 h-3.5"></i>
          <span>Edit</span>
        </button>
        <button onclick="deleteSlide('${slide.id}')" class="px-3 py-1.5 rounded-lg bg-red-50 text-red-600 font-bold text-xs hover:bg-red-100 flex items-center gap-1">
          <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
          <span>Hapus</span>
        </button>
      </div>
    </div>
  `).join('');
  initIcons();
}

function openAddSlideModal() {
  openCmsModal('Tambah Slide Hero Baru', `
    <form onsubmit="saveNewSlide(event)" class="space-y-4">
      <div>
        <label class="block text-xs font-bold text-slate-700 mb-1">Badge Atas</label>
        <input type="text" id="add-slide-badge" required placeholder="Contoh: Solusi Packaging Industri" class="w-full px-3 py-2 text-sm border rounded-lg">
      </div>
      <div>
        <label class="block text-xs font-bold text-slate-700 mb-1">Headline Utama *</label>
        <input type="text" id="add-slide-title" required placeholder="Judul slide besar..." class="w-full px-3 py-2 text-sm border rounded-lg">
      </div>
      <div>
        <label class="block text-xs font-bold text-slate-700 mb-1">Subheadline / Penjelasan *</label>
        <textarea id="add-slide-subtitle" required rows="2" placeholder="Deskripsi pendukung..." class="w-full px-3 py-2 text-sm border rounded-lg"></textarea>
      </div>
      
      <!-- Photo Upload Box -->
      <div class="p-3 bg-slate-50 border rounded-xl space-y-2">
        <label class="block text-xs font-bold text-slate-700">Foto Background Slide</label>
        <div class="flex items-center gap-3">
          <input type="file" accept="image/*" onchange="handleImageFileInput(this, 'add-slide-preview', 'add-slide-image')" class="text-xs text-slate-500">
          <img id="add-slide-preview" src="" alt="Preview" class="w-16 h-12 object-cover rounded border hidden">
        </div>
        <div>
          <span class="text-[10px] text-slate-400">Atau gunakan URL gambar:</span>
          <input type="text" id="add-slide-image" required placeholder="https://images.unsplash.com/..." class="w-full px-3 py-1.5 text-xs border rounded-lg mt-1">
        </div>
      </div>

      <div class="grid grid-cols-2 gap-3">
        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">Teks Tombol 1</label>
          <input type="text" id="add-slide-btn1-text" value="Lihat Produk" class="w-full px-3 py-2 text-sm border rounded-lg">
        </div>
        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">Link Tombol 1</label>
          <input type="text" id="add-slide-btn1-link" value="#products" class="w-full px-3 py-2 text-sm border rounded-lg">
        </div>
      </div>
      <div class="grid grid-cols-2 gap-3">
        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">Teks Tombol 2</label>
          <input type="text" id="add-slide-btn2-text" value="Hubungi Kami" class="w-full px-3 py-2 text-sm border rounded-lg">
        </div>
        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">Link Tombol 2</label>
          <input type="text" id="add-slide-btn2-link" value="#contact" class="w-full px-3 py-2 text-sm border rounded-lg">
        </div>
      </div>
      <button type="submit" class="btn-navy w-full py-2.5 rounded-lg text-xs font-bold">Simpan Slide</button>
    </form>
  `);
}

function saveNewSlide(e) {
  e.preventDefault();
  const newSlide = {
    id: 'slide-' + Date.now(),
    badge: document.getElementById('add-slide-badge').value,
    title: document.getElementById('add-slide-title').value,
    subtitle: document.getElementById('add-slide-subtitle').value,
    image: document.getElementById('add-slide-image').value,
    btnPrimaryText: document.getElementById('add-slide-btn1-text').value,
    btnPrimaryLink: document.getElementById('add-slide-btn1-link').value,
    btnSecondaryText: document.getElementById('add-slide-btn2-text').value,
    btnSecondaryLink: document.getElementById('add-slide-btn2-link').value
  };

  window.KMS_DATA.heroSlides.push(newSlide);
  saveKmsData(window.KMS_DATA);
  closeCmsModal();
  refreshAllPublicContent();
  renderAdminSlides();
  updateAdminStats();
  alert('Slide baru berhasil ditambahkan!');
}

function editSlideModal(slideId) {
  const slide = window.KMS_DATA.heroSlides.find(s => s.id === slideId);
  if (!slide) return;

  openCmsModal('Edit Slide Hero', `
    <form onsubmit="saveEditedSlide(event, '${slide.id}')" class="space-y-4">
      <div>
        <label class="block text-xs font-bold text-slate-700 mb-1">Badge</label>
        <input type="text" id="edit-slide-badge" value="${slide.badge || ''}" class="w-full px-3 py-2 text-sm border rounded-lg">
      </div>
      <div>
        <label class="block text-xs font-bold text-slate-700 mb-1">Headline Utama</label>
        <input type="text" id="edit-slide-title" required value="${slide.title || ''}" class="w-full px-3 py-2 text-sm border rounded-lg">
      </div>
      <div>
        <label class="block text-xs font-bold text-slate-700 mb-1">Subheadline</label>
        <textarea id="edit-slide-subtitle" required rows="2" class="w-full px-3 py-2 text-sm border rounded-lg">${slide.subtitle || ''}</textarea>
      </div>

      <!-- Photo Upload Box -->
      <div class="p-3 bg-slate-50 border rounded-xl space-y-2">
        <label class="block text-xs font-bold text-slate-700">Foto Background Slide</label>
        <div class="flex items-center gap-3">
          <input type="file" accept="image/*" onchange="handleImageFileInput(this, 'edit-slide-preview', 'edit-slide-image')" class="text-xs text-slate-500">
          <img id="edit-slide-preview" src="${slide.image || ''}" alt="Preview" class="w-16 h-12 object-cover rounded border">
        </div>
        <div>
          <span class="text-[10px] text-slate-400">Atau URL gambar:</span>
          <input type="text" id="edit-slide-image" required value="${slide.image || ''}" class="w-full px-3 py-1.5 text-xs border rounded-lg mt-1">
        </div>
      </div>

      <div class="grid grid-cols-2 gap-3">
        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">Teks Tombol 1</label>
          <input type="text" id="edit-slide-btn1-text" value="${slide.btnPrimaryText || ''}" class="w-full px-3 py-2 text-sm border rounded-lg">
        </div>
        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">Link Tombol 1</label>
          <input type="text" id="edit-slide-btn1-link" value="${slide.btnPrimaryLink || ''}" class="w-full px-3 py-2 text-sm border rounded-lg">
        </div>
      </div>
      <div class="grid grid-cols-2 gap-3">
        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">Teks Tombol 2</label>
          <input type="text" id="edit-slide-btn2-text" value="${slide.btnSecondaryText || ''}" class="w-full px-3 py-2 text-sm border rounded-lg">
        </div>
        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">Link Tombol 2</label>
          <input type="text" id="edit-slide-btn2-link" value="${slide.btnSecondaryLink || ''}" class="w-full px-3 py-2 text-sm border rounded-lg">
        </div>
      </div>
      <button type="submit" class="btn-navy w-full py-2.5 rounded-lg text-xs font-bold">Simpan Perubahan</button>
    </form>
  `);
}

function saveEditedSlide(e, slideId) {
  e.preventDefault();
  const slide = window.KMS_DATA.heroSlides.find(s => s.id === slideId);
  if (!slide) return;

  slide.badge = document.getElementById('edit-slide-badge').value;
  slide.title = document.getElementById('edit-slide-title').value;
  slide.subtitle = document.getElementById('edit-slide-subtitle').value;
  slide.image = document.getElementById('edit-slide-image').value;
  slide.btnPrimaryText = document.getElementById('edit-slide-btn1-text').value;
  slide.btnPrimaryLink = document.getElementById('edit-slide-btn1-link').value;
  slide.btnSecondaryText = document.getElementById('edit-slide-btn2-text').value;
  slide.btnSecondaryLink = document.getElementById('edit-slide-btn2-link').value;

  saveKmsData(window.KMS_DATA);
  closeCmsModal();
  refreshAllPublicContent();
  renderAdminSlides();
  alert('Perubahan slide berhasil disimpan!');
}

function deleteSlide(slideId) {
  if (window.KMS_DATA.heroSlides.length <= 1) {
    alert('Minimal harus ada 1 slide!');
    return;
  }
  if (confirm('Yakin ingin menghapus slide ini?')) {
    window.KMS_DATA.heroSlides = window.KMS_DATA.heroSlides.filter(s => s.id !== slideId);
    saveKmsData(window.KMS_DATA);
    currentSlideIndex = 0;
    refreshAllPublicContent();
    renderAdminSlides();
    updateAdminStats();
  }
}

/**
 * CMS: Profile & Contacts
 */
function populateAdminProfileForm() {
  const d = window.KMS_DATA;
  document.getElementById('adm-tagline').value = d.company.tagline || '';
  document.getElementById('adm-subheadline').value = d.company.subheadline || '';
  document.getElementById('adm-about-short').value = d.company.aboutShort || '';
  document.getElementById('adm-about-full').value = d.company.aboutFull || '';
  document.getElementById('adm-vision').value = d.vision || '';
  document.getElementById('adm-misi-1').value = d.missions[0] || '';
  document.getElementById('adm-misi-2').value = d.missions[1] || '';
  document.getElementById('adm-misi-3').value = d.missions[2] || '';
}

function saveAdminProfile(e) {
  e.preventDefault();
  const d = window.KMS_DATA;
  d.company.tagline = document.getElementById('adm-tagline').value;
  d.company.subheadline = document.getElementById('adm-subheadline').value;
  d.company.aboutShort = document.getElementById('adm-about-short').value;
  d.company.aboutFull = document.getElementById('adm-about-full').value;
  d.vision = document.getElementById('adm-vision').value;
  d.missions = [
    document.getElementById('adm-misi-1').value,
    document.getElementById('adm-misi-2').value,
    document.getElementById('adm-misi-3').value
  ];

  saveKmsData(d);
  refreshAllPublicContent();
  alert('Profil perusahaan & Visi Misi berhasil diperbarui!');
}

function populateAdminContactsForm() {
  const c = window.KMS_DATA.company.contacts || {};
  const setVal = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.value = val || '';
  };
  setVal('adm-contact-wa', c.whatsapp);
  setVal('adm-contact-wa-num', c.whatsappNumber || (c.whatsapp ? c.whatsapp.replace(/[^0-9]/g, '') : ''));
  setVal('adm-contact-phone', c.phone);
  setVal('adm-email-sales', c.emailSales);
  setVal('adm-email-admin', c.emailAdmin);
  setVal('adm-contact-address', c.address);
  setVal('adm-contact-ig', c.instagram);
  setVal('adm-contact-ig-url', c.instagramUrl || (c.instagram ? 'https://instagram.com/' + c.instagram.replace('@', '').trim() : ''));
  setVal('adm-contact-tiktok', c.tiktok);
  setVal('adm-contact-tiktok-url', c.tiktokUrl || (c.tiktok ? 'https://www.tiktok.com/@' + c.tiktok.replace('@', '').trim() : ''));
  setVal('adm-contact-linkedin', c.linkedin);
  setVal('adm-contact-linkedin-url', c.linkedinUrl || '');
  setVal('adm-contact-maps-url', c.mapsUrl || '');
  setVal('adm-contact-footer-tagline', c.footerTagline || (window.KMS_DATA.company ? window.KMS_DATA.company.tagline : ''));
}

function saveAdminContacts(e) {
  e.preventDefault();
  const c = window.KMS_DATA.company.contacts;
  c.whatsapp = document.getElementById('adm-contact-wa').value.trim();
  
  let waNum = document.getElementById('adm-contact-wa-num') ? document.getElementById('adm-contact-wa-num').value.trim() : '';
  if (!waNum) {
    waNum = c.whatsapp.replace(/[^0-9]/g, '');
    if (waNum.startsWith('0')) {
      waNum = '62' + waNum.slice(1);
    }
  }
  c.whatsappNumber = waNum.replace(/[^0-9]/g, '');
  
  c.phone = document.getElementById('adm-contact-phone').value.trim();
  c.emailSales = document.getElementById('adm-email-sales').value.trim();
  c.emailAdmin = document.getElementById('adm-email-admin').value.trim();
  c.address = document.getElementById('adm-contact-address').value.trim();
  c.instagram = document.getElementById('adm-contact-ig').value.trim();
  
  let igUrl = document.getElementById('adm-contact-ig-url') ? document.getElementById('adm-contact-ig-url').value.trim() : '';
  if (!igUrl && c.instagram) {
    igUrl = 'https://instagram.com/' + c.instagram.replace('@', '').trim();
  }
  c.instagramUrl = igUrl;

  c.tiktok = document.getElementById('adm-contact-tiktok') ? document.getElementById('adm-contact-tiktok').value.trim() : (c.tiktok || '');
  c.tiktokUrl = document.getElementById('adm-contact-tiktok-url') ? document.getElementById('adm-contact-tiktok-url').value.trim() : (c.tiktokUrl || '');
  c.linkedin = document.getElementById('adm-contact-linkedin') ? document.getElementById('adm-contact-linkedin').value.trim() : (c.linkedin || '');
  c.linkedinUrl = document.getElementById('adm-contact-linkedin-url') ? document.getElementById('adm-contact-linkedin-url').value.trim() : (c.linkedinUrl || '');
  c.mapsUrl = document.getElementById('adm-contact-maps-url') ? document.getElementById('adm-contact-maps-url').value.trim() : (c.mapsUrl || '');
  c.footerTagline = document.getElementById('adm-contact-footer-tagline') ? document.getElementById('adm-contact-footer-tagline').value.trim() : (c.footerTagline || '');

  saveKmsData(window.KMS_DATA);
  refreshAllPublicContent();
  alert('Data kontak & tautan medsos resmi (WhatsApp, TikTok, LinkedIn, IG, Maps & Footer) berhasil diperbarui!');
}

/**
 * CMS: Why Kanaya & Guarantees Form Handler (User Request 6)
 */
function populateAdminWhyKanaya() {
  const why = (window.KMS_DATA && window.KMS_DATA.whyKanaya) || (typeof DEFAULT_KMS_DATA !== 'undefined' ? DEFAULT_KMS_DATA.whyKanaya : {}) || {};
  const setVal = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.value = val || '';
  };
  setVal('adm-why-badge', why.badge || 'Keunggulan Kompetitif B2B');
  setVal('adm-why-title', why.title || 'Mengapa Perusahaan Memilih Bermitra dengan Kanaya?');
  setVal('adm-why-subtitle', why.subtitle || '');

  const g = why.guarantees || [];
  if (g[0]) {
    setVal('adm-guarantee-1-title', g[0].title);
    setVal('adm-guarantee-1-desc', g[0].desc);
  }
  if (g[1]) {
    setVal('adm-guarantee-2-title', g[1].title);
    setVal('adm-guarantee-2-desc', g[1].desc);
  }
  if (g[2]) {
    setVal('adm-guarantee-3-title', g[2].title);
    setVal('adm-guarantee-3-desc', g[2].desc);
  }
  if (g[3]) {
    setVal('adm-guarantee-4-title', g[3].title);
    setVal('adm-guarantee-4-desc', g[3].desc);
  }
}

function saveAdminWhyKanaya(e) {
  e.preventDefault();
  if (!window.KMS_DATA.whyKanaya) {
    window.KMS_DATA.whyKanaya = JSON.parse(JSON.stringify((typeof DEFAULT_KMS_DATA !== 'undefined' ? DEFAULT_KMS_DATA.whyKanaya : {})));
  }
  const why = window.KMS_DATA.whyKanaya;
  why.badge = document.getElementById('adm-why-badge').value.trim();
  why.title = document.getElementById('adm-why-title').value.trim();
  why.subtitle = document.getElementById('adm-why-subtitle').value.trim();

  if (!why.guarantees) why.guarantees = [];
  why.guarantees[0] = {
    icon: 'file-check-2',
    title: document.getElementById('adm-guarantee-1-title').value.trim(),
    desc: document.getElementById('adm-guarantee-1-desc').value.trim()
  };
  why.guarantees[1] = {
    icon: 'clock',
    title: document.getElementById('adm-guarantee-2-title').value.trim(),
    desc: document.getElementById('adm-guarantee-2-desc').value.trim()
  };
  why.guarantees[2] = {
    icon: 'shield-check',
    title: document.getElementById('adm-guarantee-3-title').value.trim(),
    desc: document.getElementById('adm-guarantee-3-desc').value.trim()
  };
  why.guarantees[3] = {
    icon: 'truck',
    title: document.getElementById('adm-guarantee-4-title').value.trim(),
    desc: document.getElementById('adm-guarantee-4-desc').value.trim()
  };

  saveKmsData(window.KMS_DATA);
  renderWhyKanayaSection();
  alert('Teks "Mengapa Kanaya" & 4 Jaminan Kemitraan berhasil diperbarui!');
}

/**
 * CMS: Categories CRUD
 */
function renderAdminCategories() {
  const container = document.getElementById('admin-categories-list');
  if (!container) return;

  container.innerHTML = window.KMS_DATA.categories.map(cat => `
    <div class="p-4 border rounded-xl bg-slate-50 flex items-center justify-between gap-3">
      <div class="flex items-center gap-3">
        <img src="${cat.image}" alt="${cat.name}" class="w-12 h-12 object-cover rounded-lg border">
        <div>
          <h4 class="font-extrabold text-sm text-corporate-dark">${cat.name}</h4>
          <p class="text-[11px] text-slate-500">${cat.itemCount || ''}</p>
        </div>
      </div>
      <div class="flex items-center gap-1.5">
        <button onclick="editCategoryModal('${cat.id}')" class="p-1.5 text-corporate hover:bg-blue-100 rounded">
          <i data-lucide="edit" class="w-4 h-4"></i>
        </button>
        <button onclick="deleteCategory('${cat.id}')" class="p-1.5 text-red-600 hover:bg-red-100 rounded">
          <i data-lucide="trash-2" class="w-4 h-4"></i>
        </button>
      </div>
    </div>
  `).join('');
  initIcons();
}

function openAddCategoryModal() {
  openCmsModal('Tambah Kategori Baru', `
    <form onsubmit="saveNewCategory(event)" class="space-y-4">
      <div>
        <label class="block text-xs font-bold text-slate-700 mb-1">ID Kategori (Kecil tanpa spasi)</label>
        <input type="text" id="add-cat-id" required placeholder="misal: alat-berat" class="w-full px-3 py-2 text-sm border rounded-lg">
      </div>
      <div>
        <label class="block text-xs font-bold text-slate-700 mb-1">Nama Kategori *</label>
        <input type="text" id="add-cat-name" required placeholder="Contoh: Heavy Duty Tools" class="w-full px-3 py-2 text-sm border rounded-lg">
      </div>
      <div>
        <label class="block text-xs font-bold text-slate-700 mb-1">Deskripsi Singkat</label>
        <textarea id="add-cat-desc" rows="2" class="w-full px-3 py-2 text-sm border rounded-lg"></textarea>
      </div>
      <div>
        <label class="block text-xs font-bold text-slate-700 mb-1">Label / Varian</label>
        <input type="text" id="add-cat-count" placeholder="Contoh: 10 Varian" class="w-full px-3 py-2 text-sm border rounded-lg">
      </div>
      
      <!-- Photo Upload Box -->
      <div class="p-3 bg-slate-50 border rounded-xl space-y-2">
        <label class="block text-xs font-bold text-slate-700">Foto Sampul Kategori</label>
        <div class="flex items-center gap-3">
          <input type="file" accept="image/*" onchange="handleImageFileInput(this, 'add-cat-preview', 'add-cat-image')" class="text-xs text-slate-500">
          <img id="add-cat-preview" src="" alt="Preview" class="w-14 h-14 object-cover rounded border hidden">
        </div>
        <div>
          <span class="text-[10px] text-slate-400">Atau gunakan URL:</span>
          <input type="text" id="add-cat-image" required placeholder="https://..." class="w-full px-3 py-1.5 text-xs border rounded-lg mt-1">
        </div>
      </div>

      <button type="submit" class="btn-navy w-full py-2.5 rounded-lg text-xs font-bold">Simpan Kategori</button>
    </form>
  `);
}

function saveNewCategory(e) {
  e.preventDefault();
  const id = document.getElementById('add-cat-id').value.trim().toLowerCase().replace(/\s+/g, '-');
  const cat = {
    id,
    name: document.getElementById('add-cat-name').value,
    desc: document.getElementById('add-cat-desc').value,
    itemCount: document.getElementById('add-cat-count').value,
    image: document.getElementById('add-cat-image').value
  };

  window.KMS_DATA.categories.push(cat);
  saveKmsData(window.KMS_DATA);
  closeCmsModal();
  refreshAllPublicContent();
  initCatalogFilters();
  renderAdminCategories();
  updateAdminStats();
  alert('Kategori baru berhasil ditambahkan!');
}

function editCategoryModal(catId) {
  const cat = window.KMS_DATA.categories.find(c => c.id === catId);
  if (!cat) return;

  openCmsModal(`Edit Kategori: ${cat.name}`, `
    <form onsubmit="saveEditedCategory(event, '${cat.id}')" class="space-y-4">
      <div>
        <label class="block text-xs font-bold text-slate-700 mb-1">Nama Kategori</label>
        <input type="text" id="edit-cat-name" required value="${cat.name}" class="w-full px-3 py-2 text-sm border rounded-lg">
      </div>
      <div>
        <label class="block text-xs font-bold text-slate-700 mb-1">Deskripsi</label>
        <textarea id="edit-cat-desc" rows="2" class="w-full px-3 py-2 text-sm border rounded-lg">${cat.desc || ''}</textarea>
      </div>
      <div>
        <label class="block text-xs font-bold text-slate-700 mb-1">Label Varian</label>
        <input type="text" id="edit-cat-count" value="${cat.itemCount || ''}" class="w-full px-3 py-2 text-sm border rounded-lg">
      </div>

      <!-- Photo Upload Box -->
      <div class="p-3 bg-slate-50 border rounded-xl space-y-2">
        <label class="block text-xs font-bold text-slate-700">Foto Sampul Kategori</label>
        <div class="flex items-center gap-3">
          <input type="file" accept="image/*" onchange="handleImageFileInput(this, 'edit-cat-preview', 'edit-cat-image')" class="text-xs text-slate-500">
          <img id="edit-cat-preview" src="${cat.image || ''}" alt="Preview" class="w-14 h-14 object-cover rounded border">
        </div>
        <div>
          <span class="text-[10px] text-slate-400">Atau URL foto:</span>
          <input type="text" id="edit-cat-image" required value="${cat.image || ''}" class="w-full px-3 py-1.5 text-xs border rounded-lg mt-1">
        </div>
      </div>

      <button type="submit" class="btn-navy w-full py-2.5 rounded-lg text-xs font-bold">Simpan Perubahan</button>
    </form>
  `);
}

function saveEditedCategory(e, catId) {
  e.preventDefault();
  const cat = window.KMS_DATA.categories.find(c => c.id === catId);
  if (!cat) return;

  cat.name = document.getElementById('edit-cat-name').value;
  cat.desc = document.getElementById('edit-cat-desc').value;
  cat.itemCount = document.getElementById('edit-cat-count').value;
  cat.image = document.getElementById('edit-cat-image').value;

  saveKmsData(window.KMS_DATA);
  closeCmsModal();
  refreshAllPublicContent();
  initCatalogFilters();
  renderAdminCategories();
  alert('Kategori berhasil diperbarui!');
}

function deleteCategory(catId) {
  if (confirm('Hapus kategori ini?')) {
    window.KMS_DATA.categories = window.KMS_DATA.categories.filter(c => c.id !== catId);
    saveKmsData(window.KMS_DATA);
    refreshAllPublicContent();
    initCatalogFilters();
    renderAdminCategories();
    updateAdminStats();
  }
}

/**
 * CMS: Products & Specifications CRUD
 */
function renderAdminProductsTable() {
  const container = document.getElementById('admin-products-table');
  if (!container) return;

  const products = window.KMS_DATA.products || [];
  container.innerHTML = products.map(prod => `
    <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 border border-slate-200 rounded-xl bg-slate-50">
      <div class="flex items-center gap-4">
        <img src="${prod.image}" alt="${prod.name}" class="w-14 h-14 object-cover rounded-lg border">
        <div>
          <div class="flex items-center gap-2">
            <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800">${prod.categoryName || prod.categoryId}</span>
            ${prod.tag ? `<span class="text-[9px] font-bold px-1.5 py-0.5 rounded bg-blue-100 text-blue-800">${prod.tag}</span>` : ''}
          </div>
          <h4 class="font-extrabold text-sm text-corporate-dark mt-1">${prod.name}</h4>
          <p class="text-[11px] text-slate-500 line-clamp-1">${prod.shortDesc || ''}</p>
        </div>
      </div>
      <div class="flex items-center gap-2 self-end sm:self-auto">
        <button onclick="editProductModal('${prod.id}')" class="px-3 py-1.5 rounded-lg bg-blue-50 text-corporate font-bold text-xs hover:bg-blue-100 flex items-center gap-1">
          <i data-lucide="edit" class="w-3.5 h-3.5"></i>
          <span>Edit &amp; Specs</span>
        </button>
        <button onclick="deleteProduct('${prod.id}')" class="px-3 py-1.5 rounded-lg bg-red-50 text-red-600 font-bold text-xs hover:bg-red-100 flex items-center gap-1">
          <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
          <span>Hapus</span>
        </button>
      </div>
    </div>
  `).join('');
  initIcons();
}

function openAddProductModal() {
  const catOptions = window.KMS_DATA.categories.map(c => `
    <option value="${c.id}">${c.name}</option>
  `).join('');

  openCmsModal('Tambah Produk Baru', `
    <form onsubmit="saveNewProduct(event)" class="space-y-4">
      <div class="grid grid-cols-2 gap-3">
        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">Nama Produk *</label>
          <input type="text" id="add-prod-name" required placeholder="Contoh: Plastic Wrapping Roll" class="w-full px-3 py-2 text-sm border rounded-lg">
        </div>
        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">Pilih Kategori *</label>
          <select id="add-prod-cat" required class="w-full px-3 py-2 text-sm border rounded-lg">
            ${catOptions}
          </select>
        </div>
      </div>

      <!-- Photo Upload Box -->
      <div class="p-3 bg-slate-50 border rounded-xl space-y-2">
        <label class="block text-xs font-bold text-slate-700">Foto Produk</label>
        <div class="flex items-center gap-3">
          <input type="file" accept="image/*" onchange="handleImageFileInput(this, 'add-prod-preview', 'add-prod-img')" class="text-xs text-slate-500">
          <img id="add-prod-preview" src="" alt="Preview" class="w-16 h-16 object-cover rounded border hidden">
        </div>
        <div>
          <span class="text-[10px] text-slate-400">Atau gunakan URL:</span>
          <input type="text" id="add-prod-img" required placeholder="https://..." class="w-full px-3 py-1.5 text-xs border rounded-lg mt-1">
        </div>
      </div>

      <div class="grid grid-cols-2 gap-3">
        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">Tag / Badge</label>
          <input type="text" id="add-prod-tag" placeholder="Misal: Best Seller" class="w-full px-3 py-2 text-sm border rounded-lg">
        </div>
        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">Deskripsi Singkat *</label>
          <input type="text" id="add-prod-short" required class="w-full px-3 py-2 text-sm border rounded-lg">
        </div>
      </div>
      <div>
        <label class="block text-xs font-bold text-slate-700 mb-1">Deskripsi Lengkap</label>
        <textarea id="add-prod-full" rows="3" class="w-full px-3 py-2 text-sm border rounded-lg"></textarea>
      </div>

      <!-- Specs Key Value Builder -->
      <div class="p-3 bg-slate-50 border rounded-xl">
        <div class="flex justify-between items-center mb-2">
          <label class="text-xs font-bold text-corporate-dark">Tabel Spesifikasi Teknis (PRD)</label>
          <button type="button" onclick="addSpecRowInput('add-specs-container')" class="text-xs text-corporate font-bold hover:underline">+ Tambah Baris</button>
        </div>
        <div id="add-specs-container" class="space-y-2">
          <div class="flex gap-2 spec-row">
            <input type="text" placeholder="Parameter" class="w-1/3 px-2 py-1 text-xs border rounded spec-key" value="Material">
            <input type="text" placeholder="Nilai" class="w-2/3 px-2 py-1 text-xs border rounded spec-val" value="Standar Industri">
          </div>
        </div>
      </div>

      <button type="submit" class="btn-navy w-full py-2.5 rounded-lg text-xs font-bold">Simpan Produk</button>
    </form>
  `);
}

function addSpecRowInput(containerId, key = '', val = '') {
  const container = document.getElementById(containerId);
  if (!container) return;
  const row = document.createElement('div');
  row.className = 'flex gap-2 items-center spec-row';
  row.innerHTML = `
    <input type="text" placeholder="Parameter" class="w-1/3 px-2 py-1 text-xs border rounded spec-key" value="${key}">
    <input type="text" placeholder="Nilai / Spesifikasi" class="w-2/3 px-2 py-1 text-xs border rounded spec-val" value="${val}">
    <button type="button" onclick="this.parentElement.remove()" class="text-red-500 text-xs px-1">&times;</button>
  `;
  container.appendChild(row);
}

function saveNewProduct(e) {
  e.preventDefault();
  const catId = document.getElementById('add-prod-cat').value;
  const catObj = window.KMS_DATA.categories.find(c => c.id === catId);

  const specRows = document.querySelectorAll('#add-specs-container .spec-row');
  const specs = [];
  specRows.forEach(r => {
    const k = r.querySelector('.spec-key').value.trim();
    const v = r.querySelector('.spec-val').value.trim();
    if (k && v) specs.push({ key: k, val: v });
  });

  const newProd = {
    id: 'prod-' + Date.now(),
    categoryId: catId,
    categoryName: catObj ? catObj.name : catId,
    name: document.getElementById('add-prod-name').value,
    tag: document.getElementById('add-prod-tag').value,
    badge: document.getElementById('add-prod-tag').value || (catObj ? catObj.name : 'Produk'),
    image: document.getElementById('add-prod-img').value,
    gallery: [document.getElementById('add-prod-img').value],
    shortDesc: document.getElementById('add-prod-short').value,
    fullDesc: document.getElementById('add-prod-full').value || document.getElementById('add-prod-short').value,
    specs,
    advantages: [
      "Kualitas teruji untuk standar industri",
      "Ketersediaan pasokan terjamin",
      "Dukungan pengiriman tepat waktu"
    ]
  };

  window.KMS_DATA.products.unshift(newProd);
  saveKmsData(window.KMS_DATA);
  closeCmsModal();
  renderProducts();
  renderAdminProductsTable();
  updateAdminStats();
  alert('Produk baru berhasil ditambahkan!');
}

function editProductModal(prodId) {
  const p = window.KMS_DATA.products.find(item => item.id === prodId);
  if (!p) return;

  const catOptions = window.KMS_DATA.categories.map(c => `
    <option value="${c.id}" ${c.id === p.categoryId ? 'selected' : ''}>${c.name}</option>
  `).join('');

  openCmsModal(`Edit Produk: ${p.name}`, `
    <form onsubmit="saveEditedProduct(event, '${p.id}')" class="space-y-4">
      <div class="grid grid-cols-2 gap-3">
        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">Nama Produk</label>
          <input type="text" id="edit-prod-name" required value="${p.name}" class="w-full px-3 py-2 text-sm border rounded-lg">
        </div>
        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">Kategori</label>
          <select id="edit-prod-cat" required class="w-full px-3 py-2 text-sm border rounded-lg">
            ${catOptions}
          </select>
        </div>
      </div>

      <!-- Photo Upload Box -->
      <div class="p-3 bg-slate-50 border rounded-xl space-y-2">
        <label class="block text-xs font-bold text-slate-700">Foto Produk</label>
        <div class="flex items-center gap-3">
          <input type="file" accept="image/*" onchange="handleImageFileInput(this, 'edit-prod-preview', 'edit-prod-img')" class="text-xs text-slate-500">
          <img id="edit-prod-preview" src="${p.image || ''}" alt="Preview" class="w-16 h-16 object-cover rounded border">
        </div>
        <div>
          <span class="text-[10px] text-slate-400">Atau URL foto:</span>
          <input type="text" id="edit-prod-img" required value="${p.image || ''}" class="w-full px-3 py-1.5 text-xs border rounded-lg mt-1">
        </div>
      </div>

      <div class="grid grid-cols-2 gap-3">
        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">Tag / Badge</label>
          <input type="text" id="edit-prod-tag" value="${p.tag || ''}" class="w-full px-3 py-2 text-sm border rounded-lg">
        </div>
        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">Deskripsi Singkat</label>
          <input type="text" id="edit-prod-short" required value="${p.shortDesc || ''}" class="w-full px-3 py-2 text-sm border rounded-lg">
        </div>
      </div>
      <div>
        <label class="block text-xs font-bold text-slate-700 mb-1">Deskripsi Lengkap</label>
        <textarea id="edit-prod-full" rows="3" class="w-full px-3 py-2 text-sm border rounded-lg">${p.fullDesc || ''}</textarea>
      </div>

      <!-- Specs Key Value Builder -->
      <div class="p-3 bg-slate-50 border rounded-xl">
        <div class="flex justify-between items-center mb-2">
          <label class="text-xs font-bold text-corporate-dark">Tabel Spesifikasi Teknis</label>
          <button type="button" onclick="addSpecRowInput('edit-specs-container')" class="text-xs text-corporate font-bold hover:underline">+ Tambah Baris</button>
        </div>
        <div id="edit-specs-container" class="space-y-2">
          <!-- Populated below -->
        </div>
      </div>

      <button type="submit" class="btn-navy w-full py-2.5 rounded-lg text-xs font-bold">Simpan Perubahan Produk</button>
    </form>
  `);

  const specContainer = document.getElementById('edit-specs-container');
  if (specContainer && p.specs) {
    p.specs.forEach(sp => {
      addSpecRowInput('edit-specs-container', sp.key, sp.val);
    });
  }
}

function saveEditedProduct(e, prodId) {
  e.preventDefault();
  const p = window.KMS_DATA.products.find(item => item.id === prodId);
  if (!p) return;

  const catId = document.getElementById('edit-prod-cat').value;
  const catObj = window.KMS_DATA.categories.find(c => c.id === catId);

  const specRows = document.querySelectorAll('#edit-specs-container .spec-row');
  const specs = [];
  specRows.forEach(r => {
    const k = r.querySelector('.spec-key').value.trim();
    const v = r.querySelector('.spec-val').value.trim();
    if (k && v) specs.push({ key: k, val: v });
  });

  p.categoryId = catId;
  p.categoryName = catObj ? catObj.name : catId;
  p.name = document.getElementById('edit-prod-name').value;
  p.tag = document.getElementById('edit-prod-tag').value;
  p.badge = p.tag || p.categoryName;
  p.image = document.getElementById('edit-prod-img').value;
  p.shortDesc = document.getElementById('edit-prod-short').value;
  p.fullDesc = document.getElementById('edit-prod-full').value;
  p.specs = specs;

  saveKmsData(window.KMS_DATA);
  closeCmsModal();
  renderProducts();
  renderAdminProductsTable();
  alert('Produk berhasil diperbarui!');
}

function deleteProduct(prodId) {
  if (confirm('Hapus produk ini?')) {
    window.KMS_DATA.products = window.KMS_DATA.products.filter(p => p.id !== prodId);
    saveKmsData(window.KMS_DATA);
    renderProducts();
    renderAdminProductsTable();
    updateAdminStats();
  }
}

/**
 * CMS: Solutions & Credibility Stats
 */
function renderAdminSolutions() {
  const container = document.getElementById('admin-solutions-list');
  if (!container) return;

  container.innerHTML = window.KMS_DATA.solutions.map((sol, idx) => `
    <div class="p-4 border rounded-xl bg-slate-50 space-y-2">
      <div class="flex justify-between">
        <span class="text-xs font-bold text-amber-600 uppercase">${sol.badge}</span>
        <span class="text-xs text-slate-400">Solusi #${idx + 1}</span>
      </div>
      <input type="text" value="${sol.title}" onchange="updateSolutionTitle(${idx}, this.value)" class="w-full font-bold text-sm px-3 py-1.5 border rounded">
      <textarea onchange="updateSolutionDesc(${idx}, this.value)" rows="2" class="w-full text-xs text-slate-600 px-3 py-1.5 border rounded">${sol.desc}</textarea>
    </div>
  `).join('');
}

function updateSolutionTitle(idx, val) {
  window.KMS_DATA.solutions[idx].title = val;
  saveKmsData(window.KMS_DATA);
  renderSolutionsGrid();
}

function updateSolutionDesc(idx, val) {
  window.KMS_DATA.solutions[idx].desc = val;
  saveKmsData(window.KMS_DATA);
  renderSolutionsGrid();
}

function populateAdminStatsInputs() {
  const container = document.getElementById('admin-stats-inputs');
  if (!container) return;
  const stats = window.KMS_DATA.stats || [];

  container.innerHTML = stats.map((st, idx) => `
    <div class="p-3 bg-slate-50 border rounded-xl">
      <label class="block text-[11px] font-bold text-slate-600 mb-1">Angka Counter #${idx + 1}</label>
      <input type="text" id="adm-stat-num-${idx}" value="${st.number}" class="w-full font-black text-lg px-2 py-1 border rounded mb-2">
      <input type="text" id="adm-stat-lbl-${idx}" value="${st.label}" class="w-full text-xs font-bold px-2 py-1 border rounded mb-1">
      <input type="text" id="adm-stat-sub-${idx}" value="${st.sublabel}" class="w-full text-[10px] text-slate-500 px-2 py-1 border rounded">
    </div>
  `).join('');
}

function saveAdminStats() {
  const stats = window.KMS_DATA.stats || [];
  stats.forEach((st, idx) => {
    st.number = document.getElementById(`adm-stat-num-${idx}`).value;
    st.label = document.getElementById(`adm-stat-lbl-${idx}`).value;
    st.sublabel = document.getElementById(`adm-stat-sub-${idx}`).value;
  });
  saveKmsData(window.KMS_DATA);
  renderStatsBar();
  alert('Angka counter kredibilitas berhasil diperbarui!');
}

/**
 * ==================== CMS: CLIENTS (KLIEN KAMI) WITH DIRECT PHOTO UPLOAD & EDIT ====================
 */
function renderAdminClients() {
  const container = document.getElementById('admin-clients-list');
  if (!container) return;

  container.innerHTML = window.KMS_DATA.clients.map(c => `
    <div class="p-4 border rounded-xl bg-slate-50 flex items-center justify-between gap-3">
      <div class="flex items-center gap-3">
        <div class="w-14 h-12 flex items-center justify-center bg-white p-1 border rounded-lg shadow-sm">
          <img src="${c.logo}" alt="${c.shortName}" class="max-h-full max-w-full object-contain">
        </div>
        <div>
          <h4 class="font-bold text-sm text-corporate-dark">${c.shortName}</h4>
          <p class="text-[11px] text-slate-600 line-clamp-1">${c.name}</p>
          <span class="text-[9.5px] text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded">${c.industry}</span>
        </div>
      </div>
      <div class="flex items-center gap-1.5">
        <button onclick="editClientModal('${c.id}')" class="px-2.5 py-1.5 bg-blue-50 hover:bg-blue-100 text-corporate font-bold text-xs rounded-lg flex items-center gap-1 transition">
          <i data-lucide="edit" class="w-3.5 h-3.5"></i>
          <span>Edit</span>
        </button>
        <button onclick="deleteClient('${c.id}')" class="px-2.5 py-1.5 bg-red-50 hover:bg-red-100 text-red-600 font-bold text-xs rounded-lg flex items-center gap-1 transition">
          <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
          <span>Hapus</span>
        </button>
      </div>
    </div>
  `).join('');
  initIcons();
}

function openAddClientModal() {
  openCmsModal('Tambah Klien Baru (Unggah Logo)', `
    <form onsubmit="saveNewClient(event)" class="space-y-4">
      <div>
        <label class="block text-xs font-bold text-slate-700 mb-1">Nama Perusahaan Klien *</label>
        <input type="text" id="add-client-name" required placeholder="Contoh: PT Surya Baja Indonesia" class="w-full px-3 py-2 text-sm border rounded-lg">
      </div>
      <div>
        <label class="block text-xs font-bold text-slate-700 mb-1">Nama Singkat / Brand *</label>
        <input type="text" id="add-client-short" required placeholder="Contoh: Surya Baja" class="w-full px-3 py-2 text-sm border rounded-lg">
      </div>
      <div>
        <label class="block text-xs font-bold text-slate-700 mb-1">Sektor Industri</label>
        <input type="text" id="add-client-ind" placeholder="Contoh: Manufaktur Baja & Konstruksi" class="w-full px-3 py-2 text-sm border rounded-lg">
      </div>

      <!-- Direct Logo Upload Box -->
      <div class="p-4 bg-corporate-softBlue border border-blue-200 rounded-xl space-y-3">
        <div class="flex items-center justify-between">
          <label class="text-xs font-bold text-corporate-dark flex items-center gap-1.5">
            <i data-lucide="upload" class="w-4 h-4 text-corporate"></i>
            <span>Unggah Logo dari Komputer / HP *</span>
          </label>
        </div>
        <div class="flex items-center gap-4">
          <input type="file" accept="image/*" onchange="handleImageFileInput(this, 'add-client-logo-preview', 'add-client-logo')" 
                 class="block w-full text-xs text-slate-500 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-corporate file:text-white hover:file:bg-corporate-dark cursor-pointer">
          <div class="w-16 h-12 bg-white border rounded flex items-center justify-center p-1 flex-shrink-0">
            <img id="add-client-logo-preview" src="" alt="Preview" class="max-h-full max-w-full object-contain hidden">
          </div>
        </div>
        <div>
          <span class="text-[10px] text-slate-400">Atau URL logo gambar/SVG:</span>
          <input type="text" id="add-client-logo" required placeholder="assets/logos/... atau https://..." class="w-full px-3 py-1.5 text-xs border rounded-lg mt-1">
        </div>
      </div>

      <button type="submit" class="btn-navy w-full py-2.5 rounded-lg text-xs font-bold shadow">
        Simpan Klien Baru
      </button>
    </form>
  `);
}

function saveNewClient(e) {
  e.preventDefault();
  const c = {
    id: 'client-' + Date.now(),
    name: document.getElementById('add-client-name').value,
    shortName: document.getElementById('add-client-short').value,
    industry: document.getElementById('add-client-ind').value || 'Mitra Korporat',
    logo: document.getElementById('add-client-logo').value
  };

  window.KMS_DATA.clients.push(c);
  saveKmsData(window.KMS_DATA);
  closeCmsModal();
  initClientsGrid();
  renderAdminClients();
  alert('Klien baru berhasil ditambahkan!');
}

function editClientModal(clientId) {
  const c = window.KMS_DATA.clients.find(item => item.id === clientId);
  if (!c) return;

  openCmsModal(`Edit Klien: ${c.shortName}`, `
    <form onsubmit="saveEditedClient(event, '${c.id}')" class="space-y-4">
      <div>
        <label class="block text-xs font-bold text-slate-700 mb-1">Nama Perusahaan Klien *</label>
        <input type="text" id="edit-client-name" required value="${c.name}" class="w-full px-3 py-2 text-sm border rounded-lg">
      </div>
      <div>
        <label class="block text-xs font-bold text-slate-700 mb-1">Nama Singkat / Brand *</label>
        <input type="text" id="edit-client-short" required value="${c.shortName}" class="w-full px-3 py-2 text-sm border rounded-lg">
      </div>
      <div>
        <label class="block text-xs font-bold text-slate-700 mb-1">Sektor Industri</label>
        <input type="text" id="edit-client-ind" value="${c.industry || ''}" class="w-full px-3 py-2 text-sm border rounded-lg">
      </div>

      <!-- Direct Logo Upload Box -->
      <div class="p-4 bg-corporate-softBlue border border-blue-200 rounded-xl space-y-3">
        <div class="flex items-center justify-between">
          <label class="text-xs font-bold text-corporate-dark flex items-center gap-1.5">
            <i data-lucide="upload" class="w-4 h-4 text-corporate"></i>
            <span>Unggah Logo Baru dari Komputer / HP</span>
          </label>
        </div>
        <div class="flex items-center gap-4">
          <input type="file" accept="image/*" onchange="handleImageFileInput(this, 'edit-client-logo-preview', 'edit-client-logo')" 
                 class="block w-full text-xs text-slate-500 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-corporate file:text-white hover:file:bg-corporate-dark cursor-pointer">
          <div class="w-16 h-12 bg-white border rounded flex items-center justify-center p-1 flex-shrink-0">
            <img id="edit-client-logo-preview" src="${c.logo}" alt="Preview" class="max-h-full max-w-full object-contain">
          </div>
        </div>
        <div>
          <span class="text-[10px] text-slate-400">Atau URL logo gambar:</span>
          <input type="text" id="edit-client-logo" required value="${c.logo}" class="w-full px-3 py-1.5 text-xs border rounded-lg mt-1">
        </div>
      </div>

      <button type="submit" class="btn-navy w-full py-2.5 rounded-lg text-xs font-bold shadow">
        Simpan Perubahan Klien
      </button>
    </form>
  `);
}

function saveEditedClient(e, clientId) {
  e.preventDefault();
  const c = window.KMS_DATA.clients.find(item => item.id === clientId);
  if (!c) return;

  c.name = document.getElementById('edit-client-name').value;
  c.shortName = document.getElementById('edit-client-short').value;
  c.industry = document.getElementById('edit-client-ind').value;
  c.logo = document.getElementById('edit-client-logo').value;

  saveKmsData(window.KMS_DATA);
  closeCmsModal();
  initClientsGrid();
  renderAdminClients();
  alert('Data klien berhasil diperbarui!');
}

function deleteClient(id) {
  if (confirm('Hapus klien ini?')) {
    window.KMS_DATA.clients = window.KMS_DATA.clients.filter(c => c.id !== id);
    saveKmsData(window.KMS_DATA);
    initClientsGrid();
    renderAdminClients();
    alert('Klien berhasil dihapus.');
  }
}

/**
 * ==================== CMS: GALLERY (DOKUMENTASI) WITH DIRECT PHOTO UPLOAD & EDIT ====================
 */
function renderAdminGallery() {
  const container = document.getElementById('admin-gallery-list');
  if (!container) return;

  container.innerHTML = window.KMS_DATA.gallery.map(g => `
    <div class="border rounded-xl bg-slate-50 overflow-hidden relative group flex flex-col justify-between">
      <div>
        <img src="${g.image}" alt="${g.title}" class="w-full h-32 object-cover">
        <div class="p-3">
          <span class="text-[10px] font-bold text-amber-600 uppercase">${g.category}</span>
          <h4 class="font-bold text-xs text-corporate-dark line-clamp-1 mt-0.5">${g.title}</h4>
          <p class="text-[11px] text-slate-500 line-clamp-2 mt-1">${g.desc || ''}</p>
        </div>
      </div>
      <div class="p-3 pt-0 flex gap-2 border-t border-slate-100 mt-2">
        <button onclick="editGalleryModal('${g.id}')" class="flex-1 py-1.5 bg-blue-50 hover:bg-blue-100 text-corporate font-bold text-xs rounded flex items-center justify-center gap-1 transition">
          <i data-lucide="edit" class="w-3.5 h-3.5"></i>
          <span>Edit</span>
        </button>
        <button onclick="deleteGalleryItem('${g.id}')" class="px-2 py-1.5 bg-red-50 hover:bg-red-100 text-red-600 font-bold text-xs rounded flex items-center justify-center transition">
          <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
        </button>
      </div>
    </div>
  `).join('');
  initIcons();
}

function openAddGalleryModal() {
  openCmsModal('Tambah Foto Dokumentasi Baru', `
    <form onsubmit="saveNewGallery(event)" class="space-y-4">
      <div>
        <label class="block text-xs font-bold text-slate-700 mb-1">Judul Dokumentasi *</label>
        <input type="text" id="add-gal-title" required placeholder="Contoh: Pengiriman Kargo Gudang" class="w-full px-3 py-2 text-sm border rounded-lg">
      </div>
      <div>
        <label class="block text-xs font-bold text-slate-700 mb-1">Kategori Kegiatan *</label>
        <input type="text" id="add-gal-cat" required placeholder="Contoh: Distribusi / Warehouse / Operasional" class="w-full px-3 py-2 text-sm border rounded-lg">
      </div>
      <div>
        <label class="block text-xs font-bold text-slate-700 mb-1">Deskripsi Singkat</label>
        <textarea id="add-gal-desc" rows="2" class="w-full px-3 py-2 text-sm border rounded-lg"></textarea>
      </div>

      <!-- Direct Photo Upload Box -->
      <div class="p-4 bg-corporate-softBlue border border-blue-200 rounded-xl space-y-3">
        <div class="flex items-center justify-between">
          <label class="text-xs font-bold text-corporate-dark flex items-center gap-1.5">
            <i data-lucide="camera" class="w-4 h-4 text-corporate"></i>
            <span>Unggah Foto dari Komputer / HP *</span>
          </label>
        </div>
        <div class="flex items-center gap-4">
          <input type="file" accept="image/*" onchange="handleImageFileInput(this, 'add-gal-preview', 'add-gal-img')" 
                 class="block w-full text-xs text-slate-500 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-corporate file:text-white hover:file:bg-corporate-dark cursor-pointer">
          <img id="add-gal-preview" src="" alt="Preview" class="w-16 h-16 object-cover rounded border flex-shrink-0 hidden">
        </div>
        <div>
          <span class="text-[10px] text-slate-400">Atau gunakan URL foto:</span>
          <input type="text" id="add-gal-img" required placeholder="https://..." class="w-full px-3 py-1.5 text-xs border rounded-lg mt-1">
        </div>
      </div>

      <button type="submit" class="btn-navy w-full py-2.5 rounded-lg text-xs font-bold shadow">
        Simpan Dokumentasi Baru
      </button>
    </form>
  `);
}

function saveNewGallery(e) {
  e.preventDefault();
  const g = {
    id: 'gal-' + Date.now(),
    title: document.getElementById('add-gal-title').value,
    category: document.getElementById('add-gal-cat').value,
    desc: document.getElementById('add-gal-desc').value,
    image: document.getElementById('add-gal-img').value
  };

  window.KMS_DATA.gallery.push(g);
  saveKmsData(window.KMS_DATA);
  closeCmsModal();
  initGalleryGrid();
  renderAdminGallery();
  alert('Foto dokumentasi baru berhasil ditambahkan!');
}

function editGalleryModal(galleryId) {
  const g = window.KMS_DATA.gallery.find(item => item.id === galleryId);
  if (!g) return;

  openCmsModal(`Edit Dokumentasi: ${g.title}`, `
    <form onsubmit="saveEditedGallery(event, '${g.id}')" class="space-y-4">
      <div>
        <label class="block text-xs font-bold text-slate-700 mb-1">Judul Dokumentasi *</label>
        <input type="text" id="edit-gal-title" required value="${g.title}" class="w-full px-3 py-2 text-sm border rounded-lg">
      </div>
      <div>
        <label class="block text-xs font-bold text-slate-700 mb-1">Kategori Kegiatan *</label>
        <input type="text" id="edit-gal-cat" required value="${g.category}" class="w-full px-3 py-2 text-sm border rounded-lg">
      </div>
      <div>
        <label class="block text-xs font-bold text-slate-700 mb-1">Deskripsi Singkat</label>
        <textarea id="edit-gal-desc" rows="2" class="w-full px-3 py-2 text-sm border rounded-lg">${g.desc || ''}</textarea>
      </div>

      <!-- Direct Photo Upload Box -->
      <div class="p-4 bg-corporate-softBlue border border-blue-200 rounded-xl space-y-3">
        <div class="flex items-center justify-between">
          <label class="text-xs font-bold text-corporate-dark flex items-center gap-1.5">
            <i data-lucide="camera" class="w-4 h-4 text-corporate"></i>
            <span>Unggah Foto Baru dari Komputer / HP</span>
          </label>
        </div>
        <div class="flex items-center gap-4">
          <input type="file" accept="image/*" onchange="handleImageFileInput(this, 'edit-gal-preview', 'edit-gal-img')" 
                 class="block w-full text-xs text-slate-500 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-corporate file:text-white hover:file:bg-corporate-dark cursor-pointer">
          <img id="edit-gal-preview" src="${g.image}" alt="Preview" class="w-16 h-16 object-cover rounded border flex-shrink-0">
        </div>
        <div>
          <span class="text-[10px] text-slate-400">Atau URL foto:</span>
          <input type="text" id="edit-gal-img" required value="${g.image}" class="w-full px-3 py-1.5 text-xs border rounded-lg mt-1">
        </div>
      </div>

      <button type="submit" class="btn-navy w-full py-2.5 rounded-lg text-xs font-bold shadow">
        Simpan Perubahan Dokumentasi
      </button>
    </form>
  `);
}

function saveEditedGallery(e, galleryId) {
  e.preventDefault();
  const g = window.KMS_DATA.gallery.find(item => item.id === galleryId);
  if (!g) return;

  g.title = document.getElementById('edit-gal-title').value;
  g.category = document.getElementById('edit-gal-cat').value;
  g.desc = document.getElementById('edit-gal-desc').value;
  g.image = document.getElementById('edit-gal-img').value;

  saveKmsData(window.KMS_DATA);
  closeCmsModal();
  initGalleryGrid();
  renderAdminGallery();
  alert('Dokumentasi berhasil diperbarui!');
}

function deleteGalleryItem(id) {
  if (confirm('Hapus foto dokumentasi ini?')) {
    window.KMS_DATA.gallery = window.KMS_DATA.gallery.filter(g => g.id !== id);
    saveKmsData(window.KMS_DATA);
    initGalleryGrid();
    renderAdminGallery();
    alert('Dokumentasi berhasil dihapus.');
  }
}

/**
 * ==================== CMS: INQUIRY INBOX ====================
 */
function renderAdminInquiries() {
  const container = document.getElementById('admin-inquiries-list');
  if (!container) return;

  const list = loadInquiries();
  if (list.length === 0) {
    container.innerHTML = `
      <div class="py-12 text-center text-slate-400 bg-slate-50 rounded-xl border border-dashed">
        <i data-lucide="inbox" class="w-10 h-10 mx-auto mb-2 opacity-50"></i>
        <p class="text-xs">Belum ada inquiry pengadaan masuk dari pengunjung.</p>
      </div>
    `;
    initIcons();
    return;
  }

  container.innerHTML = list.map(item => `
    <div class="p-5 border border-slate-200 rounded-xl bg-white shadow-sm space-y-3">
      <div class="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
        <div class="flex items-center gap-2">
          <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-corporate">${item.id}</span>
          <span class="text-xs text-slate-400">${item.createdAt}</span>
        </div>
        <div class="flex items-center gap-2">
          <a href="https://wa.me/${(item.phone || '').replace(/[^0-9]/g, '')}?text=Halo%20${encodeURIComponent(item.name || '')}%20dari%20${encodeURIComponent(item.company || '')},%20kami%20dari%20PT%20Kanaya%20Multi%20Solusindo%20menindaklanjuti%20inquiry%20pengadaan%20Anda." 
             target="_blank" rel="noopener" class="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded text-xs font-bold flex items-center gap-1 shadow-sm">
            <i data-lucide="message-circle" class="w-3.5 h-3.5"></i>
            <span>Balas via WhatsApp</span>
          </a>
          <button onclick="deleteInquiryItem('${item.id}')" class="text-red-500 hover:text-red-700 p-1">
            <i data-lucide="trash-2" class="w-4 h-4"></i>
          </button>
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs bg-slate-50 p-3 rounded-lg">
        <div><strong class="text-slate-500">Pemohon:</strong> <span class="font-bold text-corporate-dark">${item.name}</span></div>
        <div><strong class="text-slate-500">Perusahaan:</strong> <span class="font-bold">${item.company}</span></div>
        <div><strong class="text-slate-500">No. Kontak:</strong> <span class="font-bold text-emerald-600">${item.phone}</span></div>
      </div>
      <div class="text-xs">
        <div class="font-bold text-corporate-dark mb-1">Produk Diminta: ${item.product} (Jumlah: ${item.qty})</div>
        <p class="text-slate-600 italic bg-amber-50/50 p-2.5 rounded border border-amber-100">${item.message}</p>
      </div>
    </div>
  `).join('');
  initIcons();
}

function deleteInquiryItem(id) {
  let list = loadInquiries();
  const target = list.find(i => i.id === id);
  list = list.filter(i => i.id !== id);
  try {
    localStorage.setItem('KMS_INQUIRIES_V2', JSON.stringify(list));
  } catch(e) {}

  // Hapus dari Cloud Firestore
  if (typeof kmsDb !== 'undefined' && kmsDb && target && target._firestoreId) {
    kmsDb.collection('inquiries').doc(target._firestoreId).delete()
      .then(() => console.log('Inquiry terhapus dari Cloud Firestore'))
      .catch(err => console.warn('Gagal hapus dari Firestore:', err));
  }

  renderAdminInquiries();
  updateAdminStats();
}

function clearAllInquiries() {
  if (confirm('Hapus seluruh riwayat inquiry masuk?')) {
    const list = loadInquiries();
    try {
      localStorage.removeItem('KMS_INQUIRIES_V2');
    } catch(e) {}

    // Hapus seluruh dokumen dari Cloud Firestore
    if (typeof kmsDb !== 'undefined' && kmsDb) {
      list.forEach(item => {
        if (item._firestoreId) {
          kmsDb.collection('inquiries').doc(item._firestoreId).delete().catch(e => console.warn(e));
        }
      });
    }

    renderAdminInquiries();
    updateAdminStats();
  }
}

/**
 * ==================== BACKUP, RESTORE & RESET ====================
 */
function exportDataBackup() {
  const blob = new Blob([JSON.stringify(window.KMS_DATA, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `kms-backup-${Date.now()}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function importDataBackup(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    try {
      const data = JSON.parse(event.target.result);
      if (data.company && data.products) {
        window.KMS_DATA = data;
        saveKmsData(data);
        refreshAllPublicContent();
        initAdminDashboard();
        alert('Data berhasil dipulihkan dari file backup!');
      } else {
        alert('Format file JSON tidak valid untuk website KMS!');
      }
    } catch (err) {
      alert('Gagal membaca file JSON: ' + err.message);
    }
  };
  reader.readAsText(file);
}

function confirmResetToDefault() {
  if (confirm('PERINGATAN: Apakah Anda yakin ingin mereset seluruh data website ke standar PRD PT Kanaya Multi Solusindo?')) {
    resetKmsDataToDefault();
    refreshAllPublicContent();
    initAdminDashboard();
    alert('Data website berhasil direset ke standar PRD!');
  }
}

/**
 * Generic Modal Helper for CMS
 */
function openCmsModal(title, contentHtml) {
  const modal = document.getElementById('cms-editor-modal');
  const modalTitle = document.getElementById('cms-modal-title');
  const modalBody = document.getElementById('cms-modal-body');

  if (modal && modalTitle && modalBody) {
    modalTitle.textContent = title;
    modalBody.innerHTML = contentHtml;
    modal.classList.remove('hidden');
    initIcons();
  }
}

function closeCmsModal() {
  const modal = document.getElementById('cms-editor-modal');
  if (modal) modal.classList.add('hidden');
}

// Expose core view rendering functions to window for i18n dynamic invocation
window.renderProducts = renderProducts;
window.initHomeCategories = initHomeCategories;
window.initGalleryGrid = initGalleryGrid;
window.renderSolutionsGrid = renderSolutionsGrid;
window.renderWhyKanayaSection = renderWhyKanayaSection;
window.renderStatsBar = renderStatsBar;
window.showProductDetail = showProductDetail;
window.initCatalogFilters = initCatalogFilters;
