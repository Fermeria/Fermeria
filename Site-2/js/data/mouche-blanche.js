const MALADIE_MOUCHE_BLANCHE = {
    id: "mouche-blanche",
    nom: "Mouche blanche (Aleurodes) de la tomate",
    nomScientifique: "Bemisia tabaci (biotype B/Q), Trialeurodes vaporariorum",
    type: "ravageur",
    emoji: "\ud83e\udeb0",
    resumeCourt: "Les mouches blanches (aleurodes) sont des ravageurs majeurs de la tomate au Maroc, tant en plein champ que sous serre. Bemisia tabaci et Trialeurodes vaporariorum sucent la seve, affaiblissent les plants, secretent du miellat favorisant la fumagine, et surtout transmettent des virus devastateurs comme le TYLCV (Tomato Yellow Leaf Curl Virus). Les pertes peuvent atteindre 100 % en cas de transmission virale non controlee.",
    cultures: ["Tomate", "Tomate cerise", "Tomate sous serre", "Tomate plein champ", "Cultures maraicheres"],

    presentation: {
        description: "Les mouches blanches, ou aleurodes, sont de minuscules insectes piqueurs-suceurs (1 a 2 mm) de l'ordre des Hemipteres, famille des Aleyrodidae. Deux especes sont particulierement nuisibles a la tomate :\n\n- Bemisia tabaci (Gennadius) : la mouche blanche du tabac, espece la plus problematique au Maroc. Les biotypes B (= MEAM1) et Q (= MED) sont les plus repandus. C'est le principal vecteur du TYLCV, le virus le plus destructeur de la tomate au monde.\n- Trialeurodes vaporariorum (Westwood) : la mouche blanche des serres, plus frequente en climat tempere et en altitude. Moins efficace comme vecteur viral mais tres nuisible par ses degats directs.\n\nLes adultes sont de petits insectes ailes (1-2 mm), couverts d'une cire blanche poudreuse, qui s'envolent en nuage quand on secoue les feuilles. Les larves (nymphes) sont sedentaires sur la face inferieure des feuilles, aplaties, translucides a jaunatres, et ressemblent a de petites ecailles.\n\nAu Maroc, Bemisia tabaci est l'ennemi numero 1 de la tomate, principalement en raison de sa capacite a transmettre le TYLCV. Ce virus a provoque des degats catastrophiques dans les annees 1990-2000 dans le Souss-Massa, entrainant des pertes de recolte de 50 a 100 % dans les serres non protegees. La lutte contre la mouche blanche est indissociable de la lutte contre les viroses qu'elle transmet.",

        importance: "Ravageur numero 1 de la tomate au Maroc en raison de la transmission du TYLCV. Les degats directs (succion de seve, miellat, fumagine) sont significatifs, mais les degats indirects (transmission virale) sont catastrophiques. Le TYLCV peut provoquer 100 % de pertes sur varietes sensibles. La gestion de la mouche blanche conditionne la reussite de toute culture de tomate au Maroc.",

        historique: "Bemisia tabaci est presente au Maroc depuis des decennies, mais c'est l'introduction du biotype B (MEAM1) dans les annees 1990, plus polyphage et meilleur vecteur viral, qui a provoque une crise majeure. Le TYLCV a ete detecte pour la premiere fois au Maroc en 1998 dans le Souss-Massa et s'est rapidement repandu dans toutes les zones de production. Les pertes ont ete si severes que les autorites ont impose des mesures reglementaires : periodes de vide sanitaire obligatoire, utilisation de filets anti-insectes, varietes resistantes au TYLCV.\n\nL'introduction de varietes tolerantes au TYLCV (gene Ty-1, Ty-2, Ty-3) dans les annees 2000 a considerablement reduit les pertes, mais la mouche blanche reste un probleme majeur par ses degats directs et par la transmission d'autres virus (ToCV, TICV, CYSDV). Le biotype Q (MED), resistant a de nombreux insecticides, est devenu dominant au Maroc depuis les annees 2010, compliquant la lutte chimique.",

        impact_economique: "Les pertes economiques liees a la mouche blanche sont considerables :\n\n- Pertes directes (succion + fumagine) : 10 a 30 % de reduction de rendement en cas d'infestation non controlee.\n- Pertes indirectes (TYLCV) : 50 a 100 % sur varietes sensibles. Meme sur varietes tolerantes, le virus reduit le rendement de 10 a 20 %.\n- Cout des filets anti-insectes : 3 000 a 6 000 MAD/ha (amortis sur 3-5 ans).\n- Cout des insecticides : 5 a 15 traitements par cycle, soit 3 000 a 10 000 MAD/ha.\n- Cout de la lutte biologique : 4 000 a 12 000 MAD/ha (lachers d'Encarsia, Eretmocerus).\n- Surcout des varietes tolerantes TYLCV : 10 a 20 % de plus par rapport aux varietes sensibles.\n- Au Maroc, le TYLCV est considere comme la premiere cause de perte economique sur tomate depuis son apparition en 1998."
    },

    origine: {
        agent: "Deux especes principales :\n\n- Bemisia tabaci (Gennadius, 1889) : complexe d'especes cryptiques comprenant plus de 40 biotypes. Au Maroc, les biotypes Q (MED = Mediterranean) et B (MEAM1 = Middle East-Asia Minor 1) sont dominants. Le biotype Q est actuellement le plus repandu et pose des problemes majeurs de resistance aux insecticides (neonicotinoides, pyrethroides). Bemisia tabaci est le vecteur le plus efficace du TYLCV (transmission persistante circulante) et de nombreux autres begomovirus, crinivirus et carlavirus.\n\n- Trialeurodes vaporariorum (Westwood, 1856) : la mouche blanche des serres. Plus grande que Bemisia (1,5-2 mm vs 1-1,5 mm), ailes disposees a plat (vs en toit chez Bemisia). Presente surtout en altitude et en climat tempere au Maroc. Vectrice de crinivirus (ToCV, TICV) mais PAS du TYLCV.\n\nCycle biologique : oeuf (7-10 jours) -> 4 stades nymphaux sedentaires (14-21 jours) -> adulte aile. Duree totale du cycle : 21 a 35 jours selon la temperature. Une femelle pond 100 a 300 oeufs. Reproduction par parthenogenese arrhénotoque (les oeufs non fecondes donnent des males).",

        provenance: "Bemisia tabaci est originaire de la region tropicale (probablement Afrique ou Asie). Elle est devenue cosmopolite par le commerce international de plants ornementaux et de legumes. Au Maroc, B. tabaci est presente dans toutes les zones de production maraichere, avec une pression maximale dans le Souss-Massa, le Gharb, le Loukkos et les plaines orientales. L'inoculum provient des cultures voisines (tomate, melon, courgette, poivron, haricot), des plantes adventices-reservoirs (Datura, Solanum nigrum, Convolvulus) et des plants de pepiniere infestes.",

        cycle: "1. Ponte : la femelle adulte pond ses oeufs individuellement sur la face inferieure des feuilles, preferentiellement sur les jeunes feuilles du tiers superieur du plant. Les oeufs sont piriformes, de 0,2 mm, fixes au limbe par un pedicelle. Une femelle pond 100 a 300 oeufs au cours de sa vie (15 a 30 jours).\n\n2. Eclosion et 1er stade nymphal (crawler) : apres 7-10 jours, l'oeuf eclot et libere une larve mobile de stade 1 (crawler) qui se deplace sur la feuille pendant quelques heures a la recherche d'un site d'alimentation. Elle insere son stylet buccal dans un vaisseau de phloeme et devient sedentaire.\n\n3. Stades nymphaux 2, 3 et 4 : la nymphe mue trois fois en restant fixee au meme endroit sur la face inferieure de la feuille. Elle est aplatie, ovale, translucide a jaunatre. Elle se nourrit en continu de seve phloémienne et excrete du miellat (liquide sucre). Le 4eme stade est le puparium (= pseudo-nymphe), dans lequel se deroule la metamorphose.\n\n4. Emergence de l'adulte : l'adulte aile emerge du puparium par une fente en T. Il est immediatement capable de voler et de s'alimenter. La maturation sexuelle prend 1 a 2 jours.\n\n5. Accouplement et dispersion : les adultes s'accouplent et les femelles commencent a pondre 2 a 3 jours apres l'emergence. Les adultes se deplacent activement dans et entre les serres, attires par les jeunes feuilles et la couleur jaune-vert. Ils peuvent voler sur plusieurs centaines de metres.\n\n6. Acquisition et transmission virale : lors de l'alimentation sur une plante infectee par le TYLCV, l'adulte acquiert le virus en 15-30 minutes. Le virus circule dans l'hemolymphe de l'insecte et s'accumule dans les glandes salivaires en 8-24 heures (periode de latence). L'insecte reste virulifere a vie et peut transmettre le virus a chaque plante saine sur laquelle il s'alimente (meme apres une seule piqure d'alimentation de quelques minutes).\n\n7. Multiplication exponentielle : avec un cycle de 21-35 jours et 100-300 oeufs par femelle, les populations explosent en quelques semaines. En conditions optimales (25-30 degres C), une population peut etre multipliee par 10 en un mois.",

        propagation: [
            "Vol actif des adultes entre les plants, entre les serres et depuis les parcelles voisines (rayon de dispersion de plusieurs centaines de metres)",
            "Introduction par les plants de pepiniere infestes (oeufs et nymphes invisibles sur la face inferieure des feuilles)",
            "Migration depuis les plantes adventices-reservoirs autour des serres (Datura, morelle noire, liseron, amarante)",
            "Transport passif par le vent sur de courtes distances (adultes legers emportes par les courants d'air)",
            "Absence de vide sanitaire entre deux cycles de culture : les populations persistent sur les residus de la culture precedente",
            "Ouvertures non protegees dans les serres (portes, ouvrants sans filet, trous dans le plastique)",
            "Deplacement des ouvriers et du materiel entre serres infestees et serres saines",
            "Culture continue sans periode d'interruption, permettant le chevauchement des generations"
        ]
    },

    facteurs: {
        climatiques: [
            "Temperatures elevees (optimum 25-30 degres C pour Bemisia tabaci) : le cycle est accelere et la fecondite maximale. Au-dessus de 35 degres C, la mortalite augmente",
            "Climat chaud et sec : conditions ideales pour Bemisia tabaci. L'humidite elevee favorise les champignons entomopathogenes mais ralentit aussi la pullulation",
            "Periodes de vent faible favorisant l'accumulation des populations dans et autour des serres",
            "Automne et printemps : periodes de forte pression au Maroc (temperatures moderees a chaudes, absence de froid limitant)",
            "Absence de gel hivernal dans les regions cotieres (Souss-Massa) : les populations persistent toute l'annee sans interruption",
            "Forte luminosite attirant les adultes vers les ouvrants des serres"
        ],
        sol: [
            "Sans rapport direct avec le sol (insecte aerien), mais les cultures stressees par des problemes racinaires (nematodes, Fusarium) sont plus attractives pour les mouches blanches",
            "Sols secs necessitant une irrigation frequente par aspersion : le microclimat humide autour des plants peut limiter legerement les populations",
            "Paillage plastique reflechissant (argente ou aluminium) : repousse les adultes par reflexion de la lumiere UV (effet repulsif demontre)"
        ],
        pratiques: [
            "Absence de filets anti-insectes sur les ouvrants des serres : porte d'entree principale des adultes",
            "Non-respect du vide sanitaire entre deux cycles de culture : les populations se maintiennent en continu",
            "Proximite de cultures sensibles (melon, courgette, poivron, aubergine) qui servent de reservoir de mouches blanches et de virus",
            "Laisser les plantes adventices (mauvaises herbes) se developper autour et dans les serres : reservoirs de mouches blanches et de TYLCV",
            "Utilisation repetee des memes insecticides (neonicotinoides, pyrethroides) favorisant la selection de populations resistantes (biotype Q)",
            "Plantation de varietes sensibles au TYLCV dans des zones a forte pression de Bemisia",
            "Effeuillage et taille sans elimination des feuilles portant des nymphes",
            "Pas de pieges chromatiques pour la surveillance",
            "Entree et sortie du personnel sans sas ou pediluves dans les serres"
        ],
        erreurs: [
            "Traiter uniquement les adultes en negligeant les nymphes sur la face inferieure des feuilles : les nymphes sont le reservoir principal et sont plus difficiles a atteindre",
            "Utiliser toujours le meme insecticide : la selection de resistance est tres rapide chez Bemisia tabaci (biotype Q resistant aux neonicotinoides et pyrethroides)",
            "Confondre un jaunissement viral (TYLCV) avec une carence et ne pas identifier la mouche blanche comme vecteur",
            "Ne pas installer de filets anti-insectes en pensant que les traitements chimiques suffisent",
            "Ignorer les plantes adventices autour de la serre qui servent de reservoir permanent de mouches blanches et de virus",
            "Ouvrir les portes de la serre en grand pendant les heures chaudes (10h-16h) quand les adultes sont les plus actifs",
            "Ne pas respecter le vide sanitaire obligatoire entre deux cycles : les populations ne sont jamais interrompues",
            "Croire qu'une variete tolerante au TYLCV est immune : elle peut etre infectee et servir de reservoir viral pour les parcelles voisines"
        ]
    },

    symptomes: {
        feuilles: "STADE INITIAL :\nPresence d'adultes ailes blancs (1-2 mm) sur la face inferieure des jeunes feuilles du sommet du plant. Quand on secoue la plante, un petit nuage d'insectes blancs s'envole. Sur la face inferieure des feuilles medianes, on observe de minuscules oeufs piriformes (0,2 mm) et des nymphes translucides aplaties. Le feuillage ne presente pas encore de symptomes visibles.\n\nSTADE INTERMEDIAIRE :\nLe nombre d'adultes et de nymphes augmente fortement. La face inferieure des feuilles est couverte de nymphes a differents stades et de pupariums vides (exuvies blanches). Du miellat (liquide sucre et collant) est visible sur la face superieure des feuilles inferieures (depose par les nymphes des feuilles au-dessus). Un champignon noir (fumagine = Capnodium spp.) se developpe sur le miellat, formant un depot noir qui recouvre les feuilles et reduit la photosynthese. Les feuilles jaunissent irregulierement.\n\nSTADE AVANCE :\nInfestation massive. Les feuilles sont couvertes de fumagine noire. Le feuillage jaunit, se dessèche et tombe. Les fruits sont taches de fumagine. Si le TYLCV est transmis : les jeunes feuilles du sommet se recroquevillent en cuillere vers le haut (enroulement marginal), jaunissent entre les nervures, et les plants sont severement naines. La floraison est avortee, les fruits sont petits et deformes, les plants deviennent improductifs.",

        tiges: "Les tiges ne sont pas directement attaquees. Cependant, en cas d'infestation massive, du miellat et de la fumagine noire peuvent recouvrir les tiges, donnant un aspect noiratre a la plante. Lors de l'infection par le TYLCV (transmis par Bemisia), les entre-noeuds se raccourcissent considerablement, donnant un aspect buissonnant et compact au sommet du plant. Les tiges peuvent presenter une coloration violacee dans les cas severes de TYLCV.",

        fruits: "Les degats directs sur les fruits sont principalement lies a la fumagine : depot noir sur les fruits qui reduit leur valeur commerciale et necessite un nettoyage avant la vente. Bemisia tabaci peut egalement provoquer la maturation irreguliere des fruits (irregular ripening) : les fruits presentent des zones blanches ou jaunes qui ne murissent pas (white streak), rendant les fruits invendables. En cas d'infection TYLCV, la production de fruits est tres reduite (coulure florale) et les rares fruits formes sont petits et deformes.",

        racines: "Le systeme racinaire n'est pas affecte directement par les mouches blanches. Cependant, l'affaiblissement general du plant par la succion de seve et/ou l'infection virale reduit l'activite racinaire. Les plants severement atteints par le TYLCV peuvent presenter un systeme racinaire reduit en raison du nanisme general de la plante.",

        stade: "Les mouches blanches peuvent attaquer la tomate a tous les stades, des la pepiniere jusqu'a la fin de la production. La periode la plus critique est la phase de croissance vegetative (3 a 8 semaines apres plantation), car c'est a ce stade qu'une infection par le TYLCV est la plus devastatrice : les plants infectes tot ne produiront pratiquement pas de fruits.\n\nAu Maroc, les pics de population de Bemisia tabaci sont observes :\n- Automne (septembre-novembre) : migration des populations depuis les cultures d'ete en fin de cycle.\n- Printemps (mars-mai) : reprise d'activite avec le rechauffement.\n- En serre, les populations peuvent se maintenir toute l'annee si le vide sanitaire n'est pas respecte.",

        differenciation: "Pucerons : insectes plus gros (2-4 mm), verts, noirs ou roses, qui ne s'envolent pas en nuage blanc. Colonies denses, souvent avec des fourmis associees.\nThrips : insectes allonges et fins (1-2 mm), de couleur jaunatre, qui sautent quand on les derange. Provoquent des taches argentees sur les feuilles.\nAcariens (tetranyques) : non visibles a l'oeil nu (< 0,5 mm), feuilles bronzees-argentees avec des toiles fines. Pas d'insectes volants.\nCicadelles : insectes sauteurs plus grands (3-5 mm), de couleur verte. S'envolent lateralement (pas en nuage).\nJaunissement viral (TYLCV) vs carence : le TYLCV provoque un enroulement des feuilles vers le HAUT + nanisme + jaunissement interveinal. La carence en magnesium provoque un jaunissement interveinal SANS enroulement ni nanisme."
    },

    lutte: {
        prevention: [
            "Installer des filets anti-insectes (maille 10x20 = 50 mesh minimum, idealement 10x16 = 64 mesh) sur TOUS les ouvrants de la serre (lateraux, faîtieres, portes). C'est la mesure la plus efficace contre l'entree des adultes",
            "Amenager un sas d'entree a double porte avec rideau de laniere plastique a l'entree de la serre pour eviter l'entree des adultes lors du passage du personnel",
            "Respecter obligatoirement le vide sanitaire entre deux cycles de culture : minimum 2 a 4 semaines sans aucune plante vivante dans et autour de la serre. Arracher et detruire les residus de la culture precedente",
            "Utiliser des varietes de tomate tolerantes au TYLCV (genes Ty-1, Ty-2, Ty-3 ou combinaisons). Nombreuses varietes disponibles au Maroc : Tyler, Tylka, TY52, Eleonora, etc.",
            "Desherber rigoureusement autour des serres dans un rayon de 20 a 50 metres : eliminer les plantes-reservoirs (Datura, Solanum nigrum, Convolvulus, Amaranthus)",
            "Installer des pieges chromatiques jaunes colles (25x40 cm) a raison de 1 piege pour 200 m2 de serre, a hauteur de la tete des plants, pour la surveillance et le piegeage de masse",
            "Utiliser du paillage plastique reflechissant (argente ou aluminium) au sol : la reflexion des UV desoriente les adultes et retarde la colonisation",
            "Planter des barrieres vegetales repulsives autour des serres : basilic, menthe, ou rangs de mais (barriere physique) en peripherie",
            "Verifier systematiquement la face inferieure des feuilles des plants de pepiniere a la reception : rejeter tout lot presentant des nymphes ou des adultes",
            "Coordonner les dates de plantation avec les producteurs voisins et respecter le calendrier de vide sanitaire impose par l'ONSSA dans le Souss-Massa",
            "Ne pas planter de cultures sensibles (melon, courgette, poivron) a proximite immediate des serres de tomate",
            "Former le personnel a l'identification de la mouche blanche et aux symptomes du TYLCV pour une detection precoce"
        ],
        biologique: [
            "Lachers d'Encarsia formosa : guepe parasitoide de 0,6 mm qui pond dans les nymphes de T. vaporariorum (moins efficace sur Bemisia). Introduire 3 a 6 Encarsia/m2 toutes les 2 semaines des la plantation. Les nymphes parasitees deviennent noires (Encarsia) ou jaune fonce (Eretmocerus)",
            "Lachers d'Eretmocerus mundus : parasitoide plus efficace contre Bemisia tabaci que Encarsia. Introduire 2 a 4 individus/m2 toutes les 2 semaines. Preferentiel au Maroc ou Bemisia domine",
            "Lachers de Macrolophus pygmaeus (= M. caliginosus) : punaise predatrice polyphage qui consomme oeufs, nymphes et adultes de mouches blanches. Introduire 1 a 2 individus/m2 des la plantation. Excellent predateur mais s'installe lentement (4-6 semaines avant effet visible). Se nourrit aussi de Tuta absoluta",
            "Lachers de Nesidiocoris tenuis : punaise predatrice encore plus vorace que Macrolophus sur mouches blanches. Introduire 0,5 a 1 individu/m2. Attention : a forte densite et en l'absence de proies, elle peut piquer les tiges de tomate (degats mineurs)",
            "Champignon entomopathogene Beauveria bassiana : pulverisation de spores (2 x 10^9 spores/mL) sur la face inferieure des feuilles. Infecte les nymphes et les adultes par contact. Appliquer tous les 7-10 jours, de preference en soiree (les UV degradent les spores). Humidite > 70 % requise",
            "Champignon entomopathogene Isaria fumosorosea (= Paecilomyces fumosoroseus) : meme mode d'action que Beauveria. Parfois plus efficace contre Bemisia en conditions chaudes et humides",
            "Savon potassique (savon noir) a 1-2 % en pulverisation : action de contact sur les nymphes et les adultes en obstruant les stigmates (asphyxie). Effet immediat mais pas de persistance. Compatible avec les auxiliaires 48 h apres application",
            "Huile de neem (azadirachtine) en pulverisation : 3-5 mL/L. Action anti-appetante, regulatrice de croissance (perturbe les mues) et repulsive. Appliquer sur la face inferieure des feuilles. Compatible avec la lutte biologique"
        ],
        chimique: [
            "Spiromesifene (Oberon 240 SC) : tetronique acid derivative. Action sur les nymphes (inhibition de la lipogenese). 0,4-0,6 L/ha. Tres efficace contre les stades immatures de Bemisia. Epargne la plupart des auxiliaires. Excellente alternative dans les programmes IPM",
            "Cyantraniliprole (Cyazypyr, Benevia OD) : diamide anthranilic. Action sur adultes et nymphes par ingestion et contact. 0,5-0,75 L/ha. Bonne efficacite sur Bemisia y compris biotype Q resistant. Profil favorable pour les auxiliaires",
            "Pyriproxyfene (Admiral 10 EC) : regulateur de croissance des insectes (IGR). Mimétique de l'hormone juvenile. Empeche la metamorphose des nymphes en adultes. 0,5-0,75 L/ha. Tres specifique, epargne les auxiliaires. Pas d'action sur les adultes",
            "Spirotetramate (Movento 100 SC) : acide tetramique, inhibiteur de la lipogenese. Action systemique ambimobile (monte ET descend dans la plante). 0,75-1 L/ha. Efficace sur nymphes. Bonne compatibilite avec la lutte biologique",
            "Acetamipride (Mospilan 20 SP) : neonicotinoide. 0,25-0,5 kg/ha. Action systemique sur adultes et nymphes. Attention : resistances frequentes du biotype Q. A utiliser avec parcimonie et en alternance",
            "Pymethrozine (Fulfill, Chess 50 WG) : pyridine azomethine. Action anti-appetante specifique des hemipteres piqueurs-suceurs. 0,4 kg/ha. L'insecte cesse de s'alimenter et meurt de faim en 24-72 h. Bonne selectivite pour les auxiliaires",
            "Flupyradifurone (Sivanto Prime 200 SL) : butenolide. Neonicotinoide de nouvelle generation. Action systemique. 0,5-0,75 L/ha. Meilleur profil de selectivite que les anciens neonicotinoides (moins toxique pour les abeilles). Efficace sur biotype Q",
            "IMPORTANT - Strategie anti-resistance : alterner OBLIGATOIREMENT les familles chimiques a chaque application. Programme type pour 8 semaines : spiromesifene -> pyriproxyfene -> cyantraniliprole -> savon potassique -> spirotetramate -> pymethrozine -> Beauveria -> spiromesifene. Ne jamais appliquer deux fois de suite le meme mode d'action"
        ],
        mecanique: [
            "Piegeage de masse avec panneaux jaunes englues : installer 20 a 40 panneaux jaunes colles (25x40 cm) par 1 000 m2 de serre, a hauteur de la canopee. Les adultes sont attires par la couleur jaune et restent colles. Renouveler les panneaux toutes les 2-3 semaines",
            "Aspiration des adultes avec un aspirateur a insectes (Bug-Vac) : passer l'aspirateur sur le dessus des plants aux heures fraiches du matin quand les adultes sont moins mobiles. Methode complementaire pour reduire la pression",
            "Installation de filets anti-insectes de maille 50 mesh (10x20 fils/cm) sur tous les ouvrants. Verifier regulierement l'integrite des filets (reparation immediate des trous et dechirures)",
            "Effeuillage des feuilles les plus basses portant des nymphes agees et des pupariums : couper les feuilles et les mettre dans un sac plastique ferme avant de les sortir de la serre (pour eviter que les adultes emergent dans la serre)",
            "Sas d'entree a double porte avec rideau de lanieres plastiques et pediluve a l'entree de chaque serre",
            "Installation de bandes engluees bleues en complement des jaunes : les bandes bleues attirent specifiquement les thrips, liberant les jaunes pour la capture des aleurodes"
        ]
    },

    produits: [
        {
            nom: "Oberon 240 SC (Spiromesifene)",
            type: "Insecticide-acaricide anti-nymphes",
            matiere: "Spiromesifene 240 g/L",
            action: "Inhibiteur de la biosynthese des lipides (groupe IRAC 23). Action sur les stades immatures (oeufs et nymphes) par contact et ingestion. Perturbe la synthese des lipides necessaires a la formation de la cuticule lors des mues. Pas d'action directe sur les adultes. Tres selectif pour les auxiliaires (Encarsia, Eretmocerus, Macrolophus).",
            application: "0,4 a 0,6 L/ha en pulverisation foliaire, en ciblant la face inferieure des feuilles. Volume de bouillie : 800-1 200 L/ha pour une bonne couverture. Appliquer des l'apparition des premieres nymphes. Renouveler apres 14 jours si necessaire. Maximum 2 applications par cycle.",
            precautions: "DAR : 3 jours. Compatible avec la lutte biologique (epargne Encarsia et Macrolophus). Pas de resistance croisee connue avec les neonicotinoides ou pyrethroides. Leger effet acaricide supplementaire (Tetranychus). Bien agiter avant emploi.",
            disponibleMaroc: true
        },
        {
            nom: "Movento 100 SC (Spirotetramate)",
            type: "Insecticide systemique ambimobile",
            matiere: "Spirotetramate 100 g/L",
            action: "Inhibiteur de la biosynthese des lipides (acide tetramique, groupe IRAC 23). Unique insecticide a double systemie (ascendante ET descendante = ambimobile). Apres application foliaire, le produit est transporte dans toute la plante via le xyleme et le phloeme, atteignant les nymphes cachees sur la face inferieure des feuilles. Efficace sur nymphes de tous stades.",
            application: "0,75 a 1 L/ha en pulverisation foliaire. Volume de bouillie : 600-1 000 L/ha. Appliquer au stade nymphal (pas d'effet sur les adultes). Renouveler apres 14-21 jours. Maximum 2 applications par cycle. Ajouter un adjuvant pour ameliorer la penetration foliaire.",
            precautions: "DAR : 3 jours. Bonne selectivite pour la plupart des auxiliaires. Action lente (visible apres 5-7 jours). A associer avec un adulte-cide (pymethrozine, cyantraniliprole) en cas de forte pression adulte.",
            disponibleMaroc: true
        },
        {
            nom: "Admiral 10 EC (Pyriproxyfene)",
            type: "Regulateur de croissance des insectes (IGR)",
            matiere: "Pyriproxyfene 100 g/L",
            action: "Mimetique de l'hormone juvenile (groupe IRAC 7C). Perturbe le developpement nymphal et empeche la metamorphose en adulte. Les nymphes traitees ne se transforment pas en adultes viables. Effet ovicide : reduit l'eclosion des oeufs. Aucune action directe sur les adultes. Tres specifique, excellent profil de selectivite pour les auxiliaires.",
            application: "0,5 a 0,75 L/ha en pulverisation foliaire sur la face inferieure des feuilles. Volume de bouillie : 600-1 000 L/ha. Appliquer sur les stades nymphaux jeunes (N1-N2) pour une efficacite maximale. Renouveler apres 14-21 jours. Maximum 2 applications par cycle.",
            precautions: "DAR : 7 jours. N'agit PAS sur les adultes deja formes. A combiner avec un produit adulticide en cas de forte pression. Tres compatible avec Encarsia et Eretmocerus (ne perturbe pas le parasitisme). Toxique pour les organismes aquatiques.",
            disponibleMaroc: true
        },
        {
            nom: "Benevia OD (Cyantraniliprole)",
            type: "Insecticide diamide a large spectre",
            matiere: "Cyantraniliprole 100 g/L",
            action: "Diamide anthranilic (groupe IRAC 28). Active les recepteurs de la ryanodine, provoquant une contraction musculaire permanente et la paralysie. Action sur adultes, nymphes et oeufs par contact et ingestion. Activite translaminiaire. Efficace contre Bemisia tabaci biotype Q resistant aux neonicotinoides.",
            application: "0,5 a 0,75 L/ha en pulverisation foliaire. Volume de bouillie : 600-1 000 L/ha. Appliquer des les premieres detections d'adultes ou de nymphes. Renouveler apres 10-14 jours. Maximum 3 applications par cycle cultural.",
            precautions: "DAR : 1 jour. Profil favorable pour les auxiliaires (Encarsia, Macrolophus) a dose normale. Toxique pour les abeilles en floraison : ne pas appliquer pendant la pollinisation active. Efficace aussi contre Tuta absoluta et les thrips.",
            disponibleMaroc: true
        },
        {
            nom: "Sivanto Prime 200 SL (Flupyradifurone)",
            type: "Insecticide systemique butenolide",
            matiere: "Flupyradifurone 200 g/L",
            action: "Butenolide, agoniste des recepteurs nicotiniques de l'acetylcholine (groupe IRAC 4D). Nouvelle generation de neonicotinoide avec un meilleur profil de selectivite. Action systemique par absorption foliaire et racinaire. Efficace sur adultes et nymphes. Maintient son efficacite contre les populations de biotype Q resistantes aux anciens neonicotinoides.",
            application: "0,5 a 0,75 L/ha en pulverisation foliaire ou en application par goutte-a-goutte (0,75 L/ha). Volume de bouillie en foliaire : 600-1 000 L/ha. Renouveler apres 7-14 jours. Maximum 3 applications par cycle.",
            precautions: "DAR : 1 jour. Moins toxique pour les abeilles que les anciens neonicotinoides, mais rester prudent en floraison. A alterner avec d'autres familles chimiques. Efficace aussi contre les pucerons.",
            disponibleMaroc: true
        },
        {
            nom: "Naturalis-L (Beauveria bassiana)",
            type: "Bioinsecticide a base de champignon entomopathogene",
            matiere: "Beauveria bassiana souche ATCC 74040, 2,3 x 10^7 spores/mL",
            action: "Les spores du champignon se deposent sur la cuticule de l'insecte (nymphes et adultes), germent et penetrent a travers la cuticule. Le mycelium se developpe a l'interieur de l'insecte, le tuant en 3 a 7 jours. Le cadavre sporule et contamine les insectes voisins. Efficace sur nymphes et adultes de mouches blanches.",
            application: "1,5 a 2 L/ha en pulverisation foliaire, en ciblant la face inferieure des feuilles. Appliquer en soiree (les UV degradent les spores). Humidite relative > 70 % souhaitee pour la germination des spores. Renouveler tous les 5 a 7 jours en periode de forte pression. Compatible avec la plupart des insecticides (sauf les fongicides systemiques).",
            precautions: "DAR : 0 jour (utilisable jusqu'a la recolte). Compatible avec l'agriculture biologique. Compatible avec les auxiliaires (Encarsia, Macrolophus). Efficacite reduite par temps sec et chaud (< 60 % HR). Stocker au frais (4-8 degres C). A utiliser en complements d'autres methodes.",
            disponibleMaroc: true
        },
        {
            nom: "Pieges jaunes englues",
            type: "Piege chromatique pour surveillance et piegeage de masse",
            matiere: "Panneaux plastiques jaunes recouverts de colle entomologique",
            action: "Les adultes de mouches blanches sont fortement attires par la couleur jaune (phototactisme positif). Ils se posent sur le panneau et restent pieges par la colle. Utilisation double : surveillance (comptage des captures pour evaluer la pression) et piegeage de masse (reduction directe de la population adulte).",
            application: "Surveillance : 1 piege par 200 m2, suspendu a hauteur de la tete des plants. Compter les captures chaque semaine. Seuil d'alerte : > 5-10 adultes/piege/semaine. Piegeage de masse : 20-40 pieges par 1 000 m2, espaces regulierement dans la culture. Renouveler les pieges toutes les 2-3 semaines ou quand la surface est saturee.",
            precautions: "Les pieges jaunes capturent aussi des auxiliaires (Encarsia, syrphes). En presence de lutte biologique, limiter le nombre de pieges et les positionner en peripherie de la serre. Choisir des pieges de qualite avec une colle resistante aux temperatures elevees.",
            disponibleMaroc: true
        }
    ],

    points_cles: [
        "La mouche blanche est dangereuse principalement comme VECTEUR DU TYLCV. Un seul insecte virulifere peut infecter un plant en quelques minutes de piqure. La priorite absolue est d'EMPECHER L'ENTREE des adultes dans la serre par des filets anti-insectes (maille 50 mesh minimum) et un sas d'entree a double porte.",
        "Les VARIETES TOLERANTES AU TYLCV (genes Ty-1/Ty-2/Ty-3) sont incontournables au Maroc. Elles ne sont pas immunes mais reduisent considerablement les symptomes et les pertes. Combinez toujours variete tolerante + filet + lutte integree.",
        "Le BIOTYPE Q de Bemisia tabaci, dominant au Maroc, est RESISTANT aux neonicotinoides (imidaclopride, thiamethoxame) et aux pyrethroides. Privilegiez les insecticides de nouvelles familles : spiromesifene (IRAC 23), cyantraniliprole (IRAC 28), pyriproxyfene (IRAC 7C), pymethrozine (IRAC 9B). Alternez OBLIGATOIREMENT les modes d'action.",
        "La LUTTE BIOLOGIQUE avec Eretmocerus mundus (parasitoide), Macrolophus pygmaeus (predateur) et Beauveria bassiana (champignon) est efficace et durable. Elle est particulierement adaptee aux serres du Souss-Massa ou les conditions climatiques favorisent les auxiliaires. Cependant, elle demande de la patience (4-6 semaines pour voir les effets) et une reduction drastique des traitements chimiques a large spectre.",
        "Le VIDE SANITAIRE entre deux cycles est la mesure la plus sous-estimee. Minimum 2 a 4 semaines sans aucune plante vivante dans et autour de la serre. Cela rompt le cycle de la mouche blanche et elimine le reservoir viral. Au Souss-Massa, le vide sanitaire est OBLIGATOIRE et reglemente par l'ONSSA."
    ],

    protocole_traitement: {
        titre: "Protocole de lutte integree contre la mouche blanche",
        etapes: [
            {
                titre: "Etape 1 : Protection physique de la serre (avant plantation)",
                description: "Installer des filets anti-insectes de maille 50 mesh (10x20 fils/cm) sur TOUS les ouvrants (lateraux, faitieres). Amenager un sas d'entree a double porte avec rideau de lanieres plastiques. Verifier l'etancheite de la serre : reparer tous les trous dans le plastique. Installer 1 piege jaune englue par 200 m2 pour la surveillance. Desherber autour de la serre dans un rayon de 20-50 metres. Respecter le vide sanitaire : aucune plante vivante dans la serre pendant 2-4 semaines avant plantation."
            },
            {
                titre: "Etape 2 : Plantation protegee (jour de plantation)",
                description: "Utiliser une variete tolerante au TYLCV (genes Ty-1/Ty-2/Ty-3). Verifier les plants de pepiniere : examiner la face inferieure des feuilles a la loupe, rejeter tout lot infeste. Optionnel mais recommande : tremper les mottes dans une solution d'imidaclopride ou de cyantraniliprole avant plantation pour une protection systemique de 3-4 semaines. Installer du paillage plastique reflechissant (argente) au sol. En lutte biologique : introduire Macrolophus pygmaeus (1-2/m2) des la plantation."
            },
            {
                titre: "Etape 3 : Surveillance hebdomadaire (pendant toute la culture)",
                description: "Compter les adultes captures sur les pieges jaunes chaque semaine. Seuil d'alerte : > 5 adultes/piege/semaine. Examiner la face inferieure des feuilles du tiers superieur (adultes) et du tiers median (nymphes) sur 20-30 plants par serre. Verifier la presence de miellat et de fumagine. Surveiller les symptomes de TYLCV (enroulement des feuilles vers le haut, nanisme, jaunissement). Si TYLCV detecte : arracher immediatement le plant infecte et le detruire dans un sac ferme."
            },
            {
                titre: "Etape 4 : Interventions ciblees (des le depassement du seuil)",
                description: "En lutte biologique : renforcer les lachers de parasitoides (Eretmocerus mundus 3-6/m2 toutes les 2 semaines). Appliquer Beauveria bassiana (1,5-2 L/ha) en soiree. En lutte chimique : alterner les familles. Programme sur 8 semaines : S1 spiromesifene (Oberon, nymphes) -> S3 pyriproxyfene (Admiral, IGR) -> S5 cyantraniliprole (Benevia, adultes+nymphes) -> S7 spirotetramate (Movento, nymphes). Inserer des applications de savon potassique ou Beauveria entre les chimiques. TOUJOURS cibler la face inferieure des feuilles."
            },
            {
                titre: "Etape 5 : Fin de cycle et prevention du cycle suivant",
                description: "En fin de culture : traiter les plants encore en place avec un insecticide de contact (pymethrozine ou savon potassique) pour tuer le maximum d'adultes AVANT l'arrachage. Arracher les plants le matin quand les adultes sont peu mobiles. Fermer la serre et la laisser chauffer 2-3 jours (solarisation naturelle) pour tuer les insectes restants. Puis aerer et commencer le vide sanitaire (2-4 semaines). Desherber autour de la serre. Analyser le programme de lutte du cycle passe et ajuster pour le suivant."
            }
        ]
    },

    faq: [
        {
            question: "Comment faire la difference entre Bemisia tabaci et Trialeurodes vaporariorum ?",
            reponse: "Plusieurs criteres permettent de les distinguer : (1) Position des ailes au repos : chez Bemisia, les ailes sont inclinees en toit (comme un V vu de derriere), laissant visible le corps jaunatre. Chez Trialeurodes, les ailes sont a plat, paralleles au corps, couvrant entierement le corps. (2) Taille : Bemisia est plus petite (1-1,2 mm) que Trialeurodes (1,5-2 mm). (3) Couleur : Bemisia est plus jaunatre, Trialeurodes est plus blanche. (4) Pupariums : ceux de Bemisia sont lisses et aplatis, ceux de Trialeurodes sont bordes de soies cireuses dressees formant une couronne. L'identification precise necessite une observation a la loupe binoculaire. Au Maroc, en dessous de 800 m d'altitude, c'est presque toujours Bemisia tabaci."
        },
        {
            question: "Les varietes tolerantes au TYLCV sont-elles suffisantes pour se proteger du virus ?",
            reponse: "Non, les varietes tolerantes (genes Ty) ne sont PAS immunes. Elles peuvent etre infectees par le virus mais expriment des symptomes attenues et maintiennent une production acceptable. Cependant : (1) les plants tolerants infectes servent de reservoir viral et la mouche blanche peut transmettre le virus a des parcelles voisines plantees en varietes sensibles. (2) Sous tres forte pression virale, meme les varietes tolerantes peuvent montrer des pertes de 10-20 %. (3) De nouvelles souches de TYLCV pourraient contourner les resistances Ty. Les varietes tolerantes doivent TOUJOURS etre combinees avec des filets anti-insectes, un vide sanitaire et un programme de lutte contre la mouche blanche."
        },
        {
            question: "Le biotype Q de Bemisia est-il vraiment resistant a tous les insecticides ?",
            reponse: "Non, le biotype Q (MED) n'est pas resistant a TOUS les insecticides, mais il a developpe des resistances significatives aux neonicotinoides de premiere generation (imidaclopride, thiamethoxame) et aux pyrethroides (bifenthrine, lambda-cyhalothrine). En revanche, il reste sensible aux : spiromesifene (Oberon), cyantraniliprole (Benevia), pyriproxyfene (Admiral), spirotetramate (Movento), pymethrozine (Chess), flupyradifurone (Sivanto), et aux agents biologiques (Beauveria, parasitoides). La cle est d'ALTERNER les modes d'action et de ne JAMAIS utiliser le meme produit deux fois de suite. Les groupes IRAC 23, 28, 7C et 9B sont les plus fiables contre le biotype Q."
        },
        {
            question: "La lutte biologique est-elle applicable dans les serres du Souss-Massa ?",
            reponse: "Oui, la lutte biologique est non seulement applicable mais particulierement bien adaptee au Souss-Massa. Les conditions climatiques (temperatures moderees a chaudes, forte luminosite) favorisent les auxiliaires. Macrolophus pygmaeus et Nesidiocoris tenuis s'etablissent bien dans les serres canariennes. Eretmocerus mundus est tres efficace contre Bemisia. Beauveria bassiana fonctionne bien avec l'humidite nocturne. Cependant, la lutte biologique exige : (1) de la patience (4-6 semaines pour voir les resultats), (2) une reduction drastique des insecticides a large spectre qui tuent les auxiliaires, (3) une tolerance aux faibles populations de mouches blanches en debut de programme (les auxiliaires ont besoin de proies pour se maintenir). De nombreux producteurs du Souss-Massa ont adopte avec succes la lutte biologique, souvent en complementd'insecticides selectifs (pyriproxyfene, spiromesifene)."
        }
    ],

    ressources: [
        "INRA Maroc - Programme de lutte integree contre Bemisia tabaci et le TYLCV dans le Souss-Massa",
        "ONSSA - Reglementation du vide sanitaire et mesures de lutte obligatoires contre la mouche blanche au Maroc",
        "Navas-Castillo J. et al. (2011) - Emerging virus diseases transmitted by whiteflies. Annual Review of Phytopathology 49:219-248",
        "De Barro P.J. et al. (2011) - Bemisia tabaci: a statement of species status. Annual Review of Entomology 56:1-19",
        "Gerling D. & Mayer R.T. (1996) - Bemisia 1995: Taxonomy, Biology, Damage, Control and Management. Intercept Ltd",
        "Stansly P.A. & Naranjo S.E. (2010) - Bemisia: Bionomics and Management of a Global Pest. Springer. Reference mondiale sur Bemisia",
        "IAV Hassan II - Cours d'entomologie appliquee : les aleurodes des cultures maraicheres au Maroc",
        "EPPO - Fiche de donnees sur les organismes nuisibles : Bemisia tabaci et virus associes",
        "Horowitz A.R. et al. (2020) - Insecticide resistance and its management in Bemisia tabaci species. Journal of Pest Science 93:893-910",
        "FAO - Guide de lutte integree contre les ravageurs de la tomate sous serre en region mediterraneenne"
    ]
};
