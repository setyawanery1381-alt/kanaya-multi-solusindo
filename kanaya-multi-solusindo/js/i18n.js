/**
 * PT Kanaya Multi Solusindo - Full Bilingual Translation Engine (ID / EN)
 * Complete automated translation for Navbar, Hero, About, Products, Product Details,
 * Clients, Solutions, Gallery, Contact, Modals, and Footer.
 * Supports auto-detection (browser locale / stored preference) and dynamic DOM hooking.
 */

const KMS_I18N = {
  id: {
    topAddress: "Harapan Indah - Bekasi, Jawa Barat",
    
    // Navbar
    navHome: "Beranda",
    navAbout: "Tentang Kami",
    navProducts: "Produk",
    navClients: "Klien Kami",
    navSolutions: "Solusi",
    navGallery: "Dokumentasi",
    navContact: "Kontak",
    mobileWaCta: "Hubungi WhatsApp",
    
    // Home - About Teaser
    homeAboutBadge: "Tentang Kami",
    homeAboutTitle: "Mengenal Kanaya Multi Solusindo",
    homeAboutText: "PT Kanaya Multi Solusindo bergerak di bidang General Supplier dengan menyediakan beragam produk untuk memenuhi kebutuhan bisnis, operasional, dan industri, meliputi <strong>Plastic, Packaging, Office Stationery, Safety Equipment, Chemical, Consumable,</strong> dan <strong>Printing</strong>.",
    homeAboutLearnMore: "Pelajari Selengkapnya",
    homeAboutCardTag: "Mitra Pengadaan B2B Terpercaya",
    
    // Home - Clients Teaser
    homeClientsBadge: "Kemitraan Korporat & B2B",
    homeClientsTitle: "Dipercaya oleh Berbagai Perusahaan Terkemuka",
    homeClientsSubtitle: "Komitmen keaslian produk, legalitas resmi, dan ketepatan jadwal pengiriman menjadikan kami mitra pengadaan pilihan berbagai sektor industri manufaktur dan bisnis.",
    homeClientsBtn: "Lihat Portfolio Klien",
    trustTax: "Faktur Pajak PPN Resmi",
    trustPartnership: "Kemitraan Jangka Panjang B2B",
    trustQuality: "Standar Mutu Industri Terjamin",
    trustTop: "Term of Payment (TOP) Fleksibel",
    
    // Home - Categories Teaser
    homeCatBadge: "Katalog Solusi",
    homeCatTitle: "Beragam Produk untuk Berbagai Kebutuhan",
    homeCatSubtitle: "Pilihan produk yang mendukung kebutuhan packaging, operasional, keselamatan kerja, kebersihan, hingga kebutuhan bisnis dan printing.",
    homeCatViewAll: "Lihat Semua Produk",
    
    // Home - Bottom CTA
    homeCtaTitle: "Bukan Sekadar Penyedia,<br>Kami Hadir sebagai Mitra.",
    homeCtaSubtitle: "Kami percaya bahwa kerja sama yang baik dibangun melalui kepercayaan,<br class=\"hidden sm:inline\"> profesionalitas, kualitas, dan komitmen.",
    homeCtaContact: "Hubungi Kami",
    homeCtaWa: "Konsultasi WhatsApp",
    
    // Home - Location
    homeLocBadge: "Lokasi Kantor Operasional",
    homeLocTitle: "Kunjungi Kantor & Gudang Kami",
    homeLocSubtitle: "Kami menyambut baik kunjungan mitra bisnis dan perwakilan perusahaan untuk berdiskusi langsung mengenai kebutuhan pengadaan.",
    
    // About Us Page
    aboutBannerCrumb: "Tentang Kami",
    aboutBannerTitle: "Tentang Kami",
    aboutBannerSubtitle: "Profil resmi, visi misi, dan komitmen PT Kanaya Multi Solusindo sebagai mitra pengadaan industri terpercaya.",
    aboutProfileHeading: "Profil Perusahaan",
    aboutVisionMissionHeading: "Visi & Misi",
    aboutVisionTitle: "Visi Kami",
    aboutVisionText: "\"Menjadi perusahaan yang mandiri, unggul, terpercaya, dan berorientasi pada keberlanjutan, serta mampu memberikan dampak positif bagi lingkungan sekitar.\"",
    aboutVisionCommitment: "Komitmen Berkelanjutan & Integritas",
    aboutMissionTitle: "Misi Perusahaan",
    aboutMissions: [
      "Menyediakan produk berkualitas prima dengan standar industri yang teruji dan harga kompetitif.",
      "Membangun kemitraan strategis jangka panjang yang berlandaskan integritas, transparansi, dan saling menguntungkan.",
      "Memberikan pelayanan profesional, responsif, dan pengiriman tepat waktu demi kelancaran operasional mitra bisnis.",
      "Menerapkan tata kelola perusahaan yang berorientasi pada pertumbuhan berkelanjutan dan kepatuhan hukum."
    ],
    aboutWhyBadge: "Keunggulan Kompetitif B2B",
    aboutWhyTitle: "Mengapa Perusahaan Memilih Bermitra dengan Kanaya?",
    aboutWhySubtitle: "Kami bukan sekadar penyedia barang, melainkan mitra strategis pengadaan yang menjamin legalitas resmi, keaslian mutu produk, serta kepastian jadwal suplai untuk kelancaran operasional industri Anda.",
    guaranteeTax: "Faktur Pajak Sah",
    guaranteeTaxSub: "Legalitas PT & PPN resmi",
    guaranteeResponse: "Fast Response",
    guaranteeResponseSub: "Penawaran hitungan jam",
    guaranteeQuality: "Jaminan Kualitas",
    guaranteeQualitySub: "Produk berstandar industri",
    guaranteeDelivery: "Pengiriman Aman",
    guaranteeDeliverySub: "Armada & ekspedisi tepat waktu",

    // Products Page
    prodBannerTitle: "Katalog Produk",
    prodBannerSubtitle: "Temukan produk industri, packaging, safety, consumable, dan kimia berkualitas prima untuk kebutuhan perusahaan Anda.",
    prodSearchPlaceholder: "Cari nama produk, kategori, spesifikasi...",
    prodCategoryHeader: "Kategori Produk",
    prodPillAll: "Semua Kategori",
    prodShowing: "Menampilkan",
    prodCountSuffix: "produk",
    prodCustomNeedTitle: "Butuh Spesifikasi Khusus?",
    prodCustomNeedDesc: "Kami siap membantu pengadaan produk dengan ukuran, volume, atau merek spesifik sesuai SOP perusahaan Anda.",
    prodCustomNeedBtn: "Ajukan Inquiry Pengadaan",
    prodNotFoundTitle: "Produk Tidak Ditemukan",
    prodNotFoundDesc: "Tidak ada produk yang cocok dengan pencarian atau filter yang dipilih. Silakan hubungi tim kami untuk pengadaan khusus.",
    prodNotFoundBtn: "Tanyakan Kebutuhan Khusus",
    prodRequestQuote: "Inquiry",
    prodDetail: "Lihat Detail",
    prodMissingBannerTitle: "Tidak Menemukan Produk yang Anda Butuhkan?",
    prodMissingBannerDesc: "Ajukan spesifikasi produk langsung kepada tim pengadaan kami untuk penawaran resmi.",
    prodBtnRequestSpecial: "Request Produk Khusus",
    prodBtnContactSales: "Hubungi Sales",
    
    // Product Detail Page
    detailBreadcrumbHome: "Beranda",
    detailBreadcrumbProd: "Produk",
    detailAdvantagesTitle: "Keunggulan Utama:",
    detailSpecsTitle: "Spesifikasi Teknis:",
    detailInquiryBtn: "Ajukan Inquiry",
    detailDownloadCatalogBtn: "Download Katalog",
    detailRelatedTitle: "Produk Lainnya di Kategori Ini",
    detailViewAll: "Lihat Semua →",
    detailKeyCategory: "Kategori",
    detailKeyCondition: "Kondisi",
    detailValCondition: "Baru / Original Pabrik",
    detailKeyMoq: "Minimum Order",
    detailValMoq: "Dapat dikonsultasikan sesuai kebutuhan",

    // Clients Page
    clientBannerTitle: "Klien Kami",
    clientBannerSubtitle: "Dipercaya oleh berbagai perusahaan manufaktur, konstruksi, dan korporat terkemuka di Indonesia.",
    clientHeading: "Dipercaya untuk Mendukung Berbagai Kebutuhan",
    clientSubtitle: "Kami bangga dipercaya oleh berbagai perusahaan terkemuka di sektor manufaktur, konstruksi, dan korporat di Indonesia.",
    clientTrustNoteTitle: "Membangun Hubungan Kemitraan Jangka Panjang",
    clientTrustNoteDesc: "PT Kanaya Multi Solusindo senantiasa menjaga hubungan kerja sama yang transparan, profesional, dan dapat diandalkan untuk menjamin kelancaran pasokan bisnis Anda.",
    
    // Solutions Page
    solutionBannerTitle: "Solusi Pengadaan untuk Berbagai Kebutuhan",
    solutionBannerSubtitle: "Menerjemahkan kategori produk menjadi solusi praktis dan efisien untuk setiap sektor bisnis Anda.",
    solutionIntro: "\"Setiap bisnis memiliki kebutuhan yang berbeda. Kanaya Multi Solusindo hadir dengan pilihan produk yang dapat mendukung kebutuhan bisnis, operasional, dan industri Anda.\"",
    solutionDiscussBtn: "Diskusikan Kebutuhan Anda",
    whyKanayaHeading: "Mengapa Memilih Kanaya?",
    whyKanayaBadge: "Keunggulan Layanan",
    whyKanayaDesc: "Komitmen kami berlandaskan pada 3 value utama yang kokoh untuk memastikan setiap pengadaan berjalan lancar dan tepat guna.",
    
    // Gallery Page
    galleryBannerTitle: "Dokumentasi & Galeri Kegiatan",
    galleryBannerSubtitle: "Melihat sekilas aktivitas pergudangan, distribusi pasokan, dan keandalan operasional tim kami.",
    galleryHeading: "Galeri Kegiatan Kami",
    galleryDesc: "Sekilas operasional pergudangan, distribusi logistik, dan aktivitas tim PT Kanaya Multi Solusindo.",
    
    // Contact Page
    contactBannerTitle: "Kontak Kami",
    contactBannerSubtitle: "Sampaikan kebutuhan pengadaan perusahaan Anda. Tim kami siap merespon dengan penawaran harga resmi.",
    contactBadge: "HUBUNGI KAMI",
    contactTitle: "Kami Siap Membantu<br>Kebutuhan Anda",
    contactSubtitle: "Jangan ragu untuk menghubungi kami. Tim kami siap memberikan informasi yang Anda butuhkan, baik untuk pertanyaan produk, kerjasama, maupun kebutuhan lainnya.",
    contactCardWa: "WHATSAPP",
    contactCardWaLink: "Chat langsung via WhatsApp",
    contactCardEmail: "EMAIL",
    contactCardEmailLink: "Kami akan segera merespon",
    contactCardAddress: "ALAMAT KANTOR",
    contactCardAddressLink: "Lihat di Google Maps",
    contactSocialTitle: "Ikuti Kami di Media Sosial",
    contactSocialSubtitle: "Dapatkan update terbaru seputar produk, proyek, dan aktivitas kami.",
    formTitle: "Formulir Permintaan Pengadaan",
    formSubtitle: "Lengkapi formulir di bawah ini untuk mendapatkan penawaran resmi dari tim kami.",
    formNameLabel: "Nama Lengkap *",
    formNamePlaceholder: "Contoh: Budi Pratama",
    formCompanyLabel: "Nama Perusahaan *",
    formCompanyPlaceholder: "Contoh: PT Surya Industri",
    formEmailLabel: "Email Perusahaan *",
    formEmailPlaceholder: "procurement@perusahaan.com",
    formPhoneLabel: "Nomor WhatsApp *",
    formPhonePlaceholder: "0812-3456-7890",
    formProductLabel: "Kebutuhan Produk *",
    formSelectProduct: "Pilih produk atau tuliskan kebutuhan Anda",
    formQtyLabel: "Estimasi Kebutuhan / Volume (opsional)",
    formQtyPlaceholder: "Contoh: 100 Roll / 500 Pcs",
    formMessageLabel: "Spesifikasi Tambahan / Catatan Teknis *",
    formMessagePlaceholder: "Tuliskan ukuran spesifik, ketebalan, merek tertentu, atau jadwal pengiriman...",
    formSubmitBtn: "Kirim Permintaan Penawaran",
    contactMapHeading: "Peta Lokasi Kantor Operasional PT Kanaya Multi Solusindo",
    contactMapAddressShort: "Ruko Sentra Niaga Blok EM.6, Harapan Indah - Kota Bekasi",
    contactMapOpenBtn: "Buka di Aplikasi Google Maps",

    // Modals
    modalInqTitle: "Form Permintaan Penawaran",
    modalInqSubtitle: "Lengkapi data berikut. Tim kami akan segera menghubungi Anda melalui WhatsApp atau email.",
    modalInqNamePh: "Nama Lengkap",
    modalInqCompPh: "PT / CV / Instansi",
    modalInqWaPh: "Nomor WhatsApp (08xxxxxxxx)",
    modalInqQtyPh: "Jumlah unit/roll",
    modalInqNotePh: "Spesifikasi khusus atau catatan pengiriman...",
    modalInqSubmit: "Kirim via WhatsApp",

    modalCustTitle: "Ajukan Kebutuhan Produk Khusus",
    modalCustSubtitle: "Konsultasikan spesifikasi, ukuran, atau merek produk yang belum terdaftar di katalog.",
    modalCustNamePh: "Nama Lengkap",
    modalCustCompPh: "Nama Perusahaan (PT/CV)",
    modalCustWaPh: "Nomor WhatsApp",
    modalCustProdPh: "Nama Barang & Spesifikasi Khusus",
    modalCustQtyPh: "Estimasi Kebutuhan",
    modalCustSubmit: "Kirim Permintaan Khusus",

    // Tooltip & Floating
    waTooltip: "Hubungi Kami via WhatsApp",

    // Footer
    footerNavTitle: "Navigasi",
    footerContactTitle: "Hubungi Kami",
    footerHoursTitle: "Jam Operasional",
    footerHoursText: "Senin - Jumat | 08.00 - 17.00 WIB",
    footerCopyright: "PT Kanaya Multi Solusindo. All Rights Reserved."
  },

  en: {
    topAddress: "Harapan Indah - Bekasi, West Java",
    
    // Navbar
    navHome: "Home",
    navAbout: "About Us",
    navProducts: "Products",
    navClients: "Our Clients",
    navSolutions: "Solutions",
    navGallery: "Gallery",
    navContact: "Contact",
    mobileWaCta: "Contact WhatsApp",
    
    // Home - About Teaser
    homeAboutBadge: "About Us",
    homeAboutTitle: "Get to Know Kanaya Multi Solusindo",
    homeAboutText: "PT Kanaya Multi Solusindo operates as a premier General Supplier providing diverse products to meet business, operational, and industrial needs, spanning <strong>Plastic, Packaging, Office Stationery, Safety Equipment, Chemical, Consumable,</strong> and <strong>Printing</strong>.",
    homeAboutLearnMore: "Learn More",
    homeAboutCardTag: "Trusted B2B Procurement Partner",
    
    // Home - Clients Teaser
    homeClientsBadge: "Corporate & B2B Partnerships",
    homeClientsTitle: "Trusted by Leading Enterprises",
    homeClientsSubtitle: "Our commitment to authentic quality, corporate compliance, and on-time delivery makes us the preferred procurement partner across manufacturing and industrial sectors.",
    homeClientsBtn: "View Client Portfolio",
    trustTax: "Official Tax Invoices",
    trustPartnership: "Long-term B2B Partnerships",
    trustQuality: "Guaranteed Industrial Quality",
    trustTop: "Flexible Terms of Payment (TOP)",
    
    // Home - Categories Teaser
    homeCatBadge: "Solutions Catalog",
    homeCatTitle: "Diverse Products for Every Industrial Need",
    homeCatSubtitle: "Comprehensive supply spanning industrial packaging, operational materials, safety gear, facility maintenance, and business printing.",
    homeCatViewAll: "View All Products",
    
    // Home - Bottom CTA
    homeCtaTitle: "More Than a Supplier,<br>We Are Your Strategic Partner.",
    homeCtaSubtitle: "We believe that successful collaboration is built upon trust,<br class=\"hidden sm:inline\"> professionalism, verified quality, and lasting commitment.",
    homeCtaContact: "Contact Us",
    homeCtaWa: "WhatsApp Consultation",
    
    // Home - Location
    homeLocBadge: "Operational Office Location",
    homeLocTitle: "Visit Our Office & Warehouse",
    homeLocSubtitle: "We warmly welcome corporate partners and business representatives to visit us and discuss procurement requirements in person.",
    
    // About Us Page
    aboutBannerCrumb: "About Us",
    aboutBannerTitle: "About Us",
    aboutBannerSubtitle: "Official profile, vision, mission, and commitments of PT Kanaya Multi Solusindo as a premier industrial procurement partner.",
    aboutProfileHeading: "Company Profile",
    aboutVisionMissionHeading: "Vision & Mission",
    aboutVisionTitle: "Our Vision",
    aboutVisionText: "\"To become an independent, distinguished, trustworthy, and sustainability-oriented enterprise capable of creating positive impacts for our community and environment.\"",
    aboutVisionCommitment: "Sustainable Commitment & Integrity",
    aboutMissionTitle: "Company Mission",
    aboutMissions: [
      "Providing premium quality products with verified industrial standards at competitive commercial rates.",
      "Building long-term strategic partnerships rooted in corporate integrity, transparency, and mutual growth.",
      "Delivering professional, highly responsive service and dependable on-time delivery for seamless business operations.",
      "Practicing corporate governance focused on sustainable expansion, environmental responsibility, and legal compliance."
    ],
    aboutWhyBadge: "B2B Competitive Edge",
    aboutWhyTitle: "Why Do Leading Companies Partner with Kanaya?",
    aboutWhySubtitle: "We are not just a vendor; we are a strategic procurement partner ensuring official legality, authentic quality, and on-schedule supply for your manufacturing operations.",
    guaranteeTax: "Official Tax Invoices",
    guaranteeTaxSub: "Full PT legal standing & VAT",
    guaranteeResponse: "Fast Response",
    guaranteeResponseSub: "Quotations within hours",
    guaranteeQuality: "Quality Guarantee",
    guaranteeQualitySub: "Strict industrial standards",
    guaranteeDelivery: "Safe Delivery",
    guaranteeDeliverySub: "Dedicated fleet & on-time logistics",

    // Products Page
    prodBannerTitle: "Product Catalog",
    prodBannerSubtitle: "Explore premium industrial supplies, packaging, safety equipment, consumables, and chemicals tailored for your enterprise.",
    prodSearchPlaceholder: "Search product name, category, specifications...",
    prodCategoryHeader: "Product Categories",
    prodPillAll: "All Categories",
    prodShowing: "Showing",
    prodCountSuffix: "products",
    prodCustomNeedTitle: "Need Custom Specifications?",
    prodCustomNeedDesc: "We are ready to assist procurement with custom dimensions, volumes, or specialized brands according to your company SOP.",
    prodCustomNeedBtn: "Submit Procurement Inquiry",
    prodNotFoundTitle: "No Products Found",
    prodNotFoundDesc: "No products matched your search or selected filter. Please contact our team for custom procurement needs.",
    prodNotFoundBtn: "Inquire Custom Needs",
    prodRequestQuote: "Inquire",
    prodDetail: "View Details",
    prodMissingBannerTitle: "Can't Find the Product You Need?",
    prodMissingBannerDesc: "Submit your technical specifications directly to our procurement team for an official formal quote.",
    prodBtnRequestSpecial: "Request Custom Product",
    prodBtnContactSales: "Contact Sales",
    
    // Product Detail Page
    detailBreadcrumbHome: "Home",
    detailBreadcrumbProd: "Products",
    detailAdvantagesTitle: "Key Advantages:",
    detailSpecsTitle: "Technical Specifications:",
    detailInquiryBtn: "Request Inquiry",
    detailDownloadCatalogBtn: "Download Catalog",
    detailRelatedTitle: "Other Products in this Category",
    detailViewAll: "View All →",
    detailKeyCategory: "Category",
    detailKeyCondition: "Condition",
    detailValCondition: "Brand New / Factory Original",
    detailKeyMoq: "Minimum Order",
    detailValMoq: "Consultable upon request",

    // Clients Page
    clientBannerTitle: "Our Clients",
    clientBannerSubtitle: "Trusted by leading manufacturing, construction, and corporate enterprises across Indonesia.",
    clientHeading: "Trusted to Support Diverse Operational Needs",
    clientSubtitle: "We are honored to be trusted by distinguished leaders across industrial manufacturing, construction, and corporate sectors in Indonesia.",
    clientTrustNoteTitle: "Building Long-Term Sustainable Partnerships",
    clientTrustNoteDesc: "PT Kanaya Multi Solusindo consistently maintains transparent, professional, and reliable business partnerships to safeguard your operational supply chain.",
    
    // Solutions Page
    solutionBannerTitle: "Procurement Solutions for Every Industry",
    solutionBannerSubtitle: "Translating comprehensive product categories into practical, cost-effective solutions for every business sector.",
    solutionIntro: "\"Every business has distinct operational requirements. Kanaya Multi Solusindo provides curated supply solutions to empower your industrial growth.\"",
    solutionDiscussBtn: "Discuss Your Requirements",
    whyKanayaHeading: "Why Choose Kanaya?",
    whyKanayaBadge: "Service Excellence",
    whyKanayaDesc: "Our enduring commitment is anchored in 3 steadfast core values ensuring that every procurement cycle runs seamlessly and accurately.",
    
    // Gallery Page
    galleryBannerTitle: "Documentation & Gallery",
    galleryBannerSubtitle: "A glimpse into our warehouse operations, logistics distribution, and reliable team capabilities.",
    galleryHeading: "Our Activity Gallery",
    galleryDesc: "Real-world documentation of warehouse operations, distribution logistics, and the dedicated PT Kanaya Multi Solusindo team.",
    
    // Contact Page
    contactBannerTitle: "Contact Us",
    contactBannerSubtitle: "Share your enterprise procurement needs. Our team is ready to respond with official price quotations.",
    contactBadge: "CONTACT US",
    contactTitle: "We Are Ready to Assist<br>Your Business Needs",
    contactSubtitle: "Do not hesitate to reach out. Our team is prepared to provide whatever information you require, from product inquiries to strategic corporate supply agreements.",
    contactCardWa: "WHATSAPP",
    contactCardWaLink: "Chat directly via WhatsApp",
    contactCardEmail: "EMAIL",
    contactCardEmailLink: "We will respond promptly",
    contactCardAddress: "OFFICE ADDRESS",
    contactCardAddressLink: "View on Google Maps",
    contactSocialTitle: "Follow Us on Social Media",
    contactSocialSubtitle: "Get the latest updates on our products, supply projects, and activities.",
    formTitle: "Procurement Inquiry Form",
    formSubtitle: "Complete the form below to receive an official formal quotation from our team.",
    formNameLabel: "Full Name *",
    formNamePlaceholder: "e.g. John Doe",
    formCompanyLabel: "Company Name *",
    formCompanyPlaceholder: "e.g. PT Acme Industries",
    formEmailLabel: "Corporate Email *",
    formEmailPlaceholder: "procurement@company.com",
    formPhoneLabel: "WhatsApp Number *",
    formPhonePlaceholder: "+62 812-3456-7890",
    formProductLabel: "Product / Requirement *",
    formSelectProduct: "Select product or requirement",
    formQtyLabel: "Estimated Quantity (optional)",
    formQtyPlaceholder: "e.g. 100 Rolls / 500 Pcs",
    formMessageLabel: "Message / Technical Specifications *",
    formMessagePlaceholder: "Specify item dimensions, thickness, brands, or expected delivery schedule...",
    formSubmitBtn: "Submit Inquiry",
    contactMapHeading: "Operational Office Location Map of PT Kanaya Multi Solusindo",
    contactMapAddressShort: "Ruko Sentra Niaga Blok EM.6, Harapan Indah - Bekasi City",
    contactMapOpenBtn: "Open in Google Maps App",

    // Modals
    modalInqTitle: "Procurement Inquiry",
    modalInqSubtitle: "Complete the details below. Our team will contact you promptly via WhatsApp or email.",
    modalInqNamePh: "Full Name",
    modalInqCompPh: "PT / CV / Organization",
    modalInqWaPh: "WhatsApp Number (+62 8xx)",
    modalInqQtyPh: "Number of units/rolls",
    modalInqNotePh: "Special specifications or delivery notes...",
    modalInqSubmit: "Send via WhatsApp",

    modalCustTitle: "Custom Procurement Request",
    modalCustSubtitle: "Consult custom specifications, dimensions, or brands not currently listed in our catalog.",
    modalCustNamePh: "Full Name",
    modalCustCompPh: "Company Name (PT / CV)",
    modalCustWaPh: "WhatsApp Number",
    modalCustProdPh: "Product Name & Technical Specs",
    modalCustQtyPh: "Estimated Demand / Volume",
    modalCustSubmit: "Send Custom Request",

    // Tooltip & Floating
    waTooltip: "Chat with Us on WhatsApp",

    // Footer
    footerNavTitle: "Navigation",
    footerContactTitle: "Contact Us",
    footerHoursTitle: "Business Hours",
    footerHoursText: "Monday - Friday | 08.00 - 17.00 WIB",
    footerCopyright: "PT Kanaya Multi Solusindo. All Rights Reserved."
  }
};

/**
 * Hero Slides Multilingual Data
 */
const KMS_HERO_I18N = {
  id: [
    {
      id: "slide-1",
      badge: "General Supplier & Mitra Pengadaan B2B",
      title: "General Supplier Terpercaya untuk Kebutuhan Operasional & Bisnis",
      subtitle: "PT Kanaya Multi Solusindo hadir sebagai mitra pengadaan terintegrasi dengan menyediakan beragam produk industri berkualitas prima.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85",
      btnPrimaryText: "Lihat Produk",
      btnPrimaryLink: "#products",
      btnSecondaryText: "Hubungi Kami",
      btnSecondaryLink: "#contact"
    },
    {
      id: "slide-2",
      badge: "Packaging & Material Plastik Industri",
      title: "Solusi Lengkap Packaging & Plastic Stretch Film Industri",
      subtitle: "Menyediakan Plastic Stretch Film kualitas prima, bubble wrap tebal, lakban OPP, dan kardus corrugated untuk proteksi kargo maksimal.",
      image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1200&q=85",
      btnPrimaryText: "Katalog Plastik",
      btnPrimaryLink: "#products",
      btnSecondaryText: "Ajukan Penawaran",
      btnSecondaryLink: "#contact"
    },
    {
      id: "slide-3",
      badge: "Workplace Safety & Standar K3",
      title: "Perlengkapan Keselamatan Kerja (APD) & Safety Industri",
      subtitle: "Mendukung kepatuhan standar K3 di lingkungan kerja pabrik, pergudangan, dan proyek dengan perlengkapan keselamatan bersertifikasi.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85",
      btnPrimaryText: "Perlengkapan APD",
      btnPrimaryLink: "#products",
      btnSecondaryText: "Konsultasi Safety",
      btnSecondaryLink: "#contact"
    },
    {
      id: "slide-4",
      badge: "Mitra Pengadaan B2B Terpercaya",
      title: "Bukan Sekadar Penyedia, Kami Hadir sebagai Mitra Strategis",
      subtitle: "Kerja sama yang baik dibangun melalui integritas, kecepatan suplai, kualitas produk teruji, dan komitmen pelayanan jangka panjang.",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=85",
      btnPrimaryText: "Lihat Klien Kami",
      btnPrimaryLink: "#clients",
      btnSecondaryText: "Mulai Kerja Sama",
      btnSecondaryLink: "#contact"
    }
  ],
  en: [
    {
      id: "slide-1",
      badge: "General Supplier & B2B Procurement Partner",
      title: "Trusted General Supplier for Operational & Business Needs",
      subtitle: "PT Kanaya Multi Solusindo is an integrated procurement partner delivering high-quality industrial products.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85",
      btnPrimaryText: "View Products",
      btnPrimaryLink: "#products",
      btnSecondaryText: "Contact Us",
      btnSecondaryLink: "#contact"
    },
    {
      id: "slide-2",
      badge: "Packaging & Industrial Plastic Material",
      title: "Comprehensive Industrial Packaging & Stretch Film Solutions",
      subtitle: "Supplying premium Plastic Stretch Film, heavy-duty bubble wrap, OPP adhesive tape, and corrugated boxes for maximum cargo protection.",
      image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1200&q=85",
      btnPrimaryText: "Plastic Catalog",
      btnPrimaryLink: "#products",
      btnSecondaryText: "Request Quote",
      btnSecondaryLink: "#contact"
    },
    {
      id: "slide-3",
      badge: "Workplace Safety & HSE Standards",
      title: "Personal Protective Equipment (PPE) & Industrial Safety Supplies",
      subtitle: "Supporting HSE compliance across factories, warehouses, and industrial construction projects with certified safety gear.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85",
      btnPrimaryText: "PPE Supplies",
      btnPrimaryLink: "#products",
      btnSecondaryText: "Safety Consultation",
      btnSecondaryLink: "#contact"
    },
    {
      id: "slide-4",
      badge: "Trusted B2B Procurement Partner",
      title: "More Than a Supplier, We Are Your Strategic Business Partner",
      subtitle: "Strong business partnerships are built on integrity, rapid supply chain, verified product quality, and long-term service commitment.",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=85",
      btnPrimaryText: "Our Clients",
      btnPrimaryLink: "#clients",
      btnSecondaryText: "Start Partnership",
      btnSecondaryLink: "#contact"
    }
  ]
};

/**
 * Solutions & Stats Multilingual Data
 */
const KMS_SOLUTIONS_I18N = {
  id: [
    {
      id: "business-ops",
      badge: "Operasional Bisnis",
      title: "Business & Operational Supplies",
      desc: "Mendukung kebutuhan perlengkapan dan consumable untuk aktivitas operasional bisnis Anda dengan efisiensi pengadaan tepat waktu."
    },
    {
      id: "packaging-solutions",
      badge: "Proteksi & Distribusi",
      title: "Packaging Solutions",
      desc: "Mendukung kebutuhan pengemasan, penyimpanan, dan distribusi logistik barang secara aman dan terlindungi dari kerusakan."
    },
    {
      id: "workplace-safety",
      badge: "Kesehatan & Keselamatan Kerja",
      title: "Workplace Safety",
      desc: "Menyediakan kebutuhan perlengkapan keselamatan kerja (APD) komprehensif untuk mendukung keamanan maksimal di lingkungan kerja."
    },
    {
      id: "cleaning-facility",
      badge: "Higienitas & Kebersihan",
      title: "Cleaning & Facility Needs",
      desc: "Mendukung kebutuhan kebersihan dan perawatan area kerja melalui produk chemical terstandar dan perlengkapan sanitasi teruji."
    }
  ],
  en: [
    {
      id: "business-ops",
      badge: "Business Operations",
      title: "Business & Operational Supplies",
      desc: "Supporting equipment and consumable needs for your business operations with reliable and timely procurement efficiency."
    },
    {
      id: "packaging-solutions",
      badge: "Protection & Logistics",
      title: "Packaging Solutions",
      desc: "Supporting packaging, storage, and logistics distribution requirements to ensure goods remain secure and protected from damage."
    },
    {
      id: "workplace-safety",
      badge: "Workplace HSE & Safety",
      title: "Workplace Safety Equipment",
      desc: "Providing comprehensive personal protective equipment (PPE) to ensure maximum safety in industrial workplace environments."
    },
    {
      id: "cleaning-facility",
      badge: "Hygiene & Facility Care",
      title: "Cleaning & Facility Maintenance",
      desc: "Supporting workplace cleanliness and facility maintenance with standardized chemical products and tested sanitation supplies."
    }
  ]
};

const KMS_STATS_I18N = {
  id: [
    { number: "500+", label: "Produk Lengkap", sublabel: "Solusi terpadu berbagai kategori" },
    { number: "100+", label: "Klien Korporat", sublabel: "Mitra B2B dan industri manufaktur" },
    { number: "10+", label: "Sektor Industri", sublabel: "Otomotif, logam, logistik & perkantoran" }
  ],
  en: [
    { number: "500+", label: "Complete Products", sublabel: "Integrated solutions across all categories" },
    { number: "100+", label: "Corporate Clients", sublabel: "Trusted B2B and manufacturing partners" },
    { number: "10+", label: "Industry Sectors", sublabel: "Automotive, metal, logistics & corporate" }
  ]
};

const KMS_WHY_ITEMS_I18N = {
  id: [
    {
      badge: "Legalitas 100% Resmi",
      title: "Profesional & Terpercaya",
      desc: "Menjunjung tinggi integritas, transparansi transaksi, dan kepatuhan administrasi.",
      points: [
        "Perusahaan Berbadan Hukum Resmi (PT)",
        "Faktur Pajak PPN & e-Billing Sah",
        "Sistem TOP (Term of Payment) Fleksibel"
      ]
    },
    {
      badge: "Layanan Cepat & Fleksibel",
      title: "Customer Focus",
      desc: "Menjadikan kebutuhan dan jadwal produksi pelanggan sebagai prioritas utama pelayanan.",
      points: [
        "Dedicated Account Representative B2B",
        "Respon Cepat WhatsApp & Penawaran Hitungan Jam",
        "Pengiriman Terjadwal Langsung ke Pabrik / Gudang"
      ]
    },
    {
      badge: "Garansi Mutu 100%",
      title: "Kualitas & Pelayanan",
      desc: "Standar mutu teruji dengan jaminan penggantian barang untuk kepuasan mitra.",
      points: [
        "Produk Terstandarisasi K3 & Mutu Industri",
        "Garansi Retur 100% Jika Barang Cacat / Tidak Sesuai",
        "Penyediaan Sampel Produk untuk Trial"
      ]
    }
  ],
  en: [
    {
      badge: "100% Official Legality",
      title: "Professional & Trustworthy",
      desc: "Upholding corporate integrity, transaction transparency, and strict statutory compliance.",
      points: [
        "Officially Incorporated Corporate Entity (PT)",
        "Valid VAT Tax Invoices & Official e-Billing",
        "Flexible Terms of Payment (TOP)"
      ]
    },
    {
      badge: "Fast & Flexible Service",
      title: "Customer-Centric Focus",
      desc: "Prioritizing client production schedules and procurement needs above all else.",
      points: [
        "Dedicated Corporate B2B Account Representative",
        "Rapid WhatsApp Response & Same-Day Quotes",
        "Scheduled Direct Delivery to Plant / Warehouse"
      ]
    },
    {
      badge: "100% Quality Guarantee",
      title: "Quality & Service Excellence",
      desc: "Verified industrial standards with guaranteed product replacement for partner satisfaction.",
      points: [
        "HSE & Industrial Grade Certified Products",
        "100% Return Guarantee for Defective Goods",
        "Product Samples Available for Quality Trials"
      ]
    }
  ]
};

/**
 * Apply Language across DOM
 */
function applyLanguage(lang) {
  const isEn = (lang === 'en');
  const t = KMS_I18N[lang] || KMS_I18N.id;
  document.documentElement.lang = lang;

  // 1. Top Bar Address
  const topAddr = document.getElementById('top-address-short');
  if (topAddr) topAddr.textContent = t.topAddress;

  // 2. Desktop Navigation
  const navMap = {
    'home': t.navHome,
    'about': t.navAbout,
    'products': t.navProducts,
    'clients': t.navClients,
    'solutions': t.navSolutions,
    'gallery': t.navGallery,
    'contact': t.navContact
  };
  Object.keys(navMap).forEach(key => {
    const el = document.querySelector('#main-nav a[data-nav="' + key + '"]');
    if (el) el.textContent = navMap[key];
  });

  // 3. Mobile Navigation Drawer
  const mobileLinks = document.querySelectorAll('#mobile-drawer a[onclick*="navigateTo"]');
  mobileLinks.forEach(link => {
    const span = link.querySelector('span');
    if (!span) return;
    const onclickStr = link.getAttribute('onclick') || '';
    if (onclickStr.includes("'home'")) span.textContent = t.navHome;
    else if (onclickStr.includes("'about'")) span.textContent = t.navAbout;
    else if (onclickStr.includes("'products'")) span.textContent = t.navProducts;
    else if (onclickStr.includes("'clients'")) span.textContent = t.navClients;
    else if (onclickStr.includes("'solutions'")) span.textContent = t.navSolutions;
    else if (onclickStr.includes("'gallery'")) span.textContent = t.navGallery;
    else if (onclickStr.includes("'contact'")) span.textContent = t.navContact;
  });
  const mobileWaSpan = document.querySelector('#mobile-cta-wa-btn span');
  if (mobileWaSpan) mobileWaSpan.textContent = t.mobileWaCta;

  // 4. Hero Slides
  if (!window.KMS_DATA) window.KMS_DATA = {};
  window.KMS_DATA.heroSlides = KMS_HERO_I18N[lang] || KMS_HERO_I18N.id;
  if (typeof window.renderHeroSlides === 'function') {
    window.renderHeroSlides();
  }

  // 5. Home - About Teaser
  const setElText = (id, text, isHtml) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (isHtml) el.innerHTML = text;
    else el.textContent = text;
  };
  setElText('home-about-title', t.homeAboutTitle);
  setElText('home-about-text', t.homeAboutText, true);

  const homeAboutSection = document.querySelector('#view-home section:nth-of-type(1)');
  if (homeAboutSection) {
    const badgeSpan = homeAboutSection.querySelector('.inline-flex span:last-child');
    if (badgeSpan) badgeSpan.textContent = t.homeAboutBadge;
    const learnMoreSpan = homeAboutSection.querySelector("a[onclick*=\"navigateTo('about')\"] span");
    if (learnMoreSpan) learnMoreSpan.textContent = t.homeAboutLearnMore;
    const cardTag = homeAboutSection.querySelector('.text-xs.text-slate-500');
    if (cardTag) cardTag.textContent = t.homeAboutCardTag;
  }

  // 6. Home - Clients Teaser
  const homeClientsSection = document.getElementById('home-clients-section');
  if (homeClientsSection) {
    const badgeSpan = homeClientsSection.querySelector('.inline-flex span:last-child');
    if (badgeSpan) badgeSpan.textContent = t.homeClientsBadge;
    const h2 = homeClientsSection.querySelector('h2');
    if (h2) h2.textContent = t.homeClientsTitle;
    const p = homeClientsSection.querySelector('p.text-slate-600');
    if (p) p.textContent = t.homeClientsSubtitle;
    const btnSpan = homeClientsSection.querySelector("a[onclick*=\"navigateTo('clients')\"] span");
    if (btnSpan) btnSpan.textContent = t.homeClientsBtn;

    // Trust strip
    const trustItems = homeClientsSection.querySelectorAll('.mt-10 span.font-medium');
    if (trustItems.length >= 4) {
      trustItems[0].textContent = t.trustTax;
      trustItems[1].textContent = t.trustPartnership;
      trustItems[2].textContent = t.trustQuality;
      trustItems[3].textContent = t.trustTop;
    }
  }

  // 7. Home - Categories Teaser
  const homeCatSection = document.querySelector('#view-home section:nth-of-type(3)');
  if (homeCatSection) {
    const badgeSpan = homeCatSection.querySelector('.inline-flex span:last-child');
    if (badgeSpan) badgeSpan.textContent = t.homeCatBadge;
    const h2 = homeCatSection.querySelector('h2');
    if (h2) h2.textContent = t.homeCatTitle;
    const p = homeCatSection.querySelector('p.text-slate-600');
    if (p) p.textContent = t.homeCatSubtitle;
    const viewAllSpan = homeCatSection.querySelector("a[onclick*=\"navigateTo('products')\"] span");
    if (viewAllSpan) viewAllSpan.textContent = t.homeCatViewAll;
  }

  // 8. Home - Bottom CTA Banner
  const homeBottomCta = document.querySelector('#view-home section:nth-of-type(4)');
  if (homeBottomCta) {
    const h2 = homeBottomCta.querySelector('h2');
    if (h2) h2.innerHTML = t.homeCtaTitle;
    const p = homeBottomCta.querySelector('p');
    if (p) p.innerHTML = t.homeCtaSubtitle;
    const btn1Span = homeBottomCta.querySelector("a[onclick*=\"navigateTo('contact')\"] span");
    if (btn1Span) btn1Span.textContent = t.homeCtaContact;
    const btn2Span = document.querySelector('#home-bottom-cta-wa span');
    if (btn2Span) btn2Span.textContent = t.homeCtaWa;
  }

  // 9. Home - Location Section
  const homeLocSection = document.querySelector('#view-home section:nth-of-type(5)');
  if (homeLocSection) {
    const badgeSpan = homeLocSection.querySelector('.inline-flex span:last-child');
    if (badgeSpan) badgeSpan.textContent = t.homeLocBadge;
    const h2 = homeLocSection.querySelector('h2');
    if (h2) h2.textContent = t.homeLocTitle;
  }

  // 10. Subpage Banners
  const setBanner = (viewId, title, sub, crumb) => {
    const view = document.getElementById(viewId);
    if (!view) return;
    const banner = view.querySelector('.subpage-banner');
    if (!banner) return;
    const h1 = banner.querySelector('h1');
    if (h1) h1.textContent = title;
    const p = banner.querySelector('p');
    if (p) p.textContent = sub;
    const crumbSpan = banner.querySelector('.text-white.font-medium');
    if (crumbSpan && crumb) crumbSpan.textContent = crumb;
  };
  setBanner('view-about', t.aboutBannerTitle, t.aboutBannerSubtitle, t.aboutBannerCrumb);
  setBanner('view-products', t.prodBannerTitle, t.prodBannerSubtitle, t.navProducts);
  setBanner('view-clients', t.clientBannerTitle, t.clientBannerSubtitle, t.navClients);
  setBanner('view-solutions', t.solutionBannerTitle, t.solutionBannerSubtitle, t.navSolutions);
  setBanner('view-gallery', t.galleryBannerTitle, t.galleryBannerSubtitle, t.navGallery);
  setBanner('view-contact', t.contactBannerTitle, t.contactBannerSubtitle, t.navContact);

  // 11. About Us Details
  const aboutProfileH2 = document.querySelector('#about-full-text h2');
  if (aboutProfileH2) aboutProfileH2.textContent = t.aboutProfileHeading;
  
  const aboutVmH3 = document.querySelector('#view-about h3');
  if (aboutVmH3) aboutVmH3.textContent = t.aboutVisionMissionHeading;
  
  const visionCard = document.querySelector('#view-about .bg-white h4');
  if (visionCard) visionCard.textContent = t.aboutVisionTitle;
  setElText('about-vision-text', t.aboutVisionText);
  
  const visionCommitSpan = document.querySelector('#view-about .border-t.border-slate-100 span');
  if (visionCommitSpan) visionCommitSpan.textContent = t.aboutVisionCommitment;

  const missionH4 = document.querySelector('#view-about .md\\:col-span-7 h4');
  if (missionH4) missionH4.textContent = t.aboutMissionTitle;

  const missionsList = document.getElementById('about-missions-list');
  if (missionsList && t.aboutMissions) {
    missionsList.innerHTML = t.aboutMissions.map((m, idx) => `
      <li class="flex items-start gap-4">
        <span class="w-7 h-7 rounded-full bg-corporate text-amber-400 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">${idx + 1}</span>
        <p class="text-slate-700 text-sm leading-relaxed">${m}</p>
      </li>
    `).join('');
  }

  setElText('about-why-badge', t.aboutWhyBadge);
  setElText('about-why-title', t.aboutWhyTitle);
  setElText('about-why-subtitle', t.aboutWhySubtitle);

  const guaranteeStrip = document.getElementById('about-guarantees-strip');
  if (guaranteeStrip) {
    const titles = guaranteeStrip.querySelectorAll('.text-sm.font-bold');
    const subs = guaranteeStrip.querySelectorAll('.text-xs.text-slate-500');
    if (titles.length >= 4) {
      titles[0].textContent = t.guaranteeTax;
      titles[1].textContent = t.guaranteeResponse;
      titles[2].textContent = t.guaranteeQuality;
      titles[3].textContent = t.guaranteeDelivery;
    }
    if (subs.length >= 4) {
      subs[0].textContent = t.guaranteeTaxSub;
      subs[1].textContent = t.guaranteeResponseSub;
      subs[2].textContent = t.guaranteeQualitySub;
      subs[3].textContent = t.guaranteeDeliverySub;
    }
  }

  // Update Values Grid (About & Why Us)
  const whyItems = KMS_WHY_ITEMS_I18N[lang] || KMS_WHY_ITEMS_I18N.id;
  ['about-why-grid', 'about-values-grid', 'why-values-grid'].forEach(gridId => {
    const gridEl = document.getElementById(gridId);
    if (!gridEl) return;
    const cards = gridEl.querySelectorAll('.rounded-2xl');
    cards.forEach((card, idx) => {
      if (!whyItems[idx]) return;
      const b = card.querySelector('.uppercase');
      if (b) b.textContent = whyItems[idx].badge;
      const h3 = card.querySelector('h3');
      if (h3) h3.textContent = whyItems[idx].title;
      const p = card.querySelector('p');
      if (p) p.textContent = whyItems[idx].desc;
      const points = card.querySelectorAll('ul li span');
      points.forEach((pt, pIdx) => {
        if (whyItems[idx].points[pIdx]) pt.textContent = whyItems[idx].points[pIdx];
      });
    });
  });

  // 12. Products Catalog UI
  const searchInput = document.getElementById('catalog-search');
  if (searchInput) searchInput.placeholder = t.prodSearchPlaceholder;

  const catHead = document.querySelector('#view-products h3.uppercase');
  if (catHead) catHead.textContent = t.prodCategoryHeader;

  const pillAll = document.getElementById('cat-pill-all');
  if (pillAll) {
    const count = (window.KMS_DATA && window.KMS_DATA.products) ? window.KMS_DATA.products.length : 0;
    pillAll.textContent = t.prodPillAll + ' (' + count + ')';
  }

  const quickInqCard = document.querySelector('#view-products .bg-corporate-dark');
  if (quickInqCard) {
    const h4 = quickInqCard.querySelector('h4');
    if (h4) h4.textContent = t.prodCustomNeedTitle;
    const p = quickInqCard.querySelector('p');
    if (p) p.textContent = t.prodCustomNeedDesc;
    const btn = quickInqCard.querySelector('button');
    if (btn) btn.textContent = t.prodCustomNeedBtn;
  }

  const activeCatTitle = document.getElementById('active-category-title');
  if (activeCatTitle && (typeof currentCategory === 'undefined' || currentCategory === 'all')) {
    activeCatTitle.textContent = t.prodPillAll;
  }

  const prodMissingBanner = document.querySelector('#view-products .bg-amber-50');
  if (prodMissingBanner) {
    const h4 = prodMissingBanner.querySelector('h4');
    if (h4) h4.textContent = t.prodMissingBannerTitle;
    const p = prodMissingBanner.querySelector('p');
    if (p) p.textContent = t.prodMissingBannerDesc;
    const btnReq = prodMissingBanner.querySelector('button');
    if (btnReq) btnReq.textContent = t.prodBtnRequestSpecial;
    const btnContact = prodMissingBanner.querySelector('a');
    if (btnContact) btnContact.textContent = t.prodBtnContactSales;
  }

  // Update Product Card Buttons
  updateProductButtonsLanguage(lang);

  // 13. Product Detail Page
  updateProductDetailLanguage(lang);

  // 14. Clients Page
  const clientH2 = document.querySelector('#view-clients h2');
  if (clientH2) clientH2.textContent = t.clientHeading;
  const clientSubP = document.querySelector('#view-clients p.text-slate-600');
  if (clientSubP) clientSubP.textContent = t.clientSubtitle;

  const clientTrustNote = document.querySelector('#view-clients .mt-14');
  if (clientTrustNote) {
    const h4 = clientTrustNote.querySelector('h4');
    if (h4) h4.textContent = t.clientTrustNoteTitle;
    const p = clientTrustNote.querySelector('p');
    if (p) p.textContent = t.clientTrustNoteDesc;
  }

  // 15. Solutions Page
  const solIntro = document.querySelector('#view-solutions .max-w-3xl p');
  if (solIntro) solIntro.textContent = t.solutionIntro;
  
  const whyKanayaSec = document.getElementById('why-us');
  if (whyKanayaSec) {
    const badge = whyKanayaSec.querySelector('.uppercase');
    if (badge) badge.textContent = t.whyKanayaBadge;
    const h2 = whyKanayaSec.querySelector('h2');
    if (h2) h2.textContent = t.whyKanayaHeading;
    const p = whyKanayaSec.querySelector('p.text-slate-300');
    if (p) p.textContent = t.whyKanayaDesc;
  }

  // Solutions Cards Grid
  const solCards = KMS_SOLUTIONS_I18N[lang] || KMS_SOLUTIONS_I18N.id;
  const solGrid = document.getElementById('solutions-cards-grid');
  if (solGrid) {
    const cards = solGrid.querySelectorAll('.rounded-2xl');
    cards.forEach((card, idx) => {
      if (!solCards[idx]) return;
      const b = card.querySelector('span.uppercase');
      if (b) b.textContent = solCards[idx].badge;
      const h3 = card.querySelector('h3');
      if (h3) h3.textContent = solCards[idx].title;
      const p = card.querySelector('p');
      if (p) p.textContent = solCards[idx].desc;
      const aSpan = card.querySelector('a span');
      if (aSpan) aSpan.textContent = t.solutionDiscussBtn;
    });
  }

  // Stats Bar
  const statsList = KMS_STATS_I18N[lang] || KMS_STATS_I18N.id;
  const statsContainer = document.getElementById('why-stats-bar');
  if (statsContainer) {
    const items = statsContainer.children;
    for (let i = 0; i < items.length; i++) {
      if (statsList[i]) {
        const num = items[i].querySelector('.font-heading');
        if (num) num.textContent = statsList[i].number;
        const lbl = items[i].querySelector('.text-sm.font-bold');
        if (lbl) lbl.textContent = statsList[i].label;
        const sub = items[i].querySelector('.text-xs');
        if (sub) sub.textContent = statsList[i].sublabel;
      }
    }
  }

  // 16. Gallery Page
  const galH2 = document.querySelector('#view-gallery h2');
  if (galH2) galH2.textContent = t.galleryHeading;
  const galP = document.querySelector('#view-gallery p.text-slate-600');
  if (galP) galP.textContent = t.galleryDesc;

  // 17. Contact Page
  const contactBadge = document.querySelector('#view-contact .uppercase');
  if (contactBadge) contactBadge.textContent = t.contactBadge;
  const contactH2 = document.querySelector('#view-contact h2');
  if (contactH2) contactH2.innerHTML = t.contactTitle;
  const contactSubtitleP = document.querySelector('#view-contact p.text-slate-500');
  if (contactSubtitleP) contactSubtitleP.textContent = t.contactSubtitle;

  const contactCards = document.querySelectorAll('#view-contact .space-y-6 > div');
  if (contactCards.length >= 3) {
    const waLabel = contactCards[0].querySelector('.tracking-wider');
    if (waLabel) waLabel.textContent = t.contactCardWa;
    const waLink = contactCards[0].querySelector('a span');
    if (waLink) waLink.textContent = t.contactCardWaLink;

    const mailLabel = contactCards[1].querySelector('.tracking-wider');
    if (mailLabel) mailLabel.textContent = t.contactCardEmail;
    const mailLink = contactCards[1].querySelector('a span');
    if (mailLink) mailLink.textContent = t.contactCardEmailLink;

    const addrLabel = contactCards[2].querySelector('.tracking-wider');
    if (addrLabel) addrLabel.textContent = t.contactCardAddress;
    const addrLink = contactCards[2].querySelector('a span');
    if (addrLink) addrLink.textContent = t.contactCardAddressLink;
  }

  const socH4 = document.querySelector('#view-contact .pt-6 h4');
  if (socH4) socH4.textContent = t.contactSocialTitle;
  const socP = document.querySelector('#view-contact .pt-6 p');
  if (socP) socP.textContent = t.contactSocialSubtitle;

  const formH3 = document.querySelector('#view-contact .rounded-3xl h3');
  if (formH3) formH3.textContent = t.formTitle;
  const formSubP = document.querySelector('#view-contact .rounded-3xl p.text-slate-500');
  if (formSubP) formSubP.textContent = t.formSubtitle;

  const setInputLabel = (forAttr, labelText) => {
    const l = document.querySelector('#contact-inquiry-form label[for="' + forAttr + '"]');
    if (l) l.textContent = labelText;
  };
  setInputLabel('form-name', t.formNameLabel);
  setInputLabel('form-company', t.formCompanyLabel);
  setInputLabel('form-email', t.formEmailLabel);
  setInputLabel('form-wa', t.formPhoneLabel);
  setInputLabel('form-product', t.formProductLabel);
  setInputLabel('form-qty', t.formQtyLabel);
  setInputLabel('form-message', t.formMessageLabel);

  const inpName = document.getElementById('form-name');
  if (inpName) inpName.placeholder = t.formNamePlaceholder;
  const inpComp = document.getElementById('form-company');
  if (inpComp) inpComp.placeholder = t.formCompanyPlaceholder;
  const inpMail = document.getElementById('form-email');
  if (inpMail) inpMail.placeholder = t.formEmailPlaceholder;
  const inpWa = document.getElementById('form-wa');
  if (inpWa) inpWa.placeholder = t.formPhonePlaceholder;
  const inpQty = document.getElementById('form-qty');
  if (inpQty) inpQty.placeholder = t.formQtyPlaceholder;
  const inpMsg = document.getElementById('form-message');
  if (inpMsg) inpMsg.placeholder = t.formMessagePlaceholder;

  const selectProdFirstOpt = document.querySelector('#form-product option[disabled]');
  if (selectProdFirstOpt) selectProdFirstOpt.textContent = t.formSelectProduct;

  const submitBtnSpan = document.querySelector('#contact-inquiry-form button[type="submit"] span');
  if (submitBtnSpan) submitBtnSpan.textContent = t.formSubmitBtn;

  const mapH3 = document.querySelector('#view-contact .mt-12 h3');
  if (mapH3) mapH3.textContent = t.contactMapHeading;
  const mapBtnSpan = document.querySelector('#view-contact .mt-12 a span');
  if (mapBtnSpan) mapBtnSpan.textContent = t.contactMapOpenBtn;

  // 18. Modals
  const inqModH3 = document.querySelector('#inquiry-modal h3');
  if (inqModH3) inqModH3.textContent = t.modalInqTitle;
  const inqModP = document.querySelector('#inquiry-modal p.text-slate-500');
  if (inqModP) inqModP.textContent = t.modalInqSubtitle;
  const inqModName = document.getElementById('modal-name');
  if (inqModName) inqModName.placeholder = t.modalInqNamePh;
  const inqModComp = document.getElementById('modal-company');
  if (inqModComp) inqModComp.placeholder = t.modalInqCompPh;
  const inqModWa = document.getElementById('modal-wa');
  if (inqModWa) inqModWa.placeholder = t.modalInqWaPh;
  const inqModQty = document.getElementById('modal-qty');
  if (inqModQty) inqModQty.placeholder = t.modalInqQtyPh;
  const inqModNote = document.getElementById('modal-note');
  if (inqModNote) inqModNote.placeholder = t.modalInqNotePh;
  const inqModSubmit = document.querySelector('#inquiry-modal button[type="submit"] span');
  if (inqModSubmit) inqModSubmit.textContent = t.modalInqSubmit;

  const custModH3 = document.querySelector('#custom-product-modal h3');
  if (custModH3) custModH3.textContent = t.modalCustTitle;
  const custModP = document.querySelector('#custom-product-modal p.text-slate-500');
  if (custModP) custModP.textContent = t.modalCustSubtitle;
  const custModName = document.getElementById('cust-name');
  if (custModName) custModName.placeholder = t.modalCustNamePh;
  const custModComp = document.getElementById('cust-company');
  if (custModComp) custModComp.placeholder = t.modalCustCompPh;
  const custModWa = document.getElementById('cust-phone');
  if (custModWa) custModWa.placeholder = t.modalCustWaPh;
  const custModProd = document.getElementById('cust-product');
  if (custModProd) custModProd.placeholder = t.modalCustProdPh;
  const custModQty = document.getElementById('cust-qty');
  if (custModQty) custModQty.placeholder = t.modalCustQtyPh;
  const custModSubmit = document.querySelector('#custom-product-modal button[type="submit"] span');
  if (custModSubmit) custModSubmit.textContent = t.modalCustSubmit;

  // 19. WhatsApp Floating Tooltip
  const waTip = document.querySelector('.wa-tooltip');
  if (waTip) waTip.textContent = t.waTooltip;

  // 20. Footer
  const footerHeadings = document.querySelectorAll('footer h4.font-heading');
  if (footerHeadings.length >= 3) {
    footerHeadings[0].textContent = t.footerNavTitle;
    footerHeadings[1].textContent = t.footerContactTitle;
    footerHeadings[2].textContent = t.footerHoursTitle;
  }
  const footerNavLinks = document.querySelectorAll('footer ul a[onclick*="navigateTo"]');
  footerNavLinks.forEach(link => {
    const str = link.getAttribute('onclick') || '';
    if (str.includes("'home'")) link.textContent = t.navHome;
    else if (str.includes("'about'")) link.textContent = t.navAbout;
    else if (str.includes("'products'")) link.textContent = t.navProducts;
    else if (str.includes("'clients'")) link.textContent = t.navClients;
    else if (str.includes("'solutions'")) link.textContent = t.navSolutions;
    else if (str.includes("'gallery'")) link.textContent = t.navGallery;
    else if (str.includes("'contact'")) link.textContent = t.navContact;
  });
  const footerHours = document.getElementById('footer-hours');
  if (footerHours) footerHours.textContent = t.footerHoursText;
  
  const footerCopyright = document.querySelector('footer .border-t.border-slate-800 p');
  if (footerCopyright) {
    footerCopyright.textContent = '© 2026 ' + t.footerCopyright;
  }

  // Refresh icons
  if (window.lucide) {
    lucide.createIcons();
  }
}

/**
 * Update Product Catalog Action Buttons Language
 */
function updateProductButtonsLanguage(lang) {
  const targetLang = lang || (window.currentLang || 'id');
  const t = KMS_I18N[targetLang] || KMS_I18N.id;

  const detailBtns = document.querySelectorAll('#products-catalog-grid button[onclick*="openProductDetailView"]');
  detailBtns.forEach(btn => {
    btn.textContent = t.prodDetail;
  });
  const inqBtnSpans = document.querySelectorAll('#products-catalog-grid button[onclick*="quickInquireProduct"] span');
  inqBtnSpans.forEach(sp => {
    sp.textContent = t.prodRequestQuote;
  });
}

/**
 * Update Product Detail View Language
 */
function updateProductDetailLanguage(lang) {
  const targetLang = lang || (window.currentLang || 'id');
  const t = KMS_I18N[targetLang] || KMS_I18N.id;

  const crumbHome = document.querySelector('#view-product-detail .breadcrumb-container a[href="#home"]');
  if (crumbHome) crumbHome.textContent = t.detailBreadcrumbHome;
  const crumbProd = document.querySelector('#view-product-detail .breadcrumb-container a[href="#products"]');
  if (crumbProd) crumbProd.textContent = t.detailBreadcrumbProd;

  const advH4Span = document.querySelector('#view-product-detail .bg-corporate-softBlue h4 span');
  if (advH4Span) advH4Span.textContent = t.detailAdvantagesTitle;

  const specsHeader = document.querySelector('#view-product-detail table')?.closest('div')?.previousElementSibling?.querySelector('span');
  if (specsHeader) specsHeader.textContent = t.detailSpecsTitle;

  const inqDetailBtn = document.querySelector('#btn-inquiry-detail span');
  if (inqDetailBtn) inqDetailBtn.textContent = t.detailInquiryBtn;

  const dlCatBtn = document.querySelector('#view-product-detail button[onclick*="downloadProductCatalog"] span');
  if (dlCatBtn) dlCatBtn.textContent = t.detailDownloadCatalogBtn;

  const relH3 = document.querySelector('#view-product-detail .mt-20 h3');
  if (relH3) relH3.textContent = t.detailRelatedTitle;

  const relAllLink = document.querySelector('#view-product-detail .mt-20 a[href="#products"]');
  if (relAllLink) relAllLink.textContent = t.detailViewAll;

  // Translate specs table keys
  const specsRows = document.querySelectorAll('#detail-specs-tbody tr');
  specsRows.forEach(row => {
    const tdKey = row.cells[0];
    const tdVal = row.cells[1];
    if (tdKey) {
      const keyTxt = tdKey.textContent.trim();
      if (keyTxt === 'Kategori' || keyTxt === 'Category') tdKey.textContent = t.detailKeyCategory;
      else if (keyTxt === 'Kondisi' || keyTxt === 'Condition') {
        tdKey.textContent = t.detailKeyCondition;
        if (tdVal) tdVal.textContent = t.detailValCondition;
      } else if (keyTxt === 'Minimum Order') {
        tdKey.textContent = t.detailKeyMoq;
        if (tdVal && (tdVal.textContent.includes('Dapat dikonsultasikan') || tdVal.textContent.includes('Consultable'))) {
          tdVal.textContent = t.detailValMoq;
        }
      }
    }
  });

  // Translate related products detail buttons
  const relDetailBtns = document.querySelectorAll('#detail-related-grid button');
  relDetailBtns.forEach(b => {
    b.textContent = t.prodDetail;
  });
}

/**
 * Global Language Switcher Handler
 */
window.setLanguage = function(lang) {
  const targetLang = (lang === 'en') ? 'en' : 'id';
  window.currentLang = targetLang;
  try {
    localStorage.setItem('KMS_CURRENT_LANG', targetLang);
  } catch (e) {}

  const btnId = document.getElementById('lang-id');
  const btnEn = document.getElementById('lang-en');

  if (targetLang === 'en') {
    if (btnEn) btnEn.className = 'px-2 sm:px-2.5 py-0.5 rounded-full font-semibold bg-amber-500 text-slate-950 transition-all';
    if (btnId) btnId.className = 'px-2 sm:px-2.5 py-0.5 rounded-full font-medium text-slate-300 hover:text-white transition-all';
  } else {
    if (btnId) btnId.className = 'px-2 sm:px-2.5 py-0.5 rounded-full font-semibold bg-amber-500 text-slate-950 transition-all';
    if (btnEn) btnEn.className = 'px-2 sm:px-2.5 py-0.5 rounded-full font-medium text-slate-300 hover:text-white transition-all';
  }

  applyLanguage(targetLang);
};
window.applyKmsLanguage = window.setLanguage;
window.setLanguageKms = window.setLanguage;

// Hook into dynamic renderers
(function hookDynamicRenderers() {
  function tryHook() {
    if (typeof window.renderProducts === 'function' && !window.renderProducts.__hooked) {
      const orig = window.renderProducts;
      window.renderProducts = function() {
        orig.apply(this, arguments);
        updateProductButtonsLanguage(window.currentLang);
        if (window.currentLang === 'en') {
          const pillAll = document.getElementById('cat-pill-all');
          if (pillAll) {
            const count = (window.KMS_DATA && window.KMS_DATA.products) ? window.KMS_DATA.products.length : 0;
            pillAll.textContent = 'All Categories (' + count + ')';
          }
        }
      };
      window.renderProducts.__hooked = true;
    }

    if (typeof window.showProductDetail === 'function' && !window.showProductDetail.__hooked) {
      const origDetail = window.showProductDetail;
      window.showProductDetail = function() {
        origDetail.apply(this, arguments);
        updateProductDetailLanguage(window.currentLang);
      };
      window.showProductDetail.__hooked = true;
    }
  }

  tryHook();
  document.addEventListener('DOMContentLoaded', tryHook);
  setTimeout(tryHook, 300);
  setTimeout(tryHook, 1000);
})();

// Auto-initialize on load: check saved preference or detect browser locale
(function autoInitLanguage() {
  function run() {
    let saved = null;
    try {
      saved = localStorage.getItem('KMS_CURRENT_LANG');
    } catch (e) {}

    // If no saved preference, check if browser language is English
    if (!saved) {
      const browserLang = (navigator.language || navigator.userLanguage || (navigator.languages && navigator.languages[0]) || '').toLowerCase();
      if (browserLang.startsWith('en')) {
        saved = 'en';
      } else {
        saved = 'id';
      }
    }

    window.setLanguage(saved);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
  // Re-run after scripts settle to guarantee full DOM coverage
  setTimeout(run, 150);
  setTimeout(run, 600);
})();
