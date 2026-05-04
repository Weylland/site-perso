import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Conditions générales de vente — Nicolas Samier",
  description:
    "Conditions générales de vente pour les prestations de services et les templates numériques de Nicolas Samier.",
};

export default function CgvPage() {
  return (
    <main>
      <section
        aria-label="Conditions générales de vente"
        className="bg-cream border-b-[2.5px] border-ink"
      >
        <div className="max-w-7xl mx-auto px-8 py-24 text-center">
          <span className="eyebrow">Règles de vente · Services &amp; Templates numériques</span>
          <h1 className="mt-6">
            Conditions générales de <span className="highlight-sunshine">vente</span>.
          </h1>
          <p className="mt-6 text-[1.15rem] opacity-80 max-w-[52ch] mx-auto leading-relaxed">
            Les règles qui encadrent les prestations de services et la vente de templates
            numériques. Lecture rapide, sans jargon inutile.
          </p>
        </div>
      </section>

      <section
        aria-label="Contenu des conditions générales de vente"
        className="bg-cream border-b-[2.5px] border-ink"
      >
        <div className="max-w-[760px] mx-auto px-8 py-24">
          <h2>1. Objet</h2>
          <p className="mt-4 leading-relaxed">
            Les présentes conditions générales de vente régissent les relations entre{" "}
            <strong>Nicolas Samier</strong>, entrepreneur individuel, et toute personne physique ou
            morale souhaitant bénéficier d&apos;une prestation de services ou acheter un produit
            numérique via le site.
          </p>

          <h2 className="mt-12">2. Prestations de services</h2>
          <p className="mt-4 leading-relaxed">
            Les prestations (site vitrine, application web, automatisation n8n, TMA) font
            l&apos;objet d&apos;un <strong>devis détaillé préalable</strong>. Le devis précise le
            périmètre, les livrables, le planning, les conditions de paiement et la durée de
            validité. Toute commande implique l&apos;acceptation sans réserve du devis.
          </p>
          <p className="mt-4 leading-relaxed">
            Un <strong>acompte de 30 %</strong> est demandé à la signature. Le solde est réglé à la
            livraison, ou selon l&apos;échéancier prévu au devis pour les projets longs (missions
            récurrentes, TMA mensualisée).
          </p>
          <p className="mt-4 leading-relaxed">
            Les délais de paiement sont de <strong>30 jours</strong> à compter de l&apos;émission de
            la facture, sauf mention contraire au devis. Un retard entraîne des pénalités au taux
            légal en vigueur, majorées d&apos;une indemnité forfaitaire de 40 € (articles L441-10 et
            D441-5 du Code de commerce).
          </p>

          <h2 className="mt-12">3. Templates numériques</h2>
          <p className="mt-4 leading-relaxed">
            Les templates (Notion, documents, ressources) sont vendus via le site ou une plateforme
            tierce (Stripe Checkout, Gumroad). Le paiement déclenche l&apos;
            <strong>envoi automatique</strong> d&apos;un lien de téléchargement ou d&apos;un lien
            d&apos;accès par courriel, à l&apos;adresse fournie lors de l&apos;achat.
          </p>
          <p className="mt-4 leading-relaxed">
            La licence accordée est une{" "}
            <strong>
              licence d&apos;usage personnel ou professionnel, non exclusive, non cessible
            </strong>
            . La redistribution, la revente et le partage public sont interdits. L&apos;utilisation
            en interne au sein d&apos;une même structure est autorisée.
          </p>

          <h2 className="mt-12">4. Droit de rétractation</h2>
          <p className="mt-4 leading-relaxed">
            Pour les{" "}
            <strong>
              produits numériques téléchargés ou rendus accessibles dès la confirmation du paiement
            </strong>
            , le droit de rétractation ne s&apos;applique pas (article L221-28 13° du Code de la
            consommation). L&apos;acheteur accepte expressément cette renonciation au moment de la
            commande en cochant la case dédiée.
          </p>
          <p className="mt-4 leading-relaxed">
            Malgré cela, j&apos;accorde volontairement une{" "}
            <strong>garantie de remboursement de 14 jours</strong> sur les templates, sans
            justification, en cas d&apos;insatisfaction. Demande par email, remboursement sous 48 h.
          </p>
          <p className="mt-4 leading-relaxed">
            Pour les prestations de services, le droit de rétractation de 14 jours s&apos;applique
            dans les conditions légales, sauf si la prestation a commencé avec l&apos;accord exprès
            du client avant l&apos;expiration du délai.
          </p>

          <h2 className="mt-12">5. Propriété intellectuelle</h2>
          <p className="mt-4 leading-relaxed">
            <strong>Prestations de services</strong> — les livrables spécifiques commandés (sites,
            applications, workflows) sont cédés au client après paiement intégral, à
            l&apos;exception des briques techniques réutilisables (composants, scripts, patterns
            génériques) développées par le prestataire, qui restent sa propriété.
          </p>
          <p className="mt-4 leading-relaxed">
            <strong>Templates</strong> — le fichier reste la propriété intellectuelle de Nicolas
            Samier ; seule une licence d&apos;usage est accordée à l&apos;acheteur.
          </p>

          <h2 className="mt-12">6. Responsabilité</h2>
          <p className="mt-4 leading-relaxed">
            Nicolas Samier s&apos;engage à fournir ses services avec le soin et la diligence
            attendus d&apos;un professionnel. Il ne saurait être tenu responsable des{" "}
            <strong>conséquences indirectes</strong> (perte de chiffre d&apos;affaires, de données,
            d&apos;image, de clientèle) liées à l&apos;utilisation des livrables ou des templates,
            ni des dysfonctionnements résultant d&apos;une modification effectuée par le client
            après livraison.
          </p>
          <p className="mt-4 leading-relaxed">
            La responsabilité totale est en tout état de cause plafonnée au montant payé par le
            client au titre de la prestation ou du produit concerné.
          </p>

          <h2 className="mt-12">7. Médiation &amp; litiges</h2>
          <p className="mt-4 leading-relaxed">
            En cas de litige, une solution amiable sera recherchée en priorité. Le client
            consommateur peut recourir gratuitement à un médiateur de la consommation (coordonnées
            communiquées sur demande).
          </p>
          <p className="mt-4 leading-relaxed">
            À défaut d&apos;accord amiable, les présentes conditions sont soumises au{" "}
            <strong>droit français</strong> et les tribunaux compétents seront ceux du ressort du
            siège de l&apos;éditeur.
          </p>

          <p className="note-small mt-12">Dernière mise à jour : 4 mai 2026.</p>
        </div>
      </section>

      <section aria-label="Autres pages légales" className="bg-mint border-b-[2.5px] border-ink">
        <div className="max-w-[760px] mx-auto px-8 py-24">
          <div className="mb-16 text-center">
            <span className="section-label">Autres pages légales</span>
            <h2 className="mt-4">Par ici.</h2>
          </div>
          <div className="grid grid-cols-1 min-[560px]:grid-cols-2 gap-6">
            <Link href="/mentions-legales" className="card flex flex-col gap-3">
              <h3>Mentions légales</h3>
              <p className="text-[0.92rem] leading-relaxed grow">
                Éditeur, hébergeur, propriété intellectuelle, responsabilité.
              </p>
              <span className="link-cta self-start">Lire les mentions</span>
            </Link>
            <Link href="/confidentialite" className="card flex flex-col gap-3">
              <h3>Politique de confidentialité</h3>
              <p className="text-[0.92rem] leading-relaxed grow">
                Données collectées, durée de conservation, droits RGPD.
              </p>
              <span className="link-cta self-start">Lire la politique</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
