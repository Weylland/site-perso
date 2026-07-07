export type ContactSubmission = {
  nom: string;
  email: string;
  structure?: string;
  type: string;
  budget?: string;
  delai?: string;
  message: string;
};

const BUDGET_LABELS: Record<string, string> = {
  lt1500: "< 1 500 €",
  "1500-5000": "1 500 – 5 000 €",
  "5000-15000": "5 000 – 15 000 €",
  gt15000: "> 15 000 €",
  unknown: "Je ne sais pas encore",
};

const DELAI_LABELS: Record<string, string> = {
  urgent: "Urgent (sous 2 semaines)",
  "1mois": "Sous 1 mois",
  "3mois": "Sous 3 mois",
  libre: "Pas de contrainte forte",
};

function budgetLabel(value?: string) {
  return value ? (BUDGET_LABELS[value] ?? value) : undefined;
}

function delaiLabel(value?: string) {
  return value ? (DELAI_LABELS[value] ?? value) : undefined;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function htmlRow(label: string, value: string) {
  return `
    <tr>
      <td style="padding:10px 0;border-bottom:2px solid #0A0A0A;">
        <div style="font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.04em;color:#0A0A0A;opacity:0.6;">${label}</div>
        <div style="font-family:Arial,Helvetica,sans-serif;font-size:16px;color:#0A0A0A;margin-top:2px;">${escapeHtml(value)}</div>
      </td>
    </tr>`;
}

export function buildContactEmailHtml(data: ContactSubmission): string {
  const rows = [
    htmlRow("Nom", data.nom),
    htmlRow("Email", data.email),
    data.structure && htmlRow("Structure", data.structure),
    htmlRow("Type de demande", data.type),
    budgetLabel(data.budget) && htmlRow("Budget estimé", budgetLabel(data.budget) as string),
    delaiLabel(data.delai) && htmlRow("Délai idéal", delaiLabel(data.delai) as string),
  ]
    .filter(Boolean)
    .join("");

  const message = escapeHtml(data.message).replace(/\n/g, "<br>");

  return `<!DOCTYPE html>
<html lang="fr">
  <body style="margin:0;padding:0;background-color:#F8F1E3;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F8F1E3;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background-color:#FEFAF3;border:3px solid #0A0A0A;">
            <tr>
              <td style="background-color:#FFD93D;border-bottom:3px solid #0A0A0A;padding:24px 32px;">
                <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#0A0A0A;">nicolas-samier.fr</p>
                <p style="margin:6px 0 0;font-family:Georgia,'Times New Roman',serif;font-size:24px;font-weight:700;color:#0A0A0A;">Nouveau message de contact</p>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 32px 8px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  ${rows}
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 32px 32px;">
                <div style="font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.04em;color:#0A0A0A;opacity:0.6;margin-bottom:6px;">Message</div>
                <div style="background-color:#FFB892;border:2.5px solid #0A0A0A;padding:16px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.55;color:#0A0A0A;">
                  ${message}
                </div>
              </td>
            </tr>
            <tr>
              <td style="background-color:#0A0A0A;padding:16px 32px;">
                <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#FEFAF3;">Envoyé depuis le formulaire de contact de nicolas-samier.fr</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export function buildContactEmailText(data: ContactSubmission): string {
  return [
    `Nom : ${data.nom}`,
    `Email : ${data.email}`,
    data.structure && `Structure : ${data.structure}`,
    `Type de projet : ${data.type}`,
    budgetLabel(data.budget) && `Budget estimé : ${budgetLabel(data.budget)}`,
    delaiLabel(data.delai) && `Délai : ${delaiLabel(data.delai)}`,
    "",
    data.message,
  ]
    .filter(Boolean)
    .join("\n");
}
