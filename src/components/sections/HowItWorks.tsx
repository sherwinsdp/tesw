export default function HowItWorks() {
  return (
    <section
      className="section how-section"
      id="cara-kerja"
      aria-labelledby="how-heading"
    >
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">{"Cara Kerja"}</p>
          <h2 id="how-heading">
            {"Proses Catering "}
            <em>{"di MakanHati"}</em>
          </h2>
          <p>
            {"Begini gambaran alur layanan saat MakanHati hadir di Kuningan."}
          </p>
        </div>
        <div className="how-grid">
          <article className="how-step">
            <span className="step-logo">
              <svg
                className="section-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                focusable="false"
              >
                <rect x="4" y="5" width="16" height="16" rx="2"></rect>
                <path d="M8 3v4M16 3v4M4 10h16m-12 5 3 3 5-5"></path>
              </svg>
            </span>
            <div className="step-number">
              <span>{"LANGKAH "}</span>
              <strong>{"01"}</strong>
            </div>
            <h3>{"Berlangganan"}</h3>
            <p>
              {
                "Pilih paket, beri notes jika kamu punya alergi makanan, lalu lakukan pembayaran."
              }
            </p>
          </article>
          {"\n"}
          <article className="how-step">
            <span className="step-logo">
              <svg
                className="section-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7A8.4 8.4 0 0 1 4 11.5a8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z"></path>
                <path d="m9 11 2 2 4-4"></path>
              </svg>
            </span>
            <div className="step-number">
              <span>{"LANGKAH "}</span>
              <strong>{"02"}</strong>
            </div>
            <h3>{"Pilih Rasa"}</h3>
            <p>{"Tim kami menghubungimu untuk menentukan pilihan rasa."}</p>
          </article>
          {"\n"}
          <article className="how-step">
            <span className="step-logo">
              <svg
                className="section-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M5 9h14v9a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3ZM3 9h18M2 13h3M19 13h3M9 3v2M15 3v2M10 9V7h4v2"></path>
              </svg>
            </span>
            <div className="step-number">
              <span>{"LANGKAH "}</span>
              <strong>{"03"}</strong>
            </div>
            <h3>{"Dimasak"}</h3>
            <p>
              {"Kami memasak menu harian dengan rasa yang sudah kamu pilih."}
            </p>
          </article>
          {"\n"}
          <article className="how-step">
            <span className="step-logo">
              <svg
                className="section-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M3 5h11v12H3zM14 9h4l3 4v4h-7M3 17H2V8M14 13h7"></path>
                <circle cx="6.5" cy="18" r="2.5"></circle>
                <circle cx="17.5" cy="18" r="2.5"></circle>
              </svg>
            </span>
            <div className="step-number">
              <span>{"LANGKAH "}</span>
              <strong>{"04"}</strong>
            </div>
            <h3>{"Diantar"}</h3>
            <p>
              {
                "Kurir kami mengantarkan makanan ke alamatmu, siap untuk dinikmati."
              }
            </p>
          </article>
          {"\n"}
        </div>
      </div>
    </section>
  );
}
