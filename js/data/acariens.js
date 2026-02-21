const MALADIE_ACARIENS = {
    id: "acariens",
    nom: "Acariens de la tomate",
    nomScientifique: "Tetranychus urticae, Tetranychus evansi, Aculops lycopersici",
    type: "ravageur",
    emoji: "\ud83d\udd0d",
    resumeCourt: "Les acariens sont des ravageurs microscopiques (0,1 a 0,5 mm) qui causent des degats considerables sur la tomate en piquant les cellules foliaires pour en aspirer le contenu. L'acarien jaune (Tetranychus urticae), l'acarien rouge de la tomate (Tetranychus evansi) et l'acariose bronzee (Aculops lycopersici) sont les trois especes les plus nuisibles au Maroc. En conditions chaudes et seches, les populations explosent en quelques jours et peuvent provoquer 30 a 70 % de pertes de rendement.",
    cultures: ["Tomate", "Tomate cerise", "Tomate sous serre", "Tomate plein champ", "Cultures maraicheres"],

    presentation: {
        description: "Les acariens phytophages de la tomate appartiennent a la classe des Arachnides (et non des insectes). Trois especes sont particulierement nuisibles :\n\n- Tetranychus urticae (Koch) : l'acarien jaune commun ou araignee rouge des serres. Espece cosmopolite, extremement polyphage (plus de 900 plantes-hotes). Corps ovale, 0,3-0,5 mm, de couleur jaune-verdatre avec deux taches laterales foncees. Produit des toiles de soie abondantes sur la face inferieure des feuilles.\n\n- Tetranychus evansi (Baker & Pritchard) : l'acarien rouge de la tomate. Originaire d'Amerique du Sud, envahissant et particulierement adapte aux solanacees. Plus petit que T. urticae (0,3 mm), de couleur rouge-orange vif. Extremement prolifique et resistant aux temperatures elevees. Considere comme l'acarien le plus dangereux pour la tomate au Maroc.\n\n- Aculops lycopersici (Massee) : l'acariose bronzee de la tomate ou russet mite. Eriophyide microscopique (0,15-0,2 mm), invisible a l'oeil nu, en forme de fuseau allonge. Provoque un bronzage caracteristique des tiges et des feuilles. Extremement difficile a detecter avant l'apparition des symptomes.\n\nTous ces acariens se nourrissent en perforant les cellules epidermiques avec leurs cheliceres (pieces buccales) et en aspirant le contenu cellulaire. Les cellules videes se remplissent d'air, donnant un aspect argente puis bronze aux feuilles.",

        importance: "Ravageurs majeurs de la tomate sous serre et en plein champ au Maroc. T. evansi est considere comme une espece envahissante particulierement redoutable car il supprime les defenses naturelles de la plante et se reproduit plus vite que ses predateurs naturels. A. lycopersici est sous-estime car invisible a l'oeil nu : souvent, les degats sont attribues a tort a un stress hydrique ou a une carence. Les pertes de rendement varient de 30 a 70 % en cas d'infestation non controlee.",

        historique: "Tetranychus urticae est un ravageur connu depuis plus d'un siecle sur les cultures sous serre dans le monde entier. Au Maroc, il a toujours ete present sur tomate, mais l'arrivee de Tetranychus evansi a bouleverse la situation. T. evansi, originaire d'Amerique du Sud, a ete detecte pour la premiere fois en Afrique dans les annees 1980 (Afrique australe et de l'Est), puis s'est repandu en Mediterranee occidentale dans les annees 2000. Au Maroc, il a ete signale pour la premiere fois dans le Souss-Massa en 2007-2008 et s'est rapidement repandu dans toutes les zones de production.\n\nAculops lycopersici est present au Maroc depuis plusieurs decennies mais reste sous-diagnostique en raison de sa taille microscopique. L'intensification de la lutte chimique contre d'autres ravageurs (mouche blanche, Tuta absoluta) a parfois elimine les predateurs naturels des acariens, provoquant des explosions de populations d'acariens (resurgence induite par les pesticides).",

        impact_economique: "Les pertes economiques liees aux acariens sont tres significatives :\n\n- Pertes de rendement : 30 a 70 % en cas d'infestation severe non controlee, pouvant atteindre 100 % avec T. evansi sur varietes sensibles en plein champ.\n- Defoliation : reduction de la surface foliaire photosynthetiquement active de 50 a 80 %, entrainant des fruits petits, mal colores et peu sucres.\n- Cout des acaricides : 3 a 8 traitements par cycle, soit 2 000 a 8 000 MAD/ha. Les acaricides sont parmi les produits phytosanitaires les plus couteux.\n- Cout de la lutte biologique : 3 000 a 10 000 MAD/ha pour les lachers d'acariens predateurs (Phytoseiulus, Amblyseius).\n- Resistances : T. urticae detient le record du nombre de cas de resistance aux acaricides documentes parmi tous les arthropodes ravageurs (resistance a plus de 90 matieres actives).\n- Au Maroc, les acariens sont classes parmi les 5 ravageurs les plus couteux de la tomate, apres la mouche blanche et Tuta absoluta."
    },

    origine: {
        agent: "Trois especes principales :\n\n- Tetranychus urticae (Koch, 1836) : famille des Tetranychidae. Corps ovale, 0,3-0,5 mm, jaune-verdatre avec deux taches laterales sombres (accumulations de contenu intestinal). 4 paires de pattes. Produit des toiles de soie abondantes. Se nourrit principalement sur la face inferieure des feuilles. La femelle pond 5 a 10 oeufs par jour (100-200 au total). Cycle oeuf-adulte : 8-14 jours a 25-30 degres C. Reproduction par arrenotocie (oeufs non fecondes = males, oeufs fecondes = femelles).\n\n- Tetranychus evansi (Baker & Pritchard, 1960) : famille des Tetranychidae. Similaire a T. urticae mais rouge-orange vif, plus petit (0,3 mm). Beaucoup plus prolifique : la femelle pond 8 a 15 oeufs par jour. Taux de reproduction intrinseque (rm) 2 a 3 fois superieur a T. urticae. Resiste mieux aux temperatures elevees (optimum 30-35 degres C). Supprime les defenses induites de la tomate (acide jasmonique), facilitant sa propre multiplication.\n\n- Aculops lycopersici (Massee, 1937) : famille des Eriophyidae. Microscopique (0,15-0,2 mm), en forme de fuseau allonge (vermiforme), seulement 2 paires de pattes (contre 4 chez les Tetranychidae). Invisible a l'oeil nu, necessite une loupe x20 minimum. Se reproduit tres rapidement (cycle de 6-7 jours a 27 degres C). Une femelle pond 30 a 50 oeufs. Les populations peuvent atteindre plusieurs milliers d'individus par feuille avant que les symptomes ne deviennent evidents.",

        provenance: "T. urticae est cosmopolite, present dans toutes les zones agricoles du monde. T. evansi est originaire d'Amerique du Sud (Bresil) et s'est repandu en Afrique puis en Mediterranee. Au Maroc, il est present dans toutes les regions de production depuis 2007-2008. A. lycopersici est cosmopolite dans les zones chaudes et temperees. Au Maroc, les trois especes sont presentes dans toutes les regions de production, avec une pression maximale dans le Souss-Massa, le Gharb et les plaines orientales. L'inoculum provient des cultures voisines, des plantes adventices (morelle noire, Datura, convolvulus), des structures de serre contaminees et des plants de pepiniere infestes.",

        cycle: "1. Hivernation/survie : T. urticae hiverne sous forme de femelles en diapause (couleur orange-rouge) dans les debris vegetaux, les fissures du sol ou les structures de serre. T. evansi et A. lycopersici n'ont pas de vraie diapause et restent actifs toute l'annee dans les regions chaudes du Maroc.\n\n2. Colonisation : au printemps ou des la plantation, les femelles colonisent les feuilles basses des tomates. T. urticae et T. evansi s'installent sur la face inferieure des feuilles. A. lycopersici commence par les tiges et les petioles avant de coloniser les feuilles.\n\n3. Alimentation : les acariens perforent les cellules epidermiques avec leurs cheliceres (pieces buccales en forme de stylets) et aspirent le contenu cellulaire. Les cellules videes se remplissent d'air, donnant d'abord un aspect piquete (petits points blancs), puis argente, puis bronze aux feuilles.\n\n4. Reproduction : la reproduction est explosive. T. urticae : cycle de 8-14 jours, 100-200 oeufs/femelle. T. evansi : cycle de 7-10 jours, 150-300 oeufs/femelle. A. lycopersici : cycle de 6-7 jours, 30-50 oeufs/femelle. Toutes les especes se reproduisent par arrenotocie (oeufs non fecondes donnent des males haploides).\n\n5. Formation de toiles (Tetranychus) : T. urticae et T. evansi tissent des toiles de soie sur la face inferieure des feuilles. Ces toiles protegent les colonies de la pluie et de certains predateurs. En cas de surpopulation, les acariens se regroupent en amas au sommet des plants et se dispersent par le vent (mode de dissemination aerien appele ballooning).\n\n6. Dispersion : les acariens se deplacent en marchant de feuille en feuille et de plant en plant. A longue distance, ils sont transportes par le vent (ballooning), par les ouvriers (vetements, outils) et par les plants de pepiniere. T. evansi est un excellent colonisateur capable d'envahir une serre entiere en 2-3 semaines.\n\n7. Explosion demographique : dans des conditions optimales (25-35 degres C, faible humidite), une population de T. evansi peut etre multipliee par 30 a 50 en une seule generation (10 jours). Plusieurs generations se chevauchent simultanement (oeufs, larves, nymphes et adultes presents en meme temps).",

        propagation: [
            "Dispersion par le vent (ballooning) : les acariens se laissent porter par les courants d'air, surtout en conditions seches et venteuses",
            "Transport par les ouvriers : vetements, gants, outils, caisses de recolte contamines par des acariens ou des oeufs",
            "Plants de pepiniere infestes : les acariens sont souvent introduits dans la serre avec les plants (oeufs et adultes invisibles a l'oeil nu sur la face inferieure des feuilles)",
            "Plantes adventices-reservoirs autour des serres : morelle noire, Datura, liseron, amarante hebergent des populations de T. urticae et T. evansi",
            "Deplacement actif de plant en plant par marche le long des fils de palissage et des tuteurs",
            "Cultures voisines infestees (melon, aubergine, poivron, haricot, fraisier)",
            "Structures de serre contaminees (fils de palissage, poteaux, toiles) non desinfectees entre deux cycles"
        ]
    },

    facteurs: {
        climatiques: [
            "Temperatures elevees : optimum 25-30 degres C pour T. urticae, 30-35 degres C pour T. evansi, 25-30 degres C pour A. lycopersici. Le cycle de reproduction est accelere par la chaleur",
            "Faible humidite relative (< 60 %) : les conditions seches favorisent la multiplication des Tetranychidae. L'humidite elevee (> 80 %) ralentit leur developpement et favorise les champignons entomopathogenes",
            "Absence de pluie : la pluie et les irrigations par aspersion reduisent mecaniquement les populations (lavage des feuilles). Les serres et tunnels sans aspersion sont plus vulnerables",
            "Periodes de canicule en ete : les temperatures de 35-40 degres C sous serre favorisent l'explosion de T. evansi qui est thermophile",
            "Vents chauds et secs (chergui au Maroc) : dessechent l'atmosphere et dispersent les acariens par ballooning"
        ],
        sol: [
            "Sols secs et poussiereux : la poussiere sur le feuillage gene les predateurs naturels et favorise les acariens phytophages",
            "Stress hydrique des plantes : les plantes stressees sont plus attractives et plus vulnerables aux acariens (concentration en acides amines dans la seve)",
            "Sols pauvres en matiere organique : moins de microorganismes antagonistes dans l'environnement de la culture"
        ],
        pratiques: [
            "Utilisation excessive d'insecticides a large spectre (pyrethroides, organophosphores) qui eliminent les predateurs naturels des acariens (Phytoseiulus, Amblyseius, Stethorus) et provoquent des resurgences",
            "Application d'azote en exces : les plantes surferti lisees en azote sont plus attractives pour les acariens (forte concentration en acides amines libres dans les feuilles)",
            "Densite de plantation elevee : favorise la propagation de plant en plant par contact direct",
            "Absence de surveillance reguliere : les infestations d'acariens sont souvent detectees trop tard car les acariens sont microscopiques",
            "Non-elimination des adventices autour des serres qui servent de reservoir permanent",
            "Non-desinfection des structures de serre entre deux cycles",
            "Utilisation repetee des memes acaricides sans alternance des modes d'action, favorisant les resistances"
        ],
        erreurs: [
            "Ne pas reconnaitre les premiers symptomes : les piqures d'acariens (petits points blancs sur la face superieure des feuilles) sont souvent confondues avec une carence ou un stress hydrique",
            "Traiter uniquement la face superieure des feuilles : les acariens vivent sur la face INFERIEURE. Un traitement mal cible est inefficace",
            "Utiliser des pyrethroides contre les acariens : les pyrethroides sont INEFFICACES contre les acariens et eliminent leurs predateurs naturels, aggravant le probleme (resurgence)",
            "Attendre l'apparition des toiles pour intervenir : quand les toiles sont visibles, les populations sont deja tres elevees et difficiles a controler",
            "Confondre l'acariose bronzee (Aculops) avec un stress hydrique, une carence ou une brulure solaire : la tige bronzee et brillante est pathognomonique d'Aculops",
            "Appliquer le meme acaricide plusieurs fois de suite : T. urticae developpe des resistances extremement rapidement (en 3-5 generations, soit 1-2 mois)",
            "Negliger les plants de bordure et les foyers initiaux : les acariens commencent souvent par les rangs de bordure (cote sud, cote route) et se propagent ensuite vers le centre"
        ]
    },

    symptomes: {
        feuilles: "STADE INITIAL (Tetranychidae - T. urticae et T. evansi) :\nApparition de petits points blanc-jaunatres (ponctuations) sur la face superieure des feuilles, correspondant aux cellules videes par les piqures. A la loupe, on observe sur la face inferieure des acariens mobiles (0,3-0,5 mm) et des oeufs spheriques transparents. De fines toiles de soie peuvent etre visibles entre les nervures.\n\nSTADE INTERMEDIAIRE :\nLes ponctuations se multiplient et confluent, donnant un aspect jaune piquete puis argente a la face superieure des feuilles. La face inferieure est couverte de toiles de soie contenant des oeufs, des larves et des adultes. Les feuilles commencent a se dessecher par les bords. T. evansi : les feuilles prennent une teinte rouge-bronze et se recroquevillent.\n\nSTADE AVANCE :\nLes feuilles sont completement dessechees, bronzees et cassantes. La defoliation peut atteindre 80 a 100 %. Les toiles de soie recouvrent les feuilles, les tiges et meme les fruits. Les acariens forment des amas au sommet des plants (comportement de dispersion). La photosynthese est quasi nulle, les fruits ne murissent plus.\n\nACARIOSE BRONZEE (Aculops lycopersici) :\nLes symptomes sont DIFFERENTS de ceux des Tetranychidae. La face inferieure des feuilles basses prend un aspect bronze brillant, huileux, comme verni. Les tiges deviennent brun-bronze avec un aspect lisse et luisant (perte des poils glanduleux). Les feuilles se recroquevillent vers le haut, se dessechent et tombent. La progression est de bas en haut du plant. Pas de toiles de soie (Aculops est un eriophyide, pas un tetranychide).",

        tiges: "Tetranychidae (T. urticae, T. evansi) : les tiges sont rarement directement atteintes, sauf en cas d'infestation massive ou les toiles de soie recouvrent les petioles et la tige principale. Pas de coloration particuliere des tiges.\n\nAculops lycopersici (acariose bronzee) : c'est le symptome LE PLUS CARACTERISTIQUE. Les tiges prennent une coloration BRUN-BRONZE BRILLANT tres specifique, comme si elles avaient ete vernies ou cirees. Les poils glanduleux (trichomes) de la tige sont detruits par les piqures d'Aculops, donnant cet aspect lisse et bronze. La coloration commence a la base de la tige et progresse vers le sommet. Les petioles sont egalement bronze. Ce symptome est PATHOGNOMONIQUE d'Aculops lycopersici.",

        fruits: "Tetranychidae : les fruits ne sont pas directement piques, mais en cas d'infestation massive, les toiles de soie recouvrent les grappes de fruits. L'impact est indirect : la defoliation severe reduit la photosynthese, les fruits restent petits, mal colores et peu sucres. Les coups de soleil sur les fruits exposes (apres defoliation) sont frequents.\n\nAculops lycopersici : les fruits atteints prennent un aspect bronze terne avec une texture craqueleuse (aspect liege). Le calice brunit et se desseche. Les fruits peuvent eclater en cas de variations d'humidite apres bronzage de la peau. Les fruits sont invendables.",

        racines: "Les racines ne sont pas affectees par les acariens phytophages aeriens. Tout symptome racinaire observe simultanement est du a un autre pathogene (nematodes, Fusarium, etc.).",

        stade: "Les acariens peuvent attaquer la tomate a tous les stades, mais les periodes critiques sont :\n\n- Tetranychidae : les infestations debutent souvent 3 a 5 semaines apres la plantation, quand le feuillage se developpe. Les populations explosent en ete (juin-septembre) avec les temperatures elevees et la faible humidite. Les pics sont atteints en 2 a 4 semaines apres la colonisation initiale.\n\n- Aculops lycopersici : les premiers symptomes apparaissent generalement 4 a 8 semaines apres la plantation, d'abord sur les tiges et les feuilles basses. La maladie peut etre deja avancee avant d'etre detectee en raison de la taille microscopique de l'acarien.\n\nAu Maroc, les acariens sont actifs toute l'annee sous serre dans le Souss-Massa, avec des pics en ete (juin-septembre) et en automne (octobre-novembre). En plein champ, l'activite est maximale de mai a octobre.",

        differenciation: "Carence en magnesium : jaunissement interveinal SANS ponctuations piquetees, pas de toiles sur la face inferieure, pas de bronzage des tiges.\nStress hydrique : fletrissement reversible apres arrosage, pas de ponctuations, pas de toiles, pas de bronzage.\nBrulure solaire : zones blanchatres sur les fruits exposes au soleil, unilateral (cote expose), pas de toiles ni de bronzage des tiges.\nThrips : taches argentees allongees sur la face superieure des feuilles (zones de ponte et d'alimentation), insectes visibles a l'oeil nu (1-2 mm, allonges), pas de toiles.\nMouche blanche : nuage d'insectes blancs quand on secoue la plante, nymphes translucides sur la face inferieure, miellat et fumagine noire.\nCladosporiose : feutrage olive-brun sur la face inferieure, pas de ponctuations argentees ni de toiles."
    },

    lutte: {
        prevention: [
            "Surveiller regulierement la face INFERIEURE des feuilles avec une loupe x10-x20, en particulier les rangs de bordure (cote sud, cote route) ou les foyers debutent souvent. Rechercher les ponctuations, les toiles, les oeufs et les acariens mobiles",
            "Maintenir une humidite relative de 60 a 70 % dans la serre : les acariens se multiplient moins vite en conditions humides. Utiliser le brumisation (misting) aux heures chaudes si necessaire",
            "Eviter le stress hydrique des plantes : les plants stresses sont plus vulnerables. Irriguer regulierement au goutte-a-goutte",
            "Ne pas surfertiliser en azote : l'exces d'azote rend les plantes plus attractives pour les acariens (forte teneur en acides amines libres)",
            "Eliminer les adventices autour des serres dans un rayon de 20-30 m, en particulier les solanacees sauvages (morelle noire, Datura) qui hebergent T. evansi",
            "Desinfecter les structures de serre entre deux cycles (fils, tuteurs, poteaux) : les femelles hivernantes de T. urticae se refugient dans les fissures et les fils",
            "Verifier les plants de pepiniere a la reception avec une loupe : examiner la face inferieure des feuilles pour detecter les oeufs et les adultes",
            "Eviter les traitements insecticides a large spectre (pyrethroides, organophosphores) qui eliminent les acariens predateurs et provoquent des resurgences",
            "Introduire des acariens predateurs (Phytoseiulus persimilis, Amblyseius californicus) de maniere preventive des la plantation, avant l'arrivee des acariens phytophages",
            "Pulveriser de l'eau pure (aspersion) sur le feuillage en periodede forte chaleur pour laver les acariens et augmenter l'humidite (methode complementaire, pas suffisante seule)",
            "Installer des bandes-indicatrices (feuilles de tomate collees sur des piquets) en bordure de parcelle pour detecter precocement l'arrivee des acariens"
        ],
        biologique: [
            "Lachers de Phytoseiulus persimilis : acarien predateur de reference contre T. urticae. Predateur obligatoire (ne mange que des Tetranychidae). Introduire 5 a 10 individus/m2 des les premieres detections de T. urticae. Tres efficace en conditions humides (HR > 60 %) et temperees (20-28 degres C). Moins efficace contre T. evansi",
            "Lachers d'Amblyseius (= Neoseiulus) californicus : acarien predateur generaliste, plus resistant aux conditions seches et chaudes que Phytoseiulus. Introduire 5 a 10 individus/m2 de maniere preventive (peut survivre sans proie en se nourrissant de pollen). Efficace contre T. urticae et partiellement contre T. evansi",
            "Lachers de Phytoseiulus longipes : predateur prometteur contre T. evansi, mieux adapte que P. persimilis a cette proie qui supprime les defenses de la plante. En cours de developpement commercial",
            "Lachers d'Amblyseius swirskii : acarien predateur polyvalent (acariens, mouches blanches, thrips). 25 a 50 individus/m2. Tres adapte aux conditions chaudes du Souss-Massa. Efficace en prevention contre les Tetranychidae",
            "Champignon entomopathogene Beauveria bassiana : pulverisation de spores (2 x 10^9 spores/mL) sur la face inferieure des feuilles. Infecte les acariens par contact. Appliquer en soiree. Humidite > 70 % requise. Renouveler tous les 5-7 jours",
            "Champignon acaropathogene Hirsutella thompsonii : specifique des eriophyides (Aculops lycopersici). Application en pulverisation sur les tiges et feuilles basses. Necessite une humidite elevee pour etre efficace",
            "Savon potassique (savon noir) a 1-2 % : action de contact par asphyxie (obstruction des stigmates). Efficace sur les adultes et les nymphes, pas sur les oeufs. Appliquer sur la face inferieure des feuilles. Renouveler tous les 5-7 jours. Compatible avec les predateurs 48 h apres application",
            "Soufre mouillable a faible dose (3-5 g/L) : action acarifuge et acaricide de contact. Particulierement efficace contre Aculops lycopersici. Appliquer en prevention. ATTENTION : phytotoxique au-dessus de 30 degres C. Ne pas appliquer en pleine chaleur. Toxique pour Phytoseiulus persimilis (attendre 3 semaines avant de lacher des predateurs)"
        ],
        chimique: [
            "Abamectine (Vertimec 018 EC) : avermectine a action acaricide et insecticide. 0,5-0,75 L/ha. Action par ingestion et contact. Tres efficace contre les Tetranychidae et Aculops. Action translaminiaire (penetre dans la feuille et atteint les acariens sur la face opposee). Compatible avec de nombreux auxiliaires 7 jours apres application",
            "Spiromesifene (Oberon 240 SC) : inhibiteur de la biosynthese des lipides (IRAC 23). 0,4-0,6 L/ha. Tres efficace contre les oeufs et les stades immatures de Tetranychidae. Egalement actif contre les mouches blanches. Bonne selectivite pour les predateurs (Phytoseiulus, Amblyseius)",
            "Bifenazate (Acramite 480 SC) : acaricide specifique (IRAC 20D). 0,4-0,6 L/ha. Action de contact rapide sur les adultes et les nymphes de Tetranychidae. Tres selectif pour les acariens predateurs (P. persimilis, A. californicus). Ideal pour les programmes IPM",
            "Etoxazole (Borneo 110 SC) : acaricide ovicide et larvicide (IRAC 10B). 0,3-0,5 L/ha. Inhibe la synthese de chitine chez les oeufs et les stades immatures. Pas d'action sur les adultes. A combiner avec un adulticide. Tres selectif pour les auxiliaires",
            "Cyflumetofen (Danisaraba 20 SC) : acaricide METI (IRAC 25A). 0,5-1 L/ha. Inhibe le complexe II de la chaine respiratoire mitochondriale. Efficace sur tous les stades mobiles (larves, nymphes, adultes). Bonne efficacite contre T. urticae et T. evansi",
            "Spirodiclofen (Envidor 240 SC) : acide tetronique, inhibiteur de la lipogenese (IRAC 23). 0,4-0,6 L/ha. Efficace sur oeufs, larves et nymphes. Longue remanence (14-21 jours). Bonne selectivite pour la plupart des auxiliaires",
            "Soufre mouillable (80 % WG) : acaricide de contact traditionnel. 3-5 kg/ha. Particulierement efficace contre Aculops lycopersici. Tres economique. ATTENTION : phytotoxique au-dessus de 30 degres C. Espacer de 3 semaines avec les lachers de Phytoseiulus",
            "STRATEGIE ANTI-RESISTANCE obligatoire : T. urticae est l'arthropode le plus resistant aux pesticides au monde (resistance documentee a plus de 90 matieres actives). Alterner systematiquement les groupes IRAC : abamectine (IRAC 6) -> spiromesifene (IRAC 23) -> bifenazate (IRAC 20D) -> etoxazole (IRAC 10B) -> cyflumetofen (IRAC 25A). Ne JAMAIS appliquer deux fois de suite le meme mode d'action"
        ],
        mecanique: [
            "Aspersion d'eau sur le feuillage (douche) : un jet d'eau puissant sur la face inferieure des feuilles decroche les acariens et lave les toiles. Methode simple et gratuite, a repeter 2-3 fois par semaine en periode de forte pression. Reduit les populations de 50 a 70 % temporairement",
            "Effeuillage des feuilles les plus infestees : retirer les feuilles couvertes de toiles et d'acariens, les mettre dans un sac ferme et les sortir de la serre. Concentrer l'effeuillage sur les foyers initiaux",
            "Brumisation (misting) dans la serre : augmenter l'humidite ambiante a 65-75 % pendant les heures chaudes ralentit la multiplication des Tetranychidae et favorise les predateurs et les champignons entomopathogenes",
            "Arrachage des plants fortement infestes en bordure de parcelle pour limiter la propagation vers le centre",
            "Paillage reflective (argente ou aluminium) au sol : la reflexion de la lumiere UV desoriente les acariens et les ralentit dans leur colonisation (meme effet que contre les mouches blanches)",
            "Desinfection des structures entre deux cycles : nettoyer les fils de palissage, les tuteurs et les poteaux a l'eau de Javel 2 % ou avec un acaricide de contact pour eliminer les femelles hivernantes"
        ]
    },

    produits: [
        {
            nom: "Vertimec 018 EC (Abamectine)",
            type: "Acaricide-insecticide translaminiaire",
            matiere: "Abamectine 18 g/L",
            action: "Avermectine (groupe IRAC 6). Active les canaux chlorure glutamate-dependants, provoquant une paralysie irreversible. Action par ingestion et contact. Penetration translaminiaire : le produit traverse la feuille et atteint les acariens sur la face opposee. Efficace contre Tetranychidae, Aculops et les larves de Tuta absoluta.",
            application: "0,5 a 0,75 L/ha en pulverisation foliaire. Volume de bouillie : 800-1 200 L/ha pour une bonne couverture de la face inferieure. Appliquer des les premieres detections. Renouveler apres 7-10 jours si necessaire. Maximum 2-3 applications par cycle.",
            precautions: "DAR : 3 jours. Toxique pour les abeilles (appliquer le soir). Compatible avec Phytoseiulus et Amblyseius 7 jours apres application. Resistances documentees chez T. urticae dans certaines regions. Alterner avec d'autres familles.",
            disponibleMaroc: true
        },
        {
            nom: "Oberon 240 SC (Spiromesifene)",
            type: "Acaricide-insecticide inhibiteur de la lipogenese",
            matiere: "Spiromesifene 240 g/L",
            action: "Acide tetronique (groupe IRAC 23). Inhibe la biosynthese des lipides, perturbant la croissance et le developpement. Tres efficace sur les oeufs et les stades immatures. Egalement actif contre les mouches blanches. Pas de resistance croisee avec les autres familles d'acaricides.",
            application: "0,4 a 0,6 L/ha en pulverisation foliaire. Cibler la face inferieure des feuilles. Appliquer sur les stades jeunes (oeufs, larves). Renouveler apres 14 jours. Maximum 2 applications par cycle.",
            precautions: "DAR : 3 jours. Excellente selectivite pour Phytoseiulus, Amblyseius, Encarsia et Macrolophus. Ideal pour les programmes IPM. Peu efficace sur les adultes : a combiner avec un adulticide (abamectine) en cas de forte infestation.",
            disponibleMaroc: true
        },
        {
            nom: "Acramite 480 SC (Bifenazate)",
            type: "Acaricide specifique a action rapide",
            matiere: "Bifenazate 480 g/L",
            action: "Acaricide specifique (groupe IRAC 20D). Inhibe le complexe III de la chaine respiratoire mitochondriale des acariens. Action de contact rapide (knock-down en quelques heures). Efficace sur adultes, nymphes et oeufs. Hautement selectif pour les acariens phytophages, sans effet sur les predateurs.",
            application: "0,4 a 0,6 L/ha en pulverisation foliaire. Bien couvrir la face inferieure des feuilles. Action rapide visible en 24-48 heures. Une seule application par cycle generalement suffisante. Renouveler apres 14-21 jours si necessaire.",
            precautions: "DAR : 3 jours. Selectivite EXCEPTIONNELLE pour les acariens predateurs (P. persimilis, A. californicus, A. swirskii). Peut etre applique le jour meme d'un lacher de predateurs. Reference en programme IPM. Risque modere de resistance chez T. urticae.",
            disponibleMaroc: true
        },
        {
            nom: "Borneo 110 SC (Etoxazole)",
            type: "Acaricide ovicide-larvicide",
            matiere: "Etoxazole 110 g/L",
            action: "Inhibiteur de la synthese de chitine chez les acariens (groupe IRAC 10B). Empeche la formation de la cuticule lors des mues et l'eclosion des oeufs. Pas d'action directe sur les adultes (mais les femelles traitees pondent des oeufs non viables). Tres longue remanence (21-28 jours).",
            application: "0,3 a 0,5 L/ha en pulverisation foliaire. Appliquer en debut d'infestation, quand les oeufs et les jeunes stades sont predominants. UNE seule application par cycle cultural (remanence tres longue). Combiner avec un adulticide si des adultes sont presents.",
            precautions: "DAR : 3 jours. Excellente selectivite pour les auxiliaires. Pas d'action sur les adultes : ne pas utiliser seul en cas de forte infestation avec des adultes. Maximum 1 application par cycle pour prevenir les resistances. Toxique pour les organismes aquatiques.",
            disponibleMaroc: true
        },
        {
            nom: "Danisaraba 20 SC (Cyflumetofen)",
            type: "Acaricide METI de nouvelle generation",
            matiere: "Cyflumetofen 200 g/L",
            action: "Inhibiteur du complexe II de la chaine respiratoire mitochondriale (groupe IRAC 25A). Pro-acaricide active par les enzymes de l'acarien. Efficace sur tous les stades mobiles (larves, nymphes, adultes). Pas d'action ovicide. Efficace contre T. urticae, T. evansi et d'autres Tetranychidae.",
            application: "0,5 a 1 L/ha en pulverisation foliaire. Bien couvrir la face inferieure des feuilles. Appliquer en debut d'infestation. Renouveler apres 14 jours si necessaire. Maximum 2 applications par cycle.",
            precautions: "DAR : 3 jours. Selectivite moderee pour les predateurs (eviter les applications directes sur les colonies de Phytoseiulus). Pas de resistance croisee connue avec les autres groupes d'acaricides. Nouveau mode d'action precieux pour les programmes de rotation.",
            disponibleMaroc: true
        },
        {
            nom: "Kumulus DF (Soufre mouillable)",
            type: "Acaricide-fongicide de contact traditionnel",
            matiere: "Soufre micronise 80 %",
            action: "Action acaricide et fongicide de contact multi-sites. Perturbe le metabolisme energetique des acariens par interference avec la respiration cellulaire. Particulierement efficace contre Aculops lycopersici (acariose bronzee). Egalement actif contre l'oidium. Pas de risque de resistance.",
            application: "3 a 5 kg/ha en pulverisation foliaire. Pour Aculops : traiter les tiges et les feuilles basses des les premiers symptomes de bronzage. Renouveler tous les 7-10 jours. Peut etre applique en preventif pendant les periodes a risque.",
            precautions: "ATTENTION : phytotoxique au-dessus de 30 degres C (ne JAMAIS appliquer en pleine chaleur ou par temps caniculaire). Appliquer le matin ou le soir. TOXIQUE pour Phytoseiulus persimilis : attendre minimum 3 semaines avant un lacher de predateurs. Economique et utilisable en agriculture biologique.",
            disponibleMaroc: true
        },
        {
            nom: "Phytoseiulus persimilis (auxiliaire predateur)",
            type: "Acarien predateur pour lutte biologique",
            matiere: "Phytoseiulus persimilis Athias-Henriot, adultes et nymphes",
            action: "Acarien predateur obligatoire des Tetranychidae. Un adulte consomme 5 a 7 acariens phytophages par jour ou 20 oeufs. Se reproduit plus vite que sa proie en conditions favorables (HR > 60 %, T 20-28 degres C). Recherche activement les foyers d'acariens. Arrete de se reproduire et se disperse quand la proie est eliminee.",
            application: "5 a 10 individus/m2 en lacher foyer (sur les foyers d'infestation) ou en lacher generalise. Repeter les lachers toutes les 2 semaines jusqu'a equilibre. Conserver les flacons au frais (10-15 degres C) et utiliser dans les 24 h apres reception. Repartir uniformement dans la culture.",
            precautions: "Necessite une humidite > 60 % et des temperatures de 18-28 degres C. INEFFICACE au-dessus de 33 degres C ou en air tres sec. Incompatible avec le soufre (attendre 3 semaines). Compatible avec abamectine (7j apres), bifenazate (0j), spiromesifene (0j). Ne pas utiliser de pyrethroides.",
            disponibleMaroc: true
        }
    ],

    points_cles: [
        "La DETECTION PRECOCE est la cle : les acariens sont microscopiques et les degats sont souvent visibles trop tard. Examinez la face INFERIEURE des feuilles avec une loupe x10 chaque semaine, en commencant par les rangs de BORDURE (cote sud, cote route) ou les foyers debutent presque toujours.",
        "Il y a TROIS especes differentes au Maroc, chacune avec ses specificites : T. urticae (ponctuations + toiles, predateurs efficaces), T. evansi (rouge, thermophile, supprime les defenses de la plante, predateurs moins efficaces) et Aculops lycopersici (microscopique, bronzage des tiges, soufre efficace). Identifiez l'espece pour adapter la lutte.",
        "Les PYRETHROIDES sont a PROSCRIRE contre les acariens : ils sont inefficaces sur les acariens et TUENT leurs predateurs naturels (Phytoseiulus, Amblyseius), provoquant des explosions de populations (resurgence). C'est la cause numero 1 des infestations d'acariens en serre.",
        "T. urticae est l'arthropode LE PLUS RESISTANT aux pesticides au monde (resistance a plus de 90 matieres actives). L'alternance des modes d'action IRAC est VITALE : ne jamais appliquer deux fois de suite le meme groupe. Privilegiez les acaricides specifiques selectifs (bifenazate, etoxazole, cyflumetofen) qui preservent les predateurs.",
        "La LUTTE BIOLOGIQUE avec Phytoseiulus persimilis et Amblyseius californicus est la strategie la plus durable et la plus efficace a long terme contre T. urticae. Introduisez les predateurs de maniere PREVENTIVE, avant l'arrivee des acariens phytophages. Maintenez une HR > 60 % et evitez les pesticides incompatibles."
    ],

    protocole_traitement: {
        titre: "Protocole de lutte integree contre les acariens de la tomate",
        etapes: [
            {
                titre: "Etape 1 : Prevention et preparation (avant et a la plantation)",
                description: "Desinfecter les structures de serre entre deux cycles (fils, tuteurs, poteaux) avec un acaricide de contact ou de l'eau de Javel 2 %. Eliminer les adventices autour de la serre dans un rayon de 20-30 m. Verifier les plants de pepiniere a la loupe. Introduire de maniere preventive Amblyseius californicus (5-10/m2) des la plantation : il survivra en se nourrissant de pollen en attendant l'arrivee des acariens phytophages. Installer des bandes indicatrices en bordure."
            },
            {
                titre: "Etape 2 : Surveillance hebdomadaire (toute la culture)",
                description: "Chaque semaine, examiner a la loupe x10 la face inferieure de 5-10 feuilles par rang, en commencant par les rangs de bordure (cote sud, cote route). Rechercher : ponctuations blanches (face superieure), acariens mobiles et oeufs (face inferieure), toiles de soie, bronzage des tiges (Aculops). Seuils d'intervention : > 3-5 acariens/feuille pour Tetranychidae ; tout debut de bronzage des tiges pour Aculops."
            },
            {
                titre: "Etape 3 : Intervention precoce (premiers foyers detectes)",
                description: "Pour T. urticae : lachers de Phytoseiulus persimilis (10-20/m2) directement sur les foyers. Completer avec une pulverisation localisee de savon potassique (1-2 %) ou de Beauveria bassiana sur les foyers les plus denses. Pour Aculops lycopersici : application immediate de soufre mouillable (3-5 kg/ha) sur les tiges et les feuilles basses (le matin, T < 28 degres C). Pour T. evansi : abamectine (0,5-0,75 L/ha) sur les foyers + Amblyseius californicus (10/m2) en complement."
            },
            {
                titre: "Etape 4 : Programme acaricide raisonne (si forte pression)",
                description: "En cas de forte infestation depassant la capacite des predateurs, mettre en place un programme d'alternance stricte des modes d'action : Application 1 : abamectine (IRAC 6, adulticide translaminiaire) -> 14 jours -> Application 2 : spiromesifene ou spirodiclofen (IRAC 23, ovicide-larvicide) -> 14 jours -> Application 3 : bifenazate (IRAC 20D, adulticide selectif) -> 14 jours -> Application 4 : etoxazole (IRAC 10B, ovicide). Apres le programme chimique, relacher des predateurs (Phytoseiulus, Amblyseius) pour maintenir le controle a long terme."
            },
            {
                titre: "Etape 5 : Entretien et prevention de la resurgence",
                description: "Maintenir l'humidite dans la serre a 60-70 % par brumisation aux heures chaudes. Continuer la surveillance hebdomadaire. Renouveler les lachers de predateurs si necessaire (toutes les 2-3 semaines). Eviter absolument les pyrethroides et les organophosphores qui detruisent les predateurs. Si des traitements insecticides sont necessaires contre d'autres ravageurs, choisir des produits selectifs compatibles avec les acariens predateurs (cyantraniliprole, Bt, pyriproxyfene)."
            }
        ]
    },

    faq: [
        {
            question: "Comment distinguer les trois especes d'acariens de la tomate ?",
            reponse: "T. urticae : corps ovale, 0,3-0,5 mm, jaune-verdatre avec deux taches laterales foncees. Produit des TOILES de soie abondantes. Visible a la loupe x10 sur la face inferieure des feuilles. T. evansi : similaire a T. urticae mais ROUGE-ORANGE vif, plus petit. Toiles moins abondantes. Feuilles rougissant et se recroquevillant fortement. Aculops lycopersici : INVISIBLE a l'oeil nu (0,15 mm), necessite une loupe x20 minimum. En forme de fuseau allonge (vermiforme), 2 paires de pattes seulement. PAS de toiles. Symptome specifique : bronzage brillant des TIGES (pas seulement des feuilles). En pratique : si vous voyez des toiles = Tetranychidae ; si les tiges sont bronzees sans toiles = Aculops."
        },
        {
            question: "Pourquoi les traitements pyrethroides aggravent-ils les problemes d'acariens ?",
            reponse: "Les pyrethroides (lambda-cyhalothrine, deltamethrine, cypermethrine) ont une activite tres faible contre les acariens phytophages (T. urticae, T. evansi sont naturellement tolerants). En revanche, ils sont extremement toxiques pour les acariens PREDATEURS (Phytoseiulus persimilis, Amblyseius californicus) qui controlent naturellement les populations de phytophages. En eliminant les predateurs sans tuer les phytophages, les pyrethroides provoquent une RESURGENCE : les populations de phytophages, liberees de la pression de predation, explosent de maniere incontrole. C'est la cause principale des epidemies d'acariens en serre au Maroc."
        },
        {
            question: "Phytoseiulus persimilis est-il efficace contre Tetranychus evansi ?",
            reponse: "Malheureusement, Phytoseiulus persimilis est significativement MOINS efficace contre T. evansi que contre T. urticae. T. evansi produit des substances qui suppriment les defenses de la plante (acide jasmonique), ce qui reduit indirectement l'attractivite de la plante pour les predateurs. De plus, T. evansi se reproduit plus vite que P. persimilis a haute temperature (> 30 degres C). Les alternatives sont : Amblyseius californicus (plus resistant aux hautes temperatures), Phytoseiulus longipes (en cours de developpement, mieux adapte a T. evansi), et les acaricides chimiques selectifs (abamectine, spiromesifene) en complement de la lutte biologique."
        },
        {
            question: "Comment traiter l'acariose bronzee (Aculops lycopersici) ?",
            reponse: "Aculops est un eriophyide microscopique (0,15 mm) qui necessite une approche specifique : (1) DETECTION : surveillez les tiges a la recherche du bronzage brillant caracteristique, en commencant par la base des plants. (2) TRAITEMENT CURATIF : le SOUFRE mouillable (3-5 kg/ha) est le traitement le plus efficace et le plus economique. Appliquer sur les tiges et les feuilles basses le matin (T < 28 degres C). L'abamectine (Vertimec, 0,5-0,75 L/ha) est egalement efficace. (3) REPETITION : renouveler le traitement tous les 7-10 jours car Aculops a un cycle de 6-7 jours. (4) PREVENTION : le soufre en traitement preventif tous les 10-14 jours dans les parcelles ayant un historique d'Aculops. ATTENTION : le soufre est incompatible avec les lachers de Phytoseiulus (attendre 3 semaines)."
        }
    ],

    ressources: [
        "INRA Maroc - Les acariens phytophages de la tomate : biologie, identification et strategie de lutte integree",
        "ONSSA - Liste des acaricides homologues pour la tomate au Maroc (mise a jour annuelle)",
        "Migeon A. & Dorkeld F. - Spider Mites Web : base de donnees mondiale des Tetranychidae (www1.montpellier.inra.fr/CBGP/spmweb)",
        "Navajas M. et al. (2013) - The invasive red tomato spider mite Tetranychus evansi: current status and future perspectives. Experimental and Applied Acarology 59:127-137",
        "Saunyama I.G.M. & Knapp M. (2003) - Effect of pruning and trellising of tomatoes on red spider mite Tetranychus evansi incidence and crop yield. African Crop Science Journal 11:269-277",
        "Van Leeuwen T. et al. (2010) - Acaricide resistance mechanisms in the two-spotted spider mite Tetranychus urticae. Pesticide Biochemistry and Physiology 96:145-155. Reference sur les resistances",
        "IRAC (Insecticide Resistance Action Committee) - Mode of Action Classification pour les acaricides : groupes et recommandations d'alternance",
        "IAV Hassan II - Cours d'acarologie appliquee : acariens des cultures maraicheres au Maroc",
        "Knapp M. et al. (2018) - Biological control of the red tomato spider mite Tetranychus evansi: a review. Biological Control 121:52-64",
        "EPPO - Fiches de donnees : Aculops lycopersici, Tetranychus evansi, Tetranychus urticae"
    ]
};
