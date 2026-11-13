export default function RegistrationForm() {
  return (
    <section
      className="signup-section"
      id="pesan"
      aria-labelledby="signup-heading"
    >
      <div className="container">
        <div className="signup-shell">
          <div className="signup-invitation">
            <div className="signup-top">
              <div>
                <h2 id="signup-heading">
                  {"Siap Makan "}
                  <em>{"Enak"}</em>
                  {" Setiap Hari?"}
                </h2>
              </div>
              <p>
                {
                  "Daftar sekarang dan nikmati harga spesial saat MakanHati hadir di Kuningan!"
                }
              </p>
            </div>
            {"\n"}
            <div className="signup-doodle" aria-hidden="true">
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
                viewBox="0 0 180 90"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M4 62c36-58 73 5 49 13-22 8-26-24-4-39 34-24 61 29 120-17M143 12l28 5-8 27"></path>
              </svg>
            </div>
          </div>
          <div className="signup-card">
            <form
              method="post"
              action="/api/registrations"
              id="signup-form"
              noValidate
              aria-label="Form pendaftaran MakanHati"
            >
              <div className="signup-fields">
                {"\n"}
                <div className="field">
                  <label htmlFor="customerName">{"Nama lengkap"}</label>
                  <input
                    id="customerName"
                    name="customerName"
                    autoComplete="name"
                    minLength={2}
                    maxLength={100}
                    placeholder="Nama lengkapmu"
                    required
                    aria-describedby="name-error"
                  />
                  <p className="field-error" id="name-error"></p>
                </div>
                {"\n"}
                <div className="field">
                  <label htmlFor="instagramUsername">
                    {"Username Instagram"}
                  </label>
                  <input
                    id="instagramUsername"
                    name="instagramUsername"
                    autoComplete="off"
                    autoCapitalize="none"
                    spellCheck="false"
                    maxLength={31}
                    placeholder="@usernamekamu"
                    required
                    aria-describedby="instagram-error"
                  />
                  <p className="field-error" id="instagram-error"></p>
                </div>
                {"\n"}
              </div>
              {"\n"}
              <div className="honeypot" aria-hidden="true">
                <label htmlFor="website">{"Website"}</label>
                <input
                  id="website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>
              <div className="signup-bottom">
                <div>
                  <label className="consent">
                    <input
                      id="consent"
                      name="consent"
                      type="checkbox"
                      required
                      aria-describedby="consent-error"
                    />
                    <span>
                      {"Dengan mencentang kotak ini, kamu menyetujui "}
                      <a
                        href="/kebijakan-privasi"
                        target="_blank"
                        rel="noopener"
                      >
                        {"Kebijakan Privasi"}
                      </a>
                      {
                        " dan penggunaan nama serta username Instagram kamu untuk proses pendaftaran."
                      }
                    </span>
                  </label>
                  <p id="consent-error" className="field-error"></p>
                </div>
              </div>
              <p className="registration-note">
                {
                  "Pendaftaran ini bukan pemesanan makanan. Pilihan paket akan dibahas saat kamu dihubungi untuk konfirmasi."
                }
              </p>
              <button className="btn" type="submit" id="signup-submit">
                {"Daftar Sekarang "}
                <svg
                  className="cta-icon"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M7 17 17 7M7 7h10v10"></path>
                </svg>
              </button>
              <p
                id="form-status"
                className="form-status"
                role="alert"
                hidden
              ></p>
              <noscript>
                <p className="form-status">
                  {"Aktifkan JavaScript untuk mengirim form pendaftaran."}
                </p>
              </noscript>
            </form>
            {"\n"}
            <div
              className="signup-success"
              id="signup-success"
              role="status"
              tabIndex={-1}
              hidden
            >
              <div>
                <h3>{"Pendaftaran kamu diterima!"}</h3>
                <p>
                  {
                    "Data pendaftaran berhasil tersimpan di versi lokal ini. Belum diteruskan ke tim MakanHati."
                  }
                </p>
                <small id="registration-id"></small>
              </div>
              <button
                type="button"
                className="btn btn-outline"
                id="signup-again"
              >
                {"Daftarkan nama lain"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
