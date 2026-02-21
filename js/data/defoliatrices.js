const MALADIE_DEFOLIATRICES = {
    id: "defoliatrices",
    nom: "Chenilles defoliatrices de la tomate",
    nomScientifique: "Chrysodeixis chalcites, Spodoptera exigua, Spodoptera littoralis, Agrotis spp.",
    type: "ravageur",
    emoji: "\ud83d\udc1b",
    resumeCourt: "Les chenilles defoliatrices regroupent plusieurs especes de lepidopteres dont les larves devorent massivement le feuillage de la tomate, reduisant la surface photosynthetique et affaiblissant les plants. Au Maroc, Chrysodeixis chalcites (noctuelle du chanvre), Spodoptera exigua (noctuelle exigue) et Spodoptera littoralis (ver du coton) sont les principales especes defoliatrices. En cas de forte attaque, la defoliation peut atteindre 60 a 90 %, entrainant une chute de rendement de 20 a 50 % et un echaudage des fruits exposes au soleil.",
    cultures: ["Tomate", "Tomate cerise", "Tomate sous serre", "Tomate plein champ", "Cultures maraicheres"],

    presentation: {
        description: "Les chenilles defoliatrices de la tomate constituent un complexe d'especes de lepidopteres (papillons de nuit) dont les larves se nourrissent principalement du feuillage. Contrairement a Helicoverpa armigera (traitee dans le module Noctuelles) qui est essentiellement foreuse de fruits, les especes defoliatrices s'attaquent avant tout aux feuilles, aux petioles et aux jeunes pousses.\n\nLes principales especes au Maroc :\n\n- Chrysodeixis chalcites (Esper) : la noctuelle du chanvre ou fausse-arpenteuse doree. Chenille verte avec des lignes blanches laterales, se deplacant en arpentant (formant une boucle). Adulte avec une tache metallique doree sur les ailes anterieures. Espece tres commune sous serre dans le Souss-Massa.\n\n- Spodoptera exigua (Hubner) : la noctuelle exigue ou petit prodenia. Chenille verte a gris-brun, 25-30 mm a maturite. Tres polyphage et particulierement nuisible sous serre. Les jeunes chenilles squelettisent les feuilles en colonies, les chenilles agees devorent le limbe entier.\n\n- Spodoptera littoralis (Boisduval) : le ver du coton ou grand prodenia. Chenille grise a noire pouvant atteindre 45 mm, avec des triangles sombres sur le dos. Espece gregaire au jeune stade, tres vorace. Defoliatrice majeure des cultures maraicheres en Afrique du Nord.\n\n- Agrotis segetum et Agrotis ipsilon : les vers gris. Chenilles terricoles qui sectionnent les tiges des jeunes plantules au ras du sol la nuit et se cachent dans le sol le jour. Plus nuisibles en pepiniere et en debut de culture.\n\n- Autographa gamma (Linnaeus) : la noctuelle gamma. Chenille arpenteuse verte, adulte avec une tache argentee en forme de gamma. Migratrice, arrivant au Maroc au printemps.\n\nCes especes partagent un mode de vie similaire : les adultes sont des papillons nocturnes, les femelles pondent sur le feuillage, et les chenilles traversent 5 a 6 stades larvaires en 2 a 4 semaines avant de se nymphoser dans le sol.",

        importance: "Les chenilles defoliatrices representent le deuxieme groupe de ravageurs lepidopteres de la tomate au Maroc apres Tuta absoluta. Elles sont particulierement nuisibles sous serre ou elles trouvent des conditions de temperature et d'humidite favorables a leur developpement continu. Dans le Souss-Massa, Chrysodeixis chalcites et Spodoptera exigua sont presentes dans plus de 70 % des serres de tomate. Les degats de defoliation reduisent directement la capacite photosynthetique des plants, entrainant une baisse de rendement et de qualite des fruits.",

        historique: "Les chenilles defoliatrices ont toujours ete presentes sur les cultures maraicheres au Maroc, mais leur importance a augmente avec le developpement de la serriculture intensive. L'utilisation massive de pyrethrinoides dans les annees 1990-2000 a favorise le developpement de resistances chez Spodoptera littoralis et S. exigua. Chrysodeixis chalcites, longtemps consideree comme secondaire, est devenue une espece dominante sous serre depuis les annees 2010, favorisee par les conditions de serre (temperature stable, absence de predateurs) et la reduction des traitements a large spectre au profit de produits plus selectifs visant Tuta absoluta.\n\nL'introduction de la lutte biologique avec Bacillus thuringiensis et les lachers de Trichogrammes a marque un tournant dans la gestion de ces ravageurs, permettant de reduire significativement l'utilisation d'insecticides chimiques.",

        impact_economique: "Les pertes economiques causees par les defoliatrices :\n\n- Pertes de rendement : 20 a 50 % en cas de defoliation severe (> 60 % du feuillage devore), par reduction de la photosynthese et echaudage des fruits exposes.\n- Reduction de la qualite : fruits plus petits, moins sucres, coloration irreguliere. Echaudage solaire sur les fruits decouverts apres defoliation.\n- Degats sur jeunes plantules par les vers gris (Agrotis) : 5 a 20 % de mortalite en pepiniere ou en debut de plantation.\n- Contamination des fruits par les excrements de chenilles : perte de valeur commerciale.\n- Cout des traitements : 3 a 6 applications par cycle, soit 1 500 a 4 000 MAD/ha.\n- Cout de la lutte biologique (Bt + Trichogrammes) : 2 000 a 5 000 MAD/ha par cycle.\n- Au Maroc, les defoliatrices representent environ 10 a 15 % du cout total de la protection phytosanitaire de la tomate sous serre."
    },

    origine: {
        agent: "Les principales especes defoliatrices de la tomate au Maroc :\n\n- Chrysodeixis chalcites (Esper) : famille des Noctuidae, sous-famille des Plusiinae. Adulte de 30-38 mm d'envergure, ailes anterieures brun-dore avec une tache metallique brillante (or ou argent). Chenille verte avec des lignes blanches laterales, 3 paires de fausses pattes abdominales seulement (au lieu de 5 chez la plupart des noctuelles), d'ou la marche en arpentant. Taille a maturite : 30-35 mm.\n\n- Spodoptera exigua (Hubner) : famille des Noctuidae. Adulte de 25-30 mm d'envergure, ailes anterieures gris-brun avec une tache reniforme orangee. Chenille de couleur variable (verte, gris-brun, avec parfois une ligne laterale rose), 25-30 mm a maturite. Tres gregaire aux premiers stades.\n\n- Spodoptera littoralis (Boisduval) : famille des Noctuidae. Adulte de 35-45 mm d'envergure, ailes anterieures gris-brun avec des stries ondulees. Chenille gris-noir avec des triangles dorsaux sombres et une bande laterale jaune-orange. Tres gregaire au stade L1-L2. Taille a maturite : 40-45 mm. La plus grande et la plus vorace des defoliatrices.\n\n- Agrotis segetum (Denis & Schiffermuller) et A. ipsilon (Hufnagel) : famille des Noctuidae. Adultes de 35-45 mm, gris-brun. Chenilles grises, lisses, dodues, se roulant en spirale quand derangees. Terricoles : se cachent dans le sol le jour et sortent la nuit pour couper les tiges au collet. Taille a maturite : 40-50 mm.\n\n- Autographa gamma (Linnaeus) : famille des Noctuidae, sous-famille des Plusiinae. Adulte de 35-40 mm, ailes anterieures brun-violet avec une tache argentee en forme de gamma (y). Chenille arpenteuse verte avec des lignes blanches. Migratrice.",

        provenance: "Chrysodeixis chalcites est une espece subtropicale d'origine afrotropicale et mediterraneenne, tres bien etablie dans les serres du Souss-Massa. Spodoptera littoralis est afrotropicale, presente dans tout le bassin mediterraneen et le Moyen-Orient. Spodoptera exigua est cosmopolite des regions chaudes. Agrotis segetum et A. ipsilon sont palearctiques, presentes dans toute l'Europe et l'Afrique du Nord. Autographa gamma est migratrice, arrivant d'Europe et du Sahel au printemps-ete. Au Maroc, toutes ces especes sont presentes dans les principales zones de production : Souss-Massa, Gharb, Loukkos, Doukkala et Oriental.",

        cycle: "1. Hivernation : les especes residentes (C. chalcites, S. exigua sous serre) se developpent de maniere continue toute l'annee dans les serres chaudes du Souss-Massa. Spodoptera littoralis hiverne sous forme de chrysalide dans le sol dans les regions plus fraiches. Les Agrotis hivernent sous forme de chenilles agees ou de chrysalides dans le sol.\n\n2. Emergence et vol : les adultes sont strictement nocturnes. Ils emergent du sol au crepuscule et s'accouplent dans les heures suivantes. Les males sont attires par les pheromones sexuelles emises par les femelles.\n\n3. Ponte : Chrysodeixis chalcites pond 500 a 700 oeufs isolement ou en petits groupes sur la face inferieure des feuilles. Spodoptera littoralis pond 1 000 a 3 000 oeufs en ooplaques (masses d'oeufs) de 100 a 300 oeufs, recouvertes d'ecailles abdominales duveteuses. S. exigua pond de maniere similaire mais avec des ooplaques plus petites. Agrotis pond dans le sol ou sur les debris vegetaux.\n\n4. Eclosion : les oeufs eclosent en 3 a 7 jours selon la temperature. Les chenilles neonates (L1) mesurent 1 a 2 mm.\n\n5. Developpement larvaire : 5 a 6 stades larvaires en 14 a 28 jours. Les chenilles L1-L2 de Spodoptera sont gregaires et squelettisent les feuilles (ne mangent que le parenchyme, laissant les nervures). A partir de L3, elles se dispersent et deviennent solitaires et tres voraces, devorant le limbe entier. Les chenilles de Chrysodeixis sont solitaires des le depart et arpentent le feuillage.\n\n6. Nymphose : les chenilles matures descendent au sol et s'enfouissent a 5-15 cm pour se nymphoser. La chrysalide dure 10 a 20 jours en ete, plus en hiver.\n\n7. Generations : C. chalcites : 4 a 6 generations/an sous serre. S. exigua : 5 a 8 generations/an. S. littoralis : 4 a 7 generations/an. Agrotis : 2 a 4 generations/an. Le chevauchement des generations assure une presence quasi continue des chenilles de mars a novembre (toute l'annee sous serre).",

        propagation: [
            "Vol nocturne des adultes : les papillons volent activement la nuit et colonisent les serres par les ouvertures (portes, ouvrants, trous dans les filets)",
            "Migration a longue distance : Spodoptera littoralis et Autographa gamma sont des especes migratrices qui arrivent au Maroc avec les vents chauds du sud ou du nord selon la saison",
            "Chrysalides dans le sol : les chrysalides dans le sol constituent la source d'infestation primaire d'un cycle a l'autre si le sol n'est pas laboure",
            "Plants de pepiniere : les oeufs ou jeunes chenilles peuvent etre introduits avec les plants, en particulier les ooplaques de Spodoptera cachees sous les feuilles",
            "Eclairages nocturnes : les lumières des serres et des routes attirent les papillons adultes et concentrent les populations",
            "Adventices et cultures voisines : ces especes sont tres polyphages et se maintiennent sur de nombreuses plantes hotes (luzerne, coton, mais, haricot, laitue, betterave)",
            "Absence de vide sanitaire : les chrysalides persistent dans le sol entre deux cultures"
        ]
    },

    facteurs: {
        climatiques: [
            "Temperatures chaudes (optimum 25-30 degres C pour le developpement larvaire). Le cycle complet se boucle en 30-40 jours en ete contre 60-90 jours en hiver",
            "Nuits douces favorisant l'activite de vol des adultes et la ponte. Les papillons sont inactifs en dessous de 10-12 degres C",
            "Climat de serre : temperature stable de 20-30 degres C toute l'annee, favorisant le developpement continu de C. chalcites et S. exigua sans diapause",
            "Periodes seches : les pluies fortes provoquent une mortalite importante des jeunes chenilles (L1-L2) par noyade et decrochage mecanique",
            "Automne doux (septembre-novembre) : pic de population dans le Souss-Massa, coincidant avec la culture d'arriere-saison",
            "Vents dominants transportant les especes migratrices (S. littoralis, A. gamma) vers les zones de culture"
        ],
        sol: [
            "Sols meubles et sableux : facilitent l'enfouissement des chenilles pour la nymphose et l'emergence des adultes",
            "Sols non laboures entre deux cycles : les chrysalides survivent et donnent la generation suivante",
            "Sols humides : favorisent la survie des chrysalides. La secheresse extreme du sol peut tuer les chrysalides mais aussi empecher leur destruction par le labour",
            "Paillage plastique : peut empecher l'enfouissement des chenilles (effet positif) mais aussi proteger les chrysalides du labour (effet negatif)"
        ],
        pratiques: [
            "Culture sous serre sans filets anti-insectes ou avec des filets troues : les papillons entrent facilement la nuit par les ouvertures",
            "Portes de serre laissees ouvertes la nuit : voie d'entree principale des adultes nocturnes",
            "Monoculture de tomate sans rotation : maintien des populations de chrysalides dans le sol d'un cycle a l'autre",
            "Absence de pieges a pheromones pour la surveillance : les infestations sont detectees tardivement quand la defoliation est deja importante",
            "Traitements insecticides tardifs : les chenilles de stade L4-L5 sont beaucoup plus difficiles a tuer que les L1-L2",
            "Utilisation repetee de pyrethrinoides favorisant les resistances chez Spodoptera spp.",
            "Non-elimination des adventices et des residus de culture servant de refuge aux defoliatrices",
            "Eclairage nocturne excessif autour des serres attirant les papillons"
        ],
        erreurs: [
            "Confondre les degats de defoliation avec ceux de Tuta absoluta : Tuta creuse des MINES (galeries translucides) dans les feuilles, les defoliatrices DEVORENT le limbe en laissant des trous ou ne laissant que les nervures",
            "Attendre que la defoliation soit severe pour intervenir : a ce stade, les chenilles sont grosses (L4-L6) et tres difficiles a controler avec des traitements de contact. Intervenir des les stades L1-L2",
            "Confondre les ooplaques de Spodoptera (masses d'oeufs recouvertes de duvet) avec des amas de poussiere ou de moisissure : les ecraser systematiquement",
            "Traiter en plein jour : les chenilles agees se cachent sous les feuilles et dans le sol le jour. Traiter le soir ou tot le matin quand elles s'alimentent activement",
            "Utiliser uniquement des pyrethrinoides : Spodoptera spp. ont developpe des resistances elevees. Le Bt, le spinosad et les diamides sont plus efficaces",
            "Negliger le labour entre deux cultures : les chrysalides dans le sol sont la source principale de reinfestation",
            "Ne pas differencier les especes : Chrysodeixis (arpenteuse, solitaire) ne se gere pas exactement comme Spodoptera (gregaire, ooplaque) ou Agrotis (terricole, nocturne)"
        ]
    },

    symptomes: {
        feuilles: "STADE INITIAL :\nPresence de petites plages decolorees et translucides sur les feuilles (fenetrage ou squelettisation par les chenilles L1-L2 gregaires de Spodoptera). Les jeunes chenilles ne mangent que le parenchyme d'un seul cote de la feuille, laissant l'epiderme oppose intact. Des ooplaques (masses d'oeufs recouvertes de duvet blanc-grisatre) sont visibles sur la face inferieure des feuilles pour Spodoptera. Pour Chrysodeixis : petits trous ronds dans le limbe faits par les chenilles arpenteuses solitaires.\n\nSTADE INTERMEDIAIRE :\nLes chenilles L3-L4, mesurant 15-25 mm, sont facilement visibles sur les feuilles le matin et le soir. Des trous irreguliers et de plus en plus grands apparaissent dans le limbe foliaire. Des excrements (crottes noires granuleuses de 1-3 mm) sont presents sur les feuilles et au sol sous les plants. Les feuilles basses et medianes sont les plus touchees. Debut de defoliation visible a l'echelle du plant.\n\nSTADE AVANCE :\nDefoliation severe : 50 a 90 % du feuillage devore. Les grosses chenilles (L5-L6, 30-45 mm) sont tres voraces et peuvent devorer une feuille entiere en une nuit. Ne subsistent que les nervures principales et les petioles (feuilles en dentelle). Abondance d'excrements au sol. Les fruits sont exposes au soleil et souffrent d'echaudage. Les plants sont severement affaiblis.",

        tiges: "Les tiges ne sont pas la cible principale des defoliatrices classiques (Chrysodeixis, Spodoptera). Cependant :\n\n- Spodoptera littoralis : les grosses chenilles peuvent ronger superficiellement l'ecorce des petioles et des tiges tendres, causant des lesions qui fragilisent la plante.\n- Agrotis spp. (vers gris) : les chenilles terricoles SECTIONNENT les tiges des jeunes plantules au ras du sol pendant la nuit. C'est le symptome le plus typique des vers gris. Le matin, on trouve les plantules couchees au sol, la tige coupee nettement a la base. En fouillant la terre autour du plant sectionne, on retrouve la chenille grise enroulee en spirale a quelques centimetres de profondeur.\n- Les petioles peuvent etre partiellement devores par les chenilles de Spodoptera en cas de forte infestation, provoquant la chute des feuilles.",

        fruits: "Les chenilles defoliatrices ne s'attaquent generalement pas aux fruits (contrairement a Helicoverpa armigera). Cependant, les degats indirects sur les fruits sont importants :\n\n- Echaudage solaire : la defoliation severe expose les fruits au soleil direct, causant des brulures (taches blanches a beiges sur la face exposee). C'est la consequence la plus couteuse de la defoliation.\n- Fruits plus petits et moins sucres : la reduction de la surface foliaire diminue la photosynthese et donc l'alimentation des fruits.\n- Coloration irreguliere a maturite.\n- En cas de tres forte infestation, les grosses chenilles de Spodoptera littoralis peuvent occasionnellement grignoter la surface des fruits (degats superficiels, pas de perforation profonde comme H. armigera).\n- Contamination par les excrements de chenilles tombes sur les fruits : perte de qualite commerciale.",

        racines: "Les racines ne sont pas directement affectees par les chenilles defoliatrices aeriennes. Exception importante : les vers gris (Agrotis spp.) sont des chenilles terricoles qui vivent dans le sol et peuvent endommager les racines superficielles et le collet des plantules. Ils sectionnent les tiges au niveau du sol, provoquant la mort immediate du plant. Les chrysalides de toutes les especes se trouvent dans le sol a 5-15 cm de profondeur, mais ne causent pas de degats racinaires.",

        stade: "Les defoliatrices peuvent attaquer la tomate a tous les stades :\n\n- Pepiniere et repiquage (0-2 semaines) : les vers gris (Agrotis) sectionnent les tiges des plantules. Mortalite potentielle de 5 a 20 %.\n- Stade vegetatif (2-6 semaines) : les chenilles de Spodoptera et Chrysodeixis commencent a defolier les feuilles basses. La plante peut compenser si la defoliation reste inferieure a 20-30 %.\n- Floraison-nouaison : la defoliation reduit la nouaison et la taille des fruits par manque de photosynthese.\n- Fructification-recolte : c'est la periode la plus critique. La defoliation expose les fruits au soleil (echaudage) et reduit l'alimentation carbonee des fruits en croissance.\n\nAu Maroc, les pics d'infestation :\n- Juin-aout : pic estival, surtout Chrysodeixis chalcites sous serre\n- Septembre-novembre : pic automnal, Spodoptera littoralis et S. exigua\n- Toute l'annee sous serre chaude dans le Souss-Massa",

        differenciation: "Tuta absoluta : creuse des MINES translucides DANS le limbe foliaire (galeries visibles en transparence). Les defoliatrices DEVORENT le limbe, laissant des trous ou ne laissant que les nervures. Les mines de Tuta ont un aspect de serpentin transparent, pas de trous.\nHelicoverpa armigera : s'attaque principalement aux FRUITS (trou rond de 5-10 mm). La defoliation est secondaire chez Helicoverpa. Chez les defoliatrices, c'est l'inverse : le feuillage est la cible principale.\nAcariens : jaunissement et dessechement des feuilles SANS trous ni excrements. Toiles de soie sur la face inferieure (Tetranychus). Pas de chenilles.\nMildiou / Alternariose : taches brunes ou noires sur les feuilles avec des haloes chlorotiques, pas de trous de consommation. Feutrage blanc (mildiou) ou sporulation concentrique (Alternaria).\nVers gris vs limaces : les vers gris coupent NETTEMENT la tige au niveau du sol. Les limaces laissent des traces de mucus argente et des degats irreguliers avec des bords lisses."
    },

    lutte: {
        prevention: [
            "Installer des pieges a pheromones sexuelles specifiques : 2-3 pieges par hectare pour Spodoptera littoralis, S. exigua et Chrysodeixis chalcites. Relever chaque semaine. Seuil d'alerte : 5-10 captures par piege par semaine",
            "Proteger les serres avec des filets anti-insectes de maille adequate (6x6 mm minimum) sur toutes les ouvertures. Fermer imperativement les portes la nuit pour empecher l'entree des papillons nocturnes",
            "Reduire ou eteindre les eclairages nocturnes a proximite des serres : la lumiere attire fortement les papillons de nuit",
            "Labourer profondement (25-30 cm) entre deux cycles de culture pour detruire les chrysalides dans le sol. Un labour d'ete suivi d'un assec (exposition au soleil) est particulierement efficace",
            "Eliminer les adventices et les residus de culture autour des serres : ils servent de refuge et de plantes-hotes alternatives pour les defoliatrices",
            "Inspecter les plants de pepiniere a la reception : rechercher les ooplaques de Spodoptera (masses d'oeufs couvertes de duvet) sur la face inferieure des feuilles et les ecraser",
            "Pratiquer la rotation des cultures : eviter la succession tomate-tomate ou tomate-cultures sensibles (poivron, laitue, haricot) sans interruption",
            "Favoriser les ennemis naturels : haies bocageres et bandes fleuries pour heberger les parasitoides (Trichogrammes, Cotesia spp.) et les predateurs (Orius, Chrysopes)",
            "Installer des nichoirs a chauves-souris autour des serres : elles consomment de grandes quantites de papillons nocturnes",
            "Pour les vers gris (Agrotis) : nettoyer le terrain avant plantation, eliminer les mauvaises herbes 2-3 semaines avant le repiquage pour priver les chenilles de nourriture"
        ],
        biologique: [
            "Bacillus thuringiensis var. kurstaki (Btk - Delfin, Dipel) : bioinsecticide de reference contre les chenilles de lepidopteres. 0,5 a 1 kg/ha en pulverisation foliaire. Appliquer le SOIR (les UV degradent la toxine). Cibler les jeunes stades L1-L3 pour une efficacite maximale. Les chenilles cessent de s'alimenter en 1-2 heures et meurent en 2-3 jours. Renouveler tous les 5-7 jours. DAR : 0 jour. Compatible AB",
            "Bacillus thuringiensis var. aizawai (Bta - Xentari) : souche de Bt particulierement efficace contre Spodoptera spp. qui sont moins sensibles au Btk. 0,5 a 1 kg/ha tous les 5-7 jours. A preferer au Btk quand Spodoptera est l'espece dominante",
            "Spinosad (Success, Spintor) : insecticide d'origine naturelle derive de la fermentation de Saccharopolyspora spinosa. 0,2-0,4 L/ha. Action par ingestion et contact. Tres efficace contre toutes les chenilles defoliatrices. Compatible AB. Appliquer le soir pour proteger les auxiliaires. DAR : 1-3 jours",
            "Lachers de Trichogramma spp. (T. evanescens, T. pretiosum) : micro-guepes parasitoides des oeufs de lepidopteres. 100 000 a 300 000 individus par hectare, en 3 a 6 lachers espaces de 7-10 jours pendant la periode de vol des adultes. Les Trichogrammes pondent dans les oeufs des noctuelles, empechant l'eclosion des chenilles",
            "Lachers de Macrolophus pygmaeus : cette punaise predatrice, deja utilisee contre la mouche blanche et Tuta absoluta, consomme egalement les oeufs et les jeunes chenilles L1-L2 des defoliatrices. Effet complementaire en programme IPM",
            "Neem (azadirachtine) : insecticide vegetal a effet anti-appetant et regulateur de croissance. 3-5 mL/L. Perturbe les mues des chenilles. Action lente mais compatible avec la lutte biologique. Renouveler tous les 7-10 jours",
            "Virus de la polyedrose nucleaire de Spodoptera (SpliNPV, SpexNPV) : biopesticides viraux specifiques a chaque espece de Spodoptera. Les chenilles infectees cessent de s'alimenter et meurent en 5-7 jours. Tres specifiques, sans effet sur les autres organismes. Application le soir"
        ],
        chimique: [
            "Chlorantraniliprole (Coragen 20 SC) : diamide anthranilic de reference (IRAC 28). 0,15-0,20 L/ha. Provoque la paralysie musculaire par activation des recepteurs de la ryanodine. Tres longue remanence (14-21 jours). Efficace sur tous les stades larvaires. Excellent profil de selectivite pour les auxiliaires. DAR : 3 jours",
            "Emamectine benzoate (Affirm 019,2 SG) : avermectine (IRAC 6). 1-1,5 kg/ha. Les chenilles cessent de s'alimenter en 2-4 heures apres ingestion. Tres efficace meme sur les chenilles de stades avances (L4-L5). Action translaminiaire. DAR : 3 jours",
            "Indoxacarbe (Avaunt 150 EC) : oxadiazine (IRAC 22A). 0,25-0,35 L/ha. Pro-insecticide active par les enzymes de l'insecte. Action par ingestion. Les chenilles cessent de s'alimenter en 4 heures. Bonne selectivite auxiliaires. DAR : 3 jours",
            "Spinetoram (Delegate 250 WG) : spinosyne de 2eme generation (IRAC 5). 0,3-0,5 kg/ha. Plus efficace et plus persistant que le spinosad. Action par ingestion et contact. Appliquer le soir. DAR : 1 jour",
            "Methoxyfenozide (Runner 240 SC) : agoniste de l'ecdysone (IRAC 18). 0,4-0,6 L/ha. Provoque une mue prematuree letale. Tres specifique aux lepidopteres, epargne tous les auxiliaires. Ideal pour les programmes IPM. DAR : 7 jours",
            "Teflubenzuron (Nomolt 150 SC) : inhibiteur de la synthese de chitine (IRAC 15). 0,15-0,25 L/ha. Empeche les mues. Les chenilles meurent lors de la mue suivante. Specifique, excellent profil auxiliaires. Plus efficace sur les jeunes stades. DAR : 7 jours",
            "STRATEGIE ANTI-RESISTANCE : alterner obligatoirement les modes d'action IRAC a chaque application. Programme type : Bt (IRAC 11) -> chlorantraniliprole (IRAC 28) -> emamectine (IRAC 6) -> indoxacarbe (IRAC 22A) -> methoxyfenozide (IRAC 18). Ne jamais appliquer deux fois de suite le meme groupe. Spodoptera littoralis est connue pour developper rapidement des resistances"
        ],
        mecanique: [
            "Ramassage manuel des chenilles : inspecter les plants matin et soir quand les chenilles sont actives et visibles sur le feuillage. Les gros stades (L4-L6) sont facilement reperes. Methode efficace en petit jardin et en serre",
            "Ecrasement des ooplaques de Spodoptera : les masses d'oeufs recouvertes de duvet sur la face inferieure des feuilles sont faciles a reperer et a ecraser. Une ooplaque contient 100-300 oeufs : detruire une seule ooplaque elimine potentiellement 100-300 chenilles",
            "Pieges lumineux a UV en peripherie de serre : attirent et capturent les papillons nocturnes. Installer a l'EXTERIEUR de la serre (pour ne pas attirer les papillons vers la culture). 1 a 2 pieges par serre",
            "Labour profond (25-30 cm) entre deux cycles : expose les chrysalides a la surface ou elles sont dessechees par le soleil et predatees par les oiseaux et les carabides. Reduit les populations de 50 a 80 %",
            "Filets anti-insectes sur les serres : verifier l'integrite des filets et reparer les trous. Fermer les portes et les ouvrants la nuit. Les papillons entrent principalement par les ouvertures non protegees",
            "Appats empoisonnes pour vers gris (Agrotis) : melange de son de ble (10 kg), melasse (1 L) et insecticide (chlorpyriphos 1 % ou spinosad) epandu en surface le soir autour des plants. Les chenilles terricoles sortent la nuit et consomment l'appat",
            "Elimination des residus de culture : en fin de cycle, arracher les plants et eliminer tous les debris vegetaux. Les chenilles et chrysalides presentes dans la vegetation seront detruites"
        ]
    },

    produits: [
        {
            nom: "Delfin WG (Bacillus thuringiensis var. kurstaki)",
            type: "Bioinsecticide bacterien anti-chenilles",
            matiere: "Bacillus thuringiensis var. kurstaki souche SA-11, 32 000 UI/mg",
            action: "Les cristaux proteiques (delta-endotoxines Cry1Aa, Cry1Ab, Cry1Ac, Cry2A) sont ingeres par la chenille, solubilises dans l'intestin alcalin et perforent la paroi intestinale. La chenille cesse de s'alimenter en 1-2 heures et meurt de septicemie en 2-3 jours. Hautement specifique aux larves de lepidopteres.",
            application: "0,5 a 1 kg/ha en pulverisation foliaire. Volume de bouillie : 400-800 L/ha. APPLIQUER LE SOIR (les UV degradent la toxine). Cibler les jeunes stades (L1-L3). Renouveler tous les 5-7 jours. Pas de limitation du nombre d'applications.",
            precautions: "DAR : 0 jour (utilisable jusqu'a la recolte). Compatible agriculture biologique. Aucune toxicite pour les mammiferes, oiseaux, poissons, abeilles ou auxiliaires. Efficacite reduite sur Spodoptera spp. : preferer Bta (Xentari) ou spinosad pour ces especes.",
            disponibleMaroc: true
        },
        {
            nom: "Xentari WG (Bacillus thuringiensis var. aizawai)",
            type: "Bioinsecticide bacterien specifique anti-Spodoptera",
            matiere: "Bacillus thuringiensis var. aizawai souche ABTS-1857",
            action: "Contient les toxines Cry1Aa, Cry1Ab, Cry1C et Cry1D. La toxine Cry1C est particulierement active contre les Spodoptera (S. littoralis, S. exigua) qui sont naturellement moins sensibles au Btk. Meme mode d'action que le Btk : perforation de la paroi intestinale apres ingestion.",
            application: "0,5 a 1 kg/ha en pulverisation foliaire. Volume de bouillie : 400-800 L/ha. Appliquer le soir. Cibler les jeunes stades (L1-L3). Renouveler tous les 5-7 jours.",
            precautions: "DAR : 0 jour. Compatible agriculture biologique. Meme profil de securite que le Btk. A privilegier quand Spodoptera spp. sont les especes dominantes. Peut etre alterne ou melange avec le Btk pour un spectre elargi.",
            disponibleMaroc: true
        },
        {
            nom: "Coragen 20 SC (Chlorantraniliprole)",
            type: "Insecticide diamide anti-chenilles de reference",
            matiere: "Chlorantraniliprole 200 g/L",
            action: "Diamide anthranilic (groupe IRAC 28). Active les recepteurs de la ryanodine dans les cellules musculaires, provoquant une contraction musculaire permanente (paralysie). Les chenilles cessent de s'alimenter en quelques heures. Action par ingestion et contact. Longue remanence (14-21 jours).",
            application: "0,15 a 0,20 L/ha en pulverisation foliaire. Volume de bouillie : 600-1 000 L/ha. Bien couvrir le feuillage. Appliquer des les premiers stades larvaires ou en preventif quand les pieges a pheromones depassent le seuil. Maximum 2 applications par cycle.",
            precautions: "DAR : 3 jours. Excellent profil auxiliaires : epargne abeilles, Trichogrammes, Macrolophus, Encarsia. Pas de resistance croisee avec les pyrethroides. Reference en lutte integree.",
            disponibleMaroc: true
        },
        {
            nom: "Success 480 SC (Spinosad)",
            type: "Insecticide d'origine naturelle",
            matiere: "Spinosad 480 g/L",
            action: "Spinosyne (groupe IRAC 5). Derive de la fermentation de Saccharopolyspora spinosa. Active les recepteurs nicotiniques de l'acetylcholine. Action rapide par ingestion et contact. Efficace contre toutes les especes de chenilles defoliatrices, y compris Spodoptera. Compatible agriculture biologique.",
            application: "0,2 a 0,4 L/ha en pulverisation foliaire. Volume de bouillie : 400-800 L/ha. Appliquer le soir pour proteger les pollinisateurs et les auxiliaires. Renouveler apres 7-10 jours. Maximum 3 applications par cycle.",
            precautions: "DAR : 1-3 jours. Toxique pour les abeilles pendant les 3 heures suivant l'application (appliquer le soir). Bonne selectivite pour Macrolophus, Encarsia, Trichogrammes apres sechage. Alterner avec Bt et diamides.",
            disponibleMaroc: true
        },
        {
            nom: "Affirm 019,2 SG (Emamectine benzoate)",
            type: "Insecticide avermectine anti-chenilles",
            matiere: "Emamectine benzoate 19,2 g/kg",
            action: "Avermectine semi-synthetique (groupe IRAC 6). Paralysie musculaire irreversible par hyperpolarisation (canaux chlorure). Action principalement par ingestion. Les chenilles cessent de s'alimenter en 2-4 heures. Tres efficace meme sur les stades avances (L4-L5). Action translaminiaire.",
            application: "1 a 1,5 kg/ha en pulverisation foliaire. Volume de bouillie : 600-1 000 L/ha. Renouveler apres 7-14 jours. Maximum 3 applications par cycle.",
            precautions: "DAR : 3 jours. Toxique pour les abeilles et les organismes aquatiques. Bonne selectivite pour Macrolophus et Trichogrammes si applique le soir. Alterner avec diamides et Bt.",
            disponibleMaroc: true
        },
        {
            nom: "Runner 240 SC (Methoxyfenozide)",
            type: "Regulateur de croissance specifique anti-lepidopteres",
            matiere: "Methoxyfenozide 240 g/L",
            action: "Agoniste de l'ecdysone (groupe IRAC 18). Provoque une mue prematuree, incomplete et letale. Hautement specifique aux chenilles de lepidopteres. Aucune action sur les autres insectes.",
            application: "0,4 a 0,6 L/ha en pulverisation foliaire. Appliquer sur les jeunes stades (L1-L3). Action lente (mort en 3-5 jours lors de la mue suivante). Renouveler apres 10-14 jours. Maximum 2 applications par cycle.",
            precautions: "DAR : 7 jours. Profil ecotoxicologique exceptionnel : aucune toxicite pour les abeilles, les auxiliaires, les predateurs, les poissons et les mammiferes. Ideal pour les programmes IPM. Specificite aux lepidopteres = avantage (epargne tout) et limite (pas d'effet sur les autres ravageurs).",
            disponibleMaroc: true
        },
        {
            nom: "Trichogramma evanescens (auxiliaire parasitoide)",
            type: "Agent de lutte biologique - Micro-guepe parasitoide des oeufs",
            matiere: "Trichogramma evanescens, adultes emergeant de plaquettes",
            action: "Micro-hymenoptere (0,5 mm) parasitoide obligatoire des oeufs de lepidopteres. La femelle perce la coquille de l'oeuf de noctuelle et y depose son propre oeuf. La larve du Trichogramme se developpe a l'interieur de l'oeuf de noctuelle, le tuant. L'oeuf parasite devient noir apres 3-4 jours. Un adulte peut parasiter 50-100 oeufs au cours de sa vie de 7-10 jours.",
            application: "100 000 a 300 000 individus par hectare. Distribuer en plaquettes cartonnees (contenant les oeufs parasites prets a eclore) reparties uniformement dans la culture (1 plaquette tous les 5-10 m2). Effectuer 3 a 6 lachers espaces de 7-10 jours pendant la periode de vol des adultes de noctuelles (detectee par les pieges a pheromones).",
            precautions: "Stocker les plaquettes au frais (8-10 degres C) et utiliser dans les 24-48 h apres reception. Ne pas exposer au soleil direct. Sensible aux insecticides : respecter un delai de 7-14 jours apres tout traitement chimique. Compatible avec Bt (pas de delai). Efficacite meilleure en serre (confinement) qu'en plein champ.",
            disponibleMaroc: true
        }
    ],

    points_cles: [
        "Le Bacillus thuringiensis (Bt) est le PILIER de la lutte biologique contre les defoliatrices : 0 jour de DAR, 0 residu, 0 effet sur les auxiliaires, 0 resistance documentee. Appliquez-le le SOIR sur les jeunes stades (L1-L3) et renouvelez tous les 5-7 jours. Utilisez le Btk (Delfin) contre Chrysodeixis et Autographa, et le Bta (Xentari) contre Spodoptera.",
        "La PRECOCITE de l'intervention est determinante : les chenilles L1-L2 (1-5 mm) sont 10 fois plus sensibles aux traitements que les chenilles L5-L6 (30-45 mm). Le monitoring par pieges a pheromones permet de detecter les vols d'adultes et de declencher les traitements au bon moment, AVANT que les degats ne soient visibles.",
        "DIFFERENCIER les especes pour adapter la lutte : Chrysodeixis (arpenteuse solitaire, verte, sensible au Btk), Spodoptera (gregaire, ooplaque, plus tolerante au Btk -> utiliser Bta ou spinosad), Agrotis (terricole, nocturne -> appats empoisonnes au sol). Les strategies sont differentes.",
        "Le LABOUR profond (25-30 cm) entre deux cycles detruit 50 a 80 % des chrysalides dans le sol. C'est la mesure mecanique la plus efficace et la plus negligee. Combiner avec un vide sanitaire de 2-3 semaines et l'elimination des adventices.",
        "Les RESISTANCES aux pyrethroides sont generalisees chez Spodoptera spp. au Maroc. Alternez obligatoirement les groupes IRAC : Bt (11) -> diamides (28) -> avermectines (6) -> oxadiazines (22A) -> IGR (18). Privilegiez les produits selectifs pour preserver les auxiliaires naturels."
    ],

    protocole_traitement: {
        titre: "Protocole de lutte integree contre les chenilles defoliatrices de la tomate",
        etapes: [
            {
                titre: "Etape 1 : Mise en place du monitoring (avant plantation)",
                description: "Installer 2-3 pieges a pheromones Delta par hectare : 1 piege Spodoptera littoralis + 1 piege S. exigua + 1 piege Chrysodeixis chalcites. Positionner a hauteur de la canopee, en peripherie de la serre. Relever et compter les captures chaque semaine. Reporter sur un registre de suivi. Seuil d'alerte : > 5-10 adultes/piege/semaine. Pour les vers gris : inspecter le sol autour des plants le matin (chenilles cachees a faible profondeur)."
            },
            {
                titre: "Etape 2 : Prevention structurelle (a la plantation)",
                description: "Labourer profondement (25-30 cm) avant la plantation pour detruire les chrysalides residuelles. Verifier et reparer les filets anti-insectes. Fermer les portes la nuit. Eliminer les adventices dans un rayon de 20-30 m. Inspecter les plants de pepiniere : rechercher et ecraser les ooplaques de Spodoptera sur la face inferieure des feuilles. Optionnel : lachers preventifs de Trichogrammes (100 000/ha) si pression historique connue."
            },
            {
                titre: "Etape 3 : Traitements preventifs biologiques (pic de vol detecte)",
                description: "Quand les captures dans les pieges depassent le seuil (5-10/piege/semaine), lancer le programme preventif : Bt (Delfin ou Xentari selon l'espece) a 0,5-1 kg/ha tous les 5-7 jours le soir. Completer par des lachers de Trichogrammes (100 000-300 000/ha) toutes les semaines pendant la periode de vol. Le Bt agit sur les L1-L2 des leur eclosion et les Trichogrammes parasitent les oeufs avant eclosion : double protection."
            },
            {
                titre: "Etape 4 : Interventions curatives (chenilles L3+ detectees sur plants)",
                description: "Si des chenilles de stade L3 ou plus sont detectees malgre les traitements preventifs : intervenir avec un produit curatif. Option 1 (biologique) : spinosad (0,2-0,4 L/ha) le soir. Option 2 (chimique selectif) : emamectine benzoate (1-1,5 kg/ha) efficace meme sur les gros stades. Option 3 : chlorantraniliprole (0,15-0,20 L/ha) pour une longue protection residuelle. Pour les vers gris (Agrotis) : appats empoisonnes au sol le soir (son + melasse + insecticide)."
            },
            {
                titre: "Etape 5 : Fin de cycle et prophylaxie",
                description: "En fin de culture : arracher les plants, ramasser et detruire les debris vegetaux (brulage ou compostage). Labourer profondement (25-30 cm) pour exposer les chrysalides au soleil et aux predateurs. Pratiquer un vide sanitaire de 2-3 semaines si possible. Maintenir les pieges a pheromones entre deux cultures. Analyser le registre de suivi pour identifier les especes dominantes et adapter la strategie pour le cycle suivant."
            }
        ]
    },

    faq: [
        {
            question: "Comment distinguer les chenilles defoliatrices des mines de Tuta absoluta ?",
            reponse: "La difference est tres nette : les defoliatrices DEVORENT le limbe foliaire en laissant des TROUS (consommation externe) et des excrements granuleux noirs sur les feuilles. Les nervures principales sont souvent les seules parties restantes en cas de forte attaque. Tuta absoluta, en revanche, creuse des MINES a l'interieur du limbe : la chenille (7-8 mm max, vert clair) se deplace ENTRE les deux epidermes de la feuille, creant des galeries translucides visibles en transparence a contre-jour. Il n'y a pas de trous traversants avec Tuta. Les excrements de Tuta sont a l'interieur de la mine (trait noir dans la galerie), pas sur la surface de la feuille."
        },
        {
            question: "Le Bt est-il efficace contre toutes les especes de chenilles defoliatrices ?",
            reponse: "Le Bt var. kurstaki (Btk) est tres efficace contre Chrysodeixis chalcites, Autographa gamma et Helicoverpa armigera, mais MOINS efficace contre Spodoptera littoralis et S. exigua. Les Spodoptera ont une tolerance naturelle plus elevee aux toxines Cry1A du Btk (pH intestinal different, recepteurs Cry modifies). Pour les Spodoptera, utilisez le Bt var. aizawai (Bta = Xentari) qui contient la toxine Cry1C, plus active contre ce genre. Alternativement, le spinosad est tres efficace contre TOUTES les especes. En pratique, si vous ne savez pas quelle espece est presente, alternez Bta (efficace Spodoptera) et Btk (efficace Chrysodeixis) chaque semaine, ou utilisez le spinosad en complement."
        },
        {
            question: "Comment lutter contre les vers gris (Agrotis) qui coupent les plantules ?",
            reponse: "Les vers gris (Agrotis segetum, A. ipsilon) sont des chenilles TERRICOLES : elles vivent dans le sol le jour et sortent la nuit pour couper les tiges au ras du sol. La lutte est specifique : (1) PREVENTION : eliminer les adventices 2-3 semaines avant la plantation (les chenilles meurent de faim). Labourer profondement pour exposer les chrysalides. (2) DETECTION : chaque matin, verifier les plantules. Si un plant est coupe, fouiller le sol dans un rayon de 10-15 cm et a 5 cm de profondeur : la chenille grise, enroulee en spirale, sera la. (3) TRAITEMENT : appats empoisonnes le soir (son de ble 10 kg + melasse 1 L + insecticide) repartis autour des plants. Les chenilles sortent la nuit et consomment l'appat. (4) TRAITEMENT CHIMIQUE : arrosage au pied des plants avec chlorpyriphos ou spinosad dilue. (5) BIOLOGIQUE : nematodes entomopathogenes Steinernema carpocapsae en arrosage du sol (10-15 unites/cm2)."
        },
        {
            question: "Comment reconnaitre une ooplaque (masse d'oeufs) de Spodoptera ?",
            reponse: "Les femelles de Spodoptera littoralis et S. exigua pondent leurs oeufs en MASSES (ooplaques) de 100 a 300 oeufs sur la face inferieure des feuilles. L'ooplaque de S. littoralis est RECOUVERTE d'ecailles abdominales duveteuses blanc-grisatre ou beige, lui donnant un aspect cotonneux ou feutre. Elle mesure 5-15 mm de diametre. En ecartant le duvet, on voit les oeufs spheriques, blancs a verdatres, disposes en 2-3 couches. L'ooplaque de S. exigua est similaire mais plus petite (3-8 mm) et moins duveteuse. Ces ooplaques sont TRES faciles a detecter et a ecraser lors des inspections de routine. ECRASER une seule ooplaque equivaut a eliminer 100-300 chenilles potentielles : c'est le geste de lutte le plus efficace par rapport au temps investi !"
        }
    ],

    ressources: [
        "INRA Maroc - Les chenilles defoliatrices des cultures maraicheres : identification, biologie et lutte integree",
        "ONSSA - Liste des insecticides homologues contre les lepidopteres nuisibles aux cultures maraicheres au Maroc",
        "El-Sayed A.M. et al. - The Pherobase: Database of Pheromones and Semiochemicals (www.pherobase.com) - Pheromones de Spodoptera et Chrysodeixis",
        "IRAC (Insecticide Resistance Action Committee) - Gestion de la resistance chez les lepidopteres nuisibles : recommandations et groupes de modes d'action",
        "Poitout S. & Bues R. (1974) - Elevage de chenilles de vingt-huit especes de lepidopteres Noctuidae et de deux especes d'Arctiidae sur milieu artificiel. Annales de Zoologie Ecologie Animale 6:431-441",
        "IAV Hassan II - Cours d'entomologie appliquee : les lepidopteres defoliateurs des cultures maraicheres au Maroc",
        "EPPO - Fiches de donnees : Spodoptera littoralis, Spodoptera exigua, Chrysodeixis chalcites",
        "Van Lenteren J.C. (2012) - The state of commercial augmentative biological control: Trichogramma and Bacillus thuringiensis. BioControl 57:1-20",
        "FAO - Guide de lutte integree contre les chenilles defoliatrices en cultures maraicheres",
        "Koppert Biological Systems - Guide technique : utilisation de Trichogramma et Bacillus thuringiensis en lutte biologique contre les noctuelles defoliatrices"
    ]
};
