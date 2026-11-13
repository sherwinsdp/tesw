# Pemetaan SEO/crawling terhadap PRD MakanHati v1.1

Acuan: bagian 10, 11, 12 dan acceptance criteria bagian 13 dari PRD, diselaraskan dengan keputusan terbaru user: desain tetap, CTA “Daftar Sekarang”, pendaftaran calon pelanggan, harga approved, pre-launch Kuningan, domain makanhati.my.id.

| Kebutuhan | Implementasi | Verifikasi |
|---|---|---|
| HTML dapat dibaca crawler | Server Components dan prerender untuk homepage; metadata tidak menunggu client JS | HTTP awal diperiksa setelah menghapus semua script dari bukti konten |
| Daftar menu crawlable | Kelima panel hari/15 menu hadir di HTML; hanya panel aktif terlihat | Semua nama dan deskripsi ditemukan dalam HTML, pergantian hari diuji di browser |
| Title & description | Title sesuai PRD; deskripsi mempertahankan copy pre-launch yang approved | HTTP head |
| Satu H1 dan heading bermakna | Headline hero satu H1, section H2, kategori/judul berikutnya H3/H4 | HTTP HTML |
| Canonical | HTTPS makanhati.my.id, bukan domain placeholder Kiro atau URL localhost | Local dan build production simulasi |
| Sitemap/robots | Route metadata Next.js; indexing hanya jika production dan flag diaktifkan | Build preview dan production simulasi |
| OG/Twitter/favicon | Metadata memakai foto dan logo existing yang benar-benar tersedia | URL aset HTTP 200 |
| Structured data terverifikasi | Organization dan WebSite saja; tidak mengarang rating, alamat atau ketersediaan layanan | JSON-LD parse dan pemeriksaan isi |
| Desain responsif | CSS, font, warna dan foto existing; komponen dipindahkan tanpa redesign | Perbandingan ukuran/font/warna/posisi desktop/mobile dan screenshot |
| Aksesibilitas dan performa dasar | Label/error/focus, reduced motion, font lokal, preload hero, WebP, ukuran gambar, lazy below fold | Browser dan source |
| Analytics tanpa PII | Taxonomy pendaftaran aman; event lead setelah persistence, bukan klik submit | Unit tests dan submit browser |
| Form tidak membocorkan data ke URL tanpa JS | Form memakai method POST; handler menerima JSON dan memvalidasi server | HTTP markup dan validasi |
| Status gagal jujur | Vercel tanpa storage online mengembalikan 503/persisted:false | Simulasi production lokal |
| Legal draft | Dapat dibuka, tetapi tidak diindeks sampai approved | Metadata halaman legal dan sitemap |
| Status 404 | Route tidak ditemukan mengembalikan 404, bukan homepage HTTP 200 | HTTP request |

Yang belum dapat diklaim selesai hanya dari pemeriksaan lokal: indeks Google nyata, field Core Web Vitals p75, canonical yang benar-benar dilayani domain production, pengiriman GA4 eksternal, database production, admin notification, serta legal/operasional final. Ini membutuhkan konfigurasi dan pengujian setelah GitHub → Vercel → domain aktif.

Perubahan framework ini tidak mempublikasikan website, mengubah DNS, memilih provider database, mengirim pesan kepada admin atau mengaktifkan tracking eksternal.
