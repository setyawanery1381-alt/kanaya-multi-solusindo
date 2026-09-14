/**
 * PT Kanaya Multi Solusindo - Master Data Store & CMS State Management
 * Aligned 100% with PRD & Visual Mockup Reference
 */

const DEFAULT_KMS_DATA = {
  company: {
    name: "PT Kanaya Multi Solusindo",
    shortName: "KMS",
    established: 2024,
    tagline: "General Supplier yang Mendukung Kebutuhan Bisnis & Industri Anda",
    subheadline: "PT Kanaya Multi Solusindo hadir sebagai solusi pengadaan dengan menyediakan beragam produk untuk mendukung kebutuhan bisnis, operasional, dan industri.",
    aboutShort: "PT Kanaya Multi Solusindo bergerak di bidang General Supplier dengan menyediakan beragam produk untuk memenuhi kebutuhan bisnis, operasional, dan industri, meliputi Plastic, Packaging, Office Stationery, Safety Equipment, Chemical, Consumable, dan Printing.",
    aboutFull: "PT Kanaya Multi Solusindo merupakan perusahaan General Supplier yang menyediakan berbagai kebutuhan produk dan material untuk mendukung aktivitas bisnis, operasional, dan industri.\n\nDidirikan pada tahun 2024, PT Kanaya Multi Solusindo berfokus pada pengadaan dan penyediaan berbagai kebutuhan, mulai dari Plastic, Packaging, Office Stationery, Safety Equipment, Chemicals, Consumables, hingga Printing.\n\nDengan pendekatan yang berorientasi pada kebutuhan pelanggan, kami berkomitmen untuk menjadi mitra pengadaan yang terpercaya serta memberikan solusi yang efektif, efisien, dan tepat guna.",
    contacts: {
      phone: "0813-1052-840",
      whatsapp: "0813-1052-840",
      whatsappNumber: "628131052840",
      emailSales: "sales@kanayamulti.com",
      emailAdmin: "admin@kanayamulti.com",
      instagram: "@kanayamultisolusindo",
      instagramUrl: "https://instagram.com/kanayamultisolusindo",
      address: "Ruko Sentra EM.6 Harapan Indah - Bekasi - Jawa Barat",
      city: "Bekasi, Jawa Barat - Indonesia",
      operationalHours: "Senin - Jumat: 08:30 - 17:00 WIB"
    }
  },

  // 4 Default Hero Slides for the Slideshow
  heroSlides: [
    {
      id: "slide-1",
      badge: "General Supplier & B2B Procurement Partner",
      title: "General Supplier yang Mendukung Kebutuhan Bisnis & Industri Anda",
      subtitle: "PT Kanaya Multi Solusindo hadir sebagai solusi pengadaan dengan menyediakan beragam produk untuk mendukung kebutuhan bisnis, operasional, dan industri.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=85",
      btnPrimaryText: "Lihat Produk",
      btnPrimaryLink: "#products",
      btnSecondaryText: "Hubungi Kami",
      btnSecondaryLink: "#contact"
    },
    {
      id: "slide-2",
      badge: "Packaging & Plastic Wrapping Solution",
      title: "Solusi Lengkap Packaging & Material Plastik Industri",
      subtitle: "Menyediakan Plastic Stretch Film kualitas prima, bubble wrap, kardus corrugated, dan perlengkapan kemasan pallet untuk distribusi kargo aman.",
      image: "https://images.unsplash.com/photo-1605600659908-0ef719419d41?auto=format&fit=crop&w=1600&q=85",
      btnPrimaryText: "Katalog Plastik",
      btnPrimaryLink: "#products",
      btnSecondaryText: "Ajukan Inquiry",
      btnSecondaryLink: "#contact"
    },
    {
      id: "slide-3",
      badge: "Workplace Safety & K3 Standards",
      title: "Perlengkapan Keselamatan Kerja (APD) & Kebutuhan Operasional",
      subtitle: "Mendukung standar kepatuhan K3 di lingkungan kerja pabrik, proyek konstruksi, dan pergudangan dengan perlengkapan keselamatan berkualitas tinggi.",
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1600&q=85",
      btnPrimaryText: "Perlengkapan APD",
      btnPrimaryLink: "#products",
      btnSecondaryText: "Konsultasi Safety",
      btnSecondaryLink: "#contact"
    },
    {
      id: "slide-4",
      badge: "Mitra Pengadaan B2B Terpercaya",
      title: "Bukan Sekadar Penyedia, Kami Hadir sebagai Mitra Strategis",
      subtitle: "Kami percaya bahwa kerja sama yang baik dibangun melalui integritas, kecepatan suplai, kualitas produk teruji, dan komitmen pelayanan jangka panjang.",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=85",
      btnPrimaryText: "Lihat Klien Kami",
      btnPrimaryLink: "#clients",
      btnSecondaryText: "Mulai Kerja Sama",
      btnSecondaryLink: "#contact"
    }
  ],

  vision: "Menjadi perusahaan yang mandiri, unggul, terpercaya, dan berorientasi pada keberlanjutan, serta mampu memberikan dampak positif bagi lingkungan sekitar.",
  
  missions: [
    "Memberikan produk dan pelayanan terbaik dengan mengutamakan kualitas, daya saing, serta solusi yang tepat sesuai kebutuhan pelanggan.",
    "Membangun dan mempertahankan kepercayaan pelanggan melalui kinerja yang efektif, efisien, konsisten, dan profesional.",
    "Menghadirkan solusi pengadaan yang inovatif dan tepat guna untuk mendukung kebutuhan serta perkembangan bisnis para mitra."
  ],

  values: [
    {
      id: "profesional",
      title: "Profesional & Terpercaya",
      desc: "Menjunjung profesionalisme dan integritas dalam setiap layanan.",
      icon: "shield-check"
    },
    {
      id: "customer-focus",
      title: "Customer Focus",
      desc: "Menjadikan kebutuhan dan kepuasan pelanggan sebagai prioritas utama.",
      icon: "users"
    },
    {
      id: "kualitas-pelayanan",
      title: "Kualitas & Pelayanan",
      desc: "Berkomitmen memberikan produk berkualitas dan pelayanan yang terus dikembangkan.",
      icon: "star"
    }
  ],

  stats: [
    { number: "500+", label: "Produk Lengkap", sublabel: "Solusi terpadu berbagai kategori" },
    { number: "100+", label: "Klien Korporat", sublabel: "Mitra B2B dan industri manufaktur" },
    { number: "10+", label: "Sektor Industri", sublabel: "Otomotif, logam, logistik & perkantoran" }
  ],

  solutions: [
    {
      id: "business-ops",
      title: "Business & Operational Supplies",
      desc: "Mendukung kebutuhan perlengkapan dan consumable untuk aktivitas operasional bisnis Anda dengan efisiensi pengadaan tepat waktu.",
      badge: "Operasional Bisnis",
      icon: "briefcase"
    },
    {
      id: "packaging-solutions",
      title: "Packaging Solutions",
      desc: "Mendukung kebutuhan pengemasan, penyimpanan, dan distribusi logistik barang secara aman dan terlindungi dari kerusakan.",
      badge: "Proteksi & Distribusi",
      icon: "package"
    },
    {
      id: "workplace-safety",
      title: "Workplace Safety",
      desc: "Menyediakan kebutuhan perlengkapan keselamatan kerja (APD) komprehensif untuk mendukung keamanan maksimal di lingkungan kerja.",
      badge: "Kesehatan & Keselamatan Kerja",
      icon: "shield"
    },
    {
      id: "cleaning-facility",
      title: "Cleaning & Facility Needs",
      desc: "Mendukung kebutuhan kebersihan dan perawatan area kerja melalui produk chemical terstandar dan perlengkapan sanitasi teruji.",
      badge: "Higienitas & Kebersihan",
      icon: "sparkles"
    }
  ],

  categories: [
    {
      id: "plastic",
      name: "Plastic",
      title: "Material Plastik & Wrapping",
      desc: "Berbagai material dan kebutuhan plastik untuk packaging dan operasional industri.",
      image: "https://images.unsplash.com/photo-1605600659908-0ef719419d41?auto=format&fit=crop&w=600&q=80",
      itemCount: "9 Varian Utama"
    },
    {
      id: "packaging",
      name: "Packaging",
      title: "Solusi Kemasan & Kardus",
      desc: "Solusi kemasan untuk mendukung kebutuhan pengemasan, penyimpanan, dan distribusi.",
      image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=600&q=80",
      itemCount: "Kardus, Lakban, Strapping"
    },
    {
      id: "stationery",
      name: "Office Stationery",
      title: "Alat Tulis & Kantor",
      desc: "Kebutuhan alat tulis dan perlengkapan kantor untuk mendukung aktivitas operasional.",
      image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=600&q=80",
      itemCount: "Kertas, Map, Pulpen, Klip"
    },
    {
      id: "safety",
      name: "Safety Equipment",
      title: "Perlengkapan K3 / APD",
      desc: "Perlengkapan keselamatan untuk mendukung keamanan di lingkungan kerja industri & proyek.",
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80",
      itemCount: "Helm, Rompi, Sarung Tangan, Sepatu"
    },
    {
      id: "chemical",
      name: "Chemical",
      title: "Chemical & Kebersihan",
      desc: "Produk chemical dan kebutuhan kebersihan untuk mendukung aktivitas operasional.",
      image: "https://images.unsplash.com/photo-1584813470613-5b1c1cad3d69?auto=format&fit=crop&w=600&q=80",
      itemCount: "Pembersih Lantai, Disinfektan, Kaca"
    },
    {
      id: "consumable",
      name: "Consumable",
      title: "Consumable Operasional",
      desc: "Berbagai kebutuhan consumable untuk mendukung aktivitas bisnis dan operasional harian.",
      image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=600&q=80",
      itemCount: "Tissue, Kantong Sampah, Masker"
    },
    {
      id: "printing",
      name: "Printing",
      title: "Percetakan & Cetak Dokumen",
      desc: "Kebutuhan printing untuk mendukung kebutuhan bisnis, promosi, dan operasional administrasi.",
      image: "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&w=600&q=80",
      itemCount: "Brosur, Label Stiker, Form NCR"
    }
  ],

  products: [
    {
      id: "plastic-stretch-film",
      categoryId: "plastic",
      name: "Plastic Stretch Film",
      categoryName: "Plastic",
      tag: "Best Seller",
      badge: "Proteksi Kemasan",
      shortDesc: "Material stretch film elastis tinggi untuk mengamankan barang pallet saat pengiriman dan penyimpanan.",
      fullDesc: "Plastic stretch film dirancang khusus untuk melindungi produk dari debu, kelembapan, kotoran, dan goncangan selama proses penyimpanan dan distribusi pengiriman barang di gudang maupun ekspedisi logistik.",
      image: "https://images.unsplash.com/photo-1605600659908-0ef719419d41?auto=format&fit=crop&w=900&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1605600659908-0ef719419d41?auto=format&fit=crop&w=900&q=80",
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80",
        "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=900&q=80"
      ],
      advantages: [
        "Kuat dan sangat elastis dengan daya regang optimal",
        "Transparan, higienis, dan memiliki daya rekat satu sisi yang rapi",
        "Tahan terhadap robekan sudut tajam dan kelembaban udara",
        "Cocok untuk hand roll maupun mesin wrapping pallet industri"
      ],
      specs: [
        { key: "Material", val: "LLDPE (Linear Low-Density Polyethylene)" },
        { key: "Ketebalan", val: "10 - 25 mikron (Tersedia: 12µ, 15µ, 17µ, 20µ, 25µ)" },
        { key: "Lebar Roll", val: "300 - 500 mm" },
        { key: "Panjang Roll", val: "100 - 1000 meter (Customizable)" },
        { key: "Warna", val: "Bening (Clear Transparent) & Hitam Opaque" },
        { key: "Aplikasi", val: "Wrapping Pallet Kargo, Ekspedisi, Gudang Manufaktur" }
      ]
    },
    {
      id: "plastic-opp",
      categoryId: "plastic",
      name: "Plastik OPP (Oriented Polypropylene)",
      categoryName: "Plastic",
      tag: "Spesifikasi PRD",
      badge: "Food & Garment",
      shortDesc: "Bening, kaku, mengilap; sangat cocok untuk kemasan makanan kering dan apparel garmen.",
      fullDesc: "Plastik OPP memiliki tingkat kejernihan transparansi yang sangat tinggi, bersifat kaku dan mengilap sehingga memberikan kesan visual produk yang premium dan higienis.",
      image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=900&q=80",
      gallery: ["https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=900&q=80"],
      advantages: [
        "Permukaan bening kristal dan sangat mengilap",
        "Struktur material kaku dan rapi untuk kemasan pajang",
        "Tersedia varian lem seal (self-adhesive) praktis"
      ],
      specs: [
        { key: "Karakteristik", val: "Bening, kaku, mengilap" },
        { key: "Fungsi Utama", val: "Kemasan makanan kering, snack, bakery, packaging baju & stationery" },
        { key: "Format", val: "Sheet, Roll, Kantong Seal Tape" }
      ]
    },
    {
      id: "plastic-cpp",
      categoryId: "plastic",
      name: "Plastik CPP (Cast Polypropylene)",
      categoryName: "Plastic",
      tag: "Spesifikasi PRD",
      badge: "Heat Resistant",
      shortDesc: "Lentur, tahan panas, tidak mudah sobek; untuk kemasan makanan panas dan retort pouch.",
      fullDesc: "Plastik CPP memiliki sifat fleksibel dengan ketahanan terhadap suhu tinggi, daya rekat segel termal (heat sealing) yang kuat, serta ketahanan tusukan yang sangat andal.",
      image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=900&q=80",
      gallery: ["https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=900&q=80"],
      advantages: [
        "Tahan suhu sterilisasi dan perebusan",
        "Sangat lentur dan daya sobek rendah",
        "Lapisan lamination sealing yang kokoh"
      ],
      specs: [
        { key: "Karakteristik", val: "Lentur, tahan panas, tidak mudah sobek" },
        { key: "Fungsi Utama", val: "Kemasan makanan panas, pasta, retort packaging" }
      ]
    },
    {
      id: "plastic-pvc",
      categoryId: "plastic",
      name: "Plastik PVC (Polyvinyl Chloride)",
      categoryName: "Plastic",
      tag: "Spesifikasi PRD",
      badge: "Rigid & Durable",
      shortDesc: "Kuat dan sedikit elastis; ideal untuk botol, pipa, serta kemasan blister pack industri.",
      fullDesc: "Material PVC menawarkan kekuatan mekanis tinggi, stabilitas dimensi prima, dan ketahanan kimia yang kuat untuk berbagai wadah dan proteksi blister part.",
      image: "https://images.unsplash.com/photo-1584813470613-5b1c1cad3d69?auto=format&fit=crop&w=900&q=80",
      gallery: ["https://images.unsplash.com/photo-1584813470613-5b1c1cad3d69?auto=format&fit=crop&w=900&q=80"],
      advantages: [
        "Struktur kokoh dan tahan terhadap benturan luar",
        "Ketahanan isolasi dan kimia industri",
        "Sangat presisi untuk cetak thermoforming / blister"
      ],
      specs: [
        { key: "Karakteristik", val: "Kuat dan sedikit elastis" },
        { key: "Fungsi Utama", val: "Botol industri, pipa, kemasan blister perkakas & farmasi" }
      ]
    },
    {
      id: "plastic-nylon",
      categoryId: "plastic",
      name: "Plastik Nylon (Polyamide Barrier)",
      categoryName: "Plastic",
      tag: "Spesifikasi PRD",
      badge: "Vacuum & Frozen",
      shortDesc: "Sangat kuat dan tahan suhu tinggi; untuk frozen food, daging, dan kemasan vacuum bag.",
      fullDesc: "Plastik Nylon dirancang dengan ketahanan gas barrier yang tinggi terhadap oksigen, menjamin kesegaran produk frozen food, daging olahan, dan makanan steril dalam jangka panjang.",
      image: "https://images.unsplash.com/photo-1605600659908-0ef719419d41?auto=format&fit=crop&w=900&q=80",
      gallery: ["https://images.unsplash.com/photo-1605600659908-0ef719419d41?auto=format&fit=crop&w=900&q=80"],
      advantages: [
        "Ketahanan hampa udara (vacuum barrier) terbaik",
        "Tahan suhu beku (freezer) tanpa pecah atau getas",
        "Kekuatan tarik dan tusukan sangat tinggi"
      ],
      specs: [
        { key: "Karakteristik", val: "Sangat kuat, tahan tusukan, dan tahan suhu tinggi" },
        { key: "Fungsi Utama", val: "Frozen food, daging olahan, vacuum packaging, seafood" }
      ]
    },
    {
      id: "plastic-pp",
      categoryId: "plastic",
      name: "Plastik PP (Polypropylene Food Grade)",
      categoryName: "Plastic",
      tag: "Spesifikasi PRD",
      badge: "Food Grade",
      shortDesc: "Kuat, tahan panas, dan aman untuk makanan; untuk gelas cup, kotak makanan, dan sedotan.",
      fullDesc: "Polimer PP berbobot ringan, berdaya tahan panas prima (tahan microwave), serta aman bersentuhan langsung dengan makanan (food grade).",
      image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=900&q=80",
      gallery: ["https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=900&q=80"],
      advantages: [
        "Aman untuk makanan & minuman (BPA Free)",
        "Tahan panas suhu tinggi",
        "Ekonomis dan mudah didaur ulang"
      ],
      specs: [
        { key: "Karakteristik", val: "Kuat, tahan panas, dan aman untuk makanan" },
        { key: "Fungsi Utama", val: "Gelas cup plastik, kotak makanan catering, sedotan, tutup botol" }
      ]
    },
    {
      id: "plastic-pet",
      categoryId: "plastic",
      name: "Plastik PET (Polyethylene Terephthalate)",
      categoryName: "Plastic",
      tag: "Spesifikasi PRD",
      badge: "High Clarity",
      shortDesc: "Bening, ringan, tahan tekanan; untuk botol minuman dan kemasan makanan higienis.",
      fullDesc: "Plastik PET bening transparan menyerupai kaca namun tidak mudah pecah, kedap terhadap gas CO2, dan sangat ideal untuk kemasan botol minuman siap saji.",
      image: "https://images.unsplash.com/photo-1584813470613-5b1c1cad3d69?auto=format&fit=crop&w=900&q=80",
      gallery: ["https://images.unsplash.com/photo-1584813470613-5b1c1cad3d69?auto=format&fit=crop&w=900&q=80"],
      advantages: [
        "Transparansi sebening kaca",
        "Tahan tekanan internal botol minuman berkarbonasi",
        "Ringan dan higienis bersertifikasi"
      ],
      specs: [
        { key: "Karakteristik", val: "Bening, ringan, tahan tekanan" },
        { key: "Fungsi Utama", val: "Botol minuman, toples selai/bumbu, wadah blister makanan" }
      ]
    },
    {
      id: "plastic-ldpe",
      categoryId: "plastic",
      name: "Plastik LDPE (Low-Density Polyethylene)",
      categoryName: "Plastic",
      tag: "Spesifikasi PRD",
      badge: "Flexible Bag",
      shortDesc: "Lentur dan ringan; untuk kantong plastik, plastic wrap pelindung, dan kantong belanja.",
      fullDesc: "LDPE memiliki karakteristik lentur, kedap air, dan memiliki elastisitas baik, sangat cocok untuk kantong belanja tahan beban, plastik pelindung barang, dan liner pallet.",
      image: "https://images.unsplash.com/photo-1605600659908-0ef719419d41?auto=format&fit=crop&w=900&q=80",
      gallery: ["https://images.unsplash.com/photo-1605600659908-0ef719419d41?auto=format&fit=crop&w=900&q=80"],
      advantages: [
        "Fleksibel dan tidak mudah robek saat ditarik",
        "Tahan terhadap kelembapan tinggi",
        "Berbagai pilihan ketebalan dan ukuran kantong"
      ],
      specs: [
        { key: "Karakteristik", val: "Lentur dan ringan" },
        { key: "Fungsi Utama", val: "Kantong plastik industri, plastic wrap pelindung, kantong belanja" }
      ]
    },
    {
      id: "plastic-bubble-wrap",
      categoryId: "plastic",
      name: "Bubble Wrap Roll Industri",
      categoryName: "Plastic",
      tag: "Spesifikasi PRD",
      badge: "Cushioning",
      shortDesc: "Material gelembung udara berkualitas untuk membantu melindungi barang dari benturan fisik.",
      fullDesc: "Roll bubble wrap dengan gelembung udara padat dan elastis, memberikan perlindungan maksimal terhadap guncangan, benturan, dan goresan saat pengiriman ekspedisi logistik.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80",
      gallery: ["https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80"],
      advantages: [
        "Gelembung udara padat dan tidak mudah kempis",
        "Melindungi barang pecah belah, elektronik, & kosmetik",
        "Mudah dipotong dan dibungkus mengikuti bentuk barang"
      ],
      specs: [
        { key: "Fungsi", val: "Membantu melindungi barang dari benturan & lecet" },
        { key: "Lebar Roll", val: "125 cm (Standard Industri)" },
        { key: "Panjang Roll", val: "50 meter per roll / custom" },
        { key: "Pilihan Warna", val: "Bening (Clear) & Hitam (Black)" }
      ]
    },
    // Packaging
    {
      id: "kardus-corrugated",
      categoryId: "packaging",
      name: "Kardus Karton Corrugated Box",
      categoryName: "Packaging",
      tag: "Solusi Kemasan",
      badge: "Heavy Duty",
      shortDesc: "Solusi kemasan kardus bergelombang untuk pengemasan makanan, elektronik, kosmetik, hingga pengiriman barang.",
      fullDesc: "Karton box corrugated berkualitas tinggi dengan pilihan Single Wall, Double Wall, dan Triple Wall untuk memastikan keamanan penyimpanan di rak gudang serta distribusi antarpulau.",
      image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=900&q=80",
      gallery: ["https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=900&q=80"],
      advantages: [
        "Tahan tumpukan beban tinggi di gudang",
        "Dapat dicetak logo & instruksi penanganan (custom print)",
        "Material ramah lingkungan dan dapat didaur ulang"
      ],
      specs: [
        { key: "Tipe Flute", val: "B/F, C/F, E/F, Single Wall (3 ply) & Double Wall (5 ply)" },
        { key: "Ketahanan Beban", val: "Hingga 50+ kg tergantung konstruksi" },
        { key: "Ukuran", val: "Customized sesuai kebutuhan packaging klien" }
      ]
    },
    {
      id: "strapping-band",
      categoryId: "packaging",
      name: "Strapping Band & Lakban OPP Tape",
      categoryName: "Packaging",
      tag: "Packaging Supply",
      badge: "Logistik",
      shortDesc: "Tali strapping mesin/manual dan lakban perekat kuat untuk pengikatan koli dan karton.",
      fullDesc: "Perlengkapan bundling karton dan pengikatan beban berat pada pallet menggunakan tali strapping PP/PET dan isolasi OPP tape dengan lem water-based tahan suhu ekstrem.",
      image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=900&q=80",
      gallery: ["https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=900&q=80"],
      advantages: [
        "Daya rekat tinggi tidak mudah terkelupas di suhu dingin/panas",
        "Kekuatan tarik strapping band tinggi untuk mengikat muatan berat",
        "Tersedia warna bening, cokelat, dan custom cetak logo brand"
      ],
      specs: [
        { key: "Tipe Lakban", val: "OPP Tape Bening & Cokelat (48mm x 90-100 yard)" },
        { key: "Tali Strapping", val: "PP Strapping Band 9mm, 12mm, 15mm (Hand & Machine)" }
      ]
    },
    // Office Stationery
    {
      id: "office-stationery-bundle",
      categoryId: "stationery",
      name: "Perlengkapan ATK Kantor Lengkap",
      categoryName: "Office Stationery",
      tag: "Pengadaan Kantor",
      badge: "ATK Bisnis",
      shortDesc: "Pulpen, pensil, spidol, buku tulis, map ordner, dan perlengkapan kantor untuk operasional perusahaan.",
      fullDesc: "Solusi pengadaan rutin alat tulis kantor (ATK) skala grosir dan retail corporate untuk kebutuhan operasional kantor, instansi, dan cabang perusahaan tanpa repot.",
      image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=900&q=80",
      gallery: ["https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=900&q=80"],
      advantages: [
        "Katalog produk ATK lengkap dari berbagai merek terpercaya",
        "Harga pengadaan grosir B2B efisien dengan suplai terjadwal",
        "Faktur pajak dan legalitas transaksi perusahaan lengkap"
      ],
      specs: [
        { key: "Kategori Produk", val: "Kertas HVS (A4, F4), Pulpen, Spidol Whiteboard/Permanent" },
        { key: "Pengarsipan", val: "Ordner Bantex, Map Business File, Binder, Clear Holder" },
        { key: "Aksesoris", val: "Stapler, Puncher, Paper Clip, Correction Tape, Notes" }
      ]
    },
    // Safety Equipment
    {
      id: "safety-equipment-set",
      categoryId: "safety",
      name: "Perlengkapan Safety & APD K3",
      categoryName: "Safety Equipment",
      tag: "Standar K3",
      badge: "Perlindungan Pekerja",
      shortDesc: "Mendukung perlindungan pekerja dari berbagai potensi bahaya di lingkungan kerja proyek & industri.",
      fullDesc: "Rangkaian Alat Pelindung Diri (APD) bersertifikasi SNI dan standar internasional (ANSI/CE) untuk menjamin keselamatan tenaga kerja di pabrik, gudang, konstruksi, dan area berisiko tinggi.",
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=900&q=80",
      gallery: ["https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=900&q=80"],
      advantages: [
        "Memenuhi standar kepatuhan regulasi K3 nasional",
        "Material tangguh, ergonomis, dan nyaman dipakai shift panjang",
        "Tersedia lengkap dari kepala hingga kaki"
      ],
      specs: [
        { key: "Item Helm", val: "Safety Helmet V-Gard dengan tali dagu & suspensi putar" },
        { key: "Item Rompi", val: "Rompi Safety Reflektif Scotlight (Jaring/Polyester)" },
        { key: "Item Kaki & Tangan", val: "Sepatu Safety Steel Toe Cap & Sarung Tangan PU/Nitrile/Katun" }
      ]
    },
    // Chemical
    {
      id: "industrial-cleaning-chemical",
      categoryId: "chemical",
      name: "Chemical & Pembersih Area Operasional",
      categoryName: "Chemical",
      tag: "Chemical Terstandar",
      badge: "Kebersihan & Sanitasi",
      shortDesc: "Pembersih lantai, pembersih kaca, pengharum ruangan, dan chemical sanitasi industri.",
      fullDesc: "Menyediakan kebutuhan formula pembersih konsentrat untuk gedung perkantoran, fasilitas manufaktur, rumah sakit, dan area komersial dengan efektivitas pembersihan tinggi.",
      image: "https://images.unsplash.com/photo-1584813470613-5b1c1cad3d69?auto=format&fit=crop&w=900&q=80",
      gallery: ["https://images.unsplash.com/photo-1584813470613-5b1c1cad3d69?auto=format&fit=crop&w=900&q=80"],
      advantages: [
        "Konsentrasi tinggi sehingga sangat hemat pemakaian",
        "Aman untuk berbagai jenis permukaan lantai (epoxy, keramik, granit)",
        "Disertai Material Safety Data Sheet (MSDS) resmi"
      ],
      specs: [
        { key: "Produk Utama", val: "Floor Cleaner, Glass Cleaner, Hand Soap, Disinfektan" },
        { key: "Kemasan", val: "Jerigen 4 Liter, 5 Liter, hingga Drum 20-25 Liter" }
      ]
    },
    // Consumable
    {
      id: "operational-consumables",
      categoryId: "consumable",
      name: "Consumable Operasional & Kantong Sampah",
      categoryName: "Consumable",
      tag: "Kebutuhan Rutin",
      badge: "Fasilitas Kerja",
      shortDesc: "Berbagai kebutuhan consumable rutin untuk mendukung aktivitas bisnis dan operasional harian.",
      fullDesc: "Penyediaan barang habis pakai rutin seperti trash bag medis/non-medis, tissue dispenser, sarung tangan disposable, dan perlengkapan pantry perusahaan.",
      image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=900&q=80",
      gallery: ["https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=900&q=80"],
      advantages: [
        "Ketersediaan stok stabil untuk kontrak pasokan bulanan",
        "Kualitas bahan tebal tidak mudah bocor atau robek",
        "Pengiriman terjadwal sesuai ritme operasional perusahaan"
      ],
      specs: [
        { key: "Plastik Sampah", val: "Trash Bag Hitam HD/PE (60x100, 80x100, 90x120 cm)" },
        { key: "Produk Tissue", val: "Hand Towel Roll, Facial Tissue, Toilet Paper Jumbo Roll" }
      ]
    },
    // Printing
    {
      id: "commercial-printing-solutions",
      categoryId: "printing",
      name: "Layanan Cetak Dokumen & Promosi Bisnis",
      categoryName: "Printing",
      tag: "Percetakan Korporat",
      badge: "Branding & Dokumen",
      shortDesc: "Produk cetak formulir, label barcode sticker, nota rangkap NCR, dan materi promosi korporat.",
      fullDesc: "Solusi cetak offset dan digital presisi tinggi untuk mendukung branding perusahaan, administrasi logistik gudang, dan materi presentasi bisnis dengan warna akurat.",
      image: "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&w=900&q=80",
      gallery: ["https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&w=900&q=80"],
      advantages: [
        "Hasil cetak tajam, presisi warna konsisten dengan standar proofing",
        "Kertas NCR sensitif berkualitas tinggi untuk surat jalan / faktur",
        "Stiker label barcode berperekat kuat tahan gesekan & kelembapan"
      ],
      specs: [
        { key: "Dokumen Kantor", val: "Buku Nota NCR Rangkap 2-4, Kop Surat, Amplop Perusahaan" },
        { key: "Label Logistik", val: "Stiker Thermal Barcode, Stiker Fragile, Label Kemasan" },
        { key: "Marketing", val: "Brosur, Company Profile Booklet, Spanduk & Roll Banner" }
      ]
    }
  ],

  clients: [
    {
      id: "client-hitachi",
      name: "PT. Hitachi Construction Machinery Indonesia",
      shortName: "Hitachi",
      logo: "assets/logos/client-hitachi.svg",
      industry: "Heavy Machinery & Construction"
    },
    {
      id: "client-mics",
      name: "PT MICS STEEL INDONESIA",
      shortName: "MICS Steel",
      logo: "assets/logos/client-mics.svg",
      industry: "Steel & Metallurgy Manufacturing"
    },
    {
      id: "client-kandia",
      name: "Kandia Tirta Engineering",
      shortName: "Kandia Tirta",
      logo: "assets/logos/client-kandia.svg",
      industry: "Engineering & Water Solutions"
    },
    {
      id: "client-tms",
      name: "PT Tembaga Mulia Semanan, Tbk",
      shortName: "TMS",
      logo: "assets/logos/client-tms.svg",
      industry: "Copper & Wire Manufacturing"
    },
    {
      id: "client-chengtian",
      name: "PT. Chengtian Weiye Indonesia",
      shortName: "Chengtian Weiye",
      logo: "assets/logos/client-chengtian.svg",
      industry: "Smart Card & Electronics"
    },
    {
      id: "client-adhibeton",
      name: "PT Adhimix Precast Indonesia",
      shortName: "Adhibeton",
      logo: "assets/logos/client-adhibeton.svg",
      industry: "Ready-Mix Concrete & Precast"
    },
    {
      id: "client-enkei",
      name: "ENKEI INDONESIA",
      shortName: "ENKEI",
      logo: "assets/logos/client-enkei.svg",
      industry: "Automotive Wheel Manufacturing"
    },
    {
      id: "client-anugerah",
      name: "PT. ANUGERAH CIPTA KREASINDO",
      shortName: "PT. AK",
      logo: "assets/logos/client-anugerah.svg",
      industry: "Technology & Industrial Consulting"
    }
  ],

  gallery: [
    {
      id: "gal-1",
      title: "Kegiatan Distribusi",
      category: "Distribusi",
      desc: "Proses pemuatan dan penyiapan muatan produk suplai untuk pengiriman tepat waktu ke gudang pelanggan.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "gal-2",
      title: "Warehouse & Storage",
      category: "Fasilitas",
      desc: "Manajemen penyimpanan stok barang dengan sistem racking teratur dan terjaga kebersihannya.",
      image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "gal-3",
      title: "Meeting / Office",
      category: "Aktivitas",
      desc: "Koordinasi internal tim pengadaan dan konsultasi spesifikasi kebutuhan solusi mitra bisnis.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "gal-4",
      title: "Armada Pengiriman",
      category: "Logistik",
      desc: "Armada logistik terpercaya siap menjangkau berbagai kawasan industri di Jabodetabek dan sekitarnya.",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "gal-5",
      title: "Aktivitas Perusahaan",
      category: "Operasional",
      desc: "Pemeriksaan kualitas berkala (quality check) memastikan barang yang dikirim sesuai standar spesifikasi.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "gal-6",
      title: "Tim & Konsultasi",
      category: "Human Capital",
      desc: "Tim profesional kami yang berkomitmen mendampingi setiap tahapan pengadaan perusahaan Anda.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
    }
  ],

  translations: {
    id: {
      nav: {
        home: "Beranda",
        about: "Tentang Kami",
        products: "Produk",
        solutions: "Solusi",
        whyUs: "Mengapa Kanaya",
        clients: "Klien Kami",
        gallery: "Dokumentasi",
        contact: "Kontak",
        ctaButton: "Hubungi Kami"
      }
    },
    en: {
      nav: {
        home: "Home",
        about: "About Us",
        products: "Products",
        solutions: "Solutions",
        whyUs: "Why Kanaya",
        clients: "Our Clients",
        gallery: "Gallery",
        contact: "Contact",
        ctaButton: "Contact Us"
      }
    }
  }
};

/**
 * Reactive LocalStorage Data Layer
 */
const STORAGE_KEY = 'KMS_APP_DATA_V2';
const INQUIRIES_KEY = 'KMS_INQUIRIES_V2';
const AUTH_KEY = 'KMS_ADMIN_AUTH_V2';

function loadKmsData() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      // Deep merge with defaults to ensure all nested keys exist
      const merged = Object.assign({}, DEFAULT_KMS_DATA, parsed);
      if (parsed.company) {
        merged.company = Object.assign({}, DEFAULT_KMS_DATA.company, parsed.company);
        if (parsed.company.contacts) {
          merged.company.contacts = Object.assign({}, DEFAULT_KMS_DATA.company.contacts, parsed.company.contacts);
        }
      }
      return merged;
    }
  } catch (e) {
    console.warn('Error reading localStorage, using defaults:', e);
  }
  return JSON.parse(JSON.stringify(DEFAULT_KMS_DATA));
}

function saveKmsData(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error('Error saving to localStorage:', e);
  }
}

function resetKmsDataToDefault() {
  localStorage.removeItem(STORAGE_KEY);
  window.KMS_DATA = JSON.parse(JSON.stringify(DEFAULT_KMS_DATA));
  saveKmsData(window.KMS_DATA);
}

// Inquiries Storage
function loadInquiries() {
  try {
    const raw = localStorage.getItem(INQUIRIES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveInquiry(inquiry) {
  const list = loadInquiries();
  inquiry.id = 'INQ-' + Date.now();
  inquiry.createdAt = new Date().toLocaleString('id-ID');
  inquiry.status = 'Baru';
  list.unshift(inquiry);
  localStorage.setItem(INQUIRIES_KEY, JSON.stringify(list));
  return inquiry;
}

// Initialize Global Data Instance
window.KMS_DATA = loadKmsData();
