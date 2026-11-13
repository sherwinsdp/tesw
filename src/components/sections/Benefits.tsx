export default function Benefits() {
  return (
    <section
      className="benefits"
      id="keunggulan"
      aria-labelledby="benefits-heading"
    >
      <div className="container">
        <h2 id="benefits-heading">
          {"Kenapa "}
          <em>{"MakanHati?"}</em>
        </h2>
        <div className="benefits-doodle" aria-hidden="true">
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
        </div>
        <div className="benefit-grid">
          {"\n"}
          <article className="benefit-item">
            <span className="benefit-number" aria-hidden="true">
              {"01"}
            </span>
            <span className="benefit-icon">
              <svg
                className="section-icon"
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
                <circle cx="12" cy="12" r="9"></circle>
                <path d="M8 14s1.4 2 4 2 4-2 4-2M8 9h.01M16 9h.01"></path>
              </svg>
            </span>
            <h3>{"Mood-Based Preference"}</h3>
            <p>
              {
                "Gurih, pedas, atau creamy—pilih rasa yang sesuai dengan mood kamu."
              }
            </p>
          </article>
          {"\n"}
          <article className="benefit-item">
            <span className="benefit-number" aria-hidden="true">
              {"02"}
            </span>
            <span className="benefit-icon">
              <svg
                className="section-icon"
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
                <rect x="3" y="5" width="18" height="16" rx="3"></rect>
                <path d="M16 3v4M8 3v4M3 11h18M8 15h2M14 15h2M8 18h2"></path>
              </svg>
            </span>
            <h3>{"Menu Variatif Setiap Hari"}</h3>
            <p>
              {
                "Menu yang berganti setiap hari, supaya waktu makan kamu tidak terasa itu-itu saja."
              }
            </p>
          </article>
          {"\n"}
          <article className="benefit-item">
            <span className="benefit-number" aria-hidden="true">
              {"03"}
            </span>
            <span className="benefit-icon">
              <svg
                className="section-icon"
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
                <circle cx="12" cy="12" r="9"></circle>
                <path d="M12 7v5l3 2"></path>
              </svg>
            </span>
            <h3>{"Praktis untuk Aktivitas Padat"}</h3>
            <p>
              {
                "Kamu fokus beraktivitas. Urusan memasak dan mengantar makanan, biar kami yang menangani."
              }
            </p>
          </article>
          {"\n"}
          <article className="benefit-item">
            <span className="benefit-number" aria-hidden="true">
              {"04"}
            </span>
            <span className="benefit-icon">
              <svg
                className="section-icon"
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
                <path d="m3 10 9-7 9 7v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM9 21v-8h6v8"></path>
              </svg>
            </span>
            <h3>{"Home-style"}</h3>
            <p>
              {"Masakan rumahan yang familiar untuk menemani aktivitas kamu."}
            </p>
          </article>
          {"\n"}
        </div>
      </div>
    </section>
  );
}
