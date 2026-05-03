import Image from "next/image";

export function ContactAlternatives() {
  return (
    <section
      aria-label="Autres canaux de contact"
      className="section-dots border-b-[2.5px] border-ink"
    >
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className="bg-cream border-[2.5px] border-ink shadow-brutal max-w-[760px] mx-auto p-8 mb-16 text-center">
          <span className="section-label">Autres canaux</span>
          <h2 className="mt-4">
            Ou <em>directement</em>.
          </h2>
          <p className="mt-4 text-[1.05rem] max-w-[50ch] mx-auto">
            Si le formulaire te freine, voici les trois autres points d&apos;entrée.
          </p>
        </div>

        <div className="card-grid">
          <a href="mailto:samiernicolas62@gmail.com" className="card card-sunshine text-center">
            <Image
              src="/stickers/envelope.svg"
              alt=""
              width={72}
              height={72}
              aria-hidden
              className="sticker-card mx-auto"
            />
            <h3>Email</h3>
            <p className="mt-2 text-[0.95rem]">samiernicolas62@gmail.com</p>
            <span className="link-cta mt-4 mx-auto">Ouvrir mon mail</span>
          </a>

          <a
            href="#"
            className="card card-sky text-center"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              src="/stickers/linkedin.svg"
              alt=""
              width={72}
              height={72}
              aria-hidden
              className="sticker-card mx-auto"
            />
            <h3>LinkedIn</h3>
            <p className="mt-2 text-[0.95rem]">Nicolas Samier · parcours, missions, posts.</p>
            <span className="link-cta mt-4 mx-auto">Voir le profil</span>
          </a>

          <a href="/a-propos#cv" className="card card-mint text-center">
            <Image
              src="/stickers/document.svg"
              alt=""
              width={72}
              height={72}
              aria-hidden
              className="sticker-card mx-auto"
            />
            <h3>CV PDF</h3>
            <p className="mt-2 text-[0.95rem]">Format recruteur, 1 page, à jour.</p>
            <span className="link-cta mt-4 mx-auto">Télécharger</span>
          </a>
        </div>
      </div>
    </section>
  );
}
