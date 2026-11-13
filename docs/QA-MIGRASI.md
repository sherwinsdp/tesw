# Hasil pemeriksaan migrasi lokal — 13 November 2026

## Batas perubahan

Desain yang disetujui dipindahkan ke source Next.js, bukan kembali ke desain Kiro lama. Logo, font, warna, foto, copy, susunan section, 15 menu, harga, CTA dan field pendaftaran dipertahankan. Semua tombol paket menuju form yang sama tanpa prefill paket. Tidak ada push GitHub, deploy, perubahan domain atau DNS.

## Hasil verifikasi

| Pemeriksaan | Hasil |
|---|---|
| Build Next.js dan TypeScript | Lulus |
| Unit/integration tests | 18 lulus: schema, API/persistence, analytics, konfigurasi SEO |
| HTTP mode preview/local | Lulus: noindex, robots memblokir, sitemap tanpa URL indeks |
| HTTP simulasi production | Lulus: canonical dan sitemap memakai https://makanhati.my.id ketika indexing diaktifkan |
| HTML tanpa seluruh script | Satu H1, metadata, semua 15 nama/deskripsi menu dan lima panel hari tersedia |
| Aset dan status route | 26 URL aset HTTP 200; legal HTTP 200/noindex; halaman hilang 404; API GET 405/noindex; data privat 404 |
| Menu browser | Kelima hari, foto/nama/deskripsi ketiga kartu, putaran maju/mundur dan keyboard bekerja |
| CTA | Empat tombol paket menuju field nama pada form yang sama; tidak ada teks Pilihanmu atau state paket |
| FAQ | Keenam FAQ dapat dibuka/ditutup |
| Form lokal | Data uji benar-benar ditulis dan dibaca kembali dari disk sebelum sukses; record dummy pengujian browser dibersihkan |
| Form tidak valid | Error nama, Instagram dan persetujuan tampil; sukses tidak tampil |
| Hosting tanpa database | Simulasi Vercel mengembalikan 503; pesan gagal jelas, isian dipertahankan, sukses tidak tampil |
| Mobile 390 px dan 320 px | Tidak ada overflow horizontal; sticky CTA tersembunyi di hero/form, muncul pada section lain; field 16 px |
| Kesetaraan desain | 17 selector utama dibandingkan pada viewport desktop 1440×900 dan mobile 390×844: tidak ada perbedaan ukuran, posisi, font, bobot, warna atau latar yang diukur |
| Console halaman final | Tidak ada error pada halaman lokal final yang diperiksa |

Screenshot sebelum/sesudah dan pengukuran tersedia di `docs/design-reference/`. Sebelum adalah versi statis lokal yang disetujui; sesudah adalah hasil Next.js. Keduanya memakai viewport yang sama. Buka `comparison.html` untuk melihat bersebelahan.

## Fondasi Kiro yang disesuaikan

- React Hook Form dan Zod digunakan untuk field pendaftaran yang sekarang, dengan schema bersama di browser/server.
- API akhir adalah `/api/registrations`, sesuai keputusan user untuk pendaftaran calon pelanggan. Endpoint pemesanan lama `/api/order-requests` tidak digunakan oleh landing page ini.
- Validasi server, honeypot, batas request, rate limiting, idempotency dan penyimpanan lokal atomik tersedia. Penyimpanan harus selesai sebelum sukses.
- Analytics memakai event pendaftaran tanpa data pribadi. Ini antrean lokal, belum koneksi GA4/GTM eksternal.
- Metadata SEO, canonical, robots, sitemap, structured data serta halaman privasi/syarat tersedia. Halaman legal draft tetap noindex sampai disahkan.

## Yang masih memerlukan konfigurasi production

Penyimpanan database dan tujuan notifikasi admin belum ditentukan. Pada Vercel, form sengaja gagal secara jujur sampai integrasi tersebut dikerjakan. Rate limiting lokal berbasis proses belum merupakan pembatas terdistribusi untuk banyak instance. Tidak ada klaim bahwa endpoint pemesanan Kiro lama sudah aktif atau database production sudah tersambung.

Indeks Google, Search Console dan target Core Web Vitals field p75 memerlukan domain production serta data pengguna nyata. Hasil lokal ini tidak membuktikan peringkat/indeks atau target performa field. Preview tetap noindex; aktifkan indexing hanya untuk deployment production yang sudah siap.
