
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

// ─── Helper: generate ImageKit thumbnail URL from motor name ──────────────────

export const KNOWN_IMAGES: Record<string, string> = {
  "revo-x": "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-product-2-24012022-110536.png",
  "revo-fit": "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-product-2-24012022-110536.png",
  "supra-x-125-d": "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thumbnail-new-supra-x-5-04032022-102907.png",
  "supra-x-125-cw": "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thumbnail-new-supra-x-5-04032022-102907.png",
  "supra-gtr-sporty": "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/supra-gtr-150-4-27052021-092133.png",
  "supra-gtr-exc": "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/supra-gtr-150-4-27052021-092133.png",
  "beat-cbs": "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/new-thumbnail-beat-1-26062026-055630.png",
  "beat-cbs-iss": "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/new-thumbnail-beat-1-26062026-055630.png",
  "beat-deluxe": "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/new-thumbnail-beat-1-26062026-055630.png",
  "beat-street": "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/new-thumbnail-beat-street-1-26062026-055644.png",
  "genio-cbs": "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thumbnail-genio-new-3-29102025-075221.png",
  "genio-cbs-iss": "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thumbnail-genio-new-3-29102025-075221.png",
  "scoopy-fashion": "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/product-thumbnail-400x300-copy-1-13112025-030828.png",
  "scoopy-sporty": "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/product-thumbnail-400x300-copy-1-13112025-030828.png",
  "scoopy-prestige": "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/product-thumbnail-400x300-copy-1-13112025-030828.png",
  "scoopy-stylish": "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/product-thumbnail-400x300-copy-1-13112025-030828.png",
  "vario-125-cbs": "https://ik.imagekit.io/zlt25mb52fx/uploads/product-draft/meta/sideview-advance-blue-400x300pxl-copy-07042026-080156.png",
  "vario-125-cbs-iss": "https://ik.imagekit.io/zlt25mb52fx/uploads/product-draft/meta/sideview-advance-blue-400x300pxl-copy-07042026-080156.png",
  "vario-125-cbs-iss-spc": "https://ik.imagekit.io/zlt25mb52fx/uploads/product-draft/meta/sideview-advance-blue-400x300pxl-copy-07042026-080156.png",
  "vario-160-cbs": "https://ik.imagekit.io/zlt25mb52fx/uploads/product-draft/meta/product-thumbnail-400x300px-6-24062026-031459.png",
  "vario-160-abs": "https://ik.imagekit.io/zlt25mb52fx/uploads/product-draft/meta/product-thumbnail-400x300px-6-24062026-031459.png",
  "pcx-cbs": "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/product-thumbnail-400x300-4-11022026-041017.png",
  "pcx-abs": "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/product-thumbnail-400x300-4-11022026-041017.png",
  "pcx-e-hev": "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/product-thumbnail-400x300-4-11022026-041017.png",
  "adv-150-cbs": "https://ik.imagekit.io/zlt25mb52fx/uploads/product-draft/meta/product-thumbnail-400x300px-08092025-030701.png",
  "adv-150-abs": "https://ik.imagekit.io/zlt25mb52fx/uploads/product-draft/meta/product-thumbnail-400x300px-08092025-030701.png",
  "em1-e": "https://ik.imagekit.io/zlt25mb52fx/uploads/product-draft/meta/em1-silver-samping-400x300-tr-1-21122023-045042.png",
  "icon-e": "https://ik.imagekit.io/zlt25mb52fx/uploads/product-draft/meta/ahm-light-sideview-blue-4-08102024-032201-1-09102024-051128.png",
  "cuv-e": "https://ik.imagekit.io/zlt25mb52fx/uploads/product-draft/meta/a01-p01-2025-cuve-mat-pearl-crater-white-rh-side-std-1-08102024-044120-1-09102024-053640.png",
  "crf-250-rally": "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/crf-250-web-banner-product-thumbnail-400x300px-16062025-032317.png",
  "monkey": "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/product-thumbnail-408-03072026-061409.png",
  "cb-150-x": "https://ik.imagekit.io/zlt25mb52fx/uploads/product-draft/meta/thumbnail-product-cb150x-2-12112021-075912.png",
  "stylo": "https://ik.imagekit.io/zlt25mb52fx/uploads/product-draft/meta/stylo-red-400x300pxl-1-02042026-044510.png"
};

/**
 * Generates a thumbnail URL using the Astra Honda ImageKit CDN pattern.
 */
export function getDefaultImageUrl(motorName: string): string {
  const slug = motorName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  
  if (KNOWN_IMAGES[slug]) return KNOWN_IMAGES[slug];

  if (slug.includes('stylo')) return "https://ik.imagekit.io/zlt25mb52fx/uploads/product-draft/meta/stylo-red-400x300pxl-1-02042026-044510.png";
  if (slug.includes('crf-250') || slug.includes('crf250')) return KNOWN_IMAGES["crf-250-rally"];
  if (slug.includes('cb-150-x') || slug.includes('cb150x')) return "https://ik.imagekit.io/zlt25mb52fx/uploads/product-draft/meta/thumbnail-product-cb150x-2-12112021-075912.png";
  if (slug.includes('gtr')) return KNOWN_IMAGES["supra-gtr-sporty"];
  if (slug.includes('supra')) return KNOWN_IMAGES["supra-x-125-d"];
  if (slug.includes('revo')) return KNOWN_IMAGES["revo-x"];
  if (slug.includes('pcx')) return KNOWN_IMAGES["pcx-cbs"];
  if (slug.includes('adv')) return KNOWN_IMAGES["adv-150-cbs"];
  if (slug.includes('vario-160') || slug.includes('vario-evo') || slug.includes('vario160')) return KNOWN_IMAGES["vario-160-cbs"];
  if (slug.includes('vario')) return KNOWN_IMAGES["vario-125-cbs"];
  if (slug.includes('scoopy')) return KNOWN_IMAGES["scoopy-sporty"];
  if (slug.includes('genio')) return KNOWN_IMAGES["genio-cbs"];
  if (slug.includes('beat-street')) return KNOWN_IMAGES["beat-street"];
  if (slug.includes('beat')) return KNOWN_IMAGES["beat-cbs"];
  if (slug.includes('monkey')) return KNOWN_IMAGES["monkey"];
  if (slug.includes('em1')) return "https://ik.imagekit.io/zlt25mb52fx/uploads/product-draft/meta/em1-silver-samping-400x300-tr-1-21122023-045042.png";
  if (slug.includes('icon')) return "https://ik.imagekit.io/zlt25mb52fx/uploads/product-draft/meta/ahm-light-sideview-blue-4-08102024-032201-1-09102024-051128.png";
  if (slug.includes('cuv')) return "https://ik.imagekit.io/zlt25mb52fx/uploads/product-draft/meta/a01-p01-2025-cuve-mat-pearl-crater-white-rh-side-std-1-08102024-044120-1-09102024-053640.png";

  return "https://ik.imagekit.io/zlt25mb52fx/uploads/page/meta/logo-ahm-3-21072023-032305.png";
}

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
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-product-2-24012022-110536.png"
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
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thumbnail-new-supra-x-5-04032022-102907.png"
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
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thumbnail-new-supra-x-5-04032022-102907.png"
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
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/supra-gtr-150-4-27052021-092133.png"
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
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/supra-gtr-150-4-27052021-092133.png"
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
      "https://ik.imagekit.io/zlt25mb52fx/uploads/page/meta/logo-ahm-3-21072023-032305.png"
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
      "https://ik.imagekit.io/zlt25mb52fx/uploads/page/meta/logo-ahm-3-21072023-032305.png"
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
      "https://ik.imagekit.io/zlt25mb52fx/uploads/page/meta/logo-ahm-3-21072023-032305.png"
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
      "https://ik.imagekit.io/zlt25mb52fx/uploads/page/meta/logo-ahm-3-21072023-032305.png"
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
      "https://ik.imagekit.io/zlt25mb52fx/uploads/page/meta/logo-ahm-3-21072023-032305.png"
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
      "https://ik.imagekit.io/zlt25mb52fx/uploads/page/meta/logo-ahm-3-21072023-032305.png"
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
      "https://ik.imagekit.io/zlt25mb52fx/uploads/page/meta/logo-ahm-3-21072023-032305.png"
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
      "https://ik.imagekit.io/zlt25mb52fx/uploads/page/meta/logo-ahm-3-21072023-032305.png"
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
      "https://ik.imagekit.io/zlt25mb52fx/uploads/page/meta/logo-ahm-3-21072023-032305.png"
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
      "https://ik.imagekit.io/zlt25mb52fx/uploads/page/meta/logo-ahm-3-21072023-032305.png"
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
      "https://ik.imagekit.io/zlt25mb52fx/uploads/page/meta/logo-ahm-3-21072023-032305.png"
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
      "https://ik.imagekit.io/zlt25mb52fx/uploads/page/meta/logo-ahm-3-21072023-032305.png"
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
      "https://ik.imagekit.io/zlt25mb52fx/uploads/product-draft/meta/thumbnail-product-cb150x-2-12112021-075912.png"
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
      "https://ik.imagekit.io/zlt25mb52fx/uploads/product-draft/meta/thumbnail-product-cb150x-2-12112021-075912.png"
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
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/crf-250-web-banner-product-thumbnail-400x300px-16062025-032317.png"
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
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/product-thumbnail-408-03072026-061409.png"
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
      "https://ik.imagekit.io/zlt25mb52fx/uploads/page/meta/logo-ahm-3-21072023-032305.png"
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
      "https://ik.imagekit.io/zlt25mb52fx/uploads/product-draft/meta/em1-silver-samping-400x300-tr-1-21122023-045042.png"
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
      "https://ik.imagekit.io/zlt25mb52fx/uploads/product-draft/meta/em1-silver-samping-400x300-tr-1-21122023-045042.png"
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
      "https://ik.imagekit.io/zlt25mb52fx/uploads/product-draft/meta/ahm-light-sideview-blue-4-08102024-032201-1-09102024-051128.png"
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
      "https://ik.imagekit.io/zlt25mb52fx/uploads/product-draft/meta/a01-p01-2025-cuve-mat-pearl-crater-white-rh-side-std-1-08102024-044120-1-09102024-053640.png"
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
      "https://ik.imagekit.io/zlt25mb52fx/uploads/product-draft/meta/a01-p01-2025-cuve-mat-pearl-crater-white-rh-side-std-1-08102024-044120-1-09102024-053640.png"
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
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/new-thumbnail-beat-1-26062026-055630.png"
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
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/new-thumbnail-beat-1-26062026-055630.png"
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
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/new-thumbnail-beat-1-26062026-055630.png"
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
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/new-thumbnail-beat-street-1-26062026-055644.png"
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
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thumbnail-genio-new-3-29102025-075221.png"
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
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thumbnail-genio-new-3-29102025-075221.png"
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
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thumbnail-genio-new-3-29102025-075221.png"
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
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/product-thumbnail-400x300-copy-1-13112025-030828.png"
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
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/product-thumbnail-400x300-copy-1-13112025-030828.png"
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
      "https://ik.imagekit.io/zlt25mb52fx/uploads/product-draft/meta/sideview-advance-blue-400x300pxl-copy-07042026-080156.png"
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
      "https://ik.imagekit.io/zlt25mb52fx/uploads/product-draft/meta/sideview-advance-blue-400x300pxl-copy-07042026-080156.png"
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
      "https://ik.imagekit.io/zlt25mb52fx/uploads/product-draft/meta/sideview-advance-blue-400x300pxl-copy-07042026-080156.png"
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
      "https://ik.imagekit.io/zlt25mb52fx/uploads/product-draft/meta/product-thumbnail-400x300px-6-24062026-031459.png"
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
      "https://ik.imagekit.io/zlt25mb52fx/uploads/product-draft/meta/product-thumbnail-400x300px-6-24062026-031459.png"
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
      "https://ik.imagekit.io/zlt25mb52fx/uploads/product-draft/meta/product-thumbnail-400x300px-6-24062026-031459.png"
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
      "https://ik.imagekit.io/zlt25mb52fx/uploads/product-draft/meta/stylo-red-400x300pxl-1-02042026-044510.png"
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
      "https://ik.imagekit.io/zlt25mb52fx/uploads/product-draft/meta/stylo-red-400x300pxl-1-02042026-044510.png"
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
      "https://ik.imagekit.io/zlt25mb52fx/uploads/product-draft/meta/stylo-red-400x300pxl-1-02042026-044510.png"
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
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/product-thumbnail-400x300-4-11022026-041017.png"
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
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/product-thumbnail-400x300-4-11022026-041017.png"
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
      "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/product-thumbnail-400x300-4-11022026-041017.png"
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
      "https://ik.imagekit.io/zlt25mb52fx/uploads/product-draft/meta/product-thumbnail-400x300px-08092025-030701.png"
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
      "https://ik.imagekit.io/zlt25mb52fx/uploads/product-draft/meta/product-thumbnail-400x300px-08092025-030701.png"
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
      "https://ik.imagekit.io/zlt25mb52fx/uploads/product-draft/meta/product-thumbnail-400x300px-08092025-030701.png"
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
      "https://ik.imagekit.io/zlt25mb52fx/uploads/page/meta/logo-ahm-3-21072023-032305.png"
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
      "https://ik.imagekit.io/zlt25mb52fx/uploads/page/meta/logo-ahm-3-21072023-032305.png"
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
      "https://ik.imagekit.io/zlt25mb52fx/uploads/page/meta/logo-ahm-3-21072023-032305.png"
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
      "https://ik.imagekit.io/zlt25mb52fx/uploads/page/meta/logo-ahm-3-21072023-032305.png"
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
      "https://ik.imagekit.io/zlt25mb52fx/uploads/page/meta/logo-ahm-3-21072023-032305.png"
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
      "bayar": 1800000,
      "tenors": {
        "12": 2255000,
        "24": 1335000,
        "30": 1159000,
        "36": 1016000,
        "40": 1005000,
        "48": 919000
      }
    },
    {
      "dp": 2400000,
      "bayar": 1900000,
      "tenors": {
        "12": 2245000,
        "24": 1329000,
        "30": 1154000,
        "36": 1012000,
        "40": 1000000,
        "48": 915000
      }
    },
    {
      "dp": 2500000,
      "bayar": 2000000,
      "tenors": {
        "12": 2235000,
        "24": 1323000,
        "30": 1149000,
        "36": 1007000,
        "40": 996000,
        "48": 911000
      }
    }
  ],
  "m-supra-x-125-cw": [
    {
      "dp": 2400000,
      "bayar": 1900000,
      "tenors": {
        "12": 2368000,
        "24": 1402000,
        "30": 1217000,
        "36": 1067000,
        "40": 1055000,
        "48": 965000
      }
    },
    {
      "dp": 2500000,
      "bayar": 2000000,
      "tenors": {
        "12": 2358000,
        "24": 1396000,
        "30": 1212000,
        "36": 1062000,
        "40": 1051000,
        "48": 961000
      }
    },
    {
      "dp": 2600000,
      "bayar": 2100000,
      "tenors": {
        "12": 2348000,
        "24": 1390000,
        "30": 1207000,
        "36": 1058000,
        "40": 1046000,
        "48": 957000
      }
    }
  ],
  "m-supra-gtr-sporty": [
    {
      "dp": 2850000,
      "bayar": 1350000,
      "tenors": {
        "12": 2799000,
        "24": 1658000,
        "30": 1440000,
        "36": 1262000,
        "40": 1248000,
        "48": 1142000
      }
    },
    {
      "dp": 2900000,
      "bayar": 1400000,
      "tenors": {
        "12": 2794000,
        "24": 1655000,
        "30": 1437000,
        "36": 1259000,
        "40": 1246000,
        "48": 1140000
      }
    },
    {
      "dp": 3000000,
      "bayar": 1500000,
      "tenors": {
        "12": 2784000,
        "24": 1649000,
        "30": 1432000,
        "36": 1255000,
        "40": 1241000,
        "48": 1136000
      }
    }
  ],
  "m-supra-gtr-exc": [
    {
      "dp": 2900000,
      "bayar": 1400000,
      "tenors": {
        "12": 2820000,
        "24": 1670000,
        "30": 1450000,
        "36": 1271000,
        "40": 1257000,
        "48": 1150000
      }
    },
    {
      "dp": 3000000,
      "bayar": 1500000,
      "tenors": {
        "12": 2810000,
        "24": 1664000,
        "30": 1445000,
        "36": 1266000,
        "40": 1253000,
        "48": 1146000
      }
    },
    {
      "dp": 3100000,
      "bayar": 1600000,
      "tenors": {
        "12": 2800000,
        "24": 1658000,
        "30": 1440000,
        "36": 1262000,
        "40": 1248000,
        "48": 1142000
      }
    }
  ],
  "m-sonic": [
    {
      "dp": 3000000,
      "bayar": 1200000,
      "tenors": {
        "12": 2925000,
        "24": 1732000,
        "30": 1504000,
        "36": 1352000,
        "40": 1304000,
        "48": 1193000
      }
    },
    {
      "dp": 3100000,
      "bayar": 1300000,
      "tenors": {
        "12": 2915000,
        "24": 1726000,
        "30": 1499000,
        "36": 1348000,
        "40": 1300000,
        "48": 1189000
      }
    },
    {
      "dp": 3200000,
      "bayar": 1400000,
      "tenors": {
        "12": 2905000,
        "24": 1720000,
        "30": 1494000,
        "36": 1343000,
        "40": 1295000,
        "48": 1185000
      }
    }
  ],
  "m-sonic-special-edition": [
    {
      "dp": 3050000,
      "bayar": 1250000,
      "tenors": {
        "12": 2962000,
        "24": 1754000,
        "30": 1523000,
        "36": 1369000,
        "40": 1320000,
        "48": 1208000
      }
    },
    {
      "dp": 3100000,
      "bayar": 1300000,
      "tenors": {
        "12": 2957000,
        "24": 1751000,
        "30": 1521000,
        "36": 1367000,
        "40": 1318000,
        "48": 1206000
      }
    },
    {
      "dp": 3200000,
      "bayar": 1400000,
      "tenors": {
        "12": 2947000,
        "24": 1745000,
        "30": 1516000,
        "36": 1362000,
        "40": 1314000,
        "48": 1202000
      }
    }
  ],
  "m-cb-verza-d": [
    {
      "dp": 2600000,
      "bayar": 800000,
      "tenors": {
        "12": 2560000,
        "24": 1516000,
        "30": 1316000,
        "36": 1183000,
        "40": 1141000,
        "48": 1044000
      }
    },
    {
      "dp": 2700000,
      "bayar": 900000,
      "tenors": {
        "12": 2550000,
        "24": 1510000,
        "30": 1311000,
        "36": 1179000,
        "40": 1137000,
        "48": 1040000
      }
    },
    {
      "dp": 2800000,
      "bayar": 1000000,
      "tenors": {
        "12": 2540000,
        "24": 1504000,
        "30": 1306000,
        "36": 1174000,
        "40": 1132000,
        "48": 1036000
      }
    }
  ],
  "m-cb-verza-cw": [
    {
      "dp": 2650000,
      "bayar": 850000,
      "tenors": {
        "12": 2622000,
        "24": 1552000,
        "30": 1348000,
        "36": 1212000,
        "40": 1169000,
        "48": 1069000
      }
    },
    {
      "dp": 2700000,
      "bayar": 900000,
      "tenors": {
        "12": 2617000,
        "24": 1549000,
        "30": 1346000,
        "36": 1209000,
        "40": 1166000,
        "48": 1067000
      }
    },
    {
      "dp": 2800000,
      "bayar": 1000000,
      "tenors": {
        "12": 2607000,
        "24": 1544000,
        "30": 1341000,
        "36": 1205000,
        "40": 1162000,
        "48": 1063000
      }
    }
  ],
  "m-cb-150-r": [
    {
      "dp": 3600000,
      "bayar": 1800000,
      "tenors": {
        "12": 3453000,
        "24": 2044000,
        "30": 1776000,
        "36": 1596000,
        "40": 1540000,
        "48": 1408000
      }
    },
    {
      "dp": 3700000,
      "bayar": 1900000,
      "tenors": {
        "12": 3443000,
        "24": 2039000,
        "30": 1771000,
        "36": 1592000,
        "40": 1535000,
        "48": 1405000
      }
    },
    {
      "dp": 3800000,
      "bayar": 2000000,
      "tenors": {
        "12": 3433000,
        "24": 2033000,
        "30": 1766000,
        "36": 1587000,
        "40": 1531000,
        "48": 1401000
      }
    }
  ],
  "m-cb-150-r-se": [
    {
      "dp": 3700000,
      "bayar": 1900000,
      "tenors": {
        "12": 3545000,
        "24": 2099000,
        "30": 1823000,
        "36": 1639000,
        "40": 1581000,
        "48": 1446000
      }
    },
    {
      "dp": 3800000,
      "bayar": 2000000,
      "tenors": {
        "12": 3535000,
        "24": 2093000,
        "30": 1818000,
        "36": 1634000,
        "40": 1576000,
        "48": 1442000
      }
    },
    {
      "dp": 3900000,
      "bayar": 2100000,
      "tenors": {
        "12": 3525000,
        "24": 2087000,
        "30": 1813000,
        "36": 1630000,
        "40": 1572000,
        "48": 1438000
      }
    }
  ],
  "m-cbr-150-hs": [
    {
      "dp": 4050000,
      "bayar": 2250000,
      "tenors": {
        "12": 3888000,
        "24": 2302000,
        "30": 2000000,
        "36": 1798000,
        "40": 1734000,
        "48": 1586000
      }
    },
    {
      "dp": 4100000,
      "bayar": 2300000,
      "tenors": {
        "12": 3883000,
        "24": 2299000,
        "30": 1997000,
        "36": 1795000,
        "40": 1732000,
        "48": 1584000
      }
    },
    {
      "dp": 4200000,
      "bayar": 2400000,
      "tenors": {
        "12": 3873000,
        "24": 2293000,
        "30": 1992000,
        "36": 1791000,
        "40": 1727000,
        "48": 1580000
      }
    }
  ],
  "m-cbr-150-mp": [
    {
      "dp": 4150000,
      "bayar": 2350000,
      "tenors": {
        "12": 3949000,
        "24": 2339000,
        "30": 2032000,
        "36": 1826000,
        "40": 1762000,
        "48": 1612000
      }
    },
    {
      "dp": 4200000,
      "bayar": 2400000,
      "tenors": {
        "12": 3944000,
        "24": 2336000,
        "30": 2029000,
        "36": 1824000,
        "40": 1759000,
        "48": 1610000
      }
    },
    {
      "dp": 4300000,
      "bayar": 2500000,
      "tenors": {
        "12": 3934000,
        "24": 2330000,
        "30": 2024000,
        "36": 1819000,
        "40": 1755000,
        "48": 1606000
      }
    }
  ],
  "m-cbr-150-abs-jna": [
    {
      "dp": 4500000,
      "bayar": 2700000,
      "tenors": {
        "12": 4273000,
        "24": 2531000,
        "30": 2198000,
        "36": 1976000,
        "40": 1906000,
        "48": 1744000
      }
    },
    {
      "dp": 4600000,
      "bayar": 2800000,
      "tenors": {
        "12": 4263000,
        "24": 2525000,
        "30": 2193000,
        "36": 1971000,
        "40": 1902000,
        "48": 1740000
      }
    },
    {
      "dp": 4700000,
      "bayar": 2900000,
      "tenors": {
        "12": 4253000,
        "24": 2519000,
        "30": 2188000,
        "36": 1967000,
        "40": 1897000,
        "48": 1736000
      }
    }
  ],
  "m-cbr-150-abs-jns-ke0": [
    {
      "dp": 4550000,
      "bayar": 2750000,
      "tenors": {
        "12": 4340000,
        "24": 2570000,
        "30": 2233000,
        "36": 2007000,
        "40": 1936000,
        "48": 1771000
      }
    },
    {
      "dp": 4600000,
      "bayar": 2800000,
      "tenors": {
        "12": 4335000,
        "24": 2567000,
        "30": 2230000,
        "36": 2005000,
        "40": 1934000,
        "48": 1769000
      }
    },
    {
      "dp": 4700000,
      "bayar": 2900000,
      "tenors": {
        "12": 4325000,
        "24": 2561000,
        "30": 2225000,
        "36": 2000000,
        "40": 1929000,
        "48": 1765000
      }
    }
  ],
  "m-cbr-150-abs-jnu-kea": [
    {
      "dp": 4500000,
      "bayar": 2700000,
      "tenors": {
        "12": 4273000,
        "24": 2531000,
        "30": 2198000,
        "36": 1976000,
        "40": 1906000,
        "48": 1744000
      }
    },
    {
      "dp": 4600000,
      "bayar": 2800000,
      "tenors": {
        "12": 4263000,
        "24": 2525000,
        "30": 2193000,
        "36": 1971000,
        "40": 1902000,
        "48": 1740000
      }
    },
    {
      "dp": 4700000,
      "bayar": 2900000,
      "tenors": {
        "12": 4253000,
        "24": 2519000,
        "30": 2188000,
        "36": 1967000,
        "40": 1897000,
        "48": 1736000
      }
    }
  ],
  "m-crf-150": [
    {
      "dp": 4050000,
      "bayar": 2250000,
      "tenors": {
        "12": 3869000,
        "24": 2291000,
        "30": 1990000,
        "36": 1789000,
        "40": 1726000,
        "48": 1579000
      }
    },
    {
      "dp": 4100000,
      "bayar": 2300000,
      "tenors": {
        "12": 3864000,
        "24": 2289000,
        "30": 1988000,
        "36": 1787000,
        "40": 1724000,
        "48": 1577000
      }
    },
    {
      "dp": 4200000,
      "bayar": 2400000,
      "tenors": {
        "12": 3854000,
        "24": 2283000,
        "30": 1983000,
        "36": 1782000,
        "40": 1719000,
        "48": 1573000
      }
    }
  ],
  "m-cb-150-x": [
    {
      "dp": 3600000,
      "bayar": 1800000,
      "tenors": {
        "12": 3482000,
        "24": 2062000,
        "30": 1791000,
        "36": 1610000,
        "40": 1553000,
        "48": 1420000
      }
    },
    {
      "dp": 3700000,
      "bayar": 1900000,
      "tenors": {
        "12": 3472000,
        "24": 2056000,
        "30": 1786000,
        "36": 1605000,
        "40": 1548000,
        "48": 1417000
      }
    },
    {
      "dp": 3800000,
      "bayar": 2000000,
      "tenors": {
        "12": 3462000,
        "24": 2050000,
        "30": 1781000,
        "36": 1601000,
        "40": 1544000,
        "48": 1413000
      }
    }
  ],
  "m-cb-150-x-se": [
    {
      "dp": 3650000,
      "bayar": 1850000,
      "tenors": {
        "12": 3529000,
        "24": 2089000,
        "30": 1815000,
        "36": 1631000,
        "40": 1573000,
        "48": 1440000
      }
    },
    {
      "dp": 3700000,
      "bayar": 1900000,
      "tenors": {
        "12": 3524000,
        "24": 2087000,
        "30": 1812000,
        "36": 1629000,
        "40": 1571000,
        "48": 1438000
      }
    },
    {
      "dp": 3800000,
      "bayar": 2000000,
      "tenors": {
        "12": 3514000,
        "24": 2081000,
        "30": 1807000,
        "36": 1625000,
        "40": 1567000,
        "48": 1434000
      }
    }
  ],
  "m-crf-250": [
    {
      "dp": 10150000,
      "bayar": 8350000,
      "tenors": {
        "12": 9450000,
        "24": 5598000,
        "30": 4863000,
        "36": 4372000,
        "40": 4218000,
        "48": 3859000
      }
    },
    {
      "dp": 10300000,
      "bayar": 8500000,
      "tenors": {
        "12": 9435000,
        "24": 5589000,
        "30": 4856000,
        "36": 4365000,
        "40": 4212000,
        "48": 3853000
      }
    },
    {
      "dp": 10400000,
      "bayar": 8600000,
      "tenors": {
        "12": 9425000,
        "24": 5583000,
        "30": 4851000,
        "36": 4361000,
        "40": 4207000,
        "48": 3849000
      }
    }
  ],
  "m-monkey": [
    {
      "dp": 8950000,
      "bayar": 7150000,
      "tenors": {
        "12": 8372000,
        "24": 4959000,
        "30": 4308000,
        "36": 3873000,
        "40": 3737000,
        "48": 3418000
      }
    },
    {
      "dp": 9100000,
      "bayar": 7300000,
      "tenors": {
        "12": 8357000,
        "24": 4950000,
        "30": 4301000,
        "36": 3866000,
        "40": 3730000,
        "48": 3413000
      }
    },
    {
      "dp": 9200000,
      "bayar": 7400000,
      "tenors": {
        "12": 8347000,
        "24": 4945000,
        "30": 4296000,
        "36": 3862000,
        "40": 3726000,
        "48": 3409000
      }
    }
  ],
  "m-ct-125": [
    {
      "dp": 8450000,
      "bayar": 6650000,
      "tenors": {
        "12": 7883000,
        "24": 4670000,
        "30": 4057000,
        "36": 3647000,
        "40": 3518000,
        "48": 3219000
      }
    },
    {
      "dp": 8600000,
      "bayar": 6800000,
      "tenors": {
        "12": 7868000,
        "24": 4661000,
        "30": 4049000,
        "36": 3640000,
        "40": 3512000,
        "48": 3213000
      }
    },
    {
      "dp": 8700000,
      "bayar": 6900000,
      "tenors": {
        "12": 7858000,
        "24": 4655000,
        "30": 4044000,
        "36": 3635000,
        "40": 3508000,
        "48": 3209000
      }
    }
  ],
  "m-em1-e-charger": [
    {
      "dp": 4650000,
      "bayar": 3150000,
      "tenors": {
        "12": 4385000,
        "24": 2558000,
        "30": 2214000,
        "36": 1970000,
        "40": null,
        "48": null
      }
    },
    {
      "dp": 4750000,
      "bayar": 3250000,
      "tenors": {
        "12": 4375000,
        "24": 2552000,
        "30": 2209000,
        "36": 1966000,
        "40": null,
        "48": null
      }
    },
    {
      "dp": 4850000,
      "bayar": 3350000,
      "tenors": {
        "12": 4365000,
        "24": 2546000,
        "30": 2204000,
        "36": 1961000,
        "40": null,
        "48": null
      }
    }
  ],
  "m-em1-e-plus-charger": [
    {
      "dp": 4700000,
      "bayar": 3200000,
      "tenors": {
        "12": 4430000,
        "24": 2584000,
        "30": 2237000,
        "36": 1990000,
        "40": null,
        "48": null
      }
    },
    {
      "dp": 4800000,
      "bayar": 3300000,
      "tenors": {
        "12": 4420000,
        "24": 2578000,
        "30": 2232000,
        "36": 1986000,
        "40": null,
        "48": null
      }
    },
    {
      "dp": 4900000,
      "bayar": 3400000,
      "tenors": {
        "12": 4410000,
        "24": 2572000,
        "30": 2227000,
        "36": 1982000,
        "40": null,
        "48": null
      }
    }
  ],
  "m-icon-e": [
    {
      "dp": 2850000,
      "bayar": 1350000,
      "tenors": {
        "12": 2771000,
        "24": 1641000,
        "30": 1425000,
        "36": 1281000,
        "40": null,
        "48": null
      }
    },
    {
      "dp": 2900000,
      "bayar": 1400000,
      "tenors": {
        "12": 2766000,
        "24": 1638000,
        "30": 1422000,
        "36": 1278000,
        "40": null,
        "48": null
      }
    },
    {
      "dp": 3000000,
      "bayar": 1500000,
      "tenors": {
        "12": 2756000,
        "24": 1632000,
        "30": 1417000,
        "36": 1274000,
        "40": null,
        "48": null
      }
    }
  ],
  "m-cuv-e": [
    {
      "dp": 5500000,
      "bayar": 4000000,
      "tenors": {
        "12": 5194000,
        "24": 3076000,
        "30": 2672000,
        "36": 2402000,
        "40": null,
        "48": null
      }
    },
    {
      "dp": 5600000,
      "bayar": 4100000,
      "tenors": {
        "12": 5184000,
        "24": 3071000,
        "30": 2667000,
        "36": 2398000,
        "40": null,
        "48": null
      }
    },
    {
      "dp": 5700000,
      "bayar": 4200000,
      "tenors": {
        "12": 5174000,
        "24": 3065000,
        "30": 2662000,
        "36": 2393000,
        "40": null,
        "48": null
      }
    }
  ],
  "m-cuv-e-roadsync": [
    {
      "dp": 6000000,
      "bayar": 4500000,
      "tenors": {
        "12": 5671000,
        "24": 3359000,
        "30": 2918000,
        "36": 2623000,
        "40": null,
        "48": null
      }
    },
    {
      "dp": 6100000,
      "bayar": 4600000,
      "tenors": {
        "12": 5661000,
        "24": 3353000,
        "30": 2913000,
        "36": 2618000,
        "40": null,
        "48": null
      }
    },
    {
      "dp": 6200000,
      "bayar": 4700000,
      "tenors": {
        "12": 5651000,
        "24": 3347000,
        "30": 2908000,
        "36": 2614000,
        "40": null,
        "48": null
      }
    }
  ],
  "m-beat-sporty-cbs": [
    {
      "dp": 2150000,
      "bayar": 850000,
      "tenors": {
        "12": 2150000,
        "24": 1275000,
        "30": 1108000,
        "36": 966000,
        "40": 962000,
        "48": 881000
      }
    },
    {
      "dp": 2200000,
      "bayar": 900000,
      "tenors": {
        "12": 2145000,
        "24": 1272000,
        "30": 1106000,
        "36": 964000,
        "40": 960000,
        "48": 879000
      }
    },
    {
      "dp": 2300000,
      "bayar": 1000000,
      "tenors": {
        "12": 2135000,
        "24": 1266000,
        "30": 1101000,
        "36": 959000,
        "40": 955000,
        "48": 875000
      }
    }
  ],
  "m-beat-sporty-iss-deluxe": [
    {
      "dp": 2250000,
      "bayar": 950000,
      "tenors": {
        "12": 2221000,
        "24": 1317000,
        "30": 1145000,
        "36": 998000,
        "40": 994000,
        "48": 910000
      }
    },
    {
      "dp": 2300000,
      "bayar": 1000000,
      "tenors": {
        "12": 2216000,
        "24": 1314000,
        "30": 1143000,
        "36": 996000,
        "40": 991000,
        "48": 908000
      }
    },
    {
      "dp": 2400000,
      "bayar": 1100000,
      "tenors": {
        "12": 2206000,
        "24": 1309000,
        "30": 1137000,
        "36": 992000,
        "40": 987000,
        "48": 904000
      }
    }
  ],
  "m-beat-iss-dx-smartkey": [
    {
      "dp": 2300000,
      "bayar": 1000000,
      "tenors": {
        "12": 2277000,
        "24": 1351000,
        "30": 1174000,
        "36": 1023000,
        "40": 1019000,
        "48": 933000
      }
    },
    {
      "dp": 2400000,
      "bayar": 1100000,
      "tenors": {
        "12": 2267000,
        "24": 1345000,
        "30": 1169000,
        "36": 1019000,
        "40": 1014000,
        "48": 929000
      }
    },
    {
      "dp": 2500000,
      "bayar": 1200000,
      "tenors": {
        "12": 2257000,
        "24": 1339000,
        "30": 1164000,
        "36": 1014000,
        "40": 1010000,
        "48": 925000
      }
    }
  ],
  "m-new-beat-street": [
    {
      "dp": 2250000,
      "bayar": 950000,
      "tenors": {
        "12": 2226000,
        "24": 1320000,
        "30": 1148000,
        "36": 1000000,
        "40": 996000,
        "48": 912000
      }
    },
    {
      "dp": 2300000,
      "bayar": 1000000,
      "tenors": {
        "12": 2221000,
        "24": 1317000,
        "30": 1145000,
        "36": 998000,
        "40": 994000,
        "48": 910000
      }
    },
    {
      "dp": 2400000,
      "bayar": 1100000,
      "tenors": {
        "12": 2211000,
        "24": 1312000,
        "30": 1140000,
        "36": 994000,
        "40": 989000,
        "48": 906000
      }
    }
  ],
  "m-genio-cbs": [
    {
      "dp": 2250000,
      "bayar": 950000,
      "tenors": {
        "12": 2235000,
        "24": 1326000,
        "30": 1152000,
        "36": 1005000,
        "40": 1000000,
        "48": 916000
      }
    },
    {
      "dp": 2300000,
      "bayar": 1000000,
      "tenors": {
        "12": 2230000,
        "24": 1323000,
        "30": 1150000,
        "36": 1002000,
        "40": 998000,
        "48": 914000
      }
    },
    {
      "dp": 2400000,
      "bayar": 1100000,
      "tenors": {
        "12": 2220000,
        "24": 1317000,
        "30": 1145000,
        "36": 998000,
        "40": 993000,
        "48": 910000
      }
    }
  ],
  "m-genio-cbs-spc-color": [
    {
      "dp": 2250000,
      "bayar": 950000,
      "tenors": {
        "12": 2262000,
        "24": 1341000,
        "30": 1166000,
        "36": 1016000,
        "40": 1012000,
        "48": 927000
      }
    },
    {
      "dp": 2300000,
      "bayar": 1000000,
      "tenors": {
        "12": 2257000,
        "24": 1339000,
        "30": 1163000,
        "36": 1014000,
        "40": 1010000,
        "48": 925000
      }
    },
    {
      "dp": 2400000,
      "bayar": 1100000,
      "tenors": {
        "12": 2247000,
        "24": 1333000,
        "30": 1158000,
        "36": 1010000,
        "40": 1005000,
        "48": 921000
      }
    }
  ],
  "m-genio-cbs-iss": [
    {
      "dp": 2300000,
      "bayar": 1000000,
      "tenors": {
        "12": 2287000,
        "24": 1357000,
        "30": 1179000,
        "36": 1028000,
        "40": 1023000,
        "48": 937000
      }
    },
    {
      "dp": 2400000,
      "bayar": 1100000,
      "tenors": {
        "12": 2277000,
        "24": 1351000,
        "30": 1174000,
        "36": 1023000,
        "40": 1019000,
        "48": 933000
      }
    },
    {
      "dp": 2500000,
      "bayar": 1200000,
      "tenors": {
        "12": 2267000,
        "24": 1345000,
        "30": 1169000,
        "36": 1019000,
        "40": 1015000,
        "48": 929000
      }
    }
  ],
  "m-scoopy-std": [
    {
      "dp": 2550000,
      "bayar": 1250000,
      "tenors": {
        "12": 2524000,
        "24": 1497000,
        "30": 1301000,
        "36": 1142000,
        "40": 1130000,
        "48": 1034000
      }
    },
    {
      "dp": 2600000,
      "bayar": 1300000,
      "tenors": {
        "12": 2519000,
        "24": 1494000,
        "30": 1299000,
        "36": 1139000,
        "40": 1127000,
        "48": 1032000
      }
    },
    {
      "dp": 2700000,
      "bayar": 1400000,
      "tenors": {
        "12": 2509000,
        "24": 1488000,
        "30": 1294000,
        "36": 1135000,
        "40": 1123000,
        "48": 1028000
      }
    }
  ],
  "m-scoopy-smart-key": [
    {
      "dp": 2650000,
      "bayar": 1350000,
      "tenors": {
        "12": 2603000,
        "24": 1544000,
        "30": 1342000,
        "36": 1178000,
        "40": 1165000,
        "48": 1067000
      }
    },
    {
      "dp": 2700000,
      "bayar": 1400000,
      "tenors": {
        "12": 2598000,
        "24": 1541000,
        "30": 1340000,
        "36": 1175000,
        "40": 1163000,
        "48": 1065000
      }
    },
    {
      "dp": 2800000,
      "bayar": 1500000,
      "tenors": {
        "12": 2588000,
        "24": 1535000,
        "30": 1335000,
        "36": 1171000,
        "40": 1159000,
        "48": 1061000
      }
    }
  ],
  "m-vario-125-cbs": [
    {
      "dp": 2700000,
      "bayar": 1400000,
      "tenors": {
        "12": 2629000,
        "24": 1559000,
        "30": 1356000,
        "36": 1189000,
        "40": 1177000,
        "48": 1077000
      }
    },
    {
      "dp": 2800000,
      "bayar": 1500000,
      "tenors": {
        "12": 2619000,
        "24": 1554000,
        "30": 1350000,
        "36": 1185000,
        "40": 1172000,
        "48": 1073000
      }
    },
    {
      "dp": 2900000,
      "bayar": 1600000,
      "tenors": {
        "12": 2609000,
        "24": 1548000,
        "30": 1345000,
        "36": 1180000,
        "40": 1168000,
        "48": 1069000
      }
    }
  ],
  "m-vario-125-iss": [
    {
      "dp": 2850000,
      "bayar": 1550000,
      "tenors": {
        "12": 2801000,
        "24": 1662000,
        "30": 1445000,
        "36": 1267000,
        "40": 1254000,
        "48": 1148000
      }
    },
    {
      "dp": 2900000,
      "bayar": 1600000,
      "tenors": {
        "12": 2796000,
        "24": 1659000,
        "30": 1442000,
        "36": 1265000,
        "40": 1252000,
        "48": 1146000
      }
    },
    {
      "dp": 3000000,
      "bayar": 1700000,
      "tenors": {
        "12": 2786000,
        "24": 1653000,
        "30": 1437000,
        "36": 1261000,
        "40": 1247000,
        "48": 1142000
      }
    }
  ],
  "m-vario-125-street": [
    {
      "dp": 2900000,
      "bayar": 1600000,
      "tenors": {
        "12": 2843000,
        "24": 1687000,
        "30": 1466000,
        "36": 1286000,
        "40": 1273000,
        "48": 1165000
      }
    },
    {
      "dp": 3000000,
      "bayar": 1700000,
      "tenors": {
        "12": 2833000,
        "24": 1681000,
        "30": 1461000,
        "36": 1282000,
        "40": 1268000,
        "48": 1161000
      }
    },
    {
      "dp": 3100000,
      "bayar": 1800000,
      "tenors": {
        "12": 2823000,
        "24": 1675000,
        "30": 1456000,
        "36": 1277000,
        "40": 1264000,
        "48": 1157000
      }
    }
  ],
  "m-vario-evo-160-cbs": [
    {
      "dp": 3050000,
      "bayar": 1750000,
      "tenors": {
        "12": 2970000,
        "24": 1762000,
        "30": 1532000,
        "36": 1344000,
        "40": 1330000,
        "48": 1218000
      }
    },
    {
      "dp": 3100000,
      "bayar": 1800000,
      "tenors": {
        "12": 2965000,
        "24": 1759000,
        "30": 1529000,
        "36": 1342000,
        "40": 1328000,
        "48": 1216000
      }
    },
    {
      "dp": 3200000,
      "bayar": 1900000,
      "tenors": {
        "12": 2955000,
        "24": 1753000,
        "30": 1524000,
        "36": 1337000,
        "40": 1323000,
        "48": 1212000
      }
    }
  ],
  "m-vario-evo-160-cbs-nitro": [
    {
      "dp": 3050000,
      "bayar": 1750000,
      "tenors": {
        "12": 2996000,
        "24": 1777000,
        "30": 1545000,
        "36": 1355000,
        "40": 1341000,
        "48": 1228000
      }
    },
    {
      "dp": 3100000,
      "bayar": 1800000,
      "tenors": {
        "12": 2991000,
        "24": 1774000,
        "30": 1542000,
        "36": 1353000,
        "40": 1339000,
        "48": 1226000
      }
    },
    {
      "dp": 3200000,
      "bayar": 1900000,
      "tenors": {
        "12": 2981000,
        "24": 1768000,
        "30": 1537000,
        "36": 1349000,
        "40": 1335000,
        "48": 1222000
      }
    }
  ],
  "m-vario-evo-160-abs": [
    {
      "dp": 3350000,
      "bayar": 2050000,
      "tenors": {
        "12": 3257000,
        "24": 1932000,
        "30": 1680000,
        "36": 1474000,
        "40": 1458000,
        "48": 1335000
      }
    },
    {
      "dp": 3400000,
      "bayar": 2100000,
      "tenors": {
        "12": 3252000,
        "24": 1929000,
        "30": 1677000,
        "36": 1472000,
        "40": 1456000,
        "48": 1333000
      }
    },
    {
      "dp": 3500000,
      "bayar": 2200000,
      "tenors": {
        "12": 3242000,
        "24": 1924000,
        "30": 1672000,
        "36": 1467000,
        "40": 1452000,
        "48": 1329000
      }
    }
  ],
  "m-stylo-cbs": [
    {
      "dp": 3200000,
      "bayar": 1900000,
      "tenors": {
        "12": 3085000,
        "24": 1830000,
        "30": 1591000,
        "36": 1396000,
        "40": 1381000,
        "48": 1265000
      }
    },
    {
      "dp": 3300000,
      "bayar": 2000000,
      "tenors": {
        "12": 3075000,
        "24": 1825000,
        "30": 1586000,
        "36": 1392000,
        "40": 1377000,
        "48": 1261000
      }
    },
    {
      "dp": 3400000,
      "bayar": 2100000,
      "tenors": {
        "12": 3065000,
        "24": 1819000,
        "30": 1581000,
        "36": 1387000,
        "40": 1373000,
        "48": 1257000
      }
    }
  ],
  "m-stylo-abs": [
    {
      "dp": 3500000,
      "bayar": 2200000,
      "tenors": {
        "12": 3366000,
        "24": 1997000,
        "30": 1736000,
        "36": 1523000,
        "40": 1507000,
        "48": 1380000
      }
    },
    {
      "dp": 3600000,
      "bayar": 2300000,
      "tenors": {
        "12": 3356000,
        "24": 1991000,
        "30": 1731000,
        "36": 1519000,
        "40": 1503000,
        "48": 1376000
      }
    },
    {
      "dp": 3700000,
      "bayar": 2400000,
      "tenors": {
        "12": 3346000,
        "24": 1985000,
        "30": 1726000,
        "36": 1514000,
        "40": 1498000,
        "48": 1372000
      }
    }
  ],
  "m-stylo-abs-se": [
    {
      "dp": 3650000,
      "bayar": 2350000,
      "tenors": {
        "12": 3513000,
        "24": 2084000,
        "30": 1812000,
        "36": 1590000,
        "40": 1573000,
        "48": 1441000
      }
    },
    {
      "dp": 3700000,
      "bayar": 2400000,
      "tenors": {
        "12": 3508000,
        "24": 2082000,
        "30": 1810000,
        "36": 1588000,
        "40": 1571000,
        "48": 1439000
      }
    },
    {
      "dp": 3800000,
      "bayar": 2500000,
      "tenors": {
        "12": 3498000,
        "24": 2076000,
        "30": 1805000,
        "36": 1583000,
        "40": 1567000,
        "48": 1435000
      }
    }
  ],
  "m-pcx-160-cbs": [
    {
      "dp": 3700000,
      "bayar": 2400000,
      "tenors": {
        "12": 3550000,
        "24": 2106000,
        "30": 1831000,
        "36": 1647000,
        "40": 1590000,
        "48": 1456000
      }
    },
    {
      "dp": 3800000,
      "bayar": 2500000,
      "tenors": {
        "12": 3540000,
        "24": 2100000,
        "30": 1826000,
        "36": 1643000,
        "40": 1585000,
        "48": 1452000
      }
    },
    {
      "dp": 3900000,
      "bayar": 2600000,
      "tenors": {
        "12": 3530000,
        "24": 2094000,
        "30": 1821000,
        "36": 1638000,
        "40": 1581000,
        "48": 1448000
      }
    }
  ],
  "m-pcx-160-abs": [
    {
      "dp": 4050000,
      "bayar": 2750000,
      "tenors": {
        "12": 3899000,
        "24": 2314000,
        "30": 2012000,
        "36": 1810000,
        "40": 1746000,
        "48": 1599000
      }
    },
    {
      "dp": 4100000,
      "bayar": 2800000,
      "tenors": {
        "12": 3894000,
        "24": 2311000,
        "30": 2009000,
        "36": 1807000,
        "40": 1744000,
        "48": 1597000
      }
    },
    {
      "dp": 4200000,
      "bayar": 2900000,
      "tenors": {
        "12": 3884000,
        "24": 2305000,
        "30": 2004000,
        "36": 1803000,
        "40": 1740000,
        "48": 1593000
      }
    }
  ],
  "m-pcx-160-abs-roadsync": [
    {
      "dp": 4400000,
      "bayar": 3100000,
      "tenors": {
        "12": 4185000,
        "24": 2483000,
        "30": 2159000,
        "36": 1942000,
        "40": 1875000,
        "48": 1717000
      }
    },
    {
      "dp": 4500000,
      "bayar": 3200000,
      "tenors": {
        "12": 4175000,
        "24": 2478000,
        "30": 2154000,
        "36": 1938000,
        "40": 1870000,
        "48": 1713000
      }
    },
    {
      "dp": 4600000,
      "bayar": 3300000,
      "tenors": {
        "12": 4165000,
        "24": 2472000,
        "30": 2149000,
        "36": 1933000,
        "40": 1866000,
        "48": 1709000
      }
    }
  ],
  "m-adv-160-cbs": [
    {
      "dp": 3900000,
      "bayar": 2600000,
      "tenors": {
        "12": 3749000,
        "24": 2224000,
        "30": 1934000,
        "36": 1740000,
        "40": 1679000,
        "48": 1537000
      }
    },
    {
      "dp": 4000000,
      "bayar": 2700000,
      "tenors": {
        "12": 3739000,
        "24": 2219000,
        "30": 1929000,
        "36": 1735000,
        "40": 1675000,
        "48": 1534000
      }
    },
    {
      "dp": 4100000,
      "bayar": 2800000,
      "tenors": {
        "12": 3729000,
        "24": 2213000,
        "30": 1924000,
        "36": 1731000,
        "40": 1670000,
        "48": 1530000
      }
    }
  ],
  "m-adv-160-abs": [
    {
      "dp": 4200000,
      "bayar": 2900000,
      "tenors": {
        "12": 4007000,
        "24": 2378000,
        "30": 2067000,
        "36": 1860000,
        "40": 1795000,
        "48": 1644000
      }
    },
    {
      "dp": 4300000,
      "bayar": 3000000,
      "tenors": {
        "12": 3997000,
        "24": 2372000,
        "30": 2062000,
        "36": 1855000,
        "40": 1790000,
        "48": 1640000
      }
    },
    {
      "dp": 4400000,
      "bayar": 3100000,
      "tenors": {
        "12": 3987000,
        "24": 2366000,
        "30": 2057000,
        "36": 1851000,
        "40": 1786000,
        "48": 1636000
      }
    }
  ],
  "m-adv-160-roadsync": [
    {
      "dp": 4350000,
      "bayar": 3050000,
      "tenors": {
        "12": 4146000,
        "24": 2460000,
        "30": 2139000,
        "36": 1925000,
        "40": 1857000,
        "48": 1701000
      }
    },
    {
      "dp": 4400000,
      "bayar": 3100000,
      "tenors": {
        "12": 4141000,
        "24": 2458000,
        "30": 2137000,
        "36": 1922000,
        "40": 1855000,
        "48": 1699000
      }
    },
    {
      "dp": 4500000,
      "bayar": 3200000,
      "tenors": {
        "12": 4131000,
        "24": 2452000,
        "30": 2132000,
        "36": 1918000,
        "40": 1851000,
        "48": 1695000
      }
    }
  ],
  "m-cbr-250-std-bk": [
    {
      "dp": 7700000,
      "bayar": 5900000,
      "tenors": {
        "12": 7199000,
        "24": 4264000,
        "30": 3704000,
        "36": 3330000,
        "40": 3213000,
        "48": 2939000
      }
    },
    {
      "dp": 7800000,
      "bayar": 6000000,
      "tenors": {
        "12": 7189000,
        "24": 4258000,
        "30": 3699000,
        "36": 3325000,
        "40": 3208000,
        "48": 2935000
      }
    },
    {
      "dp": 7900000,
      "bayar": 6100000,
      "tenors": {
        "12": 7179000,
        "24": 4252000,
        "30": 3694000,
        "36": 3321000,
        "40": 3204000,
        "48": 2931000
      }
    }
  ],
  "m-cbr-250-std-mh": [
    {
      "dp": 8150000,
      "bayar": 6350000,
      "tenors": {
        "12": 7595000,
        "24": 4499000,
        "30": 3909000,
        "36": 3513000,
        "40": 3390000,
        "48": 3101000
      }
    },
    {
      "dp": 8300000,
      "bayar": 6500000,
      "tenors": {
        "12": 7580000,
        "24": 4490000,
        "30": 3901000,
        "36": 3507000,
        "40": 3383000,
        "48": 3095000
      }
    },
    {
      "dp": 8400000,
      "bayar": 6600000,
      "tenors": {
        "12": 7570000,
        "24": 4484000,
        "30": 3896000,
        "36": 3502000,
        "40": 3379000,
        "48": 3091000
      }
    }
  ],
  "m-cbr-250-abs-bl": [
    {
      "dp": 8850000,
      "bayar": 7050000,
      "tenors": {
        "12": 8275000,
        "24": 4902000,
        "30": 4259000,
        "36": 3828000,
        "40": 3694000,
        "48": 3379000
      }
    },
    {
      "dp": 9000000,
      "bayar": 7200000,
      "tenors": {
        "12": 8260000,
        "24": 4893000,
        "30": 4251000,
        "36": 3822000,
        "40": 3687000,
        "48": 3373000
      }
    },
    {
      "dp": 9100000,
      "bayar": 7300000,
      "tenors": {
        "12": 8250000,
        "24": 4888000,
        "30": 4246000,
        "36": 3817000,
        "40": 3683000,
        "48": 3369000
      }
    }
  ],
  "m-cbr-250-sp-qs-ar": [
    {
      "dp": 9250000,
      "bayar": 7450000,
      "tenors": {
        "12": 8646000,
        "24": 5121000,
        "30": 4449000,
        "36": 4000000,
        "40": 3859000,
        "48": 3530000
      }
    },
    {
      "dp": 9400000,
      "bayar": 7600000,
      "tenors": {
        "12": 8631000,
        "24": 5113000,
        "30": 4442000,
        "36": 3993000,
        "40": 3852000,
        "48": 3524000
      }
    },
    {
      "dp": 9500000,
      "bayar": 7700000,
      "tenors": {
        "12": 8621000,
        "24": 5107000,
        "30": 4437000,
        "36": 3988000,
        "40": 3848000,
        "48": 3520000
      }
    }
  ],
  "m-cbr-250-sp-qs-mp-rd": [
    {
      "dp": 9350000,
      "bayar": 7550000,
      "tenors": {
        "12": 8696000,
        "24": 5152000,
        "30": 4476000,
        "36": 4023000,
        "40": 3882000,
        "48": 3551000
      }
    },
    {
      "dp": 9500000,
      "bayar": 7700000,
      "tenors": {
        "12": 8681000,
        "24": 5143000,
        "30": 4468000,
        "36": 4016000,
        "40": 3875000,
        "48": 3545000
      }
    },
    {
      "dp": 9600000,
      "bayar": 7800000,
      "tenors": {
        "12": 8671000,
        "24": 5137000,
        "30": 4463000,
        "36": 4012000,
        "40": 3871000,
        "48": 3541000
      }
    }
  ]
};
