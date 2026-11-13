export default function FAQ() {
  return (
    <section className="section" id="faq" aria-labelledby="faq-heading">
      <div className="container faq-layout">
        <div className="faq-intro">
          <p className="eyebrow">{"FAQ MakanHati"}</p>
          <h2 id="faq-heading">
            {"FAQ "}
            <em>{"MakanHati"}</em>
          </h2>
          <span className="faq-doodle" aria-hidden="true">
            <svg
              viewBox="0 0 150 135"
              fill="none"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M75 121C42 98 9 73 12 43 15 12 51 5 75 31c24-26 60-19 63 12 3 30-30 55-63 78Z"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinejoin="round"
              ></path>
              <path
                d="M49 49c-8 1-13 7-13 15"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              ></path>
            </svg>
            <svg
              viewBox="0 0 50 50"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M25 2c0 16-7 23-23 23 16 0 23 7 23 23 0-16 7-23 23-23C32 25 25 18 25 2Z"></path>
            </svg>
          </span>
          <p className="faq-contact">
            {"Hubungi kami melalui "}
            <a href="mailto:info.makanhati@gmail.com">{"email"}</a>
            {" atau "}
            <a
              href="https://www.instagram.com/makanhati.catering/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {"Instagram"}
            </a>
            {"."}
          </p>
        </div>
        <div className="faq-list">
          {"\n"}
          <details>
            <summary>
              {"Berapa harga paket MakanHati? Apakah sudah termasuk ongkir?"}
            </summary>
            <div className="faq-answer">
              {
                "Paket langganan mingguan mulai dari Rp175.000, dengan pilihan bulanan hingga Rp1.280.000. Paket Magang/trial 3 hari mulai dari Rp110.000. Add-on akhir pekan mulai dari Rp80.000 sebagai tambahan paket utama. Ketentuan ongkir akan dikonfirmasi oleh tim kami."
              }
            </div>
          </details>
          {"\n"}
          <details>
            <summary>
              {
                "Apakah MakanHati melayani pengiriman ke seluruh wilayah Jakarta?"
              }
            </summary>
            <div className="faq-answer">
              {
                "Saat MakanHati hadir, pengiriman direncanakan mencakup area hingga 10 km dari dapur kami di Kuningan dan sekitarnya."
              }
            </div>
          </details>
          {"\n"}
          <details>
            <summary>
              {
                "Bagaimana jadwal pengiriman makan siang dan malam di MakanHati?"
              }
            </summary>
            <div className="faq-answer">
              {"Rencana jadwal pengiriman saat layanan hadir:"}
              <br />
              {
                "Makan siang: 11.00–12.00. Pesan konfirmasi dikirim pukul 09.00–09.30."
              }
              <br />
              {
                "Makan malam: 18.00–19.00. Pesan konfirmasi dikirim pukul 15.00–15.30."
              }
              <br />
              {
                "Saat layanan berjalan, pastikan kamu merespons pesan sesuai jadwal agar makanan dapat diproses tepat waktu."
              }
            </div>
          </details>
          {"\n"}
          <details>
            <summary>
              {"Apakah MakanHati bisa dipesan untuk akhir pekan?"}
            </summary>
            <div className="faq-answer">
              {
                "Bisa. Saat layanan hadir, paket akhir pekan dapat dipesan bersamaan dengan paket utama atau paling lambat Jumat pukul 18.00 sebelum akhir pekan."
              }
            </div>
          </details>
          {"\n"}
          <details>
            <summary>{"Bagaimana kalau kamu punya alergi makanan?"}</summary>
            <div className="faq-answer">
              {
                "Sampaikan informasi alergi saat konfirmasi dengan tim kami, supaya kebutuhan kamu dapat kami perhatikan."
              }
            </div>
          </details>
          {"\n"}
          <details>
            <summary>
              {"Bagaimana jika makanan tidak sesuai atau pesanan terlambat?"}
            </summary>
            <div className="faq-answer">
              {"Kamu bisa menghubungi kami melalui email "}
              <a href="mailto:info.makanhati@gmail.com">
                {"info.makanhati@gmail.com"}
              </a>
              {" atau Instagram "}
              <a
                href="https://www.instagram.com/makanhati.catering/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {"@makanhati.catering"}
              </a>
              {". Kami akan membantu menindaklanjuti kendala kamu."}
            </div>
          </details>
          {"\n"}
        </div>
      </div>
    </section>
  );
}
