const artikel = [
  //{titel: "Haus bauen für Anfänger", link: "haus-bauen.html"},
  {titel: "Seine Social-Media Accounts", link: "sozial.html"},
  {titel: "Das tolle Team von einjonas", link: "Team.html"},
  {titel: "Das Ende?", link: "Ende.html"}
];

function suchen() {
  const query = document.getElementById('suche').value.toLowerCase();

  const ergebnisse = artikel.filter(a =>
    a.titel.toLowerCase().includes(query)
  );

  document.getElementById('ergebnisse').innerHTML =
    ergebnisse.length > 0
      ? ergebnisse.map(a => `<a href="${a.link}">${a.titel}</a><br>`).join('')
      : 'Es gab leider kein Ergebnis! Falls Sie etwas ergänzen wollen, kontaktieren Sie bitte einjonasmanagement@outlook.de . Danke!';
}