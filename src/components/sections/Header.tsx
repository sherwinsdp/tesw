export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="/" aria-label="MakanHati — halaman utama">
          <img
            src="/assets/brand/makanhati-logo.webp"
            width="65"
            height="58"
            alt=""
          />
          <span>
            {"Makan"}
            <span className="brand-accent">{"Hati"}</span>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Navigasi utama">
          <a href="#menu">{"Menu"}</a>
          <a href="#keunggulan">{"Kenapa MakanHati?"}</a>
          <a href="#paket">{"Paket"}</a>
          <a href="#faq">{"FAQ"}</a>
          <a className="btn btn-primary" href="#pesan">
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
        </nav>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded="false"
          aria-controls="mobile-nav"
        >
          {"Menu "}
          <span aria-hidden="true">{"☰"}</span>
        </button>
      </div>
      <nav
        id="mobile-nav"
        className="container mobile-nav"
        aria-label="Navigasi mobile"
        hidden
      >
        <a href="#menu">{"Menu"}</a>
        <a href="#keunggulan">{"Kenapa MakanHati?"}</a>
        <a href="#paket">{"Paket"}</a>
        <a href="#faq">{"FAQ"}</a>
        <a className="btn btn-primary" href="#pesan">
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
      </nav>
    </header>
  );
}
