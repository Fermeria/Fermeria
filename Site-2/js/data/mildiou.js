const MALADIE_MILDIOU = {
    id: "mildiou",
    nom: "Mildiou de la tomate",
    nomScientifique: "Phytophthora infestans (Mont.) de Bary",
    type: "fongique",
    emoji: "\uD83C\uDF43",
    resumeCourt: "Le mildiou est la maladie la plus devastatrice de la tomate dans le monde. Causee par l'oomycete Phytophthora infestans, elle peut detruire une recolte entiere en moins d'une semaine lorsque les conditions sont favorables. Reconnaissable a ses taches huileuses brun-olive sur les feuilles et son feutrage blanc sous le limbe, elle represente la menace numero un pour les producteurs de tomate au Maroc et dans tout le bassin mediterraneen.",
    cultures: ["Tomate", "Pomme de terre", "Aubergine", "Poivron", "Piment", "Tabac"],

    presentation: {
        description: "Le mildiou de la tomate est cause par Phytophthora infestans, un organisme appartenant au groupe des oomycetes (faux champignons) de la classe des Peronosporomycetes. Contrairement aux vrais champignons, les oomycetes possedent des parois cellulaires composees de cellulose (et non de chitine) et produisent des zoospores biflagellees capables de nager dans l'eau. Cette particularite biologique explique pourquoi le mildiou est si etroitement lie aux conditions humides.\n\nHistoriquement, le mildiou est tristement celebre pour avoir provoque la Grande Famine irlandaise (1845-1849), detruisant les cultures de pomme de terre et causant la mort d'environ un million de personnes et l'emigration de deux millions d'autres. Depuis cette catastrophe, Phytophthora infestans reste l'un des pathogenes vegetaux les plus etudies au monde.\n\nSur la tomate, le mildiou peut attaquer tous les organes aeriens : feuilles, tiges, petioles et fruits. La progression de la maladie est extremement rapide en conditions favorables (12-22\u00B0C, humidite > 90%). Un champ apparemment sain peut etre totalement detruit en 7 a 10 jours si aucune mesure n'est prise. C'est cette vitesse de progression qui rend le mildiou si redoutable et impose une vigilance permanente.",
        importance: "Le mildiou represente la premiere cause de pertes economiques sur la tomate a l'echelle mondiale. Les pertes annuelles sont estimees a plus de 6 milliards de dollars dans le monde. Au Maroc, ou la tomate est la principale culture maraichere (plus de 80 000 hectares et 1,4 million de tonnes produites annuellement), le mildiou est particulierement problematique dans les regions du Souss-Massa, du Gharb, du Loukkos et du Saiss. Les cultures sous serre comme en plein champ sont concernees, avec une pression plus forte en automne-hiver et au printemps dans les zones cotieres ou l'humidite est elevee. Les pertes peuvent atteindre 100% en l'absence de traitement et en conditions favorables au pathogene.",
        historique: "Le mildiou a ete decrit pour la premiere fois sur la pomme de terre en Europe dans les annees 1840. Sur la tomate, les premieres epidemies majeures ont ete signalees a la fin du XIXe siecle. Au Maroc, le mildiou est un probleme chronique depuis le developpement de la culture intensive de la tomate dans les annees 1970-1980. L'apparition de nouvelles lignees clonales de P. infestans (notamment les lignees A2) dans les annees 2000 a accru la virulence et la capacite d'adaptation du pathogene, rendant certains fongicides moins efficaces.",
        impact_economique: "En plus des pertes directes de recolte, le mildiou engendre des couts importants lies aux traitements fongicides (10 a 15 pulverisations par saison dans les cas severes), a la main d'oeuvre de surveillance, et a la perte de qualite des fruits. Pour un hectare de tomate sous serre au Maroc, le cout des traitements anti-mildiou peut representer 8 000 a 15 000 MAD par campagne. Les fruits atteints sont invendables et les plants morts doivent etre arraches et detruits."
    },

    origine: {
        agent: "Phytophthora infestans (Mont.) de Bary, oomycete de l'ordre des Peronosporales, famille des Pythiaceae. Ce n'est pas un vrai champignon mais un organisme apparente aux algues brunes (Stramenopiles). Il existe deux types de compatibilite sexuelle (A1 et A2). La presence des deux types dans une meme region permet la reproduction sexuee et la formation d'oospores, structures de resistance capables de survivre dans le sol pendant plusieurs annees. Au Maroc, les deux types A1 et A2 ont ete detectes, ce qui rend la lutte plus complexe.",
        provenance: "L'agent pathogene est originaire de la region andine d'Amerique du Sud (probablement la vallee de Toluca au Mexique, centre de diversite genetique). Il s'est repandu mondialement au XIXe siecle par le commerce maritime de tubercules de pomme de terre. Le pathogene a continue d'evoluer : les populations actuelles sont genetiquement differentes et souvent plus agressives que les populations historiques. Au Maroc, les souches presentes sont principalement de type A2, introduites probablement via le materiel vegetal importe d'Europe.",
        cycle: "Le cycle biologique de P. infestans comprend plusieurs phases :\n\n1. SURVIE : Le pathogene survit entre les saisons de culture sous forme de mycelium dans les tubercules de pomme de terre infectes, dans les plants repousses (volunteers), et potentiellement sous forme d'oospores dans le sol (si les deux types A1 et A2 sont presents).\n\n2. PRODUCTION DE SPORANGES : Lorsque les conditions sont favorables (humidite > 90%, temperature 12-22\u00B0C), le mycelium produit des sporangiophores qui emergent par les stomates. Chaque sporangiophore porte 5 a 20 sporanges (spores) en forme de citron.\n\n3. DISSEMINATION : Les sporanges sont detaches par le vent ou les eclaboussures d'eau et transportes sur de courtes a longues distances (plusieurs dizaines de km par le vent). Un seul plant infecte peut produire des centaines de milliers de sporanges par jour.\n\n4. GERMINATION : A temperature superieure a 15\u00B0C, les sporanges germent directement en emettant un tube germinatif. A temperature inferieure a 15\u00B0C, ils liberent 8 a 12 zoospores biflagellees qui nagent dans le film d'eau a la surface des feuilles.\n\n5. PENETRATION : Le tube germinatif ou la zoospore encystee forme un appressorium (structure de penetration) qui traverse la cuticule et l'epiderme. La penetration peut aussi se faire par les stomates ou les blessures. L'humidite foliaire doit persister au moins 4 heures pour permettre l'infection.\n\n6. COLONISATION : Le mycelium se developpe dans les espaces intercellulaires et forme des haustorias (sucoirs) qui penetrent dans les cellules pour en extraire les nutriments. La periode d'incubation dure 3 a 7 jours.\n\n7. SPORULATION : De nouveaux sporangiophores emergent des stomates, generalement la nuit ou tot le matin quand l'humidite est maximale. Le cycle se repete alors, avec un nouveau cycle d'infection tous les 5 a 7 jours en conditions optimales.",
        propagation: [
            "Par le vent : les sporanges sont transportes sur de longues distances (10 a 50 km ou plus). Les masses d'air humide en provenance de zones infectees constituent la principale source d'inoculum primaire.",
            "Par les eclaboussures d'eau de pluie ou d'irrigation par aspersion : l'eau projette les sporanges du sol ou des feuilles basses vers les parties superieures des plants.",
            "Par les plants de pepiniere contamines : l'introduction de plants infectes dans une serre ou un champ sain est une voie majeure de contamination. Un seul plant malade peut contaminer tout un lot.",
            "Par les tubercules de pomme de terre infectes : les tas de pommes de terre malades ou les repousses de pomme de terre dans les champs voisins sont des sources d'inoculum tres importantes.",
            "Par les residus de culture non detruits : le mycelium survit dans les debris vegetaux contamines au sol, surtout dans les conditions fraiches et humides.",
            "Par les outils et le materiel agricole : le mycelium et les sporanges peuvent etre transportes sur les vetements, les bottes, les outils de taille et les machines.",
            "Par l'eau d'irrigation contaminee : les zoospores peuvent survivre et se deplacer dans l'eau, notamment dans les bassins de recuperation d'eau de drainage en serre."
        ]
    },

    facteurs: {
        climatiques: [
            "Temperatures fraiches a moderees : optimum entre 15 et 20\u00B0C pour la sporulation, 12 a 22\u00B0C pour l'infection. Au-dessus de 30\u00B0C, le developpement est fortement ralenti ou stoppe.",
            "Humidite relative superieure a 90% pendant au moins 6 heures consecutives : condition indispensable pour la sporulation et la germination des sporanges.",
            "Pluies frequentes ou brouillards matinaux persistants : maintiennent le film d'eau necessaire a la liberation et a la germination des zoospores.",
            "Rosee abondante et prolongee sur le feuillage : meme en l'absence de pluie, la rosee nocturne peut suffire a permettre l'infection si elle persiste 4 heures ou plus.",
            "Alternance de nuits fraiches (10-15\u00B0C) et de journees tiedes (18-25\u00B0C) : ces conditions sont ideales car elles combinent fraicheur nocturne (sporulation) et temperatures moderees diurnes (infection).",
            "Temps couvert et nuageux reduisant l'evaporation : le feuillage seche moins vite, prolongeant la duree d'humectation foliaire.",
            "Vents faibles a moderes transportant les spores sans assecher le feuillage : les vents forts assechent les feuilles et sont defavorables au mildiou."
        ],
        sol: [
            "Sols lourds et argileux retenant l'humidite et favorisant les flaques stagnantes au pied des plants.",
            "Sols mal draines ou compactes creant des conditions de saturation en eau au niveau racinaire.",
            "Sols avec des residus de culture de solanacees non decomposees pouvant heberger du mycelium.",
            "Terrains en depression ou en fond de vallee ou l'air froid et humide stagne naturellement.",
            "pH du sol n'a pas d'influence directe significative sur le mildiou, contrairement aux maladies telluriques."
        ],
        pratiques: [
            "Irrigation par aspersion : mouille le feuillage, cree les conditions ideales d'infection et disperse les spores par eclaboussures. C'est l'erreur la plus courante et la plus impactante.",
            "Plantation trop dense : reduit la circulation d'air entre les plants, maintient une humidite elevee dans la canopee et ralentit le sechage du feuillage apres la pluie.",
            "Absence de tuteurage ou tuteurage insuffisant : les feuilles basses touchent le sol, sont eclaboussees par l'eau de pluie et restent humides plus longtemps.",
            "Non-elimination des gourmands et des feuilles basses : augmente la densite du feuillage et reduit l'aeration.",
            "Proximite avec des cultures de pomme de terre : les deux cultures partagent le meme pathogene et les parcelles de pomme de terre sont souvent une source majeure d'inoculum.",
            "Utilisation de plants de pepiniere non certifies ou de provenance douteuse : risque d'introduction du mildiou dans un environnement sain.",
            "Absence de rotation des cultures : bien que le mildiou soit surtout aerien, la presence de repousses de solanacees peut maintenir l'inoculum.",
            "Serres mal ventilees avec condensation importante sur les parois et le feuillage.",
            "Absence de surveillance meteorologique et de systeme d'alerte : les traitements ne sont pas positionnes au bon moment."
        ],
        erreurs: [
            "Arroser le soir par aspersion, laissant le feuillage mouille toute la nuit. Les sporanges germent en 2 a 4 heures d'humidite foliaire continue, et la nuit offre exactement ces conditions.",
            "Negliger les premiers symptomes en pensant qu'ils disparaitront seuls. Le mildiou ne guerit jamais spontanement : chaque jour sans traitement permet la production de millions de nouvelles spores.",
            "Planter des tomates a moins de 200 metres de parcelles de pomme de terre. Les sporanges sont facilement transportes par le vent sur ces distances.",
            "Ne pas aerer les serres suffisamment, surtout apres les irrigations et les pluies. La condensation sur les parois et le feuillage est une source majeure d'humidite foliaire.",
            "Appliquer les fongicides uniquement en curatif (apres apparition des symptomes) au lieu de les positionner en preventif. Le mildiou progresse si vite qu'un traitement curatif seul est souvent insuffisant.",
            "Utiliser toujours le meme fongicide sans alternance : favorise le developpement de souches resistantes, un probleme croissant avec les metalaxyl.",
            "Negliger de detruire les plants et residus de culture en fin de saison, permettant au pathogene de survivre et d'infecter les cultures suivantes."
        ]
    },

    symptomes: {
        feuilles: "Les premiers symptomes apparaissent generalement sur les feuilles les plus basses et les plus proches du sol, la ou l'humidite est la plus elevee et les eclaboussures d'eau sont frequentes.\n\nSTADE INITIAL (jours 1-3 apres infection) : Apparition de petites taches irregulieres vert fonce a vert olive, d'aspect huileux ou aqueux, souvent localisees pres des bords ou de la pointe des folioles. Ces taches sont plus visibles tot le matin quand le feuillage est encore humide. A ce stade, elles peuvent etre confondues avec des dommages mecaniques ou un exces d'eau.\n\nSTADE INTERMEDIAIRE (jours 3-5) : Les taches s'elargissent rapidement et deviennent brun fonce a brun olive. Elles sont irregulieres, sans bords nets, et souvent delimites par les nervures principales. Sur la face inferieure des feuilles, dans les zones humides ou tot le matin, un feutrage blanc-grisatre est visible autour des taches : ce sont les sporangiophores portant les sporanges du pathogene. Ce feutrage blanc sous les feuilles est LE signe diagnostique le plus fiable du mildiou.\n\nSTADE AVANCE (jours 5-10) : Les taches confluent et couvrent de larges portions du limbe. Les feuilles se dessechent completement, noircissent et s'enroulent vers le bas. Elles degagent souvent une odeur desagreable de decomposition. En quelques jours, la defoliation peut etre quasi totale, ne laissant que les tiges denudees. L'aspect general du champ est celui d'une brulee, comme si les plants avaient ete geles.",
        tiges: "Les tiges et les petioles sont attaques simultanement ou peu apres les feuilles.\n\nLes symptomes se manifestent par des stries ou plages allongees, brun fonce a noires, d'aspect humide et huileux au debut. Ces lesions peuvent mesurer de quelques centimetres a 20-30 cm de long. Elles sont souvent localisees a la base des petioles, aux noeuds et aux exhortions de la tige.\n\nEn conditions humides, le feutrage blanc de sporulation est egalement visible sur les lesions caulinaires. Les zones atteintes deviennent fragiles et cassantes, et la tige peut se briser au niveau des lesions.\n\nDans les cas severes, les lesions peuvent entourer completement la tige (chancre annulaire), provoquant le fletrissement et la mort de toute la partie superieure du plant au-dessus de la lesion. Ce symptome est souvent confondu avec la fusariose, mais le brunissement externe de la tige et l'absence de brunissement vasculaire interne (en coupe transversale, la moelle est saine) permettent de differencier le mildiou.",
        fruits: "Les fruits sont attaques a tous les stades de maturite, mais les fruits verts et les fruits en debut de muraison sont les plus sensibles.\n\nSTADE INITIAL : Apparition de taches brunes a bronze, fermes et irregulieres, generalement situees pres du pedoncule (calice) ou sur la partie superieure du fruit. Les taches ont un aspect gras et une surface legerement bosselee ou mamelonnee.\n\nSTADE AVANCE : Les taches s'etendent et deviennent brun fonce. La surface du fruit prend un aspect marbre, avec des zones concentriques de brun de differentes intensites. Les fruits atteints restent fermes au debut (contrairement au botrytis qui donne une pourriture molle). En conditions humides, un feutrage blanc apparait a la surface des taches.\n\nPOURRITURE SECONDAIRE : Les fruits atteints par le mildiou developpent presque systematiquement des pourritures secondaires causees par d'autres champignons ou bacteries, qui transforment le fruit en une masse molle et putride. Les fruits atteints ne murissent pas normalement et sont totalement invendables.\n\nIMPORTANT : Les fruits contamines mais ne montrant pas encore de symptomes visibles peuvent developper la maladie apres la recolte, pendant le transport ou le stockage. Il est essentiel d'ecarter tous les fruits douteux.",
        racines: "Le systeme racinaire n'est generalement pas directement attaque par P. infestans, qui est un pathogene essentiellement aerien. Cependant, la destruction massive du feuillage a des consequences indirectes severes sur les racines : la perte de la capacite photosynthetique entraine un arret de la croissance racinaire, un affaiblissement general et une vulnerabilite accrue aux pathogenes telluriques opportunistes (Pythium, Rhizoctonia). Dans les cas de defoliation totale, les racines commencent a deperir en quelques jours.",
        stade: "L'infection peut survenir a tous les stades de developpement de la tomate, mais la sensibilite varie :\n\n- JEUNES PLANTS (pepiniere) : Tres vulnerables. L'infection peut provoquer une fonte des semis ou un dessechement rapide du plant. Les plants de pepiniere infectes sont la principale source d'introduction du mildiou dans les nouvelles parcelles.\n\n- STADE VEGETATIF : Les plants en pleine croissance vegetative sont sensibles, surtout si la vegetation est dense et l'aeration insuffisante.\n\n- FLORAISON ET FRUCTIFICATION : Periode de sensibilite maximale. La charge en fruits affaiblit la plante et la rend plus vulnerable. C'est generalement a ce stade que les epidemies les plus severes se produisent, car les pertes economiques sont maximales.\n\n- PERIODE LA PLUS CRITIQUE AU MAROC : Octobre a mars en plein champ (conditions fraiches et humides de l'automne-hiver), et toute l'annee sous serre lorsque la ventilation est insuffisante.",
        differenciation: "Le mildiou peut etre confondu avec plusieurs autres problemes. Voici comment les differencier :\n\n1. ALTERNARIOSE (Alternaria solani) : Les taches sont rondes avec des anneaux concentriques bien distincts (aspect de cible), de couleur brun fonce uniforme, et sans feutrage blanc dessous. L'alternariose progresse plus lentement que le mildiou.\n\n2. SEPTORIOSE (Septoria lycopersici) : Taches petites (2-5 mm), rondes, a centre gris-blanc avec un bord brun fonce. Des petits points noirs (pycnides) sont visibles au centre a la loupe. Pas de feutrage blanc.\n\n3. BACTERIOSE (Pseudomonas) : Taches petites, noires, entourees d'un halo jaune vif. Pas de feutrage. Aspect aqueux des lesions fraiches.\n\n4. DOMMAGES DE GEL : Aspect similaire de brunissement generalise, mais pas de sporulation blanche et pas de progression dans le temps.\n\n5. BRULURE CHIMIQUE (phytotoxicite) : Brunissement uniforme sans les motifs huileuses typiques du mildiou. Pas de feutrage.\n\nLE TEST DECISIF : En cas de doute, placer une feuille suspecte dans un sac plastique ferme avec un papier humide pendant 24h a 18-20\u00B0C. Si c'est du mildiou, un feutrage blanc apparaitra clairement sur la face inferieure des taches. C'est le test diagnostique le plus simple et le plus fiable au terrain."
    },

    lutte: {
        prevention: [
            "Utiliser des varietes resistantes ou tolerantes : les genes de resistance Ph-2 et Ph-3 conferent une resistance partielle mais significative a P. infestans. Les varietes portant Ph-3 sont les plus efficaces contre les souches actuelles. Exemples de varietes avec resistance : Defender, Legend, Mountain Magic, Plum Regal. Demander les varietes resistantes disponibles aupres de votre fournisseur de semences au Maroc.",
            "Espacer les plants suffisamment : 60-80 cm entre les plants et 100-120 cm entre les rangs en plein champ, 50-60 cm en serre avec bon palissage vertical. L'objectif est de permettre une circulation d'air optimale dans la canopee.",
            "Tuteurer et palisser les plants : maintenir les feuilles et les fruits eloignes du sol reduit les eclaboussures et l'humidite basale. Utiliser des tuteurs en bambou, des fils de palissage ou des cages a tomates.",
            "Privilegier l'irrigation au goutte-a-goutte : c'est la mesure preventive la plus efficace apres le choix varietal. Le goutte-a-goutte n'humidifie pas le feuillage et reduit l'humidite ambiante dans la parcelle.",
            "Effeuiller les feuilles basses : supprimer les feuilles des 20-30 premiers centimetres au-dessus du sol. Ce sont les premieres contaminees et leur suppression ameliore l'aeration et reduit le risque d'infection ascendante.",
            "Eliminer immediatement les feuilles et plants atteints : ne pas les composter. Les bruler ou les enterrer profondement (>50 cm) loin de la parcelle. Un seul plant malade peut contaminer tout un champ.",
            "Pratiquer la rotation des cultures : attendre 3-4 ans avant de replanter des solanacees (tomate, pomme de terre, aubergine, poivron) au meme emplacement.",
            "Aerer les serres regulierement : ouvrir les ouvrants lateraux et zenithaux des le matin pour evacuer l'humidite nocturne. En hiver, chauffer legerement le matin pour accelerer le sechage de la condensation.",
            "Eviter de planter des tomates a moins de 200-300 metres de parcelles de pomme de terre : les deux cultures partagent le meme pathogene.",
            "Desinfecter les outils de taille : utiliser de l'alcool a 70\u00B0 ou de l'eau de Javel diluee a 2% entre chaque rang de plants.",
            "Utiliser un systeme d'alerte meteorologique : les modeles de prevision (par exemple, les regles de Beaumont ou le modele de simcast) permettent de savoir quand les conditions sont favorables au mildiou et de positionner les traitements au bon moment.",
            "Pailler le sol : un paillage plastique ou organique reduit les eclaboussures de sol sur les feuilles basses et maintient l'humidite du sol sans mouiller le feuillage."
        ],
        biologique: [
            "Bouillie bordelaise (sulfate de cuivre neutralise a la chaux) : le traitement biologique de reference contre le mildiou depuis plus de 130 ans. Action preventive uniquement. Dose : 10-15 g/L (soit 10-15 kg/ha en general). Appliquer avant les periodes a risque, tous les 7-10 jours. Renouveler apres chaque pluie de plus de 20 mm. La bouillie bordelaise est autorisee en agriculture biologique mais limitee a 6 kg de cuivre metal/ha/an.",
            "Hydroxyde de cuivre (Kocide, Champion) : plus facile a doser que la bouillie bordelaise et moins phytotoxique. Action de contact preventive. Dose : 1.5-2.5 kg/ha. Appliquer tous les 7-10 jours en conditions favorables au mildiou.",
            "Bacillus subtilis (Serenade, Rhapsody) : biofongicide bacterien qui colonise la surface des feuilles et empeche les spores de germer. Efficacite moderee utilise seul, mais excellent en complement du cuivre. Dose : 2-4 L/ha. Appliquer tous les 7 jours.",
            "Bacillus amyloliquefaciens : biofongicide similaire a B. subtilis, avec une action par competition et production d'antifongiques naturels. Utilisable en agriculture biologique.",
            "Decoction de prele des champs (Equisetum arvense) : riche en silice, renforce les parois cellulaires des feuilles et les rend plus resistantes a la penetration des zoospores. Preparer en faisant bouillir 100 g de prele seche dans 1 L d'eau pendant 30 min, diluer a 10% et pulveriser. Effet preventif uniquement.",
            "Purin d'ortie : renforce les defenses naturelles de la plante (eliciteur). Preparer en faisant macerer 1 kg d'orties fraiches dans 10 L d'eau pendant 2 semaines. Filtrer et diluer a 10% pour pulverisation foliaire. A utiliser en complement, pas comme traitement principal.",
            "Bicarbonate de potassium (KHCO3) : modifie le pH de surface des feuilles et inhibe la germination des spores. Dose : 5 g/L + un mouillant (savon noir 2 ml/L). Efficacite partielle, a utiliser en complement.",
            "Phosphonates de potassium (phosphites) : bien que d'origine chimique, certains sont autorises en agriculture biologique dans certains pays. Ils stimulent les defenses naturelles de la plante (reaction d'hypersensibilite). Dose : 2-3 L/ha en foliaire. Action preventive et partiellement curative."
        ],
        chimique: [
            "Fongicides systemiques a base de metalaxyl-M + mancozebe (Ridomil Gold MZ 68 WG) : le traitement de reference en conventionnel. Le metalaxyl penetre dans la plante et agit contre le mycelium interne, tandis que le mancozebe protege la surface foliaire. Dose : 2.5 kg/ha. Intervalle : 10-14 jours. ATTENTION : l'emergence de souches resistantes au metalaxyl est un probleme croissant. Ne pas utiliser plus de 2-3 fois par saison et toujours en alternance avec d'autres familles chimiques.",
            "Cymoxanil + mancozebe (Curzate M WG) : le cymoxanil a une action curative locale (penetrant) efficace dans les 24-48 heures suivant l'infection. Le mancozebe assure la protection de contact. Dose : 2.5 kg/ha. Intervalle : 7-10 jours. Tres bon choix en cas d'infection debutante.",
            "Dimethomorphe + mancozebe (Acrobat MZ) : fongicide systemique transvasculaire. Le dimethomorphe inhibe la synthese des parois cellulaires de l'oomycete. Bon profil anti-resistance. Dose : 2-2.5 kg/ha. Intervalle : 10-14 jours.",
            "Mandipropamide (Revus) : fongicide translaminaire de nouvelle generation. Excellent profil de securite et faible impact environnemental. Tres efficace en preventif. Dose : 0.6 L/ha. Intervalle : 7-10 jours. Maximum 4 applications par saison.",
            "Chlorothalonil (Bravo, Daconil) : fongicide de contact multi-sites. Aucun risque de resistance car il agit sur de multiples cibles biochimiques. Bonne protection preventive. Dose : 1.5-2 L/ha. Intervalle : 7-10 jours. Attention : interdit dans l'UE depuis 2020, verifier le statut d'homologation au Maroc.",
            "Fluopicolide + propamocarbe (Infinito) : combinaison innovante avec double mode d'action. Le fluopicolide affecte le cytosquelette cellulaire et le propamocarbe perturbe la membrane cellulaire. Dose : 1.2-1.6 L/ha. Tres efficace sur les souches resistantes au metalaxyl.",
            "Fosethyl-Al (Aliette) : fongicide systemique ascendant ET descendant. Stimule en plus les defenses naturelles de la plante. Dose : 2.5-3 kg/ha. Efficace contre tous les oomycetes. Peut etre utilise en arrosage au sol ou en foliaire.",
            "STRATEGIE D'ALTERNANCE RECOMMANDEE : Alterner systematiquement les familles chimiques a chaque traitement pour prevenir les resistances. Exemple de programme : 1) Bouillie bordelaise (preventif) > 2) Metalaxyl + mancozebe > 3) Cymoxanil + mancozebe > 4) Dimethomorphe + mancozebe > 5) Mandipropamide > recommencer le cycle. Ne jamais utiliser la meme famille chimique deux fois de suite."
        ],
        mecanique: [
            "Arrachage et destruction immediate des plants severement atteints : un plant a plus de 30% de defoliation a peu de chances de recuperer et continue de produire des millions de spores. L'arracher et le bruler est la decision la plus sage pour proteger le reste de la parcelle.",
            "Paillage du sol avec un film plastique noir ou argente : reduit les eclaboussures d'eau de pluie sur le feuillage de 70 a 80%, retarde l'apparition du mildiou et diminue significativement la pression d'inoculum.",
            "Installation d'abris, tunnels ou chapelles : les structures couvrantes protegent le feuillage de la pluie, reduisant considerablement le risque de mildiou. Les tunnels hauts avec ouvertures laterales offrent le meilleur compromis protection/ventilation.",
            "Effeuillage systematique des feuilles basales : supprimer les feuilles des 30-40 premiers centimetres toutes les 2 semaines pendant la saison. Eliminer les feuilles coupees hors de la parcelle.",
            "Desherbage soigneux : certaines solanacees sauvages (Solanum nigrum, Datura) peuvent heberger le mildiou et constituer des reservoirs d'inoculum."
        ]
    },

    produits: [
        {
            nom: "Ridomil Gold MZ 68 WG",
            type: "Fongicide systemique + contact",
            matiere: "Metalaxyl-M 4% + Mancozebe 64%",
            action: "Double mode d'action : le metalaxyl-M est absorbe par les feuilles et transporte dans la plante (action systemique ascendante), ou il inhibe la synthese de l'ARN ribosomal de l'oomycete, bloquant sa croissance. Le mancozebe reste en surface et agit par contact multi-sites, empechant la germination des spores.",
            application: "2.5 kg/ha en pulverisation foliaire, dans 400-600 L d'eau/ha. Commencer les applications en preventif avant les premieres pluies d'automne ou des les conditions favorables. Intervalle de 10-14 jours. Bien couvrir les deux faces des feuilles.",
            precautions: "Delai avant recolte (DAR) : 14 jours. Maximum 3 applications par campagne. OBLIGATOIRE : alterner avec des fongicides d'une autre famille chimique pour eviter les resistances. Les souches de P. infestans resistantes au metalaxyl sont de plus en plus frequentes : si l'efficacite diminue, changer de produit. Port de gants et masque lors de la preparation et de l'application.",
            disponibleMaroc: true
        },
        {
            nom: "Bouillie Bordelaise RSR Disperss",
            type: "Fongicide de contact (autorise en bio)",
            matiere: "Sulfate de cuivre neutralise a la chaux (20% de cuivre metal)",
            action: "Le cuivre forme une barriere protectrice sur la surface des feuilles. Les ions cuivre liberees par l'humidite penetrent dans les spores en cours de germination et les detruisent en inhibant les enzymes essentielles. Action EXCLUSIVEMENT preventive : la bouillie bordelaise ne peut pas guerir une infection deja etablie dans les tissus.",
            application: "10-15 g/L (soit environ 12.5 kg de produit commercial/ha dans 800-1000 L d'eau). Appliquer sur feuillage sec, avant les periodes de pluie. Reappliquer apres chaque pluie lessivante (>20-25 mm) ou tous les 7-10 jours en conditions favorables au mildiou. Commencer les applications des les premieres conditions a risque.",
            precautions: "Respecter la limite annuelle de 6 kg de cuivre metal par hectare (reglementation agriculture biologique). Eviter d'appliquer par temps tres chaud (>35\u00B0C) : risque de brulure foliaire (phytotoxicite), surtout sur les jeunes feuilles. Ne pas melanger avec des produits acides. Le cuivre s'accumule dans le sol a long terme : ne pas surdoser.",
            disponibleMaroc: true
        },
        {
            nom: "Curzate M WG",
            type: "Fongicide penetrant + contact",
            matiere: "Cymoxanil 4.5% + Mancozebe 68%",
            action: "Le cymoxanil est un fongicide penetrant local a action curative : il penetre dans les tissus foliaires et agit sur les infections recentes (dans les 24-48 heures suivant la contamination). Le mancozebe assure la protection preventive de contact en surface. Cette combinaison offre a la fois une protection preventive et une action curative precoce.",
            application: "2.5 kg/ha dans 400-600 L d'eau/ha. Intervalle de 7-10 jours en conditions de forte pression. Particulierement indique lorsqu'une infection est suspectee (conditions favorables recentes mais pas encore de symptomes visibles) ou au tout debut d'une attaque.",
            precautions: "DAR : 7 jours. Le cymoxanil a une action curative limitee dans le temps (48h max apres infection) : ne pas attendre que la maladie soit bien installee pour traiter. Alterner avec d'autres familles chimiques. Maximum 4 applications par saison.",
            disponibleMaroc: true
        },
        {
            nom: "Previcur Energy",
            type: "Fongicide systemique bidirectionnel",
            matiere: "Propamocarbe hydrochloride 530 g/L + Fosethyl-Al 310 g/L",
            action: "Le propamocarbe perturbe la biosynthese des phospholipides membranaires de l'oomycete (action systemique ascendante). Le fosethyl-Al est transporte dans toute la plante (ascendant et descendant) et stimule en plus les mecanismes naturels de defense de la plante (production de phytoalexines). Cette double action rend le produit tres efficace sur les oomycetes.",
            application: "2-3 L/ha en pulverisation foliaire ou en application au sol par le systeme d'irrigation. Pour le traitement racinaire : 3 L/ha dans la solution d'irrigation. Intervalle de 10-14 jours. Peut etre utilise en complement des traitements foliaires classiques.",
            precautions: "DAR : 14 jours. Compatible avec la plupart des autres fongicides et insecticides. Ne pas melanger avec des produits a base de cuivre. Tres bien tolere par la plante. Risque de resistance limite car double mode d'action.",
            disponibleMaroc: true
        },
        {
            nom: "Infinito SC",
            type: "Fongicide systemique nouvelle generation",
            matiere: "Fluopicolide 62.5 g/L + Propamocarbe 625 g/L",
            action: "Le fluopicolide affecte les proteines spectrine-like du cytosquelette cellulaire de l'oomycete, un mode d'action unique qui reduit le risque de resistance croisee avec les autres familles. Le propamocarbe perturbe les membranes. Excellent sur les souches resistantes au metalaxyl.",
            application: "1.2-1.6 L/ha dans 300-500 L d'eau. Intervalle de 7-14 jours selon la pression. Tres efficace en preventif et en curatif precoce.",
            precautions: "DAR : 7 jours. Maximum 4 applications par saison. Tres bon profil toxicologique et environnemental. Particulierement recommande dans les zones ou des resistances au metalaxyl ont ete detectees.",
            disponibleMaroc: true
        },
        {
            nom: "Revus (Mandipropamide)",
            type: "Fongicide translaminaire",
            matiere: "Mandipropamide 250 g/L",
            action: "Le mandipropamide inhibe la biosynthese de la cellulose de la paroi cellulaire des oomycetes, un mode d'action specifique (famille des CAA - Carboxylic Acid Amides). Il est translaminaire : il penetre dans la feuille et protege les deux faces meme si seule une face a ete pulverisee. Action preventive et anti-sporulante.",
            application: "0.6 L/ha dans 200-400 L d'eau. Intervalle de 7-10 jours. A positionner en preventif, avant ou juste au debut de la periode a risque. Excellent pour les programmes de traitements en alternance.",
            precautions: "DAR : 3 jours. Maximum 4 applications par saison. Tres selectif et bien tolere par les auxiliaires. Resistant au lessivage par la pluie (excellente rainfastness). Alterner avec d'autres modes d'action.",
            disponibleMaroc: true
        }
    ],

    points_cles: [
        "Le mildiou est la maladie numero 1 de la tomate : il peut detruire une recolte entiere en 7-10 jours. La prevention et la detection precoce sont essentielles.",
        "Le feutrage blanc sous les feuilles est le signe diagnostique cle. En cas de doute, placez une feuille suspecte en chambre humide (sac plastique + papier humide, 18-20\u00B0C, 24h).",
        "La strategie gagnante : varietes resistantes + goutte-a-goutte + aeration + traitements preventifs en alternance. Un seul de ces elements ne suffit pas, c'est leur combinaison qui protege."
    ],

    protocole_traitement: {
        titre: "Protocole de traitement anti-mildiou en 5 etapes",
        etapes: [
            {
                titre: "Etape 1 : Surveillance et detection",
                description: "Inspecter les plants 2 fois par semaine, en priorite les feuilles basses et les zones les plus humides de la parcelle. Verifier la face inferieure des feuilles a la recherche du feutrage blanc. Installer un hygrometre et un thermometre pour suivre les conditions climatiques. Seuil d'alerte : temperature 12-22\u00B0C + humidite > 90% pendant plus de 6 heures."
            },
            {
                titre: "Etape 2 : Traitement preventif",
                description: "Des que les conditions favorables sont prevues (pluie annoncee, brouillard matinal, baisse de temperature), appliquer un fongicide de contact (bouillie bordelaise ou mancozebe) sur l'ensemble de la parcelle. Couvrir les deux faces des feuilles. Renouveler apres chaque pluie lessivante."
            },
            {
                titre: "Etape 3 : Reaction aux premiers symptomes",
                description: "Si des taches apparaissent : 1) Arracher et detruire immediatement les plants atteints. 2) Appliquer un fongicide penetrant ou systemique (cymoxanil + mancozebe ou dimethomorphe + mancozebe) sur toute la parcelle, y compris les plants apparemment sains. 3) Reduire l'irrigation au minimum. 4) Aerer la serre au maximum."
            },
            {
                titre: "Etape 4 : Traitements curatifs en programme",
                description: "Si la maladie est presente, passer en programme de traitement serre tous les 5-7 jours avec alternance stricte des matieres actives : traitement 1 (cymoxanil + mancozebe) > traitement 2 (dimethomorphe + mancozebe) > traitement 3 (metalaxyl + mancozebe) > recommencer. Maintenir ce programme jusqu'a disparition complete des symptomes ET retour de conditions defavorables au mildiou."
            },
            {
                titre: "Etape 5 : Gestion post-epidemie",
                description: "Apres l'episode : poursuivre les traitements preventifs de contact (bouillie bordelaise, mancozebe) tous les 10-14 jours tant que les conditions sont favorables. Evaluer les pertes et adapter la conduite de la culture. En fin de saison, detruire tous les residus de culture et solariser le sol si possible."
            }
        ]
    },

    faq: [
        {
            question: "Le mildiou peut-il se transmettre par les semences de tomate ?",
            reponse: "Non, contrairement aux bacterioses et a certains virus, Phytophthora infestans ne se transmet pas par les graines de tomate. La transmission se fait uniquement par les sporanges aeriens (vent, eau) ou par les plants vivants infectes. Cependant, les plants de pepiniere contamines sont une source majeure d'introduction du mildiou."
        },
        {
            question: "Peut-on consommer des tomates provenant d'un plant atteint de mildiou ?",
            reponse: "Les fruits qui ne montrent aucun symptome visible peuvent etre consommes sans danger pour la sante humaine : P. infestans ne produit pas de toxines dangereuses pour l'homme. Cependant, les fruits atteints (taches brunes) ne doivent pas etre consommes car ils sont en cours de decomposition et peuvent heberger des microorganismes secondaires."
        },
        {
            question: "Comment differencier le mildiou de la tomate de celui de la pomme de terre ?",
            reponse: "C'est le meme agent pathogene (P. infestans) qui attaque les deux cultures. Les symptomes sont similaires. C'est pourquoi il ne faut jamais planter des tomates a proximite de pommes de terre : elles se contaminent mutuellement."
        },
        {
            question: "Le mildiou peut-il survivre dans le sol marocain d'une annee sur l'autre ?",
            reponse: "Oui, potentiellement. Si les deux types de compatibilite sexuelle (A1 et A2) sont presents, des oospores peuvent etre formees et survivre dans le sol pendant plusieurs annees. Les repousses de pomme de terre et les residus de culture non detruits sont aussi des sources de survie. Cependant, les fortes chaleurs estivales marocaines (>35\u00B0C) tuent une grande partie de l'inoculum."
        }
    ],

    ressources: [
        "INRA Maroc (Institut National de la Recherche Agronomique) - Centre Regional de Recherche Agronomique d'Agadir : fiches techniques et resultats d'essais sur le mildiou de la tomate au Maroc. Contacter le departement de phytopathologie.",
        "ONSSA (Office National de la Securite Sanitaire des Produits Alimentaires) - Index phytosanitaire du Maroc : liste officielle des produits fongicides homologues contre le mildiou, avec doses, usages et delais avant recolte. Document indispensable pour tout technicien.",
        "FAO (Organisation des Nations Unies pour l'Alimentation et l'Agriculture) - Guide de lutte integree contre le mildiou de la tomate et de la pomme de terre. Document technique complet disponible en francais, gratuit en ligne.",
        "EPPO/OEPP (Organisation Europeenne et Mediterraneenne pour la Protection des Plantes) - Fiche diagnostique PP 1/237 : Phytophthora infestans sur tomate. Standards de diagnostic et protocoles d'identification.",
        "Universite de Cornell (USA) - Programme de pathologie vegetale : base de donnees Vegetable MD Online avec photos diagnostiques haute resolution et fiches de gestion du mildiou.",
        "FRAC (Fungicide Resistance Action Committee) - Recommandations pour la gestion des resistances de P. infestans aux fongicides. Document technique mis a jour annuellement.",
        "CABI (Centre for Agriculture and Bioscience International) - Crop Protection Compendium : fiche detaillee Phytophthora infestans avec distribution mondiale, biologie et methodes de lutte.",
        "Revue scientifique Plant Disease (American Phytopathological Society) - Articles de recherche recents sur l'epidemiologie et la gestion du mildiou au Maroc et en region mediterraneenne."
    ]
};
