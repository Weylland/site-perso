import Image from "next/image";
import Link from "next/link";

export function ServicesNotListed() {
  return (
    <section aria-label="Besoin non listé" className="bg-sky border-b-[2.5px] border-ink py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="bg-cream border-[2.5px] border-ink shadow-brutal max-w-[760px] mx-auto p-10 text-center">
          <Image
            src="/stickers/plus.svg"
            alt=""
            aria-hidden
            width={80}
            height={80}
            className="block mx-auto mb-6"
            style={{ filter: "drop-shadow(5px 5px 0 var(--color-ink))" }}
          />
          <h2 className="text-[1.6rem]">
            Ton besoin n&apos;est <em>pas dans la liste</em>&nbsp;?
          </h2>
          <p className="mt-5 max-w-[54ch] mx-auto text-[1.1rem] opacity-80">
            Ces formules ne sont qu&apos;un point de départ. Refonte, connexion entre tes outils,
            migration, outil interne sur mesure, récupération de données, dépannage urgent…
            décris-moi ce que tu as en tête, je te dis comment je peux t&apos;aider et comment je
            m&apos;y prends.
          </p>
          <p className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center font-semibold border-[2.5px] border-ink bg-sunshine text-ink shadow-brutal transition-[transform_150ms_ease-out,box-shadow_150ms_ease-out] hover:translate-x-1 hover:translate-y-1 hover:shadow-none px-8 py-[1.1rem] text-[1.05rem]"
            >
              Me poser la question
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
