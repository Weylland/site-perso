import Image from "next/image";
import Link from "next/link";

export function MerciHero() {
  return (
    <section
      aria-label="Confirmation d'envoi"
      className="relative overflow-hidden bg-sunshine border-b-[2.5px] border-ink pt-28 pb-24"
    >
      <div className="relative max-w-7xl mx-auto px-8 grid grid-cols-1 min-[900px]:grid-cols-[1.2fr_1fr] gap-16 items-center">
        <div>
          <span className="eyebrow mb-6 animate-[fade-in-up_0.8s_ease-out_0.05s_backwards]">
            Confirmation · message envoyé
          </span>

          <h1 className="mt-2 mb-7 animate-[fade-in-up_0.8s_ease-out_0.15s_backwards]">
            Message bien
            <br />
            <span className="highlight-peach">reçu</span>, <em>merci</em>.
          </h1>

          <p className="text-[1.2rem] max-w-[52ch] mb-9 leading-[1.55] animate-[fade-in-up_0.8s_ease-out_0.3s_backwards]">
            Je te réponds sous 48 h ouvrées, du lundi au vendredi. Un courriel de confirmation vient
            de partir à l&apos;adresse indiquée — pense à vérifier les spams si rien n&apos;arrive
            dans les 5 minutes.
          </p>

          <div className="flex gap-4 flex-wrap animate-[fade-in-up_0.8s_ease-out_0.42s_backwards]">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 px-6 py-[0.9rem] bg-ink text-cream border-[2.5px] border-ink shadow-brutal font-semibold text-base transition-[transform_150ms_ease-out,box-shadow_150ms_ease-out] hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            >
              Retour à l&apos;accueil
              <span
                aria-hidden
                className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1 group-hover:-rotate-12"
              >
                →
              </span>
            </Link>
            <Link
              href="#"
              className="inline-flex items-center gap-2 px-6 py-[0.9rem] bg-cream border-[2.5px] border-ink shadow-brutal font-semibold text-base transition-[transform_150ms_ease-out,box-shadow_150ms_ease-out] hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            >
              Voir les templates
            </Link>
          </div>
        </div>

        <div className="flex justify-center items-center animate-[fade-in_1s_ease-out_0.3s_backwards]">
          <Image
            src="/stickers/envelope.svg"
            alt=""
            width={260}
            height={260}
            aria-hidden
            className="w-[200px] min-[900px]:w-[260px] h-auto animate-[float_4s_ease-in-out_infinite]"
            style={{ filter: "drop-shadow(8px 8px 0 var(--color-ink))" }}
          />
        </div>
      </div>
    </section>
  );
}
