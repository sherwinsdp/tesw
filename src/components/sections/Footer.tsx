export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-bar">
          <a
            className="footer-brand"
            href="/"
            aria-label="MakanHati — halaman utama"
          >
            <img
              src="/assets/brand/makanhati-logo.webp"
              alt="MakanHati"
              width="76"
              height="68"
              loading="lazy"
            />
          </a>
          <nav className="social-links" aria-label="Media sosial MakanHati">
            <a
              className="social-link"
              href="https://www.instagram.com/makanhati.catering"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram MakanHati"
            >
              <svg
                className="social-icon"
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
                <rect x="3" y="3" width="18" height="18" rx="5"></rect>
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M17.5 6.5h.01"></path>
              </svg>
              <span>{"@makanhati.catering"}</span>
            </a>
            <a
              className="social-link"
              href="https://web.facebook.com/profile.php?id=61596128536440&rdid=vqlYlXfd0ND9UICH&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2F1MmbrL84dQ%2F%3F_rdc%3D1%26_rdr#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook MakanHati"
            >
              <svg
                className="social-icon"
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
                <path d="M14 21v-8h3l.5-4H14V7c0-1.1.3-2 2-2h2V1.4A25 25 0 0 0 15.1 1C12.2 1 10 2.8 10 6.3V9H7v4h3v8"></path>
              </svg>
              <span>{"MakanHati"}</span>
            </a>
            <a
              className="social-link"
              href="https://www.linkedin.com/company/makanhati-catering/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn MakanHati"
            >
              <svg
                className="social-icon"
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
                <rect x="2.5" y="2.5" width="19" height="19" rx="2"></rect>
                <path d="M7 10v7M7 7h.01M11 17v-7M11 13a3 3 0 0 1 6 0v4"></path>
              </svg>
              <span>{"MakanHati"}</span>
            </a>
          </nav>
          <p className="footer-copyright">{"© 2026 MakanHati"}</p>
        </div>
        <div className="footer-meta">
          <div>
            <a href="mailto:info.makanhati@gmail.com">
              {"info.makanhati@gmail.com"}
            </a>
            <span className="footer-separator" aria-hidden="true">
              {"·"}
            </span>
            <span>{"Kuningan, Jakarta Selatan"}</span>
          </div>
          <div className="footer-legal">
            <a href="/kebijakan-privasi">{"Kebijakan Privasi"}</a>
            <a href="/syarat-layanan">{"Syarat Layanan"}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
