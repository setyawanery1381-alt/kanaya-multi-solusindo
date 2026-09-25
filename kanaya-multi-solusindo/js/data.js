/**
 * PT Kanaya Multi Solusindo - Master Data Store & CMS State Management
 * Aligned 100% with PRD & Visual Mockup Reference
 */

const DEFAULT_KMS_DATA = {
  catalogVersion: 7,
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
      tiktok: "@pt_kanayamultisolusindo",
      tiktokUrl: "https://www.tiktok.com/@pt_kanayamultisolusindo?_r=1&_t=ZS-99aLXp9ql8C",
      linkedin: "PT Kanaya Multi Solusindo",
      linkedinUrl: "https://www.linkedin.com/in/pt-kanaya-multi-solusindo-661959435/",
      address: "Ruko Sentra EM.6 Harapan Indah - Bekasi - Jawa Barat",
      city: "Bekasi, Jawa Barat - Indonesia",
      operationalHours: "Senin - Jumat: 08:30 - 17:00 WIB",
      mapsUrl: "https://maps.google.com/?q=Ruko+Sentra+EM.6+Harapan+Indah+Bekasi",
      footerTagline: "General Supplier untuk kebutuhan bisnis, operasional, dan industri. Mitra terpercaya pengadaan barang korporat berkualitas tinggi."
    }
  },

  // 4 Default Hero Slides for the Slideshow
  heroSlides: [
    {
      id: "slide-1",
      badge: "General Supplier & B2B Procurement Partner",
      title: "General Supplier Terpercaya untuk Kebutuhan Operasional & Bisnis",
      subtitle: "PT Kanaya Multi Solusindo hadir sebagai mitra pengadaan terintegrasi dengan menyediakan beragam produk industri berkualitas prima.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85",
      tag: "Suplai Cepat & Resmi",
      highlights: [
        "Katalog Produk Lengkap & Siap Pasok",
        "Legalitas Perusahaan Lengkap & Faktur Pajak Resmi",
        "Jangkauan Pengiriman Seluruh Wilayah Industri"
      ],
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
      tag: "Proteksi Kargo Pallet",
      highlights: [
        "Plastic Stretch Film Hand & Machine Roll",
        "Bubble Wrap Tebal & Dus Corrugated Box",
        "Standar Proteksi Kargo Industri & Siap Ekspor"
      ],
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
      tag: "Standar Sertifikasi K3",
      highlights: [
        "Helm Safety, Rompi K3, Kacamata & Sarung Tangan",
        "Sepatu Safety Standar Pabrik & Konstruksi",
        "Perlindungan Optimal Tenaga Kerja Industri"
      ],
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
      tag: "Kemitraan Jangka Panjang",
      highlights: [
        "Sistem Pembayaran TOP (Term of Payment) Fleksibel",
        "Dedicated Account Manager yang Responsif",
        "Garansi Mutu Produk & Pelayanan Prima"
      ],
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

  whyKanaya: {
    badge: "Keunggulan Kompetitif B2B",
    title: "Mengapa Perusahaan Memilih Bermitra dengan Kanaya?",
    subtitle: "Kami bukan sekadar penyedia barang, melainkan mitra strategis pengadaan yang menjamin legalitas resmi, keaslian mutu produk, serta kepastian jadwal suplai untuk kelancaran operasional industri Anda.",
    items: [
      {
        id: "profesional",
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
        id: "customer-focus",
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
        id: "kualitas-pelayanan",
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
    guarantees: [
      { icon: "file-check-2", title: "Faktur Pajak Sah", desc: "Legalitas PT & PPN resmi" },
      { icon: "clock", title: "Fast Response", desc: "Penawaran hitungan jam" },
      { icon: "shield-check", title: "Garansi 100%", desc: "Retur barang bila cacat" },
      { icon: "truck", title: "Suplai Rutin", desc: "Pengiriman se-Jabodetabek" }
    ]
  },

  closingCta: {
    title: "Bukan Sekadar Penyedia, Kami Hadir sebagai Mitra.",
    desc: "Kami percaya bahwa kerja sama yang baik dibangun melalui kepercayaan, profesionalitas, kualitas, dan komitmen. Kanaya Multi Solusindo berupaya memahami kebutuhan pelanggan dan memberikan solusi pengadaan yang tepat untuk mendukung kebutuhan bisnis dan operasional."
  },

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
        "id": "plastic",
        "name": "Plastic",
        "title": "Material Plastik Industri",
        "desc": "Menyediakan beragam material plastik untuk memenuhi berbagai kebutuhan industri dan bisnis.",
        "image": "assets/categories/plastic.jpg?v=3",
        "itemCount": "8 Produk Utama"
    },
    {
        "id": "packaging",
        "name": "Packaging",
        "title": "Kemasan & Logistik",
        "desc": "Solusi kemasan kardus, plastik, kayu, pengikat, dan kain untuk pengemasan, penyimpanan, dan distribusi.",
        "image": "assets/categories/packaging.jpg?v=3",
        "itemCount": "5 Subkategori"
    },
    {
        "id": "stationery",
        "name": "Office Stationery",
        "title": "Alat Tulis Kantor (ATK)",
        "desc": "Kebutuhan alat tulis dan perlengkapan kantor lengkap untuk mendukung aktivitas operasional perusahaan.",
        "image": "assets/categories/stationery.jpg?v=3",
        "itemCount": "15 Produk"
    },
    {
        "id": "safety",
        "name": "Safety Equipment",
        "title": "Perlengkapan K3 & APD",
        "desc": "Perlengkapan keselamatan kerja berstandar untuk mendukung keamanan di lingkungan industri & proyek.",
        "image": "assets/categories/safety.jpg?v=3",
        "itemCount": "12 Produk"
    },
    {
        "id": "chemical",
        "name": "Chemical",
        "title": "Chemical & Kebersihan",
        "desc": "Formula kimia pembersih, pelumas anti-karat, dan cairan sanitasi industri.",
        "image": "assets/categories/chemical.jpg?v=3",
        "itemCount": "12 Produk"
    },
    {
        "id": "consumable",
        "name": "Consumable",
        "title": "Consumable Operasional",
        "desc": "Barang habis pakai, alat potong gerinda, kain majun, dan perlengkapan kebersihan rutin.",
        "image": "assets/categories/consumable.jpg?v=3",
        "itemCount": "9 Produk"
    },
    {
        "id": "printing",
        "name": "Printing",
        "title": "Percetakan & Display",
        "desc": "Layanan cetak banner tarik, spanduk, kartu nama, dan stiker kustom perusahaan.",
        "image": "assets/categories/printing.jpg?v=3",
        "itemCount": "5 Produk"
    }
],

  products: [
  {
    "id": "plastic-opp",
    "categoryId": "plastic",
    "name": "Plastik OPP (Oriented Polypropylene)",
    "categoryName": "Plastic",
    "tag": "Bening Kristal",
    "badge": "Food & Ritel",
    "shortDesc": "Film polimer sangat bening kristal dan kaku untuk kemasan pakaian, roti, masker, dan produk ritel agar terlihat premium.",
    "fullDesc": "Plastik OPP (Oriented Polypropylene) adalah film polimer yang memiliki tingkat transparansi sangat tinggi (crystal clear) serta bertekstur kaku dan mengilap. Umumnya digunakan sebagai kemasan pembungkus pakaian, OPP bag, kemasan roti/bakery, lakban bening, dan produk ritel agar terlihat elegan dan eksklusif.",
    "image": "assets/products/plastic/covers/Cover_Plastik_OPP.png",
    "gallery": [
      "assets/products/plastic/covers/Cover_Plastik_OPP.png",
      "assets/products/plastic/opp/Lakban.png",
      "assets/products/plastic/opp/Plastik_Kemasan_Makanan.png",
      "assets/products/plastic/opp/Plastik_Kemasan_Pakaian.png",
      "assets/products/plastic/opp/Plastik_Opp_Seal.png"
    ],
    "advantages": [
      "Transparansi bening kristal sangat tinggi dan mengilap",
      "Karakter material kaku, rapi, dan mudah dibentuk kantong",
      "Tersedia pilihan seal lem praktis (self-adhesive tape)",
      "Melindungi produk dari debu, udara lembap, dan kotoran"
    ],
    "specs": [
      {
        "key": "Material",
        "val": "Oriented Polypropylene (OPP)"
      },
      {
        "key": "Karakteristik",
        "val": "Bening kristal, kaku, permukaan mengilap"
      },
      {
        "key": "Aplikasi Utama",
        "val": "Kemasan Pakaian, OPP Bag, Kemasan Roti, Lakban Bening"
      },
      {
        "key": "Format",
        "val": "Sheet, Roll Film, Kantong Lipat Lem"
      }
    ]
  },
  {
    "id": "plastic-cpp",
    "categoryId": "plastic",
    "name": "Plastik CPP (Cast Polypropylene)",
    "categoryName": "Plastic",
    "tag": "Tahan Panas & Lentur",
    "badge": "Food Packaging",
    "shortDesc": "Film polimer lentur, bening, dan memiliki ketahanan panas yang baik untuk kemasan snack, frozen food, dan inner packaging.",
    "fullDesc": "Plastik CPP (Cast Polypropylene) adalah film polimer yang lentur, jernih, serta memiliki ketahanan termal (panas) dan ketahanan sobek yang sangat baik. Sangat ideal diaplikasikan untuk kemasan snack, makanan beku (frozen food), inner packaging, dan kemasan makanan yang membutuhkan proses sterilisasi/seal rapat.",
    "image": "assets/products/plastic/covers/Cover_Plastik_Cpp.png",
    "gallery": [
      "assets/products/plastic/covers/Cover_Plastik_Cpp.png",
      "assets/products/plastic/cpp/CPP_Film.png",
      "assets/products/plastic/cpp/Inner_Packaging.png",
      "assets/products/plastic/cpp/Kemasan_Frozen_Food_.png",
      "assets/products/plastic/cpp/Kemasan_Snack_Custom_Printing.png",
      "assets/products/plastic/cpp/Kemasan_Snack_Polos.png"
    ],
    "advantages": [
      "Sangat lentur dan memiliki daya tahan tusukan tinggi",
      "Tahan terhadap suhu pemanasan dan segel panas (heat sealable)",
      "Food grade aman bersentuhan langsung dengan makanan",
      "Daya rekat kemasan kuat dan kedap udara"
    ],
    "specs": [
      {
        "key": "Material",
        "val": "Cast Polypropylene (CPP Film)"
      },
      {
        "key": "Karakteristik",
        "val": "Lentur, bening, tahan panas, daya seal kuat"
      },
      {
        "key": "Aplikasi Utama",
        "val": "CPP Film, Kemasan Snack, Frozen Food, Inner Packaging, Kemasan Makanan"
      },
      {
        "key": "Metode Seal",
        "val": "Heat Sealing & Lamination"
      }
    ]
  },
  {
    "id": "plastic-pvc",
    "categoryId": "plastic",
    "name": "Plastik PVC (Polyvinyl Chloride)",
    "categoryName": "Plastic",
    "tag": "Kuat & Serbaguna",
    "badge": "Industri & Proteksi",
    "shortDesc": "Material kuat dan tahan lama untuk kebutuhan PVC sheet lentur/mika tebal, blister pack, hingga pipa industri.",
    "fullDesc": "Plastik PVC (Polyvinyl Chloride) adalah material tangguh, tahan lama, dan memiliki ketahanan terhadap bahan kimia serta cuaca. Tersedia dalam berbagai bentuk formulasi fleksibel maupun kaku untuk kebutuhan mika tebal tirai gudang (PVC sheet), blister pack kemasan alat/obat, hingga pipa PVC saluran industri.",
    "image": "assets/products/plastic/covers/Cover_Plastik_PVC.png",
    "gallery": [
      "assets/products/plastic/covers/Cover_Plastik_PVC.png",
      "assets/products/plastic/pvc/Kemasan_Blister.png",
      "assets/products/plastic/pvc/Pipa_Pvc.png",
      "assets/products/plastic/pvc/PVC_Sheet_.png",
      "assets/products/plastic/pvc/Selang_Air.png"
    ],
    "advantages": [
      "Kekuatan mekanik tinggi dan tahan gesekan",
      "Tahan terhadap zat kimia, minyak, dan korosi air",
      "Tersedia varian transparan jernih hingga lembaran solid"
    ],
    "specs": [
      {
        "key": "Material",
        "val": "Polyvinyl Chloride (PVC)"
      },
      {
        "key": "Varian",
        "val": "PVC Sheet (Lentur/Mika Tebal), PVC Blister, Pipa PVC, PVC Water Pipe"
      },
      {
        "key": "Penggunaan",
        "val": "Penyekat ruangan gudang, kemasan blister, instalasi perpipaan industri"
      }
    ]
  },
  {
    "id": "plastic-nylon",
    "categoryId": "plastic",
    "name": "Plastik Nylon (Polyamide / PA)",
    "categoryName": "Plastic",
    "tag": "Tahan Tusukan",
    "badge": "Vacuum & Barrier",
    "shortDesc": "Material kuat, fleksibel, dan memiliki ketahanan tinggi terhadap panas serta tusukan untuk kemasan vacuum food dan cable ties.",
    "fullDesc": "Plastik Nylon (Polyamide / PA) terkenal dengan daya regang luar biasa, elastisitas tinggi, dan ketahanan terhadap tusukan benda runcing. Sangat umum digunakan pada kantong vacuum makanan beku (frozen food), film pembungkus tahan gesek, serta perlengkapan pengikat kabel (cable ties) industri.",
    "image": "assets/products/plastic/covers/Cover_Plastik_Nylon.png",
    "gallery": [
      "assets/products/plastic/covers/Cover_Plastik_Nylon.png",
      "assets/products/plastic/nylon/Kabel_Ties.png",
      "assets/products/plastic/nylon/Nylon_Film.png",
      "assets/products/plastic/nylon/Vacum_Frozen_Food.png"
    ],
    "advantages": [
      "Ketahanan tusukan dan robekan nomor satu di kelasnya",
      "Barrier udara dan oksigen yang sangat rapat untuk vacuum pack",
      "Tahan rentang suhu dingin beku ekstrem hingga panas"
    ],
    "specs": [
      {
        "key": "Material",
        "val": "Polyamide (PA / Nylon Film)"
      },
      {
        "key": "Aplikasi Utama",
        "val": "Nylon Film, Kemasan Vacuum Frozen Food, Cable Ties Pengikat"
      },
      {
        "key": "Keunggulan",
        "val": "Gas barrier tinggi, anti-bocor, lentur"
      }
    ]
  },
  {
    "id": "plastic-pp",
    "categoryId": "plastic",
    "name": "Plastik PP (Polypropylene)",
    "categoryName": "Plastic",
    "tag": "Food Grade & Ringan",
    "badge": "Wadah & Ritel",
    "shortDesc": "Material ringan, kuat, dan tahan panas untuk gelas plastik, wadah makanan, sedotan, dan perabot plastik.",
    "fullDesc": "Plastik PP (Polypropylene) adalah polimer termoplastik yang ringan, kuat, higienis, dan tahan panas. Merupakan standar utama industri makanan dan minuman (F&B) untuk wadah makanan takeaway (microwave safe), gelas plastik cup sealer, sedotan, dan berbagai perlengkapan berbahan plastik.",
    "image": "assets/products/plastic/covers/Cover_Plastik_PP.png",
    "gallery": [
      "assets/products/plastic/covers/Cover_Plastik_PP.png",
      "assets/products/plastic/pp/Gelas_Plastik.png",
      "assets/products/plastic/pp/Sedotan.png",
      "assets/products/plastic/pp/Wadah_Makanan.png"
    ],
    "advantages": [
      "Bebas BPA (BPA Free) dan food grade aman untuk konsumsi",
      "Tahan suhu hangat/panas makanan tanpa berubah bentuk",
      "Bobot ringan namun kokoh dan tidak mudah retak"
    ],
    "specs": [
      {
        "key": "Material",
        "val": "Polypropylene (PP)"
      },
      {
        "key": "Aplikasi Utama",
        "val": "Gelas Plastik Cup, Wadah Makanan Box, Sedotan, Wadah Rumah Tangga"
      },
      {
        "key": "Ketahanan Suhu",
        "val": "Tahan microwave & air hangat"
      }
    ]
  },
  {
    "id": "plastic-pet",
    "categoryId": "plastic",
    "name": "Plastik PET (Polyethylene Terephthalate)",
    "categoryName": "Plastic",
    "tag": "Jernih Seperti Kaca",
    "badge": "Botol & Wadah",
    "shortDesc": "Material bening, ringan, kuat, dan tahan tekanan untuk botol minuman, botol oli, dan wadah makanan transparan.",
    "fullDesc": "Plastik PET (Polyethylene Terephthalate) memiliki kejernihan visual setara kaca namun dengan bobot sangat ringan dan tahan banting. Sangat luas digunakan untuk botol minuman kemasan, botol oli, botol cairan kimia konsumen, hingga wadah makanan yang menuntut tampilan isi produk secara jelas.",
    "image": "assets/products/plastic/covers/Cover_Plastik_PET.png",
    "gallery": [
      "assets/products/plastic/covers/Cover_Plastik_PET.png",
      "assets/products/plastic/pet/Botol_Minuman_Bening.png",
      "assets/products/plastic/pet/Botol_Minuman_Berwarna.png",
      "assets/products/plastic/pet/Toples_Bening.png",
      "assets/products/plastic/pet/Wadah_Makanan.png"
    ],
    "advantages": [
      "Transparansi sangat jernih dan mengilap",
      "Tahan terhadap tekanan gas/karbonasi dan benturan",
      "Dapat didaur ulang 100% (Recycle Code 1)"
    ],
    "specs": [
      {
        "key": "Material",
        "val": "Polyethylene Terephthalate (PET)"
      },
      {
        "key": "Aplikasi Utama",
        "val": "Botol Minuman PET, Botol Minyak/Oli, Wadah Makanan Jernih"
      },
      {
        "key": "Karakter",
        "val": "Rigid, transparan, higienis"
      }
    ]
  },
  {
    "id": "plastic-ldpe",
    "categoryId": "plastic",
    "name": "Plastik LDPE (Low-Density Polyethylene)",
    "categoryName": "Plastic",
    "tag": "Elastis & Kedap Air",
    "badge": "Film & Wrapping",
    "shortDesc": "Material ringan, lentur, dan tahan kelembapan untuk plastik cor bangunan, trash bag, bubble wrap, dan cling wrap.",
    "fullDesc": "Plastik LDPE (Low-Density Polyethylene) adalah polimer dengan fleksibilitas tinggi, tahan air, dan daya lentur istimewa. Digunakan secara luas untuk plastik cor pelapis lantai konstruksi, kantong sampah (trash bag), plastik gelembung (bubble wrap), dan cling wrap pembungkus makanan.",
    "image": "assets/products/plastic/covers/Cover_Plastik_LDPE.png",
    "gallery": [
      "assets/products/plastic/covers/Cover_Plastik_LDPE.png",
      "assets/products/plastic/ldpe/Bubble_Wrap.png",
      "assets/products/plastic/ldpe/Cling_Wrap.png",
      "assets/products/plastic/ldpe/Plastik_Cor.png",
      "assets/products/plastic/ldpe/Trash_Bag.png"
    ],
    "advantages": [
      "Sangat fleksibel dan tidak mudah getas/robek",
      "Kedap air dan kelembapan untuk perlindungan optimal",
      "Mudah dipress dan disegel rapat"
    ],
    "specs": [
      {
        "key": "Material",
        "val": "Low-Density Polyethylene (LDPE)"
      },
      {
        "key": "Aplikasi Utama",
        "val": "Plastik Cor, Trash Bag Hitam/Warna, Bubble Wrap, Cling Wrap"
      },
      {
        "key": "Format",
        "val": "Roll Plastik Cor, Roll Bubble, Kantong Sampah"
      }
    ]
  },
  {
    "id": "plastic-hdpe",
    "categoryId": "plastic",
    "name": "Plastik HDPE (High-Density Polyethylene)",
    "categoryName": "Plastic",
    "tag": "Kaku & Tahan Kimia",
    "badge": "Wadah Industri",
    "shortDesc": "Material kuat, kaku, dan tahan kimia untuk keranjang industri, drum, botol oli, jerigen, dan kantong sampah medis.",
    "fullDesc": "Plastik HDPE (High-Density Polyethylene) memiliki struktur molekul padat yang menghasilkan kekuatan tarik tinggi, kekakuan ekstra, serta ketahanan luar biasa terhadap asam, pelarut, dan zat kimia. Menjadi pilihan nomor satu untuk jerigen kimia, drum industri, keranjang pabrik, botol oli mesin, dan kantong medis biohazard.",
    "image": "assets/products/plastic/covers/Cover_Plastik_HDPE.png",
    "gallery": [
      "assets/products/plastic/covers/Cover_Plastik_HDPE.png",
      "assets/products/plastic/hdpe/Botol_Oli.png",
      "assets/products/plastic/hdpe/Drum.png",
      "assets/products/plastic/hdpe/Jerigen.png",
      "assets/products/plastic/hdpe/Keranjang_Industri.png",
      "assets/products/plastic/hdpe/Sampah_Medis.png"
    ],
    "advantages": [
      "Tahan terhadap bahan kimia pekat, pelarut, dan oli",
      "Struktur sangat kokoh, tahan banting, dan tahan tumpukan berat",
      "Aman untuk aplikasi industri keras maupun limbah medis"
    ],
    "specs": [
      {
        "key": "Material",
        "val": "High-Density Polyethylene (HDPE)"
      },
      {
        "key": "Aplikasi Utama",
        "val": "Keranjang Industri, Drum Plastik, Botol Oli, Jerigen Kimia, Kantung Sampah Medis"
      },
      {
        "key": "Karakteristik",
        "val": "Kaku, buram (matte), daya tahan impak tinggi"
      }
    ]
  },
  {
    "id": "pkg-kardus-corrugated",
    "categoryId": "packaging",
    "subCategory": "kardus",
    "subCategoryName": "Kemasan Kardus & Kertas",
    "name": "Kardus & Karton Corrugated Box",
    "categoryName": "Packaging",
    "tag": "Kemasan Karton",
    "badge": "Packing & Pengiriman",
    "shortDesc": "Solusi kemasan berbahan kertas karton bergelombang untuk packing, penyimpanan di gudang, dan pengiriman kargo perusahaan.",
    "fullDesc": "Karton box corrugated berkualitas tinggi dengan pilihan Single Wall (3 ply), Double Wall (5 ply), hingga Triple Wall untuk memastikan keamanan penyimpanan di rak gudang serta distribusi logistik antarpulau dan ekspor.",
    "image": "assets/products/packaging/(Kardus_Packing)_Kardus_&_Karton_Corrugated_Box.png",
    "gallery": [
      "assets/products/packaging/(Kardus_Packing)_Kardus_&_Karton_Corrugated_Box.png",
      "assets/products/packaging/(Kemasan_Makanan)_Kardus_&_Karton_Corrugated_Box_.png",
      "assets/products/packaging/(Kertas_Packing)_Kardus_&_Karton_Corrugated_Box.png"
    ],
    "advantages": [
      "Kekuatan tumpuk beban tinggi (stacking strength optimal)",
      "Bisa custom ukuran dan cetak logo/branding perusahaan",
      "Material ramah lingkungan dan 100% dapat didaur ulang"
    ],
    "specs": [
      {
        "key": "Subkategori",
        "val": "Kemasan Kardus & Kertas"
      },
      {
        "key": "Tipe Flute",
        "val": "B/F, C/F, E/F, Single Wall (3 ply) & Double Wall (5 ply)"
      },
      {
        "key": "Penggunaan",
        "val": "Packing pengiriman produk, karton master, dus arsip"
      }
    ]
  },
  {
    "id": "pkg-paper-bag",
    "categoryId": "packaging",
    "subCategory": "kardus",
    "subCategoryName": "Kemasan Kardus & Kertas",
    "name": "Paper Bag & Kantong Kertas Kraft",
    "categoryName": "Packaging",
    "tag": "Eco Friendly",
    "badge": "Kemasan Kertas",
    "shortDesc": "Kantong kertas kraft ramah lingkungan berkualitas kuat untuk pengemasan belanja, merchandise, dan pengiriman barang ritel.",
    "fullDesc": "Solusi kemasan kantong kertas cokelat dan putih berbahan kraft tebal ramah lingkungan dengan tali pegangan kuat (twisted/flat handle). Memberikan kesan ramah lingkungan dan profesional untuk pengemasan produk perusahaan Anda.",
    "image": "assets/products/packaging/(Kertas_Packing)_Kardus_&_Karton_Corrugated_Box.png",
    "gallery": [
      "assets/products/packaging/(Kertas_Packing)_Kardus_&_Karton_Corrugated_Box.png"
    ],
    "advantages": [
      "Bahan kraft tebal tidak mudah sobek saat membawa beban",
      "Bisa custom sablon logo brand perusahaan",
      "Mendukung program keberlanjutan ramah lingkungan (green packaging)"
    ],
    "specs": [
      {
        "key": "Subkategori",
        "val": "Kemasan Kardus & Kertas"
      },
      {
        "key": "Material",
        "val": "Kraft Paper Cokelat & Putih (125 - 200 gsm)"
      },
      {
        "key": "Handle",
        "val": "Tali Kur, Tali Kertas Twisted, atau Tanpa Tali"
      }
    ]
  },
  {
    "id": "pkg-container-box",
    "categoryId": "packaging",
    "subCategory": "kemasan-plastik",
    "subCategoryName": "Kemasan Plastik",
    "name": "Container Box Plastik Industri",
    "categoryName": "Packaging",
    "tag": "Stackable Box",
    "badge": "Wadah Gudang",
    "shortDesc": "Kotak kontainer plastik tebal serbaguna untuk wadah penyimpanan sparepart, komponen manufaktur, dan distribusi kargo.",
    "fullDesc": "Container box plastik industri berbahan PP murni ekstra tebal yang dirancang kuat menahan beban berat, dapat ditumpuk secara rapi (stackable), serta tahan benturan untuk operasional gudang dan pabrik perakitan.",
    "image": "assets/products/packaging/Container_Box_Plastik_Industri_.png",
    "gallery": [
      "assets/products/packaging/Container_Box_Plastik_Industri_.png"
    ],
    "advantages": [
      "Konstruksi dinding bertulang kuat menahan beban tumpukan tinggi",
      "Tersedia tipe buntu (solid) dan tipe berlubang (mesh)",
      "Mudah dibersihkan dan tahan terhadap oli maupun cairan industri"
    ],
    "specs": [
      {
        "key": "Subkategori",
        "val": "Kemasan Plastik"
      },
      {
        "key": "Material",
        "val": "Polypropylene (PP) Murni Grade Industri"
      },
      {
        "key": "Pilihan Ukuran",
        "val": "Kapasitas 20L, 35L, 50L, 75L, hingga 100L"
      }
    ]
  },
  {
    "id": "pkg-busa-pe",
    "categoryId": "packaging",
    "subCategory": "kemasan-plastik",
    "subCategoryName": "Kemasan Plastik",
    "name": "Busa PE (PE Foam Protection)",
    "categoryName": "Packaging",
    "tag": "Anti-Benturan",
    "badge": "Pelindung Empuk",
    "shortDesc": "Busa polietilena empuk untuk melindungi produk dari goresan, lecet, dan peredam getaran selama pengiriman.",
    "fullDesc": "PE Foam (Polyethylene Foam) adalah material busa pelindung berserat halus yang berfungsi mencegah gesekan, goresan permukaan, dan meredam getaran pada produk elektronik, kaca, suku cadang mesin, dan furnitur.",
    "image": "assets/products/packaging/Busa_PE_(PE_Foam_Protection).png",
    "gallery": [
      "assets/products/packaging/Busa_PE_(PE_Foam_Protection).png"
    ],
    "advantages": [
      "Permukaan sangat lembut, melindungi lapisan cat dan finishing",
      "Elastis, ringan, dan efektif meredam benturan",
      "Tersedia bentuk roll lembaran tebal dan kantong pouch"
    ],
    "specs": [
      {
        "key": "Subkategori",
        "val": "Kemasan Plastik"
      },
      {
        "key": "Ketebalan",
        "val": "0.5 mm, 1 mm, 2 mm, 3 mm, hingga 5 mm"
      },
      {
        "key": "Format",
        "val": "Roll Lebar 1 - 1.2 meter & Custom Bag"
      }
    ]
  },
  {
    "id": "pkg-stretch-film",
    "categoryId": "packaging",
    "subCategory": "kemasan-plastik",
    "subCategoryName": "Kemasan Plastik",
    "name": "Plastic Stretch Film Industri",
    "categoryName": "Packaging",
    "tag": "Best Seller",
    "badge": "Pallet Wrapping",
    "shortDesc": "Material plastik stretch film elastis tinggi untuk mengamankan dan mengunci muatan pallet saat pengiriman dan penyimpanan.",
    "fullDesc": "Plastic stretch film bermutu tinggi dengan elastisitas regang optimal untuk membungkus kargo pallet, mencegah pergeseran barang di perjalanan, serta melindungi dari debu, air hujan, dan kelembapan.",
    "image": "assets/products/packaging/Plastic_Stretch_Film_Industri.png",
    "gallery": [
      "assets/products/packaging/Plastic_Stretch_Film_Industri.png"
    ],
    "advantages": [
      "Daya regang elastisitas tinggi dan tidak mudah sobek pada sudut tajam",
      "Daya lekat plastik kuat mengikat tanpa lem tambahan",
      "Tersedia varian Hand Roll (manual) dan Machine Roll (otomatis)"
    ],
    "specs": [
      {
        "key": "Subkategori",
        "val": "Kemasan Plastik"
      },
      {
        "key": "Ketebalan",
        "val": "17 mikron, 20 mikron, 25 mikron"
      },
      {
        "key": "Lebar",
        "val": "500 mm (Standard Pallet Wrapping)"
      }
    ]
  },
  {
    "id": "pkg-peti-kayu",
    "categoryId": "packaging",
    "subCategory": "kemasan-kayu",
    "subCategoryName": "Kemasan Kayu",
    "name": "Peti Kayu Solid (Wooden Crate)",
    "categoryName": "Packaging",
    "tag": "Proteksi Berat",
    "badge": "Heavy Cargo",
    "shortDesc": "Kemasan kayu kokoh untuk melindungi barang berat, mesin industri, dan peralatan elektronik selama distribusi ekspedisi.",
    "fullDesc": "Peti kayu industri custom-built berbahan kayu keras pilihan atau plywood tebal berkualitas tinggi. Dirancang khusus untuk proteksi kargo bernilai tinggi, mesin pabrik, dan suku cadang berat dari benturan keras selama ekspedisi darat, laut, maupun udara.",
    "image": "assets/products/packaging/Peti_Kayu_Solid_(Wooden_Crate).png",
    "gallery": [
      "assets/products/packaging/Peti_Kayu_Solid_(Wooden_Crate).png"
    ],
    "advantages": [
      "Konstruksi rangka kayu sangat kokoh menahan beban hingga berton-ton",
      "Desain ukuran custom sesuai dimensi produk klien",
      "Memenuhi standar pengiriman kargo aman antarpulau & ekspor"
    ],
    "specs": [
      {
        "key": "Subkategori",
        "val": "Kemasan Kayu"
      },
      {
        "key": "Material",
        "val": "Kayu Keras / Rimba Campur / Plywood Tebal"
      },
      {
        "key": "Kapasitas Beban",
        "val": "Customized dari 100 kg hingga 5+ Ton"
      }
    ]
  },
  {
    "id": "pkg-palet-kayu",
    "categoryId": "packaging",
    "subCategory": "kemasan-kayu",
    "subCategoryName": "Kemasan Kayu",
    "name": "Palet Kayu Standar (Wooden Pallet)",
    "categoryName": "Packaging",
    "tag": "Standar Gudang",
    "badge": "Forklift & Racking",
    "shortDesc": "Palet kayu kokoh untuk tatakan kargo, penyimpanan racking gudang, dan mempermudah operasional forklift.",
    "fullDesc": "Palet kayu standar industri dengan konstruksi 2-way dan 4-way entry. Mampu menopang beban statis maupun dinamis dengan stabil, mempermudah perpindahan barang menggunakan forklift maupun hand pallet.",
    "image": "assets/products/packaging/Palet_Kayu_Standar_(Wooden_Pallet).png",
    "gallery": [
      "assets/products/packaging/Palet_Kayu_Standar_(Wooden_Pallet).png"
    ],
    "advantages": [
      "Struktur paku ulir kuat tidak mudah goyah atau patah",
      "Standar dimensi pas untuk kontainer kargo dan rak gudang",
      "Tersedia opsi perlakuan panas / fumigasi (ISPM 15)"
    ],
    "specs": [
      {
        "key": "Subkategori",
        "val": "Kemasan Kayu"
      },
      {
        "key": "Ukuran Populer",
        "val": "100 x 120 cm, 110 x 110 cm, 80 x 120 cm"
      },
      {
        "key": "Daya Angkut",
        "val": "Dinamis 1 - 1.5 Ton, Statis 2 - 3 Ton"
      }
    ]
  },
  {
    "id": "pkg-strapping-band",
    "categoryId": "packaging",
    "subCategory": "pengikat-pengaman",
    "subCategoryName": "Pengikat & Pengaman",
    "name": "Strapping Band (Tali Strapping PP/PET)",
    "categoryName": "Packaging",
    "tag": "Pengikat Koli",
    "badge": "Bundling Cargo",
    "shortDesc": "Tali strapping mesin dan manual berkualitas tinggi untuk mengikat dan mengamankan koli karton serta muatan pallet.",
    "fullDesc": "Tali pengikat strapping band berbahan Polypropylene (PP) dan Polyester (PET) dengan kekuatan tarik tinggi. Digunakan untuk bundling kardus, pipa, dan penguncian pallet barang agar tidak goyah atau berantakan.",
    "image": "assets/products/packaging/Strapping_Band_(Tali_Strapping_PP-PET).png",
    "gallery": [
      "assets/products/packaging/Strapping_Band_(Tali_Strapping_PP-PET).png"
    ],
    "advantages": [
      "Daya tarik dan regangan tidak mudah putus saat ditarik kencang",
      "Cocok untuk mesin otomatis, semi-otomatis, maupun klem manual",
      "Permukaan rata anti-macet pada saluran mesin strapping"
    ],
    "specs": [
      {
        "key": "Subkategori",
        "val": "Pengikat & Pengaman"
      },
      {
        "key": "Lebar Tali",
        "val": "9 mm, 12 mm, 15 mm, 19 mm"
      },
      {
        "key": "Material",
        "val": "PP Strapping Band & Heavy Duty PET"
      }
    ]
  },
  {
    "id": "pkg-sabuk-kargo",
    "categoryId": "packaging",
    "subCategory": "pengikat-pengaman",
    "subCategoryName": "Pengikat & Pengaman",
    "name": "Sabuk Kargo (Ratchet Cargo Strap)",
    "categoryName": "Packaging",
    "tag": "Heavy Lashing",
    "badge": "Truk & Kontainer",
    "shortDesc": "Sabuk pengikat kargo muatan berat dengan tuas ratchet pengunci presisi untuk pengamanan logistik truk dan kontainer.",
    "fullDesc": "Ratchet tie down cargo lashing strap berbahan anyaman polyester tenun tebal dengan gesper pengunci baja kuat. Mencegah muatan bergeser atau terguling selama perjalanan darat jarak jauh.",
    "image": "assets/products/packaging/Sabuk_Kargo_(Ratchet_Cargo_Strap).png",
    "gallery": [
      "assets/products/packaging/Sabuk_Kargo_(Ratchet_Cargo_Strap).png"
    ],
    "advantages": [
      "Mekanisme tuas ratchet mengunci sangat kuat dan mudah dikencangkan",
      "Kait besi berlapis galvanis tahan karat dan cuaca ekstrem",
      "Standar kapasitas beban teruji aman untuk logistik kargo"
    ],
    "specs": [
      {
        "key": "Subkategori",
        "val": "Pengikat & Pengaman"
      },
      {
        "key": "Lebar Sabuk",
        "val": "2 Inch (50 mm) & 1 Inch (25 mm)"
      },
      {
        "key": "Kapasitas Beban",
        "val": "1 Ton, 3 Ton, hingga 5 Ton (Break Strength)"
      }
    ]
  },
  {
    "id": "pkg-goodie-bag",
    "categoryId": "packaging",
    "subCategory": "kemasan-kain",
    "subCategoryName": "Kemasan Kain",
    "name": "Goodie Bag Kain (Custom & Original)",
    "categoryName": "Packaging",
    "tag": "Custom Branding",
    "badge": "Kemasan Kain",
    "shortDesc": "Kemasan tas berbahan kain spunbond dan canvas untuk membungkus, melindungi, dan mengemas berbagai barang perusahaan.",
    "fullDesc": "Goodie bag ramah lingkungan dengan bahan non-woven spunbond atau kanvas tebal. Dapat dipesan polos (original) maupun custom sablon logo perusahaan untuk souvenir event kantor, kemasan belanja produk, dan corporate gift.",
    "image": "assets/products/packaging/Goodie_Bag_Kain_(Custom_&.png",
    "gallery": [
      "assets/products/packaging/Goodie_Bag_Kain_(Custom_&.png"
    ],
    "advantages": [
      "Bahan kain spunbond tebal 75-100 gsm kuat dipakai berulang kali",
      "Jahitan dan press rapi dengan daya angkut hingga 10 kg",
      "Pilihan warna lengkap dan sablon logo tajam presisi"
    ],
    "specs": [
      {
        "key": "Subkategori",
        "val": "Kemasan Kain"
      },
      {
        "key": "Material",
        "val": "Spunbond Non-Woven, Blacu, Canvas"
      },
      {
        "key": "Model",
        "val": "Tali Pegangan (Handle Bag), Box Bag, Tali Serut"
      }
    ]
  },
  {
    "id": "atk-pulpen",
    "categoryId": "stationery",
    "name": "Pulpen Kantor (Ballpoint Pen)",
    "categoryName": "Office Stationery",
    "tag": "ATK Harian",
    "badge": "Alat Tulis",
    "shortDesc": "Pulpen kantor berkualitas dengan tinta lancar, tidak mudah bocor, dan nyaman digenggam untuk operasional harian.",
    "fullDesc": "Pulpen tinta gel dan semi-gel dengan mata pena presisi 0.5 - 0.7 mm. Mengalir lancar tanpa macet, cepat kering, dan sangat nyaman digunakan untuk penulisan berkas dan tanda tangan dokumen resmi perusahaan.",
    "image": "assets/products/stationery/Pulpen_Kantor_(Ballpoint_Pen).png",
    "gallery": [
      "assets/products/stationery/Pulpen_Kantor_(Ballpoint_Pen).png"
    ],
    "advantages": [
      "Tinta hitam & biru pekat",
      "Grip nyaman anti-slip",
      "Kemasan box isi 12 pcs hemat grosir"
    ],
    "specs": [
      {
        "key": "Jenis",
        "val": "Ballpoint Pen 0.5 mm & 0.7 mm"
      },
      {
        "key": "Warna Tinta",
        "val": "Hitam, Biru, Merah"
      }
    ]
  },
  {
    "id": "atk-pensil",
    "categoryId": "stationery",
    "name": "Pensil Kayu 2B & Pensil Mekanik",
    "categoryName": "Office Stationery",
    "tag": "ATK Harian",
    "badge": "Alat Tulis",
    "shortDesc": "Pensil kayu grade 2B dan pensil mekanik presisi untuk kebutuhan gambar teknik, draft arsip, dan catatan kerja.",
    "fullDesc": "Pensil grafit kualitas terbaik dengan lead hitam pekat tidak mudah patah saat diraut atau ditekan. Tersedia tipe pensil kayu 2B standar komputer serta pensil mekanik 0.5 mm elegan untuk staf kantor.",
    "image": "assets/products/stationery/Pensil_Kayu_2B_&_Pensil_Mekanik.png",
    "gallery": [
      "assets/products/stationery/Pensil_Kayu_2B_&_Pensil_Mekanik.png"
    ],
    "advantages": [
      "Grafit hitam merata",
      "Mudah dihapus tanpa merusak kertas",
      "Cocok untuk draft teknik & memo"
    ],
    "specs": [
      {
        "key": "Tipe",
        "val": "Pensil Kayu 2B & Pensil Mekanik 0.5 mm"
      },
      {
        "key": "Kemasan",
        "val": "Lusin (12 pcs)"
      }
    ]
  },
  {
    "id": "atk-spidol",
    "categoryId": "stationery",
    "name": "Spidol Whiteboard & Permanent Marker",
    "categoryName": "Office Stationery",
    "tag": "Meeting & Gudang",
    "badge": "Marker",
    "shortDesc": "Spidol whiteboard mudah dihapus dan spidol permanen anti-luntur untuk penandaan dus kargo dan papan rapat.",
    "fullDesc": "Spidol papan tulis (whiteboard) dengan tinta pekat mudah dihapus bersih tanpa residu, serta spidol permanen tahan air untuk penulisan label dus kemasan logistik di gudang.",
    "image": "assets/products/stationery/Spidol_Whiteboard_&_Permanent_Marker.png",
    "gallery": [
      "assets/products/stationery/Spidol_Whiteboard_&_Permanent_Marker.png"
    ],
    "advantages": [
      "Ujung spidol tebal & presisi (chisel / round tip)",
      "Tinta cepat kering tidak bleber",
      "Tersedia opsi isi ulang tinta"
    ],
    "specs": [
      {
        "key": "Varian",
        "val": "Whiteboard Marker & Permanent Marker"
      },
      {
        "key": "Warna",
        "val": "Hitam, Biru, Merah"
      }
    ]
  },
  {
    "id": "atk-map-plastik",
    "categoryId": "stationery",
    "name": "Map Plastik (Folder One / Business File)",
    "categoryName": "Office Stationery",
    "tag": "Pengarsipan",
    "badge": "Arsip Plastik",
    "shortDesc": "Map plastik folio F4 dengan acco pengunci (snelhecter) untuk menyimpan dokumen penawaran dan arsip kantor.",
    "fullDesc": "Map plastik business file ukuran folio F4 berbahan plastik PP transparan tebal dengan penjepit logam fleksibel (acco snelhecter). Melindungi lembaran dokumen penting agar tidak tercecer, kusut, atau terkena cipratan air.",
    "image": "assets/products/stationery/Map_Plastik_(Folder_One_-_Business_File)_.png",
    "gallery": [
      "assets/products/stationery/Map_Plastik_(Folder_One_-_Business_File)_.png"
    ],
    "advantages": [
      "Cover bening elegan untuk halaman depan",
      "Plastik tebal awet tidak mudah sobek",
      "Penjepit acco kuat"
    ],
    "specs": [
      {
        "key": "Ukuran",
        "val": "Folio / F4"
      },
      {
        "key": "Warna Punggung",
        "val": "Biru, Merah, Kuning, Hijau, Hitam"
      }
    ]
  },
  {
    "id": "atk-map-kertas",
    "categoryId": "stationery",
    "name": "Map Kertas (Stopmap Folio & Buffalo)",
    "categoryName": "Office Stationery",
    "tag": "Administrasi",
    "badge": "Arsip Dokumen",
    "shortDesc": "Map kertas karton tebal stopmap folio dan map buffalo untuk penyimpanan berkas administrasi dan surat menyurat.",
    "fullDesc": "Stopmap kertas folio dengan kuping pengunci berkas di kedua sisi serta map berbahan kertas buffalo tebal bertekstur. Ideal untuk mengelompokkan dokumen kontrak, surat jalan, dan berkas kepegawaian.",
    "image": "assets/products/stationery/Map_Kertas_(Stopmap_Folio_&_Buffalo).png",
    "gallery": [
      "assets/products/stationery/Map_Kertas_(Stopmap_Folio_&_Buffalo).png"
    ],
    "advantages": [
      "Kertas karton kaku dan tebal",
      "Mudah ditulisi judul dokumen",
      "Harga pengadaan sangat ekonomis"
    ],
    "specs": [
      {
        "key": "Ukuran",
        "val": "Folio (F4)"
      },
      {
        "key": "Material",
        "val": "Kertas Brief Card / Karton Buffalo"
      }
    ]
  },
  {
    "id": "atk-kertas-hvs",
    "categoryId": "stationery",
    "name": "Kertas HVS (A4, F4, A3 70-80 gsm)",
    "categoryName": "Office Stationery",
    "tag": "Kebutuhan Pokok",
    "badge": "Cetak & Fotokopi",
    "shortDesc": "Kertas HVS putih bersih dengan gramatur 70 & 80 gsm anti-jam untuk mesin printer laser, inkjet, dan fotokopi.",
    "fullDesc": "Kertas HVS berkualitas tinggi dengan tingkat keputihan maksimal (high whiteness) dan opasitas tinggi yang mendukung cetak bolak-balik tanpa tembus tinta. Anti-jam pada semua merek printer kantor.",
    "image": "assets/products/stationery/Kertas_HVS_(A4,_F4,_A3_70-80_gsm).png",
    "gallery": [
      "assets/products/stationery/Kertas_HVS_(A4,_F4,_A3_70-80_gsm).png"
    ],
    "advantages": [
      "Potongan sudut presisi anti paper jam",
      "Hasil cetak teks & grafik tajam kontras",
      "Kemasan rim 500 lembar rapi"
    ],
    "specs": [
      {
        "key": "Ukuran",
        "val": "A4 (210x297mm), F4/Folio (215x330mm), A3"
      },
      {
        "key": "Gramatur",
        "val": "70 gsm & 80 gsm"
      }
    ]
  },
  {
    "id": "atk-box-file",
    "categoryId": "stationery",
    "name": "Box File (Kotak Arsip Dokumen)",
    "categoryName": "Office Stationery",
    "tag": "Manajemen Meja",
    "badge": "Kerapian Kantor",
    "shortDesc": "Kotak arsip vertikal berbahan plastik dan karton tebal untuk merapikan majalah, ordner, dan berkas di meja kerja.",
    "fullDesc": "Box file vertikal kokoh untuk menampung kumpulan dokumen, katalog produk, map, dan buku kerja secara teratur di atas meja kantor maupun di rak lemari arsip.",
    "image": "assets/products/stationery/Box_File_(Kotak_Arsip_Dokumen).png",
    "gallery": [
      "assets/products/stationery/Box_File_(Kotak_Arsip_Dokumen).png"
    ],
    "advantages": [
      "Struktur kokoh tidak mudah roboh",
      "Tersedia kantong label indeks pada punggung",
      "Tampilan profesional"
    ],
    "specs": [
      {
        "key": "Material",
        "val": "Plastik PP Tebal & Karton Laminasi"
      },
      {
        "key": "Lebar Punggung",
        "val": "7 cm - 10 cm"
      }
    ]
  },
  {
    "id": "atk-amplop",
    "categoryId": "stationery",
    "name": "Amplop Surat (Putih & Cokelat)",
    "categoryName": "Office Stationery",
    "tag": "Korespondensi",
    "badge": "Surat Resmi",
    "shortDesc": "Amplop surat kantor warna putih berperakat dan amplop cokelat dinas berbagai ukuran untuk pengiriman berkas resmi.",
    "fullDesc": "Amplop kantor berkualitas dengan lem perekat instan (self-adhesive seal). Tersedia varian amplop putih polos ukuran standar dan amplop cokelat tali/seal untuk dokumen tebal, invoice, dan surat kontrak.",
    "image": "assets/products/stationery/Amplop_Surat_(Putih_&_Cokelat).png",
    "gallery": [
      "assets/products/stationery/Amplop_Surat_(Putih_&_Cokelat).png"
    ],
    "advantages": [
      "Lem penutup kuat menjaga kerahasiaan berkas",
      "Kertas tebal tidak tembus pandang",
      "Pilihan ukuran lengkap"
    ],
    "specs": [
      {
        "key": "Tipe",
        "val": "Amplop Putih No. 104, 110 & Amplop Cokelat Folio/A4"
      },
      {
        "key": "Penutup",
        "val": "Peel & Seal Lem Instan"
      }
    ]
  },
  {
    "id": "atk-sticky-notes",
    "categoryId": "stationery",
    "name": "Sticky Notes (Catatan Tempel)",
    "categoryName": "Office Stationery",
    "tag": "Memo & Reminder",
    "badge": "Memo Tempel",
    "shortDesc": "Kertas catatan tempel aneka warna neon dengan lem ramah permukaan yang tidak meninggalkan bekas lem saat dilepas.",
    "fullDesc": "Sticky notes memo pad praktis untuk menandai halaman berkas, mencatat pesan telepon penting, dan to-do list kerja. Daya rekat pas dan bisa dipindah-pindah tanpa merusak permukaan kertas.",
    "image": "assets/products/stationery/Sticky_Notes_(Catatan_Tempel).png",
    "gallery": [
      "assets/products/stationery/Sticky_Notes_(Catatan_Tempel).png"
    ],
    "advantages": [
      "Lem repositionable tidak membekas",
      "Warna cerah mencolok mudah terlihat",
      "Kertas nyaman ditulisi pulpen/pensil"
    ],
    "specs": [
      {
        "key": "Ukuran",
        "val": "3 x 3 inch (76x76mm) & Page Marker Strip"
      },
      {
        "key": "Warna",
        "val": "Kuning, Pink, Hijau, Oranye Neon"
      }
    ]
  },
  {
    "id": "atk-stapler",
    "categoryId": "stationery",
    "name": "Stapler & Isi Staples Kantor",
    "categoryName": "Office Stationery",
    "tag": "Pengikat Dokumen",
    "badge": "Alat Kantor",
    "shortDesc": "Alat hekter stapler meja ergonomis dan isi staples baja kuat untuk menyatukan tumpukan dokumen kantor.",
    "fullDesc": "Stapler kantor berbahan logam dengan casing ergonomis anti-selip. Tersedia stapler ukuran standar No. 10, No. 3 (24/6), hingga heavy duty stapler untuk menjilid berkas tebal hingga 100+ lembar.",
    "image": "assets/products/stationery/Stapler_&_Isi_Staples_Kantor.png",
    "gallery": [
      "assets/products/stationery/Stapler_&_Isi_Staples_Kantor.png"
    ],
    "advantages": [
      "Mekanisme tekan ringan dan anti-jamming",
      "Bodi logam awet pemakaian bertahun-tahun",
      "Isi staples tajam menusuk rapi"
    ],
    "specs": [
      {
        "key": "Ukuran Stapler",
        "val": "No. 10, No. 3 (24/6 & 26/6), Heavy Duty"
      },
      {
        "key": "Kapasitas",
        "val": "10 - 100+ Lembar HVS"
      }
    ]
  },
  {
    "id": "atk-paper-clip",
    "categoryId": "stationery",
    "name": "Paper Clip (Klip Kertas Logam)",
    "categoryName": "Office Stationery",
    "tag": "Klip Berkas",
    "badge": "Aksesoris Meja",
    "shortDesc": "Klip kertas logam berlapis anti-karat untuk menyatukan lembaran dokumen sementara tanpa merusak kertas.",
    "fullDesc": "Penjepit kertas model oval kawat baja berlapis nikel anti-karat dan vinyl warna. Sangat praktis untuk mengelompokkan lembaran kertas kerja harian tanpa perlu melubangi kertas.",
    "image": "assets/products/stationery/Paper_Clip_(Klip_Kertas_Logam).png",
    "gallery": [
      "assets/products/stationery/Paper_Clip_(Klip_Kertas_Logam).png"
    ],
    "advantages": [
      "Ujung kawat halus tidak merobek kertas",
      "Tahan karat dan awet berulang kali",
      "Tersedia kemasan box ekonomis"
    ],
    "specs": [
      {
        "key": "Ukuran",
        "val": "No. 3 (Kecil - 28mm) & No. 5 (Besar - 50mm)"
      },
      {
        "key": "Kemasan",
        "val": "Box isi 100 pcs"
      }
    ]
  },
  {
    "id": "atk-binder-clip",
    "categoryId": "stationery",
    "name": "Binder Clip (Klip Penjepit Baja)",
    "categoryName": "Office Stationery",
    "tag": "Penjepit Tebal",
    "badge": "Baja Kuat",
    "shortDesc": "Klip penjepit berkas baja hitam dengan tuas tangkai fleksibel untuk menjepit tumpukan dokumen tebal dengan sangat kuat.",
    "fullDesc": "Binder clip baja pegas hitam berkualitas tinggi dengan tangkai krom lipat. Menghasilkan daya jepit super kuat untuk mengamankan berkas laporan keuangan, bundel invoice, dan draft tebal tanpa lepas.",
    "image": "assets/products/stationery/Binder_Clip_(Klip_Penjepit_Baja).png",
    "gallery": [
      "assets/products/stationery/Binder_Clip_(Klip_Penjepit_Baja).png"
    ],
    "advantages": [
      "Baja pegas elastis kuat tidak kendor",
      "Tangkai krom fleksibel bisa dilepas",
      "Tersedia nomor ukuran lengkap"
    ],
    "specs": [
      {
        "key": "Ukuran",
        "val": "No. 105 (15mm), No. 107 (19mm), No. 155 (32mm), No. 200 (41mm), No. 260 (51mm)"
      },
      {
        "key": "Kemasan",
        "val": "Box isi 12 pcs"
      }
    ]
  },
  {
    "id": "atk-cutter",
    "categoryId": "stationery",
    "name": "Cutter & Pisau Utilitas Kantor",
    "categoryName": "Office Stationery",
    "tag": "Alat Potong",
    "badge": "Presisi & Tajam",
    "shortDesc": "Pisau pemotong kertas dan pembuka kardus paket dengan kunci pengaman pisau otomatis (auto-lock).",
    "fullDesc": "Cutter serbaguna dengan grip ergonomis dan mata pisau baja SK5 ekstra tajam. Dilengkapi mekanisme auto-lock pengaman bilah pisau serta pemecah mata pisau tumpul pada bagian ujung penutup.",
    "image": "assets/products/stationery/Cutter_&_Pisau_Utilitas_Kantor.png",
    "gallery": [
      "assets/products/stationery/Cutter_&_Pisau_Utilitas_Kantor.png"
    ],
    "advantages": [
      "Bilah pisau tajam presisi",
      "Sistem pengunci pisau aman saat memotong",
      "Tersedia refill isi ulang mata cutter"
    ],
    "specs": [
      {
        "key": "Ukuran",
        "val": "Cutter Kecil (A-300 / 9mm) & Cutter Besar (L-500 / 18mm)"
      },
      {
        "key": "Bahan Pisau",
        "val": "High Carbon Steel SK5"
      }
    ]
  },
  {
    "id": "atk-gunting",
    "categoryId": "stationery",
    "name": "Gunting Kantor Stainless Steel",
    "categoryName": "Office Stationery",
    "tag": "Alat Potong",
    "badge": "Ergonomis",
    "shortDesc": "Gunting serbaguna bilah stainless steel anti-karat dengan gagang karet ergonomis untuk pemotongan rapi dan nyaman.",
    "fullDesc": "Gunting kantor berkualitas tinggi dengan bilah baja nirkarat (stainless steel) tajam dan presisi. Gagang berlapis karet lembut memastikan kenyamanan tangan staf saat memotong kertas, plastik, dan lakban dalam jumlah banyak.",
    "image": "assets/products/stationery/Gunting_Kantor_Stainless_Steel.png",
    "gallery": [
      "assets/products/stationery/Gunting_Kantor_Stainless_Steel.png"
    ],
    "advantages": [
      "Bilah stainless tahan karat dan awet tajam",
      "Gagang ergonomis tidak membuat jari pegal",
      "Potongan halus dan lurus"
    ],
    "specs": [
      {
        "key": "Ukuran",
        "val": "Panjang 6.5 Inch, 7 Inch, 8.5 Inch"
      },
      {
        "key": "Material",
        "val": "Stainless Steel + Rubber Handle"
      }
    ]
  },
  {
    "id": "atk-highlighter",
    "categoryId": "stationery",
    "name": "Highlighter (Spidol Penanda Teks)",
    "categoryName": "Office Stationery",
    "tag": "Penanda Teks",
    "badge": "Warna Neon",
    "shortDesc": "Spidol penanda teks warna terang mencolok dengan ujung chisel tip untuk menandai poin penting pada laporan kerja.",
    "fullDesc": "Spidol penanda teks (stabilo) dengan pigmen fluorescent cerah berbasis air (water-based) yang cepat kering dan tidak merembes ke balik kertas. Ujung miring chisel tip memungkinkan penandaan garis tebal maupun garis bawah halus.",
    "image": "assets/products/stationery/Highlighter_(Spidol_Penanda_Teks).png",
    "gallery": [
      "assets/products/stationery/Highlighter_(Spidol_Penanda_Teks).png"
    ],
    "advantages": [
      "Warna neon cerah kontras terbaca jelas",
      "Tidak melunturkan tinta pulpen atau fotokopi",
      "Tutup kedap udara mencegah spidol kering"
    ],
    "specs": [
      {
        "key": "Warna",
        "val": "Kuning Neon, Hijau, Oranye, Pink, Biru"
      },
      {
        "key": "Tipe Ujung",
        "val": "Chisel Tip 1 - 4 mm"
      }
    ]
  },
  {
    "id": "safety-helm",
    "categoryId": "safety",
    "name": "Helm Safety (Safety Helmet)",
    "categoryName": "Safety Equipment",
    "tag": "Pelindung Kepala",
    "badge": "Standar SNI & ANSI",
    "shortDesc": "Helm pelindung kepala industri standar SNI / ANSI dengan suspensi putar (fastrac) dan tali dagu untuk kenyamanan kerja proyek.",
    "fullDesc": "Helm keselamatan kerja bersertifikasi standar SNI dan ANSI Z89.1 berbahan plastik ABS / High-Density Polyethylene yang tahan benturan keras. Dilengkapi suspensi peredam kejut 4 hingga 6 titik serta tali dagu elastis.",
    "image": "assets/products/safety/Helm_Safety_(Safety_Helmet)_.png",
    "gallery": [
      "assets/products/safety/Helm_Safety_(Safety_Helmet)_.png"
    ],
    "advantages": [
      "Tahan benturan vertikal dan samping",
      "Suspensi putar mudah disesuaikan dengan lingkar kepala",
      "Pilihan warna standar K3 lengkap"
    ],
    "specs": [
      {
        "key": "Material",
        "val": "ABS / HDPE Impact Resistant"
      },
      {
        "key": "Pilihan Warna",
        "val": "Putih (Manajer/Tamu), Kuning (Operator), Biru, Merah, Oranye"
      }
    ]
  },
  {
    "id": "safety-sarung-tangan",
    "categoryId": "safety",
    "name": "Sarung Tangan Safety (Safety Gloves)",
    "categoryName": "Safety Equipment",
    "tag": "Perlindungan Tangan",
    "badge": "Anti-Gores & Slip",
    "shortDesc": "Sarung tangan kerja katun bintik, PU coating, nitrile, dan kulit tahan panas untuk keselamatan tangan teknisi pabrik.",
    "fullDesc": "Rangkaian sarung tangan keselamatan industri untuk berbagai jenis pekerjaan: sarung tangan katun rajut bintik karet untuk handling gudang, sarung tangan PU/Nitrile untuk kontak oli/kimia, dan sarung tangan kulit las tahan percikan api.",
    "image": "assets/products/safety/Sarung_Tangan_Safety_(Safety_Gloves).png",
    "gallery": [
      "assets/products/safety/Sarung_Tangan_Safety_(Safety_Gloves).png"
    ],
    "advantages": [
      "Daya cengkeram kuat anti-slip",
      "Nyaman berpori sirkulasi udara baik",
      "Melindungi dari lecet, sayatan, dan bahan kimia"
    ],
    "specs": [
      {
        "key": "Varian",
        "val": "Katun Bintik, Nitrile Palm Coated, PU Coating, Kulit Las"
      },
      {
        "key": "Ukuran",
        "val": "M, L, XL"
      }
    ]
  },
  {
    "id": "safety-rompi",
    "categoryId": "safety",
    "name": "Rompi Safety (Reflective Safety Vest)",
    "categoryName": "Safety Equipment",
    "tag": "Visibilitas Tinggi",
    "badge": "Pita Scotlight",
    "shortDesc": "Rompi keselamatan bahan jaring dan polyester dengan pita reflektor scotlight terang untuk visibilitas optimal siang dan malam.",
    "fullDesc": "Rompi K3 visibilitas tinggi dengan bahan polyester/jaring breathable yang sejuk dipakai di lapangan. Dilengkapi pita reflektif scotlight yang memantulkan cahaya saat terpapar lampu sorot kendaraan di area gelap.",
    "image": "assets/products/safety/Rompi_Safety_(Reflective_Safety_Vest).png",
    "gallery": [
      "assets/products/safety/Rompi_Safety_(Reflective_Safety_Vest).png"
    ],
    "advantages": [
      "Pita reflektor bersinar terang saat malam",
      "Bahan jaring adem dan tidak panas",
      "Dilengkapi ritsleting / velcro dan kantong serbaguna"
    ],
    "specs": [
      {
        "key": "Warna",
        "val": "Hijau Stabilo (Lime) & Oranye Terang"
      },
      {
        "key": "Model",
        "val": "Rompi Jaring V, Rompi Proyek 4 Kantong Ritsleting"
      }
    ]
  },
  {
    "id": "safety-respirator",
    "categoryId": "safety",
    "name": "Respirator & Masker Industri",
    "categoryName": "Safety Equipment",
    "tag": "Perlindungan Nafas",
    "badge": "Filter Partikel & Gas",
    "shortDesc": "Masker respirator half-face dan masker partikulat N95/KN95 untuk menyaring debu pabrik, gas kimia, dan partikel berbahaya.",
    "fullDesc": "Perlindungan pernapasan komprehensif mulai dari masker partikulat debu sekali pakai hingga respirator half-mask silicone dengan cartridge filter ganda untuk menyerap uap organik kimia, gas asam, dan asap las.",
    "image": "assets/products/safety/Respirator_&_Masker_Industri.png",
    "gallery": [
      "assets/products/safety/Respirator_&_Masker_Industri.png"
    ],
    "advantages": [
      "Filtrasi partikel mikro efisien hingga 95%+",
      "Bahan silikon lembut menutup rapat wajah",
      "Tali elastis dapat disetel nyaman"
    ],
    "specs": [
      {
        "key": "Tipe",
        "val": "Respirator Half Face Double Cartridge & Masker N95/KN95"
      },
      {
        "key": "Aplikasi",
        "val": "Pabrik kimia, pengecatan spet, penggilingan debu, tambang"
      }
    ]
  },
  {
    "id": "safety-kacamata",
    "categoryId": "safety",
    "name": "Kacamata Safety (Safety Glasses)",
    "categoryName": "Safety Equipment",
    "tag": "Perlindungan Mata",
    "badge": "Anti-Fog & UV",
    "shortDesc": "Kacamata pelindung mata lensa polikarbonat tahan benturan, anti-gores, dan anti-embun untuk teknisi lapangan.",
    "fullDesc": "Kacamata safety dengan lensa polikarbonat bening/gelap bersertifikasi ANSI Z87.1. Mampu menahan serpihan gerinda tajam, percikan zat kimia ringan, serta radiasi sinar UV dengan bantalan hidung yang nyaman.",
    "image": "assets/products/safety/Kacamata_Safety_(Safety_Glasses).png",
    "gallery": [
      "assets/products/safety/Kacamata_Safety_(Safety_Glasses).png"
    ],
    "advantages": [
      "Lensa polikarbonat tahan benturan kecepatan tinggi",
      "Lapisan anti-fog (anti embun) dan anti-scratch",
      "Desain sporty ringan"
    ],
    "specs": [
      {
        "key": "Lensa",
        "val": "Clear (Bening), Dark (Hitam/Sun), Yellow (Kontras)"
      },
      {
        "key": "Standar",
        "val": "ANSI Z87.1 & CE EN166"
      }
    ]
  },
  {
    "id": "safety-boots",
    "categoryId": "safety",
    "name": "Safety Boots (Sepatu Boot Karet)",
    "categoryName": "Safety Equipment",
    "tag": "Area Basah & Kimia",
    "badge": "Waterproof",
    "shortDesc": "Sepatu boot karet PVC tahan air, lumpur, oli, dan cairan kimia untuk area basah, proyek drainase, dan perkebunan.",
    "fullDesc": "Sepatu boot kerja berbahan PVC sintetis tebal yang 100% kedap air. Memiliki sol karet bergerigi tebal anti-slip untuk mencegah terpeleset di area lantai licin, genangan oli, atau lumpur proyek konstruksi.",
    "image": "assets/products/safety/Safety_Boots_(Sepatu_Boot_Karet).png",
    "gallery": [
      "assets/products/safety/Safety_Boots_(Sepatu_Boot_Karet).png"
    ],
    "advantages": [
      "100% tahan air dan cairan pembersih kimia",
      "Sol anti-slip traksi tinggi di medan licin",
      "Bahan karet lentur dan tidak kaku"
    ],
    "specs": [
      {
        "key": "Tinggi",
        "val": "Pendek (Mata Kaki) & Tinggi (Betis)"
      },
      {
        "key": "Ukuran",
        "val": "38 - 44"
      }
    ]
  },
  {
    "id": "safety-face-shield",
    "categoryId": "safety",
    "name": "Face Shield (Pelindung Wajah Visor)",
    "categoryName": "Safety Equipment",
    "tag": "Perlindungan Wajah Penuh",
    "badge": "Full Face Protection",
    "shortDesc": "Pelindung muka bening visor polikarbonat dengan headgear putar untuk melindungi mata dan wajah dari percikan gerinda dan kimia.",
    "fullDesc": "Face shield industri dengan visor polikarbonat jernih dan bingkai aluminium fleksibel. Melindungi seluruh area wajah dari loncatan serpihan logam gerinda, debu pekat, dan percikan cairan kimia berbahaya.",
    "image": "assets/products/safety/Face_Shield_(Pelindung_Wajah_Visor).png",
    "gallery": [
      "assets/products/safety/Face_Shield_(Pelindung_Wajah_Visor).png"
    ],
    "advantages": [
      "Area pandang luas tanpa distorsi visual",
      "Headgear ratchet putar mudah disetel pas di kepala",
      "Visor dapat diangkat ke atas dengan engsel fleksibel"
    ],
    "specs": [
      {
        "key": "Material Visor",
        "val": "Clear Polycarbonate Tebal 1 - 2 mm"
      },
      {
        "key": "Aplikasi",
        "val": "Grinding, pemotongan besi, lab kimia, welding helper"
      }
    ]
  },
  {
    "id": "safety-baju-pelindung",
    "categoryId": "safety",
    "name": "Baju Pelindung (Coverall / Hazmat)",
    "categoryName": "Safety Equipment",
    "tag": "Proteksi Tubuh",
    "badge": "Wearpack & Coverall",
    "shortDesc": "Pakaian kerja coverall katun wearpack dan coverall disposable pelindung dari debu kimia, cat, dan cairan berbahaya.",
    "fullDesc": "Penyediaan pakaian pelindung tubuh lengkap mulai dari wearpack katun drill industri dengan pita scotlight untuk mekanik pabrik, hingga baju coverall microporous spunbond tahan cipratan cairan kimia dan partikel berbahaya.",
    "image": "assets/products/safety/Baju_Pelindung_(Coverall_-_Hazmat).png",
    "gallery": [
      "assets/products/safety/Baju_Pelindung_(Coverall_-_Hazmat).png"
    ],
    "advantages": [
      "Bahan kuat anti-robek dan jahitan ganda",
      "Tersedia tipe washable (cuci ulang) dan disposable",
      "Dilengkapi ritsleting tertutup dan karet elastis"
    ],
    "specs": [
      {
        "key": "Varian",
        "val": "Coverall Katun Wearpack Proyek & Coverall Disposable Hazmat"
      },
      {
        "key": "Ukuran",
        "val": "M, L, XL, XXL"
      }
    ]
  },
  {
    "id": "safety-harness",
    "categoryId": "safety",
    "name": "Safety Harness (Full Body Harness)",
    "categoryName": "Safety Equipment",
    "tag": "Kerja di Ketinggian",
    "badge": "Fall Arrest System",
    "shortDesc": "Sabuk pengaman tubuh penuh lengkap dengan lanyard absorber dan big hook karabiner untuk keselamatan kerja di ketinggian.",
    "fullDesc": "Full body harness dengan webbing polyester berkekuatan tinggi dan D-ring penahan jatuh di bagian punggung dan dada. Memenuhi standar keselamatan kerja ketinggian (Working at Height) di pabrik dan konstruksi.",
    "image": "assets/products/safety/Safety_Harness_(Full_Body_Harness).png",
    "gallery": [
      "assets/products/safety/Safety_Harness_(Full_Body_Harness).png"
    ],
    "advantages": [
      "Daya tahan tarik beban webbing lebih dari 22 kN",
      "Dilengkapi shock energy absorber peredam hentakan",
      "Gesper pengunci presisi dan mudah disetel"
    ],
    "specs": [
      {
        "key": "Tipe",
        "val": "Full Body Harness with Single / Double Big Hook Lanyard"
      },
      {
        "key": "Standar",
        "val": "EN361, EN355 & ANSI Z359"
      }
    ]
  },
  {
    "id": "safety-sepatu",
    "categoryId": "safety",
    "name": "Sepatu Safety (Steel Toe Shoes)",
    "categoryName": "Safety Equipment",
    "tag": "Pelindung Kaki Pabrik",
    "badge": "Ujung Besi 200J",
    "shortDesc": "Sepatu keselamatan kerja kulit asli dengan pelindung ujung besi (steel toe cap) tahan benturan dan sol anti-paku anti-slip.",
    "fullDesc": "Sepatu safety standar industri dengan pelindung besi penahan benturan 200 Joule pada bagian jari kaki serta plat baja anti-tusuk di sol bawah. Nyaman dipakai seharian dengan insole empuk dan sol polyurethane tahan oli.",
    "image": "assets/products/safety/Sepatu_Safety_(Steel_Toe_Shoes).png",
    "gallery": [
      "assets/products/safety/Sepatu_Safety_(Steel_Toe_Shoes).png"
    ],
    "advantages": [
      "Steel toe cap melindungi kaki dari kejatuhan benda berat",
      "Sol PU tahan minyak, bensin, dan cairan asam",
      "Kulit asli tahan gesek dan awet"
    ],
    "specs": [
      {
        "key": "Model",
        "val": "Low Cut (Pendek Tali/Slip-on) & Mid Cut / Boots"
      },
      {
        "key": "Ukuran",
        "val": "38 - 45"
      }
    ]
  },
  {
    "id": "safety-apar",
    "categoryId": "safety",
    "name": "APAR (Alat Pemadam Api Ringan)",
    "categoryName": "Safety Equipment",
    "tag": "Tanggap Darurat Api",
    "badge": "Dry Chemical & CO2",
    "shortDesc": "Tabung pemadam kebakaran media dry chemical powder dan CO2 bersertifikasi dinas pemadam untuk pabrik, kantor, dan gudang.",
    "fullDesc": "Tabung pemadam api ringan (APAR) siap pakai dengan media serbuk kimia kering (ABC Dry Chemical Powder) atau Gas CO2. Efektif memadamkan api kelas A (benda padat), kelas B (cairan mudah terbakar), dan kelas C (kelistrikan).",
    "image": "assets/products/safety/APAR_(Alat_Pemadam_Api_Ringan).png",
    "gallery": [
      "assets/products/safety/APAR_(Alat_Pemadam_Api_Ringan).png"
    ],
    "advantages": [
      "Indikator pressure gauge presisi siap pantau",
      "Sertifikasi dinas penanggulangan kebakaran resmi",
      "Termasuk bracket gantung dinding"
    ],
    "specs": [
      {
        "key": "Kapasitas",
        "val": "1 kg, 3 kg, 4.5 kg, 6 kg, 9 kg, hingga Trolley 25-50 kg"
      },
      {
        "key": "Media",
        "val": "ABC Powder & Carbon Dioxide (CO2)"
      }
    ]
  },
  {
    "id": "safety-cone",
    "categoryId": "safety",
    "name": "Safety Cone (Traffic Cone Pengatur Area)",
    "categoryName": "Safety Equipment",
    "tag": "Pembatas Area",
    "badge": "Pita Reflektif",
    "shortDesc": "Kerucut lalu lintas bahan PVC fleksibel oranye dengan pita stiker scotlight untuk pembatas area bahaya dan parkir industri.",
    "fullDesc": "Traffic cone pengaman berbahan PVC lentur tahan tabrak yang tidak mudah pecah saat terlindas roda kendaraan. Dilengkapi pita reflektif putih/kuning yang memantulkan cahaya di malam hari untuk keamanan lalu lintas gudang.",
    "image": "assets/products/safety/Safety_Cone_(Traffic_Cone_Pengatur_Area).png",
    "gallery": [
      "assets/products/safety/Safety_Cone_(Traffic_Cone_Pengatur_Area).png"
    ],
    "advantages": [
      "Bahan PVC fleksibel kembali ke bentuk semula saat terlindas",
      "Dasar base pemberat kokoh tidak mudah tumbang ditiup angin",
      "Warna oranye cerah tahan cuaca terik"
    ],
    "specs": [
      {
        "key": "Tinggi",
        "val": "45 cm, 70 cm, 75 cm, 90 cm"
      },
      {
        "key": "Fitur",
        "val": "Pita Reflektif Scotlight Double Ring"
      }
    ]
  },
  {
    "id": "chem-pelumas-anti-karat",
    "categoryId": "chemical",
    "name": "Pelumas Anti Karat (Penetrating Oil)",
    "categoryName": "Chemical",
    "tag": "Perawatan Mesin",
    "badge": "Lubricant & Anti-Rust",
    "shortDesc": "Cairan pelumas penetrasi cepat untuk melonggarkan baut mur macet, membersihkan karat, dan melindungi logam dari korosi.",
    "fullDesc": "Pelumas semprot serbaguna berdaya penetrasi tinggi yang mampu menembus celah tersempit untuk melonggarkan komponen berkarat, menghentikan derit engsel, menghilangkan kelembapan pada kelistrikan, serta melapisi permukaan besi dari korosi.",
    "image": "assets/products/chemical/Pelumas_Anti_Karat_(Penetrating_Oil).png",
    "gallery": [
      "assets/products/chemical/Pelumas_Anti_Karat_(Penetrating_Oil).png"
    ],
    "advantages": [
      "Daya penetrasi instan ke sela drat baut berkarat",
      "Meninggalkan lapisan film tipis pencegah karat baru",
      "Dilengkapi sedotan pipa semprot presisi"
    ],
    "specs": [
      {
        "key": "Kemasan",
        "val": "Aerosol Can 400 - 500 ml & Jerigen 5 Liter"
      },
      {
        "key": "Fungsi",
        "val": "Penetrating, Lubricating, Water Displacing"
      }
    ]
  },
  {
    "id": "chem-pembersih-lantai",
    "categoryId": "chemical",
    "name": "Pembersih Lantai (Floor Cleaner)",
    "categoryName": "Chemical",
    "tag": "Sanitasi Gedung",
    "badge": "Konsentrat Wangi",
    "shortDesc": "Cairan pembersih lantai konsentrat wangi segar untuk membersihkan kotoran membandel di lantai kantor, keramik, dan epoxy.",
    "fullDesc": "Formula pembersih lantai konsentrat dengan daya bersih maksimal yang ampuh mengangkat debu, noda minyak, dan kotoran tanpa merusak kilau permukaan lantai. Menghadirkan keharuman segar yang tahan lama di ruangan.",
    "image": "assets/products/chemical/Pembersih_Lantai_(Floor_Cleaner).png",
    "gallery": [
      "assets/products/chemical/Pembersih_Lantai_(Floor_Cleaner).png"
    ],
    "advantages": [
      "Busa terkontrol cepat kering tanpa licin",
      "Aman untuk lantai keramik, marmer, granit, dan epoxy",
      "Hemat takaran pemakaian"
    ],
    "specs": [
      {
        "key": "Kemasan",
        "val": "Jerigen 4 Liter & 5 Liter"
      },
      {
        "key": "Aroma",
        "val": "Apple, Lemon, Lavender, Floral Fresh"
      }
    ]
  },
  {
    "id": "chem-pembersih-kaca",
    "categoryId": "chemical",
    "name": "Pembersih Kaca (Glass Cleaner)",
    "categoryName": "Chemical",
    "tag": "Kaca Bening",
    "badge": "Anti-Streak",
    "shortDesc": "Cairan pembersih kaca formula cepat kering tanpa meninggalkan bercak noda untuk jendela, cermin, dan partisi kantor.",
    "fullDesc": "Cairan pembersih kaca khusus yang efektif mengangkat kotoran debu, bekas sidik jari, dan noda minyak pada kaca gedung perkantoran, meja display, dan cermin. Cepat menguap tanpa meninggalkan goresan pelangi.",
    "image": "assets/products/chemical/Pembersih_Kaca_(Glass_Cleaner).png",
    "gallery": [
      "assets/products/chemical/Pembersih_Kaca_(Glass_Cleaner).png"
    ],
    "advantages": [
      "Formula anti-static menghambat debu menempel kembali",
      "Cepat kering tanpa perlu dibilas",
      "Kaca bening berkilau maksimal"
    ],
    "specs": [
      {
        "key": "Kemasan",
        "val": "Spray Bottle 500 ml & Jerigen Refill 5 Liter"
      },
      {
        "key": "Warna Cairan",
        "val": "Biru Bening"
      }
    ]
  },
  {
    "id": "chem-pembersih-piring",
    "categoryId": "chemical",
    "name": "Pembersih Piring (Dishwashing Liquid)",
    "categoryName": "Chemical",
    "tag": "Pantry & Kantin",
    "badge": "Anti-Lemak",
    "shortDesc": "Sabun cuci piring busa melimpah dengan formula ekstrak jeruk nipis yang ampuh melunturkan sisa lemak minyak kantin dan pantry.",
    "fullDesc": "Sabun pencuci piring cair grade korporat yang kental dan berdaya cuci tinggi. Mampu membersihkan noda lemak masakan membandel pada peralatan makan dan minum dengan cepat, mudah dibilas, serta higienis.",
    "image": "assets/products/chemical/Pembersih_Piring_(Dishwashing_Liquid).png",
    "gallery": [
      "assets/products/chemical/Pembersih_Piring_(Dishwashing_Liquid).png"
    ],
    "advantages": [
      "Formula ampuh angkat lemak sekali bilas",
      "Lembut di tangan dan tidak menyebabkan kulit kering",
      "Aroma segar jeruk nipis menghilangkan bau amis"
    ],
    "specs": [
      {
        "key": "Kemasan",
        "val": "Jerigen 4 Liter & 5 Liter"
      },
      {
        "key": "Aroma",
        "val": "Ekstrak Jeruk Nipis / Lemon Fresh"
      }
    ]
  },
  {
    "id": "chem-sabun-cuci-tangan",
    "categoryId": "chemical",
    "name": "Sabun Cuci Tangan (Liquid Hand Soap)",
    "categoryName": "Chemical",
    "tag": "Higienitas Karyawan",
    "badge": "Antibakteri & Lembut",
    "shortDesc": "Sabun cuci tangan cair antibakteri berbusa lembut dengan pelembap kulit untuk wastafel toilet kantor dan fasilitas publik.",
    "fullDesc": "Cairan pencuci tangan antibakteri yang efektif membunuh 99.9% kuman dan bakteri di tangan. Mengandung pelembap alami sehingga kulit tetap halus dan lembut meski sering mencuci tangan.",
    "image": "assets/products/chemical/Sabun_Cuci_Tangan_(Liquid_Hand_Soap).png",
    "gallery": [
      "assets/products/chemical/Sabun_Cuci_Tangan_(Liquid_Hand_Soap).png"
    ],
    "advantages": [
      "Perlindungan antibakteri teruji laboratorium",
      "Busa melimpah dan mudah dibilas bersih",
      "Aroma buah dan bunga segar tahan lama"
    ],
    "specs": [
      {
        "key": "Kemasan",
        "val": "Botol Pump 500 ml & Jerigen Refill 5 Liter"
      },
      {
        "key": "Aroma",
        "val": "Strawberry, Apple, Lemon, Jasmine"
      }
    ]
  },
  {
    "id": "chem-pengharum-ruangan",
    "categoryId": "chemical",
    "name": "Pengharum Ruangan (Air Freshener)",
    "categoryName": "Chemical",
    "tag": "Kesegaran Kantor",
    "badge": "Otomatis & Semprot",
    "shortDesc": "Pengharum ruangan spray dan kaleng refill dispenser otomatis untuk menghadirkan kenyamanan udara bersih di ruang kerja dan lobi.",
    "fullDesc": "Pengharum ruangan konsentrat berkualitas tinggi untuk menetralkan bau tak sedap dan menghadirkan suasana ruangan yang wangi, segar, dan menenangkan. Cocok untuk lobi kantor, ruang meeting, dan toilet gedung.",
    "image": "assets/products/chemical/Pengharum_Ruangan_(Air_Freshener).png",
    "gallery": [
      "assets/products/chemical/Pengharum_Ruangan_(Air_Freshener).png"
    ],
    "advantages": [
      "Wangi tahan lama dan partikel semprot halus",
      "Tersedia refill kaleng cocok untuk semua mesin dispenser otomatis",
      "Tidak membuat bercak noda pada dinding/karpet"
    ],
    "specs": [
      {
        "key": "Format",
        "val": "Refill Kaleng Otomatis 300 ml & Manual Spray"
      },
      {
        "key": "Varian Aroma",
        "val": "Coffee, Lemon, Lavender, Green Tea, Orange"
      }
    ]
  },
  {
    "id": "chem-karbol",
    "categoryId": "chemical",
    "name": "Karbol Wangi & Antiseptik Pinus",
    "categoryName": "Chemical",
    "tag": "Disinfeksi Toilet",
    "badge": "Minyak Pinus Alami",
    "shortDesc": "Cairan karbol antiseptik beraroma pinus alami untuk membersihkan, mendisinfeksi, dan menghilangkan bau pesing toilet.",
    "fullDesc": "Karbol antiseptik dengan kandungan minyak pinus murni yang ampuh membasmi kuman penyakit, bakteri, dan jamur pada lantai toilet, saluran pembuangan air, dan tempat sampah basah. Mengusir bau tak sedap seketika.",
    "image": "assets/products/chemical/Karbol_Wangi_&_Antiseptik_Pinus.png",
    "gallery": [
      "assets/products/chemical/Karbol_Wangi_&_Antiseptik_Pinus.png"
    ],
    "advantages": [
      "Membunuh kuman dan bakteri membandel",
      "Aroma khas pinus alami menyegarkan area lembap",
      "Formula kental konsentrat hemat pemakaian"
    ],
    "specs": [
      {
        "key": "Kemasan",
        "val": "Jerigen 4 Liter & 5 Liter"
      },
      {
        "key": "Kandungan",
        "val": "Pine Oil Konsentrat Antiseptik"
      }
    ]
  },
  {
    "id": "chem-handsanitizer",
    "categoryId": "chemical",
    "name": "Hand Sanitizer (Cair & Gel)",
    "categoryName": "Chemical",
    "tag": "Sanitasi Cepat",
    "badge": "Alkohol 70%",
    "shortDesc": "Pembersih tangan antiseptik dengan kandungan alkohol 70% food grade yang ampuh membunuh kuman tanpa perlu dibilas air.",
    "fullDesc": "Hand sanitizer dengan standar kesehatan medis yang mengandung 70% Ethyl Alcohol murni serta formula pelembap lidah buaya (Aloe Vera). Praktis digunakan di meja resepsionis, pintu masuk gedung, dan area kantin.",
    "image": "assets/products/chemical/Hand_Sanitizer_(Cair_&_Gel).png",
    "gallery": [
      "assets/products/chemical/Hand_Sanitizer_(Cair_&_Gel).png"
    ],
    "advantages": [
      "Efektif membunuh 99.9% kuman, virus, dan bakteri",
      "Cepat meresap kering tanpa meninggalkan rasa lengket",
      "Food grade aman untuk penggunaan harian"
    ],
    "specs": [
      {
        "key": "Kadar Alkohol",
        "val": "70% Food Grade"
      },
      {
        "key": "Kemasan",
        "val": "Botol Pump 500 ml & Jerigen Refill 5 Liter"
      }
    ]
  },
  {
    "id": "chem-disinfectant",
    "categoryId": "chemical",
    "name": "Disinfectant Konsentrat Industri",
    "categoryName": "Chemical",
    "tag": "Sterilisasi Fasilitas",
    "badge": "Permukaan Higienis",
    "shortDesc": "Cairan disinfektan konsentrat berspektrum luas untuk sterilisasi ruangan pabrik, meja kerja, gagang pintu, dan peralatan.",
    "fullDesc": "Formula cairan disinfektan siap semprot maupun konsentrat pengenceran untuk sanitasi menyeluruh fasilitas kerja industri, gudang ekspedisi, dan armada operasional. Bebas korosif terhadap logam.",
    "image": "assets/products/chemical/Disinfectant_Konsentrat_Industri.png",
    "gallery": [
      "assets/products/chemical/Disinfectant_Konsentrat_Industri.png"
    ],
    "advantages": [
      "Membasmi spektrum luas bakteri patogen dan virus",
      "Aman disemprotkan pada permukaan logam, kayu, dan plastik",
      "Tidak meninggalkan residu beracun"
    ],
    "specs": [
      {
        "key": "Kemasan",
        "val": "Jerigen 5 Liter & Drum 20 Liter"
      },
      {
        "key": "Penggunaan",
        "val": "Sprayer manual, fogging ruangan, lap permukaan"
      }
    ]
  },
  {
    "id": "chem-detergen-cair",
    "categoryId": "chemical",
    "name": "Detergen Cair (Liquid Detergent)",
    "categoryName": "Chemical",
    "tag": "Pencucian Industri",
    "badge": "Pembersih Tekstil",
    "shortDesc": "Detergen cair konsentrat rendah busa untuk pencucian kain majun, seragam kerja kotor, dan linen fasilitas perusahaan.",
    "fullDesc": "Detergen cair konsentrat dengan daya penetrasi serat kain yang tinggi untuk merontokkan noda oli, gemuk, tanah, dan noda keringat pada seragam kerja pabrik serta kain lap operasional. Ramah pada mesin cuci.",
    "image": "assets/products/chemical/Detergen_Cair_(Liquid_Detergent).png",
    "gallery": [
      "assets/products/chemical/Detergen_Cair_(Liquid_Detergent).png"
    ],
    "advantages": [
      "Daya bersih noda minyak dan oli sangat efektif",
      "Rendah busa (low foam) menjaga keawetan mesin cuci",
      "Warna pakaian tetap cerah tidak kusam"
    ],
    "specs": [
      {
        "key": "Kemasan",
        "val": "Jerigen 5 Liter & 20 Liter"
      },
      {
        "key": "Aroma",
        "val": "Fresh Floral / Lavender"
      }
    ]
  },
  {
    "id": "chem-parfum-laundry",
    "categoryId": "chemical",
    "name": "Parfum Laundry Konsentrat",
    "categoryName": "Chemical",
    "tag": "Pewangi Pakaian",
    "badge": "Keharuman Tahan Lama",
    "shortDesc": "Pewangi pakaian konsentrat kualitas laundry untuk disemprotkan saat finishing setrika seragam karyawan perusahaan.",
    "fullDesc": "Parfum pakaian berbahan dasar pelarut khusus grade laundry profesional yang tidak meninggalkan bercak kuning pada kain putih. Menghadirkan wangi mewah yang tahan disimpan berhari-hari di lemari.",
    "image": "assets/products/chemical/Parfum_Laundry_Konsentrat.png",
    "gallery": [
      "assets/products/chemical/Parfum_Laundry_Konsentrat.png"
    ],
    "advantages": [
      "Keharuman mewah dan sangat awet",
      "Formula anti-apek dan anti-jamur pakaian",
      "Cepat kering saat disemprotkan"
    ],
    "specs": [
      {
        "key": "Kemasan",
        "val": "Botol Spray 1 Liter & Jerigen 5 Liter"
      },
      {
        "key": "Aroma Populer",
        "val": "Sakura, Snappy, Ocean Fresh, Downy Red"
      }
    ]
  },
  {
    "id": "chem-softener",
    "categoryId": "chemical",
    "name": "Softener (Pelembut & Pelicin Pakaian)",
    "categoryName": "Chemical",
    "tag": "Kenyamanan Seragam",
    "badge": "Pelembut Kain",
    "shortDesc": "Cairan pelembut dan pelicin serat pakaian dengan formula antistatik agar seragam karyawan halus dan mudah disetrika.",
    "fullDesc": "Cairan pelembut konsentrat untuk bilasan akhir pencucian yang melembutkan serat kain kaku, mencegah kusut berlebih, dan menghilangkan listrik statis pada pakaian sintetis.",
    "image": "assets/products/chemical/Softener_(Pelembut_&_Pelicin_Pakaian)_.png",
    "gallery": [
      "assets/products/chemical/Softener_(Pelembut_&_Pelicin_Pakaian)_.png"
    ],
    "advantages": [
      "Membuat serat kain halus dan lembut bersentuhan dengan kulit",
      "Mempermudah dan mempercepat proses setrika",
      "Wangi segar menempel sepanjang hari kerja"
    ],
    "specs": [
      {
        "key": "Kemasan",
        "val": "Jerigen 5 Liter"
      },
      {
        "key": "Aroma",
        "val": "Soft Blue Floral & Pink Blossom"
      }
    ]
  },
  {
    "id": "cons-amplas",
    "categoryId": "consumable",
    "name": "Amplas (Sandpaper Roll & Sheet)",
    "categoryName": "Consumable",
    "tag": "Finishing Material",
    "badge": "Grit Kasar - Halus",
    "shortDesc": "Amplas kertas dan kain berkualitas tinggi berbagai nomor grit untuk proses penghalusan permukaan besi, kayu, dan bodi kendaraan.",
    "fullDesc": "Kertas amplas tahan air (waterproof silicon carbide) dan kain amplas roll fleksibel untuk pengamplasan kering maupun basah. Memberikan hasil perataan dan penghalusan permukaan yang presisi sebelum proses pengecatan.",
    "image": "assets/products/consumable/Amplas_(Standar_Roll_&_Sheet).png",
    "gallery": [
      "assets/products/consumable/Amplas_(Standar_Roll_&_Sheet).png"
    ],
    "advantages": [
      "Serat butiran tajam dan tidak cepat rontok",
      "Dapat digunakan basah (dengan air) maupun kering",
      "Pilihan grit lengkap dari kasar hingga super halus"
    ],
    "specs": [
      {
        "key": "Pilihan Grit",
        "val": "Grit 60, 80, 100, 120, 240, 400, 600, 800, 1000, 2000"
      },
      {
        "key": "Bentuk",
        "val": "Lembaran (Sheet 9x11 inch) & Roll Meteran"
      }
    ]
  },
  {
    "id": "cons-cutting-tools",
    "categoryId": "consumable",
    "name": "Cutting Tools (Mata Gerinda & Batu Potong)",
    "categoryName": "Consumable",
    "tag": "Fabrikasi Logam",
    "badge": "Batu Potong Besi",
    "shortDesc": "Mata gerinda potong tipis dan batu gerinda asah/poles logam stainless steel berkualitas tinggi anti-pecah.",
    "fullDesc": "Batu gerinda potong (cutting wheel) ukuran 4 inch dan 14 inch bertulang jaring fiber ganda yang aman dan tahan putaran tinggi. Memberikan potongan besi, holo, dan stainless steel yang cepat, presisi, serta minim serpihan panas.",
    "image": "assets/products/consumable/Cutting_Tools_(Mata_Gerinda).png",
    "gallery": [
      "assets/products/consumable/Cutting_Tools_(Mata_Gerinda).png"
    ],
    "advantages": [
      "Bilah tipis 1.0 - 1.2 mm memotong sangat cepat dan hemat bahan",
      "Konstruksi jaring penguat ganda mencegah pecah bilah",
      "Tahan panas pada putaran mesin gerinda hingga 15.000 RPM"
    ],
    "specs": [
      {
        "key": "Ukuran",
        "val": "4 Inch (105 x 1.2 x 16 mm) & 14 Inch (Mesin Cut Off)"
      },
      {
        "key": "Aplikasi",
        "val": "Potong Besi, Baja, Pipa, Stainless Steel"
      }
    ]
  },
  {
    "id": "cons-kain-majun",
    "categoryId": "consumable",
    "name": "Kain Majun (Kain Lap Industri)",
    "categoryName": "Consumable",
    "tag": "Bengkel & Mesin",
    "badge": "Daya Serap Oli",
    "shortDesc": "Kain lap katun majun jahit tumpuk dan lembaran tanpa jahit untuk menyerap oli mesin, pelumas, dan cairan industri.",
    "fullDesc": "Kain majun katun sisa bahan tekstil pilihan dengan daya serap cairan dan minyak yang sangat tinggi. Pilihan hemat nomor satu bagi teknisi pabrik dan bengkel untuk membersihkan mesin, suku cadang berminyak, dan area kerja.",
    "image": "assets/products/consumable/Kain_Majun_(Kain_Lap_Industri)_.png",
    "gallery": [
      "assets/products/consumable/Kain_Majun_(Kain_Lap_Industri)_.png"
    ],
    "advantages": [
      "Daya serap oli, solar, dan minyak sangat cepat",
      "Bahan katun murni tidak menggores permukaan logam",
      "Kemasan karung ball hemat pengadaan massal"
    ],
    "specs": [
      {
        "key": "Varian",
        "val": "Majun Jahit Tumpuk (Campur/Putih) & Majun Lembaran Lembut"
      },
      {
        "key": "Kemasan",
        "val": "Karung 25 kg / 50 kg"
      }
    ]
  },
  {
    "id": "cons-microfiber",
    "categoryId": "consumable",
    "name": "Kain Lap Microfiber Halus",
    "categoryName": "Consumable",
    "tag": "Pembersih Presisi",
    "badge": "Bebas Goresan",
    "shortDesc": "Lap kain serat mikro berdaya serap tinggi yang mengangkat debu halus tanpa meninggalkan serat kain ataupun goresan.",
    "fullDesc": "Lap microfiber kualitas premium berbahan 80% polyester dan 20% polyamide dengan kerapatan serat tinggi. Mampu mengikat partikel debu mikro, sidik jari, dan tetesan air pada kaca, layar elektronik, bodi mobil, dan lensa optik.",
    "image": "assets/products/consumable/Kain_Lap_Microfiber_Halus.png",
    "gallery": [
      "assets/products/consumable/Kain_Lap_Microfiber_Halus.png"
    ],
    "advantages": [
      "Menyerap air hingga 7 kali bobot kainnya",
      "Tidak meninggalkan serat debu (lint-free)",
      "Dapat dicuci dan digunakan kembali ratusan kali"
    ],
    "specs": [
      {
        "key": "Ukuran",
        "val": "40 x 40 cm (Gramatur 300 - 350 GSM)"
      },
      {
        "key": "Warna",
        "val": "Kuning, Biru, Hijau, Merah"
      }
    ]
  },
  {
    "id": "cons-kanebo",
    "categoryId": "consumable",
    "name": "Kanebo (Plas Chamois)",
    "categoryName": "Consumable",
    "tag": "Pengering Cepat",
    "badge": "Daya Serap Super",
    "shortDesc": "Lap sintetis PVA berpori rapat dengan daya hisap air luar biasa untuk mengeringkan bodi armada dan permukaan basah secara kilat.",
    "fullDesc": "Lap sintetis plas chamois berbahan PVA berkualitas tinggi dengan serat penguat jaring di bagian tengah. Mampu menyerap air seketika tanpa meninggalkan bercak tetesan air pada kaca dan permukaan cat bodi kendaraan operasional.",
    "image": "assets/products/consumable/Kanebo_(Plas_Chamois).png",
    "gallery": [
      "assets/products/consumable/Kanebo_(Plas_Chamois).png"
    ],
    "advantages": [
      "Daya hisap air instan sekali usap",
      "Struktur berserat jaring kuat tidak mudah sobek",
      "Dilengkapi tabung penyimpanan kedap udara"
    ],
    "specs": [
      {
        "key": "Ukuran",
        "val": "Standar (43 x 32 cm) & Jumbo (66 x 43 cm)"
      },
      {
        "key": "Ketebalan",
        "val": "0.2 cm"
      }
    ]
  },
  {
    "id": "cons-sapu",
    "categoryId": "consumable",
    "name": "Sapu Lantai (Indoor Broom)",
    "categoryName": "Consumable",
    "tag": "Kebersihan Ruangan",
    "badge": "Nilon & Ijuk",
    "shortDesc": "Sapu lantai berbahan serat nilon halus dan ijuk tebal dengan gagang pipa besi kokoh berlapis anti-karat untuk kantor dan pabrik.",
    "fullDesc": "Sapu pembersih lantai dengan susunan serabut nilon elastis yang efektif menyapu kotoran debu, rambut, dan pasir halus pada lantai keramik, kayu, maupun semen halus tanpa bertebaran.",
    "image": "assets/products/consumable/Sapu_Lantai_(Indoor_Broom).png",
    "gallery": [
      "assets/products/consumable/Sapu_Lantai_(Indoor_Broom).png"
    ],
    "advantages": [
      "Serabut sapu padat dan tidak mudah rontok",
      "Gagang ergonomis ringan namun kokoh tidak mudah bengkok",
      "Sudut sapu lebar mempercepat pekerjaan"
    ],
    "specs": [
      {
        "key": "Material Serabut",
        "val": "Nilon Sintetis Lembut & Serat Ijuk Alami"
      },
      {
        "key": "Panjang Gagang",
        "val": "110 - 120 cm"
      }
    ]
  },
  {
    "id": "cons-kain-pel",
    "categoryId": "consumable",
    "name": "Kain Pel & Gagang (Cotton Mop)",
    "categoryName": "Consumable",
    "tag": "Pembersih Lantai",
    "badge": "Katun Tebal",
    "shortDesc": "Kain pel sumbu katun tebal berdaya serap air maksimal lengkap dengan gagang aluminium dan jepitan pengganti praktis.",
    "fullDesc": "Set alat pel lantai komersial dengan kepala benang katun rajut tebal yang mampu mengangkat kotoran basah dan tumpahan cairan secara efisien. Kepala pel dapat dilepas dan dicuci atau diganti secara berkala.",
    "image": "assets/products/consumable/Kain_Pel_&_Gagang_(Cotton_Mop).png",
    "gallery": [
      "assets/products/consumable/Kain_Pel_&_Gagang_(Cotton_Mop).png"
    ],
    "advantages": [
      "Benang katun tebal menyerap air banyak dan tidak meninggalkan sisa serat",
      "Gagang kokoh tahan tekanan saat mengepel lantai",
      "Tersedia refill kain pel pengganti"
    ],
    "specs": [
      {
        "key": "Bahan",
        "val": "Katun Benang Putih Tebal 300 - 400 gram"
      },
      {
        "key": "Gagang",
        "val": "Pipa Logam Berlapis PVC / Aluminium"
      }
    ]
  },
  {
    "id": "cons-sapu-lidi",
    "categoryId": "consumable",
    "name": "Sapu Lidi (Gudang & Luar Ruang)",
    "categoryName": "Consumable",
    "tag": "Area Luar",
    "badge": "Lidi Pilihan",
    "shortDesc": "Sapu lidi kelapa tua pilihan dengan ikatan kawat baja kokoh untuk membersihkan area halaman, aspal, dan lantai gudang.",
    "fullDesc": "Sapu lidi pohon kelapa yang diikat kuat menggunakan kawat baja dan pegangan ergonomis. Sangat tangguh untuk membersihkan daun kering, kerikil, dan sampah kasar pada area luar ruangan, paving block, dan area loading dock pabrik.",
    "image": "assets/products/consumable/Sapu_Lidi_(Gudang_&_Luar_Ruang).png",
    "gallery": [
      "assets/products/consumable/Sapu_Lidi_(Gudang_&_Luar_Ruang).png"
    ],
    "advantages": [
      "Lidi tebal, lentur, dan tidak mudah patah saat menggesek aspal",
      "Ikatan kawat sangat kencang dan tidak mudah lepas",
      "Efektif membersihkan sampah kasar di luar gedung"
    ],
    "specs": [
      {
        "key": "Tipe",
        "val": "Sapu Lidi Gagang Kayu Panjang & Sapu Lidi Pendek"
      },
      {
        "key": "Panjang",
        "val": "90 cm - 120 cm"
      }
    ]
  },
  {
    "id": "cons-wiper",
    "categoryId": "consumable",
    "name": "Wiper Lantai & Kaca (Floor & Window Squeegee)",
    "categoryName": "Consumable",
    "tag": "Penarik Air",
    "badge": "Karet Fleksibel",
    "shortDesc": "Wiper penarik air karet sintetis fleksibel untuk mengeringkan genangan air di lantai toilet, gudang, dan jendela kaca gedung.",
    "fullDesc": "Alat penarik air (wiper/squeegee) dengan bilah karet elastis bermutu tinggi yang menempel rapat pada permukaan lantai atau kaca. Memudahkan pengeringan air seketika tanpa perlu menggunakan banyak lap kain.",
    "image": "assets/products/consumable/Wiper_Lantai_&_Kaca_(Floor_&_Window_Squeegee)_1.png",
    "gallery": [
      "assets/products/consumable/Wiper_Lantai_&_Kaca_(Floor_&_Window_Squeegee)_1.png",
      "assets/products/consumable/Wiper_Lantai_&_Kaca_(Floor_&_Window_Squeegee)_1.png"
    ],
    "advantages": [
      "Bilah karet lentur membersihkan air sekali tarik",
      "Rangka besi galvanis kokoh anti-karat",
      "Menghemat waktu pengeringan lantai basah"
    ],
    "specs": [
      {
        "key": "Varian",
        "val": "Wiper Lantai Gagang Panjang (Lebar 45cm, 55cm) & Wiper Kaca Tangan"
      },
      {
        "key": "Bahan Karet",
        "val": "Sponge Rubber / Silicone Strip"
      }
    ]
  },
  {
    "id": "print-banner-tarik",
    "categoryId": "printing",
    "name": "Banner Tarik (Roll Up Banner Aluminium)",
    "categoryName": "Printing",
    "tag": "Promosi Kantor",
    "badge": "Display Portabel",
    "shortDesc": "Display promosi sistem tarik gulung berbahan rangka aluminium eksklusif dengan cetak visual resolusi tinggi untuk event dan lobi kantor.",
    "fullDesc": "Roll up banner sistem gulung otomatis dengan kaki aluminium kokoh dan tas jinjing praktis. Dicetak menggunakan bahan Albatros atau Luster berkualitas tinggi dengan laminasi doff/glossy yang anti-luntur dan tidak melengkung.",
    "image": "assets/products/printing/Banner_Tarik_(Roll_Up_Banner_Aluminium)_.png",
    "gallery": [
      "assets/products/printing/Banner_Tarik_(Roll_Up_Banner_Aluminium)_.png"
    ],
    "advantages": [
      "Rangka aluminium kokoh, elegan, dan tahan lama",
      "Praktis dipasang dan digulung kembali hanya dalam 30 detik",
      "Hasil cetak resolusi tajam fotorealistis"
    ],
    "specs": [
      {
        "key": "Ukuran Standar",
        "val": "60 x 160 cm, 80 x 200 cm, 85 x 200 cm"
      },
      {
        "key": "Media Cetak",
        "val": "Albatros / Luster + Laminasi Doff / Glossy"
      }
    ]
  },
  {
    "id": "print-banner-x",
    "categoryId": "printing",
    "name": "Banner X (X-Banner Stand)",
    "categoryName": "Printing",
    "tag": "Ekonomis & Ringan",
    "badge": "Tripod Rangka X",
    "shortDesc": "Stand banner display rangka kaki silang X fleksibel dan ekonomis untuk memajang informasi promosi di dalam ruangan.",
    "fullDesc": "X-Banner display promosi ekonomis dengan rangka fiberglass dan tiang pengait silang X yang elastis dan ringan. Sangat cocok untuk menampilkan informasi promo produk, petunjuk arah event, dan pengumuman instansi.",
    "image": "assets/products/printing/Banner_X_(X-Banner_Stand).png",
    "gallery": [
      "assets/products/printing/Banner_X_(X-Banner_Stand).png"
    ],
    "advantages": [
      "Harga sangat ekonomis dan bobot ringan mudah dipindah",
      "Bahan visual flexi atau albatros dengan ring mata ayam kuat di 4 sudut",
      "Mudah dibongkar pasang dan disimpan dalam sarung"
    ],
    "specs": [
      {
        "key": "Ukuran",
        "val": "60 x 160 cm & 80 x 180 cm"
      },
      {
        "key": "Rangka",
        "val": "Fiberglass / Besi Ringan + Sarung Spunbond"
      }
    ]
  },
  {
    "id": "print-spanduk",
    "categoryId": "printing",
    "name": "Spanduk & Banner Outdoor (Flexi)",
    "categoryName": "Printing",
    "tag": "Outdoor Tahan Cuaca",
    "badge": "Flexi High-Res",
    "shortDesc": "Cetak spanduk kain flexi tebal tahan panas terik dan hujan badai lengkap dengan finishing ring mata ayam untuk luar ruangan.",
    "fullDesc": "Layanan cetak spanduk luar ruangan menggunakan bahan vinyl flexi bergramatur tebal (280 - 440 gsm). Dicetak menggunakan mesin digital outdoor solvent beresolusi tinggi yang tahan cuaca panas dan hujan hingga berbulan-bulan.",
    "image": "assets/products/printing/Spanduk_&_Banner_Outdoor_(Flexi).png",
    "gallery": [
      "assets/products/printing/Spanduk_&_Banner_Outdoor_(Flexi).png"
    ],
    "advantages": [
      "Tahan air hujan dan panas terik matahari (waterproof & UV resistant)",
      "Warna cetak kontras pekat dan tajam dari kejauhan",
      "Finishing lipat keliling press + ring mata ayam siap pasang"
    ],
    "specs": [
      {
        "key": "Bahan Flexi",
        "val": "Flexi Standar 280g, Flexi Korea 380g, Flexi Jerman 440g"
      },
      {
        "key": "Ukuran",
        "val": "Bebas Custom (Lebar hingga 3.2 meter tanpa sambungan)"
      }
    ]
  },
  {
    "id": "print-kartu-nama",
    "categoryId": "printing",
    "name": "Kartu Nama Perusahaan (Business Card)",
    "categoryName": "Printing",
    "tag": "Identitas Bisnis",
    "badge": "Art Carton Eksklusif",
    "shortDesc": "Cetak kartu nama bisnis profesional kertas tebal 260-310 gsm dengan pilihan laminasi doff lembut atau glossy berkilau.",
    "fullDesc": "Kartu nama profesional berstandar korporat dicetak pada kertas Art Carton tebal berkualitas menggunakan mesin cetak digital offset resolusi tinggi. Memberikan impresi pertama yang kredibel dan elegan saat berkenalan dengan mitra dan klien bisnis.",
    "image": "assets/products/printing/Kartu_Nama_Perusahaan_(Business_Card).png",
    "gallery": [
      "assets/products/printing/Kartu_Nama_Perusahaan_(Business_Card).png"
    ],
    "advantages": [
      "Potongan sudut rapi dan presisi",
      "Warna akurat sesuai identitas brand perusahaan",
      "Kemasan box mika plastik eksklusif isi 100 kartu"
    ],
    "specs": [
      {
        "key": "Ukuran",
        "val": "9 x 5.5 cm / 9 x 5 cm"
      },
      {
        "key": "Material & Finishing",
        "val": "Art Carton 260 / 310 gsm + Laminasi Doff / Glossy Bolak-balik"
      }
    ]
  },
  {
    "id": "print-stiker-custom",
    "categoryId": "printing",
    "name": "Stiker Custom (Label & Cutting Sticker)",
    "categoryName": "Printing",
    "tag": "Branding Kemasan",
    "badge": "Vinyl & Chromo",
    "shortDesc": "Cetak stiker label kemasan produk dan stiker cutting bentuk kustom berbahan vinyl anti-air dan kertas chromo tajam.",
    "fullDesc": "Solusi cetak stiker label kemasan toples, botol, dus kargo, dan stiker logo merchandise perusahaan. Tersedia pilihan stiker Vinyl tahan air/sobek, stiker Chromo ekonomis, stiker Transparan, serta stiker cutting bentuk bebas (kiss cut / die cut).",
    "image": "assets/products/printing/Stiker_Custom_(Label_&_Cutting_Sticker).png",
    "gallery": [
      "assets/products/printing/Stiker_Custom_(Label_&_Cutting_Sticker).png"
    ],
    "advantages": [
      "Daya rekat lem sangat kuat pada kaca, plastik, maupun kardus",
      "Tahan air (waterproof) dan tidak luntur untuk produk frozen/minuman",
      "Potongan mesin cutting otomatis presisi mengikuti kontur pola logo"
    ],
    "specs": [
      {
        "key": "Material",
        "val": "Stiker Vinyl Putih, Vinyl Transparan, Stiker Chromo, Hologram"
      },
      {
        "key": "Metode Potong",
        "val": "Kiss Cut (Lembaran) & Die Cut (Potong Putus Satuan)"
      }
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
    },
    {
      id: "client-psb",
      name: "CV Pangan Sukses Bersama (PSB)",
      shortName: "PSB",
      logo: "assets/logos/client-pangan-sukses-bersama.png",
      industry: "Food & Beverage Manufacturing"
    },
    {
      id: "client-lju",
      name: "PT Lingga Jaya Utama (LJU)",
      shortName: "LJU",
      logo: "assets/logos/client-lingga-jaya-utama.png",
      industry: "General Trading & Industrial Supplier"
    },
    {
      id: "client-nanotech",
      name: "PT Ananda Putra Nanotech Indonesia",
      shortName: "Nanotech",
      logo: "assets/logos/client-nanotech.png",
      industry: "Nanotechnology & Surface Protection"
    }
  ],

  gallery: [
  {
    "id": "gal-1",
    "title": "Distribusi",
    "category": "Distribusi",
    "desc": "Proses pemuatan dan penyiapan muatan produk suplai untuk pengiriman tepat waktu ke gudang pelanggan.",
    "image": "assets/gallery/Distribusi.jpg",
    "gallery": [
      "assets/gallery/Distribusi.jpg",
      "assets/gallery/Distribusi_2.jpg",
      "assets/gallery/Distribusi_3.jpg",
      "assets/gallery/Distribusi_4.jpg"
    ]
  },
  {
    "id": "gal-2",
    "title": "Gudang",
    "category": "Gudang",
    "desc": "Manajemen penyimpanan stok barang dengan sistem racking teratur dan terjaga kebersihannya.",
    "image": "assets/gallery/Distribusi_3.jpg",
    "gallery": [
      "assets/gallery/Distribusi_3.jpg",
      "assets/gallery/Distribusi_4.jpg",
      "assets/gallery/Distribusi.jpg"
    ]
  },
  {
    "id": "gal-3",
    "title": "Rapat",
    "category": "Rapat",
    "desc": "Koordinasi internal tim pengadaan dan konsultasi spesifikasi kebutuhan solusi mitra bisnis.",
    "image": "assets/gallery/Rapat_1.png",
    "gallery": [
      "assets/gallery/Rapat_1.png",
      "assets/gallery/Rapat_2.png",
      "assets/gallery/Rapat_3.jpg"
    ]
  },
  {
    "id": "gal-4",
    "title": "Pengiriman",
    "category": "Pengiriman",
    "desc": "Armada logistik terpercaya siap menjangkau berbagai kawasan industri di Jabodetabek dan sekitarnya.",
    "image": "assets/gallery/Pengiriman_1.jpg",
    "gallery": [
      "assets/gallery/Pengiriman_1.jpg",
      "assets/gallery/Pengiriman_2.jpeg"
    ]
  },
  {
    "id": "gal-5",
    "title": "Aktivitas",
    "category": "Aktivitas",
    "desc": "Pemeriksaan kualitas berkala (quality check) memastikan barang yang dikirim sesuai standar spesifikasi.",
    "image": "assets/gallery/Aktivitas.jpeg",
    "gallery": [
      "assets/gallery/Aktivitas.jpeg",
      "assets/gallery/Aktivitas_2.jpeg",
      "assets/gallery/Aktivitas_3.jpeg"
    ]
  },
  {
    "id": "gal-6",
    "title": "Tim Kami",
    "category": "Tim Kami",
    "desc": "Tim profesional kami yang berkomitmen mendampingi setiap tahapan pengadaan perusahaan Anda.",
    "image": "assets/gallery/Rapat_2.png",
    "gallery": [
      "assets/gallery/Rapat_2.png",
      "assets/gallery/Rapat_1.png",
      "assets/gallery/Rapat_3.jpg"
    ]
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
 * Firebase Firestore Cloud Configuration & Client
 */
const KMS_FIREBASE_CONFIG = {
  apiKey: "AIzaSyC2Qbc1qWT8FIPK9CT7dpPgJySY3_OzG1A",
  authDomain: "kanaya-multi-solusindo.firebaseapp.com",
  projectId: "kanaya-multi-solusindo",
  storageBucket: "kanaya-multi-solusindo.firebasestorage.app",
  messagingSenderId: "779738839192",
  appId: "1:779738839192:web:df3b952da43f07d87538ed"
};

let kmsDb = null;
try {
  if (typeof firebase !== 'undefined') {
    if (!firebase.apps.length) {
      firebase.initializeApp(KMS_FIREBASE_CONFIG);
    }
    kmsDb = firebase.firestore();
    console.log('✅ Firebase Firestore terhubung sukses.');
  } else {
    console.warn('⚠️ Firebase SDK belum dimuat, fallback ke LocalStorage.');
  }
} catch (err) {
  console.warn('⚠️ Inisialisasi Firebase error:', err);
}

/**
 * Reactive LocalStorage + Cloud Firestore Data Layer
 */
const STORAGE_KEY = 'KMS_APP_DATA_V10';
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
      // Guarantee updated hero slides with clean high-res images & highlights
      if (!parsed.heroSlides || parsed.heroSlides.some(s => !s.highlights || s.image.includes('1605600659908'))) {
        merged.heroSlides = JSON.parse(JSON.stringify(DEFAULT_KMS_DATA.heroSlides));
      }
      return merged;
    }
  } catch (e) {
    console.warn('Error reading localStorage, using defaults:', e);
  }
  return JSON.parse(JSON.stringify(DEFAULT_KMS_DATA));
}

function saveKmsData(data) {
  // 1. Simpan ke LocalStorage seketika untuk kecepatan lokal & offline fallback
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error('Error saving to localStorage:', e);
  }

  // 2. Simpan & Sinkronkan langsung ke Cloud Firebase Firestore
  if (kmsDb) {
    kmsDb.collection('cms').doc('website_data').set(data)
      .then(() => {
        console.log('☁️ Data website berhasil disinkronkan ke Cloud Firestore.');
        showSyncNotice('Tersimpan di Cloud Firebase');
      })
      .catch((err) => {
        console.error('❌ Gagal sinkron ke Cloud Firestore:', err);
      });
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
  inquiry.createdAtMs = Date.now();
  inquiry.status = 'Baru';
  list.unshift(inquiry);
  try {
    localStorage.setItem(INQUIRIES_KEY, JSON.stringify(list));
  } catch (e) {}

  // Simpan inquiry ke Firebase Firestore agar dapat diakses admin dari mana saja
  if (kmsDb) {
    kmsDb.collection('inquiries').add(inquiry)
      .then((docRef) => {
        inquiry._firestoreId = docRef.id;
        console.log('☁️ Inquiry pengadaan berhasil masuk ke Cloud Firestore:', docRef.id);
      })
      .catch((err) => {
        console.error('❌ Gagal simpan inquiry ke Firestore:', err);
      });
  }

  return inquiry;
}

// Helper notice sinkronisasi cloud
function showSyncNotice(msg) {
  let toast = document.getElementById('kms-sync-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'kms-sync-toast';
    toast.className = 'fixed bottom-5 right-5 z-[9999] bg-emerald-600 text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-2 transition-all duration-300 opacity-0 pointer-events-none transform translate-y-2';
    toast.innerHTML = '<span class="w-2 h-2 rounded-full bg-emerald-200 animate-ping"></span><span id="kms-sync-msg"></span>';
    document.body.appendChild(toast);
  }
  const msgEl = document.getElementById('kms-sync-msg');
  if (msgEl) msgEl.textContent = msg;
  toast.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-2');
  setTimeout(() => {
    toast.classList.add('opacity-0', 'pointer-events-none', 'translate-y-2');
  }, 2500);
}

// Initialize Global Data Instance
window.KMS_DATA = loadKmsData();

// Real-Time Cloud Synchronization Listener
function initCloudSync() {
  if (!kmsDb) return;

  // 1. Dengarkan pembaruan data website dari Firestore secara langsung
  kmsDb.collection('cms').doc('website_data').onSnapshot((doc) => {
    if (doc.exists) {
      const cloudData = doc.data();
      const merged = Object.assign({}, DEFAULT_KMS_DATA, cloudData);
      // Auto-upgrade cloud catalog if version < 7 or categories contain unsplash or old images path
      if (!cloudData.catalogVersion || cloudData.catalogVersion < 7 || (cloudData.categories && cloudData.categories.some(c => c.image && (c.image.includes('unsplash') || c.image.includes('assets/images/categories')))) || (cloudData.products && cloudData.products.some(p => p.image && p.image.includes('unsplash'))) || !cloudData.clients || cloudData.clients.length === 0) {
        merged.products = DEFAULT_KMS_DATA.products;
        merged.categories = DEFAULT_KMS_DATA.categories;
        merged.clients = DEFAULT_KMS_DATA.clients;
        merged.gallery = DEFAULT_KMS_DATA.gallery;
        merged.catalogVersion = 7;
        if (kmsDb) {
          kmsDb.collection('cms').doc('website_data').set(merged).catch(() => {});
        }
      }
      if (cloudData.company) {
        merged.company = Object.assign({}, DEFAULT_KMS_DATA.company, cloudData.company);
        if (cloudData.company.contacts) {
          merged.company.contacts = Object.assign({}, DEFAULT_KMS_DATA.company.contacts, cloudData.company.contacts);
        }
      }
      window.KMS_DATA = merged;
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
        if (cloudData.adminUsername) {
          localStorage.setItem('KMS_CUSTOM_USER', cloudData.adminUsername);
        }
        if (cloudData.adminPassword) {
          localStorage.setItem('KMS_CUSTOM_PASS', cloudData.adminPassword);
        }
      } catch(e) {}

      // Perbarui tampilan publik jika halaman utama sedang terbuka
      if (typeof refreshAllPublicContent === 'function') {
        refreshAllPublicContent();
      }
      // Perbarui hero slides jika fungsi tersedia
      if (typeof window.renderHeroSlides === 'function') {
        window.renderHeroSlides();
      }
      // Perbarui dashboard admin jika admin sedang membukanya
      if (typeof initAdminDashboard === 'function' && window.location.hash.includes('admin')) {
        initAdminDashboard();
      }
    } else {
      // Jika data di Firestore masih kosong, unggah data default secara otomatis
      console.log('☁️ Mengunggah data awal bawaan ke Cloud Firestore...');
      kmsDb.collection('cms').doc('website_data').set(window.KMS_DATA)
        .catch(err => console.warn('Gagal upload data awal:', err));
    }
  }, (err) => {
    console.warn('Firestore real-time sync warning:', err);
  });

  // 2. Dengarkan data Inquiries dari Firestore secara realtime untuk Admin
  kmsDb.collection('inquiries').onSnapshot((snapshot) => {
    const cloudInquiries = [];
    snapshot.forEach((doc) => {
      const item = doc.data();
      item._firestoreId = doc.id;
      cloudInquiries.push(item);
    });
    cloudInquiries.sort((a, b) => (b.createdAtMs || 0) - (a.createdAtMs || 0));
    try {
      localStorage.setItem(INQUIRIES_KEY, JSON.stringify(cloudInquiries));
    } catch(e) {}

    if (typeof renderAdminInquiries === 'function' && window.location.hash.includes('admin')) {
      renderAdminInquiries();
    }
    if (typeof updateAdminStats === 'function' && window.location.hash.includes('admin')) {
      updateAdminStats();
    }
  }, (err) => {
    console.warn('Firestore inquiries sync warning:', err);
  });

  // 3. Dengarkan data Analitik Kunjungan dari Firestore secara realtime
  kmsDb.collection('cms').doc('analytics').onSnapshot((doc) => {
    if (doc.exists) {
      window.KMS_ANALYTICS = doc.data();
      if (typeof renderAdminAnalytics === 'function' && window.location.hash.includes('admin')) {
        renderAdminAnalytics();
      }
    }
  }, (err) => {
    console.warn('Firestore analytics sync warning:', err);
  });

  // Jalankan pelacakan pengunjung jika bukan admin
  if (!window.location.hash.includes('admin')) {
    trackVisitor();
  }
}

/**
 * Mesin Pelacak Kunjungan Pengunjung Website (Real-time Analytics)
 */
function trackVisitor() {
  if (!kmsDb || typeof firebase === 'undefined') return;
  try {
    const today = new Date().toISOString().split('T')[0];
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    let visId = localStorage.getItem('KMS_VISITOR_ID');
    let isNewVisitor = false;
    if (!visId) {
      visId = 'v_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
      localStorage.setItem('KMS_VISITOR_ID', visId);
      isNewVisitor = true;
    }

    const lastVisit = localStorage.getItem('KMS_LAST_VISIT_DATE');
    const isNewToday = (lastVisit !== today);
    if (isNewToday) {
      localStorage.setItem('KMS_LAST_VISIT_DATE', today);
    }

    const inc = firebase.firestore.FieldValue.increment(1);
    const updateData = {
      totalViews: inc,
      lastUpdated: new Date().toISOString()
    };
    if (isNewVisitor) {
      updateData.uniqueVisitors = inc;
    }
    if (isMobile) {
      updateData.mobileViews = inc;
    } else {
      updateData.desktopViews = inc;
    }
    updateData[`views_${today}`] = inc;

    kmsDb.collection('cms').doc('analytics').set(updateData, { merge: true })
      .catch(err => console.warn('Gagal mencatat analitik:', err));
  } catch(e) {
    console.warn('Pelacakan analitik dilewati:', e);
  }
}

// Jalankan Cloud Sync setelah halaman siap
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCloudSync);
} else {
  initCloudSync();
}
