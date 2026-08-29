window.GUIDE_STEPS=[{"mech": "Placement", "t": 8, "txt": "Naj'entus au centre, le raid s'étale largement. Les corps-à-corps se répartissent en <strong>plusieurs petits groupes</strong> plutôt qu'un seul paquet, et personne ne reste à moins de six mètres d'un autre joueur."}, {"mech": "Épine", "t": 9, "txt": "Trois joueurs au hasard toutes les vingt secondes, dégâts physiques plus un éclat de givre qui touche <strong>tout le monde dans six mètres</strong> autour d'eux. C'est ce qui rend l'écartement obligatoire, pas optionnel."}, {"mech": "Épine de Perforation", "t": 9, "txt": "Un joueur est <strong>transpercé et étourdi</strong>, avec des dégâts continus tant qu'il reste empalé. N'importe qui peut cliquer l'écharde pour le libérer — et celui qui la récupère <strong>la garde</strong>, elle sert plus tard.", "focus": ["rdps", "healer"]}, {"mech": "Bouclier de Flots", "t": 9, "txt": "Naj'entus devient <strong>immunisé et se régénère</strong> chaque seconde. Sans réduction de soins en continu — Poison de Blessure, Frappe Mortelle — tout le DPS accumulé avant le bouclier repart en fumée pendant qu'il dure.", "focus": ["mdps"]}, {"mech": "Jaillissement de Flots", "t": 9, "txt": "C'est l'écharde récupérée qu'on lui relance pour casser le bouclier. <strong>Personne ne la lance avant que le raid soit à pleine vie</strong> : le Jaillissement de Flots qui suit frappe tout le monde d'un coup, et les plus fragiles n'y survivent pas si l'ordre est donné trop tôt."}];
window.GUIDE_SETUP=({pc,NS,stage})=>{
// mise à l'échelle 100% CSS (min() avec vw/vh) — plus de calcul JS, plus de bug de timing au chargement

const R=['tank','healer','mdps','mdps','healer','rdps','mdps','mdps','rdps','healer','rdps','mdps',
         'mdps','healer','rdps','mdps','rdps','healer','rdps','mdps','rdps','rdps','mdps','rdps','rdps'];
for(let n=0;n<25;n++){
  const a=(n/25)*Math.PI*2+0.35, r=(R[n]==='mdps'||R[n]==='tank')?150:(n%2?255:335);
  pc(Math.cos(a)*r, Math.sin(a)*r, R[n]);
}



};
