import Image from "next/image";

const hobbies = [
  {
    src: "/stickers/guitar.png",
    label: "Guitare",
    color: "card-sunshine",
    body: "Surtout de l'acoustique. Un bon moyen de décrocher de l'écran et de faire autre chose de mes mains.",
  },
  {
    src: "/stickers/headphones.svg",
    label: "Musique",
    color: "card-peach",
    body: "Toujours un casque sur les oreilles quand je code. Un peu de tout, selon l'humeur du moment.",
  },
  {
    src: "/stickers/gamepad.svg",
    label: "Jeux vidéo",
    color: "card-sky",
    body: "Des heures sur des jeux que je ne finis jamais — et une pile qui ne cesse de grandir.",
  },
];

export function AboutHobbies() {
  return (
    <section aria-label="À côté du code" className="bg-mint border-b-[2.5px] border-ink py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <span className="section-label">À côté du code</span>
          <h2 className="mt-4">
            Guitare,
            <br />
            <em>musique</em>, jeux vidéo.
          </h2>
        </div>

        <div className="grid-3" style={{ maxWidth: "900px", margin: "0 auto" }}>
          {hobbies.map(({ src, label, color, body }) => (
            <div key={label} className={`card ${color} text-center`}>
              <Image
                src={src}
                alt=""
                width={100}
                height={100}
                aria-hidden
                className="sticker-hobby block mx-auto"
              />
              <h3>{label}</h3>
              <p style={{ fontSize: "0.95rem", marginBottom: 0 }}>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
