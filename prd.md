Product Requirements Document (PRD): Website SPS Motor Ajibarang
1. Ringkasan Eksekutif
Proyek ini bertujuan untuk membangun platform website interaktif untuk SPS Motor Ajibarang. Website ini akan memfasilitasi calon pembeli untuk melihat katalog motor, melakukan simulasi kredit secara mandiri, dan menyediakan panel admin bagi pengelola untuk memperbarui informasi produk tanpa memerlukan intervensi teknis lanjutan.

2. Tujuan Pengguna (User Goals)

Pelanggan: Dapat dengan mudah menemukan motor yang dicari, melihat detail dan foto yang jelas, serta menghitung estimasi biaya cicilan sebelum menghubungi pihak dealer.

Admin/Dealer: Dapat memperbarui harga, menambah varian motor baru, dan mengelola galeri foto dengan antarmuka yang ramah pengguna.

3. Ruang Lingkup & Fase Rilis
Berdasarkan struktur perencanaan, pengembangan dibagi menjadi 3 fase utama:

Fase 1: Katalog Motor (MVP - Minimum Viable Product)

Jelajahi Daftar Motor (Grid/List view dengan filter dasar).

Detail & Galeri Motor (Halaman khusus untuk spesifikasi dan foto).

Tombol Hubungi Dealer (Integrasi langsung ke WhatsApp dengan pesan otomatis yang membawa konteks motor yang sedang dilihat).

Fase 2: Simulasi Kredit

Pilih Motor & Lihat Harga (Otomatis mengambil data dari database katalog).

Atur Uang Muka & Tenor (Slider atau dropdown untuk persentase DP dan durasi bulan).

Lihat Hasil Angsuran (Kalkulasi dinamis yang menampilkan estimasi cicilan per bulan).

Fase 3: Panel Admin CMS

Kelola Model Motor (Sistem CRUD - Create, Read, Update, Delete).

Update Harga & Promo.

Kelola Galeri Foto.

📋 Rincian Tugas (Task Breakdown)
Berikut adalah rincian tugas terperinci agar Anda dapat mengeksekusi proyek ini langkah demi langkah:

Fase 1: Katalog Motor
Desain & UI/UX:

Buat wireframe atau desain antarmuka bergaya minimalis dan modern untuk halaman utama dan daftar motor.

Desain halaman detail motor (fokus pada hierarki informasi: Harga, Spesifikasi Utama, Galeri).

Database & Struktur Data:

Rancang skema database untuk Motorcycles (ID, Nama, Merk, Tipe, Harga_Cash, Deskripsi).

Rancang skema database untuk Images (ID, Motor_ID, URL).

Frontend Development:

Bangun komponen Card untuk menampilkan ringkasan motor.

Bangun halaman Detail dengan carousel gambar.

Buat fungsi utilitas untuk merender tautan WhatsApp dinamis (misal: wa.me/628xxx?text=Halo, saya tertarik dengan [Nama Motor]).

Fase 2: Simulasi Kredit
Logika & Kalkulasi (Backend/Frontend Logic):

Kumpulkan rumus pasti dari dealer untuk perhitungan kredit (Bunga flat/menurun, biaya admin, asuransi jika ada).

Buat fungsi JavaScript/TypeScript untuk menghitung angsuran berdasarkan (Harga - DP) + Bunga / Tenor.

UI/UX Development:

Buat komponen Slider interaktif atau Input Field untuk Uang Muka (DP).

Buat komponen Dropdown atau Button Group untuk pilihan Tenor (misal: 11, 17, 23, 35 bulan).

Desain panel hasil yang menyorot angka angsuran per bulan secara real-time saat slider digeser.

Fase 3: Panel Admin CMS
Autentikasi & Keamanan:

Buat halaman login khusus admin.

Terapkan perlindungan rute (Route Guarding) agar halaman CMS tidak bisa diakses publik.

Pengembangan Fitur CMS (CRUD):

Buat form input untuk menambah/mengedit data motor.

Integrasikan fitur unggah (upload) gambar ke cloud storage.

Buat tabel dasbor untuk melihat daftar seluruh motor yang aktif beserta tombol edit/hapus