import type { Metadata } from "next";
import { legalMetadata } from "@/lib/seo";
export const metadata: Metadata = legalMetadata(
  "Syarat Layanan",
  "/syarat-layanan",
);
export default function LegalPage() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="/">
            <img
              src="/assets/brand/makanhati-logo.webp"
              width="65"
              height="58"
              alt="MakanHati"
            />
            <span>
              {"Makan"}
              <span className="brand-accent">{"Hati"}</span>
            </span>
          </a>
          <a className="btn btn-outline" href="/#pesan">
            {"Daftar Sekarang"}
          </a>
        </div>
      </header>
      <main className="legal-page">
        <a className="legal-back" href="/">
          {"← Kembali ke Halaman Utama"}
        </a>
        <h1>{"Syarat Layanan"}</h1>
        <p>{"Versi pengujian lokal · 13 November 2026"}</p>
        <p>
          {
            "Halaman ini sedang dalam proses penyusunan. Syarat dan ketentuan layanan lengkap perlu disetujui sebelum peluncuran resmi."
          }
        </p>
        {"\n"}
        <h2>{"Pendaftaran dan konfirmasi"}</h2>
        <p>
          {
            "Form ini menerima pendaftaran, bukan pemesanan makanan. Pilihan paket baru dibahas saat kamu dihubungi untuk konfirmasi. Pada versi pengujian lokal, pendaftaran hanya disimpan untuk pengujian dan belum diteruskan kepada tim MakanHati."
          }
        </p>
        <p>
          {
            "Saat layanan hadir, konfirmasi paket, ketersediaan layanan, dan pembayaran dilakukan melalui tim MakanHati. Preview lokal ini tidak memproses pembayaran."
          }
        </p>
        {"\n"}
        <h2>{"Kontak"}</h2>
        <p>
          {"Email: "}
          <a href="mailto:info.makanhati@gmail.com">
            {"info.makanhati@gmail.com"}
          </a>
          {" · Instagram: "}
          <a href="https://www.instagram.com/makanhati.catering/">
            {"@makanhati.catering"}
          </a>
          {"."}
        </p>
      </main>
    </>
  );
}
