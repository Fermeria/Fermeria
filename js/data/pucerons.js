const MALADIE_PUCERONS = {
    id: "pucerons",
    nom: "Pucerons de la tomate",
    nomScientifique: "Myzus persicae, Macrosiphum euphorbiae, Aphis gossypii, Aulacorthum solani",
    type: "ravageur",
    emoji: "\ud83e\udeb2",
    resumeCourt: "Les pucerons sont des insectes piqueurs-suceurs qui colonisent les jeunes pousses, les feuilles et les bouquets floraux de la tomate. Myzus persicae (puceron vert du pecher) et Macrosiphum euphorbiae (puceron de la pomme de terre) sont les especes les plus frequentes au Maroc. Outre les degats directs (enroulement des feuilles, miellat, fumagine), les pucerons sont les principaux vecteurs de virus devastateurs (CMV, PVY, AMV). Les pertes peuvent atteindre 20 a 40 % du rendement en degats directs et bien plus en cas de transmission virale.",
    cultures: ["Tomate", "Tomate cerise", "Tomate sous serre", "Tomate plein champ", "Cultures maraicheres"],

    presentation: {
        description: "Les pucerons (ordre des Hemipteres, famille des Aphididae) sont de petits insectes piqueurs-suceurs de 1 a 3 mm qui vivent en colonies sur les parties tendres des plantes. Ils se nourrissent en inserant leurs stylets buccaux dans les tubes cribles du phloeme pour aspirer la seve elaboree, riche en sucres et en acides amines.\n\nQuatre especes principales affectent la tomate au Maroc :\n\n- Myzus persicae (Sulzer) : le puceron vert du pecher. Espece la plus frequente sur tomate, de couleur verte a jaune-vert, parfois rosee. Corps piriforme de 1,2 a 2,3 mm. Extremement polyphage (plus de 400 plantes-hotes). Vecteur majeur de plus de 100 virus vegetaux, dont le PVY (Potato Virus Y), le CMV (Cucumber Mosaic Virus) et l'AMV (Alfalfa Mosaic Virus).\n\n- Macrosiphum euphorbiae (Thomas) : le puceron de la pomme de terre ou grand puceron de la tomate. Le plus grand puceron de la tomate (2,5 a 3,5 mm), de couleur verte ou rose. Cornicules longues et effilees. Presente une preference marquee pour les solanacees. Vecteur de PVY et CMV.\n\n- Aphis gossypii (Glover) : le puceron du melon ou du cotonnier. Plus petit (1 a 1,8 mm), de couleur variable (jaune-vert a vert fonce, parfois presque noir). Tres frequent dans les serres du Souss-Massa, egalement nuisible au melon, au poivron et aux cucurbitacees. Vecteur de CMV.\n\n- Aulacorthum solani (Kaltenbach) : le puceron de la morelle ou puceron tachete. De couleur vert clair avec une tache sombre a la base des cornicules. 1,8 a 2,5 mm. Frequente sur les feuilles basses. Peut injecter une toxine provoquant des taches chlorotiques aux points de piqure.\n\nTous les pucerons excrètent du miellat (liquide sucre), support de la fumagine (moisissure noire) qui reduit la photosynthese et salit les fruits.",

        importance: "Les pucerons sont des ravageurs omnipresents de la tomate, presents dans 90 % des parcelles et des serres au Maroc. Leur importance economique tient moins aux degats directs de succion qu'a leur role de VECTEURS DE VIRUS. Un seul puceron aile porteur du CMV ou du PVY peut contaminer des dizaines de plants en se deplacant de plante en plante. Les epidemies virales transmises par pucerons peuvent entrainer des pertes de 50 a 100 % dans les cas les plus graves. La fumagine sur les fruits reduit egalement la valeur commerciale de la recolte.",

        historique: "Les pucerons sont des ravageurs connus de la tomate depuis les origines de cette culture. Au Maroc, Myzus persicae et Macrosiphum euphorbiae sont documentes sur tomate depuis les annees 1960. Le developpement de la serriculture intensive dans le Souss-Massa a amplifie les problemes, car les serres offrent un microclimat favorable au developpement continu des pucerons (absence de pluie, temperature moderee, vegetation dense).\n\nL'utilisation massive d'insecticides a large spectre dans les annees 1980-2000 a provoque des resistances generalisees chez M. persicae (resistances aux organophosphores, aux carbamates et aux pyrethroides). L'introduction de la lutte biologique avec les parasitoïdes Aphidius colemani et Aphidius ervi, et les predateurs (coccinelles, chrysopes, syrphes) dans les annees 2000-2010 a transforme la gestion des pucerons sous serre. Aujourd'hui, la lutte integree combinant auxiliaires et insecticides selectifs est la strategie dominante dans les exploitations modernes du Souss-Massa.",

        impact_economique: "Les pertes economiques causees par les pucerons :\n\n- Degats directs (succion de seve) : reduction de rendement de 10 a 20 % en cas de forte infestation. Enroulement des feuilles, deformation des jeunes pousses, avortement floral.\n- Miellat et fumagine : la fumagine noire deposee sur les fruits les rend invendables. Perte de qualite commerciale de 10 a 30 %.\n- Transmission de virus (degat LE PLUS GRAVE) : le CMV, le PVY et l'AMV transmis par les pucerons peuvent provoquer des pertes de 30 a 100 % selon la precocite de l'infection et la sensibilite de la variete.\n- Cout des traitements aphicides : 2 a 5 applications par cycle, soit 1 000 a 3 000 MAD/ha.\n- Cout de la lutte biologique (Aphidius, chrysopes) : 2 000 a 6 000 MAD/ha par cycle.\n- Au Maroc, les pucerons et les virus qu'ils transmettent sont classes parmi les 5 problemes phytosanitaires les plus couteux de la tomate."
    },

    origine: {
        agent: "Quatre especes principales sur tomate au Maroc :\n\n- Myzus persicae (Sulzer, 1776) : famille des Aphididae. Corps piriforme, 1,2-2,3 mm. Couleur verte, jaune-vert ou parfois rosee. Antennes longues (atteignant le corps). Cornicules cylindriques, legerement renflees a l'extremite, un peu plus sombres que le corps. Cauda (queue) triangulaire. Les formes ailees ont la tete et le thorax noirs, l'abdomen vert avec une tache dorsale sombre.\n\n- Macrosiphum euphorbiae (Thomas, 1878) : le plus grand puceron de la tomate (2,5-3,5 mm). Couleur verte (forme la plus frequente) ou rose-rouge. Cornicules tres longues et effilees (plus longues que la cauda), vertes ou sombres. Antennes aussi longues que le corps. Se distingue par sa grande taille et ses longues cornicules.\n\n- Aphis gossypii (Glover, 1877) : petit puceron (1-1,8 mm). Couleur tres variable : jaune-vert, vert fonce, parfois presque noir. Cornicules courtes et sombres. Cauda plus claire que les cornicules. Forme ailée avec tete et thorax noirs. Se distingue des autres especes par sa petite taille et ses cornicules sombres et courtes.\n\n- Aulacorthum solani (Kaltenbach, 1843) : taille moyenne (1,8-2,5 mm). Vert clair brillant avec une TACHE VERT FONCE caracteristique a la base de chaque cornicule. Cornicules longues, legerement renflees. Ce caractere (tache basale des cornicules) est diagnostique.\n\nTous possedent des pieces buccales de type piqueur-suceur : un rostre contenant 4 stylets (2 mandibulaires + 2 maxillaires) qui penetrent les tissus vegetaux jusqu'aux tubes cribles du phloeme.",

        provenance: "Myzus persicae est cosmopolite, present dans toutes les regions agricoles du monde. Son hote primaire (pour la reproduction sexuee hivernale) est le pecher (Prunus persica). Macrosiphum euphorbiae est originaire d'Amerique du Nord, aujourd'hui cosmopolite. Aphis gossypii est pantropical et subtropical. Aulacorthum solani est palearctique, cosmopolite dans les regions temperees. Au Maroc, ces quatre especes sont presentes dans toutes les zones de production. Les sources d'infestation sont les adventices, les cultures voisines, les vergers de pechers (M. persicae) et les plants de pepiniere.",

        cycle: "1. Reproduction : les pucerons se reproduisent principalement par PARTHENOGENESE VIVIPARE : les femelles donnent naissance a des jeunes deja formes (pas d'oeufs), qui sont eux-memes des femelles capables de se reproduire en 7-10 jours. Ce mode de reproduction est extremement rapide : une seule femelle peut engendrer 40 a 100 descendants en 2-3 semaines.\n\n2. Formes apteres et ailees : en conditions normales, les pucerons sont APTERES (sans ailes) et restent sur la meme plante. Quand la colonie devient surpeuplee ou que la plante se deteriore, des formes AILEES sont produites. Les ailees se dispersent vers de nouvelles plantes, fondant de nouvelles colonies.\n\n3. Cycle sur tomate au Maroc : dans les regions chaudes (Souss-Massa), la reproduction est parthenogenetique toute l'annee (anholocyclique). Il n'y a pas de phase sexuee ni de ponte d'oeufs d'hiver. Les pucerons se multiplient en continu tant que les conditions sont favorables (10-30 degres C).\n\n4. Vitesse de multiplication : a 20-25 degres C, une generation dure 7-10 jours. Une femelle produit 3 a 5 jeunes par jour pendant 15-20 jours. Sans predateurs, une population peut etre multipliee par 10 a 20 en 2 semaines. En theorie, une seule femelle pourrait engendrer des milliards de descendants en une saison.\n\n5. Colonisation de la tomate : les pucerons ailes arrivent sur la tomate attires par la couleur verte (et repousses par le jaune argente et le blanc). Ils se posent, testent la plante avec leurs stylets, et si elle convient, s'installent et commencent a se reproduire. Les colonies se forment d'abord sur les jeunes pousses terminales, les faces inferieures des feuilles et les bouquets floraux.\n\n6. Production de miellat : en se nourrissant de seve phloemienne (tres riche en sucres), les pucerons excretent un liquide sucre appele MIELLAT. Ce miellat tombe sur les feuilles et les fruits inferieurs et sert de support a la FUMAGINE (Capnodium spp.), un champignon noir saprotrophe qui recouvre les surfaces et bloque la photosynthese.",

        propagation: [
            "Vol des formes ailees : les pucerons ailes sont produits en reponse au surpeuplement et se dispersent par vol sur des distances de quelques centaines de metres a plusieurs kilometres",
            "Transport par le vent : les pucerons ailes sont de faibles voiliers et sont emportes par le vent, parfois sur de longues distances (dizaines de km). C'est le principal mode de colonisation des nouvelles parcelles",
            "Plants de pepiniere infestes : des colonies de pucerons peuvent etre presentes sur les plants a la livraison, surtout sur la face inferieure des feuilles et les apex",
            "Adventices et cultures voisines : les adventices (morelle noire, chenopode, liseron, amarante) et les cultures voisines (poivron, aubergine, melon, pecher) hebergent des populations permanentes de pucerons",
            "Fourmis : certaines especes de fourmis (Lasius niger, Tapinoma) elevent les pucerons pour leur miellat. Elles les transportent d'une plante a l'autre et les protegent des predateurs. La presence de fourmis sur les plants est un indicateur de la presence de pucerons",
            "Ouvriers et materiel : les pucerons peuvent etre transportes passivement sur les vetements, les outils et les caisses de recolte",
            "Ouvertures des serres : les pucerons ailes penetrent par les portes, les ouvrants et les trous dans les filets, surtout au printemps et en automne"
        ]
    },

    facteurs: {
        climatiques: [
            "Temperatures moderees (optimum 18-25 degres C). La reproduction est maximale entre 20 et 25 degres C. Au-dessus de 30 degres C, la reproduction ralentit fortement et la mortalite augmente",
            "Printemps et automne : pics de population au Maroc. Les temperatures estivales excessives sous serre (> 35 degres C) limitent naturellement les populations en ete dans le Souss-Massa",
            "Absence de pluie : la pluie decroche mecaniquement les pucerons des feuilles. Les serres et tunnels sont donc plus favorables que le plein champ",
            "Temps calme et doux au printemps : favorise les vols de colonisation des formes ailees",
            "Humidite moderee (50-70 %) : les conditions trop seches ralentissent la reproduction, les conditions tres humides favorisent les champignons entomopathogenes (Entomophthora, Beauveria)"
        ],
        sol: [
            "Exces de fertilisation azotee : augmente la concentration en acides amines libres dans la seve, rendant les plants tres attractifs et nutritifs pour les pucerons. L'azote est le facteur nutritionnel le plus determinant",
            "Sols riches en matiere organique facilement mineralisable : liberent beaucoup d'azote mineral, meme effet que la surfertilisation",
            "Irrigation excessive : favorise une croissance vegetative luxuriante et succulente, tres attractive pour les pucerons"
        ],
        pratiques: [
            "Surfertilisation azotee : le facteur agronomique le plus important. Un exces d'azote augmente la teneur en acides amines solubles dans le phloeme, ce qui accelere la reproduction des pucerons et attire les formes ailees",
            "Culture sous serre sans filets anti-insectes : les serres offrent un microclimat ideal (absence de pluie, temperature moderee) mais les ouvertures non protegees laissent entrer les ailees",
            "Monoculture de solanacees (tomate-poivron-aubergine) : maintien de populations importantes de M. persicae et M. euphorbiae d'une culture a l'autre",
            "Non-elimination des adventices autour des serres : reservoirs permanents de pucerons et de virus",
            "Utilisation de pyrethrinoides a large spectre : detruisent les auxiliaires (coccinelles, chrysopes, syrphes, Aphidius) et provoquent des resurgences de pucerons",
            "Absence de surveillance : les colonies de pucerons sont souvent detectees tardivement quand le miellat et la fumagine sont deja installes",
            "Plants de pepiniere non controles : introduction de pucerons et potentiellement de virus dans la serre"
        ],
        erreurs: [
            "Confondre un enroulement viral des feuilles (TYLCV transmis par la mouche blanche) avec un enroulement cause par les pucerons : les pucerons provoquent un enroulement VERS LE BAS des feuilles avec presence visible de colonies, le TYLCV provoque un enroulement vers le HAUT avec jaunissement sans pucerons visibles",
            "Traiter avec des pyrethrinoides a large spectre : detruisent les auxiliaires (Aphidius, coccinelles, chrysopes, syrphes) et provoquent une resurgence pire que l'infestation initiale",
            "Negliger le role vecteur des pucerons : meme quelques pucerons ailes de passage (sans colonisation) peuvent transmettre des virus de maniere NON PERSISTANTE (piqures d'essai). Les insecticides ne protegent PAS contre la transmission non persistante car le virus est transmis en quelques secondes, avant que l'insecticide n'agisse",
            "Surfertiliser en azote pour booster la croissance : cela nourrit les pucerons autant que la plante",
            "Ignorer la presence de fourmis sur les plants : les fourmis protegent activement les pucerons contre les predateurs. Il faut aussi lutter contre les fourmis",
            "Ne pas verifier les plants de pepiniere : un seul plant infeste peut introduire une colonie dans toute la serre"
        ]
    },

    symptomes: {
        feuilles: "STADE INITIAL :\nPresence de petites colonies de pucerons (5-20 individus) sur la face inferieure des jeunes feuilles terminales et autour des apex. Les pucerons sont visibles a l'oeil nu (1-3 mm), vert clair (M. persicae) ou plus grands et verts/roses (M. euphorbiae). Quelques gouttes de miellat brillant sur les feuilles. Legere crispation des jeunes feuilles.\n\nSTADE INTERMEDIAIRE :\nLes colonies s'etendent : des dizaines a des centaines de pucerons sur les jeunes pousses, les bouquets floraux et la face inferieure des feuilles. Les feuilles commencent a s'enrouler vers le BAS (epinastie) et a se gaufrer. Presence abondante de miellat collant sur les feuilles et les fruits inferieurs. Apparition de fumagine (feutrage noir) sur le miellat. Des exuvies blanches (mues) parsement les colonies. Des formes ailees apparaissent dans les colonies.\n\nSTADE AVANCE :\nDeformation severe des apex et des jeunes pousses. Feuilles enroulees, crispees, jaunissantes. Fumagine dense recouvrant les feuilles, les tiges et les fruits. Affaiblissement general du plant. Avortement de fleurs et de jeunes fruits. Presence de fourmis circulant sur les tiges (elevage de pucerons pour le miellat). Les exuvies blanches forment un feutrage sec sur les feuilles. Si des symptomes viraux apparaissent (mosaique, deformations, jaunissement) : transmission virale par les pucerons.",

        tiges: "Les tiges ne sont generalement pas colonisees directement par les pucerons, sauf au niveau des apex et des noeuds ou emergent les jeunes pousses laterales. En cas de forte infestation, des colonies peuvent s'installer sur les parties tendres de la tige principale (sommet, entre-noeuds en croissance). Le miellat coule le long des tiges et favorise le developpement de la fumagine (film noir huileux). Les fourmis circulant sur les tiges pour acceder aux colonies sont un signe indirect de la presence de pucerons.",

        fruits: "Les pucerons ne piquent pas directement les fruits de tomate (peau trop epaisse). Les degats sur les fruits sont INDIRECTS :\n\n- Miellat : le liquide sucre excrete par les pucerons tombe par gravite sur les fruits situes sous les colonies, les rendant collants.\n- Fumagine : le champignon noir Capnodium spp. se developpe sur le miellat, recouvrant les fruits d'un film noir inesthetique. Les fruits ne sont pas pourris mais deviennent invendables en frais.\n- Fruits plus petits : la succion de seve et l'enroulement des feuilles reduisent la photosynthese et l'alimentation des fruits.\n- Deformations : si l'infestation touche les bouquets floraux, les fruits peuvent etre deformes ou avortes.\n- Transmission virale : les virus transmis par les pucerons (CMV, PVY, AMV) provoquent des symptomes sur les fruits : mosaique, deformation, necroses annulaires, murissement irregulier.",

        racines: "Les racines ne sont pas affectees par les pucerons aeriens. Certains pucerons racinaires (Smynthurodes betae) peuvent parfois etre trouves sur les racines de solanacees, mais c'est rare sur tomate au Maroc et de faible impact economique.",

        stade: "Les pucerons peuvent attaquer la tomate a tous les stades, mais les periodes les plus sensibles sont :\n\n- Pepiniere et jeunes plants (0-3 semaines apres plantation) : les plantules sont tres sensibles. Quelques pucerons suffisent a transmettre des virus avec des consequences graves pour toute la duree de la culture.\n- Croissance vegetative active (3-8 semaines) : les pousses tendres et les jeunes feuilles sont tres attractives. C'est la periode de multiplication maximale des colonies.\n- Floraison : les bouquets floraux sont colonises, entrainant une reduction de la nouaison.\n\nAu Maroc, les pics d'infestation :\n- Mars-mai : pic printanier majeur, temperatures ideales (18-25 degres C) et vols de colonisation des formes ailees\n- Octobre-decembre : pic automnal dans les serres du Souss-Massa\n- Reduction naturelle en ete (juin-aout) quand les temperatures sous serre depassent 30-35 degres C",

        differenciation: "Mouche blanche (Bemisia, Trialeurodes) : insectes BLANCS, ailes farineuses, s'envolant en nuage quand on secoue la plante. Nymphes translucides plates sur la face inferieure. Aussi miellat + fumagine, mais pas d'enroulement vers le bas.\nThrips : insectes fins et allonges (1-2 mm), taches argentees sur les feuilles (zones de ponte). Pas de miellat ni de fumagine. Pas d'enroulement.\nAcariens : microscopiques (0,3-0,5 mm), jaunissement piquete, toiles de soie (Tetranychus). Pas de miellat. Pas de colonies visibles a l'oeil nu.\nEnroulement viral (TYLCV) : enroulement des feuilles vers le HAUT avec jaunissement des bords, SANS pucerons visibles. Transmis par la mouche blanche, pas par les pucerons.\nCarence en potassium : jaunissement et enroulement des bords des vieilles feuilles. Pas de pucerons, pas de miellat."
    },

    lutte: {
        prevention: [
            "Installer des filets anti-insectes de maille fine (Mesh 50 = 0,3 mm) sur toutes les ouvertures de la serre : portes, ouvrants, aeration. Les mailles anti-pucerons sont plus fines que les mailles anti-mouche blanche standard",
            "Installer des panneaux jaunes collants (chromatiques) a l'entree de la serre et en bordure : 1 panneau tous les 10-15 m. Le jaune attire fortement les pucerons ailes et permet la detection precoce et le piegeage partiel",
            "Controler les plants de pepiniere a la reception : examiner les apex et la face inferieure des jeunes feuilles pour detecter les pucerons. Refuser les lots infestes",
            "Limiter la fertilisation azotee : un exces d'azote rend les plants tres attractifs pour les pucerons. Equilibrer la fertilisation N-P-K (augmenter K par rapport a N)",
            "Eliminer les adventices autour de la serre dans un rayon de 20-30 m : morelle noire, chenopode, amarante, liseron hebergent des populations de pucerons et des virus",
            "Favoriser les auxiliaires naturels : ne pas utiliser de pyrethrinoides ni d'organophosphores a large spectre. Installer des bandes fleuries et des haies autour des serres pour heberger les coccinelles, chrysopes, syrphes et Aphidius",
            "Introduire des lachers preventifs d'Aphidius colemani (parasitoide) des la plantation : 0,5-1 individu par m2 par semaine pendant les 6 premieres semaines",
            "Utiliser du paillage reflechissant (argente ou aluminium) au sol : la reflexion des UV desorienter les pucerons ailes et reduit le taux de colonisation de 50 a 70 %",
            "Eliminer les gourmands et les pousses laterales basses : ces pousses tendres sont les premiers sites de colonisation des pucerons",
            "Lutter contre les fourmis qui protegent les pucerons : appats a base de borax ou bandes de glu autour des pieds de serre et sur les tuteurs"
        ],
        biologique: [
            "Aphidius colemani : micro-guepe parasitoide (2 mm) specialisee dans le parasitisme de M. persicae et A. gossypii. La femelle pond un oeuf a l'interieur du puceron. La larve se developpe dans le puceron vivant et le tue en 7-10 jours. Le puceron parasite se transforme en une momie doree-brun, gonflée et durcie. Introduire 0,5 a 1 individu par m2 par semaine en preventif, ou 3-5/m2 en foyers. Tres efficace en serre",
            "Aphidius ervi : micro-guepe parasitoide specialisee dans les GROS pucerons (Macrosiphum euphorbiae, Aulacorthum solani). Complementaire d'A. colemani. Introduire 0,5-1/m2 par semaine. Les momies d'A. ervi sont plus grosses et plus sombres que celles d'A. colemani",
            "Chrysoperla carnea (chrysope verte) : les larves (2-10 mm, grises, en forme de crocodile) sont des predateurs voraces de pucerons. Une larve consomme 200 a 500 pucerons au cours de son developpement (2-3 semaines). Introduire 5-10 larves par m2 en foyers ou 1-2/m2 en preventif. Les adultes se nourrissent de pollen et de miellat (pas de pucerons)",
            "Adalia bipunctata (coccinelle a 2 points) : une larve consomme 300 a 400 pucerons pendant son developpement. L'adulte consomme 40 a 60 pucerons par jour. Introduire les larves a raison de 5-10 par foyer. Les adultes ailees peuvent s'echapper de la serre : preferer les larves",
            "Episyrphus balteatus (syrphe ceinture) : les larves (vert translucide, vermiformes) consomment 400 a 700 pucerons chacune. Les adultes (mouches rayees noir et jaune, ressemblant a de petites guepes) se nourrissent de pollen. Favoriser leur presence par des bandes fleuries",
            "Aphelinus abdominalis : micro-guepe parasitoide complementaire d'Aphidius. Parasite principalement M. euphorbiae et A. solani. Les momies sont NOIRES (et non dorees comme Aphidius). 0,5-1/m2 par semaine",
            "Beauveria bassiana : champignon entomopathogene. Pulverisation de spores (2-3 x 10^9 spores/mL) sur les colonies. Les spores germent sur la cuticule du puceron et le tuent en 3-7 jours. Efficace en conditions humides (HR > 60 %). Compatible avec les parasitoïdes Aphidius",
            "Savon potassique (savon noir) : 10-20 g/L en pulverisation directe sur les colonies. Action par etouffement (obstruction des stigmates). Efficace sur contact direct, pas de remanence. Compatible avec les auxiliaires apres sechage (quelques heures). Renouveler tous les 5-7 jours"
        ],
        chimique: [
            "Flonicamide (Teppeki 500 WG) : aphicide specifique (IRAC 29). 0,1-0,14 kg/ha. Bloque les canaux alimentaires du puceron : les pucerons cessent de s'alimenter en quelques heures et meurent en 2-3 jours de famine. Action systemique (monte dans la plante). Tres selectif pour les auxiliaires (coccinelles, Aphidius, chrysopes, abeilles). Reference en lutte integree. DAR : 3 jours",
            "Pymetrozine (Plenum 50 WG) : aphicide specifique (IRAC 9B). 0,4 kg/ha. Inhibe la salivation et la succion : les pucerons ne peuvent plus s'alimenter. Action systemique et translaminiaire. Selectif pour la plupart des auxiliaires. DAR : 3 jours",
            "Spirotetramate (Movento 100 SC) : acide tetramique (IRAC 23). 0,5-0,75 L/ha. Inhibe la biosynthese des lipides. Action systemique bidirectionnelle unique (monte ET descend dans la plante, atteignant les pucerons sur les racines et les parties non traitees). Efficace sur tous les stades. Bonne selectivite auxiliaires. DAR : 3 jours",
            "Sulfoxaflor (Closer 120 SC) : sulfoximine (IRAC 4C). 0,2-0,3 L/ha. Agoniste des recepteurs nicotiniques de l'acetylcholine. Action rapide par ingestion et contact. Efficace contre les populations resistantes aux neonicotinoïdes. ATTENTION : toxique pour les abeilles (ne pas appliquer en floraison active). DAR : 1 jour",
            "Acetamipride (Mospilan 20 SP) : neonicotinoide (IRAC 4A). 0,25 kg/ha. Action systemique. Efficace contre les pucerons et les mouches blanches. ATTENTION : les neonicotinoïdes sont toxiques pour les abeilles et les auxiliaires. Resistances croissantes chez M. persicae. A utiliser avec precaution et en derniere intention. DAR : 3 jours",
            "Pyriproxyfene (Admiral 10 EC) : regulateur de croissance (IRAC 7C). 0,5-0,75 L/ha. Analogue de l'hormone juvenile. Empeche la reproduction et les mues des pucerons. Action lente mais longue remanence. Bonne selectivite pour les parasitoïdes adultes (Aphidius). DAR : 7 jours",
            "STRATEGIE ANTI-RESISTANCE : M. persicae est l'un des insectes les plus resistants aux insecticides au monde (resistances documentees aux organophosphores, carbamates, pyrethroides et neonicotinoïdes). Alterner obligatoirement les groupes IRAC : flonicamide (29) -> spirotetramate (23) -> pymetrozine (9B) -> sulfoxaflor (4C). Privilegier les aphicides specifiques selectifs pour les auxiliaires"
        ],
        mecanique: [
            "Aspersion d'eau sous pression sur les colonies : un jet d'eau puissant sur la face inferieure des feuilles et les apex decroche mecaniquement les pucerons. Methode simple et gratuite, a repeter tous les 2-3 jours. Reduit les populations de 60 a 80 % temporairement",
            "Suppression manuelle des pousses tres infestees : couper les apex et les gourmands colonises par les pucerons. Les mettre dans un sac ferme et les sortir de la serre avant que les pucerons ailes ne s'en echappent",
            "Panneaux jaunes collants : les pucerons ailes sont tres attires par le jaune vif. Installer des panneaux jaunes englues (40 x 25 cm) a raison de 1 panneau tous les 10-15 m, au niveau de la canopee. Fonction de detection (monitoring) et de piegeage partiel",
            "Paillage reflechissant argente : les pucerons ailes evitent de se poser sur les zones a forte reflexion UV. Le paillage aluminium ou argente au sol reduit la colonisation de 50 a 70 %. Tres efficace en debut de culture",
            "Lutte contre les fourmis : les fourmis protegent les pucerons contre les predateurs et les parasitoides. Appliquer des bandes de glu sur les tuteurs et les pieds de serre. Utiliser des appats a base de borax + sucre pres des nids de fourmis",
            "Filets anti-insectes maille fine (Mesh 50) : les mailles standard anti-mouche blanche (Mesh 40) laissent passer les pucerons ailes. Utiliser une maille plus fine (0,3 mm) pour une protection efficace. Verifier regulierement l'integrite des filets"
        ]
    },

    produits: [
        {
            nom: "Teppeki 500 WG (Flonicamide)",
            type: "Aphicide specifique selectif - Reference IPM",
            matiere: "Flonicamide 500 g/kg",
            action: "Pyridinecarboxamide (groupe IRAC 29). Mode d'action unique : bloque les canaux alimentaires du stylet des pucerons (canaux mecanosensoriels). Le puceron ne peut plus detecter les tubes cribles du phloeme et cesse de s'alimenter en quelques heures. Mort par famine en 2-3 jours. Action systemique ascendante. Efficace contre tous les stades et toutes les especes de pucerons de la tomate.",
            application: "0,1 a 0,14 kg/ha en pulverisation foliaire. Volume de bouillie : 600-1 000 L/ha. Peut aussi etre applique en irrigation (0,1-0,14 kg/ha dans le systeme goutte-a-goutte). Renouveler apres 14-21 jours si necessaire. Maximum 2 applications par cycle.",
            precautions: "DAR : 3 jours. Selectivite EXCEPTIONNELLE pour les auxiliaires : non toxique pour Aphidius colemani, A. ervi, Chrysoperla, coccinelles, syrphes, abeilles et bourdons. Peut etre utilise le jour meme d'un lacher de parasitoides. Reference absolue en programme IPM. Pas de resistance croisee avec les autres familles d'insecticides.",
            disponibleMaroc: true
        },
        {
            nom: "Movento 100 SC (Spirotetramate)",
            type: "Insecticide systemique bidirectionnel",
            matiere: "Spirotetramate 100 g/L",
            action: "Acide tetramique (groupe IRAC 23). Inhibe la biosynthese des lipides (enzyme acetyl-CoA carboxylase). Propriete unique : AMBIMOBILITE dans la plante (monte et descend par le xyleme ET le phloeme). Atteint les pucerons caches dans les feuilles enroulees et meme les pucerons racinaires. Efficace sur tous les stades. Reduit la fecondite des femelles adultes.",
            application: "0,5 a 0,75 L/ha en pulverisation foliaire. Volume de bouillie : 600-1 000 L/ha. Appliquer quand les colonies sont encore de taille moderee. Renouveler apres 14 jours. Maximum 2 applications par cycle.",
            precautions: "DAR : 3 jours. Bonne selectivite pour les parasitoides adultes (Aphidius) mais toxique pour les stades larvaires de certains auxiliaires. Appliquer de preference en dehors des periodes de lacher. Egalement efficace contre les mouches blanches, les cochenilles et les psylles.",
            disponibleMaroc: true
        },
        {
            nom: "Plenum 50 WG (Pymetrozine)",
            type: "Aphicide specifique anti-alimentation",
            matiere: "Pymetrozine 500 g/kg",
            action: "Pyridine azomethine (groupe IRAC 9B). Agit sur les recepteurs TRP des organes chordonaux (organes d'equilibre). Inhibe specifiquement la salivation et la penetration du stylet dans le phloeme. Les pucerons traites restent immobiles sur la feuille, stylets retires, et meurent de famine en 24-72 h. Action systemique et translaminiaire.",
            application: "0,4 kg/ha en pulverisation foliaire. Volume de bouillie : 600-800 L/ha. Renouveler apres 10-14 jours. Maximum 3 applications par cycle.",
            precautions: "DAR : 3 jours. Selectivite correcte pour les principaux auxiliaires (Aphidius, coccinelles, chrysopes). Non toxique pour les abeilles. Resistances croisees possibles avec les neonicotinoides chez M. persicae dans certaines regions.",
            disponibleMaroc: true
        },
        {
            nom: "Aphidius colemani (auxiliaire parasitoide)",
            type: "Agent de lutte biologique - Micro-guepe parasitoide",
            matiere: "Aphidius colemani Viereck, adultes ou momies",
            action: "Micro-hymenoptere braconide (2 mm, noir, antennes longues). La femelle detecte les pucerons grace aux signaux chimiques emis par la plante attaquee (synomones). Elle pond UN oeuf a l'interieur du puceron en le piquant avec son ovipositeur (< 1 seconde). La larve se developpe dans le corps du puceron vivant, qui continue de s'alimenter quelques jours. Apres 7-10 jours, le puceron est tue et se transforme en MOMIE : enveloppe doree-brun, gonflee et durcie. L'adulte emerge en decoupant un opercule rond dans la momie. Une femelle parasite 200-400 pucerons au cours de sa vie de 10-14 jours.",
            application: "Preventif : 0,5 a 1 individu par m2 par semaine, pendant 6-8 semaines a partir de la plantation. Curatif (foyers) : 3-5 individus par m2 par semaine. Distribuer les flacons de momies uniformement dans la serre. Les adultes emergent en 1-3 jours et cherchent activement les pucerons. Conserver au frais (8-10 degres C) et utiliser dans les 24-48 h.",
            precautions: "Sensible a la plupart des insecticides chimiques (pyrethrinoides, neonicotinoides, organophosphores). Compatible avec flonicamide (IRAC 29), Bt et spirotetramate (si applique 3 jours avant le lacher). Ne pas utiliser simultanement avec des pyrethrinoides. Les hyperparasitoides (Dendrocerus, Asaphes) peuvent parasiter les momies d'Aphidius et reduire l'efficacite : surveiller l'emergence et eliminer les momies a trous irreguliers.",
            disponibleMaroc: true
        },
        {
            nom: "Chrysoperla carnea (chrysope verte - auxiliaire predateur)",
            type: "Agent de lutte biologique - Predateur generaliste",
            matiere: "Chrysoperla carnea Stephens, larves L2",
            action: "Nevroptere dont la larve est un predateur vorace et generaliste. La larve (2-10 mm, gris-brun, en forme de crocodile avec des mandibules en forme de pinces) saisit le puceron, y injecte des enzymes digestives et aspire le contenu. Consomme 200 a 500 pucerons pendant son developpement larvaire (14-21 jours). Egalement predatrice de thrips, oeufs de noctuelles, acariens et mouches blanches.",
            application: "Curatif (foyers) : 5 a 10 larves par m2 deposees directement sur les colonies de pucerons. Preventif : 1-2 larves par m2. Les larves sont livrees en flacons avec de la balle de riz ou des oeufs d'Ephestia comme nourriture de transit. Les repartir le matin a l'ombre sur les feuilles infestees.",
            precautions: "Les larves sont cannibales si elles manquent de proie : ne pas sur-doser. Sensibles aux pyrethrinoides et aux neonicotinoides. Compatibles avec flonicamide, Bt, savon potassique (apres sechage). Les adultes (verts, ailes transparentes) sont nocturnes et se nourrissent de pollen/nectar/miellat, PAS de pucerons. Les adultes peuvent quitter la serre : les lachers de larves sont preferes.",
            disponibleMaroc: true
        },
        {
            nom: "Savon potassique (Savon noir agricole)",
            type: "Insecticide de contact naturel",
            matiere: "Sels de potassium d'acides gras (savon noir a base d'huile d'olive ou de colza)",
            action: "Action physique par contact : le savon dissout la couche cireuse protectrice de la cuticule du puceron et obstrue les stigmates respiratoires, provoquant la mort par deshydratation et asphyxie. Efficace sur tous les stades mobiles (larves et adultes). Pas d'action sur les oeufs. Aucune remanence (action instantanee uniquement au moment du contact).",
            application: "10 a 20 g/L (1 a 2 %) en pulverisation directe sur les colonies. Bien mouiller la face inferieure des feuilles et les apex. Utiliser un volume de bouillie eleve (1 000-1 500 L/ha) pour une bonne couverture. Renouveler tous les 5-7 jours tant que les colonies sont presentes. Pas de limitation du nombre d'applications.",
            precautions: "DAR : 0 jour. Compatible agriculture biologique. Non toxique pour les mammiferes, les oiseaux et les poissons. Compatible avec les auxiliaires APRES sechage (quelques heures). Le contact direct avec le savon liquide tue aussi les auxiliaires : eviter de pulveriser directement sur les momies d'Aphidius et les larves de coccinelles. Ne pas depasser 2 % pour eviter la phytotoxicite sur les jeunes feuilles sensibles.",
            disponibleMaroc: true
        }
    ],

    points_cles: [
        "Le danger PRINCIPAL des pucerons est la TRANSMISSION DE VIRUS (CMV, PVY, AMV), pas les degats directs de succion. Quelques pucerons ailes de passage suffisent a contaminer une culture entiere. Les insecticides ne protegent PAS contre la transmission non persistante (virus transmis en quelques secondes lors des piqures d'essai). Seuls les filets anti-pucerons (Mesh 50), le paillage reflechissant et l'utilisation de varietes resistantes aux virus offrent une vraie protection.",
        "La SURFERTILISATION AZOTEE est le facteur agronomique numero 1 favorisant les pucerons. Un exces d'azote augmente la teneur en acides amines solubles dans la seve, ce qui accelere la reproduction des pucerons et attire les formes ailees. Equilibrez la fertilisation N-P-K : augmenter le potassium (K) par rapport a l'azote (N).",
        "Les PARASITOIDES Aphidius colemani (pour M. persicae, A. gossypii) et Aphidius ervi (pour M. euphorbiae) sont les piliers de la lutte biologique. Introduisez-les en PREVENTIF des la plantation (0,5-1/m2/semaine). Les momies (pucerons parasites dores-bruns) sont le signe d'un parasitisme actif. Un taux de parasitisme > 30 % suffit generalement a controler la population.",
        "JAMAIS de pyrethrinoides contre les pucerons en serre : ils detruisent TOUS les auxiliaires (Aphidius, coccinelles, chrysopes, syrphes) et provoquent une resurgence catastrophique. Utilisez exclusivement des aphicides selectifs (flonicamide IRAC 29, spirotetramate IRAC 23, pymetrozine IRAC 9B) qui preservent les auxiliaires.",
        "Les FOURMIS sont les alliees des pucerons : elles les protegent activement contre les predateurs et les parasitoides, et les transportent vers de nouvelles plantes. Luttez contre les fourmis (bandes de glu, appats borax) pour que les auxiliaires puissent faire leur travail efficacement."
    ],

    protocole_traitement: {
        titre: "Protocole de lutte integree contre les pucerons de la tomate",
        etapes: [
            {
                titre: "Etape 1 : Prevention avant et a la plantation",
                description: "Installer des filets anti-pucerons (Mesh 50, maille 0,3 mm) sur toutes les ouvertures de la serre. Poser du paillage reflechissant argente au sol pour repousser les pucerons ailes. Installer des panneaux jaunes collants (1 tous les 10-15 m) pour la detection. Controler les plants de pepiniere (apex, face inferieure des feuilles). Eliminer les adventices dans un rayon de 30 m. Equilibrer la fertilisation : eviter l'exces d'azote."
            },
            {
                titre: "Etape 2 : Lachers preventifs de parasitoides (des la plantation)",
                description: "Introduire Aphidius colemani a 0,5-1 individu par m2 par semaine pendant les 6-8 premieres semaines. Si Macrosiphum euphorbiae est attendu (historique), ajouter Aphidius ervi a la meme dose. Les parasitoides s'etablissent dans la serre et commenceront a parasiter les pucerons des leur arrivee. Surveiller l'apparition des premieres momies (signe de parasitisme actif). Lutter contre les fourmis (bandes de glu sur tuteurs)."
            },
            {
                titre: "Etape 3 : Detection precoce et interventions ciblees",
                description: "Chaque semaine, examiner 20-30 plants (apex, face inferieure des 3 dernieres feuilles deployees, bouquets floraux). Compter les pucerons et les momies. Seuil d'intervention : > 5-10 pucerons/feuille avec un taux de parasitisme < 20 %. Si les colonies sont localisees : aspersion d'eau sous pression sur les foyers + lachers de chrysopes (5-10 larves/m2 en foyer). Si generalise : savon potassique (10-15 g/L) sur les colonies."
            },
            {
                titre: "Etape 4 : Traitement chimique selectif (si necessaire)",
                description: "Si les parasitoides et les predateurs ne suffisent pas a controler la population : appliquer un aphicide selectif compatible avec la lutte biologique. 1er choix : flonicamide (Teppeki, 0,1-0,14 kg/ha) - compatible le jour meme avec les lachers d'Aphidius. 2eme choix : spirotetramate (Movento, 0,5-0,75 L/ha) - attendre 3 jours avant de relacher des auxiliaires. 3eme choix : pymetrozine (Plenum, 0,4 kg/ha). NE PAS utiliser de pyrethrinoides, organophosphores ou neonicotinoïdes."
            },
            {
                titre: "Etape 5 : Suivi et prevention virale",
                description: "Continuer la surveillance hebdomadaire. Compter le ratio pucerons vivants / momies pour evaluer l'efficacite du parasitisme. Eliminer les plants presentant des symptomes viraux (mosaique, deformation) : ils sont des sources de virus que les pucerons peuvent redistribuer aux plants sains. En fin de culture : nettoyer la serre, eliminer les residus vegetaux, desinfecter. Analyser les resultats du monitoring pour adapter la strategie au cycle suivant."
            }
        ]
    },

    faq: [
        {
            question: "Les insecticides protegent-ils contre la transmission de virus par les pucerons ?",
            reponse: "NON, pas contre les virus transmis sur le mode NON PERSISTANT (CMV, PVY, AMV). Dans ce mode, le virus est acquis par le puceron en quelques SECONDES lors d'une simple piqure d'essai sur une plante infectee, et transmis en quelques secondes a la plante suivante. Le puceron n'a pas besoin de s'installer ou de se nourrir longtemps : il suffit qu'il pique et reparte. Aucun insecticide ne peut agir aussi vite. Meme un insecticide systemique n'empechera pas le puceron aile de piquer la plante une premiere fois avant de mourir. Les seules protections efficaces contre la transmission non persistante sont : (1) les filets anti-pucerons (Mesh 50) qui empechent les ailes d'atteindre les plants, (2) le paillage reflechissant qui repousse les ailes, (3) les varietes resistantes aux virus, (4) la suppression des sources de virus (plants contamines, adventices infectees)."
        },
        {
            question: "Comment reconnaitre une momie d'Aphidius (puceron parasite) ?",
            reponse: "Les momies d'Aphidius sont tres faciles a reconnaitre : c'est un puceron qui a ete GONFLE et DURCI, prenant une forme bombee et une couleur DOREE-BRUN (momie d'A. colemani) ou brun FONCE (momie d'A. ervi). La momie est collee a la feuille par un fil de soie. Elle est lisse et brillante, nettement differente d'un puceron vivant (mou, vert). Au bout de quelques jours, un petit trou rond apparait a l'arriere de la momie : c'est la par ou l'adulte Aphidius est sorti. La presence de momies est un EXCELLENT signe : elle prouve que les parasitoides sont actifs. Un taux de parasitisme > 30 % (momies / total pucerons) indique generalement que la population de pucerons est en cours de controle."
        },
        {
            question: "Pourquoi les fourmis aggravent-elles les problemes de pucerons ?",
            reponse: "Les fourmis et les pucerons ont une relation de MUTUALISME : les fourmis recoltent le miellat sucre produit par les pucerons (source d'energie), et en echange, elles PROTEGENT les pucerons contre leurs ennemis naturels. Les fourmis attaquent et chassent activement les coccinelles, les chrysopes et les Aphidius qui tentent d'approcher les colonies de pucerons. Elles peuvent meme transporter des pucerons vers de nouvelles plantes pour etendre la source de miellat. En serre, la presence de fourmis sur les tiges est un indicateur fiable de la presence de pucerons. La lutte contre les fourmis (bandes de glu autour des tuteurs et des pieds de serre, appats a base de borax + sucre pres des nids) est ESSENTIELLE pour que la lutte biologique fonctionne."
        },
        {
            question: "Quelle difference entre Aphidius colemani et Aphidius ervi ? Lequel choisir ?",
            reponse: "Les deux sont complementaires : Aphidius colemani (2 mm, noir) est specialise dans les PETITS pucerons : Myzus persicae et Aphis gossypii. C'est l'espece la plus utilisee car M. persicae est le puceron dominant sur tomate. Aphidius ervi (3-4 mm, brun) est specialise dans les GROS pucerons : Macrosiphum euphorbiae et Aulacorthum solani. RECOMMANDATION : utilisez les DEUX especes en melange. Introduisez A. colemani + A. ervi ensemble a 0,5-1/m2/semaine chacun. Cela couvre toutes les especes de pucerons presentes. Si vous ne pouvez en acheter qu'un seul, commencez par A. colemani (cible M. persicae, le plus frequent)."
        }
    ],

    ressources: [
        "INRA Maroc - Les pucerons des cultures maraicheres : identification, biologie et lutte integree dans le Souss-Massa",
        "ONSSA - Liste des aphicides homologues sur tomate au Maroc (mise a jour annuelle)",
        "Van Emden H.F. & Harrington R. (2017) - Aphids as Crop Pests. 2nd Edition, CABI Publishing. Reference mondiale sur la biologie et la lutte contre les pucerons",
        "Blackman R.L. & Eastop V.F. (2007) - Taxonomic Issues. In: Aphids as Crop Pests, CABI. Guide d'identification des pucerons des cultures",
        "IRAC (Insecticide Resistance Action Committee) - Gestion de la resistance chez Myzus persicae : recommandations et mecanismes de resistance",
        "Koppert Biological Systems - Guide technique : lutte biologique contre les pucerons avec Aphidius colemani, A. ervi et Chrysoperla carnea",
        "Rabasse J.M. & Wyatt I.J. (1985) - Biology of aphids and their parasitoids in greenhouses. In: Biological Pest Control, Belhaven Press",
        "IAV Hassan II - Cours d'entomologie appliquee : les pucerons des cultures sous serre au Maroc",
        "EPPO - Fiches de donnees : Myzus persicae, Macrosiphum euphorbiae, Aphis gossypii",
        "FAO - Guide de lutte integree contre les pucerons en production de tomate sous serre"
    ]
};
