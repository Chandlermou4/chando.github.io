window.GUIDE_STEPS=[{"mech": "Placement", "t": 8, "txt": "Anetheron reste au centre et le raid forme un <strong>cercle complet</strong> autour de lui. Ce n'est pas un combat où l'on se regroupe : les soigneurs prennent des positions assignées, éloignées les unes des autres.", "focus": null}, {"mech": "Vol de Charognards", "t": 10, "txt": "Un cône lancé <strong>dans une direction aléatoire</strong>, toutes les quinze secondes environ. Ceux qu'il touche soignent 75 % de moins pendant quinze secondes. Le tank dos au raid ne suffit pas : c'est l'écartement qui évite qu'un seul cône ne coupe tous vos soins d'un coup.", "focus": ["healer"]}, {"mech": "Sommeil", "t": 8, "txt": "Trois joueurs endormis pendant dix secondes. <strong>Ce n'est pas dissipable</strong>, ni par la Volonté des Réprouvés, ni par un totem, ni par un bijou. <strong>Le moindre dégât réveille</strong> — et c'est tant mieux : un DoT qui tourne, ou un Infernal amené à portée, relance un joueur endormi. Le vrai danger, c'est un soigneur clé endormi pendant que le raid encaisse — un autre couvre sans attendre.", "focus": null}, {"mech": "Inferno", "t": 11, "txt": "Toutes les soixante secondes, un météore tombe sur un joueur au hasard et l'étourdit. L'Infernal Monumental qui en sort est <strong>immunisé à la provocation</strong> : le second tank va le chercher, aidé d'une Diversion, et le tient près de Jaina — <strong>à plus de 25 mètres du boss</strong>. Les distants le brûlent, les corps-à-corps ne quittent jamais Anetheron.", "focus": ["tank", "rdps"]}, {"mech": "Aura Vampirique", "t": 9, "txt": "Il se soigne de <strong>300 % des dégâts qu'il inflige au corps-à-corps</strong>. Sans réduction de soins sur lui en permanence — Frappe Mortelle, Poison de Blessure, Tir Précis — le combat ne se termine pas avant l'enrage des dix minutes.", "focus": ["mdps", "rdps"]}];
window.GUIDE_SETUP=({pc,NS,stage})=>{
// mise à l'échelle 100% CSS (min() avec vw/vh) — plus de calcul JS, plus de bug de timing au chargement

// cercle complet et régulier autour du boss : c'est la parade au cône
const ROLES=['tank','healer','mdps','rdps','rdps','healer','rdps','mdps','rdps','healer','rdps','mdps',
             'rdps','healer','rdps','mdps','rdps','healer','rdps','mdps','rdps','healer','rdps','mdps','tank'];
for(let n=0;n<25;n++){
  const a=(n/25)*Math.PI*2-Math.PI/2, r=n%2?232:288;
  pc(Math.cos(a)*r, Math.sin(a)*r, ROLES[n]);
}



};
