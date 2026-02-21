const MALADIE_NOCTUELLES = {
    id: "noctuelles",
    nom: "Noctuelles de la tomate",
    nomScientifique: "Helicoverpa armigera, Spodoptera exigua, Spodoptera littoralis, Autographa gamma",
    type: "ravageur",
    emoji: "\ud83e\udda0",
    resumeCourt: "Les noctuelles sont des papillons de nuit dont les chenilles causent des degats majeurs sur la tomate, en devorant les feuilles, les tiges et surtout les fruits. Helicoverpa armigera (noctuelle de la tomate) est l'espece la plus nuisible : ses chenilles perforent les fruits en cours de maturation, les rendant invendables. Au Maroc, les noctuelles peuvent provoquer 20 a 60 % de pertes de recolte en l'absence de lutte, avec des pics d'activite en ete et en automne.",
    cultures: ["Tomate", "Tomate cerise", "Tomate sous serre", "Tomate plein champ", "Cultures maraicheres"],

    presentation: {
        description: "Les noctuelles (famille des Noctuidae) constituent un groupe de lepidopteres (papillons de nuit) dont les larves (chenilles) sont parmi les ravageurs les plus polyphages et les plus destructeurs des cultures maraicheres et agricoles. Quatre especes sont particulierement nuisibles a la tomate au Maroc :\n\n- Helicoverpa armigera (Hubner) : la noctuelle de la tomate (= Heliothis armigera). C'est l'espece la plus devastatrice. Ses chenilles penetrent dans les fruits et les devourent de l'interieur, provoquant des pertes directes et des pourritures secondaires.\n- Spodoptera littoralis (Boisduval) : le ver du coton ou prodenia. Chenilles gregaires au jeune age, defoliatrices voraces. Espece tres polyphage, migratrice et difficile a controler.\n- Spodoptera exigua (Hubner) : la noctuelle exigue ou petit prodenia. Plus petite que S. littoralis mais tres nuisible en serre, notamment dans le Souss-Massa.\n- Autographa gamma (Linnaeus) : la noctuelle gamma. Reconnaissable a la tache argentee en forme de gamma sur les ailes anterieures de l'adulte. Chenilles arpenteuses defoliatrices.\n\nLes adultes sont des papillons nocturnes de 30 a 45 mm d'envergure, de coloration grise a brune, qui pondent sur les feuilles et les fruits de la tomate. Les chenilles traversent 5 a 6 stades larvaires en 2 a 4 semaines, atteignant 30 a 40 mm de long. Elles se nymphosent dans le sol.",

        importance: "Ravageurs majeurs de la tomate au Maroc, en particulier Helicoverpa armigera qui est consideree comme la noctuelle la plus nuisible aux cultures maraicheres dans le monde. Les pertes directes (fruits perfores) varient de 20 a 60 % selon les annees et les regions. Les degats sont particulierement graves car ils affectent directement les fruits, rendant la production invendable.",

        historique: "Helicoverpa armigera est un ravageur cosmopolite signale sur tomate depuis le debut de l'agriculture intensive. Au Maroc, cette espece a toujours ete presente, mais les degats se sont intensifies avec le developpement de la culture de tomate sous serre dans le Souss-Massa a partir des annees 1980.\n\nLa lutte contre les noctuelles a connu une evolution importante : l'utilisation massive de pyrethrinoides et d'organophosphores dans les annees 1980-1990 a conduit a l'apparition de resistances importantes chez H. armigera. L'introduction des insecticides a base de Bacillus thuringiensis (Bt) et le developpement de la confusion sexuelle par pheromones ont apporte des alternatives plus durables. Plus recemment, les diamides anthranilic (chlorantraniliprole, cyantraniliprole) et les spinosynes (spinosad, spinetoram) ont renouvele l'arsenal chimique avec des profils de selectivite bien meilleurs.",

        impact_economique: "Les pertes economiques causees par les noctuelles sont significatives :\n\n- Pertes directes sur fruits : 20 a 60 % de fruits perfores par H. armigera en l'absence de lutte. Chaque fruit perfore est invendable.\n- Defoliation par Spodoptera : reduction de la surface foliaire de 30 a 70 % en cas d'attaque severe, entrainant une baisse de rendement de 15 a 30 %.\n- Pourritures secondaires : les trous creuses par les chenilles dans les fruits sont des portes d'entree pour Botrytis, Alternaria et les bacteries, accelerant la pourriture.\n- Cout des traitements : 4 a 10 applications par cycle, soit 2 000 a 6 000 MAD/ha.\n- Cout du monitoring (pieges a pheromones) : 500 a 1 500 MAD/ha par saison.\n- Au Maroc, H. armigera est classee parmi les trois ravageurs les plus couteux de la tomate, avec Tuta absoluta et la mouche blanche."
    },

    origine: {
        agent: "Les noctuelles sont des lepidopteres de la famille des Noctuidae (sens large, incluant les Erebidae pour Spodoptera selon la classification recente). Caractéristiques des especes principales :\n\n- Helicoverpa armigera : adulte de 35-40 mm d'envergure, ailes anterieures brun-jaunatre chez le male, brun-rougeatre chez la femelle, avec une tache réniforme sombre. Chenille variable (verte, brune, rose, jaune) avec des bandes laterales claires et des microepines sur le tegument. Tres polyphage (tomate, poivron, mais, coton, pois chiche, haricot).\n\n- Spodoptera littoralis : adulte de 35-45 mm d'envergure, ailes anterieures gris-brun avec des stries ondulees. Chenille grise a noire avec des triangles sombres sur le dos et une ligne laterale jaune-orange. Tres gregaire au 1er stade.\n\n- Spodoptera exigua : adulte plus petit (25-30 mm), ailes anterieures grises avec une tache reniforme orangee. Chenille verte a gris-vert, plus petite que S. littoralis.\n\n- Autographa gamma : adulte de 35-40 mm, ailes anterieures brun-violet avec une tache argentee en forme de gamma (y). Chenille arpenteuse (se deplace en formant une boucle) verte avec des lignes blanches.",

        provenance: "Helicoverpa armigera est cosmopolite, presente dans toute l'Afrique, l'Europe meridionale, l'Asie et l'Oceanie. Spodoptera littoralis est Afrotropicale et mediterraneenne, tres repandue au Maroc. Au Maroc, ces especes sont presentes dans toutes les zones de production. Les populations sont soit residentes (cycle continu dans les zones chaudes comme le Souss-Massa), soit migratrices (arrivee de papillons depuis le sud au printemps-ete). L'inoculum provient des chrysalides hivernant dans le sol, des cultures voisines et des adventices.",

        cycle: "1. Hivernation : les noctuelles hivernent sous forme de chrysalides (nymphes) dans le sol a 5-15 cm de profondeur. Dans les regions chaudes du Maroc (Souss-Massa), le developpement peut etre continu toute l'annee sans veritable diapause. Dans les regions plus fraiches, la chrysalide entre en diapause en hiver.\n\n2. Emergence des adultes : les papillons emergent du sol a la tombee de la nuit. Ils sont strictement nocturnes. Les femelles emettent des pheromones sexuelles pour attirer les males. L'accouplement a lieu dans les heures suivant l'emergence.\n\n3. Ponte : la femelle pond 500 a 1 500 oeufs (H. armigera) ou 1 000 a 3 000 oeufs (Spodoptera) au cours de sa vie (10-20 jours). H. armigera pond ses oeufs isolement sur les feuilles, les tiges et les boutons floraux. Spodoptera pond en plaques (ooplaques) de 100 a 300 oeufs, souvent recouvertes d'ecailles abdominales duveteuses.\n\n4. Eclosion : les oeufs eclosent en 3 a 5 jours en ete (7-10 jours en conditions plus fraiches). Les jeunes chenilles de stade 1 (L1) mesurent 1-2 mm et sont tres mobiles.\n\n5. Developpement larvaire : les chenilles traversent 5 a 6 stades larvaires en 14 a 25 jours selon la temperature. Chez H. armigera, les jeunes chenilles (L1-L2) s'alimentent sur les feuilles et les boutons floraux, puis a partir du 3eme stade (L3), elles penetrent dans les fruits verts ou en cours de maturation et se nourrissent de l'interieur. Une seule chenille peut endommager 2 a 5 fruits successivement. Chez Spodoptera, les chenilles restent gregaires aux stades L1-L2 (squelettisent les feuilles), puis se dispersent et deviennent solitaires et voraces a partir de L3.\n\n6. Nymphose : la chenille mature quitte la plante et s'enfonce dans le sol a 5-15 cm de profondeur pour se transformer en chrysalide (pupe). La nymphose dure 10 a 20 jours en ete, plus longtemps en hiver ou en diapause.\n\n7. Generations : H. armigera peut produire 3 a 5 generations par an au Maroc. Spodoptera littoralis peut en produire 5 a 7 dans les regions chaudes. Le chevauchement des generations rend les populations quasi continues de mars a novembre.",

        propagation: [
            "Vol nocturne des adultes : les papillons sont de bons voiliers capables de parcourir plusieurs kilometres en une nuit, colonisant de nouvelles parcelles",
            "Migration a longue distance : H. armigera et S. littoralis sont des especes migratrices. Des vagues de papillons arrivent du sud (Sahara, Sahel) au printemps avec les vents chauds",
            "Chrysalides dans le sol : les chrysalides hivernantes dans le sol de la parcelle constituent la source d'infestation primaire a chaque nouveau cycle",
            "Plantes adventices et cultures voisines : les noctuelles sont tres polyphages et se maintiennent sur de nombreuses plantes cultivees et sauvages autour des parcelles",
            "Lumiere artificielle : les eclairages nocturnes (serres, routes) attirent les adultes et peuvent concentrer les populations",
            "Plants de pepiniere : les oeufs ou jeunes chenilles peuvent etre introduces avec les plants (rare mais possible)",
            "Absence de labour entre deux cultures : les chrysalides dans le sol ne sont pas detruites"
        ]
    },

    facteurs: {
        climatiques: [
            "Temperatures chaudes (optimum 25-30 degres C pour le developpement larvaire). Le cycle est accelere en ete : une generation complete en 30-35 jours",
            "Nuits douces sans gel favorisant la survie des chrysalides hivernantes et l'activite de vol des adultes",
            "Periodes seches : les noctuelles sont favorisees par le temps sec et chaud. Les pluies fortes reduisent les populations (mortalite des jeunes chenilles)",
            "Ete et automne : pics de population au Maroc, coincidant avec la maturation des fruits de tomate",
            "Absence de froid hivernal dans les regions cotieres : cycle continu sans interruption dans le Souss-Massa",
            "Vents du sud (chergui) au printemps : apportent des populations migratrices depuis le Sahara"
        ],
        sol: [
            "Sols meubles, sableux ou sablo-limoneux : facilitent l'enfouissement des chenilles pour la nymphose et l'emergence des adultes",
            "Sols non travailles entre deux cultures : les chrysalides survivent dans le sol et donnent la generation suivante",
            "Sols irrigues : maintiennent une humidite suffisante pour la survie des chrysalides (la secheresse extreme du sol peut tuer les chrysalides)",
            "Paillage plastique : peut empecher l'enfouissement des chenilles pour la nymphose (effet positif) mais aussi empecher la destruction des chrysalides par le labour (effet negatif)"
        ],
        pratiques: [
            "Monoculture de tomate ou succession de cultures sensibles (poivron, aubergine, mais, haricot) sans interruption",
            "Absence de surveillance des populations (pas de pieges a pheromones) : les infestations sont detectees trop tard, quand les fruits sont deja perfores",
            "Traitements insecticides tardifs : les chenilles penetrent dans les fruits des le stade L3, apres quoi elles sont protegees des traitements de contact",
            "Utilisation repetee des memes insecticides (pyrethroides) favorisant les resistances chez H. armigera",
            "Eclairage nocturne intense autour ou dans les serres attirant les papillons adultes",
            "Non-elimination des adventices et des residus de culture servant de refuge aux noctuelles",
            "Pas de labour profond entre deux cycles pour detruire les chrysalides dans le sol",
            "Portes et ouvrants de serre non proteges par des filets, permettant l'entree des papillons la nuit"
        ],
        erreurs: [
            "Attendre de voir des fruits perfores pour intervenir : a ce stade, les chenilles sont deja a l'interieur des fruits et impossibles a atteindre par les traitements de contact",
            "Traiter en plein jour quand les chenilles agees sont cachees dans les fruits ou sous le feuillage : les traitements sont plus efficaces le soir ou tot le matin quand les chenilles s'alimentent activement sur le feuillage",
            "Confondre les degats de H. armigera (trou rond dans le fruit avec excrements) avec ceux de Tuta absoluta (galeries dans les feuilles et mines dans les fruits) : les strategies de lutte sont differentes",
            "Utiliser uniquement des pyrethroides : H. armigera a developpe des resistances elevees aux pyrethroides au Maroc. Privilegier les diamides et les spinosynes",
            "Negliger les pieges a pheromones pour la surveillance : ils permettent de detecter l'arrivee des vols d'adultes et de declencher les traitements au bon moment",
            "Ne pas labourer entre deux cultures : les chrysalides dans le sol survivent et infestent la culture suivante",
            "Croire que les filets anti-insectes contre la mouche blanche arretent les noctuelles : les papillons de nuit sont plus gros mais passent par les portes ouvertes et les trous dans les filets"
        ]
    },

    symptomes: {
        feuilles: "STADE INITIAL :\nPresence de petites zones grignotees sur les jeunes feuilles du sommet (degats des chenilles L1-L2 de H. armigera). Chez Spodoptera, les jeunes chenilles squelettisent les feuilles en ne laissant que les nervures principales (fenestration = feuilles en dentelle). Des oeufs isoles (H. armigera : oeufs spheriques, 0,5 mm, blancs puis brunissant) ou des ooplaques recouvertes de duvet (Spodoptera) sont visibles sur la face inferieure des feuilles.\n\nSTADE INTERMEDIAIRE :\nDes zones de defoliation plus importantes apparaissent. Les chenilles de stade L3-L4, mesurant 15-25 mm, sont visibles sur les feuilles en debut et fin de journee. Des excrements (crottes noires granuleuses) sont presents sur les feuilles et au sol sous les plants. Chez H. armigera, les chenilles commencent a s'attaquer aux boutons floraux et aux jeunes fruits.\n\nSTADE AVANCE :\nDefoliation severe par Spodoptera (50 a 80 % du feuillage devore). Les grosses chenilles (L5-L6, 30-40 mm) sont voraces et peuvent devorer une feuille entiere en une nuit. Chez H. armigera, les fruits sont perfores, avec des trous ronds de 5-10 mm de diametre. La chenille est partiellement ou totalement enfoncee dans le fruit. Des excrements brun-noir sont visibles autour et dans le trou. Les fruits perfores pourrissent rapidement (infection secondaire par Botrytis, Alternaria).",

        tiges: "Les tiges sont rarement la cible principale des noctuelles sur tomate. Cependant, les jeunes chenilles de Spodoptera peuvent ronger l'ecorce des tiges tendres au niveau de la base des petioles, causant des lesions superficielles. Chez H. armigera, les chenilles peuvent occasionnellement percer les tiges principales pres des noeuds, provoquant un fletrissement de la partie superieure. Les Agrotis (vers gris), bien que moins frequents sur tomate, peuvent sectionner les tiges des plantules au ras du sol en pepiniere.",

        fruits: "C'est le symptome LE PLUS IMPORTANT et le plus couteux economiquement, cause principalement par Helicoverpa armigera :\n\n- Trous d'entree : perforation ronde de 3 a 10 mm de diametre, generalement pres du calice ou dans la zone equatoriale du fruit. La chenille s'enfonce partiellement ou totalement dans le fruit.\n- Excrements : des crottes granuleuses brun-noir sont visibles autour du trou d'entree et a l'interieur du fruit.\n- Galeries internes : la chenille creuse des galeries dans la chair du fruit en se nourrissant. Les graines et le placenta sont souvent consommes.\n- Pourriture secondaire : les champignons (Botrytis cinerea, Alternaria spp.) et les bacteries colonisent rapidement le fruit perfore, provoquant une pourriture molle et malodorante.\n- Plusieurs fruits atteints : une seule chenille peut perforer 2 a 5 fruits successivement avant de se nymphoser.\n- Les fruits verts et en debut de viraison sont les plus attaques.",

        racines: "Les racines ne sont pas directement attaquees par les chenilles de noctuelles. Cependant, les chenilles matures descendent dans le sol pour se nymphoser (former leur chrysalide) a 5-15 cm de profondeur. Les chrysalides sont des cocons bruns, lisses, de 15-20 mm de long, visibles lors du labour. Les Agrotis (vers gris) peuvent endommager les racines superficielles et le collet des plantules, mais ce n'est pas le cas des Helicoverpa et Spodoptera.",

        stade: "Les noctuelles peuvent attaquer la tomate a tous les stades, mais les periodes les plus critiques sont :\n\n- Stade vegetatif (3-6 semaines apres plantation) : defoliation par Spodoptera, qui peut compromettre la croissance si elle est severe.\n- Floraison : H. armigera s'attaque aux boutons floraux, entrainant une coulure florale et une reduction de la nouaison.\n- Fructification (principal) : H. armigera perfore les fruits des le stade fruit vert. Les degats s'intensifient a mesure que les fruits grossissent et murissent.\n\nAu Maroc, les pics d'infestation coincident avec les periodes chaudes :\n- Juin-aout : pic estival de H. armigera\n- Septembre-novembre : pic automnal, souvent le plus intense car coincidant avec la maturation des fruits de tomate d'arriere-saison\n- Cycle continu dans le Souss-Massa (3-5 generations/an)",

        differenciation: "Tuta absoluta : les chenilles de Tuta sont BEAUCOUP plus petites (max 7-8 mm), vert clair, et creusent des MINES (galeries translucides) dans les feuilles. Dans les fruits, Tuta fait des galeries superficielles sous l'epiderme, tandis que H. armigera perfore profondement dans la chair avec un trou d'entree net.\nPyrale du mais (Ostrinia) : chenilles rosatres dans les tiges, rarement sur tomate.\nPunaises (Nezara) : piqures de nutrition sur fruits causant des zones blanchatres et liégeuses, pas de trous de penetration.\nOiseaux : coups de bec irreguliers sur fruits murs, sans excrements ni chenille presente.\nLimaces : traces argentees de mucus, degats avec bords lisses (pas de crottes granuleuses)."
    },

    lutte: {
        prevention: [
            "Installer des pieges a pheromones sexuelles specifiques pour chaque espece (H. armigera, S. littoralis, S. exigua) a raison de 2-3 pieges par hectare, releves chaque semaine. Seuil de declenchement des traitements : 5-10 captures/piege/semaine pour H. armigera",
            "Labourer profondement (25-30 cm) entre deux cycles de culture pour detruire les chrysalides hivernant dans le sol. Un labour en ete suivi d'une exposition au soleil (assec) est particulierement efficace",
            "Proteger les serres avec des filets anti-insectes de maille suffisante (maille 6x6 mm ou plus fine) et fermer les portes la nuit pour empecher l'entree des papillons nocturnes",
            "Eteindre ou reduire les eclairages nocturnes a proximite des serres : la lumiere attire les papillons adultes",
            "Eliminer les adventices et les residus de culture autour des parcelles : ils servent de refuge et de nourriture alternative pour les noctuelles",
            "Pratiquer la rotation culturale : eviter la succession de cultures sensibles (tomate, poivron, mais, haricot) sans interruption",
            "Installer des bandes refuges de plantes-pieges (mais doux, sorgho, tournesol) en peripherie de la parcelle : elles attirent les adultes qui y pondent preferentiellement, permettant des traitements localises",
            "Inspecter les plants de pepiniere a la reception pour detecter la presence d'oeufs ou de jeunes chenilles sur le feuillage",
            "Favoriser les ennemis naturels : haies bocageres, bandes fleuries et nichoirs a chauves-souris (grandes consommatrices de papillons nocturnes). Les Trichogrammes (micro-guepes parasitoides des oeufs) sont presents naturellement dans les ecosystemes diversifies",
            "Utiliser des varietes de tomate a fruits fermes et a peau epaisse, moins facilement perforees par les jeunes chenilles",
            "Recolter les fruits des qu'ils atteignent le stade breaker (debut de viraison) pour reduire le temps d'exposition aux noctuelles"
        ],
        biologique: [
            "Bacillus thuringiensis var. kurstaki (Btk) : bioinsecticide de reference contre les chenilles de lepidopteres. Pulverisation de 0,5 a 1 kg/ha (32 000 UI/mg) tous les 5 a 7 jours. Les chenilles qui ingerent le Bt cessent de s'alimenter en quelques heures et meurent en 2-3 jours. Efficace surtout sur les jeunes stades (L1-L3). Appliquer le soir (les UV degradent la toxine)",
            "Bacillus thuringiensis var. aizawai (Bta) : souche de Bt particulierement efficace contre Spodoptera spp. qui sont moins sensibles au Btk. 0,5 a 1 kg/ha tous les 5 a 7 jours",
            "Lachers de Trichogramma spp. (T. evanescens, T. pretiosum) : micro-guepes parasitoides des oeufs de noctuelles. Introduire 100 000 a 300 000 Trichogrammes par hectare, en 3 a 6 lachers espaces de 7 a 10 jours pendant la periode de vol des adultes. Les Trichogrammes pondent dans les oeufs de noctuelles, empechant l'eclosion des chenilles",
            "Virus de la polyedrose nucleaire de H. armigera (HaNPV = Helicoverpa armigera Nucleopolyhedrovirus) : biopesticide viral specifique. Les chenilles qui ingerent les particules virales sont infectees et meurent en 5 a 7 jours. Specifique a H. armigera, sans effet sur les autres organismes. 250 mL/ha (formulation commerciale type Helicovex)",
            "Lachers de Macrolophus pygmaeus : cette punaise predatrice, deja utilisee contre la mouche blanche et Tuta absoluta, consomme egalement les oeufs et les jeunes chenilles de noctuelles. Effet complementaire dans les programmes IPM sous serre",
            "Spinosad (Spintor, Success) : insecticide derive de la fermentation de Saccharopolyspora spinosa. Action par ingestion et contact sur les chenilles. 0,2-0,4 L/ha. Tres efficace contre toutes les especes de noctuelles. Compatible avec l'agriculture biologique (certifie AB). Respecter les auxiliaires en appliquant le soir",
            "Neem (azadirachtine) : insecticide vegetal a action anti-appetante et regulatrice de croissance. 3-5 mL/L en pulverisation. Perturbe les mues des chenilles. Action lente mais compatible avec la lutte biologique",
            "Piegeage de masse par pheromones : installer 20-30 pieges a pheromones par hectare pour capturer les males et reduire le taux d'accouplement. Completer avec des lachers de Trichogrammes pour un effet synergique"
        ],
        chimique: [
            "Chlorantraniliprole (Coragen 20 SC) : diamide anthranilic de reference contre les chenilles de lepidopteres. 0,15-0,20 L/ha. Active les recepteurs de la ryanodine, provoquant une paralysie musculaire. Action par ingestion et contact. Tres longue remanence (14-21 jours). Efficace sur tous les stades larvaires. Excellent profil de selectivite pour les auxiliaires",
            "Indoxacarbe (Avaunt 150 EC) : oxadiazine. 0,25-0,35 L/ha. Action par ingestion principalement. Les chenilles cessent de s'alimenter en 4 heures et meurent en 24-72 h. Bonne selectivite pour les auxiliaires. Efficace contre les populations resistantes aux pyrethroides",
            "Emamectine benzoate (Affirm 019,2 SG) : avermectine semi-synthetique. 1-1,5 kg/ha. Action par ingestion. Les chenilles cessent de s'alimenter quelques heures apres l'ingestion (paralysie irreversible). Tres efficace contre H. armigera, y compris les stades ages. Action translaminiaire",
            "Spinetoram (Delegate 250 WG) : spinosyne de deuxieme generation. 0,3-0,5 kg/ha. Plus efficace et plus persistant que le spinosad. Action par ingestion et contact. Efficace contre les noctuelles et Tuta absoluta. Appliquer le soir pour proteger les auxiliaires",
            "Methoxyfenozide (Runner 240 SC) : agoniste de l'ecdysone (hormone de mue). 0,4-0,6 L/ha. Provoque une mue prematuree et letale chez les chenilles. Tres specifique aux lepidopteres, epargne completement les auxiliaires, les abeilles et les predateurs. Ideal pour les programmes IPM",
            "Lambda-cyhalothrine (Karate Zeon 5 CS) : pyrethrinoide de synthese. 0,4-0,5 L/ha. Action rapide par contact et ingestion (knock-down). ATTENTION : resistances frequentes chez H. armigera au Maroc. A utiliser avec parcimonie et uniquement en alternance avec d'autres familles. Toxique pour les auxiliaires",
            "Teflubenzuron (Nomolt 150 SC) : inhibiteur de la synthese de chitine (IGR). 0,15-0,25 L/ha. Empeche la formation de la nouvelle cuticule lors des mues. Les chenilles meurent lors de la mue suivante. Tres specifique, excellent profil pour les auxiliaires. Plus efficace sur les jeunes stades",
            "STRATEGIE ANTI-RESISTANCE : alterner obligatoirement les modes d'action IRAC. Programme type : semaine 1 chlorantraniliprole (IRAC 28) -> semaine 3 emamectine (IRAC 6) -> semaine 5 indoxacarbe (IRAC 22A) -> semaine 7 Bt (IRAC 11) -> semaine 9 methoxyfenozide (IRAC 18). Ne jamais appliquer deux fois de suite le meme groupe IRAC"
        ],
        mecanique: [
            "Ramassage manuel des chenilles visibles sur les feuilles et les fruits, matin et soir, quand elles sont actives et facilement repérables. Methode efficace en petit jardin ou en complement dans les serres",
            "Pieges lumineux a UV (lampes a insectes) : installer des pieges lumineux en peripherie de la parcelle pour attirer et capturer les adultes nocturnes. Disposer les pieges a l'exterieur de la serre, pas a l'interieur (pour ne pas attirer les papillons vers la culture)",
            "Labour profond (25-30 cm) entre deux cycles de culture pour exposer les chrysalides a la surface du sol, ou elles sont dessechees par le soleil et predatees par les oiseaux et les carabides",
            "Filets de protection sur les serres : verifier et reparer les filets anti-insectes, fermer les portes la nuit. Les noctuelles adultes entrent principalement par les portes et les ouvertures non protegees",
            "Elimination des fruits perfores : retirer immediatement les fruits attaques et les detruire (bruler ou mettre dans un sac ferme). Les chenilles a l'interieur des fruits se nymphoseront si les fruits sont laisses au sol",
            "Baches au sol (paillage plastique) : empechent les chenilles matures de s'enfouir dans le sol pour se nymphoser, brisant partiellement le cycle"
        ]
    },

    produits: [
        {
            nom: "Coragen 20 SC (Chlorantraniliprole)",
            type: "Insecticide diamide anti-chenilles de reference",
            matiere: "Chlorantraniliprole 200 g/L",
            action: "Diamide anthranilic (groupe IRAC 28). Active les recepteurs de la ryanodine dans les cellules musculaires, provoquant une liberation massive de calcium et une contraction musculaire permanente (paralysie). Les chenilles cessent de s'alimenter en quelques heures. Action par ingestion (principale) et contact. Action ovicide partielle. Tres longue remanence (14-21 jours).",
            application: "0,15 a 0,20 L/ha en pulverisation foliaire. Volume de bouillie : 600-1 000 L/ha. Bien couvrir les fruits en formation. Appliquer des les premiers stades larvaires (L1-L2) ou preventivemment quand les pieges a pheromones depassent le seuil d'alerte. Maximum 2 applications par cycle.",
            precautions: "DAR : 3 jours. Excellent profil de selectivite : epargne les abeilles, les Trichogrammes, Macrolophus, Encarsia et la plupart des auxiliaires. Pas de resistance croisee avec les pyrethroides. Reference en lutte integree.",
            disponibleMaroc: true
        },
        {
            nom: "Affirm 019,2 SG (Emamectine benzoate)",
            type: "Insecticide avermectine anti-chenilles",
            matiere: "Emamectine benzoate 19,2 g/kg",
            action: "Avermectine semi-synthetique (groupe IRAC 6). Agit sur les canaux chlorure ligand-dependants (recepteurs GABA et glutamate). Provoque une paralysie musculaire irreversible par hyperpolarisation. Action principalement par ingestion. Les chenilles cessent de s'alimenter en 2-4 heures (meme si la mort survient en 2-4 jours). Action translaminiaire.",
            application: "1 a 1,5 kg/ha en pulverisation foliaire. Volume de bouillie : 600-1 000 L/ha. Appliquer le soir de preference. Tres efficace meme sur les chenilles de stades avances (L4-L5) de H. armigera. Renouveler apres 7-14 jours. Maximum 3 applications par cycle.",
            precautions: "DAR : 3 jours. Toxique pour les organismes aquatiques et les abeilles (ne pas appliquer en floraison active). Bonne selectivite pour Macrolophus et les Trichogrammes si applique le soir. Alterner avec les diamides pour prevenir les resistances.",
            disponibleMaroc: true
        },
        {
            nom: "Avaunt 150 EC (Indoxacarbe)",
            type: "Insecticide oxadiazine anti-chenilles",
            matiere: "Indoxacarbe 150 g/L",
            action: "Oxadiazine (groupe IRAC 22A). Bloque les canaux sodiques voltage-dependants des neurones, provoquant une paralysie. Pro-insecticide : active par les enzymes de l'insecte en metabolite DCJW, plus toxique que la molecule mere. Action par ingestion (principale) et contact. Les chenilles cessent de s'alimenter en 4 heures.",
            application: "0,25 a 0,35 L/ha en pulverisation foliaire. Volume de bouillie : 600-800 L/ha. Appliquer sur les jeunes stades larvaires pour une efficacite optimale. Renouveler apres 10-14 jours. Maximum 2-3 applications par cycle.",
            precautions: "DAR : 3 jours. Bonne selectivite pour les auxiliaires (action differee, epargne les auxiliaires a cuticule epaisse). Efficace contre les populations de H. armigera resistantes aux pyrethroides. Toxique pour les abeilles pendant les 3 heures suivant l'application (appliquer le soir).",
            disponibleMaroc: true
        },
        {
            nom: "Delfin WG (Bacillus thuringiensis var. kurstaki)",
            type: "Bioinsecticide bacterien specifique anti-chenilles",
            matiere: "Bacillus thuringiensis var. kurstaki souche SA-11, 32 000 UI/mg",
            action: "Les cristaux proteiques (delta-endotoxines Cry1Aa, Cry1Ab, Cry1Ac, Cry2A) sont ingeres par la chenille, solubilises dans l'intestin alcalin et perforent la paroi intestinale. La chenille cesse de s'alimenter en 1-2 heures et meurt de septicemie en 2-3 jours. Hautement specifique aux larves de lepidopteres. Aucune action sur les adultes, les abeilles, les predateurs ou les parasitoides.",
            application: "0,5 a 1 kg/ha en pulverisation foliaire. Volume de bouillie : 400-800 L/ha. Appliquer le soir (les UV degradent la toxine Bt). Renouveler tous les 5 a 7 jours. Cibler les jeunes stades (L1-L3) pour une efficacite maximale. Les chenilles agees (L5-L6) sont moins sensibles. Pas de limitation du nombre d'applications.",
            precautions: "DAR : 0 jour (utilisable jusqu'a la recolte). Compatible avec l'agriculture biologique. Aucune toxicite pour les mammiferes, les oiseaux, les poissons, les abeilles ou les auxiliaires. Action lente (2-3 jours) : ne pas s'attendre a un knock-down immediat. Efficacite reduite sur Spodoptera (preferer Bta ou spinosad).",
            disponibleMaroc: true
        },
        {
            nom: "Delegate 250 WG (Spinetoram)",
            type: "Insecticide spinosyne de nouvelle generation",
            matiere: "Spinetoram 250 g/kg",
            action: "Spinosyne de deuxieme generation (groupe IRAC 5). Derive de la fermentation de Saccharopolyspora spinosa. Active les recepteurs nicotiniques de l'acetylcholine et potentialise l'action du GABA. Action rapide par ingestion et contact. Plus persistant et plus efficace que le spinosad (1ere generation). Efficace contre noctuelles, Tuta absoluta, thrips.",
            application: "0,3 a 0,5 kg/ha en pulverisation foliaire. Volume de bouillie : 600-1 000 L/ha. Appliquer le soir pour proteger les auxiliaires et les pollinisateurs. Renouveler apres 7-10 jours. Maximum 3 applications par cycle.",
            precautions: "DAR : 1 jour. Toxique pour les abeilles pendant les 3 heures suivant l'application (appliquer le soir). Bonne selectivite pour Macrolophus, Encarsia et Trichogrammes apres sechage du depot. Alterner avec les diamides et les Bt.",
            disponibleMaroc: true
        },
        {
            nom: "Helicovex (HaNPV - Virus de la polyedrose nucleaire)",
            type: "Biopesticide viral specifique anti-Helicoverpa",
            matiere: "Helicoverpa armigera nucleopolyhedrovirus (HaNPV), 5 x 10^9 OB/mL",
            action: "Virus specifique d'Helicoverpa armigera. Les chenilles ingerent les corps d'inclusion polyedriques (OB) qui se dissolvent dans l'intestin alcalin, liberant les particules virales. Le virus infecte les cellules intestinales puis se propage a tous les tissus. La chenille cesse de s'alimenter en 24-48 h et meurt en 5-7 jours. Le cadavre se liquefie et libere des milliards de nouvelles particules virales qui contaminent les chenilles voisines.",
            application: "250 mL/ha en pulverisation foliaire. Appliquer le soir (les UV degradent le virus). Volume de bouillie : 300-600 L/ha. Cibler les jeunes stades (L1-L3). Renouveler apres 5-7 jours. Ajouter un protecteur UV (sucre, lait ecreme a 0,5 %) pour prolonger la persistance.",
            precautions: "DAR : 0 jour. Totalement specifique a H. armigera : aucun effet sur les autres insectes, les auxiliaires, les vertebres ou l'environnement. Efficacite dependante de la temperature (optimum 20-30 degres C). Action lente (5-7 jours). A combiner avec Bt pour un spectre plus large. Stocker au frais (4-8 degres C).",
            disponibleMaroc: true
        },
        {
            nom: "Runner 240 SC (Methoxyfenozide)",
            type: "Regulateur de croissance specifique anti-lepidopteres",
            matiere: "Methoxyfenozide 240 g/L",
            action: "Agoniste de l'ecdysone, l'hormone de mue des insectes (groupe IRAC 18). Provoque une mue prematuree, incomplete et letale chez les chenilles. La chenille forme une nouvelle cuticule alors que l'ancienne n'est pas completement eliminee, et meurt par blocage de la mue. Hautement specifique aux lepidopteres. Aucune action sur les autres ordres d'insectes.",
            application: "0,4 a 0,6 L/ha en pulverisation foliaire. Volume de bouillie : 600-800 L/ha. Appliquer sur les jeunes stades larvaires (L1-L3). Action lente (mort en 3-5 jours lors de la prochaine mue). Renouveler apres 10-14 jours. Maximum 2 applications par cycle.",
            precautions: "DAR : 7 jours. Profil ecotoxicologique EXCEPTIONNEL : aucune toxicite pour les abeilles, les auxiliaires, les predateurs, les parasitoides, les poissons et les mammiferes. Ideal pour les programmes IPM. La specificite aux lepidopteres est un avantage (epargne tout le reste) mais aussi une limite (pas d'effet sur les autres ravageurs).",
            disponibleMaroc: true
        }
    ],

    points_cles: [
        "Le MONITORING par pieges a pheromones est la CLE de la lutte contre les noctuelles. Installez 2-3 pieges specifiques par hectare (H. armigera + S. littoralis) et relevez-les chaque semaine. Le seuil de declenchement des traitements est de 5-10 captures/piege/semaine. Traiter AVANT que les chenilles ne penetrent dans les fruits.",
        "La PRECOCITE de l'intervention est determinante : les chenilles de H. armigera penetrent dans les fruits des le stade L3 (10-15 mm). Une fois a l'interieur, elles sont INACCESSIBLES aux traitements de contact. Intervenez sur les stades L1-L2 (premiers jours apres eclosion) quand les chenilles sont encore sur le feuillage.",
        "Le Bacillus thuringiensis (Bt) est le pilier de la lutte biologique : pas de DAR, pas de residus, pas d'effet sur les auxiliaires, pas de resistance connue chez H. armigera au Maroc. Appliquez le SOIR (UV), sur les JEUNES stades (L1-L3), et renouvelez tous les 5-7 jours. C'est l'insecticide ideal pour les programmes IPM.",
        "Les RESISTANCES aux pyrethroides sont generalisees chez H. armigera au Maroc. Privilegiez les diamides (chlorantraniliprole IRAC 28), les spinosynes (spinetoram IRAC 5), l'emamectine (IRAC 6) et l'indoxacarbe (IRAC 22A). Alternez OBLIGATOIREMENT les groupes IRAC a chaque application.",
        "Le LABOUR profond (25-30 cm) entre deux cycles detruit les chrysalides dans le sol et reduit la population de la generation suivante de 50 a 80 %. C'est une mesure mecanique simple, gratuite et tres efficace qui est trop souvent negligee."
    ],

    protocole_traitement: {
        titre: "Protocole de lutte integree contre les noctuelles de la tomate",
        etapes: [
            {
                titre: "Etape 1 : Mise en place du monitoring (avant plantation)",
                description: "Installer 2-3 pieges a pheromones Delta par hectare : 1 piege specifique H. armigera + 1 piege S. littoralis (+ 1 piege S. exigua si historique de degats). Positionner les pieges a hauteur de la canopee, en peripherie de la parcelle ou de la serre. Relever et compter les captures chaque semaine. Reporter les donnees sur un registre de suivi. Seuil d'alerte : > 5-10 adultes/piege/semaine."
            },
            {
                titre: "Etape 2 : Prevention structurelle (plantation)",
                description: "Labourer profondement (25-30 cm) avant la plantation pour detruire les chrysalides de la culture precedente. En serre : verifier les filets et fermer les portes la nuit. Eliminer les adventices autour de la parcelle dans un rayon de 20-30 m. Optionnel : installer des bandes-pieges de mais doux en peripherie. En lutte biologique : introduire Macrolophus pygmaeus (1-2/m2) qui consommera aussi les oeufs et jeunes chenilles de noctuelles en complement de son action sur la mouche blanche et Tuta."
            },
            {
                titre: "Etape 3 : Interventions preventives (pic de vol des adultes)",
                description: "Quand les captures dans les pieges depassent le seuil d'alerte (5-10/piege/semaine) : lancer un programme preventif. Option biologique : lachers de Trichogramma (100 000-300 000/ha) + Bt (0,5-1 kg/ha tous les 5-7 jours le soir). Option chimique : chlorantraniliprole (Coragen, 0,15-0,20 L/ha) en preventif, qui agit sur les oeufs et les L1 des qu'ils eclosent et commencent a s'alimenter. Alterner avec Bt et spinosad."
            },
            {
                titre: "Etape 4 : Interventions curatives (chenilles detectees sur plants)",
                description: "Si des chenilles de stade L2-L3 sont detectees sur le feuillage ou les boutons floraux : intervenir immediatement avant qu'elles ne penetrent dans les fruits. Traitement curatif : emamectine benzoate (Affirm, 1-1,5 kg/ha) ou indoxacarbe (Avaunt, 0,25-0,35 L/ha). Si des chenilles sont deja dans les fruits : ramasser et detruire les fruits perfores, puis traiter avec chlorantraniliprole (longue remanence) pour proteger les fruits sains restants. Renforcer le monitoring."
            },
            {
                titre: "Etape 5 : Fin de cycle et reduction des populations",
                description: "En fin de culture : arracher les plants et ramasser tous les fruits tombes au sol (les chenilles a l'interieur se nymphoseront si les fruits sont abandonnes). Labourer profondement (25-30 cm) pour detruire les chrysalides. En ete, laisser le sol nu et expose au soleil pendant 3-4 semaines (assec). Si possible, solariser le sol (double effet : detruit les chrysalides + les pathogenes du sol). Maintenir les pieges a pheromones entre deux cultures pour suivre l'evolution des populations. Analyser le registre de suivi et ajuster le programme de lutte pour le cycle suivant."
            }
        ]
    },

    faq: [
        {
            question: "Comment distinguer les degats de Helicoverpa armigera de ceux de Tuta absoluta sur les fruits de tomate ?",
            reponse: "Les degats sont tres differents : H. armigera fait un TROU ROND et NET de 5-10 mm de diametre dans le fruit, souvent pres du calice. La chenille (15-40 mm, variable en couleur) s'enfonce profondement dans la chair et laisse des excrements granuleux brun-noir autour du trou. Les degats sont profonds et massifs. Tuta absoluta, en revanche, creuse des MINES (galeries) sous l'epiderme du fruit, visibles comme des zones translucides sous la peau. La chenille (max 7-8 mm, vert clair) reste en surface. Les mines de Tuta ne perforent pas le fruit de part en part. En pratique, si vous voyez un trou net avec des crottes noires, c'est H. armigera ; si vous voyez des galeries superficielles sous la peau, c'est Tuta."
        },
        {
            question: "Le Bt (Bacillus thuringiensis) est-il efficace contre toutes les especes de noctuelles ?",
            reponse: "Le Bt var. kurstaki (Btk) est tres efficace contre Helicoverpa armigera et Autographa gamma, mais MOINS efficace contre Spodoptera littoralis et S. exigua, qui sont naturellement plus tolerantes aux toxines Cry du Btk. Pour les Spodoptera, utilisez plutot le Bt var. aizawai (Bta), qui contient des toxines Cry1C plus actives contre ce genre. Alternativement, le spinosad et le spinetoram sont tres efficaces contre toutes les especes de noctuelles, y compris Spodoptera. En pratique, si vous avez un melange d'especes (situation frequente au Maroc), alternez Btk + spinosad + chlorantraniliprole pour couvrir tout le spectre."
        },
        {
            question: "Helicoverpa armigera est-elle resistante aux pyrethroides au Maroc ?",
            reponse: "Oui, des niveaux eleves de resistance aux pyrethroides (lambda-cyhalothrine, deltamethrine, cypermethrine) sont documentes chez H. armigera au Maroc, particulierement dans le Souss-Massa ou la pression de traitement est la plus forte. La resistance est liee a des mecanismes de detoxification metabolique (esterases, monoxygenases P450) et a des mutations du canal sodique (kdr). En consequence, les pyrethroides ne doivent PLUS etre utilises en premiere intention contre H. armigera. Les alternatives efficaces sont : chlorantraniliprole (IRAC 28), emamectine (IRAC 6), indoxacarbe (IRAC 22A), spinosad/spinetoram (IRAC 5), Bt (IRAC 11) et methoxyfenozide (IRAC 18). Alternez ces modes d'action pour eviter l'apparition de nouvelles resistances."
        },
        {
            question: "Comment fonctionne le piegeage par pheromones et est-il suffisant pour controler les noctuelles ?",
            reponse: "Les pieges a pheromones utilisent des capsules impregnees de pheromone sexuelle synthetique de la femelle pour attirer les males. Les males sont pieges sur une surface engluee ou dans un entonnoir. Il existe deux utilisations : (1) Le MONITORING (surveillance) : 2-3 pieges/ha pour suivre la dynamique des vols et declencher les traitements au bon moment. C'est l'usage le plus important et le plus repandu. (2) Le PIEGEAGE DE MASSE : 20-30 pieges/ha pour capturer suffisamment de males afin de reduire le taux d'accouplement. Le piegeage de masse seul est rarement suffisant pour controler les noctuelles (les femelles peuvent s'accoupler une seule fois et pondre des centaines d'oeufs). Il doit etre combine avec des lachers de Trichogrammes et des traitements Bt/insecticides pour un controle efficace."
        }
    ],

    ressources: [
        "INRA Maroc - Programme de lutte integree contre les noctuelles de la tomate au Souss-Massa",
        "ONSSA - Liste des insecticides homologues contre les lepidopteres nuisibles au Maroc",
        "Cunningham J.P. & Zalucki M.P. (2014) - Understanding Heliothine (Lepidoptera: Heliothinae) pests: what is a host plant? Journal of Economic Entomology 107:881-896",
        "Fitt G.P. (1989) - The ecology of Heliothis species in relation to agroecosystems. Annual Review of Entomology 34:17-52",
        "IRAC (Insecticide Resistance Action Committee) - Gestion de la resistance chez Helicoverpa armigera : recommandations et groupes de modes d'action",
        "Van Lenteren J.C. (2012) - The state of commercial augmentative biological control: plenty of natural enemies, but a frustrating lack of uptake. BioControl 57:1-20. Chapitre sur les Trichogrammes",
        "IAV Hassan II - Cours d'entomologie appliquee : les noctuelles des cultures maraicheres au Maroc",
        "EPPO - Fiches de donnees sur les organismes nuisibles : Helicoverpa armigera, Spodoptera littoralis",
        "Zalucki M.P. et al. (2012) - Estimating the economic cost of one of the world's major insect pests, Helicoverpa spp. on cotton. Crop Protection 31:77-89",
        "FAO - Guide de lutte integree contre les chenilles defoliatrices et foreuses des fruits en culture de tomate"
    ]
};
