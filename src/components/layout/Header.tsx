import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-[100] bg-cream/90 backdrop-blur-md border-b-[2.5px] border-ink">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between gap-4 px-8 py-[0.9rem]">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="relative inline-flex items-center justify-center w-11 h-11 bg-peach border-[2.5px] border-ink shadow-brutal font-display font-bold text-[1.15rem] overflow-hidden transition-[transform_150ms_ease-out,box-shadow_150ms_ease-out,background-color_200ms_ease-out] group-hover:translate-x-1 group-hover:translate-y-1 group-hover:rotate-[-4deg] group-hover:shadow-none group-hover:bg-sunshine">
            NS
            <span
              aria-hidden
              className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.4)_0%,transparent_50%)]"
            ></span>
          </span>
          <span className="font-display font-semibold text-[1.05rem] tracking-[-0.01em] hidden sm:inline">
            Nicolas Samier
          </span>
        </Link>

        <nav className="flex items-center gap-7 flex-wrap">
          <Link href="/services" className="nav-link hidden min-[820px]:inline">
            Services
          </Link>
          <Link href="/a-propos" className="nav-link hidden min-[820px]:inline">
            À propos
          </Link>
          <Link href="/templates" className="nav-link hidden min-[820px]:inline">
            Templates
          </Link>
          <Link href="/contact" className="nav-link hidden min-[820px]:inline">
            Contact
          </Link>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-4 py-[0.6rem] bg-sunshine border-[2.5px] border-ink shadow-brutal font-sans font-semibold text-[0.9rem] transition-[transform_150ms_ease-out,box-shadow_150ms_ease-out,background-color_200ms_ease-out] hover:translate-x-1 hover:translate-y-1 hover:shadow-none hover:bg-sunshine-2 cursor-pointer"
          >
            Discuter d&apos;un projet
            <span
              aria-hidden
              className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1 group-hover:-rotate-12"
            >
              →
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
