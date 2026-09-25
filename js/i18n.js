/**
 * PT Kanaya Multi Solusindo - Comprehensive Bilingual Translation Engine (ID / EN)
 * Complete automated translation for:
 * - Top Bar & Navbar
 * - Hero Slider (Curated ID & EN slides)
 * - Home About, Trust Strip, Category Cards, Bottom CTA, Location & Map
 * - Full Product Catalog (All 71 products: names, descriptions, tags, badges, buttons)
 * - Product Details (Title, description, advantages, technical specifications table)
 * - Categories & Subcategory tabs
 * - About Us (Profile, Vision, Mission, Why Kanaya, 4 Guarantees Strip)
 * - Our Clients & Trust Highlights
 * - Solutions Cards & Credibility Numbers
 * - Activity Gallery & Team Documentation
 * - Contact Form, Labels, Placeholders & Direct Links
 * - Inquiry & Custom Procurement Modals
 * - Footer, Operational Hours, & Google Maps Links
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
    homeCatBtn: "Lihat Produk",
    
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
    prodSubcatAll: "Semua Subkategori",
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
    solutionBannerTitle: "Solusi Untuk Setiap Kebutuhan Bisnis",
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
    homeCatBtn: "View Products",
    
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
    prodSubcatAll: "All Subcategories",
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
      badge: "General Supplier & Procurement Partner",
      title: "Solusi Pengadaan Untuk Setiap Kebutuhan Proyek",
      subtitle: "Kami menyediakan beragam produk dan kebutuhan industri melalui layanan pengadaan yang praktis, responsif, dan terpercaya.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85",
      btnPrimaryText: "Lihat Produk",
      btnPrimaryLink: "#products",
      btnSecondaryText: "Ajukan Permintaan",
      btnSecondaryLink: "#contact"
    },
    {
      id: "slide-2",
      badge: "Katalog Produk Lengkap & Terintegrasi",
      title: "Beragam Produk Untuk Mendukung Kebutuhan Bisnis Anda",
      subtitle: "Pilihan produk yang lengkap dan sesuai kebutuhan untuk menunjang berbagai aktivitas proyek, operasional, dan industri.",
      image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1200&q=85",
      btnPrimaryText: "Katalog Produk",
      btnPrimaryLink: "#products",
      btnSecondaryText: "Ajukan Permintaan",
      btnSecondaryLink: "#contact"
    },
    {
      id: "slide-3",
      badge: "Layanan Profesional & Responsif",
      title: "Memberikan Solusi, Membangun Kepercayaan",
      subtitle: "Kami mengutamakan pelayanan yang responsif dan profesional untuk memastikan setiap kebutuhan ditangani dengan tepat.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85",
      btnPrimaryText: "Perlengkapan APD",
      btnPrimaryLink: "#products",
      btnSecondaryText: "Ajukan Permintaan",
      btnSecondaryLink: "#contact"
    },
    {
      id: "slide-4",
      badge: "Mitra Strategis Pengadaan B2B",
      title: "Menjadi Partner Dalam Setiap Kebutuhan Pengadaan",
      subtitle: "Dengan komitmen pada kualitas, ketepatan, dan pelayanan, kami siap mendukung kebutuhan bisnis dan proyek Anda.",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=85",
      btnPrimaryText: "Hubungi Kami",
      btnPrimaryLink: "#contact",
      btnSecondaryText: "Ajukan Permintaan",
      btnSecondaryLink: "#contact"
    }
  ],
  en: [
    {
      id: "slide-1",
      badge: "General Supplier & Procurement Partner",
      title: "Procurement Solutions for Every Project Need",
      subtitle: "We provide diverse industrial products and requirements through practical, responsive, and reliable procurement services.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85",
      btnPrimaryText: "View Products",
      btnPrimaryLink: "#products",
      btnSecondaryText: "Submit Request",
      btnSecondaryLink: "#contact"
    },
    {
      id: "slide-2",
      badge: "Comprehensive Product Catalog",
      title: "Diverse Products to Support Your Business Needs",
      subtitle: "Comprehensive product choices tailored to support various project, operational, and industrial activities.",
      image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1200&q=85",
      btnPrimaryText: "Product Catalog",
      btnPrimaryLink: "#products",
      btnSecondaryText: "Submit Request",
      btnSecondaryLink: "#contact"
    },
    {
      id: "slide-3",
      badge: "Professional & Responsive Service",
      title: "Providing Solutions, Building Trust",
      subtitle: "We prioritize responsive and professional service to ensure every requirement is handled precisely.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85",
      btnPrimaryText: "PPE Supplies",
      btnPrimaryLink: "#products",
      btnSecondaryText: "Submit Request",
      btnSecondaryLink: "#contact"
    },
    {
      id: "slide-4",
      badge: "Strategic B2B Procurement Partner",
      title: "Your Partner for Every Procurement Need",
      subtitle: "With a commitment to quality, precision, and service, we are ready to support your business and project needs.",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=85",
      btnPrimaryText: "Contact Us",
      btnPrimaryLink: "#contact",
      btnSecondaryText: "Submit Request",
      btnSecondaryLink: "#contact"
    }
  ]
};

/**
 * Solutions Cards Multilingual Data
 */
const KMS_SOLUTIONS_I18N = {
  id: [
    {
      badge: "B2B & Korporat",
      title: "Pengadaan Operasional & Rutin",
      desc: "Menyediakan kebutuhan rutin pabrik, perkantoran, dan pergudangan dengan sistem kontrak berkala atau purchase order fleksibel."
    },
    {
      badge: "Tender & Proyek",
      title: "Suplai Material Proyek Skala Besar",
      desc: "Mendukung pengadaan partai besar untuk konstruksi, logistik, dan fasilitas industri dengan kepastian mutu dan jadwal distribusi terencana."
    },
    {
      badge: "Kustomisasi",
      title: "Spesifikasi & Cetak Kustom",
      desc: "Layanan cetak stiker, kartu nama, box kustom, dan pembuatan produk plastik/kemasan dengan ukuran khusus sesuai SOP perusahaan Anda."
    },
    {
      badge: "Layanan Cepat",
      title: "Fast-Track Order & Urgent Supply",
      desc: "Respon penawaran cepat dalam hitungan jam untuk kebutuhan mendesak guna menghindari downtime operasional bisnis Anda."
    }
  ],
  en: [
    {
      badge: "B2B & Corporate",
      title: "Operational & Routine Procurement",
      desc: "Supplying recurring requirements for manufacturing plants, offices, and distribution centers via periodic contracts or flexible purchase orders."
    },
    {
      badge: "Tenders & Projects",
      title: "Large-Scale Project Supply",
      desc: "Fulfilling bulk supply requirements for industrial facilities, logistics hubs, and construction sites with guaranteed quality and scheduled logistics."
    },
    {
      badge: "Customization",
      title: "Custom Specs & Commercial Printing",
      desc: "Custom-branded stickers, business cards, corrugated master boxes, and tailor-made plastic dimensions engineered to your company's SOP."
    },
    {
      badge: "Rapid Response",
      title: "Fast-Track Urgent Supplies",
      desc: "Rapid price quotation turnaround within hours for critical emergency requirements to prevent any operational downtime in your facility."
    }
  ]
};

/**
 * Stats Bar Multilingual Data
 */
const KMS_STATS_I18N = {
  id: [
    { icon: "boxes", label: "Produk Lengkap", sublabel: "Solusi terpadu berbagai kategori" },
    { icon: "users", label: "Klien Beragam", sublabel: "Melayani berbagai kebutuhan perusahaan dan instansi" },
    { icon: "factory", label: "Sektor Industri", sublabel: "Menjangkau berbagai bidang usaha dan kebutuhan industri" }
  ],
  en: [
    { icon: "boxes", label: "Complete Products", sublabel: "Integrated solutions across diverse categories" },
    { icon: "users", label: "Diverse Clients", sublabel: "Serving various corporate and institutional needs" },
    { icon: "factory", label: "Industrial Sectors", sublabel: "Reaching wide-ranging business fields and industry sectors" }
  ]
};

/**
 * Why Us Values Multilingual Data
 */
const KMS_WHY_ITEMS_I18N = {
  id: [
    {
      badge: "Legalitas & Kepatuhan",
      title: "Integritas & Legalitas Penuh",
      desc: "Berbadan hukum resmi PT dengan dokumen legalitas lengkap, NPWP, NIB, dan menerbitkan Faktur Pajak PPN sah untuk setiap transaksi B2B.",
      points: [
        "Faktur Pajak PPN Resmi untuk setiap transaksi",
        "Dokumen legalitas PT, NPWP, dan NIB valid",
        "Keamanan hukum dan kepatuhan audit perusahaan"
      ]
    },
    {
      badge: "Fleksibilitas B2B",
      title: "Layanan Personal & TOP Fleksibel",
      desc: "Didukung Dedicated Account Manager untuk setiap klien serta opsi Term of Payment (TOP) bertahap yang disesuaikan dengan alur kas perusahaan Anda.",
      points: [
        "Dedicated Account Manager yang responsif",
        "Opsi Term of Payment (TOP) 14, 30, hingga 45 hari",
        "Konsultasi teknis spesifikasi produk gratis"
      ]
    },
    {
      badge: "Jaminan Mutu",
      title: "Mutu Terjamin & Pasokan Stabil",
      desc: "Setiap barang melewati pemeriksaan kualitas (QC) ketat sebelum dikirimkan. Jaringan distribusi kami menjamin kontinuitas suplai tanpa henti.",
      points: [
        "Quality Control berlapis sebelum pengiriman",
        "Garansi retur/tukar jika barang tidak sesuai spesifikasi",
        "Armada distribusi handal di kawasan industri Jabodetabek"
      ]
    }
  ],
  en: [
    {
      badge: "Legality & Compliance",
      title: "Integrity & Full Legal Standing",
      desc: "Incorporated PT entity equipped with comprehensive corporate licenses, Tax ID (NPWP), Business ID (NIB), issuing official VAT tax invoices for all transactions.",
      points: [
        "Official VAT Tax Invoices for every transaction",
        "Fully verified PT legality, NPWP, and NIB licenses",
        "Guaranteed regulatory compliance and corporate audit safety"
      ]
    },
    {
      badge: "B2B Flexibility",
      title: "Personalized Service & Flexible Payment",
      desc: "Supported by a Dedicated Account Manager for each corporate partner along with flexible Terms of Payment (TOP) structured for your company's cash flow.",
      points: [
        "Dedicated, responsive Account Manager assigned to your team",
        "Flexible Terms of Payment (TOP) of 14, 30, up to 45 days",
        "Complimentary technical consultations on product specs"
      ]
    },
    {
      badge: "Quality Assurance",
      title: "Verified Quality & Continuous Supply",
      desc: "Every dispatch undergoes strict multi-tier quality control (QC). Our supply chain network guarantees continuous stock availability without disruptions.",
      points: [
        "Multi-stage Quality Control prior to dispatch",
        "Immediate replacement guarantee for non-conforming items",
        "Reliable fleet servicing major industrial corridors"
      ]
    }
  ]
};

/**
 * Categories Multilingual Data
 */
const KMS_CATEGORIES_I18N = {
  id: {
    plastic: { title: "Plastik Industri", desc: "Beragam jenis plastik lembaran, rol, dan kantong berkualitas tinggi untuk berbagai keperluan industri dan manufaktur.", itemCount: "8 Produk" },
    packaging: { title: "Kemasan & Logistik", desc: "Solusi kemasan kardus, plastik, kayu, pengikat, dan kain untuk pengemasan, penyimpanan, dan distribusi.", itemCount: "10 Produk" },
    stationery: { title: "Alat Tulis Kantor (ATK)", desc: "Kebutuhan alat tulis dan perlengkapan kantor lengkap untuk mendukung aktivitas operasional perusahaan.", itemCount: "15 Produk" },
    safety: { title: "Perlengkapan K3 & APD", desc: "Perlengkapan keselamatan kerja berstandar untuk mendukung keamanan di lingkungan industri & proyek.", itemCount: "12 Produk" },
    chemical: { title: "Chemical & Kebersihan", desc: "Formula kimia pembersih, pelumas anti-karat, dan cairan sanitasi industri.", itemCount: "12 Produk" },
    consumable: { title: "Consumable Operasional", desc: "Barang habis pakai, alat potong gerinda, kain majun, dan perlengkapan kebersihan rutin.", itemCount: "9 Produk" },
    printing: { title: "Percetakan & Display", desc: "Layanan cetak banner tarik, spanduk, kartu nama, dan stiker kustom perusahaan.", itemCount: "5 Produk" }
  },
  en: {
    plastic: { title: "Industrial Plastics", desc: "Diverse high-grade plastic sheets, film rolls, and bags tailored for industrial and manufacturing applications.", itemCount: "8 Products" },
    packaging: { title: "Packaging & Logistics", desc: "Comprehensive packaging solutions including corrugated boxes, stretch film, crates, strapping, and bags.", itemCount: "10 Products" },
    stationery: { title: "Office Supplies & Stationery", desc: "Complete corporate stationery and desk supplies supporting seamless day-to-day administrative operations.", itemCount: "15 Products" },
    safety: { title: "HSE & Industrial Safety Gear", desc: "Certified Personal Protective Equipment (PPE) ensuring workplace safety across industrial and construction sites.", itemCount: "12 Products" },
    chemical: { title: "Industrial Chemicals & Cleaning", desc: "High-efficacy cleaning chemicals, anti-rust penetrating lubricants, and institutional sanitation liquids.", itemCount: "12 Products" },
    consumable: { title: "Operational Consumables", desc: "Routine industrial consumables, abrasive cutting discs, workshop cotton rags, and janitorial supplies.", itemCount: "9 Products" },
    printing: { title: "Commercial Printing & Signage", desc: "Professional printing services for roll-up displays, outdoor flexi banners, business cards, and corporate stickers.", itemCount: "5 Products" }
  }
};

/**
 * Gallery Multilingual Data
 */
const KMS_GALLERY_I18N = {
  id: [
    { title: "Distribusi", category: "Distribusi", desc: "Proses pemuatan dan penyiapan muatan produk suplai untuk pengiriman tepat waktu ke gudang pelanggan." },
    { title: "Gudang", category: "Gudang", desc: "Manajemen penyimpanan stok barang dengan sistem racking teratur dan terjaga kebersihannya." },
    { title: "Rapat", category: "Rapat", desc: "Koordinasi internal tim pengadaan dan konsultasi spesifikasi kebutuhan solusi mitra bisnis." },
    { title: "Pengiriman", category: "Pengiriman", desc: "Armada logistik terpercaya siap menjangkau berbagai kawasan industri di Jabodetabek dan sekitarnya." },
    { title: "Aktivitas", category: "Aktivitas", desc: "Pemeriksaan kualitas berkala (quality check) memastikan barang yang dikirim sesuai standar spesifikasi." },
    { title: "Tim Kami", category: "Tim Kami", desc: "Tim profesional kami yang berkomitmen mendampingi setiap tahapan pengadaan perusahaan Anda." }
  ],
  en: [
    { title: "Logistics Distribution", category: "Distribution", desc: "Product staging and preparation for punctual on-time delivery to client manufacturing facilities." },
    { title: "Warehouse Facility", category: "Warehouse", desc: "Systematic warehouse inventory management with organized racking and clean storage environments." },
    { title: "Client Consultation", category: "Meeting", desc: "Internal procurement coordination and technical specification consultation with enterprise partners." },
    { title: "Fleet Delivery", category: "Logistics", desc: "Reliable logistics fleet ready to service industrial corridors across Greater Jakarta and West Java." },
    { title: "Quality Inspection", category: "Quality Check", desc: "Rigorous periodic quality checks ensuring all dispatched goods meet certified technical specifications." },
    { title: "Our Dedicated Team", category: "Team", desc: "Our dedicated professional procurement team committed to assisting every stage of your corporate sourcing." }
  ]
};

/**
 * Subcategory Dictionary
 */
const KMS_SUBCAT_I18N = {
  "Kemasan Kardus & Kertas": "Corrugated & Paper Packaging",
  "Wadah & Kontainer Plastik": "Plastic Containers & Crates",
  "Pelindung & Bantalan": "Protective Padding & Cushioning",
  "Palet & Peti Kayu": "Wooden Pallets & Crates",
  "Pengikat & Strapping": "Strapping & Cargo Securing",
  "Kain & Goodie Bag": "Fabric & Tote Bags",
  "Alat Tulis": "Writing Instruments",
  "Kertas & Buku": "Paper & Notebooks",
  "Filing & Dokumen": "Filing & Document Storage",
  "Perlengkapan Meja": "Desk Organization & Accessories",
  "Perekat & Potong": "Adhesives & Cutting Tools",
  "Pelindung Kepala": "Head Protection",
  "Pelindung Mata & Wajah": "Eye & Face Protection",
  "Pelindung Pernapasan": "Respiratory Protection",
  "Pelindung Tangan": "Hand Protection",
  "Pelindung Kaki": "Foot Protection",
  "Pakaian Kerja & Rompi": "Workwear & Safety Vests",
  "Keselamatan Ketinggian": "Fall Protection & Harness",
  "Pembersih Lantai & Toilet": "Floor & Restroom Cleaners",
  "Pembersih Khusus": "Specialized Industrial Cleaners",
  "Pelumas & Anti Karat": "Lubricants & Anti-Rust",
  "Sanitasi & Higienitas": "Sanitation & Personal Hygiene",
  "Kain Lap & Majun": "Industrial Wiping Rags",
  "Alat Kebersihan Fisik": "Janitorial Cleaning Tools",
  "Abrasif & Mata Potong": "Abrasives & Cutting Wheels",
  "Banner & Spanduk": "Banners & Displays",
  "Kartu Nama & Brosur": "Business Cards & Brochures",
  "Stiker & Label": "Stickers & Product Labels"
};

/**
 * Tag Dictionary
 */
const KMS_TAGS_EN = {
  "Bening Kristal": "Crystal Clear",
  "Tahan Panas & Lentur": "Heat Resistant & Flexible",
  "Kuat & Serbaguna": "Durable & Versatile",
  "Tahan Tusukan": "Puncture Resistant",
  "Food Grade & Ringan": "Food Grade & Lightweight",
  "Jernih Seperti Kaca": "Glass-like Clarity",
  "Elastis & Kedap Air": "Elastic & Waterproof",
  "Kaku & Tahan Kimia": "Rigid & Chemical Resistant",
  "Kemasan Karton": "Carton Packaging",
  "Eco Friendly": "Eco-Friendly",
  "Stackable Box": "Stackable Box",
  "Anti-Benturan": "Shock Absorption",
  "Best Seller": "Best Seller",
  "Proteksi Berat": "Heavy Duty Protection",
  "Standar Gudang": "Warehouse Standard",
  "Pengikat Koli": "Cargo Strapping",
  "Heavy Lashing": "Heavy Lashing",
  "Custom Branding": "Custom Branding",
  "ATK Harian": "Daily Stationery",
  "Meeting & Gudang": "Meeting & Warehouse",
  "Pengarsipan": "Archiving",
  "Administrasi": "Administration",
  "Kebutuhan Pokok": "Essential Supplies",
  "Manajemen Meja": "Desk Organization",
  "Korespondensi": "Correspondence",
  "Memo & Reminder": "Memo & Reminder",
  "Pengikat Dokumen": "Document Binding",
  "Klip Berkas": "Paper Clips",
  "Penjepit Tebal": "Heavy Duty Clip",
  "Alat Potong": "Cutting Tools",
  "Presisi & Tajam": "Sharp & Precise",
  "Ergonomis": "Ergonomic",
  "Penanda Teks": "Text Marker",
  "Pelindung Kepala": "Head Protection",
  "Perlindungan Tangan": "Hand Protection",
  "Visibilitas Tinggi": "High Visibility",
  "Perlindungan Nafas": "Respiratory Protection",
  "Perlindungan Mata": "Eye Protection",
  "Area Basah & Kimia": "Wet & Chemical Area",
  "Pelindung Wajah Penuh": "Full Face Protection",
  "Proteksi Tubuh": "Body Protection",
  "Kerja di Ketinggian": "Height Work Safety",
  "Pelindung Kaki Pabrik": "Safety Footwear",
  "Tanggap Darurat Api": "Fire Response",
  "Pembatas Area": "Traffic Control",
  "Perawatan Mesin": "Machine Maintenance",
  "Sanitasi Gedung": "Facility Sanitation",
  "Kaca Bening": "Streak-Free Glass",
  "Pantry & Kantin": "Pantry & Canteen",
  "Higienitas Karyawan": "Employee Hygiene",
  "Kesegaran Kantor": "Office Freshness",
  "Disinfeksi Toilet": "Restroom Disinfection",
  "Sanitasi Cepat": "Instant Sanitizing",
  "Sterilisasi Fasilitas": "Facility Sterilization",
  "Pencucian Industri": "Industrial Laundry",
  "Pewangi Pakaian": "Fabric Fragrance",
  "Kenyamanan Seragam": "Uniform Softening",
  "Finishing Material": "Material Finishing",
  "Fabrikasi Logam": "Metal Fabrication",
  "Bengkel & Mesin": "Workshop & Machinery",
  "Pembersih Presisi": "Precision Cleaning",
  "Pengering Cepat": "Quick Drying",
  "Kebersihan Ruangan": "Room Cleaning",
  "Pembersih Lantai": "Floor Cleaning",
  "Area Luar": "Outdoor Cleaning",
  "Penarik Air": "Water Squeegee",
  "Promosi Kantor": "Corporate Promotion",
  "Ekonomis & Ringan": "Lightweight Display",
  "Outdoor Tahan Cuaca": "Weatherproof Outdoor",
  "Identitas Bisnis": "Corporate Identity",
  "Branding Kemasan": "Packaging Branding"
};

/**
 * Badge Dictionary
 */
const KMS_BADGES_EN = {
  "Food & Ritel": "Food & Retail",
  "Food Packaging": "Food Packaging",
  "Industri & Proteksi": "Industry & Protection",
  "Vacuum & Barrier": "Vacuum & Barrier",
  "Wadah & Ritel": "Containers & Retail",
  "Botol & Wadah": "Bottles & Containers",
  "Film & Wrapping": "Film & Wrapping",
  "Wadah Industri": "Industrial Drums",
  "Packing & Pengiriman": "Packing & Shipping",
  "Kemasan Kertas": "Paper Packaging",
  "Wadah Gudang": "Warehouse Storage",
  "Pelindung Empuk": "Cushion Protection",
  "Pallet Wrapping": "Pallet Wrapping",
  "Heavy Cargo": "Heavy Cargo",
  "Forklift & Racking": "Forklift & Racking",
  "Bundling Cargo": "Cargo Bundling",
  "Truk & Kontainer": "Truck & Container",
  "Kemasan Kain": "Fabric Bags",
  "Alat Tulis": "Stationery",
  "Marker": "Marker",
  "Arsip Plastik": "Plastic Filing",
  "Arsip Dokumen": "Document Filing",
  "Cetak & Fotokopi": "Printing & Copying",
  "Kerapian Kantor": "Desk Organization",
  "Surat Resmi": "Official Mailing",
  "Memo Tempel": "Sticky Notes",
  "Alat Kantor": "Office Supplies",
  "Aksesoris Meja": "Desk Accessories",
  "Baja Kuat": "Steel Clamps",
  "Presisi & Tajam": "Precision Cut",
  "Warna Neon": "Neon Colors",
  "Standar SNI & ANSI": "SNI & ANSI Standards",
  "Anti-Gores & Slip": "Cut & Slip Resistant",
  "Pita Scotlight": "Scotchlite Reflective",
  "Filter Partikel & Gas": "Particle & Gas Filter",
  "Anti-Fog & UV": "Anti-Fog & UV",
  "Waterproof": "Waterproof",
  "Full Face Protection": "Full Face Protection",
  "Wearpack & Coverall": "Protective Workwear",
  "Fall Arrest System": "Fall Arrest System",
  "Ujung Besi 200J": "200J Steel Toe Cap",
  "Dry Chemical & CO2": "Dry Chemical & CO2",
  "Pita Reflektif": "Reflective Strip",
  "Lubricant & Anti-Rust": "Lubricant & Anti-Rust",
  "Konsentrat Wangi": "Fragrant Concentrate",
  "Anti-Streak": "Anti-Streak",
  "Anti-Lemak": "Grease Cutting",
  "Antibakteri & Lembut": "Antibacterial & Soft",
  "Otomatis & Semprot": "Automatic & Spray",
  "Minyak Pinus Alami": "Natural Pine Oil",
  "Alkohol 70%": "70% Alcohol",
  "Permukaan Higienis": "Hygienic Surface",
  "Pembersih Tekstil": "Fabric Cleaner",
  "Keharuman Tahan Lama": "Long Lasting Scent",
  "Pelembut Kain": "Fabric Softener",
  "Grit Kasar - Halus": "Coarse - Fine Grits",
  "Batu Potong Besi": "Metal Cutting Discs",
  "Daya Serap Oli": "Oil Absorption",
  "Bebas Goresan": "Scratch Free",
  "Daya Serap Super": "Super Absorbent",
  "Nilon & Ijuk": "Nylon & Natural Fiber",
  "Katun Tebal": "Thick Cotton",
  "Lidi Pilihan": "Selected Palm Rib",
  "Karet Fleksibel": "Flexible Rubber Blade",
  "Display Portabel": "Portable Display",
  "Tripod Rangka X": "X-Frame Tripod",
  "Flexi High-Res": "High-Res Flexi",
  "Art Carton Eksklusif": "Exclusive Art Carton",
  "Vinyl & Chromo": "Vinyl & Chromo"
};

/**
 * 71 Products English Dictionary
 */
const KMS_PRODUCTS_EN = {
  "plastic-opp": {
    "name": "OPP Plastic Film (Oriented Polypropylene)",
    "tag": "Crystal Clear",
    "badge": "Food & Retail",
    "shortDesc": "Ultra-clear, crystal-transparent, and rigid polymer film ideal for garment packaging, bakery, masks, and premium retail goods.",
    "fullDesc": "OPP (Oriented Polypropylene) plastic is an exceptionally clear polymer film characterized by high stiffness and gloss. Commonly utilized for garment bags, OPP self-adhesive bags, bakery packaging, transparent tape, and retail packaging to create an elegant, high-end presentation.",
    "advantages": [
      "Crystal-clear transparency and premium glossy sheen",
      "Rigid, crisp material characteristics easy to fold and shape",
      "Available with convenient peel-and-seal self-adhesive strips",
      "Protects merchandise from dust, ambient moisture, and dirt"
    ],
    "specs": [
      {
        "key": "Material",
        "val": "Oriented Polypropylene (OPP)"
      },
      {
        "key": "Characteristics",
        "val": "Crystal clear, rigid, glossy surface"
      },
      {
        "key": "Primary Applications",
        "val": "Garment Packaging, OPP Bags, Bakery, Clear Tape"
      },
      {
        "key": "Format",
        "val": "Sheets, Film Rolls, Self-Adhesive Bags"
      }
    ]
  },
  "plastic-cpp": {
    "name": "CPP Plastic Film (Cast Polypropylene)",
    "tag": "Heat-Resistant & Flexible",
    "badge": "Food Packaging",
    "shortDesc": "Flexible, transparent polymer film with excellent thermal resistance for snacks, frozen food, and inner pouch packaging.",
    "fullDesc": "CPP (Cast Polypropylene) is a flexible, highly transparent film renowned for superior thermal stability and tear resistance. It is the premier choice for snack pouches, frozen food, inner packaging, and vacuum retort packaging requiring reliable heat sealing.",
    "advantages": [
      "Outstanding flexibility and high puncture resistance",
      "Superior heat sealing capability (heat sealable at various temps)",
      "Certified food-grade safe for direct contact with consumables",
      "Airtight barrier preserving product freshness and shelf-life"
    ],
    "specs": [
      {
        "key": "Material",
        "val": "Cast Polypropylene (CPP Film)"
      },
      {
        "key": "Characteristics",
        "val": "Flexible, high seal strength, heat resistant"
      },
      {
        "key": "Primary Applications",
        "val": "Snack Packaging, Frozen Food, Inner Pouch Layer"
      },
      {
        "key": "Format",
        "val": "Roll Film & Custom Lamination Layer"
      }
    ]
  },
  "plastic-pvc": {
    "name": "PVC Plastic Sheet (Polyvinyl Chloride)",
    "tag": "Durable & Versatile",
    "badge": "Industrial & Protection",
    "shortDesc": "Durable, moisture-proof, and chemical-resistant polymer for clear rigid mika, flexible curtains, and protective covers.",
    "fullDesc": "PVC (Polyvinyl Chloride) is an engineering polymer celebrated for its structural durability, weather resistance, and versatility. Available in flexible plastic sheets (soft PVC strip curtains) and rigid mika for box packaging, office covers, and industrial partitions.",
    "advantages": [
      "Exceptional mechanical strength and chemical resistance",
      "Available in both ultra-clear rigid sheet and flexible soft roll",
      "Waterproof, oil-proof, and flame-retardant properties",
      "Easy to weld, cut, and thermoform into custom packaging"
    ],
    "specs": [
      {
        "key": "Material",
        "val": "Polyvinyl Chloride (PVC)"
      },
      {
        "key": "Type",
        "val": "Rigid Mika Sheet & Flexible Soft Film / Strip Curtain"
      },
      {
        "key": "Primary Applications",
        "val": "Strip Curtains, Packaging Boxes, Protective Covers"
      }
    ]
  },
  "plastic-nylon": {
    "name": "Nylon Barrier Film (Polyamide / PA)",
    "tag": "Puncture Resistant",
    "badge": "Vacuum & Barrier",
    "shortDesc": "High-tensile, puncture-resistant barrier plastic specifically engineered for food vacuum bags and sharp frozen cargo.",
    "fullDesc": "Polyamide (Nylon/PA) film delivers extraordinary tensile strength, superior gas/oxygen barrier properties, and puncture resistance. Widely used for laminated vacuum pouches (Nylon+LLDPE) to pack meats, nuts, rice, and frozen seafood without risk of tearing.",
    "advantages": [
      "Maximum puncture resistance against sharp bones and hard edges",
      "High gas and oxygen barrier preventing oxidation and spoilage",
      "Maintains flexibility and seal integrity at sub-zero temperatures",
      "Certified food contact safe for industrial frozen processing"
    ],
    "specs": [
      {
        "key": "Material",
        "val": "Polyamide (Nylon / PA) Laminated Film"
      },
      {
        "key": "Type",
        "val": "Vacuum Bag (Three-side seal / Gusset / Roll)"
      },
      {
        "key": "Primary Applications",
        "val": "Vacuum Food Bags, Frozen Meat, Rice Brick Bags"
      }
    ]
  },
  "plastic-pp": {
    "name": "PP Plastic (Polypropylene)",
    "tag": "Food Grade & Lightweight",
    "badge": "Containers & Retail",
    "shortDesc": "Lightweight, sturdy, and microwave-safe material widely used for beverage cups, food boxes, and injection molded wares.",
    "fullDesc": "Polypropylene (PP) is a versatile thermoplastic offering a high melting point, excellent chemical resistance, and food-grade compliance. Commonly molded into cups, microwaveable meal boxes, caps, and woven sacks for heavy commodity handling.",
    "advantages": [
      "High melting temperature, safe for microwave heating and warm foods",
      "Odorless, non-toxic, and BPA-free food grade material",
      "Resistant to fats, acids, and most chemical solvents",
      "100% recyclable with high economic sustainability"
    ],
    "specs": [
      {
        "key": "Material",
        "val": "Polypropylene (PP Homopolymer / Copolymer)"
      },
      {
        "key": "Primary Applications",
        "val": "Takeaway Food Containers, Plastic Cups, Woven Sacks"
      },
      {
        "key": "Standards",
        "val": "Food Grade Certified & BPA Free"
      }
    ]
  },
  "plastic-pet": {
    "name": "PET Plastic (Polyethylene Terephthalate)",
    "tag": "Glass-like Clarity",
    "badge": "Bottles & Containers",
    "shortDesc": "Crystal clear, lightweight, and pressure-resistant polymer for beverage bottles, pharmaceutical containers, and thermoformed blister packs.",
    "fullDesc": "PET (Polyethylene Terephthalate) is celebrated for its glass-like clarity, high impact resistance, and superb carbonation/aroma barrier. It is the global standard for water and beverage bottles, pharmaceutical syrup containers, and thermoformed clamshell food trays.",
    "advantages": [
      "Glass-like aesthetic brilliance with lightweight, shatterproof safety",
      "Strong CO2 and oxygen barrier preserving taste and freshness",
      "High impact resistance during long-distance transportation",
      "Universally recycled material (rPET compatible)"
    ],
    "specs": [
      {
        "key": "Material",
        "val": "Polyethylene Terephthalate (PET)"
      },
      {
        "key": "Format",
        "val": "Preform Bottles, Finished Bottles, Blister Sheets"
      },
      {
        "key": "Applications",
        "val": "Beverage Bottles, Pharma Packaging, Thermoform Trays"
      }
    ]
  },
  "plastic-ldpe": {
    "name": "LDPE Plastic (Low-Density Polyethylene)",
    "tag": "Elastic & Waterproof",
    "badge": "Film & Wrapping",
    "shortDesc": "Highly flexible, moisture-proof, and resilient plastic for trash bags, squeeze bottles, and industrial shrink films.",
    "fullDesc": "Low-Density Polyethylene (LDPE) provides superior elongation, softness, and water-barrier capabilities. It is the preferred polymer for flexible packaging, heavy-duty trash liners, industrial shrink wraps, and squeeze bottles.",
    "advantages": [
      "Outstanding elongation and flexibility without tearing easily",
      "Superior water and moisture vapor barrier",
      "Excellent sealability at low temperatures",
      "Cost-effective for high-volume commercial and warehouse use"
    ],
    "specs": [
      {
        "key": "Material",
        "val": "Low-Density Polyethylene (LDPE)"
      },
      {
        "key": "Applications",
        "val": "Heavy Duty Trash Bags, Shrink Film, Liners, Tubing"
      }
    ]
  },
  "plastic-hdpe": {
    "name": "HDPE Plastic (High-Density Polyethylene)",
    "tag": "Rigid & Chemical Resistant",
    "badge": "Industrial Drums",
    "shortDesc": "High-density rigid thermoplastic with exceptional chemical resistance for jerrycans, drums, and heavy logistics crates.",
    "fullDesc": "HDPE (High-Density Polyethylene) is renowned for its high strength-to-density ratio, impact toughness, and extreme chemical inertness. It is the premier resin for chemical jerrycans, bleach bottles, industrial pallets, and durable shopping bags.",
    "advantages": [
      "Exceptional resistance to aggressive acids, solvents, and alkalis",
      "Rigid, high-load-bearing structural integrity",
      "Resistant to weathering and ultraviolet degradation",
      "Non-leaching material safe for food-grade liquid storage"
    ],
    "specs": [
      {
        "key": "Material",
        "val": "High-Density Polyethylene (HDPE)"
      },
      {
        "key": "Applications",
        "val": "Jerrycans (1L-30L), Chemical Drums, Industrial Crates"
      }
    ]
  },
  "pkg-kardus-corrugated": {
    "name": "Corrugated Carton & Cardboard Box",
    "tag": "Carton Packaging",
    "badge": "Packing & Shipping",
    "shortDesc": "Corrugated paper packaging solutions for product packing, warehouse storage, and corporate cargo dispatch.",
    "fullDesc": "Heavy-duty corrugated cardboard boxes available in Single Wall (3-ply), Double Wall (5-ply), and Triple Wall configurations to ensure maximum stackability and damage-free transit during inter-island shipping and export.",
    "advantages": [
      "Optimal stacking strength and load distribution",
      "Customizable dimensions and custom logo/brand printing",
      "Eco-friendly, 100% biodegradable and recyclable materials"
    ],
    "specs": [
      {
        "key": "Subcategory",
        "val": "Corrugated & Paper Packaging"
      },
      {
        "key": "Flute Type",
        "val": "B/F, C/F, E/F, Single Wall (3 ply) & Double Wall (5 ply)"
      },
      {
        "key": "Application",
        "val": "Product Master Cartons, Shipping Boxes, Archive Boxes"
      }
    ]
  },
  "pkg-paper-bag": {
    "name": "Kraft Paper Bag & Sacks",
    "tag": "Eco-Friendly",
    "badge": "Paper Packaging",
    "shortDesc": "Eco-friendly, durable brown and white kraft paper bags for retail, culinary, and company promotional gift packaging.",
    "fullDesc": "Manufactured from virgin and recycled kraft paper with reinforced twisted or flat paper handles. Offers a modern, sustainable packaging aesthetic that enhances brand prestige while complying with corporate zero-plastic policies.",
    "advantages": [
      "Sturdy base and handles supporting loads up to 5-10 kg",
      "Biodegradable, eco-friendly, and compostable",
      "High-definition flexo & screen printing for brand logos"
    ],
    "specs": [
      {
        "key": "Material",
        "val": "Brown Kraft / White Kraft Paper (125 - 200 gsm)"
      },
      {
        "key": "Handle Type",
        "val": "Twisted Paper, Flat Rope, Die-Cut Handle"
      }
    ]
  },
  "pkg-container-box": {
    "name": "Industrial Plastic Container Box",
    "tag": "Stackable Box",
    "badge": "Warehouse Storage",
    "shortDesc": "Sturdy, stackable industrial plastic storage boxes for parts organization, spare parts, and manufacturing logistics.",
    "fullDesc": "Heavy-duty injection-molded copolymer PP container boxes engineered for rugged factory floors. Features inter-nesting and stacking rims, ergonomic handgrips, and optional snap-on dust lids.",
    "advantages": [
      "High load bearing, withstands up to 50+ kg stacking weight",
      "Resistant to industrial oils, moisture, and chemical washes",
      "Integrated card holder slots for systematic inventory tracking"
    ],
    "specs": [
      {
        "key": "Material",
        "val": "Heavy Duty Copolymer Polypropylene (PP)"
      },
      {
        "key": "Type",
        "val": "Solid Wall, Perforated Mesh, Nestable & Stackable"
      }
    ]
  },
  "pkg-busa-pe": {
    "name": "PE Foam Protection Sheet & Roll",
    "tag": "Shock Absorption",
    "badge": "Cushion Protection",
    "shortDesc": "Lightweight, non-abrasive closed-cell polyethylene foam for wrapping electronics, furniture, and scratch-sensitive goods.",
    "fullDesc": "Closed-cell PE foam delivers supreme shock absorption, vibration dampening, and thermal insulation. Its silky, non-abrasive surface prevents scratches on painted automotive components, glass, polished metals, and delicate appliances.",
    "advantages": [
      "Closed-cell structure provides water and chemical resistance",
      "Non-abrasive surface prevents surface scuffing on delicate items",
      "Superb impact cushioning and vibration dampening"
    ],
    "specs": [
      {
        "key": "Thickness",
        "val": "0.5 mm - 10 mm (Custom thickness available)"
      },
      {
        "key": "Format",
        "val": "Rolls, Pre-cut Sheets, Laminated Bags"
      }
    ]
  },
  "pkg-stretch-film": {
    "name": "Industrial Plastic Stretch Film",
    "tag": "Best Seller",
    "badge": "Pallet Wrapping",
    "shortDesc": "High-yield, ultra-cling stretch wrap film for securing pallet loads, bundling cartons, and weatherproofing warehouse cargo.",
    "fullDesc": "Premium cast LLDPE stretch film engineered with exceptional cling, high elongation (up to 300%), and puncture resistance. Stabilizes palletized goods during transit while protecting against dust, rain, and transit tampering.",
    "advantages": [
      "High tensile elongation with tight holding retention",
      "Exceptional puncture resistance against carton corners",
      "One-sided cling prevents pallet-to-pallet friction during transit"
    ],
    "specs": [
      {
        "key": "Material",
        "val": "100% Virgin Cast LLDPE"
      },
      {
        "key": "Width & Thickness",
        "val": "50 cm Width, 17 - 20 Micron"
      },
      {
        "key": "Type",
        "val": "Hand Wrap Roll & Machine Wrap Core"
      }
    ]
  },
  "pkg-peti-kayu": {
    "name": "Solid Wooden Crate (Peti Kayu)",
    "tag": "Heavy Duty Protection",
    "badge": "Heavy Cargo",
    "shortDesc": "Custom heavy-duty wooden crates and boxes for machinery, glass, and sensitive industrial equipment export shipping.",
    "fullDesc": "Custom-fabricated timber crates built from dried pine or hardwood, optionally ISPM 15 heat-treated for international export compliance. Designed to withstand extreme mechanical forces and forklift handling.",
    "advantages": [
      "Maximum structural rigidity for heavy industrial cargo",
      "Custom-tailored to the exact machinery dimensions",
      "Export certified (ISPM 15 Heat Treatment / Fumigation ready)"
    ],
    "specs": [
      {
        "key": "Timber Material",
        "val": "Solid Hardwood, Pine, Engineered Plywood"
      },
      {
        "key": "Customization",
        "val": "Fully custom dimensions with internal bracing"
      }
    ]
  },
  "pkg-palet-kayu": {
    "name": "Standard Wooden Pallet (Palet Kayu)",
    "tag": "Warehouse Standard",
    "badge": "Forklift & Racking",
    "shortDesc": "Standardized two-way and four-way entry wooden pallets for forklift operations, high-bay racking, and container staging.",
    "fullDesc": "Robust warehouse wooden pallets built to international dimensions (1200x1000 mm, 1100x1100 mm). Precision assembled with ring-shank nails to withstand heavy dynamic loads and repeated forklift movement.",
    "advantages": [
      "Dynamic load rating up to 1,500 kg, static load up to 4,000 kg",
      "4-way entry compatible with all standard forklifts and hand pallet jacks",
      "Kiln-dried and moisture controlled to prevent mold growth"
    ],
    "specs": [
      {
        "key": "Standard Sizes",
        "val": "1200 x 1000 mm & 1100 x 1100 mm"
      },
      {
        "key": "Entry Type",
        "val": "2-Way & 4-Way Forklift Entry"
      }
    ]
  },
  "pkg-strapping-band": {
    "name": "Strapping Band (PP & PET Strapping)",
    "tag": "Cargo Strapping",
    "badge": "Cargo Bundling",
    "shortDesc": "High-tensile PP and PET strapping bands for carton bundling, brick bundling, and heavy pallet stabilization.",
    "fullDesc": "Engineered strapping bands designed for manual tensioners and semi-automatic/fully automatic strapping machines. Offers outstanding tensile retention and shock absorption without losing tension over time.",
    "advantages": [
      "High break strength with consistent thickness and width",
      "Does not rust or damage carton edges unlike steel strapping",
      "Smooth feed operation for automated packaging lines"
    ],
    "specs": [
      {
        "key": "Material",
        "val": "Polypropylene (PP) & Polyester (PET)"
      },
      {
        "key": "Width",
        "val": "9 mm, 12 mm, 15 mm, 19 mm"
      }
    ]
  },
  "pkg-sabuk-kargo": {
    "name": "Ratchet Cargo Lashing Strap",
    "tag": "Heavy Lashing",
    "badge": "Truck & Container",
    "shortDesc": "Heavy-duty polyester webbing ratchet tie-down straps for securing cargo inside container trucks, flatbeds, and ships.",
    "fullDesc": "Heavy-duty ratchet tie-down straps manufactured from 100% high-tenacity polyester webbing with forged steel double J-hooks and smooth ratcheting mechanism. Rated for rigorous road and marine transport.",
    "advantages": [
      "Breaking strength rated up to 2 - 5 Tons",
      "Low elongation webbing resists stretching under heavy transit vibrations",
      "Weather, UV, and oil resistant polyester material"
    ],
    "specs": [
      {
        "key": "Capacity",
        "val": "2 Ton, 3 Ton, 5 Ton Ratchet Strap"
      },
      {
        "key": "Webbing Width & Length",
        "val": "50 mm Width, 6m - 12m Length"
      }
    ]
  },
  "pkg-goodie-bag": {
    "name": "Non-Woven Fabric Goodie Bag",
    "tag": "Custom Branding",
    "badge": "Fabric Bags",
    "shortDesc": "Reusable non-woven spunbond bags for corporate gift sets, marketing seminars, and promotional merchandise.",
    "fullDesc": "Eco-friendly spunbond non-woven fabric bags available in an assortment of vibrant corporate colors. Precision heat-sealed or stitched with high-quality screen printing for company logos.",
    "advantages": [
      "Reusable, durable, and washable alternative to single-use plastics",
      "Custom dimensions, handle colors, and logo printing",
      "Cost-effective promotional medium with high brand visibility"
    ],
    "specs": [
      {
        "key": "Material",
        "val": "Spunbond Non-Woven Polypropylene (75 - 100 gsm)"
      },
      {
        "key": "Model",
        "val": "Box Bag, Oval Handle, T-Shirt Bag"
      }
    ]
  },
  "atk-pulpen": {
    "name": "Office Ballpoint Pens",
    "tag": "Daily Stationery",
    "badge": "Stationery",
    "shortDesc": "High-quality corporate ballpoint and gel pens featuring smooth ink flow, ergonomic grip, and leak-proof barrels.",
    "fullDesc": "Precision 0.5 mm - 0.7 mm semi-gel and ballpoint pens. Designed for seamless, skip-free writing and smudge-proof signing on official documents, invoices, and contracts.",
    "advantages": [
      "Deep black and blue high-density ink",
      "Ergonomic rubberized grip reducing hand fatigue",
      "Economical wholesale box pack of 12 pcs"
    ],
    "specs": [
      {
        "key": "Type",
        "val": "Ballpoint & Semi-Gel Pen 0.5 / 0.7 mm"
      },
      {
        "key": "Ink Colors",
        "val": "Black, Blue, Red"
      }
    ]
  },
  "atk-pensil": {
    "name": "2B Wooden & Mechanical Pencils",
    "tag": "Daily Stationery",
    "badge": "Stationery",
    "shortDesc": "Standard 2B graphite wooden pencils and ergonomic mechanical pencils for drafting, sketches, and office notes.",
    "fullDesc": "High-grade 2B pencils offering break-resistant leads and smooth graphite laydown. Perfect for optical mark recognition (OMR) forms, architectural drafting, and administrative notes.",
    "advantages": [
      "Dark, uniform 2B lead density that erases cleanly",
      "Pre-sharpened quality cedar wood resistant to splintering",
      "Comfortable mechanical pencil options with auto-feed lead"
    ],
    "specs": [
      {
        "key": "Grade",
        "val": "2B Graphite Standard"
      },
      {
        "key": "Variants",
        "val": "Classic Wooden Pencils & 0.5mm Mechanical Pencils"
      }
    ]
  },
  "atk-spidol": {
    "name": "Whiteboard & Permanent Markers",
    "tag": "Meeting & Warehouse",
    "badge": "Marker",
    "shortDesc": "Dry-erase whiteboard markers for conference rooms and heavy-duty permanent markers for cargo carton labeling.",
    "fullDesc": "Features bold, vibrant pigment inks. Whiteboard markers wipe clean without ghosting, while permanent markers adhere instantly to metal, plastic, wood, and cardboard surfaces.",
    "advantages": [
      "Quick-drying, low-odor alcohol-based ink formula",
      "Durable bullet and chisel acrylic nibs resistant to fraying",
      "Permanent marker ink is waterproof and UV resistant"
    ],
    "specs": [
      {
        "key": "Types",
        "val": "Dry-Erase Whiteboard & Industrial Permanent Marker"
      },
      {
        "key": "Colors",
        "val": "Black, Blue, Red, Green"
      }
    ]
  },
  "atk-map-plastik": {
    "name": "Plastic Document Folder (Business File)",
    "tag": "Archiving",
    "badge": "Plastic Filing",
    "shortDesc": "Clear plastic L-folders, zipper pouches, and business file prong folders for protecting and organizing paperwork.",
    "fullDesc": "Durable PP document folders that shield papers from tears, dirt, and water splashes. Available in L-Folder, envelope button, and spine prong fastener formats.",
    "advantages": [
      "Tear-resistant, water-repellent polypropylene material",
      "Crystal clear front cover for immediate document recognition",
      "Standard Folio/F4 and A4 size compatibility"
    ],
    "specs": [
      {
        "key": "Material",
        "val": "Polypropylene Sheet 0.18 - 0.25 mm"
      },
      {
        "key": "Size",
        "val": "A4 & Folio (F4)"
      }
    ]
  },
  "atk-map-kertas": {
    "name": "Paper File Folder (Stopmap Folio & Buffalo)",
    "tag": "Administration",
    "badge": "Document Filing",
    "shortDesc": "Classic buffalo and stopmap paper folders with inner tabs for corporate filing, bids, and client presentations.",
    "fullDesc": "Heavyweight colored paper folders engineered for official correspondence, government tenders, and archive sorting. Features pre-creased expansion folds.",
    "advantages": [
      "Heavy cardstock paper (230 - 260 gsm) providing firm support",
      "Available in classic corporate colors (Blue, Green, Yellow, Red)",
      "Standard Folio size accommodates unstapled and legal documents"
    ],
    "specs": [
      {
        "key": "Material",
        "val": "Heavyweight Buffalo & Manila Paper"
      },
      {
        "key": "Size",
        "val": "Folio / F4"
      }
    ]
  },
  "atk-kertas-hvs": {
    "name": "HVS Multipurpose Copy Paper",
    "tag": "Essential Supplies",
    "badge": "Printing & Copying",
    "shortDesc": "High-whiteness, jam-free copy paper in A4, F4, and A3 formats for high-speed laser printing, photocopying, and official reports.",
    "fullDesc": "Premium 70 gsm and 80 gsm wood-free paper featuring 98% CIE whiteness and high opacity. Engineered with smooth surface chemistry for two-sided duplex printing without paper jams.",
    "advantages": [
      "Guaranteed jam-free performance in high-speed photocopiers and laser printers",
      "Ultra-high whiteness delivers sharp text and crisp color contrast",
      "Acid-free archival formulation for long-term document retention"
    ],
    "specs": [
      {
        "key": "Grammage",
        "val": "70 gsm & 80 gsm"
      },
      {
        "key": "Sizes",
        "val": "A4 (210x297mm), F4/Folio (215x330mm), A3"
      },
      {
        "key": "Packaging",
        "val": "500 Sheets/Ream (5 Reams/Box)"
      }
    ]
  },
  "atk-box-file": {
    "name": "Document Archive Box File",
    "tag": "Desk Organization",
    "badge": "Desk Organization",
    "shortDesc": "Sturdy upright box files for organizing binders, folders, magazines, and technical manuals on desk shelves.",
    "fullDesc": "Rigid corrugated cardboard or molded plastic magazine file boxes with finger-pull holes and customizable spine label holders for quick desktop cataloging.",
    "advantages": [
      "Rigid construction prevents tipping even when fully loaded",
      "Clear spine label pocket for easy document categorization",
      "Wide 10 cm - 12 cm spine holds up to 800+ sheets"
    ],
    "specs": [
      {
        "key": "Material",
        "val": "Laminated Corrugated Board & Plastic PP"
      },
      {
        "key": "Dimensions",
        "val": "Spine width 7.5 cm - 10 cm, Height 32 cm"
      }
    ]
  },
  "atk-amplop": {
    "name": "Mailing Envelopes (White & Kraft)",
    "tag": "Correspondence",
    "badge": "Official Mailing",
    "shortDesc": "Standard peel-and-seal white office envelopes and heavy-duty brown kraft expandable envelopes for shipping documents.",
    "fullDesc": "Available in standard business DL white format with peel-and-seal adhesive, as well as A4/F4 brown kraft catalog envelopes with reinforced seams.",
    "advantages": [
      "Self-adhesive peel-and-seal strip requires no moisture",
      "Opaque privacy security tint preventing light pass-through",
      "Sturdy seams preventing burst during postal dispatch"
    ],
    "specs": [
      {
        "key": "Types",
        "val": "White DL (110x230mm) & Brown Kraft A4/F4 Envelope"
      },
      {
        "key": "Closure",
        "val": "Self-Adhesive Peel-Off Strip"
      }
    ]
  },
  "atk-sticky-notes": {
    "name": "Self-Adhesive Sticky Notes",
    "tag": "Memo & Reminder",
    "badge": "Sticky Notes",
    "shortDesc": "Bright neon removable self-adhesive notes for quick reminders, page flags, and workflow brainstorming boards.",
    "fullDesc": "High-tack removable notes that stick securely to paper, monitors, and glass without leaving sticky residue when peeled off. Ideal for agile task boards and reminders.",
    "advantages": [
      "Removable adhesive re-sticks repeatedly without residue",
      "High-visibility neon colors (Yellow, Pink, Green, Orange)",
      "Smooth paper surface accepts all pen and pencil inks"
    ],
    "specs": [
      {
        "key": "Sizes",
        "val": "3x3 inches (76x76mm), 2x3 inches, Page Markers"
      },
      {
        "key": "Quantity",
        "val": "100 Sheets per Pad"
      }
    ]
  },
  "atk-stapler": {
    "name": "Office Stapler & Staples Refill",
    "tag": "Document Binding",
    "badge": "Office Supplies",
    "shortDesc": "Durable metal staplers and standard No. 10 / No. 3 staples for rapid, clean document binding.",
    "fullDesc": "Ergonomic metal-core desktop staplers equipped with anti-jam mechanisms. Binds from 10 to 40 sheets cleanly with dual clinch options (permanent and temporary).",
    "advantages": [
      "All-metal drive mechanism ensures long service life",
      "Low staple reload indicator slot",
      "Compatible with universally available No. 10 & 24/6 staples"
    ],
    "specs": [
      {
        "key": "Capacity",
        "val": "15 to 40 Sheets (Standard) & 100 Sheets (Heavy Duty)"
      },
      {
        "key": "Staple Sizes",
        "val": "No. 10, No. 3 (24/6), 23/13 (Heavy Duty)"
      }
    ]
  },
  "atk-paper-clip": {
    "name": "Metal Paper Clips (Klip Kertas)",
    "tag": "Paper Clips",
    "badge": "Desk Accessories",
    "shortDesc": "Rust-resistant zinc-coated and vinyl-coated metal paper clips for temporary document grouping without puncturing paper.",
    "fullDesc": "Smooth-finished wire paper clips that slip effortlessly over stacks of paper without tearing or snagging pages. Packaged in convenient desk dispenser boxes.",
    "advantages": [
      "Smooth, burr-free wire ends protect documents from scratches",
      "Nickel and vinyl coating provides excellent rust protection",
      "Available in standard No. 3 (28mm) and Jumbo (50mm) sizes"
    ],
    "specs": [
      {
        "key": "Material",
        "val": "Zinc Plated Steel Wire & Color Vinyl Coated"
      },
      {
        "key": "Sizes",
        "val": "Standard 28 mm & Jumbo 50 mm"
      }
    ]
  },
  "atk-binder-clip": {
    "name": "Steel Binder Clips (Klip Penjepit)",
    "tag": "Heavy Duty Clip",
    "badge": "Steel Clamps",
    "shortDesc": "Tempered black spring-steel binder clips with fold-back arms for clamping thick stacks of paperwork securely.",
    "fullDesc": "Heavy-duty tempered spring steel clamps that maintain firm holding tension indefinitely. Handles can fold flat for filing or be removed for permanent binding.",
    "advantages": [
      "Powerful spring grip holds from 30 up to 250 sheets firmly",
      "Rust-resistant black enamel coating and chrome wire arms",
      "Reusable, durable, and leaves no holes in documents"
    ],
    "specs": [
      {
        "key": "Sizes Available",
        "val": "No. 105 (15mm), 107 (19mm), 111 (25mm), 155 (32mm), 200 (41mm), 260 (51mm)"
      }
    ]
  },
  "atk-cutter": {
    "name": "Utility Knife & Cutter Blades",
    "tag": "Cutting Tools",
    "badge": "Precision Cut",
    "shortDesc": "Ergonomic utility cutters with auto-lock sliders and replacement snap-off carbon steel blades for packing and cutting.",
    "fullDesc": "Designed with heavy-duty metal blade tracks and ergonomic grips for effortless cutting of cardboard boxes, tape, strapping, and paper.",
    "advantages": [
      "Rigid auto-locking slider mechanism prevents blade slippage",
      "SK-5 ultra-sharp carbon steel snap-off blades",
      "Available in small 9mm and heavy-duty 18mm widths"
    ],
    "specs": [
      {
        "key": "Blade Width",
        "val": "Small (9 mm) & Large Heavy Duty (18 mm)"
      },
      {
        "key": "Mechanism",
        "val": "Auto-Lock & Wheel Lock Slider"
      }
    ]
  },
  "atk-gunting": {
    "name": "Stainless Steel Office Scissors",
    "tag": "Cutting Tools",
    "badge": "Precision Cut",
    "shortDesc": "Corrosion-resistant stainless steel scissors with comfort soft-grip handles for smooth, precise paper cutting.",
    "fullDesc": "Precision ground stainless steel blades that stay razor-sharp through hundreds of cuts. Equipped with asymmetrical soft-touch finger rings for superior cutting leverage.",
    "advantages": [
      "High-grade stainless steel blades resist rust and tape adhesive",
      "Ergonomic handle loop designed for both right and left hand use",
      "Available in standard 6-inch, 7-inch, and 8-inch lengths"
    ],
    "specs": [
      {
        "key": "Material",
        "val": "Hardened Stainless Steel Blades & ABS/TPR Grip"
      },
      {
        "key": "Lengths",
        "val": "6.5 Inch, 7 Inch, 8.5 Inch"
      }
    ]
  },
  "atk-highlighter": {
    "name": "Fluorescent Text Highlighters",
    "tag": "Text Marker",
    "badge": "Neon Colors",
    "shortDesc": "Vibrant fluorescent water-based highlighters with chisel tips for emphasizing text in reports, books, and spreadsheets.",
    "fullDesc": "Features brilliant non-toxic fluorescent ink that will not smudge inkjet or ballpoint pen writing. Versatile chisel nib produces both 1mm fine underlines and 4mm broad highlights.",
    "advantages": [
      "Anti-dry-out cap technology allows extended uncapped time",
      "Universal water-based ink safe for all standard paper and faxes",
      "Assorted bright neon colors: Yellow, Green, Pink, Orange, Blue"
    ],
    "specs": [
      {
        "key": "Tip Type",
        "val": "Chisel Nib (1 - 4 mm line width)"
      },
      {
        "key": "Ink",
        "val": "Water-based fluorescent pigment"
      }
    ]
  },
  "safety-helm": {
    "name": "Industrial Safety Helmet",
    "tag": "Head Protection",
    "badge": "SNI & ANSI Standards",
    "shortDesc": "High-impact ABS/HDPE safety helmets with ratchet suspension for construction, factory, and engineering site safety.",
    "fullDesc": "Certified industrial hard hats engineered to absorb severe vertical impacts and electrical hazards. Features 6-point harness suspension with fast dial ratchet adjustment.",
    "advantages": [
      "Impact-resistant virgin ABS / HDPE shell",
      "Dial-ratchet headband ensures snug and stable fit",
      "Complies with SNI, ANSI Z89.1, and EN 397 industrial safety standards"
    ],
    "specs": [
      {
        "key": "Material",
        "val": "High-Impact ABS / HDPE Shell"
      },
      {
        "key": "Colors",
        "val": "White (Supervisor), Yellow (Worker), Blue, Red, Orange"
      }
    ]
  },
  "safety-sarung-tangan": {
    "name": "Industrial Safety Gloves",
    "tag": "Hand Protection",
    "badge": "Cut & Slip Resistant",
    "shortDesc": "Cut-resistant, nitrile-coated, leather welding, and dotted cotton gloves for mechanical, chemical, and warehouse handling.",
    "fullDesc": "Comprehensive industrial glove line spanning PU-coated precision gloves, heavy-duty leather welders' gloves, and chemical-resistant nitrile gauntlets.",
    "advantages": [
      "High abrasion, tear, and puncture resistance ratings",
      "Textured palm coating provides exceptional grip in oily conditions",
      "Breathable seamless knit back keeps hands cool and comfortable"
    ],
    "specs": [
      {
        "key": "Types",
        "val": "Nitrile Coated, PU Coated, Leather Welder, Dotted Cotton"
      },
      {
        "key": "Standards",
        "val": "EN 388 Mechanical Protection Certified"
      }
    ]
  },
  "safety-rompi": {
    "name": "High-Visibility Reflective Safety Vest",
    "tag": "High Visibility",
    "badge": "Scotchlite Reflective",
    "shortDesc": "Bright neon polyester mesh safety vests with 3M reflective tape for roadwork, mining, and warehouse logistics.",
    "fullDesc": "High-visibility fluorescent orange and green safety vests featuring wide retro-reflective strips that illuminate brightly under vehicle headlights. Equipped with front zipper and multi-tool pockets.",
    "advantages": [
      "360-degree high-intensity reflective visibility up to 300 meters",
      "Durable breathable polyester fabric withstands repeated washing",
      "Multi-pocket layout for walkie-talkies, pens, ID badges, and phones"
    ],
    "specs": [
      {
        "key": "Material",
        "val": "100% Breathable Polyester Fabric / Mesh"
      },
      {
        "key": "Standards",
        "val": "ANSI/ISEA 107 Class 2 High Visibility"
      }
    ]
  },
  "safety-respirator": {
    "name": "Industrial Respirator & Particulate Masks",
    "tag": "Respiratory Protection",
    "badge": "Particle & Gas Filter",
    "shortDesc": "Half-mask respirators with dual chemical gas cartridges and N95/KN95 particulate filtering masks for factory dust and fumes.",
    "fullDesc": "Designed for toxic solvent vapors, painting, sanding, and heavy dust environments. Features soft silicone face seals and replaceable chemical/particulate filter cartridges.",
    "advantages": [
      "Tight ergonomic face seal minimizes leakage and user fatigue",
      "Low inhalation resistance for easy breathing over long shifts",
      "Certified NIOSH N95 / KN95 / EN 14387 cartridge compatibility"
    ],
    "specs": [
      {
        "key": "Type",
        "val": "Disposable N95 Masks & Reusable Half-Face Dual Respirators"
      }
    ]
  },
  "safety-kacamata": {
    "name": "Protective Safety Glasses",
    "tag": "Eye Protection",
    "badge": "Anti-Fog & UV",
    "shortDesc": "Impact-resistant polycarbonate safety glasses with anti-scratch and anti-fog coatings for workshop grinding and laboratory work.",
    "fullDesc": "Lightweight wrap-around polycarbonate eye protection designed to stop flying debris, sparks, and chemical splashes while filtering 99.9% of harmful UV rays.",
    "advantages": [
      "High-velocity impact-resistant polycarbonate lenses (ANSI Z87.1)",
      "Superior anti-fog and anti-scratch lens coating",
      "Comfortable rubberized temples and soft universal nose bridge"
    ],
    "specs": [
      {
        "key": "Lens Material",
        "val": "Optical Grade Polycarbonate"
      },
      {
        "key": "Standards",
        "val": "ANSI Z87.1+ & CE EN 166"
      }
    ]
  },
  "safety-boots": {
    "name": "Heavy-Duty Rubber Safety Boots",
    "tag": "Wet & Chemical Area",
    "badge": "Waterproof",
    "shortDesc": "Waterproof PVC/nitrile boots with steel toe caps and non-slip cleated outsoles for wet processing, chemical, and muddy sites.",
    "fullDesc": "Seamless injection molded industrial rubber boots designed for wet manufacturing, abattoirs, wastewater treatment, and construction foundations.",
    "advantages": [
      "100% waterproof seamless PVC-Nitrile compounding",
      "Deep cleated outsoles provide exceptional traction on slick surfaces",
      "Resistant to animal fats, mild acids, industrial alkalis, and oils"
    ],
    "specs": [
      {
        "key": "Height",
        "val": "Tall Knee Height (38 - 40 cm)"
      },
      {
        "key": "Features",
        "val": "Steel Toe Cap (Optional) & Chemical Resistant Sole"
      }
    ]
  },
  "safety-face-shield": {
    "name": "Full Face Protection Visor Shield",
    "tag": "Full Face Protection",
    "badge": "Full Face Protection",
    "shortDesc": "Full face clear visors with ratchet browguards for protection against grinding sparks, high-pressure splashes, and molten splatter.",
    "fullDesc": "Provides comprehensive coverage for the entire face and neck. Clear optical-grade polycarbonate shield mounts onto an adjustable ratchet headgear or helmet bracket.",
    "advantages": [
      "Expansive panoramic field of vision without optical distortion",
      "High-velocity projectile and chemical liquid splash defense",
      "Flip-up visor mechanism with tension knob locks"
    ],
    "specs": [
      {
        "key": "Material",
        "val": "Polycarbonate Visor & ABS Browguard"
      },
      {
        "key": "Standards",
        "val": "ANSI Z87.1 & CE EN 166"
      }
    ]
  },
  "safety-baju-pelindung": {
    "name": "Protective Coverall & Hazmat Suit",
    "tag": "Body Protection",
    "badge": "Protective Workwear",
    "shortDesc": "Flame-retardant cotton wearpacks and microporous disposable hazmat suits for spray painting, cleanrooms, and chemical handling.",
    "fullDesc": "Available in heavy-duty 100% cotton drill drill/twill workwear coveralls with Scotchlite reflective tape, as well as microporous breathable chemical barrier disposable coveralls.",
    "advantages": [
      "Triple-needle reinforced stitching on high-stress seams",
      "Microporous fabric offers Type 5/6 particle and liquid spray protection",
      "Elasticized hood, wrists, and ankles for tight barrier seal"
    ],
    "specs": [
      {
        "key": "Types",
        "val": "Reusable Cotton Twill Wearpack & Disposable Microporous Hazmat"
      }
    ]
  },
  "safety-harness": {
    "name": "Full Body Fall Arrest Safety Harness",
    "tag": "Height Work Safety",
    "badge": "Fall Arrest System",
    "shortDesc": "Heavy-duty full body safety harness with dorsal D-rings and shock-absorbing lanyards for high-altitude construction and roofing.",
    "fullDesc": "Engineered from high-tenacity polyester webbing rated over 22 kN. Includes forged dorsal D-rings, adjustable chest and leg buckles, and dual-lanyard shock absorber energy packs.",
    "advantages": [
      "Distributes fall impact forces safely across chest, thighs, and pelvis",
      "Tear-tape energy absorber limits arresting forces below 6 kN",
      "Certified to ANSI Z359.11 and EN 361 height safety standards"
    ],
    "specs": [
      {
        "key": "Webbing",
        "val": "45 mm High-Tenacity Polyester (Breaking load > 25 kN)"
      },
      {
        "key": "Includes",
        "val": "Double Lanyard with Big Scaffold Snap Hooks"
      }
    ]
  },
  "safety-sepatu": {
    "name": "Steel Toe Cap Safety Shoes",
    "tag": "Safety Footwear",
    "badge": "200J Steel Toe Cap",
    "shortDesc": "Genuine leather industrial safety shoes with 200J steel toe caps and oil/slip-resistant PU/rubber soles.",
    "fullDesc": "Heavy-duty industrial safety shoes crafted from genuine split/grain leather. Features impact-resistant 200-Joule steel toe caps, optional puncture-proof steel midsoles, and anti-static outsoles.",
    "advantages": [
      "Withstands 200 Joules of falling impact and 15 kN crushing pressure",
      "Shock-absorbing polyurethane midsole cushions heel during long shifts",
      "Slip-resistant outsole rated SRC on oily ceramic and steel floors"
    ],
    "specs": [
      {
        "key": "Upper",
        "val": "Genuine Leather with Breathable Mesh Lining"
      },
      {
        "key": "Standards",
        "val": "SNI 7079 / EN ISO 20345 S1P / S3"
      }
    ]
  },
  "safety-apar": {
    "name": "Fire Extinguisher (Dry Chemical & CO2)",
    "tag": "Fire Response",
    "badge": "Dry Chemical & CO2",
    "shortDesc": "Certified portable fire extinguishers for Class A, B, and C hazards in offices, factories, and commercial warehouses.",
    "fullDesc": "Available in ABC Dry Chemical Powder (1 kg - 9 kg) and Carbon Dioxide CO2 (2 kg - 5 kg). Fully inspected with pressure gauges, safety pins, and wall mounting brackets.",
    "advantages": [
      "Fast fire suppression on electrical, flammable liquid, and solid fires",
      "Clear pressure gauge indicator for instant readiness checks",
      "Refillable cylinder with official safety inspection certification"
    ],
    "specs": [
      {
        "key": "Types",
        "val": "ABC Dry Chemical Powder & Carbon Dioxide (CO2)"
      },
      {
        "key": "Capacities",
        "val": "1 kg, 3 kg, 6 kg, 9 kg, and Wheeled 25-50 kg"
      }
    ]
  },
  "safety-cone": {
    "name": "Reflective Traffic Safety Cones",
    "tag": "Traffic Control",
    "badge": "Reflective Strip",
    "shortDesc": "Flexible fluorescent orange PVC traffic cones with high-intensity reflective collars for warehouse traffic and loading zones.",
    "fullDesc": "Molded from virgin PVC that bounces back into shape even after being run over by vehicles. Weighted black recycled rubber bases ensure stability in windy conditions.",
    "advantages": [
      "Extremely durable flexible PVC resists cracking and vehicle crush",
      "Wide high-intensity prismatic reflective collars illuminate brightly at night",
      "Heavy weighted base prevents tipping from wind or moving trucks"
    ],
    "specs": [
      {
        "key": "Heights Available",
        "val": "70 cm (28 inch) & 90 cm (36 inch)"
      },
      {
        "key": "Weight",
        "val": "2.5 kg - 4.5 kg Weighted Base"
      }
    ]
  },
  "chem-pelumas-anti-karat": {
    "name": "Anti-Rust Penetrating Oil & Lubricant",
    "tag": "Machine Maintenance",
    "badge": "Lubricant & Anti-Rust",
    "shortDesc": "Multipurpose penetrating spray that loosens seized bolts, displaces moisture, stops squeaks, and prevents metal corrosion.",
    "fullDesc": "Fast-acting penetrating formulation engineered for maintenance, repair, and operations (MRO). Penetrates microscopic crevices to dissolve rust, displace moisture from electronics, and leave a protective corrosion-inhibiting film.",
    "advantages": [
      "Quickly frees seized, rusted bolts and frozen mechanical components",
      "Displaces moisture and eliminates electrical short circuits",
      "Leaves an enduring micro-coating protecting against future oxidation"
    ],
    "specs": [
      {
        "key": "Packaging",
        "val": "Aerosol Can (300 ml, 400 ml, 500 ml) & 5L Canister"
      }
    ]
  },
  "chem-pembersih-lantai": {
    "name": "Heavy-Duty Floor Cleaner Concentrate",
    "tag": "Facility Sanitation",
    "badge": "Fragrant Concentrate",
    "shortDesc": "Concentrated industrial floor cleaner with degreasing power and fresh fragrance for factory corridors, tiles, and offices.",
    "fullDesc": "High-yield neutral floor cleaner formulated for mop buckets and automatic floor scrubbers. Cuts through grease, rubber tire marks, and daily soil without stripping floor waxes.",
    "advantages": [
      "Economical high dilution ratio (1:50 up to 1:100 with water)",
      "Non-corrosive, safe for epoxy, ceramic, granite, and polished concrete",
      "Leaves floors streak-free with a long-lasting clean aroma"
    ],
    "specs": [
      {
        "key": "Packaging",
        "val": "Jerrycan 4 Liters & 20 Liters"
      },
      {
        "key": "Fragrances",
        "val": "Lavender, Pine, Lemon, Apple"
      }
    ]
  },
  "chem-pembersih-kaca": {
    "name": "Streak-Free Glass Cleaner",
    "tag": "Streak-Free Glass",
    "badge": "Anti-Streak",
    "shortDesc": "Quick-drying, streak-free glass cleaner for commercial glass partitions, windows, mirrors, and display cases.",
    "fullDesc": "Alcohol-enhanced cleaning formulation that dissolves fingerprints, dust, and oily grime from glass surfaces instantly. Dries quickly without hazy film or lint residue.",
    "advantages": [
      "Zero streak formulation leaves glass sparkling crystal-clear",
      "Anti-static ingredient repels ambient dust accumulation",
      "Safe for automotive tint films, acrylic, and mirror surfaces"
    ],
    "specs": [
      {
        "key": "Packaging",
        "val": "Trigger Spray 500 ml & Refill Jerrycan 4L / 20L"
      }
    ]
  },
  "chem-pembersih-piring": {
    "name": "Commercial Dishwashing Liquid",
    "tag": "Pantry & Canteen",
    "badge": "Grease Cutting",
    "shortDesc": "High-foaming commercial dishwashing liquid formulated to cut heavy grease and oil in company canteens and pantries.",
    "fullDesc": "Formulated with powerful active surfactants and natural lime extract to cut through cooking grease, oily food residues, and food odors rapidly. Gentle on kitchen staff hands.",
    "advantages": [
      "Ultra-effective grease-cutting formulation works even in cold water",
      "Rinses clean with zero soapy film residue",
      "Pleasant citrus fragrance eliminates stubborn food smells"
    ],
    "specs": [
      {
        "key": "Packaging",
        "val": "4 Liter Jerrycan & 20 Liter Commercial Drum"
      }
    ]
  },
  "chem-sabun-cuci-tangan": {
    "name": "Antibacterial Liquid Hand Soap",
    "tag": "Employee Hygiene",
    "badge": "Antibacterial & Soft",
    "shortDesc": "Gentle antibacterial liquid hand soap with skin moisturizers for office restrooms, production floors, and clinics.",
    "fullDesc": "Certified antibacterial hand wash that eliminates 99.9% of bacteria and germs. Contains plant-based moisturizers and Vitamin E to prevent skin dryness even with frequent washing.",
    "advantages": [
      "Kills 99.9% of disease-causing bacteria and germs",
      "pH-balanced formulation enriched with skin conditioners",
      "Compatible with all manual and touchless wall soap dispensers"
    ],
    "specs": [
      {
        "key": "Packaging",
        "val": "4 Liter Jerrycan (Refill pack for bulk dispensers)"
      }
    ]
  },
  "chem-pengharum-ruangan": {
    "name": "Automatic & Spray Air Freshener",
    "tag": "Office Freshness",
    "badge": "Automatic & Spray",
    "shortDesc": "Continuous automatic aerosol dispenser refills and manual room freshener sprays for conference rooms and executive restrooms.",
    "fullDesc": "Formulated with premium aromatic perfume essences that neutralize stale odors and deliver a refreshing ambient scent for up to 60 days per aerosol can.",
    "advantages": [
      "Dry-spray mist technology prevents wet droplets on office furniture",
      "Universal aerosol can valve fits all standard automatic dispensers",
      "Assorted premium scents: Coffee, Lemon, Vanilla, Lavender, Green Tea"
    ],
    "specs": [
      {
        "key": "Packaging",
        "val": "Aerosol Refill 300 ml & Hand Spray 400 ml"
      }
    ]
  },
  "chem-karbol": {
    "name": "Pine Antiseptic Disinfectant Cleaner (Karbol)",
    "tag": "Restroom Disinfection",
    "badge": "Natural Pine Oil",
    "shortDesc": "Natural pine oil antiseptic disinfectant cleaner for toilet floors, drains, and industrial waste handling areas.",
    "fullDesc": "Heavy-duty disinfectant formulated with genuine pine oil. Neutralizes strong odors, eliminates mold, and disinfects restroom floors and garbage staging areas.",
    "advantages": [
      "Potent germicidal and deodorizing action using natural pine oil",
      "Eliminates stubborn restroom odors at their bacterial source",
      "Economical high-potency concentrate for daily commercial sanitation"
    ],
    "specs": [
      {
        "key": "Packaging",
        "val": "Jerrycan 4 Liters & 20 Liters"
      }
    ]
  },
  "chem-handsanitizer": {
    "name": "70% Alcohol Hand Sanitizer (Liquid & Gel)",
    "tag": "Instant Sanitizing",
    "badge": "70% Alcohol",
    "shortDesc": "Hospital-grade 70% ethyl alcohol hand sanitizer in gel and liquid spray for reception desks, clinics, and building lobbies.",
    "fullDesc": "Rapid-drying hand sanitizer formulated with 70% food-grade alcohol according to WHO formulations. Destroys 99.99% of germs in seconds without water or towel drying.",
    "advantages": [
      "Instant bactericidal and virucidal efficacy within 15 seconds",
      "Non-sticky formulation leaves hands feeling refreshed and clean",
      "Formulated with aloe vera to keep hands hydrated"
    ],
    "specs": [
      {
        "key": "Types",
        "val": "Sanitizer Gel & Liquid Spray"
      },
      {
        "key": "Sizes",
        "val": "Pump Bottle 500 ml & Refill Jerrycan 4L"
      }
    ]
  },
  "chem-disinfectant": {
    "name": "Industrial Facility Disinfectant Concentrate",
    "tag": "Facility Sterilization",
    "badge": "Hygienic Surface",
    "shortDesc": "Quaternary ammonium compound (QAC) disinfectant concentrate for misting machines, door handles, and cafeteria surfaces.",
    "fullDesc": "Broad-spectrum disinfectant cleaner designed for institutional and industrial surface sanitization. Destroys bacteria, viruses, and fungi on non-porous environmental surfaces.",
    "advantages": [
      "Broad-spectrum antimicrobial protection against pathogens",
      "Non-corrosive, bleach-free, and safe on stainless steel and desks",
      "Suitable for cold fogging mist machines and surface spraying"
    ],
    "specs": [
      {
        "key": "Active Ingredient",
        "val": "Quaternary Ammonium Compound (QAC / BKC)"
      },
      {
        "key": "Packaging",
        "val": "Jerrycan 4 Liters & 20 Liters"
      }
    ]
  },
  "chem-detergen-cair": {
    "name": "Commercial Liquid Laundry Detergent",
    "tag": "Industrial Laundry",
    "badge": "Fabric Cleaner",
    "shortDesc": "Low-suds high-efficiency liquid detergent for industrial washing machines, company uniforms, and hotel linens.",
    "fullDesc": "Enzyme-boosted liquid detergent formulated for commercial front-load and top-load laundry machines. Penetrates textile fibers to remove ground-in industrial oils and perspiration stains.",
    "advantages": [
      "Advanced multi-enzyme formula attacks oil and grease effectively",
      "Low-foaming chemistry protects commercial washing machine pumps",
      "Brightens white garments and protects colored uniforms from fading"
    ],
    "specs": [
      {
        "key": "Packaging",
        "val": "Jerrycan 4 Liters & 20 Liters"
      }
    ]
  },
  "chem-parfum-laundry": {
    "name": "Long-Lasting Concentrated Laundry Perfume",
    "tag": "Fabric Fragrance",
    "badge": "Long Lasting Scent",
    "shortDesc": "Concentrated fabric perfume spray applied before packing uniforms to lock in long-lasting freshness.",
    "fullDesc": "Pure micro-encapsulated fragrance formulated in a fast-evaporating solvent. Leaves uniforms, sheets, and curtains smelling freshly laundered for weeks.",
    "advantages": [
      "Fast drying, zero water spots or staining on dry fabrics",
      "Micro-capsule fragrance technology activates on movement",
      "Popular scents: Akasia, Sakura, Ocean Fresh, Snappy, Philux"
    ],
    "specs": [
      {
        "key": "Packaging",
        "val": "Trigger Spray 1 Liter & Jerrycan 4 Liters"
      }
    ]
  },
  "chem-softener": {
    "name": "Fabric Softener & Ironing Aid",
    "tag": "Uniform Softening",
    "badge": "Fabric Softener",
    "shortDesc": "Fabric softener and anti-static conditioner that softens garments and eases uniform ironing.",
    "fullDesc": "Cationic textile softening emulsion that coats fabric fibers, reducing friction during wear and ironing while neutralizing static electricity cling.",
    "advantages": [
      "Softens stiff cotton, polyester, and twill uniform fabrics",
      "Reduces fabric wrinkles and accelerates ironing productivity",
      "Infused with pleasant fragrance that complements laundry detergents"
    ],
    "specs": [
      {
        "key": "Packaging",
        "val": "Jerrycan 4 Liters & 20 Liters"
      }
    ]
  },
  "cons-amplas": {
    "name": "Abrasive Sandpaper (Roll & Sheet)",
    "tag": "Material Finishing",
    "badge": "Coarse - Fine Grits",
    "shortDesc": "Waterproof silicon carbide and aluminum oxide sandpaper for metal polishing, automotive bodywork, and wood finishing.",
    "fullDesc": "Industrial waterproof sandpaper engineered with uniform abrasive grain distribution and flexible backing paper. Suitable for both wet sanding and dry mechanical sanding.",
    "advantages": [
      "Waterproof latex backing paper resists curling and tearing in water",
      "Sharp silicon carbide grain cuts quickly without loading",
      "Available across a full grit spectrum: Grit 60 to Grit 2000"
    ],
    "specs": [
      {
        "key": "Grit Range",
        "val": "P60, P80, P120, P240, P400, P800, P1000, P2000"
      },
      {
        "key": "Format",
        "val": "Standard Sheets (9x11 inch) & Continuous Rolls"
      }
    ]
  },
  "cons-cutting-tools": {
    "name": "Abrasive Cutting Wheels & Grinding Discs",
    "tag": "Metal Fabrication",
    "badge": "Metal Cutting Discs",
    "shortDesc": "Reinforced resin-bonded cutting discs and grinding wheels for angle grinders cutting steel, rebar, and stainless steel.",
    "fullDesc": "Double fiberglass mesh reinforced cutting discs for 4-inch, 7-inch, and 14-inch angle grinders. Delivers fast, burr-free cuts through metal profiles, stainless pipe, and rebar.",
    "advantages": [
      "Double reinforced fiberglass mesh ensures high operator safety",
      "Fast cutting speed with minimal material loss and low heat generation",
      "Suitable for stainless steel (Inox), carbon steel, and alloys"
    ],
    "specs": [
      {
        "key": "Diameter",
        "val": "4 Inch (105x1.2x16mm) & 14 Inch Cut-off Wheel"
      },
      {
        "key": "Max RPM",
        "val": "Up to 15,300 RPM (4 Inch)"
      }
    ]
  },
  "cons-kain-majun": {
    "name": "Industrial Cotton Rags (Kain Majun)",
    "tag": "Workshop & Machinery",
    "badge": "Oil Absorption",
    "shortDesc": "Recycled cotton wiping rags for wiping industrial oil, grease, machine components, and workshop tools.",
    "fullDesc": "100% absorbent cotton wiping rags sorted, cleaned, and stitched. Ideal for automotive workshops, printing presses, and manufacturing maintenance.",
    "advantages": [
      "Exceptional oil, ink, water, and grease absorbency",
      "Soft cotton will not scratch polished metal tooling",
      "Cost-effective bulk packaging in 10 kg and 25 kg sacks"
    ],
    "specs": [
      {
        "key": "Types",
        "val": "Stitched Colored Majun, White Cotton Majun, Seamless"
      },
      {
        "key": "Packaging",
        "val": "Bales of 10 kg, 25 kg, 50 kg"
      }
    ]
  },
  "cons-microfiber": {
    "name": "Premium Microfiber Cleaning Cloths",
    "tag": "Precision Cleaning",
    "badge": "Scratch Free",
    "shortDesc": "Ultra-soft, lint-free split microfiber cloths for scratch-free detailing, glass cleaning, and electronics dusting.",
    "fullDesc": "Engineered with an 80/20 polyester-polyamide split-fiber blend that traps dust, fingerprints, and oils like a magnet. Can be used dry for dusting or damp for chemical-free cleaning.",
    "advantages": [
      "100% lint-free, swirl-free, and scratch-free on all surfaces",
      "Absorbs up to 7-8 times its weight in water",
      "Machine washable and reusable up to 500+ times"
    ],
    "specs": [
      {
        "key": "Size & Weight",
        "val": "40 x 40 cm (300 - 350 GSM)"
      },
      {
        "key": "Colors",
        "val": "Blue, Yellow, Green, Grey"
      }
    ]
  },
  "cons-kanebo": {
    "name": "Synthetic Chamois (Kanebo PVA)",
    "tag": "Quick Drying",
    "badge": "Super Absorbent",
    "shortDesc": "Super-absorbent PVA synthetic chamois for fast streak-free drying of company fleet vehicles, glass, and countertops.",
    "fullDesc": "Manufactured from durable PVA polymer reinforced with an inner mesh layer. Glides effortlessly across wet surfaces to dry them instantly without leaving water spots.",
    "advantages": [
      "Instantaneous capillary water absorption without dripping",
      "Reinforced inner mesh prevents tearing during wringing",
      "Resistant to mold, mildew, and common cleaning chemicals"
    ],
    "specs": [
      {
        "key": "Dimensions",
        "val": "43 x 32 cm x 2 mm thickness"
      },
      {
        "key": "Storage",
        "val": "Includes protective plastic canister"
      }
    ]
  },
  "cons-sapu": {
    "name": "Indoor Cleaning Floor Broom",
    "tag": "Room Cleaning",
    "badge": "Nylon & Natural Fiber",
    "shortDesc": "Durable indoor nylon and natural palm brooms with ergonomic lightweight handles for sweeping offices and lobbies.",
    "fullDesc": "Features dense, flagged bristle tips that sweep up fine dust and hair efficiently without scattering particles. Lightweight steel handle with hanging cap.",
    "advantages": [
      "Dense bristle cluster gathers fine dust in a single sweep",
      "Ergonomic handle height reduces back strain during sweeping",
      "Sturdy threaded socket prevents broom head from loosening"
    ],
    "specs": [
      {
        "key": "Materials",
        "val": "Flagged Nylon Bristles & Natural Ijuk / Palm Fiber"
      },
      {
        "key": "Handle Length",
        "val": "110 cm - 120 cm"
      }
    ]
  },
  "cons-kain-pel": {
    "name": "Heavy-Duty Cotton Floor Mop",
    "tag": "Floor Cleaning",
    "badge": "Thick Cotton",
    "shortDesc": "Super-absorbent looped cotton yarn mop heads with heavy-duty handles for scrubbing industrial and office floors.",
    "fullDesc": "Constructed with premium twisted cotton yarn offering tremendous absorption and cleaning power. Features a quick-release clamp for easy mop head replacement and washing.",
    "advantages": [
      "High absorption capacity picks up large liquid spills rapidly",
      "Looped-end yarn design minimizes tangles and linting",
      "Sturdy metal or composite handle with universal clamping mechanism"
    ],
    "specs": [
      {
        "key": "Mop Yarn Weight",
        "val": "300 g - 400 g Pure Cotton"
      },
      {
        "key": "Handle Type",
        "val": "Aluminium / Coated Steel Handle with Quick Clamp"
      }
    ]
  },
  "cons-sapu-lidi": {
    "name": "Outdoor & Warehouse Palm Leaf Broom",
    "tag": "Outdoor Cleaning",
    "badge": "Selected Palm Rib",
    "shortDesc": "Heavy-duty outdoor palm rib broom for clearing dry leaves, gravel, and coarse debris in parking lots and warehouse yards.",
    "fullDesc": "Handcrafted from selected stiff palm leaf ribs bound tightly with heavy nylon wire. Ideal for rough outdoor asphalt, interlocking pavers, and factory yards.",
    "advantages": [
      "Stiff palm ribs sweep heavy gravel, sand, and wet leaves easily",
      "Tightly bound with reinforced wire to prevent loose ribs",
      "Long-lasting durability in demanding outdoor weather"
    ],
    "specs": [
      {
        "key": "Material",
        "val": "Selected Coconut / Palm Leaf Ribs"
      },
      {
        "key": "Variants",
        "val": "Handheld Short & Long Wooden Handle"
      }
    ]
  },
  "cons-wiper": {
    "name": "Floor & Window Rubber Squeegee",
    "tag": "Water Squeegee",
    "badge": "Flexible Rubber Blade",
    "shortDesc": "Flexible dual-rubber floor squeegees and window wipers for pushing water off wet tiles, loading docks, and glass.",
    "fullDesc": "Features flexible natural rubber blades mounted in galvanized steel frames. Rapidly pushes standing wash water toward drains, leaving floors dry and hazard-free.",
    "advantages": [
      "Flexible rubber blade hugs uneven floor contours for 100% water clearance",
      "Rust-resistant galvanized steel channel",
      "Dramatically accelerates floor drying time, preventing slips and falls"
    ],
    "specs": [
      {
        "key": "Sizes",
        "val": "Floor Squeegee (45 cm, 55 cm, 75 cm) & Window Squeegee (35 cm)"
      }
    ]
  },
  "print-banner-tarik": {
    "name": "Aluminium Roll-Up Pull Banner Stand",
    "tag": "Corporate Promotion",
    "badge": "Portable Display",
    "shortDesc": "Portable roll-up pull banner stand with high-resolution synthetic film print and padded carry bag for exhibitions.",
    "fullDesc": "Premium aluminum cassette pull-up banner stand. Includes high-resolution photographic printing on anti-curl synthetic/albatros film with matte or gloss lamination.",
    "advantages": [
      "Sets up in 30 seconds with internal spring-retraction mechanism",
      "High-resolution photographic print on tear-proof synthetic film",
      "Includes protective padded canvas carry bag for easy transport"
    ],
    "specs": [
      {
        "key": "Dimensions",
        "val": "60 x 160 cm, 80 x 200 cm, 85 x 200 cm"
      },
      {
        "key": "Material",
        "val": "Anodized Aluminium Cassette & Anti-Curl Albatros Film"
      }
    ]
  },
  "print-banner-x": {
    "name": "Lightweight X-Banner Display Stand",
    "tag": "Lightweight Display",
    "badge": "X-Frame Tripod",
    "shortDesc": "Cost-effective, lightweight fiber-framed X-banner stand for indoor showrooms, seminar lobbies, and product displays.",
    "fullDesc": "Lightweight, economical promotional display system utilizing flexible fiberglass poles and corner grommets. Simple to change banner graphics whenever new campaigns launch.",
    "advantages": [
      "Highly affordable promotional medium for wide-scale deployment",
      "Ultra-lightweight and compact when disassembled",
      "Graphics can be swapped out easily with standard eyelets"
    ],
    "specs": [
      {
        "key": "Sizes",
        "val": "60 x 160 cm & 80 x 180 cm"
      },
      {
        "key": "Frame Material",
        "val": "Carbon Fiber Rods & Aluminium Hub"
      }
    ]
  },
  "print-spanduk": {
    "name": "High-Resolution Outdoor Flexi Banner",
    "tag": "Weatherproof Outdoor",
    "badge": "High-Res Flexi",
    "shortDesc": "Weatherproof flexi vinyl outdoor banners and billboards printed with UV and solvent-resistant inks.",
    "fullDesc": "Printed on heavy flexi vinyl (280 gsm - 440 gsm) using industrial solvent/UV printing technology. Guaranteed vibrant, fade-resistant colors in direct sunlight and torrential rain.",
    "advantages": [
      "Weatherproof, waterproof, and UV-resistant outdoor durability",
      "Vibrant high-resolution colors printed up to 1440 DPI",
      "Finished with folded hems, reinforced seam tape, and metal eyelets"
    ],
    "specs": [
      {
        "key": "Material",
        "val": "Frontlit Flexi Vinyl (280 gsm, 340 gsm, 440 gsm)"
      },
      {
        "key": "Finishing",
        "val": "Corner Eyelets, Pole Pockets, High-Frequency Seaming"
      }
    ]
  },
  "print-kartu-nama": {
    "name": "Premium Corporate Business Cards",
    "tag": "Corporate Identity",
    "badge": "Exclusive Art Carton",
    "shortDesc": "High-end corporate business cards printed on 260-310 gsm art carton with matte/gloss lamination or spot UV accents.",
    "fullDesc": "Elevate your enterprise reputation with precision-cut business cards. Printed on 310 gsm cardstock with double-sided matte velvet lamination, optional rounded corners, and spot UV embossed logos.",
    "advantages": [
      "Stiff 260 - 310 gsm premium art cardstock",
      "Double-sided protective matte or glossy lamination",
      "Packaged in clear acrylic boxes (100 cards per box)"
    ],
    "specs": [
      {
        "key": "Standard Size",
        "val": "90 x 55 mm & 85 x 55 mm"
      },
      {
        "key": "Finishing",
        "val": "Doft/Matte Lamination, Gloss, Spot UV, Foil Gold"
      }
    ]
  },
  "print-stiker-custom": {
    "name": "Custom Die-Cut Vinyl & Label Stickers",
    "tag": "Packaging Branding",
    "badge": "Vinyl & Chromo",
    "shortDesc": "Waterproof vinyl and chromo stickers with custom die-cutting for product packaging labels, asset tags, and branding.",
    "fullDesc": "Custom printed stickers available in waterproof white vinyl, clear transparent vinyl, and economical chromo paper. Precision kiss-cut or die-cut to any custom shape or contour.",
    "advantages": [
      "Waterproof, oil-proof, and tear-resistant vinyl materials",
      "High-precision laser kiss-cut for effortless peeling and application",
      "Strong permanent adhesive bonds firmly to plastic, glass, and metal"
    ],
    "specs": [
      {
        "key": "Materials",
        "val": "Vinyl White, Vinyl Transparant, Chromo Paper, Kraft"
      },
      {
        "key": "Cut Types",
        "val": "Kiss-Cut (Sheet) & Die-Cut (Individual Shapes)"
      }
    ]
  }
};

// Expose dictionaries to global window
window.KMS_I18N = KMS_I18N;
window.KMS_HERO_I18N = KMS_HERO_I18N;
window.KMS_SOLUTIONS_I18N = KMS_SOLUTIONS_I18N;
window.KMS_STATS_I18N = KMS_STATS_I18N;
window.KMS_WHY_ITEMS_I18N = KMS_WHY_ITEMS_I18N;
window.KMS_CATEGORIES_I18N = KMS_CATEGORIES_I18N;
window.KMS_GALLERY_I18N = KMS_GALLERY_I18N;
window.KMS_SUBCAT_I18N = KMS_SUBCAT_I18N;
window.KMS_TAGS_EN = KMS_TAGS_EN;
window.KMS_BADGES_EN = KMS_BADGES_EN;
window.KMS_PRODUCTS_EN = KMS_PRODUCTS_EN;

/**
 * Apply Language Across the Entire DOM
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

  // Re-render home categories grid with bilingual support
  if (typeof window.initHomeCategories === 'function') {
    window.initHomeCategories();
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

  // 10. Subpage Banners & Breadcrumbs
  const setBanner = (viewId, title, sub) => {
    const view = document.getElementById(viewId);
    if (!view) return;
    const banner = view.querySelector('.subpage-banner');
    if (!banner) return;
    const h1 = banner.querySelector('h1');
    if (h1) h1.textContent = title;
    const p = banner.querySelector('p');
    if (p) p.textContent = sub;
  };
  setBanner('view-about', t.aboutBannerTitle, t.aboutBannerSubtitle);
  setBanner('view-products', t.prodBannerTitle, t.prodBannerSubtitle);
  setBanner('view-clients', t.clientBannerTitle, t.clientBannerSubtitle);
  setBanner('view-solutions', t.solutionBannerTitle, t.solutionBannerSubtitle);
  setBanner('view-gallery', t.galleryBannerTitle, t.galleryBannerSubtitle);
  setBanner('view-contact', t.contactBannerTitle, t.contactBannerSubtitle);

  // All breadcrumbs: "Beranda / ..." -> "Home / ..."
  document.querySelectorAll('a[onclick*="navigateTo(\'home\')"]').forEach(el => {
    el.textContent = isEn ? 'Home' : 'Beranda';
  });
  document.querySelectorAll('.breadcrumb-container a[onclick*="navigateTo(\'products\')"]').forEach(el => {
    el.textContent = isEn ? 'Products' : 'Produk';
  });

  const updateSubpageCrumb = (viewId, text) => {
    const view = document.getElementById(viewId);
    if (!view) return;
    const crumbSpan = view.querySelector('.subpage-banner .text-white.font-medium');
    if (crumbSpan) crumbSpan.textContent = text;
  };
  updateSubpageCrumb('view-about', isEn ? 'About Us' : 'Tentang Kami');
  updateSubpageCrumb('view-products', isEn ? 'Products' : 'Produk');
  updateSubpageCrumb('view-clients', isEn ? 'Our Clients' : 'Klien Kami');
  updateSubpageCrumb('view-solutions', isEn ? 'Solutions & Why Kanaya' : 'Solusi & Mengapa Kanaya');
  updateSubpageCrumb('view-gallery', isEn ? 'Documentation' : 'Dokumentasi');
  updateSubpageCrumb('view-contact', isEn ? 'Contact Us' : 'Kontak Kami');

  // 11. About Us View
  const aboutH2s = document.querySelectorAll('#view-about h2.font-heading');
  if (aboutH2s.length >= 2) {
    aboutH2s[0].textContent = t.aboutProfileHeading;
    aboutH2s[1].textContent = t.aboutVisionMissionHeading;
  }
  const visionBox = document.querySelector('#view-about .bg-gradient-to-br');
  if (visionBox) {
    const h3 = visionBox.querySelector('h3');
    if (h3) h3.textContent = t.aboutVisionTitle;
    const p = visionBox.querySelector('p');
    if (p) p.textContent = t.aboutVisionText;
    const spanCommit = visionBox.querySelector('.font-semibold');
    if (spanCommit) spanCommit.textContent = t.aboutVisionCommitment;
  }
  const missionBox = document.querySelector('#view-about .bg-white.p-8');
  if (missionBox) {
    const h3 = missionBox.querySelector('h3');
    if (h3) h3.textContent = t.aboutMissionTitle;
    const lis = missionBox.querySelectorAll('li span');
    t.aboutMissions.forEach((misText, idx) => {
      if (lis[idx]) lis[idx].textContent = misText;
    });
  }

  // About 4 Guarantees Strip
  const gStrip = document.getElementById('about-guarantees-strip');
  if (gStrip) {
    const items = gStrip.children;
    if (items.length >= 4) {
      const g0Title = items[0].querySelector('.text-sm');
      const g0Sub = items[0].querySelector('.text-xs');
      if (g0Title) g0Title.textContent = t.guaranteeTax;
      if (g0Sub) g0Sub.textContent = t.guaranteeTaxSub;

      const g1Title = items[1].querySelector('.text-sm');
      const g1Sub = items[1].querySelector('.text-xs');
      if (g1Title) g1Title.textContent = t.guaranteeResponse;
      if (g1Sub) g1Sub.textContent = t.guaranteeResponseSub;

      const g2Title = items[2].querySelector('.text-sm');
      const g2Sub = items[2].querySelector('.text-xs');
      if (g2Title) g2Title.textContent = t.guaranteeQuality;
      if (g2Sub) g2Sub.textContent = t.guaranteeQualitySub;

      const g3Title = items[3].querySelector('.text-sm');
      const g3Sub = items[3].querySelector('.text-xs');
      if (g3Title) g3Title.textContent = t.guaranteeDelivery;
      if (g3Sub) g3Sub.textContent = t.guaranteeDeliverySub;
    }
  }

  // Why Kanaya in About Us
  const whyBadge = document.getElementById('about-why-badge');
  if (whyBadge) whyBadge.textContent = t.aboutWhyBadge;
  const whyTitle = document.getElementById('about-why-title');
  if (whyTitle) whyTitle.textContent = t.aboutWhyTitle;
  const whySub = document.getElementById('about-why-subtitle');
  if (whySub) whySub.textContent = t.aboutWhySubtitle;

  if (typeof window.renderWhyKanayaSection === 'function') {
    window.renderWhyKanayaSection();
  }

  // 12. Products View UI Texts
  const prodSearch = document.getElementById('catalog-search') || document.getElementById('product-search-input');
  if (prodSearch) prodSearch.placeholder = isEn ? "Search product name or specifications..." : "Cari nama atau spesifikasi...";
  
  const searchLabel = document.querySelector('label[for="catalog-search"]');
  if (searchLabel) searchLabel.textContent = isEn ? "Search Products" : "Cari Produk";

  const catHead = document.querySelector('#view-products h3') || document.querySelector('#view-products h3.font-heading');
  if (catHead) catHead.textContent = isEn ? "Product Categories" : "Kategori Produk";

  // Re-render sidebar category filter list with localized names
  if (typeof window.initCatalogFilters === 'function') {
    window.initCatalogFilters();
  }

  // Active category title in products view
  const activeCatTitle = document.getElementById('active-category-title');
  if (activeCatTitle) {
    if (typeof currentCategory === 'undefined' || currentCategory === 'all') {
      activeCatTitle.textContent = isEn ? 'All Categories' : 'Semua Kategori';
    } else {
      const cat = (window.KMS_DATA && window.KMS_DATA.categories) ? window.KMS_DATA.categories.find(c => c.id === currentCategory) : null;
      let catTitle = cat ? cat.name : (isEn ? 'Category' : 'Kategori');
      if (isEn && cat && window.KMS_CATEGORIES_I18N && window.KMS_CATEGORIES_I18N.en && window.KMS_CATEGORIES_I18N.en[cat.id]) {
        catTitle = window.KMS_CATEGORIES_I18N.en[cat.id].title;
      }
      activeCatTitle.textContent = catTitle;
    }
  }

  // Product count display text
  const countContainer = document.querySelector('#view-products .flex.items-center.justify-between.mb-4 > .text-sm.text-slate-600');
  const countElem = document.getElementById('product-count-display');
  const countVal = countElem ? countElem.textContent : ((window.KMS_DATA && window.KMS_DATA.products) ? window.KMS_DATA.products.length : 71);
  if (countContainer) {
    countContainer.innerHTML = isEn 
      ? `Showing <span id="product-count-display" class="font-bold text-corporate">${countVal}</span> products`
      : `Menampilkan <span id="product-count-display" class="font-bold text-corporate">${countVal}</span> produk`;
  }

  // Custom Need Card (left sidebar)
  const custNeedCard = document.querySelector('#view-products .bg-corporate-dark');
  if (custNeedCard) {
    const h4 = custNeedCard.querySelector('h4');
    if (h4) h4.textContent = isEn ? "Need Custom Specifications?" : "Butuh Spesifikasi Khusus?";
    const p = custNeedCard.querySelector('p');
    if (p) p.textContent = isEn 
      ? "We are ready to assist procurement with custom dimensions, volumes, or specialized brands according to your company SOP."
      : "Kami siap membantu pengadaan produk dengan ukuran, volume, atau merek spesifik sesuai SOP perusahaan Anda.";
    const btn = custNeedCard.querySelector('button');
    if (btn) btn.textContent = isEn ? "Submit Procurement Inquiry" : "Ajukan Inquiry Pengadaan";
  }

  // Missing product banner (bottom of catalog)
  const missingBanner = document.querySelector('#view-products .mt-12.bg-amber-50');
  if (missingBanner) {
    const h4 = missingBanner.querySelector('h4');
    if (h4) h4.textContent = isEn ? "Can't Find the Product You Need?" : "Tidak Menemukan Produk yang Anda Butuhkan?";
    const p = missingBanner.querySelector('p');
    if (p) p.textContent = isEn 
      ? "Submit your product specifications directly to our procurement team for an official quote."
      : "Ajukan spesifikasi produk langsung kepada tim pengadaan kami untuk penawaran resmi.";
    const btnReq = missingBanner.querySelector('button[onclick*="openCustomProductModal"]');
    if (btnReq) btnReq.textContent = isEn ? "Request Custom Product" : "Request Produk Khusus";
    const linkSales = missingBanner.querySelector('a[href="#contact"] span, a[href="#contact"]');
    if (linkSales) linkSales.textContent = isEn ? "Contact Sales Team →" : "Hubungi Tim Sales →";
  }

  // Re-render products grid with all 71 translated products
  if (typeof window.renderProducts === 'function') {
    window.renderProducts();
  }

  // 13. Clients View UI Texts
  const clientH2 = document.querySelector('#view-clients h2.font-heading');
  if (clientH2) clientH2.textContent = t.clientHeading;
  const clientSub = document.querySelector('#view-clients p.text-slate-600');
  if (clientSub) clientSub.textContent = t.clientSubtitle;
  const clientTrustH4 = document.querySelector('#view-clients .bg-white h4');
  if (clientTrustH4) clientTrustH4.textContent = t.clientTrustNoteTitle;
  const clientTrustP = document.querySelector('#view-clients .bg-white p.text-slate-600');
  if (clientTrustP) clientTrustP.textContent = t.clientTrustNoteDesc;

  // 14. Solutions View
  const solIntro = document.querySelector('#view-solutions .max-w-3xl p');
  if (solIntro) solIntro.textContent = t.solutionIntro;
  const whyUsSection = document.getElementById('why-us');
  if (whyUsSection) {
    const badge = whyUsSection.querySelector('.inline-flex, span.rounded-full');
    if (badge) badge.textContent = t.whyKanayaBadge;
    const h2 = whyUsSection.querySelector('h2');
    if (h2) h2.textContent = t.whyKanayaHeading;
    const p = whyUsSection.querySelector('p.text-slate-300');
    if (p) p.textContent = t.whyKanayaDesc;
  }

  if (typeof window.renderSolutionsGrid === 'function') {
    window.renderSolutionsGrid();
  }
  if (typeof window.renderStatsBar === 'function') {
    window.renderStatsBar();
  }

  // 15. Gallery View
  const galH2 = document.querySelector('#view-gallery h2.font-heading');
  if (galH2) galH2.textContent = t.galleryHeading;
  const galP = document.querySelector('#view-gallery p.text-slate-600');
  if (galP) galP.textContent = t.galleryDesc;

  if (typeof window.initGalleryGrid === 'function') {
    window.initGalleryGrid();
  }

  // 16. Contact View UI Texts
  const contactBadge = document.querySelector('#view-contact .text-amber-600.font-semibold');
  if (contactBadge) contactBadge.textContent = t.contactBadge;
  const contactTitle = document.querySelector('#view-contact h2.font-heading');
  if (contactTitle) contactTitle.innerHTML = t.contactTitle;
  const contactSub = document.querySelector('#view-contact p.text-slate-600');
  if (contactSub) contactSub.textContent = t.contactSubtitle;

  const contactCards = document.querySelectorAll('#view-contact .space-y-4 .bg-white');
  if (contactCards.length >= 3) {
    const c0H4 = contactCards[0].querySelector('h4');
    if (c0H4) c0H4.textContent = t.contactCardWa;
    const c0Link = contactCards[0].querySelector('span.text-xs');
    if (c0Link) c0Link.textContent = t.contactCardWaLink;

    const c1H4 = contactCards[1].querySelector('h4');
    if (c1H4) c1H4.textContent = t.contactCardEmail;
    const c1Link = contactCards[1].querySelector('span.text-xs');
    if (c1Link) c1Link.textContent = t.contactCardEmailLink;

    const c2H4 = contactCards[2].querySelector('h4');
    if (c2H4) c2H4.textContent = t.contactCardAddress;
    const c2Link = contactCards[2].querySelector('span.text-xs');
    if (c2Link) c2Link.textContent = t.contactCardAddressLink;
  }

  const socTitle = document.querySelector('#view-contact .mt-8 h4');
  if (socTitle) socTitle.textContent = t.contactSocialTitle;
  const socSub = document.querySelector('#view-contact .mt-8 p');
  if (socSub) socSub.textContent = t.contactSocialSubtitle;

  // 17. Contact Form
  const formH3 = document.querySelector('#contact-form-card h3');
  if (formH3) formH3.textContent = t.formTitle;
  const formP = document.querySelector('#contact-form-card p.text-slate-500');
  if (formP) formP.textContent = t.formSubtitle;

  const setLabelAndPh = (id, labelText, placeholderText) => {
    const input = document.getElementById(id);
    if (!input) return;
    if (placeholderText) input.placeholder = placeholderText;
    const label = input.closest('div')?.querySelector('label');
    if (label && labelText) label.textContent = labelText;
  };
  setLabelAndPh('cf-name', t.formNameLabel, t.formNamePlaceholder);
  setLabelAndPh('cf-company', t.formCompanyLabel, t.formCompanyPlaceholder);
  setLabelAndPh('cf-email', t.formEmailLabel, t.formEmailPlaceholder);
  setLabelAndPh('cf-phone', t.formPhoneLabel, t.formPhonePlaceholder);
  setLabelAndPh('cf-product', t.formProductLabel, t.formSelectProduct);
  setLabelAndPh('cf-qty', t.formQtyLabel, t.formQtyPlaceholder);
  setLabelAndPh('cf-message', t.formMessageLabel, t.formMessagePlaceholder);

  const formBtn = document.querySelector('#contact-form-card button[type="submit"] span');
  if (formBtn) formBtn.textContent = t.formSubmitBtn;

  // Contact Map
  const mapH4 = document.querySelector('#view-contact .lg\:col-span-12 h4');
  if (mapH4) mapH4.textContent = t.contactMapHeading;
  const mapOpenBtn = document.querySelector('#contact-address-map-link span');
  if (mapOpenBtn) mapOpenBtn.textContent = t.contactMapOpenBtn;

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

  const footerMapsBtnSpan = document.querySelector('#footer-maps-btn span');
  if (footerMapsBtnSpan) footerMapsBtnSpan.textContent = isEn ? 'View Location' : 'Lihat Lokasi';
  
  const footerCopyright = document.querySelector('footer .border-t.border-slate-800 p');
  if (footerCopyright) {
    footerCopyright.textContent = '© 2026 ' + t.footerCopyright;
  }

  // Re-render About Page
  if (typeof window.renderAboutPage === 'function') {
    window.renderAboutPage();
  } else if (typeof window.renderWhyKanayaSection === 'function') {
    window.renderWhyKanayaSection();
  }

  // If currently viewing a product detail, re-translate it
  const detailView = document.getElementById('view-product-detail');
  if (detailView && !detailView.classList.contains('hidden') && typeof window.showProductDetail === 'function') {
    const pId = (window.selectedProduct && window.selectedProduct.id) || (new URLSearchParams(window.location.hash.split('?')[1])).get('id') || 'plastic-opp';
    window.showProductDetail(pId);
  }

  // Refresh icons
  if (window.lucide) {
    lucide.createIcons();
  }
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
  setTimeout(run, 150);
  setTimeout(run, 600);
})();
