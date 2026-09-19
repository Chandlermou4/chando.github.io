window.TALENT_DATA={
 "version": 1,
 "generatedAt": "2026-09-19",
 "grid": {
  "rows": 7,
  "columns": 4,
  "pointsPerRow": 5,
  "totalPoints": 51,
  "firstTalentLevel": 10
 },
 "origin": "Bêta publique de WoW Forever, ouverte le 17 septembre 2026 : les arbres sont relevés sur les données du client publiées par le calculateur de Wowhead. Le relevé initial, fait à la démonstration jouable de la BlizzCon 2026 par deux projets communautaires indépendants, sert encore de référence pour les textes que la bêta ne résout pas.",
 "sources": [
  {
   "id": "forever-talents-releve",
   "title": "Forever Talents — relevé image par image de la démo BlizzCon 2026",
   "url": "https://forevertalents.up.railway.app/",
   "publisher": "Forever Talents (projet communautaire)",
   "checkedAt": "2026-09-13",
   "method": "Lecture du jeu de données publié par le site, une requête par fichier",
   "reuse": "editorial-facts",
   "permissionNote": "Relevé communautaire non affilié à Blizzard. Le site indique transcrire les infobulles depuis la vidéo de démonstration et distingue les rangs observés des rangs estimés ; nous conservons cette distinction. Les icônes de sort et les illustrations de spécialisation sont affichées depuis le CDN public de Wowhead à partir des identifiants relevés, comme le font les calculateurs de la communauté ; aucun de ces fichiers n’est copié dans le dépôt. Ces images appartiennent à Blizzard Entertainment."
  },
  {
   "id": "wowtbc-forever-calculator",
   "title": "wowtbc.gg — calculateur de talents Warcraft Forever",
   "url": "https://wowtbc.gg/warcraftforever/talent-calculator/",
   "publisher": "wowtbc.gg",
   "checkedAt": "2026-09-13",
   "method": "Lecture des données de page publiées par le site, une requête par classe",
   "reuse": "editorial-facts",
   "permissionNote": "Relevé communautaire non affilié à Blizzard. Utilisé comme second témoin : prérequis, coûts des capacités actives et rangs extrapolés. Les écarts avec le premier relevé sont conservés dans la fiche, jamais arbitrés en silence."
  },
  {
   "id": "wowhead-forever-talent-calc",
   "title": "Wowhead — calculateur de talents Forever",
   "url": "https://www.wowhead.com/forever/talent-calc/",
   "publisher": "Wowhead",
   "checkedAt": "2026-09-18",
   "method": "Lecture du jeu de données public du calculateur, une requête par fichier, comparée rang par rang à notre version précédente. Depuis l’ouverture de la bêta, ce fichier renvoie les infobulles du client ; les valeurs qu’il laisse sous forme de formule (« 94.8% of Spell Power ») ou visiblement cassées ne sont pas reprises.",
   "reuse": "editorial-facts",
   "permissionNote": "Texte d'infobulle du client du jeu tel qu'affiché par le calculateur de Wowhead — les chaînes de Blizzard, pas une composition éditoriale de Wowhead. Utilisé pour confirmer ou corriger les rangs 2+ jusque-là estimés par extrapolation à partir du rang 1 relevé dans la vidéo de démo BlizzCon 2026, et pour compléter les quelques rangs dont le texte manquait. Les écarts trouvés sont corrigés silencieusement dans le texte anglais ; le champ observed passe à true pour tout rang désormais confirmé par cette source."
  }
 ],
 "classes": [
  {
   "slug": "guerrier",
   "gameId": 1,
   "name_fr": "Guerrier",
   "name_en": "Warrior",
   "icon": "class_warrior",
   "status": "COMMUNAUTÉ",
   "sourceIds": [
    "forever-talents-releve",
    "wowtbc-forever-calculator",
    "wowhead-forever-talent-calc"
   ],
   "transcriptionNote": "Talent text transcribed from in-game tooltip video (warrior.json).",
   "trees": [
    {
     "key": "arms",
     "name_en": "Arms",
     "name_fr": "Armes",
     "icon": "ability_rogue_eviscerate",
     "backgroundId": 161,
     "talents": [
      {
       "key": "arms-1-1",
       "name_en": "Improved Heroic Strike",
       "icon": "ability_rogue_ambush",
       "row": 1,
       "col": 1,
       "maxRanks": 3,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the cost of your Heroic Strike ability by 1 Rage.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the cost of your Heroic Strike ability by 2 Rage.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Reduces the cost of your Heroic Strike ability by 3 Rage.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Reduces the cost of your Heroic Strike ability by 1 rage point.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "arms-1-2",
       "name_en": "Deflection",
       "icon": "ability_parry",
       "row": 1,
       "col": 2,
       "maxRanks": 5,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases your Parry chance by 1%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases your Parry chance by 2%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases your Parry chance by 3%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases your Parry chance by 4%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases your Parry chance by 5%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "Increases your Parry chance by 1%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "arms-1-3",
       "name_en": "Improved Rend",
       "icon": "ability_gouge",
       "row": 1,
       "col": 3,
       "maxRanks": 3,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the Bleed damage done by your Rend ability by 12%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the Bleed damage done by your Rend ability by 23%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the Bleed damage done by your Rend ability by 35%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the bleed damage done by your Rend ability by 15%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "arms-2-1",
       "name_en": "Improved Charge",
       "icon": "ability_warrior_charge",
       "row": 2,
       "col": 1,
       "maxRanks": 2,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the Rage generated by your Charge ability by 3.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the Rage generated by your Charge ability by 6.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the amount of rage generated by your Charge ability by 3.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "arms-2-2",
       "name_en": "Improved Tactical Mastery",
       "icon": "spell_nature_enchantarmor",
       "row": 2,
       "col": 2,
       "maxRanks": 5,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Tactical Mastery lets you retain up to an additional 3 Rage when you change stances.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Tactical Mastery lets you retain up to an additional 6 Rage when you change stances.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Tactical Mastery lets you retain up to an additional 9 Rage when you change stances.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Tactical Mastery lets you retain up to an additional 12 Rage when you change stances.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Tactical Mastery lets you retain up to an additional 15 Rage when you change stances.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "You retain up to 5 of your rage points when you change stances.",
       "classicRenamedFrom": "Tactical Mastery",
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "arms-2-4",
       "name_en": "Improved Overpower",
       "icon": "inv_sword_05",
       "row": 2,
       "col": 4,
       "maxRanks": 2,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the critical strike chance of your Overpower ability by 25%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the critical strike chance of your Overpower ability by 50%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "moved",
       "classicText": "Increases the critical strike chance of your Overpower ability by 25%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "arms-3-2",
       "name_en": "Anger Management",
       "icon": "spell_holy_blessingofstamina",
       "row": 3,
       "col": 2,
       "maxRanks": 1,
       "pointsRequired": 10,
       "prerequisite": "arms-2-2",
       "arrow": "l1",
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Generates 1 Rage every 3 sec while in combat, and reduces Rage loss while out of combat by 30%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the time required for your rage to decay while out of combat by 30%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "arms-3-3",
       "name_en": "Deep Wounds",
       "icon": "ability_backstab",
       "row": 3,
       "col": 3,
       "maxRanks": 3,
       "pointsRequired": 10,
       "prerequisite": "arms-1-3",
       "arrow": "l2",
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Your critical strikes cause your opponent to Bleed, dealing 20% of your melee weapon's average damage over 12 sec.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Your critical strikes cause your opponent to Bleed, dealing 40% of your melee weapon's average damage over 12 sec.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Your critical strikes cause your opponent to Bleed, dealing 60% of your melee weapon's average damage over 12 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Your critical strikes cause the opponent to bleed, dealing 20% of your melee weapon's average damage over 12 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "arms-4-1",
       "name_en": "Spearing Strike",
       "icon": "ability_warrior_savageblow",
       "row": 4,
       "col": 1,
       "maxRanks": 1,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "actif",
       "skill": {
        "cost": "15 Rage",
        "range": "Melee",
        "castTime": "Instant",
        "cooldown": "20 sec"
       },
       "costLine": "15 Rage | Melee Range | Instant | 20 sec cooldown",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "A brutal attack that deals 40% weapon damage. Deals an additional 80% weapon damage against Giants, Dragonkin, and mounted targets. Mounted targets are dismounted.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "arms-4-2",
       "name_en": "Two-Handed Weapon Specialization",
       "icon": "inv_axe_09",
       "row": 4,
       "col": 2,
       "maxRanks": 3,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the damage you deal with two-handed melee weapons by 1%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the damage you deal with two-handed melee weapons by 2%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the damage you deal with two-handed melee weapons by 3%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the damage you deal with two-handed melee weapons by 1%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "arms-4-3",
       "name_en": "Impale",
       "icon": "ability_searingarrow",
       "row": 4,
       "col": 3,
       "maxRanks": 2,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the critical strike damage bonus of your abilities by 10%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the critical strike damage bonus of your abilities by 20%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the critical strike damage bonus of your abilities in Battle, Defensive, and Berserker stance by 10%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "arms-5-1",
       "name_en": "Bloodthrill",
       "icon": "ability_warrior_bloodfrenzy",
       "row": 5,
       "col": 1,
       "maxRanks": 5,
       "pointsRequired": 20,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Your melee attacks against targets afflicted by your Rend have a 2% chance to activate your Overpower ability for 1 attack on your current target. Lasts 6 sec.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Your melee attacks against targets afflicted by your Rend have a 4% chance to activate your Overpower ability for 1 attack on your current target. Lasts 6 sec.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Your melee attacks against targets afflicted by your Rend have a 6% chance to activate your Overpower ability for 1 attack on your current target. Lasts 6 sec.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Your melee attacks against targets afflicted by your Rend have a 8% chance to activate your Overpower ability for 1 attack on your current target. Lasts 6 sec.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Your melee attacks against targets afflicted by your Rend have a 10% chance to activate your Overpower ability for 1 attack on your current target. Lasts 6 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "arms-5-2",
       "name_en": "Sweeping Strikes",
       "icon": "ability_rogue_slicedice",
       "row": 5,
       "col": 2,
       "maxRanks": 1,
       "pointsRequired": 20,
       "prerequisite": null,
       "arrow": null,
       "kind": "actif",
       "skill": {
        "cost": "30 Rage",
        "range": null,
        "castTime": "Instant",
        "cooldown": "30 sec"
       },
       "costLine": "30 Rage | Instant | 30 sec cooldown",
       "requires": [
        "Battle Stance"
       ],
       "ranks": [
        {
         "rank": 1,
         "text": "Your next 5 melee attacks strike an additional nearby opponent.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "Your next 5 melee attacks strike an additional nearby opponent.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "arms-5-3",
       "name_en": "Weaponmaster",
       "icon": "ability_warrior_weaponmastery",
       "row": 5,
       "col": 3,
       "maxRanks": 5,
       "pointsRequired": 20,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Gives your melee weapon attacks a benefit depending on the weapon.\n\nAxe/Polearm: Increases your critical strike chance by 1%.\n\nMace/Staff: Your attacks ignore 3% of your target's armor.\n\nSword: Your successful melee attacks have a 1% chance to trigger an extra attack on the target.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Gives your melee weapon attacks a benefit depending on the weapon. Axe/Polearm: Increases your critical strike chance by 2%. Mace/Staff: Your attacks ignore 6% of your target's armor. Sword: Your successful melee attacks have a 2% chance to trigger an extra attack on the target.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Gives your melee weapon attacks a benefit depending on the weapon. Axe/Polearm: Increases your critical strike chance by 3%. Mace/Staff: Your attacks ignore 9% of your target's armor. Sword: Your successful melee attacks have a 3% chance to trigger an extra attack on the target.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Gives your melee weapon attacks a benefit depending on the weapon. Axe/Polearm: Increases your critical strike chance by 4%. Mace/Staff: Your attacks ignore 12% of your target's armor. Sword: Your successful melee attacks have a 4% chance to trigger an extra attack on the target.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Gives your melee weapon attacks a benefit depending on the weapon. Axe/Polearm: Increases your critical strike chance by 5%. Mace/Staff: Your attacks ignore 15% of your target's armor. Sword: Your successful melee attacks have a 5% chance to trigger an extra attack on the target.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "arms-6-1",
       "name_en": "Improved Slam",
       "icon": "ability_warrior_decisivestrike",
       "row": 6,
       "col": 1,
       "maxRanks": 2,
       "pointsRequired": 25,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the global cooldown and cast time of your Slam ability by 0.25 sec. In addition, Slam no longer interrupts your melee swing time.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the global cooldown and cast time of your Slam ability by 0.5 sec. In addition, Slam no longer interrupts your melee swing time.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Decreases the casting time of your Slam ability by 0.1 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "arms-6-3",
       "name_en": "Improved Hamstring",
       "icon": "ability_shockwave",
       "row": 6,
       "col": 3,
       "maxRanks": 3,
       "pointsRequired": 25,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Gives your Hamstring ability a 5% chance to immobilize the target for 5 sec.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Gives your Hamstring ability a 10% chance to immobilize the target for 5 sec.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Gives your Hamstring ability a 15% chance to immobilize the target for 5 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "Gives your Hamstring ability a 5% chance to immobilize the target for 5 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "arms-7-2",
       "name_en": "Mortal Strike",
       "icon": "ability_warrior_savageblow",
       "row": 7,
       "col": 2,
       "maxRanks": 1,
       "pointsRequired": 30,
       "prerequisite": "arms-5-2",
       "arrow": "l2",
       "kind": "actif",
       "skill": {
        "cost": "30 Rage",
        "range": "Melee",
        "castTime": "Instant",
        "cooldown": "6 sec"
       },
       "costLine": "30 Rage | Melee Range | Instant | 6 sec cooldown",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "A vicious strike that deals weapon damage plus 85 and wounds the target, reducing the effectiveness of any healing by 50% for 10 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "A vicious strike that deals weapon damage plus 85 and wounds the target, reducing the effectiveness of any healing by 50% for 10 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      }
     ],
     "removedFromClassic": [
      {
       "name_en": "Axe Specialization",
       "maxRanks": 5,
       "row": 5,
       "text": "Increases your chance to get a critical strike with Axes by 1%."
      },
      {
       "name_en": "Mace Specialization",
       "maxRanks": 5,
       "row": 5,
       "text": "Gives you a 1% chance to stun your target for 3 sec with a Mace."
      },
      {
       "name_en": "Sword Specialization",
       "maxRanks": 5,
       "row": 5,
       "text": "Gives you a 1% chance to get an extra attack on the same target after dealing damage with your Sword."
      },
      {
       "name_en": "Polearm Specialization",
       "maxRanks": 5,
       "row": 6,
       "text": "Increases your chance to get a critical strike with Polearms by 1%."
      }
     ],
     "disputed": []
    },
    {
     "key": "fury",
     "name_en": "Fury",
     "name_fr": "Fureur",
     "icon": "ability_warrior_innerrage",
     "backgroundId": 164,
     "talents": [
      {
       "key": "fury-1-2",
       "name_en": "Booming Voice",
       "icon": "spell_nature_purge",
       "row": 1,
       "col": 2,
       "maxRanks": 5,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the radius of your Battle Shout and Demoralizing Shout abilities by 10%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the radius of your Battle Shout and Demoralizing Shout abilities by 20%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the radius of your Battle Shout and Demoralizing Shout abilities by 30%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases the radius of your Battle Shout and Demoralizing Shout abilities by 40%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases the radius of your Battle Shout and Demoralizing Shout abilities by 50%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the area of effect and duration of your Battle Shout and Demoralizing Shout by 10%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "fury-1-3",
       "name_en": "Cruelty",
       "icon": "ability_rogue_eviscerate",
       "row": 1,
       "col": 3,
       "maxRanks": 5,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases your chance to get a critical strike with melee attacks by 1%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases your chance to get a critical strike with melee attacks by 2%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases your chance to get a critical strike with melee attacks by 3%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases your chance to get a critical strike with melee attacks by 4%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases your chance to get a critical strike with melee attacks by 5%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases your chance to get a critical strike with melee weapons by 1%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "fury-2-2",
       "name_en": "Iron Will",
       "icon": "spell_magic_magearmor",
       "row": 2,
       "col": 2,
       "maxRanks": 5,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the duration of Stun and Fear effects inflicted on you by 3%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the duration of Stun and Fear effects inflicted on you by 6%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Reduces the duration of Stun and Fear effects inflicted on you by 9%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Reduces the duration of Stun and Fear effects inflicted on you by 12%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Reduces the duration of Stun and Fear effects inflicted on you by 15%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases your chance to resist Stun and Charm effects by an additional 3%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "fury-2-3",
       "name_en": "Unbridled Wrath",
       "icon": "spell_nature_stoneclawtotem",
       "row": 2,
       "col": 3,
       "maxRanks": 5,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Gives you a 12% chance to generate 1 additional Rage when you deal melee damage with a weapon. This effect is increased to 2 Rage for two-handed weapons.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Gives you a 24% chance to generate 1 additional Rage when you deal melee damage with a weapon. This effect is increased to 2 Rage for two-handed weapons.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Gives you a 36% chance to generate 1 additional Rage when you deal melee damage with a weapon. This effect is increased to 2 Rage for two-handed weapons.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Gives you a 48% chance to generate 1 additional Rage when you deal melee damage with a weapon. This effect is increased to 2 Rage for two-handed weapons.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Gives you a 60% chance to generate 1 additional Rage when you deal melee damage with a weapon. This effect is increased to 2 Rage for two-handed weapons.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Gives you a 8% chance to generate an additional Rage point when you deal melee damage with a weapon.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "fury-3-1",
       "name_en": "Improved Cleave",
       "icon": "ability_warrior_cleave",
       "row": 3,
       "col": 1,
       "maxRanks": 3,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the Rage cost of your Cleave ability by 1.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the Rage cost of your Cleave ability by 2.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Reduces the Rage cost of your Cleave ability by 3.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the bonus damage done by your Cleave ability by 40%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "fury-3-2",
       "name_en": "Piercing Howl",
       "icon": "spell_shadow_deathscream",
       "row": 3,
       "col": 2,
       "maxRanks": 1,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "actif",
       "skill": {
        "cost": "10 Rage",
        "range": null,
        "castTime": "Instant",
        "cooldown": null
       },
       "costLine": "10 Rage | Instant",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Causes all nearby enemies to be Dazed, reducing movement speed by 50% for 6 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Causes all enemies near the warrior to be dazed, reducing movement speed by 50% for 6 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "fury-3-3",
       "name_en": "Blood Craze",
       "icon": "spell_shadow_summonimp",
       "row": 3,
       "col": 3,
       "maxRanks": 3,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Regenerates 1% of your total Health over 6 sec after being the victim of a critical strike, dealing damage with Bloodthirst, or suffering more than 20% of your maximum Health from a single attack.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Regenerates 2% of your total Health over 6 sec after being the victim of a critical strike, dealing damage with Bloodthirst, or suffering more than 20% of your maximum Health from a single attack.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Regenerates 3% of your total Health over 6 sec after being the victim of a critical strike, dealing damage with Bloodthirst, or suffering more than 20% of your maximum Health from a single attack.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Regenerates 1% of your total Health over 6 sec after being the victim of a critical strike.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "fury-3-4",
       "name_en": "Boundless Rage",
       "icon": "ability_warrior_endlessrage",
       "row": 3,
       "col": 4,
       "maxRanks": 3,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases your maximum Rage by 10.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases your maximum Rage by 20.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases your maximum Rage by 30.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "fury-4-1",
       "name_en": "Dual Wield Specialization",
       "icon": "ability_dualwield",
       "row": 4,
       "col": 1,
       "maxRanks": 5,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases your off-hand weapon damage by 5%, off-hand Rage generation by 20%, and chance to hit with off-hand attacks by 2%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases your off-hand weapon damage by 10%, off-hand Rage generation by 40%, and chance to hit with off-hand attacks by 4%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases your off-hand weapon damage by 15%, off-hand Rage generation by 60%, and chance to hit with off-hand attacks by 6%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases your off-hand weapon damage by 20%, off-hand Rage generation by 80%, and chance to hit with off-hand attacks by 8%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases your off-hand weapon damage by 25%, off-hand Rage generation by 100%, and chance to hit with off-hand attacks by 10%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the damage done by your offhand weapon by 5%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "fury-4-2",
       "name_en": "Raging Blows",
       "icon": "ability_warrior_rampage",
       "row": 4,
       "col": 2,
       "maxRanks": 1,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Causes your Whirlwind to also strike with your off-hand weapon, and reduces the Rage cost of your Cleave ability by 2.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "fury-4-3",
       "name_en": "Enrage",
       "icon": "spell_shadow_unholyfrenzy",
       "row": 4,
       "col": 3,
       "maxRanks": 5,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Gives you a 30% chance to deal 2% increased Physical damage for 12 sec after being the victim of any damaging attack.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Gives you a 30% chance to deal 4% increased Physical damage for 12 sec after being the victim of any damaging attack.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Gives you a 30% chance to deal 6% increased Physical damage for 12 sec after being the victim of any damaging attack.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Gives you a 30% chance to deal 8% increased Physical damage for 12 sec after being the victim of any damaging attack.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Gives you a 30% chance to deal 10% increased Physical damage for 12 sec after being the victim of any damaging attack.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Gives you a 5% melee damage bonus for 12 sec up to a maximum of 12 swings after being the victim of a critical strike.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "fury-4-4",
       "name_en": "Improved Execute",
       "icon": "inv_sword_48",
       "row": 4,
       "col": 4,
       "maxRanks": 2,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the Rage cost of your Execute ability by 3.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the Rage cost of your Execute ability by 5.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Reduces the Rage cost of your Execute ability by 2.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "fury-5-1",
       "name_en": "Precision",
       "icon": "ability_marksmanship",
       "row": 5,
       "col": 1,
       "maxRanks": 3,
       "pointsRequired": 20,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases your chance to hit with all abilities and attacks by 1%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases your chance to hit with all abilities and attacks by 2%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases your chance to hit with all abilities and attacks by 3%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "fury-5-2",
       "name_en": "Death Wish",
       "icon": "spell_shadow_deathpact",
       "row": 5,
       "col": 2,
       "maxRanks": 1,
       "pointsRequired": 20,
       "prerequisite": null,
       "arrow": null,
       "kind": "actif",
       "skill": {
        "cost": "10 Rage",
        "range": null,
        "castTime": "Instant",
        "cooldown": "3 min"
       },
       "costLine": "10 Rage | Instant | 3 min cooldown",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "When activated, increases your Physical damage done by 20% and makes you immune to Fear effects, but increases all damage you take by 5%. Lasts 30 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "When activated, increases your physical damage by 20% and makes you immune to Fear effects, but lowers your armor and all resistances by 20%. Lasts 30 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "fury-5-4",
       "name_en": "Improved Intercept",
       "icon": "ability_rogue_sprint",
       "row": 5,
       "col": 4,
       "maxRanks": 2,
       "pointsRequired": 20,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the cooldown of your Intercept ability by 5 sec.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the cooldown of your Intercept ability by 10 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "Reduces the cooldown of your Intercept ability by 5 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "fury-6-1",
       "name_en": "Improved Berserker Rage",
       "icon": "spell_nature_ancestralguardian",
       "row": 6,
       "col": 1,
       "maxRanks": 2,
       "pointsRequired": 25,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Your Berserker Rage ability will instantly generate 5 Rage and has a 50% chance to remove all movement impairing effects when activated.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Your Berserker Rage ability will instantly generate 10 Rage and has a 100% chance to remove all movement impairing effects when activated.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "The Berserker Rage ability will generate 5 rage when used.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "fury-6-3",
       "name_en": "Flurry",
       "icon": "ability_ghoulfrenzy",
       "row": 6,
       "col": 3,
       "maxRanks": 5,
       "pointsRequired": 25,
       "prerequisite": "fury-4-3",
       "arrow": "l2",
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases your melee attack speed by 5% for your next 3 swings after dealing a melee critical strike.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases your melee attack speed by 10% for your next 3 swings after dealing a melee critical strike.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases your melee attack speed by 15% for your next 3 swings after dealing a melee critical strike.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases your melee attack speed by 20% for your next 3 swings after dealing a melee critical strike.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases your melee attack speed by 25% for your next 3 swings after dealing a melee critical strike.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases your attack speed by 10% for your next 3 swings after dealing a melee critical strike.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "fury-7-2",
       "name_en": "Bloodthirst",
       "icon": "spell_nature_bloodlust",
       "row": 7,
       "col": 2,
       "maxRanks": 1,
       "pointsRequired": 30,
       "prerequisite": "fury-5-2",
       "arrow": "l2",
       "kind": "actif",
       "skill": {
        "cost": "30 Rage",
        "range": "Melee",
        "castTime": "Instant",
        "cooldown": "6 sec"
       },
       "costLine": "30 Rage | Melee Range | Instant | 6 sec cooldown",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Instantly attack the target causing damage equal to 35% of your Attack Power plus 30 and increasing your movement speed by 10% for 10 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Instantly attack the target causing damage equal to 45% of your attack power. In addition, the next 5 successful melee attacks will restore 10 health. This effect lasts 8 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      }
     ],
     "removedFromClassic": [
      {
       "name_en": "Improved Demoralizing Shout",
       "maxRanks": 5,
       "row": 2,
       "text": "Increases the melee attack power reduction of your Demoralizing Shout by 8%."
      },
      {
       "name_en": "Improved Battle Shout",
       "maxRanks": 5,
       "row": 3,
       "text": "Increases the melee attack power bonus of your Battle Shout by 5%."
      }
     ],
     "disputed": []
    },
    {
     "key": "protection",
     "name_en": "Protection",
     "name_fr": "Protection",
     "icon": "ability_warrior_defensivestance",
     "backgroundId": 163,
     "talents": [
      {
       "key": "protection-1-2",
       "name_en": "Shield Specialization",
       "icon": "inv_shield_06",
       "row": 1,
       "col": 2,
       "maxRanks": 5,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases your chance to Block attacks with your shield by 1% and grants you a 20% chance to generate 5 Rage when you Block.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases your chance to Block attacks with your shield by 2% and grants you a 40% chance to generate 5 Rage when you Block.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases your chance to Block attacks with your shield by 3% and grants you a 60% chance to generate 5 Rage when you Block.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases your chance to Block attacks with your shield by 4% and grants you a 80% chance to generate 5 Rage when you Block.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases your chance to Block attacks with your shield by 5% and grants you a 100% chance to generate 5 Rage when you Block.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases your chance to block attacks with a shield by 1% and has a 20% chance to generate 1 rage when a block occurs.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "protection-1-3",
       "name_en": "Anticipation",
       "icon": "spell_nature_mirrorimage",
       "row": 1,
       "col": 3,
       "maxRanks": 5,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases your Defense Skill by 4.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases your Defense Skill by 8.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases your Defense Skill by 12.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases your Defense Skill by 16.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases your Defense Skill by 20.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases your Defense skill by 2.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "protection-2-1",
       "name_en": "Improved Bloodrage",
       "icon": "ability_racial_bloodrage",
       "row": 2,
       "col": 1,
       "maxRanks": 2,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases all the Rage generated by your Bloodrage ability by 25%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases all the Rage generated by your Bloodrage ability by 50%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the instant Rage generated by your Bloodrage ability by 2.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "protection-2-3",
       "name_en": "Toughness",
       "icon": "spell_holy_devotion",
       "row": 2,
       "col": 3,
       "maxRanks": 5,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases your Armor value from items by 2%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases your Armor value from items by 4%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases your Armor value from items by 6%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases your Armor value from items by 8%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases your Armor value from items by 10%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "Increases your armor value from items by 2%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "protection-2-4",
       "name_en": "Improved Thunder Clap",
       "icon": "ability_thunderclap",
       "row": 2,
       "col": 4,
       "maxRanks": 3,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the Rage cost of your Thunder Clap ability by 2.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the Rage cost of your Thunder Clap ability by 4.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Reduces the Rage cost of your Thunder Clap ability by 6.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Reduces the cost of your Thunder Clap ability by 1 rage point.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "protection-3-1",
       "name_en": "Last Stand",
       "icon": "spell_holy_ashestoashes",
       "row": 3,
       "col": 1,
       "maxRanks": 1,
       "pointsRequired": 10,
       "prerequisite": "protection-2-1",
       "arrow": null,
       "kind": "actif",
       "skill": {
        "cost": null,
        "range": null,
        "castTime": "Instant",
        "cooldown": "3 min"
       },
       "costLine": "Instant | 3 min cooldown",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "When activated, this ability temporarily grants you 30% of your maximum health for 20 sec. After the effect expires, the health is lost.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "When activated, this ability temporarily grants you 30% of your maximum hit points for 20 seconds. After the effect expires, the hit points are lost.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "protection-3-2",
       "name_en": "Master of Defense",
       "icon": "ability_defend",
       "row": 3,
       "col": 2,
       "maxRanks": 2,
       "pointsRequired": 10,
       "prerequisite": "protection-1-2",
       "arrow": "l2",
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Grants you a 50% chance to generate 5 Rage when you Dodge or Parry while a shield is equipped.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Grants you a 100% chance to generate 5 Rage when you Dodge or Parry while a shield is equipped.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "protection-3-3",
       "name_en": "Improved Revenge",
       "icon": "ability_warrior_revenge",
       "row": 3,
       "col": 3,
       "maxRanks": 3,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases damage dealt by your Revenge ability by 20%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases damage dealt by your Revenge ability by 40%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases damage dealt by your Revenge ability by 60%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Gives your Revenge ability a 15% chance to stun the target for 3 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "protection-3-4",
       "name_en": "Defiance",
       "icon": "ability_warrior_innerrage",
       "row": 3,
       "col": 4,
       "maxRanks": 3,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [
        "Defensive Stance"
       ],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases all threat generated in Defensive stance by an additional 5% while a shield is equipped.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases all threat generated in Defensive stance by an additional 10% while a shield is equipped.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases all threat generated in Defensive stance by an additional 15% while a shield is equipped.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the threat generated by your attacks by 3% while in Defensive Stance.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "protection-4-1",
       "name_en": "Improved Sunder Armor",
       "icon": "ability_warrior_sunder",
       "row": 4,
       "col": 1,
       "maxRanks": 3,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the Rage cost of your Sunder Armor ability by 1.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the Rage cost of your Sunder Armor ability by 2.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Reduces the Rage cost of your Sunder Armor ability by 3.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Reduces the cost of your Sunder Armor ability by 1 rage point.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "protection-4-2",
       "name_en": "Improved Disarm",
       "icon": "ability_warrior_disarm",
       "row": 4,
       "col": 2,
       "maxRanks": 3,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the cooldown of your Disarm ability by 7 secs.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the cooldown of your Disarm ability by 13 secs.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Reduces the cooldown of your Disarm ability by 20 secs.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the duration of your Disarm ability by 1 secs.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "protection-4-3",
       "name_en": "Vanguard",
       "icon": "ability_warrior_shieldguard",
       "row": 4,
       "col": 3,
       "maxRanks": 1,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Your Charge ability is now usable while in Defensive Stance.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "protection-5-1",
       "name_en": "Improved Shield Wall",
       "icon": "ability_warrior_shieldwall",
       "row": 5,
       "col": 1,
       "maxRanks": 2,
       "pointsRequired": 20,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the cooldown of your Shield Wall ability by 5.5 min.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the cooldown of your Shield Wall ability by 11 min.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the effect duration of your Shield Wall ability by 3 secs.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "protection-5-2",
       "name_en": "Concussion Blow",
       "icon": "ability_thunderbolt",
       "row": 5,
       "col": 2,
       "maxRanks": 1,
       "pointsRequired": 20,
       "prerequisite": null,
       "arrow": null,
       "kind": "actif",
       "skill": {
        "cost": "10 Rage",
        "range": "Melee",
        "castTime": "Instant",
        "cooldown": "45 sec"
       },
       "costLine": "10 Rage | Melee Range | Instant | 45 sec cooldown",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Stuns the target for 5 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Stuns the opponent for 5 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "protection-5-3",
       "name_en": "Improved Shield Bash",
       "icon": "ability_warrior_shieldbash",
       "row": 5,
       "col": 3,
       "maxRanks": 2,
       "pointsRequired": 20,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Gives your Shield Bash ability a 50% chance to Silence the target for 3 sec.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Gives your Shield Bash ability a 100% chance to Silence the target for 3 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "Gives your Shield Bash ability a 50% chance to silence the target for 3 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "protection-5-4",
       "name_en": "Bastion",
       "icon": "ability_warrior_shieldmastery",
       "row": 5,
       "col": 4,
       "maxRanks": 5,
       "pointsRequired": 20,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases all damage you deal by 2% while a shield is equipped.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases all damage you deal by 4% while a shield is equipped.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases all damage you deal by 6% while a shield is equipped.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases all damage you deal by 8% while a shield is equipped.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases all damage you deal by 10% while a shield is equipped.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "protection-6-3",
       "name_en": "Focused Rage",
       "icon": "ability_warrior_focusedrage",
       "row": 6,
       "col": 3,
       "maxRanks": 3,
       "pointsRequired": 25,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the Rage cost of your offensive abilities by 1.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the Rage cost of your offensive abilities by 2.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Reduces the Rage cost of your offensive abilities by 3.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "protection-7-2",
       "name_en": "Shield Slam",
       "icon": "inv_shield_05",
       "row": 7,
       "col": 2,
       "maxRanks": 1,
       "pointsRequired": 30,
       "prerequisite": "protection-5-2",
       "arrow": "l2",
       "kind": "actif",
       "skill": {
        "cost": "20 Rage",
        "range": "Melee",
        "castTime": "Instant",
        "cooldown": "6 sec"
       },
       "costLine": "20 Rage | Melee Range | Instant | 6 sec cooldown",
       "requires": [
        "Shields"
       ],
       "ranks": [
        {
         "rank": 1,
         "text": "Slam the target with your shield, causing 421 to 439 damage, increased by your Block Value, and has a 50% chance of dispelling 1 magic effect on the target. Causes a very high amount of threat.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Slam the target with your shield, causing 225 to 235 damage, modified by your shield block value, and has a 50% chance of dispelling 1 magic effect on the target. Also causes a high amount of threat.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      }
     ],
     "removedFromClassic": [
      {
       "name_en": "Improved Shield Block",
       "maxRanks": 3,
       "row": 3,
       "text": "Allows your Shield Block ability to block an additional attack and increases the duration by 0.5 second."
      },
      {
       "name_en": "Improved Taunt",
       "maxRanks": 2,
       "row": 4,
       "text": "Reduces the cooldown of your Taunt ability by 1 sec."
      },
      {
       "name_en": "One-Handed Weapon Specialization",
       "maxRanks": 5,
       "row": 6,
       "text": "Increases the damage you deal with One-Handed Melee weapons by 2%."
      }
     ],
     "disputed": []
    }
   ]
  },
  {
   "slug": "paladin",
   "gameId": 2,
   "name_fr": "Paladin",
   "name_en": "Paladin",
   "icon": "class_paladin",
   "status": "COMMUNAUTÉ",
   "sourceIds": [
    "forever-talents-releve",
    "wowtbc-forever-calculator",
    "wowhead-forever-talent-calc"
   ],
   "transcriptionNote": "Talent text transcribed from in-game tooltip video (paladin.json).",
   "trees": [
    {
     "key": "holy",
     "name_en": "Holy",
     "name_fr": "Sacré",
     "icon": "spell_holy_holybolt",
     "backgroundId": 382,
     "talents": [
      {
       "key": "holy-1-1",
       "name_en": "Improved Holy Strike",
       "icon": "spell_holy_crusaderstrike",
       "row": 1,
       "col": 1,
       "maxRanks": 2,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the cooldown of your Holy Strike ability by 1 sec.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the cooldown of your Holy Strike ability by 2 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "holy-1-2",
       "name_en": "Divine Strength",
       "icon": "ability_golemthunderclap",
       "row": 1,
       "col": 2,
       "maxRanks": 5,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases your Strength by 2%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases your Strength by 4%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases your Strength by 6%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases your Strength by 8%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases your Strength by 10%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "Increases your Strength by 2%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "holy-1-3",
       "name_en": "Divine Intellect",
       "icon": "spell_nature_sleep",
       "row": 1,
       "col": 3,
       "maxRanks": 5,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases your total Intellect by 2%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases your total Intellect by 4%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases your total Intellect by 6%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases your total Intellect by 8%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases your total Intellect by 10%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "Increases your total Intellect by 2%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "holy-2-1",
       "name_en": "Healing Light",
       "icon": "spell_holy_holybolt",
       "row": 2,
       "col": 1,
       "maxRanks": 3,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the amount healed by your Holy Light, Flash of Light, and Holy Shock spells by 4%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the amount healed by your Holy Light, Flash of Light, and Holy Shock spells by 8%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the amount healed by your Holy Light, Flash of Light, and Holy Shock spells by 12%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the amount healed by your Holy Light and Flash of Light spells by 12%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "holy-2-2",
       "name_en": "Spiritual Focus",
       "icon": "spell_arcane_blink",
       "row": 2,
       "col": 2,
       "maxRanks": 2,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Gives your Flash of Light, Holy Light, and Light's Vigil spells a 35% chance to not lose casting time when you take damage.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Gives your Flash of Light, Holy Light, and Light's Vigil spells a 70% chance to not lose casting time when you take damage.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Gives your Flash of Light and Holy Light spells a 28% chance to not lose casting time when you take damage.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "holy-2-3",
       "name_en": "Improved Seals",
       "icon": "spell_holy_healingaura",
       "row": 2,
       "col": 3,
       "maxRanks": 3,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the damage done by your Seals and Judgements by 5%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the damage done by your Seals and Judgements by 10%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the damage done by your Seals and Judgements by 15%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the damage done by your Seal of Righteousness and Judgement of Righteousness by 3%.",
       "classicRenamedFrom": "Improved Seal of Righteousness",
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "holy-2-4",
       "name_en": "Unyielding Faith",
       "icon": "spell_holy_unyieldingfaith",
       "row": 2,
       "col": 4,
       "maxRanks": 2,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the duration of Fear and Disorient effects on you by 15%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the duration of Fear and Disorient effects on you by 30%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases your chance to resist Fear and Disorient effects by an additional 5%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "holy-3-1",
       "name_en": "Voice of Truth",
       "icon": "spell_holy_silence",
       "row": 3,
       "col": 1,
       "maxRanks": 1,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "actif",
       "skill": {
        "cost": null,
        "range": null,
        "castTime": "Instant",
        "cooldown": "3 min"
       },
       "costLine": "Instant | 3 min cooldown",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Grants you immunity to Silence and Interrupt effects. Lasts 6 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "holy-3-2",
       "name_en": "Reverence",
       "icon": "spell_holy_mindvision",
       "row": 3,
       "col": 2,
       "maxRanks": 3,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Allows 10% of your Mana regeneration to continue while casting.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Allows 20% of your Mana regeneration to continue while casting.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Allows 30% of your Mana regeneration to continue while casting.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [
        {
         "field": "name",
         "foreverTalents": "Reverence",
         "wowtbc": "Reverance"
        }
       ],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "holy-3-3",
       "name_en": "Purifying Power",
       "icon": "spell_holy_purifyingpower",
       "row": 3,
       "col": 3,
       "maxRanks": 2,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the mana cost of your Cleanse and Purify spells by 10% and reduces the cooldown of your Exorcism and Holy Wrath spells by 17%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the mana cost of your Cleanse and Purify spells by 20% and reduces the cooldown of your Exorcism and Holy Wrath spells by 33%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "holy-4-1",
       "name_en": "Infusion of Light",
       "icon": "ability_paladin_infusionoflight",
       "row": 4,
       "col": 1,
       "maxRanks": 2,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Your Holy Shock and Flash of Light critical hits reduce the cast time of your next Holy Light cast within 15 sec by 0.5 sec.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Your Holy Shock and Flash of Light critical hits reduce the cast time of your next Holy Light cast within 15 sec by 1.0 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "holy-4-2",
       "name_en": "Illumination",
       "icon": "spell_holy_greaterheal",
       "row": 4,
       "col": 2,
       "maxRanks": 5,
       "pointsRequired": 15,
       "prerequisite": "holy-3-2",
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "After getting a critical effect from your Flash of Light, Holy Light, Light's Vigil, or Holy Shock heal spell you have a 20% chance to gain Mana equal to 50% of the base cost of the spell.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "After getting a critical effect from your Flash of Light, Holy Light, Light's Vigil, or Holy Shock heal spell you have a 40% chance to gain Mana equal to 50% of the base cost of the spell.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "After getting a critical effect from your Flash of Light, Holy Light, Light's Vigil, or Holy Shock heal spell you have a 60% chance to gain Mana equal to 50% of the base cost of the spell.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "After getting a critical effect from your Flash of Light, Holy Light, Light's Vigil, or Holy Shock heal spell you have a 80% chance to gain Mana equal to 50% of the base cost of the spell.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "After getting a critical effect from your Flash of Light, Holy Light, Light's Vigil, or Holy Shock heal spell you have a 100% chance to gain Mana equal to 50% of the base cost of the spell.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "After getting a critical effect from your Flash of Light, Holy Light, or Holy Shock heal spell, gives you a 20% chance to gain Mana equal to the base cost of the spell.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "holy-4-3",
       "name_en": "Divine Favor",
       "icon": "spell_holy_heal",
       "row": 4,
       "col": 3,
       "maxRanks": 1,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "actif",
       "skill": {
        "cost": "37 Mana",
        "range": null,
        "castTime": "Instant",
        "cooldown": "2 min"
       },
       "costLine": "37 Mana | Instant | 2 min cooldown",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "When activated, gives your next Flash of Light, Holy Light, or Holy Shock spell a 100% critical effect chance.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "moved",
       "classicText": "When activated, gives your next Flash of Light, Holy Light, or Holy Shock spell a 100% critical effect chance.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "holy-5-1",
       "name_en": "Divine Precision",
       "icon": "spell_holy_holybolt",
       "row": 5,
       "col": 1,
       "maxRanks": 3,
       "pointsRequired": 20,
       "prerequisite": "holy-5-2",
       "arrow": "l1--right",
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases your chance to hit with Holy spells by 6%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases your chance to hit with Holy spells by 12%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases your chance to hit with Holy spells by 18%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "holy-5-2",
       "name_en": "Holy Shock",
       "icon": "spell_holy_searinglight",
       "row": 5,
       "col": 2,
       "maxRanks": 1,
       "pointsRequired": 20,
       "prerequisite": null,
       "arrow": null,
       "kind": "actif",
       "skill": {
        "cost": "160 Mana",
        "range": "20",
        "castTime": "Instant",
        "cooldown": "10 sec"
       },
       "costLine": "160 Mana | Instant | Enemy: 20 yd range | Friendly: 40 yd range | 10 sec cooldown",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Blasts the target with Holy energy, causing 129 to 139 Holy damage to an enemy, or 110 to 118 healing to an ally.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Blasts the target with Holy energy, causing 204 to 220 Holy damage to an enemy, or 204 to 220 healing to an ally.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "holy-5-3",
       "name_en": "Consecrated Ground",
       "icon": "spell_holy_innerfire",
       "row": 5,
       "col": 3,
       "maxRanks": 2,
       "pointsRequired": 20,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Gives your Holy spells 5% increased damage against the first 4 enemies that enter your Consecration.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Gives your Holy spells 10% increased damage against the first 4 enemies that enter your Consecration.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "holy-6-3",
       "name_en": "Holy Power",
       "icon": "spell_holy_power",
       "row": 6,
       "col": 3,
       "maxRanks": 5,
       "pointsRequired": 25,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the critical strike chance of your Holy Shock spell by 3%, and all other spells by 1%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the critical strike chance of your Holy Shock spell by 6%, and all other spells by 2%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the critical strike chance of your Holy Shock spell by 9%, and all other spells by 3%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases the critical strike chance of your Holy Shock spell by 12%, and all other spells by 4%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases the critical strike chance of your Holy Shock spell by 15%, and all other spells by 5%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the critical effect chance of your Holy spells by 1%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "holy-7-2",
       "name_en": "Light's Vigil",
       "icon": "spell_holy_holyguidance",
       "row": 7,
       "col": 2,
       "maxRanks": 1,
       "pointsRequired": 30,
       "prerequisite": "holy-5-2",
       "arrow": "l2",
       "kind": "actif",
       "skill": {
        "cost": "730 Mana",
        "range": "20",
        "castTime": "1.5 sec cast",
        "cooldown": "6 sec"
       },
       "costLine": "730 Mana | 1.5 sec cast | Enemy: 20 yd range | Friendly: 40 yd range | 6 sec cooldown",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Applies Light's Vigil to the target for 30 sec. Your next Holy Shock cast on them triggers no cooldown and causes friendly targets to heal their party for 315 to 333, or enemy targets to suffer 175 to 189 Holy damage and refund 75% of Light's Vigil's Mana cost. You may only have 1 Light's Vigil active per Paladin, per party.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      }
     ],
     "removedFromClassic": [
      {
       "name_en": "Consecration",
       "maxRanks": 1,
       "row": 3,
       "text": "Consecrates the land beneath Paladin, doing 64 Holy damage over 8 sec to enemies who enter the area."
      },
      {
       "name_en": "Improved Lay on Hands",
       "maxRanks": 2,
       "row": 3,
       "text": "Gives the target of your Lay on Hands spell a 15% bonus to their armor value from items for 2 min.  In addition, the cooldown for your Lay on Hands spell is reduced by 10 min."
      },
      {
       "name_en": "Improved Blessing of Wisdom",
       "maxRanks": 2,
       "row": 4,
       "text": "Increases the effect of your Blessing of Wisdom spell by 10%."
      },
      {
       "name_en": "Lasting Judgement",
       "maxRanks": 3,
       "row": 5,
       "text": "Increases the duration of your Judgement of Light and Judgement of Wisdom by 10 sec."
      }
     ],
     "disputed": []
    },
    {
     "key": "protection",
     "name_en": "Protection",
     "name_fr": "Protection",
     "icon": "spell_holy_devotionaura",
     "backgroundId": 383,
     "talents": [
      {
       "key": "protection-1-2",
       "name_en": "Toughness",
       "icon": "spell_holy_devotion",
       "row": 1,
       "col": 2,
       "maxRanks": 5,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases your armor value from items by 2%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases your armor value from items by 4%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases your armor value from items by 6%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases your armor value from items by 8%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases your armor value from items by 10%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "moved",
       "classicText": "Increases your armor value from items by 2%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "protection-1-3",
       "name_en": "Redoubt",
       "icon": "ability_defend",
       "row": 1,
       "col": 3,
       "maxRanks": 5,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Damaging melee attacks against you have a 10% chance to increase your chance to block by 6%. Lasts 10 sec or 5 blocks.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Damaging melee attacks against you have a 10% chance to increase your chance to block by 12%. Lasts 10 sec or 5 blocks.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Damaging melee attacks against you have a 10% chance to increase your chance to block by 18%. Lasts 10 sec or 5 blocks.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Damaging melee attacks against you have a 10% chance to increase your chance to block by 24%. Lasts 10 sec or 5 blocks.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Damaging melee attacks against you have a 10% chance to increase your chance to block by 30%. Lasts 10 sec or 5 blocks.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases your chance to block attacks with your shield by 6% after being the victim of a critical strike. Lasts 10 sec or 5 blocks.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "protection-2-1",
       "name_en": "Precision",
       "icon": "ability_rogue_ambush",
       "row": 2,
       "col": 1,
       "maxRanks": 3,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases your chance to hit with all spells and attacks by 1%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases your chance to hit with all spells and attacks by 2%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases your chance to hit with all spells and attacks by 3%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases your chance to hit with melee weapons by 1%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "protection-2-2",
       "name_en": "Guardian's Favor",
       "icon": "spell_holy_sealofprotection",
       "row": 2,
       "col": 2,
       "maxRanks": 2,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the cooldown of your Blessing of Protection by 1 min and increases the duration of your Blessing of Freedom by 3 sec.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the cooldown of your Blessing of Protection by 2 min and increases the duration of your Blessing of Freedom by 6 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Reduces the cooldown of your Blessing of Protection by 60 sec and increases the duration of your Blessing of Freedom by 3 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "protection-2-4",
       "name_en": "Anticipation",
       "icon": "spell_magic_lesserinvisibilty",
       "row": 2,
       "col": 4,
       "maxRanks": 5,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases your Defense Skill by 4.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases your Defense Skill by 8.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases your Defense Skill by 12.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases your Defense Skill by 16.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases your Defense Skill by 20.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases your Defense skill by 2.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "protection-3-1",
       "name_en": "Improved Seal of Fury",
       "icon": "spell_holy_sealoffury",
       "row": 3,
       "col": 1,
       "maxRanks": 1,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "When Seal of Fury's shield is fully absorbed, restore 38 Mana, increased by 15% per level the attacker is above you, up to 45%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "protection-3-2",
       "name_en": "Improved Righteous Fury",
       "icon": "spell_holy_sealoffury",
       "row": 3,
       "col": 2,
       "maxRanks": 3,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "While Righteous Fury is active, all damage taken is reduced by 2%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "While Righteous Fury is active, all damage taken is reduced by 4%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "While Righteous Fury is active, all damage taken is reduced by 6%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the amount of threat generated by your Righteous Fury spell by 16%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "protection-3-3",
       "name_en": "Shield Specialization",
       "icon": "inv_shield_06",
       "row": 3,
       "col": 3,
       "maxRanks": 3,
       "pointsRequired": 10,
       "prerequisite": "protection-1-3",
       "arrow": "l2",
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the amount of damage absorbed by your shield by 10%, and gives your blocks a 33% chance to restore 6% of your maximum Mana. May only occur once every 3 sec.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the amount of damage absorbed by your shield by 20%, and gives your blocks a 66% chance to restore 6% of your maximum Mana. May only occur once every 3 sec.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the amount of damage absorbed by your shield by 30%, and gives your blocks a 100% chance to restore 6% of your maximum Mana. May only occur once every 3 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the amount of damage absorbed by your shield by 10%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "protection-3-4",
       "name_en": "Sacred Duty",
       "icon": "spell_holy_divineintervention",
       "row": 3,
       "col": 4,
       "maxRanks": 2,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases your total Stamina by 2% and reduces the cooldown of your Divine Shield, Divine Protection, and Templar's Bulwark spells by 30 sec.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases your total Stamina by 4% and reduces the cooldown of your Divine Shield, Divine Protection, and Templar's Bulwark spells by 60 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "protection-4-1",
       "name_en": "Swift Judgement",
       "icon": "spell_holy_righteousfury",
       "row": 4,
       "col": 1,
       "maxRanks": 1,
       "pointsRequired": 15,
       "prerequisite": "protection-3-1",
       "arrow": null,
       "kind": "actif",
       "skill": {
        "cost": null,
        "range": null,
        "castTime": "Instant",
        "cooldown": "1 min"
       },
       "costLine": "Instant | 1 min cooldown",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Finishes the remaining cooldown on your Judgement ability and reduces the Mana cost of your next Judgement by 100%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "protection-4-2",
       "name_en": "One-Handed Weapon Specialization",
       "icon": "inv_sword_20",
       "row": 4,
       "col": 2,
       "maxRanks": 3,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the damage you deal with one-handed melee weapons by 3%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the damage you deal with one-handed melee weapons by 7%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the damage you deal with one-handed melee weapons by 10%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the damage you deal with one-handed melee weapons by 2%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "protection-4-3",
       "name_en": "Improved Hammer of Justice",
       "icon": "spell_holy_sealofmight",
       "row": 4,
       "col": 3,
       "maxRanks": 3,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Decreases the cooldown of your Hammer of Justice spell by 5 sec.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Decreases the cooldown of your Hammer of Justice spell by 10 sec.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Decreases the cooldown of your Hammer of Justice spell by 15 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "Decreases the cooldown of your Hammer of Justice spell by 5 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "protection-5-2",
       "name_en": "Templar's Bulwark",
       "icon": "ability_paladin_shieldofthetemplar",
       "row": 5,
       "col": 2,
       "maxRanks": 1,
       "pointsRequired": 20,
       "prerequisite": null,
       "arrow": null,
       "kind": "actif",
       "skill": {
        "cost": "110 Mana",
        "range": null,
        "castTime": "Instant",
        "cooldown": "5 min"
       },
       "costLine": "110 Mana | Instant | 5 min cooldown",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "When activated, this ability grants you an absorb shield equal to 100% of your maximum health for 8 sec. Applies Forbearance for 1 min. Cannot be cast while Forbearance is active.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "protection-5-3",
       "name_en": "Reckoning",
       "icon": "spell_holy_blessingofstrength",
       "row": 5,
       "col": 3,
       "maxRanks": 5,
       "pointsRequired": 20,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Gives you a 8% chance to gain an extra attack after Blocking a melee attack and a 20% chance to gain an extra attack after being the victim of a non-periodic critical strike.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Gives you a 16% chance to gain an extra attack after Blocking a melee attack and a 40% chance to gain an extra attack after being the victim of a non-periodic critical strike.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Gives you a 24% chance to gain an extra attack after Blocking a melee attack and a 60% chance to gain an extra attack after being the victim of a non-periodic critical strike.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Gives you a 32% chance to gain an extra attack after Blocking a melee attack and a 80% chance to gain an extra attack after being the victim of a non-periodic critical strike.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Gives you a 40% chance to gain an extra attack after Blocking a melee attack and a 100% chance to gain an extra attack after being the victim of a non-periodic critical strike.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Gives you a 20% chance to gain an extra attack after being the victim of a critical strike.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "protection-6-3",
       "name_en": "Iron Creed",
       "icon": "ability_paladin_shieldofvengeance",
       "row": 6,
       "col": 3,
       "maxRanks": 5,
       "pointsRequired": 25,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the threat generated by your Holy Strike ability 5%. While Righteous Fury is active, Holy Strike also reduces your damage taken by 2% for 6 sec.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the threat generated by your Holy Strike ability 10%. While Righteous Fury is active, Holy Strike also reduces your damage taken by 4% for 6 sec.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the threat generated by your Holy Strike ability 15%. While Righteous Fury is active, Holy Strike also reduces your damage taken by 6% for 6 sec.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases the threat generated by your Holy Strike ability 20%. While Righteous Fury is active, Holy Strike also reduces your damage taken by 8% for 6 sec.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases the threat generated by your Holy Strike ability 25%. While Righteous Fury is active, Holy Strike also reduces your damage taken by 10% for 6 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "protection-7-2",
       "name_en": "Holy Shield",
       "icon": "classic_spell_holy_blessingofprotection",
       "row": 7,
       "col": 2,
       "maxRanks": 1,
       "pointsRequired": 30,
       "prerequisite": "protection-5-2",
       "arrow": "l2",
       "kind": "actif",
       "skill": {
        "cost": "150 Mana",
        "range": null,
        "castTime": "Instant",
        "cooldown": "10 sec"
       },
       "costLine": "150 Mana | Instant | 10 sec cooldown",
       "requires": [
        "Shields"
       ],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases chance to block by 20% for 10 sec, and deals 110 Holy damage for each attack blocked while active. Damage caused by Holy Shield causes 20% additional threat. Each block expends a charge. 4 charges.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases chance to block by 30% for 10 sec, and deals 65 Holy damage for each attack blocked while active. Damage caused by Holy Shield causes 20% additional threat. Each block expends a charge. 4 charges.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      }
     ],
     "removedFromClassic": [
      {
       "name_en": "Improved Devotion Aura",
       "maxRanks": 5,
       "row": 1,
       "text": "Increases the armor bonus of your Devotion Aura by 5%."
      },
      {
       "name_en": "Blessing of Kings",
       "maxRanks": 1,
       "row": 3,
       "text": "Places a Blessing on the friendly target, increasing total stats by 10% for 5 min.  Players may only have one Blessing on them per Paladin at any one time."
      },
      {
       "name_en": "Improved Concentration Aura",
       "maxRanks": 3,
       "row": 4,
       "text": "Increases the effect of your Concentration Aura by an additional 5% and gives all group members affected by the aura an additional 5% chance to resist Silence and Interrupt effects."
      },
      {
       "name_en": "Blessing of Sanctuary",
       "maxRanks": 1,
       "row": 5,
       "text": "Places a Blessing on the friendly target, reducing damage dealt from all sources by up to 10 for 5 min.  In addition, when the target blocks a melee attack the attacker will take 14 Holy damage.  Players may only have one Blessing on them per Paladin at any one time."
      }
     ],
     "disputed": []
    },
    {
     "key": "retribution",
     "name_en": "Retribution",
     "name_fr": "Vindicte",
     "icon": "spell_holy_auraoflight",
     "backgroundId": 381,
     "talents": [
      {
       "key": "retribution-1-2",
       "name_en": "Deflection",
       "icon": "ability_parry",
       "row": 1,
       "col": 2,
       "maxRanks": 5,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases your Parry chance by 1%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases your Parry chance by 2%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases your Parry chance by 3%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases your Parry chance by 4%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases your Parry chance by 5%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "moved",
       "classicText": "Increases your Parry chance by 1%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "retribution-1-3",
       "name_en": "Benediction",
       "icon": "spell_frost_windwalkon",
       "row": 1,
       "col": 3,
       "maxRanks": 5,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the Mana cost of all instant cast spells and abilities by 2%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the Mana cost of all instant cast spells and abilities by 4%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Reduces the Mana cost of all instant cast spells and abilities by 6%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Reduces the Mana cost of all instant cast spells and abilities by 8%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Reduces the Mana cost of all instant cast spells and abilities by 10%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Reduces the Mana cost of your Judgement and Seal spells by 3%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "retribution-2-1",
       "name_en": "Improved Judgement",
       "icon": "spell_holy_righteousfury",
       "row": 2,
       "col": 1,
       "maxRanks": 2,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Decreases the cooldown of your Judgement ability by 1 sec.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Decreases the cooldown of your Judgement ability by 2 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Decreases the cooldown of your Judgement spell by 1 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "retribution-2-2",
       "name_en": "Holy Conduit",
       "icon": "spell_holy_divineillumination",
       "row": 2,
       "col": 2,
       "maxRanks": 2,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the mana cost of your Consecration, Holy Wrath, Exorcism, and Hammer of Wrath spells by 20%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the mana cost of your Consecration, Holy Wrath, Exorcism, and Hammer of Wrath spells by 40%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "retribution-2-3",
       "name_en": "Conviction",
       "icon": "spell_holy_retributionaura",
       "row": 2,
       "col": 3,
       "maxRanks": 5,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases your chance to get a critical strike with melee attacks by 1%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases your chance to get a critical strike with melee attacks by 2%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases your chance to get a critical strike with melee attacks by 3%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases your chance to get a critical strike with melee attacks by 4%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases your chance to get a critical strike with melee attacks by 5%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases your chance to get a critical strike with melee weapons by 1%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "retribution-3-1",
       "name_en": "Vindication",
       "icon": "spell_holy_vindication",
       "row": 3,
       "col": 1,
       "maxRanks": 3,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Gives your damaging melee attacks a chance to reduce the target's Attack Power by 42, and increase your Attack Power by 1% for 30 sec.",
         "observed": true
        },
        {
         "rank": 2,
         "text": null,
         "observed": false
        },
        {
         "rank": 3,
         "text": null,
         "observed": false
        }
       ],
       "rankNote": "Le client de la bêta affiche des valeurs de réduction négatives pour les rangs 2 et 3 (« -4 », « -6 ») — une réduction négative n'a pas de sens pour ce talent. Vraisemblablement un bug de formule côté Blizzard à ce stade de la bêta ; non retenu tant que ce n'est pas corrigé.",
       "extra": null,
       "fullyObserved": false,
       "changeFromClassic": "changed",
       "classicText": "Gives the Paladin's damaging melee attacks a chance to reduce the target's Strength and Agility by 5%",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "retribution-3-2",
       "name_en": "Sanctified Judgement",
       "icon": "spell_holy_righteousfury",
       "row": 3,
       "col": 2,
       "maxRanks": 3,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Gives your Judgement ability a 33% chance to return 20% of the Mana cost of the judged seal.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Gives your Judgement ability a 66% chance to return 40% of the Mana cost of the judged seal.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Gives your Judgement ability a 100% chance to return 60% of the Mana cost of the judged seal.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "retribution-3-3",
       "name_en": "Seal of Command",
       "icon": "ability_warrior_innerrage",
       "row": 3,
       "col": 3,
       "maxRanks": 1,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "actif",
       "skill": {
        "cost": "65 Mana",
        "range": null,
        "castTime": "Instant",
        "cooldown": null
       },
       "costLine": "65 Mana | Instant",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Gives the Paladin a chance to deal additional Holy damage equal to 70% of normal weapon damage. Only one Seal can be active on the Paladin at any one time. Lasts 30 sec.\n\nUnleashing this Seal's energy will judge an enemy, instantly causing 68 to 73 Holy damage, 137 to 146 if the target is stunned or incapacitated.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Gives the Paladin a chance to deal additional Holy damage equal to 70% of normal weapon damage. Only one Seal can be active on the Paladin at any one time. Lasts 30 sec.Unleashing this Seal's energy will judge an enemy, instantly causing 68 to 73 Holy damage, 137 to 146 if the target is stunned or incapacitated.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "retribution-3-4",
       "name_en": "Pursuit of Justice",
       "icon": "spell_holy_persuitofjustice",
       "row": 3,
       "col": 4,
       "maxRanks": 2,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases movement speed and mounted movement speed by 8%. This does not stack with other movement speed increasing effects.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases movement speed and mounted movement speed by 15%. This does not stack with other movement speed increasing effects.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases movement and mounted movement speed by 4%. This does not stack with other movement speed increasing effects.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "retribution-4-1",
       "name_en": "Eye for an Eye",
       "icon": "spell_holy_eyeforaneye",
       "row": 4,
       "col": 1,
       "maxRanks": 2,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "All critical strikes against you cause 5% of the damage taken to the attacker as well. The damage caused by Eye for an Eye will not exceed 50% of the Paladin's total health.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "All critical strikes against you cause 10% of the damage taken to the attacker as well. The damage caused by Eye for an Eye will not exceed 50% of the Paladin's total health.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "All spell criticals against you cause 15% of the damage taken to the caster as well. The damage caused by Eye for an Eye will not exceed 50% of the Paladin's total health.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "retribution-4-3",
       "name_en": "Sacred Arbiter",
       "icon": "spell_holy_righteousfury",
       "row": 4,
       "col": 3,
       "maxRanks": 1,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the damage of your Holy Strike ability by 10% and causes it to refresh all Judgement effects on the target.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "retribution-4-4",
       "name_en": "Crusade",
       "icon": "spell_holy_crusade",
       "row": 4,
       "col": 4,
       "maxRanks": 2,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases all damage dealt by 1%. Increased by an additional 1% against Demon and Undead targets.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases all damage dealt by 2%. Increased by an additional 2% against Demon and Undead targets.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "retribution-5-1",
       "name_en": "Two-Handed Weapon Specialization",
       "icon": "inv_hammer_04",
       "row": 5,
       "col": 1,
       "maxRanks": 3,
       "pointsRequired": 20,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the damage you deal with two-handed melee weapons by 3%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the damage you deal with two-handed melee weapons by 6%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the damage you deal with two-handed melee weapons by 9%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the damage you deal with two-handed melee weapons by 2%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "retribution-5-2",
       "name_en": "Vengeance",
       "icon": "ability_racial_avatar",
       "row": 5,
       "col": 2,
       "maxRanks": 3,
       "pointsRequired": 20,
       "prerequisite": "retribution-3-2",
       "arrow": "l2",
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases your Physical and Holy damage dealt by 1% for 30 sec after landing a critical strike. Stacks up to 5 times.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases your Physical and Holy damage dealt by 2% for 30 sec after landing a critical strike. Stacks up to 5 times.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases your Physical and Holy damage dealt by 3% for 30 sec after landing a critical strike. Stacks up to 5 times.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Gives you a 3% bonus to Physical and Holy damage you deal for 8 sec after dealing a critical strike from a weapon swing, spell, or ability.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "retribution-5-3",
       "name_en": "Repentance",
       "icon": "spell_holy_prayerofhealing",
       "row": 5,
       "col": 3,
       "maxRanks": 1,
       "pointsRequired": 20,
       "prerequisite": null,
       "arrow": null,
       "kind": "actif",
       "skill": {
        "cost": "60 Mana",
        "range": "20",
        "castTime": "Instant",
        "cooldown": "1 min"
       },
       "costLine": "60 Mana | Instant | 20 yd range | 1 min cooldown",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Puts the enemy target in a state of meditation, incapacitating them for up to 6 sec. Any damage caused will awaken the target. Only works against Humanoids.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "moved",
       "classicText": "Puts the enemy target in a state of meditation, incapacitating them for up to 6 sec. Any damage caused will awaken the target. Only works against Humanoids.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "retribution-6-2",
       "name_en": "Champion of the Light",
       "icon": "spell_holy_championsbond",
       "row": 6,
       "col": 2,
       "maxRanks": 3,
       "pointsRequired": 25,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases your spell damage and healing by up to 33% of your Intellect.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases your spell damage and healing by up to 66% of your Intellect.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases your spell damage and healing by up to 100% of your Intellect.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [
        {
         "field": "name",
         "foreverTalents": "Champion of the Light",
         "wowtbc": "Champion of Light"
        }
       ],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "retribution-6-3",
       "name_en": "Instrument of Law",
       "icon": "ability_paladin_hammeroftherighteous",
       "row": 6,
       "col": 3,
       "maxRanks": 2,
       "pointsRequired": 25,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the cast time of your Hammer of Wrath by 0.5 sec, and reduces all threat you generate by 10% while Righteous Fury is not active.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the cast time of your Hammer of Wrath by 1.0 sec, and reduces all threat you generate by 20% while Righteous Fury is not active.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "retribution-7-2",
       "name_en": "Twist of Light",
       "icon": "spell_holy_divineintervention",
       "row": 7,
       "col": 2,
       "maxRanks": 1,
       "pointsRequired": 30,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [
        "Level 40"
       ],
       "ranks": [
        {
         "rank": 1,
         "text": "When you replace your Seal of Command, Seal of Righteousness, Seal of Fury, or Seal of Justice with a different Seal, gain an Echo. Your next melee attack applies the replaced Seal's effects, consuming the Echo.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      }
     ],
     "removedFromClassic": [
      {
       "name_en": "Improved Blessing of Might",
       "maxRanks": 5,
       "row": 1,
       "text": "Increases the melee attack power bonus of your Blessing of Might by 4%."
      },
      {
       "name_en": "Improved Seal of the Crusader",
       "maxRanks": 3,
       "row": 2,
       "text": "Increases the melee attack power bonus of your Seal of the Crusader and the Holy damage increase of your Judgement of the Crusader by 5%."
      },
      {
       "name_en": "Improved Retribution Aura",
       "maxRanks": 2,
       "row": 4,
       "text": "Increases the damage done by your Retribution Aura by 25%."
      },
      {
       "name_en": "Sanctity Aura",
       "maxRanks": 1,
       "row": 5,
       "text": "Increases Holy damage done by party members within 30 yards by 10%.  Players may only have one Aura on them per Paladin at any one time."
      }
     ],
     "disputed": []
    }
   ]
  },
  {
   "slug": "chasseur",
   "gameId": 3,
   "name_fr": "Chasseur",
   "name_en": "Hunter",
   "icon": "class_hunter",
   "status": "COMMUNAUTÉ",
   "sourceIds": [
    "forever-talents-releve",
    "wowtbc-forever-calculator",
    "wowhead-forever-talent-calc"
   ],
   "transcriptionNote": "Talent text transcribed from in-game tooltip video (hunter.json).",
   "trees": [
    {
     "key": "beast-mastery",
     "name_en": "Beast Mastery",
     "name_fr": "Maîtrise des bêtes",
     "icon": "ability_hunter_beasttaming",
     "backgroundId": 361,
     "talents": [
      {
       "key": "beast-mastery-1-2",
       "name_en": "Deadly Aspects",
       "icon": "ability_hunter_aspectofthemonkey",
       "row": 1,
       "col": 2,
       "maxRanks": 5,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "While Aspect of the Hawk is active, Auto Shot has a 2% chance of increasing ranged attack speed by 30% for 12 sec. While Aspect of the Beast is active, all melee auto attacks have a 2% chance of increasing melee attack speed by 30% for 12 sec.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "While Aspect of the Hawk is active, Auto Shot has a 4% chance of increasing ranged attack speed by 30% for 12 sec. While Aspect of the Beast is active, all melee auto attacks have a 4% chance of increasing melee attack speed by 30% for 12 sec.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "While Aspect of the Hawk is active, Auto Shot has a 6% chance of increasing ranged attack speed by 30% for 12 sec. While Aspect of the Beast is active, all melee auto attacks have a 6% chance of increasing melee attack speed by 30% for 12 sec.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "While Aspect of the Hawk is active, Auto Shot has a 8% chance of increasing ranged attack speed by 30% for 12 sec. While Aspect of the Beast is active, all melee auto attacks have a 8% chance of increasing melee attack speed by 30% for 12 sec.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "While Aspect of the Hawk is active, Auto Shot has a 10% chance of increasing ranged attack speed by 30% for 12 sec. While Aspect of the Beast is active, all melee auto attacks have a 10% chance of increasing melee attack speed by 30% for 12 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "While Aspect of the Hawk is active, all normal ranged attacks have a 1% chance of increasing ranged attack speed by 30% for 12 sec.",
       "classicRenamedFrom": "Improved Aspect of the Hawk",
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "beast-mastery-1-3",
       "name_en": "Endurance Training",
       "icon": "spell_nature_reincarnation",
       "row": 1,
       "col": 3,
       "maxRanks": 5,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the Health and Armor of your pets by 3%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the Health and Armor of your pets by 6%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the Health and Armor of your pets by 9%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases the Health and Armor of your pets by 12%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases the Health and Armor of your pets by 15%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the Health of your pets by 3%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "beast-mastery-2-1",
       "name_en": "Focused Fire",
       "icon": "ability_hunter_focusfire",
       "row": 2,
       "col": 1,
       "maxRanks": 2,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases all damage you and your pet deal by 1% while your pet is active.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases all damage you and your pet deal by 2% while your pet is active.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "beast-mastery-2-2",
       "name_en": "Improved Aspect of the Monkey",
       "icon": "ability_hunter_aspectofthemonkey",
       "row": 2,
       "col": 2,
       "maxRanks": 3,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the Dodge bonus of your Aspect of the Monkey by 2%. Additionally, your pet gains 50% of the effect of your Aspect of the Monkey ability.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the Dodge bonus of your Aspect of the Monkey by 4%. Additionally, your pet gains 50% of the effect of your Aspect of the Monkey ability.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the Dodge bonus of your Aspect of the Monkey by 6%. Additionally, your pet gains 50% of the effect of your Aspect of the Monkey ability.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the Dodge bonus of your Aspect of the Monkey by 1%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "beast-mastery-2-3",
       "name_en": "Pathfinding",
       "icon": "ability_mount_jungletiger",
       "row": 2,
       "col": 3,
       "maxRanks": 2,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the speed bonus of your Aspect of the Cheetah and Aspect of the Pack by 3%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the speed bonus of your Aspect of the Cheetah and Aspect of the Pack by 6%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "moved",
       "classicText": "Increases the speed bonus of your Aspect of the Cheetah and Aspect of the Pack by 3%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "beast-mastery-2-4",
       "name_en": "Improved Revive Pet",
       "icon": "ability_hunter_beastsoothe",
       "row": 2,
       "col": 4,
       "maxRanks": 2,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Revive Pet's casting time is reduced by 3 sec, mana cost is reduced by 20%, and increases the health your pet returns with by an additional 15%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Revive Pet's casting time is reduced by 6 sec, mana cost is reduced by 40%, and increases the health your pet returns with by an additional 30%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "Revive Pet's casting time is reduced by 3 sec, mana cost is reduced by 20%, and increases the health your pet returns with by an additional 15%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "beast-mastery-3-2",
       "name_en": "Bestial Swiftness",
       "icon": "ability_druid_dash",
       "row": 3,
       "col": 2,
       "maxRanks": 1,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the movement speed of your pets by 30%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the outdoor movement speed of your pets by 30%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "beast-mastery-3-3",
       "name_en": "Unleashed Fury",
       "icon": "ability_bullrush",
       "row": 3,
       "col": 3,
       "maxRanks": 5,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the damage done by your pets and hawks by 3%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the damage done by your pets and hawks by 6%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the damage done by your pets and hawks by 9%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases the damage done by your pets and hawks by 12%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases the damage done by your pets and hawks by 15%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the damage done by your pets by 4%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "beast-mastery-4-1",
       "name_en": "Improved Mend Pet",
       "icon": "ability_hunter_mendpet",
       "row": 4,
       "col": 1,
       "maxRanks": 2,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Gives your Mend Pet spell a 15% chance of cleansing 1 Curse, Disease, Magic, or Poison effect from your pet each time it heals and reduces the Mana cost by 10%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Gives your Mend Pet spell a 50% chance of cleansing 1 Curse, Disease, Magic, or Poison effect from your pet each time it heals and reduces the Mana cost by 20%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Gives the Mend Pet spell a 15% chance of cleansing 1 Curse, Disease, Magic or Poison effect from the pet each tick.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "beast-mastery-4-3",
       "name_en": "Ferocity",
       "icon": "inv_misc_monsterclaw_04",
       "row": 4,
       "col": 3,
       "maxRanks": 5,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the critical strike chance of your pets and hawks by 2%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the critical strike chance of your pets and hawks by 4%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the critical strike chance of your pets and hawks by 6%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases the critical strike chance of your pets and hawks by 8%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases the critical strike chance of your pets and hawks by 10%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the critical strike chance of your pets by 3%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "beast-mastery-4-4",
       "name_en": "Summon Hawk",
       "icon": "ability_eyeoftheowl",
       "row": 4,
       "col": 4,
       "maxRanks": 1,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "actif",
       "skill": {
        "cost": "80 Mana",
        "range": "35",
        "castTime": "Instant",
        "cooldown": "6 sec"
       },
       "costLine": "80 Mana | 35 yd range | Instant | 6 sec cooldown",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Command a hawk to dive-bomb your targeted enemy, dealing 53 Physical damage and continuing its assault for 18 sec. Only 2 hawks can be active at once. Summon Hawk shares its cooldown with Arcane Shot.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "beast-mastery-5-1",
       "name_en": "Spirit Bond",
       "icon": "classic_ability_druid_demoralizingroar",
       "row": 5,
       "col": 1,
       "maxRanks": 2,
       "pointsRequired": 20,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "While your pet is active, you and your pet will regenerate 1% of total health every 10 sec.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "While your pet is active, you and your pet will regenerate 1% of total health every 5 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "While your pet is active, you and your pet will regenerate 1% of total health every 10 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "beast-mastery-5-2",
       "name_en": "Intimidation",
       "icon": "ability_devour",
       "row": 5,
       "col": 2,
       "maxRanks": 1,
       "pointsRequired": 20,
       "prerequisite": "beast-mastery-3-2",
       "arrow": "l2",
       "kind": "actif",
       "skill": {
        "cost": "84 Mana",
        "range": "100",
        "castTime": "Instant",
        "cooldown": "1 min"
       },
       "costLine": "84 Mana | 100 yd range | Instant | 1 min cooldown",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Command your pet to Stun the target for 3 sec on its next successful attack, which also gains 100% increased critical strike chance. Generates high threat.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Command your pet to intimidate the target on the next successful melee attack, causing a high amount of threat and stunning the target for 3 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "beast-mastery-5-4",
       "name_en": "Bestial Discipline",
       "icon": "spell_nature_abolishmagic",
       "row": 5,
       "col": 4,
       "maxRanks": 2,
       "pointsRequired": 20,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the Focus regeneration of your pets by 10% and allows 25% of your Mana regeneration to continue while casting.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the Focus regeneration of your pets by 20% and allows 50% of your Mana regeneration to continue while casting.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the Focus regeneration of your pets by 10%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "beast-mastery-6-3",
       "name_en": "Frenzy",
       "icon": "inv_misc_monsterclaw_03",
       "row": 6,
       "col": 3,
       "maxRanks": 5,
       "pointsRequired": 25,
       "prerequisite": "beast-mastery-4-3",
       "arrow": "l2",
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Gives your pet a 20% chance to gain a 30% attack speed increase for 8 sec after dealing a critical strike.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Gives your pet a 40% chance to gain a 30% attack speed increase for 8 sec after dealing a critical strike.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Gives your pet a 60% chance to gain a 30% attack speed increase for 8 sec after dealing a critical strike.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Gives your pet a 80% chance to gain a 30% attack speed increase for 8 sec after dealing a critical strike.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Gives your pet a 100% chance to gain a 30% attack speed increase for 8 sec after dealing a critical strike.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "Gives your pet a 20% chance to gain a 30% attack speed increase for 8 sec after dealing a critical strike.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "beast-mastery-7-2",
       "name_en": "Bestial Wrath",
       "icon": "ability_druid_ferociousbite",
       "row": 7,
       "col": 2,
       "maxRanks": 1,
       "pointsRequired": 30,
       "prerequisite": "beast-mastery-5-2",
       "arrow": null,
       "kind": "actif",
       "skill": {
        "cost": "125 Mana",
        "range": "100",
        "castTime": "Instant",
        "cooldown": "2 min"
       },
       "costLine": "125 Mana | 100 yd range | Instant | 2 min cooldown",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Send your pet into a rage causing 50% additional damage for 18 sec. While enraged, the beast does not feel pity or remorse or fear and it cannot be stopped unless killed.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "Send your pet into a rage causing 50% additional damage for 18 sec. While enraged, the beast does not feel pity or remorse or fear and it cannot be stopped unless killed.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      }
     ],
     "removedFromClassic": [
      {
       "name_en": "Improved Eyes of the Beast",
       "maxRanks": 2,
       "row": 2,
       "text": "Increases the duration of your Eyes of the Beast by 30 sec."
      },
      {
       "name_en": "Thick Hide",
       "maxRanks": 3,
       "row": 2,
       "text": "Increases the Armor rating of your pets by 10%."
      }
     ],
     "disputed": []
    },
    {
     "key": "marksmanship",
     "name_en": "Marksmanship",
     "name_fr": "Précision",
     "icon": "ability_marksmanship",
     "backgroundId": 363,
     "talents": [
      {
       "key": "marksmanship-1-1",
       "name_en": "Hawk Eye",
       "icon": "ability_townwatch",
       "row": 1,
       "col": 1,
       "maxRanks": 3,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the range of your ranged weapons by 2 yards.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the range of your ranged weapons by 4 yards.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the range of your ranged weapons by 6 yards.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "moved",
       "classicText": "Increases the range of your ranged weapons by 2 yards.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "marksmanship-1-2",
       "name_en": "Improved Concussive Shot",
       "icon": "spell_frost_stun",
       "row": 1,
       "col": 2,
       "maxRanks": 5,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Gives your Concussive Shot a 4% chance to stun the target for 3 sec.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Gives your Concussive Shot a 8% chance to stun the target for 3 sec.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Gives your Concussive Shot a 12% chance to stun the target for 3 sec.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Gives your Concussive Shot a 16% chance to stun the target for 3 sec.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Gives your Concussive Shot a 20% chance to stun the target for 3 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "Gives your Concussive Shot a 4% chance to stun the target for 3 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "marksmanship-1-3",
       "name_en": "Lethal Attacks",
       "icon": "ability_hunter_criticalshot",
       "row": 1,
       "col": 3,
       "maxRanks": 5,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases your critical strike chance with all attacks by 1%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases your critical strike chance with all attacks by 2%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases your critical strike chance with all attacks by 3%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases your critical strike chance with all attacks by 4%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases your critical strike chance with all attacks by 5%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases your critical strike chance with ranged weapons by 1%.",
       "classicRenamedFrom": "Lethal Shots",
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "marksmanship-2-1",
       "name_en": "Improved Stings",
       "icon": "ability_hunter_quickshot",
       "row": 2,
       "col": 1,
       "maxRanks": 3,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the damage of your Serpent Sting ability by 6%, reduces the cooldown of your Viper Sting ability by 2 sec, and increases the duration of your Scorpid Sting ability by 15 sec.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increased the damage of your Serpent Sting ability by 13%, reduces the cooldown of your Viper Sting ability by 4 sec, and increases the duration of your Scorpid Sting ability by 30 sec.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increased the damage of your Serpent Sting ability by 20%, reduces the cooldown of your Viper Sting ability by 6 sec, and increases the duration of your Scorpid Sting ability by 45 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "marksmanship-2-2",
       "name_en": "Efficiency",
       "icon": "spell_frost_wizardmark",
       "row": 2,
       "col": 2,
       "maxRanks": 5,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the Mana cost of your Shots, Stings, and melee abilities by 3%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the Mana cost of your Shots, Stings, and melee abilities by 6%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Reduces the Mana cost of your Shots, Stings, and melee abilities by 9%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Reduces the Mana cost of your Shots, Stings, and melee abilities by 12%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Reduces the Mana cost of your Shots, Stings, and melee abilities by 15%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Reduces the Mana cost of your Shots and Stings by 2%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "marksmanship-2-3",
       "name_en": "Careful Aim",
       "icon": "ability_hunter_zenarchery",
       "row": 2,
       "col": 3,
       "maxRanks": 5,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases your Attack Power by 20% of your Intellect.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases your Attack Power by 40% of your Intellect.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases your Attack Power by 60% of your Intellect.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases your Attack Power by 80% of your Intellect.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases your Attack Power by 100% of your Intellect.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "marksmanship-3-1",
       "name_en": "Rapid Killing",
       "icon": "ability_hunter_rapidkilling",
       "row": 3,
       "col": 1,
       "maxRanks": 2,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the cooldown on your Rapid Fire ability by 1 min. In addition, when you kill a non-trivial enemy or it dies while afflicted by your Serpent Sting, you gain Rapid Killing, increasing the damage of your next Shot ability within 20 sec by 10%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the cooldown on your Rapid Fire ability by 2 min. In addition, when you kill a non-trivial enemy or it dies while afflicted by your Serpent Sting, you gain Rapid Killing, increasing the damage of your next Shot ability within 20 sec by 20%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "marksmanship-3-2",
       "name_en": "Improved Arcane Shot",
       "icon": "ability_impalingbolt",
       "row": 3,
       "col": 2,
       "maxRanks": 5,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the cooldown of your Arcane Shot by 0.3 sec. Does not affect the cooldown of abilities which share a cooldown with Arcane Shot.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the cooldown of your Arcane Shot by 0.6 sec. Does not affect the cooldown of abilities which share a cooldown with Arcane Shot.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Reduces the cooldown of your Arcane Shot by 0.9 sec. Does not affect the cooldown of abilities which share a cooldown with Arcane Shot.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Reduces the cooldown of your Arcane Shot by 1.2 sec. Does not affect the cooldown of abilities which share a cooldown with Arcane Shot.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Reduces the cooldown of your Arcane Shot by 1.5 sec. Does not affect the cooldown of abilities which share a cooldown with Arcane Shot.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Reduces the cooldown of your Arcane Shot by 0.2 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "marksmanship-3-4",
       "name_en": "Lone Wolf",
       "icon": "spell_nature_spiritwolf",
       "row": 3,
       "col": 4,
       "maxRanks": 1,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "You deal 20% increased damage with all attacks while you do not have an active pet.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "marksmanship-4-2",
       "name_en": "Trueshot Aura",
       "icon": "ability_trueshot",
       "row": 4,
       "col": 2,
       "maxRanks": 1,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "actif",
       "skill": {
        "cost": "180 Mana",
        "range": null,
        "castTime": "Instant",
        "cooldown": null
       },
       "costLine": "180 Mana | Instant",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the Ranged Attack Power of party members within 45 yards by 30. Lasts 30 min.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the attack power of party members within 45 yards by 50 . Lasts 30 min.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "marksmanship-4-3",
       "name_en": "Mortal Shots",
       "icon": "ability_piercedamage",
       "row": 4,
       "col": 3,
       "maxRanks": 5,
       "pointsRequired": 15,
       "prerequisite": "marksmanship-2-3",
       "arrow": "l2",
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the critical strike damage bonus on all ranged abilities by 6%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the critical strike damage bonus on all ranged abilities by 12%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the critical strike damage bonus on all ranged abilities by 18%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases the critical strike damage bonus on all ranged abilities by 24%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases the critical strike damage bonus on all ranged abilities by 30%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases your ranged weapon critical strike damage bonus by 6%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "marksmanship-4-4",
       "name_en": "Improved Serpent Sting",
       "icon": "ability_hunter_quickshot",
       "row": 4,
       "col": 4,
       "maxRanks": 5,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the damage done by your Serpent Sting by 2%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the damage done by your Serpent Sting by 4%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the damage done by your Serpent Sting by 6%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases the damage done by your Serpent Sting by 8%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases the damage done by your Serpent Sting by 10%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "moved",
       "classicRenamedFrom": null,
       "classicText": "Increases the damage done by your Serpent Sting by 2%.",
       "divergences": [],
       "presentIn": [
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "marksmanship-5-1",
       "name_en": "Rapid Recuperation",
       "icon": "ability_hunter_rapidregeneration",
       "row": 5,
       "col": 1,
       "maxRanks": 2,
       "pointsRequired": 20,
       "prerequisite": "marksmanship-3-1",
       "arrow": "l2",
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Hitting a target with your Serpent Sting ability grants you 25% and consuming Rapid Killing grants you 50% of your Mana regeneration while casting for the next 15 sec.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Hitting a target with your Serpent Sting ability grants you 50% and consuming Rapid Killing grants you 100% of your Mana regeneration while casting for the next 15 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "marksmanship-5-3",
       "name_en": "Barrage",
       "icon": "ability_upgrademoonglaive",
       "row": 5,
       "col": 3,
       "maxRanks": 3,
       "pointsRequired": 20,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the damage done by your Multi-Shot, Aimed Shot, and Volley abilities by 3%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the damage done by your Multi-Shot, Aimed Shot, and Volley abilities by 7%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the damage done by your Multi-Shot, Aimed Shot, and Volley abilities by 10%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the damage done by your Multi-Shot and Volley spells by 5%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "marksmanship-5-4",
       "name_en": "Scatter Shot",
       "icon": "ability_golemstormbolt",
       "row": 5,
       "col": 4,
       "maxRanks": 1,
       "pointsRequired": 20,
       "prerequisite": null,
       "arrow": null,
       "kind": "actif",
       "skill": {
        "cost": "84 Mana",
        "range": "15",
        "castTime": "Instant",
        "cooldown": "30 sec"
       },
       "costLine": "84 Mana | 15 yd range | Instant | 30 sec cooldown",
       "requires": [
        "Ranged Weapon"
       ],
       "ranks": [
        {
         "rank": 1,
         "text": "A short-range shot that deals 50% weapon damage and disorients the target for 4 sec. Any damage caused will remove the effect. Turns off your attack when used.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "A short-range shot that deals 50% weapon damage and disorients the target for 4 sec. Any damage caused will remove the effect. Turns off your attack when used.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "marksmanship-6-3",
       "name_en": "Ranged Weapon Specialization",
       "icon": "inv_weapon_rifle_06",
       "row": 6,
       "col": 3,
       "maxRanks": 5,
       "pointsRequired": 25,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the damage you deal with ranged weapons by 1%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the damage you deal with ranged weapons by 2%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the damage you deal with ranged weapons by 3%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases the damage you deal with ranged weapons by 4%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases the damage you deal with ranged weapons by 5%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "Increases the damage you deal with ranged weapons by 1%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "marksmanship-7-2",
       "name_en": "Sniper Shot",
       "icon": "ability_hunter_snipershot",
       "row": 7,
       "col": 2,
       "maxRanks": 1,
       "pointsRequired": 30,
       "prerequisite": "marksmanship-4-2",
       "arrow": "l3",
       "kind": "actif",
       "skill": {
        "cost": "365 Mana",
        "range": "8-35",
        "castTime": "4 sec cast",
        "cooldown": "15 sec"
       },
       "costLine": "365 Mana | 8-35 yd range | 4 sec cast | 15 sec cooldown",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "A steady snipe that increases ranged damage by 160.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "An aimed shot that increases ranged damage by 70.",
       "classicRenamedFrom": "Aimed Shot",
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      }
     ],
     "removedFromClassic": [
      {
       "name_en": "Improved Hunter's Mark",
       "maxRanks": 5,
       "row": 2,
       "text": "Increases the Ranged Attack Power bonus of your Hunter's Mark spell by 3%."
      },
      {
       "name_en": "Improved Scorpid Sting",
       "maxRanks": 3,
       "row": 5,
       "text": "Reduces the Stamina of targets affected by your Scorpid Sting by 10% of the amount of Strength reduced."
      }
     ],
     "disputed": []
    },
    {
     "key": "survival",
     "name_en": "Survival",
     "name_fr": "Survie",
     "icon": "ability_hunter_swiftstrike",
     "backgroundId": 362,
     "talents": [
      {
       "key": "survival-1-2",
       "name_en": "Improved Tracking",
       "icon": "ability_hunter_improvedtracking",
       "row": 1,
       "col": 2,
       "maxRanks": 5,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "While tracking Beasts, Demons, Dragonkin, Elementals, Giants, Humanoids, or Undead, all damage you deal to the tracked creature type is increased by 1%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "While tracking Beasts, Demons, Dragonkin, Elementals, Giants, Humanoids, or Undead, all damage you deal to the tracked creature type is increased by 2%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "While tracking Beasts, Demons, Dragonkin, Elementals, Giants, Humanoids, or Undead, all damage you deal to the tracked creature type is increased by 3%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "While tracking Beasts, Demons, Dragonkin, Elementals, Giants, Humanoids, or Undead, all damage you deal to the tracked creature type is increased by 4%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "While tracking Beasts, Demons, Dragonkin, Elementals, Giants, Humanoids, or Undead, all damage you deal to the tracked creature type is increased by 5%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "survival-1-3",
       "name_en": "Deflection",
       "icon": "ability_parry",
       "row": 1,
       "col": 3,
       "maxRanks": 5,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases your Parry chance by 2%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases your Parry chance by 4%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases your Parry chance by 6%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases your Parry chance by 8%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases your Parry chance by 10%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases your Parry chance by 1%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "survival-2-1",
       "name_en": "Entrapment",
       "icon": "spell_nature_stranglevines",
       "row": 2,
       "col": 1,
       "maxRanks": 5,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "When your traps are triggered, all affected targets are Entrapped, preventing them from moving for 1 sec.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "When your traps are triggered, all affected targets are Entrapped, preventing them from moving for 2 sec.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "When your traps are triggered, all affected targets are Entrapped, preventing them from moving for 3 sec.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "When your traps are triggered, all affected targets are Entrapped, preventing them from moving for 4 sec.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "When your traps are triggered, all affected targets are Entrapped, preventing them from moving for 5 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Gives your Immolation Trap, Frost Trap, and Explosive Trap a 5% chance to entrap the target, preventing them from moving for 5 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "survival-2-2",
       "name_en": "Savage Strikes",
       "icon": "ability_racial_bloodrage",
       "row": 2,
       "col": 2,
       "maxRanks": 2,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the critical strike chance of all your melee abilities by 2%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the critical strike chance of all your melee abilities by 4%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the critical strike chance of Raptor Strike and Mongoose Bite by 10%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "survival-2-3",
       "name_en": "Survivalist",
       "icon": "spell_shadow_twilight",
       "row": 2,
       "col": 3,
       "maxRanks": 5,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases your total Health by 2%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases your total Health by 4%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases your total Health by 6%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases your total Health by 8%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases your total Health by 10%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases total health by 2%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "survival-2-4",
       "name_en": "Improved Wing Clip",
       "icon": "ability_rogue_trip",
       "row": 2,
       "col": 4,
       "maxRanks": 3,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Gives your Wing Clip ability a 7% chance to immobilize the target for 5 sec.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Gives your Wing Clip ability a 13% chance to immobilize the target for 5 sec.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Gives your Wing Clip ability a 20% chance to immobilize the target for 5 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Gives your Wing Clip ability a 4% chance to immobilize the target for 5 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "survival-3-1",
       "name_en": "Clever Traps",
       "icon": "spell_nature_timestop",
       "row": 3,
       "col": 1,
       "maxRanks": 2,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the duration of Freezing and Frost trap effects by 15% and the damage of Immolation and Explosive trap effects by 15%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the duration of Freezing and Frost trap effects by 30% and the damage of Immolation and Explosive trap effects by 30%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "Increases the duration of Freezing and Frost trap effects by 15% and the damage of Immolation and Explosive trap effects by 15%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "survival-3-2",
       "name_en": "Surefooted",
       "icon": "ability_kick",
       "row": 3,
       "col": 2,
       "maxRanks": 3,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases your hit chance by 1% and reduces the duration of movement impairing effects on you by 10%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases your hit chance by 2% and reduces the duration of movement impairing effects on you by 20%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases your hit chance by 3% and reduces the duration of movement impairing effects on you by 30%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases hit chance by 1% and increases the chance movement impairing effects will be resisted by an additional 5%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "survival-3-3",
       "name_en": "Deterrence",
       "icon": "ability_whirlwind",
       "row": 3,
       "col": 3,
       "maxRanks": 1,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "actif",
       "skill": {
        "cost": null,
        "range": null,
        "castTime": "Instant",
        "cooldown": "5 min"
       },
       "costLine": "Instant | 5 min cooldown",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "When activated, increases your Dodge and Parry chance by 25% for 10 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "When activated, increases your Dodge and Parry chance by 25% for 10 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "survival-4-1",
       "name_en": "Survival Tactics",
       "icon": "ability_rogue_feint",
       "row": 4,
       "col": 1,
       "maxRanks": 2,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases your chance to hit with your Trap and Feign Death abilities by 5%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases your chance to hit with your Trap and Feign Death abilities by 10%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "survival-4-2",
       "name_en": "Predator's Edge",
       "icon": "ability_hunter_huntingparty",
       "row": 4,
       "col": 2,
       "maxRanks": 5,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases your melee critical strike damage by 6% and your offhand weapon damage by 10%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases your melee critical strike damage by 12% and your offhand weapon damage by 20%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases your melee critical strike damage by 18% and your offhand weapon damage by 30%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases your melee critical strike damage by 24% and your offhand weapon damage by 40%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases your melee critical strike damage by 30% and your offhand weapon damage by 50%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "survival-4-3",
       "name_en": "Counterattack",
       "icon": "ability_warrior_challange",
       "row": 4,
       "col": 3,
       "maxRanks": 1,
       "pointsRequired": 15,
       "prerequisite": "survival-3-3",
       "arrow": "l1",
       "kind": "actif",
       "skill": {
        "cost": "30 Mana",
        "range": "Melee",
        "castTime": "Instant",
        "cooldown": "5 sec"
       },
       "costLine": "30 Mana | Melee Range | Instant | 5 sec cooldown",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "A strike that becomes active after parrying an opponent's attack. This attack deals 50% weapon damage plus 26 and immobilizes the target for 5 sec. Counterattack cannot be blocked, dodged, or parried.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "A strike that becomes active after parrying an opponent's attack. This attack deals 40 damage and immobilizes the target for 5 sec. Counterattack cannot be blocked, dodged, or parried.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "survival-5-1",
       "name_en": "Resourcefulness",
       "icon": "ability_hunter_resourcefulness",
       "row": 5,
       "col": 1,
       "maxRanks": 2,
       "pointsRequired": 20,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the mana cost of your Trap abilities and melee abilities by 30%. In addition, your critical strikes have a 30% chance to allow 50% of your Mana regeneration to continue while casting for 30 sec.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the mana cost of your Trap abilities and melee abilities by 60%. In addition, your critical strikes have a 60% chance to allow 50% of your Mana regeneration to continue while casting for 30 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "survival-5-2",
       "name_en": "Expose Prey",
       "icon": "ability_hunter_markedfordeath",
       "row": 5,
       "col": 2,
       "maxRanks": 2,
       "pointsRequired": 20,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Your attacks against targets with Hunter's Mark have a 5% chance to activate your Mongoose Bite for 5 sec.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Your attacks against targets with Hunter's Mark have a 10% chance to activate your Mongoose Bite for 5 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "survival-5-3",
       "name_en": "Survivalist's Discipline",
       "icon": "ability_hunter_survivalinstincts",
       "row": 5,
       "col": 3,
       "maxRanks": 2,
       "pointsRequired": 20,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the cooldown of your Trap and Deterrence abilities by 20%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the cooldown of your Trap and Deterrence abilities by 40%.",
         "observed": false
        }
       ],
       "rankNote": "Le client de la bêta affiche « $m% » au rang 2 — une variable de formule interne non résolue, pas une valeur. Non retenu tant que ce n'est pas corrigé.",
       "extra": null,
       "fullyObserved": false,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "survival-5-4",
       "name_en": "Strider Kick",
       "icon": "ability_hunter_pet_tallstrider",
       "row": 5,
       "col": 4,
       "maxRanks": 1,
       "pointsRequired": 20,
       "prerequisite": null,
       "arrow": null,
       "kind": "actif",
       "skill": {
        "cost": "61 Mana",
        "range": "Melee",
        "castTime": "Instant",
        "cooldown": "8 sec"
       },
       "costLine": "61 Mana | Melee Range | Instant | 8 sec cooldown",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "A powerful kick that deals 100% melee weapon damage.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "survival-6-3",
       "name_en": "Lightning Reflexes",
       "icon": "spell_nature_invisibilty",
       "row": 6,
       "col": 3,
       "maxRanks": 5,
       "pointsRequired": 25,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases your Agility by 2%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases your Agility by 4%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases your Agility by 6%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases your Agility by 8%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases your Agility by 10%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases your Agility by 3%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "survival-7-2",
       "name_en": "Lacerating Strikes",
       "icon": "ability_druid_lacerate",
       "row": 7,
       "col": 2,
       "maxRanks": 1,
       "pointsRequired": 30,
       "prerequisite": "survival-5-2",
       "arrow": "l2",
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Your Mongoose Bite also causes the target to Bleed for damage over 21 sec equal to 40% of the damage done by Mongoose Bite.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      }
     ],
     "removedFromClassic": [
      {
       "name_en": "Monster Slaying",
       "maxRanks": 3,
       "row": 1,
       "text": "Increases all damage caused against Beasts, Giants and Dragonkin targets by 1% and increases critical damage caused against Beasts, Giants and Dragonkin targets by an additional 1%."
      },
      {
       "name_en": "Humanoid Slaying",
       "maxRanks": 3,
       "row": 1,
       "text": "Increases all damage caused against Humanoid targets by 1% and increases critical damage caused against Humanoid targets by an additional 1%."
      },
      {
       "name_en": "Trap Mastery",
       "maxRanks": 2,
       "row": 4,
       "text": "Decreases the chance enemies will resist trap effects by 5%."
      },
      {
       "name_en": "Improved Feign Death",
       "maxRanks": 2,
       "row": 4,
       "text": "Reduces the chance your Feign Death ability will be resisted by 2%."
      },
      {
       "name_en": "Killer Instinct",
       "maxRanks": 3,
       "row": 5,
       "text": "Increases your critical strike chance with all attacks by 1%."
      },
      {
       "name_en": "Wyvern Sting",
       "maxRanks": 1,
       "row": 7,
       "text": "A stinging shot that puts the target to sleep for 12 sec.  Any damage will cancel the effect.  When the target wakes up, the Sting causes 300 Nature damage over 6 sec.  Only usable out of combat.  Only one Sting per Hunter can be active on the target at a time."
      }
     ],
     "disputed": []
    }
   ]
  },
  {
   "slug": "voleur",
   "gameId": 4,
   "name_fr": "Voleur",
   "name_en": "Rogue",
   "icon": "class_rogue",
   "status": "COMMUNAUTÉ",
   "sourceIds": [
    "forever-talents-releve",
    "wowtbc-forever-calculator",
    "wowhead-forever-talent-calc"
   ],
   "transcriptionNote": "Talent text transcribed from in-game tooltip video (rogue.json).",
   "trees": [
    {
     "key": "assassination",
     "name_en": "Assassination",
     "name_fr": "Assassinat",
     "icon": "ability_rogue_eviscerate",
     "backgroundId": 182,
     "talents": [
      {
       "key": "assassination-1-1",
       "name_en": "Improved Gouge",
       "icon": "ability_gouge",
       "row": 1,
       "col": 1,
       "maxRanks": 3,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the duration of your Gouge ability by 0.5 sec.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the duration of your Gouge ability by 1 sec.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the duration of your Gouge ability by 1.5 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the effect duration of your Gouge ability by 0.5 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "assassination-1-2",
       "name_en": "Remorseless Attacks",
       "icon": "ability_fiegndead",
       "row": 1,
       "col": 2,
       "maxRanks": 2,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "After killing a non-trivial enemy, gives you a 20% increased critical strike chance on your next Sinister Strike, Backstab, Ambush, Mutilate, or Ghostly Strike. Lasts 20 sec.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "After killing a non-trivial enemy, gives you a 40% increased critical strike chance on your next Sinister Strike, Backstab, Ambush, Mutilate, or Ghostly Strike. Lasts 20 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "After killing an opponent that yields experience or honor, gives you a 20% increased critical strike chance on your next Sinister Strike, Backstab, Ambush, or Ghostly Strike. Lasts 20 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "assassination-1-3",
       "name_en": "Malice",
       "icon": "ability_racial_bloodrage",
       "row": 1,
       "col": 3,
       "maxRanks": 5,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases your critical strike chance with all attacks and Poisons by 1%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases your critical strike chance with all attacks and Poisons by 2%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases your critical strike chance with all attacks and Poisons by 3%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases your critical strike chance with all attacks and Poisons by 4%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases your critical strike chance with all attacks and Poisons by 5%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases your critical strike chance by 1%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "assassination-2-1",
       "name_en": "Ruthlessness",
       "icon": "ability_druid_disembowel",
       "row": 2,
       "col": 1,
       "maxRanks": 3,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Gives your finishing moves a 20% chance to add a Combo Point to your target.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Gives your finishing moves a 40% chance to add a Combo Point to your target.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Gives your finishing moves a 60% chance to add a Combo Point to your target.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "Gives your finishing moves a 20% chance to add a combo point to your target.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "assassination-2-2",
       "name_en": "Murder",
       "icon": "spell_shadow_deathscream",
       "row": 2,
       "col": 2,
       "maxRanks": 2,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases all damage dealt by 2% against Humanoid and Giant targets.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases all damage dealt by 4% against Humanoid and Giant targets.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases all damage caused against Humanoid, Giant, Beast and Dragonkin targets by 1%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "assassination-2-4",
       "name_en": "Improved Slice and Dice",
       "icon": "ability_rogue_slicedice",
       "row": 2,
       "col": 4,
       "maxRanks": 3,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the duration of your Slice and Dice ability by 15%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the duration of your Slice and Dice ability by 30%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the duration of your Slice and Dice ability by 45%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "Increases the duration of your Slice and Dice ability by 15%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "assassination-3-1",
       "name_en": "Relentless Strikes",
       "icon": "ability_warrior_decisivestrike",
       "row": 3,
       "col": 1,
       "maxRanks": 1,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Your finishing moves have a 20% chance per Combo Point to restore 25 Energy.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "Your finishing moves have a 20% chance per combo point to restore 25 energy.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "assassination-3-2",
       "name_en": "Improved Expose Armor",
       "icon": "ability_warrior_riposte",
       "row": 3,
       "col": 2,
       "maxRanks": 2,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the Energy cost of your Expose Armor ability by 5, and refunds 1 Combo Point when cast with 5 Combo Points.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the Energy cost of your Expose Armor ability by 10, and refunds 2 Combo Points when cast with 5 Combo Points.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the armor reduced by your Expose Armor ability by 25%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "assassination-3-3",
       "name_en": "Lethality",
       "icon": "ability_criticalstrike",
       "row": 3,
       "col": 3,
       "maxRanks": 5,
       "pointsRequired": 10,
       "prerequisite": "assassination-1-3",
       "arrow": "l2",
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the critical strike damage bonus of your Sinister Strike, Gouge, Backstab, Mutilate, Ghostly Strike, and Hemorrhage abilities by 4%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the critical strike damage bonus of your Sinister Strike, Gouge, Backstab, Mutilate, Ghostly Strike, and Hemorrhage abilities by 8%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the critical strike damage bonus of your Sinister Strike, Gouge, Backstab, Mutilate, Ghostly Strike, and Hemorrhage abilities by 12%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases the critical strike damage bonus of your Sinister Strike, Gouge, Backstab, Mutilate, Ghostly Strike, and Hemorrhage abilities by 16%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases the critical strike damage bonus of your Sinister Strike, Gouge, Backstab, Mutilate, Ghostly Strike, and Hemorrhage abilities by 20%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the critical strike damage bonus of your Sinister Strike, Gouge, Backstab, Ghostly Strike, and Hemorrhage abilities by 6%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "assassination-4-1",
       "name_en": "Vile Poisons",
       "icon": "ability_rogue_feigndeath",
       "row": 4,
       "col": 1,
       "maxRanks": 5,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the damage dealt by your poisons by 4% and gives your poisons an additional 8% chance to resist dispel effects.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the damage dealt by your poisons by 8% and gives your poisons an additional 16% chance to resist dispel effects.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the damage dealt by your poisons by 12% and gives your poisons an additional 24% chance to resist dispel effects.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases the damage dealt by your poisons by 16% and gives your poisons an additional 32% chance to resist dispel effects.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases the damage dealt by your poisons by 20% and gives your poisons an additional 40% chance to resist dispel effects.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "Increases the damage dealt by your poisons by 4% and gives your poisons an additional 8% chance to resist dispel effects.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "assassination-4-2",
       "name_en": "Cold Blood",
       "icon": "spell_ice_lament",
       "row": 4,
       "col": 2,
       "maxRanks": 1,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "actif",
       "skill": {
        "cost": null,
        "range": null,
        "castTime": "Instant",
        "cooldown": "3 min"
       },
       "costLine": "Instant; 3 min cooldown",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "When activated, increases the critical strike chance of your next Sinister Strike, Backstab, Ambush, Eviscerate, or Mutilate by 100%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "When activated, increases the critical strike chance of your next Sinister Strike, Backstab, Ambush, or Eviscerate by 100%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "assassination-4-3",
       "name_en": "Improved Poisons",
       "icon": "ability_poisons",
       "row": 4,
       "col": 3,
       "maxRanks": 5,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the chance to apply Poisons to your target by 2%, and gives Poison applications a 10% chance to not consume a charge.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the chance to apply Poisons to your target by 4%, and gives Poison applications a 20% chance to not consume a charge.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the chance to apply Poisons to your target by 6%, and gives Poison applications a 30% chance to not consume a charge.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases the chance to apply Poisons to your target by 8%, and gives Poison applications a 40% chance to not consume a charge.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases the chance to apply Poisons to your target by 10%, and gives Poison applications a 50% chance to not consume a charge.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the chance to apply poisons to your target by 2%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "assassination-5-1",
       "name_en": "Vigor",
       "icon": "spell_nature_earthbindtotem",
       "row": 5,
       "col": 1,
       "maxRanks": 2,
       "pointsRequired": 20,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases your maximum Energy by 5.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases your maximum Energy by 10.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases your maximum Energy by 10.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "assassination-5-2",
       "name_en": "Mutilate",
       "icon": "ability_rogue_shadowstrikes",
       "row": 5,
       "col": 2,
       "maxRanks": 1,
       "pointsRequired": 20,
       "prerequisite": null,
       "arrow": null,
       "kind": "actif",
       "skill": {
        "cost": "60 Energy",
        "range": "Melee",
        "castTime": "Instant",
        "cooldown": null
       },
       "costLine": "60 Energy; Melee Range; Instant",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Instantly attacks with both weapons for 75% weapon damage plus an additional 17 with each weapon. Damage increased by 20% against Poisoned targets. Awards 2 Combo Points.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "assassination-5-3",
       "name_en": "Improved Kidney Shot",
       "icon": "ability_rogue_kidneyshot",
       "row": 5,
       "col": 3,
       "maxRanks": 2,
       "pointsRequired": 20,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Enemies Stunned by your Kidney Shot ability take 5% increased damage from your poisons and attacks.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Enemies Stunned by your Kidney Shot ability take 10% increased damage from your poisons and attacks.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "While affected by your Kidney Shot ability, the target receives an additional 3% damage from all sources.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "assassination-6-3",
       "name_en": "Seal Fate",
       "icon": "spell_shadow_chilltouch",
       "row": 6,
       "col": 3,
       "maxRanks": 5,
       "pointsRequired": 25,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Your critical strikes from abilities that add Combo Points have a 20% chance to add an additional Combo Point.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Your critical strikes from abilities that add Combo Points have a 40% chance to add an additional Combo Point.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Your critical strikes from abilities that add Combo Points have a 60% chance to add an additional Combo Point.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Your critical strikes from abilities that add Combo Points have a 80% chance to add an additional Combo Point.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Your critical strikes from abilities that add Combo Points have a 100% chance to add an additional Combo Point.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "Your critical strikes from abilities that add combo points have a 20% chance to add an additional combo point.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "assassination-7-2",
       "name_en": "Venom",
       "icon": "ability_rogue_deadlybrew",
       "row": 7,
       "col": 2,
       "maxRanks": 1,
       "pointsRequired": 30,
       "prerequisite": "assassination-5-2",
       "arrow": "l2",
       "kind": "actif",
       "skill": {
        "cost": "25 Energy",
        "range": null,
        "castTime": "Instant",
        "cooldown": null
       },
       "costLine": "25 Energy; 1 to 5 Combo Points; Instant",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Finishing move that increases the damage of your Poisons by 30% and your chance to apply Poisons by 10%. Lasts longer per combo point:\n1 point: 9 seconds\n2 points: 12 seconds\n3 points: 15 seconds\n4 points: 18 seconds\n5 points: 21 seconds",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": [
        "1 point: 9 seconds",
        "2 point: 12 seconds",
        "3 point: 15 seconds",
        "4 point: 18 seconds",
        "5 point: 21 seconds"
       ],
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      }
     ],
     "removedFromClassic": [],
     "disputed": []
    },
    {
     "key": "combat",
     "name_en": "Combat",
     "name_fr": "Combat",
     "icon": "ability_backstab",
     "backgroundId": 181,
     "talents": [
      {
       "key": "combat-1-1",
       "name_en": "Improved Eviscerate",
       "icon": "ability_rogue_eviscerate",
       "row": 1,
       "col": 1,
       "maxRanks": 3,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the damage done by your Eviscerate ability by 7%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the damage done by your Eviscerate ability by 13%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the damage done by your Eviscerate ability by 20%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the damage done by your Eviscerate ability by 5%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "combat-1-2",
       "name_en": "Improved Sinister Strike",
       "icon": "spell_shadow_ritualofsacrifice",
       "row": 1,
       "col": 2,
       "maxRanks": 2,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the Energy cost of your Sinister Strike ability by 3.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the Energy cost of your Sinister Strike ability by 5.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "Reduces the Energy cost of your Sinister Strike ability by 3.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "combat-1-3",
       "name_en": "Lightning Reflexes",
       "icon": "spell_nature_invisibilty",
       "row": 1,
       "col": 3,
       "maxRanks": 5,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases your Dodge chance by 1%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases your Dodge chance by 2%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases your Dodge chance by 3%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases your Dodge chance by 4%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases your Dodge chance by 5%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "Increases your Dodge chance by 1%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "combat-2-1",
       "name_en": "Puncturing Wounds",
       "icon": "ability_backstab",
       "row": 2,
       "col": 1,
       "maxRanks": 3,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the critical strike chance of your Backstab by 10% and your Mutilate by 5%, and gives Backstab a 15% chance to add an additional Combo Point.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the critical strike chance of your Backstab by 20% and your Mutilate by 10%, and gives Backstab a 30% chance to add an additional Combo Point.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the critical strike chance of your Backstab by 30% and your Mutilate by 15%, and gives Backstab a 45% chance to add an additional Combo Point.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the critical strike chance of your Backstab ability by 10%.",
       "classicRenamedFrom": "Improved Backstab",
       "divergences": [
        {
         "field": "name",
         "foreverTalents": "Puncturing Wounds",
         "wowtbc": "Punturing Wounds"
        }
       ],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "combat-2-2",
       "name_en": "Deflection",
       "icon": "ability_parry",
       "row": 2,
       "col": 2,
       "maxRanks": 3,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases your Parry chance by 2%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases your Parry chance by 4%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases your Parry chance by 6%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases your Parry chance by 1%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "combat-2-3",
       "name_en": "Precision",
       "icon": "ability_marksmanship",
       "row": 2,
       "col": 3,
       "maxRanks": 3,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases your chance to hit with all attacks and Poisons by 1%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases your chance to hit with all attacks and Poisons by 2%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases your chance to hit with all attacks and Poisons by 3%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases your chance to hit with melee weapons by 1%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "combat-3-1",
       "name_en": "Endurance",
       "icon": "spell_shadow_shadowward",
       "row": 3,
       "col": 1,
       "maxRanks": 2,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the cooldown of your Sprint and Evasion abilities by 30%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the cooldown of your Sprint and Evasion abilities by 60%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Reduces the cooldown of your Sprint and Evasion abilities by 45 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "combat-3-2",
       "name_en": "Riposte",
       "icon": "ability_warrior_challange",
       "row": 3,
       "col": 2,
       "maxRanks": 1,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "actif",
       "skill": {
        "cost": "10 Energy",
        "range": "Melee",
        "castTime": "Instant",
        "cooldown": "6 sec"
       },
       "costLine": "10 Energy; Melee Range; Instant; 6 sec cooldown",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "A strike that becomes active after parrying an opponent's attack. This attack deals 150% weapon damage and disarms the target for 6 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "A strike that becomes active after parrying an opponent's attack. This attack deals 150% weapon damage and disarms the target for 6 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "combat-3-4",
       "name_en": "Improved Sprint",
       "icon": "ability_rogue_sprint",
       "row": 3,
       "col": 4,
       "maxRanks": 2,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Gives a 50% chance to remove all movement impairing effects when you activate your Sprint ability.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Gives a 100% chance to remove all movement impairing effects when you activate your Sprint ability.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "Gives a 50% chance to remove all movement impairing effects when you activate your Sprint ability.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "combat-4-1",
       "name_en": "Improved Kick",
       "icon": "ability_kick",
       "row": 4,
       "col": 1,
       "maxRanks": 2,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Gives your Kick ability a 50% chance to Silence the target for 2 sec.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Gives your Kick ability a 100% chance to Silence the target for 2 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "Gives your Kick ability a 50% chance to silence the target for 2 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "combat-4-2",
       "name_en": "Flawless Execution",
       "icon": "inv_sword_35",
       "row": 4,
       "col": 2,
       "maxRanks": 1,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the Energy cost of your Eviscerate ability by 10.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "combat-4-3",
       "name_en": "Dual Wield Specialization",
       "icon": "ability_dualwield",
       "row": 4,
       "col": 3,
       "maxRanks": 5,
       "pointsRequired": 15,
       "prerequisite": "combat-2-3",
       "arrow": "l2",
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the damage done by your off-hand weapon by 5%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the damage done by your off-hand weapon by 10%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the damage done by your off-hand weapon by 15%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases the damage done by your off-hand weapon by 20%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases the damage done by your off-hand weapon by 25%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the damage done by your offhand weapon by 10%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "combat-5-2",
       "name_en": "Blade Flurry",
       "icon": "ability_warrior_punishingblow",
       "row": 5,
       "col": 2,
       "maxRanks": 1,
       "pointsRequired": 20,
       "prerequisite": null,
       "arrow": null,
       "kind": "actif",
       "skill": {
        "cost": "25 Energy",
        "range": null,
        "castTime": "Instant",
        "cooldown": "2 min"
       },
       "costLine": "25 Energy; Instant; 2 min cooldown",
       "requires": [
        "Melee Weapon"
       ],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases your melee attack speed by 20% and your melee attacks strike an additional nearby opponent. Lasts 15 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases your attack speed by 20%. In addition, attacks strike an additional nearby opponent. Lasts 15 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "combat-5-3",
       "name_en": "Hack and Slash",
       "icon": "inv_sword_27",
       "row": 5,
       "col": 3,
       "maxRanks": 5,
       "pointsRequired": 20,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Gives your melee weapon attacks a benefit depending on the weapon. Axe/Sword: Your successful melee attacks have a 1% chance to trigger an extra attack on the target. Dagger/Fist: Increases your critical strike chance by 1%. Mace: Your attacks ignore 3% of your target's armor.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Gives your melee weapon attacks a benefit depending on the weapon.\n\nAxe/Sword: Your successful melee attacks have a 2% chance to trigger an extra attack on the target.\n\nDagger/Fist: Increases your critical strike chance by 2%.\n\nMace: Your attacks ignore 6% of your target's armor.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Gives your melee weapon attacks a benefit depending on the weapon.\n\nAxe/Sword: Your successful melee attacks have a 3% chance to trigger an extra attack on the target.\n\nDagger/Fist: Increases your critical strike chance by 3%.\n\nMace: Your attacks ignore 9% of your target's armor.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Gives your melee weapon attacks a benefit depending on the weapon.\n\nAxe/Sword: Your successful melee attacks have a 4% chance to trigger an extra attack on the target.\n\nDagger/Fist: Increases your critical strike chance by 4%.\n\nMace: Your attacks ignore 12% of your target's armor.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Gives your melee weapon attacks a benefit depending on the weapon.\n\nAxe/Sword: Your successful melee attacks have a 5% chance to trigger an extra attack on the target.\n\nDagger/Fist: Increases your critical strike chance by 5%.\n\nMace: Your attacks ignore 15% of your target's armor.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "combat-6-2",
       "name_en": "Weapon Expertise",
       "icon": "spell_holy_blessingofstrength",
       "row": 6,
       "col": 2,
       "maxRanks": 2,
       "pointsRequired": 25,
       "prerequisite": "combat-5-2",
       "arrow": "l1",
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the chance for your attacks to be Dodged or Parried by 1%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the chance for your attacks to be Dodged or Parried by 2%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases your skill with Sword, Fist and Dagger weapons by 3.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "combat-6-3",
       "name_en": "Aggression",
       "icon": "ability_racial_avatar",
       "row": 6,
       "col": 3,
       "maxRanks": 3,
       "pointsRequired": 25,
       "prerequisite": "combat-5-3",
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the damage of your Sinister Strike, Backstab, and Eviscerate abilities by 2%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the damage of your Sinister Strike, Backstab, and Eviscerate abilities by 4%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the damage of your Sinister Strike, Backstab, and Eviscerate abilities by 6%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the damage of your Sinister Strike and Eviscerate abilities by 2%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "combat-7-2",
       "name_en": "Adrenaline Rush",
       "icon": "spell_shadow_shadowworddominate",
       "row": 7,
       "col": 2,
       "maxRanks": 1,
       "pointsRequired": 30,
       "prerequisite": null,
       "arrow": null,
       "kind": "actif",
       "skill": {
        "cost": null,
        "range": null,
        "castTime": "Instant",
        "cooldown": "5 min"
       },
       "costLine": "Instant; 5 min cooldown",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases your Energy regeneration rate by 100% for 15 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "Increases your Energy regeneration rate by 100% for 15 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      }
     ],
     "removedFromClassic": [
      {
       "name_en": "Dagger Specialization",
       "maxRanks": 5,
       "row": 4,
       "text": "Increases your chance to get a critical strike with Daggers by 1%."
      },
      {
       "name_en": "Mace Specialization",
       "maxRanks": 5,
       "row": 5,
       "text": "Increases your skill with Maces by 1, and gives you a 1% chance to stun your target for 3 sec with a mace."
      },
      {
       "name_en": "Sword Specialization",
       "maxRanks": 5,
       "row": 5,
       "text": "Gives you a 1% chance to get an extra attack on the same target after dealing damage with your Sword."
      },
      {
       "name_en": "Fist Weapon Specialization",
       "maxRanks": 5,
       "row": 5,
       "text": "Increases your chance to get a critical strike with Fist Weapons by 1%."
      }
     ],
     "disputed": []
    },
    {
     "key": "subtlety",
     "name_en": "Subtlety",
     "name_fr": "Finesse",
     "icon": "ability_stealth",
     "backgroundId": 183,
     "talents": [
      {
       "key": "subtlety-1-1",
       "name_en": "Camouflage",
       "icon": "ability_stealth",
       "row": 1,
       "col": 1,
       "maxRanks": 5,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces your speed penalty from your Stealth ability by 3% and reduces its cooldown by 2 sec.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces your speed penalty from your Stealth ability by 6% and reduces its cooldown by 3 sec.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Reduces your speed penalty from your Stealth ability by 9% and reduces its cooldown by 4 sec.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Reduces your speed penalty from your Stealth ability by 12% and reduces its cooldown by 5 sec.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Reduces your speed penalty from your Stealth ability by 15% and reduces its cooldown by 6 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases your speed while stealthed by 3% and reduces the cooldown of your Stealth ability by 1 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "subtlety-1-2",
       "name_en": "Master of Deception",
       "icon": "spell_shadow_charm",
       "row": 1,
       "col": 2,
       "maxRanks": 3,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the chance enemies have to detect you while in Stealth mode as if you were 1 level higher.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the chance enemies have to detect you while in Stealth mode as if you were 2 levels higher.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Reduces the chance enemies have to detect you while in Stealth mode as if you were 3 levels higher.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Reduces the chance enemies have to detect you while in Stealth mode.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "subtlety-1-3",
       "name_en": "Opportunity",
       "icon": "ability_warrior_warcry",
       "row": 1,
       "col": 3,
       "maxRanks": 2,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the damage dealt by your Backstab, Garrote, Ambush, and Mutilate abilities by 5%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the damage dealt by your Backstab, Garrote, Ambush, and Mutilate abilities by 10%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the damage dealt when striking from behind with your Backstab, Garrote, or Ambush abilities by 4%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "subtlety-2-1",
       "name_en": "Setup",
       "icon": "spell_nature_mirrorimage",
       "row": 2,
       "col": 1,
       "maxRanks": 3,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Gives you a 33% chance to add a Combo Point to your target after Dodging an attack or fully resisting a spell.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Gives you a 67% chance to add a Combo Point to your target after Dodging an attack or fully resisting a spell.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Gives you a 100% chance to add a Combo Point to your target after Dodging an attack or fully resisting a spell.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Gives you a 15% chance to add a combo point to your target after dodging their attack or fully resisting one of their spells.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "subtlety-2-2",
       "name_en": "Elusiveness",
       "icon": "spell_magic_lesserinvisibilty",
       "row": 2,
       "col": 2,
       "maxRanks": 2,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the cooldown of your Vanish and Blind abilities by 45 sec.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the cooldown of your Vanish and Blind abilities by 90 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "Reduces the cooldown of your Vanish and Blind abilities by 45 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "subtlety-2-3",
       "name_en": "Dirty Tricks",
       "icon": "ability_rogue_dirtydeeds",
       "row": 2,
       "col": 3,
       "maxRanks": 2,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the Energy cost of your Sap and Blind abilities by 25%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the Energy cost of your Sap and Blind abilities by 50%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "subtlety-2-4",
       "name_en": "Improved Ambush",
       "icon": "ability_rogue_ambush",
       "row": 2,
       "col": 4,
       "maxRanks": 3,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the critical strike chance of your Ambush ability by 15%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the critical strike chance of your Ambush ability by 30%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the critical strike chance of your Ambush ability by 45%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "moved",
       "classicText": "Increases the critical strike chance of your Ambush ability by 15%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "subtlety-3-1",
       "name_en": "Initiative",
       "icon": "spell_shadow_fumble",
       "row": 3,
       "col": 1,
       "maxRanks": 3,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Gives you a 33% chance to add an additional combo point to your target when using your Ambush, Garrote, or Cheap Shot ability.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Gives you a 67% chance to add an additional combo point to your target when using your Ambush, Garrote, or Cheap Shot ability.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Gives you a 100% chance to add an additional combo point to your target when using your Ambush, Garrote, or Cheap Shot ability.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Gives you a 25% chance to add an additional combo point to your target when using your Ambush, Garrote, or Cheap Shot ability.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "subtlety-3-2",
       "name_en": "Ghostly Strike",
       "icon": "spell_shadow_curse",
       "row": 3,
       "col": 2,
       "maxRanks": 1,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "actif",
       "skill": {
        "cost": "40 Energy",
        "range": "Melee",
        "castTime": "Instant",
        "cooldown": "20 sec"
       },
       "costLine": "40 Energy; Melee Range; Instant; 20 sec cooldown",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "A strike that deals 125% (180% if a Dagger is equipped in your Main Hand) weapon damage and increases your chance to dodge by 15% for 7 sec. Awards 1 combo point.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "A strike that deals 125% weapon damage and increases your chance to dodge by 15% for 7 sec. Awards 1 combo point.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "subtlety-3-3",
       "name_en": "Improved Distract",
       "icon": "ability_rogue_distract",
       "row": 3,
       "col": 3,
       "maxRanks": 2,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the radius of your Distract ability by 3 yds, and further reduces the Stealth detection of distracted enemies as though they were an additional 1 level lower.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the radius of your Distract ability by 5 yds, and further reduces the Stealth detection of distracted enemies as though they were an additional 2 levels lower.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "subtlety-4-1",
       "name_en": "Heightened Senses",
       "icon": "ability_ambush",
       "row": 4,
       "col": 1,
       "maxRanks": 2,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases your Stealth detection as if you were 1 level higher and reduces your chance to be hit by spells and ranged attacks by 2%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases your Stealth detection as if you were 3 levels higher and reduces your chance to be hit by spells and ranged attacks by 4%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases your Stealth detection and reduces the chance you are hit by spells and ranged attacks by 2%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "subtlety-4-2",
       "name_en": "Premeditation",
       "icon": "spell_shadow_possession",
       "row": 4,
       "col": 2,
       "maxRanks": 1,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "actif",
       "skill": {
        "cost": null,
        "range": "20",
        "castTime": "Instant",
        "cooldown": "2 min"
       },
       "costLine": "20 yd range; Instant; 2 min cooldown",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Adds 2 Combo Points to your target. You must add to or use those combo points within 20 sec or the combo points are lost.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "When used, adds 2 combo points to your target. You must add to or use those combo points within 10 sec or the combo points are lost.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "subtlety-4-3",
       "name_en": "Serrated Blades",
       "icon": "inv_sword_17",
       "row": 4,
       "col": 3,
       "maxRanks": 3,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Causes your attacks to ignore 3% of your target's Armor and increases the damage dealt by your Rupture ability by 10%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Causes your attacks to ignore 6% of your target's Armor and increases the damage dealt by your Rupture ability by 20%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Causes your attacks to ignore 9% of your target's Armor and increases the damage dealt by your Rupture ability by 30%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Causes your attacks to ignore 0 of your target's Armor and increases the damage dealt by your Rupture ability by 10%. The amount of Armor reduced increases with your level.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "subtlety-5-1",
       "name_en": "Dirty Deeds",
       "icon": "spell_shadow_summonsuccubus",
       "row": 5,
       "col": 1,
       "maxRanks": 2,
       "pointsRequired": 20,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the Energy cost of your Cheap Shot and Garrote abilities by 10, and your Garrote ability no longer requires you to be behind your target.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the Energy cost of your Cheap Shot and Garrote abilities by 20, and your Garrote ability no longer requires you to be behind your target.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Reduces the Energy cost of your Cheap Shot and Garrote abilities by 10.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "subtlety-5-2",
       "name_en": "Preparation",
       "icon": "spell_shadow_antishadow",
       "row": 5,
       "col": 2,
       "maxRanks": 1,
       "pointsRequired": 20,
       "prerequisite": null,
       "arrow": null,
       "kind": "actif",
       "skill": {
        "cost": null,
        "range": null,
        "castTime": "Instant",
        "cooldown": "10 min"
       },
       "costLine": "Instant; 10 min cooldown",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "When activated, this ability immediately finishes the cooldown on your other Rogue abilities.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "When activated, this ability immediately finishes the cooldown on your other Rogue abilities.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "subtlety-5-3",
       "name_en": "Hemorrhage",
       "icon": "spell_shadow_lifedrain",
       "row": 5,
       "col": 3,
       "maxRanks": 1,
       "pointsRequired": 20,
       "prerequisite": "subtlety-4-3",
       "arrow": "l1",
       "kind": "actif",
       "skill": {
        "cost": "35 Energy",
        "range": "Melee",
        "castTime": "Instant",
        "cooldown": null
       },
       "costLine": "35 Energy; Melee Range; Instant",
       "requires": [
        "Melee Weapon"
       ],
       "ranks": [
        {
         "rank": 1,
         "text": "An instant strike that deals 100% weapon damage (145% if a Dagger is equipped) and causes the target to take 15% increased Rupture damage from the Rogue. Lasts 15 sec. Awards 1 Combo Point.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "An instant strike that damages the opponent and causes the target to hemorrhage, increasing any Physical damage dealt to the target by up to 3. Lasts 30 charges or 15 sec. Awards 1 combo point.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "subtlety-6-1",
       "name_en": "Quietus",
       "icon": "ability_rogue_quickrecovery",
       "row": 6,
       "col": 1,
       "maxRanks": 5,
       "pointsRequired": 25,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Your Sinister Strike, Ghostly Strike, and Hemorrhage abilities cause 2% more damage against targets below 35% health.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Your Sinister Strike, Ghostly Strike, and Hemorrhage abilities cause 4% more damage against targets below 35% health.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Your Sinister Strike, Ghostly Strike, and Hemorrhage abilities cause 6% more damage against targets below 35% health.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Your Sinister Strike, Ghostly Strike, and Hemorrhage abilities cause 8% more damage against targets below 35% health.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Your Sinister Strike, Ghostly Strike, and Hemorrhage abilities cause 10% more damage against targets below 35% health.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "subtlety-6-3",
       "name_en": "Cutthroat",
       "icon": "ability_rogue_cuttothechase",
       "row": 6,
       "col": 3,
       "maxRanks": 5,
       "pointsRequired": 25,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Your Backstab has a 3% chance to cause your next Ambush within 10 sec to not require Stealth.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Your Backstab has a 6% chance to cause your next Ambush within 10 sec to not require Stealth.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Your Backstab has a 9% chance to cause your next Ambush within 10 sec to not require Stealth.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Your Backstab has a 12% chance to cause your next Ambush within 10 sec to not require Stealth.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Your Backstab has a 15% chance to cause your next Ambush within 10 sec to not require Stealth.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "subtlety-7-2",
       "name_en": "Thousand Cuts",
       "icon": "ability_rogue_shadowstrikes",
       "row": 7,
       "col": 2,
       "maxRanks": 1,
       "pointsRequired": 30,
       "prerequisite": "subtlety-5-2",
       "arrow": "l2",
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "When your Rupture ability deals periodic damage, the Energy cost of your next Hemorrhage or Backstab ability within 10 sec is reduced by 3, stacking up to 5 times.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      }
     ],
     "removedFromClassic": [
      {
       "name_en": "Sleight of Hand",
       "maxRanks": 2,
       "row": 2,
       "text": "Reduces the chance you are critically hit by melee and ranged attacks by 1% and increases the threat reduction of your Feint ability by 10%."
      },
      {
       "name_en": "Improved Sap",
       "maxRanks": 3,
       "row": 4,
       "text": "Gives you a 30% chance to return to stealth mode after using your Sap ability."
      },
      {
       "name_en": "Deadliness",
       "maxRanks": 5,
       "row": 6,
       "text": "Increases your Attack Power by 2%."
      }
     ],
     "disputed": []
    }
   ]
  },
  {
   "slug": "pretre",
   "gameId": 5,
   "name_fr": "Prêtre",
   "name_en": "Priest",
   "icon": "class_priest",
   "status": "COMMUNAUTÉ",
   "sourceIds": [
    "forever-talents-releve",
    "wowtbc-forever-calculator",
    "wowhead-forever-talent-calc"
   ],
   "transcriptionNote": "Talent text transcribed from in-game tooltip video (priest.json).",
   "trees": [
    {
     "key": "discipline",
     "name_en": "Discipline",
     "name_fr": "Discipline",
     "icon": "spell_holy_wordfortitude",
     "backgroundId": 201,
     "talents": [
      {
       "key": "discipline-1-1",
       "name_en": "Power in Light",
       "icon": "spell_holy_searinglightpriest",
       "row": 1,
       "col": 1,
       "maxRanks": 5,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Your Smite and Penance spells deal 2% increased damage to targets afflicted with your Holy Fire.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Your Smite and Penance spells deal 4% increased damage to targets afflicted with your Holy Fire.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Your Smite and Penance spells deal 6% increased damage to targets afflicted with your Holy Fire.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Your Smite and Penance spells deal 8% increased damage to targets afflicted with your Holy Fire.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Your Smite and Penance spells deal 10% increased damage to targets afflicted with your Holy Fire.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "discipline-1-2",
       "name_en": "Wand Specialization",
       "icon": "inv_wand_01",
       "row": 1,
       "col": 2,
       "maxRanks": 2,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases your damage with Wands by 13%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases your damage with Wands by 25%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases your damage with Wands by 5%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "discipline-1-3",
       "name_en": "Twin Disciplines",
       "icon": "spell_holy_sealofvengeance",
       "row": 1,
       "col": 3,
       "maxRanks": 5,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the damage and healing of your instant cast spells by 1%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the damage and healing of your instant cast spells by 2%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the damage and healing of your instant cast spells by 3%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases the damage and healing of your instant cast spells by 4%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases the damage and healing of your instant cast spells by 5%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "discipline-2-1",
       "name_en": "Silent Resolve",
       "icon": "spell_nature_manaregentotem",
       "row": 2,
       "col": 1,
       "maxRanks": 3,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the threat generated by your Holy spells by 10% and reduces the duration of Stun, Fear, and Silence effects inflicted on you by 5%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the threat generated by your Holy spells by 20% and reduces the duration of Stun, Fear, and Silence effects inflicted on you by 10%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Reduces the threat generated by your Holy spells by 30% and reduces the duration of Stun, Fear, and Silence effects inflicted on you by 15%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Reduces the threat generated by your spells by 4%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "discipline-2-2",
       "name_en": "Holy Precision",
       "icon": "spell_holy_surgeoflight",
       "row": 2,
       "col": 2,
       "maxRanks": 3,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases your chance to hit with Holy spells by 6%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases your chance to hit with Holy spells by 12%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases your chance to hit with Holy spells by 18%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "discipline-2-3",
       "name_en": "Improved Power Word: Shield",
       "icon": "spell_holy_powerwordshield",
       "row": 2,
       "col": 3,
       "maxRanks": 3,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the damage absorbed by your Power Word: Shield by 7%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the damage absorbed by your Power Word: Shield by 14%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the damage absorbed by your Power Word: Shield by 20%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the damage absorbed by your Power Word: Shield by 5%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "discipline-2-4",
       "name_en": "Martyrdom",
       "icon": "spell_nature_tranquility",
       "row": 2,
       "col": 4,
       "maxRanks": 2,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Gives you a 50% chance to gain Focused Casting for 6 sec after being the victim of a melee or ranged critical strike. The Focused Casting effect prevents you from losing casting time when taking damage and increases your resistance to Interrupt effects by 20%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Gives you a 100% chance to gain Focused Casting for 6 sec after being the victim of a melee or ranged critical strike. The Focused Casting effect prevents you from losing casting time when taking damage and increases your resistance to Interrupt effects by 20%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Gives you a 50% chance to gain the Focused Casting effect that lasts for 6 sec after being the victim of a melee or ranged critical strike. The Focused Casting effect prevents you from losing casting time when taking damage and increases resistance to Interrupt effects by 10%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "discipline-3-1",
       "name_en": "Mental Agility",
       "icon": "ability_hibernation",
       "row": 3,
       "col": 1,
       "maxRanks": 3,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the mana cost of your Smite, Holy Fire, and instant cast spells by 3%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the mana cost of your Smite, Holy Fire, and instant cast spells by 7%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Reduces the mana cost of your Smite, Holy Fire, and instant cast spells by 10%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Reduces the mana cost of your instant cast spells by 2%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "discipline-3-2",
       "name_en": "Inner Focus",
       "icon": "spell_frost_windwalkon",
       "row": 3,
       "col": 2,
       "maxRanks": 1,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "actif",
       "skill": {
        "cost": null,
        "range": null,
        "castTime": "Instant",
        "cooldown": "3 min"
       },
       "costLine": "Instant | 3 min cooldown",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "When activated, reduces the Mana cost of your next spell by 100% and increases its critical effect chance by 25% if it is capable of a critical effect.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "When activated, reduces the Mana cost of your next spell by 100% and increases its critical effect chance by 25% if it is capable of a critical effect.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "discipline-3-4",
       "name_en": "Meditation",
       "icon": "spell_nature_sleep",
       "row": 3,
       "col": 4,
       "maxRanks": 3,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Allows 17% of your Mana regeneration to continue while casting.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Allows 33% of your Mana regeneration to continue while casting.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Allows 50% of your Mana regeneration to continue while casting.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Allows 5% of your Mana regeneration to continue while casting.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "discipline-4-1",
       "name_en": "Improved Inner Fire",
       "icon": "spell_holy_innerfire",
       "row": 4,
       "col": 1,
       "maxRanks": 3,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the Armor bonus of your Inner Fire spell by 15% and increases its total charges by 4.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the Armor bonus of your Inner Fire spell by 30% and increases its total charges by 8.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the Armor bonus of your Inner Fire spell by 45% and increases its total charges by 12.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the Armor bonus of your Inner Fire spell by 10%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "discipline-4-2",
       "name_en": "Mental Strength",
       "icon": "spell_nature_enchantarmor",
       "row": 4,
       "col": 2,
       "maxRanks": 5,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases your total Intellect by 3%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases your total Intellect by 6%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases your total Intellect by 9%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases your total Intellect by 12%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases your total Intellect by 15%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases your maximum Mana by 2%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "discipline-4-3",
       "name_en": "Soul Warding",
       "icon": "spell_holy_powerwordshield",
       "row": 4,
       "col": 3,
       "maxRanks": 1,
       "pointsRequired": 15,
       "prerequisite": "discipline-2-3",
       "arrow": "l2",
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the cooldown on your Power Word: Shield spell by 4 sec and reduces its mana cost by 15%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "discipline-4-4",
       "name_en": "Improved Mana Burn",
       "icon": "spell_shadow_manaburn",
       "row": 4,
       "col": 4,
       "maxRanks": 2,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the casting time of your Mana Burn spell by 0.5 sec.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the casting time of your Mana Burn spell by 1 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Reduces the casting time of your Mana Burn spell by 0.25 secs.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "discipline-5-2",
       "name_en": "Penance",
       "icon": "spell_holy_penance",
       "row": 5,
       "col": 2,
       "maxRanks": 1,
       "pointsRequired": 20,
       "prerequisite": null,
       "arrow": null,
       "kind": "actif",
       "skill": {
        "cost": "100 Mana",
        "range": "36",
        "castTime": "Channeled",
        "cooldown": "12 sec"
       },
       "costLine": "100 Mana | Enemy: 36 yd range / Friendly: 40 yd range | Channeled | 12 sec cooldown",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Launches a volley of holy light at the target, causing 96 Holy damage to an enemy, or 233 healing to an ally. Instantly and every 1 sec for 2 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "discipline-5-3",
       "name_en": "Renewed Hope",
       "icon": "spell_holy_holyprotection",
       "row": 5,
       "col": 3,
       "maxRanks": 5,
       "pointsRequired": 20,
       "prerequisite": "discipline-4-3",
       "arrow": "l1",
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Your heals from Flash Heal, Binding Heal, Lesser Heal, Heal, Greater Heal, and Penance gain 2% increased critical strike chance when cast on targets with Weakened Soul, and reduce the remaining duration of Weakened Soul on their target by 1 sec.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Your heals from Flash Heal, Binding Heal, Lesser Heal, Heal, Greater Heal, and Penance gain 4% increased critical strike chance when cast on targets with Weakened Soul, and reduce the remaining duration of Weakened Soul on their target by 2 sec.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Your heals from Flash Heal, Binding Heal, Lesser Heal, Heal, Greater Heal, and Penance gain 6% increased critical strike chance when cast on targets with Weakened Soul, and reduce the remaining duration of Weakened Soul on their target by 3 sec.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Your heals from Flash Heal, Binding Heal, Lesser Heal, Heal, Greater Heal, and Penance gain 8% increased critical strike chance when cast on targets with Weakened Soul, and reduce the remaining duration of Weakened Soul on their target by 4 sec.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Your heals from Flash Heal, Binding Heal, Lesser Heal, Heal, Greater Heal, and Penance gain 10% increased critical strike chance when cast on targets with Weakened Soul, and reduce the remaining duration of Weakened Soul on their target by 5 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "discipline-6-3",
       "name_en": "Divine Aegis",
       "icon": "spell_holy_devineaegis",
       "row": 6,
       "col": 3,
       "maxRanks": 3,
       "pointsRequired": 25,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Your critical heals create a protective shield on the target, absorbing 5% of the amount healed. Lasts 12 sec.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Your critical heals create a protective shield on the target, absorbing 10% of the amount healed. Lasts 12 sec.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Your critical heals create a protective shield on the target, absorbing 15% of the amount healed. Lasts 12 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "discipline-7-2",
       "name_en": "Power Infusion",
       "icon": "spell_holy_powerinfusion",
       "row": 7,
       "col": 2,
       "maxRanks": 1,
       "pointsRequired": 30,
       "prerequisite": "discipline-5-2",
       "arrow": "l2",
       "kind": "actif",
       "skill": {
        "cost": "173 Mana",
        "range": "30",
        "castTime": "Instant",
        "cooldown": "3 min"
       },
       "costLine": "173 Mana | 30 yd range | Instant | 3 min cooldown",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Infuses the target with power, increasing their spell damage and healing done by 20% for 15 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Infuses the target with power, increasing their spell damage and healing by 20%. Lasts 15 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      }
     ],
     "removedFromClassic": [
      {
       "name_en": "Unbreakable Will",
       "maxRanks": 5,
       "row": 1,
       "text": "Increases your chance to resist Stun, Fear, and Silence effects by an additional 3%."
      },
      {
       "name_en": "Improved Power Word: Fortitude",
       "maxRanks": 2,
       "row": 2,
       "text": "Increases the effect of your Power Word: Fortitude and Prayer of Fortitude spells by 15%."
      },
      {
       "name_en": "Divine Spirit",
       "maxRanks": 1,
       "row": 5,
       "text": "Holy power infuses the target, increasing their Spirit by 17 for 30 min."
      },
      {
       "name_en": "Force of Will",
       "maxRanks": 5,
       "row": 6,
       "text": "Increases your spell damage by 1% and the critical strike chance of your offensive spells by 1%."
      }
     ],
     "disputed": []
    },
    {
     "key": "holy",
     "name_en": "Holy",
     "name_fr": "Sacré",
     "icon": "spell_holy_holybolt",
     "backgroundId": 202,
     "talents": [
      {
       "key": "holy-1-1",
       "name_en": "Twilight Focus",
       "icon": "spell_holy_layonhands",
       "row": 1,
       "col": 1,
       "maxRanks": 3,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Gives you a 23% chance to avoid interruption caused by damage while casting any spell.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Gives you a 47% chance to avoid interruption caused by damage while casting any spell.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Gives you a 70% chance to avoid interruption caused by damage while casting any spell.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Gives you a 35% chance to avoid interruption caused by damage while casting any healing spell.",
       "classicRenamedFrom": "Healing Focus",
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "holy-1-2",
       "name_en": "Improved Renew",
       "icon": "spell_holy_renew",
       "row": 1,
       "col": 2,
       "maxRanks": 3,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the amount healed by your Renew spell by 5%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the amount healed by your Renew spell by 10%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the amount healed by your Renew spell by 15%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "Increases the amount healed by your Renew spell by 5%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "holy-1-3",
       "name_en": "Holy Specialization",
       "icon": "spell_holy_sealofsalvation",
       "row": 1,
       "col": 3,
       "maxRanks": 5,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the critical effect chance of your Holy spells by 1%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the critical effect chance of your Holy spells by 2%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the critical effect chance of your Holy spells by 3%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases the critical effect chance of your Holy spells by 4%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases the critical effect chance of your Holy spells by 5%.",
         "observed": true
        }
       ],
       "rankNote": "Tooltip edge was cut off in the video; \"chance of\" is inferred.",
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "Increases the critical effect chance of your Holy spells by 1%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "holy-2-2",
       "name_en": "Spell Warding",
       "icon": "spell_holy_spellwarding",
       "row": 2,
       "col": 2,
       "maxRanks": 5,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces all spell damage taken by 2%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces all spell damage taken by 4%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Reduces all spell damage taken by 6%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Reduces all spell damage taken by 8%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Reduces all spell damage taken by 10%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "Reduces all spell damage taken by 2%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "holy-2-3",
       "name_en": "Divine Fury",
       "icon": "spell_holy_sealofwrath",
       "row": 2,
       "col": 3,
       "maxRanks": 5,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the casting time of your Smite, Holy Fire, Heal, and Greater Heal spells by 0.1 sec.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the casting time of your Smite, Holy Fire, Heal, and Greater Heal spells by 0.2 sec.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Reduces the casting time of your Smite, Holy Fire, Heal, and Greater Heal spells by 0.3 sec.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Reduces the casting time of your Smite, Holy Fire, Heal, and Greater Heal spells by 0.4 sec.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Reduces the casting time of your Smite, Holy Fire, Heal, and Greater Heal spells by 0.5 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "Reduces the casting time of your Smite, Holy Fire, Heal and Greater Heal spells by 0.1 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "holy-3-1",
       "name_en": "Holy Nova",
       "icon": "spell_holy_holynova",
       "row": 3,
       "col": 1,
       "maxRanks": 1,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "actif",
       "skill": {
        "cost": "185 Mana",
        "range": null,
        "castTime": "Instant",
        "cooldown": null
       },
       "costLine": "185 Mana | Instant",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Causes an explosion of holy light around the caster, causing 31 to 36 Holy damage to all enemy targets within 10 yards and healing all party members within 10 yards for 68 to 77. These effects cause no threat.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Causes an explosion of holy light around the caster, causing 29 to 34 Holy damage to all enemy targets within 10 yards and healing all party members within 10 yards for 54 to 63. These effects cause no threat.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "holy-3-2",
       "name_en": "Blessed Recovery",
       "icon": "spell_holy_blessedrecovery",
       "row": 3,
       "col": 2,
       "maxRanks": 3,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "After being struck by a melee or ranged critical hit, or suffering more than 30% of your maximum Health from a single attack, heal 8% of the damage taken over 6 sec. Refreshing this effect carries over any remaining healing.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "After being struck by a melee or ranged critical hit, or suffering more than 30% of your maximum Health from a single attack, heal 17% of the damage taken over 6 sec. Refreshing this effect carries over any remaining healing.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "After being struck by a melee or ranged critical hit, or suffering more than 30% of your maximum Health from a single attack, heal 25% of the damage taken over 6 sec. Refreshing this effect carries over any remaining healing.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "After being struck by a melee or ranged critical hit, heal 8% of the damage taken over 6 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "holy-3-4",
       "name_en": "Inspiration",
       "icon": "spell_holy_layonhands",
       "row": 3,
       "col": 4,
       "maxRanks": 3,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Your non-periodic critical heals increase your target's Armor by 8% for 15 sec.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Your non-periodic critical heals increase your target's Armor by 17% for 15 sec.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Your non-periodic critical heals increase your target's Armor by 25% for 15 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases your target's armor by 8% for 15 sec after getting a critical effect from",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "holy-4-1",
       "name_en": "Holy Reach",
       "icon": "spell_holy_purify",
       "row": 4,
       "col": 1,
       "maxRanks": 2,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the range of your Smite and Holy Fire spells and the radius of your Prayer of Healing and Holy Nova spells by 10%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the range of your Smite and Holy Fire spells and the radius of your Prayer of Healing and Holy Nova spells by 20%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "Increases the range of your Smite and Holy Fire spells and the radius of your Prayer of Healing and Holy Nova spells by 10%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "holy-4-2",
       "name_en": "Improved Healing",
       "icon": "spell_holy_heal02",
       "row": 4,
       "col": 2,
       "maxRanks": 3,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the Mana cost of your Lesser Heal, Heal, Greater Heal, Penance, and Prayer of Mending spells by 5%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the Mana cost of your Lesser Heal, Heal, Greater Heal, Penance, and Prayer of Mending spells by 10%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Reduces the Mana cost of your Lesser Heal, Heal, Greater Heal, Penance, and Prayer of Mending spells by 15%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Reduces the Mana cost of your Lesser Heal, Heal, and Greater Heal spells by 5%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "holy-4-3",
       "name_en": "Searing Light",
       "icon": "spell_holy_searinglightpriest",
       "row": 4,
       "col": 3,
       "maxRanks": 2,
       "pointsRequired": 15,
       "prerequisite": "holy-2-3",
       "arrow": "l2",
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases your Holy damage done by 2%, and gives a 5% chance each time your Holy Fire spell deals periodic damage for your next Holy Nova to cost no Mana.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases your Holy damage done by 5%, and gives a 10% chance each time your Holy Fire spell deals periodic damage for your next Holy Nova to cost no Mana.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the damage of your Smite and Holy Fire spells by 5%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "holy-4-4",
       "name_en": "Binding Heal",
       "icon": "spell_holy_blindingheal",
       "row": 4,
       "col": 4,
       "maxRanks": 1,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "actif",
       "skill": {
        "cost": "155 Mana",
        "range": "40",
        "castTime": "1.5 sec",
        "cooldown": null
       },
       "costLine": "155 Mana | 40 yd range | 1.5 sec cast",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Heals a friendly target and the caster for 346 to 403. Low threat.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "holy-5-1",
       "name_en": "Litany of Light",
       "icon": "spell_holy_holyguidance",
       "row": 5,
       "col": 1,
       "maxRanks": 2,
       "pointsRequired": 20,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "When you cast a healing spell, gain Mana equal to 5% of the base cost of the spell if your previous heal was a different spell.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "When you cast a healing spell, gain Mana equal to 10% of the base cost of the spell if your previous heal was a different spell.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "holy-5-2",
       "name_en": "Spirit of Redemption",
       "icon": "inv_enchant_essenceeternallarge",
       "row": 5,
       "col": 2,
       "maxRanks": 1,
       "pointsRequired": 20,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Upon death, the priest becomes the Spirit of Redemption for 15 sec. The Spirit of Redemption cannot move, attack, be attacked or targeted by any spells or effects. While in this form the priest can cast any healing spell free of cost. When the effect ends, the priest dies.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Upon death, the priest becomes the Spirit of Redemption for 10 sec. The Spirit of Redemption cannot move, attack, be attacked or targeted by any spells or effects. While in this form the priest can cast any healing spell free of cost. When the effect ends, the priest dies.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "holy-5-3",
       "name_en": "Spiritual Guidance",
       "icon": "spell_holy_spiritualguidence",
       "row": 5,
       "col": 3,
       "maxRanks": 5,
       "pointsRequired": 20,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases your spell healing by up to 5% of your total Spirit and your spell damage by up to 1% of your total Spirit.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases your spell healing by up to 10% of your total Spirit and your spell damage by up to 3% of your total Spirit.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases your spell healing by up to 15% of your total Spirit and your spell damage by up to 5% of your total Spirit.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases your spell healing by up to 20% of your total Spirit and your spell damage by up to 6% of your total Spirit.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases your spell healing by up to 25% of your total Spirit and your spell damage by up to 8% of your total Spirit.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases spell damage and healing by up to 5% of your total Spirit.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "holy-6-3",
       "name_en": "Spiritual Healing",
       "icon": "spell_nature_moonglow",
       "row": 6,
       "col": 3,
       "maxRanks": 3,
       "pointsRequired": 25,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the amount healed by your spells by 3%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the amount healed by your spells by 7%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the amount healed by your spells by 10%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the amount healed by your healing spells by 2%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "holy-7-2",
       "name_en": "Prayer of Mending",
       "icon": "spell_holy_prayerofmendingtga",
       "row": 7,
       "col": 2,
       "maxRanks": 1,
       "pointsRequired": 30,
       "prerequisite": "holy-5-2",
       "arrow": "l2",
       "kind": "actif",
       "skill": {
        "cost": "210 Mana",
        "range": "40",
        "castTime": "Instant",
        "cooldown": "10 sec"
       },
       "costLine": "210 Mana | 40 yd range | Instant | 10 sec cooldown",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Places a spell on the target that heals them for 247 the next time they take damage or receive non-periodic healing. When the heal occurs, Prayer of Mending jumps to a party or raid member within 20 yards. Jumps up to 5 times and lasts 30 sec after each jump. This spell can only be placed on one target at a time per caster.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      }
     ],
     "removedFromClassic": [
      {
       "name_en": "Improved Prayer of Healing",
       "maxRanks": 2,
       "row": 5,
       "text": "Reduces the Mana cost of your Prayer of Healing spell by 10%."
      },
      {
       "name_en": "Lightwell",
       "maxRanks": 1,
       "row": 7,
       "text": "Creates a holy Lightwell near the priest.  Members of your raid or party can click the Lightwell to restore 800 health over 10 sec.  Being attacked cancels the effect.  Lightwell lasts for 3 min or 5 charges."
      }
     ],
     "disputed": []
    },
    {
     "key": "shadow-magic",
     "name_en": "Shadow Magic",
     "name_fr": "Ombre",
     "icon": "spell_shadow_shadowwordpain",
     "backgroundId": 203,
     "talents": [
      {
       "key": "shadow-magic-1-1",
       "name_en": "Shadow Focus",
       "icon": "spell_shadow_burningspirit",
       "row": 1,
       "col": 1,
       "maxRanks": 5,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases your chance to hit with your Shadow spells by 1%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases your chance to hit with your Shadow spells by 2%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases your chance to hit with your Shadow spells by 3%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases your chance to hit with your Shadow spells by 4%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases your chance to hit with your Shadow spells by 5%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Reduces your target's chance to resist your Shadow spells by 2%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "shadow-magic-1-2",
       "name_en": "Blackout",
       "icon": "spell_shadow_gathershadows",
       "row": 1,
       "col": 2,
       "maxRanks": 5,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Gives your Shadow damage spells a 2% chance to stun the target for 3 sec.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Gives your Shadow damage spells a 4% chance to stun the target for 3 sec.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Gives your Shadow damage spells a 6% chance to stun the target for 3 sec.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Gives your Shadow damage spells a 8% chance to stun the target for 3 sec.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Gives your Shadow damage spells a 10% chance to stun the target for 3 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "Gives your Shadow damage spells a 2% chance to stun the target for 3 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "shadow-magic-1-3",
       "name_en": "Spirit Tap",
       "icon": "spell_shadow_requiem",
       "row": 1,
       "col": 3,
       "maxRanks": 5,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Gives you a 20% chance to gain a 100% bonus to your Spirit for 15 sec after killing a non-trivial target. For the duration, your Mana will regenerate at a 50% of normal rate while casting.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Gives you a 40% chance to gain a 100% bonus to your Spirit for 15 sec after killing a non-trivial target. For the duration, your Mana will regenerate at a 50% of normal rate while casting.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Gives you a 60% chance to gain a 100% bonus to your Spirit for 15 sec after killing a non-trivial target. For the duration, your Mana will regenerate at a 50% of normal rate while casting.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Gives you a 80% chance to gain a 100% bonus to your Spirit for 15 sec after killing a non-trivial target. For the duration, your Mana will regenerate at a 50% of normal rate while casting.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Gives you a 100% chance to gain a 100% bonus to your Spirit for 15 sec after killing a non-trivial target. For the duration, your Mana will regenerate at a 50% of normal rate while casting.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Gives you a 20% chance to gain a 100% bonus to your Spirit after killing a target that yields experience. For the duration, your Mana will regenerate at a 50% rate while casting. Lasts 15 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "shadow-magic-2-1",
       "name_en": "Shadow Affinity",
       "icon": "spell_shadow_shadowward",
       "row": 2,
       "col": 1,
       "maxRanks": 3,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the threat generated by your Shadow spells by 10%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the threat generated by your Shadow spells by 20%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Reduces the threat generated by your Shadow spells by 30%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Reduces the threat generated by your Shadow spells by 8%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "shadow-magic-2-3",
       "name_en": "Improved Shadow Word: Pain",
       "icon": "spell_shadow_shadowwordpain",
       "row": 2,
       "col": 3,
       "maxRanks": 2,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the duration of your Shadow Word: Pain spell by 3 sec.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the duration of your Shadow Word: Pain spell by 6 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "Increases the duration of your Shadow Word: Pain spell by 3 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "shadow-magic-2-4",
       "name_en": "Shadow Reach",
       "icon": "spell_shadow_chilltouch",
       "row": 2,
       "col": 4,
       "maxRanks": 2,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the range of your offensive Shadow spells by 10%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the range of your offensive Shadow spells by 20%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the range of your Shadow damage spells by 6%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "shadow-magic-3-1",
       "name_en": "Improved Mind Blast",
       "icon": "spell_shadow_unholyfrenzy",
       "row": 3,
       "col": 1,
       "maxRanks": 5,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the cooldown of your Mind Blast spell by 0.5 sec.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the cooldown of your Mind Blast spell by 1 sec.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Reduces the cooldown of your Mind Blast spell by 1.5 sec.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Reduces the cooldown of your Mind Blast spell by 2 sec.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Reduces the cooldown of your Mind Blast spell by 2.5 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "Reduces the cooldown of your Mind Blast spell by 0.5 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "shadow-magic-3-2",
       "name_en": "Improved Psychic Scream",
       "icon": "spell_shadow_psychicscream",
       "row": 3,
       "col": 2,
       "maxRanks": 2,
       "pointsRequired": 10,
       "prerequisite": "shadow-magic-1-2",
       "arrow": "l2",
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the cooldown of your Psychic Scream spell by 2 sec.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the cooldown of your Psychic Scream spell by 4 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "Reduces the cooldown of your Psychic Scream spell by 2 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "shadow-magic-3-3",
       "name_en": "Mind Flay",
       "icon": "spell_shadow_siphonmana",
       "row": 3,
       "col": 3,
       "maxRanks": 1,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "actif",
       "skill": {
        "cost": "45 Mana",
        "range": "20",
        "castTime": "Channeled",
        "cooldown": null
       },
       "costLine": "45 Mana | 20 yd range | Channeled",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Assault the target's mind with Shadow energy, causing 104 Shadow damage over 3 sec and slowing their movement speed by 50%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Assault the target's mind with Shadow energy, causing 75 Shadow damage over 3 sec and slowing their movement speed by 50%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "shadow-magic-3-4",
       "name_en": "Improved Mind Flay",
       "icon": "spell_shadow_siphonmana",
       "row": 3,
       "col": 4,
       "maxRanks": 2,
       "pointsRequired": 10,
       "prerequisite": "shadow-magic-3-3",
       "arrow": "l1--left",
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Your Mind Flay now deals 10% more damage, gains 5 yards increased range, but slows the target's movement speed by 35%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Your Mind Flay now deals 20% more damage, gains 10 yards increased range, but slows the target's movement speed by 20%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "shadow-magic-4-1",
       "name_en": "Improved Fade",
       "icon": "spell_magic_lesserinvisibilty",
       "row": 4,
       "col": 1,
       "maxRanks": 2,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Decreases the cooldown of your Fade ability by 3 sec.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Decreases the cooldown of your Fade ability by 6 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "Decreases the cooldown of your Fade ability by 3 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "shadow-magic-4-2",
       "name_en": "Vampiric Embrace",
       "icon": "spell_shadow_unsummonbuilding",
       "row": 4,
       "col": 2,
       "maxRanks": 1,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "actif",
       "skill": {
        "cost": "40 Mana",
        "range": "30",
        "castTime": "Instant",
        "cooldown": "1 min"
       },
       "costLine": "40 Mana | 30 yd range | Instant | 1 min cooldown",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Afflicts your target with Shadow energy that causes all party members to be healed for 20% of any Shadow spell damage you deal for 30 sec. Vampiric Embrace also grants a chance for your Spirit Tap talent to trigger when enemies afflicted by it die.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Afflicts your target with Shadow energy that causes all party members to be healed for 20% of any Shadow spell damage you deal for 1 min.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "shadow-magic-4-3",
       "name_en": "Shadow Weaving",
       "icon": "spell_shadow_blackplague",
       "row": 4,
       "col": 3,
       "maxRanks": 3,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Your Shadow damage spells have a 33% chance to increase the Shadow damage you deal by 2% for 15 sec, stacking up to 5 times.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Your Shadow damage spells have a 67% chance to increase the Shadow damage you deal by 2% for 15 sec, stacking up to 5 times.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Your Shadow damage spells have a 100% chance to increase the Shadow damage you deal by 2% for 15 sec, stacking up to 5 times.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Your Shadow damage spells have a 20% chance to cause your target to be vulnerable to Shadow damage. This vulnerability increases the Shadow damage dealt to your target by 3% and lasts 15 sec. Stacks up to 5 times.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "shadow-magic-5-1",
       "name_en": "Silence",
       "icon": "spell_shadow_impphaseshift",
       "row": 5,
       "col": 1,
       "maxRanks": 1,
       "pointsRequired": 20,
       "prerequisite": null,
       "arrow": null,
       "kind": "actif",
       "skill": {
        "cost": "225 Mana",
        "range": "20",
        "castTime": "Instant",
        "cooldown": "45 sec"
       },
       "costLine": "225 Mana | 20 yd range | Instant | 45 sec cooldown",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Silences the target, preventing them from casting spells for 5 sec and interrupting their spellcasts for 3 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Silences the target, preventing them from casting spells for 5 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "shadow-magic-5-3",
       "name_en": "Devouring Contagion",
       "icon": "spell_shadow_devouringplague",
       "row": 5,
       "col": 3,
       "maxRanks": 2,
       "pointsRequired": 20,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the mana cost of your Devouring Plague by 25%.\n\nTargets that die while Devouring Plague is active spreads it, jumping to a nearby enemy within 5 yards for the remaining duration.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the mana cost of your Devouring Plague by 50%. Targets that die while Devouring Plague it is active spreads it, jumping to a nearby enemy within 10 yards for the remaining duration.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "shadow-magic-6-1",
       "name_en": "Early Demise",
       "icon": "spell_shadow_demonicfortitude",
       "row": 6,
       "col": 1,
       "maxRanks": 2,
       "pointsRequired": 25,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases Shadow Word: Death's critical strike chance on targets at or below 20% health by 15%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases Shadow Word: Death's critical strike chance on targets at or below 20% health by 30%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "shadow-magic-6-3",
       "name_en": "Darkness",
       "icon": "spell_shadow_twilight",
       "row": 6,
       "col": 3,
       "maxRanks": 5,
       "pointsRequired": 25,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases your Shadow damage done by 2%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases your Shadow damage done by 4%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases your Shadow damage done by 6%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases your Shadow damage done by 8%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases your Shadow damage done by 10%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases your Shadow spell damage by 2%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "shadow-magic-7-2",
       "name_en": "Shadowform",
       "icon": "spell_shadow_shadowform",
       "row": 7,
       "col": 2,
       "maxRanks": 1,
       "pointsRequired": 30,
       "prerequisite": "shadow-magic-4-2",
       "arrow": "l3",
       "kind": "actif",
       "skill": {
        "cost": "345 Mana",
        "range": null,
        "castTime": "Instant",
        "cooldown": "1.5 sec"
       },
       "costLine": "345 Mana | Instant | 1.5 sec cooldown",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Assume Shadowform, increasing your Shadow damage by 10%, reducing the Mana cost of all Shadow spells by 50%, increasing the critical strike damage bonus of your Shadow spells by 100%, and reducing Physical damage taken by you by 15%. However, you may not cast healing spells while in this form.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Assume a Shadowform, increasing your Shadow damage by 15% and reducing Physical damage done to you by 15%. However, you may not cast Holy spells while in this form.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      }
     ],
     "removedFromClassic": [
      {
       "name_en": "Improved Vampiric Embrace",
       "maxRanks": 2,
       "row": 5,
       "text": "Increases the percentage healed by Vampiric Embrace by an additional 5%."
      }
     ],
     "disputed": []
    }
   ]
  },
  {
   "slug": "chaman",
   "gameId": 7,
   "name_fr": "Chaman",
   "name_en": "Shaman",
   "icon": "class_shaman",
   "status": "COMMUNAUTÉ",
   "sourceIds": [
    "forever-talents-releve",
    "wowtbc-forever-calculator",
    "wowhead-forever-talent-calc"
   ],
   "transcriptionNote": "Talent text transcribed from in-game tooltip video (shaman.json).",
   "trees": [
    {
     "key": "elemental-combat",
     "name_en": "Elemental Combat",
     "name_fr": "Élémentaire",
     "icon": "spell_nature_lightning",
     "backgroundId": 261,
     "talents": [
      {
       "key": "elemental-combat-1-2",
       "name_en": "Convection",
       "icon": "spell_nature_wispsplode",
       "row": 1,
       "col": 2,
       "maxRanks": 5,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the mana cost of your Shock, Lightning Bolt, Lava Burst, and Chain Lightning spells by 2%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the mana cost of your Shock, Lightning Bolt, Lava Burst, and Chain Lightning spells by 4%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Reduces the mana cost of your Shock, Lightning Bolt, Lava Burst, and Chain Lightning spells by 6%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Reduces the mana cost of your Shock, Lightning Bolt, Lava Burst, and Chain Lightning spells by 8%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Reduces the mana cost of your Shock, Lightning Bolt, Lava Burst, and Chain Lightning spells by 10%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Reduces the mana cost of your Shock, Lightning Bolt and Chain Lightning spells by 2%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "elemental-combat-1-3",
       "name_en": "Concussion",
       "icon": "spell_fire_fireball",
       "row": 1,
       "col": 3,
       "maxRanks": 5,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the damage done by your Lightning Bolt, Chain Lightning, and Earth Shock spells by 1%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the damage done by your Lightning Bolt, Chain Lightning, and Earth Shock spells by 2%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the damage done by your Lightning Bolt, Chain Lightning, and Earth Shock spells by 3%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases the damage done by your Lightning Bolt, Chain Lightning, and Earth Shock spells by 4%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases the damage done by your Lightning Bolt, Chain Lightning, and Earth Shock spells by 5%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the damage done by your Lightning Bolt, Chain Lightning and Shock spells by 1%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "elemental-combat-2-1",
       "name_en": "Elemental Warding",
       "icon": "spell_nature_spiritarmor",
       "row": 2,
       "col": 1,
       "maxRanks": 3,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces damage taken from Fire, Frost, and Nature effects by 3%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces damage taken from Fire, Frost, and Nature effects by 7%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Reduces damage taken from Fire, Frost, and Nature effects by 10%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Reduces damage taken from Fire, Frost and Nature effects by 4%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "elemental-combat-2-2",
       "name_en": "Reverberation",
       "icon": "spell_frost_frostward",
       "row": 2,
       "col": 2,
       "maxRanks": 5,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the cooldown of your Shock spells by 0.2 sec.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the cooldown of your Shock spells by 0.4 sec.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Reduces the cooldown of your Shock spells by 0.6 sec.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Reduces the cooldown of your Shock spells by 0.8 sec.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Reduces the cooldown of your Shock spells by 1 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "moved",
       "classicText": "Reduces the cooldown of your Shock spells by 0.2 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "elemental-combat-2-3",
       "name_en": "Call of Flame",
       "icon": "spell_fire_immolation",
       "row": 2,
       "col": 3,
       "maxRanks": 3,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the damage done by your Fire Totems and by your Flame Shock, Fire Nova, and Lava Burst spells by 5%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the damage done by your Fire Totems and by your Flame Shock, Fire Nova, and Lava Burst spells by 10%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the damage done by your Fire Totems and by your Flame Shock, Fire Nova, and Lava Burst spells by 15%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the damage done by your Fire Totems by 5%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "elemental-combat-2-4",
       "name_en": "Elemental Devastation",
       "icon": "classic_spell_fire_elementaldevastation",
       "row": 2,
       "col": 4,
       "maxRanks": 3,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Your offensive spell critical strikes will increase your chance to get a critical strike with melee attacks by 3% for 10 sec.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Your offensive spell critical strikes will increase your chance to get a critical strike with melee attacks by 6% for 10 sec.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Your offensive spell critical strikes will increase your chance to get a critical strike with melee attacks by 9% for 10 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Your offensive spell crits will increase your chance to get a critical strike with melee attacks by 3% for 10 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "elemental-combat-3-2",
       "name_en": "Elemental Focus",
       "icon": "spell_shadow_manaburn",
       "row": 3,
       "col": 2,
       "maxRanks": 1,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Gives you a 10% chance to enter a Clearcasting state after casting any Fire, Frost, or Nature damage spell. The Clearcasting state reduces the mana cost of your next damage spell by 100%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "Gives you a 10% chance to enter a Clearcasting state after casting any Fire, Frost, or Nature damage spell. The Clearcasting state reduces the mana cost of your next damage spell by 100%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "elemental-combat-3-3",
       "name_en": "Elemental Fury",
       "icon": "spell_fire_volcano",
       "row": 3,
       "col": 3,
       "maxRanks": 5,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the critical strike damage bonus of your Searing and Magma Totems and your Fire, Frost, and Nature spells by 20%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the critical strike damage bonus of your Searing and Magma Totems and your Fire, Frost, and Nature spells by 40%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the critical strike damage bonus of your Searing and Magma Totems and your Fire, Frost, and Nature spells by 60%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases the critical strike damage bonus of your Searing and Magma Totems and your Fire, Frost, and Nature spells by 80%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases the critical strike damage bonus of your Searing and Magma Totems and your Fire, Frost, and Nature spells by 100%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the critical strike damage bonus of your Searing, Magma, and Fire Nova Totems and your Fire, Frost, and Nature spells by 100%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "elemental-combat-4-1",
       "name_en": "Improved Fire Nova",
       "icon": "spell_fire_sealoffire",
       "row": 4,
       "col": 1,
       "maxRanks": 2,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the damage done by your Fire Nova spell by 10% and reduces its cooldown by 2 sec.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the damage done by your Fire Nova spell by 20% and reduces its cooldown by 4 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Reduces the delay before your Fire Nova Totem activates by 1 sec. and decreases the threat generated by your Magma Totem by 25%.",
       "classicRenamedFrom": "Improved Fire Totems",
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "elemental-combat-4-2",
       "name_en": "Eye of the Storm",
       "icon": "spell_nature_eyeofthestorm",
       "row": 4,
       "col": 2,
       "maxRanks": 3,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the pushback suffered from damaging attacks while casting Lightning Bolt, Chain Lightning, and Lava Burst by 23%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the pushback suffered from damaging attacks while casting Lightning Bolt, Chain Lightning, and Lava Burst by 47%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Reduces the pushback suffered from damaging attacks while casting Lightning Bolt, Chain Lightning, and Lava Burst by 70%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Gives you a 33% chance to gain the Focused Casting effect that lasts for 6 sec after being the victim of a melee or ranged critical strike. The Focused Casting effect prevents you from losing casting time when taking damage.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "elemental-combat-4-3",
       "name_en": "Call of Thunder",
       "icon": "spell_nature_callstorm",
       "row": 4,
       "col": 3,
       "maxRanks": 1,
       "pointsRequired": 15,
       "prerequisite": "elemental-combat-3-3",
       "arrow": "l1",
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the critical strike chance of your Lightning Bolt and Chain Lightning spells by 3%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the critical strike chance of your Lightning Bolt and Chain Lightning spells by an additional 1%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "elemental-combat-5-1",
       "name_en": "Elemental Reach",
       "icon": "spell_nature_stormreach",
       "row": 5,
       "col": 1,
       "maxRanks": 2,
       "pointsRequired": 20,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the range of your Lightning Bolt, Chain Lightning, Fire Nova, and Lava Burst spells by 3 yards, and increases the range of your Flame Shock spell by 8 yards.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the range of your Lightning Bolt, Chain Lightning, Fire Nova, and Lava Burst spells by 6 yards, and increases the range of your Flame Shock spell by 15 yards.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the range of your Lightning Bolt and Chain Lightning spells by 3 yards.",
       "classicRenamedFrom": "Storm Reach",
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "elemental-combat-5-2",
       "name_en": "Lightning Overload",
       "icon": "spell_nature_lightningoverload",
       "row": 5,
       "col": 2,
       "maxRanks": 3,
       "pointsRequired": 20,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Gives your Lightning Bolt and Chain Lightning spells a 3% chance to cast a second, similar spell on the same target at no additional cost that causes half damage and no threat.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Gives your Lightning Bolt and Chain Lightning spells a 7% chance to cast a second, similar spell on the same target at no additional cost that causes half damage and no threat.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Gives your Lightning Bolt and Chain Lightning spells a 10% chance to cast a second, similar spell on the same target at no additional cost that causes half damage and no threat.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "elemental-combat-5-4",
       "name_en": "Earthbound",
       "icon": "spell_nature_strengthofearthtotem02",
       "row": 5,
       "col": 4,
       "maxRanks": 1,
       "pointsRequired": 20,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Your Earthbind Totem Immobilizes nearby targets for 5 sec when cast.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "elemental-combat-6-3",
       "name_en": "Elemental Alacrity",
       "icon": "spell_nature_unrelentingstorm",
       "row": 6,
       "col": 3,
       "maxRanks": 3,
       "pointsRequired": 25,
       "prerequisite": "elemental-combat-4-3",
       "arrow": "l2",
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the cast time of your Lightning Bolt, Chain Lightning, and Lava Burst spells by 0.17 sec.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the cast time of your Lightning Bolt, Chain Lightning, and Lava Burst spells by 0.33 sec.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Reduces the cast time of your Lightning Bolt, Chain Lightning, and Lava Burst spells by 0.5 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Reduces the cast time of your Lightning Bolt and Chain Lightning spells by 0.2 sec.",
       "classicRenamedFrom": "Lightning Mastery",
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "elemental-combat-7-2",
       "name_en": "Lava Burst",
       "icon": "spell_shaman_lavaburst",
       "row": 7,
       "col": 2,
       "maxRanks": 1,
       "pointsRequired": 30,
       "prerequisite": "elemental-combat-5-2",
       "arrow": "l2",
       "kind": "actif",
       "skill": {
        "cost": "165 Mana",
        "range": "30",
        "castTime": "2.5 sec cast",
        "cooldown": "10 sec"
       },
       "costLine": "165 Mana | 30 yd range | 2.5 sec cast | 10 sec cooldown",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "You hurl molten lava at the target, dealing 158 to 187 Fire damage. If your Flame Shock is on the target, Lava Burst deals 20% increased damage.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      }
     ],
     "removedFromClassic": [
      {
       "name_en": "Elemental Mastery",
       "maxRanks": 1,
       "row": 7,
       "text": "When activated, this spell gives your next Fire, Frost, or Nature damage spell a 100% critical strike chance and reduces the mana cost by 100%."
      }
     ],
     "disputed": []
    },
    {
     "key": "enhancement",
     "name_en": "Enhancement",
     "name_fr": "Amélioration",
     "icon": "spell_nature_lightningshield",
     "backgroundId": 263,
     "talents": [
      {
       "key": "enhancement-1-1",
       "name_en": "Earth's Grasp",
       "icon": "spell_nature_stoneclawtotem",
       "row": 1,
       "col": 1,
       "maxRanks": 2,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the health of your Stoneclaw Totem by 25% and the radius of your Earthbind Totem by 10%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the health of your Stoneclaw Totem by 50% and the radius of your Earthbind Totem by 20%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "moved",
       "classicText": "Increases the health of your Stoneclaw Totem by 25% and the radius of your Earthbind Totem by 10%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "enhancement-1-2",
       "name_en": "Thundering Strikes",
       "icon": "ability_thunderbolt",
       "row": 1,
       "col": 2,
       "maxRanks": 5,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Improves your chance to get a critical strike with all spells and attacks by 1%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Improves your chance to get a critical strike with all spells and attacks by 2%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Improves your chance to get a critical strike with all spells and attacks by 3%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Improves your chance to get a critical strike with all spells and attacks by 4%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Improves your chance to get a critical strike with all spells and attacks by 5%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Improves your chance to get a critical strike with your weapon attacks by 1%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "enhancement-1-3",
       "name_en": "Ancestral Knowledge",
       "icon": "spell_shadow_grimward",
       "row": 1,
       "col": 3,
       "maxRanks": 5,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases your Intellect by 2%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases your Intellect by 4%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases your Intellect by 6%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases your Intellect by 8%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases your Intellect by 10%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases your maximum Mana by 1%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "enhancement-2-1",
       "name_en": "Guardian Totems",
       "icon": "spell_nature_stoneskintotem",
       "row": 2,
       "col": 1,
       "maxRanks": 2,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the amount of damage reduced by your Stoneskin Totem and Windwall Totem by 10% and reduces the cooldown of your Grounding Totem by 1 sec.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the amount of damage reduced by your Stoneskin Totem and Windwall Totem by 20% and reduces the cooldown of your Grounding Totem by 2 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "Increases the amount of damage reduced by your Stoneskin Totem and Windwall Totem by 10% and reduces the cooldown of your Grounding Totem by 1 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "enhancement-2-2",
       "name_en": "Mental Dexterity",
       "icon": "spell_nature_mentalquickness",
       "row": 2,
       "col": 2,
       "maxRanks": 3,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases your Attack Power by an amount equal to 33% of your Intellect.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases your Attack Power by an amount equal to 67% of your Intellect.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases your Attack Power by an amount equal to 100% of your Intellect.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "enhancement-2-3",
       "name_en": "Improved Ghost Wolf",
       "icon": "spell_nature_spiritwolf",
       "row": 2,
       "col": 3,
       "maxRanks": 2,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the cast time of your Ghost Wolf spell by 1.0 sec. and Ghost Wolf may be used indoors.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the cast time of your Ghost Wolf spell by 3 sec, and Ghost Wolf may be used indoors.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Reduces the cast time of your Ghost Wolf spell by 1 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "enhancement-2-4",
       "name_en": "Improved Lightning Shield",
       "icon": "spell_nature_lightningshield",
       "row": 2,
       "col": 4,
       "maxRanks": 3,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the damage done by your Lightning Shield orbs by 5%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the damage done by your Lightning Shield orbs by 10%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the damage done by your Lightning Shield orbs by 15%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "Increases the damage done by your Lightning Shield orbs by 5%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "enhancement-3-1",
       "name_en": "Elemental Weapons",
       "icon": "spell_fire_flametounge",
       "row": 3,
       "col": 1,
       "maxRanks": 3,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the melee attack power bonus of your Rockbiter Weapon by 7%, your Windfury Weapon effect by 13% and increases the damage caused by your Flametongue Weapon and Frostbrand Weapon by 5%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the melee attack power bonus of your Rockbiter Weapon by 13%, your Windfury Weapon effect by 27% and increases the damage caused by your Flametongue Weapon and Frostbrand Weapon by 10%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the melee attack power bonus of your Rockbiter Weapon by 20%, your Windfury Weapon effect by 40% and increases the damage caused by your Flametongue Weapon and Frostbrand Weapon by 15%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "moved",
       "classicText": "Increases the melee attack power bonus of your Rockbiter Weapon by 7%, your Windfury Weapon effect by 13% and increases the damage caused by your Flametongue Weapon and Frostbrand Weapon by 5%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "enhancement-3-3",
       "name_en": "Shamanistic Focus",
       "icon": "spell_nature_elementalabsorption",
       "row": 3,
       "col": 3,
       "maxRanks": 1,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the mana cost of your Shock and Lightning Shield spells by 45%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "enhancement-3-4",
       "name_en": "Anticipation",
       "icon": "spell_nature_mirrorimage",
       "row": 3,
       "col": 4,
       "maxRanks": 3,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases your chance to dodge by an additional 2%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases your chance to dodge by an additional 4%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases your chance to dodge by an additional 6%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases your chance to dodge by an additional 1%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "enhancement-4-1",
       "name_en": "Toughness",
       "icon": "spell_holy_devotion",
       "row": 4,
       "col": 1,
       "maxRanks": 5,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases your Stamina by 2%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases your Stamina by 4%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases your Stamina by 6%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases your Stamina by 8%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases your Stamina by 10%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases your armor value from items by 2%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "enhancement-4-2",
       "name_en": "Flurry",
       "icon": "ability_ghoulfrenzy",
       "row": 4,
       "col": 2,
       "maxRanks": 5,
       "pointsRequired": 15,
       "prerequisite": "enhancement-2-2",
       "arrow": "l2",
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases your attack speed by 5% for your next 3 swings after dealing a melee critical strike.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases your attack speed by 10% for your next 3 swings after dealing a melee critical strike.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases your attack speed by 15% for your next 3 swings after dealing a melee critical strike.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases your attack speed by 20% for your next 3 swings after dealing a melee critical strike.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases your attack speed by 25% for your next 3 swings after dealing a melee critical strike.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases your attack speed by 10% for your next 3 swings after dealing a critical strike.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "enhancement-4-3",
       "name_en": "Stormstrike",
       "icon": "spell_holy_sealofmight",
       "row": 4,
       "col": 3,
       "maxRanks": 1,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "actif",
       "skill": {
        "cost": "125 Mana",
        "range": "Melee",
        "castTime": "Instant",
        "cooldown": "8 sec"
       },
       "costLine": "125 Mana | Melee Range | Instant | 8 sec cooldown",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Instantly strike for normal weapon damage and increase the damage you deal to the target with your next Lightning Bolt, Chain Lightning, or Earth Shock spell by 20% for 12 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Gives you an extra attack. In addition, the next 2 sources of Nature damage dealt to the target are increased by 20%. Lasts 12 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "enhancement-5-1",
       "name_en": "Spirit Weapons",
       "icon": "ability_parry",
       "row": 5,
       "col": 1,
       "maxRanks": 1,
       "pointsRequired": 20,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Gives a chance to parry enemy melee attacks, reduces all threat generated by your attacks by 30% while Rockbiter Weapon is not active, and increases all threat generated by 30% while Rockbiter Weapon is active.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Gives a chance to parry enemy melee attacks.",
       "classicRenamedFrom": "Parry",
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "enhancement-5-2",
       "name_en": "Mental Quickness",
       "icon": "spell_nature_mentalquickness",
       "row": 5,
       "col": 2,
       "maxRanks": 2,
       "pointsRequired": 20,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases your spell damage and healing by up to 15% of your Intellect.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases your spell damage and healing by up to 30% of your Intellect.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "enhancement-5-3",
       "name_en": "Improved Stormstrike",
       "icon": "ability_shaman_stormstrike",
       "row": 5,
       "col": 3,
       "maxRanks": 2,
       "pointsRequired": 20,
       "prerequisite": "enhancement-4-3",
       "arrow": "l1",
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "When you Stormstrike, you have a 50% chance to gain 50% mana regeneration while casting spells for 15 sec, and Stormstrike's cooldown has a 50% chance to reset each time you Dodge or Parry.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "When you Stormstrike, you have a 100% chance to gain 50% mana regeneration while casting spells for 15 sec, and Stormstrike's cooldown has a 100% chance to reset each time you Dodge or Parry.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "enhancement-6-3",
       "name_en": "Maelstrom Weapon",
       "icon": "spell_shaman_maelstromweapon",
       "row": 6,
       "col": 3,
       "maxRanks": 5,
       "pointsRequired": 25,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "When you deal damage with a melee attack, you have a chance to reduce the cast time and Mana cost of your next Lightning Bolt spell by 4%. Stacks up to 5 times. Lasts 30 sec.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "When you deal damage with a melee attack, you have a chance to reduce the cast time and Mana cost of your next Lightning Bolt spell by 8%. Stacks up to 5 times. Lasts 30 sec.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "When you deal damage with a melee attack, you have a chance to reduce the cast time and Mana cost of your next Lightning Bolt spell by 12%. Stacks up to 5 times. Lasts 30 sec.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "When you deal damage with a melee attack, you have a chance to reduce the cast time and Mana cost of your next Lightning Bolt spell by 16%. Stacks up to 5 times. Lasts 30 sec.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "When you deal damage with a melee attack, you have a chance to reduce the cast time and Mana cost of your next Lightning Bolt spell by 20%. Stacks up to 5 times. Lasts 30 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "enhancement-7-2",
       "name_en": "Rage of the Farseer",
       "icon": "spell_nature_bloodlust",
       "row": 7,
       "col": 2,
       "maxRanks": 1,
       "pointsRequired": 30,
       "prerequisite": "enhancement-5-2",
       "arrow": "l2",
       "kind": "actif",
       "skill": {
        "cost": null,
        "range": null,
        "castTime": "Instant",
        "cooldown": "3 min"
       },
       "costLine": "Instant | 3 min cooldown",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases your melee attack speed and spell casting speed by 30% for 25 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      }
     ],
     "removedFromClassic": [
      {
       "name_en": "Shield Specialization",
       "maxRanks": 5,
       "row": 1,
       "text": "Increases your chance to block attacks with a shield by 1% and increases the amount blocked by 5%."
      },
      {
       "name_en": "Enhancing Totems",
       "maxRanks": 2,
       "row": 3,
       "text": "Increases the effect of your Strength of Earth and Grace of Air Totems by 8%."
      },
      {
       "name_en": "Two-Handed Axes and Maces",
       "maxRanks": 1,
       "row": 3,
       "text": "Allows you to use Two-Handed Axes and Two-Handed Maces."
      },
      {
       "name_en": "Improved Weapon Totems",
       "maxRanks": 2,
       "row": 5,
       "text": "Increases the melee attack power bonus of your Windfury Totem by 15% and increases the damage caused by your Flametongue Totem by 6%."
      },
      {
       "name_en": "Weapon Mastery",
       "maxRanks": 5,
       "row": 6,
       "text": "Increases the damage you deal with all weapons by 2%."
      }
     ],
     "disputed": [
      {
       "name_en": "Shield Specialization",
       "maxRanks": 5,
       "row": 1,
       "col": 3,
       "text": "Increases your chance to block attacks with a shield by 1% and increases the amount blocked by 5%.",
       "reportedBy": "wowtbc-forever-calculator",
       "counterClaim": "Le relevé image par image le classe parmi les talents retirés de cet arbre depuis Classic."
      }
     ]
    },
    {
     "key": "restoration",
     "name_en": "Restoration",
     "name_fr": "Restauration",
     "icon": "spell_nature_magicimmunity",
     "backgroundId": 262,
     "talents": [
      {
       "key": "restoration-1-2",
       "name_en": "Improved Healing Wave",
       "icon": "spell_nature_magicimmunity",
       "row": 1,
       "col": 2,
       "maxRanks": 5,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the casting time of your Healing Wave spell by 0.1 sec.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the casting time of your Healing Wave spell by 0.2 sec.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Reduces the casting time of your Healing Wave spell by 0.3 sec.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Reduces the casting time of your Healing Wave spell by 0.4 sec.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Reduces the casting time of your Healing Wave spell by 0.5 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "Reduces the casting time of your Healing Wave spell by 0.1 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "restoration-1-3",
       "name_en": "Tidal Mastery",
       "icon": "spell_nature_tranquility",
       "row": 1,
       "col": 3,
       "maxRanks": 5,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the critical effect chance of your healing spells by 1%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the critical effect chance of your healing spells by 2%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the critical effect chance of your healing spells by 3%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases the critical effect chance of your healing spells by 4%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases the critical effect chance of your healing spells by 5%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the critical effect chance of your healing and lightning spells by 1%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "restoration-2-1",
       "name_en": "Mindfulness",
       "icon": "spell_nature_sleep",
       "row": 2,
       "col": 1,
       "maxRanks": 3,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Allows 17% of your Mana regeneration to continue while casting.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Allows 33% of your Mana regeneration to continue while casting.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Allows 50% of your Mana regeneration to continue while casting.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "restoration-2-2",
       "name_en": "Natural Grace",
       "icon": "spell_nature_naturetouchgrow",
       "row": 2,
       "col": 2,
       "maxRanks": 3,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the threat generated by your spells by 5%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the threat generated by your spells by 10%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Reduces the threat generated by your spells by 15%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Reduces the threat generated by your healing spells by 5%.",
       "classicRenamedFrom": "Healing Grace",
       "divergences": [
        {
         "field": "name",
         "foreverTalents": "Natural Grace",
         "wowtbc": "Nature's Grace"
        }
       ],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "restoration-2-3",
       "name_en": "Tidal Focus",
       "icon": "spell_frost_manarecharge",
       "row": 2,
       "col": 3,
       "maxRanks": 5,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the Mana cost of your healing spells by 1% and increases your chance to hit with all spells and attacks by 1%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the Mana cost of your healing spells by 2% and increases your chance to hit with all spells and attacks by 2%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Reduces the Mana cost of your healing spells by 3% and increases your chance to hit with all spells and attacks by 3%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Reduces the Mana cost of your healing spells by 4% and increases your chance to hit with all spells and attacks by 4%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Reduces the Mana cost of your healing spells by 5% and increases your chance to hit with all spells and attacks by 5%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Reduces the Mana cost of your healing spells by 1%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "restoration-2-4",
       "name_en": "Improved Reincarnation",
       "icon": "spell_nature_reincarnation",
       "row": 2,
       "col": 4,
       "maxRanks": 2,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the cooldown of your Reincarnation spell by 10 min, increases your maximum health by 2%, and increases the amount of health and Mana you reincarnate with by an additional 10%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the cooldown of your Reincarnation spell by 20 min, increases your maximum health by 4%, and increases the amount of health and Mana you reincarnate with by an additional 20%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Reduces the cooldown of your Reincarnation spell by 10 min and increases the amount of health and mana you reincarnate with by an additional 10%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "restoration-3-1",
       "name_en": "Ancestral Healing",
       "icon": "spell_nature_undyingstrength",
       "row": 3,
       "col": 1,
       "maxRanks": 3,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases your target's armor value by 8% for 15 sec after getting a critical effect from one of your healing spells.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases your target's armor value by 17% for 15 sec after getting a critical effect from one of your healing spells.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases your target's armor value by 25% for 15 sec after getting a critical effect from one of your healing spells.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "moved",
       "classicText": "Increases your target's armor value by 8% for 15 sec after getting a critical effect from one of your healing spells.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "restoration-3-2",
       "name_en": "Healing Focus",
       "icon": "spell_nature_healingwavelesser",
       "row": 3,
       "col": 2,
       "maxRanks": 3,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Gives you a 23% chance to avoid interruption caused by damage while casting any healing spell.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Gives you a 47% chance to avoid interruption caused by damage while casting any healing spell.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Gives you a 70% chance to avoid interruption caused by damage while casting any healing spell.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Gives you a 14% chance to avoid interruption caused by damage while casting any healing spell.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "restoration-3-3",
       "name_en": "Water Shield",
       "icon": "ability_shaman_watershield",
       "row": 3,
       "col": 3,
       "maxRanks": 1,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "actif",
       "skill": {
        "cost": null,
        "range": null,
        "castTime": "Instant",
        "cooldown": "15 sec"
       },
       "costLine": "Instant | 15 sec cooldown",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "The caster is surrounded by 3 globes of water. When a spell, melee, or ranged attack hits the caster or when one of the caster's healing spells gets a critical result, 2% of maximum mana is restored to the caster, expending one water globe. Only one globe will activate every few seconds. Lasts 10 min.\n\nOnly one Elemental Shield can be active on the Shaman at any one time.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "restoration-4-1",
       "name_en": "Totemic Focus",
       "icon": "spell_nature_moonglow",
       "row": 4,
       "col": 1,
       "maxRanks": 5,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the Mana cost of your totems and any spells that summon or move them by 5%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the Mana cost of your totems and any spells that summon or move them by 10%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Reduces the Mana cost of your totems and any spells that summon or move them by 15%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Reduces the Mana cost of your totems and any spells that summon or move them by 20%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Reduces the Mana cost of your totems and any spells that summon or move them by 25%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Reduces the Mana cost of your totems by 5%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "restoration-4-2",
       "name_en": "Restorative Totems",
       "icon": "spell_nature_manaregentotem",
       "row": 4,
       "col": 2,
       "maxRanks": 5,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the effect of your Mana Spring Totem by 5% and increases the effect of your Healing Stream Totem by 10%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the effect of your Mana Spring Totem by 10% and increases the effect of your Healing Stream Totem by 20%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the effect of your Mana Spring Totem by 15% and increases the effect of your Healing Stream Totem by 30%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases the effect of your Mana Spring Totem by 20% and increases the effect of your Healing Stream Totem by 40%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases the effect of your Mana Spring Totem by 25% and increases the effect of your Healing Stream Totem by 50%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the effect of your Mana Spring and Healing Stream Totems by 5%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "restoration-4-3",
       "name_en": "Mana Tide Totem",
       "icon": "spell_frost_summonwaterelemental",
       "row": 4,
       "col": 3,
       "maxRanks": 1,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "actif",
       "skill": {
        "cost": "10 Mana",
        "range": null,
        "castTime": "Instant",
        "cooldown": "5 min"
       },
       "costLine": "10 Mana | Instant | 5 min cooldown | Tools: Water Totem",
       "requires": [
        "Water Totem"
       ],
       "ranks": [
        {
         "rank": 1,
         "text": "Summons a Mana Tide Totem with 5 health at the feet of the caster for 12 sec that restores 88 mana every 3 seconds to group members within 30 yards.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Summons a Mana Tide Totem with 5 health at the feet of the caster for 12 sec that restores 170 mana every 3 seconds to group members within 20 yards.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "restoration-5-2",
       "name_en": "Healing Way",
       "icon": "classic_spell_nature_healingway",
       "row": 5,
       "col": 2,
       "maxRanks": 3,
       "pointsRequired": 20,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the amount healed by your Healing Wave spell by 8%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the amount healed by your Healing Wave spell by 17%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the amount healed by your Healing Wave spell by 25%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Your Healing Wave spells have a 33% chance to increase the effect of subsequent Healing Wave spells on that target by 6% for 15 sec. This effect will stack up to 3 times.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "restoration-5-3",
       "name_en": "Nature's Swiftness",
       "icon": "spell_nature_ravenform",
       "row": 5,
       "col": 3,
       "maxRanks": 1,
       "pointsRequired": 20,
       "prerequisite": null,
       "arrow": null,
       "kind": "actif",
       "skill": {
        "cost": null,
        "range": null,
        "castTime": "Instant",
        "cooldown": "3 min"
       },
       "costLine": "Instant | 3 min cooldown",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "When activated, your next Nature spell with a casting time less than 10 sec. becomes an instant cast spell.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "When activated, your next Nature spell with a casting time less than 10 sec. becomes an instant cast spell.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "restoration-6-3",
       "name_en": "Purification",
       "icon": "spell_frost_wizardmark",
       "row": 6,
       "col": 3,
       "maxRanks": 5,
       "pointsRequired": 25,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the effectiveness of your healing spells by 2%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the effectiveness of your healing spells by 4%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the effectiveness of your healing spells by 6%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases the effectiveness of your healing spells by 8%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases the effectiveness of your healing spells by 10%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the effectiveness of your healing spells by 2%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "restoration-7-2",
       "name_en": "Riptide",
       "icon": "spell_nature_riptide",
       "row": 7,
       "col": 2,
       "maxRanks": 1,
       "pointsRequired": 30,
       "prerequisite": "restoration-5-2",
       "arrow": "l2",
       "kind": "actif",
       "skill": {
        "cost": "245 Mana",
        "range": "40",
        "castTime": "Instant",
        "cooldown": "6 sec"
       },
       "costLine": "245 Mana | 40 yd range | Instant | 6 sec cooldown",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Heals a friendly target for 479 to 528, an additional 499 over 15 sec, and increases the effectiveness of your Chain Heal casts directly on that target by 25%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      }
     ],
     "removedFromClassic": [
      {
       "name_en": "Nature's Guidance",
       "maxRanks": 3,
       "row": 3,
       "text": "Increases your chance to hit with melee attacks and spells by 1%."
      },
      {
       "name_en": "Totemic Mastery",
       "maxRanks": 1,
       "row": 3,
       "text": "The radius of your totems that affect friendly targets is increased to 30 yd."
      }
     ],
     "disputed": []
    }
   ]
  },
  {
   "slug": "mage",
   "gameId": 8,
   "name_fr": "Mage",
   "name_en": "Mage",
   "icon": "class_mage",
   "status": "COMMUNAUTÉ",
   "sourceIds": [
    "forever-talents-releve",
    "wowtbc-forever-calculator",
    "wowhead-forever-talent-calc"
   ],
   "transcriptionNote": "Talent text transcribed from in-game tooltip video (mage.json).",
   "trees": [
    {
     "key": "arcane",
     "name_en": "Arcane",
     "name_fr": "Arcanes",
     "icon": "spell_holy_magicalsentry",
     "backgroundId": 81,
     "talents": [
      {
       "key": "arcane-1-1",
       "name_en": "Wand Specialization",
       "icon": "inv_wand_01",
       "row": 1,
       "col": 1,
       "maxRanks": 2,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases your damage with Wands by 13%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases your damage with Wands by 25%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "moved",
       "classicText": "Increases your damage with Wands by 13%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "arcane-1-2",
       "name_en": "Arcane Focus",
       "icon": "spell_holy_devotion",
       "row": 1,
       "col": 2,
       "maxRanks": 5,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases your chance to hit with your Arcane spells by 1%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases your chance to hit with your Arcane spells by 2%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases your chance to hit with your Arcane spells by 3%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases your chance to hit with your Arcane spells by 4%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases your chance to hit with your Arcane spells by 5%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Reduces the chance that the opponent can resist your Arcane spells by 2%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "arcane-1-3",
       "name_en": "Improved Channeling",
       "icon": "spell_holy_mindvision",
       "row": 1,
       "col": 3,
       "maxRanks": 5,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Gives you a 20% chance to avoid interruption caused by damage while channeling Arcane Missiles and a 14% chance while casting Arcane Blast.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Gives you a 40% chance to avoid interruption caused by damage while channeling Arcane Missiles and a 28% chance while casting Arcane Blast.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Gives you a 60% chance to avoid interruption caused by damage while channeling Arcane Missiles and a 42% chance while casting Arcane Blast.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Gives you a 80% chance to avoid interruption caused by damage while channeling Arcane Missiles and a 56% chance while casting Arcane Blast.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Gives you a 100% chance to avoid interruption caused by damage while channeling Arcane Missiles and a 70% chance while casting Arcane Blast.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Gives you a 20% chance to avoid interruption caused by damage while channeling Arcane Missiles .",
       "classicRenamedFrom": "Improved Arcane Missiles",
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "arcane-2-1",
       "name_en": "Arcane Subtlety",
       "icon": "spell_holy_dispelmagic",
       "row": 2,
       "col": 1,
       "maxRanks": 2,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces your target's resistance to all your spells by 8 and reduces the threat caused by your Arcane spells by 15%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces your target's resistance to all your spells by 15 and reduces the threat caused by your Arcane spells by 30%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Reduces your target's resistance to all your spells by 5 and reduces the threat caused by your Arcane spells by 20%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "arcane-2-2",
       "name_en": "Magic Absorption",
       "icon": "spell_nature_astralrecalgroup",
       "row": 2,
       "col": 2,
       "maxRanks": 2,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases all your resistances by 5 and causes all spells you fully resist to restore 1% of your total mana. Cannot trigger more often than 1 time per sec.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases all your resistances by 10 and causes all spells you fully resist to restore 2% of your total mana. Cannot trigger more often than 1 time per sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases all resistances by 2 and causes all spells you fully resist to restore 1% of your total mana. 1 sec. cooldown.",
       "classicRenamedFrom": null,
       "divergences": [
        {
         "field": "maxRanks",
         "foreverTalents": "2",
         "wowtbc": "5"
        }
       ],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "arcane-2-3",
       "name_en": "Arcane Concentration",
       "icon": "spell_shadow_manaburn",
       "row": 2,
       "col": 3,
       "maxRanks": 5,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Gives you a 2% chance of entering a Clearcasting state after any damage spell hits a target. The Clearcasting state reduces the mana cost of your next damage spell by 100%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Gives you a 4% chance of entering a Clearcasting state after any damage spell hits a target. The Clearcasting state reduces the mana cost of your next damage spell by 100%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Gives you a 6% chance of entering a Clearcasting state after any damage spell hits a target. The Clearcasting state reduces the mana cost of your next damage spell by 100%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Gives you a 8% chance of entering a Clearcasting state after any damage spell hits a target. The Clearcasting state reduces the mana cost of your next damage spell by 100%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Gives you a 10% chance of entering a Clearcasting state after any damage spell hits a target. The Clearcasting state reduces the mana cost of your next damage spell by 100%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "Gives you a 2% chance of entering a Clearcasting state after any damage spell hits a target. The Clearcasting state reduces the mana cost of your next damage spell by 100%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "arcane-2-4",
       "name_en": "Arcane Resilience",
       "icon": "spell_arcane_arcaneresilience",
       "row": 2,
       "col": 4,
       "maxRanks": 2,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases your Armor by an amount equal to 25% of your Intellect.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases your Armor by an amount equal to 50% of your Intellect.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases your armor by an amount equal to 50% of your Intellect.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "arcane-3-1",
       "name_en": "Arcane Geometry",
       "icon": "spell_arcane_arcane01",
       "row": 3,
       "col": 1,
       "maxRanks": 2,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the range of your Arcane spells by 3 yards.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the range of your Arcane spells by 6 yards.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "arcane-3-2",
       "name_en": "Arcane Impact",
       "icon": "spell_nature_starfall",
       "row": 3,
       "col": 2,
       "maxRanks": 3,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the critical strike chance of your Arcane spells by 2%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the critical strike chance of your Arcane spells by 4%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the critical strike chance of your Arcane spells by 6%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the critical strike chance of your Arcane Explosion spell by an additional 2%.",
       "classicRenamedFrom": "Improved Arcane Explosion",
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "arcane-3-4",
       "name_en": "Arcane Blast",
       "icon": "spell_arcane_blast",
       "row": 3,
       "col": 4,
       "maxRanks": 1,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "actif",
       "skill": {
        "cost": "122 Mana",
        "range": "30",
        "castTime": "2.5 sec",
        "cooldown": null
       },
       "costLine": "122 Mana | 30 yd range | 2.5 sec cast",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Blasts the target with energy, dealing 95 to 104 Arcane damage. Each time you cast Arcane Blast, the damage of all your other spells is increased by 10% and the mana cost of Arcane Blast is increased by 175%. Effect stacks up to 4 times and lasts 8 sec or until any other damage spell is cast.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "arcane-4-1",
       "name_en": "Arcane Shielding",
       "icon": "spell_shadow_detectlesserinvisibility",
       "row": 4,
       "col": 1,
       "maxRanks": 2,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Decreases the Mana lost per point of damage taken when your Mana Shield spell is active by 17% and increases the resistances granted by your Mage Armor spell by 25%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Decreases the Mana lost per point of damage taken when your Mana Shield spell is active by 33% and increases the resistances granted by your Mage Armor spell by 50%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Decreases the mana lost per point of damage taken when Mana Shield is active by 10%.",
       "classicRenamedFrom": "Improved Mana Shield",
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "arcane-4-2",
       "name_en": "Improved Counterspell",
       "icon": "spell_frost_iceshock",
       "row": 4,
       "col": 2,
       "maxRanks": 2,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Your Counterspell also Silences the target for 2 sec.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Your Counterspell also Silences the target for 4 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Gives your Counterspell a 50% chance to silence the target for 4 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "arcane-4-3",
       "name_en": "Arcane Meditation",
       "icon": "spell_shadow_siphonmana",
       "row": 4,
       "col": 3,
       "maxRanks": 3,
       "pointsRequired": 15,
       "prerequisite": "arcane-2-3",
       "arrow": "l2",
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Allows 17% of your Mana regeneration to continue while casting.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Allows 33% of your Mana regeneration to continue while casting.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Allows 50% of your Mana regeneration to continue while casting.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Allows 5% of your Mana regeneration to continue while casting.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "arcane-4-4",
       "name_en": "Missile Barrage",
       "icon": "ability_mage_missilebarrage",
       "row": 4,
       "col": 4,
       "maxRanks": 1,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Gives your Arcane Blast spell a 40% chance, and your Fireball, Frostbolt, and Frostfire Bolt spells a 20% chance to reduce the channeled duration of your next Arcane Missiles spell by 50%, reduce the Mana cost by 100%, and missiles will fire every 0.5 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "arcane-5-2",
       "name_en": "Presence of Mind",
       "icon": "spell_nature_enchantarmor",
       "row": 5,
       "col": 2,
       "maxRanks": 1,
       "pointsRequired": 20,
       "prerequisite": null,
       "arrow": null,
       "kind": "actif",
       "skill": {
        "cost": null,
        "range": null,
        "castTime": "Instant",
        "cooldown": "3 min"
       },
       "costLine": "Instant | 3 min cooldown",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "When activated, your next Mage spell with a casting time less than 10 sec becomes an instant cast spell.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "When activated, your next Mage spell with a casting time less than 10 sec becomes an instant cast spell.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "arcane-5-3",
       "name_en": "Arcane Mind",
       "icon": "spell_shadow_charm",
       "row": 5,
       "col": 3,
       "maxRanks": 5,
       "pointsRequired": 20,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases your Intellect by 2% and increases the critical strike damage bonus of your Arcane spells by 20%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases your Intellect by 4% and increases the critical strike damage bonus of your Arcane spells by 40%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases your Intellect by 6% and increases the critical strike damage bonus of your Arcane spells by 60%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases your Intellect by 8% and increases the critical strike damage bonus of your Arcane spells by 80%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases your Intellect by 10% and increases the critical strike damage bonus of your Arcane spells by 100%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases your maximum Mana by 2%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "arcane-6-3",
       "name_en": "Arcane Instability",
       "icon": "spell_shadow_teleport",
       "row": 6,
       "col": 3,
       "maxRanks": 3,
       "pointsRequired": 25,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the damage done by all your spells by 1% and your critical strike chance with all attacks by 1%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the damage done by all your spells by 2% and your critical strike chance with all attacks by 2%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the damage done by all your spells by 3% and your critical strike chance with all attacks by 3%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases your spell damage and critical strike chance by 1%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "arcane-7-2",
       "name_en": "Arcane Power",
       "icon": "spell_nature_lightning",
       "row": 7,
       "col": 2,
       "maxRanks": 1,
       "pointsRequired": 30,
       "prerequisite": "arcane-5-2",
       "arrow": "l2",
       "kind": "actif",
       "skill": {
        "cost": null,
        "range": null,
        "castTime": "Instant",
        "cooldown": "3 min"
       },
       "costLine": "Instant | 3 min cooldown",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "For the next 15 sec, your spells deal 30% more damage while costing 30% more mana to cast.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "When activated, your spells deal 30% more damage while costing 30% more mana to cast. This effect lasts 15 sec.",
       "classicRenamedFrom": null,
       "divergences": [
        {
         "field": "prerequisite",
         "foreverTalents": "Presence of Mind",
         "wowtbc": "Arcane Meditation"
        }
       ],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      }
     ],
     "removedFromClassic": [
      {
       "name_en": "Magic Attunement",
       "maxRanks": 2,
       "row": 3,
       "text": "Increases the effect of your Amplify Magic and Dampen Magic spells by 25%."
      }
     ],
     "disputed": []
    },
    {
     "key": "fire",
     "name_en": "Fire",
     "name_fr": "Feu",
     "icon": "spell_fire_firebolt02",
     "backgroundId": 41,
     "talents": [
      {
       "key": "fire-1-1",
       "name_en": "Wake of Fire",
       "icon": "spell_fire_fireball",
       "row": 1,
       "col": 1,
       "maxRanks": 2,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the cooldown of your Fire Blast spell by 1 sec. Killing a non-trivial target increases the critical strike chance of your next Fire Blast cast within 20 sec by 25%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the cooldown of your Fire Blast spell by 2 sec. Killing a non-trivial target increases the critical strike chance of your next Fire Blast cast within 20 sec by 50%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Reduces the cooldown of your Fire Blast spell by 0.5 sec.",
       "classicRenamedFrom": "Improved Fire Blast",
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "fire-1-2",
       "name_en": "Incineration",
       "icon": "spell_fire_flameshock",
       "row": 1,
       "col": 2,
       "maxRanks": 3,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the critical strike chance of your Fire Blast, Ice Lance, Arcane Blast, and Scorch spells by 2%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the critical strike chance of your Fire Blast, Ice Lance, Arcane Blast, and Scorch spells by 4%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the critical strike chance of your Fire Blast, Ice Lance, Arcane Blast, and Scorch spells by 6%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the critical strike chance of your Fire Blast and Scorch spells by 2%.",
       "classicRenamedFrom": "Incinerate",
       "divergences": [
        {
         "field": "name",
         "foreverTalents": "Incineration",
         "wowtbc": "Incinerate"
        },
        {
         "field": "maxRanks",
         "foreverTalents": "3",
         "wowtbc": "2"
        }
       ],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "fire-1-3",
       "name_en": "Improved Fireball",
       "icon": "spell_fire_flamebolt",
       "row": 1,
       "col": 3,
       "maxRanks": 5,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the casting time of your Fireball and Frostfire Bolt spells by 0.1 sec.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the casting time of your Fireball and Frostfire Bolt spells by 0.2 sec.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Reduces the casting time of your Fireball and Frostfire Bolt spells by 0.3 sec.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Reduces the casting time of your Fireball and Frostfire Bolt spells by 0.4 sec.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Reduces the casting time of your Fireball and Frostfire Bolt spells by 0.5 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Reduces the casting time of your Fireball spell by 0.1 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "fire-2-1",
       "name_en": "Ignite",
       "icon": "spell_fire_incinerate",
       "row": 2,
       "col": 1,
       "maxRanks": 5,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Your critical strikes from Fire damage spells cause the target to burn for an additional 8% of your spell's damage over 4 sec.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Your critical strikes from Fire damage spells cause the target to burn for an additional 16% of your spell's damage over 4 sec.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Your critical strikes from Fire damage spells cause the target to burn for an additional 24% of your spell's damage over 4 sec.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Your critical strikes from Fire damage spells cause the target to burn for an additional 32% of your spell's damage over 4 sec.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Your critical strikes from Fire damage spells cause the target to burn for an additional 40% of your spell's damage over 4 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "Your critical strikes from Fire damage spells cause the target to burn for an additional 8% of your spell's damage over 4 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "fire-2-2",
       "name_en": "Flame Throwing",
       "icon": "spell_fire_flare",
       "row": 2,
       "col": 2,
       "maxRanks": 2,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the range of your Fire spells by 3 yards.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the range of your Fire spells by 6 yards.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "Increases the range of your Fire spells by 3 yards.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "fire-2-3",
       "name_en": "Impact",
       "icon": "spell_fire_meteorstorm",
       "row": 2,
       "col": 3,
       "maxRanks": 3,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Gives your Fire spells a 3% chance to stun the target for 2 sec.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Gives your Fire spells a 7% chance to stun the target for 2 sec.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Gives your Fire spells a 10% chance to stun the target for 2 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Gives your Fire spells a 2% chance to stun the target for 2 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "fire-3-1",
       "name_en": "Burning Soul",
       "icon": "spell_fire_fire",
       "row": 3,
       "col": 1,
       "maxRanks": 3,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Gives your Fire spells a 23% chance to not lose casting time when you take damage and reduces the threat caused by your Fire spells by 10%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Gives your Fire spells a 47% chance to not lose casting time when you take damage and reduces the threat caused by your Fire spells by 20%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Gives your Fire spells a 70% chance to not lose casting time when you take damage and reduces the threat caused by your Fire spells by 30%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Gives your Fire spells a 35% chance to not lose casting time when you take damage and reduces the threat caused by your Fire spells by 15%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "fire-3-2",
       "name_en": "Improved Flamestrike",
       "icon": "spell_fire_selfdestruct",
       "row": 3,
       "col": 2,
       "maxRanks": 3,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the critical strike chance of your Flamestrike spell by 5%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the critical strike chance of your Flamestrike spell by 10%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the critical strike chance of your Flamestrike spell by 15%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "Increases the critical strike chance of your Flamestrike spell by 5%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "fire-3-3",
       "name_en": "Pyroblast",
       "icon": "spell_fire_fireball02",
       "row": 3,
       "col": 3,
       "maxRanks": 1,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "actif",
       "skill": {
        "cost": "125 Mana",
        "range": "35",
        "castTime": "6 sec cast",
        "cooldown": null
       },
       "costLine": "125 Mana | 35 yd range | 6 sec cast",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Hurls an immense fiery boulder that causes 155 to 185 Fire damage and an additional 76 Fire damage over 12 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Hurls an immense fiery boulder that causes 148 to 195 Fire damage and an additional 56 Fire damage over 12 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "fire-4-1",
       "name_en": "Improved Scorch",
       "icon": "spell_fire_soulburn",
       "row": 4,
       "col": 1,
       "maxRanks": 3,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Your Scorch spell has a 33% chance to cause your target to be vulnerable to Fire damage. This vulnerability increases all Fire damage you deal to your target by 3% and lasts 30 sec, stacking up to 5 times.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Your Scorch spell has a 67% chance to cause your target to be vulnerable to Fire damage. This vulnerability increases all Fire damage you deal to your target by 3% and lasts 30 sec, stacking up to 5 times.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Your Scorch spell has a 100% chance to cause your target to be vulnerable to Fire damage. This vulnerability increases all Fire damage you deal to your target by 3% and lasts 30 sec, stacking up to 5 times.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Your Scorch spells have a 33% chance to cause your target to be vulnerable to Fire damage. This vulnerability increases the Fire damage dealt to your target by 3% and lasts 30 sec. Stacks up to 5 times.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "fire-4-2",
       "name_en": "Improved Fire Ward",
       "icon": "spell_fire_firearmor",
       "row": 4,
       "col": 2,
       "maxRanks": 2,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Causes your Fire Ward to have a 10% chance to reflect Fire spells while active.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Causes your Fire Ward to have a 20% chance to reflect Fire spells while active.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "Causes your Fire Ward to have a 10% chance to reflect Fire spells while active.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "fire-4-3",
       "name_en": "Hot Streak",
       "icon": "ability_mage_hotstreak",
       "row": 4,
       "col": 3,
       "maxRanks": 1,
       "pointsRequired": 15,
       "prerequisite": "fire-3-3",
       "arrow": "l1",
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Your non-periodic critical strikes with Fireball, Frostfire Bolt, Fire Blast, and Scorch grant Hot Streak for 15 sec. Hot Streak reduces the cast time of Pyroblast by 25%, stacking up to 3 times.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "fire-4-4",
       "name_en": "Master of Elements",
       "icon": "spell_fire_masterofelements",
       "row": 4,
       "col": 4,
       "maxRanks": 3,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Your Fire and Frost critical strikes will refund 10% of their base mana cost.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Your Fire and Frost critical strikes will refund 20% of their base mana cost.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Your Fire and Frost critical strikes will refund 30% of their base mana cost.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Your Fire and Frost spell criticals will refund 10% of their base mana cost.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "fire-5-2",
       "name_en": "Critical Mass",
       "icon": "spell_nature_wispheal",
       "row": 5,
       "col": 2,
       "maxRanks": 3,
       "pointsRequired": 20,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the critical strike chance of your Fire spells by 2%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the critical strike chance of your Fire spells by 4%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the critical strike chance of your Fire spells by 6%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "Increases the critical strike chance of your Fire spells by 2%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "fire-5-3",
       "name_en": "Blast Wave",
       "icon": "spell_holy_excorcism_02",
       "row": 5,
       "col": 3,
       "maxRanks": 1,
       "pointsRequired": 20,
       "prerequisite": null,
       "arrow": null,
       "kind": "actif",
       "skill": {
        "cost": "215 Mana",
        "range": null,
        "castTime": "Instant",
        "cooldown": "45 sec"
       },
       "costLine": "215 Mana | Instant | 45 sec cooldown",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "A wave of flame radiates outward from the caster, damaging all enemies caught within the blast for 160 to 191 Fire damage, and Dazing them for 50% reduced movement speed for 6 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "A wave of flame radiates outward from the caster, damaging all enemies caught within the blast for 160 to 192 Fire damage, and dazing them for 6 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "fire-6-3",
       "name_en": "Fire Power",
       "icon": "spell_fire_immolation",
       "row": 6,
       "col": 3,
       "maxRanks": 5,
       "pointsRequired": 25,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the damage done by your Fire spells by 2%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the damage done by your Fire spells by 4%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the damage done by your Fire spells by 6%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases the damage done by your Fire spells by 8%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases the damage done by your Fire spells by 10%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "Increases the damage done by your Fire spells by 2%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "fire-7-2",
       "name_en": "Combustion",
       "icon": "spell_fire_sealoffire",
       "row": 7,
       "col": 2,
       "maxRanks": 1,
       "pointsRequired": 30,
       "prerequisite": "fire-5-2",
       "arrow": "l2",
       "kind": "actif",
       "skill": {
        "cost": null,
        "range": null,
        "castTime": "Instant",
        "cooldown": "3 min"
       },
       "costLine": "Instant | 3 min cooldown",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "When activated, this spell causes each of your Fire damage spell hits to increase your critical strike chance with Fire damage spells by 10%. This effect lasts until you have caused 4 non-periodic critical strikes with Fire spells.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "When activated, this spell causes each of your Fire damage spell hits to increase your critical strike chance with Fire damage spells by 10%. This effect lasts until you have caused 3 critical strikes with Fire spells.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      }
     ],
     "removedFromClassic": [],
     "disputed": []
    },
    {
     "key": "frost",
     "name_en": "Frost",
     "name_fr": "Givre",
     "icon": "spell_frost_frostbolt02",
     "backgroundId": 61,
     "talents": [
      {
       "key": "frost-1-1",
       "name_en": "Frost Warding",
       "icon": "spell_frost_frostward",
       "row": 1,
       "col": 1,
       "maxRanks": 2,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the Armor and resistance given by your Frost Armor and Ice Armor spells by 15%. In addition, gives your Frost Ward a 10% chance to reflect Frost spells and effects while active.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the Armor and resistance given by your Frost Armor and Ice Armor spells by 30%. In addition, gives your Frost Ward a 20% chance to reflect Frost spells and effects while active.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the armor and resistances given by your Frost Armor and Ice Armor spells by 15%. In addition, gives your Frost Ward a 10% chance to reflect Frost spells and effects while active.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "frost-1-2",
       "name_en": "Improved Frostbolt",
       "icon": "spell_frost_frostbolt02",
       "row": 1,
       "col": 2,
       "maxRanks": 5,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the casting time of your Frostbolt spell by 0.1 sec.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the casting time of your Frostbolt spell by 0.2 sec.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Reduces the casting time of your Frostbolt spell by 0.3 sec.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Reduces the casting time of your Frostbolt spell by 0.4 sec.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Reduces the casting time of your Frostbolt spell by 0.5 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "Reduces the casting time of your Frostbolt spell by 0.1 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "frost-1-3",
       "name_en": "Elemental Precision",
       "icon": "spell_ice_magicdamage",
       "row": 1,
       "col": 3,
       "maxRanks": 5,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases your chance to hit with Frost and Fire spells by 1%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases your chance to hit with Frost and Fire spells by 2%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases your chance to hit with Frost and Fire spells by 3%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases your chance to hit with Frost and Fire spells by 4%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases your chance to hit with Frost and Fire spells by 5%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Reduces the chance that the opponent can resist your Frost and Fire spells by 2%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "frost-2-1",
       "name_en": "Ice Shards",
       "icon": "spell_frost_iceshard",
       "row": 2,
       "col": 1,
       "maxRanks": 5,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the critical strike damage bonus of your Frost spells by 20%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the critical strike damage bonus of your Frost spells by 40%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the critical strike damage bonus of your Frost spells by 60%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases the critical strike damage bonus of your Frost spells by 80%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases the critical strike damage bonus of your Frost spells by 100%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "Increases the critical strike damage bonus of your Frost spells by 20%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "frost-2-2",
       "name_en": "Permafrost",
       "icon": "spell_frost_wisp",
       "row": 2,
       "col": 2,
       "maxRanks": 3,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the duration of your Chill effects by 11% and reduces the target's speed by an additional 3%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the duration of your Chill effects by 22% and reduces the target's speed by an additional 7%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the duration of your Chill effects by 33% and reduces the target's speed by an additional 10%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the duration of your Chill effects by 1 sec and reduces the target's speed by an additional 4%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "frost-2-3",
       "name_en": "Improved Frost Nova",
       "icon": "spell_frost_freezingbreath",
       "row": 2,
       "col": 3,
       "maxRanks": 2,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the cooldown of your Frost Nova spell by 2 sec.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the cooldown of your Frost Nova spell by 4 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "Reduces the cooldown of your Frost Nova spell by 2 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "frost-2-4",
       "name_en": "Frostbite",
       "icon": "spell_frost_frostarmor",
       "row": 2,
       "col": 4,
       "maxRanks": 3,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Gives your Chill effects a 5% chance to Freeze the target for 5 sec.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Gives your Chill effects a 10% chance to Freeze the target for 5 sec.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Gives your Chill effects a 15% chance to Freeze the target for 5 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "Gives your Chill effects a 5% chance to freeze the target for 5 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "frost-3-1",
       "name_en": "Piercing Ice",
       "icon": "spell_frost_frostbolt",
       "row": 3,
       "col": 1,
       "maxRanks": 3,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the damage done by your Frost spells by 2%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the damage done by your Frost spells by 4%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the damage done by your Frost spells by 6%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "Increases the damage done by your Frost spells by 2%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "frost-3-2",
       "name_en": "Frost Channeling",
       "icon": "spell_frost_stun",
       "row": 3,
       "col": 2,
       "maxRanks": 3,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the mana cost of your Frost spells by 5% and reduces the threat caused by your Frost spells by 10%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the mana cost of your Frost spells by 10% and reduces the threat caused by your Frost spells by 20%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Reduces the mana cost of your Frost spells by 15% and reduces the threat caused by your Frost spells by 30%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "moved",
       "classicText": "Reduces the mana cost of your Frost spells by 5% and reduces the threat caused by your Frost spells by 10%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "frost-3-3",
       "name_en": "Ice Lance",
       "icon": "spell_frost_frostblast",
       "row": 3,
       "col": 3,
       "maxRanks": 1,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "actif",
       "skill": {
        "cost": "45 Mana",
        "range": "30",
        "castTime": "Instant",
        "cooldown": null
       },
       "costLine": "45 Mana | 30 yd range | Instant",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Deals 30 Frost damage to an enemy target. Deals 300% increased damage to Frozen targets.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "frost-3-4",
       "name_en": "Improved Blizzard",
       "icon": "spell_frost_icestorm",
       "row": 3,
       "col": 4,
       "maxRanks": 3,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Adds a Chill effect to your Blizzard spell. This effect lowers the target's movement speed by 15% for 1.5 sec.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Adds a Chill effect to your Blizzard spell. This effect lowers the target's movement speed by 25% for 1.5 sec.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Adds a Chill effect to your Blizzard spell. This effect lowers the target's movement speed by 40% for 1.5 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Adds a chill effect to your Blizzard spell. This effect lowers the target's movement speed by 30%. Lasts 1.50 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "frost-4-1",
       "name_en": "Arctic Reach",
       "icon": "spell_shadow_darkritual",
       "row": 4,
       "col": 1,
       "maxRanks": 2,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the range of your Frostbolt and Blizzard spells and the radius of your Frost Nova and Cone of Cold spells by 10%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the range of your Frostbolt and Blizzard spells and the radius of your Frost Nova and Cone of Cold spells by 20%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "Increases the range of your Frostbolt and Blizzard spells and the radius of your Frost Nova and Cone of Cold spells by 10%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "frost-4-2",
       "name_en": "Ice Block",
       "icon": "spell_frost_frost",
       "row": 4,
       "col": 2,
       "maxRanks": 1,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "actif",
       "skill": {
        "cost": "15 Mana",
        "range": null,
        "castTime": "Instant",
        "cooldown": "5 min"
       },
       "costLine": "15 Mana | Instant | 5 min cooldown",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "You become encased in a block of ice, protecting you from all physical attacks and spells for 10 sec, but during that time you cannot attack, move, or cast spells.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "moved",
       "classicText": "You become encased in a block of ice, protecting you from all physical attacks and spells for 10 sec, but during that time you cannot attack, move or cast spells.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "frost-4-4",
       "name_en": "Shatter",
       "icon": "spell_frost_frostshock",
       "row": 4,
       "col": 4,
       "maxRanks": 3,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the critical strike chance of all your spells against Frozen targets by 17%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the critical strike chance of all your spells against Frozen targets by 33%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the critical strike chance of all your spells against Frozen targets by 50%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the critical strike chance of all your spells against frozen targets by 10%.",
       "classicRenamedFrom": null,
       "divergences": [
        {
         "field": "maxRanks",
         "foreverTalents": "3",
         "wowtbc": "5"
        }
       ],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "frost-5-1",
       "name_en": "Improved Cone of Cold",
       "icon": "spell_frost_glacier",
       "row": 5,
       "col": 1,
       "maxRanks": 3,
       "pointsRequired": 20,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the damage dealt by your Cone of Cold spell by 12%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the damage dealt by your Cone of Cold spell by 23%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the damage dealt by your Cone of Cold spell by 35%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the damage dealt by your Cone of Cold spell by 15%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "frost-5-2",
       "name_en": "Cold Snap",
       "icon": "spell_frost_wizardmark",
       "row": 5,
       "col": 2,
       "maxRanks": 1,
       "pointsRequired": 20,
       "prerequisite": null,
       "arrow": null,
       "kind": "actif",
       "skill": {
        "cost": null,
        "range": null,
        "castTime": "Instant",
        "cooldown": "10 min"
       },
       "costLine": "Instant | 10 min cooldown",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Finishes the remaining cooldown on all your other Frost spells.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "When activated, this spell finishes the cooldown on all of your Frost spells.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "frost-5-3",
       "name_en": "Fingers of Frost",
       "icon": "ability_mage_wintersgrasp",
       "row": 5,
       "col": 3,
       "maxRanks": 2,
       "pointsRequired": 20,
       "prerequisite": "frost-3-3",
       "arrow": "l2",
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Gives your Chill effects a 15% chance to grant you the Fingers of Frost effect, which treats your next 1 spell cast as if the target were Frozen. Lasts 15 sec.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Gives your Chill effects a 15% chance to grant you the Fingers of Frost effect, which treats your next 2 spells cast as if the target were Frozen. Lasts 15 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "frost-6-3",
       "name_en": "Winter's Chill",
       "icon": "spell_frost_chillingblast",
       "row": 6,
       "col": 3,
       "maxRanks": 5,
       "pointsRequired": 25,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Gives your Frost damage spells a 20% chance to apply the Winter's Chill effect, which increases the chance your Ice Lance and Frostbolt spells will critically hit the target by 2% for 15 sec. Stacks up to 1 times.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Gives your Frost damage spells a 40% chance to apply the Winter's Chill effect, which increases the chance your Ice Lance and Frostbolt spells will critically hit the target by 2% for 15 sec. Stacks up to 2 times.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Gives your Frost damage spells a 60% chance to apply the Winter's Chill effect, which increases the chance your Ice Lance and Frostbolt spells will critically hit the target by 2% for 15 sec. Stacks up to 3 times.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Gives your Frost damage spells a 80% chance to apply the Winter's Chill effect, which increases the chance your Ice Lance and Frostbolt spells will critically hit the target by 2% for 15 sec. Stacks up to 4 times.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Gives your Frost damage spells a 100% chance to apply the Winter's Chill effect, which increases the chance your Ice Lance and Frostbolt spells will critically hit the target by 2% for 15 sec. Stacks up to 5 times.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Gives your Frost damage spells a 20% chance to apply the Winter's Chill effect, which increases the chance a Frost spell will critically hit the target by 2% for 15 sec. Stacks up to 5 times.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "frost-7-2",
       "name_en": "Ice Barrier",
       "icon": "spell_ice_lament",
       "row": 7,
       "col": 2,
       "maxRanks": 1,
       "pointsRequired": 30,
       "prerequisite": "frost-5-2",
       "arrow": "l2",
       "kind": "actif",
       "skill": {
        "cost": "305 Mana",
        "range": null,
        "castTime": "Instant",
        "cooldown": "30 sec"
       },
       "costLine": "305 Mana | Instant | 30 sec cooldown",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Instantly shields you, absorbing 448 damage. Lasts 1 min. While the shield holds, your spellcasts will not be interrupted or delayed from taking damage.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Instantly shields you, absorbing 455 damage. Lasts 1 min. While the shield holds, spells will not be interrupted.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      }
     ],
     "removedFromClassic": [],
     "disputed": []
    }
   ]
  },
  {
   "slug": "demoniste",
   "gameId": 9,
   "name_fr": "Démoniste",
   "name_en": "Warlock",
   "icon": "class_warlock",
   "status": "COMMUNAUTÉ",
   "sourceIds": [
    "forever-talents-releve",
    "wowtbc-forever-calculator",
    "wowhead-forever-talent-calc"
   ],
   "transcriptionNote": "Talent text transcribed from in-game tooltip video (warlock.json).",
   "trees": [
    {
     "key": "affliction",
     "name_en": "Affliction",
     "name_fr": "Affliction",
     "icon": "spell_shadow_deathcoil",
     "backgroundId": 302,
     "talents": [
      {
       "key": "affliction-1-1",
       "name_en": "Improved Life Tap",
       "icon": "spell_shadow_burningspirit",
       "row": 1,
       "col": 1,
       "maxRanks": 2,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the amount of Mana awarded by your Life Tap spell by 10%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the amount of Mana awarded by your Life Tap spell by 20%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "moved",
       "classicText": "Increases the amount of Mana awarded by your Life Tap spell by 10%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "affliction-1-2",
       "name_en": "Suppression",
       "icon": "spell_shadow_unsummonbuilding",
       "row": 1,
       "col": 2,
       "maxRanks": 5,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases your chance to hit with all spells and attacks by 1% and reduces all threat you generate by 4%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases your chance to hit with all spells and attacks by 2% and reduces all threat you generate by 8%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases your chance to hit with all spells and attacks by 3% and reduces all threat you generate by 12%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases your chance to hit with all spells and attacks by 4% and reduces all threat you generate by 16%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases your chance to hit with all spells and attacks by 5% and reduces all threat you generate by 20%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Reduces the chance for enemies to resist your Affliction spells by 2%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "affliction-1-3",
       "name_en": "Improved Corruption",
       "icon": "spell_shadow_abominationexplosion",
       "row": 1,
       "col": 3,
       "maxRanks": 5,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the casting time of your Corruption spell by 0.4 sec and increases the damage it deals by 2%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the casting time of your Corruption spell by 0.8 sec and increases the damage it deals by 4%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Reduces the casting time of your Corruption spell by 1.2 sec and increases the damage it deals by 6%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Reduces the casting time of your Corruption spell by 1.6 sec and increases the damage it deals by 8%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Reduces the casting time of your Corruption spell by 2 sec and increases the damage it deals by 10%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Reduces the casting time of your Corruption spell by 0.4 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "affliction-2-1",
       "name_en": "Malediction",
       "icon": "spell_shadow_curseofachimonde",
       "row": 2,
       "col": 1,
       "maxRanks": 5,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases all periodic damage done by your Warlock spells by 1%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases all periodic damage done by your Warlock spells by 2%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases all periodic damage done by your Warlock spells by 3%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases all periodic damage done by your Warlock spells by 4%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases all periodic damage done by your Warlock spells by 5%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "affliction-2-2",
       "name_en": "Soul Harvesting",
       "icon": "spell_shadow_soulgem",
       "row": 2,
       "col": 2,
       "maxRanks": 2,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "You gain Soul Harvest for 10 sec if a victim is killed while afflicted with your Drain Soul. Soul Harvest allows your Mana to regenerate at 50% of normal speed while you are casting spells, and grants a 50% increase to your Mana regeneration.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "You gain Soul Harvest for 10 sec if a victim is killed while afflicted with your Drain Soul. Soul Harvest allows your Mana to regenerate at 100% of normal speed while you are casting spells, and grants a 100% increase to your Mana regeneration.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "affliction-2-3",
       "name_en": "Improved Drains",
       "icon": "spell_shadow_lifedrain02",
       "row": 2,
       "col": 3,
       "maxRanks": 3,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases health drained or damage done by your Drain Life, Drain Soul, and Wrack spells by 7%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases health drained or damage done by your Drain Life, Drain Soul, and Wrack spells by 13%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases health drained or damage done by your Drain Life, Drain Soul, and Wrack spells by 20%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "affliction-3-1",
       "name_en": "Improved Bane of Agony",
       "icon": "spell_shadow_curseofsargeras",
       "row": 3,
       "col": 1,
       "maxRanks": 2,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the damage done by your Bane of Agony by 5%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the damage done by your Bane of Agony by 10%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the damage done by your Curse of Agony by 2%.",
       "classicRenamedFrom": "Improved Curse of Agony",
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "affliction-3-2",
       "name_en": "Fel Concentration",
       "icon": "spell_shadow_fingerofdeath",
       "row": 3,
       "col": 2,
       "maxRanks": 3,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Gives you a 23% chance to avoid interruption caused by damage while channeling or casting your Drain Life, Drain Mana, Drain Soul, or Wrack spells.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Gives you a 47% chance to avoid interruption caused by damage while channeling or casting your Drain Life, Drain Mana, Drain Soul, or Wrack spells.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Gives you a 70% chance to avoid interruption caused by damage while channeling or casting your Drain Life, Drain Mana, Drain Soul, or Wrack spells.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Gives you a 14% chance to avoid interruption caused by damage while channeling the Drain Life, Drain Mana, or Drain Soul spell.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "affliction-3-3",
       "name_en": "Amplify Curse",
       "icon": "spell_shadow_contagion",
       "row": 3,
       "col": 3,
       "maxRanks": 1,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "actif",
       "skill": {
        "cost": null,
        "range": null,
        "castTime": "Instant",
        "cooldown": "3 min"
       },
       "costLine": "Instant; 3 min cooldown",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the effect of your next Curse of Weakness or Bane of Agony by 50%, or your next Curse of Exhaustion by 20%. Lasts 30 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the effect of your next Curse of Weakness or Curse of Agony by 50%, or your next Curse of Exhaustion by 20%. Lasts 30 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "affliction-3-4",
       "name_en": "Pandemic",
       "icon": "spell_shadow_unstableaffliction_2",
       "row": 3,
       "col": 4,
       "maxRanks": 3,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the critical strike damage bonus of your Corruption, Bane of Agony, Bane of Doom, Drain Soul, Drain Life, Siphon Life, and Wrack spells by 33%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the critical strike damage bonus of your Corruption, Bane of Agony, Bane of Doom, Drain Soul, Drain Life, Siphon Life, and Wrack spells by 67%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the critical strike damage bonus of your Corruption, Bane of Agony, Bane of Doom, Drain Soul, Drain Life, Siphon Life, and Wrack spells by 100%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "affliction-4-1",
       "name_en": "Malevolence",
       "icon": "spell_shadow_deathpact",
       "row": 4,
       "col": 1,
       "maxRanks": 5,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the critical effect chance of your Shadow spells by 1%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the critical effect chance of your Shadow spells by 2%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the critical effect chance of your Shadow spells by 3%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases the critical effect chance of your Shadow spells by 4%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases the critical effect chance of your Shadow spells by 5%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "affliction-4-2",
       "name_en": "Nightfall",
       "icon": "spell_shadow_twilight",
       "row": 4,
       "col": 2,
       "maxRanks": 2,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Gives your Corruption, Drain Soul, Drain Life, and Wrack spells a 2% chance to cause you to enter a Shadow Trance after damaging the opponent. The Shadow Trance reduces the casting time of your next Shadow Bolt spell by 100%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Gives your Corruption, Drain Soul, Drain Life, and Wrack spells a 4% chance to cause you to enter a Shadow Trance after damaging the opponent. The Shadow Trance reduces the casting time of your next Shadow Bolt spell by 100%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Gives your Corruption and Drain Life spells a 2% chance to cause you to enter a Shadow Trance state after damaging the opponent. The Shadow Trance state reduces the casting time of your next Shadow Bolt spell by 100%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "affliction-4-3",
       "name_en": "Curse of Exhaustion",
       "icon": "spell_shadow_grimward",
       "row": 4,
       "col": 3,
       "maxRanks": 1,
       "pointsRequired": 15,
       "prerequisite": "affliction-3-3",
       "arrow": "l1",
       "kind": "actif",
       "skill": {
        "cost": "69 Mana",
        "range": "30",
        "castTime": "Instant",
        "cooldown": null
       },
       "costLine": "69 Mana; 30 yd range; Instant",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the target's movement speed by 30% for 12 sec. Only one Curse per Warlock can be active on any one target.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Reduces the target's movement speed by 10% for 12 sec. Only one Curse per Warlock can be active on any one target.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "affliction-5-2",
       "name_en": "Siphon Life",
       "icon": "spell_shadow_requiem",
       "row": 5,
       "col": 2,
       "maxRanks": 1,
       "pointsRequired": 20,
       "prerequisite": null,
       "arrow": null,
       "kind": "actif",
       "skill": {
        "cost": "150 Mana",
        "range": "30",
        "castTime": "Instant",
        "cooldown": null
       },
       "costLine": "150 Mana; 30 yd range; Instant",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Transfers 11 health from the target to the caster every 3 sec. Lasts 30 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "Transfers 15 health from the target to the caster every 3 sec. Lasts 30 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "affliction-5-3",
       "name_en": "Soul Siphon",
       "icon": "spell_shadow_soulleech_3",
       "row": 5,
       "col": 3,
       "maxRanks": 3,
       "pointsRequired": 20,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the damage done or health drained by your Drain Life, Drain Soul, and Wrack spells by 4% per each of your other Affliction effects active on the target, up to a maximum increase of 12%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the damage done or health drained by your Drain Life, Drain Soul, and Wrack spells by 8% per each of your other Affliction effects active on the target, up to a maximum increase of 24%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the damage done or health drained by your Drain Life, Drain Soul, and Wrack spells by 12% per each of your other Affliction effects active on the target, up to a maximum increase of 36%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "affliction-6-3",
       "name_en": "Shadow Mastery",
       "icon": "spell_shadow_shadetruesight",
       "row": 6,
       "col": 3,
       "maxRanks": 5,
       "pointsRequired": 25,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the damage dealt or life drained by your Shadow spells by 1%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the damage dealt or life drained by your Shadow spells by 2%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the damage dealt or life drained by your Shadow spells by 3%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases the damage dealt or life drained by your Shadow spells by 4%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases the damage dealt or life drained by your Shadow spells by 5%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the damage dealt or life drained by your Shadow spells by 2%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "affliction-7-2",
       "name_en": "Wrack",
       "icon": "ability_deathknight_hemorrhagicfever",
       "row": 7,
       "col": 2,
       "maxRanks": 1,
       "pointsRequired": 30,
       "prerequisite": "affliction-5-2",
       "arrow": "l2",
       "kind": "actif",
       "skill": {
        "cost": "200 Mana",
        "range": "30",
        "castTime": "Channeled",
        "cooldown": null
       },
       "costLine": "200 Mana; 30 yd range; Channeled",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Tears the target apart from within, dealing 37 Shadow damage every 1 sec and increasing the damage they take from your other Shadow damage over time effects by 10%. Lasts 6 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "wowhead-forever-talent-calc"
       ]
      }
     ],
     "removedFromClassic": [
      {
       "name_en": "Improved Curse of Weakness",
       "maxRanks": 3,
       "row": 2,
       "text": "Increases the effect of your Curse of Weakness by 6%."
      },
      {
       "name_en": "Improved Drain Soul",
       "maxRanks": 2,
       "row": 2,
       "text": "Gives you a 50% chance to get a 100% increase to your Mana regeneration for 10 sec if the target is killed by you while you drain its soul.  In addition your Mana may continue to regenerate while casting at 50% of normal."
      },
      {
       "name_en": "Improved Drain Life",
       "maxRanks": 5,
       "row": 2,
       "text": "Increases the Health drained by your Drain Life spell by 2%."
      },
      {
       "name_en": "Grim Reach",
       "maxRanks": 2,
       "row": 4,
       "text": "Increases the range of your Affliction spells by 10%."
      },
      {
       "name_en": "Improved Drain Mana",
       "maxRanks": 2,
       "row": 4,
       "text": "Causes 15% of the Mana drained by your Drain Mana spell to damage the opponent."
      },
      {
       "name_en": "Improved Curse of Exhaustion",
       "maxRanks": 4,
       "row": 5,
       "text": "Increases the speed reduction of your Curse of Exhaustion by 5%."
      },
      {
       "name_en": "Dark Pact",
       "maxRanks": 1,
       "row": 7,
       "text": "Drains 150 of your pet's Mana, returning 100% to you."
      }
     ],
     "disputed": []
    },
    {
     "key": "demonology",
     "name_en": "Demonology",
     "name_fr": "Démonologie",
     "icon": "spell_shadow_metamorphosis",
     "backgroundId": 303,
     "talents": [
      {
       "key": "demonology-1-1",
       "name_en": "Improved Health Funnel",
       "icon": "spell_shadow_lifedrain",
       "row": 1,
       "col": 1,
       "maxRanks": 2,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the amount of health transferred by your Health Funnel spell by 20%, reduces its health cost by 15%, and reduces all threat your Health Funnel generates by 50%. Allows Health Funnel to be used regardless of your demon's health.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the amount of health transferred by your Health Funnel spell by 40%, reduces its health cost by 30%, and reduces all threat your Health Funnel generates by 100%. Allows Health Funnel to be used regardless of your demon's health.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the amount of Health transferred by your Health Funnel spell by 10%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "demonology-1-2",
       "name_en": "Improved Imp",
       "icon": "spell_shadow_summonimp",
       "row": 1,
       "col": 2,
       "maxRanks": 3,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the damage of your Imp's Firebolt spell by 10% and the effect of its Fire Shield spell by 10%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the damage of your Imp's Firebolt spell by 20% and the effect of its Fire Shield spell by 20%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the damage of your Imp's Firebolt spell by 30% and the effect of its Fire Shield spell by 30%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the effect of your Imp's Firebolt, Fire Shield, and Blood Pact spells by 10%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "demonology-1-3",
       "name_en": "Demonic Embrace",
       "icon": "spell_shadow_metamorphosis",
       "row": 1,
       "col": 3,
       "maxRanks": 5,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases your total Stamina by 3%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases your total Stamina by 6%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases your total Stamina by 9%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases your total Stamina by 12%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases your total Stamina by 15%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases your total Stamina by 3% but reduces your total Spirit by 1%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "demonology-1-4",
       "name_en": "Unholy Power",
       "icon": "spell_shadow_shadowworddominate",
       "row": 1,
       "col": 4,
       "maxRanks": 5,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases all damage done by your Imp, Voidwalker, Succubus, Incubus, and Felhunter pets by 2%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases all damage done by your Imp, Voidwalker, Succubus, Incubus, and Felhunter pets by 4%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases all damage done by your Imp, Voidwalker, Succubus, Incubus, and Felhunter pets by 6%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases all damage done by your Imp, Voidwalker, Succubus, Incubus, and Felhunter pets by 8%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases all damage done by your Imp, Voidwalker, Succubus, Incubus, and Felhunter pets by 10%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the damage done by your Voidwalker, Succubus, Incubus, and Felhunter's melee attacks by 4%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "demonology-2-1",
       "name_en": "Demonic Aegis",
       "icon": "spell_shadow_ragingscream",
       "row": 2,
       "col": 1,
       "maxRanks": 2,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the effectiveness of your Demon Skin and Demon Armor spells by 15%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the effectiveness of your Demon Skin and Demon Armor spells by 30%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [
        {
         "field": "position",
         "foreverTalents": "ligne 2, colonne 1",
         "wowtbc": "ligne 1, colonne 1"
        }
       ],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "demonology-2-2",
       "name_en": "Improved Voidwalker",
       "icon": "spell_shadow_summonvoidwalker",
       "row": 2,
       "col": 2,
       "maxRanks": 3,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the effectiveness of your Voidwalker's Torment, Consume Shadows, Sacrifice, and Suffering spells by 10%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the effectiveness of your Voidwalker's Torment, Consume Shadows, Sacrifice, and Suffering spells by 20%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the effectiveness of your Voidwalker's Torment, Consume Shadows, Sacrifice, and Suffering spells by 30%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "Increases the effectiveness of your Voidwalker's Torment, Consume Shadows, Sacrifice and Suffering spells by 10%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "demonology-2-3",
       "name_en": "Fel Vitality",
       "icon": "spell_shadow_demonicfortitude",
       "row": 2,
       "col": 3,
       "maxRanks": 3,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the maximum health and Mana of your Imp, Voidwalker, Succubus, Incubus, and Felhunter by 5%, and increases your maximum Mana by 5%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the maximum health and Mana of your Imp, Voidwalker, Succubus, Incubus, and Felhunter by 10%, and increases your maximum Mana by 10%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the maximum health and Mana of your Imp, Voidwalker, Succubus, Incubus, and Felhunter by 15%, and increases your maximum Mana by 15%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the maximum Health of your Imp, Voidwalker, Succubus, Incubus, and Felhunter by 3%.",
       "classicRenamedFrom": "Fel Stamina",
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "demonology-2-4",
       "name_en": "Demonic Energies",
       "icon": "spell_shadow_demonicempathy",
       "row": 2,
       "col": 4,
       "maxRanks": 2,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "You heal your pet for 8% of all spell damage you deal. When you gain Mana from Life Tap, your summoned demon gains 50% of the Mana you gain.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "You heal your pet for 15% of all spell damage you deal. When you gain Mana from Life Tap, your summoned demon gains 100% of the Mana you gain.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "demonology-3-1",
       "name_en": "Improved Sayaad",
       "icon": "ability_warlock_randomizesuccubusincubus",
       "row": 3,
       "col": 1,
       "maxRanks": 3,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the effect of your Succubus' and Incubus' Lash of Pain and Soothing Kiss spells by 10%, and increases the duration of your Succubus' and Incubus' Seduction and Lesser Invisibility spells by 10%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the effect of your Succubus' and Incubus' Lash of Pain and Soothing Kiss spells by 20%, and increases the duration of your Succubus' and Incubus' Seduction and Lesser Invisibility spells by 20%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the effect of your Succubus' and Incubus' Lash of Pain and Soothing Kiss spells by 30%, and increases the duration of your Succubus' and Incubus' Seduction and Lesser Invisibility spells by 30%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "Increases the effect of your Succubus' and Incubus' Lash of Pain and Soothing Kiss spells by 10%, and increases the duration of your Succubus' and Incubus' Seduction and Lesser Invisibility spells by 10%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "demonology-3-2",
       "name_en": "Demonic Sacrifice",
       "icon": "spell_shadow_psychicscream",
       "row": 3,
       "col": 2,
       "maxRanks": 1,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "actif",
       "skill": {
        "cost": null,
        "range": "100",
        "castTime": "Instant",
        "cooldown": null
       },
       "costLine": "100 yd range; Instant",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "When activated, sacrifices your summoned Demon to enhance the opposing aspect of your power, granting you an effect that lasts 2 hrs. The effect is canceled if any Demon is summoned. Imp: Increases your Shadow damage by 15%. Voidwalker: Restores 2% of your total Mana every 4 sec. Succubus/Incubus: Increases your Fire damage by 15%. Felhunter: Restores 3% of your total Health every 4 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": [
        "Imp: Increases your Shadow damage by 15%.",
        "Voidwalker: Restores 2% of your total Mana every 4 sec.",
        "Succubus/Incubus: Increases your Fire damage by 15%.",
        "Felhunter: Restores 3% of your total Health every 4 sec."
       ],
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "When activated, sacrifices your summoned demon to grant you an effect that lasts 30 min. The effect is canceled if any Demon is summoned.Imp: Increases your Fire damage by 15%.Voidwalker: Restores 3% of total Health every 4 sec.Succubus/Incubus: Increases your Shadow damage by 15%.Felhunter: Restores 2% of total Mana every 4 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "demonology-3-3",
       "name_en": "Master Summoner",
       "icon": "spell_shadow_impphaseshift",
       "row": 3,
       "col": 3,
       "maxRanks": 2,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the casting time of your Imp, Voidwalker, Succubus, Incubus, and Felhunter Summoning spells by 2 sec and the Mana cost by 20%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the casting time of your Imp, Voidwalker, Succubus, Incubus, and Felhunter Summoning spells by 4 sec and the Mana cost by 40%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "moved",
       "classicText": "Reduces the casting time of your Imp, Voidwalker, Succubus, Incubus, and Felhunter Summoning spells by 2 sec and the Mana cost by 20%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "demonology-4-1",
       "name_en": "Decimation",
       "icon": "spell_fire_fireball02",
       "row": 4,
       "col": 1,
       "maxRanks": 2,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the cooldown of your Soul Fire spell by 45%. When you cast Shadow Bolt or Searing Pain on an enemy below 35% health, they deal 3% increased damage, and for the next 10 sec your Soul Fire spell has its cast time reduced by 20% and costs no Soul Shards.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the cooldown of your Soul Fire spell by 90%. When you cast Shadow Bolt or Searing Pain on an enemy below 35% health, they deal 6% increased damage, and for the next 10 sec your Soul Fire spell has its cast time reduced by 40% and costs no Soul Shards.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "demonology-4-3",
       "name_en": "Fel Domination",
       "icon": "spell_nature_removecurse",
       "row": 4,
       "col": 3,
       "maxRanks": 1,
       "pointsRequired": 15,
       "prerequisite": "demonology-3-3",
       "arrow": "l1",
       "kind": "actif",
       "skill": {
        "cost": null,
        "range": null,
        "castTime": "Instant",
        "cooldown": "5 min"
       },
       "costLine": "Instant; 5 min cooldown",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Your next Imp, Voidwalker, Succubus, Incubus, or Felhunter Summon spell has its casting time reduced by 6 sec and its Mana cost reduced by 50%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "moved",
       "classicText": "Your next Imp, Voidwalker, Succubus, Incubus, or Felhunter Summon spell has its casting time reduced by 5.5 sec and its Mana cost reduced by 50%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "demonology-4-4",
       "name_en": "Demonic Brand",
       "icon": "spell_shadow_demonbreath",
       "row": 4,
       "col": 4,
       "maxRanks": 3,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Your Searing Pain generates 17% less threat and brands the target for 10 sec. Your pet's next 2 attacks against the target generate high threat and deal 39 to 42 Fire or Shadow damage based on the pet.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Your Searing Pain generates 33% less threat and brands the target for 10 sec. Your pet's next 4 attacks against the target generate high threat and deal 39 to 42 Fire or Shadow damage based on the pet.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Your Searing Pain generates 50% less threat and brands the target for 10 sec. Your pet's next 6 attacks against the target generate high threat and deal 39 to 42 Fire or Shadow damage based on the pet.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "demonology-5-1",
       "name_en": "Improved Felhunter",
       "icon": "spell_shadow_summonfelhunter",
       "row": 5,
       "col": 1,
       "maxRanks": 3,
       "pointsRequired": 20,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the Attack Power reduction of your Felhunter's Tainted Blood, the healing of its Devour Magic, and the detection level of its Paranoia by 10%, and reduces the cooldown of its Spell Lock by 2 sec.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the Attack Power reduction of your Felhunter's Tainted Blood, the healing of its Devour Magic, and the detection level of its Paranoia by 20%, and reduces the cooldown of its Spell Lock by 4 sec.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the Attack Power reduction of your Felhunter's Tainted Blood, the healing of its Devour Magic, and the detection level of its Paranoia by 30%, and reduces the cooldown of its Spell Lock by 6 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "demonology-5-2",
       "name_en": "Soul Link",
       "icon": "spell_shadow_gathershadows",
       "row": 5,
       "col": 2,
       "maxRanks": 1,
       "pointsRequired": 20,
       "prerequisite": "demonology-3-2",
       "arrow": "l2",
       "kind": "actif",
       "skill": {
        "cost": "173 Mana",
        "range": "100",
        "castTime": "Instant",
        "cooldown": null
       },
       "costLine": "173 Mana; 100 yd range; Instant",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "When active, 30% of all damage taken by the caster is taken by your Imp, Voidwalker, Succubus, Incubus, or Felhunter Demon instead. In addition, both the Demon and the master will inflict 3% more damage. Lasts as long as the Demon is active.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "When active, 30% of all damage taken by the caster is taken by your Imp, Voidwalker, Succubus, Incubus, or Felhunter demon instead. In addition, both the demon and master will inflict 3% more damage. Lasts as long as the demon is active.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "demonology-5-3",
       "name_en": "Demonic Knowledge",
       "icon": "spell_shadow_improvedvampiricembrace",
       "row": 5,
       "col": 3,
       "maxRanks": 3,
       "pointsRequired": 20,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases your spell damage and your Demon pet's spell damage by up to 33% of your level while you have a summoned Demon pet active.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases your spell damage and your Demon pet's spell damage by up to 67% of your level while you have a summoned Demon pet active.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases your spell damage and your Demon pet's spell damage by up to 100% of your level while you have a summoned Demon pet active.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "demonology-6-3",
       "name_en": "Master Demonologist",
       "icon": "spell_shadow_shadowpact",
       "row": 6,
       "col": 3,
       "maxRanks": 5,
       "pointsRequired": 25,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Grants both the Warlock and the summoned demon an effect as long as that demon is active. Imp - Increases Fire damage done by 2%. Voidwalker - Reduces Physical damage taken by 2%. Succubus/Incubus - Increases Shadow damage done by 2%. Felhunter - Reduces Magic damage taken by 2%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Grants both the Warlock and the summoned demon an effect as long as that demon is active.\n\nImp - Increases Fire damage done by 4%.\n\nVoidwalker - Reduces Physical damage taken by 4%.\n\nSuccubus/Incubus - Increases Shadow damage done by 4%.\n\nFelhunter - Reduces Magic damage taken by 4%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Grants both the Warlock and the summoned demon an effect as long as that demon is active.\n\nImp - Increases Fire damage done by 6%.\n\nVoidwalker - Reduces Physical damage taken by 6%.\n\nSuccubus/Incubus - Increases Shadow damage done by 6%.\n\nFelhunter - Reduces Magic damage taken by 6%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Grants both the Warlock and the summoned demon an effect as long as that demon is active.\n\nImp - Increases Fire damage done by 8%.\n\nVoidwalker - Reduces Physical damage taken by 8%.\n\nSuccubus/Incubus - Increases Shadow damage done by 8%.\n\nFelhunter - Reduces Magic damage taken by 8%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Grants both the Warlock and the summoned demon an effect as long as that demon is active.\n\nImp - Increases Fire damage done by 10%.\n\nVoidwalker - Reduces Physical damage taken by 10%.\n\nSuccubus/Incubus - Increases Shadow damage done by 10%.\n\nFelhunter - Reduces Magic damage taken by 10%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Grants both the Warlock and the summoned demon an effect as long as that demon is active.Imp - Reduces threat caused by 4%.Voidwalker - Reduces physical damage taken by 2%.Succubus/Incubus - Increases all damage caused by 2%.Felhunter - Increases all resistances by .2 per level.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "demonology-7-2",
       "name_en": "Demonic Pact",
       "icon": "spell_shadow_demonicpact",
       "row": 7,
       "col": 2,
       "maxRanks": 1,
       "pointsRequired": 30,
       "prerequisite": "demonology-5-2",
       "arrow": "l2",
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Your Demonic Sacrifice effect is no longer cancelled by summoning a different Demon pet. Resummoning the sacrificed pet will still cancel the effect.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      }
     ],
     "removedFromClassic": [
      {
       "name_en": "Improved Healthstone",
       "maxRanks": 2,
       "row": 1,
       "text": "Increases the amount of Health restored by your Healthstone by 10%."
      },
      {
       "name_en": "Fel Intellect",
       "maxRanks": 5,
       "row": 2,
       "text": "Increases the maximum Mana of your Imp, Voidwalker, Succubus, Incubus, and Felhunter by 3%."
      },
      {
       "name_en": "Improved Subjugate Demon",
       "maxRanks": 5,
       "row": 5,
       "text": "Reduces the Attack Speed and Casting Speed penalty of your Subjugate Demon spell by 2% and reduces the resist chance by 2%."
      },
      {
       "name_en": "Improved Firestone",
       "maxRanks": 2,
       "row": 5,
       "text": "Increases the bonus Fire damage from Firestones and the Firestone effect by 15%."
      },
      {
       "name_en": "Improved Spellstone",
       "maxRanks": 2,
       "row": 7,
       "text": "Increases the amount of damage absorbed by your Spellstone by 15%."
      }
     ],
     "disputed": []
    },
    {
     "key": "destruction",
     "name_en": "Destruction",
     "name_fr": "Destruction",
     "icon": "spell_shadow_rainoffire",
     "backgroundId": 301,
     "talents": [
      {
       "key": "destruction-1-1",
       "name_en": "Destructive Reach",
       "icon": "spell_shadow_corpseexplode",
       "row": 1,
       "col": 1,
       "maxRanks": 2,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the range of your damaging spells by 10%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the range of your damaging spells by 20%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the range of your Destruction spells by 10%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "destruction-1-2",
       "name_en": "Improved Shadow Bolt",
       "icon": "spell_shadow_shadowbolt",
       "row": 1,
       "col": 2,
       "maxRanks": 5,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Your Shadow Bolt critical strikes increase Shadow damage taken by the target from your attacks by 4% for 12 sec.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Your Shadow Bolt critical strikes increase Shadow damage taken by the target from your attacks by 8% for 12 sec.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Your Shadow Bolt critical strikes increase Shadow damage taken by the target from your attacks by 12% for 12 sec.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Your Shadow Bolt critical strikes increase Shadow damage taken by the target from your attacks by 16% for 12 sec.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Your Shadow Bolt critical strikes increase Shadow damage taken by the target from your attacks by 20% for 12 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Your Shadow Bolt critical strikes increase Shadow damage dealt to the target by 4% until 4 non-periodic damage sources are applied. Effect lasts a maximum of 12 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "destruction-1-3",
       "name_en": "Bane",
       "icon": "spell_shadow_deathpact",
       "row": 1,
       "col": 3,
       "maxRanks": 5,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the casting time of your Shadow Bolt, Immolate, and Incinerate spells by 0.1 sec and your Soul Fire spell by 0.4 sec.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the casting time of your Shadow Bolt, Immolate, and Incinerate spells by 0.2 sec and your Soul Fire spell by 0.8 sec.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Reduces the casting time of your Shadow Bolt, Immolate, and Incinerate spells by 0.3 sec and your Soul Fire spell by 1.2 sec.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Reduces the casting time of your Shadow Bolt, Immolate, and Incinerate spells by 0.4 sec and your Soul Fire spell by 1.6 sec.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Reduces the casting time of your Shadow Bolt, Immolate, and Incinerate spells by 0.5 sec and your Soul Fire spell by 2 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Reduces the casting time of your Shadow Bolt and Immolate spells by 0.1 sec and your Soul Fire spell by 0.4 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "destruction-2-1",
       "name_en": "Molten Skin",
       "icon": "ability_mage_moltenarmor",
       "row": 2,
       "col": 1,
       "maxRanks": 5,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces all damage taken by 2%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces all damage taken by 4%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Reduces all damage taken by 6%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Reduces all damage taken by 8%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Reduces all damage taken by 10%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "destruction-2-2",
       "name_en": "Cataclysm",
       "icon": "spell_fire_windsofwoe",
       "row": 2,
       "col": 2,
       "maxRanks": 3,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the Mana cost of your Destruction spells by 3%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the Mana cost of your Destruction spells by 6%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Reduces the Mana cost of your Destruction spells by 10%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Reduces the Mana cost of your Destruction spells by 1%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "destruction-2-3",
       "name_en": "Aftermath",
       "icon": "spell_fire_fire",
       "row": 2,
       "col": 3,
       "maxRanks": 5,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the initial damage of your Immolate spell by 10% and your Conflagrate spell has a 20% chance to Daze the target, reducing the target's movement speed by 50% for 5 sec.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the initial damage of your Immolate spell by 20% and your Conflagrate spell has a 40% chance to Daze the target, reducing the target's movement speed by 50% for 5 sec.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the initial damage of your Immolate spell by 30% and your Conflagrate spell has a 60% chance to Daze the target, reducing the target's movement speed by 50% for 5 sec.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases the initial damage of your Immolate spell by 40% and your Conflagrate spell has a 80% chance to Daze the target, reducing the target's movement speed by 50% for 5 sec.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases the initial damage of your Immolate spell by 50% and your Conflagrate spell has a 100% chance to Daze the target, reducing the target's movement speed by 50% for 5 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Gives your Destruction spells a 2% chance to daze the target for 5 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "destruction-3-2",
       "name_en": "Ruin",
       "icon": "spell_shadow_shadowwordpain",
       "row": 3,
       "col": 2,
       "maxRanks": 5,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the critical strike damage bonus of your Destruction spells by 20%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the critical strike damage bonus of your Destruction spells by 40%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the critical strike damage bonus of your Destruction spells by 60%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases the critical strike damage bonus of your Destruction spells by 80%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases the critical strike damage bonus of your Destruction spells by 100%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the critical strike damage bonus of your Destruction spells by 100%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "destruction-3-3",
       "name_en": "Shadowburn",
       "icon": "spell_shadow_scourgebuild",
       "row": 3,
       "col": 3,
       "maxRanks": 1,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "actif",
       "skill": {
        "cost": "105 Mana",
        "range": "30",
        "castTime": "Instant",
        "cooldown": "15 sec"
       },
       "costLine": "105 Mana; 30 yd range; Instant; 15 sec cooldown; Reagents: Soul Shard",
       "requires": [
        "Soul Shard"
       ],
       "ranks": [
        {
         "rank": 1,
         "text": "Instantly blasts the target for 102 to 111 Shadow damage. If a non-trivial target dies within 8 sec of being hit with Shadowburn, the caster gains a Soul Shard.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Instantly blasts the target for 91 to 104 Shadow damage. If the target dies within 5 sec of Shadowburn, and yields experience or honor, the caster gains a Soul Shard.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "destruction-4-1",
       "name_en": "Intensity",
       "icon": "spell_fire_lavaspawn",
       "row": 4,
       "col": 1,
       "maxRanks": 3,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Gives you a 23% chance to resist interruption caused by damage while casting or channeling any Destruction spell.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Gives you a 47% chance to resist interruption caused by damage while casting or channeling any Destruction spell.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Gives you a 70% chance to resist interruption caused by damage while casting or channeling any Destruction spell.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Gives you a 35% chance to resist interruption caused by damage while channeling the Rain of Fire, Hellfire or Soul Fire spell.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "destruction-4-2",
       "name_en": "Agonizing Flames",
       "icon": "spell_fire_immolation",
       "row": 4,
       "col": 2,
       "maxRanks": 3,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the critical strike chance of your Searing Pain spell by 3% and the damage done by all your Destruction spells by 3%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the critical strike chance of your Searing Pain spell by 7% and the damage done by all your Destruction spells by 7%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the critical strike chance of your Searing Pain spell by 10% and the damage done by all your Destruction spells by 10%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the critical strike chance of your Searing Pain spell by 2%.",
       "classicRenamedFrom": "Improved Searing Pain",
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "destruction-4-3",
       "name_en": "Conflagrate",
       "icon": "spell_fire_fireball",
       "row": 4,
       "col": 3,
       "maxRanks": 1,
       "pointsRequired": 15,
       "prerequisite": "destruction-3-3",
       "arrow": null,
       "kind": "actif",
       "skill": {
        "cost": "100 Mana",
        "range": "30",
        "castTime": "Instant",
        "cooldown": "10 sec"
       },
       "costLine": "100 Mana; 30 yd range; Instant; 10 sec cooldown",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Ignites a target that is already afflicted by your Immolate spell, dealing 109 to 132 Fire damage and consuming your Immolate effect.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Ignites a target that is already afflicted by Immolate, dealing 249 to 316 Fire damage and consuming the Immolate spell.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "destruction-5-1",
       "name_en": "Pyroclasm",
       "icon": "spell_fire_volcano",
       "row": 5,
       "col": 1,
       "maxRanks": 2,
       "pointsRequired": 20,
       "prerequisite": "destruction-4-1",
       "arrow": "l1",
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Gives your Soul Fire spell a 13% chance to Stun the target for 3 sec, and your Rain of Fire and Hellfire spells a 13% chance over their duration to Stun targets they damage for 3 sec.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Gives your Soul Fire spell a 26% chance to Stun the target for 3 sec, and your Rain of Fire and Hellfire spells a 26% chance over their duration to Stun targets they damage for 3 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Gives your Rain of Fire, Hellfire, and Soul Fire spells a 13% chance to stun the target for 3 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "destruction-5-2",
       "name_en": "Bane of Havoc",
       "icon": "ability_warlock_baneofhavoc",
       "row": 5,
       "col": 2,
       "maxRanks": 1,
       "pointsRequired": 20,
       "prerequisite": null,
       "arrow": null,
       "kind": "actif",
       "skill": {
        "cost": "43 Mana",
        "range": "30",
        "castTime": "Instant",
        "cooldown": null
       },
       "costLine": "43 Mana; 30 yd range; Instant",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Afflicts the target for 5 min, causing 15% of all damage done by the Warlock to other targets to also be dealt to the cursed target. Bane of Havoc is limited to 1 target, and only one Bane per Warlock can be active on any one target.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "destruction-5-3",
       "name_en": "Fire and Brimstone",
       "icon": "ability_warlock_fireandbrimstone",
       "row": 5,
       "col": 3,
       "maxRanks": 3,
       "pointsRequired": 20,
       "prerequisite": "destruction-4-3",
       "arrow": "l1",
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the critical strike chance of your Conflagrate spell by 8%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the critical strike chance of your Conflagrate spell by 17%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the critical strike chance of your Conflagrate spell by 25%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "destruction-6-3",
       "name_en": "Shadow and Flame",
       "icon": "spell_shadow_shadowandflame",
       "row": 6,
       "col": 3,
       "maxRanks": 5,
       "pointsRequired": 25,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Hitting an enemy with Conflagrate increases all Shadow damage you deal by 2% for 20 sec, and hitting an enemy with Shadowburn increases all Fire damage you deal by 2% for 20 sec. In addition, Conflagrate has a 20% chance not to consume Immolate, and Shadowburn has a 20% chance to instantly refund a Soul Shard.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Hitting an enemy with Conflagrate increases all Shadow damage you deal by 4% for 20 sec, and hitting an enemy with Shadowburn increases all Fire damage you deal by 4% for 20 sec. In addition, Conflagrate has a 40% chance not to consume Immolate, and Shadowburn has a 40% chance to instantly refund a Soul Shard.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Hitting an enemy with Conflagrate increases all Shadow damage you deal by 6% for 20 sec, and hitting an enemy with Shadowburn increases all Fire damage you deal by 6% for 20 sec. In addition, Conflagrate has a 60% chance not to consume Immolate, and Shadowburn has a 60% chance to instantly refund a Soul Shard.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Hitting an enemy with Conflagrate increases all Shadow damage you deal by 8% for 20 sec, and hitting an enemy with Shadowburn increases all Fire damage you deal by 8% for 20 sec. In addition, Conflagrate has a 80% chance not to consume Immolate, and Shadowburn has a 80% chance to instantly refund a Soul Shard.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Hitting an enemy with Conflagrate increases all Shadow damage you deal by 10% for 20 sec, and hitting an enemy with Shadowburn increases all Fire damage you deal by 10% for 20 sec. In addition, Conflagrate has a 100% chance not to consume Immolate, and Shadowburn has a 100% chance to instantly refund a Soul Shard.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "destruction-7-2",
       "name_en": "Incinerate",
       "icon": "spell_fire_burnout",
       "row": 7,
       "col": 2,
       "maxRanks": 1,
       "pointsRequired": 30,
       "prerequisite": "destruction-5-2",
       "arrow": "l2",
       "kind": "actif",
       "skill": {
        "cost": "205 Mana",
        "range": "30",
        "castTime": "2.5 sec",
        "cooldown": null
       },
       "costLine": "205 Mana; 30 yd range; 2.5 sec cast",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Deals 125 to 140 Fire damage to your target and an additional 25% damage if the target is afflicted by Immolate.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      }
     ],
     "removedFromClassic": [
      {
       "name_en": "Improved Firebolt",
       "maxRanks": 2,
       "row": 3,
       "text": "Reduces the casting time of your Imp's Firebolt spell by 0.5 sec."
      },
      {
       "name_en": "Improved Lash of Pain",
       "maxRanks": 2,
       "row": 3,
       "text": "Reduces the cooldown of your Succubus' and Incubus' Lash of Pain spell by 3 sec."
      },
      {
       "name_en": "Devastation",
       "maxRanks": 5,
       "row": 3,
       "text": "Increases the critical strike chance of your Destruction spells by 1%."
      },
      {
       "name_en": "Improved Immolate",
       "maxRanks": 5,
       "row": 5,
       "text": "Increases the initial damage of your Immolate spell by 5%."
      },
      {
       "name_en": "Emberstorm",
       "maxRanks": 5,
       "row": 6,
       "text": "Increases the damage done by your Fire spells by 2%."
      }
     ],
     "disputed": []
    }
   ]
  },
  {
   "slug": "druide",
   "gameId": 11,
   "name_fr": "Druide",
   "name_en": "Druid",
   "icon": "class_druid",
   "status": "COMMUNAUTÉ",
   "sourceIds": [
    "forever-talents-releve",
    "wowtbc-forever-calculator",
    "wowhead-forever-talent-calc"
   ],
   "transcriptionNote": "Talent text transcribed from in-game tooltip video (druid.json).",
   "trees": [
    {
     "key": "balance",
     "name_en": "Balance",
     "name_fr": "Équilibre",
     "icon": "spell_nature_starfall",
     "backgroundId": 283,
     "talents": [
      {
       "key": "balance-1-2",
       "name_en": "Improved Wrath",
       "icon": "spell_nature_abolishmagic",
       "row": 1,
       "col": 2,
       "maxRanks": 5,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the cast time of your Wrath spell by 0.1 sec and its Mana cost by 10%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the cast time of your Wrath spell by 0.2 sec and its Mana cost by 20%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Reduces the cast time of your Wrath spell by 0.3 sec and its Mana cost by 30%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Reduces the cast time of your Wrath spell by 0.4 sec and its Mana cost by 40%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Reduces the cast time of your Wrath spell by 0.5 sec and its Mana cost by 50%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Reduces the cast time of your Wrath spell by 0.1 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "balance-1-3",
       "name_en": "Genesis",
       "icon": "spell_arcane_arcane03",
       "row": 1,
       "col": 3,
       "maxRanks": 5,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the periodic damage and healing done by your spells and abilities by 1%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the periodic damage and healing done by your spells and abilities by 2%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the periodic damage and healing done by your spells and abilities by 3%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases the periodic damage and healing done by your spells and abilities by 4%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases the periodic damage and healing done by your spells and abilities by 5%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "balance-2-1",
       "name_en": "Moonglow",
       "icon": "spell_nature_sentinal",
       "row": 2,
       "col": 1,
       "maxRanks": 3,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the Mana cost of your damaging spells by 8%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the Mana cost of your damaging spells by 17%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Reduces the Mana cost of your damaging spells by 25%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Reduces the Mana cost of your Moonfire, Starfire, Wrath, Healing Touch, Regrowth and Rejuvenation spells by 3%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "balance-2-2",
       "name_en": "Improved Moonfire",
       "icon": "spell_nature_starfall",
       "row": 2,
       "col": 2,
       "maxRanks": 2,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the damage and critical strike chance of your Moonfire spell by 5%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the damage and critical strike chance of your Moonfire spell by 10%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the damage and critical strike chance of your Moonfire spell by 2%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "balance-2-3",
       "name_en": "Nature's Majesty",
       "icon": "spell_nature_wispsplode",
       "row": 2,
       "col": 3,
       "maxRanks": 2,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases your critical strike chance with spells and melee attacks by 2%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases your critical strike chance with spells and melee attacks by 4%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [
        {
         "field": "name",
         "foreverTalents": "Nature's Majesty",
         "wowtbc": "Natural Majesty"
        }
       ],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "balance-2-4",
       "name_en": "Nature's Reach",
       "icon": "spell_nature_naturetouchgrow",
       "row": 2,
       "col": 4,
       "maxRanks": 2,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the range of your offensive Balance spells by 10% and increases the chance for all your spells and attacks to hit by 2%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the range of your offensive Balance spells by 20% and increases the chance for all your spells and attacks to hit by 4%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the range of your Wrath, Entangling Roots, Faerie Fire, Moonfire, Starfire, and Hurricane spells by 10%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "balance-3-1",
       "name_en": "Improved Entangling Roots",
       "icon": "spell_nature_stranglevines",
       "row": 3,
       "col": 1,
       "maxRanks": 3,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the damage done by your Entangling Roots spell by 25%, and its victims can take up to 25% more damage without interrupting the effect.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the damage done by your Entangling Roots spell by 50%, and its victims can take up to 50% more damage without interrupting the effect.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the damage done by your Entangling Roots spell by 75%, and its victims can take up to 75% more damage without interrupting the effect.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Gives you a 40% chance to avoid interruption caused by damage while casting Entangling Roots.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "balance-3-3",
       "name_en": "Nature's Splendor",
       "icon": "spell_nature_naturesblessing",
       "row": 3,
       "col": 3,
       "maxRanks": 1,
       "pointsRequired": 10,
       "prerequisite": "balance-2-3",
       "arrow": "l1",
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the duration of your Moonfire and Rejuvenation spells by 3 sec, your Regrowth spell by 6 sec, and your Insect Swarm spell by 2 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "balance-4-1",
       "name_en": "Insect Swarm",
       "icon": "spell_nature_insectswarm",
       "row": 4,
       "col": 1,
       "maxRanks": 1,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "actif",
       "skill": {
        "cost": "45 Mana",
        "range": "30",
        "castTime": "Instant",
        "cooldown": null
       },
       "costLine": "45 Mana | 30 yd range | Instant",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "The enemy target is swarmed by insects, decreasing their chance to hit by 2% and causing 55 Nature damage over 12 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "The enemy target is swarmed by insects, decreasing their chance to hit by 2% and causing 66 Nature damage over 12 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "balance-4-2",
       "name_en": "Vengeance",
       "icon": "spell_nature_purge",
       "row": 4,
       "col": 2,
       "maxRanks": 5,
       "pointsRequired": 15,
       "prerequisite": "balance-2-2",
       "arrow": "l2",
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the critical strike damage bonus of your Arcane and Nature spells by 20%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the critical strike damage bonus of your Arcane and Nature spells by 40%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the critical strike damage bonus of your Arcane and Nature spells by 60%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases the critical strike damage bonus of your Arcane and Nature spells by 80%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases the critical strike damage bonus of your Arcane and Nature spells by 100%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the critical strike damage bonus of your Starfire, Moonfire, and Wrath spells by 20%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "balance-4-3",
       "name_en": "Improved Starfire",
       "icon": "spell_arcane_starfire",
       "row": 4,
       "col": 3,
       "maxRanks": 5,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the cast time of Starfire by 0.1 sec and Starfire has a 3% chance to stun its target for 3 sec.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the cast time of Starfire by 0.2 sec and Starfire has a 6% chance to stun its target for 3 sec.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Reduces the cast time of Starfire by 0.3 sec and Starfire has a 9% chance to stun its target for 3 sec.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Reduces the cast time of Starfire by 0.4 sec and Starfire has a 12% chance to stun its target for 3 sec.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Reduces the cast time of Starfire by 0.5 sec and Starfire has a 15% chance to stun its target for 3 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Reduces the cast time of Starfire by 0.1 sec and has a 3% chance to stun the target for 3 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "balance-5-1",
       "name_en": "Overgrowth",
       "icon": "ability_druid_flourish",
       "row": 5,
       "col": 1,
       "maxRanks": 2,
       "pointsRequired": 20,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the maximum number of targets you may have affected by Entangling Roots by 1.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the maximum number of targets you may have affected by Entangling Roots by 2.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "balance-5-2",
       "name_en": "Nature's Grace",
       "icon": "spell_nature_naturesblessing",
       "row": 5,
       "col": 2,
       "maxRanks": 1,
       "pointsRequired": 20,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "All non-periodic spell criticals grace you with a blessing of nature, increasing your spellcasting speed and reducing your global cooldown by 10% for 3 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "All spell criticals grace you with a blessing of nature, reducing the casting time of your next spell by 0.5 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "balance-5-3",
       "name_en": "Eclipse",
       "icon": "ability_druid_eclipse",
       "row": 5,
       "col": 3,
       "maxRanks": 3,
       "pointsRequired": 20,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Your Wrath spell reduces the cast time of your next 2 Starfire spells by 0.17 sec. Stores up to 4 charges. Lasts 15 sec.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Your Wrath spell reduces the cast time of your next 2 Starfire spells by 0.33 sec. Stores up to 4 charges. Lasts 15 sec.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Your Wrath spell reduces the cast time of your next 2 Starfire spells by 0.5 sec. Stores up to 4 charges. Lasts 15 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "balance-6-2",
       "name_en": "Moonfury",
       "icon": "spell_nature_moonglow",
       "row": 6,
       "col": 2,
       "maxRanks": 5,
       "pointsRequired": 25,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the damage done by your Arcane and Nature spells by 2%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the damage done by your Arcane and Nature spells by 4%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the damage done by your Arcane and Nature spells by 6%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases the damage done by your Arcane and Nature spells by 8%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases the damage done by your Arcane and Nature spells by 10%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the damage done by your Starfire, Moonfire and Wrath spells by .",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "balance-7-2",
       "name_en": "Moonkin Form",
       "icon": "spell_nature_forceofnature",
       "row": 7,
       "col": 2,
       "maxRanks": 1,
       "pointsRequired": 30,
       "prerequisite": null,
       "arrow": null,
       "kind": "actif",
       "skill": {
        "cost": "283 Mana",
        "range": null,
        "castTime": "Instant",
        "cooldown": null
       },
       "costLine": "283 Mana | Instant",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Transforms the Druid into Moonkin Form. While in this form, the armor contribution from items is increased by 360%, Omen of Clarity gains 100% increased chance to trigger, and all party members within 45 yards have their critical strike chance increased by 3%, exclusive with Leader of the Pack. The Moonkin cannot cast healing spells while shapeshifted. The act of shapeshifting frees the caster of Polymorph and Movement Impairing effects.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": [
        "The act of shapeshifting frees the caster of Polymorph and Movement Impairing effects."
       ],
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Transforms the Druid into Moonkin Form. While in this form the armor contribution from items is increased by 360% and all party members within 30 yards have their spell critical chance increased by 3%. The act of shapeshifting frees the caster of Polymorph and Movement Impairing effects.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      }
     ],
     "removedFromClassic": [
      {
       "name_en": "Nature's Grasp",
       "maxRanks": 1,
       "row": 1,
       "text": "While active, any time an enemy strikes the caster they have a 35% chance to become afflicted by Entangling Roots (Rank 1).  Only useable outdoors.  1 charge.  Lasts 45 sec."
      },
      {
       "name_en": "Improved Nature's Grasp",
       "maxRanks": 4,
       "row": 1,
       "text": "Increases the chance for your Nature's Grasp to entangle an enemy by 15%."
      },
      {
       "name_en": "Natural Weapons",
       "maxRanks": 5,
       "row": 2,
       "text": "[<span class='q2'>S03 - Tuning and Overrides Passive - Druid</span>: <span class='q9'>Increases all damage you deal by 2%</span> / Increases the damage you deal with physical attacks in all forms by 2%.]"
      },
      {
       "name_en": "Improved Thorns",
       "maxRanks": 3,
       "row": 3,
       "text": "Increases damage caused by your Thorns spell by 25%."
      },
      {
       "name_en": "Omen of Clarity",
       "maxRanks": 1,
       "row": 3,
       "text": "Imbues the Druid with natural energy.  Each of the Druid's melee attacks [<span class='q2'>S03 - Tuning and Overrides Passive - Druid</span>: <span class='q9'>and non-instant spell casts</span>]has a chance of causing the caster to enter a Clearcasting state.  The Clearcasting state reduces the Mana, Rage or Energy cost of your next damage or healing spell or offensive ability by 100%.  Lasts 10 min."
      }
     ],
     "disputed": []
    },
    {
     "key": "feral-combat",
     "name_en": "Feral Combat",
     "name_fr": "Combat farouche",
     "icon": "ability_racial_bearform",
     "backgroundId": 281,
     "talents": [
      {
       "key": "feral-combat-1-2",
       "name_en": "Ferocity",
       "icon": "ability_hunter_pet_hyena",
       "row": 1,
       "col": 2,
       "maxRanks": 5,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the cost of your Maul, Mangle, Swipe, Claw, and Rake abilities by 1 Rage or Energy.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the cost of your Maul, Mangle, Swipe, Claw, and Rake abilities by 2 Rage or Energy.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Reduces the cost of your Maul, Mangle, Swipe, Claw, and Rake abilities by 3 Rage or Energy.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Reduces the cost of your Maul, Mangle, Swipe, Claw, and Rake abilities by 4 Rage or Energy.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Reduces the cost of your Maul, Mangle, Swipe, Claw, and Rake abilities by 5 Rage or Energy.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Reduces the cost of your Maul, Swipe, Claw, and Rake abilities by 1 Rage or Energy.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "feral-combat-1-3",
       "name_en": "Heart of the Wild",
       "icon": "spell_holy_blessingofagility",
       "row": 1,
       "col": 3,
       "maxRanks": 5,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases your Intellect by 2%. In addition, while in Bear Form or Dire Bear Form your Stamina is increased by 4% and while in Cat Form your Strength is increased by 2%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases your Intellect by 4%. In addition, while in Bear Form or Dire Bear Form your Stamina is increased by 8% and while in Cat Form your Strength is increased by 4%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases your Intellect by 6%. In addition, while in Bear Form or Dire Bear Form your Stamina is increased by 12% and while in Cat Form your Strength is increased by 6%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases your Intellect by 8%. In addition, while in Bear Form or Dire Bear Form your Stamina is increased by 16% and while in Cat Form your Strength is increased by 8%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases your Intellect by 10%. In addition, while in Bear Form or Dire Bear Form your Stamina is increased by 20% and while in Cat Form your Strength is increased by 10%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases your Intellect by 4%. In addition, while in Bear or Dire Bear Form your Stamina is increased by 4% and while in Cat Form your Strength is increased by 4%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "feral-combat-2-1",
       "name_en": "Feral Swiftness",
       "icon": "ability_druid_dash",
       "row": 2,
       "col": 1,
       "maxRanks": 2,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases your movement speed while in Cat Form by 15%, and increases your chance to Dodge by 2%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases your movement speed while in Cat Form by 30%, and increases your chance to Dodge by 4%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases your movement speed by 15% while outdoors in Cat Form and increases your chance to dodge while in Cat Form by 2%.",
       "classicRenamedFrom": "Feline Swiftness",
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "feral-combat-2-2",
       "name_en": "Feral Instinct",
       "icon": "ability_ambush",
       "row": 2,
       "col": 2,
       "maxRanks": 3,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases damage done by your Swipe ability by 10% and reduces the chance enemies have to detect you while Prowling as if you were 1 level higher.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases damage done by your Swipe ability by 20% and reduces the chance enemies have to detect you while Prowling as if you were 2 levels higher.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases damage done by your Swipe ability by 30% and reduces the chance enemies have to detect you while Prowling as if you were 3 levels higher.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases threat caused in Bear and Dire Bear Form by 3% and reduces the chance enemies have to detect you while Prowling.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "feral-combat-2-3",
       "name_en": "Brutal Impact",
       "icon": "ability_druid_bash",
       "row": 2,
       "col": 3,
       "maxRanks": 2,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the stun duration of your Bash and Pounce abilities by 0.5 sec and reduces the cooldown of Bash by 15 sec.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the stun duration of your Bash and Pounce abilities by 1 sec and reduces the cooldown of Bash by 30 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the stun duration of your Bash and Pounce abilities by 0.5 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "feral-combat-2-4",
       "name_en": "Thick Hide",
       "icon": "inv_misc_pelt_bear_03",
       "row": 2,
       "col": 4,
       "maxRanks": 3,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "While in Bear Form, Cat Form, Dire Bear Form, or Moonkin Form, you gain 1 additional base Armor per level and another 0.67 base Armor for each point of defense skill beyond five times your level. This amount can be further increased by multipliers from those forms.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "While in Bear Form, Cat Form, Dire Bear Form, or Moonkin Form, you gain 2 additional base Armor per level and another 1.33 base Armor for each point of defense skill beyond five times your level. This amount can be further increased by multipliers from those forms.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "While in Bear Form, Cat Form, Dire Bear Form, or Moonkin Form, you gain 3 additional base Armor per level and another 2 base Armor for each point of defense skill beyond five times your level. This amount can be further increased by multipliers from those forms.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases your Armor contribution from items by 2%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "feral-combat-3-2",
       "name_en": "Savage Fury",
       "icon": "ability_druid_ravage",
       "row": 3,
       "col": 2,
       "maxRanks": 2,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the damage caused by your Claw, Rake, Shred, Maul, and Swipe abilities by 5%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the damage caused by your Claw, Rake, Shred, Maul, and Swipe abilities by 10%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the damage caused by your Claw, Rake, Maul and Swipe abilities by 10%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "feral-combat-3-3",
       "name_en": "Feral Charge",
       "icon": "ability_hunter_pet_bear",
       "row": 3,
       "col": 3,
       "maxRanks": 1,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "actif",
       "skill": {
        "cost": "5 rage",
        "range": "8 - 25",
        "castTime": "Instant",
        "cooldown": "15 sec"
       },
       "costLine": "5 Rage | 8-25 yd range | Instant | 15 sec cooldown | Feral Charge (Cat): 8-25 yd range | Instant | 30 sec cooldown",
       "requires": [
        "Bear Form, Dire Bear Form",
        "Bear Form, Dire Bear Form (bear part); Requires Cat Form (cat part)"
       ],
       "ranks": [
        {
         "rank": 1,
         "text": "Charge an enemy, immobilizing them and interrupting any spell they are casting for 4 sec.\n\nFeral Charge (Cat)\nLeap behind an enemy, Dazing them for 3 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": [
        "Cat Form is version leaps behind an enemy, Dazing them for 3 sec."
       ],
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Causes you to charge an enemy, immobilizing and interrupting any spell being cast for 4 sec.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "feral-combat-3-4",
       "name_en": "Sharpened Claws",
       "icon": "inv_misc_monsterclaw_04",
       "row": 3,
       "col": 4,
       "maxRanks": 2,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases your critical strike chance while in Bear Form, Dire Bear Form, or Cat Form by 3%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases your critical strike chance while in Bear Form, Dire Bear Form, or Cat Form by 6%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases your critical strike chance while in Bear, Dire Bear or Cat Form by 2%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "feral-combat-4-1",
       "name_en": "Shredding Attacks",
       "icon": "spell_shadow_vampiricaura",
       "row": 4,
       "col": 1,
       "maxRanks": 3,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the Energy cost of your Shred ability by 6 and reduces the Rage cost of your Lacerate ability by 1.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the Energy cost of your Shred ability by 12 and reduces the Rage cost of your Lacerate ability by 2.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Reduces the Energy cost of your Shred ability by 18 and reduces the Rage cost of your Lacerate ability by 3.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Reduces the Energy cost of your Shred ability by 6.",
       "classicRenamedFrom": "Improved Shred",
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "feral-combat-4-2",
       "name_en": "Mangle",
       "icon": "ability_druid_mangle2",
       "row": 4,
       "col": 2,
       "maxRanks": 1,
       "pointsRequired": 15,
       "prerequisite": "feral-combat-3-2",
       "arrow": "l1",
       "kind": "actif",
       "skill": {
        "cost": "20 Rage",
        "range": "Melee",
        "castTime": "Instant",
        "cooldown": "6 sec"
       },
       "costLine": "20 Rage | Melee Range | Instant | 6 sec cooldown",
       "requires": [
        "Bear Form, Dire Bear Form"
       ],
       "ranks": [
        {
         "rank": 1,
         "text": "Mangle the target for 100% normal damage plus 26.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "feral-combat-4-3",
       "name_en": "Predatory Strikes",
       "icon": "ability_hunter_pet_cat",
       "row": 4,
       "col": 3,
       "maxRanks": 3,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [
        "Cat Form, Bear Form, Dire Bear Form"
       ],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases your melee Attack Power in Cat Form, Bear Form, and Dire Bear Form by 50% of your level.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases your melee Attack Power in Cat Form, Bear Form, and Dire Bear Form by 100% of your level.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases your melee Attack Power in Cat Form, Bear Form, and Dire Bear Form by 150% of your level.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases your melee attack power in Cat, Bear and Dire Bear Forms by 50% of your level.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "feral-combat-4-4",
       "name_en": "Primal Fury",
       "icon": "ability_racial_cannibalize",
       "row": 4,
       "col": 4,
       "maxRanks": 2,
       "pointsRequired": 15,
       "prerequisite": "feral-combat-3-4",
       "arrow": "l1",
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Gives you a 50% chance to gain an additional 5 Rage any time you get a critical strike while in Bear Form or Dire Bear Form. In addition, your non-periodic critical strikes from Cat Form abilities that generate Combo Points have a 50% chance to add an additional Combo Point.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Gives you a 100% chance to gain an additional 5 Rage any time you get a critical strike while in Bear Form or Dire Bear Form. In addition, your non-periodic critical strikes from Cat Form abilities that generate Combo Points have a 100% chance to add an additional Combo Point.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Gives you a 50% chance to gain an additional 5 Rage anytime you get a critical strike while in Bear and Dire Bear Form.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "feral-combat-5-1",
       "name_en": "Predatory Instincts",
       "icon": "ability_druid_predatoryinstincts",
       "row": 5,
       "col": 1,
       "maxRanks": 2,
       "pointsRequired": 20,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the critical strike damage bonus of your melee abilities by 10%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the critical strike damage bonus of your melee abilities by 20%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [
        {
         "field": "name",
         "foreverTalents": "Predatory Instincts",
         "wowtbc": "Predatory Insticts"
        }
       ],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "feral-combat-5-2",
       "name_en": "Leader of the Pack",
       "icon": "spell_nature_unyeildingstamina",
       "row": 5,
       "col": 2,
       "maxRanks": 1,
       "pointsRequired": 20,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "While in Cat Form, Bear Form, or Dire Bear Form, the Leader of the Pack increases the critical strike chance of all party members within 45 yards by 3%, exclusive with Moonkin Aura.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "While in Cat, Bear or Dire Bear Form, the Leader of the Pack increases ranged and melee critical chance of all party members within 45 yards by 3%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "feral-combat-5-4",
       "name_en": "King of the Jungle",
       "icon": "ability_druid_kingofthejungle",
       "row": 5,
       "col": 4,
       "maxRanks": 3,
       "pointsRequired": 20,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Tiger's Fury now instantly grants you 20 Energy.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Tiger's Fury now instantly grants you 40 Energy.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Tiger's Fury now instantly grants you 60 Energy.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "feral-combat-6-1",
       "name_en": "Natural Reaction",
       "icon": "ability_bullrush",
       "row": 6,
       "col": 1,
       "maxRanks": 5,
       "pointsRequired": 25,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [
        "Bear Form, Dire Bear Form"
       ],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases your dodge chance by 1%, and gives you a 20% chance to gain 5 Rage each time you dodge.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases your dodge chance by 2%, and gives you a 40% chance to gain 5 Rage each time you dodge.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases your dodge chance by 3%, and gives you a 60% chance to gain 5 Rage each time you dodge.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases your dodge chance by 4%, and gives you a 80% chance to gain 5 Rage each time you dodge.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases your dodge chance by 5%, and gives you a 100% chance to gain 5 Rage each time you dodge.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "feral-combat-6-3",
       "name_en": "Rend and Tear",
       "icon": "ability_druid_swipe",
       "row": 6,
       "col": 3,
       "maxRanks": 5,
       "pointsRequired": 25,
       "prerequisite": "feral-combat-4-3",
       "arrow": "l2",
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases damage done by your melee abilities on Bleeding targets by 2%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases damage done by your melee abilities on Bleeding targets by 4%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases damage done by your melee abilities on Bleeding targets by 6%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases damage done by your melee abilities on Bleeding targets by 8%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases damage done by your melee abilities on Bleeding targets by 10%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "feral-combat-7-2",
       "name_en": "Berserk",
       "icon": "ability_druid_berserk",
       "row": 7,
       "col": 2,
       "maxRanks": 1,
       "pointsRequired": 30,
       "prerequisite": "feral-combat-5-2",
       "arrow": "l2",
       "kind": "actif",
       "skill": {
        "cost": null,
        "range": null,
        "castTime": "Instant",
        "cooldown": "3 min"
       },
       "costLine": "Instant | 3 min cooldown",
       "requires": [
        "Cat Form, Bear Form, Dire Bear Form"
       ],
       "ranks": [
        {
         "rank": 1,
         "text": "Causes your Mangle ability to strike up to 3 targets, removes its cooldown, and increases the critical strike chance of your Combo Point-generating abilities by 100%. Clears and grants immunity to Fear effects for the duration. Lasts 15 sec.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      }
     ],
     "removedFromClassic": [
      {
       "name_en": "Feral Aggression",
       "maxRanks": 5,
       "row": 1,
       "text": "Increases the Attack Power reduction of your Demoralizing Roar by 8% and the damage caused by your Ferocious Bite by 3%."
      },
      {
       "name_en": "Blood Frenzy",
       "maxRanks": 2,
       "row": 4,
       "text": "Your critical strikes from Cat Form abilities that add combo points  have a 50% chance to add an additional combo point."
      },
      {
       "name_en": "Faerie Fire (Feral)",
       "maxRanks": 1,
       "row": 5,
       "text": "Decrease the armor of the target by 175 for 40 sec.  While affected, the target cannot stealth or turn invisible."
      }
     ],
     "disputed": []
    },
    {
     "key": "restoration",
     "name_en": "Restoration",
     "name_fr": "Restauration",
     "icon": "spell_nature_healingtouch",
     "backgroundId": 282,
     "talents": [
      {
       "key": "restoration-1-2",
       "name_en": "Nature's Focus",
       "icon": "spell_nature_healingwavegreater",
       "row": 1,
       "col": 2,
       "maxRanks": 5,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Gives you a 14% chance to avoid interruption caused by damage while casting Arcane and Nature spells.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Gives you a 28% chance to avoid interruption caused by damage while casting Arcane and Nature spells.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Gives you a 42% chance to avoid interruption caused by damage while casting Arcane and Nature spells.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Gives you a 56% chance to avoid interruption caused by damage while casting Arcane and Nature spells.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Gives you a 70% chance to avoid interruption caused by damage while casting Arcane and Nature spells.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Gives you a 14% chance to avoid interruption caused by damage while casting the Healing Touch, Regrowth and Tranquility spells.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "restoration-1-3",
       "name_en": "Furor",
       "icon": "spell_holy_blessingofstamina",
       "row": 1,
       "col": 3,
       "maxRanks": 5,
       "pointsRequired": 0,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Gives you a 20% chance to gain 10 Rage when you shapeshift into Bear Form or Dire Bear Form. When you shift into Cat Form, you will regain 20% of the Energy you had when you were last in Cat Form, plus 2 Energy for each second you spent not in Bear Form, Cat Form, or Dire Bear Form, up to a maximum of 20 Energy.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Gives you a 40% chance to gain 10 Rage when you shapeshift into Bear Form or Dire Bear Form. When you shift into Cat Form, you will regain 40% of the Energy you had when you were last in Cat Form, plus 4 Energy for each second you spent not in Bear Form, Cat Form, or Dire Bear Form, up to a maximum of 40 Energy.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Gives you a 60% chance to gain 10 Rage when you shapeshift into Bear Form or Dire Bear Form. When you shift into Cat Form, you will regain 60% of the Energy you had when you were last in Cat Form, plus 6 Energy for each second you spent not in Bear Form, Cat Form, or Dire Bear Form, up to a maximum of 60 Energy.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Gives you a 80% chance to gain 10 Rage when you shapeshift into Bear Form or Dire Bear Form. When you shift into Cat Form, you will regain 80% of the Energy you had when you were last in Cat Form, plus 8 Energy for each second you spent not in Bear Form, Cat Form, or Dire Bear Form, up to a maximum of 80 Energy.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Gives you a 100% chance to gain 10 Rage when you shapeshift into Bear Form or Dire Bear Form. When you shift into Cat Form, you will regain 100% of the Energy you had when you were last in Cat Form, plus 10 Energy for each second you spent not in Bear Form, Cat Form, or Dire Bear Form, up to a maximum of 100 Energy.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Gives you 20% chance to gain 10 Rage when you shapeshift into Bear and Dire Bear Form or 40 Energy when you shapeshift into Cat Form.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "restoration-2-1",
       "name_en": "Naturalist",
       "icon": "spell_nature_healingtouch",
       "row": 2,
       "col": 1,
       "maxRanks": 5,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the cast time of your Healing Touch spell by 0.1 sec and increases all damage you deal by 1%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the cast time of your Healing Touch spell by 0.2 sec and increases all damage you deal by 2%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Reduces the cast time of your Healing Touch spell by 0.3 sec and increases all damage you deal by 3%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Reduces the cast time of your Healing Touch spell by 0.4 sec and increases all damage you deal by 4%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Reduces the cast time of your Healing Touch spell by 0.5 sec and increases all damage you deal by 5%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Reduces the cast time of your Healing Touch spell by 0.1 sec.",
       "classicRenamedFrom": "Improved Healing Touch",
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "restoration-2-2",
       "name_en": "Subtlety",
       "icon": "ability_eyeoftheowl",
       "row": 2,
       "col": 2,
       "maxRanks": 3,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the threat generated by your Nature and Arcane spells by 10%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the threat generated by your Nature and Arcane spells by 20%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Reduces the threat generated by your Nature and Arcane spells by 30%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Reduces the threat generated by your Healing spells by 4%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "restoration-2-3",
       "name_en": "Natural Shapeshifter",
       "icon": "spell_nature_wispsplode",
       "row": 2,
       "col": 3,
       "maxRanks": 3,
       "pointsRequired": 5,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the mana cost of all shapeshifting by 10%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the mana cost of all shapeshifting by 20%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Reduces the mana cost of all shapeshifting by 30%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "moved",
       "classicText": "Reduces the mana cost of all shapeshifting by 10%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "restoration-3-2",
       "name_en": "Reflection",
       "icon": "spell_frost_windwalkon",
       "row": 3,
       "col": 2,
       "maxRanks": 3,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Allows 17% of your Mana regeneration to continue while casting.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Allows 33% of your Mana regeneration to continue while casting.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Allows 50% of your Mana regeneration to continue while casting.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Allows 5% of your Mana regeneration to continue while casting.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "restoration-3-3",
       "name_en": "Gift of Nature",
       "icon": "spell_nature_protectionformnature",
       "row": 3,
       "col": 3,
       "maxRanks": 5,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the effect of all your healing spells by 2%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the effect of all your healing spells by 4%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the effect of all your healing spells by 6%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases the effect of all your healing spells by 8%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases the effect of all your healing spells by 10%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Increases the effect of all healing spells by 2%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "restoration-3-4",
       "name_en": "Gift of the Earthmother",
       "icon": "ability_druid_manatree",
       "row": 3,
       "col": 4,
       "maxRanks": 1,
       "pointsRequired": 10,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the global cooldown by 0.5 seconds on your Rejuvenation, Swiftmend, and Wild Growth spells.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "restoration-4-2",
       "name_en": "Tranquil Spirit",
       "icon": "spell_holy_elunesgrace",
       "row": 4,
       "col": 2,
       "maxRanks": 5,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces the mana cost of your Healing Touch and Tranquility spells by 2%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces the mana cost of your Healing Touch and Tranquility spells by 4%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Reduces the mana cost of your Healing Touch and Tranquility spells by 6%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Reduces the mana cost of your Healing Touch and Tranquility spells by 8%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Reduces the mana cost of your Healing Touch and Tranquility spells by 10%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "Reduces the mana cost of your Healing Touch and Tranquility spells by 2%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "restoration-4-3",
       "name_en": "Improved Rejuvenation",
       "icon": "spell_nature_rejuvenation",
       "row": 4,
       "col": 3,
       "maxRanks": 3,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the effect of your Rejuvenation spell by 5%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the effect of your Rejuvenation spell by 10%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the effect of your Rejuvenation spell by 15%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "Increases the effect of your Rejuvenation spell by 5%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "restoration-4-4",
       "name_en": "Swiftmend",
       "icon": "inv_relics_idolofrejuvenation",
       "row": 4,
       "col": 4,
       "maxRanks": 1,
       "pointsRequired": 15,
       "prerequisite": null,
       "arrow": null,
       "kind": "actif",
       "skill": {
        "cost": "162 Mana",
        "range": "40",
        "castTime": "Instant",
        "cooldown": "15 sec"
       },
       "costLine": "162 Mana | 40 yd range | Instant | 15 sec cooldown",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Instantly heals a target with an active Rejuvenation or Regrowth effect for an amount equal to the full duration of the periodic effect of one of those spells.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "an amount equal to 12 sec. of Rejuvenation or 18 sec. of Regrowth.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "restoration-5-1",
       "name_en": "Nature's Swiftness",
       "icon": "spell_nature_ravenform",
       "row": 5,
       "col": 1,
       "maxRanks": 1,
       "pointsRequired": 20,
       "prerequisite": "restoration-2-1",
       "arrow": "l3",
       "kind": "actif",
       "skill": {
        "cost": null,
        "range": null,
        "castTime": "Instant",
        "cooldown": "3 min"
       },
       "costLine": "Instant | 3 min cooldown",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "When activated, your next Nature spell becomes an instant cast spell.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "When activated, your next Nature spell becomes an instant cast spell.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "restoration-5-2",
       "name_en": "Living Spirit",
       "icon": "spell_nature_giftofthewild",
       "row": 5,
       "col": 2,
       "maxRanks": 3,
       "pointsRequired": 20,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases your Spirit by 5%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases your Spirit by 10%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases your Spirit by 15%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [
        {
         "field": "maxRanks",
         "foreverTalents": "3",
         "wowtbc": "5"
        }
       ],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "restoration-5-4",
       "name_en": "Improved Tranquility",
       "icon": "spell_nature_tranquility",
       "row": 5,
       "col": 4,
       "maxRanks": 2,
       "pointsRequired": 20,
       "prerequisite": null,
       "arrow": null,
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Reduces threat caused by Tranquility by 50% and its cooldown by 30%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Reduces threat caused by Tranquility by 100% and its cooldown by 60%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "changed",
       "classicText": "Reduces threat caused by Tranquility by 50%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator",
        "wowhead-forever-talent-calc"
       ]
      },
      {
       "key": "restoration-6-3",
       "name_en": "Improved Regrowth",
       "icon": "spell_nature_resistnature",
       "row": 6,
       "col": 3,
       "maxRanks": 5,
       "pointsRequired": 25,
       "prerequisite": "restoration-4-3",
       "arrow": "l2",
       "kind": "passif",
       "skill": null,
       "costLine": null,
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Increases the critical effect chance of your Regrowth spell by 10%.",
         "observed": true
        },
        {
         "rank": 2,
         "text": "Increases the critical effect chance of your Regrowth spell by 20%.",
         "observed": true
        },
        {
         "rank": 3,
         "text": "Increases the critical effect chance of your Regrowth spell by 30%.",
         "observed": true
        },
        {
         "rank": 4,
         "text": "Increases the critical effect chance of your Regrowth spell by 40%.",
         "observed": true
        },
        {
         "rank": 5,
         "text": "Increases the critical effect chance of your Regrowth spell by 50%.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "same",
       "classicText": "Increases the critical effect chance of your Regrowth spell by 10%.",
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      },
      {
       "key": "restoration-7-2",
       "name_en": "Wild Growth",
       "icon": "ability_druid_flourish",
       "row": 7,
       "col": 2,
       "maxRanks": 1,
       "pointsRequired": 30,
       "prerequisite": "restoration-5-2",
       "arrow": "l2",
       "kind": "actif",
       "skill": {
        "cost": "550 Mana",
        "range": "40",
        "castTime": "Instant",
        "cooldown": "6 sec"
       },
       "costLine": "550 Mana | 40 yd range | Instant | 6 sec cooldown",
       "requires": [],
       "ranks": [
        {
         "rank": 1,
         "text": "Heals the target and their party for 285 over 7 sec. Party members must be within 43 yards of target. The amount healed is applied quickly at first, and slows down as Wild Growth reaches its full duration.",
         "observed": true
        }
       ],
       "rankNote": null,
       "extra": null,
       "fullyObserved": true,
       "changeFromClassic": "new",
       "classicText": null,
       "classicRenamedFrom": null,
       "divergences": [],
       "presentIn": [
        "forever-talents-releve",
        "wowtbc-forever-calculator"
       ]
      }
     ],
     "removedFromClassic": [
      {
       "name_en": "Improved Mark of the Wild",
       "maxRanks": 5,
       "row": 1,
       "text": "Increases the effects of your Mark of the Wild and Gift of the Wild spells by 7%."
      },
      {
       "name_en": "Improved Enrage",
       "maxRanks": 2,
       "row": 2,
       "text": "<!--sp436895:0-->The Enrage ability now instantly generates 5 Rage.<!--sp436895-->"
      }
     ],
     "disputed": []
    }
   ]
  }
 ]
}
;
window.TALENT_FR={
 "version": 1,
 "updatedAt": "2026-09-19",
 "method": "Les noms français viennent du client français officiel de World of Warcraft. Ils sont relevés sur les fichiers publics des calculateurs de talents de Wowhead, en comparant la version anglaise et la version française de Classic, de Burning Crusade puis de Wrath of the Lich King, dans cet ordre : beaucoup de talents que Forever présente comme nouveaux existent en réalité dans une extension ultérieure. Chaque nom conserve l’identifiant du sort qui le porte, pour être vérifiable. Les talents qui n’existent dans aucune de ces trois extensions, et ceux que Forever a renommés, n’ont aucun nom français officiel : leur traduction est éditoriale et signalée comme telle. Quelques-uns de ces noms éditoriaux reprennent tout de même un nom que Blizzard a donné en français ailleurs — à une extension plus récente, ou à un sort qui ne figure dans aucun arbre de talents et que ce relevé ne pouvait donc pas atteindre ; ils ont été cherchés fiche par fiche sur le site français de Wowhead et leur note cite le sort d’origine. Les textes d’infobulle réécrits par Forever sont traduits par nos soins.",
 "glossary": {
  "trees": {
   "Arms": "Armes",
   "Fury": "Fureur",
   "Protection": "Protection",
   "Holy": "Sacré",
   "Retribution": "Vindicte",
   "Beast Mastery": "Maîtrise des bêtes",
   "Marksmanship": "Précision",
   "Survival": "Survie",
   "Assassination": "Assassinat",
   "Combat": "Combat",
   "Subtlety": "Finesse",
   "Discipline": "Discipline",
   "Shadow Magic": "Ombre",
   "Elemental Combat": "Élémentaire",
   "Enhancement": "Amélioration",
   "Restoration": "Restauration",
   "Arcane": "Arcanes",
   "Fire": "Feu",
   "Frost": "Givre",
   "Affliction": "Affliction",
   "Demonology": "Démonologie",
   "Destruction": "Destruction",
   "Balance": "Équilibre",
   "Feral Combat": "Combat farouche"
  },
  "resources": {
   "Rage": "de rage",
   "rage": "de rage",
   "Mana": "de mana",
   "Energy": "d’énergie"
  },
  "ranges": {
   "Melee": "Corps à corps",
   "8-35": "8 à 35 m",
   "8 - 25": "8 à 25 m"
  },
  "castTimes": {
   "Instant": "Instantané",
   "Channeled": "Canalisé",
   "1.5 sec cast": "1,5 s d’incantation",
   "2.5 sec cast": "2,5 s d’incantation",
   "4 sec cast": "4 s d’incantation",
   "6 sec cast": "6 s d’incantation",
   "1.5 sec": "1,5 s",
   "2.5 sec": "2,5 s"
  },
  "cooldowns": {
   "sec": "s",
   "min": "min"
  },
  "requires": {
   "Battle Stance": "Posture de combat",
   "Defensive Stance": "Posture défensive",
   "Shields": "Boucliers",
   "Level 40": "Niveau 40",
   "Ranged Weapon": "Arme à distance",
   "Melee Weapon": "Arme de mêlée",
   "Water Totem": "Totem d’eau",
   "Soul Shard": "Fragment d’âme",
   "Bear Form, Dire Bear Form": "Forme d’ours, forme d’ours redoutable",
   "Bear Form, Dire Bear Form (bear part); Requires Cat Form (cat part)": "Forme d’ours ou d’ours redoutable (effet d’ours) ; forme de félin (effet de félin)",
   "Cat Form, Bear Form, Dire Bear Form": "Forme de félin, forme d’ours, forme d’ours redoutable"
  }
 },
 "talents": {
  "guerrier/arms-1-1": {
   "name": "Frappe héroïque améliorée",
   "nameSource": "officiel",
   "rank1": "Réduit de 1 point le coût en rage de votre technique Frappe héroïque.",
   "classic": "Réduit le coût en rage de votre technique Frappe héroïque de 1 points.",
   "spell": 12282,
   "textSource": "editorial",
   "nameBranch": "classic"
  },
  "guerrier/arms-1-2": {
   "name": "Déviation",
   "nameSource": "officiel",
   "rank1": "Augmente de 1% vos chances de Parer.",
   "classic": "Augmente de 1% vos chances de Parer.",
   "spell": 16462,
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "guerrier/arms-1-3": {
   "name": "Pourfendre amélioré",
   "nameSource": "officiel",
   "rank1": "Augmente de 12% les points de dégâts infligés par la technique Pourfendre.",
   "classic": "Augmente de 15% les points de dégâts infligés par la technique Pourfendre.",
   "spell": 12286,
   "textSource": "officiel-chiffre",
   "nameBranch": "classic"
  },
  "guerrier/arms-2-1": {
   "name": "Charge améliorée",
   "nameSource": "officiel",
   "rank1": "Augmente de 3 la quantité de rage générée par votre technique Charge.",
   "classic": "Augmente la quantité de Rage générée par votre technique Charge de 3.",
   "spell": 12285,
   "textSource": "editorial",
   "nameBranch": "classic"
  },
  "guerrier/arms-2-2": {
   "name": "Maîtrise tactique",
   "nameSource": "adapte",
   "rank1": "Maîtrise tactique vous fait conserver jusqu’à 3 points de rage supplémentaires lorsque vous changez de posture.",
   "classic": "Vous conservez jusqu'à 5 de vos points de rage lorsque vous changez de posture.",
   "note": "Forever a renommé ce talent : le client français ne connaît que « Maîtrise tactique » (anciennement « Tactical Mastery »).",
   "spell": 12295,
   "textSource": "editorial",
   "nameBranch": "classic"
  },
  "guerrier/arms-2-4": {
   "name": "Fulgurance améliorée",
   "nameSource": "officiel",
   "rank1": "Augmente de 25% vos chances d'infliger un coup critique avec la technique Fulgurance.",
   "classic": "Augmente de 25% vos chances d'infliger un coup critique avec la technique Fulgurance.",
   "spell": 12290,
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "guerrier/arms-3-2": {
   "name": "Maîtrise de la Rage",
   "nameSource": "officiel",
   "rank1": "Génère 1 point de rage toutes les 3 sec en combat et réduit de 30% la déperdition de rage hors combat.",
   "classic": "Augmente de 30% le temps nécessaire au processus de déperdition des points de rage lorsque vous cessez le combat.",
   "spell": 12296,
   "textSource": "editorial",
   "nameBranch": "classic"
  },
  "guerrier/arms-3-3": {
   "name": "Blessures profondes",
   "nameSource": "officiel",
   "rank1": "Vos coups critiques font saigner l’adversaire et lui infligent 20% des points de dégâts moyens de votre arme de mêlée en 12 sec.",
   "classic": "Vos coups critiques font saigner l'adversaire et lui infligent 20% des points de dégâts moyens de votre arme en 12 sec.",
   "spell": 12834,
   "textSource": "editorial",
   "nameBranch": "classic"
  },
  "guerrier/arms-4-1": {
   "name": "Frappe perforante",
   "nameSource": "adapte",
   "rank1": "Une attaque brutale qui inflige 40% des points de dégâts de l’arme. Inflige 80% de points de dégâts d’arme supplémentaires aux géants, aux draconiens et aux cibles montées, qui sont alors désarçonnées.",
   "textSource": "editorial"
  },
  "guerrier/arms-4-2": {
   "name": "Spécialisation Arme 2M",
   "nameSource": "officiel",
   "rank1": "Augmente de 1% les points de dégâts que vous infligez avec les armes à deux mains.",
   "classic": "Augmente de 1% les points de dégâts que vous infligez avec les armes à deux mains.",
   "spell": 12163,
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "guerrier/arms-4-3": {
   "name": "Empaler",
   "nameSource": "officiel",
   "rank1": "Augmente de 10% les points de dégâts supplémentaires infligés par vos coups critiques.",
   "classic": "Augmente de 10% les points de dégâts supplémentaires infligés par vos coups critiques, lorsque vous utilisez vos techniques en postures de combat, défensive et berserker.",
   "spell": 16493,
   "textSource": "editorial",
   "nameBranch": "classic"
  },
  "guerrier/arms-5-1": {
   "name": "Frisson sanglant",
   "nameSource": "adapte",
   "rank1": "Vos attaques de mêlée contre une cible affectée par votre Pourfendre ont 2% de chances d’activer votre technique Fulgurance pour 1 attaque sur votre cible actuelle. Dure 6 sec.",
   "ranks": [
    "Vos attaques de mêlée contre une cible affectée par votre Pourfendre ont 2% de chances d’activer votre technique Fulgurance pour 1 attaque sur votre cible actuelle. Dure 6 sec.",
    "Vos attaques de mêlée contre une cible affectée par votre Pourfendre ont 4% de chances d’activer votre technique Fulgurance pour 1 attaque sur votre cible actuelle. Dure 6 sec.",
    "Vos attaques de mêlée contre une cible affectée par votre Pourfendre ont 6% de chances d’activer votre technique Fulgurance pour 1 attaque sur votre cible actuelle. Dure 6 sec.",
    "Vos attaques de mêlée contre une cible affectée par votre Pourfendre ont 8% de chances d’activer votre technique Fulgurance pour 1 attaque sur votre cible actuelle. Dure 6 sec.",
    "Vos attaques de mêlée contre une cible affectée par votre Pourfendre ont 10% de chances d’activer votre technique Fulgurance pour 1 attaque sur votre cible actuelle. Dure 6 sec."
   ],
   "textSource": "editorial"
  },
  "guerrier/arms-5-2": {
   "name": "Attaques circulaires",
   "nameSource": "officiel",
   "rank1": "Vos 5 prochaines attaques de mêlée touchent un adversaire proche supplémentaire.",
   "classic": "Vos 5 prochaines attaques de mêlée touchent un adversaire proche supplémentaire.",
   "spell": 12292,
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "guerrier/arms-5-3": {
   "name": "Maître d’armes",
   "nameSource": "adapte",
   "rank1": "Confère un bénéfice à vos attaques d’arme de mêlée, selon l’arme employée.\n\nHache et arme d’hast : augmente de 1% vos chances d’infliger un coup critique.\n\nMasse et bâton : vos attaques ignorent 3% de l’armure de votre cible.\n\nÉpée : vos attaques de mêlée réussies ont 1% de chances de déclencher une attaque supplémentaire sur la cible.",
   "ranks": [
    "Confère un bénéfice à vos attaques d’arme de mêlée, selon l’arme employée.\n\nHache et arme d’hast : augmente de 1% vos chances d’infliger un coup critique.\n\nMasse et bâton : vos attaques ignorent 3% de l’armure de votre cible.\n\nÉpée : vos attaques de mêlée réussies ont 1% de chances de déclencher une attaque supplémentaire sur la cible.",
    "Confère un bénéfice à vos attaques d’arme de mêlée, selon l’arme employée.\n\nHache et arme d’hast : augmente de 2% vos chances d’infliger un coup critique.\n\nMasse et bâton : vos attaques ignorent 6% de l’armure de votre cible.\n\nÉpée : vos attaques de mêlée réussies ont 2% de chances de déclencher une attaque supplémentaire sur la cible.",
    "Confère un bénéfice à vos attaques d’arme de mêlée, selon l’arme employée.\n\nHache et arme d’hast : augmente de 3% vos chances d’infliger un coup critique.\n\nMasse et bâton : vos attaques ignorent 9% de l’armure de votre cible.\n\nÉpée : vos attaques de mêlée réussies ont 3% de chances de déclencher une attaque supplémentaire sur la cible.",
    "Confère un bénéfice à vos attaques d’arme de mêlée, selon l’arme employée.\n\nHache et arme d’hast : augmente de 4% vos chances d’infliger un coup critique.\n\nMasse et bâton : vos attaques ignorent 12% de l’armure de votre cible.\n\nÉpée : vos attaques de mêlée réussies ont 4% de chances de déclencher une attaque supplémentaire sur la cible.",
    "Confère un bénéfice à vos attaques d’arme de mêlée, selon l’arme employée.\n\nHache et arme d’hast : augmente de 5% vos chances d’infliger un coup critique.\n\nMasse et bâton : vos attaques ignorent 15% de l’armure de votre cible.\n\nÉpée : vos attaques de mêlée réussies ont 5% de chances de déclencher une attaque supplémentaire sur la cible."
   ],
   "textSource": "editorial"
  },
  "guerrier/arms-6-1": {
   "name": "Heurtoir amélioré",
   "nameSource": "officiel",
   "rank1": "Réduit de 0,25 sec le temps de recharge global et le temps d’incantation de votre technique Heurtoir. De plus, Heurtoir n’interrompt plus le cycle d’attaque de votre arme de mêlée.",
   "classic": "Réduit le temps d'incantation de votre technique Heurtoir de 0.1 sec.",
   "spell": 12862,
   "textSource": "editorial",
   "nameBranch": "wotlk"
  },
  "guerrier/arms-6-3": {
   "name": "Brise-genou amélioré",
   "nameSource": "officiel",
   "rank1": "Confère à votre technique Brise-genou 5% de chances d'immobiliser votre cible pendant 5 sec.",
   "classic": "Confère à votre technique Brise-genou 5% de chances d'immobiliser votre cible pendant 5 sec.",
   "spell": 12289,
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "guerrier/arms-7-2": {
   "name": "Frappe mortelle",
   "nameSource": "officiel",
   "rank1": "Une attaque vicieuse qui inflige les points de dégâts de l'arme plus 85 et blesse la cible. L'effet des sorts de soins dont elle est la cible est réduit de 50% pendant 10 sec.",
   "classic": "Une attaque vicieuse qui inflige les points de dégâts de l'arme plus 85 et blesse la cible. L'effet des sorts de soins dont elle est la cible est réduit de 50% pendant 10 sec.",
   "spell": 12294,
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "guerrier/fury-1-2": {
   "name": "Voix tonitruante",
   "nameSource": "officiel",
   "spell": 12321,
   "classic": "Augmente la zone d’effet et la durée de Cri de guerre et Cri démoralisant de 10 %.",
   "nameBranch": "classic",
   "ranks": [
    "Augmente de 10% le rayon d’action de vos techniques Cri de guerre et Cri démoralisant.",
    "Augmente de 20% le rayon d’action de vos techniques Cri de guerre et Cri démoralisant.",
    "Augmente de 30% le rayon d’action de vos techniques Cri de guerre et Cri démoralisant.",
    "Augmente de 40% le rayon d’action de vos techniques Cri de guerre et Cri démoralisant.",
    "Augmente de 50% le rayon d’action de vos techniques Cri de guerre et Cri démoralisant."
   ],
   "rank1": "Augmente de 10% le rayon d’action de vos techniques Cri de guerre et Cri démoralisant.",
   "textSource": "editorial"
  },
  "guerrier/fury-1-3": {
   "name": "Cruauté",
   "nameSource": "officiel",
   "spell": 12320,
   "classic": "Augmente vos chances d'infliger un coup critique avec les armes de mêlée de 1%.",
   "nameBranch": "classic",
   "rank1": "Augmente de 1% vos chances d’infliger un coup critique avec vos attaques de mêlée.",
   "textSource": "editorial"
  },
  "guerrier/fury-2-2": {
   "name": "Volonté de fer",
   "nameSource": "officiel",
   "spell": 12300,
   "classic": "Augmente de 3% vos chances de résister aux effets d'étourdissements et aux charmes.",
   "note": "Nom repris d’un talent homonyme du client français (Classic), trouvé hors de l’arbre où Forever le place.",
   "nameBranch": "classic",
   "rank1": "Réduit de 3% la durée des effets d’étourdissement et de peur qui vous sont infligés.",
   "textSource": "editorial"
  },
  "guerrier/fury-2-3": {
   "name": "Colère déchaînée",
   "nameSource": "officiel",
   "spell": 12322,
   "classic": "Donne 8% de chances de gagner un point de rage supplémentaire quand vous infligez des dégâts en mêlée avec une arme.",
   "nameBranch": "classic",
   "ranks": [
    "Vous donne 12% de chances de générer 1 point de rage supplémentaire lorsque vous infligez des dégâts de mêlée avec une arme. Cet effet passe à 2 points de rage avec les armes à deux mains.",
    "Vous donne 24% de chances de générer 1 point de rage supplémentaire lorsque vous infligez des dégâts de mêlée avec une arme. Cet effet passe à 2 points de rage avec les armes à deux mains.",
    "Vous donne 36% de chances de générer 1 point de rage supplémentaire lorsque vous infligez des dégâts de mêlée avec une arme. Cet effet passe à 2 points de rage avec les armes à deux mains.",
    "Vous donne 48% de chances de générer 1 point de rage supplémentaire lorsque vous infligez des dégâts de mêlée avec une arme. Cet effet passe à 2 points de rage avec les armes à deux mains.",
    "Vous donne 60% de chances de générer 1 point de rage supplémentaire lorsque vous infligez des dégâts de mêlée avec une arme. Cet effet passe à 2 points de rage avec les armes à deux mains."
   ],
   "rank1": "Vous donne 12% de chances de générer 1 point de rage supplémentaire lorsque vous infligez des dégâts de mêlée avec une arme. Cet effet passe à 2 points de rage avec les armes à deux mains.",
   "textSource": "editorial"
  },
  "guerrier/fury-3-1": {
   "name": "Enchaînement amélioré",
   "nameSource": "officiel",
   "spell": 12329,
   "classic": "Augmente le bonus de dégâts infligé par votre technique Enchaînement de 40%.",
   "nameBranch": "classic",
   "rank1": "Réduit de 1 le coût en rage de votre technique Enchaînement.",
   "textSource": "editorial"
  },
  "guerrier/fury-3-2": {
   "name": "Hurlement perçant",
   "nameSource": "officiel",
   "spell": 12323,
   "classic": "Tous les ennemis à proximité du guerrier sont hébétés, et leurs vitesse de déplacement est réduite de 50% pendant 6 sec.",
   "nameBranch": "classic",
   "rank1": "Tous les ennemis proches sont hébétés, leur vitesse de déplacement étant réduite de 50% pendant 6 sec.",
   "textSource": "editorial"
  },
  "guerrier/fury-3-3": {
   "name": "Folie sanguinaire",
   "nameSource": "officiel",
   "spell": 16487,
   "classic": "Régénère 1% de votre nombre total de points de vie sur 6 sec après avoir reçu un coup critique.",
   "nameBranch": "classic",
   "ranks": [
    "Régénère 1% de votre total de points de vie en 6 sec après avoir subi un coup critique, infligé des dégâts avec Sanguinaire, ou encaissé plus de 20% de votre maximum de points de vie en une seule attaque.",
    "Régénère 2% de votre total de points de vie en 6 sec après avoir subi un coup critique, infligé des dégâts avec Sanguinaire, ou encaissé plus de 20% de votre maximum de points de vie en une seule attaque.",
    "Régénère 3% de votre total de points de vie en 6 sec après avoir subi un coup critique, infligé des dégâts avec Sanguinaire, ou encaissé plus de 20% de votre maximum de points de vie en une seule attaque."
   ],
   "rank1": "Régénère 1% de votre total de points de vie en 6 sec après avoir subi un coup critique, infligé des dégâts avec Sanguinaire, ou encaissé plus de 20% de votre maximum de points de vie en une seule attaque.",
   "textSource": "editorial"
  },
  "guerrier/fury-4-1": {
   "name": "Spécialisation Ambidextrie",
   "nameSource": "officiel",
   "spell": 23584,
   "classic": "Augmente de 5% les points de dégâts infligés par l'arme que vous utilisez en main gauche.",
   "nameBranch": "classic",
   "rank1": "Augmente de 5% les points de dégâts de votre arme de main gauche, de 20% la rage qu’elle génère et de 2% vos chances de toucher avec elle.",
   "textSource": "editorial"
  },
  "guerrier/fury-4-3": {
   "name": "Enrager",
   "nameSource": "officiel",
   "spell": 12317,
   "classic": "Vous confère un bonus aux dégâts en mêlée de 5% pendant 12 sec pour un maximum de 12 coups lorsque vous êtes victime d'un coup critique.",
   "nameBranch": "classic",
   "rank1": "Vous donne 30% de chances d’infliger 2% de dégâts physiques supplémentaires pendant 12 sec après avoir subi une attaque.",
   "textSource": "editorial"
  },
  "guerrier/fury-4-4": {
   "name": "Exécution améliorée",
   "nameSource": "officiel",
   "spell": 20502,
   "classic": "Réduit le coût en rage de votre technique Exécution de 2.",
   "nameBranch": "classic",
   "ranks": [
    "Réduit de 3 le coût en rage de votre technique Exécution.",
    "Réduit de 5 le coût en rage de votre technique Exécution."
   ],
   "rank1": "Réduit de 3 le coût en rage de votre technique Exécution.",
   "textSource": "editorial"
  },
  "guerrier/fury-5-2": {
   "name": "Souhait mortel",
   "nameSource": "officiel",
   "spell": 12328,
   "classic": "Lorsque cette technique est activée, elle augmente les dégâts physiques que vous infligez de 20% et vous rend insensible aux effets de Peur. En contrepartie, votre armure et toutes vos résistances sont réduites de 20%. Dure 30 sec.",
   "nameBranch": "classic",
   "rank1": "Une fois activée, augmente de 20% les dégâts physiques que vous infligez et vous rend insensible aux effets de peur, mais augmente de 5% tous les dégâts que vous subissez. Dure 30 sec.",
   "textSource": "editorial"
  },
  "guerrier/fury-5-4": {
   "name": "Interception améliorée",
   "nameSource": "officiel",
   "spell": 20504,
   "classic": "Réduit le temps de recharge de votre technique Interception de 5 sec.",
   "rank1": "Réduit le temps de recharge de votre technique Interception de 5 sec.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "guerrier/fury-6-1": {
   "name": "Rage berserker améliorée",
   "nameSource": "officiel",
   "spell": 20500,
   "classic": "La technique Rage berserker génère 5 points de rage quand elle est utilisée.",
   "nameBranch": "classic",
   "rank1": "Votre technique Rage berserker génère instantanément 5 points de rage et a 50% de chances de dissiper tous les effets qui entravent vos déplacements lorsqu’elle est activée.",
   "textSource": "editorial"
  },
  "guerrier/fury-6-3": {
   "name": "Rafale",
   "nameSource": "officiel",
   "spell": 12319,
   "classic": "Lorsque vous infligez un coup critique en mêlée, augmente votre vitesse d'attaque de 10% pour les 3 prochains coups.",
   "nameBranch": "classic",
   "ranks": [
    "Augmente de 5% votre vitesse d’attaque au corps à corps pour vos 3 prochains coups après un coup critique de mêlée.",
    "Augmente de 10% votre vitesse d’attaque pour vos 3 prochains coups après un coup critique de mêlée.",
    "Augmente de 15% votre vitesse d’attaque pour vos 3 prochains coups après un coup critique de mêlée.",
    "Augmente de 20% votre vitesse d’attaque pour vos 3 prochains coups après un coup critique de mêlée.",
    "Augmente de 25% votre vitesse d’attaque pour vos 3 prochains coups après un coup critique de mêlée."
   ],
   "rank1": "Augmente de 5% votre vitesse d’attaque au corps à corps pour vos 3 prochains coups après un coup critique de mêlée.",
   "textSource": "editorial"
  },
  "guerrier/fury-7-2": {
   "name": "Sanguinaire",
   "nameSource": "officiel",
   "spell": 23881,
   "classic": "Attaque instantanément la cible, infligeant des dégâts égaux à 45% de votre puissance d'attaque. De plus, les 5 prochaines attaques de mêlée réussies rendent 10 points de vie. Cet effet dure 8 sec.",
   "nameBranch": "classic",
   "rank1": "Attaque instantanément la cible, infligeant des points de dégâts égaux à 35% de votre puissance d’attaque plus 30, et augmente votre vitesse de déplacement de 10% pendant 10 sec.",
   "textSource": "editorial"
  },
  "guerrier/protection-1-2": {
   "name": "Spécialisation Bouclier",
   "nameSource": "officiel",
   "spell": 12298,
   "classic": "Augmente de 1% vos chances de bloquer les attaques avec votre bouclier, avec 20% de chances d'obtenir 1 point de Rage quand vous bloquez une attaque.",
   "nameBranch": "classic",
   "ranks": [
    "Augmente de 1% vos chances de bloquer les attaques avec votre bouclier et vous donne 20% de chances de générer 5 points de rage lorsque vous bloquez.",
    "Augmente de 2% vos chances de bloquer les attaques avec votre bouclier et vous donne 40% de chances de générer 5 points de rage lorsque vous bloquez.",
    "Augmente de 3% vos chances de bloquer les attaques avec votre bouclier et vous donne 60% de chances de générer 5 points de rage lorsque vous bloquez.",
    "Augmente de 4% vos chances de bloquer les attaques avec votre bouclier et vous donne 80% de chances de générer 5 points de rage lorsque vous bloquez.",
    "Augmente de 5% vos chances de bloquer les attaques avec votre bouclier et vous donne 100% de chances de générer 5 points de rage lorsque vous bloquez."
   ],
   "rank1": "Augmente de 1% vos chances de bloquer les attaques avec votre bouclier et vous donne 20% de chances de générer 5 points de rage lorsque vous bloquez.",
   "textSource": "editorial"
  },
  "guerrier/protection-1-3": {
   "name": "Anticipation",
   "nameSource": "officiel",
   "spell": 12297,
   "classic": "Augmente votre Défense de 2.",
   "nameBranch": "classic",
   "ranks": [
    "Augmente votre compétence Défense de 4.",
    "Augmente votre compétence Défense de 8.",
    "Augmente votre compétence Défense de 12.",
    "Augmente votre compétence Défense de 16.",
    "Augmente votre compétence Défense de 20."
   ],
   "rank1": "Augmente votre compétence Défense de 4.",
   "textSource": "editorial"
  },
  "guerrier/protection-2-1": {
   "name": "Rage sanguinaire améliorée",
   "nameSource": "officiel",
   "spell": 12301,
   "classic": "Augmente le nombre de points de rage instantanés générés par votre technique Rage sanguinaire de 2.",
   "nameBranch": "classic",
   "rank1": "Augmente de 25% toute la rage générée par votre technique Rage sanguinaire.",
   "textSource": "editorial"
  },
  "guerrier/protection-2-3": {
   "name": "Résistance",
   "nameSource": "officiel",
   "spell": 12299,
   "classic": "Augmente le score d'armure des objets de 2%.",
   "rank1": "Augmente le score d'armure des objets de 2%.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "guerrier/protection-2-4": {
   "name": "Coup de tonnerre amélioré",
   "nameSource": "officiel",
   "spell": 12287,
   "classic": "Réduit le coup de votre technique Coup de tonnerre de 1 points de rage.",
   "nameBranch": "wotlk",
   "rank1": "Réduit de 2 le coût en rage de votre technique Coup de tonnerre.",
   "textSource": "editorial"
  },
  "guerrier/protection-3-1": {
   "name": "Dernier rempart",
   "nameSource": "officiel",
   "spell": 12975,
   "classic": "Activée, cette technique vous accorde pendant 20 secondes 30% de votre maximum de points de vie en plus. Lorsque l'effet expire, les points de vie sont perdus.",
   "nameBranch": "classic",
   "rank1": "Une fois activée, cette technique vous accorde temporairement 30% de votre maximum de points de vie pendant 20 sec. À la fin de l’effet, ces points de vie sont perdus.",
   "textSource": "editorial"
  },
  "guerrier/protection-3-3": {
   "name": "Vengeance améliorée",
   "nameSource": "officiel",
   "spell": 12797,
   "classic": "Confère 15% de chances à votre technique Vengeance d'étourdir la cible pendant 3 sec.",
   "nameBranch": "classic",
   "ranks": [
    "Augmente de 20% les points de dégâts infligés par votre technique Vengeance.",
    "Augmente de 40% les points de dégâts infligés par votre technique Vengeance.",
    "Augmente de 60% les points de dégâts infligés par votre technique Vengeance."
   ],
   "rank1": "Augmente de 20% les points de dégâts infligés par votre technique Vengeance.",
   "textSource": "editorial"
  },
  "guerrier/protection-3-4": {
   "name": "Défi",
   "nameSource": "officiel",
   "spell": 12303,
   "classic": "Augmente de 3% la menace générée par vos attaques lorsque vous êtes en posture défensive.",
   "nameBranch": "classic",
   "rank1": "Augmente de 5% supplémentaires toute la menace générée en posture défensive lorsqu’un bouclier est équipé.",
   "textSource": "editorial"
  },
  "guerrier/protection-4-1": {
   "name": "Fracasser armure amélioré",
   "nameSource": "officiel",
   "spell": 12308,
   "classic": "Réduit le coût de la technique Fracasser armure de 1 points de rage.",
   "nameBranch": "classic",
   "rank1": "Réduit de 1 le coût en rage de votre technique Fracasser armure.",
   "textSource": "editorial"
  },
  "guerrier/protection-4-2": {
   "name": "Désarmement amélioré",
   "nameSource": "officiel",
   "spell": 12313,
   "classic": "Augmente la durée de la technique Désarmement de 1 secondes.",
   "nameBranch": "classic",
   "rank1": "Réduit de 7 sec le temps de recharge de votre technique Désarmement.",
   "textSource": "editorial"
  },
  "guerrier/protection-5-1": {
   "name": "Mur protecteur amélioré",
   "nameSource": "officiel",
   "spell": 12312,
   "classic": "Augmente la durée de la technique Mur protecteur de 3 secondes.",
   "nameBranch": "classic",
   "rank1": "Réduit de 5,5 min le temps de recharge de votre technique Mur protecteur.",
   "textSource": "editorial"
  },
  "guerrier/protection-5-2": {
   "name": "Bourrasque",
   "nameSource": "officiel",
   "spell": 12809,
   "classic": "Etourdit l'adversaire pendant 5 sec.",
   "nameBranch": "classic",
   "rank1": "Étourdit la cible pendant 5 sec.",
   "textSource": "editorial"
  },
  "guerrier/protection-5-3": {
   "name": "Coup de bouclier amélioré",
   "nameSource": "officiel",
   "spell": 12311,
   "classic": "Confère à votre technique Coup de bouclier 50% de chances de rendre la cible muette pendant 3 sec.",
   "rank1": "Confère à votre technique Coup de bouclier 50% de chances de rendre la cible muette pendant 3 sec.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "guerrier/protection-7-2": {
   "name": "Heurt de bouclier",
   "nameSource": "officiel",
   "spell": 23922,
   "classic": "Donne un coup de bouclier à la cible, infligeant 225 à 235 points de dégâts modifiés par votre valeur de blocage, et avec 50 % de chances de dissiper 1 effet de magie sur la cible. Génère aussi un niveau élevé de menace.",
   "nameBranch": "classic",
   "rank1": "Donne un coup de bouclier à la cible, infligeant 421 à 439 points de dégâts augmentés par votre valeur de blocage, et avec 50% de chances de dissiper 1 effet de magie sur la cible. Génère un niveau de menace très élevé.",
   "textSource": "editorial"
  },
  "paladin/holy-1-2": {
   "name": "Force divine",
   "nameSource": "officiel",
   "spell": 20262,
   "classic": "Augmente votre Force de 2%.",
   "rank1": "Augmente votre Force de 2%.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "paladin/holy-1-3": {
   "name": "Intelligence divine",
   "nameSource": "officiel",
   "spell": 20257,
   "classic": "Augmente votre total d'Intelligence de 2%.",
   "rank1": "Augmente votre total d'Intelligence de 2%.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "paladin/holy-2-1": {
   "name": "Lumière guérisseuse",
   "nameSource": "officiel",
   "spell": 20237,
   "classic": "Augmente le nombre de points de vie rendus par vos sorts Lumière sacrée et Eclair lumineux de 4%.",
   "nameBranch": "classic",
   "rank1": "Augmente de 4% le nombre de points de vie rendus par vos sorts Lumière sacrée, Éclair lumineux et Horion sacré.",
   "textSource": "editorial"
  },
  "paladin/holy-2-2": {
   "name": "Focalisation spirituelle",
   "nameSource": "officiel",
   "spell": 20205,
   "classic": "Confère 14% de chances à l'incantation de vos sorts Lumière sacrée et Eclair lumineux de ne pas être retardée lorsque vous subissez des dégâts.",
   "nameBranch": "classic",
   "rank1": "Confère 35% de chances à l’incantation de vos sorts Éclair lumineux, Lumière sacrée et Veille de la Lumière de ne pas être retardée lorsque vous subissez des dégâts.",
   "textSource": "editorial"
  },
  "paladin/holy-2-3": {
   "name": "Sceau de piété amélioré",
   "nameSource": "adapte",
   "spell": 20224,
   "classic": "Augmente les points de dégâts infligés par votre Sceau de piété et votre Jugement de piété de 3%.",
   "note": "Forever a renommé ce talent : le client français ne connaît que « Sceau de piété amélioré » (anciennement « Improved Seal of Righteousness »).",
   "nameBranch": "classic",
   "ranks": [
    "Augmente de 5% les points de dégâts infligés par vos Sceaux et vos Jugements.",
    "Augmente de 10% les points de dégâts infligés par vos Sceaux et vos Jugements.",
    "Augmente de 15% les points de dégâts infligés par vos Sceaux et vos Jugements."
   ],
   "rank1": "Augmente de 5% les points de dégâts infligés par vos Sceaux et vos Jugements.",
   "textSource": "editorial"
  },
  "paladin/holy-2-4": {
   "name": "Foi inflexible",
   "nameSource": "officiel",
   "spell": 9453,
   "classic": "Augmente de 5% vos chances de résister aux effets de Peur et de Désorientation.",
   "nameBranch": "classic",
   "rank1": "Réduit de 15% la durée des effets de peur et de désorientation qui vous affectent.",
   "textSource": "editorial"
  },
  "paladin/holy-4-2": {
   "name": "Illumination",
   "nameSource": "officiel",
   "spell": 20210,
   "classic": "Lorsque vous obtenez un effet critique avec Eclair lumineux, Lumière sacrée, ou le sort de soins Horion sacré, vous avez 20% de chances de gagner un nombre de points de mana égal au coût en mana du sort.",
   "nameBranch": "classic",
   "ranks": [
    "Lorsque vous obtenez un effet critique avec vos sorts de soins Éclair lumineux, Lumière sacrée, Veille de la Lumière ou Horion sacré, vous avez 20% de chances de récupérer un nombre de points de mana égal à 50% du coût de base du sort.",
    "Lorsque vous obtenez un effet critique avec vos sorts de soins Éclair lumineux, Lumière sacrée, Veille de la Lumière ou Horion sacré, vous avez 40% de chances de récupérer un nombre de points de mana égal à 50% du coût de base du sort.",
    "Lorsque vous obtenez un effet critique avec vos sorts de soins Éclair lumineux, Lumière sacrée, Veille de la Lumière ou Horion sacré, vous avez 60% de chances de récupérer un nombre de points de mana égal à 50% du coût de base du sort.",
    "Lorsque vous obtenez un effet critique avec vos sorts de soins Éclair lumineux, Lumière sacrée, Veille de la Lumière ou Horion sacré, vous avez 80% de chances de récupérer un nombre de points de mana égal à 50% du coût de base du sort.",
    "Lorsque vous obtenez un effet critique avec vos sorts de soins Éclair lumineux, Lumière sacrée, Veille de la Lumière ou Horion sacré, vous avez 100% de chances de récupérer un nombre de points de mana égal à 50% du coût de base du sort."
   ],
   "rank1": "Lorsque vous obtenez un effet critique avec vos sorts de soins Éclair lumineux, Lumière sacrée, Veille de la Lumière ou Horion sacré, vous avez 20% de chances de récupérer un nombre de points de mana égal à 50% du coût de base du sort.",
   "textSource": "editorial"
  },
  "paladin/holy-4-3": {
   "name": "Faveur divine",
   "nameSource": "officiel",
   "spell": 20216,
   "classic": "Une fois activé, confère 100% de chances à votre prochain sort Eclair lumineux, Lumière sacrée ou Horion sacré d'avoir un effet critique.",
   "rank1": "Une fois activé, confère 100% de chances à votre prochain sort Eclair lumineux, Lumière sacrée ou Horion sacré d'avoir un effet critique.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "paladin/holy-5-2": {
   "name": "Horion sacré",
   "nameSource": "officiel",
   "spell": 20473,
   "classic": "L'énergie sacrée frappe la cible et inflige 204 à 220 points de dégâts du Sacré à un ennemi, ou bien rend à un allié 204 à 220 points de vie.",
   "rank1": "L'énergie sacrée frappe la cible et inflige 129 à 139 points de dégâts du Sacré à un ennemi, ou bien rend à un allié 110 à 118 points de vie.",
   "textSource": "officiel-chiffre",
   "nameBranch": "classic"
  },
  "paladin/holy-6-3": {
   "name": "Puissance sacrée",
   "nameSource": "officiel",
   "spell": 5923,
   "classic": "Augmente les chances d'obtenir un effet critique avec vos sorts du Sacré de 1%.",
   "nameBranch": "classic",
   "rank1": "Augmente de 3% les chances de coup critique de votre sort Horion sacré, et de 1% celles de tous vos autres sorts.",
   "textSource": "editorial"
  },
  "paladin/protection-1-2": {
   "name": "Résistance",
   "nameSource": "officiel",
   "spell": 20143,
   "classic": "Augmente le score d'armure des objets de 2%.",
   "rank1": "Augmente le score d'armure des objets de 2%.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "paladin/protection-1-3": {
   "name": "Redoute",
   "nameSource": "officiel",
   "spell": 20127,
   "classic": "Augmente vos chances de bloquer les attaques avec votre bouclier de 6% après avoir subi un coup critique. Dure 10 sec ou bloque 5 attaques.",
   "nameBranch": "classic",
   "rank1": "Les attaques de mêlée qui vous infligent des dégâts ont 10% de chances d’augmenter de 6% vos chances de bloquer. Dure 10 sec ou 5 blocages.",
   "textSource": "editorial"
  },
  "paladin/protection-2-1": {
   "name": "Précision",
   "nameSource": "officiel",
   "spell": 20189,
   "classic": "Augmente vos chances de toucher avec les armes de mêlée de 1%.",
   "nameBranch": "classic",
   "rank1": "Augmente de 1% vos chances de toucher avec tous vos sorts et attaques.",
   "textSource": "editorial"
  },
  "paladin/protection-2-2": {
   "name": "Faveur du Gardien",
   "nameSource": "officiel",
   "spell": 20174,
   "classic": "Réduit le temps de recharge de votre Bénédiction de protection de 60 sec. et augmente la durée de votre Bénédiction de liberté de 3 sec.",
   "nameBranch": "classic",
   "rank1": "Réduit de 1 min le temps de recharge de votre Bénédiction de protection et augmente de 3 sec la durée de votre Bénédiction de liberté.",
   "textSource": "editorial"
  },
  "paladin/protection-2-4": {
   "name": "Anticipation",
   "nameSource": "officiel",
   "spell": 20096,
   "classic": "Augmente votre Défense de 2.",
   "rank1": "Augmente votre Défense de 4.",
   "textSource": "officiel-chiffre",
   "nameBranch": "classic"
  },
  "paladin/protection-3-2": {
   "name": "Fureur vertueuse améliorée",
   "nameSource": "officiel",
   "spell": 20468,
   "classic": "Augmente le niveau de menace généré par votre sort Fureur vertueuse de 16%.",
   "nameBranch": "classic",
   "rank1": "Tant que Fureur vertueuse est active, tous les dégâts que vous subissez sont réduits de 2%.",
   "textSource": "editorial"
  },
  "paladin/protection-3-3": {
   "name": "Spécialisation Bouclier",
   "nameSource": "officiel",
   "spell": 20148,
   "classic": "Augmente le nombre de points de dégâts absorbés par votre bouclier de 10%.",
   "nameBranch": "classic",
   "rank1": "Augmente de 10% les points de dégâts absorbés par votre bouclier et confère à vos blocages 33% de chances de vous rendre 6% de votre mana maximal. Ne peut se produire qu’une fois toutes les 3 sec.",
   "textSource": "editorial"
  },
  "paladin/protection-4-2": {
   "name": "Spécialisation Arme 1M",
   "nameSource": "officiel",
   "spell": 20196,
   "classic": "Augmente les points de dégâts que vous infligez avec les armes de mêlée à une main de 2%.",
   "rank1": "Augmente les points de dégâts que vous infligez avec les armes de mêlée à une main de 3%.",
   "textSource": "officiel-chiffre",
   "nameBranch": "classic"
  },
  "paladin/protection-4-3": {
   "name": "Marteau de la justice amélioré",
   "nameSource": "officiel",
   "spell": 20487,
   "classic": "Diminue le temps de recharge de votre sort Marteau de la justice de 5 sec.",
   "rank1": "Diminue le temps de recharge de votre sort Marteau de la justice de 5 sec.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "paladin/protection-5-3": {
   "name": "Rétribution",
   "nameSource": "officiel",
   "spell": 20177,
   "classic": "Confère 20% de chances de bénéficier d'une attaque supplémentaire lorsque vous êtes victime d'un coup critique.",
   "nameBranch": "classic",
   "rank1": "Vous donne 8% de chances de bénéficier d’une attaque supplémentaire après avoir bloqué une attaque de mêlée, et 20% après avoir subi un coup critique non périodique.",
   "textSource": "editorial"
  },
  "paladin/protection-7-2": {
   "name": "Bouclier sacré",
   "nameSource": "officiel",
   "spell": 20925,
   "classic": "Augmente les chances de bloquer de 30 % pendant 10 sec et inflige 65 points de dégâts du sacré par attaque bloquée pendant que l’effet est actif. Les dégâts de Bouclier sacré génèrent 20 % de menace supplémentaire. Chaque blocage dépense une charge. 4 charges.",
   "rank1": "Augmente les chances de bloquer de 20 % pendant 10 sec et inflige 110 points de dégâts du sacré par attaque bloquée pendant que l’effet est actif. Les dégâts de Bouclier sacré génèrent 20 % de menace supplémentaire. Chaque blocage dépense une charge. 4 charges.",
   "textSource": "officiel-chiffre",
   "nameBranch": "classic"
  },
  "paladin/retribution-1-2": {
   "name": "Déviation",
   "nameSource": "officiel",
   "spell": 20060,
   "classic": "Augmente vos chances de Parer de 1%.",
   "rank1": "Augmente vos chances de Parer de 1%.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "paladin/retribution-1-3": {
   "name": "Bénédiction",
   "nameSource": "officiel",
   "spell": 20101,
   "classic": "Réduit le coût en mana de vos Jugements et Sceaux de 3%.",
   "nameBranch": "classic",
   "ranks": [
    "Réduit de 2% le coût en mana de tous vos sorts et techniques à lancement instantané.",
    "Réduit de 4% le coût en mana de tous vos sorts et techniques à lancement instantané.",
    "Réduit de 6% le coût en mana de tous vos sorts et techniques à lancement instantané.",
    "Réduit de 8% le coût en mana de tous vos sorts et techniques à lancement instantané.",
    "Réduit de 10% le coût en mana de tous vos sorts et techniques à lancement instantané."
   ],
   "rank1": "Réduit de 2% le coût en mana de tous vos sorts et techniques à lancement instantané.",
   "textSource": "editorial"
  },
  "paladin/retribution-2-1": {
   "name": "Jugement amélioré",
   "nameSource": "officiel",
   "spell": 25956,
   "classic": "Diminue le temps de recharge de votre sort Jugement de 1 sec.",
   "nameBranch": "classic",
   "rank1": "Réduit de 1 sec le temps de recharge de votre technique Jugement.",
   "textSource": "editorial"
  },
  "paladin/retribution-2-3": {
   "name": "Conviction",
   "nameSource": "officiel",
   "spell": 20117,
   "classic": "Augmente vos chances d'infliger un coup critique avec les armes de mêlée de 1%.",
   "nameBranch": "classic",
   "rank1": "Augmente de 1% vos chances d’infliger un coup critique avec vos attaques de mêlée.",
   "textSource": "editorial"
  },
  "paladin/retribution-3-1": {
   "name": "Justification",
   "nameSource": "officiel",
   "spell": 9452,
   "classic": "Donne à vos attaques qui infligent des dégâts une chance de réduire la Force et l’Agilité de la cible de 5 %",
   "nameBranch": "classic",
   "rank1": "Confère à vos attaques de mêlée qui infligent des dégâts une chance de réduire de 42 la puissance d’attaque de la cible et d’augmenter la vôtre de 1% pendant 30 sec.",
   "textSource": "editorial"
  },
  "paladin/retribution-3-3": {
   "name": "Sceau d'autorité",
   "nameSource": "officiel",
   "spell": 20375,
   "classic": "Confère au paladin une chance d'infliger un nombre de points de dégâts du Sacré supplémentaires équivalent à 70% des dégâts normaux de l'arme. Un seul Sceau peut être actif sur le paladin à la fois. Dure 30 sec.Libérez l'énergie de ce Sceau pour juger un ennemi et lui infliger instantanément 68 à 73 points de dégâts du Sacré, ou 137 à 146 si la cible est étourdie ou stupéfiée.",
   "nameBranch": "classic",
   "rank1": "Confère au paladin une chance d’infliger des points de dégâts du Sacré supplémentaires équivalant à 70% des dégâts normaux de l’arme. Un seul Sceau peut être actif sur le paladin à la fois. Dure 30 sec.\n\nLibérer l’énergie de ce Sceau juge un ennemi et lui inflige instantanément 68 à 73 points de dégâts du Sacré, ou 137 à 146 si la cible est étourdie ou stupéfiée.",
   "textSource": "editorial"
  },
  "paladin/retribution-3-4": {
   "name": "Poursuite de la justice",
   "nameSource": "officiel",
   "spell": 26022,
   "classic": "Augmente votre vitesse de déplacement et la vitesse de déplacement de votre monture de 4%. Ne s'additionne pas avec les autres effets qui augmentent la vitesse de déplacement.",
   "nameBranch": "classic",
   "ranks": [
    "Augmente de 8% votre vitesse de déplacement, à pied comme en monture. Ne se cumule pas avec les autres effets qui augmentent la vitesse de déplacement.",
    "Augmente de 15% votre vitesse de déplacement, à pied comme en monture. Ne se cumule pas avec les autres effets qui augmentent la vitesse de déplacement."
   ],
   "rank1": "Augmente de 8% votre vitesse de déplacement, à pied comme en monture. Ne se cumule pas avec les autres effets qui augmentent la vitesse de déplacement.",
   "textSource": "editorial"
  },
  "paladin/retribution-4-1": {
   "name": "Oeil pour oeil",
   "nameSource": "officiel",
   "spell": 9799,
   "classic": "Tous les coups critiques obtenus contre vous avec des sorts infligent également 15% des dégâts que vous subissez au lanceur de sorts. Les points de dégâts causés par Oeil pour oeil ne peuvent excéder 50% du total des points de vie du paladin.",
   "nameBranch": "classic",
   "rank1": "Tous les coups critiques portés contre vous infligent également 5% des dégâts subis à leur auteur. Les points de dégâts causés par Œil pour œil ne peuvent excéder 50% du total des points de vie du paladin.",
   "textSource": "editorial"
  },
  "paladin/retribution-5-1": {
   "name": "Spécialisation Arme 2M",
   "nameSource": "officiel",
   "spell": 20111,
   "classic": "Augmente les points de dégâts que vous infligez avec les armes de mêlée à deux mains de 2%.",
   "rank1": "Augmente les points de dégâts que vous infligez avec les armes de mêlée à deux mains de 3%.",
   "textSource": "officiel-chiffre",
   "nameBranch": "classic"
  },
  "paladin/retribution-5-2": {
   "name": "Vengeance",
   "nameSource": "officiel",
   "spell": 20049,
   "classic": "Après un coup critique obtenu en frappant avec une arme ou avec un sort ou une technique, vous infligez 3 % de dégâts physiques et du sacré supplémentaires pendant 8 sec.",
   "nameBranch": "classic",
   "rank1": "Augmente de 1% les dégâts physiques et du Sacré que vous infligez pendant 30 sec après un coup critique. Se cumule jusqu’à 5 fois.",
   "textSource": "editorial"
  },
  "paladin/retribution-5-3": {
   "name": "Repentir",
   "nameSource": "officiel",
   "spell": 20066,
   "classic": "Plonge la cible ennemie dans une transe méditative qui la stupéfie pendant 6 sec au maximum. Si la cible subit des dégâts, elle se réveille. Ne fonctionne que contre les Humanoïdes.",
   "rank1": "Plonge la cible ennemie dans une transe méditative qui la stupéfie pendant 6 sec au maximum. Si la cible subit des dégâts, elle se réveille. Ne fonctionne que contre les Humanoïdes.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "chasseur/beast-mastery-1-2": {
   "name": "Aspects mortels",
   "nameSource": "officiel",
   "spell": 19552,
   "classic": "Pendant qu'Aspect du faucon est activé, toutes les attaques à distance normales ont 1% de chances d'augmenter la vitesse d'attaque à distance de 30% pendant 12 sec.",
   "note": "Nom et texte relevés dans le client français de la bêta ouverte. Le talent Classic qui occupait cette case s’appelait « Aspect du faucon amélioré » ; Forever l’a renommé et le client lui donne son propre nom français.",
   "nameBranch": "forever",
   "ranks": [
    "Lorsqu’Aspect du faucon est actif, les tirs automatiques ont 2 % de chances d’augmenter la vitesse d’attaque à distance de 30 % pendant 12 sec. Lorsqu’Aspect de la bête est actif, toutes les attaques automatiques en mêlée ont 2 % de chances d’augmenter la vitesse d’attaque en mêlée de 30 % pendant 12 sec.",
    "Lorsqu’Aspect du faucon est actif, les tirs automatiques ont 4 % de chances d’augmenter la vitesse d’attaque à distance de 30 % pendant 12 sec. Lorsqu’Aspect de la bête est actif, toutes les attaques automatiques en mêlée ont 4 % de chances d’augmenter la vitesse d’attaque en mêlée de 30 % pendant 12 sec.",
    "Lorsqu’Aspect du faucon est actif, les tirs automatiques ont 6 % de chances d’augmenter la vitesse d’attaque à distance de 30 % pendant 12 sec. Lorsqu’Aspect de la bête est actif, toutes les attaques automatiques en mêlée ont 6 % de chances d’augmenter la vitesse d’attaque en mêlée de 30 % pendant 12 sec.",
    "Lorsqu’Aspect du faucon est actif, les tirs automatiques ont 8 % de chances d’augmenter la vitesse d’attaque à distance de 30 % pendant 12 sec. Lorsqu’Aspect de la bête est actif, toutes les attaques automatiques en mêlée ont 8 % de chances d’augmenter la vitesse d’attaque en mêlée de 30 % pendant 12 sec.",
    "Lorsqu’Aspect du faucon est actif, les tirs automatiques ont 10 % de chances d’augmenter la vitesse d’attaque à distance de 30 % pendant 12 sec. Lorsqu’Aspect de la bête est actif, toutes les attaques automatiques en mêlée ont 10 % de chances d’augmenter la vitesse d’attaque en mêlée de 30 % pendant 12 sec."
   ],
   "rank1": "Lorsqu’Aspect du faucon est actif, les tirs automatiques ont 2 % de chances d’augmenter la vitesse d’attaque à distance de 30 % pendant 12 sec. Lorsqu’Aspect de la bête est actif, toutes les attaques automatiques en mêlée ont 2 % de chances d’augmenter la vitesse d’attaque en mêlée de 30 % pendant 12 sec.",
   "textSource": "client-forever"
  },
  "chasseur/beast-mastery-1-3": {
   "name": "Entraînement à l'Endurance",
   "nameSource": "officiel",
   "spell": 19583,
   "classic": "Augmente les points de vie de vos familiers de 3%.",
   "nameBranch": "classic",
   "rank1": "Augmente de 3% les points de vie et l’armure de vos familiers.",
   "textSource": "editorial"
  },
  "chasseur/beast-mastery-2-2": {
   "name": "Aspect du singe amélioré",
   "nameSource": "officiel",
   "spell": 19549,
   "classic": "Augmente le bonus d'Esquive conféré par Aspect du singe de 1%.",
   "nameBranch": "classic",
   "rank1": "Augmente de 2% le bonus d’esquive conféré par votre Aspect du singe. De plus, votre familier bénéficie de 50% de l’effet de votre technique Aspect du singe.",
   "textSource": "editorial"
  },
  "chasseur/beast-mastery-2-3": {
   "name": "Science des chemins",
   "nameSource": "officiel",
   "spell": 19559,
   "classic": "Augmente le bonus d'accélération de vos Aspects de la meute et du guépard de 3%.",
   "rank1": "Augmente le bonus d'accélération de vos Aspects de la meute et du guépard de 3%.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "chasseur/beast-mastery-2-4": {
   "name": "Ressusciter le familier amélioré",
   "nameSource": "officiel",
   "spell": 24443,
   "classic": "Le temps d'incantation du sort Ressusciter le familier est réduit de 3 sec., son coût en mana est diminué de 20% et le familier revient avec 15% points de vie supplémentaires.",
   "rank1": "Le temps d'incantation du sort Ressusciter le familier est réduit de 3 sec., son coût en mana est diminué de 20% et le familier revient avec 15% points de vie supplémentaires.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "chasseur/beast-mastery-3-2": {
   "name": "Rapidité bestiale",
   "nameSource": "officiel",
   "spell": 19596,
   "classic": "Augmente la vitesse de déplacement en extérieur de vos familiers de 30%.",
   "nameBranch": "classic",
   "rank1": "Augmente de 30% la vitesse de déplacement de vos familiers.",
   "textSource": "editorial"
  },
  "chasseur/beast-mastery-3-3": {
   "name": "Fureur libérée",
   "nameSource": "officiel",
   "spell": 19616,
   "classic": "Augmente les dégâts infligés par vos familiers de 4%.",
   "nameBranch": "classic",
   "ranks": [
    "Augmente de 3% les dégâts infligés par vos familiers et vos faucons.",
    "Augmente de 6% les dégâts infligés par vos familiers.",
    "Augmente de 9% les dégâts infligés par vos familiers.",
    "Augmente de 12% les dégâts infligés par vos familiers.",
    "Augmente de 15% les dégâts infligés par vos familiers."
   ],
   "rank1": "Augmente de 3% les dégâts infligés par vos familiers et vos faucons.",
   "textSource": "editorial"
  },
  "chasseur/beast-mastery-4-1": {
   "name": "Guérison du familier améliorée",
   "nameSource": "officiel",
   "spell": 19572,
   "classic": "Donne à la Guérison du familier 15% de chances de faire disparaître 1 effet(s) de Malédiction, Maladie, Magie ou Poison à chaque augmentation de points de vie.",
   "nameBranch": "classic",
   "ranks": [
    "Confère à votre sort Guérison du familier 15% de chances de dissiper 1 effet de malédiction, maladie, magie ou poison sur votre familier à chaque soin, et réduit son coût en mana de 10%.",
    "Confère à votre sort Guérison du familier 50% de chances de dissiper 1 effet de malédiction, maladie, magie ou poison sur votre familier à chaque soin, et réduit son coût en mana de 20%."
   ],
   "rank1": "Confère à votre sort Guérison du familier 15% de chances de dissiper 1 effet de malédiction, maladie, magie ou poison sur votre familier à chaque soin, et réduit son coût en mana de 10%.",
   "textSource": "editorial"
  },
  "chasseur/beast-mastery-4-3": {
   "name": "Ferocité",
   "nameSource": "officiel",
   "spell": 19598,
   "classic": "Augmente les chances de votre familier d'infliger un coup critique de 3%.",
   "nameBranch": "classic",
   "rank1": "Augmente de 2% les chances de coup critique de vos familiers et de vos faucons.",
   "textSource": "editorial"
  },
  "chasseur/beast-mastery-5-1": {
   "name": "Engagement spirituel",
   "nameSource": "officiel",
   "spell": 19578,
   "classic": "Tant que votre familier est actif, vous et votre familier retrouvez 1% du total de vos points de vie toutes les 10 sec.",
   "rank1": "Tant que votre familier est actif, vous et votre familier retrouvez 1% du total de vos points de vie toutes les 10 sec.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "chasseur/beast-mastery-5-2": {
   "name": "Intimidation",
   "nameSource": "officiel",
   "spell": 19577,
   "classic": "Ordonne à votre familier d'intimider la cible à la prochaine attaque en mêlée réussie, générant un haut niveau de menace et étourdissant la cible pendant 3 sec.",
   "nameBranch": "classic",
   "rank1": "Ordonne à votre familier d’étourdir la cible pendant 3 sec à sa prochaine attaque réussie, laquelle bénéficie en outre de 100% de chances de coup critique supplémentaires. Génère un niveau de menace élevé.",
   "textSource": "editorial"
  },
  "chasseur/beast-mastery-5-4": {
   "name": "Discipline bestiale",
   "nameSource": "officiel",
   "spell": 19590,
   "classic": "Augmente de 10% la régénération de focalisation de vos familiers.",
   "nameBranch": "classic",
   "ranks": [
    "Augmente de 10% la régénération de focalisation de vos familiers et permet à 25% de votre régénération de mana de se poursuivre pendant l’incantation.",
    "Augmente de 20% la régénération de focalisation de vos familiers et permet à 50% de votre régénération de mana de se poursuivre pendant l’incantation."
   ],
   "rank1": "Augmente de 10% la régénération de focalisation de vos familiers et permet à 25% de votre régénération de mana de se poursuivre pendant l’incantation.",
   "textSource": "editorial"
  },
  "chasseur/beast-mastery-6-3": {
   "name": "Frénésie",
   "nameSource": "officiel",
   "spell": 19621,
   "classic": "Confère à votre familier 20% de chances de bénéficier d'un bonus de 30% à la vitesse d'attaque pendant 8 sec après qu'il a infligé un coup critique.",
   "rank1": "Confère à votre familier 20% de chances de bénéficier d'un bonus de 30% à la vitesse d'attaque pendant 8 sec après qu'il a infligé un coup critique.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "chasseur/beast-mastery-7-2": {
   "name": "Courroux bestial",
   "nameSource": "officiel",
   "spell": 19574,
   "classic": "Votre familier, fou de rage, inflige 50% points de dégâts supplémentaires pendant 18 sec. Lorsqu’il est dans cet état, il n'éprouve ni pitié, ni remords, ni peur et ne peut plus être arrêté à moins d'être tué.",
   "rank1": "Votre familier, fou de rage, inflige 50% points de dégâts supplémentaires pendant 18 sec. Lorsqu’il est dans cet état, il n'éprouve ni pitié, ni remords, ni peur et ne peut plus être arrêté à moins d'être tué.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "chasseur/marksmanship-1-1": {
   "name": "Oeil de faucon",
   "nameSource": "officiel",
   "spell": 19498,
   "classic": "Augmente la portée de vos armes à distance de 2 mètres.",
   "rank1": "Augmente la portée de vos armes à distance de 2 mètres.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "chasseur/marksmanship-1-2": {
   "name": "Trait de choc amélioré",
   "nameSource": "officiel",
   "spell": 19407,
   "classic": "Confère à votre technique Trait de choc 4% de chances d'étourdir la cible pendant 3 sec.",
   "rank1": "Confère à votre technique Trait de choc 4% de chances d'étourdir la cible pendant 3 sec.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "chasseur/marksmanship-1-3": {
   "name": "Coups fatals",
   "nameSource": "adapte",
   "spell": 19426,
   "classic": "Augmente vos chances de coup critique avec les armes à distance de1 %.",
   "note": "Forever a renommé ce talent : le client français ne connaît que « Coups fatals » (anciennement « Lethal Shots »).",
   "nameBranch": "classic",
   "rank1": "Augmente de 1% vos chances de coup critique avec toutes vos attaques.",
   "textSource": "editorial"
  },
  "chasseur/marksmanship-2-1": {
   "name": "Morsures améliorées",
   "nameSource": "adapte",
   "note": "Forever a élargi ce talent aux trois morsures ; le pluriel le distingue de « Morsure de serpent améliorée », que la bêta rétablit en (4,4) avec le sort 19464 dont ce nom officiel provient.",
   "ranks": [
    "Augmente de 6% les points de dégâts de votre technique Morsure de serpent, réduit de 2 sec le temps de recharge de votre Morsure de vipère et augmente de 15 sec la durée de votre Morsure de scorpide.",
    "Augmente de 13% les points de dégâts de votre technique Morsure de serpent, réduit de 4 sec le temps de recharge de votre Morsure de vipère et augmente de 30 sec la durée de votre Morsure de scorpide.",
    "Augmente de 20% les points de dégâts de votre technique Morsure de serpent, réduit de 6 sec le temps de recharge de votre Morsure de vipère et augmente de 45 sec la durée de votre Morsure de scorpide."
   ],
   "rank1": "Augmente de 6% les points de dégâts de votre technique Morsure de serpent, réduit de 2 sec le temps de recharge de votre Morsure de vipère et augmente de 15 sec la durée de votre Morsure de scorpide.",
   "textSource": "editorial"
  },
  "chasseur/marksmanship-2-2": {
   "name": "Efficacité",
   "nameSource": "officiel",
   "spell": 19416,
   "classic": "Réduit le coût en mana de vos Tirs et Piqûres de 2 %.",
   "nameBranch": "classic",
   "rank1": "Réduit de 3% le coût en mana de vos Tirs, de vos Morsures et de vos techniques de mêlée.",
   "textSource": "editorial"
  },
  "chasseur/marksmanship-3-2": {
   "name": "Tir des arcanes amélioré",
   "nameSource": "officiel",
   "spell": 19454,
   "classic": "Réduit le temps de recharge de votre Tir des arcanes de 0.2 sec.",
   "nameBranch": "classic",
   "rank1": "Réduit de 0,3 sec le temps de recharge de votre Tir des arcanes. N’affecte pas le temps de recharge des techniques qui le partagent avec Tir des arcanes.",
   "textSource": "editorial"
  },
  "chasseur/marksmanship-4-2": {
   "name": "Aura de précision",
   "nameSource": "officiel",
   "spell": 19506,
   "classic": "Augmente la puissance d’attaque des membres du groupe qui se trouvent dans un rayon de 45 m de 50 . Dure 30 min.",
   "nameBranch": "classic",
   "rank1": "Les membres du groupe situés dans un rayon de 45 mètres voient leur puissance d’attaque à distance augmentée de 30. Dure 30 min.",
   "textSource": "editorial"
  },
  "chasseur/marksmanship-4-3": {
   "name": "Coups mortels",
   "nameSource": "officiel",
   "spell": 19485,
   "classic": "Augmente le bonus de dégâts de vos coups critiques avec les armes à distance de 6 %.",
   "nameBranch": "classic",
   "rank1": "Augmente de 6% le bonus de dégâts critiques de toutes vos techniques à distance.",
   "textSource": "editorial"
  },
  "chasseur/marksmanship-5-3": {
   "name": "Barrage",
   "nameSource": "officiel",
   "spell": 19461,
   "classic": "Augmente les dégâts infligés par vos sorts Flèches multiples et Salve de 5%.",
   "nameBranch": "classic",
   "ranks": [
    "Augmente de 3% les dégâts infligés par vos techniques Flèches multiples, Visée et Salve.",
    "Augmente de 7% les dégâts infligés par vos techniques Flèches multiples, Visée et Salve.",
    "Augmente de 10% les dégâts infligés par vos techniques Flèches multiples, Visée et Salve."
   ],
   "rank1": "Augmente de 3% les dégâts infligés par vos techniques Flèches multiples, Visée et Salve.",
   "textSource": "editorial"
  },
  "chasseur/marksmanship-5-4": {
   "name": "Flèche de dispersion",
   "nameSource": "officiel",
   "spell": 19503,
   "classic": "Un tir à courte distance qui inflige 50% des points de dégâts de l'arme et désoriente la cible pendant 4 sec. Si la cible subit des dégâts, l'effet est annulé. Interrompt l'attaque lors de son utilisation.",
   "rank1": "Un tir à courte distance qui inflige 50% des points de dégâts de l'arme et désoriente la cible pendant 4 sec. Si la cible subit des dégâts, l'effet est annulé. Interrompt l'attaque lors de son utilisation.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "chasseur/marksmanship-6-3": {
   "name": "Spécialisation Armes à distance",
   "nameSource": "officiel",
   "spell": 19507,
   "classic": "Augmente les points de dégâts que vous infligez avec les armes à distance de 1%.",
   "rank1": "Augmente les points de dégâts que vous infligez avec les armes à distance de 1%.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "chasseur/marksmanship-7-2": {
   "name": "Visée",
   "nameSource": "adapte",
   "spell": 19434,
   "classic": "Un tir précis qui augmente les points de dégâts infligés par votre attaque à distance de 70.",
   "note": "Forever a renommé ce talent : le client français ne connaît que « Visée » (anciennement « Aimed Shot »).",
   "nameBranch": "classic",
   "rank1": "Un tir posé qui augmente de 160 les points de dégâts de votre attaque à distance.",
   "textSource": "editorial"
  },
  "chasseur/survival-1-3": {
   "name": "Déviation",
   "nameSource": "officiel",
   "spell": 19295,
   "classic": "Augmente vos chances de Parer de 1%.",
   "rank1": "Augmente vos chances de Parer de 2%.",
   "textSource": "officiel-chiffre",
   "nameBranch": "classic"
  },
  "chasseur/survival-2-1": {
   "name": "Piège",
   "nameSource": "officiel",
   "spell": 19184,
   "classic": "Confère à vos sorts de Piège d'Immolation, Piège de givre et Piège explosif, 5% de chances d'emprisonner la cible, l'empêchant de se déplacer pendant 5 sec.",
   "nameBranch": "classic",
   "rank1": "Lorsque vos pièges se déclenchent, toutes les cibles touchées sont entravées et ne peuvent plus se déplacer pendant 1 sec.",
   "textSource": "editorial"
  },
  "chasseur/survival-2-2": {
   "name": "Frappes sauvages",
   "nameSource": "officiel",
   "spell": 19159,
   "classic": "Augmente de 10% les chances d'infliger un coup critique avec Attaque du raptor et Morsure de la mangouste.",
   "nameBranch": "classic",
   "rank1": "Augmente de 2% les chances de coup critique de toutes vos techniques de mêlée.",
   "textSource": "editorial"
  },
  "chasseur/survival-2-3": {
   "name": "Survivant",
   "nameSource": "officiel",
   "spell": 19255,
   "classic": "Augmente les points de vie totaux de 2%.",
   "nameBranch": "classic",
   "ranks": [
    "Augmente de 2% votre total de points de vie.",
    "Augmente de 4% votre total de points de vie.",
    "Augmente de 6% votre total de points de vie.",
    "Augmente de 8% votre total de points de vie.",
    "Augmente de 10% votre total de points de vie."
   ],
   "rank1": "Augmente de 2% votre total de points de vie.",
   "textSource": "editorial"
  },
  "chasseur/survival-2-4": {
   "name": "Coupure d'ailes améliorée",
   "nameSource": "officiel",
   "spell": 19228,
   "classic": "Confère à votre technique Coupure d'ailes 4% de chances d'immobiliser la cible pendant 5 sec.",
   "rank1": "Confère à votre technique Coupure d'ailes 7% de chances d'immobiliser la cible pendant 5 sec.",
   "textSource": "officiel-chiffre",
   "nameBranch": "classic"
  },
  "chasseur/survival-3-1": {
   "name": "Pièges astucieux",
   "nameSource": "officiel",
   "spell": 19239,
   "classic": "Augmente la durée des effets de Piège givrant et Piège de givre de 15% et les dégâts infligés par les effets de Piège d'Immolation et Piège explosif de 15%.",
   "rank1": "Augmente la durée des effets de Piège givrant et Piège de givre de 15% et les dégâts infligés par les effets de Piège d'Immolation et Piège explosif de 15%.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "chasseur/survival-3-2": {
   "name": "Pied sûr",
   "nameSource": "officiel",
   "spell": 19290,
   "classic": "Augmente vos chances de toucher votre cible de 1% et vos chances de résister aux effets affectant le mouvement de 5%.",
   "nameBranch": "classic",
   "ranks": [
    "Augmente de 1% vos chances de toucher et réduit de 10% la durée des effets qui entravent vos déplacements.",
    "Augmente de 2% vos chances de toucher et réduit de 20% la durée des effets qui entravent vos déplacements.",
    "Augmente de 3% vos chances de toucher et réduit de 30% la durée des effets qui entravent vos déplacements."
   ],
   "rank1": "Augmente de 1% vos chances de toucher et réduit de 10% la durée des effets qui entravent vos déplacements.",
   "textSource": "editorial"
  },
  "chasseur/survival-3-3": {
   "name": "Dissuasion",
   "nameSource": "officiel",
   "spell": 19263,
   "classic": "Une fois activé, augmente vos chances d'Esquiver et de Parer de 25% pendant 10 sec.",
   "rank1": "Une fois activé, augmente vos chances d'Esquiver et de Parer de 25% pendant 10 sec.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "chasseur/survival-4-3": {
   "name": "Contre-attaque",
   "nameSource": "officiel",
   "spell": 19306,
   "classic": "Une attaque disponible après avoir paré une attaque de l'adversaire. Elle inflige 40 points de dégâts et immobilise la cible pendant 5 sec. Contre-attaque ne peut pas être bloquée, esquivée ou parée.",
   "nameBranch": "classic",
   "rank1": "Une attaque qui devient disponible après avoir paré l’attaque d’un adversaire. Elle inflige 50% des dégâts de l’arme plus 26 et immobilise la cible pendant 5 sec. Contre-attaque ne peut être ni bloquée, ni esquivée, ni parée.",
   "textSource": "editorial"
  },
  "chasseur/survival-6-3": {
   "name": "Réflexes éclairs",
   "nameSource": "officiel",
   "spell": 19168,
   "classic": "Augmente votre Agilité de 3%.",
   "rank1": "Augmente votre Agilité de 2%.",
   "textSource": "officiel-chiffre",
   "nameBranch": "classic"
  },
  "voleur/assassination-1-1": {
   "name": "Suriner amélioré",
   "nameSource": "officiel",
   "spell": 13741,
   "classic": "Augmente la durée de l'effet de votre technique Suriner de 0.5 sec.",
   "note": "Nom repris d’un talent homonyme du client français (Classic), trouvé hors de l’arbre où Forever le place.",
   "nameBranch": "classic",
   "rank1": "Augmente de 0,5 sec la durée de votre technique Suriner.",
   "textSource": "editorial"
  },
  "voleur/assassination-1-2": {
   "name": "Attaques impitoyables",
   "nameSource": "officiel",
   "spell": 14144,
   "classic": "Lorsque vous tuez un adversaire qui vous fait gagner de l'expérience ou de l'honneur, vous avez 20% de chances d'infliger un coup critique lors de votre prochaine Attaque pernicieuse, Attaque sournoise, Embuscade ou Frappe fantomatique. Dure 20 sec.",
   "nameBranch": "classic",
   "rank1": "Après avoir tué un adversaire non trivial, votre prochaine Attaque pernicieuse, Attaque sournoise, Embuscade, Estropier ou Frappe fantomatique bénéficie de 20% de chances de coup critique supplémentaires. Dure 20 sec.",
   "textSource": "editorial"
  },
  "voleur/assassination-1-3": {
   "name": "Malice",
   "nameSource": "officiel",
   "spell": 14138,
   "classic": "Augmente vos chances d'infliger un coup critique de 1%.",
   "nameBranch": "classic",
   "rank1": "Augmente de 1% vos chances de coup critique avec toutes vos attaques et vos poisons.",
   "textSource": "editorial"
  },
  "voleur/assassination-2-1": {
   "name": "Némésis",
   "nameSource": "officiel",
   "spell": 14156,
   "classic": "Confère à votre coup de grâce, 20% de chances d'ajouter un point de combo à votre cible.",
   "rank1": "Confère à votre coup de grâce, 20% de chances d'ajouter un point de combo à votre cible.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "voleur/assassination-2-2": {
   "name": "Meurtre",
   "nameSource": "officiel",
   "spell": 14158,
   "classic": "Augmente tous les dégâts infligés aux humanoïdes, géants, bêtes et draconiens de 1%.",
   "nameBranch": "classic",
   "rank1": "Augmente de 2% tous les dégâts que vous infligez aux humanoïdes et aux géants.",
   "textSource": "editorial"
  },
  "voleur/assassination-2-4": {
   "name": "Débiter amélioré",
   "nameSource": "officiel",
   "spell": 14165,
   "classic": "Augmente la durée de votre technique Débiter de 15%.",
   "rank1": "Augmente la durée de votre technique Débiter de 15%.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "voleur/assassination-3-1": {
   "name": "Frappes implacables",
   "nameSource": "officiel",
   "spell": 14179,
   "classic": "Votre coup de grâce a 20% de chances par point de combo de vous rendre 25 points d'énergie.",
   "rank1": "Votre coup de grâce a 20% de chances par point de combo de vous rendre 25 points d'énergie.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "voleur/assassination-3-2": {
   "name": "Exposer l'armure amélioré",
   "nameSource": "officiel",
   "spell": 14168,
   "classic": "Augmente la réduction d'armure générée par votre technique Exposer l'armure de 25%.",
   "nameBranch": "classic",
   "rank1": "Réduit de 5 le coût en énergie de votre technique Exposer l’armure et vous rend 1 point de combo lorsqu’elle est lancée avec 5 points de combo.",
   "textSource": "editorial",
   "ranks": [
    "Réduit de 5 le coût en énergie de votre technique Exposer l’armure et vous rend 1 point de combo lorsqu’elle est lancée avec 5 points de combo.",
    "Réduit de 10 le coût en énergie de votre technique Exposer l’armure et vous rend 2 points de combo lorsqu’elle est lancée avec 5 points de combo."
   ]
  },
  "voleur/assassination-3-3": {
   "name": "Mortalité",
   "nameSource": "officiel",
   "spell": 14128,
   "classic": "Augmente de 6% les points de dégâts supplémentaires infligés par vos coups critiques, lorsque vous utilisez les techniques : Attaque pernicieuse, Suriner, Attaque sournoise, Frappe fantomatique ou Hémorragie.",
   "nameBranch": "classic",
   "rank1": "Augmente de 4% le bonus de dégâts critiques de vos techniques Attaque pernicieuse, Suriner, Attaque sournoise, Estropier, Frappe fantomatique et Hémorragie.",
   "textSource": "editorial"
  },
  "voleur/assassination-4-1": {
   "name": "Poisons abominables",
   "nameSource": "officiel",
   "spell": 16513,
   "classic": "Augmente les points de dégâts infligés par vos poisons de 4% et donne à vos poisons 8% de chances supplémentaires de résister aux effets de dissipation.",
   "rank1": "Augmente les points de dégâts infligés par vos poisons de 4% et donne à vos poisons 8% de chances supplémentaires de résister aux effets de dissipation.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "voleur/assassination-4-2": {
   "name": "Sang froid",
   "nameSource": "officiel",
   "spell": 14177,
   "classic": "Lorsque vous déclenchez ce talent, vos chances d'infliger un coup critique lors de votre prochaine Attaque pernicieuse, Attaque sournoise, Embuscade ou Eviscération augmentent de 100%.",
   "nameBranch": "classic",
   "rank1": "Une fois activée, augmente de 100% les chances de coup critique de votre prochaine Attaque pernicieuse, Attaque sournoise, Embuscade, Éviscération ou Estropier.",
   "textSource": "editorial"
  },
  "voleur/assassination-4-3": {
   "name": "Poisons améliorés",
   "nameSource": "officiel",
   "spell": 14113,
   "classic": "Augmente vos chances d'appliquer des poisons sur votre cible de 2%.",
   "nameBranch": "classic",
   "rank1": "Augmente de 2% vos chances d’appliquer un poison sur votre cible et confère aux applications de poison 10% de chances de ne pas consommer de charge.",
   "textSource": "editorial"
  },
  "voleur/assassination-5-1": {
   "name": "Vigueur",
   "nameSource": "officiel",
   "spell": 14983,
   "classic": "Augmente votre maximum d'Energie de 10.",
   "rank1": "Augmente votre maximum d'Energie de 5.",
   "textSource": "officiel-chiffre",
   "nameBranch": "classic"
  },
  "voleur/assassination-5-3": {
   "name": "Aiguillon perfide amélioré",
   "nameSource": "officiel",
   "spell": 14174,
   "classic": "Lorsqu'elle est affectée par votre technique Aiguillon perfide, la cible subit 3% de points de dégâts supplémentaires de toutes les sources.",
   "nameBranch": "classic",
   "rank1": "Les ennemis étourdis par votre technique Aiguillon perfide subissent 5% de dégâts supplémentaires de vos poisons et de vos attaques.",
   "textSource": "editorial"
  },
  "voleur/assassination-6-3": {
   "name": "Scelle le destin",
   "nameSource": "officiel",
   "spell": 14186,
   "classic": "Les coups critiques infligés par les techniques qui ajoutent un point de combo ont 20% de chances de vous faire gagner un point de combo supplémentaire.",
   "rank1": "Les coups critiques infligés par les techniques qui ajoutent un point de combo ont 20% de chances de vous faire gagner un point de combo supplémentaire.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "voleur/combat-1-1": {
   "name": "Eviscération améliorée",
   "nameSource": "officiel",
   "spell": 14162,
   "classic": "Augmente les points de dégâts infligés par votre technique Eviscération de 5%.",
   "note": "Nom repris d’un talent homonyme du client français (Classic), trouvé hors de l’arbre où Forever le place.",
   "rank1": "Augmente les points de dégâts infligés par votre technique Eviscération de 7%.",
   "textSource": "officiel-chiffre",
   "nameBranch": "classic"
  },
  "voleur/combat-1-2": {
   "name": "Attaque pernicieuse améliorée",
   "nameSource": "officiel",
   "spell": 13732,
   "classic": "Réduit de 3 le coût en énergie de votre technique Attaque pernicieuse.",
   "rank1": "Réduit de 3 le coût en énergie de votre technique Attaque pernicieuse.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "voleur/combat-1-3": {
   "name": "Réflexes éclairs",
   "nameSource": "officiel",
   "spell": 13712,
   "classic": "Augmente vos chances d'esquiver une attaque de 1%.",
   "rank1": "Augmente vos chances d'esquiver une attaque de 1%.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "voleur/combat-2-1": {
   "name": "Attaque sournoise améliorée",
   "nameSource": "adapte",
   "spell": 13733,
   "classic": "Augmente vos chances d'infliger un coup critique avec la technique Attaque sournoise de 10%.",
   "note": "Forever a renommé ce talent : le client français ne connaît que « Attaque sournoise améliorée » (anciennement « Improved Backstab »).",
   "nameBranch": "classic",
   "ranks": [
    "Augmente de 10% les chances de coup critique de votre Attaque sournoise et de 5% celles de votre Estropier, et confère à Attaque sournoise 15% de chances d’ajouter un point de combo supplémentaire.",
    "Augmente de 20% les chances de coup critique de votre Attaque sournoise et de 10% celles de votre Estropier, et confère à Attaque sournoise 30% de chances d’ajouter un point de combo supplémentaire.",
    "Augmente de 30% les chances de coup critique de votre Attaque sournoise et de 15% celles de votre Estropier, et confère à Attaque sournoise 45% de chances d’ajouter un point de combo supplémentaire."
   ],
   "rank1": "Augmente de 10% les chances de coup critique de votre Attaque sournoise et de 5% celles de votre Estropier, et confère à Attaque sournoise 15% de chances d’ajouter un point de combo supplémentaire.",
   "textSource": "editorial"
  },
  "voleur/combat-2-2": {
   "name": "Déviation",
   "nameSource": "officiel",
   "spell": 13713,
   "classic": "Augmente vos chances de parer de 1%.",
   "rank1": "Augmente vos chances de parer de 2%.",
   "textSource": "officiel-chiffre",
   "nameBranch": "classic"
  },
  "voleur/combat-2-3": {
   "name": "Précision",
   "nameSource": "officiel",
   "spell": 13705,
   "classic": "Augmente vos chances de toucher avec les armes de mêlée de 1%.",
   "nameBranch": "classic",
   "rank1": "Augmente de 1% vos chances de toucher avec toutes vos attaques et vos poisons.",
   "textSource": "editorial"
  },
  "voleur/combat-3-1": {
   "name": "Endurcissement",
   "nameSource": "officiel",
   "spell": 13742,
   "classic": "Réduit le temps de recharge de vos techniques Sprint et Evasion de 45 sec.",
   "nameBranch": "classic",
   "rank1": "Réduit de 30% le temps de recharge de vos techniques Sprint et Évasion.",
   "textSource": "editorial"
  },
  "voleur/combat-3-2": {
   "name": "Riposte",
   "nameSource": "officiel",
   "spell": 14251,
   "classic": "Une attaque disponible après avoir paré une attaque de l'adversaire. Elle inflige 150% des dégâts de l'arme et désarme la cible pendant 6 sec.",
   "rank1": "Une attaque disponible après avoir paré une attaque de l'adversaire. Elle inflige 150% des dégâts de l'arme et désarme la cible pendant 6 sec.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "voleur/combat-3-4": {
   "name": "Sprint amélioré",
   "nameSource": "officiel",
   "spell": 13743,
   "classic": "Confère 50% de chances d'annuler tous les effets gênant le mouvement lorsque vous activez votre technique Sprint.",
   "rank1": "Confère 50% de chances d'annuler tous les effets gênant le mouvement lorsque vous activez votre technique Sprint.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "voleur/combat-4-1": {
   "name": "Coup de pied amélioré",
   "nameSource": "officiel",
   "spell": 13754,
   "classic": "Confère à votre technique Coup de pied 50% de chances de rendre la cible muette pendant 2 sec.",
   "rank1": "Confère à votre technique Coup de pied 50% de chances de rendre la cible muette pendant 2 sec.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "voleur/combat-4-3": {
   "name": "Spécialisation Ambidextrie",
   "nameSource": "officiel",
   "spell": 13715,
   "classic": "Augmente les points de dégâts infligés par l'arme que vous utilisez en main gauche de 10%.",
   "nameBranch": "classic",
   "ranks": [
    "Augmente de 5% les dégâts infligés par votre arme de main gauche.",
    "Augmente de 10% les dégâts infligés par votre arme de main gauche.",
    "Augmente de 15% les dégâts infligés par votre arme de main gauche.",
    "Augmente de 20% les dégâts infligés par votre arme de main gauche.",
    "Augmente de 25% les dégâts infligés par votre arme de main gauche."
   ],
   "rank1": "Augmente de 5% les dégâts infligés par votre arme de main gauche.",
   "textSource": "editorial"
  },
  "voleur/combat-5-2": {
   "name": "Déluge de lames",
   "nameSource": "officiel",
   "spell": 13877,
   "classic": "Augmente votre vitesse d'attaque de 20%. De plus, vos attaques frappent un adversaire proche supplémentaire. Dure 15 sec.",
   "nameBranch": "classic",
   "rank1": "Augmente de 20% votre vitesse d’attaque de mêlée et vos attaques de mêlée frappent un adversaire proche supplémentaire. Dure 15 sec.",
   "textSource": "editorial"
  },
  "voleur/combat-6-2": {
   "name": "Expertise en armes",
   "nameSource": "officiel",
   "spell": 30919,
   "classic": "Augmente de 3 votre compétence avec les Epées, les armes de pugilat et les Dagues.",
   "nameBranch": "classic",
   "rank1": "Réduit de 1% les chances que vos attaques soient esquivées ou parées.",
   "textSource": "editorial"
  },
  "voleur/combat-6-3": {
   "name": "Agressivité",
   "nameSource": "officiel",
   "spell": 18427,
   "classic": "Augmente les points de dégâts infligés par vos techniques Attaque pernicieuse et Eviscération de 2%.",
   "nameBranch": "classic",
   "rank1": "Augmente de 2% les dégâts de vos techniques Attaque pernicieuse, Attaque sournoise et Éviscération.",
   "textSource": "editorial"
  },
  "voleur/combat-7-2": {
   "name": "Poussée d'adrénaline",
   "nameSource": "officiel",
   "spell": 13750,
   "classic": "Augmente la vitesse de régénération de votre Energie de 100% pendant 15 sec.",
   "rank1": "Augmente la vitesse de régénération de votre Energie de 100% pendant 15 sec.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "voleur/subtlety-1-1": {
   "name": "Dissimulation",
   "nameSource": "officiel",
   "spell": 13975,
   "classic": "Augmente de 3% votre vitesse de déplacement lorsque vous êtes invisible et réduit de 1 sec. le temps de recharge de votre technique Camouflage.",
   "nameBranch": "classic",
   "rank1": "Réduit de 3% la pénalité de vitesse de votre technique Camouflage et de 2 sec son temps de recharge.",
   "textSource": "editorial"
  },
  "voleur/subtlety-1-2": {
   "name": "Maître des illusions",
   "nameSource": "officiel",
   "spell": 13958,
   "classic": "Réduit les chances de vos ennemis de vous détecter lorsque vous êtes en camouflage.",
   "nameBranch": "classic",
   "rank1": "Réduit les chances que vos ennemis vous détectent en camouflage, comme si vous aviez 1 niveau de plus.",
   "textSource": "editorial",
   "ranks": [
    "Réduit les chances que vos ennemis vous détectent en camouflage, comme si vous aviez 1 niveau de plus.",
    "Réduit les chances que vos ennemis vous détectent en camouflage, comme si vous aviez 2 niveaux de plus.",
    "Réduit les chances que vos ennemis vous détectent en camouflage, comme si vous aviez 3 niveaux de plus."
   ]
  },
  "voleur/subtlety-1-3": {
   "name": "Opportunité",
   "nameSource": "officiel",
   "spell": 14057,
   "classic": "Augmente de 4% les dégâts que vous infligez avec les techniques Attaque sournoise, Garrot et Embuscade, lorsque vous attaquez votre cible de dos.",
   "nameBranch": "classic",
   "rank1": "Augmente de 5% les dégâts infligés par vos techniques Attaque sournoise, Garrot, Embuscade et Estropier.",
   "textSource": "editorial"
  },
  "voleur/subtlety-2-1": {
   "name": "Préparatifs",
   "nameSource": "officiel",
   "spell": 13983,
   "classic": "Vous confère 15% de chances d'ajouter un point de combo à votre cible après avoir esquivé son attaque ou entièrement résisté à un de ses sorts.",
   "nameBranch": "classic",
   "ranks": [
    "Vous confère 33% de chances d’ajouter un point de combo à votre cible après avoir esquivé une attaque ou entièrement résisté à un sort.",
    "Vous confère 67% de chances d’ajouter un point de combo à votre cible après avoir esquivé une attaque ou entièrement résisté à un sort.",
    "Vous confère 100% de chances d’ajouter un point de combo à votre cible après avoir esquivé une attaque ou entièrement résisté à un sort."
   ],
   "rank1": "Vous confère 33% de chances d’ajouter un point de combo à votre cible après avoir esquivé une attaque ou entièrement résisté à un sort.",
   "textSource": "editorial"
  },
  "voleur/subtlety-2-2": {
   "name": "Insaisissable",
   "nameSource": "officiel",
   "spell": 13981,
   "classic": "Réduit le temps de recharge de vos techniques Disparition et Cécité de 45 sec.",
   "nameBranch": "classic",
   "ranks": [
    "Réduit de 45 sec le temps de recharge de vos techniques Disparition et Cécité.",
    "Réduit de 90 sec le temps de recharge de vos techniques Disparition et Cécité."
   ],
   "rank1": "Réduit de 45 sec le temps de recharge de vos techniques Disparition et Cécité.",
   "textSource": "editorial"
  },
  "voleur/subtlety-2-4": {
   "name": "Embuscade améliorée",
   "nameSource": "officiel",
   "spell": 14079,
   "classic": "Augmente les chances d'infliger un coup critique avec votre technique Embuscade de 15%.",
   "rank1": "Augmente les chances d'infliger un coup critique avec votre technique Embuscade de 15%.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "voleur/subtlety-3-1": {
   "name": "Initiative",
   "nameSource": "officiel",
   "spell": 13976,
   "classic": "Vous confère 25% de chances de gagner un point de combo supplémentaire lorsque vous utilisez les techniques Embuscade, Garrot et Coup bas.",
   "nameBranch": "classic",
   "ranks": [
    "Vous confère 33% de chances d’ajouter un point de combo supplémentaire à votre cible lorsque vous utilisez vos techniques Embuscade, Garrot ou Coup bas.",
    "Vous confère 67% de chances d’ajouter un point de combo supplémentaire à votre cible lorsque vous utilisez vos techniques Embuscade, Garrot ou Coup bas.",
    "Vous confère 100% de chances d’ajouter un point de combo supplémentaire à votre cible lorsque vous utilisez vos techniques Embuscade, Garrot ou Coup bas."
   ],
   "rank1": "Vous confère 33% de chances d’ajouter un point de combo supplémentaire à votre cible lorsque vous utilisez vos techniques Embuscade, Garrot ou Coup bas.",
   "textSource": "editorial"
  },
  "voleur/subtlety-3-2": {
   "name": "Frappe fantomatique",
   "nameSource": "officiel",
   "spell": 14278,
   "classic": "Une attaque qui inflige 125% des dégâts de l'arme et qui augmente vos chances d'esquiver de 15% pendant 7 sec. Vous gagnez 1 point de combo.",
   "nameBranch": "classic",
   "rank1": "Une attaque qui inflige 125% des dégâts de l’arme (180% si une dague est équipée en main droite) et augmente de 15% vos chances d’esquiver pendant 7 sec. Rapporte 1 point de combo.",
   "textSource": "editorial"
  },
  "voleur/subtlety-4-1": {
   "name": "Sens amplifiés",
   "nameSource": "officiel",
   "spell": 30894,
   "classic": "Augmente votre détection du camouflage et réduit de 2% la probabilité que vous soyez touché par les sorts et les attaques à distance.",
   "nameBranch": "classic",
   "ranks": [
    "Augmente votre détection du camouflage comme si vous aviez 1 niveau de plus, et réduit de 2% les chances que les sorts et les attaques à distance vous touchent.",
    "Augmente votre détection du camouflage comme si vous aviez 3 niveau de plus, et réduit de 4% les chances que les sorts et les attaques à distance vous touchent."
   ],
   "rank1": "Augmente votre détection du camouflage comme si vous aviez 1 niveau de plus, et réduit de 2% les chances que les sorts et les attaques à distance vous touchent.",
   "textSource": "editorial"
  },
  "voleur/subtlety-4-2": {
   "name": "Préméditation",
   "nameSource": "officiel",
   "spell": 14183,
   "classic": "Lorsqu'elle est utilisée, cette technique ajoute 2 points de combo à la cible. Vous devez ajouter à ces points de combo ou les utiliser avant 10 sec sinon les points de combo sont perdus.",
   "nameBranch": "classic",
   "rank1": "Ajoute 2 points de combo à votre cible. Vous devez y ajouter d’autres points ou les utiliser dans les 20 sec, sans quoi ils sont perdus.",
   "textSource": "editorial"
  },
  "voleur/subtlety-4-3": {
   "name": "Lames dentelées",
   "nameSource": "officiel",
   "spell": 14171,
   "classic": "Vos attaques ignorent 0 points de l'Armure de votre cible. Augmente les points de dégâts infligés par votre technique Rupture de 10%. Le nombre de points d'Armure réduits augmente avec votre niveau.",
   "nameBranch": "classic",
   "rank1": "Vos attaques ignorent 3% de l’armure de votre cible et les dégâts de votre technique Rupture sont augmentés de 10%.",
   "textSource": "editorial"
  },
  "voleur/subtlety-5-1": {
   "name": "Coups fourrés",
   "nameSource": "officiel",
   "spell": 14082,
   "classic": "Réduit de 10 le coût en énergie de vos techniques Coup bas et Garrot.",
   "nameBranch": "classic",
   "rank1": "Réduit de 10 le coût en énergie de vos techniques Coup bas et Garrot, et votre Garrot ne nécessite plus d’être derrière votre cible.",
   "textSource": "editorial"
  },
  "voleur/subtlety-5-2": {
   "name": "Préparation",
   "nameSource": "officiel",
   "spell": 14185,
   "classic": "Lorsque vous la déclenchez, cette technique annule le temps de recharge de toutes vos autres techniques de voleur.",
   "rank1": "Lorsque vous la déclenchez, cette technique annule le temps de recharge de toutes vos autres techniques de voleur.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "voleur/subtlety-5-3": {
   "name": "Hémorragie",
   "nameSource": "officiel",
   "spell": 16511,
   "classic": "Une frappe instantanée qui inflige des dégâts à l'adversaire et provoque une hémorragie. Augmente tous les dégâts physiques infligés à la cible de 3 au maximum. Utilisable 30 fois ou pendant 15 sec. Vous gagnez 1 point de combo.",
   "nameBranch": "classic",
   "rank1": "Une frappe instantanée qui inflige 100% des dégâts de l’arme (145% si une dague est équipée) et fait subir à la cible 15% de dégâts supplémentaires de votre Rupture. Dure 15 sec. Rapporte 1 point de combo.",
   "textSource": "editorial"
  },
  "pretre/discipline-1-2": {
   "name": "Spécialisation Baguette",
   "nameSource": "officiel",
   "spell": 14524,
   "classic": "Augmente les dégâts que vous infligez avec les baguettes de 5%.",
   "rank1": "Augmente les dégâts que vous infligez avec les baguettes de 13%.",
   "textSource": "officiel-chiffre",
   "nameBranch": "classic"
  },
  "pretre/discipline-2-1": {
   "name": "Résolution silencieuse",
   "nameSource": "officiel",
   "spell": 14523,
   "classic": "Diminue le niveau de menace généré par vos sorts de 4%.",
   "nameBranch": "classic",
   "ranks": [
    "Réduit de 10% la menace générée par vos sorts du Sacré et de 5% la durée des effets d’étourdissement, de peur et de silence qui vous sont infligés.",
    "Réduit de 20% la menace générée par vos sorts du Sacré et de 10% la durée des effets d’étourdissement, de peur et de silence qui vous sont infligés.",
    "Réduit de 30% la menace générée par vos sorts du Sacré et de 15% la durée des effets d’étourdissement, de peur et de silence qui vous sont infligés."
   ],
   "rank1": "Réduit de 10% la menace générée par vos sorts du Sacré et de 5% la durée des effets d’étourdissement, de peur et de silence qui vous sont infligés.",
   "textSource": "editorial"
  },
  "pretre/discipline-2-3": {
   "name": "Mot de pouvoir : Bouclier amélioré",
   "nameSource": "officiel",
   "spell": 14748,
   "classic": "Augmente les dégâts absorbés par votre Mot de pouvoir : Bouclier de 5%.",
   "rank1": "Augmente les dégâts absorbés par votre Mot de pouvoir : Bouclier de 7%.",
   "textSource": "officiel-chiffre",
   "nameBranch": "classic"
  },
  "pretre/discipline-2-4": {
   "name": "Martyre",
   "nameSource": "officiel",
   "spell": 14531,
   "classic": "Vous confère 50% de chances de bénéficier de l'effet Incantation focalisée pendant 6 sec après avoir été victime d'un coup critique en mêlée ou à distance. Cet effet vous évite, lors de l'incantation d'un sort, d'être interrompu lorsque vous subissez des dégâts. Il augmente aussi la résistance aux effets d'interruption de 10%.",
   "nameBranch": "classic",
   "ranks": [
    "Vous confère 50% de chances de bénéficier d’Incantation focalisée pendant 6 sec après avoir subi un coup critique de mêlée ou à distance. Incantation focalisée vous évite de perdre du temps d’incantation lorsque vous subissez des dégâts et augmente de 20% votre résistance aux effets d’interruption.",
    "Vous confère 100% de chances de bénéficier d’Incantation focalisée pendant 6 sec après avoir subi un coup critique de mêlée ou à distance. Incantation focalisée vous évite de perdre du temps d’incantation lorsque vous subissez des dégâts et augmente de 20% votre résistance aux effets d’interruption."
   ],
   "rank1": "Vous confère 50% de chances de bénéficier d’Incantation focalisée pendant 6 sec après avoir subi un coup critique de mêlée ou à distance. Incantation focalisée vous évite de perdre du temps d’incantation lorsque vous subissez des dégâts et augmente de 20% votre résistance aux effets d’interruption.",
   "textSource": "editorial"
  },
  "pretre/discipline-3-1": {
   "name": "Sagacité",
   "nameSource": "officiel",
   "spell": 14520,
   "classic": "Réduit le coût en mana de vos sorts instantanés de 2%.",
   "nameBranch": "classic",
   "ranks": [
    "Réduit de 3% le coût en mana de vos sorts Châtiment, Flammes sacrées et de vos sorts à lancement instantané.",
    "Réduit de 7% le coût en mana de vos sorts Châtiment, Flammes sacrées et de vos sorts à lancement instantané.",
    "Réduit de 10% le coût en mana de vos sorts Châtiment, Flammes sacrées et de vos sorts à lancement instantané."
   ],
   "rank1": "Réduit de 3% le coût en mana de vos sorts Châtiment, Flammes sacrées et de vos sorts à lancement instantané.",
   "textSource": "editorial"
  },
  "pretre/discipline-3-2": {
   "name": "Focalisation améliorée",
   "nameSource": "officiel",
   "spell": 14751,
   "classic": "Lorsqu'elle est activée, cette technique réduit de 100% le coût en mana de votre prochain sort et augmente ses chances d'infliger un effet critique de 25%, si cela est possible.",
   "rank1": "Lorsqu'elle est activée, cette technique réduit de 100% le coût en mana de votre prochain sort et augmente ses chances d'infliger un effet critique de 25%, si cela est possible.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "pretre/discipline-3-4": {
   "name": "Méditation",
   "nameSource": "officiel",
   "spell": 14521,
   "classic": "Vous confère 5% de votre vitesse de récupération du mana normale pendant l'incantation.",
   "nameBranch": "classic",
   "ranks": [
    "Permet à 17% de votre régénération de mana de se poursuivre pendant l’incantation.",
    "Permet à 33% de votre régénération de mana de se poursuivre pendant l’incantation.",
    "Permet à 50% de votre régénération de mana de se poursuivre pendant l’incantation."
   ],
   "rank1": "Permet à 17% de votre régénération de mana de se poursuivre pendant l’incantation.",
   "textSource": "editorial"
  },
  "pretre/discipline-4-1": {
   "name": "Feu intérieur amélioré",
   "nameSource": "officiel",
   "spell": 14747,
   "classic": "Augmente le bonus d'armure que confère votre sort Feu intérieur de 10%.",
   "nameBranch": "classic",
   "rank1": "Augmente de 15% le bonus d’armure de votre sort Feu intérieur et de 4 son nombre total de charges.",
   "textSource": "editorial"
  },
  "pretre/discipline-4-2": {
   "name": "Force mentale",
   "nameSource": "officiel",
   "spell": 18551,
   "classic": "Augmente votre maximum de points de mana de 2%.",
   "nameBranch": "classic",
   "rank1": "Augmente de 3% votre Intelligence totale.",
   "textSource": "editorial"
  },
  "pretre/discipline-4-4": {
   "name": "Brûlure de mana améliorée",
   "nameSource": "officiel",
   "spell": 14750,
   "classic": "Réduit le temps d'incantation du sort Brûlure de mana de 0,25 sec.",
   "nameBranch": "classic",
   "rank1": "Réduit de 0,5 sec le temps d’incantation de votre sort Brûlure de mana.",
   "textSource": "editorial"
  },
  "pretre/discipline-7-2": {
   "name": "Infusion de puissance",
   "nameSource": "officiel",
   "spell": 10060,
   "classic": "Imprègne la cible de puissance, ce qui augmente de 20% les dégâts et les soins qu'elle produit avec des sorts. Dure 15 sec.",
   "nameBranch": "classic",
   "rank1": "Imprègne la cible de puissance, augmentant de 20% les dégâts et les soins de ses sorts pendant 15 sec.",
   "textSource": "editorial"
  },
  "pretre/holy-1-1": {
   "name": "Focalisation des soins",
   "nameSource": "adapte",
   "spell": 14913,
   "classic": "Vous donne 35% de chances d'éviter d'être interrompu par des dégâts subis quand vous lancez un sort de soins.",
   "note": "Forever a renommé ce talent : le client français ne connaît que « Focalisation des soins » (anciennement « Healing Focus »).",
   "nameBranch": "classic",
   "ranks": [
    "Vous confère 23% de chances d’éviter l’interruption causée par les dégâts lors de l’incantation de n’importe quel sort.",
    "Vous confère 47% de chances d’éviter l’interruption causée par les dégâts lors de l’incantation de n’importe quel sort de soins.",
    "Vous confère 70% de chances d’éviter l’interruption causée par les dégâts lors de l’incantation de n’importe quel sort de soins."
   ],
   "rank1": "Vous confère 23% de chances d’éviter l’interruption causée par les dégâts lors de l’incantation de n’importe quel sort.",
   "textSource": "editorial"
  },
  "pretre/holy-1-2": {
   "name": "Rénovation améliorée",
   "nameSource": "officiel",
   "spell": 14908,
   "classic": "Augmente de 5% le nombre de points de vie soignés par votre sort Rénovation.",
   "rank1": "Augmente de 5% le nombre de points de vie soignés par votre sort Rénovation.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "pretre/holy-1-3": {
   "name": "Spécialisation (Sacré)",
   "nameSource": "officiel",
   "spell": 14889,
   "classic": "Augmente les chances d'obtenir un effet critique avec vos sorts du Sacré de 1%.",
   "rank1": "Augmente les chances d'obtenir un effet critique avec vos sorts du Sacré de 1%.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "pretre/holy-2-2": {
   "name": "Protection contre les sorts",
   "nameSource": "officiel",
   "spell": 27900,
   "classic": "Réduit tous les dégâts des sorts subis de 2%.",
   "rank1": "Réduit tous les dégâts des sorts subis de 2%.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "pretre/holy-2-3": {
   "name": "Fureur divine",
   "nameSource": "officiel",
   "spell": 18530,
   "classic": "Réduit le temps d'incantation de vos sorts Châtiment, Flammes sacrées, Soins et Soins supérieurs de 0.1 sec.",
   "rank1": "Réduit le temps d'incantation de vos sorts Châtiment, Flammes sacrées, Soins et Soins supérieurs de 0.1 sec.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "pretre/holy-3-1": {
   "name": "Nova sacrée",
   "nameSource": "officiel",
   "spell": 15237,
   "classic": "Provoque une explosion de lumière sacrée autour du lanceur de sorts. Elle inflige 29 à 34 points de dégâts du Sacré à toutes les cibles ennemies dans une zone de 10 mètres et rend 54 à 63 points de vie à tous les membres du groupe dans une zone de 10 mètres. Ces effets ne modifient pas le niveau de menace.",
   "nameBranch": "classic",
   "rank1": "Provoque une explosion de lumière sacrée autour du lanceur, infligeant 31 à 36 points de dégâts du Sacré à tous les ennemis situés dans un rayon de 10 mètres et rendant 68 à 77 points de vie à tous les membres du groupe dans ce même rayon de 10 mètres. Ces effets ne génèrent aucune menace.",
   "textSource": "editorial"
  },
  "pretre/holy-3-2": {
   "name": "Rétablissement béni",
   "nameSource": "officiel",
   "spell": 27811,
   "classic": "Lorsque vous avez été frappé par un coup critique en mêlée ou à distance, rend 8% des points de dégâts subis en 6 sec.",
   "nameBranch": "classic",
   "rank1": "Après avoir subi un coup critique de mêlée ou à distance, ou plus de 30% de votre maximum de points de vie en une seule attaque, rend 8% des dégâts subis en 6 sec. Renouveler cet effet reporte les soins restants.",
   "textSource": "editorial"
  },
  "pretre/holy-3-4": {
   "name": "Inspiration",
   "nameSource": "officiel",
   "spell": 14892,
   "classic": "Augmente l’Armure de votre cible de 8 % pendant 15 sec après obtention d’un effet critique avec",
   "nameBranch": "classic",
   "rank1": "Vos soins critiques non périodiques augmentent de 8% l’armure de votre cible pendant 15 sec.",
   "textSource": "editorial"
  },
  "pretre/holy-4-1": {
   "name": "Allonge du Sacré",
   "nameSource": "officiel",
   "spell": 27789,
   "classic": "Augmente de 10% la portée de vos sorts Châtiment et Flammes sacrées et le rayon d'effet de vos sorts Prière de soins et Nova sacrée.",
   "rank1": "Augmente de 10% la portée de vos sorts Châtiment et Flammes sacrées et le rayon d'effet de vos sorts Prière de soins et Nova sacrée.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "pretre/holy-4-2": {
   "name": "Soin amélioré",
   "nameSource": "officiel",
   "spell": 14912,
   "classic": "Réduit le coût en mana des sorts Soins inférieurs, Soins et Soins supérieurs de 5%.",
   "nameBranch": "classic",
   "rank1": "Réduit de 5% le coût en mana de vos sorts Soins inférieurs, Soins, Soins supérieurs, Pénitence et Prière de guérison.",
   "textSource": "editorial"
  },
  "pretre/holy-4-3": {
   "name": "Lumière incendiaire",
   "nameSource": "officiel",
   "spell": 14909,
   "classic": "Augmente de 5% les dégâts infligés par vos sorts Châtiment et Flammes sacrées.",
   "nameBranch": "classic",
   "rank1": "Augmente de 2% les dégâts du Sacré que vous infligez et confère 5% de chances, chaque fois que votre sort Flammes sacrées inflige ses dégâts périodiques, que votre prochaine Nova sacrée ne coûte aucun mana.",
   "textSource": "editorial"
  },
  "pretre/holy-5-2": {
   "name": "Esprit de rédemption",
   "nameSource": "officiel",
   "spell": 20711,
   "classic": "Au moment de sa mort, le prêtre devient l'Esprit de rédemption pendant 10 sec. L'Esprit de rédemption ne peut pas se déplacer ou attaquer, ni être attaqué ou ciblé par aucun sort ou effet. Tant qu'il est sous cette forme, le prêtre peut lancer tout sort de soins sans le moindre coût. A la fin de l'effet, le prêtre meurt.",
   "rank1": "Au moment de sa mort, le prêtre devient l'Esprit de rédemption pendant 15 sec. L'Esprit de rédemption ne peut pas se déplacer ou attaquer, ni être attaqué ou ciblé par aucun sort ou effet. Tant qu'il est sous cette forme, le prêtre peut lancer tout sort de soins sans le moindre coût. A la fin de l'effet, le prêtre meurt.",
   "textSource": "officiel-chiffre",
   "nameBranch": "classic"
  },
  "pretre/holy-5-3": {
   "name": "Direction spirituelle",
   "nameSource": "officiel",
   "spell": 14901,
   "classic": "Augmente les dégâts et les soins produits par les sorts d'un montant au maximum égal à 5% de votre total d'Esprit.",
   "nameBranch": "classic",
   "rank1": "Augmente vos soins par sort d’un montant pouvant atteindre 5% de votre Esprit total, et vos dégâts par sort d’un montant pouvant atteindre 1% de votre Esprit total.",
   "textSource": "editorial"
  },
  "pretre/holy-6-3": {
   "name": "Soins spirituels",
   "nameSource": "officiel",
   "spell": 14898,
   "classic": "Augmente le nombre de points de vie rendus par vos sorts de soins de 2%.",
   "nameBranch": "classic",
   "rank1": "Augmente de 3% le nombre de points de vie rendus par vos sorts.",
   "textSource": "editorial"
  },
  "pretre/shadow-magic-1-1": {
   "name": "Focalisation de l'ombre",
   "nameSource": "officiel",
   "spell": 15260,
   "classic": "Réduit de 2% les chances de votre cible de résister à vos sorts d'Ombre.",
   "nameBranch": "classic",
   "rank1": "Augmente de 1% vos chances de toucher avec vos sorts d’Ombre.",
   "textSource": "editorial"
  },
  "pretre/shadow-magic-1-2": {
   "name": "Aveuglement",
   "nameSource": "officiel",
   "spell": 15268,
   "classic": "Confère 2% de chances à vos sorts d'Ombre d'étourdir la cible pendant 3 sec.",
   "rank1": "Confère 2% de chances à vos sorts d'Ombre d'étourdir la cible pendant 3 sec.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "pretre/shadow-magic-1-3": {
   "name": "Connexion spirituelle",
   "nameSource": "officiel",
   "spell": 15270,
   "classic": "Vous donne 20% de chances de gagner un bonus de 100% à l'Esprit après avoir tué une cible qui rapporte de l'expérience. Votre mana se régénère à 50% de la vitesse de récupération normale pendant l'incantation de sorts. Dure 15 sec.",
   "nameBranch": "classic",
   "rank1": "Vous donne 20% de chances de gagner un bonus de 100% à votre Esprit pendant 15 sec après avoir tué une cible non triviale. Pendant ce temps, votre mana se régénère à 50% de sa vitesse normale pendant l’incantation.",
   "textSource": "editorial"
  },
  "pretre/shadow-magic-2-1": {
   "name": "Affinité avec l'Ombre",
   "nameSource": "officiel",
   "spell": 15318,
   "classic": "Diminue le niveau de menace généré par vos sorts d'Ombre de 8%.",
   "rank1": "Diminue le niveau de menace généré par vos sorts d'Ombre de 10%.",
   "textSource": "officiel-chiffre",
   "nameBranch": "classic"
  },
  "pretre/shadow-magic-2-3": {
   "name": "Mot de l'ombre : Douleur amélioré",
   "nameSource": "officiel",
   "spell": 15275,
   "classic": "Augmente la durée de votre sort Mot de l'ombre : Douleur de 3 secondes.",
   "rank1": "Augmente la durée de votre sort Mot de l'ombre : Douleur de 3 secondes.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "pretre/shadow-magic-2-4": {
   "name": "Allonge de l'Ombre",
   "nameSource": "officiel",
   "spell": 17322,
   "classic": "Augmente de 6% la portée de vos sorts de dégâts d'Ombre.",
   "nameBranch": "classic",
   "ranks": [
    "Augmente de 10% la portée de vos sorts d’Ombre offensifs.",
    "Augmente de 20% la portée de vos sorts de dégâts d’Ombre."
   ],
   "rank1": "Augmente de 10% la portée de vos sorts d’Ombre offensifs.",
   "textSource": "editorial"
  },
  "pretre/shadow-magic-3-1": {
   "name": "Attaque mentale améliorée",
   "nameSource": "officiel",
   "spell": 15273,
   "classic": "Réduit le temps de recharge du sort Attaque mentale de 0.5 secondes.",
   "rank1": "Réduit le temps de recharge du sort Attaque mentale de 0.5 secondes.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "pretre/shadow-magic-3-2": {
   "name": "Cri psychique amélioré",
   "nameSource": "officiel",
   "spell": 15392,
   "classic": "Réduit le temps de recharge de votre sort Cri psychique de 2 sec.",
   "rank1": "Réduit le temps de recharge de votre sort Cri psychique de 2 sec.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "pretre/shadow-magic-3-3": {
   "name": "Fouet mental",
   "nameSource": "officiel",
   "spell": 15407,
   "classic": "Attaque l’esprit de la cible avec l’énergie de l’ombre. Inflige 75 points de dégâts d’ombre en 3 sec et réduit la vitesse de la cible de 50 %.",
   "rank1": "Attaque l’esprit de la cible avec l’énergie de l’ombre. Inflige 104 points de dégâts d’ombre en 3 sec et réduit la vitesse de la cible de 50 %.",
   "textSource": "officiel-chiffre",
   "nameBranch": "classic"
  },
  "pretre/shadow-magic-4-1": {
   "name": "Oubli amélioré",
   "nameSource": "officiel",
   "spell": 15274,
   "classic": "Diminue le temps de recharge de votre technique Oubli de 3 sec.",
   "rank1": "Diminue le temps de recharge de votre technique Oubli de 3 sec.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "pretre/shadow-magic-4-2": {
   "name": "Etreinte vampirique",
   "nameSource": "officiel",
   "spell": 15286,
   "classic": "Libère sur votre cible l’énergie de l’ombre, qui soigne tous les personnages de votre groupe de 20 % de tous les dégâts de sorts d’ombre que vous infligez pendant 1 min.",
   "nameBranch": "classic",
   "rank1": "Afflige votre cible d’une énergie d’ombre qui soigne tous les membres du groupe de 20% des dégâts d’Ombre que vous infligez pendant 30 sec. Étreinte vampirique permet aussi à votre talent Connexion spirituelle de se déclencher lorsqu’un ennemi qu’elle affecte meurt.",
   "textSource": "editorial"
  },
  "pretre/shadow-magic-4-3": {
   "name": "Tissage de l'ombre",
   "nameSource": "officiel",
   "spell": 15257,
   "classic": "Vos sorts d'Ombre ont 20% de chances de rendre la cible vulnérable aux dégâts d'Ombre. Les dégâts infligés à la cible sont alors augmentés de 3% pendant 15 sec. Cumulable jusqu'à 5 fois.",
   "nameBranch": "classic",
   "rank1": "Vos sorts de dégâts d’Ombre ont 33% de chances d’augmenter de 2% les dégâts d’Ombre que vous infligez pendant 15 sec, cumulable jusqu’à 5 fois.",
   "textSource": "editorial"
  },
  "pretre/shadow-magic-5-1": {
   "name": "Silence",
   "nameSource": "officiel",
   "spell": 15487,
   "classic": "Rend la cible silencieuse, l'empêchant de lancer des sorts pendant 5 sec.",
   "nameBranch": "classic",
   "rank1": "Rend la cible silencieuse, l’empêchant de lancer des sorts pendant 5 sec et interrompant son incantation pendant 3 sec.",
   "textSource": "editorial"
  },
  "pretre/shadow-magic-6-3": {
   "name": "Ténèbres",
   "nameSource": "officiel",
   "spell": 15259,
   "classic": "Augmente les dégâts de vos sorts d'Ombre de 2%.",
   "nameBranch": "classic",
   "rank1": "Augmente de 2% les dégâts d’Ombre que vous infligez.",
   "textSource": "editorial"
  },
  "pretre/shadow-magic-7-2": {
   "name": "Forme d'Ombre",
   "nameSource": "officiel",
   "spell": 15473,
   "classic": "Permet d’adopter une forme d’ombre qui augmente de 15 % les dégâts d’ombre infligés et réduit les dégâts physiques subis de 15 %, mais empêche de lancer des sorts du sacré.",
   "nameBranch": "classic",
   "rank1": "Adopte une forme d’Ombre qui augmente de 10% vos dégâts d’Ombre, réduit de 50% le coût en mana de tous vos sorts d’Ombre, augmente de 100% le bonus de dégâts critiques de vos sorts d’Ombre et réduit de 15% les dégâts physiques que vous subissez. En revanche, vous ne pouvez pas lancer de sorts de soins sous cette forme.",
   "textSource": "editorial"
  },
  "chaman/elemental-combat-1-2": {
   "name": "Convection",
   "nameSource": "officiel",
   "spell": 16039,
   "classic": "Réduit le coût en mana de vos sorts Horion, Eclair et Chaîne d'éclairs de 2%.",
   "nameBranch": "classic",
   "ranks": [
    "Réduit de 2% le coût en mana de vos sorts Horion, Éclair, Explosion de lave et Chaîne d’éclairs.",
    "Réduit de 4% le coût en mana de vos sorts Horion, Éclair, Explosion de lave et Chaîne d’éclairs.",
    "Réduit de 6% le coût en mana de vos sorts Horion, Éclair, Explosion de lave et Chaîne d’éclairs.",
    "Réduit de 8% le coût en mana de vos sorts Horion, Éclair, Explosion de lave et Chaîne d’éclairs.",
    "Réduit de 10% le coût en mana de vos sorts Horion, Éclair, Explosion de lave et Chaîne d’éclairs."
   ],
   "rank1": "Réduit de 2% le coût en mana de vos sorts Horion, Éclair, Explosion de lave et Chaîne d’éclairs.",
   "textSource": "editorial"
  },
  "chaman/elemental-combat-1-3": {
   "name": "Commotion",
   "nameSource": "officiel",
   "spell": 16035,
   "classic": "Augmente de 1% les dégâts infligés par vos sorts Eclair, Chaîne d'éclairs et Horion.",
   "nameBranch": "classic",
   "ranks": [
    "Augmente de 1% les dégâts infligés par vos sorts Éclair, Chaîne d’éclairs et Horion de terre.",
    "Augmente de 2% les dégâts infligés par vos sorts Éclair, Chaîne d’éclairs et Horion de terre.",
    "Augmente de 3% les dégâts infligés par vos sorts Éclair, Chaîne d’éclairs et Horion de terre.",
    "Augmente de 4% les dégâts infligés par vos sorts Éclair, Chaîne d’éclairs et Horion de terre.",
    "Augmente de 5% les dégâts infligés par vos sorts Éclair, Chaîne d’éclairs et Horion de terre."
   ],
   "rank1": "Augmente de 1% les dégâts infligés par vos sorts Éclair, Chaîne d’éclairs et Horion de terre.",
   "textSource": "editorial"
  },
  "chaman/elemental-combat-2-1": {
   "name": "Protection contre les éléments",
   "nameSource": "officiel",
   "spell": 28996,
   "classic": "Réduit les dégâts infligés par les effets de Feu, de Givre et de Nature de 4%.",
   "nameBranch": "classic",
   "ranks": [
    "Réduit de 3% les dégâts que vous subissez des effets de Feu, de Givre et de Nature.",
    "Réduit de 7% les dégâts que vous subissez des effets de Feu, de Givre et de Nature.",
    "Réduit de 10% les dégâts que vous subissez des effets de Feu, de Givre et de Nature."
   ],
   "rank1": "Réduit de 3% les dégâts que vous subissez des effets de Feu, de Givre et de Nature.",
   "textSource": "editorial"
  },
  "chaman/elemental-combat-2-2": {
   "name": "Réverbération",
   "nameSource": "officiel",
   "spell": 16040,
   "classic": "Réduit le temps de recharge de vos Horions de 0.2 secondes.",
   "rank1": "Réduit le temps de recharge de vos Horions de 0.2 secondes.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "chaman/elemental-combat-2-3": {
   "name": "Appel des flammes",
   "nameSource": "officiel",
   "spell": 16038,
   "classic": "Augmente de 5% les dégâts infligés par vos Totems de feu.",
   "nameBranch": "classic",
   "rank1": "Augmente de 5% les dégâts infligés par vos Totems de feu et par vos sorts Horion de flammes, Nova de feu et Explosion de lave.",
   "textSource": "editorial"
  },
  "chaman/elemental-combat-2-4": {
   "name": "Dévastation élémentaire",
   "nameSource": "officiel",
   "spell": 30160,
   "classic": "Vos coups critiques obtenus avec des sorts offensifs augmentent de 3% vos chances d'obtenir un coup critique avec les attaques de mêlée pendant 10 sec.",
   "nameBranch": "classic",
   "rank1": "Vos coups critiques de sorts offensifs augmentent de 3% vos chances de coup critique avec vos attaques de mêlée pendant 10 sec.",
   "textSource": "editorial"
  },
  "chaman/elemental-combat-3-2": {
   "name": "Focalisation élémentaire",
   "nameSource": "officiel",
   "spell": 16164,
   "classic": "Vous confère 10% de chances d'entrer dans un état \"Idées claires\" après avoir lancé un sort de dégâts de Feu, de Givre ou de Nature. Idées claires réduit le coût en mana de votre prochain sort de dégâts de 100%.",
   "rank1": "Vous confère 10% de chances d'entrer dans un état \"Idées claires\" après avoir lancé un sort de dégâts de Feu, de Givre ou de Nature. Idées claires réduit le coût en mana de votre prochain sort de dégâts de 100%.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "chaman/elemental-combat-3-3": {
   "name": "Fureur élémentaire",
   "nameSource": "officiel",
   "spell": 16089,
   "classic": "Augmente de 100% le bonus en points de dégâts des coups critiques obtenus avec les Totems incendiaires, Nova de Feu de Magma ainsi qu'avec les sorts de Feu, de Givre et de Nature.",
   "nameBranch": "classic",
   "rank1": "Augmente de 20% le bonus de dégâts critiques de vos Totems incendiaire et de magma, ainsi que de vos sorts de Feu, de Givre et de Nature.",
   "textSource": "editorial"
  },
  "chaman/elemental-combat-4-1": {
   "name": "Totems de Feu améliorés",
   "nameSource": "adapte",
   "spell": 16086,
   "classic": "Réduit le délai avant activation de votre Totem Nova de feu de 1 sec. et diminue la menace générée par votre Totem de Magma de 25%.",
   "note": "Forever a renommé ce talent : le client français ne connaît que « Totems de Feu améliorés » (anciennement « Improved Fire Totems »).",
   "nameBranch": "classic",
   "rank1": "Augmente de 10% les dégâts de votre sort Nova de feu et réduit de 2 sec son temps de recharge.",
   "textSource": "editorial"
  },
  "chaman/elemental-combat-4-2": {
   "name": "Oeil du cyclone",
   "nameSource": "officiel",
   "spell": 29062,
   "classic": "Vous confère 33% de chances de bénéficier de l'effet Incantation focalisée pendant 6 sec après avoir été victime d'un coup critique en mêlée ou à distance. Cet effet vous évite, lors de l'incantation d'un sort, d'être interrompu lorsque vous subissez des dégâts.",
   "nameBranch": "classic",
   "rank1": "Réduit de 23% le recul subi lorsque vous encaissez des dégâts pendant l’incantation d’Éclair, de Chaîne d’éclairs et d’Explosion de lave.",
   "textSource": "editorial"
  },
  "chaman/elemental-combat-4-3": {
   "name": "Appel de la foudre",
   "nameSource": "officiel",
   "spell": 16041,
   "classic": "Augmente vos chances de réaliser un coup critique avec vos sorts Eclair et Chaîne d'éclairs de 1% supplémentaires.",
   "nameBranch": "classic",
   "rank1": "Augmente de 3% les chances de coup critique de vos sorts Éclair et Chaîne d’éclairs.",
   "textSource": "editorial"
  },
  "chaman/elemental-combat-5-1": {
   "name": "Allonge de la tempête",
   "nameSource": "adapte",
   "spell": 28999,
   "classic": "Augmente la portée de vos sorts Eclair et Chaîne d'éclairs de 3 mètres.",
   "note": "Forever a renommé ce talent : le client français ne connaît que « Allonge de la tempête » (anciennement « Storm Reach »).",
   "nameBranch": "classic",
   "rank1": "Augmente de 3 mètres la portée de vos sorts Éclair, Chaîne d’éclairs, Nova de feu et Explosion de lave, et de 8 mètres celle de votre sort Horion de flammes.",
   "textSource": "editorial"
  },
  "chaman/elemental-combat-6-3": {
   "name": "Maîtrise de la foudre",
   "nameSource": "adapte",
   "spell": 16578,
   "classic": "Réduit le temps d'incantation de vos sorts Eclair et Chaîne d'éclairs de 0.2 secondes.",
   "note": "Forever a renommé ce talent : le client français ne connaît que « Maîtrise de la foudre » (anciennement « Lightning Mastery »).",
   "nameBranch": "classic",
   "rank1": "Réduit de 0,17 sec le temps d’incantation de vos sorts Éclair, Chaîne d’éclairs et Explosion de lave.",
   "textSource": "editorial"
  },
  "chaman/enhancement-1-1": {
   "name": "Emprise de la terre",
   "nameSource": "officiel",
   "spell": 16043,
   "classic": "Augmente les points de vie de votre Totem Griffe de pierre de 25% et le rayon de votre Totem de lien terrestre de 10%.",
   "rank1": "Augmente les points de vie de votre Totem Griffe de pierre de 25% et le rayon de votre Totem de lien terrestre de 10%.",
   "textSource": "officiel",
   "nameBranch": "wotlk"
  },
  "chaman/enhancement-1-2": {
   "name": "Frappe foudroyante",
   "nameSource": "officiel",
   "spell": 16255,
   "classic": "Augmente de 1% vos chances d'infliger un coup critique avec votre arme.",
   "nameBranch": "classic",
   "rank1": "Augmente de 1% vos chances de coup critique avec tous vos sorts et attaques.",
   "textSource": "editorial"
  },
  "chaman/enhancement-1-3": {
   "name": "Connaissance ancestrale",
   "nameSource": "officiel",
   "spell": 17485,
   "classic": "Augmente votre maximum de points de mana de 1%.",
   "nameBranch": "classic",
   "rank1": "Augmente de 2% votre Intelligence.",
   "textSource": "editorial"
  },
  "chaman/enhancement-2-1": {
   "name": "Totems gardiens",
   "nameSource": "officiel",
   "spell": 16258,
   "classic": "Augmente de 10% le nombre de points de dégâts absorbés par votre Totem Peau de pierre et votre Totem de Mur des vents et réduit le temps de recharge de votre Totem de Glèbe de 1 sec.",
   "rank1": "Augmente de 10% le nombre de points de dégâts absorbés par votre Totem Peau de pierre et votre Totem de Mur des vents et réduit le temps de recharge de votre Totem de Glèbe de 1 sec.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "chaman/enhancement-2-3": {
   "name": "Loup fantôme amélioré",
   "nameSource": "officiel",
   "spell": 16262,
   "classic": "Réduit le temps d'incantation de votre sort Loup fantôme de 1 secondes.",
   "nameBranch": "classic",
   "rank1": "Réduit de 1,0 sec le temps d’incantation de votre sort Loup fantôme, qui devient en outre utilisable en intérieur.",
   "textSource": "editorial",
   "ranks": [
    "Réduit de 1,0 sec le temps d’incantation de votre sort Loup fantôme, qui devient en outre utilisable en intérieur.",
    "Réduit de 3 sec le temps d’incantation de votre sort Loup fantôme, qui devient en outre utilisable en intérieur."
   ]
  },
  "chaman/enhancement-2-4": {
   "name": "Bouclier de foudre amélioré",
   "nameSource": "officiel",
   "spell": 16261,
   "classic": "Augmente de 5% les dégâts infligés par les orbes de votre Bouclier de foudre.",
   "rank1": "Augmente de 5% les dégâts infligés par les orbes de votre Bouclier de foudre.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "chaman/enhancement-3-1": {
   "name": "Armes élémentaires",
   "nameSource": "officiel",
   "spell": 16266,
   "classic": "Augmente de 7% le bonus de puissance d'attaque en mêlée conféré par votre Arme Croque-roc, de 13% votre effet Arme Furie-des-vents, et de 5% les dégâts causés par votre Arme Langue de feu et votre Arme de givre.",
   "rank1": "Augmente de 7% le bonus de puissance d'attaque en mêlée conféré par votre Arme Croque-roc, de 13% votre effet Arme Furie-des-vents, et de 5% les dégâts causés par votre Arme Langue de feu et votre Arme de givre.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "chaman/enhancement-3-4": {
   "name": "Anticipation",
   "nameSource": "officiel",
   "spell": 16254,
   "classic": "Augmente de 1% vos chances d'esquiver.",
   "rank1": "Augmente de 2% vos chances d'esquiver.",
   "textSource": "officiel-chiffre",
   "nameBranch": "classic"
  },
  "chaman/enhancement-4-1": {
   "name": "Résistance",
   "nameSource": "officiel",
   "spell": 16252,
   "classic": "Augmente le score d'armure des objets de 2%.",
   "nameBranch": "classic",
   "rank1": "Augmente de 2% votre Endurance.",
   "textSource": "editorial"
  },
  "chaman/enhancement-4-2": {
   "name": "Rafale",
   "nameSource": "officiel",
   "spell": 16256,
   "classic": "Lorsque vous infligez un coup critique, augmente votre vitesse d'attaque de 10% pour les 3 prochaines attaques.",
   "nameBranch": "classic",
   "ranks": [
    "Augmente de 5% votre vitesse d’attaque pour vos 3 prochains coups après un coup critique de mêlée.",
    "Augmente de 10% votre vitesse d’attaque pour vos 3 prochains coups après un coup critique.",
    "Augmente de 15% votre vitesse d’attaque pour vos 3 prochains coups après un coup critique.",
    "Augmente de 20% votre vitesse d’attaque pour vos 3 prochains coups après un coup critique.",
    "Augmente de 25% votre vitesse d’attaque pour vos 3 prochains coups après un coup critique."
   ],
   "rank1": "Augmente de 5% votre vitesse d’attaque pour vos 3 prochains coups après un coup critique de mêlée.",
   "textSource": "editorial"
  },
  "chaman/enhancement-4-3": {
   "name": "Courroux naturel",
   "nameSource": "officiel",
   "spell": 17364,
   "classic": "Donne une attaque supplémentaire. De plus, les deux prochaines sources de dégâts de nature infligés à la cible sont augmentées de 20 %. Dure 12 sec.",
   "nameBranch": "classic",
   "rank1": "Frappe instantanément pour les dégâts normaux de l’arme et augmente de 20% les dégâts que vous infligez à la cible avec votre prochain sort Éclair, Chaîne d’éclairs ou Choc de terre, pendant 12 sec.",
   "textSource": "editorial"
  },
  "chaman/enhancement-5-1": {
   "name": "Parade",
   "nameSource": "adapte",
   "spell": 16268,
   "classic": "Donne une chance de parer les attaques de mêlée des ennemis.",
   "note": "Forever a renommé ce talent : le client français ne connaît que « Parade » (anciennement « Parry »).",
   "nameBranch": "classic",
   "rank1": "Vous donne une chance de parer les attaques de mêlée ennemies, réduit de 30% toute la menace générée par vos attaques tant qu’Arme de mordroche est inactive, et l’augmente de 30% tant qu’Arme de mordroche est active.",
   "textSource": "editorial"
  },
  "chaman/restoration-1-2": {
   "name": "Vague de soins améliorée",
   "nameSource": "officiel",
   "spell": 16182,
   "classic": "Réduit le temps d'incantation de votre sort Vague de soins de 0.1 secondes.",
   "rank1": "Réduit le temps d'incantation de votre sort Vague de soins de 0.1 secondes.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "chaman/restoration-1-3": {
   "name": "Maîtrise des flots",
   "nameSource": "officiel",
   "spell": 16194,
   "classic": "Augmente les chances d'obtenir un effet critique avec vos sorts de soins et d'éclair de 1%.",
   "nameBranch": "classic",
   "rank1": "Augmente de 1% les chances d’effet critique de vos sorts de soins.",
   "textSource": "editorial"
  },
  "chaman/restoration-2-2": {
   "name": "Grâce guérisseuse",
   "nameSource": "adapte",
   "spell": 29187,
   "classic": "Diminue le niveau de menace généré par vos sorts de soins de 5%.",
   "note": "Forever a renommé ce talent : le client français ne connaît que « Grâce guérisseuse » (anciennement « Healing Grace »).",
   "nameBranch": "classic",
   "rank1": "Réduit de 5% la menace générée par vos sorts.",
   "textSource": "editorial"
  },
  "chaman/restoration-2-3": {
   "name": "Focalisation des flots",
   "nameSource": "officiel",
   "spell": 16179,
   "classic": "Réduit de 1% le coût en mana de vos sorts de soins.",
   "nameBranch": "classic",
   "ranks": [
    "Réduit de 1% le coût en mana de vos sorts de soins et augmente de 1% vos chances de toucher avec tous vos sorts et attaques.",
    "Réduit de 2% le coût en mana de vos sorts de soins et augmente de 2% vos chances de toucher avec vos sorts et attaques.",
    "Réduit de 3% le coût en mana de vos sorts de soins et augmente de 3% vos chances de toucher avec vos sorts et attaques.",
    "Réduit de 4% le coût en mana de vos sorts de soins et augmente de 4% vos chances de toucher avec vos sorts et attaques.",
    "Réduit de 5% le coût en mana de vos sorts de soins et augmente de 5% vos chances de toucher avec vos sorts et attaques."
   ],
   "rank1": "Réduit de 1% le coût en mana de vos sorts de soins et augmente de 1% vos chances de toucher avec tous vos sorts et attaques.",
   "textSource": "editorial"
  },
  "chaman/restoration-2-4": {
   "name": "Réincarnation améliorée",
   "nameSource": "officiel",
   "spell": 16184,
   "classic": "Réduit le temps de recharge de votre sort Réincarnation de 10 minutes et augmente le nombre de points de vie et de mana avec lesquels vous vous réincarnez de 10% supplémentaires.",
   "nameBranch": "classic",
   "ranks": [
    "Réduit de 10 min le temps de recharge de votre sort Réincarnation, augmente de 2% votre maximum de points de vie et de 10% supplémentaires le montant de vie et de mana avec lequel vous vous réincarnez.",
    "Réduit de 20 min le temps de recharge de votre sort Réincarnation, augmente de 4% votre maximum de points de vie et de 20% supplémentaires le montant de vie et de mana avec lequel vous vous réincarnez."
   ],
   "rank1": "Réduit de 10 min le temps de recharge de votre sort Réincarnation, augmente de 2% votre maximum de points de vie et de 10% supplémentaires le montant de vie et de mana avec lequel vous vous réincarnez.",
   "textSource": "editorial"
  },
  "chaman/restoration-3-1": {
   "name": "Guérison des anciens",
   "nameSource": "officiel",
   "spell": 16176,
   "classic": "Augmente le score d'armure de la cible de 8% pendant 15 sec lorsque vous obtenez un effet critique en la soignant.",
   "rank1": "Augmente le score d'armure de la cible de 8% pendant 15 sec lorsque vous obtenez un effet critique en la soignant.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "chaman/restoration-3-2": {
   "name": "Focalisation des soins",
   "nameSource": "officiel",
   "spell": 16181,
   "classic": "Vous donne 14% de chances d'éviter d'être interrompu par des dégâts subis quand vous lancez un sort de soins.",
   "rank1": "Vous donne 23% de chances d'éviter d'être interrompu par des dégâts subis quand vous lancez un sort de soins.",
   "textSource": "officiel-chiffre",
   "nameBranch": "classic"
  },
  "chaman/restoration-4-1": {
   "name": "Focalisation totémique",
   "nameSource": "officiel",
   "spell": 16173,
   "classic": "Réduit le coût en mana de vos sorts Totem de 5%.",
   "nameBranch": "classic",
   "ranks": [
    "Réduit de 5% le coût en mana de vos totems et de tous les sorts qui les invoquent ou les déplacent.",
    "Réduit de 10% le coût en mana de vos totems et de tous les sorts qui les invoquent ou les déplacent.",
    "Réduit de 15% le coût en mana de vos totems et de tous les sorts qui les invoquent ou les déplacent.",
    "Réduit de 20% le coût en mana de vos totems et de tous les sorts qui les invoquent ou les déplacent.",
    "Réduit de 25% le coût en mana de vos totems et de tous les sorts qui les invoquent ou les déplacent."
   ],
   "rank1": "Réduit de 5% le coût en mana de vos totems et de tous les sorts qui les invoquent ou les déplacent.",
   "textSource": "editorial"
  },
  "chaman/restoration-4-2": {
   "name": "Totems de restauration",
   "nameSource": "officiel",
   "spell": 16187,
   "classic": "Augmente de 5% les effets de votre Totem Fontaine de mana et de votre Totem guérisseur.",
   "nameBranch": "classic",
   "ranks": [
    "Augmente de 5% l’effet de votre Totem Fontaine de mana et de 10% celui de votre Totem guérisseur.",
    "Augmente de 10% l’effet de votre Totem Fontaine de mana et de 20% celui de votre Totem guérisseur.",
    "Augmente de 15% l’effet de votre Totem Fontaine de mana et de 30% celui de votre Totem guérisseur.",
    "Augmente de 20% l’effet de votre Totem Fontaine de mana et de 40% celui de votre Totem guérisseur.",
    "Augmente de 25% l’effet de votre Totem Fontaine de mana et de 50% celui de votre Totem guérisseur."
   ],
   "rank1": "Augmente de 5% l’effet de votre Totem Fontaine de mana et de 10% celui de votre Totem guérisseur.",
   "textSource": "editorial"
  },
  "chaman/restoration-4-3": {
   "name": "Totem de Vague de mana",
   "nameSource": "officiel",
   "spell": 16190,
   "classic": "Invoque un Totem de Vague de mana aux pieds du lanceur de sorts ; le Totem dispose de 5 points de vie. Agit pendant 12 s. Il rend 170 points de mana toutes les 3 secondes, à tous les membres du groupe qui se trouvent dans une zone de 20 mètres.",
   "rank1": "Invoque un Totem de Vague de mana aux pieds du lanceur de sorts ; le Totem dispose de 5 points de vie. Agit pendant 12 s. Il rend 88 points de mana toutes les 3 secondes, à tous les membres du groupe qui se trouvent dans une zone de 30 mètres.",
   "textSource": "officiel-chiffre",
   "nameBranch": "classic"
  },
  "chaman/restoration-5-2": {
   "name": "Flots de soins",
   "nameSource": "officiel",
   "spell": 29206,
   "classic": "Vos Vagues de soins ont 33% de chances d'augmenter les effets des vagues de soins suivantes sur cette cible de 6% pendant 15 sec. Cet effet peut se cumuler au maximum 3 fois.",
   "nameBranch": "classic",
   "ranks": [
    "Augmente de 8% le nombre de points de vie rendus par votre sort Vague de soins.",
    "Augmente de 17% le nombre de points de vie rendus par votre sort Vague de soins.",
    "Augmente de 25% le nombre de points de vie rendus par votre sort Vague de soins."
   ],
   "rank1": "Augmente de 8% le nombre de points de vie rendus par votre sort Vague de soins.",
   "textSource": "editorial"
  },
  "chaman/restoration-5-3": {
   "name": "Rapidité de la nature",
   "nameSource": "officiel",
   "spell": 16188,
   "classic": "Activé, votre prochain sort de Nature dont le temps d'incantation est inférieur à 10 secondes devient un sort instantané.",
   "rank1": "Activé, votre prochain sort de Nature dont le temps d'incantation est inférieur à 10 secondes devient un sort instantané.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "chaman/restoration-6-3": {
   "name": "Purification",
   "nameSource": "officiel",
   "spell": 16178,
   "classic": "Augmente l’efficacité de vos sorts de soins de 2 %.",
   "rank1": "Augmente l’efficacité de vos sorts de soins de 2 %.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "mage/arcane-1-1": {
   "name": "Spécialisation Baguette",
   "nameSource": "officiel",
   "spell": 6057,
   "classic": "Augmente de 13% les points de dégâts que vous infligez avec une Baguette.",
   "rank1": "Augmente de 13% les points de dégâts que vous infligez avec une Baguette.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "mage/arcane-1-2": {
   "name": "Focalisation des arcanes",
   "nameSource": "officiel",
   "spell": 11222,
   "classic": "Réduit de 2% les chances que votre adversaire résiste à vos sorts des Arcanes.",
   "nameBranch": "classic",
   "rank1": "Augmente de 1% vos chances de toucher avec vos sorts des Arcanes.",
   "textSource": "editorial"
  },
  "mage/arcane-1-3": {
   "name": "Projectiles des arcanes améliorés",
   "nameSource": "adapte",
   "spell": 11237,
   "classic": "Vous donne 20 % de chances d’éviter les interruptions provoquées par les dégâts pendant que vous canalisez Projectiles des arcanes .",
   "note": "Forever a renommé ce talent : le client français ne connaît que « Projectiles des arcanes améliorés » (anciennement « Improved Arcane Missiles »).",
   "nameBranch": "classic",
   "rank1": "Vous donne 20% de chances d’éviter l’interruption causée par les dégâts pendant que vous canalisez Projectiles des arcanes, et 14% pendant l’incantation de Décharge des arcanes.",
   "textSource": "editorial"
  },
  "mage/arcane-2-1": {
   "name": "Subtilité des arcanes",
   "nameSource": "officiel",
   "spell": 11210,
   "classic": "Réduit de 5 la résistance de votre cible à tous les types de magie, et diminue de 20% la menace générée par vos sorts d'Arcanes.",
   "rank1": "Réduit de 8 la résistance de votre cible à tous les types de magie, et diminue de 15% la menace générée par vos sorts d'Arcanes.",
   "textSource": "officiel-chiffre",
   "nameBranch": "classic"
  },
  "mage/arcane-2-2": {
   "name": "Absorption de magie",
   "nameSource": "officiel",
   "spell": 29441,
   "classic": "Augmente toutes les résistances de 2. Tous les sorts auxquels vous résistez entièrement restaurent 1% de votre total de mana. Temps de recharge d'1 sec.",
   "nameBranch": "classic",
   "rank1": "Augmente de 5 toutes vos résistances et fait que chaque sort auquel vous résistez entièrement vous rend 1% de votre mana total. Ne peut pas se déclencher plus d’1 fois par sec.",
   "textSource": "editorial"
  },
  "mage/arcane-2-3": {
   "name": "Concentration des arcanes",
   "nameSource": "officiel",
   "spell": 11213,
   "classic": "Vous confère 2% de chances d'entrer dans un état \"Idées claires\" après avoir infligé des dégâts avec un sort à la cible. Cet état réduit le coût en mana de votre prochain sort de 100%.",
   "rank1": "Vous confère 2% de chances d'entrer dans un état \"Idées claires\" après avoir infligé des dégâts avec un sort à la cible. Cet état réduit le coût en mana de votre prochain sort de 100%.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "mage/arcane-2-4": {
   "name": "Résistance des arcanes",
   "nameSource": "officiel",
   "spell": 28574,
   "classic": "Augmente votre Armure d'un montant égal à 50% de votre Intelligence.",
   "rank1": "Augmente votre Armure d'un montant égal à 25% de votre Intelligence.",
   "textSource": "officiel-chiffre",
   "nameBranch": "classic"
  },
  "mage/arcane-3-2": {
   "name": "Explosion des arcanes améliorée",
   "nameSource": "adapte",
   "spell": 11242,
   "classic": "Augmente de 2% supplémentaires les chances d'infliger un coup critique avec votre sort Explosion des arcanes.",
   "note": "Forever a renommé ce talent : le client français ne connaît que « Explosion des arcanes améliorée » (anciennement « Improved Arcane Explosion »).",
   "nameBranch": "classic",
   "rank1": "Augmente de 2% les chances de coup critique de vos sorts des Arcanes.",
   "textSource": "editorial"
  },
  "mage/arcane-4-1": {
   "name": "Bouclier de mana amélioré",
   "nameSource": "adapte",
   "spell": 11252,
   "classic": "Diminue de 10% le mana perdu par point de dégâts reçu lorsque Bouclier de mana est actif.",
   "note": "Forever a renommé ce talent : le client français ne connaît que « Bouclier de mana amélioré » (anciennement « Improved Mana Shield »).",
   "nameBranch": "classic",
   "rank1": "Réduit de 17% le mana perdu par point de dégâts subi tant que votre sort Bouclier de mana est actif, et augmente de 25% les résistances conférées par votre sort Armure de mage.",
   "textSource": "editorial"
  },
  "mage/arcane-4-2": {
   "name": "Contresort amélioré",
   "nameSource": "officiel",
   "spell": 11255,
   "classic": "Confère 50% de chances à votre Contresort de rendre la cible muette pendant 4 sec.",
   "nameBranch": "classic",
   "rank1": "Votre Contresort rend également la cible silencieuse pendant 2 sec.",
   "textSource": "editorial"
  },
  "mage/arcane-4-3": {
   "name": "Méditation des arcanes",
   "nameSource": "officiel",
   "spell": 18462,
   "classic": "Vous confère 5% de votre vitesse de récupération du mana normale pendant l'incantation.",
   "nameBranch": "classic",
   "ranks": [
    "Permet à 17% de votre régénération de mana de se poursuivre pendant l’incantation.",
    "Permet à 33% de votre régénération de mana de se poursuivre pendant l’incantation.",
    "Permet à 50% de votre régénération de mana de se poursuivre pendant l’incantation."
   ],
   "rank1": "Permet à 17% de votre régénération de mana de se poursuivre pendant l’incantation.",
   "textSource": "editorial"
  },
  "mage/arcane-5-2": {
   "name": "Présence spirituelle",
   "nameSource": "officiel",
   "spell": 12043,
   "classic": "Lorsque cette technique est activée, votre prochain sort de mage dont le temps d'incantation est inférieur à 10 sec. devient un sort instantané.",
   "rank1": "Lorsque cette technique est activée, votre prochain sort de mage dont le temps d'incantation est inférieur à 10 sec. devient un sort instantané.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "mage/arcane-5-3": {
   "name": "Esprit des arcanes",
   "nameSource": "officiel",
   "spell": 11232,
   "classic": "Augmente votre maximum de points de mana de 2%.",
   "nameBranch": "classic",
   "ranks": [
    "Augmente de 2% votre Intelligence et de 20% le bonus de dégâts critiques de vos sorts des Arcanes.",
    "Augmente de 4% votre Intelligence maximale et de 40% le bonus de dégâts critiques de vos sorts des Arcanes.",
    "Augmente de 6% votre Intelligence maximale et de 60% le bonus de dégâts critiques de vos sorts des Arcanes.",
    "Augmente de 8% votre Intelligence maximale et de 80% le bonus de dégâts critiques de vos sorts des Arcanes.",
    "Augmente de 10% votre Intelligence maximale et de 100% le bonus de dégâts critiques de vos sorts des Arcanes."
   ],
   "rank1": "Augmente de 2% votre Intelligence et de 20% le bonus de dégâts critiques de vos sorts des Arcanes.",
   "textSource": "editorial"
  },
  "mage/arcane-6-3": {
   "name": "Instabilité des arcanes",
   "nameSource": "officiel",
   "spell": 15058,
   "classic": "Augmente de 1% les dégâts de vos sorts et leurs chances de coup critique.",
   "nameBranch": "classic",
   "rank1": "Augmente de 1% les dégâts de tous vos sorts et de 1% vos chances de coup critique avec toutes vos attaques.",
   "textSource": "editorial"
  },
  "mage/arcane-7-2": {
   "name": "Pouvoir des arcanes",
   "nameSource": "officiel",
   "spell": 12042,
   "classic": "Lorsqu'il est activé, vos sorts infligent 30% de points de dégâts supplémentaires et ils vous coûtent 30% de points de mana supplémentaires. Cet effet dure 15 sec.",
   "nameBranch": "classic",
   "rank1": "Pendant 15 sec, vos sorts infligent 30% de dégâts supplémentaires mais coûtent 30% de mana en plus.",
   "textSource": "editorial"
  },
  "mage/fire-1-1": {
   "name": "Trait de feu amélioré",
   "nameSource": "adapte",
   "spell": 11078,
   "classic": "Réduit le temps de recharge de votre sort Trait de feu de 0.5 secondes.",
   "note": "Forever a renommé ce talent : le client français ne connaît que « Trait de feu amélioré » (anciennement « Improved Fire Blast »).",
   "nameBranch": "classic",
   "rank1": "Réduit de 1 sec le temps de recharge de votre sort Trait de feu. Tuer une cible non triviale augmente, pendant les 20 sec qui suivent, de 25% les chances de coup critique de votre prochain Trait de feu.",
   "textSource": "editorial"
  },
  "mage/fire-1-2": {
   "name": "Incinérer",
   "nameSource": "adapte",
   "spell": 18459,
   "classic": "Augmente de 2% les chances d'infliger un coup critique avec vos sorts Trait de feu et Brûlure.",
   "note": "Forever a renommé ce talent : le client français ne connaît que « Incinérer » (anciennement « Incinerate »).",
   "nameBranch": "classic",
   "rank1": "Augmente de 2% les chances de coup critique de vos sorts Trait de feu, Lance de glace, Décharge des arcanes et Brûlure.",
   "textSource": "editorial"
  },
  "mage/fire-1-3": {
   "name": "Boule de feu améliorée",
   "nameSource": "officiel",
   "spell": 11069,
   "classic": "Réduit le temps d'incantation de votre sort Boule de feu de 0.1 secondes.",
   "nameBranch": "classic",
   "rank1": "Réduit de 0,1 sec le temps d’incantation de vos sorts Boule de feu et Trait de givre-feu.",
   "textSource": "editorial"
  },
  "mage/fire-2-1": {
   "name": "Enflammer",
   "nameSource": "officiel",
   "spell": 11119,
   "classic": "Les coups critiques infligés par vos sorts de Feu enflamment la cible et lui infligent 8% des points de dégâts de vos sorts en plus, en 4 sec.",
   "rank1": "Les coups critiques infligés par vos sorts de Feu enflamment la cible et lui infligent 8% des points de dégâts de vos sorts en plus, en 4 sec.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "mage/fire-2-2": {
   "name": "Jet de flammes",
   "nameSource": "officiel",
   "spell": 11100,
   "classic": "Augmente la portée de vos sorts de Feu de 3 mètres.",
   "rank1": "Augmente la portée de vos sorts de Feu de 3 mètres.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "mage/fire-2-3": {
   "name": "Impact",
   "nameSource": "officiel",
   "spell": 11103,
   "classic": "Confère 2% de chances à vos sorts de Feu d'étourdir vos cibles pendant 2 sec.",
   "rank1": "Confère 3% de chances à vos sorts de Feu d'étourdir vos cibles pendant 2 sec.",
   "textSource": "officiel-chiffre",
   "nameBranch": "classic"
  },
  "mage/fire-3-1": {
   "name": "Ame ardente",
   "nameSource": "officiel",
   "spell": 11083,
   "classic": "Vos sorts de Feu gagnent 35% de chances de ne pas être retardés lorsque vous subissez des dégâts pendant l'incantation, et la menace qu'ils génèrent est réduite de 15%.",
   "rank1": "Vos sorts de Feu gagnent 23% de chances de ne pas être retardés lorsque vous subissez des dégâts pendant l'incantation, et la menace qu'ils génèrent est réduite de 10%.",
   "textSource": "officiel-chiffre",
   "nameBranch": "classic"
  },
  "mage/fire-3-2": {
   "name": "Choc de flammes amélioré",
   "nameSource": "officiel",
   "spell": 11108,
   "classic": "Augmente de 5% vos chances de réaliser un coup critique avec votre sort Choc de flammes.",
   "rank1": "Augmente de 5% vos chances de réaliser un coup critique avec votre sort Choc de flammes.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "mage/fire-3-3": {
   "name": "Explosion pyrotechnique",
   "nameSource": "officiel",
   "spell": 11366,
   "classic": "Lance un immense rocher enflammé qui inflige 148 à 195 points de dégâts de Feu et 56 points de dégâts de Feu supplémentaires en 12 sec.",
   "rank1": "Lance un immense rocher enflammé qui inflige 155 à 185 points de dégâts de Feu et 76 points de dégâts de Feu supplémentaires en 12 sec.",
   "textSource": "officiel-chiffre",
   "nameBranch": "classic"
  },
  "mage/fire-4-1": {
   "name": "Brûlure améliorée",
   "nameSource": "officiel",
   "spell": 11095,
   "classic": "Vos sorts de Brûlure ont 33% de chances de rendre votre cible vulnérable aux dégâts de Feu. Cette vulnérabilité augmente les dégâts de Feu infligés à la cible de 3% et dure 30 sec. Cumulable jusqu'à 5 fois.",
   "nameBranch": "classic",
   "ranks": [
    "Votre sort Brûlure a 33% de chances de rendre votre cible vulnérable aux dégâts de Feu. Cette vulnérabilité augmente de 3% tous les dégâts de Feu que vous lui infligez et dure 30 sec, cumulable jusqu’à 5 fois.",
    "Vos sorts Brûlure ont 67% de chances de rendre votre cible vulnérable aux dégâts de Feu. Cette vulnérabilité augmente de 3% tous les dégâts de Feu que vous lui infligez et dure 30 sec, cumulable jusqu’à 5 fois.",
    "Vos sorts Brûlure ont 100% de chances de rendre votre cible vulnérable aux dégâts de Feu. Cette vulnérabilité augmente de 3% tous les dégâts de Feu que vous lui infligez et dure 30 sec, cumulable jusqu’à 5 fois."
   ],
   "rank1": "Votre sort Brûlure a 33% de chances de rendre votre cible vulnérable aux dégâts de Feu. Cette vulnérabilité augmente de 3% tous les dégâts de Feu que vous lui infligez et dure 30 sec, cumulable jusqu’à 5 fois.",
   "textSource": "editorial"
  },
  "mage/fire-4-2": {
   "name": "Gardien de feu amélioré",
   "nameSource": "officiel",
   "spell": 11094,
   "classic": "Confère à votre Gardien de feu 10% de chances de renvoyer les sorts de Feu tant qu'il est actif.",
   "rank1": "Confère à votre Gardien de feu 10% de chances de renvoyer les sorts de Feu tant qu'il est actif.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "mage/fire-4-4": {
   "name": "Maître des éléments",
   "nameSource": "officiel",
   "spell": 29074,
   "classic": "Les coups critiques obtenus avec les sorts de Feu et de Givre vous rendront 10% de leur coût en mana de base.",
   "nameBranch": "classic",
   "rank1": "Vos coups critiques de Feu et de Givre vous rendent 10% de leur coût en mana de base.",
   "textSource": "editorial"
  },
  "mage/fire-5-2": {
   "name": "Masse critique",
   "nameSource": "officiel",
   "spell": 11115,
   "classic": "Augmente de 2% vos chances d'infliger un coup critique avec vos sorts de Feu.",
   "rank1": "Augmente de 2% vos chances d'infliger un coup critique avec vos sorts de Feu.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "mage/fire-5-3": {
   "name": "Vague explosive",
   "nameSource": "officiel",
   "spell": 11113,
   "classic": "Une vague de flammes rayonne autour du lanceur et inflige à tous les ennemis pris dans l'explosion 160 à 192 points de dégâts de Feu, en plus de les hébéter pendant 6 sec.",
   "nameBranch": "classic",
   "rank1": "Une vague de flammes rayonne autour du lanceur, infligeant 160 à 191 points de dégâts de Feu à tous les ennemis pris dans l’explosion et les hébétant, ce qui réduit leur vitesse de déplacement de 50% pendant 6 sec.",
   "textSource": "editorial"
  },
  "mage/fire-6-3": {
   "name": "Puissance du feu",
   "nameSource": "officiel",
   "spell": 11124,
   "classic": "Augmente de 2% les points de dégâts infligés par vos sorts de Feu.",
   "rank1": "Augmente de 2% les points de dégâts infligés par vos sorts de Feu.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "mage/fire-7-2": {
   "name": "Combustion",
   "nameSource": "officiel",
   "spell": 11129,
   "classic": "Lorsqu'il est activé, ce sort augmente vos chances de coup critique avec les sorts de dégâts de Feu de 10% chaque fois que vous touchez avec un sort de ce type. Cet effet dure jusqu'à ce que vous ayez infligé 3 coups critiques avec des sorts de Feu.",
   "nameBranch": "classic",
   "rank1": "Une fois activé, ce sort augmente de 10% vos chances de coup critique avec les sorts de dégâts de Feu chaque fois que l’un d’eux touche. L’effet dure jusqu’à ce que vous ayez infligé 4 coups critiques non périodiques avec des sorts de Feu.",
   "textSource": "editorial"
  },
  "mage/frost-1-1": {
   "name": "Protection contre le Givre",
   "nameSource": "officiel",
   "spell": 11189,
   "classic": "Augmente de 15% l'armure et les résistances octroyées par vos sorts Armure de givre et Armure de glace. De plus, donne à votre Gardien de givre 10% de chances de renvoyer les sorts et effets de Givre tant qu'il est actif.",
   "nameBranch": "classic",
   "ranks": [
    "Augmente de 15% l’armure et les résistances conférées par vos sorts Armure de givre et Armure de glace. De plus, confère à votre Gardien de givre 10% de chances de renvoyer les sorts et effets de Givre tant qu’il est actif.",
    "Augmente de 30% l’armure et les résistances conférées par vos sorts Armure de givre et Armure de glace. De plus, confère à votre Gardien de givre 20% de chances de renvoyer les sorts et effets de Givre tant qu’il est actif."
   ],
   "rank1": "Augmente de 15% l’armure et les résistances conférées par vos sorts Armure de givre et Armure de glace. De plus, confère à votre Gardien de givre 10% de chances de renvoyer les sorts et effets de Givre tant qu’il est actif.",
   "textSource": "editorial"
  },
  "mage/frost-1-2": {
   "name": "Eclair de givre amélioré",
   "nameSource": "officiel",
   "spell": 11070,
   "classic": "Réduit le temps d'incantation de votre sort Eclair de givre de 0.1 sec.",
   "rank1": "Réduit le temps d'incantation de votre sort Eclair de givre de 0.1 sec.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "mage/frost-1-3": {
   "name": "Précision élémentaire",
   "nameSource": "officiel",
   "spell": 29438,
   "classic": "Réduit de 2% les chances que votre adversaire résiste à vos sorts de Givre ou de Feu.",
   "nameBranch": "classic",
   "ranks": [
    "Augmente de 1% vos chances de toucher avec vos sorts de Givre et de Feu.",
    "Augmente de 2% vos chances de toucher avec vos sorts de Givre et de Feu.",
    "Augmente de 3% vos chances de toucher avec vos sorts de Givre et de Feu.",
    "Augmente de 4% vos chances de toucher avec vos sorts de Givre et de Feu.",
    "Augmente de 5% vos chances de toucher avec vos sorts de Givre et de Feu."
   ],
   "rank1": "Augmente de 1% vos chances de toucher avec vos sorts de Givre et de Feu.",
   "textSource": "editorial"
  },
  "mage/frost-2-1": {
   "name": "Eclats de glace",
   "nameSource": "officiel",
   "spell": 11207,
   "classic": "Augmente de 20% les points de dégâts supplémentaires infligés par les coups critiques de vos sorts de Givre.",
   "rank1": "Augmente de 20% les points de dégâts supplémentaires infligés par les coups critiques de vos sorts de Givre.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "mage/frost-2-2": {
   "name": "Gel prolongé",
   "nameSource": "officiel",
   "spell": 11175,
   "classic": "Augmente la durée de vos effets de gel de 1 seconde et réduit la vitesse de la cible de 4% supplémentaires.",
   "nameBranch": "classic",
   "rank1": "Augmente de 11% la durée de vos effets de gel et réduit de 3% supplémentaires la vitesse de la cible.",
   "textSource": "editorial"
  },
  "mage/frost-2-3": {
   "name": "Nova de givre améliorée",
   "nameSource": "officiel",
   "spell": 11165,
   "classic": "Réduit le temps de recharge du sort Nova de givre de 2 secondes.",
   "rank1": "Réduit le temps de recharge du sort Nova de givre de 2 secondes.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "mage/frost-2-4": {
   "name": "Morsure de givre",
   "nameSource": "officiel",
   "spell": 11071,
   "classic": "Donne à vos effets de gel 5% de chances de geler la cible pendant 5 sec.",
   "rank1": "Donne à vos effets de gel 5% de chances de geler la cible pendant 5 sec.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "mage/frost-3-1": {
   "name": "Glace perçante",
   "nameSource": "officiel",
   "spell": 11151,
   "classic": "Augmente les points de dégâts infligés par vos sorts de Givre de 2%.",
   "rank1": "Augmente les points de dégâts infligés par vos sorts de Givre de 2%.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "mage/frost-3-2": {
   "name": "Canalisation du givre",
   "nameSource": "officiel",
   "spell": 11160,
   "classic": "Réduit de 5% le coût en mana de vos sorts de Givre, et réduit de 10% la menace qu'ils génèrent.",
   "rank1": "Réduit de 5% le coût en mana de vos sorts de Givre, et réduit de 10% la menace qu'ils génèrent.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "mage/frost-3-4": {
   "name": "Blizzard amélioré",
   "nameSource": "officiel",
   "spell": 11185,
   "classic": "Ajoute un effet d'engourdissement à votre sort Blizzard. Il réduit la vitesse de déplacement de la cible de 30%. Dure 1.50 sec..",
   "nameBranch": "classic",
   "ranks": [
    "Ajoute un effet de gel à votre sort Blizzard. Cet effet réduit la vitesse de déplacement de la cible de 15% pendant 1,5 sec.",
    "Ajoute un effet de gel à votre sort Blizzard. Cet effet réduit la vitesse de déplacement de la cible de 25% pendant 1,5 sec.",
    "Ajoute un effet de gel à votre sort Blizzard. Cet effet réduit la vitesse de déplacement de la cible de 40% pendant 1,5 sec."
   ],
   "rank1": "Ajoute un effet de gel à votre sort Blizzard. Cet effet réduit la vitesse de déplacement de la cible de 15% pendant 1,5 sec.",
   "textSource": "editorial"
  },
  "mage/frost-4-1": {
   "name": "Allonge arctique",
   "nameSource": "officiel",
   "spell": 16757,
   "classic": "Augmente la portée de vos sorts Eclair de givre et Blizzard et les rayons d'effet de vos sorts Nova de givre et Cône de froid de 10%.",
   "rank1": "Augmente la portée de vos sorts Eclair de givre et Blizzard et les rayons d'effet de vos sorts Nova de givre et Cône de froid de 10%.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "mage/frost-4-2": {
   "name": "Bloc de glace",
   "nameSource": "officiel",
   "spell": 11958,
   "classic": "Vous enveloppe dans un bloc de glace qui vous protège des attaques physiques et des sorts pendant 10 sec. En contrepartie, vous ne pouvez pas attaquer, vous déplacer ni lancer de sorts.",
   "rank1": "Vous enveloppe dans un bloc de glace qui vous protège des attaques physiques et des sorts pendant 10 sec. En contrepartie, vous ne pouvez pas attaquer, vous déplacer ni lancer de sorts.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "mage/frost-4-4": {
   "name": "Fracasser",
   "nameSource": "officiel",
   "spell": 11170,
   "classic": "Augmente de 10% vos chances d'infliger un coup critique avec tous les sorts lorsque vous attaquez des cibles gelées.",
   "nameBranch": "classic",
   "rank1": "Augmente de 17% les chances de coup critique de tous vos sorts contre les cibles gelées.",
   "textSource": "editorial"
  },
  "mage/frost-5-1": {
   "name": "Cône de froid amélioré",
   "nameSource": "officiel",
   "spell": 11190,
   "classic": "Augmente de 15% les points de dégâts infligés par votre sort Cône de froid.",
   "rank1": "Augmente de 12% les points de dégâts infligés par votre sort Cône de froid.",
   "textSource": "officiel-chiffre",
   "nameBranch": "classic"
  },
  "mage/frost-5-2": {
   "name": "Morsure du froid",
   "nameSource": "officiel",
   "spell": 12472,
   "classic": "À l’activation, met fin au temps de recharge de tous vos sorts de givre.",
   "nameBranch": "classic",
   "rank1": "Met fin au temps de recharge restant de tous vos autres sorts de Givre.",
   "textSource": "editorial"
  },
  "mage/frost-6-3": {
   "name": "Froid hivernal",
   "nameSource": "officiel",
   "spell": 11180,
   "classic": "Vos sorts de givre causant des dégâts ont 20 % de chances de déclencher l’effet de Froid hivernal, qui augmente les chances de critique des sorts de givre de 2 % pendant 15 sec. Cumulable jusqu’à 5 fois.",
   "nameBranch": "classic",
   "rank1": "Confère à vos sorts de dégâts de Givre 20% de chances d’appliquer l’effet Froid hivernal, qui augmente de 2% les chances de coup critique de vos sorts Lance de glace et Éclair de givre sur la cible pendant 15 sec. Cumulable jusqu’à 1 fois.",
   "textSource": "editorial"
  },
  "mage/frost-7-2": {
   "name": "Barrière de glace",
   "nameSource": "officiel",
   "spell": 11426,
   "classic": "Vous protège instantanément à l'aide d'un bouclier magique qui absorbe 455 points de dégâts. Dure 1 min. Tant que le bouclier est actif, les sorts ne sont pas interrompus.",
   "nameBranch": "classic",
   "rank1": "Vous protège instantanément d’un bouclier absorbant 448 points de dégâts. Dure 1 min. Tant que le bouclier tient, vos incantations ne sont ni interrompues ni retardées par les dégâts subis.",
   "textSource": "editorial"
  },
  "demoniste/affliction-1-1": {
   "name": "Connexion améliorée",
   "nameSource": "officiel",
   "spell": 18182,
   "classic": "Augmente de 10% le montant de points de mana gagné par votre sort Connexion.",
   "rank1": "Augmente de 10% le montant de points de mana gagné par votre sort Connexion.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "demoniste/affliction-1-2": {
   "name": "Suppression",
   "nameSource": "officiel",
   "spell": 18174,
   "classic": "Réduit de 2% les chances de vos ennemis de résister à vos sorts d'Affliction.",
   "nameBranch": "classic",
   "rank1": "Augmente de 1% vos chances de toucher avec tous vos sorts et attaques, et réduit de 4% toute la menace que vous générez.",
   "textSource": "editorial"
  },
  "demoniste/affliction-1-3": {
   "name": "Corruption améliorée",
   "nameSource": "officiel",
   "spell": 17810,
   "classic": "Réduit le temps d'incantation de votre sort Corruption de 0.4 sec.",
   "nameBranch": "classic",
   "ranks": [
    "Réduit de 0,4 sec le temps d’incantation de votre sort Corruption et augmente de 2% les dégâts qu’il inflige.",
    "Réduit de 0,8 sec le temps d’incantation de votre sort Corruption et augmente de 4% les dégâts qu’il inflige.",
    "Réduit de 1,2 sec le temps d’incantation de votre sort Corruption et augmente de 6% les dégâts qu’il inflige.",
    "Réduit de 1,6 sec le temps d’incantation de votre sort Corruption et augmente de 8% les dégâts qu’il inflige.",
    "Réduit de 2 sec le temps d’incantation de votre sort Corruption et augmente de 10% les dégâts qu’il inflige."
   ],
   "rank1": "Réduit de 0,4 sec le temps d’incantation de votre sort Corruption et augmente de 2% les dégâts qu’il inflige.",
   "textSource": "editorial"
  },
  "demoniste/affliction-3-1": {
   "name": "Plaie d’agonie améliorée",
   "nameSource": "adapte",
   "spell": 18827,
   "classic": "Augmente les points de dégâts infligés par votre sort Malédiction d'agonie de 2%.",
   "note": "Forever a renommé ce talent (anciennement « Improved Curse of Agony ») : le client français de Classic ne connaît que « Malédiction d’agonie améliorée ». Le nom retenu suit celui du sort renommé, « Plaie d’agonie » dans le client français de Cataclysme (sort 980).",
   "nameBranch": "classic",
   "rank1": "Augmente de 5% les dégâts infligés par votre Plaie d’agonie.",
   "textSource": "editorial"
  },
  "demoniste/affliction-3-2": {
   "name": "Concentration corrompue",
   "nameSource": "officiel",
   "spell": 17783,
   "classic": "Vous confère 14% de chances d'éviter les interruptions causées par les points de dégâts lorsque vous canalisez vos sorts Drain de vie, Drain de mana et Siphon d'âme.",
   "nameBranch": "classic",
   "rank1": "Vous donne 23% de chances d’éviter les interruptions causées par les dégâts lorsque vous canalisez ou incantez vos sorts Drain de vie, Drain de mana, Siphon d’âme et Supplice.",
   "textSource": "editorial"
  },
  "demoniste/affliction-3-3": {
   "name": "Malédiction amplifiée",
   "nameSource": "officiel",
   "spell": 18288,
   "classic": "Augmente de 50% l'effet de votre prochaine Malédiction de faiblesse ou Malédiction d'agonie, ou de 20% celui de votre prochaine Malédiction de fatigue. Dure 30 sec.",
   "nameBranch": "classic",
   "rank1": "Augmente de 50% l’effet de votre prochaine Malédiction de faiblesse ou Plaie d’agonie, ou de 20% celui de votre prochaine Malédiction de fatigue. Dure 30 sec.",
   "textSource": "editorial"
  },
  "demoniste/affliction-4-2": {
   "name": "Crépuscule",
   "nameSource": "officiel",
   "spell": 18094,
   "classic": "Confère à vos sorts Corruption et Drain de vie 2 % de chances de vous plonger dans un état de Transe de l’ombre après avoir infligé des dégâts à une cible. Cet état réduit le temps d’incantation de votre prochain sort Trait de l’ombre de 100 %.",
   "nameBranch": "classic",
   "rank1": "Confère à vos sorts Corruption, Siphon d’âme, Drain de vie et Supplice 2% de chances de vous plonger dans un état de Transe de l’ombre après avoir infligé des dégâts à une cible. Cet état réduit de 100% le temps d’incantation de votre prochain sort Trait de l’ombre.",
   "textSource": "editorial"
  },
  "demoniste/affliction-4-3": {
   "name": "Malédiction de fatigue",
   "nameSource": "officiel",
   "spell": 18223,
   "classic": "Réduit la vitesse de la cible de 10% pendant 12 sec. La cible ne peut être victime que d'une malédiction par démoniste présent à la fois.",
   "rank1": "Réduit la vitesse de la cible de 30% pendant 12 sec. La cible ne peut être victime que d'une malédiction par démoniste présent à la fois.",
   "textSource": "officiel-chiffre",
   "nameBranch": "classic"
  },
  "demoniste/affliction-5-2": {
   "name": "Siphon de vie",
   "nameSource": "officiel",
   "spell": 18265,
   "classic": "Transfère 15 points de vie de la cible vers le lanceur de sorts toutes les 3 sec. Dure 30 sec.",
   "rank1": "Transfère 11 points de vie de la cible vers le lanceur de sorts toutes les 3 sec. Dure 30 sec.",
   "textSource": "officiel-chiffre",
   "nameBranch": "classic"
  },
  "demoniste/affliction-6-3": {
   "name": "Maîtrise de l'ombre",
   "nameSource": "officiel",
   "spell": 18271,
   "classic": "Augmente de 2% les points de dégâts infligés ou les points de vie drainés par vos sorts d'Ombre.",
   "rank1": "Augmente de 1% les points de dégâts infligés ou les points de vie drainés par vos sorts d'Ombre.",
   "textSource": "officiel-chiffre",
   "nameBranch": "classic"
  },
  "demoniste/demonology-1-1": {
   "name": "Captation de vie améliorée",
   "nameSource": "officiel",
   "spell": 18703,
   "classic": "Augmente le nombre de points de vie transférés par votre sort Captation de vie de 10%.",
   "nameBranch": "classic",
   "ranks": [
    "Augmente de 20% le nombre de points de vie transférés par votre sort Captation de vie, réduit son coût en vie de 15% et la menace qu’il génère de 50%. Permet d’utiliser Captation de vie quel que soit l’état de santé de votre démon.",
    "Augmente de 40% le nombre de points de vie transférés par votre sort Captation de vie, réduit son coût en vie de 30% et la menace qu’il génère de 100%. Permet d’utiliser Captation de vie quel que soit l’état de santé de votre démon."
   ],
   "rank1": "Augmente de 20% le nombre de points de vie transférés par votre sort Captation de vie, réduit son coût en vie de 15% et la menace qu’il génère de 50%. Permet d’utiliser Captation de vie quel que soit l’état de santé de votre démon.",
   "textSource": "editorial"
  },
  "demoniste/demonology-1-2": {
   "name": "Diablotin amélioré",
   "nameSource": "officiel",
   "spell": 18694,
   "classic": "Augmente les effets des sorts Eclair de feu, Bouclier de feu et Pacte de sang de votre diablotin de 10%.",
   "nameBranch": "classic",
   "ranks": [
    "Augmente de 10% les dégâts du sort Éclair de feu de votre diablotin et de 10% l’effet de son sort Bouclier de feu.",
    "Augmente de 20% les dégâts du sort Éclair de feu de votre diablotin et de 20% l’effet de son sort Bouclier de feu.",
    "Augmente de 30% les dégâts du sort Éclair de feu de votre diablotin et de 30% l’effet de son sort Bouclier de feu."
   ],
   "rank1": "Augmente de 10% les dégâts du sort Éclair de feu de votre diablotin et de 10% l’effet de son sort Bouclier de feu.",
   "textSource": "editorial"
  },
  "demoniste/demonology-1-3": {
   "name": "Baiser démoniaque",
   "nameSource": "officiel",
   "spell": 18697,
   "classic": "Augmente votre total d'Endurance de 3% mais réduit votre total d'Esprit de 1%.",
   "nameBranch": "classic",
   "rank1": "Augmente de 3% votre total d’Endurance.",
   "textSource": "editorial"
  },
  "demoniste/demonology-1-4": {
   "name": "Puissance impie",
   "nameSource": "officiel",
   "spell": 18769,
   "classic": "Augmente de 4% les dégâts infligés par les attaques de mêlée du marcheur du Vide, de la succube, de l’incube et du chasseur corrompu.",
   "nameBranch": "classic",
   "ranks": [
    "Augmente de 2% tous les dégâts infligés par vos diablotins, marcheurs du Vide, succubes, incubes et chasseurs corrompus.",
    "Augmente de 4% les dégâts infligés par vos diablotins, marcheurs du Vide, succubes et chasseurs corrompus.",
    "Augmente de 6% les dégâts infligés par vos diablotins, marcheurs du Vide, succubes et chasseurs corrompus.",
    "Augmente de 8% les dégâts infligés par vos diablotins, marcheurs du Vide, succubes et chasseurs corrompus.",
    "Augmente de 10% les dégâts infligés par vos diablotins, marcheurs du Vide, succubes et chasseurs corrompus."
   ],
   "rank1": "Augmente de 2% tous les dégâts infligés par vos diablotins, marcheurs du Vide, succubes, incubes et chasseurs corrompus.",
   "textSource": "editorial"
  },
  "demoniste/demonology-2-2": {
   "name": "Marcheur du Vide amélioré",
   "nameSource": "officiel",
   "spell": 18705,
   "classic": "Augmente de 10% l'efficacité des sorts Tourment, Consumer l'ombre, Sacrifice et Souffrance de votre marcheur du Vide.",
   "rank1": "Augmente de 10% l'efficacité des sorts Tourment, Consumer l'ombre, Sacrifice et Souffrance de votre marcheur du Vide.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "demoniste/demonology-2-3": {
   "name": "Endurance corrompue",
   "nameSource": "adapte",
   "spell": 18748,
   "classic": "Augmente de 3% le maximum de points de vie de vos diablotins, marcheurs du Vide, succubes, incubes et chasseurs corrompus.",
   "note": "Forever a renommé ce talent : le client français ne connaît que « Endurance corrompue » (anciennement « Fel Stamina »).",
   "nameBranch": "classic",
   "ranks": [
    "Augmente de 5% le maximum de points de vie et de mana de vos diablotins, marcheurs du Vide, succubes, incubes et chasseurs corrompus, et de 5% votre propre maximum de mana.",
    "Augmente de 10% le maximum de points de vie de vos diablotins, marcheurs du Vide, succubes, incubes et chasseurs corrompus, et de 10% votre propre maximum de mana.",
    "Augmente de 15% le maximum de points de vie de vos diablotins, marcheurs du Vide, succubes, incubes et chasseurs corrompus, et de 15% votre propre maximum de mana."
   ],
   "rank1": "Augmente de 5% le maximum de points de vie et de mana de vos diablotins, marcheurs du Vide, succubes, incubes et chasseurs corrompus, et de 5% votre propre maximum de mana.",
   "textSource": "editorial"
  },
  "demoniste/demonology-3-1": {
   "name": "Sayaad amélioré",
   "nameSource": "officiel",
   "spell": 18754,
   "classic": "Augmente de 10% les effets des techniques Fouet de la douleur et Baiser apaisant de votre succube et de votre incube. Augmente également la durée des techniques Séduction et Invisibilité inférieure de 10%.",
   "rank1": "Augmente de 10% les effets des techniques Fouet de la douleur et Baiser apaisant de votre succube et de votre incube. Augmente également la durée des techniques Séduction et Invisibilité inférieure de 10%.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "demoniste/demonology-3-2": {
   "name": "Sacrifice démoniaque",
   "nameSource": "officiel",
   "spell": 18788,
   "classic": "Lorsque cette technique est activée, votre démon invoqué est sacrifié pour vous faire bénéficier d’un effet qui dure 30 min. L’effet est annulé si vous invoquez un nouveau démon.Diablotin : augmente de 15% vos dégâts de Feu.Marcheur du Vide : rend 3% de vos points de vie totaux toutes les 4 s.Succube/Incube : augmente de 15% vos dégâts d’Ombre.Chasseur corrompu : rend 2% de vos points de mana totaux toutes les 4 s.",
   "nameBranch": "classic",
   "rank1": "Lorsque cette technique est activée, votre démon invoqué est sacrifié pour renforcer l’aspect opposé de votre pouvoir, vous faisant bénéficier d’un effet qui dure 2 h. L’effet est annulé si vous invoquez un démon.\n\nDiablotin : augmente de 15% vos dégâts d’Ombre.\n\nMarcheur du Vide : rend 2% de vos points de mana totaux toutes les 4 sec.\n\nSuccube/Incube : augmente de 15% vos dégâts de Feu.\n\nChasseur corrompu : rend 3% de vos points de vie totaux toutes les 4 sec.",
   "textSource": "editorial"
  },
  "demoniste/demonology-3-3": {
   "name": "Maître invocateur",
   "nameSource": "officiel",
   "spell": 18709,
   "classic": "Réduit le temps d’incantation de vos sorts d’invocations de diablotin, de succube, d’incube, de marcheur du Vide ou de chasseur corrompu de 2 s et leur coût en mana de 20%.",
   "rank1": "Réduit le temps d’incantation de vos sorts d’invocations de diablotin, de succube, d’incube, de marcheur du Vide ou de chasseur corrompu de 2 s et leur coût en mana de 20%.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "demoniste/demonology-4-3": {
   "name": "Domination corrompue",
   "nameSource": "officiel",
   "spell": 18708,
   "classic": "Le temps d’incantation de votre prochain sort d’invocation de diablotin, de marcheur du Vide, de succube, d’incube ou de chasseur corrompu est réduit de 5.5 s, et son coût en mana est réduit de 50%.",
   "rank1": "Le temps d’incantation de votre prochain sort d’invocation de diablotin, de marcheur du Vide, de succube, d’incube ou de chasseur corrompu est réduit de 6 s, et son coût en mana est réduit de 50%.",
   "textSource": "officiel-chiffre",
   "nameBranch": "classic"
  },
  "demoniste/demonology-5-2": {
   "name": "Lien spirituel",
   "nameSource": "officiel",
   "spell": 19028,
   "classic": "Quand l’effet est actif, 30 % des dégâts infligés au lanceur ou à la lanceuse sont subis à sa place par son diablotin, son marcheur du Vide, sa succube, son incube ou son chasseur corrompu. Entre outre, le Démon comme son maître ou sa maîtresse infligent 3 % de dégâts supplémentaires. Dure tant que le Démon est actif.",
   "nameBranch": "classic",
   "rank1": "Quand l’effet est actif, 30% des dégâts infligés au lanceur sont subis à sa place par son diablotin, son marcheur du Vide, sa succube, son incube ou son chasseur corrompu. En outre, le démon comme son maître infligent 3% de dégâts supplémentaires. Dure tant que le démon est actif.",
   "textSource": "editorial"
  },
  "demoniste/demonology-6-3": {
   "name": "Maître démonologue",
   "nameSource": "officiel",
   "spell": 23785,
   "classic": "Fait bénéficier le démoniste et le démon invoqué d’un effet aussi longtemps que le démon est actif.Diablotin : réduit la menace générée de 4 %.Marcheur du Vide : réduit les dégâts physiques subis de 2 %.Succube/Incube : augmente les dégâts infligés de 2 %.Chasseur corrompu : augmente les résistances de 0,2 par niveau.",
   "nameBranch": "classic",
   "ranks": [
    "Fait bénéficier le démoniste et le démon invoqué d’un effet aussi longtemps que ce démon est actif.\n\nDiablotin : augmente de 2% les dégâts de Feu infligés.\n\nMarcheur du Vide : réduit de 2% les dégâts physiques subis.\n\nSuccube/Incube : augmente de 2% les dégâts d’Ombre infligés.\n\nChasseur corrompu : réduit de 2% les dégâts magiques subis.",
    "Fait bénéficier le démoniste et le démon invoqué d’un effet aussi longtemps que ce démon est actif.\n\nDiablotin : augmente de 4% les dégâts de Feu infligés.\n\nMarcheur du Vide : réduit de 4% les dégâts physiques subis.\n\nSuccube/Incube : augmente de 4% les dégâts d’Ombre infligés.\n\nChasseur corrompu : réduit de 4% les dégâts magiques subis.",
    "Fait bénéficier le démoniste et le démon invoqué d’un effet aussi longtemps que ce démon est actif.\n\nDiablotin : augmente de 6% les dégâts de Feu infligés.\n\nMarcheur du Vide : réduit de 6% les dégâts physiques subis.\n\nSuccube/Incube : augmente de 6% les dégâts d’Ombre infligés.\n\nChasseur corrompu : réduit de 6% les dégâts magiques subis.",
    "Fait bénéficier le démoniste et le démon invoqué d’un effet aussi longtemps que ce démon est actif.\n\nDiablotin : augmente de 8% les dégâts de Feu infligés.\n\nMarcheur du Vide : réduit de 8% les dégâts physiques subis.\n\nSuccube/Incube : augmente de 8% les dégâts d’Ombre infligés.\n\nChasseur corrompu : réduit de 8% les dégâts magiques subis.",
    "Fait bénéficier le démoniste et le démon invoqué d’un effet aussi longtemps que ce démon est actif.\n\nDiablotin : augmente de 10% les dégâts de Feu infligés.\n\nMarcheur du Vide : réduit de 10% les dégâts physiques subis.\n\nSuccube/Incube : augmente de 10% les dégâts d’Ombre infligés.\n\nChasseur corrompu : réduit de 10% les dégâts magiques subis."
   ],
   "rank1": "Fait bénéficier le démoniste et le démon invoqué d’un effet aussi longtemps que ce démon est actif.\n\nDiablotin : augmente de 2% les dégâts de Feu infligés.\n\nMarcheur du Vide : réduit de 2% les dégâts physiques subis.\n\nSuccube/Incube : augmente de 2% les dégâts d’Ombre infligés.\n\nChasseur corrompu : réduit de 2% les dégâts magiques subis.",
   "textSource": "editorial"
  },
  "demoniste/destruction-1-1": {
   "name": "Allonge de destruction",
   "nameSource": "officiel",
   "spell": 17917,
   "classic": "Augmente de 10% la portée de vos sorts de Destruction.",
   "nameBranch": "classic",
   "rank1": "Augmente de 10% la portée de vos sorts qui infligent des dégâts.",
   "textSource": "editorial"
  },
  "demoniste/destruction-1-2": {
   "name": "Trait de l'ombre amélioré",
   "nameSource": "officiel",
   "spell": 17793,
   "classic": "Les coups critiques de votre sort Trait de l'ombre augmentent de 4% les dégâts d'Ombre infligés à la cible par les 4 prochaines sources de dégâts non périodiques. Cet effet dure 12 sec au maximum.",
   "nameBranch": "classic",
   "rank1": "Les coups critiques de votre sort Trait de l’ombre augmentent de 4% les dégâts d’Ombre que vos attaques infligent à la cible pendant 12 sec.",
   "textSource": "editorial"
  },
  "demoniste/destruction-1-3": {
   "name": "Fléau",
   "nameSource": "officiel",
   "spell": 17788,
   "classic": "Réduit le temps d'incantation de vos sorts Trait de l'ombre et Immolation de 0.1 sec. et Feu de l'âme de 0.4 sec.",
   "nameBranch": "classic",
   "rank1": "Réduit de 0,1 sec le temps d’incantation de vos sorts Trait de l’ombre, Immolation et Incinérer, et de 0,4 sec celui de votre sort Feu de l’âme.",
   "textSource": "editorial"
  },
  "demoniste/destruction-2-2": {
   "name": "Cataclysme",
   "nameSource": "officiel",
   "spell": 17778,
   "classic": "Réduit le coût en mana de vos sorts de Destruction de 1%.",
   "rank1": "Réduit le coût en mana de vos sorts de Destruction de 3%.",
   "textSource": "officiel-chiffre",
   "nameBranch": "classic"
  },
  "demoniste/destruction-2-3": {
   "name": "Conséquences",
   "nameSource": "officiel",
   "spell": 18119,
   "classic": "Confère 2% de chances à vos sorts de Destruction d'hébéter la cible pendant 5 sec.",
   "nameBranch": "classic",
   "rank1": "Augmente de 10% les dégâts initiaux de votre sort Immolation et confère à votre sort Conflagration 20% de chances d’hébéter la cible, réduisant sa vitesse de déplacement de 50% pendant 5 sec.",
   "textSource": "editorial"
  },
  "demoniste/destruction-3-2": {
   "name": "Ruine",
   "nameSource": "officiel",
   "spell": 17959,
   "classic": "Augmente de 100% les points de dégâts supplémentaires infligés par les coups critiques de vos sorts de Destruction.",
   "rank1": "Augmente de 20% les points de dégâts supplémentaires infligés par les coups critiques de vos sorts de Destruction.",
   "textSource": "officiel-chiffre",
   "nameBranch": "classic"
  },
  "demoniste/destruction-3-3": {
   "name": "Brûlure de l'ombre",
   "nameSource": "officiel",
   "spell": 17877,
   "classic": "Frappe instantanément la cible et lui inflige 91 à 104 points de dégâts d'Ombre. Si la cible meurt dans les 5 sec sous l'effet du sort Brûlure de l'ombre et rapporte de l'expérience ou de l'honneur, le lanceur gagne un Fragment d'âme.",
   "nameBranch": "classic",
   "rank1": "Frappe instantanément la cible et lui inflige 102 à 111 points de dégâts d’Ombre. Si une cible non triviale meurt dans les 8 sec après avoir été touchée par Brûlure de l’ombre, le lanceur gagne un Fragment d’âme.",
   "textSource": "editorial"
  },
  "demoniste/destruction-4-1": {
   "name": "Intensité",
   "nameSource": "officiel",
   "spell": 18135,
   "classic": "Vous donne 35% de chances de résister aux interruptions causées par les dégâts lorsque vous canalisez les sorts Pluie de feu, Flammes infernales ou Feu de l'âme.",
   "nameBranch": "classic",
   "rank1": "Vous donne 23% de chances de résister aux interruptions causées par les dégâts lorsque vous incantez ou canalisez un sort de Destruction.",
   "textSource": "editorial"
  },
  "demoniste/destruction-4-2": {
   "name": "Douleur brûlante améliorée",
   "nameSource": "adapte",
   "spell": 17927,
   "classic": "Augmente de 2% les chances d'infliger un coup critique avec votre sort Douleur brûlante.",
   "note": "Forever a renommé ce talent : le client français ne connaît que « Douleur brûlante améliorée » (anciennement « Improved Searing Pain »).",
   "nameBranch": "classic",
   "rank1": "Augmente de 3% les chances d’infliger un coup critique avec votre sort Douleur brûlante et de 3% les dégâts infligés par tous vos sorts de Destruction.",
   "textSource": "editorial"
  },
  "demoniste/destruction-4-3": {
   "name": "Conflagration",
   "nameSource": "officiel",
   "spell": 17962,
   "classic": "Enflamme une cible qui est déjà affectée par le sort Immolation, lui inflige 249 à 316 points de dégâts de Feu et annule le sort Immolation.",
   "nameBranch": "classic",
   "rank1": "Enflamme une cible qui est déjà affectée par votre sort Immolation, lui inflige 109 à 132 points de dégâts de Feu et annule le sort Immolation.",
   "textSource": "editorial"
  },
  "demoniste/destruction-5-1": {
   "name": "Pyroclasme",
   "nameSource": "officiel",
   "spell": 18096,
   "classic": "Confère 13% de chances à vos sorts Pluie de feu, Flammes infernales et Feu de l'âme d'étourdir la cible pendant 3 sec.",
   "nameBranch": "classic",
   "ranks": [
    "Confère à votre sort Feu de l’âme 13% de chances d’étourdir la cible pendant 3 sec, et à vos sorts Pluie de feu et Flammes infernales 13% de chances, sur leur durée, d’étourdir pendant 3 sec les cibles à qui ils infligent des dégâts.",
    "Confère à votre sort Feu de l’âme 26% de chances d’étourdir la cible pendant 3 sec, et à vos sorts Pluie de feu et Flammes infernales 26% de chances, sur leur durée, d’étourdir pendant 3 sec les cibles à qui ils infligent des dégâts."
   ],
   "rank1": "Confère à votre sort Feu de l’âme 13% de chances d’étourdir la cible pendant 3 sec, et à vos sorts Pluie de feu et Flammes infernales 13% de chances, sur leur durée, d’étourdir pendant 3 sec les cibles à qui ils infligent des dégâts.",
   "textSource": "editorial"
  },
  "druide/balance-1-2": {
   "name": "Colère améliorée",
   "nameSource": "officiel",
   "spell": 16814,
   "classic": "Réduit le temps d'incantation de votre sort Colère de 0.1 sec.",
   "nameBranch": "classic",
   "rank1": "Réduit de 0,1 sec le temps d’incantation de votre sort Colère et de 10% son coût en mana.",
   "textSource": "editorial"
  },
  "druide/balance-2-1": {
   "name": "Lueur de la lune",
   "nameSource": "officiel",
   "spell": 16845,
   "classic": "Réduit de 3% le coût en mana de vos sorts Eclat lunaire, Feu stellaire, Colère, Toucher guérisseur, Rétablissement et Récupération.",
   "nameBranch": "classic",
   "rank1": "Réduit de 8% le coût en mana de vos sorts offensifs.",
   "textSource": "editorial"
  },
  "druide/balance-2-2": {
   "name": "Eclat lunaire amélioré",
   "nameSource": "officiel",
   "spell": 16821,
   "classic": "Augmente les points de dégâts et les chances de porter un coup critique avec votre sort Eclat lunaire de 2%.",
   "rank1": "Augmente les points de dégâts et les chances de porter un coup critique avec votre sort Eclat lunaire de 5%.",
   "textSource": "officiel-chiffre",
   "nameBranch": "classic"
  },
  "druide/balance-2-4": {
   "name": "Allonge de la Nature",
   "nameSource": "officiel",
   "spell": 16819,
   "classic": "Augmente la portée des sorts Colère, Sarments, Lucioles, Eclat lunaire, Feu stellaire et Ouragan de 10%.",
   "nameBranch": "classic",
   "rank1": "Augmente de 10% la portée de vos sorts offensifs d’Équilibre et de 2% vos chances de toucher avec tous vos sorts et attaques.",
   "textSource": "editorial"
  },
  "druide/balance-3-1": {
   "name": "Sarments améliorés",
   "nameSource": "officiel",
   "spell": 16918,
   "classic": "Vous confère 40% de chances d'éviter d'être interrompu lorsque vous lancez le sort Sarments.",
   "nameBranch": "classic",
   "rank1": "Augmente de 25% les dégâts infligés par votre sort Sarments, et ses victimes peuvent subir jusqu’à 25% de dégâts supplémentaires sans que l’effet soit interrompu.",
   "textSource": "editorial"
  },
  "druide/balance-4-1": {
   "name": "Essaim d'insectes",
   "nameSource": "officiel",
   "spell": 5570,
   "classic": "La cible ennemie est assaillie par des insectes. Ses chances de toucher sont diminuées de 2% et elle subit 66 points de dégâts de Nature en 12 sec.",
   "rank1": "La cible ennemie est assaillie par des insectes. Ses chances de toucher sont diminuées de 2% et elle subit 55 points de dégâts de Nature en 12 s.",
   "textSource": "officiel-chiffre",
   "nameBranch": "tbc"
  },
  "druide/balance-4-2": {
   "name": "Vengeance",
   "nameSource": "officiel",
   "spell": 16909,
   "classic": "Augmente de 20% le bonus de dégâts supplémentaires infligés par les coups critiques avec vos sorts Feu stellaire, Eclat lunaire et Colère.",
   "nameBranch": "classic",
   "rank1": "Augmente de 20% le bonus de dégâts critiques de vos sorts des Arcanes et de Nature.",
   "textSource": "editorial"
  },
  "druide/balance-4-3": {
   "name": "Feu stellaire amélioré",
   "nameSource": "officiel",
   "spell": 16850,
   "classic": "Réduit le temps d'incantation de Feu stellaire de 0.1 sec. et a 3% de chances d'étourdir la cible pendant 3 sec.",
   "nameBranch": "classic",
   "rank1": "Réduit de 0,1 sec le temps d’incantation de Feu stellaire, qui a en outre 3% de chances d’étourdir sa cible pendant 3 sec.",
   "textSource": "editorial"
  },
  "druide/balance-5-2": {
   "name": "Grâce de la nature",
   "nameSource": "officiel",
   "spell": 16880,
   "classic": "Tous les coups critiques obtenus avec les sorts vous valent une Bénédiction de la nature. Cette dernière réduit de 0.5 sec. le temps d'incantation de votre prochain sort.",
   "nameBranch": "classic",
   "rank1": "Tous les coups critiques non périodiques obtenus avec vos sorts vous valent une bénédiction de la nature, qui augmente votre vitesse d’incantation et réduit de 10% votre temps de recharge global pendant 3 sec.",
   "textSource": "editorial"
  },
  "druide/balance-6-2": {
   "name": "Fureur lunaire",
   "nameSource": "officiel",
   "spell": 16896,
   "classic": "Augmente les points de dégâts infligés par vos sorts Feu stellaire, Eclat lunaire et Colère de .",
   "nameBranch": "classic",
   "rank1": "Augmente de 2% les dégâts infligés par vos sorts des Arcanes et de Nature.",
   "textSource": "editorial"
  },
  "druide/balance-7-2": {
   "name": "Forme de sélénien",
   "nameSource": "officiel",
   "spell": 24858,
   "classic": "Transforme le personnage druide en sélénien. Sous cette forme, l’Armure conférée par les objets est augmentée de 360 % et les membres du groupe à moins de 30 m voient leurs chances de coup critique des sorts augmentées de 3 %. La transformation libère le personnage-joueur des effets de métamorphose ou affectant le déplacement.",
   "nameBranch": "classic",
   "rank1": "Transforme le druide en sélénien. Sous cette forme, l’armure conférée par les objets est augmentée de 360%, Augure de lucidité a 100% de chances supplémentaires de se déclencher, et tous les membres du groupe se trouvant à moins de 45 mètres voient leurs chances de coup critique augmentées de 3%, effet exclusif avec Chef de la meute. Le sélénien ne peut pas lancer de sorts de soins tant qu’il est transformé.\n\nLa transformation libère le lanceur des effets de métamorphose et de ceux qui entravent le déplacement.",
   "textSource": "editorial"
  },
  "druide/feral-combat-1-2": {
   "name": "Férocité",
   "nameSource": "officiel",
   "spell": 16934,
   "classic": "Réduit le coût en rage ou en énergie de vos techniques Mutiler, Balayage, Griffe et Griffure de 1.",
   "nameBranch": "classic",
   "ranks": [
    "Réduit de 1 point de rage ou d’énergie le coût de vos techniques Mutiler, Mutilation, Balayage, Griffe et Griffure.",
    "Réduit de 2 points de rage ou d’énergie le coût de vos techniques Mutiler, Balayage, Griffe et Griffure.",
    "Réduit de 3 points de rage ou d’énergie le coût de vos techniques Mutiler, Balayage, Griffe et Griffure.",
    "Réduit de 4 points de rage ou d’énergie le coût de vos techniques Mutiler, Balayage, Griffe et Griffure.",
    "Réduit de 5 points de rage ou d’énergie le coût de vos techniques Mutiler, Balayage, Griffe et Griffure."
   ],
   "rank1": "Réduit de 1 point de rage ou d’énergie le coût de vos techniques Mutiler, Mutilation, Balayage, Griffe et Griffure.",
   "textSource": "editorial"
  },
  "druide/feral-combat-1-3": {
   "name": "Cœur de fauve",
   "nameSource": "officiel",
   "spell": 17003,
   "classic": "Augmente votre Intelligence de 4%. De plus, votre Endurance est augmentée de 4% lorsque vous êtes en forme d'ours ou d'ours redoutable et votre Force est augmentée de 4% lorsque vous êtes en forme de félin.",
   "nameBranch": "classic",
   "ranks": [
    "Augmente de 2% votre Intelligence. De plus, votre Endurance est augmentée de 4% lorsque vous êtes en forme d’ours ou d’ours redoutable, et votre Force de 2% lorsque vous êtes en forme de félin.",
    "Augmente de 4% votre Intelligence. De plus, votre Endurance est augmentée de 8% lorsque vous êtes en forme d’ours ou d’ours redoutable, et votre Force de 4% lorsque vous êtes en forme de félin.",
    "Augmente de 6% votre Intelligence. De plus, votre Endurance est augmentée de 12% lorsque vous êtes en forme d’ours ou d’ours redoutable, et votre Force de 6% lorsque vous êtes en forme de félin.",
    "Augmente de 8% votre Intelligence. De plus, votre Endurance est augmentée de 16% lorsque vous êtes en forme d’ours ou d’ours redoutable, et votre Force de 8% lorsque vous êtes en forme de félin.",
    "Augmente de 10% votre Intelligence. De plus, votre Endurance est augmentée de 20% lorsque vous êtes en forme d’ours ou d’ours redoutable, et votre Force de 10% lorsque vous êtes en forme de félin."
   ],
   "rank1": "Augmente de 2% votre Intelligence. De plus, votre Endurance est augmentée de 4% lorsque vous êtes en forme d’ours ou d’ours redoutable, et votre Force de 2% lorsque vous êtes en forme de félin.",
   "textSource": "editorial"
  },
  "druide/feral-combat-2-1": {
   "name": "Célérité féline",
   "nameSource": "adapte",
   "spell": 17002,
   "classic": "Augmente votre vitesse de déplacement de 15 % à l’extérieur avec votre forme de félin et augmente vos chances d’esquiver lorsque vous êtes en forme de félin de 2 %.",
   "note": "Forever a renommé ce talent : le client français ne connaît que « Célérité féline » (anciennement « Feline Swiftness »).",
   "nameBranch": "classic",
   "ranks": [
    "Augmente de 15% votre vitesse de déplacement en forme de félin et de 2% vos chances d’esquiver.",
    "Augmente de 30% votre vitesse de déplacement en forme de félin et de 4% vos chances d’esquiver."
   ],
   "rank1": "Augmente de 15% votre vitesse de déplacement en forme de félin et de 2% vos chances d’esquiver.",
   "textSource": "editorial"
  },
  "druide/feral-combat-2-2": {
   "name": "Instinct farouche",
   "nameSource": "officiel",
   "spell": 16947,
   "classic": "Augmente de 3% le niveau de menace généré lorsque vous êtes en forme d'ours et d'ours redoutable et réduit les chances de vous détecter de vos ennemis lorsque vous rôdez.",
   "nameBranch": "classic",
   "ranks": [
    "Augmente de 10% les dégâts infligés par votre technique Balayage et réduit les chances qu’ont vos ennemis de vous détecter lorsque vous rôdez, comme si vous aviez 1 niveau de plus.",
    "Augmente de 20% les dégâts infligés par votre technique Balayage et réduit les chances qu’ont vos ennemis de vous détecter lorsque vous rôdez, comme si vous aviez 2 niveaux de plus.",
    "Augmente de 30% les dégâts infligés par votre technique Balayage et réduit les chances qu’ont vos ennemis de vous détecter lorsque vous rôdez, comme si vous aviez 3 niveaux de plus."
   ],
   "rank1": "Augmente de 10% les dégâts infligés par votre technique Balayage et réduit les chances qu’ont vos ennemis de vous détecter lorsque vous rôdez, comme si vous aviez 1 niveau de plus.",
   "textSource": "editorial"
  },
  "druide/feral-combat-2-3": {
   "name": "Impact brutal",
   "nameSource": "officiel",
   "spell": 16940,
   "classic": "Augmente la durée d'étourdissement de vos techniques Sonner et Traquenard de 0.5 sec.",
   "nameBranch": "classic",
   "rank1": "Augmente de 0,5 sec la durée d’étourdissement de vos techniques Sonner et Traquenard, et réduit de 15 sec le temps de recharge de Sonner.",
   "textSource": "editorial"
  },
  "druide/feral-combat-2-4": {
   "name": "Peau épaisse",
   "nameSource": "officiel",
   "spell": 16929,
   "classic": "Augmente de 2% le score d'armure apporté par les objets.",
   "nameBranch": "classic",
   "rank1": "En forme d’ours, de félin, d’ours redoutable ou de sélénien, vous gagnez 1 point d’armure de base supplémentaire par niveau, plus 0,67 point d’armure de base par point de compétence Défense au-delà de cinq fois votre niveau. Ce montant peut encore être augmenté par les multiplicateurs de ces formes.",
   "textSource": "editorial"
  },
  "druide/feral-combat-3-2": {
   "name": "Furie sauvage",
   "nameSource": "officiel",
   "spell": 16998,
   "classic": "Augmente les points de dégâts infligés par vos techniques Griffe, Griffure, Mutiler et Balayage de 10%.",
   "nameBranch": "classic",
   "rank1": "Augmente de 5% les dégâts infligés par vos techniques Griffe, Griffure, Lambeau, Mutiler et Balayage.",
   "textSource": "editorial"
  },
  "druide/feral-combat-3-3": {
   "name": "Charge farouche",
   "nameSource": "officiel",
   "spell": 16979,
   "classic": "Vous chargez un ennemi, stoppez son déplacement et interrompez le sort qu'il incantait pendant 4 sec.",
   "nameBranch": "classic",
   "rank1": "Vous chargez un ennemi, l’immobilisez et interrompez le sort qu’il incantait pendant 4 sec.\n\nCharge farouche (félin)\nVous bondissez derrière un ennemi et l’hébétez pendant 3 sec.",
   "textSource": "editorial"
  },
  "druide/feral-combat-3-4": {
   "name": "Griffes aiguisées",
   "nameSource": "officiel",
   "spell": 16942,
   "classic": "Augmente de 2% vos chances d'infliger un coup critique lorsque vous êtes transformé en ours, en ours redoutable ou en félin.",
   "nameBranch": "classic",
   "ranks": [
    "Augmente de 3% vos chances d’infliger un coup critique lorsque vous êtes en forme d’ours, d’ours redoutable ou de félin.",
    "Augmente de 6% vos chances d’infliger un coup critique lorsque vous êtes en forme d’ours, d’ours redoutable ou de félin."
   ],
   "rank1": "Augmente de 3% vos chances d’infliger un coup critique lorsque vous êtes en forme d’ours, d’ours redoutable ou de félin.",
   "textSource": "editorial"
  },
  "druide/feral-combat-4-1": {
   "name": "Lambeau amélioré",
   "nameSource": "adapte",
   "spell": 16966,
   "classic": "Réduit de 6 le coût en énergie de votre technique Lambeau.",
   "note": "Forever a renommé ce talent : le client français ne connaît que « Lambeau amélioré » (anciennement « Improved Shred »).",
   "nameBranch": "classic",
   "rank1": "Réduit de 6 le coût en énergie de votre technique Lambeau et de 1 le coût en rage de votre technique Lacérer.",
   "textSource": "editorial"
  },
  "druide/feral-combat-4-3": {
   "name": "Frappes de prédateur",
   "nameSource": "officiel",
   "spell": 16972,
   "classic": "Augmente votre puissance d'attaque en mêlée en forme de félin, d'ours et d'ours redoutable de 50% de votre niveau.",
   "nameBranch": "classic",
   "rank1": "Augmente votre puissance d’attaque en mêlée de 50% de votre niveau en forme de félin, en forme d’ours et en forme d’ours redoutable.",
   "textSource": "editorial"
  },
  "druide/feral-combat-4-4": {
   "name": "Fureur primitive",
   "nameSource": "officiel",
   "spell": 16958,
   "classic": "Vous confère 50% de chances de gagner un bonus supplémentaire de 5 points de rage à chaque fois que vous assénez un coup critique lorsque vous êtes transformé en ours ou en ours redoutable.",
   "nameBranch": "classic",
   "ranks": [
    "Vous confère 50% de chances de gagner 5 points de rage supplémentaires chaque fois que vous infligez un coup critique en forme d’ours ou d’ours redoutable. De plus, vos coups critiques non périodiques obtenus avec des techniques de la forme de félin qui génèrent des points de combo ont 50% de chances d’ajouter un point de combo supplémentaire.",
    "Vous confère 100% de chances de gagner 5 points de rage supplémentaires chaque fois que vous infligez un coup critique en forme d’ours ou d’ours redoutable. De plus, vos coups critiques non périodiques obtenus avec des techniques de la forme de félin qui génèrent des points de combo ont 100% de chances d’ajouter un point de combo supplémentaire."
   ],
   "rank1": "Vous confère 50% de chances de gagner 5 points de rage supplémentaires chaque fois que vous infligez un coup critique en forme d’ours ou d’ours redoutable. De plus, vos coups critiques non périodiques obtenus avec des techniques de la forme de félin qui génèrent des points de combo ont 50% de chances d’ajouter un point de combo supplémentaire.",
   "textSource": "editorial"
  },
  "druide/feral-combat-5-2": {
   "name": "Chef de la meute",
   "nameSource": "officiel",
   "spell": 17007,
   "classic": "Pendant qu'il est en forme de félin, d'ours ou d'ours redoutable, le Chef de la meute augmente de 3% les chances de tous les membres du groupe se trouvant à moins de 45 mètres d'obtenir un coup critique avec les attaques à distance et en mêlée.",
   "nameBranch": "classic",
   "rank1": "En forme de félin, d’ours ou d’ours redoutable, le Chef de la meute augmente de 3% les chances de coup critique de tous les membres du groupe se trouvant à moins de 45 mètres, effet exclusif avec l’Aura de sélénien.",
   "textSource": "editorial"
  },
  "druide/restoration-1-2": {
   "name": "Focalisation de la nature",
   "nameSource": "officiel",
   "spell": 17063,
   "classic": "Vous confère 14% de chances d'éviter d'être interrompu par les attaques lorsque vous incantez les sorts Toucher guérisseur, Rétablissement et Tranquillité.",
   "nameBranch": "classic",
   "ranks": [
    "Vous confère 14% de chances d’éviter d’être interrompu par les dégâts lorsque vous incantez des sorts des Arcanes et de Nature.",
    "Vous confère 28% de chances d’éviter d’être interrompu par les dégâts lorsque vous incantez des sorts des Arcanes et de Nature.",
    "Vous confère 42% de chances d’éviter d’être interrompu par les dégâts lorsque vous incantez des sorts des Arcanes et de Nature.",
    "Vous confère 56% de chances d’éviter d’être interrompu par les dégâts lorsque vous incantez des sorts des Arcanes et de Nature.",
    "Vous confère 70% de chances d’éviter d’être interrompu par les dégâts lorsque vous incantez des sorts des Arcanes et de Nature."
   ],
   "rank1": "Vous confère 14% de chances d’éviter d’être interrompu par les dégâts lorsque vous incantez des sorts des Arcanes et de Nature.",
   "textSource": "editorial"
  },
  "druide/restoration-1-3": {
   "name": "Fureur",
   "nameSource": "officiel",
   "spell": 17056,
   "classic": "Vous confère 20% de chances de gagner 10 points de rage lorsque vous vous transformez en ours et ours redoutable ou 40 points d'énergie lorsque vous vous transformez en félin.",
   "nameBranch": "classic",
   "ranks": [
    "Vous confère 20% de chances de gagner 10 points de rage lorsque vous prenez la forme d’ours ou d’ours redoutable. Lorsque vous prenez la forme de félin, vous récupérez 20% de l’énergie que vous aviez la dernière fois que vous étiez en forme de félin, plus 2 points d’énergie par seconde passée hors des formes d’ours, de félin et d’ours redoutable, jusqu’à un maximum de 20 points d’énergie.",
    "Vous confère 40% de chances de gagner 10 points de rage lorsque vous prenez la forme d’ours ou d’ours redoutable. Lorsque vous prenez la forme de félin, vous récupérez 40% de l’énergie que vous aviez la dernière fois que vous étiez en forme de félin, plus 4 points d’énergie par seconde passée hors des formes d’ours, de félin et d’ours redoutable, jusqu’à un maximum de 40 points d’énergie.",
    "Vous confère 60% de chances de gagner 10 points de rage lorsque vous prenez la forme d’ours ou d’ours redoutable. Lorsque vous prenez la forme de félin, vous récupérez 60% de l’énergie que vous aviez la dernière fois que vous étiez en forme de félin, plus 6 points d’énergie par seconde passée hors des formes d’ours, de félin et d’ours redoutable, jusqu’à un maximum de 60 points d’énergie.",
    "Vous confère 80% de chances de gagner 10 points de rage lorsque vous prenez la forme d’ours ou d’ours redoutable. Lorsque vous prenez la forme de félin, vous récupérez 80% de l’énergie que vous aviez la dernière fois que vous étiez en forme de félin, plus 8 points d’énergie par seconde passée hors des formes d’ours, de félin et d’ours redoutable, jusqu’à un maximum de 80 points d’énergie.",
    "Vous confère 100% de chances de gagner 10 points de rage lorsque vous prenez la forme d’ours ou d’ours redoutable. Lorsque vous prenez la forme de félin, vous récupérez 100% de l’énergie que vous aviez la dernière fois que vous étiez en forme de félin, plus 10 points d’énergie par seconde passée hors des formes d’ours, de félin et d’ours redoutable, jusqu’à un maximum de 100 points d’énergie."
   ],
   "rank1": "Vous confère 20% de chances de gagner 10 points de rage lorsque vous prenez la forme d’ours ou d’ours redoutable. Lorsque vous prenez la forme de félin, vous récupérez 20% de l’énergie que vous aviez la dernière fois que vous étiez en forme de félin, plus 2 points d’énergie par seconde passée hors des formes d’ours, de félin et d’ours redoutable, jusqu’à un maximum de 20 points d’énergie.",
   "textSource": "editorial"
  },
  "druide/restoration-2-1": {
   "name": "Toucher guérisseur amélioré",
   "nameSource": "adapte",
   "spell": 17069,
   "classic": "Réduit le temps d'incantation de votre sort Toucher guérisseur de 0.1 sec.",
   "note": "Forever a renommé ce talent : le client français ne connaît que « Toucher guérisseur amélioré » (anciennement « Improved Healing Touch »).",
   "nameBranch": "classic",
   "rank1": "Réduit de 0,1 sec le temps d’incantation de votre sort Toucher guérisseur et augmente de 1% tous les dégâts que vous infligez.",
   "textSource": "editorial"
  },
  "druide/restoration-2-2": {
   "name": "Discrétion",
   "nameSource": "officiel",
   "spell": 17118,
   "classic": "Diminue le niveau de menace généré par vos sorts de soins de 4%.",
   "nameBranch": "classic",
   "rank1": "Réduit de 10% la menace générée par vos sorts de Nature et des Arcanes.",
   "textSource": "editorial"
  },
  "druide/restoration-2-3": {
   "name": "Changeforme naturel",
   "nameSource": "officiel",
   "spell": 16833,
   "classic": "Réduit le coût en mana de tous les changements de forme de 10%.",
   "rank1": "Réduit le coût en mana de tous les changements de forme de 10%.",
   "textSource": "officiel",
   "nameBranch": "tbc"
  },
  "druide/restoration-3-2": {
   "name": "Renvoi",
   "nameSource": "officiel",
   "spell": 17106,
   "classic": "Vous confère 5% de votre vitesse de récupération du mana normale pendant l'incantation.",
   "rank1": "Vous confère 17% de votre vitesse de récupération du mana normale pendant l'incantation.",
   "textSource": "officiel-chiffre",
   "nameBranch": "classic"
  },
  "druide/restoration-3-3": {
   "name": "Don de la Nature",
   "nameSource": "officiel",
   "spell": 17104,
   "classic": "Augmente les effets de tous les sorts de soins de 2%.",
   "nameBranch": "classic",
   "rank1": "Augmente de 2% l’effet de tous vos sorts de soins.",
   "textSource": "editorial"
  },
  "druide/restoration-4-2": {
   "name": "Tranquillité de l'esprit",
   "nameSource": "officiel",
   "spell": 24968,
   "classic": "Réduit le coût en mana de vos sorts Toucher guérisseur et Tranquillité de 2%.",
   "rank1": "Réduit le coût en mana de vos sorts Toucher guérisseur et Tranquillité de 2%.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "druide/restoration-4-3": {
   "name": "Récupération améliorée",
   "nameSource": "officiel",
   "spell": 17111,
   "classic": "Augmente les effets de votre sort Récupération de 5%.",
   "rank1": "Augmente les effets de votre sort Récupération de 5%.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "druide/restoration-4-4": {
   "name": "Prompte guérison",
   "nameSource": "officiel",
   "spell": 18562,
   "classic": "le montant de points de vie équivalent à 12 s de Récupération ou 18 s de Rétablissement.",
   "nameBranch": "classic",
   "rank1": "Soigne instantanément une cible sous l’effet de Récupération ou de Rétablissement d’un montant égal à la durée totale de l’effet périodique de l’un de ces sorts.",
   "textSource": "editorial"
  },
  "druide/restoration-5-1": {
   "name": "Rapidité de la nature",
   "nameSource": "officiel",
   "spell": 17116,
   "classic": "Lorsque cette technique est activée, votre prochain sort de Nature devient un sort instantané.",
   "rank1": "Lorsque cette technique est activée, votre prochain sort de Nature devient un sort instantané.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "druide/restoration-5-4": {
   "name": "Tranquillité améliorée",
   "nameSource": "officiel",
   "spell": 17123,
   "classic": "Diminue le niveau de menace généré par Tranquillité de 50%.",
   "nameBranch": "classic",
   "ranks": [
    "Réduit de 50% la menace générée par Tranquillité et de 30% son temps de recharge.",
    "Réduit de 100% la menace générée par Tranquillité et de 60% son temps de recharge."
   ],
   "rank1": "Réduit de 50% la menace générée par Tranquillité et de 30% son temps de recharge.",
   "textSource": "editorial"
  },
  "druide/restoration-6-3": {
   "name": "Rétablissement amélioré",
   "nameSource": "officiel",
   "spell": 17074,
   "classic": "Augmente les chances d'obtenir un effet critique avec votre sort Rétablissement de 10%.",
   "rank1": "Augmente les chances d'obtenir un effet critique avec votre sort Rétablissement de 10%.",
   "textSource": "officiel",
   "nameBranch": "classic"
  },
  "guerrier/fury-5-1": {
   "name": "Précision",
   "nameSource": "officiel",
   "nameBranch": "tbc",
   "spell": 29590,
   "rank1": "Augmente de 1% vos chances de toucher avec toutes vos attaques et techniques.",
   "textSource": "editorial"
  },
  "paladin/holy-3-3": {
   "name": "Puissance purifiante",
   "nameSource": "officiel",
   "nameBranch": "tbc",
   "spell": 31825,
   "ranks": [
    "Réduit de 10% le coût en mana de vos sorts Purification et Purifier, et de 17% le temps de recharge de vos sorts Exorcisme et Courroux sacré.",
    "Réduit de 20% le coût en mana de vos sorts Purification et Purifier, et de 33% le temps de recharge de vos sorts Exorcisme et Courroux sacré."
   ],
   "rank1": "Réduit de 10% le coût en mana de vos sorts Purification et Purifier, et de 17% le temps de recharge de vos sorts Exorcisme et Courroux sacré.",
   "textSource": "editorial"
  },
  "paladin/holy-4-1": {
   "name": "Imprégnation de lumière",
   "nameSource": "officiel",
   "nameBranch": "wotlk",
   "spell": 53569,
   "rank1": "Pendant 15 sec après un coup critique de vos sorts Horion sacré ou Éclair lumineux, le temps d’incantation de votre prochaine Lumière sacrée est réduit de 0,5 sec.",
   "textSource": "editorial"
  },
  "paladin/protection-3-4": {
   "name": "Devoir sacré",
   "nameSource": "officiel",
   "nameBranch": "tbc",
   "spell": 31848,
   "ranks": [
    "Augmente de 2% votre Endurance totale et réduit de 30 sec le temps de recharge de vos sorts Bouclier divin, Protection divine et Rempart du templier.",
    "Augmente de 4% votre Endurance totale et réduit de 60 sec le temps de recharge de vos sorts Bouclier divin, Protection divine et Rempart du templier."
   ],
   "rank1": "Augmente de 2% votre Endurance totale et réduit de 30 sec le temps de recharge de vos sorts Bouclier divin, Protection divine et Rempart du templier.",
   "textSource": "editorial"
  },
  "paladin/retribution-3-2": {
   "name": "Jugement sanctifié",
   "nameSource": "officiel",
   "nameBranch": "tbc",
   "spell": 31876,
   "rank1": "Confère à votre technique Jugement 33% de chances de vous rendre 20% du coût en mana du sceau jugé.",
   "textSource": "editorial"
  },
  "paladin/retribution-4-4": {
   "name": "Croisade",
   "nameSource": "officiel",
   "nameBranch": "tbc",
   "spell": 31866,
   "rank1": "Augmente de 1% tous les dégâts que vous infligez, et de 1% supplémentaire contre les démons et les morts-vivants.",
   "textSource": "editorial"
  },
  "chasseur/beast-mastery-2-1": {
   "name": "Feu focalisé",
   "nameSource": "officiel",
   "nameBranch": "tbc",
   "spell": 35029,
   "rank1": "Augmente de 1% tous les dégâts que vous et votre familier infligez tant que votre familier est actif.",
   "textSource": "editorial"
  },
  "chasseur/marksmanship-2-3": {
   "name": "Visée minutieuse",
   "nameSource": "officiel",
   "nameBranch": "tbc",
   "spell": 34482,
   "rank1": "Augmente votre puissance d’attaque de 20% de votre Intelligence.",
   "textSource": "editorial"
  },
  "chasseur/marksmanship-3-1": {
   "name": "Tueur rapide",
   "nameSource": "officiel",
   "nameBranch": "tbc",
   "spell": 34948,
   "ranks": [
    "Réduit de 1 min le temps de recharge de votre technique Tir rapide. De plus, lorsque vous tuez un ennemi non trivial, ou qu’il meurt en étant affecté par votre Morsure de serpent, vous gagnez Tueur rapide, qui augmente de 10% les dégâts de votre prochain Tir dans les 20 sec.",
    "Réduit de 2 min le temps de recharge de votre technique Tir rapide. De plus, lorsque vous tuez un ennemi non trivial, ou qu’il meurt en étant affecté par votre Morsure de serpent, vous gagnez Tueur rapide, qui augmente de 20% les dégâts de votre prochain Tir dans les 20 sec."
   ],
   "rank1": "Réduit de 1 min le temps de recharge de votre technique Tir rapide. De plus, lorsque vous tuez un ennemi non trivial, ou qu’il meurt en étant affecté par votre Morsure de serpent, vous gagnez Tueur rapide, qui augmente de 10% les dégâts de votre prochain Tir dans les 20 sec.",
   "textSource": "editorial"
  },
  "chasseur/marksmanship-5-1": {
   "name": "Recouvrement rapide",
   "nameSource": "officiel",
   "nameBranch": "wotlk",
   "spell": 53228,
   "rank1": "Toucher une cible avec votre technique Morsure de serpent vous accorde 25%, et consommer Tueur rapide vous accorde 50%, de votre régénération de mana pendant l’incantation durant 15 sec.",
   "textSource": "editorial"
  },
  "chasseur/survival-1-2": {
   "name": "Pistage amélioré",
   "nameSource": "officiel",
   "nameBranch": "wotlk",
   "spell": 52783,
   "ranks": [
    "Lorsque vous pistez les bêtes, les démons, les draconiens, les élémentaires, les géants, les humanoïdes ou les morts-vivants, tous les dégâts que vous infligez au type de créature pisté sont augmentés de 1%.",
    "Lorsque vous pistez les bêtes, les démons, les draconiens, les élémentaires, les géants, les humanoïdes ou les morts-vivants, tous les dégâts que vous infligez au type de créature pisté sont augmentés de 2%.",
    "Lorsque vous pistez les bêtes, les démons, les draconiens, les élémentaires, les géants, les humanoïdes ou les morts-vivants, tous les dégâts que vous infligez au type de créature pisté sont augmentés de 3%.",
    "Lorsque vous pistez les bêtes, les démons, les draconiens, les élémentaires, les géants, les humanoïdes ou les morts-vivants, tous les dégâts que vous infligez au type de créature pisté sont augmentés de 4%.",
    "Lorsque vous pistez les bêtes, les démons, les draconiens, les élémentaires, les géants, les humanoïdes ou les morts-vivants, tous les dégâts que vous infligez au type de créature pisté sont augmentés de 5%."
   ],
   "rank1": "Lorsque vous pistez les bêtes, les démons, les draconiens, les élémentaires, les géants, les humanoïdes ou les morts-vivants, tous les dégâts que vous infligez au type de créature pisté sont augmentés de 1%.",
   "textSource": "editorial"
  },
  "chasseur/survival-4-1": {
   "name": "Tactique de survie",
   "nameSource": "officiel",
   "nameBranch": "wotlk",
   "spell": 19286,
   "rank1": "Augmente de 5% vos chances de toucher avec vos techniques Piège et Faire le mort.",
   "textSource": "editorial"
  },
  "chasseur/survival-5-1": {
   "name": "Ressource",
   "nameSource": "officiel",
   "nameBranch": "tbc",
   "spell": 34491,
   "ranks": [
    "Réduit de 30% le coût en mana de vos techniques de Piège et de mêlée. De plus, vos coups critiques ont 30% de chances de permettre à 50% de votre régénération de mana de se poursuivre pendant l’incantation durant 30 sec.",
    "Réduit de 60% le coût en mana de vos techniques de Piège et de mêlée. De plus, vos coups critiques ont 60% de chances de permettre à 50% de votre régénération de mana de se poursuivre pendant l’incantation durant 30 sec."
   ],
   "rank1": "Réduit de 30% le coût en mana de vos techniques de Piège et de mêlée. De plus, vos coups critiques ont 30% de chances de permettre à 50% de votre régénération de mana de se poursuivre pendant l’incantation durant 30 sec.",
   "textSource": "editorial"
  },
  "voleur/assassination-5-2": {
   "name": "Estropier",
   "nameSource": "officiel",
   "nameBranch": "tbc",
   "spell": 1329,
   "rank1": "Attaque instantanément des deux armes, infligeant 75% des dégâts de l’arme plus 17 points de dégâts supplémentaires par arme. Dégâts augmentés de 20% contre une cible empoisonnée. Rapporte 2 points de combo.",
   "textSource": "editorial"
  },
  "voleur/combat-5-3": {
   "name": "Taillader et trancher",
   "nameSource": "officiel",
   "nameBranch": "wotlk",
   "spell": 13960,
   "ranks": [
    "Confère un bénéfice à vos attaques d’arme de mêlée, selon l’arme employée.\n\nHache et épée : vos attaques de mêlée réussies ont 1% de chances de déclencher une attaque supplémentaire sur la cible.\n\nDague et arme de pugilat : augmente de 1% vos chances de coup critique.\n\nMasse : vos attaques ignorent 3% de l’armure de votre cible.",
    "Confère un bénéfice à vos attaques d’arme de mêlée, selon l’arme employée.\n\nHache et épée : vos attaques de mêlée réussies ont 2% de chances de déclencher une attaque supplémentaire sur la cible.\n\nDague et arme de pugilat : augmente de 2% vos chances de coup critique.\n\nMasse : vos attaques ignorent 6% de l’armure de votre cible.",
    "Confère un bénéfice à vos attaques d’arme de mêlée, selon l’arme employée.\n\nHache et épée : vos attaques de mêlée réussies ont 3% de chances de déclencher une attaque supplémentaire sur la cible.\n\nDague et arme de pugilat : augmente de 3% vos chances de coup critique.\n\nMasse : vos attaques ignorent 9% de l’armure de votre cible.",
    "Confère un bénéfice à vos attaques d’arme de mêlée, selon l’arme employée.\n\nHache et épée : vos attaques de mêlée réussies ont 4% de chances de déclencher une attaque supplémentaire sur la cible.\n\nDague et arme de pugilat : augmente de 4% vos chances de coup critique.\n\nMasse : vos attaques ignorent 12% de l’armure de votre cible.",
    "Confère un bénéfice à vos attaques d’arme de mêlée, selon l’arme employée.\n\nHache et épée : vos attaques de mêlée réussies ont 5% de chances de déclencher une attaque supplémentaire sur la cible.\n\nDague et arme de pugilat : augmente de 5% vos chances de coup critique.\n\nMasse : vos attaques ignorent 15% de l’armure de votre cible."
   ],
   "rank1": "Confère un bénéfice à vos attaques d’arme de mêlée, selon l’arme employée.\n\nHache et épée : vos attaques de mêlée réussies ont 1% de chances de déclencher une attaque supplémentaire sur la cible.\n\nDague et arme de pugilat : augmente de 1% vos chances de coup critique.\n\nMasse : vos attaques ignorent 3% de l’armure de votre cible.",
   "textSource": "editorial"
  },
  "voleur/subtlety-2-3": {
   "name": "Coup tordu",
   "nameSource": "officiel",
   "nameBranch": "tbc",
   "spell": 14076,
   "rank1": "Réduit de 25% le coût en énergie de vos techniques Assommer et Cécité.",
   "textSource": "editorial"
  },
  "pretre/discipline-1-3": {
   "name": "Disciplines jumelles",
   "nameSource": "officiel",
   "nameBranch": "wotlk",
   "spell": 47586,
   "rank1": "Augmente de 1% les dégâts et les soins de vos sorts à lancement instantané.",
   "textSource": "editorial"
  },
  "pretre/discipline-4-3": {
   "name": "Protection de l'âme",
   "nameSource": "officiel",
   "nameBranch": "wotlk",
   "spell": 63574,
   "rank1": "Réduit de 4 sec le temps de recharge de votre sort Mot de pouvoir : Bouclier et de 15% son coût en mana.",
   "textSource": "editorial"
  },
  "pretre/discipline-5-2": {
   "name": "Pénitence",
   "nameSource": "officiel",
   "nameBranch": "wotlk",
   "spell": 47540,
   "rank1": "Projette une volée de lumière sacrée sur la cible, infligeant 96 points de dégâts du Sacré à un ennemi ou rendant 233 points de vie à un allié. Instantanément, puis toutes les 1 sec pendant 2 sec.",
   "textSource": "editorial"
  },
  "pretre/discipline-5-3": {
   "name": "Regain d'espoir",
   "nameSource": "officiel",
   "nameBranch": "wotlk",
   "spell": 57470,
   "rank1": "Vos soins de Soins rapides, Soins de liaison, Soins inférieurs, Soins, Soins supérieurs et Pénitence gagnent 2% de chances de coup critique lorsqu’ils sont lancés sur une cible affectée par Âme affaiblie, et réduisent de 1 sec la durée restante de cette Âme affaiblie.",
   "textSource": "editorial"
  },
  "pretre/discipline-6-3": {
   "name": "Egide divine",
   "nameSource": "officiel",
   "nameBranch": "wotlk",
   "spell": 47509,
   "rank1": "Vos soins critiques créent sur la cible un bouclier protecteur absorbant 5% du montant soigné. Dure 12 sec.",
   "textSource": "editorial"
  },
  "chaman/elemental-combat-5-2": {
   "name": "Surcharge de foudre",
   "nameSource": "officiel",
   "nameBranch": "tbc",
   "spell": 30675,
   "rank1": "Donne à vos sorts Eclair et Chaîne d'éclairs 3% de chances de lancer un second sort semblable sur la même cible sans coût supplémentaire. Ce sort n'inflige que la moitié des dégâts et ne génère pas de menace.",
   "textSource": "officiel-chiffre"
  },
  "chaman/enhancement-2-2": {
   "name": "Dextérité mentale",
   "nameSource": "officiel",
   "nameBranch": "wotlk",
   "spell": 51883,
   "rank1": "Augmente votre puissance d’attaque d’un montant égal à 33% de votre Intelligence.",
   "textSource": "editorial"
  },
  "chaman/enhancement-3-3": {
   "name": "Focalisation chamanique",
   "nameSource": "officiel",
   "nameBranch": "tbc",
   "spell": 43338,
   "rank1": "Réduit de 45% le coût en mana de vos sorts Horion et Bouclier de foudre.",
   "textSource": "editorial"
  },
  "chaman/enhancement-5-2": {
   "name": "Rapidité mentale",
   "nameSource": "officiel",
   "nameBranch": "tbc",
   "spell": 30812,
   "ranks": [
    "Augmente vos dégâts et vos soins par sort d’un montant pouvant atteindre 15% de votre Intelligence.",
    "Augmente vos dégâts et vos soins par sort de 30% de votre Intelligence."
   ],
   "rank1": "Augmente vos dégâts et vos soins par sort d’un montant pouvant atteindre 15% de votre Intelligence.",
   "textSource": "editorial"
  },
  "chaman/enhancement-5-3": {
   "name": "Frappe-tempête amélioré",
   "nameSource": "officiel",
   "nameBranch": "wotlk",
   "spell": 51521,
   "rank1": "Lorsque vous utilisez Frappe-tempête, vous avez 50% de chances de bénéficier de 50% de régénération de mana pendant l’incantation durant 15 sec, et le temps de recharge de Frappe-tempête a 50% de chances d’être réinitialisé à chaque esquive ou parade.",
   "textSource": "editorial"
  },
  "chaman/enhancement-6-3": {
   "name": "Arme du Maelström",
   "nameSource": "officiel",
   "nameBranch": "wotlk",
   "spell": 51528,
   "rank1": "Lorsque vous infligez des dégâts avec une attaque de mêlée, vous avez une chance de réduire de 4% le temps d’incantation et le coût en mana de votre prochain sort Éclair. Cumulable jusqu’à 5 fois. Dure 30 sec.",
   "textSource": "editorial"
  },
  "chaman/restoration-7-2": {
   "name": "Remous",
   "nameSource": "officiel",
   "nameBranch": "wotlk",
   "spell": 61295,
   "rank1": "Soigne une cible alliée de 479 à 528 points de vie, plus 499 points supplémentaires en 15 sec, et augmente de 25% l’efficacité de vos Salves de soins lancées directement sur cette cible.",
   "textSource": "editorial"
  },
  "mage/arcane-4-4": {
   "name": "Barrage de projectiles",
   "nameSource": "officiel",
   "nameBranch": "wotlk",
   "spell": 44404,
   "rank1": "Confère à votre sort Décharge des arcanes 40% de chances, et à vos sorts Boule de feu, Éclair de givre et Trait de givre-feu 20% de chances, de réduire de 50% la durée de canalisation de vos prochains Projectiles des arcanes, d’en réduire le coût en mana de 100% et d’en lancer un projectile toutes les 0,5 sec.",
   "textSource": "editorial"
  },
  "mage/fire-4-3": {
   "name": "Chaleur continue",
   "nameSource": "officiel",
   "nameBranch": "wotlk",
   "spell": 44445,
   "rank1": "Vos coups critiques non périodiques de Boule de feu, Trait de givre-feu, Trait de feu et Brûlure vous confèrent Chaleur continue pendant 15 sec. Chaleur continue réduit de 25% le temps d’incantation d’Explosion pyrotechnique, cumulable jusqu’à 3 fois.",
   "textSource": "editorial"
  },
  "mage/frost-5-3": {
   "name": "Doigts de givre",
   "nameSource": "officiel",
   "nameBranch": "wotlk",
   "spell": 44543,
   "ranks": [
    "Confère à vos effets de gel 15% de chances de vous accorder Doigts de givre : votre prochain sort traite alors la cible comme si elle était gelée. Dure 15 sec.",
    "Confère à vos effets de gel 15% de chances de vous accorder Doigts de givre : vos deux prochains sorts traitent alors la cible comme si elle était gelée. Dure 15 sec."
   ],
   "rank1": "Confère à vos effets de gel 15% de chances de vous accorder Doigts de givre : votre prochain sort traite alors la cible comme si elle était gelée. Dure 15 sec.",
   "textSource": "editorial"
  },
  "demoniste/affliction-2-1": {
   "name": "Imprécation",
   "nameSource": "officiel",
   "nameBranch": "tbc",
   "spell": 32477,
   "rank1": "Augmente de 1% tous les dégâts périodiques infligés par vos sorts de démoniste.",
   "textSource": "editorial"
  },
  "demoniste/affliction-3-4": {
   "name": "Pandémie",
   "nameSource": "officiel",
   "nameBranch": "wotlk",
   "spell": 58435,
   "rank1": "Augmente de 33% le bonus de dégâts critiques de vos sorts Corruption, Plaie d’agonie, Plaie funeste, Siphon d’âme, Drain de vie, Siphon de vie et Supplice.",
   "textSource": "editorial"
  },
  "demoniste/affliction-5-3": {
   "name": "Siphon d'âme",
   "nameSource": "officiel",
   "nameBranch": "tbc",
   "spell": 17804,
   "rank1": "Augmente de 4% les dégâts infligés ou la vie drainée par vos sorts Drain de vie, Siphon d’âme et Supplice, par effet d’Affliction actif sur la cible, jusqu’à un maximum de 12%.",
   "textSource": "editorial"
  },
  "demoniste/demonology-2-1": {
   "name": "Egide démoniaque",
   "nameSource": "officiel",
   "nameBranch": "tbc",
   "spell": 30143,
   "rank1": "Augmente de 15% l’efficacité de vos sorts Peau de démon et Armure de démon.",
   "textSource": "editorial"
  },
  "demoniste/demonology-4-1": {
   "name": "Décimation",
   "nameSource": "officiel",
   "nameBranch": "wotlk",
   "spell": 63156,
   "rank1": "Réduit de 45% le temps de recharge de votre sort Feu de l’âme. Lorsque vous lancez Trait de l’ombre ou Douleur brûlante sur un ennemi sous 35% de points de vie, il inflige 3% de dégâts supplémentaires et, pendant les 10 sec qui suivent, le temps d’incantation de votre sort Feu de l’âme est réduit de 20% et ne coûte aucun Fragment d’âme.",
   "textSource": "editorial"
  },
  "demoniste/demonology-5-1": {
   "name": "Chasseur corrompu amélioré",
   "nameSource": "officiel",
   "nameBranch": "wotlk",
   "spell": 54037,
   "note": "Nom repris d’un talent homonyme du client français (Wrath of the Lich King), trouvé hors de l’arbre où Forever le place.",
   "ranks": [
    "Augmente de 10% la réduction de puissance d’attaque du Sang vicié de votre chasseur corrompu, les soins de son Dévorer la magie et le niveau de détection de sa Paranoïa, et réduit de 2 sec le temps de recharge de son Interruption.",
    "Augmente de 20% la réduction de puissance d’attaque du Sang vicié de votre chasseur corrompu, les soins de son Dévorer la magie et le niveau de détection de sa Paranoïa, et réduit de 4 sec le temps de recharge de son Interruption.",
    "Augmente de 30% la réduction de puissance d’attaque du Sang vicié de votre chasseur corrompu, les soins de son Dévorer la magie et le niveau de détection de sa Paranoïa, et réduit de 6 sec le temps de recharge de son Interruption."
   ],
   "rank1": "Augmente de 10% la réduction de puissance d’attaque du Sang vicié de votre chasseur corrompu, les soins de son Dévorer la magie et le niveau de détection de sa Paranoïa, et réduit de 2 sec le temps de recharge de son Interruption.",
   "textSource": "editorial"
  },
  "demoniste/demonology-5-3": {
   "name": "Connaissance démoniaque",
   "nameSource": "officiel",
   "nameBranch": "tbc",
   "spell": 35691,
   "rank1": "Augmente vos dégâts par sort et ceux de votre démon d’un montant pouvant atteindre 33% de votre niveau tant qu’un démon invoqué est actif.",
   "textSource": "editorial"
  },
  "demoniste/demonology-7-2": {
   "name": "Pacte démoniaque",
   "nameSource": "officiel",
   "nameBranch": "wotlk",
   "spell": 47236,
   "rank1": "Votre effet Sacrifice démoniaque n’est plus annulé par l’invocation d’un démon différent. Réinvoquer le démon sacrifié l’annule toujours.",
   "textSource": "editorial"
  },
  "demoniste/destruction-2-1": {
   "name": "Peau de la fournaise",
   "nameSource": "officiel",
   "nameBranch": "wotlk",
   "spell": 63349,
   "rank1": "Réduit tous les dégâts subis de 2%.",
   "textSource": "officiel"
  },
  "demoniste/destruction-5-3": {
   "name": "Feu et soufre",
   "nameSource": "officiel",
   "nameBranch": "wotlk",
   "spell": 47266,
   "rank1": "Augmente de 8% les chances d’infliger un coup critique avec votre sort Conflagration.",
   "textSource": "editorial"
  },
  "demoniste/destruction-6-3": {
   "name": "Ombre et flammes",
   "nameSource": "officiel",
   "nameBranch": "tbc",
   "spell": 30288,
   "rank1": "Toucher un ennemi avec Conflagration augmente de 2% tous les dégâts d’Ombre que vous infligez pendant 20 sec, et le toucher avec Brûlure de l’ombre augmente de 2% tous les dégâts de Feu que vous infligez pendant 20 sec. De plus, Conflagration a 20% de chances de ne pas consommer Immolation, et Brûlure de l’ombre a 20% de chances de vous rendre instantanément un Fragment d’âme.",
   "textSource": "editorial"
  },
  "druide/balance-1-3": {
   "name": "Genèse",
   "nameSource": "officiel",
   "nameBranch": "wotlk",
   "spell": 57810,
   "rank1": "Augmente de 1% les dégâts et les soins périodiques infligés par vos sorts et vos techniques.",
   "textSource": "editorial"
  },
  "druide/balance-2-3": {
   "name": "Majesté de la nature",
   "nameSource": "officiel",
   "nameBranch": "wotlk",
   "spell": 35363,
   "rank1": "Augmente de 2% vos chances d’infliger un coup critique avec vos sorts et vos attaques de mêlée.",
   "textSource": "editorial"
  },
  "druide/balance-3-3": {
   "name": "Splendeur de la nature",
   "nameSource": "officiel",
   "nameBranch": "wotlk",
   "spell": 57865,
   "rank1": "Augmente de 3 sec la durée de vos sorts Éclat lunaire et Récupération, de 6 sec celle de votre sort Rétablissement et de 2 sec celle de votre sort Essaim d’insectes.",
   "textSource": "editorial"
  },
  "druide/balance-5-3": {
   "name": "Eclipse",
   "nameSource": "officiel",
   "nameBranch": "wotlk",
   "spell": 48516,
   "rank1": "Votre sort Colère réduit le temps d’incantation de vos 2 prochains sorts Feu stellaire de 0,17 sec. Cumule jusqu’à 4 charges. Dure 15 sec.",
   "textSource": "editorial"
  },
  "druide/feral-combat-4-2": {
   "name": "Mutilation",
   "nameSource": "officiel",
   "nameBranch": "tbc",
   "spell": 33917,
   "rank1": "Mutile la cible et lui inflige 100% des dégâts normaux, plus 26 points de dégâts.",
   "textSource": "editorial"
  },
  "druide/feral-combat-5-1": {
   "name": "Instincts de prédateur",
   "nameSource": "officiel",
   "nameBranch": "tbc",
   "spell": 33859,
   "rank1": "Augmente de 10% le bonus de dégâts critiques de vos techniques de mêlée.",
   "textSource": "editorial"
  },
  "druide/feral-combat-5-4": {
   "name": "Roi de la jungle",
   "nameSource": "officiel",
   "nameBranch": "wotlk",
   "spell": 48492,
   "rank1": "Fureur du tigre vous rend désormais instantanément 20 points d’énergie.",
   "textSource": "editorial"
  },
  "druide/feral-combat-6-1": {
   "name": "Réaction naturelle",
   "nameSource": "officiel",
   "nameBranch": "wotlk",
   "spell": 57878,
   "rank1": "Augmente de 1% vos chances d’esquiver et vous confère 20% de chances de gagner 5 points de rage chaque fois que vous esquivez.",
   "textSource": "editorial"
  },
  "druide/feral-combat-6-3": {
   "name": "Pourfendre et déchirer",
   "nameSource": "officiel",
   "nameBranch": "wotlk",
   "spell": 48432,
   "ranks": [
    "Augmente de 2% les dégâts infligés par vos techniques de mêlée aux cibles qui saignent.",
    "Augmente de 4% les dégâts infligés par vos techniques de mêlée aux cibles qui saignent.",
    "Augmente de 6% les dégâts infligés par vos techniques de mêlée aux cibles qui saignent.",
    "Augmente de 8% les dégâts infligés par vos techniques de mêlée aux cibles qui saignent.",
    "Augmente de 10% les dégâts infligés par vos techniques de mêlée aux cibles qui saignent."
   ],
   "rank1": "Augmente de 2% les dégâts infligés par vos techniques de mêlée aux cibles qui saignent.",
   "textSource": "editorial"
  },
  "druide/feral-combat-7-2": {
   "name": "Berserk",
   "nameSource": "officiel",
   "nameBranch": "wotlk",
   "spell": 50334,
   "rank1": "Votre technique Mutilation frappe jusqu’à 3 cibles et perd son temps de recharge, et les chances de coup critique de vos techniques qui génèrent des points de combo sont augmentées de 100%. Dissipe les effets de Peur et vous y rend insensible pendant toute la durée. Dure 15 sec.",
   "textSource": "editorial"
  },
  "druide/restoration-3-4": {
   "name": "Don de la Terre-mère",
   "nameSource": "officiel",
   "nameBranch": "wotlk",
   "spell": 51179,
   "rank1": "Réduit de 0,5 sec le temps de recharge global de vos sorts Récupération, Prompte guérison et Croissance sauvage.",
   "textSource": "editorial"
  },
  "druide/restoration-5-2": {
   "name": "Esprit vif",
   "nameSource": "officiel",
   "nameBranch": "tbc",
   "spell": 34151,
   "rank1": "Augmente de 5% votre Esprit.",
   "textSource": "editorial"
  },
  "druide/restoration-7-2": {
   "name": "Croissance sauvage",
   "nameSource": "officiel",
   "nameBranch": "wotlk",
   "spell": 48438,
   "rank1": "Soigne la cible et son groupe de 285 points de vie en 7 sec. Les membres du groupe doivent se trouver à moins de 43 mètres de la cible. Les soins sont d’abord prodigués rapidement, puis ralentissent à mesure que Croissance sauvage approche de sa durée totale.",
   "textSource": "editorial"
  },
  "guerrier/fury-3-4": {
   "name": "Rage sans limite",
   "nameSource": "adapte",
   "rank1": "Augmente votre rage maximale de 10.",
   "textSource": "editorial"
  },
  "guerrier/fury-4-2": {
   "name": "Coups enragés",
   "nameSource": "adapte",
   "rank1": "Votre Tourbillon frappe également avec votre arme de main gauche et le coût en rage de votre technique Enchaînement est réduit de 2.",
   "textSource": "editorial"
  },
  "guerrier/protection-3-2": {
   "name": "Maître de la défense",
   "nameSource": "adapte",
   "ranks": [
    "Vous donne 50% de chances de générer 5 points de rage lorsque vous esquivez ou parez avec un bouclier équipé.",
    "Vous donne 100% de chances de générer 5 points de rage lorsque vous esquivez ou parez avec un bouclier équipé."
   ],
   "rank1": "Vous donne 50% de chances de générer 5 points de rage lorsque vous esquivez ou parez avec un bouclier équipé.",
   "textSource": "editorial"
  },
  "guerrier/protection-4-3": {
   "name": "Avant-garde",
   "nameSource": "adapte",
   "rank1": "Votre technique Charge devient utilisable en posture défensive.",
   "textSource": "editorial"
  },
  "paladin/holy-1-1": {
   "name": "Frappe sacrée améliorée",
   "nameSource": "adapte",
   "rank1": "Réduit de 1 sec le temps de recharge de votre technique Frappe sacrée.",
   "textSource": "editorial"
  },
  "paladin/holy-3-1": {
   "name": "Voix de vérité",
   "nameSource": "adapte",
   "rank1": "Vous rend insensible aux effets de silence et d’interruption. Dure 6 sec.",
   "textSource": "editorial"
  },
  "paladin/holy-3-2": {
   "name": "Révérence",
   "nameSource": "adapte",
   "rank1": "Permet à 10% de votre régénération de mana de se poursuivre pendant l’incantation.",
   "textSource": "editorial"
  },
  "paladin/holy-5-1": {
   "name": "Précision divine",
   "nameSource": "adapte",
   "rank1": "Augmente de 6% vos chances de toucher avec vos sorts du Sacré.",
   "textSource": "editorial"
  },
  "paladin/holy-5-3": {
   "name": "Terre consacrée",
   "nameSource": "adapte",
   "ranks": [
    "Confère à vos sorts du Sacré 5% de dégâts supplémentaires contre les 4 premiers ennemis qui pénètrent dans votre Consécration.",
    "Confère à vos sorts du Sacré 10% de dégâts supplémentaires contre les 4 premiers ennemis qui pénètrent dans votre Consécration."
   ],
   "rank1": "Confère à vos sorts du Sacré 5% de dégâts supplémentaires contre les 4 premiers ennemis qui pénètrent dans votre Consécration.",
   "textSource": "editorial"
  },
  "paladin/holy-7-2": {
   "name": "Veille de la Lumière",
   "nameSource": "adapte",
   "rank1": "Applique Veille de la Lumière à la cible pendant 30 sec. Votre prochain Horion sacré lancé sur elle ne déclenche aucun temps de recharge : sur un allié, il soigne son groupe de 315 à 333 points de vie ; sur un ennemi, il inflige 175 à 189 points de dégâts du Sacré et rembourse 75% du coût en mana de Veille de la Lumière. Un seul effet Veille de la Lumière peut être actif par paladin et par groupe.",
   "textSource": "editorial"
  },
  "paladin/protection-3-1": {
   "name": "Sceau de fureur amélioré",
   "nameSource": "adapte",
   "rank1": "Lorsque le bouclier de votre Sceau de fureur est entièrement absorbé, vous récupérez 38 points de mana, un montant augmenté de 15% par niveau que l’attaquant a de plus que vous, jusqu’à 45%.",
   "textSource": "editorial"
  },
  "paladin/protection-4-1": {
   "name": "Jugement rapide",
   "nameSource": "adapte",
   "rank1": "Met fin au temps de recharge restant de votre technique Jugement et réduit de 100% le coût en mana de votre prochain Jugement.",
   "textSource": "editorial"
  },
  "paladin/protection-5-2": {
   "name": "Rempart du templier",
   "nameSource": "adapte",
   "rank1": "Une fois activée, cette technique vous accorde un bouclier d’absorption égal à 100% de votre maximum de points de vie pendant 8 sec. Applique Tolérance pendant 1 min. Ne peut pas être lancée tant que Tolérance est active.",
   "textSource": "editorial"
  },
  "paladin/protection-6-3": {
   "name": "Credo de fer",
   "nameSource": "adapte",
   "ranks": [
    "Augmente de 5% la menace générée par votre technique Frappe sacrée. Tant que Fureur vertueuse est active, Frappe sacrée réduit également de 2% les dégâts que vous subissez pendant 6 sec.",
    "Augmente de 10% la menace générée par votre technique Frappe sacrée. Tant que Fureur vertueuse est active, Frappe sacrée réduit également de 4% les dégâts que vous subissez pendant 6 sec.",
    "Augmente de 15% la menace générée par votre technique Frappe sacrée. Tant que Fureur vertueuse est active, Frappe sacrée réduit également de 6% les dégâts que vous subissez pendant 6 sec.",
    "Augmente de 20% la menace générée par votre technique Frappe sacrée. Tant que Fureur vertueuse est active, Frappe sacrée réduit également de 8% les dégâts que vous subissez pendant 6 sec.",
    "Augmente de 25% la menace générée par votre technique Frappe sacrée. Tant que Fureur vertueuse est active, Frappe sacrée réduit également de 10% les dégâts que vous subissez pendant 6 sec."
   ],
   "rank1": "Augmente de 5% la menace générée par votre technique Frappe sacrée. Tant que Fureur vertueuse est active, Frappe sacrée réduit également de 2% les dégâts que vous subissez pendant 6 sec.",
   "textSource": "editorial"
  },
  "paladin/retribution-2-2": {
   "name": "Conduit sacré",
   "nameSource": "adapte",
   "ranks": [
    "Réduit de 20% le coût en mana de vos sorts Consécration, Courroux sacré, Exorcisme et Marteau du courroux.",
    "Réduit de 40% le coût en mana de vos sorts Consécration, Courroux sacré, Exorcisme et Marteau du courroux."
   ],
   "rank1": "Réduit de 20% le coût en mana de vos sorts Consécration, Courroux sacré, Exorcisme et Marteau du courroux.",
   "textSource": "editorial"
  },
  "paladin/retribution-4-3": {
   "name": "Arbitre sacré",
   "nameSource": "adapte",
   "rank1": "Augmente de 10% les points de dégâts de votre technique Frappe sacrée et lui fait renouveler tous les effets de Jugement présents sur la cible.",
   "textSource": "editorial"
  },
  "paladin/retribution-6-2": {
   "name": "Champion de la Lumière",
   "nameSource": "adapte",
   "ranks": [
    "Augmente vos dégâts et vos soins par sort d’un montant pouvant atteindre 33% de votre Intelligence.",
    "Augmente vos dégâts et vos soins par sort d’un montant pouvant atteindre 66% de votre Intelligence.",
    "Augmente vos dégâts et vos soins par sort d’un montant pouvant atteindre 100% de votre Intelligence."
   ],
   "rank1": "Augmente vos dégâts et vos soins par sort d’un montant pouvant atteindre 33% de votre Intelligence.",
   "textSource": "editorial"
  },
  "paladin/retribution-6-3": {
   "name": "Instrument de la loi",
   "nameSource": "adapte",
   "rank1": "Réduit de 0,5 sec le temps d’incantation de votre Marteau du courroux et réduit de 10% toute la menace que vous générez tant que Fureur vertueuse est inactive.",
   "textSource": "editorial"
  },
  "paladin/retribution-7-2": {
   "name": "Torsion de Lumière",
   "nameSource": "adapte",
   "rank1": "Lorsque vous remplacez votre Sceau d’autorité, Sceau de piété, Sceau de fureur ou Sceau de justice par un autre Sceau, vous gagnez un Écho. Votre prochaine attaque de mêlée applique les effets du Sceau remplacé et consomme l’Écho.",
   "textSource": "editorial"
  },
  "chasseur/beast-mastery-4-4": {
   "name": "Invocation de faucon",
   "nameSource": "officiel",
   "rank1": "Ordonne à un faucon de réaliser un bombardement en piqué sur l’adversaire que vous ciblez. Il lui inflige 53 points de dégâts physiques et continue son assaut pendant 18 sec. Seuls 2 faucons peuvent être actifs à la fois. Invoquer un faucon partage son temps de recharge avec Tir des arcanes.",
   "textSource": "client-forever",
   "nameBranch": "forever",
   "spell": 1293241,
   "note": "Formulation relevée dans le client français de la bêta. Les dégâts restent la valeur niveau 60 du calculateur : l’infobulle relevée est celle d’un personnage en cours de montée, où ce chiffre suit le niveau et la puissance d’attaque."
  },
  "chasseur/marksmanship-3-4": {
   "name": "Loup solitaire",
   "nameSource": "adapte",
   "rank1": "Vous infligez 20% de dégâts supplémentaires avec toutes vos attaques tant que vous n’avez pas de familier actif.",
   "textSource": "editorial"
  },
  "chasseur/survival-4-2": {
   "name": "Tranchant du prédateur",
   "nameSource": "adapte",
   "rank1": "Augmente de 6% les dégâts de vos coups critiques de mêlée et de 10% les dégâts de votre arme de main gauche.",
   "textSource": "editorial"
  },
  "chasseur/survival-5-2": {
   "name": "Proie exposée",
   "nameSource": "adapte",
   "rank1": "Vos attaques contre des cibles portant la Marque du chasseur ont 5% de chances d’activer votre Morsure de la mangouste pendant 5 sec.",
   "textSource": "editorial"
  },
  "chasseur/survival-5-3": {
   "name": "Discipline du survivant",
   "nameSource": "adapte",
   "rank1": "Réduit de 20% le temps de recharge de vos techniques Piège et Dissuasion.",
   "textSource": "editorial"
  },
  "chasseur/survival-5-4": {
   "name": "Coup d’arpenteur",
   "nameSource": "adapte",
   "rank1": "Un coup de pied puissant qui inflige 100% des dégâts de votre arme de mêlée.",
   "textSource": "editorial"
  },
  "chasseur/survival-7-2": {
   "name": "Frappes lacérantes",
   "nameSource": "adapte",
   "rank1": "Votre Morsure de la mangouste fait également saigner la cible, lui infligeant sur 21 sec des dégâts égaux à 40% de ceux de la Morsure de la mangouste.",
   "textSource": "editorial"
  },
  "voleur/assassination-7-2": {
   "name": "Venin",
   "nameSource": "adapte",
   "rank1": "Coup de grâce qui augmente de 30% les dégâts de vos poisons et de 10% vos chances de les appliquer. Sa durée augmente avec les points de combo :\n 1 point : 9 secondes\n 2 points : 12 secondes\n 3 points : 15 secondes\n 4 points : 18 secondes\n 5 points : 21 secondes",
   "textSource": "editorial"
  },
  "voleur/combat-4-2": {
   "name": "Exécution parfaite",
   "nameSource": "adapte",
   "rank1": "Réduit de 10 le coût en énergie de votre technique Éviscération.",
   "textSource": "editorial"
  },
  "voleur/subtlety-3-3": {
   "name": "Diversion améliorée",
   "nameSource": "adapte",
   "rank1": "Augmente de 3 mètres le rayon de votre technique Diversion et réduit encore la détection du camouflage des ennemis distraits, comme s’ils avaient 1 niveau de moins.",
   "textSource": "editorial",
   "ranks": [
    "Augmente de 3 mètres le rayon de votre technique Diversion et réduit encore la détection du camouflage des ennemis distraits, comme s’ils avaient 1 niveau de moins.",
    "Augmente de 5 mètres le rayon de votre technique Diversion et réduit encore la détection du camouflage des ennemis distraits, comme s’ils avaient 2 niveaux de moins."
   ]
  },
  "voleur/subtlety-6-1": {
   "name": "Quietus",
   "nameSource": "adapte",
   "rank1": "Vos techniques Attaque pernicieuse, Frappe fantomatique et Hémorragie infligent 2% de dégâts supplémentaires aux cibles dont les points de vie sont inférieurs à 35%.",
   "textSource": "editorial"
  },
  "voleur/subtlety-6-3": {
   "name": "Égorgeur",
   "nameSource": "adapte",
   "rank1": "Votre Attaque sournoise a 3% de chances de rendre votre prochaine Embuscade utilisable sans camouflage dans les 10 sec.",
   "textSource": "editorial"
  },
  "voleur/subtlety-7-2": {
   "name": "Mille entailles",
   "nameSource": "adapte",
   "rank1": "Lorsque votre technique Rupture inflige ses dégâts périodiques, le coût en énergie de votre prochaine Hémorragie ou Attaque sournoise dans les 10 sec est réduit de 3, cumulable jusqu’à 5 fois.",
   "textSource": "editorial"
  },
  "pretre/discipline-1-1": {
   "name": "Puissance de la Lumière",
   "nameSource": "adapte",
   "rank1": "Vos sorts Châtiment et Pénitence infligent 2% de dégâts supplémentaires aux cibles affectées par vos Flammes sacrées.",
   "textSource": "editorial"
  },
  "pretre/discipline-2-2": {
   "name": "Précision sacrée",
   "nameSource": "adapte",
   "rank1": "Augmente de 6% vos chances de toucher avec vos sorts du Sacré.",
   "textSource": "editorial"
  },
  "pretre/holy-4-4": {
   "name": "Soins de liaison",
   "nameSource": "adapte",
   "rank1": "Soigne une cible alliée et le lanceur de 346 à 403 points de vie. Menace faible.",
   "textSource": "editorial"
  },
  "pretre/holy-5-1": {
   "name": "Litanie de Lumière",
   "nameSource": "adapte",
   "rank1": "Lorsque vous lancez un sort de soins, vous récupérez un nombre de points de mana égal à 5% du coût de base du sort si votre soin précédent était un sort différent.",
   "textSource": "editorial"
  },
  "pretre/holy-7-2": {
   "name": "Prière de guérison",
   "nameSource": "adapte",
   "rank1": "Place sur la cible un sort qui la soigne de 247 points de vie la prochaine fois qu’elle subit des dégâts ou reçoit des soins non périodiques. Lorsque le soin se produit, Prière de guérison bondit vers un membre du groupe ou du raid situé dans un rayon de 20 mètres. Bondit jusqu’à 5 fois et dure 30 sec après chaque bond. Ce sort ne peut être placé que sur une seule cible à la fois par lanceur.",
   "textSource": "editorial"
  },
  "pretre/shadow-magic-3-4": {
   "name": "Fouet mental amélioré",
   "nameSource": "adapte",
   "ranks": [
    "Votre Fouet mental inflige 10% de dégâts supplémentaires et gagne 5 mètres de portée, mais ralentit la vitesse de déplacement de la cible de 35%.",
    "Votre Fouet mental inflige 20% de dégâts supplémentaires et gagne 10 mètres de portée, mais ralentit la vitesse de déplacement de la cible de 20%."
   ],
   "rank1": "Votre Fouet mental inflige 10% de dégâts supplémentaires et gagne 5 mètres de portée, mais ralentit la vitesse de déplacement de la cible de 35%.",
   "textSource": "editorial"
  },
  "pretre/shadow-magic-5-3": {
   "name": "Contagion dévorante",
   "nameSource": "adapte",
   "ranks": [
    "Réduit de 25% le coût en mana de votre Peste dévorante.\n\nUne cible qui meurt alors que Peste dévorante est active la propage : elle bondit vers un ennemi situé dans un rayon de 5 mètres, pour la durée restante.",
    "Réduit de 50% le coût en mana de votre Peste dévorante.\n\nUne cible qui meurt alors que Peste dévorante est active la propage : elle bondit vers un ennemi situé dans un rayon de 10 mètres, pour la durée restante."
   ],
   "rank1": "Réduit de 25% le coût en mana de votre Peste dévorante.\n\nUne cible qui meurt alors que Peste dévorante est active la propage : elle bondit vers un ennemi situé dans un rayon de 5 mètres, pour la durée restante.",
   "textSource": "editorial"
  },
  "pretre/shadow-magic-6-1": {
   "name": "Trépas précoce",
   "nameSource": "adapte",
   "rank1": "Contre les cibles dont les points de vie sont à 20% ou moins, augmente de 15% les chances de coup critique de Mot de l’ombre : Mort.",
   "textSource": "editorial"
  },
  "chaman/elemental-combat-5-4": {
   "name": "Ancrage tellurique",
   "nameSource": "adapte",
   "rank1": "Votre Totem de lien terrestre immobilise les cibles proches pendant 5 sec lorsqu’il est invoqué.",
   "textSource": "editorial",
   "note": "Le totem cité est un sort de base du chaman (Earthbind Totem, sort 2484) : nom officiel du client français, « Totem de lien terrestre » — corrigé après une première traduction erronée (« Totem de glèbe »)."
  },
  "chaman/elemental-combat-7-2": {
   "name": "Explosion de lave",
   "nameSource": "adapte",
   "rank1": "Vous projetez de la lave en fusion sur la cible, lui infligeant 158 à 187 points de dégâts de Feu. Si votre Horion de flammes affecte la cible, Explosion de lave inflige 20% de dégâts supplémentaires.",
   "textSource": "editorial"
  },
  "chaman/enhancement-7-2": {
   "name": "Rage du Voyant",
   "nameSource": "adapte",
   "rank1": "Augmente de 30% votre vitesse d’attaque de mêlée et votre vitesse d’incantation pendant 25 sec.",
   "textSource": "editorial"
  },
  "chaman/restoration-2-1": {
   "name": "Pleine conscience",
   "nameSource": "adapte",
   "ranks": [
    "Permet à 17% de votre régénération de mana de se poursuivre pendant l’incantation.",
    "Permet à 33% de votre régénération de mana de se poursuivre pendant l’incantation.",
    "Permet à 50% de votre régénération de mana de se poursuivre pendant l’incantation."
   ],
   "rank1": "Permet à 17% de votre régénération de mana de se poursuivre pendant l’incantation.",
   "textSource": "editorial"
  },
  "chaman/restoration-3-3": {
   "name": "Bouclier d’eau",
   "nameSource": "adapte",
   "rank1": "Le lanceur est entouré de 3 globes d’eau. Lorsqu’un sort ou une attaque de mêlée ou à distance le touche, ou lorsqu’un de ses sorts de soins produit un effet critique, 2% de son mana maximal lui sont rendus et un globe est consommé. Un seul globe s’active toutes les quelques secondes. Dure 10 min.\n\nUn seul Bouclier élémentaire peut être actif sur le chaman à la fois.",
   "textSource": "editorial"
  },
  "mage/arcane-3-1": {
   "name": "Géométrie des arcanes",
   "nameSource": "adapte",
   "rank1": "Augmente de 3 mètres la portée de vos sorts des Arcanes.",
   "textSource": "editorial"
  },
  "mage/arcane-3-4": {
   "name": "Décharge des arcanes",
   "nameSource": "adapte",
   "rank1": "Frappe la cible d’une décharge d’énergie, infligeant 95 à 104 points de dégâts des Arcanes. Chaque fois que vous lancez Décharge des arcanes, les dégâts de tous vos autres sorts augmentent de 10% et le coût en mana de Décharge des arcanes augmente de 175%. L’effet se cumule jusqu’à 4 fois et dure 8 sec, ou jusqu’à ce que vous lanciez un autre sort de dégâts.",
   "textSource": "editorial"
  },
  "mage/frost-3-3": {
   "name": "Lance de glace",
   "nameSource": "adapte",
   "rank1": "Inflige 30 points de dégâts de Givre à une cible ennemie. Inflige 300% de dégâts supplémentaires aux cibles gelées.",
   "textSource": "editorial"
  },
  "demoniste/affliction-2-2": {
   "name": "Récolte d’âmes",
   "nameSource": "adapte",
   "note": "Nom repris du sort Récolte d’âmes du client français (sort 196098) : Forever ne reprend que le nom anglais Soul Harvest, l’effet lui est propre.",
   "ranks": [
    "Vous gagnez Récolte d’âmes pendant 10 sec si une victime meurt en étant affectée par votre Siphon d’âme. Récolte d’âmes permet à votre mana de se régénérer à 50% de sa vitesse normale pendant que vous incantez, et augmente de 50% votre régénération de mana.",
    "Vous gagnez Récolte d’âmes pendant 10 sec si une victime meurt en étant affectée par votre Siphon d’âme. Récolte d’âmes permet à votre mana de se régénérer à 100% de sa vitesse normale pendant que vous incantez, et augmente de 100% votre régénération de mana."
   ],
   "rank1": "Vous gagnez Récolte d’âmes pendant 10 sec si une victime meurt en étant affectée par votre Siphon d’âme. Récolte d’âmes permet à votre mana de se régénérer à 50% de sa vitesse normale pendant que vous incantez, et augmente de 50% votre régénération de mana.",
   "textSource": "editorial"
  },
  "demoniste/affliction-2-3": {
   "name": "Drains améliorés",
   "nameSource": "adapte",
   "ranks": [
    "Augmente de 7% la vie drainée ou les dégâts infligés par vos sorts Drain de vie, Siphon d’âme et Supplice.",
    "Augmente de 13% la vie drainée ou les dégâts infligés par vos sorts Drain de vie, Siphon d’âme et Supplice.",
    "Augmente de 20% la vie drainée ou les dégâts infligés par vos sorts Drain de vie, Siphon d’âme et Supplice."
   ],
   "rank1": "Augmente de 7% la vie drainée ou les dégâts infligés par vos sorts Drain de vie, Siphon d’âme et Supplice.",
   "textSource": "editorial"
  },
  "demoniste/affliction-4-1": {
   "name": "Malveillance",
   "nameSource": "adapte",
   "note": "Nom repris du sort Malveillance du client français (sort 442726), qui traduit le même mot anglais.",
   "rank1": "Augmente de 1% les chances d’effet critique de vos sorts d’Ombre.",
   "textSource": "editorial"
  },
  "demoniste/affliction-7-2": {
   "name": "Supplice",
   "nameSource": "adapte",
   "rank1": "Déchire la cible de l’intérieur, lui infligeant 37 points de dégâts d’Ombre toutes les 1 sec et augmentant de 10% les dégâts qu’elle subit de vos autres effets d’Ombre périodiques. Dure 6 sec.",
   "textSource": "editorial"
  },
  "demoniste/demonology-2-4": {
   "name": "Énergies démoniaques",
   "nameSource": "adapte",
   "rank1": "Vous soignez votre démon de 8% de tous les dégâts que vous infligez par sort. Lorsque Connexion vous rend du mana, votre démon invoqué reçoit 50% du mana que vous gagnez.",
   "textSource": "editorial"
  },
  "demoniste/demonology-4-4": {
   "name": "Marque démoniaque",
   "nameSource": "adapte",
   "note": "Traduction éditoriale : le mot anglais « Brand » est rendu par « Marque » dans le client français (ainsi « Fiery Brand » y devient « Marque enflammée », sort 204021).",
   "ranks": [
    "Votre Douleur brûlante génère 17% de menace en moins et marque la cible pendant 10 sec. Les 2 prochaines attaques de votre démon contre elle génèrent une menace élevée et infligent 39 à 42 points de dégâts de Feu ou d’Ombre selon le démon.",
    "Votre Douleur brûlante génère 33% de menace en moins et marque la cible pendant 10 sec. Les 4 prochaines attaques de votre démon contre elle génèrent une menace élevée et infligent 39 à 42 points de dégâts de Feu ou d’Ombre selon le démon.",
    "Votre Douleur brûlante génère 50% de menace en moins et marque la cible pendant 10 sec. Les 6 prochaines attaques de votre démon contre elle génèrent une menace élevée et infligent 39 à 42 points de dégâts de Feu ou d’Ombre selon le démon."
   ],
   "rank1": "Votre Douleur brûlante génère 17% de menace en moins et marque la cible pendant 10 sec. Les 2 prochaines attaques de votre démon contre elle génèrent une menace élevée et infligent 39 à 42 points de dégâts de Feu ou d’Ombre selon le démon.",
   "textSource": "editorial"
  },
  "demoniste/destruction-5-2": {
   "name": "Plaie de tumulte",
   "nameSource": "adapte",
   "note": "Nom officiel du client français de Cataclysme (sort 80240), extension d’où Forever reprend ce sort — hors du relevé Classic, Burning Crusade et Wrath sur lequel s’appuie l’import, d’où une entrée éditoriale.",
   "rank1": "Afflige la cible pendant 5 min : 15% de tous les dégâts que le démoniste inflige à d’autres cibles sont également infligés à la cible maudite. Plaie de tumulte est limité à 1 cible, et une seule Plaie par démoniste peut affecter une même cible.",
   "textSource": "editorial"
  },
  "demoniste/destruction-7-2": {
   "name": "Incinérer",
   "nameSource": "adapte",
   "note": "Nom officiel du client français (sort 29722, Burning Crusade) : le sort existe hors des arbres de talents, l’import qui ne relève que les calculateurs ne pouvait pas l’y trouver.",
   "rank1": "Inflige 125 à 140 points de dégâts de Feu à votre cible, et 25% de dégâts supplémentaires si elle est affectée par Immolation.",
   "textSource": "editorial"
  },
  "druide/balance-5-1": {
   "name": "Lacis",
   "nameSource": "adapte",
   "note": "Nom repris du sort Lacis du client français (sort 203651), qui traduit le même mot anglais, Overgrowth : Forever lui donne un effet qui lui est propre.",
   "rank1": "Augmente de 1 le nombre maximum de cibles que vous pouvez maintenir sous l’effet de Sarments.",
   "textSource": "editorial"
  },
  "guerrier/protection-5-4": {
   "name": "Bastion",
   "nameSource": "adapte",
   "rank1": "Augmente de 2% tous les dégâts que vous infligez lorsqu’un bouclier est équipé.",
   "textSource": "editorial"
  },
  "guerrier/protection-6-3": {
   "name": "Rage focalisée",
   "nameSource": "officiel",
   "nameBranch": "tbc",
   "spell": 29787,
   "rank1": "Réduit le coût en rage de vos techniques offensives de 1.",
   "textSource": "officiel"
  },
  "chasseur/marksmanship-4-4": {
   "name": "Morsure de serpent améliorée",
   "nameSource": "officiel",
   "nameBranch": "classic",
   "spell": 19464,
   "classic": "Augmente les points de dégâts infligés par votre technique Morsure de serpent de 2%.",
   "note": "La bêta ouverte réintroduit ce talent sous son nom Classic et sur le même sort (19464), distinct des « Morsures améliorées » de la ligne 2 que Forever avait élargies aux morsures de vipère et de scorpide.",
   "rank1": "Augmente de 2% les dégâts infligés par votre Morsure de serpent.",
   "textSource": "editorial"
  }
 },
 "removed": {
  "guerrier/arms/Axe Specialization": {
   "name": "Spécialisation Hache",
   "text": "Augmente de 1% vos chances d'infliger un coup critique avec les haches."
  },
  "guerrier/arms/Mace Specialization": {
   "name": "Spécialisation Masse",
   "text": "Vous confère 1% de chances d'étourdir votre cible pendant 3 sec avec une Masse."
  },
  "guerrier/arms/Sword Specialization": {
   "name": "Spécialisation Epée",
   "text": "Vous confère 1% de chances de bénéficier d'une attaque supplémentaire sur la même cible, après avoir infligé des dégâts avec votre épée."
  },
  "guerrier/arms/Polearm Specialization": {
   "name": "Spécialisation Arme d'hast",
   "text": "Augmente de 1% vos chances d'infliger un coup critique avec les armes d'hast."
  },
  "guerrier/fury/Improved Demoralizing Shout": {
   "name": "Cri démoralisant amélioré",
   "text": "Augmente la réduction de puissance d'attaque en mêlée de votre Cri démoralisant de 8%."
  },
  "guerrier/fury/Improved Battle Shout": {
   "name": "Cri de guerre amélioré",
   "text": "Augmente de 5% le bonus à la puissance d'attaque en mêlée de votre Cri de guerre."
  },
  "guerrier/protection/Improved Shield Block": {
   "name": "Maîtrise du blocage améliorée",
   "text": "Vous permet de bloquer une attaque supplémentaire avec votre technique Maîtrise du blocage et en augmente la durée de 0.5 sec."
  },
  "guerrier/protection/Improved Taunt": {
   "name": "Provocation améliorée",
   "text": "Réduit le temps de recharge de votre technique Provocation de 1 sec."
  },
  "guerrier/protection/One-Handed Weapon Specialization": {
   "name": "Spécialisation Arme 1M",
   "text": "Augmente les points de dégâts que vous infligez avec les armes de mêlée à une main de 2%."
  },
  "paladin/holy/Consecration": {
   "name": "Consécration",
   "text": "Consacre le sol qui se trouve autour du paladin et inflige 64 points de dégâts en 8 sec aux ennemis qui entrent dans la zone."
  },
  "paladin/holy/Improved Lay on Hands": {
   "name": "Imposition des mains améliorée",
   "text": "La cible du sort Impositions des mains bénéficie d'un bonus de 15% au score d'armure de ses objets pendant 2 min. De plus, le temps de recharge de votre sort Imposition des mains diminue de 10 min."
  },
  "paladin/holy/Improved Blessing of Wisdom": {
   "name": "Bénédiction de sagesse améliorée",
   "text": "Augmente l'effet de votre sort de Bénédiction de sagesse de 10%."
  },
  "paladin/holy/Lasting Judgement": {
   "name": "Jugement durable",
   "text": "Augmente la durée de vos Jugement de lumière et Jugement de sagesse de 10 sec."
  },
  "paladin/protection/Improved Devotion Aura": {
   "name": "Aura de dévotion améliorée",
   "text": "Augmente le bonus d'armure que confère votre Aura de dévotion de 5%."
  },
  "paladin/protection/Blessing of Kings": {
   "name": "Bénédiction des rois",
   "text": "Place une Bénédiction sur une cible amie qui augmente toutes ses caractéristiques de 10% pendant 5 min. Les joueurs ne peuvent bénéficier des effets que d'une seule Bénédiction par paladin à la fois."
  },
  "paladin/protection/Improved Concentration Aura": {
   "name": "Aura de concentration améliorée",
   "text": "Augmente de 5% l'effet de votre Aura de concentration et donne à tous les membres du groupe bénéficiant de l'aura 5% de chances supplémentaires de résister aux effets de silence et d'interruption."
  },
  "paladin/protection/Blessing of Sanctuary": {
   "name": "Bénédiction du sanctuaire",
   "text": "Place une Bénédiction sur la cible amie. Réduit les points de dégâts de tous types qu'elle subit d’un maximum de 10 pendant 5 min. De plus, quand la cible bloque une attaque de mêlée, l'attaquant subit 14 points de dégâts du Sacré. Les personnages ne peuvent bénéficier que des effets d'une seule Bénédiction par paladin à la fois."
  },
  "paladin/retribution/Improved Blessing of Might": {
   "name": "Bénédiction de puissance améliorée",
   "text": "Augmente le bonus à la puissance d'attaque en mêlée conféré par votre Bénédiction de puissance de 4%."
  },
  "paladin/retribution/Improved Seal of the Crusader": {
   "name": "Sceau du Croisé amélioré",
   "text": "Augmente le bonus de puissance d'attaque en mêlée de votre Sceau du Croisé et les points de dégâts du Sacré infligés par le Jugement du Croisé de 5%."
  },
  "paladin/retribution/Improved Retribution Aura": {
   "name": "Aura de vindicte améliorée",
   "text": "Augmente les points de dégâts infligés par votre sort d'Aura de vindicte de 25%."
  },
  "paladin/retribution/Sanctity Aura": {
   "name": "Aura de sainteté",
   "text": "Augmente de 10% les points de dégâts du Sacré infligés par les membres du groupe se trouvant dans une zone de 30 mètres de rayon. Les personnages ne peuvent bénéficier des effets que d'une aura par paladin à la fois."
  },
  "chasseur/beast-mastery/Improved Eyes of the Beast": {
   "name": "Oeil de la bête amélioré",
   "text": "Augmente la durée d'Oeil de la bête de 30 sec."
  },
  "chasseur/beast-mastery/Thick Hide": {
   "name": "Peau épaisse",
   "text": "Augmente le niveau d'armure de vos familiers de 10%."
  },
  "chasseur/marksmanship/Improved Hunter's Mark": {
   "name": "Marque du chasseur améliorée",
   "text": "Augmente le bonus de puissance d'attaque à distance de votre sort Marque du chasseur de 3%."
  },
  "chasseur/marksmanship/Improved Scorpid Sting": {
   "name": "Piqûre de scorpide améliorée",
   "text": "Réduit l'Endurance des cibles affectées par votre Piqûre de scorpide d'un montant égal à 10% de la réduction de Force."
  },
  "chasseur/survival/Monster Slaying": {
   "name": "Tueur de monstres",
   "text": "Augmente tous les dégâts infligés aux bêtes, aux géants et aux draconiens de 1% et augmente les dégâts infligés par les coups critiques aux bêtes, aux géants et aux draconiens de 1% supplémentaires."
  },
  "chasseur/survival/Humanoid Slaying": {
   "name": "Tueur d'humanoïdes",
   "text": "Augmente tous les dégâts infligés aux humanoïdes de 1% et augmente les dégâts infligés par les coups critiques aux humanoïdes de 1% supplémentaires."
  },
  "chasseur/survival/Trap Mastery": {
   "name": "Maîtrise des pièges",
   "text": "Réduit de 5% les chances de vos ennemis de résister aux effets de vos pièges."
  },
  "chasseur/survival/Improved Feign Death": {
   "name": "Feindre la mort amélioré",
   "text": "Réduit la probabilité que l'on résiste à votre technique Feindre la mort de 2%."
  },
  "chasseur/survival/Killer Instinct": {
   "name": "Instinct du tueur",
   "text": "Augmente vos chances d'infliger un coup critique avec toutes vos attaques de 1%."
  },
  "chasseur/survival/Wyvern Sting": {
   "name": "Piqûre de wyverne",
   "text": "Une piqûre qui endort la cible pendant 12 sec. Tout point de dégâts subi par la cible annule l’effet. Quand la cible se réveille, la Piqûre inflige 300 points de dégâts de nature en 6 sec. Utilisable uniquement hors de combat. Une seule technique de Morsure ou de Piqûre par chasseur ou chasseresse peut être active sur la cible en même temps."
  },
  "voleur/combat/Dagger Specialization": {
   "name": "Spécialisation Dague",
   "text": "Augmente vos chances d'infliger un coup critique avec les Dagues de 1%."
  },
  "voleur/combat/Mace Specialization": {
   "name": "Spécialisation Masse",
   "text": "Augmente votre compétence avec les masses de 1 et vous confère 1% de chances d’étourdir votre cible pendant 3 sec avec une masse."
  },
  "voleur/combat/Sword Specialization": {
   "name": "Spécialisation Epée",
   "text": "Vous confère 1% de chances de bénéficier d'une attaque supplémentaire sur la même cible après avoir infligé des dégâts avec votre épée."
  },
  "voleur/combat/Fist Weapon Specialization": {
   "name": "Spécialisation Arme de pugilat",
   "text": "Augmente vos chances d'infliger un coup critique avec les armes de pugilat de 1%."
  },
  "voleur/subtlety/Sleight of Hand": {
   "name": "Passe-passe",
   "text": "Réduit de 1% la probabilité que vous soyez touché par un coup critique infligé par une attaque en mêlée ou à distance, et augmente la réduction du niveau de menace de votre technique Feinte de 10%."
  },
  "voleur/subtlety/Improved Sap": {
   "name": "Assommer amélioré",
   "text": "Vous confère 30% de chances de repasser en mode camouflé après avoir utilisé la technique Assommer."
  },
  "voleur/subtlety/Deadliness": {
   "name": "Meurtrier",
   "text": "Augmente votre puissance d'attaque de 2%."
  },
  "pretre/discipline/Unbreakable Will": {
   "name": "Volonté inflexible",
   "text": "Augmente vos chances de résister aux effets d'étourdissement, de peur et de silence de 3%."
  },
  "pretre/discipline/Improved Power Word: Fortitude": {
   "name": "Mot de pouvoir : Robustesse amélioré",
   "text": "Augmente les effets de vos sorts Mot de pouvoir : Robustesse et Prière de robustesse de 15%."
  },
  "pretre/discipline/Divine Spirit": {
   "name": "Esprit divin",
   "text": "La puissance sacrée envahit le corps de la cible et augmente son Esprit de 17 pendant 30 min."
  },
  "pretre/discipline/Force of Will": {
   "name": "Force de volonté",
   "text": "Augmente de 1% les points de dégâts infligés par vos sorts et de 1% vos chances d'obtenir un coup critique avec vos sorts offensifs."
  },
  "pretre/holy/Improved Prayer of Healing": {
   "name": "Prière de soins améliorée",
   "text": "Réduit le coût en mana de vos Prières de soins de 10%."
  },
  "pretre/holy/Lightwell": {
   "name": "Puits de lumière",
   "text": "Crée un Puits de lumière sacré près du prêtre. Les membres du groupe ou du raid peuvent cliquer sur le Puits de lumière pour recevoir 800 points de vie en 10 sec. L'effet est annulé si vous êtes attaqué. La durée du Puits de lumière est de 3 min ou bien 5 utilisations."
  },
  "pretre/shadow-magic/Improved Vampiric Embrace": {
   "name": "Etreinte vampirique améliorée",
   "text": "Ajoute 5% supplémentaires au pourcentage des soins produits par Etreinte vampirique."
  },
  "chaman/elemental-combat/Elemental Mastery": {
   "name": "Maîtrise élémentaire",
   "text": "Lorsqu'il est activé, ce sort confère 100% de chances à vos sorts de Feu, de Givre et de Nature d'infliger un coup critique et il réduit le coût en mana de 100%."
  },
  "chaman/enhancement/Shield Specialization": {
   "name": "Spécialisation Bouclier",
   "text": "Augmente de 1% vos chances de bloquer les attaques avec votre bouclier et augmente de 5% le nombre de points de dégâts bloqués."
  },
  "chaman/enhancement/Enhancing Totems": {
   "name": "Totems renforcés",
   "text": "Augmente de 8% l'effet de vos Totems de Force de la Terre et de Grâce aérienne."
  },
  "chaman/enhancement/Two-Handed Axes and Maces": {
   "name": "Haches et masses à deux mains",
   "text": "Vous permet d'utiliser les Haches à deux mains et les Masses à deux mains."
  },
  "chaman/enhancement/Improved Weapon Totems": {
   "name": "Totems d'armes améliorés",
   "text": "Augmente le bonus de puissance d'attaque en mêlée de votre totem Furie-des-vents de 15% et augmente les dégâts de votre totem Langue de feu de 6%."
  },
  "chaman/enhancement/Weapon Mastery": {
   "name": "Maîtrise des armes",
   "text": "Augmente de 2% les dégâts que vous infligez avec toutes les armes."
  },
  "chaman/restoration/Nature's Guidance": {
   "name": "Soutien de la nature",
   "text": "Augmente vos chances de toucher avec les sorts et attaques de mêlée de 1%."
  },
  "chaman/restoration/Totemic Mastery": {
   "name": "Maîtrise totémique",
   "text": "Le rayon d'effet de vos totems qui affectent les cibles alliées est augmenté à 30 m."
  },
  "mage/arcane/Magic Attunement": {
   "name": "Harmonisation de la magie",
   "text": "Augmente de 25% les effets de vos sorts Amplification de la magie et Atténuation de la magie."
  },
  "demoniste/affliction/Improved Curse of Weakness": {
   "name": "Malédiction de faiblesse améliorée",
   "text": "Augmente les effets de votre sort Malédiction de faiblesse de 6%."
  },
  "demoniste/affliction/Improved Drain Soul": {
   "name": "Siphon d'âme amélioré",
   "text": "Vous confère 50% de chances d'obtenir un bonus de 100% à votre vitesse de récupération des points de mana pendant 10 sec, si la cible meurt pendant que vous drainez son âme. De plus, votre mana continue de se régénérer pendant vos incantations à 50% de la vitesse de récupération normale."
  },
  "demoniste/affliction/Improved Drain Life": {
   "name": "Drain de vie amélioré",
   "text": "Augmente de 2% le montant de points de vie drainé par votre sort Drain de vie."
  },
  "demoniste/affliction/Grim Reach": {
   "name": "Allonge sinistre",
   "text": "Augmente la portée de vos sorts d'Affliction de 10%."
  },
  "demoniste/affliction/Improved Drain Mana": {
   "name": "Drain de mana amélioré",
   "text": "15% des points de mana drainés par votre sort Drain de mana sont infligés à l'adversaire sous la forme de points de dégâts."
  },
  "demoniste/affliction/Improved Curse of Exhaustion": {
   "name": "Malédiction de fatigue améliorée",
   "text": "Augmente de 5% l'effet de réduction de vitesse de votre sort Malédiction de fatigue."
  },
  "demoniste/affliction/Dark Pact": {
   "name": "Pacte noir",
   "text": "Draine 150 points de mana à votre familier et vous les transfère à 100%."
  },
  "demoniste/demonology/Improved Healthstone": {
   "name": "Pierre de soins améliorée",
   "text": "Augmente le nombre de points de vie restaurés par votre Pierre de soin de 10%."
  },
  "demoniste/demonology/Fel Intellect": {
   "name": "Intelligence corrompue",
   "text": "Augmente de 3% le maximum de points de mana de vos diablotins, marcheurs du Vide, succubes, incubes et chasseurs corrompus."
  },
  "demoniste/demonology/Improved Subjugate Demon": {
   "name": "Subjugation de démon améliorée",
   "text": "Réduit les pénalités de vitesse d’attaque et d’incantation de Subjugation de démon de 2 % et les chances de résistance de 2 %."
  },
  "demoniste/demonology/Improved Firestone": {
   "name": "Pierre de feu améliorée",
   "text": "Augmente de 15% le bonus aux dégâts de Feu infligés par les Pierre de feu et les effets de Pierre de feu."
  },
  "demoniste/demonology/Improved Spellstone": {
   "name": "Pierre de sort améliorée",
   "text": "Augmente la quantité de points de dégâts absorbés par votre Pierre de sort de 15%."
  },
  "demoniste/destruction/Improved Firebolt": {
   "name": "Eclair de feu amélioré",
   "text": "Réduit le temps d'incantation du sort Eclair de feu de votre Diablotin de 0.5 sec."
  },
  "demoniste/destruction/Improved Lash of Pain": {
   "name": "Fouet de la douleur amélioré",
   "text": "Réduit le temps de recharge du sort Fouet de la douleur de votre succube ou de votre incube de 3 s."
  },
  "demoniste/destruction/Devastation": {
   "name": "Dévastation",
   "text": "Augmente de 1% vos chances d'infliger un coup critique avec vos sorts de Destruction."
  },
  "demoniste/destruction/Improved Immolate": {
   "name": "Immolation améliorée",
   "text": "Augmente les dégâts initiaux de votre sort Immolation de 5%."
  },
  "demoniste/destruction/Emberstorm": {
   "name": "Tempête ardente",
   "text": "Augmente les points de dégâts infligés par vos sorts de Feu de 2%."
  },
  "druide/balance/Nature's Grasp": {
   "name": "Emprise de la nature",
   "text": "Pendant que cette technique est active, à chaque fois qu'un ennemi frappe le lanceur de sorts, il a 35% de chances d'être victime du sort Sarments (Rang 1). Ne fonctionne qu'en extérieur. 1 charges. Dure 45 sec."
  },
  "druide/balance/Improved Nature's Grasp": {
   "name": "Emprise de la nature améliorée",
   "text": "Augmente de 15% les chances que le sort Emprise de la nature immobilise un ennemi."
  },
  "druide/balance/Natural Weapons": {
   "name": "Armes naturelles",
   "text": "Augmente les dégâts infligés avec les attaques physiques sous toutes les formes de 2 %."
  },
  "druide/balance/Improved Thorns": {
   "name": "Epines améliorées",
   "text": "Augmente les points de dégâts infligés par votre sort Epines de 25%."
  },
  "druide/balance/Omen of Clarity": {
   "name": "Augure de clarté",
   "text": "Imprègne le druide ou la druidesse d’énergie naturelle. Chacune de ses attaques de mêlée a une chance de faire entrer le lanceur ou la lanceuse de sorts dans un état d’Idées claires. Cet état réduit le coût en mana, en rage ou en énergie de votre prochain sort de dégât ou de soins, ou de votre prochaine technique offensive de 100 %. Dure 10 min."
  },
  "druide/feral-combat/Feral Aggression": {
   "name": "Agressivité farouche",
   "text": "Augmente les effets de réduction de la puissance d'attaque de votre Rugissement démoralisant de 8% et les dégâts causés par votre Morsure féroce de 3%."
  },
  "druide/feral-combat/Blood Frenzy": {
   "name": "Frénésie sanglante",
   "text": "Les coups critiques liés à vos techniques de félin qui ajoutent des points de combo ont 50% de chances vous faire gagner un point de combo supplémentaire."
  },
  "druide/feral-combat/Faerie Fire (Feral)": {
   "name": "Lucioles (farouche)",
   "text": "Réduit l'Armure de la cible de 175 pendant 40 sec. Tant qu'elle est affectée, la cible ne peut pas se camoufler ni se rendre invisible."
  },
  "druide/restoration/Improved Mark of the Wild": {
   "name": "Marque du fauve améliorée",
   "text": "Augmente les effets de vos sorts Marque du fauve et Don du fauve de 7%."
  },
  "druide/restoration/Improved Enrage": {
   "name": "Enrager amélioré",
   "text": "La technique Enrager génère à présent instantanément 5 points de rage."
  }
 }
}
;
