import type { Metadata } from "next";
import { legalMetadata } from "@/lib/seo";
export const metadata: Metadata = legalMetadata(
  "Kebijakan Privasi",
  "/kebijakan-privasi",
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
        <h1>{"Kebijakan Privasi"}</h1>
        <p>{"Versi pengujian lokal · 13 November 2026"}</p>
        <p>
          {
            "Halaman ini sedang dalam proses penyusunan. Kebijakan privasi lengkap sedang disiapkan dan perlu disetujui sebelum peluncuran resmi."
          }
        </p>
        {"\n"}
        <h2>{"Data dalam pengujian lokal"}</h2>
        <p>
          {
            "Form pendaftaran pada versi pengujian ini mengumpulkan nama lengkap, username Instagram, dan persetujuan privasi. Waktu pendaftaran dan ID permintaan juga dicatat."
          }
        </p>
        {"\n"}
        <h2>{"Penyimpanan dan penggunaan"}</h2>
        <p>
          {
            "Data pengujian disimpan pada komputer yang menjalankan preview lokal untuk memeriksa alur pendaftaran. Pendaftaran tidak memilih paket atau membuat pesanan. Data ini belum diteruskan kepada tim MakanHati dan tidak memicu pesan WhatsApp atau Instagram."
          }
        </p>
        {"\n"}
        <h2>{"Hubungi Kami"}</h2>
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
