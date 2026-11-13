import packages from "@/data/packages.json";
const rupiah = (value: number) =>
  "Rp" + new Intl.NumberFormat("id-ID").format(value);

export default function Pricing() {
  return (
    <section className="section" id="paket" aria-labelledby="pricing-heading">
      <div className="container">
        <div className="pricing-heading">
          <div>
            <p className="eyebrow">{"Paket Langganan"}</p>
            <h2 id="pricing-heading">
              {"Kenali paket yang "}
              <em>{"cocok untuk kamu"}</em>
            </h2>
            <p>{"Paket langganan mulai dari Rp175.000."}</p>
          </div>
          <span className="schedule-note">{"Paket utama · Senin–Jumat"}</span>
        </div>
        <div className="pricing-grid">
          {"\n"}
          <article className="price-card featured">
            <div className="price-ordinal">
              <svg
                className="package-icon"
                xmlns="http://www.w3.org/2000/svg"
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
                <path d="M12 3a9 9 0 1 0 9 9 7 7 0 0 1-9-9Z"></path>
                <path d="M18 2v4M16 4h4M21 7v2M20 8h2"></path>
              </svg>
              <span>{"Paket 01"}</span>
            </div>
            <h3>{packages[0].title}</h3>
            <p className="package-nickname">{packages[0].schedule}</p>
            <p className="price-description">
              {"Dua kali sehari, untuk makan siang dan malam."}
            </p>
            <div className="price-options">
              {"\n"}
              <div className="price-option">
                <div>
                  <span>{"Mingguan"}</span>
                  <strong>{rupiah(packages[0].price)}</strong>
                </div>
                <small>{`${packages[0].portions}x makan`}</small>
              </div>
              {"\n"}
              <div className="price-option">
                <div>
                  <span className="duration-label">
                    {"Bulanan "}
                    <span className="best-value">{"Best value"}</span>
                  </span>
                  <strong>{rupiah(packages[1].price)}</strong>
                </div>
                <small>{`${packages[1].portions}x makan`}</small>
              </div>
              {"\n"}
            </div>
            <a
              className="btn btn-primary choose-subscription"
              href="#pesan"
              data-registration-cta
            >
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
            </a>
          </article>
          {"\n"}
          <article className="price-card ">
            <div className="price-ordinal">
              <svg
                className="package-icon"
                xmlns="http://www.w3.org/2000/svg"
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
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42"></path>
              </svg>
              <span>{"Paket 02"}</span>
            </div>
            <h3>{packages[2].title}</h3>
            <p className="package-nickname">{packages[2].schedule}</p>
            <p className="price-description">
              {"Biar kamu tidak perlu memikirkan menu makan siang."}
            </p>
            <div className="price-options">
              {"\n"}
              <div className="price-option">
                <div>
                  <span>{"Mingguan"}</span>
                  <strong>{rupiah(packages[2].price)}</strong>
                </div>
                <small>{`${packages[2].portions}x makan`}</small>
              </div>
              {"\n"}
              <div className="price-option">
                <div>
                  <span>{"Bulanan"}</span>
                  <strong>{rupiah(packages[3].price)}</strong>
                </div>
                <small>{`${packages[3].portions}x makan`}</small>
              </div>
              {"\n"}
            </div>
            <a
              className="btn btn-outline choose-subscription"
              href="#pesan"
              data-registration-cta
            >
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
            </a>
          </article>
          {"\n"}
          <article className="price-card ">
            <div className="price-ordinal">
              <svg
                className="package-icon"
                xmlns="http://www.w3.org/2000/svg"
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
                <path d="M20.9 13.1A9 9 0 0 1 10.9 3.1 9 9 0 1 0 20.9 13.1Z"></path>
              </svg>
              <span>{"Paket 03"}</span>
            </div>
            <h3>{packages[4].title}</h3>
            <p className="package-nickname">{packages[4].schedule}</p>
            <p className="price-description">
              {"Setelah seharian beraktivitas, waktunya menikmati makan malam."}
            </p>
            <div className="price-options">
              {"\n"}
              <div className="price-option">
                <div>
                  <span>{"Mingguan"}</span>
                  <strong>{rupiah(packages[4].price)}</strong>
                </div>
                <small>{`${packages[4].portions}x makan`}</small>
              </div>
              {"\n"}
              <div className="price-option">
                <div>
                  <span>{"Bulanan"}</span>
                  <strong>{rupiah(packages[5].price)}</strong>
                </div>
                <small>{`${packages[5].portions}x makan`}</small>
              </div>
              {"\n"}
            </div>
            <a
              className="btn btn-outline choose-subscription"
              href="#pesan"
              data-registration-cta
            >
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
            </a>
          </article>
          {"\n"}
        </div>
        <div className="trial-addon-grid">
          <article className="compact-package">
            <div>
              <p className="eyebrow">{"Trial · 3 Hari"}</p>
              <h3>{"Paket Magang"}</h3>
              <p>{"Pilihan trial 3 hari untuk kamu yang ingin mencoba."}</p>
            </div>
            <div className="compact-prices">
              <span>{"Siang atau malam · 3x"}</span>
              <strong>{rupiah(packages[6].price)}</strong>
              <span>{"Siang dan malam · 6x"}</span>
              <strong>{rupiah(packages[8].price)}</strong>
              <a
                className="btn btn-outline"
                href="#pesan"
                data-registration-cta
              >
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
              </a>
            </div>
          </article>
          <article className="compact-package">
            <div>
              <p className="eyebrow">{"Add-on Weekend"}</p>
              <h3>{"Paket Mager"}</h3>
              <p>
                {"Rencana makan enak di akhir pekan, tanpa perlu keluar rumah."}
              </p>
            </div>
            <div className="compact-prices">
              <span>{"Siang atau malam · 2x"}</span>
              <strong>{"Rp80.000"}</strong>
              <span>{"Siang dan malam · 4x"}</span>
              <strong>{"Rp160.000"}</strong>
              <p>{"Sabtu & Minggu"}</p>
            </div>
          </article>
        </div>
        <p className="addon-note">
          {
            "Add-on akhir pekan merupakan tambahan untuk paket utama. Nantinya, pemesanan dilakukan bersamaan dengan paket utama atau paling lambat Jumat pukul 18.00 sebelum akhir pekan."
          }
        </p>
      </div>
    </section>
  );
}
