export default function MobileCTA() {
  return (
    <div className="mobile-sticky is-hidden" id="mobile-sticky">
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
    </div>
  );
}
