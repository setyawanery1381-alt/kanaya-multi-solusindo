# Website Perusahaan PT Kanaya Multi Solusindo

Website company profile dan katalog pengadaan digital B2B untuk **PT Kanaya Multi Solusindo (KMS)**, dibangun sesuai spesifikasi **Product Requirement Document (PRD)** dan referensi visual korporat modern.

---

## 🌟 Fitur Utama & Kesesuaian PRD

1. **Top Bar & Sticky Corporate Header**:
   - Quick contact: Email (`admin@kanayamulti.com`), WhatsApp (`0813-1052-840`), Instagram (`@kanayamultisolusindo`), dan alamat kantor di Ruko Sentra Harapan Indah - Bekasi.
   - Bilingual Switcher (Bahasa Indonesia & English) interaktif.
   - Navigasi responsif lengkap dengan mobile drawer.

2. **Beranda / Home**:
   - Hero Section dengan copywriting formal: *"General Supplier yang Mendukung Kebutuhan Bisnis & Industri Anda"*.
   - Profil Singkat Perusahaan (*Short About*) dengan visual korporat.
   - 3 Nilai Utama (*Mengapa Memilih Kami*: Profesional & Terpercaya, Customer Focus, Kualitas & Pelayanan).
   - Grid 7 Kategori Produk unggulan.
   - Closing CTA Banner: *"Bukan Sekadar Penyedia, Kami Hadir sebagai Mitra."*

3. **Tentang Kami (About Us)**:
   - Profil lengkap sejarah berdirinya PT Kanaya Multi Solusindo pada tahun 2024.
   - Kartu Visi dan 3 butir Misi perusahaan sesuai naskah PRD Bab 5.
   - Nilai Perusahaan dengan ikonografi tajam.

4. **Katalog Produk (Product Catalog)**:
   - Filter Kategori cepat (Plastic, Packaging, Office Stationery, Safety Equipment, Chemical, Consumable, Printing).
   - Fitur pencarian instan (*Instant Live Search*).
   - Kartu produk informatif dengan tombol *Lihat Detail* dan *Ajukan Inquiry*.
   - CTA Pengadaan Khusus di bagian bawah.

5. **Halaman / View Detail Produk & Spesifikasi**:
   - Tampilan khusus produk (misal: *Plastic Stretch Film* dan varian plastik industri: OPP, CPP, PVC, Nylon, PP, PET, LDPE, Bubble Wrap).
   - Galeri thumbnail dan foto produk resolusi tinggi.
   - Daftar keunggulan dan **Tabel Spesifikasi Teknis**.
   - Tombol *Ajukan Inquiry* (otomatis mengisi nama produk) & *Download Katalog*.
   - Rekomendasi produk terkait (*Related Products*).

6. **Solusi & Mengapa Kanaya**:
   - 4 Solusi Kebutuhan Industri: *Business & Operational Supplies*, *Packaging Solutions*, *Workplace Safety*, dan *Cleaning & Facility Needs*.
   - Metrik Kredibilitas: *500+ Produk Lengkap*, *100+ Klien Korporat*, *10+ Sektor Industri*.

7. **Klien Kami (Our Clients)**:
   - Grid 8 logo klien resmi sesuai PRD Bab 9:
     - PT. Hitachi Construction Machinery Indonesia
     - PT MICS STEEL INDONESIA
     - Kandia Tirta Engineering
     - PT Tembaga Mulia Semanan, Tbk
     - PT. Chengtian Weiye Indonesia
     - PT Adhimix Precast Indonesia (adhibeton)
     - ENKEI INDONESIA
     - PT. ANUGERAH CIPTA KREASINDO

8. **Dokumentasi & Galeri Kegiatan**:
   - Dokumentasi visual operasional: Kegiatan Distribusi, Warehouse & Storage, Meeting / Office, Armada Pengiriman, Aktivitas Perusahaan, dan Tim Kami.

9. **Kontak & Formulir Inquiry B2B**:
   - Formulir pengadaan lengkap: Nama Lengkap, Nama Perusahaan, Email, No. WhatsApp, Kebutuhan Produk, Estimasi Jumlah, dan Catatan Spesifikasi.
   - **WhatsApp Inquiry Generator**: Otomatis menyusun naskah pesan pengadaan terstruktur dan membuka WhatsApp langsung ke nomor `0813-1052-840`.

10. **Komponen Tambahan**:
    - Modal *Quick Inquiry* terintegrasi di setiap tombol produk.
    - *Floating WhatsApp Button* dengan animasi hover dan pesan sambutan.
    - Footer korporat tema Dark Navy `#0B1B33` dengan logo KMS putih, navigasi cepat, dan copyright 2026.

---

## 📂 Struktur Berkas

```
kanaya-multi-solusindo/
├── index.html                 # Struktur utama HTML5 & navigasi view
├── css/
│   └── styles.css             # Desain korporat, typography, animasi, custom scrollbar
├── js/
│   ├── data.js                # Data produk, kategori, klien, galeri, dan kamus ID/EN
│   └── app.js                 # Router hash, filter kategori, search, modal, WhatsApp builder
├── assets/
│   └── logos/                 # Logo vektor SVG (KMS dark, KMS white, dan 8 logo klien)
│       ├── kms-logo.svg
│       ├── kms-logo-white.svg
│       ├── client-hitachi.svg
│       ├── client-mics.svg
│       ├── client-kandia.svg
│       ├── client-tms.svg
│       ├── client-chengtian.svg
│       ├── client-adhibeton.svg
│       ├── client-enkei.svg
│       └── client-anugerah.svg
├── serve.ps1                  # Peladen lokal HTTP PowerShell tanpa perlu install runtime
├── start.bat                  # Script klik dua kali untuk menjalankan website langsung
└── README.md                  # Dokumentasi proyek
```

---

## 🚀 Cara Menjalankan Secara Lokal

### Cara 1: Menggunakan `start.bat` (Paling Praktis)
1. Buka folder `C:\Users\Saka Farma\.gemini\antigravity\scratch\kanaya-multi-solusindo`.
2. Klik dua kali pada file `start.bat`.
3. Server lokal akan berjalan di `http://localhost:8080/` dan peramban (browser) default Anda akan otomatis terbuka.

### Cara 2: Membuka Langsung di Peramban
Anda juga dapat langsung membuka file `index.html` dengan klik dua kali atau *Open with Chrome / Edge*.

---

## 🌐 Panduan Deployment ke Vercel

Proyek ini telah dikonfigurasi dengan berkas `vercel.json`, `.gitignore`, dan `package.json` sehingga dapat langsung di-deploy ke **Vercel** dengan 3 cara mudah:

### Cara 1: Menggunakan GitHub & Vercel Dashboard (Sangat Direkomendasikan)
1. Buat repositori baru di [GitHub](https://github.com/new), beri nama misalnya `kanaya-multi-solusindo`.
2. Unggah seluruh file proyek (atau upload berkas `kanaya-multi-solusindo.zip` yang sudah tersedia di folder proyek).
3. Buka dashboard [Vercel](https://vercel.com/) dan login menggunakan akun GitHub Anda.
4. Klik **Add New...** > **Project**, lalu klik **Import** pada repositori `kanaya-multi-solusindo`.
5. Pada pengaturan proyek:
   - **Framework Preset**: Biarkan `Other`
   - **Root Directory**: `./` (default)
6. Klik **Deploy**. Dalam 20-30 detik website Anda sudah online dengan domain `xxx.vercel.app` dan SSL HTTPS gratis selamanya!

### Cara 2: Menggunakan Vercel CLI (Jika Node.js terpasang)
1. Buka terminal di folder proyek ini:
   ```bash
   npx vercel
   ```
2. Login dan ikuti instruksi di terminal.
3. Untuk rilis ke production:
   ```bash
   npx vercel --prod
   ```

### Cara 3: Menggunakan Custom Domain Perusahaan
Jika Anda memiliki domain resmi (contoh: `kanayamulti.com`):
1. Masuk ke Project Anda di Vercel Dashboard > **Settings** > **Domains**.
2. Masukkan domain Anda (misal `kanayamulti.com` atau `www.kanayamulti.com`).
3. Tambahkan CNAME atau A Record sesuai petunjuk yang diberikan Vercel di panel registrar domain Anda. SSL akan terpasang otomatis.
