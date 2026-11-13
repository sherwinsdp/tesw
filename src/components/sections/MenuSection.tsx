export default function MenuSection() {
  return (
    <section
      className="section menu-section"
      id="menu"
      aria-labelledby="menu-heading"
    >
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">{"Pilihan Menu"}</p>
          <h2 id="menu-heading">
            {"Lagi pengen rasa "}
            <em>{"yang mana?"}</em>
          </h2>
          <p>
            {
              "Tiga pilihan rasa untuk mood kamu. Kenali contoh menu harian kami."
            }
          </p>
        </div>
        <div className="day-control">
          <button
            type="button"
            id="previous-day"
            aria-label="Hari sebelumnya"
            aria-controls="menu-cards"
          >
            {"←"}
          </button>
          <div className="day-label">
            <p>{"Contoh Menu Harian"}</p>
            <h3 id="menu-day" aria-live="polite" aria-atomic="true">
              {"Senin"}
            </h3>
          </div>
          <button
            type="button"
            id="next-day"
            aria-label="Hari berikutnya"
            aria-controls="menu-cards"
          >
            {"→"}
          </button>
        </div>
        <div id="menu-cards" aria-label="Menu Senin" role="group">
          <div className="menu-grid" data-day="Senin">
            {"\n"}
            <div className="menu-column" data-category="gurih">
              <h3 className="menu-category">{"Si Paling Gurih"}</h3>
              <article className="menu-card">
                <img
                  className="menu-photo"
                  src="/assets/menu/senin-gurih.webp"
                  width="1024"
                  height="1280"
                  alt="Ayam Teriyaki: Nasi putih, ayam teriyaki, bawang bombay, wortel, buncis, wijen."
                  loading="lazy"
                />
                <div className="menu-body">
                  <h4>{"Ayam Teriyaki"}</h4>
                  <p>
                    {
                      "Nasi putih dengan ayam teriyaki, bawang bombay, wortel, buncis, dan taburan wijen."
                    }
                  </p>
                </div>
              </article>
            </div>
            {"\n"}
            <div className="menu-column" data-category="pedas">
              <h3 className="menu-category">{"Si Paling Pedas"}</h3>
              <article className="menu-card">
                <img
                  className="menu-photo"
                  src="/assets/menu/senin-pedas.webp"
                  width="1024"
                  height="1280"
                  alt="Ayam Sambal Bawang: Nasi putih, ayam potong, sambal bawang, buncis, wortel, bawang goreng."
                  loading="lazy"
                />
                <div className="menu-body">
                  <h4>{"Ayam Sambal Bawang"}</h4>
                  <p>
                    {
                      "Nasi putih dengan ayam sambal bawang, buncis, wortel, dan taburan bawang goreng."
                    }
                  </p>
                </div>
              </article>
            </div>
            {"\n"}
            <div className="menu-column" data-category="creamy">
              <h3 className="menu-category">{"Si Paling Creamy"}</h3>
              <article className="menu-card">
                <img
                  className="menu-photo"
                  src="/assets/menu/senin-creamy.webp"
                  width="1024"
                  height="1280"
                  alt="Creamy Garlic Chicken: Nasi putih, ayam potong, saus creamy garlic, brokoli, wortel, parsley."
                  loading="lazy"
                />
                <div className="menu-body">
                  <h4>{"Creamy Garlic Chicken"}</h4>
                  <p>
                    {
                      "Nasi putih dengan ayam saus creamy garlic, brokoli, wortel, dan parsley."
                    }
                  </p>
                </div>
              </article>
            </div>
            {"\n"}
          </div>
          <div className="menu-grid" data-day="Selasa" hidden>
            {"\n"}
            <div className="menu-column" data-category="gurih">
              <h3 className="menu-category">{"Si Paling Gurih"}</h3>
              <article className="menu-card">
                <img
                  className="menu-photo"
                  src="/assets/menu/selasa-gurih.webp"
                  width="1024"
                  height="1280"
                  alt="Chicken Bolognese: Spaghetti, ayam cincang, saus tomat, bawang bombay, bawang putih, parsley."
                  loading="lazy"
                />
                <div className="menu-body">
                  <h4>{"Chicken Bolognese"}</h4>
                  <p>
                    {
                      "Spaghetti dengan ayam cincang, saus tomat, bawang bombay, bawang putih, dan parsley."
                    }
                  </p>
                </div>
              </article>
            </div>
            {"\n"}
            <div className="menu-column" data-category="pedas">
              <h3 className="menu-category">{"Si Paling Pedas"}</h3>
              <article className="menu-card">
                <img
                  className="menu-photo"
                  src="/assets/menu/selasa-pedas.webp"
                  width="1024"
                  height="1280"
                  alt="Spaghetti Aglio Olio Chicken: Spaghetti, ayam potong, bawang putih, cabai, parsley, brokoli."
                  loading="lazy"
                />
                <div className="menu-body">
                  <h4>{"Spaghetti Aglio Olio Chicken"}</h4>
                  <p>
                    {
                      "Spaghetti dengan ayam, bawang putih, cabai, parsley, dan brokoli."
                    }
                  </p>
                </div>
              </article>
            </div>
            {"\n"}
            <div className="menu-column" data-category="creamy">
              <h3 className="menu-category">{"Si Paling Creamy"}</h3>
              <article className="menu-card">
                <img
                  className="menu-photo"
                  src="/assets/menu/selasa-creamy.webp"
                  width="1024"
                  height="1280"
                  alt="Chicken Carbonara: Spaghetti, ayam potong, saus carbonara creamy, keju, lada hitam, parsley."
                  loading="lazy"
                />
                <div className="menu-body">
                  <h4>{"Chicken Carbonara"}</h4>
                  <p>
                    {
                      "Spaghetti dengan ayam, saus carbonara creamy, keju, lada hitam, dan parsley."
                    }
                  </p>
                </div>
              </article>
            </div>
            {"\n"}
          </div>
          <div className="menu-grid" data-day="Rabu" hidden>
            {"\n"}
            <div className="menu-column" data-category="gurih">
              <h3 className="menu-category">{"Si Paling Gurih"}</h3>
              <article className="menu-card">
                <img
                  className="menu-photo"
                  src="/assets/menu/rabu-gurih.webp"
                  width="1024"
                  height="1280"
                  alt="Ikan Asam Manis: Nasi putih, fillet ikan goreng, saus asam manis, paprika, bawang bombay."
                  loading="lazy"
                />
                <div className="menu-body">
                  <h4>{"Ikan Asam Manis"}</h4>
                  <p>
                    {
                      "Nasi putih dengan fillet ikan goreng, saus asam manis, paprika, dan bawang bombay."
                    }
                  </p>
                </div>
              </article>
            </div>
            {"\n"}
            <div className="menu-column" data-category="pedas">
              <h3 className="menu-category">{"Si Paling Pedas"}</h3>
              <article className="menu-card">
                <img
                  className="menu-photo"
                  src="/assets/menu/rabu-pedas.webp"
                  width="1024"
                  height="1280"
                  alt="Ikan Dabu-Dabu: Nasi putih, fillet ikan panggang/goreng, sambal dabu-dabu (tomat, cabai rawit, bawang merah, jeruk nipis), buncis, wortel."
                  loading="lazy"
                />
                <div className="menu-body">
                  <h4>{"Ikan Dabu-Dabu"}</h4>
                  <p>
                    {
                      "Nasi putih dengan fillet ikan, sambal dabu-dabu dari tomat, cabai rawit, bawang merah, dan jeruk nipis, serta buncis dan wortel."
                    }
                  </p>
                </div>
              </article>
            </div>
            {"\n"}
            <div className="menu-column" data-category="creamy">
              <h3 className="menu-category">{"Si Paling Creamy"}</h3>
              <article className="menu-card">
                <img
                  className="menu-photo"
                  src="/assets/menu/rabu-creamy.webp"
                  width="1024"
                  height="1280"
                  alt="Creamy Lemon Fish: Nasi putih, fillet ikan, saus creamy lemon, brokoli, wortel, parsley."
                  loading="lazy"
                />
                <div className="menu-body">
                  <h4>{"Creamy Lemon Fish"}</h4>
                  <p>
                    {
                      "Nasi putih dengan fillet ikan, saus creamy lemon, brokoli, wortel, dan parsley."
                    }
                  </p>
                </div>
              </article>
            </div>
            {"\n"}
          </div>
          <div className="menu-grid" data-day="Kamis" hidden>
            {"\n"}
            <div className="menu-column" data-category="gurih">
              <h3 className="menu-category">{"Si Paling Gurih"}</h3>
              <article className="menu-card">
                <img
                  className="menu-photo"
                  src="/assets/menu/kamis-gurih.webp"
                  width="1024"
                  height="1280"
                  alt="Beef Yakiniku: Nasi putih, beef slice 70–80 g, saus yakiniku, bawang bombay, wijen, sayur pelengkap."
                  loading="lazy"
                />
                <div className="menu-body">
                  <h4>{"Beef Yakiniku"}</h4>
                  <p>
                    {
                      "Nasi putih dengan beef slice, saus yakiniku, bawang bombay, wijen, dan sayur pelengkap."
                    }
                  </p>
                </div>
              </article>
            </div>
            {"\n"}
            <div className="menu-column" data-category="pedas">
              <h3 className="menu-category">{"Si Paling Pedas"}</h3>
              <article className="menu-card">
                <img
                  className="menu-photo"
                  src="/assets/menu/kamis-pedas.webp"
                  width="1024"
                  height="1280"
                  alt="Beef Cabe Ijo: Nasi putih, beef slice 70–80 g, cabai hijau, cabai rawit hijau, bawang merah, bawang putih, bawang bombay, buncis."
                  loading="lazy"
                />
                <div className="menu-body">
                  <h4>{"Beef Cabe Ijo"}</h4>
                  <p>
                    {
                      "Nasi putih dengan beef slice, cabai hijau, cabai rawit hijau, bawang merah, bawang putih, bawang bombay, dan buncis."
                    }
                  </p>
                </div>
              </article>
            </div>
            {"\n"}
            <div className="menu-column" data-category="creamy">
              <h3 className="menu-category">{"Si Paling Creamy"}</h3>
              <article className="menu-card">
                <img
                  className="menu-photo"
                  src="/assets/menu/kamis-creamy.webp"
                  width="1024"
                  height="1280"
                  alt="Creamy Mushroom Beef: Nasi putih, beef slice 70–80 g, saus creamy mushroom, jamur, lada hitam, buncis."
                  loading="lazy"
                />
                <div className="menu-body">
                  <h4>{"Creamy Mushroom Beef"}</h4>
                  <p>
                    {
                      "Nasi putih dengan beef slice, saus creamy mushroom, jamur, lada hitam, dan buncis."
                    }
                  </p>
                </div>
              </article>
            </div>
            {"\n"}
          </div>
          <div className="menu-grid" data-day="Jumat" hidden>
            {"\n"}
            <div className="menu-column" data-category="gurih">
              <h3 className="menu-category">{"Si Paling Gurih"}</h3>
              <article className="menu-card">
                <img
                  className="menu-photo"
                  src="/assets/menu/jumat-gurih.webp"
                  width="1024"
                  height="1280"
                  alt="Mie Kecap Ayam: Mie telur, ayam kecap, sawi hijau, bawang putih, daun bawang."
                  loading="lazy"
                />
                <div className="menu-body">
                  <h4>{"Mie Kecap Ayam"}</h4>
                  <p>
                    {
                      "Mie telur dengan ayam kecap, sawi hijau, bawang putih, dan daun bawang."
                    }
                  </p>
                </div>
              </article>
            </div>
            {"\n"}
            <div className="menu-column" data-category="pedas">
              <h3 className="menu-category">{"Si Paling Pedas"}</h3>
              <article className="menu-card">
                <img
                  className="menu-photo"
                  src="/assets/menu/jumat-pedas.webp"
                  width="1024"
                  height="1280"
                  alt="Mie Chili Oil Chicken: Mie telur, ayam potong, chili oil, sawi hijau, daun bawang, bawang goreng."
                  loading="lazy"
                />
                <div className="menu-body">
                  <h4>{"Mie Chili Oil Chicken"}</h4>
                  <p>
                    {
                      "Mie telur dengan ayam, chili oil, sawi hijau, daun bawang, dan bawang goreng."
                    }
                  </p>
                </div>
              </article>
            </div>
            {"\n"}
            <div className="menu-column" data-category="creamy">
              <h3 className="menu-category">{"Si Paling Creamy"}</h3>
              <article className="menu-card">
                <img
                  className="menu-photo"
                  src="/assets/menu/jumat-creamy.webp"
                  width="1024"
                  height="1280"
                  alt="Mie Creamy Chicken Mushroom: Mie telur, ayam potong, saus creamy, jamur, sawi hijau, lada hitam."
                  loading="lazy"
                />
                <div className="menu-body">
                  <h4>{"Mie Creamy Chicken Mushroom"}</h4>
                  <p>
                    {
                      "Mie telur dengan ayam, saus creamy, jamur, sawi hijau, dan lada hitam."
                    }
                  </p>
                </div>
              </article>
            </div>
            {"\n"}
          </div>
        </div>
        <p className="menu-photo-note">
          {
            "Foto adalah ilustrasi menu yang dibuat dengan AI berdasarkan bahan setiap hidangan."
          }
        </p>
        <div className="menu-bottom-line" aria-hidden="true"></div>
      </div>
    </section>
  );
}
