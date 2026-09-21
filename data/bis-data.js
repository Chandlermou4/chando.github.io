/* Squelette des listes BiS de WoW Forever.
 *
 * Volontairement vide de tout objet : au 20 septembre 2026, la bêta vient
 * d'ouvrir et personne ne connaît encore l'équipement optimal. Ce fichier ne
 * décrit donc que la charpente — les spécialisations et les emplacements —
 * pour que la page existe et que le remplissage soit mécanique le jour venu.
 *
 * Ce que ce n'est pas : un classement. Quand les objets arriveront, ce sera
 * d'abord une liste d'objets intéressants par emplacement, sans ordre — c'est
 * ce que fait wowtbc.gg, et c'est la seule chose honnête tant que personne n'a
 * simulé quoi que ce soit sur un jeu dont l'objet a été entièrement refondu.
 *
 * `items` reste un tableau vide sur chaque emplacement : la page affiche alors
 * son état « rien de connu ». Aucune liste inventée, aucun objet supposé.
 */
window.BIS_DATA = {
 "version": 1,
 "updatedAt": "2026-09-20",
 "status": "aucune liste publiée",
 "origin": "Charpente seule. Aucun objet n'est encore connu pour WoW Forever : la bêta a ouvert le 17 septembre 2026 et l'objet y a été entièrement refondu.",

 /* Emplacements d'équipement, dans l'ordre où le jeu les présente.
    `pair` marque les deux emplacements identiques (anneaux, bijoux).
    Le dernier emplacement dépend de la classe : voir `rangedSlot`. */
 "slots": [
  { "key": "head",     "fr": "Tête" },
  { "key": "neck",     "fr": "Cou" },
  { "key": "shoulder", "fr": "Épaules" },
  { "key": "back",     "fr": "Dos" },
  { "key": "chest",    "fr": "Torse" },
  { "key": "wrist",    "fr": "Poignets" },
  { "key": "hands",    "fr": "Mains" },
  { "key": "waist",    "fr": "Taille" },
  { "key": "legs",     "fr": "Jambes" },
  { "key": "feet",     "fr": "Pieds" },
  { "key": "finger",   "fr": "Anneau", "pair": true },
  { "key": "trinket",  "fr": "Bijou",  "pair": true },
  { "key": "mainhand", "fr": "Arme principale" },
  { "key": "offhand",  "fr": "Main gauche" }
 ],

 /* Le dernier emplacement, propre à chaque classe. */
 "rangedSlots": {
  "relic-idol":   { "fr": "Relique (idole)" },
  "relic-libram": { "fr": "Relique (libram)" },
  "relic-totem":  { "fr": "Relique (totem)" },
  "ranged":       { "fr": "À distance" },
  "wand":         { "fr": "Baguette" }
 },

 /* Les spécialisations suivent le découpage utile au butin, pas les arbres de
    talent : un même arbre compte deux entrées quand ses deux usages ne
    convoitent pas le même équipement. C'est le cas du druide farouche, tank ou
    dégâts, et du paladin sacré, qui soigne ou frappe.

    Le paladin sacré en dégâts, le « shockadin », est classé en mêlée et non à
    distance : il frappe au contact avec un sceau actif, le consomme au Jugement
    et intercale un Horion sacré. Ce n'est pas une lecture reprise d'un autre
    jeu, l'arbre Sacré de Forever l'écrit lui-même : on y trouve Frappe sacrée
    améliorée, qui porte sur une technique d'arme, Force divine, qui donne de la
    Force, et Sceaux améliorés. Conséquence pour le butin : une arme rapide et
    des pièces à dégâts des sorts, rien d'un équipement à distance. */
 "classes": [
  { "slug": "guerrier", "name_fr": "Guerrier", "name_en": "Warrior",
    "icon": "class_warrior", "color": "#C79C6E", "rangedSlot": "ranged",
    "specs": [
     { "key": "arms",       "fr": "Armes",      "en": "Arms",       "role": "dps-melee" },
     { "key": "fury",       "fr": "Fureur",     "en": "Fury",       "role": "dps-melee" },
     { "key": "protection", "fr": "Protection", "en": "Protection", "role": "tank" }
    ] },
  { "slug": "paladin", "name_fr": "Paladin", "name_en": "Paladin",
    "icon": "class_paladin", "color": "#F58CBA", "rangedSlot": "relic-libram",
    "specs": [
     { "key": "holy",        "fr": "Sacré — soins",  "en": "Holy",        "role": "soin" },
     { "key": "holy-dps",    "fr": "Sacré — dégâts", "en": "Shockadin",   "role": "dps-melee" },
     { "key": "protection",  "fr": "Protection",     "en": "Protection",  "role": "tank" },
     { "key": "retribution", "fr": "Vindicte",       "en": "Retribution", "role": "dps-melee" }
    ] },
  { "slug": "chasseur", "name_fr": "Chasseur", "name_en": "Hunter",
    "icon": "class_hunter", "color": "#ABD473", "rangedSlot": "ranged",
    "specs": [
     { "key": "beast-mastery", "fr": "Maîtrise des bêtes", "en": "Beast Mastery", "role": "dps-distance" },
     { "key": "marksmanship",  "fr": "Précision",          "en": "Marksmanship",  "role": "dps-distance" },
     { "key": "survival",      "fr": "Survie",             "en": "Survival",      "role": "dps-distance" }
    ] },
  { "slug": "voleur", "name_fr": "Voleur", "name_en": "Rogue",
    "icon": "class_rogue", "color": "#FFF569", "rangedSlot": "ranged",
    "specs": [
     { "key": "assassination", "fr": "Assassinat", "en": "Assassination", "role": "dps-melee" },
     { "key": "combat",        "fr": "Combat",     "en": "Combat",        "role": "dps-melee" },
     { "key": "subtlety",      "fr": "Finesse",    "en": "Subtlety",      "role": "dps-melee" }
    ] },
  { "slug": "pretre", "name_fr": "Prêtre", "name_en": "Priest",
    "icon": "class_priest", "color": "#FFFFFF", "rangedSlot": "wand",
    "specs": [
     { "key": "discipline", "fr": "Discipline", "en": "Discipline", "role": "soin" },
     { "key": "holy",       "fr": "Sacré",      "en": "Holy",       "role": "soin" },
     { "key": "shadow",     "fr": "Ombre",      "en": "Shadow",     "role": "dps-distance" }
    ] },
  { "slug": "chaman", "name_fr": "Chaman", "name_en": "Shaman",
    "icon": "class_shaman", "color": "#0070DE", "rangedSlot": "relic-totem",
    "specs": [
     { "key": "elemental",   "fr": "Élémentaire", "en": "Elemental",   "role": "dps-distance" },
     { "key": "enhancement", "fr": "Amélioration","en": "Enhancement", "role": "dps-melee" },
     { "key": "restoration", "fr": "Restauration","en": "Restoration", "role": "soin" }
    ] },
  { "slug": "mage", "name_fr": "Mage", "name_en": "Mage",
    "icon": "class_mage", "color": "#69CCF0", "rangedSlot": "wand",
    "specs": [
     { "key": "arcane", "fr": "Arcanes", "en": "Arcane", "role": "dps-distance" },
     { "key": "fire",   "fr": "Feu",     "en": "Fire",   "role": "dps-distance" },
     { "key": "frost",  "fr": "Givre",   "en": "Frost",  "role": "dps-distance" }
    ] },
  { "slug": "demoniste", "name_fr": "Démoniste", "name_en": "Warlock",
    "icon": "class_warlock", "color": "#9482C9", "rangedSlot": "wand",
    "specs": [
     { "key": "affliction",  "fr": "Affliction",  "en": "Affliction",  "role": "dps-distance" },
     { "key": "demonology",  "fr": "Démonologie", "en": "Demonology",  "role": "dps-distance" },
     { "key": "destruction", "fr": "Destruction", "en": "Destruction", "role": "dps-distance" }
    ] },
  { "slug": "druide", "name_fr": "Druide", "name_en": "Druid",
    "icon": "class_druid", "color": "#FF7D0A", "rangedSlot": "relic-idol",
    "specs": [
     { "key": "balance",     "fr": "Équilibre",         "en": "Balance",     "role": "dps-distance" },
     { "key": "feral-tank",  "fr": "Farouche — tank",   "en": "Feral Tank",  "role": "tank" },
     { "key": "feral-dps",   "fr": "Farouche — dégâts", "en": "Feral DPS",   "role": "dps-melee" },
     { "key": "restoration", "fr": "Restauration",      "en": "Restoration", "role": "soin" }
    ] }
 ]
};
