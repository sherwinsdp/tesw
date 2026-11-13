# MakanHati — project utama Next.js

Versi ini memindahkan desain landing page terbaru ke Next.js 16.4.6, React 19.3, React Hook Form, Zod, dan TypeScript. Folder ini adalah source project untuk dibuka di Kiro, disimpan di GitHub, lalu dihubungkan ke Vercel. **Ini bukan ZIP upload statis Netlify.**

Desain yang disetujui menjadi acuan: font, warna, susunan section, foto, copy, 15 menu, harga, daftar paket, CTA “Daftar Sekarang”, serta form Nama + Instagram + persetujuan dipertahankan. Tidak ada pemilihan paket otomatis.

## Menjalankan lokal

Gunakan Node.js 22 atau lebih baru dan pnpm 11.25.0. Buka terminal di folder yang berisi `package.json`:

```text
pnpm install --frozen-lockfile
pnpm dev
```

Preview: http://127.0.0.1:3001/. Untuk memeriksa build produksi secara lokal:

```text
pnpm build
pnpm start
```

Build lokal tetap `noindex` selama `SEO_INDEXING_ENABLED` belum diaktifkan. Instalasi memakai `pnpm-lock.yaml` agar versi dependensi konsisten. `pnpm test` menjalankan pengujian; `pnpm typecheck` memeriksa TypeScript setelah build; `node tests/http-seo.mjs` memeriksa server lokal yang sedang berjalan.

## Kiro → GitHub → Vercel → domain

1. Ekstrak paket source dan buka folder yang langsung berisi `package.json` di Kiro. Gunakan folder ini sebagai satu project utama; folder `makanhati-local` adalah acuan lama, bukan bagian yang digabung ke repository ini.
2. Buat/isi repository GitHub dengan isi folder project. Jangan unggah `node_modules`, `.next`, `.env.local`, `data`, atau screenshot review; semuanya sudah masuk `.gitignore`.
3. Di Vercel, import repository tersebut. Framework Next.js dideteksi otomatis. Root Directory adalah folder yang berisi `package.json`, Build Command `pnpm build`. Pertahankan Output Directory default Next.js; jangan mengubahnya menjadi `public` atau ekspor statis.
4. Tambahkan domain **makanhati.my.id** di Settings → Domains Vercel, lalu ikuti instruksi DNS yang ditampilkan Vercel/penyedia domain. Menetapkan canonical di kode tidak menghubungkan domain atau mengubah DNS.
5. Atur environment variables sesuai tabel di bawah sebelum deploy yang ingin diindeks. Preview harus tetap tidak diindeks. Perubahan konfigurasi SEO memerlukan rebuild/redeploy.

Repository source: https://github.com/sherwinsdp/tesw. Pengunggahan source ke GitHub terpisah dari deploy Vercel dan pengaturan DNS. Website live serta DNS tidak diubah saat migrasi lokal.

## Pengaturan SEO

| Variabel | Local / Preview | Production setelah siap |
|---|---|---|
| `SITE_URL` | `https://makanhati.my.id` | `https://makanhati.my.id` |
| `SEO_INDEXING_ENABLED` | `false` | `true` |
| `LEGAL_PAGES_APPROVED` | `false` | Tetap `false` sampai teks legal disahkan |

Salin `.env.example` ke `.env.local` bila ingin mengatur local; jangan commit file `.env.local`. Di Vercel, gunakan Settings → Environment Variables dan pilih environment yang benar. Walaupun flag indexing salah dinyalakan, Vercel Preview (`VERCEL_ENV=preview`) tetap dipaksa `noindex`.

- Homepage dan seluruh section menjadi HTML server/prerender, bukan konten yang baru dibuat setelah JavaScript berjalan.
- Semua 15 menu ada di HTML sebagai panel hari. Hanya hari aktif ditampilkan, dengan desain dan fungsi panah yang sama.
- Title, description, canonical, Open Graph, Twitter card, favicon hati dan manifest memakai aset/domain yang nyata.
- `robots.txt` dan `sitemap.xml` mengikuti mode indexing. Production berisi URL domain utama dan melarang crawling API; Preview memblokir crawling dan tidak mencantumkan URL sitemap untuk diindeks.
- Halaman privasi/syarat tetap dapat dibuka. Karena teksnya masih draft, keduanya `noindex` dan di luar sitemap sampai disahkan.
- Structured data hanya identitas Organization/WebSite yang sudah diketahui. Tidak menambahkan alamat lengkap, jam buka, sertifikasi, rating, layanan aktif atau penawaran terverifikasi yang belum ada.
- Font WOFF2 dimuat lokal, hero dipreload, gambar WebP memiliki ukuran dan lazy loading di bawah hero, serta ikon SVG dipertahankan.

SEO teknis tidak menjamin peringkat atau indeks. Setelah domain benar-benar terhubung, verifikasi Search Console, submit `https://makanhati.my.id/sitemap.xml`, lalu cek URL Inspection dan performa pengguna nyata. Target field p75 PRD (LCP/INP/CLS) perlu data production; hasil lokal tidak diklaim sebagai pencapaian target field tersebut.

## Pendaftaran dan penyimpanan

Endpoint tetap **`POST /api/registrations`**. React Hook Form + Zod memvalidasi aturan pendaftaran yang sama dengan server, tanpa menambah WhatsApp, paket, alamat atau kolom pesanan. Fokus error, pesan per field, progress, retry, idempotency, consent dan analytics dipertahankan.

Pada local, data benar-benar ditulis secara atomik ke `data/registrations/`, di luar `public/` dan Git. Pesan sukses hanya ditampilkan setelah server mengonfirmasi persistence dan ID pendaftaran. `generate_lead` masuk antrean sesudah persistence dan hanya satu kali untuk retry ID yang sama per halaman.

**Penyimpanan online belum dipilih/diintegrasikan.** Saat berjalan di Vercel, endpoint sengaja mengembalikan HTTP 503 dengan `persisted:false`, bukan menyimpan ke filesystem sementara atau menampilkan sukses palsu. Isian tetap ada agar pengguna bisa mencoba lagi. Sebelum menerima pendaftaran publik, sambungkan database/penyimpanan production dan tentukan tujuan notifikasi admin. Menambahkan `MAKANHATI_DATA_DIR` di Vercel tidak mengaktifkan penyimpanan online.

Penyimpanan dan notifikasi pada source Kiro asli masih berupa TODO; code demo yang mengembalikan sukses tanpa persistence tidak dipakai. Arsip source Kiro asli tidak diubah.

Analytics saat ini hanya antrean `window.dataLayer` berlabel `environment:preview`, tanpa script GA4/GTM, cookie analytics, nomor kontak, nama, Instagram, alamat atau UTM mentah. Koneksi pengukuran production dan consent nonesensial harus disiapkan terpisah. Jangan menganggap keberadaan antrean event berarti data sudah masuk GA4.

## Peta file untuk Kiro

- `src/app/(landing)/page.tsx`: susunan section yang disetujui.
- `src/components/sections/`: Header, Hero, RegistrationForm, Benefits, MenuSection, Pricing, HowItWorks, FAQ, Footer, MobileCTA.
- `src/app/base.css` dan `src/app/redesign.css`: gaya existing dipertahankan; perubahan URL font saja agar tidak bertabrakan dengan folder build `_next`.
- `src/lib/landing-interactions.js`: navigasi, pergantian hari, CTA mobile dan submit/error/success existing.
- `src/components/ui/LandingInteractions.tsx`: penghubung React Hook Form + Zod dan pembersihan listener saat unmount.
- `src/lib/registration-schema.mjs`: kontrak validasi bersama browser/server.
- `src/pages/api/registrations.ts`, `src/server/registrations.mjs`: API Next.js dan persistence lokal.
- `src/lib/seo.ts`, `src/lib/seo-config.mjs`, `src/app/robots.ts`, `src/app/sitemap.ts`: aturan SEO dan indexing.
- `src/data/menu.json`, `src/data/packages.json`: data approved. Harga utama dan trial di-render dari konfigurasi paket.
- `public/assets/` dan `public/fonts/`: aset desain dan dua font existing.
- `tests/`: pengujian SEO, analytics, validasi dan penyimpanan.

Jangan mengembalikan form menjadi pemesanan, mengaktifkan prefill paket, atau mengganti desain hanya untuk menyesuaikan struktur source Kiro lama. Keputusan terakhir user tetap pendaftaran calon pelanggan dan desain versi terbaru.
