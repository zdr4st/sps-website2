
export interface FeatureDetail {
  name: string;
  description: string;
  image?: string;
}

export interface Motorcycle {
  id: string;
  name: string;
  brand: string;
  type: string;
  priceCash: number;
  description: string;
  images: string[];
  featureDetails: FeatureDetail[];
}

// ─── Shared feature sets by product family ────────────────────────────────────

const FEAT_REVO_FIT: FeatureDetail[] = [
  {
    name: "Mesin eSP 110cc",
    description: "Mesin Enhanced Smart Power (eSP) 110cc berteknologi injeksi PGM-FI menghadirkan tenaga optimal dengan konsumsi bahan bakar yang hemat dan emisi rendah.",
    image: "https://ik.imagekit.io/zlt25mb52fx/tr:q-90,f-auto,pr-true/uploads/product/feature/esp-engine-1.jpg",
  },
  {
    name: "Sistem Pengereman CBS",
    description: "Combi Brake System (CBS) memastikan pengereman lebih merata dan stabil karena rem depan dan belakang bekerja secara bersamaan hanya dengan menekan tuas rem belakang.",
    image: "https://ik.imagekit.io/zlt25mb52fx/tr:q-90,f-auto,pr-true/uploads/product/feature/cbs-system-1.jpg",
  },
  {
    name: "Lampu Depan LED",
    description: "Lampu depan dengan teknologi LED menghasilkan pencahayaan lebih terang, lebih hemat energi, dan memiliki umur pakai yang jauh lebih panjang dibanding lampu konvensional.",
  },
  {
    name: "Bagasi di Bawah Jok",
    description: "Ruang penyimpanan praktis di bawah jok yang cukup untuk menampung barang bawaan sehari-hari, menjadikan perjalanan Anda lebih nyaman dan efisien.",
  },
  {
    name: "Tangki Bensin 4,2 Liter",
    description: "Kapasitas tangki 4,2 liter memungkinkan jarak tempuh lebih jauh sehingga frekuensi pengisian BBM semakin berkurang dan perjalanan semakin efisien.",
  },
  {
    name: "Desain Sporty Modern",
    description: "Tampilan bodi yang sporty dan modern dengan lekukan aerodinamis yang menarik perhatian di jalanan.",
  },
];

const FEAT_REVO_X: FeatureDetail[] = [
  {
    name: "Panel Meter Modern",
    description: "Lebih modern & keren dengan tampilan indikator fungsional yang lengkap. Khusus varian Revo X.",
    image: "https://ik.imagekit.io/zlt25mb52fx/tr:q-90,f-auto,pr-true/uploads/product/feature/panel-meter-modern-1-16042021-013234.jpg",
  },
  {
    name: "Pengaman Kunci Kontak Bermagnet Otomatis",
    description: "Sistem penguncian bermagnet otomatis mengurangi resiko pencurian. Dilengkapi Ilumi untuk pengoperasian dalam gelap. Hanya tipe Revo X.",
    image: "https://ik.imagekit.io/zlt25mb52fx/tr:q-90,f-auto,pr-true/uploads/product/feature/pengaman-kunci-kontak-bermagnet-otomatis-1-16042021-013238.jpg",
  },
  {
    name: "Lampu Depan & Lampu Sein Sporti",
    description: "Tampilan lampu depan New Honda Revo FI yang sporti siap memberikan pencahayaan yang terang. Lampu sein yang lebih besar dan terpisah dari lampu depan melengkapi tampilan kerennya.",
    image: "https://ik.imagekit.io/zlt25mb52fx/tr:q-90,f-auto,pr-true/uploads/product/feature/lampu-depan-lampu-sein-sporti-3-24012022-110439.jpeg",
  },
  {
    name: "Rem Cakram",
    description: "Dilengkapi rem cakram untuk tampilan sporti & keamanan berkendara yang lebih optimal.",
    image: "https://ik.imagekit.io/zlt25mb52fx/tr:q-90,f-auto,pr-true/uploads/product/feature/rem-cakram-1-16042021-013248.jpg",
  },
  {
    name: "Bagasi 7 Liter",
    description: "Ruang bagasi serbaguna yang besar, lebih fungsional & praktis untuk barang bawaan Anda.",
    image: "https://ik.imagekit.io/zlt25mb52fx/tr:q-90,f-auto,pr-true/uploads/product/feature/bagasi-7-liter-1-16042021-013258.jpg",
  },
  {
    name: "Tangki Bensin 4,0 L dengan Tempat Penutup Bensin",
    description: "Dengan volume tangki bensin lebih besar, mampu menempuh perjalanan lebih jauh dan dilengkapi tempat penutup bensin agar lebih praktis saat mengisi BBM.",
    image: "https://ik.imagekit.io/zlt25mb52fx/tr:q-90,f-auto,pr-true/uploads/product/feature/tangki-bensin-4-0-l-dengan-tempat-penutup-bensin-1-16042021-013304.jpg",
  },
  {
    name: "Lampu Belakang Dinamis",
    description: "Desain dinamis & sporti dengan lensa bening multireflektor yang keren serta aman saat berkendara.",
    image: "https://ik.imagekit.io/zlt25mb52fx/tr:q-90,f-auto,pr-true/uploads/product/feature/lampu-belakang-dinamis-1-16042021-013309.jpg",
  },
  {
    name: "Pijakan Kaki Belakang Sporti",
    description: "Desain pijakan kaki belakang yang sporti dan minim getaran, memberikan kenyamanan bagi pembonceng.",
    image: "https://ik.imagekit.io/zlt25mb52fx/tr:q-90,f-auto,pr-true/uploads/product/feature/pijakan-kaki-belakang-sporti-1-16042021-013312.jpg",
  },
  {
    name: "Knalpot Sporti",
    description: "Semakin keren dengan knalpot sporti & pelindung panas berlapis chrome.",
    image: "https://ik.imagekit.io/zlt25mb52fx/tr:q-90,f-auto,pr-true/uploads/product/feature/knalpot-sporti-1-16042021-013316.jpg",
  },
];

const FEAT_SUPRA_X_125: FeatureDetail[] = [
  {
    name: "Mesin eSP 125cc PGM-FI",
    description: "Teknologi Enhanced Smart Power (eSP) dengan injeksi PGM-FI menghasilkan tenaga 6,59 kW yang bertenaga namun tetap irit bahan bakar.",
  },
  {
    name: "Panel Meter Digital & Analog",
    description: "Kombinasi panel meter digital dan analog yang informatif memudahkan pengendara membaca kecepatan, RPM, dan indikator penting lainnya dengan jelas.",
  },
  {
    name: "Sistem Pengereman CBS",
    description: "Combi Brake System memastikan distribusi pengereman yang optimal pada kedua roda secara bersamaan untuk keamanan berkendara maksimal.",
  },
  {
    name: "Desain Bodi Dinamis",
    description: "Desain bodi yang aerodinamis dengan aksen garis tegas menghadirkan tampilan sporty yang maskulin dan modern.",
  },
  {
    name: "Lampu Depan Proyektor",
    description: "Lampu depan dengan teknologi proyektor menghasilkan sorot yang lebih terfokus dan terang untuk visibilitas berkendara malam yang lebih baik.",
  },
  {
    name: "Setang Tubular Baru",
    description: "Desain setang tubular yang ergonomis memberikan posisi berkendara nyaman dan kontrol lebih presisi di segala kondisi jalan.",
  },
];

const FEAT_SUPRA_GTR: FeatureDetail[] = [
  {
    name: "Mesin DOHC 150cc",
    description: "Mesin DOHC 150cc eSP+ berpendingin cairan (liquid-cooled) menghasilkan tenaga 12,8 kW pada 9.000 rpm, menjadikannya bebek paling bertenaga di kelasnya.",
  },
  {
    name: "Teknologi Assist & Slipper Clutch",
    description: "Assist & Slipper Clutch mengurangi gesekan kopling untuk perpindahan gigi yang lebih ringan dan mulus, serta mencegah ban belakang selip saat deselerasi.",
  },
  {
    name: "Throttle By Wire",
    description: "Sistem Throttle By Wire (TBW) menghubungkan handle gas ke karburator secara elektronik untuk respons gas yang lebih akurat dan halus.",
  },
  {
    name: "Panel Meter Full Digital",
    description: "Panel instrumen full-digital TFT yang informatif menampilkan kecepatan, RPM, konsumsi BBM, dan berbagai informasi berkendara lainnya.",
  },
  {
    name: "Suspensi USD (Upside-Down)",
    description: "Suspensi depan tipe Upside-Down (USD) memberikan pengendalian lebih akurat, presisi, dan sporty layaknya motor sport.",
  },
  {
    name: "Rem Cakram Depan & Belakang dengan ABS",
    description: "Sistem pengereman ganda cakram berteknologi ABS mencegah ban mengunci saat pengereman mendadak untuk keamanan berkendara optimal.",
  },
  {
    name: "Lampu Full LED",
    description: "Sistem pencahayaan full LED pada lampu depan, belakang, dan sein memberikan visibilitas superior serta tampilan modern yang elegan.",
  },
];

const FEAT_SONIC: FeatureDetail[] = [
  {
    name: "Mesin DOHC 150cc eSP+",
    description: "Mesin DOHC 4-valve 150cc berpendingin cairan menghasilkan tenaga peak 10,8 kW yang responsif, lincah, dan tetap efisien dalam konsumsi bahan bakar.",
  },
  {
    name: "Suspensi Depan Teleskopik",
    description: "Suspensi depan teleskopik berdiameter besar memberikan peredaman yang nyaman dan pengendalian yang stabil di berbagai kondisi jalan.",
  },
  {
    name: "Rem Cakram Depan & Belakang",
    description: "Sistem pengereman cakram dual-channel memberikan daya henti yang kuat dan konsisten untuk keamanan berkendara di segala situasi.",
  },
  {
    name: "Lampu Depan LED Ganda",
    description: "Desain lampu depan LED ganda yang khas dan agresif memberikan karakter visual unik sekaligus penerangan jalan yang optimal.",
  },
  {
    name: "Panel Meter Digital Sporty",
    description: "Panel instrumen digital berdesain sporty menampilkan informasi berkendara penting dengan mudah dibaca bahkan di bawah sinar matahari.",
  },
  {
    name: "Desain Sporty Agresif",
    description: "Bodi aerodinamis dengan lekukan tajam dan tampilan agresif menegaskan karakter bebek sport Honda yang penuh semangat dan dinamis.",
  },
  {
    name: "Tangki Bensin 4,1 Liter",
    description: "Kapasitas tangki yang cukup besar memastikan jangkauan perjalanan yang jauh sebelum perlu pengisian ulang bahan bakar.",
  },
];

const FEAT_CB_VERZA: FeatureDetail[] = [
  {
    name: "Mesin 150cc SOHC",
    description: "Mesin 4-tak 150cc SOHC berpendingin udara menghasilkan tenaga yang cukup bertenaga namun tetap handal dan mudah dirawat untuk pemakaian sehari-hari.",
  },
  {
    name: "Desain Klasik Modern",
    description: "Desain bodi naked bike yang klasik dan elegan dengan garis-garis tegas menghadirkan tampilan gagah dan berwibawa di jalanan.",
  },
  {
    name: "Posisi Berkendara Tegak",
    description: "Geometri rangka yang dirancang untuk posisi berkendara tegak memberikan kenyamanan optimal bagi pengendara dalam perjalanan jarak jauh.",
  },
  {
    name: "Rem Cakram Depan",
    description: "Rem cakram di roda depan memberikan daya henti yang responsif dan presisi untuk kontrol berkendara yang lebih baik.",
  },
  {
    name: "Tangki Bensin 12,4 Liter",
    description: "Kapasitas tangki besar 12,4 liter ideal untuk touring jarak jauh tanpa khawatir kehabisan bahan bakar di tengah perjalanan.",
  },
  {
    name: "Panel Meter Kombinasi",
    description: "Kombinasi speedometer analog dan panel digital yang informatif memberikan informasi berkendara lengkap dengan mudah.",
  },
];

const FEAT_CB150R: FeatureDetail[] = [
  {
    name: "Mesin DOHC 150cc eSP+",
    description: "Mesin DOHC 4-valve 150cc berpendingin cairan (liquid-cooled) menghasilkan performa peak 13,2 kW yang garang dan responsif di setiap putaran mesin.",
  },
  {
    name: "Assist & Slipper Clutch",
    description: "Sistem Assist & Slipper Clutch memungkinkan perpindahan gigi yang lebih ringan dan mencegah ban belakang mengunci saat engine braking agresif.",
  },
  {
    name: "Panel Meter Full Digital",
    description: "Instrumen panel full-digital berdesain modern menampilkan seluruh informasi berkendara secara jelas dan mudah dibaca.",
  },
  {
    name: "Suspensi Depan Teleskopik 41mm",
    description: "Suspensi teleskopik berdiameter 41mm memberikan pengendalian yang presisi dan peredaman getaran yang optimal di berbagai kondisi jalan.",
  },
  {
    name: "Rem Cakram Dual Channel dengan ABS",
    description: "Sistem ABS dua channel memastikan pengereman yang aman dan terkontrol, mencegah penguncian ban pada pengereman mendadak.",
  },
  {
    name: "Desain Street Fighter",
    description: "Tampilan street fighter yang agresif dengan fairing minimalis menegaskan karakter naked sport Honda yang dinamis dan berjiwa muda.",
  },
  {
    name: "Lampu Full LED",
    description: "Seluruh sistem pencahayaan menggunakan teknologi LED untuk tampilan modern, konsumsi daya lebih rendah, dan visibilitas berkendara yang optimal.",
  },
];

const FEAT_CBR150: FeatureDetail[] = [
  {
    name: "Mesin DOHC Liquid-Cooled 150cc",
    description: "Mesin DOHC 4-valve berpendingin cairan 150cc menghasilkan performa puncak 13,2 kW dengan karakter tenaga yang merata di seluruh rentang RPM.",
  },
  {
    name: "Full Fairing Aerodinamis",
    description: "Desain full fairing aerodinamis terinspirasi dari Honda RC213V MotoGP menghadirkan tampilan racing yang memukau sekaligus mengurangi hambatan angin.",
  },
  {
    name: "Assist & Slipper Clutch",
    description: "Teknologi Assist & Slipper Clutch menghadirkan operasi kopling yang lebih ringan dan mencegah ban belakang terkunci saat perpindahan gigi mendadak.",
  },
  {
    name: "Panel Instrumen Full TFT",
    description: "Layar TFT full-color dengan antarmuka yang intuitif menampilkan semua informasi berkendara penting dengan visual yang premium dan mudah dibaca.",
  },
  {
    name: "Suspensi Inverted Fork 37mm",
    description: "Suspensi depan inverted fork (USD) 37mm meningkatkan presisi pengendalian dan memperkuat karakter sport dari CBR150R.",
  },
  {
    name: "Rem Cakram dengan ABS Dual Channel",
    description: "Rem cakram depan dan belakang dilengkapi ABS dua channel memberikan keamanan pengereman optimal di berbagai kondisi permukaan jalan.",
  },
  {
    name: "Lampu Depan Twin LED",
    description: "Desain lampu depan twin LED berkarakter agresif khas Honda CBR memberikan pencahayaan superior dan tampilan yang semakin garang.",
  },
];

const FEAT_CRF150: FeatureDetail[] = [
  {
    name: "Mesin 150cc SOHC Off-Road",
    description: "Mesin 150cc SOHC single-cylinder yang telah dioptimalkan untuk medan off-road menghadirkan torsi bawah yang besar dan performa handal di berbagai trek.",
  },
  {
    name: "Suspensi Travel Panjang",
    description: "Suspensi depan teleskopik dan suspensi belakang Pro-Link dengan travel panjang menyerap benturan secara maksimal untuk kenyamanan berkendara di medan berat.",
  },
  {
    name: "Rangka Baja Bertubular",
    description: "Rangka tubular baja berkekuatan tinggi yang ringan namun kokoh memberikan ketahanan maksimal di kondisi off-road yang paling menantang sekalipun.",
  },
  {
    name: "Ban Dual-Purpose",
    description: "Ban bercorak dual-purpose yang dioptimalkan untuk memberikan traksi maksimal baik di aspal maupun di medan tanah, pasir, dan bebatuan.",
  },
  {
    name: "Ground Clearance Tinggi",
    description: "Ground clearance 265mm memungkinkan motor melintasi rintangan dan permukaan tidak rata dengan leluasa tanpa khawatir bagian bawah motor tersangkut.",
  },
  {
    name: "Lampu LED & Panel Digital",
    description: "Lampu depan LED yang tahan guncangan dan panel instrumen digital yang informatif memastikan performa optimal bahkan di kondisi ekstrem.",
  },
  {
    name: "Rem Cakram Depan & Belakang",
    description: "Sistem rem cakram ganda dengan ukuran rotor yang sesuai memberikan daya henti yang handal di segala jenis medan.",
  },
];

const FEAT_CB150X: FeatureDetail[] = [
  {
    name: "Mesin DOHC 150cc Adventure-Ready",
    description: "Mesin DOHC 150cc berpendingin cairan yang dioptimalkan untuk karakteristik adventure memberikan torsi yang besar di putaran rendah untuk medan beragam.",
  },
  {
    name: "Desain Adventure Crossover",
    description: "Desain bodi crossover yang memadukan gaya adventure tourer dengan agilitas motor sport menghadirkan tampilan yang unik dan fungsional.",
  },
  {
    name: "Ground Clearance Tinggi 181mm",
    description: "Ground clearance 181mm yang lebih tinggi dari rata-rata motor sport memungkinkan CB150X melibas jalanan kasar dan rusak dengan percaya diri.",
  },
  {
    name: "Ban Adventure Dual-Purpose",
    description: "Ban berprofile dual-purpose yang memberikan traksi optimal di permukaan aspal maupun jalan tanah untuk fleksibilitas berkendara yang luar biasa.",
  },
  {
    name: "Panel Instrumen Full Digital",
    description: "Panel instrumen all-digital yang informatif menampilkan seluruh data berkendara dengan tampilan yang modern dan easy-to-read.",
  },
  {
    name: "Rem Cakram ABS Dual Channel",
    description: "Sistem pengereman cakram dengan ABS dua channel memberikan keamanan berkendara optimal di berbagai permukaan jalan.",
  },
  {
    name: "Windscreen Adventure",
    description: "Windscreen berdesain adventure melindungi pengendara dari angin dan hujan, meningkatkan kenyamanan berkendara jarak jauh.",
  },
];

const FEAT_CRF250: FeatureDetail[] = [
  {
    name: "Mesin 250cc DOHC Liquid-Cooled",
    description: "Mesin 250cc DOHC berpendingin cairan menghasilkan tenaga peak 19,3 kW yang luar biasa untuk petualangan off-road paling menantang sekalipun.",
  },
  {
    name: "Suspensi Showa Fully Adjustable",
    description: "Suspensi Showa berteknologi tinggi yang dapat disetel (adjustable) menghadirkan peredaman optimal sesuai preferensi pengendara dan kondisi medan.",
  },
  {
    name: "Rangka Aluminium Ringan",
    description: "Rangka twin-spar aluminium yang sangat ringan namun kaku memberikan penanganan presisi dan mengurangi beban total untuk performa off-road lebih baik.",
  },
  {
    name: "Sistem Manajemen Torsi (HSTC)",
    description: "Honda Selectable Torque Control (HSTC) mengelola distribusi torsi untuk mencegah selip ban belakang saat akselerasi di medan licin.",
  },
  {
    name: "Quickshifter",
    description: "Fitur Quickshifter memungkinkan perpindahan gigi tanpa perlu menekan kopling, menghadirkan perpindahan gigi yang lebih cepat dan mulus.",
  },
  {
    name: "Ground Clearance 260mm",
    description: "Ground clearance 260mm memastikan motor dapat melintasi rintangan paling tinggi sekalipun dengan aman di berbagai kondisi medan.",
  },
  {
    name: "Panel Instrumen TFT Full-Color",
    description: "Layar TFT full-color 5-inci yang dilengkapi mode riding dan informasi navigasi untuk petualangan yang lebih cerdas.",
  },
];

const FEAT_MONKEY: FeatureDetail[] = [
  {
    name: "Mesin 125cc SOHC Fuel-Injected",
    description: "Mesin 125cc SOHC berpendingin udara dengan sistem injeksi bahan bakar PGM-FI menghadirkan performa yang menyenangkan dan handal dalam kemasan ikonik.",
  },
  {
    name: "Desain Ikonik Mini-Bike",
    description: "Desain retro-modern yang sangat ikonik terinspirasi dari Honda Monkey original 1961, diperbarui dengan teknologi modern dan material premium.",
  },
  {
    name: "Suspensi Teleskopik Inverted",
    description: "Suspensi depan inverted fork yang modern memberikan penanganan superior dalam kemasan desain retro yang charming.",
  },
  {
    name: "Rem Cakram Depan & Belakang ABS",
    description: "Sistem pengereman cakram ganda dilengkapi ABS untuk keamanan pengereman yang optimal, bahkan di jalanan basah dan licin.",
  },
  {
    name: "Lampu Full LED",
    description: "Seluruh sistem pencahayaan full LED menghadirkan tampilan modern yang kontras dengan desain retro yang ikonik.",
  },
  {
    name: "Panel Meter Digital Bundar",
    description: "Panel meter digital berdesain bundar retro yang unik menampilkan informasi berkendara dengan gaya yang memikat dan berkelas.",
  },
  {
    name: "Jok Dua Tingkat (Two-Tone Seat)",
    description: "Jok two-tone berdesain retro klasik yang nyaman memberikan kenyamanan sekaligus memperkuat karakter visual Monkey yang ikonik.",
  },
];

const FEAT_CT125: FeatureDetail[] = [
  {
    name: "Mesin 125cc Fuel-Injected SOHC",
    description: "Mesin 125cc SOHC dengan injeksi bahan bakar menghasilkan tenaga handal dengan efisiensi BBM tinggi, ideal untuk petualangan urban maupun luar kota.",
  },
  {
    name: "Desain Hunter Cub Ikonik",
    description: "Desain yang terinspirasi dari Honda Super Cub dengan sentuhan petualang modern, menghadirkan estetika yang unik dan penuh kepribadian.",
  },
  {
    name: "Rak Pengangkut Depan & Belakang",
    description: "Rak pengangkut depan dan belakang berkapasitas besar yang kokoh memungkinkan pengangkutan barang bawaan yang banyak dengan mudah dan aman.",
  },
  {
    name: "Ban Knobby Adventure",
    description: "Ban berprofile adventure memberikan traksi optimal di berbagai jenis permukaan, dari aspal perkotaan hingga jalur tanah yang terjal.",
  },
  {
    name: "Suspensi Travel Panjang",
    description: "Suspensi bertravel panjang menyerap benturan dari permukaan jalan yang tidak rata untuk kenyamanan berkendara yang lebih baik.",
  },
  {
    name: "Rem Cakram Depan ABS",
    description: "Rem cakram depan dilengkapi ABS memberikan pengereman yang responsif dan aman di berbagai kondisi permukaan jalan.",
  },
  {
    name: "Lampu LED Serbaguna",
    description: "Lampu LED yang menghadap ke depan dan berfungsi sebagai penerang untuk berkendara maupun aktivitas perkemahan.",
  },
];

const FEAT_EM1E: FeatureDetail[] = [
  {
    name: "Motor Listrik 1.7 kW",
    description: "Motor listrik brushless 1,7 kW menghadirkan akselerasi yang lembut dan instan tanpa getaran maupun suara mesin konvensional.",
  },
  {
    name: "Baterai Honda Mobile Power Pack e:",
    description: "Baterai lithium-ion portabel Mobile Power Pack e: yang dapat dilepas-pasang memberikan kemudahan pengisian daya di mana saja tanpa perlu colokan khusus.",
  },
  {
    name: "Riding Mode (Standard & Sport)",
    description: "Dua mode berkendara — Standard dan Sport — memungkinkan pengendara menyesuaikan karakter akselerasi sesuai kebutuhan dan situasi berkendara.",
  },
  {
    name: "Regenerative Braking",
    description: "Sistem pengereman regeneratif mengubah energi kinetik saat deselerasi menjadi energi listrik yang mengisi kembali baterai secara otomatis.",
  },
  {
    name: "Panel Instrumen Digital",
    description: "Panel instrumen digital menampilkan informasi penting seperti persentase daya baterai, kecepatan, jarak tempuh, dan mode berkendara yang aktif.",
  },
  {
    name: "Zero Emisi Langsung",
    description: "Tanpa emisi gas buang langsung, Honda EM1 e: berkontribusi pada udara yang lebih bersih dan lingkungan yang lebih sehat untuk masa depan.",
  },
  {
    name: "Penyimpanan di Bawah Jok",
    description: "Ruang penyimpanan di bawah jok yang cukup untuk menyimpan barang bawaan sehari-hari meskipun baterai terpasang.",
  },
];

const FEAT_EM1E_PLUS: FeatureDetail[] = [
  {
    name: "Motor Listrik 1.7 kW",
    description: "Motor listrik brushless 1,7 kW menghadirkan akselerasi yang lembut dan instan tanpa getaran maupun suara mesin konvensional.",
  },
  {
    name: "Dual Baterai Honda Mobile Power Pack e:",
    description: "Dua unit baterai lithium-ion portabel Mobile Power Pack e: yang dapat dilepas-pasang memberikan jangkauan dua kali lebih jauh untuk kebebasan berkendara lebih panjang.",
  },
  {
    name: "Riding Mode (Standard & Sport)",
    description: "Dua mode berkendara memungkinkan penyesuaian karakter akselerasi sesuai preferensi dan kondisi berkendara.",
  },
  {
    name: "Regenerative Braking",
    description: "Sistem pengereman regeneratif mengubah energi kinetik saat deselerasi menjadi energi listrik yang mengisi kembali baterai.",
  },
  {
    name: "Panel Instrumen Digital",
    description: "Panel instrumen digital menampilkan persentase daya baterai, kecepatan, jarak tempuh, dan mode berkendara secara real-time.",
  },
  {
    name: "Zero Emisi Langsung",
    description: "Tanpa emisi gas buang, Honda EM1 e: Plus berkontribusi pada lingkungan yang lebih bersih dan berkelanjutan.",
  },
  {
    name: "Jangkauan Lebih Jauh",
    description: "Dengan dua baterai, jangkauan maksimal meningkat signifikan sehingga perjalanan sehari-hari dapat dilakukan dengan lebih tenang.",
  },
];

const FEAT_ICON_E: FeatureDetail[] = [
  {
    name: "Motor Listrik Bertenaga",
    description: "Motor listrik brushless berperforma tinggi memberikan akselerasi yang responsif dan menyenangkan untuk mobilitas perkotaan yang dinamis.",
  },
  {
    name: "Desain Modern & Stylish",
    description: "Desain futuristik dan modern yang trendi mencerminkan semangat generasi muda yang melek teknologi dan peduli lingkungan.",
  },
  {
    name: "Sistem Pengisian Cepat",
    description: "Mendukung pengisian daya cepat yang memungkinkan baterai terisi penuh dalam waktu singkat untuk mobilitas yang tidak terhenti.",
  },
  {
    name: "Riding Mode Selektif",
    description: "Beberapa mode berkendara memberikan fleksibilitas untuk menyesuaikan performa dengan kebutuhan dan situasi berkendara yang berbeda.",
  },
  {
    name: "Koneksi Smartphone",
    description: "Sistem konektivitas smartphone memungkinkan pengendara memantau status baterai, jarak tempuh, dan data berkendara lainnya melalui aplikasi Honda.",
  },
  {
    name: "Rem Cakram Depan & Belakang",
    description: "Sistem pengereman cakram ganda memberikan daya henti yang responsif dan aman untuk keselamatan berkendara di jalanan kota.",
  },
];

const FEAT_CUVE: FeatureDetail[] = [
  {
    name: "Motor Listrik 1.7 kW",
    description: "Motor listrik brushless 1,7 kW memberikan akselerasi mulus dan instan yang khas kendaraan listrik untuk mobilitas perkotaan yang efisien.",
  },
  {
    name: "Desain Crossover Futuristik",
    description: "Desain bodi crossover yang berani dan futuristik memadukan estetika premium dengan fungsionalitas tinggi untuk tampilan yang memukau.",
  },
  {
    name: "Baterai Mobile Power Pack e:",
    description: "Baterai portabel Mobile Power Pack e: yang dapat dilepas memudahkan pengisian daya di mana saja, dari rumah hingga kantor.",
  },
  {
    name: "Riding Mode (Standard & Sport)",
    description: "Dua mode berkendara Standard dan Sport memungkinkan pengendara menyesuaikan karakter akselerasi dengan kebutuhan.",
  },
  {
    name: "Penyimpanan Besar di Bawah Jok",
    description: "Ruang penyimpanan luas di bawah jok memberikan kapasitas yang memadai untuk membawa barang bawaan sehari-hari.",
  },
  {
    name: "Lampu Full LED",
    description: "Sistem pencahayaan full LED dengan desain modern memberikan tampilan premium dan pencahayaan berkendara yang optimal.",
  },
  {
    name: "Panel Instrumen Digital",
    description: "Panel instrumen digital informatif menampilkan data baterai, kecepatan, dan mode berkendara secara jelas dan intuitif.",
  },
];

const FEAT_CUVE_ROADSYNC: FeatureDetail[] = [
  ...FEAT_CUVE.filter(f => f.name !== "Motor Listrik 1.7 kW"),
  {
    name: "Motor Listrik 1.7 kW",
    description: "Motor listrik brushless 1,7 kW memberikan akselerasi mulus dan instan yang khas kendaraan listrik untuk mobilitas perkotaan yang efisien.",
  },
  {
    name: "Honda RoadSync Connectivity",
    description: "Teknologi Honda RoadSync memungkinkan koneksi smartphone via Bluetooth untuk navigasi turn-by-turn, panggilan telepon, dan kontrol musik langsung dari panel instrumen.",
  },
];

const FEAT_BEAT: FeatureDetail[] = [
  {
    name: "Combined Digital Panel Meter",
    description: "Semakin stylish dengan panel meter yang canggih dilengkapi lampu indikator ECO untuk kemudahan informasi berkendara.",
    image: "https://ik.imagekit.io/zlt25mb52fx/tr:q-90,f-auto,pr-true/uploads/product/feature/combined-digital-panel-meter-1.jpg",
  },
  {
    name: "Tuas Pengunci Rem (Brake Lock)",
    description: "Mencegah motor loncat saat mesin dihidupkan dan lebih nyaman saat berhenti di tanjakan atau turunan.",
    image: "https://ik.imagekit.io/zlt25mb52fx/tr:q-90,f-auto,pr-true/uploads/product/feature/tuas-pengunci-rem-1.jpg",
  },
  {
    name: "Functional Hook",
    description: "Membawa barang semakin mudah dengan adanya gantungan di depan.",
    image: "https://ik.imagekit.io/zlt25mb52fx/tr:q-90,f-auto,pr-true/uploads/product/feature/functional-hook-1.jpg",
  },
  {
    name: "Sistem Pencahayaan LED",
    description: "Sistem pencahayaan dengan teknologi LED berdesain modern membuat tampilanmu semakin keren.",
    image: "https://ik.imagekit.io/zlt25mb52fx/tr:q-90,f-auto,pr-true/uploads/product/feature/sistem-pencahayaan-led-1.jpg",
  },
  {
    name: "Bagasi Pas 12L",
    description: "Sekali ada tempat buat barang lebih banyak dengan kapasitas bagasi yang lebih besar.",
    image: "https://ik.imagekit.io/zlt25mb52fx/tr:q-90,f-auto,pr-true/uploads/product/feature/bagasi-pas-12l-1.jpg",
  },
  {
    name: "Standar Samping Otomatis (Side Stand Switch)",
    description: "Mesin tidak dapat dinyalakan saat standar samping dalam posisi turun sehingga mencegah pengendara lupa menaikkan standar samping.",
    image: "https://ik.imagekit.io/zlt25mb52fx/tr:q-90,f-auto,pr-true/uploads/product/feature/standar-samping-otomatis-1.jpg",
  },
  {
    name: "Anti Theft Alarm",
    description: "Sistem keamanan Anti Theft Alarm, untuk memberikan keamanan tambahan saat memarkirkan sepeda motor. *Tersedia pada tipe CBS dan CBS-ISS.",
    image: "https://ik.imagekit.io/zlt25mb52fx/tr:q-90,f-auto,pr-true/uploads/product/feature/anti-theft-alarm-1.jpg",
  },
];

const FEAT_BEAT_ISS: FeatureDetail[] = [
  ...FEAT_BEAT,
  {
    name: "Idling Stop System (ISS)",
    description: "ISS secara otomatis mematikan mesin ketika motor berhenti lebih dari 3 detik dan menghidupkannya kembali saat gas diputar, menghemat BBM hingga 10%.",
  },
];

const FEAT_BEAT_SMARTKEY: FeatureDetail[] = [
  ...FEAT_BEAT_ISS,
  {
    name: "Smart Key System",
    description: "Teknologi remote canggih, dimana tidak lagi memerlukan kunci mekanis untuk mengoperasikan kunci stang/menghidupkan mesin. *Tersedia pada tipe Deluxe Smart Key.",
  },
  {
    name: "Power Charger (12W)",
    description: "Up to Date kan terus duniamu dengan power charger. *Daya maksimal 12 W (12V 1A).",
  },
];

const FEAT_GENIO: FeatureDetail[] = [
  {
    name: "Mesin eSP 110cc PGM-FI",
    description: "Mesin Enhanced Smart Power 110cc dengan PGM-FI menghadirkan kombinasi sempurna antara performa yang menyenangkan dan efisiensi bahan bakar yang tinggi.",
  },
  {
    name: "Desain Retro Modern Elegan",
    description: "Desain bodi retro modern dengan lekukan membulat yang elegan menghadirkan tampilan yang stylish, unik, dan berbeda dari matic lainnya.",
  },
  {
    name: "Penyimpanan di Bawah Jok 10 Liter",
    description: "Ruang bagasi 10 liter di bawah jok cukup luas dan praktis untuk berbagai kebutuhan perjalanan sehari-hari.",
  },
  {
    name: "Layar Panel Meter Digital",
    description: "Panel instrumen digital berdesain modern menampilkan semua informasi berkendara penting dengan tampilan yang menarik dan informatif.",
  },
  {
    name: "Rem CBS (Combi Brake System)",
    description: "Sistem CBS memastikan distribusi pengereman yang merata dan aman untuk berbagai kondisi berkendara.",
  },
  {
    name: "Lampu Depan LED",
    description: "Lampu depan LED yang terang dan modern meningkatkan visibilitas berkendara dan tampilan keseluruhan motor.",
  },
  {
    name: "Jok Nyaman Dua Warna",
    description: "Jok dua warna berdesain ergonomis memberikan kenyamanan maksimal untuk pengendara maupun pembonceng dalam perjalanan panjang sekalipun.",
  },
];

const FEAT_GENIO_ISS: FeatureDetail[] = [
  ...FEAT_GENIO,
  {
    name: "Idling Stop System (ISS)",
    description: "ISS menghemat bahan bakar dengan otomatis mematikan mesin saat motor berhenti dan menghidupkannya kembali saat gas diputar.",
  },
];

const FEAT_SCOOPY: FeatureDetail[] = [
  {
    name: "Mesin eSP 110cc PGM-FI",
    description: "Mesin eSP 110cc dengan injeksi PGM-FI menghasilkan tenaga yang cukup untuk menemani aktivitas harian dengan efisiensi BBM terbaik di kelasnya.",
  },
  {
    name: "Desain Ikonik Retro-Modern",
    description: "Desain bodi bulat yang khas dan ikonik dengan sentuhan retro modern yang timeless menjadikan Scoopy pilihan utama bagi mereka yang mengutamakan gaya.",
  },
  {
    name: "Penyimpanan di Bawah Jok 11,5 Liter",
    description: "Ruang penyimpanan 11,5 liter di bawah jok cukup luas untuk menyimpan berbagai barang bawaan termasuk helm berukuran sedang.",
  },
  {
    name: "Idling Stop System (ISS)",
    description: "ISS otomatis mematikan mesin saat motor berhenti di kemacetan untuk menghemat konsumsi bahan bakar dan mengurangi emisi gas buang.",
  },
  {
    name: "Panel Instrumen Digital Stylish",
    description: "Panel instrumen digital berdesain stylish yang serasi dengan keseluruhan tampilan Scoopy, menampilkan informasi berkendara secara jelas.",
  },
  {
    name: "Rem CBS (Combi Brake System)",
    description: "Sistem CBS memastikan pengereman yang aman dan merata untuk keamanan berkendara yang optimal.",
  },
  {
    name: "Lampu Depan LED Bulat",
    description: "Lampu depan LED berbentuk bulat yang khas memperkuat karakter retro-modern Scoopy sekaligus memberikan pencahayaan yang baik.",
  },
];

const FEAT_SCOOPY_SK: FeatureDetail[] = [
  ...FEAT_SCOOPY,
  {
    name: "Smart Key System",
    description: "Sistem Smart Key memberikan kemudahan tanpa kunci fisik — cukup dekatkan fob key dan tekan tombol starter untuk menyalakan motor.",
  },
];

const FEAT_VARIO125: FeatureDetail[] = [
  {
    name: "Mesin eSP 125cc PGM-FI",
    description: "Mesin Enhanced Smart Power 125cc dengan PGM-FI menghasilkan tenaga puncak 8,5 kW yang bertenaga namun tetap hemat BBM untuk penggunaan harian.",
  },
  {
    name: "Penyimpanan di Bawah Jok 18 Liter",
    description: "Kapasitas penyimpanan terbesar di kelasnya — 18 liter di bawah jok cukup untuk menampung helm full-face dan barang bawaan lainnya.",
  },
  {
    name: "Panel Instrumen Digital Informatif",
    description: "Panel instrumen digital komprehensif menampilkan informasi berkendara lengkap termasuk konsumsi BBM real-time dan jam digital.",
  },
  {
    name: "Lampu Depan LED",
    description: "Lampu depan LED memberikan pencahayaan terang dan merata untuk visibilitas berkendara optimal di malam hari.",
  },
  {
    name: "Rem CBS (Combi Brake System)",
    description: "Sistem CBS memastikan distribusi pengereman yang aman dan merata ke kedua roda untuk keamanan berkendara yang optimal.",
  },
  {
    name: "Desain Premium & Aerodinamis",
    description: "Desain bodi premium berkarakter bold dengan lekukan aerodinamis yang tajam menghadirkan tampilan yang kuat dan berkarakter.",
  },
  {
    name: "Tangki Bensin 5,5 Liter",
    description: "Kapasitas tangki 5,5 liter memungkinkan jarak tempuh yang lebih jauh sebelum pengisian ulang bahan bakar.",
  },
];

const FEAT_VARIO125_ISS: FeatureDetail[] = [
  ...FEAT_VARIO125,
  {
    name: "Idling Stop System (ISS)",
    description: "ISS menghemat BBM dengan otomatis mematikan mesin saat motor berhenti dan menghidupkannya kembali secara instan saat gas diputar.",
  },
];

const FEAT_VARIO160: FeatureDetail[] = [
  {
    name: "Mesin eSP+ 160cc Liquid-Cooled",
    description: "Mesin eSP+ 160cc berpendingin cairan dengan 4-valve menghasilkan tenaga 12,1 kW yang bertenaga dan responsif untuk akselerasi yang menggugah semangat.",
  },
  {
    name: "Honda Selectable Torque Control (HSTC)",
    description: "HSTC secara aktif memantau dan mengontrol torsi mesin untuk mencegah ban belakang selip saat akselerasi, memberikan keamanan berkendara ekstra.",
  },
  {
    name: "Penyimpanan di Bawah Jok 21 Liter",
    description: "Kapasitas penyimpanan luar biasa 21 liter di bawah jok — terbesar di kelasnya, mampu menampung dua helm full-face sekaligus.",
  },
  {
    name: "Panel Instrumen Full Digital",
    description: "Panel instrumen all-digital yang canggih menampilkan semua informasi berkendara dengan tampilan yang premium dan mudah dibaca dalam segala kondisi pencahayaan.",
  },
  {
    name: "Lampu Full LED",
    description: "Sistem pencahayaan full LED pada seluruh lampu menegaskan kelas premium Vario EVO 160 dengan tampilan modern dan berkarakter.",
  },
  {
    name: "Rem Cakram Depan & Belakang",
    description: "Rem cakram pada kedua roda memberikan daya henti yang kuat dan responsif untuk keamanan berkendara yang lebih terjamin.",
  },
  {
    name: "Desain Aerodinamis Premium",
    description: "Desain bodi aerodinamis premium dengan lekukan tajam dan detail finishing yang tinggi menegaskan posisi Vario EVO 160 sebagai raja di kelasnya.",
  },
];

const FEAT_VARIO160_ABS: FeatureDetail[] = [
  ...FEAT_VARIO160,
  {
    name: "ABS (Anti-lock Braking System)",
    description: "Sistem ABS mencegah penguncian roda saat pengereman mendadak, memberikan kontrol dan keamanan berkendara yang lebih baik di semua kondisi jalan.",
  },
];

const FEAT_STYLO: FeatureDetail[] = [
  {
    name: "Mesin eSP 125cc PGM-FI",
    description: "Mesin eSP 125cc dengan PGM-FI menghadirkan performa yang menyenangkan, efisien, dan andal untuk berbagai kebutuhan perjalanan.",
  },
  {
    name: "Desain Neo-Retro Eksklusif",
    description: "Desain neo-retro yang eksklusif dan elegan memadukan keindahan estetika klasik dengan kecanggihan teknologi modern untuk tampilan yang benar-benar unik.",
  },
  {
    name: "Panel Instrumen TFT Full-Color",
    description: "Layar TFT full-color menampilkan informasi berkendara dengan visual yang premium dan dapat disesuaikan tampilan antarmukanya.",
  },
  {
    name: "Honda RoadSync Connectivity",
    description: "Honda RoadSync memungkinkan koneksi ke smartphone via Bluetooth untuk navigasi turn-by-turn, panggilan, dan kontrol musik langsung dari layar instrumen.",
  },
  {
    name: "Penyimpanan di Bawah Jok 14 Liter",
    description: "Ruang penyimpanan 14 liter yang luas dan mudah diakses untuk berbagai barang bawaan sehari-hari.",
  },
  {
    name: "Lampu Full LED Premium",
    description: "Sistem pencahayaan full LED dengan desain premium menegaskan karakter eksklusif dan modern dari Honda Stylo.",
  },
  {
    name: "Rem CBS (Combi Brake System)",
    description: "CBS memastikan pengereman yang aman dan terkontrol dengan distribusi daya rem yang merata ke kedua roda.",
  },
];

const FEAT_STYLO_ABS: FeatureDetail[] = [
  ...FEAT_STYLO,
  {
    name: "ABS (Anti-lock Braking System)",
    description: "ABS mencegah penguncian roda saat pengereman mendadak untuk kontrol dan keselamatan yang lebih tinggi di berbagai kondisi jalan.",
  },
];

const FEAT_PCX160: FeatureDetail[] = [
  {
    name: "Mesin eSP+ 160cc Liquid-Cooled",
    description: "Mesin eSP+ 160cc berpendingin cairan menghasilkan tenaga 12,1 kW yang bertenaga untuk perjalanan ekspresif, baik dalam kota maupun antar kota.",
  },
  {
    name: "Penyimpanan di Bawah Jok 30 Liter",
    description: "Kapasitas penyimpanan ekstra besar 30 liter di bawah jok — cukup luas untuk dua helm full-face dan masih ada sisa ruang untuk barang bawaan lain.",
  },
  {
    name: "Panel Instrumen Full Digital",
    description: "Panel instrumen full-digital yang informatif menampilkan seluruh data berkendara dengan tampilan yang canggih dan premium.",
  },
  {
    name: "Smart Key System",
    description: "Sistem Smart Key tanpa kontak fisik memberikan keamanan ekstra dan kemudahan yang sesungguhnya dalam mengoperasikan motor sehari-hari.",
  },
  {
    name: "Suspensi Belakang Dual Function",
    description: "Suspensi belakang Dual Function dengan penyetelan preload yang dapat disesuaikan memberikan kenyamanan berkendara optimal untuk berbagai kondisi.",
  },
  {
    name: "Lampu Full LED",
    description: "Sistem pencahayaan full LED pada semua lampu memberikan visibilitas superior dan tampilan yang kelas dan modern.",
  },
  {
    name: "Desain Premium Futuristik",
    description: "Desain bodi premium futuristik dengan garis aerodinamis yang tegas menegaskan PCX160 sebagai skuter premium terdepan di kelasnya.",
  },
];

const FEAT_PCX160_ABS: FeatureDetail[] = [
  ...FEAT_PCX160,
  {
    name: "ABS (Anti-lock Braking System)",
    description: "Sistem ABS dua channel memastikan pengereman yang aman dan terkontrol di berbagai permukaan jalan untuk keselamatan berkendara maksimal.",
  },
];

const FEAT_PCX160_ROADSYNC: FeatureDetail[] = [
  ...FEAT_PCX160_ABS,
  {
    name: "Honda RoadSync Connectivity",
    description: "Honda RoadSync menghubungkan PCX160 dengan smartphone via Bluetooth untuk navigasi, panggilan, dan kontrol musik langsung dari panel instrumen.",
  },
];

const FEAT_ADV160: FeatureDetail[] = [
  {
    name: "Mesin eSP+ 160cc Liquid-Cooled",
    description: "Mesin eSP+ 160cc berpendingin cairan yang bertenaga 12,1 kW dengan karakter torsi yang besar di putaran bawah — ideal untuk segala medan petualangan.",
  },
  {
    name: "Honda Selectable Torque Control (HSTC)",
    description: "HSTC aktif mengontrol torsi untuk mencegah selip ban belakang di permukaan licin, memberikan kepercayaan diri lebih saat berkendara di medan beragam.",
  },
  {
    name: "Ground Clearance Tinggi 165mm",
    description: "Ground clearance 165mm yang lebih tinggi dari rata-rata skuter memberikan kemampuan melibas jalan rusak dan medan tidak rata dengan percaya diri.",
  },
  {
    name: "Suspensi Adventure Dual-Purpose",
    description: "Suspensi bertravel panjang baik di depan maupun belakang menyerap benturan dari medan kasar untuk kenyamanan berkendara adventure yang lebih baik.",
  },
  {
    name: "Penyimpanan di Bawah Jok 30 Liter",
    description: "Kapasitas bagasi 30 liter di bawah jok yang luas memastikan cukup ruang untuk perlengkapan touring jarak jauh.",
  },
  {
    name: "Panel Instrumen Full Digital",
    description: "Panel instrumen all-digital menampilkan seluruh informasi berkendara termasuk HSTC status dan mode berkendara dengan jelas.",
  },
  {
    name: "Lampu Full LED Adventure",
    description: "Sistem pencahayaan full LED dengan desain adventure-ready memberikan tampilan yang gagah dan pencahayaan berkendara yang optimal.",
  },
];

const FEAT_ADV160_ABS: FeatureDetail[] = [
  ...FEAT_ADV160,
  {
    name: "ABS (Anti-lock Braking System)",
    description: "Sistem ABS dua channel bekerja sinergis dengan HSTC untuk pengereman yang aman di berbagai permukaan, dari aspal basah hingga jalan tanah.",
  },
];

const FEAT_ADV160_ROADSYNC: FeatureDetail[] = [
  ...FEAT_ADV160_ABS,
  {
    name: "Honda RoadSync Connectivity",
    description: "Honda RoadSync menghubungkan ADV160 dengan smartphone untuk navigasi, panggilan masuk, dan kontrol musik langsung dari panel instrumen selama petualangan.",
  },
];

const FEAT_CBR250: FeatureDetail[] = [
  {
    name: "Mesin Parallel-Twin 250cc DOHC",
    description: "Mesin parallel-twin 2-silinder 250cc DOHC berpendingin cairan menghasilkan tenaga peak 27,5 kW dengan karakter power delivery yang linear dan menyenangkan.",
  },
  {
    name: "Full Fairing Aerodinamis MotoGP-Inspired",
    description: "Desain full fairing aerodinamis yang terinspirasi dari Honda RC213V MotoGP menghadirkan tampilan racing yang agresif sekaligus mengurangi hambatan angin secara signifikan.",
  },
  {
    name: "Assist & Slipper Clutch",
    description: "Assist & Slipper Clutch memberikan operasi kopling yang lebih ringan dan mencegah ban belakang mengunci saat engine braking untuk keamanan berkendara yang lebih baik.",
  },
  {
    name: "Panel Instrumen TFT Full-Color",
    description: "Layar TFT full-color premium dengan tampilan yang dapat dipersonalisasi menampilkan semua informasi berkendara dengan visual yang kelas dan intuitif.",
  },
  {
    name: "Suspensi Showa SFF-BP",
    description: "Suspensi depan Showa Separate Function Fork Big Piston memberikan pengendalian yang presisi dan responsif untuk pengalaman berkendara yang benar-benar sporty.",
  },
  {
    name: "Rem Nissin Dual Piston Caliper",
    description: "Rem depan dengan kaliper dual-piston Nissin memberikan daya henti yang kuat dan feeling pengereman yang presisi layaknya motor supersport.",
  },
  {
    name: "Lampu Depan Twin Slit LED",
    description: "Desain lampu depan twin-slit LED yang khas dan agresif memberikan identitas visual yang kuat dan pencahayaan berkendara yang superior.",
  },
];

const FEAT_CBR250_ABS: FeatureDetail[] = [
  ...FEAT_CBR250,
  {
    name: "ABS (Anti-lock Braking System)",
    description: "Sistem ABS dua channel memberikan pengereman yang aman dan terkontrol bahkan dalam kondisi pengereman mendadak di permukaan jalan yang licin.",
  },
];

const FEAT_CBR250_SP: FeatureDetail[] = [
  ...FEAT_CBR250_ABS,
  {
    name: "Quickshifter (QS)",
    description: "Quickshifter memungkinkan perpindahan gigi tanpa menekan kopling saat akselerasi, menghadirkan sensasi berkendara yang lebih sporty dan responsif.",
  },
  {
    name: "Frame Aluminium Twin-Spar",
    description: "Rangka twin-spar aluminium yang ringan namun kaku secara torsional memberikan penanganan yang sangat presisi dan responsif.",
  },
];

// ─── Motorcycle catalog ───────────────────────────────────────────────────────

export const mockMotorcycles: Motorcycle[] = [
  {
    "id": "m-revo-fit",
    "name": "REVO FIT",
    "brand": "Honda",
    "type": "Bebek",
    "priceCash": 19200000,
    "description": "Honda Revo FIT hadir sebagai motor bebek yang hemat dan andal untuk menemani aktivitas sehari-hari. Dengan mesin eSP 110cc berteknologi injeksi PGM-FI, Revo FIT menawarkan efisiensi bahan bakar yang luar biasa tanpa mengorbankan kehandalan.",
    "images": [
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-product-1-24012022-110522.png"
    ],
    "featureDetails": FEAT_REVO_FIT,
  },
  {
    "id": "m-revo-x",
    "name": "REVO X",
    "brand": "Honda",
    "type": "Bebek",
    "priceCash": 20910000,
    "description": "New Honda Revo X tampil lebih sporty dan berkarakter dengan sejumlah fitur premium yang meningkatkan pengalaman berkendara. Dilengkapi panel meter modern, pengaman kunci bermagnet, dan rem cakram untuk tampilan sekaligus keamanan yang lebih baik.",
    "images": [
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-product-2-24012022-110536.png"
    ],
    "featureDetails": FEAT_REVO_X,
  },
  {
    "id": "m-supra-x-125-d",
    "name": "SUPRA X 125 D",
    "brand": "Honda",
    "type": "Bebek",
    "priceCash": 22510000,
    "description": "Honda Supra X 125 D hadir dengan mesin eSP 125cc berinjeksi yang bertenaga namun irit BBM. Varian D menawarkan paket berkendara yang lengkap dengan tampilan yang dinamis dan modern.",
    "images": [
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-supra-x-125-d.png"
    ],
    "featureDetails": FEAT_SUPRA_X_125,
  },
  {
    "id": "m-supra-x-125-cw",
    "name": "SUPRA X 125 CW",
    "brand": "Honda",
    "type": "Bebek",
    "priceCash": 23720000,
    "description": "Honda Supra X 125 CW menghadirkan pengalaman berkendara bebek yang lebih premium dengan roda cast wheel (CW) yang lebih sporty, dilengkapi fitur-fitur canggih yang menjamin kenyamanan dan keamanan.",
    "images": [
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-supra-x-125-cw.png"
    ],
    "featureDetails": FEAT_SUPRA_X_125,
  },
  {
    "id": "m-supra-gtr-sporty",
    "name": "SUPRA GTR - Sporty",
    "brand": "Honda",
    "type": "Bebek",
    "priceCash": 28430000,
    "description": "Honda Supra GTR Sporty adalah puncak teknologi bebek Honda dengan mesin DOHC 150cc berpendingin cairan. Tampil sporty dengan suspensi USD dan performa mesin yang luar biasa untuk jiwa yang gemar kecepatan.",
    "images": [
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-supra-gtr-sporty.png"
    ],
    "featureDetails": FEAT_SUPRA_GTR,
  },
  {
    "id": "m-supra-gtr-exc",
    "name": "SUPRA GTR - Exc",
    "brand": "Honda",
    "type": "Bebek",
    "priceCash": 28680000,
    "description": "Honda Supra GTR Exc hadir dengan kelengkapan fitur yang lebih exclusive, menjadikannya pilihan terbaik bagi para penggemar bebek sport yang menginginkan performa dan teknologi terkini.",
    "images": [
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-supra-gtr-exc.png"
    ],
    "featureDetails": FEAT_SUPRA_GTR,
  },
  {
    "id": "m-sonic",
    "name": "SONIC",
    "brand": "Honda",
    "type": "Sport",
    "priceCash": 29820000,
    "description": "Honda Sonic hadir sebagai motor bebek sport dengan DNA balap yang sesungguhnya. Ditenagai mesin DOHC 150cc berpendingin cairan, Sonic menawarkan performa tinggi dalam paket desain yang agresif dan dinamis.",
    "images": [
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-sonic-150r.png"
    ],
    "featureDetails": FEAT_SONIC,
  },
  {
    "id": "m-sonic-special-edition",
    "name": "SONIC - Special Edition",
    "brand": "Honda",
    "type": "Sport",
    "priceCash": 30230000,
    "description": "Honda Sonic Special Edition menghadirkan semua keunggulan Sonic standar ditambah warna dan grafis eksklusif yang terbatas, menjadikannya koleksi yang sangat istimewa bagi para penggemar.",
    "images": [
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-sonic-150r-se.png"
    ],
    "featureDetails": FEAT_SONIC,
  },
  {
    "id": "m-cb-verza-d",
    "name": "CB VERZA D",
    "brand": "Honda",
    "type": "Sport",
    "priceCash": 25820000,
    "description": "Honda CB Verza D adalah motor naked yang menawarkan gaya klasik dengan teknologi modern. Sangat cocok untuk penggunaan sehari-hari maupun touring, dengan kapasitas tangki besar dan posisi berkendara yang nyaman.",
    "images": [
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-cb-verza-d.png"
    ],
    "featureDetails": FEAT_CB_VERZA,
  },
  {
    "id": "m-cb-verza-cw",
    "name": "CB VERZA CW",
    "brand": "Honda",
    "type": "Sport",
    "priceCash": 26480000,
    "description": "Honda CB Verza CW tampil lebih sporty dengan velg cast wheel yang premium. Memadukan estetika naked bike klasik dengan kenyamanan dan keandalan yang menjadi ciri khas Honda.",
    "images": [
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-cb-verza-cw.png"
    ],
    "featureDetails": FEAT_CB_VERZA,
  },
  {
    "id": "m-cb-150-r",
    "name": "CB 150 R",
    "brand": "Honda",
    "type": "Sport",
    "priceCash": 35620000,
    "description": "Honda CB 150 R ExMotion adalah motor naked sport bermesin DOHC 150cc liquid-cooled yang menghadirkan performa tinggi dalam desain street fighter yang agresif dan modern.",
    "images": [
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-cb150r.png"
    ],
    "featureDetails": FEAT_CB150R,
  },
  {
    "id": "m-cb-150-r-se",
    "name": "CB 150 R SE",
    "brand": "Honda",
    "type": "Sport",
    "priceCash": 36630000,
    "description": "Honda CB 150 R Special Edition menghadirkan warna dan grafis eksklusif yang memperkuat karakter street fighter dari CB 150 R. Tampil beda dan berkarakter di jalanan.",
    "images": [
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-cb150r-se.png"
    ],
    "featureDetails": FEAT_CB150R,
  },
  {
    "id": "m-cbr-150-hs",
    "name": "CBR 150 - HS",
    "brand": "Honda",
    "type": "Sport",
    "priceCash": 40360000,
    "description": "Honda CBR 150R adalah supersport 150cc yang menghadirkan teknologi dan gaya MotoGP-inspired. Dengan mesin DOHC berpendingin cairan dan full fairing aerodinamis, CBR150R membawa sensasi racing ke jalanan.",
    "images": [
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-cbr150r-hs.png"
    ],
    "featureDetails": FEAT_CBR150,
  },
  {
    "id": "m-cbr-150-mp",
    "name": "CBR 150 - MP",
    "brand": "Honda",
    "type": "Sport",
    "priceCash": 41070000,
    "description": "Honda CBR 150R MP hadir dengan pilihan warna Matte Pearl yang elegan dan sporty, menghadirkan tampilan supersport yang semakin memukau dengan karakter yang berbeda.",
    "images": [
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-cbr150r-mp.png"
    ],
    "featureDetails": FEAT_CBR150,
  },
  {
    "id": "m-cbr-150-abs-jna",
    "name": "CBR 150 ABS - JNA",
    "brand": "Honda",
    "type": "Sport",
    "priceCash": 44610000,
    "description": "Honda CBR 150R ABS JNA menghadirkan keamanan berkendara yang lebih tinggi dengan sistem ABS dua channel, dilengkapi semua fitur premium CBR 150R untuk pengalaman supersport yang komprehensif.",
    "images": [
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-cbr150r-abs-jna.png"
    ],
    "featureDetails": FEAT_CBR150,
  },
  {
    "id": "m-cbr-150-abs-jns-ke0",
    "name": "CBR 150 ABS - JNS KE0",
    "brand": "Honda",
    "type": "Sport",
    "priceCash": 45320000,
    "description": "Honda CBR 150R ABS JNS KE0 hadir dengan pilihan warna Victory Black Red yang garang, dilengkapi ABS dua channel untuk keamanan pengereman yang superior.",
    "images": [
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-cbr150r-abs-jns.png"
    ],
    "featureDetails": FEAT_CBR150,
  },
  {
    "id": "m-cbr-150-abs-jnu-kea",
    "name": "CBR 150 ABS - JNU KEA",
    "brand": "Honda",
    "type": "Sport",
    "priceCash": 44610000,
    "description": "Honda CBR 150R ABS JNU KEA hadir dalam warna Extreme Red yang ikonik dengan sistem ABS yang menjamin keamanan berkendara di berbagai kondisi jalan.",
    "images": [
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-cbr150r-abs-jnu.png"
    ],
    "featureDetails": FEAT_CBR150,
  },
  {
    "id": "m-crf-150",
    "name": "CRF - 150",
    "brand": "Honda",
    "type": "Sport",
    "priceCash": 40180000,
    "description": "Honda CRF 150L adalah motor dual-purpose yang dirancang untuk menaklukkan segala medan. Dengan suspensi bertravel panjang, ground clearance tinggi, dan ban dual-purpose, CRF 150L siap membawa Anda ke mana pun petualangan membawa.",
    "images": [
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-crf150l.png"
    ],
    "featureDetails": FEAT_CRF150,
  },
  {
    "id": "m-cb-150-x",
    "name": "CB 150 X",
    "brand": "Honda",
    "type": "Sport",
    "priceCash": 35910000,
    "description": "Honda CB 150 X adalah motor adventure crossover yang memadukan DNA off-road dengan kenyamanan urban. Ground clearance tinggi, ban adventure, dan mesin bertenaga menjadikannya pilihan ideal untuk eksplorasi jalan beragam.",
    "images": [
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-cb150x.png"
    ],
    "featureDetails": FEAT_CB150X,
  },
  {
    "id": "m-cb-150-x-se",
    "name": "CB 150 X - SE",
    "brand": "Honda",
    "type": "Sport",
    "priceCash": 36420000,
    "description": "Honda CB 150 X Special Edition tampil dengan warna dan grafis eksklusif yang memperkuat karakter adventure crossover-nya, menjadikannya pilihan berkelas bagi para penjelajah jalan.",
    "images": [
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-cb150x-se.png"
    ],
    "featureDetails": FEAT_CB150X,
  },
  {
    "id": "m-crf-250",
    "name": "CRF 250",
    "brand": "Honda",
    "type": "Others",
    "priceCash": 101310000,
    "description": "Honda CRF 250 Rally adalah motor adventure sport kelas dunia yang dirancang untuk petualangan tanpa batas. Dengan mesin parallel-twin 250cc dan teknologi terdepan, CRF 250 Rally adalah pilihan ultimate bagi petualang sejati.",
    "images": [
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-crf250rally.png"
    ],
    "featureDetails": FEAT_CRF250,
  },
  {
    "id": "m-monkey",
    "name": "MONKEY",
    "brand": "Honda",
    "type": "Others",
    "priceCash": 89480000,
    "description": "Honda Monkey adalah ikon abadi yang telah melampaui waktu sejak 1961. Kini hadir dalam balutan teknologi modern dengan mesin 125cc berinjeksi, rem ABS, dan desain yang mempertahankan karakter orisinalnya yang memukau.",
    "images": [
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-monkey.png"
    ],
    "featureDetails": FEAT_MONKEY,
  },
  {
    "id": "m-ct-125",
    "name": "CT 125",
    "brand": "Honda",
    "type": "Others",
    "priceCash": 84160000,
    "description": "Honda CT 125 Hunter Cub adalah motor serbaguna yang terinspirasi dari Super Cub legendaris dengan sentuhan adventure modern. Rak pengangkut besar, ban knobby, dan mesin berinjeksi menjadikannya teman sempurna untuk urban dan off-road ringan.",
    "images": [
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-ct125.png"
    ],
    "featureDetails": FEAT_CT125,
  },
  {
    "id": "m-em1-e-charger",
    "name": "EM1 e - CHARGER",
    "brand": "Honda",
    "type": "Others",
    "priceCash": 46121000,
    "description": "Honda EM1 e: adalah skuter listrik pertama Honda di Indonesia yang menggabungkan teknologi terdepan dengan kemudahan penggunaan. Baterai portabel Mobile Power Pack e: yang dapat dilepas memudahkan pengisian di mana saja.",
    "images": [
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-em1e-charger.png"
    ],
    "featureDetails": FEAT_EM1E,
  },
  {
    "id": "m-em1-e-plus-charger",
    "name": "EM1 e Plus - CHARGER",
    "brand": "Honda",
    "type": "Others",
    "priceCash": 46621000,
    "description": "Honda EM1 e: Plus hadir dengan dua unit baterai Mobile Power Pack e: yang memberikan jangkauan dua kali lebih jauh. Nikmati kebebasan berkendara listrik yang lebih panjang tanpa kompromi.",
    "images": [
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-em1e-plus.png"
    ],
    "featureDetails": FEAT_EM1E_PLUS,
  },
  {
    "id": "m-icon-e",
    "name": "ICON e",
    "brand": "Honda",
    "type": "Others",
    "priceCash": 28147000,
    "description": "Honda ICON e: hadir sebagai skuter listrik yang stylish dan terjangkau, dirancang untuk generasi muda yang dinamis dan peduli lingkungan. Desain futuristik dan teknologi EV terkini dalam satu paket yang menarik.",
    "images": [
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-icone.png"
    ],
    "featureDetails": FEAT_ICON_E,
  },
  {
    "id": "m-cuv-e",
    "name": "CUV e",
    "brand": "Honda",
    "type": "Others",
    "priceCash": 54693000,
    "description": "Honda CUV e: adalah skuter listrik crossover utility vehicle yang memadukan desain futuristik dengan fungsionalitas tinggi. Kapasitas penyimpanan besar dan performa listrik yang handal untuk mobilitas perkotaan modern.",
    "images": [
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-cuve.png"
    ],
    "featureDetails": FEAT_CUVE,
  },
  {
    "id": "m-cuv-e-roadsync",
    "name": "CUV e Roadsync",
    "brand": "Honda",
    "type": "Others",
    "priceCash": 59893000,
    "description": "Honda CUV e: Roadsync menghadirkan semua keunggulan CUV e: ditambah konektivitas Honda RoadSync untuk navigasi dan hiburan langsung dari panel instrumen. Skuter listrik paling cerdas untuk mobilitas urban modern.",
    "images": [
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-cuve-roadsync.png"
    ],
    "featureDetails": FEAT_CUVE_ROADSYNC,
  },
  {
    "id": "m-beat-sporty-cbs",
    "name": "BEAT SPORTY CBS",
    "brand": "Honda",
    "type": "Matic",
    "priceCash": 21270000,
    "description": "Honda Beat adalah skuter matic terlaris Indonesia yang terkenal dengan kelincahan dan efisiensinya. Varian Sporty CBS menghadirkan tampilan sporty dengan keamanan Combi Brake System untuk berkendara yang lebih aman.",
    "images": [
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-beat-sporty-cbs.png"
    ],
    "featureDetails": FEAT_BEAT,
  },
  {
    "id": "m-beat-sporty-iss-deluxe",
    "name": "BEAT SPORTY ISS DELUXE",
    "brand": "Honda",
    "type": "Matic",
    "priceCash": 22070000,
    "description": "Honda Beat Sporty ISS Deluxe menghadirkan pengalaman berkendara matic yang lebih hemat dengan Idling Stop System, didukung fitur-fitur deluxe yang meningkatkan kenyamanan dan kepraktisan.",
    "images": [
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-beat-sporty-iss-deluxe.png"
    ],
    "featureDetails": FEAT_BEAT_ISS,
  },
  {
    "id": "m-beat-iss-dx-smartkey",
    "name": "BEAT ISS DX SMARTKEY",
    "brand": "Honda",
    "type": "Matic",
    "priceCash": 22670000,
    "description": "Honda Beat ISS DX Smartkey adalah varian Beat paling premium dengan Smart Key System, Idling Stop System, dan fitur deluxe yang menjadikan berkendara lebih praktis, aman, dan menyenangkan.",
    "images": [
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-beat-iss-dx-smartkey.png"
    ],
    "featureDetails": FEAT_BEAT_SMARTKEY,
  },
  {
    "id": "m-new-beat-street",
    "name": "NEW BEAT STREET",
    "brand": "Honda",
    "type": "Matic",
    "priceCash": 22120000,
    "description": "New Honda Beat Street hadir dengan karakter yang lebih urban dan kasual, cocok untuk gaya hidup aktif generasi muda yang menyukai tampilan street casual yang trendi.",
    "images": [
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-new-beat-street.png"
    ],
    "featureDetails": FEAT_BEAT,
  },
  {
    "id": "m-genio-cbs",
    "name": "GENIO CBS",
    "brand": "Honda",
    "type": "Matic",
    "priceCash": 22210000,
    "description": "Honda Genio menghadirkan pesona retro modern yang tak lekang oleh waktu. Desain bulat yang unik dan charming dipadukan dengan teknologi mesin eSP 110cc yang efisien dan performa CBS yang aman.",
    "images": [
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-genio-cbs.png"
    ],
    "featureDetails": FEAT_GENIO,
  },
  {
    "id": "m-genio-cbs-spc-color",
    "name": "GENIO CBS SPC COLOR",
    "brand": "Honda",
    "type": "Matic",
    "priceCash": 22470000,
    "description": "Honda Genio CBS Special Color hadir dalam warna-warna spesial yang lebih segar dan trendi, mempertahankan semua keunggulan Genio CBS standar dengan sentuhan estetika yang lebih menarik.",
    "images": [
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-genio-cbs-spc-color.png"
    ],
    "featureDetails": FEAT_GENIO,
  },
  {
    "id": "m-genio-cbs-iss",
    "name": "GENIO CBS ISS",
    "brand": "Honda",
    "type": "Matic",
    "priceCash": 22770000,
    "description": "Honda Genio CBS ISS menambahkan Idling Stop System yang menghemat konsumsi BBM secara signifikan, menjadikannya pilihan ideal bagi mereka yang menginginkan motor retro yang indah sekaligus hemat.",
    "images": [
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-genio-cbs-iss.png"
    ],
    "featureDetails": FEAT_GENIO_ISS,
  },
  {
    "id": "m-scoopy-std",
    "name": "SCOOPY - STD",
    "brand": "Honda",
    "type": "Matic",
    "priceCash": 25350000,
    "description": "Honda Scoopy adalah ikon skuter retro-modern yang dicintai jutaan pengguna. Desain bulat yang khas, warna-warna cerah yang menarik, dan performa mesin eSP 110cc yang handal menjadikan Scoopy teman berkendara yang sempurna.",
    "images": [
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-scoopy-std.png"
    ],
    "featureDetails": FEAT_SCOOPY,
  },
  {
    "id": "m-scoopy-smart-key",
    "name": "SCOOPY - SMART KEY",
    "brand": "Honda",
    "type": "Matic",
    "priceCash": 26230000,
    "description": "Honda Scoopy Smart Key menghadirkan kemudahan yang sesungguhnya dengan sistem Smart Key yang memungkinkan menyalakan motor tanpa perlu memasukkan kunci secara fisik, melengkapi pesona retro-modern Scoopy.",
    "images": [
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-scoopy-smartkey.png"
    ],
    "featureDetails": FEAT_SCOOPY_SK,
  },
  {
    "id": "m-vario-125-cbs",
    "name": "VARIO 125 - CBS",
    "brand": "Honda",
    "type": "Matic",
    "priceCash": 26530000,
    "description": "Honda Vario 125 CBS adalah skuter matic yang memadukan performa mesin eSP 125cc dengan kapasitas penyimpanan terbesar di kelasnya. Ideal untuk mereka yang membutuhkan motor matic yang bertenaga, efisien, dan fungsional.",
    "images": [
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-vario125-cbs.png"
    ],
    "featureDetails": FEAT_VARIO125,
  },
  {
    "id": "m-vario-125-iss",
    "name": "VARIO 125 - ISS",
    "brand": "Honda",
    "type": "Matic",
    "priceCash": 28380000,
    "description": "Honda Vario 125 ISS menghadirkan efisiensi bahan bakar yang lebih baik dengan Idling Stop System yang otomatis mematikan mesin saat motor berhenti dan menghidupkannya kembali saat gas diputar.",
    "images": [
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-vario125-iss.png"
    ],
    "featureDetails": FEAT_VARIO125_ISS,
  },
  {
    "id": "m-vario-125-street",
    "name": "VARIO 125 - STREET",
    "brand": "Honda",
    "type": "Matic",
    "priceCash": 28840000,
    "description": "Honda Vario 125 Street hadir dengan karakter urban yang lebih kuat, memadukan performa Vario 125 ISS dengan tampilan warna khusus yang lebih edgy dan berkarakter untuk jiwa muda perkotaan.",
    "images": [
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-vario125-street.png"
    ],
    "featureDetails": FEAT_VARIO125_ISS,
  },
  {
    "id": "m-vario-evo-160-cbs",
    "name": "VARIO EVO 160 - CBS",
    "brand": "Honda",
    "type": "Matic",
    "priceCash": 30240000,
    "description": "Honda Vario EVO 160 CBS adalah evolusi terbaru dari keluarga Vario yang legendaris. Dengan mesin eSP+ 160cc berpendingin cairan dan teknologi HSTC, Vario EVO 160 menghadirkan performa yang signifikan lebih bertenaga.",
    "images": [
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-vario160-cbs.png"
    ],
    "featureDetails": FEAT_VARIO160,
  },
  {
    "id": "m-vario-evo-160-cbs-nitro",
    "name": "VARIO EVO 160 - CBS NITRO",
    "brand": "Honda",
    "type": "Matic",
    "priceCash": 30490000,
    "description": "Honda Vario EVO 160 CBS Nitro hadir dalam warna Nitro Yellow yang berani dan mencolok, menghadirkan karakter yang lebih sporty dan agresif sesuai performanya yang luar biasa.",
    "images": [
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-vario160-cbs-nitro.png"
    ],
    "featureDetails": FEAT_VARIO160,
  },
  {
    "id": "m-vario-evo-160-abs",
    "name": "VARIO EVO 160 - ABS",
    "brand": "Honda",
    "type": "Matic",
    "priceCash": 33360000,
    "description": "Honda Vario EVO 160 ABS adalah puncak kesempurnaan skuter matic Honda dengan tambahan sistem ABS dual-channel yang memberikan keamanan pengereman terbaik di kelasnya.",
    "images": [
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-vario160-abs.png"
    ],
    "featureDetails": FEAT_VARIO160_ABS,
  },
  {
    "id": "m-stylo-cbs",
    "name": "STYLO CBS",
    "brand": "Honda",
    "type": "Matic",
    "priceCash": 31520000,
    "description": "Honda Stylo 160 CBS adalah skuter premium dengan desain neo-retro yang eksklusif, layar TFT full-color, dan teknologi Honda RoadSync untuk konektivitas smartphone yang seamless.",
    "images": [
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-stylo-cbs.png"
    ],
    "featureDetails": FEAT_STYLO,
  },
  {
    "id": "m-stylo-abs",
    "name": "STYLO ABS",
    "brand": "Honda",
    "type": "Matic",
    "priceCash": 34580000,
    "description": "Honda Stylo 160 ABS menghadirkan keamanan berkendara premium dengan sistem ABS yang memastikan pengereman selalu terkontrol, dilengkapi semua fitur eksklusif Stylo 160 yang memukau.",
    "images": [
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-stylo-abs.png"
    ],
    "featureDetails": FEAT_STYLO_ABS,
  },
  {
    "id": "m-stylo-abs-se",
    "name": "STYLO ABS SE",
    "brand": "Honda",
    "type": "Matic",
    "priceCash": 36180000,
    "description": "Honda Stylo 160 ABS Special Edition adalah edisi paling eksklusif dari Stylo dengan warna dan grafis spesial yang terbatas, menjadikannya koleksi premium yang sangat istimewa.",
    "images": [
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-stylo-abs-se.png"
    ],
    "featureDetails": FEAT_STYLO_ABS,
  },
  {
    "id": "m-pcx-160-cbs",
    "name": "PCX 160 - CBS",
    "brand": "Honda",
    "type": "Matic",
    "priceCash": 36590000,
    "description": "Honda PCX 160 CBS adalah skuter premium yang mendefinisikan ulang standar kelas atasnya. Mesin eSP+ 160cc, bagasi 30 liter, Smart Key, dan desain futuristik menjadikan PCX 160 sebagai pilihan premium yang sesungguhnya.",
    "images": [
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-pcx160-cbs.png"
    ],
    "featureDetails": FEAT_PCX160,
  },
  {
    "id": "m-pcx-160-abs",
    "name": "PCX  160 - ABS",
    "brand": "Honda",
    "type": "Matic",
    "priceCash": 40380000,
    "description": "Honda PCX 160 ABS melengkapi keunggulan PCX 160 dengan sistem ABS dual-channel yang memberikan keamanan pengereman kelas atas. Pilihan terbaik untuk pengguna yang mengutamakan keselamatan dan kenyamanan.",
    "images": [
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-pcx160-abs.png"
    ],
    "featureDetails": FEAT_PCX160_ABS,
  },
  {
    "id": "m-pcx-160-abs-roadsync",
    "name": "PCX 160 - ABS Roadsync",
    "brand": "Honda",
    "type": "Matic",
    "priceCash": 43540000,
    "description": "Honda PCX 160 ABS Roadsync adalah puncak kecanggihan skuter premium Honda dengan konektivitas Honda RoadSync untuk navigasi, panggilan, dan hiburan terintegrasi, dilengkapi ABS dual-channel untuk keamanan tertinggi.",
    "images": [
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-pcx160-abs-roadsync.png"
    ],
    "featureDetails": FEAT_PCX160_ROADSYNC,
  },
  {
    "id": "m-adv-160-cbs",
    "name": "ADV 160 CBS",
    "brand": "Honda",
    "type": "Matic",
    "priceCash": 38750000,
    "description": "Honda ADV 160 CBS adalah skuter adventure yang siap menaklukkan berbagai medan. Dengan HSTC, ground clearance tinggi, suspensi bertravel panjang, dan mesin eSP+ 160cc, ADV 160 membawa semangat petualangan sesungguhnya.",
    "images": [
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-adv160-cbs.png"
    ],
    "featureDetails": FEAT_ADV160,
  },
  {
    "id": "m-adv-160-abs",
    "name": "ADV 160 ABS",
    "brand": "Honda",
    "type": "Matic",
    "priceCash": 41590000,
    "description": "Honda ADV 160 ABS menghadirkan keamanan berkendara adventure yang lebih tinggi dengan sistem ABS yang bekerja sinergis dengan HSTC untuk kontrol traksi yang optimal di segala medan.",
    "images": [
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-adv160-abs.png"
    ],
    "featureDetails": FEAT_ADV160_ABS,
  },
  {
    "id": "m-adv-160-roadsync",
    "name": "ADV 160 ROADSYNC",
    "brand": "Honda",
    "type": "Matic",
    "priceCash": 43110000,
    "description": "Honda ADV 160 Roadsync adalah skuter adventure paling canggih dengan Honda RoadSync yang memungkinkan navigasi GPS dan konektivitas smartphone selama petualangan, dilengkapi ABS dan HSTC untuk keselamatan optimal.",
    "images": [
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-adv160-roadsync.png"
    ],
    "featureDetails": FEAT_ADV160_ROADSYNC,
  },
  {
    "id": "m-cbr-250-std-bk",
    "name": "CBR 250 STD - BK",
    "brand": "Honda",
    "type": "Sport",
    "priceCash": 76660000,
    "description": "Honda CBR 250RR adalah supersport 250cc paling bertenaga di kelasnya. Mesin parallel-twin DOHC 250cc, Assist & Slipper Clutch, dan full fairing MotoGP-inspired menghadirkan pengalaman berkendara yang sesungguhnya.",
    "images": [
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-cbr250rr-std-bk.png"
    ],
    "featureDetails": FEAT_CBR250,
  },
  {
    "id": "m-cbr-250-std-mh",
    "name": "CBR 250 STD - MH",
    "brand": "Honda",
    "type": "Sport",
    "priceCash": 81020000,
    "description": "Honda CBR 250RR STD Matte Hypnotic Red hadir dalam warna merah matte yang memukau dan penuh semangat, menghadirkan tampilan racing premium yang semakin memukau di atas performa mesinnya yang garang.",
    "images": [
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-cbr250rr-std-mh.png"
    ],
    "featureDetails": FEAT_CBR250,
  },
  {
    "id": "m-cbr-250-abs-bl",
    "name": "CBR 250 ABS - BL",
    "brand": "Honda",
    "type": "Sport",
    "priceCash": 88430000,
    "description": "Honda CBR 250RR ABS Brilliant Black hadir dengan sistem ABS dual-channel dan warna hitam glossy yang menawan, menghadirkan keamanan berkendara supersport yang lebih komprehensif.",
    "images": [
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-cbr250rr-abs-bl.png"
    ],
    "featureDetails": FEAT_CBR250_ABS,
  },
  {
    "id": "m-cbr-250-sp-qs-ar",
    "name": "CBR 250 SP QS - AR",
    "brand": "Honda",
    "type": "Sport",
    "priceCash": 92480000,
    "description": "Honda CBR 250RR SP Quickshifter Asterisk Red adalah puncak kesempurnaan supersport 250cc dengan Quickshifter, ABS, rangka aluminium, dan warna eksklusif Asterisk Red yang memukau.",
    "images": [
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-cbr250rr-sp-qs-ar.png"
    ],
    "featureDetails": FEAT_CBR250_SP,
  },
  {
    "id": "m-cbr-250-sp-qs-mp-rd",
    "name": "CBR 250 SP QS - MP & RD",
    "brand": "Honda",
    "type": "Sport",
    "priceCash": 93080000,
    "description": "Honda CBR 250RR SP Quickshifter Matte Pearl & Radical Red hadir dalam dua pilihan warna matte premium yang eksklusif, menegaskan posisinya sebagai supersport 250cc terbaik dan paling berteknologi.",
    "images": [
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-cbr250rr-sp-qs-mp-rd.png"
    ],
    "featureDetails": FEAT_CBR250_SP,
  },
];

export interface CreditOption {
  dp: number;
  bayar: number;
  tenors: {
    [months: number]: number;
  };
}

export const creditMatrix: Record<string, CreditOption[]> = {
  "m-revo-fit": [
    {
      "dp": 1950000,
      "bayar": 1450000,
      "tenors": {
        "12": 1955000,
        "24": 1157000,
        "30": 1005000,
        "36": 880000,
        "40": 871000,
        "48": 796000
      }
    },
    {
      "dp": 2000000,
      "bayar": 1500000,
      "tenors": {
        "12": 1950000,
        "24": 1154000,
        "30": 1002000,
        "36": 878000,
        "40": 868000,
        "48": 795000
      }
    },
    {
      "dp": 2100000,
      "bayar": 1600000,
      "tenors": {
        "12": 1940000,
        "24": 1148000,
        "30": 997000,
        "36": 874000,
        "40": 864000,
        "48": 791000
      }
    }
  ],
  "m-revo-x": [
    {
      "dp": 2100000,
      "bayar": 1600000,
      "tenors": {
        "12": 2113000,
        "24": 1251000,
        "30": 1086000,
        "36": 952000,
        "40": 941000,
        "48": 861000
      }
    },
    {
      "dp": 2200000,
      "bayar": 1700000,
      "tenors": {
        "12": 2103000,
        "24": 1245000,
        "30": 1081000,
        "36": 947000,
        "40": 937000,
        "48": 857000
      }
    },
    {
      "dp": 2300000,
      "bayar": 1800000,
      "tenors": {
        "12": 2093000,
        "24": 1239000,
        "30": 1076000,
        "36": 943000,
        "40": 933000,
        "48": 853000
      }
    }
  ],
  "m-supra-x-125-d": [
    {
      "dp": 2300000,
      "bayar": 1700000,
      "tenors": { "12": 2279000, "24": 1349000, "30": 1172000, "36": 1027000, "40": 1016000, "48": 929000 }
    },
    {
      "dp": 2500000,
      "bayar": 1900000,
      "tenors": { "12": 2259000, "24": 1337000, "30": 1162000, "36": 1018000, "40": 1007000, "48": 921000 }
    }
  ],
  "m-supra-x-125-cw": [
    {
      "dp": 2400000,
      "bayar": 1800000,
      "tenors": { "12": 2400000, "24": 1420000, "30": 1234000, "36": 1081000, "40": 1069000, "48": 978000 }
    },
    {
      "dp": 2600000,
      "bayar": 2000000,
      "tenors": { "12": 2379000, "24": 1408000, "30": 1223000, "36": 1072000, "40": 1060000, "48": 970000 }
    }
  ],
  "m-supra-gtr-sporty": [
    {
      "dp": 2900000,
      "bayar": 2200000,
      "tenors": { "12": 2878000, "24": 1703000, "30": 1480000, "36": 1296000, "40": 1281000, "48": 1172000 }
    },
    {
      "dp": 3100000,
      "bayar": 2400000,
      "tenors": { "12": 2858000, "24": 1691000, "30": 1469000, "36": 1287000, "40": 1272000, "48": 1164000 }
    }
  ],
  "m-supra-gtr-exc": [
    {
      "dp": 2900000,
      "bayar": 2200000,
      "tenors": { "12": 2901000, "24": 1717000, "30": 1492000, "36": 1307000, "40": 1292000, "48": 1182000 }
    }
  ],
  "m-sonic": [
    {
      "dp": 3000000,
      "bayar": 2300000,
      "tenors": { "12": 3019000, "24": 1787000, "30": 1553000, "36": 1360000, "40": 1344000, "48": 1230000 }
    },
    {
      "dp": 3200000,
      "bayar": 2500000,
      "tenors": { "12": 2999000, "24": 1775000, "30": 1543000, "36": 1351000, "40": 1335000, "48": 1222000 }
    }
  ],
  "m-sonic-special-edition": [
    {
      "dp": 3100000,
      "bayar": 2400000,
      "tenors": { "12": 3063000, "24": 1813000, "30": 1575000, "36": 1380000, "40": 1364000, "48": 1248000 }
    }
  ],
  "m-cb-verza-d": [
    {
      "dp": 2700000,
      "bayar": 2000000,
      "tenors": { "12": 2614000, "24": 1547000, "30": 1344000, "36": 1177000, "40": 1163000, "48": 1064000 }
    },
    {
      "dp": 2900000,
      "bayar": 2200000,
      "tenors": { "12": 2594000, "24": 1535000, "30": 1333000, "36": 1168000, "40": 1154000, "48": 1056000 }
    }
  ],
  "m-cb-verza-cw": [
    {
      "dp": 2800000,
      "bayar": 2100000,
      "tenors": { "12": 2682000, "24": 1587000, "30": 1379000, "36": 1208000, "40": 1194000, "48": 1092000 }
    },
    {
      "dp": 3000000,
      "bayar": 2300000,
      "tenors": { "12": 2662000, "24": 1575000, "30": 1369000, "36": 1199000, "40": 1185000, "48": 1084000 }
    }
  ],
  "m-cb-150-r": [
    {
      "dp": 3700000,
      "bayar": 2800000,
      "tenors": { "12": 3606000, "24": 2134000, "30": 1855000, "36": 1624000, "40": 1606000, "48": 1470000 }
    },
    {
      "dp": 3900000,
      "bayar": 3000000,
      "tenors": { "12": 3585000, "24": 2122000, "30": 1844000, "36": 1615000, "40": 1597000, "48": 1462000 }
    }
  ],
  "m-cb-150-r-se": [
    {
      "dp": 3800000,
      "bayar": 2900000,
      "tenors": { "12": 3708000, "24": 2195000, "30": 1908000, "36": 1671000, "40": 1652000, "48": 1511000 }
    }
  ],
  "m-cbr-150-hs": [
    {
      "dp": 4100000,
      "bayar": 3100000,
      "tenors": { "12": 4086000, "24": 2419000, "30": 2103000, "36": 1841000, "40": 1820000, "48": 1665000 }
    },
    {
      "dp": 4300000,
      "bayar": 3300000,
      "tenors": { "12": 4066000, "24": 2407000, "30": 2092000, "36": 1832000, "40": 1811000, "48": 1657000 }
    }
  ],
  "m-cbr-150-mp": [
    {
      "dp": 4200000,
      "bayar": 3200000,
      "tenors": { "12": 4157000, "24": 2460000, "30": 2139000, "36": 1873000, "40": 1851000, "48": 1693000 }
    }
  ],
  "m-cbr-150-abs-jna": [
    {
      "dp": 4600000,
      "bayar": 3500000,
      "tenors": { "12": 4520000, "24": 2675000, "30": 2326000, "36": 2037000, "40": 2014000, "48": 1842000 }
    },
    {
      "dp": 4800000,
      "bayar": 3700000,
      "tenors": { "12": 4499000, "24": 2663000, "30": 2315000, "36": 2028000, "40": 2005000, "48": 1834000 }
    }
  ],
  "m-cbr-150-abs-jns-ke0": [
    {
      "dp": 4700000,
      "bayar": 3600000,
      "tenors": { "12": 4592000, "24": 2718000, "30": 2363000, "36": 2069000, "40": 2046000, "48": 1871000 }
    }
  ],
  "m-cbr-150-abs-jnu-kea": [
    {
      "dp": 4600000,
      "bayar": 3500000,
      "tenors": { "12": 4520000, "24": 2675000, "30": 2326000, "36": 2037000, "40": 2014000, "48": 1842000 }
    }
  ],
  "m-crf-150": [
    {
      "dp": 4100000,
      "bayar": 3100000,
      "tenors": { "12": 4066000, "24": 2407000, "30": 2092000, "36": 1832000, "40": 1811000, "48": 1657000 }
    },
    {
      "dp": 4300000,
      "bayar": 3300000,
      "tenors": { "12": 4046000, "24": 2394000, "30": 2082000, "36": 1823000, "40": 1802000, "48": 1649000 }
    }
  ],
  "m-cb-150-x": [
    {
      "dp": 3700000,
      "bayar": 2800000,
      "tenors": { "12": 3636000, "24": 2152000, "30": 1871000, "36": 1638000, "40": 1620000, "48": 1483000 }
    },
    {
      "dp": 3900000,
      "bayar": 3000000,
      "tenors": { "12": 3616000, "24": 2140000, "30": 1860000, "36": 1629000, "40": 1611000, "48": 1475000 }
    }
  ],
  "m-cb-150-x-se": [
    {
      "dp": 3800000,
      "bayar": 2900000,
      "tenors": { "12": 3686000, "24": 2182000, "30": 1897000, "36": 1661000, "40": 1643000, "48": 1504000 }
    }
  ],
  "m-crf-250": [
    {
      "dp": 10500000,
      "bayar": 8000000,
      "tenors": { "12": 10266000, "24": 6076000, "30": 5282000, "36": 4626000, "40": 4572000, "48": 4181000 }
    },
    {
      "dp": 11000000,
      "bayar": 8500000,
      "tenors": { "12": 10216000, "24": 6046000, "30": 5257000, "36": 4604000, "40": 4550000, "48": 4162000 }
    }
  ],
  "m-monkey": [
    {
      "dp": 9300000,
      "bayar": 7000000,
      "tenors": { "12": 9069000, "24": 5368000, "30": 4668000, "36": 4087000, "40": 4040000, "48": 3694000 }
    },
    {
      "dp": 9500000,
      "bayar": 7200000,
      "tenors": { "12": 9048000, "24": 5356000, "30": 4657000, "36": 4078000, "40": 4031000, "48": 3686000 }
    }
  ],
  "m-ct-125": [
    {
      "dp": 8700000,
      "bayar": 6600000,
      "tenors": { "12": 8519000, "24": 5042000, "30": 4385000, "36": 3838000, "40": 3795000, "48": 3471000 }
    },
    {
      "dp": 8900000,
      "bayar": 6800000,
      "tenors": { "12": 8499000, "24": 5030000, "30": 4374000, "36": 3829000, "40": 3786000, "48": 3463000 }
    }
  ],
  "m-em1-e-charger": [
    {
      "dp": 4800000,
      "bayar": 3600000,
      "tenors": { "12": 4672000, "24": 2765000, "30": 2405000, "36": 2106000, "40": 2082000, "48": 1904000 }
    },
    {
      "dp": 5000000,
      "bayar": 3800000,
      "tenors": { "12": 4651000, "24": 2753000, "30": 2394000, "36": 2097000, "40": 2073000, "48": 1896000 }
    }
  ],
  "m-em1-e-plus-charger": [
    {
      "dp": 4900000,
      "bayar": 3700000,
      "tenors": { "12": 4722000, "24": 2795000, "30": 2431000, "36": 2128000, "40": 2104000, "48": 1924000 }
    }
  ],
  "m-icon-e": [
    {
      "dp": 2900000,
      "bayar": 2200000,
      "tenors": { "12": 2852000, "24": 1688000, "30": 1468000, "36": 1285000, "40": 1270000, "48": 1162000 }
    },
    {
      "dp": 3100000,
      "bayar": 2400000,
      "tenors": { "12": 2831000, "24": 1676000, "30": 1457000, "36": 1276000, "40": 1261000, "48": 1154000 }
    }
  ],
  "m-cuv-e": [
    {
      "dp": 5700000,
      "bayar": 4300000,
      "tenors": { "12": 5546000, "24": 3282000, "30": 2854000, "36": 2499000, "40": 2470000, "48": 2260000 }
    },
    {
      "dp": 5900000,
      "bayar": 4500000,
      "tenors": { "12": 5525000, "24": 3269000, "30": 2843000, "36": 2490000, "40": 2461000, "48": 2252000 }
    }
  ],
  "m-cuv-e-roadsync": [
    {
      "dp": 6200000,
      "bayar": 4700000,
      "tenors": { "12": 6069000, "24": 3592000, "30": 3124000, "36": 2736000, "40": 2704000, "48": 2473000 }
    },
    {
      "dp": 6400000,
      "bayar": 4900000,
      "tenors": { "12": 6048000, "24": 3580000, "30": 3113000, "36": 2727000, "40": 2695000, "48": 2465000 }
    }
  ],
  "m-beat-sporty-cbs": [
    {
      "dp": 2200000,
      "bayar": 1700000,
      "tenors": { "12": 2154000, "24": 1275000, "30": 1108000, "36": 970000, "40": 959000, "48": 878000 }
    },
    {
      "dp": 2400000,
      "bayar": 1900000,
      "tenors": { "12": 2134000, "24": 1263000, "30": 1097000, "36": 961000, "40": 950000, "48": 870000 }
    },
    {
      "dp": 2600000,
      "bayar": 2000000,
      "tenors": { "12": 2113000, "24": 1251000, "30": 1086000, "36": 952000, "40": 941000, "48": 861000 }
    }
  ],
  "m-beat-sporty-iss-deluxe": [
    {
      "dp": 2300000,
      "bayar": 1800000,
      "tenors": { "12": 2234000, "24": 1323000, "30": 1150000, "36": 1007000, "40": 996000, "48": 911000 }
    },
    {
      "dp": 2500000,
      "bayar": 2000000,
      "tenors": { "12": 2214000, "24": 1311000, "30": 1139000, "36": 998000, "40": 987000, "48": 903000 }
    }
  ],
  "m-beat-iss-dx-smartkey": [
    {
      "dp": 2400000,
      "bayar": 1800000,
      "tenors": { "12": 2294000, "24": 1358000, "30": 1181000, "36": 1034000, "40": 1022000, "48": 935000 }
    },
    {
      "dp": 2600000,
      "bayar": 2000000,
      "tenors": { "12": 2274000, "24": 1346000, "30": 1170000, "36": 1025000, "40": 1013000, "48": 927000 }
    }
  ],
  "m-new-beat-street": [
    {
      "dp": 2300000,
      "bayar": 1700000,
      "tenors": { "12": 2240000, "24": 1326000, "30": 1152000, "36": 1009000, "40": 998000, "48": 913000 }
    },
    {
      "dp": 2500000,
      "bayar": 1900000,
      "tenors": { "12": 2220000, "24": 1314000, "30": 1142000, "36": 1000000, "40": 989000, "48": 905000 }
    }
  ],
  "m-genio-cbs": [
    {
      "dp": 2300000,
      "bayar": 1800000,
      "tenors": { "12": 2244000, "24": 1328000, "30": 1155000, "36": 1011000, "40": 1000000, "48": 915000 }
    },
    {
      "dp": 2500000,
      "bayar": 2000000,
      "tenors": { "12": 2224000, "24": 1316000, "30": 1144000, "36": 1002000, "40": 991000, "48": 907000 }
    }
  ],
  "m-genio-cbs-spc-color": [
    {
      "dp": 2400000,
      "bayar": 1800000,
      "tenors": { "12": 2271000, "24": 1344000, "30": 1169000, "36": 1024000, "40": 1012000, "48": 926000 }
    }
  ],
  "m-genio-cbs-iss": [
    {
      "dp": 2400000,
      "bayar": 1900000,
      "tenors": { "12": 2302000, "24": 1362000, "30": 1184000, "36": 1037000, "40": 1026000, "48": 938000 }
    },
    {
      "dp": 2600000,
      "bayar": 2100000,
      "tenors": { "12": 2282000, "24": 1350000, "30": 1174000, "36": 1028000, "40": 1017000, "48": 930000 }
    }
  ],
  "m-scoopy-std": [
    {
      "dp": 2600000,
      "bayar": 2000000,
      "tenors": { "12": 2568000, "24": 1520000, "30": 1322000, "36": 1158000, "40": 1145000, "48": 1048000 }
    },
    {
      "dp": 2800000,
      "bayar": 2200000,
      "tenors": { "12": 2548000, "24": 1508000, "30": 1311000, "36": 1149000, "40": 1136000, "48": 1040000 }
    }
  ],
  "m-scoopy-smart-key": [
    {
      "dp": 2700000,
      "bayar": 2100000,
      "tenors": { "12": 2658000, "24": 1573000, "30": 1368000, "36": 1198000, "40": 1184000, "48": 1083000 }
    },
    {
      "dp": 2900000,
      "bayar": 2300000,
      "tenors": { "12": 2637000, "24": 1561000, "30": 1358000, "36": 1189000, "40": 1175000, "48": 1075000 }
    }
  ],
  "m-vario-125-cbs": [
    {
      "dp": 2800000,
      "bayar": 2100000,
      "tenors": { "12": 2688000, "24": 1591000, "30": 1382000, "36": 1211000, "40": 1197000, "48": 1095000 }
    },
    {
      "dp": 3000000,
      "bayar": 2300000,
      "tenors": { "12": 2668000, "24": 1579000, "30": 1372000, "36": 1202000, "40": 1188000, "48": 1087000 }
    }
  ],
  "m-vario-125-iss": [
    {
      "dp": 2900000,
      "bayar": 2200000,
      "tenors": { "12": 2873000, "24": 1701000, "30": 1479000, "36": 1295000, "40": 1280000, "48": 1171000 }
    },
    {
      "dp": 3100000,
      "bayar": 2400000,
      "tenors": { "12": 2852000, "24": 1689000, "30": 1468000, "36": 1286000, "40": 1271000, "48": 1163000 }
    }
  ],
  "m-vario-125-street": [
    {
      "dp": 3000000,
      "bayar": 2300000,
      "tenors": { "12": 2925000, "24": 1731000, "30": 1505000, "36": 1318000, "40": 1303000, "48": 1192000 }
    }
  ],
  "m-vario-evo-160-cbs": [
    {
      "dp": 3100000,
      "bayar": 2400000,
      "tenors": { "12": 3067000, "24": 1815000, "30": 1578000, "36": 1382000, "40": 1366000, "48": 1250000 }
    },
    {
      "dp": 3300000,
      "bayar": 2600000,
      "tenors": { "12": 3047000, "24": 1803000, "30": 1567000, "36": 1373000, "40": 1357000, "48": 1242000 }
    }
  ],
  "m-vario-evo-160-cbs-nitro": [
    {
      "dp": 3200000,
      "bayar": 2500000,
      "tenors": { "12": 3092000, "24": 1830000, "30": 1591000, "36": 1393000, "40": 1377000, "48": 1260000 }
    }
  ],
  "m-vario-evo-160-abs": [
    {
      "dp": 3500000,
      "bayar": 2700000,
      "tenors": { "12": 3383000, "24": 2002000, "30": 1741000, "36": 1525000, "40": 1507000, "48": 1379000 }
    },
    {
      "dp": 3700000,
      "bayar": 2900000,
      "tenors": { "12": 3362000, "24": 1990000, "30": 1730000, "36": 1516000, "40": 1498000, "48": 1371000 }
    }
  ],
  "m-stylo-cbs": [
    {
      "dp": 3300000,
      "bayar": 2500000,
      "tenors": { "12": 3197000, "24": 1892000, "30": 1644000, "36": 1440000, "40": 1423000, "48": 1302000 }
    },
    {
      "dp": 3500000,
      "bayar": 2700000,
      "tenors": { "12": 3176000, "24": 1880000, "30": 1634000, "36": 1431000, "40": 1414000, "48": 1294000 }
    }
  ],
  "m-stylo-abs": [
    {
      "dp": 3600000,
      "bayar": 2800000,
      "tenors": { "12": 3507000, "24": 2075000, "30": 1804000, "36": 1580000, "40": 1562000, "48": 1429000 }
    },
    {
      "dp": 3800000,
      "bayar": 3000000,
      "tenors": { "12": 3487000, "24": 2063000, "30": 1793000, "36": 1571000, "40": 1553000, "48": 1421000 }
    }
  ],
  "m-stylo-abs-se": [
    {
      "dp": 3800000,
      "bayar": 2900000,
      "tenors": { "12": 3669000, "24": 2172000, "30": 1888000, "36": 1654000, "40": 1635000, "48": 1496000 }
    }
  ],
  "m-pcx-160-cbs": [
    {
      "dp": 3800000,
      "bayar": 2900000,
      "tenors": { "12": 3709000, "24": 2196000, "30": 1909000, "36": 1672000, "40": 1653000, "48": 1512000 }
    },
    {
      "dp": 4000000,
      "bayar": 3100000,
      "tenors": { "12": 3688000, "24": 2184000, "30": 1898000, "36": 1663000, "40": 1644000, "48": 1504000 }
    }
  ],
  "m-pcx-160-abs": [
    {
      "dp": 4200000,
      "bayar": 3200000,
      "tenors": { "12": 4091000, "24": 2421000, "30": 2106000, "36": 1844000, "40": 1823000, "48": 1667000 }
    },
    {
      "dp": 4400000,
      "bayar": 3400000,
      "tenors": { "12": 4071000, "24": 2409000, "30": 2095000, "36": 1835000, "40": 1814000, "48": 1659000 }
    }
  ],
  "m-pcx-160-abs-roadsync": [
    {
      "dp": 4500000,
      "bayar": 3500000,
      "tenors": { "12": 4413000, "24": 2612000, "30": 2271000, "36": 1989000, "40": 1966000, "48": 1798000 }
    },
    {
      "dp": 4700000,
      "bayar": 3700000,
      "tenors": { "12": 4392000, "24": 2599000, "30": 2260000, "36": 1980000, "40": 1957000, "48": 1790000 }
    }
  ],
  "m-adv-160-cbs": [
    {
      "dp": 4000000,
      "bayar": 3100000,
      "tenors": { "12": 3924000, "24": 2323000, "30": 2020000, "36": 1769000, "40": 1749000, "48": 1600000 }
    },
    {
      "dp": 4200000,
      "bayar": 3300000,
      "tenors": { "12": 3904000, "24": 2311000, "30": 2009000, "36": 1760000, "40": 1740000, "48": 1592000 }
    }
  ],
  "m-adv-160-abs": [
    {
      "dp": 4300000,
      "bayar": 3300000,
      "tenors": { "12": 4219000, "24": 2496000, "30": 2171000, "36": 1901000, "40": 1879000, "48": 1719000 }
    },
    {
      "dp": 4500000,
      "bayar": 3500000,
      "tenors": { "12": 4199000, "24": 2484000, "30": 2160000, "36": 1892000, "40": 1870000, "48": 1711000 }
    }
  ],
  "m-adv-160-roadsync": [
    {
      "dp": 4500000,
      "bayar": 3500000,
      "tenors": { "12": 4363000, "24": 2582000, "30": 2246000, "36": 1967000, "40": 1944000, "48": 1777000 }
    },
    {
      "dp": 4700000,
      "bayar": 3700000,
      "tenors": { "12": 4342000, "24": 2570000, "30": 2235000, "36": 1958000, "40": 1935000, "48": 1769000 }
    }
  ],
  "m-cbr-250-std-bk": [
    {
      "dp": 8000000,
      "bayar": 6100000,
      "tenors": { "12": 7771000, "24": 4599000, "30": 3999000, "36": 3503000, "40": 3463000, "48": 3167000 }
    },
    {
      "dp": 8200000,
      "bayar": 6300000,
      "tenors": { "12": 7750000, "24": 4587000, "30": 3989000, "36": 3494000, "40": 3454000, "48": 3159000 }
    }
  ],
  "m-cbr-250-std-mh": [
    {
      "dp": 8400000,
      "bayar": 6500000,
      "tenors": { "12": 8216000, "24": 4864000, "30": 4231000, "36": 3706000, "40": 3663000, "48": 3350000 }
    },
    {
      "dp": 8600000,
      "bayar": 6700000,
      "tenors": { "12": 8195000, "24": 4852000, "30": 4220000, "36": 3697000, "40": 3654000, "48": 3342000 }
    }
  ],
  "m-cbr-250-abs-bl": [
    {
      "dp": 9200000,
      "bayar": 7100000,
      "tenors": { "12": 8963000, "24": 5304000, "30": 4613000, "36": 4041000, "40": 3995000, "48": 3655000 }
    },
    {
      "dp": 9400000,
      "bayar": 7300000,
      "tenors": { "12": 8942000, "24": 5292000, "30": 4603000, "36": 4032000, "40": 3986000, "48": 3647000 }
    }
  ],
  "m-cbr-250-sp-qs-ar": [
    {
      "dp": 9600000,
      "bayar": 7400000,
      "tenors": { "12": 9364000, "24": 5542000, "30": 4821000, "36": 4223000, "40": 4175000, "48": 3819000 }
    },
    {
      "dp": 9800000,
      "bayar": 7600000,
      "tenors": { "12": 9344000, "24": 5530000, "30": 4810000, "36": 4214000, "40": 4166000, "48": 3811000 }
    }
  ],
  "m-cbr-250-sp-qs-mp-rd": [
    {
      "dp": 9700000,
      "bayar": 7500000,
      "tenors": { "12": 9425000, "24": 5578000, "30": 4852000, "36": 4250000, "40": 4202000, "48": 3844000 }
    },
    {
      "dp": 9900000,
      "bayar": 7700000,
      "tenors": { "12": 9404000, "24": 5566000, "30": 4842000, "36": 4241000, "40": 4193000, "48": 3836000 }
    }
  ],
};
