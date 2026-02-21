const MALADIE_OIDIUM = {
    id: "oidium",
    nom: "Oidium de la tomate",
    nomScientifique: "Leveillula taurica (Lev.) G. Arnaud / Oidium neolycopersici L. Kiss",
    type: "fongique",
    emoji: "\uD83E\uDDA0",
    resumeCourt: "L'oidium est une maladie fongique tres repandue qui se manifeste par un depot blanc poudreux caracteristique sur les feuilles, reduisant la surface photosynthetique active. Deux especes distinctes attaquent la tomate : Leveillula taurica, predominante dans les regions chaudes et seches comme le Maroc, et Oidium neolycopersici, plus presente en Europe du Nord. Bien que rarement letale, la maladie peut reduire les rendements de 20 a 40% par defoliation progressive.",
    cultures: ["Tomate", "Poivron", "Piment", "Aubergine", "Concombre", "Courgette", "Melon", "Artichaut", "Oignon"],

    presentation: {
        description: "L'oidium est l'une des maladies fongiques les plus facilement reconnaissables grace au depot blanc poudreux (les conidies et le mycelium superficiel) qui recouvre les organes infectes. Sur la tomate, deux especes principales sont responsables et il est crucial de les distinguer car leur biologie et leur gestion different sensiblement.\n\nLeveillula taurica (anamorph : Oidiopsis taurica) est un oidium INTERNE : son mycelium se developpe a l'interieur des tissus foliaires (dans les espaces intercellulaires), et seuls les conidiophores et les conidies emergent par les stomates sur la face inferieure des feuilles. Cette particularite le rend plus difficile a combattre avec les fongicides de contact, car le champignon est protege a l'interieur de la feuille. L. taurica est l'espece dominante au Maroc, dans tout le bassin mediterraneen, au Moyen-Orient et en Inde.\n\nOidium neolycopersici est un oidium EXTERNE : son mycelium se developpe entierement a la surface des feuilles, sur les deux faces. Il est donc plus accessible aux fongicides de contact. Cette espece est predominante en Europe du Nord, en Amerique du Nord et dans les serres des regions temperees.\n\nLes deux especes sont des parasites biotrophes obligatoires : elles ne peuvent vivre que sur des tissus vegetaux vivants et ne survivent pas sur les debris morts.",
        importance: "Les pertes de rendement dues a l'oidium sont generalement de l'ordre de 10 a 25% dans les cas moderes, mais peuvent atteindre 40 a 50% en cas d'attaque precoce et severe non traitee. La perte de rendement est principalement indirecte : la destruction progressive du feuillage reduit la photosynthese, ce qui diminue le calibre des fruits, allonge le cycle de maturite et expose les fruits restants aux coups de soleil. Au Maroc, l'oidium est un probleme recurrent dans les serres du Souss-Massa et du Gharb, surtout en fin de cycle cultural (mars-juin) quand les temperatures augmentent et que les plants sont ages et moins vigoureux.",
        historique: "L. taurica a ete decrit pour la premiere fois par Leveille en 1851 sur des plantes hotes du bassin mediterraneen. Sur la tomate, il est devenu un probleme significatif avec l'intensification de la culture sous serre a partir des annees 1960-1970. O. neolycopersici a ete identifie beaucoup plus recemment (Kiss et al., 2001) et s'est repandu mondialement en quelques decennies, probablement via le commerce international de plants.",
        impact_economique: "Le cout direct de l'oidium inclut les traitements fongicides (5 a 8 applications de soufre ou de triazoles par saison, soit 3 000 a 8 000 MAD/ha), la main d'oeuvre pour l'effeuillage des feuilles atteintes, et la perte de calibre des fruits. Les fruits de petit calibre se vendent 30 a 50% moins cher que les calibres standards, ce qui peut representer une perte significative sur une campagne entiere. En serre chauffee, le cout energetique supplementaire pour gerer le climat (ventilation, deshumidification) ajoute une charge importante."
    },

    origine: {
        agent: "Deux especes principales :\n\n1. Leveillula taurica (Lev.) G. Arnaud (anamorph : Oidiopsis taurica) : Ascomycete de l'ordre des Erysiphales, famille des Erysiphaceae. Particularite unique : c'est le seul oidium dont le mycelium est endophyte (interne aux tissus). Il possede une gamme d'hotes extremement large (plus de 700 especes dans 44 familles botaniques), ce qui lui assure des sources de survie multiples.\n\n2. Oidium neolycopersici L. Kiss : Ascomycete du meme ordre, mais a mycelium ectophyte (externe, superficiel). Sa gamme d'hotes est plus restreinte et centree sur les solanacees. Les deux especes sont des parasites biotrophes obligatoires : ils ne peuvent pas etre cultives en laboratoire sur milieu artificiel et ne vivent que sur des tissus vegetaux vivants.",
        provenance: "L. taurica est repandu dans toutes les zones arides et semi-arides du monde : bassin mediterraneen, Moyen-Orient, Asie du Sud, Afrique du Nord et de l'Est, Amerique du Sud. C'est l'espece la mieux adaptee aux conditions chaudes et seches. O. neolycopersici est probablement originaire d'Australie et s'est repandu mondialement a partir des annees 1980-1990 via le commerce de plants de tomate en serre. Au Maroc, les deux especes coexistent, mais L. taurica est largement dominante.",
        cycle: "CYCLE DE L. taurica :\n\n1. SURVIE : Le champignon survit entre les saisons sur les plantes hotes perennes ou les mauvaises herbes (il a plus de 700 hotes possibles). Il n'y a pas de structures de resistance connues dans le sol. La survie depend entierement de la presence de plantes hotes vivantes.\n\n2. PRODUCTION DE CONIDIES : Sur les plantes infectees, les conidiophores emergent par les stomates (surtout sur la face inferieure des feuilles) et produisent des conidies (spores asexuees) solitaires, allongees, de 50-80 x 15-20 micrometres.\n\n3. DISSEMINATION : Les conidies sont detachees par le vent et transportees sur des distances moyennes (quelques dizaines de metres a quelques kilometres). Contrairement au mildiou, l'eau n'est PAS necessaire pour la dissemination : le vent sec suffit.\n\n4. GERMINATION : Les conidies germent directement sur la surface foliaire, meme a humidite relative faible (50-60%). Un film d'eau libre n'est PAS necessaire (c'est l'inverse du mildiou). La germination est optimale entre 20 et 25\u00B0C.\n\n5. PENETRATION : Le tube germinatif de L. taurica penetre directement par les stomates et colonise les espaces intercellulaires. Des haustoria (sucoirs) sont formes pour extraire les nutriments des cellules de la plante.\n\n6. INCUBATION : Periode de 10 a 20 jours entre l'infection et l'apparition des premiers symptomes visibles (beaucoup plus longue que pour le mildiou). Cette longue incubation fait que la maladie est souvent detectee trop tard.\n\n7. SPORULATION : Nouveaux conidiophores emergent par les stomates, completant le cycle. Un nouveau cycle complet prend 15 a 25 jours.\n\nCYCLE DE O. neolycopersici :\nSimilaire mais le mycelium reste en surface des feuilles. La penetration se fait par des appressoria qui traversent la cuticule. Des haustoria sont formes dans les cellules epidermiques. La sporulation est abondante sur les deux faces des feuilles. Le cycle est plus court (10-14 jours) car le champignon se developpe plus rapidement en surface.",
        propagation: [
            "Par le vent : principal mode de dissemination des conidies. Les courants d'air dans les serres et entre les parcelles transportent les spores efficacement, meme sur de longues distances.",
            "Par les plants de pepiniere contamines : l'introduction de plants infectes (souvent sans symptomes visibles du fait de la longue incubation) est une voie majeure de contamination des serres saines.",
            "Par les mauvaises herbes hotes a proximite : L. taurica a une gamme d'hotes extremement large. Les mauvaises herbes des familles Solanaceae, Asteraceae, Fabaceae, etc. peuvent heberger le champignon et servir de reservoir d'inoculum.",
            "Par les courants d'air dans les serres : le vent qui entre par les ouvrants transporte les conidies. Les serres voisines infectees contaminent les serres saines par ce biais.",
            "PAS par le sol ni par les semences : l'oidium ne survit pas dans le sol et ne contamine pas les graines. La survie depend uniquement de plantes vivantes.",
            "PAS par l'eau d'irrigation : contrairement au mildiou, l'oidium ne se propage pas par l'eau. Paradoxalement, l'aspersion foliaire peut meme reduire l'oidium (les conidies eclatent au contact de l'eau libre)."
        ]
    },

    facteurs: {
        climatiques: [
            "Temperatures moderees a chaudes : optimum 20-27\u00B0C pour L. taurica (qui tolere des temperatures elevees jusqu'a 35\u00B0C), 20-25\u00B0C pour O. neolycopersici. Le developpement est ralenti en dessous de 15\u00B0C.",
            "HUMIDITE RELATIVE MODEREE (40-70%) : c'est une particularite majeure de l'oidium par rapport aux autres maladies fongiques. L'oidium se developpe mieux en conditions relativement seches. L'humidite tres elevee (>90%) et surtout l'eau libre sur les feuilles sont DEFAVORABLES a la germination des conidies (les conidies eclatent au contact de l'eau).",
            "Temps sec et ensoleille avec des nuits fraiches : les ecarts de temperature jour/nuit provoquent une condensation legere sur les feuilles (juste assez d'humidite pour la germination, mais pas assez pour inhiber le champignon).",
            "Faible pluviometrie : la pluie lave les conidies de la surface des feuilles et est defavorable a l'oidium. Les periodes seches prolongees favorisent au contraire son developpement.",
            "Forte luminosite : l'oidium est favorise par une bonne luminosite (les conidies de L. taurica germent mieux a la lumiere). Les plants a l'ombre sont moins atteints.",
            "ATTENTION AU MAROC : les conditions du printemps et de l'ete (chaleur, secheresse, forts ecarts jour/nuit) sont ideales pour L. taurica. C'est la maladie typique de la fin de saison."
        ],
        sol: [
            "Sols riches en azote favorisant une vegetation dense et tendre, plus sensible aux infections fongiques. L'exces d'azote produit des cellules a parois minces facilement penetrees par les haustoria.",
            "Stress hydrique rendant les plants plus vulnerables : des plants stresses transpirent moins, la surface foliaire est plus seche, et les defenses naturelles sont affaiblies.",
            "Sols pauvres en potassium : le potassium renforce les parois cellulaires et les mecanismes de defense. Une carence en K augmente la sensibilite a l'oidium.",
            "Sols pauvres en silicium : le silicium renforce la cuticule foliaire et rend la penetration du champignon plus difficile. Les apports de silicate de potassium en foliaire reduisent significativement l'oidium."
        ],
        pratiques: [
            "Exces de fertilisation azotee : c'est le facteur cultural le plus important. L'azote en exces produit une vegetation luxuriante mais fragile, avec des tissus tendres et des parois cellulaires minces, ideales pour les haustoria du champignon.",
            "Mauvaise ventilation des serres : l'air stagnant favorise les microclimats humides au niveau des feuilles et l'accumulation des conidies dans l'atmosphere de la serre.",
            "Plantation trop dense : reduit la circulation d'air et cree des zones d'ombre ou le champignon se developpe plus facilement.",
            "Irrigation irreguliere creant un stress hydrique : les plants stresses ont des defenses plus faibles et sont plus sensibles. L'alternance sec/mouille est particulierement defavorable.",
            "Non-elimination des feuilles severement atteintes : les feuilles malades continuent de produire des conidies et contaminent les feuilles saines.",
            "Absence de desherbage autour des serres : les mauvaises herbes hotes de L. taurica constituent un reservoir permanent d'inoculum.",
            "Culture prolongee sur le meme cycle : les plants ages, en fin de cycle (>6 mois), sont beaucoup plus sensibles a l'oidium que les jeunes plants vigoureux."
        ],
        erreurs: [
            "Surdoser l'azote en pensant booster la croissance et les rendements : c'est contre-productif car les plants deviennent tres sensibles a l'oidium (et au botrytis). Un equilibre N-P-K est essentiel.",
            "Ne pas ventiler suffisamment les serres par temps chaud et sec en pensant que la secheresse protege des maladies : c'est vrai pour le mildiou, mais FAUX pour l'oidium qui adore les conditions seches avec des ecarts de temperature.",
            "Ignorer les premieres taches jaunes sur les feuilles basses en les attribuant au vieillissement normal : l'oidium cause par L. taurica se manifeste d'abord par des taches jaunes sur la face superieure, avec le feutrage blanc DESSOUS. Si on ne retourne pas les feuilles, on passe a cote du diagnostic.",
            "Traiter avec de la bouillie bordelaise en pensant que c'est efficace contre l'oidium : le cuivre est peu ou pas efficace sur les oidiums. Le SOUFRE est le produit de base contre l'oidium.",
            "Appliquer du soufre en plein soleil par temperatures >30\u00B0C : risque eleve de brulure foliaire (phytotoxicite du soufre a haute temperature)."
        ]
    },

    symptomes: {
        feuilles: "Les symptomes different selon l'espece en cause :\n\nLeveillula taurica (espece dominante au Maroc) :\nSTADE INITIAL : Apparition de taches jaunes (chlorotiques) diffuses sur la face SUPERIEURE des feuilles, souvent de forme irreguliere. Ces taches sont facilement confondues avec des carences ou un vieillissement naturel. C'est la que la plupart des agriculteurs ratent le diagnostic.\n\nSTADE INTERMEDIAIRE : En retournant les feuilles, un feutrage blanc poudreux est visible sur la face INFERIEURE, exactement en regard des taches jaunes visibles au-dessus. Ce feutrage est constitue des conidiophores et conidies qui emergent par les stomates. Le contraste tache jaune dessus / poudre blanche dessous est tres caracteristique de L. taurica.\n\nSTADE AVANCE : Les taches jaunes s'etendent et confluent. Les feuilles se dessechent progressivement du bord vers le centre. Les feuilles severement atteintes se necrosent et tombent (defoliation). L'attaque progresse du bas vers le haut du plant. En cas de defoliation severe, les fruits sont exposes directement au soleil et subissent des coups de soleil (echaudure).\n\nOidium neolycopersici :\nLe feutrage blanc poudreux est visible sur les DEUX faces des feuilles (dessus et dessous), et generalement plus abondant sur la face superieure. Les taches sont plus blanches et plus denses que pour L. taurica. La defoliation est egalement le symptome final, mais progresse plus rapidement.\n\nPOINT CLE POUR LE DIAGNOSTIC AU MAROC : Si le blanc est SOUS la feuille uniquement, c'est tres probablement L. taurica. Si le blanc est SUR les deux faces, c'est O. neolycopersici. Cette distinction est importante car L. taurica, etant interne, est plus difficile a traiter avec des fongicides de contact.",
        tiges: "Les tiges sont rarement atteintes par l'oidium de la tomate. Dans les cas tres severes et sur les varietes tres sensibles, un leger feutrage blanc peut apparaitre sur les tiges vertes, les petioles et les pedoncules floraux, mais c'est peu frequent. La tige n'est jamais le site primaire d'infection.\n\nEn revanche, la tige peut presenter un aspect ligneux et sec dans les cas de defoliation avancee, du fait de la perte de vigueur generale du plant.",
        fruits: "Les fruits de tomate ne sont generalement PAS directement infectes par l'oidium. C'est une difference majeure avec le mildiou ou l'alternariose qui attaquent directement les fruits.\n\nCependant, l'oidium a des consequences indirectes majeures sur les fruits :\n\n1. COUPS DE SOLEIL (ECHAUDURE) : La defoliation progressive expose les fruits au rayonnement solaire direct. Les fruits non proteges par les feuilles developpent des zones blanches ou jaunes, brulees par le soleil, sur la face exposee. Ces fruits sont deprecies ou invendables.\n\n2. REDUCTION DU CALIBRE : La perte de feuilles reduit la photosynthese, ce qui diminue l'apport en sucres et en assimilats aux fruits. Les fruits restent petits et de qualite inferieure.\n\n3. MATURATION IRREGULIERE : Les fruits issus de plants defolies presentent souvent une coloration inegale (greenback, blotchy ripening) et une qualite gustative inferieure.\n\n4. CONCENTRATION DES SUCRES : Paradoxalement, dans les cas moderes, la legere reduction de la surface foliaire peut concentrer les sucres dans les fruits restants, ameliorant le gout (effet observe en viticulture avec l'oidium de la vigne).",
        racines: "Les racines ne sont jamais atteintes par l'oidium. Le champignon est strictement aerien et ne survit pas dans le sol. Cependant, un plant severement defoli a un systeme racinaire qui decline progressivement par manque d'apport photosynthetique.",
        stade: "L'oidium peut apparaitre a tous les stades de la culture, mais la chronologie typique au Maroc est la suivante :\n\n- AUTOMNE-HIVER (octobre-fevrier) : Faible pression d'oidium, car les conditions sont plus favorables au mildiou (humidite elevee, temperatures basses).\n\n- PRINTEMPS (mars-mai) : Augmentation progressive de la pression d'oidium avec la hausse des temperatures et la baisse de l'humidite. Debut des attaques sur les feuilles basses.\n\n- ETE (juin-aout) : Pression maximale, surtout en serre. Les conditions chaudes et seches sont ideales pour L. taurica. Les plants ages (>4-5 mois) sont tres sensibles.\n\n- FIN DE CYCLE : L'oidium s'aggrave naturellement en fin de cycle cultural quand les plants sont affaiblis, ages, et ont subi de multiples stress.\n\nLes PLANTS AGES et les plants STRESSES (stress hydrique, carence, surcharge en fruits) sont systematiquement plus sensibles que les jeunes plants vigoureux.",
        differenciation: "1. MILDIOU (Phytophthora infestans) : Le feutrage blanc du mildiou est plus grisatre, plus fin et plus cotonneux que celui de l'oidium. Il est associe a des taches brun fonce huileuses (pas jaunes). Le mildiou se developpe par temps humide et frais, l'oidium par temps sec et chaud. Le mildiou evolue en quelques jours, l'oidium en quelques semaines.\n\n2. CLADOSPORIOSE (Passalora fulva) : Donne des taches brunes olivatres veloutees sur la face inferieure des feuilles, avec des taches jaunes diffuses dessus. Ressemble a L. taurica mais la couleur est olive/brune (pas blanche). La cladosporiose se developpe par humidite elevee.\n\n3. RESIDUS DE TRAITEMENT AU SOUFRE : Le soufre laisse un depot blanc uniforme sur les feuilles qui peut etre confondu avec de l'oidium. Mais le depot de soufre est reparti uniformement sur toute la feuille, alors que l'oidium est en taches localisees correspondant aux zones d'infection.\n\n4. CARENCE EN MAGNESIUM : Les taches jaunes internervaires de la carence en Mg peuvent ressembler aux taches jaunes de l'oidium sur la face superieure. Mais il n'y a pas de feutrage blanc dessous en cas de carence. Toujours retourner la feuille pour verifier.\n\nTEST SIMPLE AU CHAMP : Retourner la feuille presentant des taches jaunes. Si un feutrage blanc poudreux est present dessous, c'est l'oidium. Frotter legerement avec le doigt : la poudre blanche de l'oidium s'enleve facilement, laissant une surface verte en dessous."
    },

    lutte: {
        prevention: [
            "Choisir des varietes resistantes a l'oidium : les genes de resistance Ol-1, Ol-2, Ol-3, Ol-4, Ol-5, et Ol-6 conferent differents niveaux de resistance a L. taurica et/ou O. neolycopersici. Le gene Ol-2 est le plus largement utilise en selection varietale. Verifier aupres des semenciers la disponibilite de varietes resistantes adaptees au Maroc.",
            "Assurer une ventilation optimale des serres : ouvrir les ouvrants lateraux ET zenithaux des le matin pour creer un flux d'air traversant. L'objectif est de maintenir une humidite relative entre 60 et 75% dans la serre (assez pour eviter le stress hydrique, pas assez pour favoriser d'autres maladies).",
            "Equilibrer la fertilisation azotee : respecter le ratio N-P-K recommande pour la tomate (generalement 1-0.5-1.5 en phase de production). L'exces d'azote est LE facteur cultural le plus favorable a l'oidium. Privilegier les formes nitriques (NO3-) aux formes ammoniacales (NH4+).",
            "Apporter suffisamment de potassium : le K renforce les parois cellulaires et les mecanismes de defense. Un ratio K/N eleve (superieur a 1.5) reduit significativement la sensibilite a l'oidium. En fertigation, augmenter le K a partir de la fructification.",
            "Apporter du silicium en foliaire : les pulverisations de silicate de potassium (2-3 ml/L) renforcent la cuticule et reduisent la penetration du champignon. 2-3 applications preventives en debut de saison.",
            "Maintenir un arrosage regulier pour eviter le stress hydrique : les plants stresses sont plus sensibles. L'irrigation au goutte-a-goutte doit etre calibree pour maintenir le substrat a capacite au champ.",
            "Eliminer les mauvaises herbes hotes autour et a l'interieur des serres : L. taurica a une gamme d'hotes tres large. Morelle noire (Solanum nigrum), liseron, chardons et de nombreuses autres adventices peuvent heberger le champignon.",
            "Respecter les densites de plantation recommandees : ne pas depasser 2.5-3 plants/m2 en serre. Un espacement suffisant permet une meilleure circulation de l'air.",
            "Eclaircir les feuilles interieures du plant pour ameliorer l'aeration de la canopee : supprimer les gourmands excessifs et les feuilles surnumeraires.",
            "En fin de cycle, detruire completement les residus de culture et desinfecter la serre avant la nouvelle plantation."
        ],
        biologique: [
            "Soufre mouillable en pulverisation (Thiovit Jet, Microthiol Special) : le traitement de reference contre l'oidium depuis plus de 2000 ans. Le soufre agit par contact et par vapeur (action fumigante), inhibant la germination des conidies et le developpement du mycelium. Dose : 3-5 g/L (soit 3-7.5 kg/ha selon le volume d'eau). Appliquer tous les 7-10 jours en preventif ou des les premiers symptomes. PRECAUTION MAJEURE : ne jamais appliquer au-dessus de 28-30\u00B0C (risque grave de brulure foliaire). Appliquer le matin tot ou en fin d'apres-midi. Ne pas melanger avec des huiles minerales ou vegetales.",
            "Bicarbonate de potassium (KHCO3) : modifie le pH de surface des feuilles (alcalinisation) et inhibe la germination des conidies. Dose : 5-10 g/L + mouillant (savon noir 2 ml/L ou Tween 20). Appliquer tous les 7-10 jours. Efficacite bonne en preventif, moderee en curatif. Autorise en agriculture biologique. Peut etre combine avec le soufre.",
            "Lait ecreme dilue : la lactoferrine et d'autres proteines du lait ont une action antifongique prouvee contre l'oidium. Dose : 10-20% de lait ecreme dans l'eau (100-200 ml/L). Appliquer 2 fois par semaine en pulverisation foliaire. Efficacite surprenante, prouvee par plusieurs etudes scientifiques. Gratuit ou tres bon marche.",
            "Bacillus subtilis (Serenade) et Bacillus amyloliquefaciens : biofongicides qui colonisent la surface des feuilles et produisent des lipopeptides antifongiques. Dose : 2-4 L/ha. Appliquer tous les 7 jours en preventif. Bonne efficacite en complement du soufre.",
            "Huile de neem (Azadirachta indica) : action antifongique moderee mais bonne action de mouillage qui aide les autres produits a adherer aux feuilles. Dose : 5-10 ml/L. Ne pas appliquer en plein soleil.",
            "Ampelomyces quisqualis (AQ10) : champignon mycoparasite qui se nourrit specifiquement du mycelium des oidiums. Agent de biocontrole specialise. Dose : 35-70 g/ha. Appliquer en conditions d'humidite moderee (60-80% HR). Efficacite progressive (necessite plusieurs semaines pour s'etablir).",
            "Soufre sublime (soufre en poudre) pour sublimation en serre : placer des coupelles de soufre en poudre dans la serre et les chauffer legerement pour creer des vapeurs de soufre. Methode traditionnelle tres efficace en serre fermee. 2-3 g/m3 de serre. Attention a ne pas surdoser (phytotoxicite, odeur)."
        ],
        chimique: [
            "Soufre (toutes formes) : fongicide de contact le plus ancien et toujours le plus efficace contre l'oidium. Aucun risque de resistance car action multi-sites. C'est la base de tout programme anti-oidium.",
            "Triazoles systemiques : myclobutanil (Systhane), tebuconazole (Folicur), penconazole (Topas), difenoconazole (Score). Ces fongicides inhibent la biosynthese de l'ergosterol (C14-demethylase), un composant essentiel des membranes cellulaires du champignon. Action preventive et curative. Dose variable selon le produit (0.2-0.5 L/ha). Intervalle 10-14 jours. Maximum 3-4 applications par saison. Alterner avec d'autres familles pour eviter les resistances.",
            "Strobilurines : azoxystrobine (Amistar), kresoxim-methyl (Stroby), trifloxystrobine (Flint). Inhibent la respiration mitochondriale (complexe III). Action preventive et anti-sporulante. Dose : 0.5-1 L/ha. Intervalle 10-14 jours. ATTENTION : des resistances aux strobilurines sont deja signalees chez O. neolycopersici dans certains pays. Ne pas utiliser seules.",
            "Boscalid + pyraclostrobine (Signum) : combinaison de deux modes d'action (SDHI + strobilurine). Excellente efficacite sur l'oidium. Dose : 1-1.5 kg/ha. Maximum 3 applications/saison.",
            "Spiroxamine (Prosper) : fongicide systemique a mode d'action unique (inhibition de la reduction du delta-14 et de l'isomerase delta-8-delta-7). Tres efficace sur l'oidium. Dose : 0.5-0.8 L/ha. Bon outil dans les programmes d'alternance.",
            "Cyflufenamid (Cyflamid) : fongicide de nouvelle generation avec un mode d'action unique. Tres efficace a faible dose. Dose : 0.15-0.2 L/ha. Maximum 2 applications/saison.",
            "STRATEGIE D'ALTERNANCE : Soufre (base) > Triazole > Strobilurine > Soufre > Triazole > SDHI. Ne jamais utiliser la meme famille chimique plus de 2 fois consecutives. Le soufre peut etre utilise entre chaque traitement chimique car il n'y a aucun risque de resistance."
        ],
        mecanique: [
            "Suppression et destruction des feuilles severement atteintes : couper les feuilles presentant plus de 30% de surface touchee. Les mettre dans un sac plastique et les sortir immediatement de la serre pour eviter de disperser les conidies. Ne pas les laisser au sol dans la serre.",
            "Elimination de tous les debris vegetaux en fin de culture : arracher les plants, les sortir de la serre et les detruire. Nettoyer le sol et les structures.",
            "Nettoyage complet des structures de serre entre deux cycles : laver les arceaux, les plastiques et les fils de palissage avec une solution desinfectante. Le mycelium d'oidium ne survit pas longtemps sans plante hote vivante, mais un nettoyage rigoureux elimine tout risque.",
            "Gestion du microclimat en serre : installer des ecrans thermiques pour reduire les ecarts de temperature jour/nuit (reduit la condensation). Utiliser des ventilateurs pour homogeneiser l'air dans la serre."
        ]
    },

    produits: [
        {
            nom: "Soufre mouillable Thiovit Jet",
            type: "Fongicide de contact (autorise en bio)",
            matiere: "Soufre micronise 80% (WG - granules dispersables dans l'eau)",
            action: "Le soufre agit par contact direct et par vapeur (sublimation). Il penetre dans les cellules du champignon et perturbe la respiration cellulaire en inhibant les cytochromes et les enzymes a groupement thiol. Action preventive et curative sur les oidiums. C'est le fongicide anti-oidium le plus ancien, le plus utilise et l'un des plus efficaces.",
            application: "3-5 g/L en pulverisation foliaire (soit 3-7.5 kg/ha dans 800-1000 L d'eau). Bien couvrir les deux faces des feuilles, en insistant sur la face inferieure pour L. taurica. Intervalle de 7-10 jours en conditions favorables a l'oidium. Commencer les traitements preventifs des que les temperatures depassent regulierement 20\u00B0C.",
            precautions: "JAMAIS au-dessus de 28-30\u00B0C : risque grave de brulure foliaire (necroses irreversibles). Appliquer le matin tot (avant 10h) ou en fin d'apres-midi (apres 17h). Ne JAMAIS melanger avec des huiles (huile de neem, huiles minerales) : reaction chimique provoquant des brulures severes. Respecter un delai de 14 jours entre une application d'huile et une application de soufre. Peut irriter les yeux et les voies respiratoires : porter des lunettes et un masque.",
            disponibleMaroc: true
        },
        {
            nom: "Score 250 EC (Difenoconazole)",
            type: "Fongicide systemique (triazole)",
            matiere: "Difenoconazole 250 g/L",
            action: "Inhibiteur de la biosynthese de l'ergosterol (IBE, groupe des triazoles). Le difenoconazole est absorbe par les feuilles et transporte de maniere transvasculaire dans la plante. Il bloque l'enzyme C14-demethylase necessaire a la synthese de l'ergosterol, un composant essentiel des membranes cellulaires du champignon. Action preventive et curative (curative dans les 48-72 heures suivant l'infection).",
            application: "0.5 L/ha dans 400-600 L d'eau. Intervalle de 10-14 jours. Maximum 3 applications par campagne. Particulierement efficace en debut d'attaque pour stopper la progression de l'oidium. Peut etre melange avec le mancozebe pour elargir le spectre.",
            precautions: "DAR : 7 jours. Alterner obligatoirement avec des fongicides d'une autre famille chimique (soufre, strobilurines, SDHI). Les triazoles sont efficaces mais le risque de resistance existe si utilises seuls et de maniere repetee. Ne pas depasser les doses recommandees.",
            disponibleMaroc: true
        },
        {
            nom: "Topas 100 EC (Penconazole)",
            type: "Fongicide systemique (triazole)",
            matiere: "Penconazole 100 g/L",
            action: "Meme mode d'action que le difenoconazole (IBE, inhibition du C14-demethylase) mais avec une structure chimique differente, ce qui le rend utile en alternance. Systemique ascendant avec bonne distribution dans les feuilles traitees.",
            application: "0.25-0.5 L/ha en pulverisation foliaire. Intervalle de 10-14 jours. Maximum 4 applications par saison. Tres bon profil de selectivite sur tomate.",
            precautions: "DAR : 14 jours. Alterner avec le soufre et les strobilurines. Bien adapte aux programmes d'alternance car appartient au meme groupe que le difenoconazole mais avec un profil de resistance different.",
            disponibleMaroc: true
        },
        {
            nom: "Amistar 250 SC (Azoxystrobine)",
            type: "Fongicide systemique (strobilurine)",
            matiere: "Azoxystrobine 250 g/L",
            action: "Inhibe la respiration mitochondriale en bloquant le transfert d'electrons au niveau du complexe III (cytochrome bc1). Action preventive et anti-sporulante. Reduit significativement la production de nouvelles conidies sur les feuilles infectees.",
            application: "0.8-1 L/ha en pulverisation foliaire. Intervalle de 10-14 jours. Maximum 3 applications par saison. Positionner en preventif ou en tout debut d'infection pour maximiser l'efficacite.",
            precautions: "DAR : 3 jours. ATTENTION : des resistances aux strobilurines ont ete signalees chez certaines populations d'oidium. Ne jamais utiliser les strobilurines seules ou plus de 2 fois consecutives. Toujours alterner avec d'autres familles.",
            disponibleMaroc: true
        },
        {
            nom: "Signum WG (Boscalid + Pyraclostrobine)",
            type: "Fongicide systemique double action",
            matiere: "Boscalid 267 g/kg + Pyraclostrobine 67 g/kg",
            action: "Double mode d'action : le boscalid inhibe la succinate deshydrogenase (complexe II, SDHI) et la pyraclostrobine inhibe le complexe III (strobilurine). Cette combinaison offre une excellente efficacite et un faible risque de resistance grace aux deux cibles differentes.",
            application: "1-1.5 kg/ha en pulverisation foliaire. Intervalle de 10-14 jours. Maximum 3 applications par saison. Excellent en milieu de programme pour casser la dynamique d'une epidemie d'oidium.",
            precautions: "DAR : 3 jours. Bien que le risque de resistance soit reduit par la double action, alterner quand meme avec d'autres familles (soufre, triazoles). Compatible avec la plupart des autres produits phytosanitaires.",
            disponibleMaroc: true
        },
        {
            nom: "Lait ecreme (methode traditionnelle)",
            type: "Traitement biologique artisanal",
            matiere: "Lait ecreme ou demi-ecreme du commerce",
            action: "Les proteines du lait (lactoferrine, caseines) ont une action antifongique directe sur les conidies d'oidium. De plus, le lactose fermente sur la surface des feuilles et produit des substances antimicrobiennes. L'effet a ete confirme par plusieurs etudes scientifiques (Wagner Bettiol, 1999 ; Ferrandino & Elmer, 2020).",
            application: "Diluer 100-200 ml de lait ecreme dans 1 L d'eau (10-20%). Pulveriser sur les deux faces des feuilles, 2 fois par semaine. A utiliser en complement des traitements principaux ou en culture biologique.",
            precautions: "Utiliser du lait ecreme (pas entier, la matiere grasse est inutile et peut provoquer des odeurs). Ne pas surdoser (au-dela de 30%, risque d'odeurs et de moisissures saprophytes). Renouveler apres chaque pluie. Solution tres economique et sans danger.",
            disponibleMaroc: true
        }
    ],

    points_cles: [
        "L'oidium se developpe par temps SEC et CHAUD (inverse du mildiou). Au Maroc, la pression est maximale au printemps-ete, en fin de cycle cultural.",
        "Toujours retourner les feuilles jaunes : le feutrage blanc SOUS la feuille est le signe cle de L. taurica. Sans ce reflexe, le diagnostic est rate et le traitement est retarde.",
        "Le SOUFRE est le produit de base (pas le cuivre). Ne jamais appliquer au-dessus de 30\u00B0C. Equilibrer la fertilisation N-P-K (reduire l'azote, augmenter le potassium) est aussi important que les traitements."
    ],

    protocole_traitement: {
        titre: "Protocole de gestion de l'oidium en 5 etapes",
        etapes: [
            {
                titre: "Etape 1 : Evaluation du risque",
                description: "Evaluer le risque d'oidium en fonction de la saison (printemps-ete = risque eleve), de l'age du plant (>4 mois = risque eleve), de la fertilisation (exces d'N = risque eleve), et de la ventilation de la serre. Inspecter regulierement les feuilles basses en les retournant."
            },
            {
                titre: "Etape 2 : Traitements preventifs",
                description: "Des que le risque est identifie (temperatures >20\u00B0C regulieres, fin de saison), commencer les pulverisations preventives de soufre (3-5 g/L) tous les 10-14 jours. En complement, equilibrer la fertilisation (reduire N, augmenter K) et assurer la ventilation."
            },
            {
                titre: "Etape 3 : A la detection des premiers symptomes",
                description: "1) Supprimer les feuilles les plus atteintes (>30% de surface touchee). 2) Resserrer le calendrier de traitement a 7 jours. 3) Alterner soufre + fongicide systemique (triazole ou strobilurine). Exemple : semaine 1 = soufre, semaine 2 = difenoconazole, semaine 3 = soufre, semaine 4 = azoxystrobine."
            },
            {
                titre: "Etape 4 : En cas d'attaque severe",
                description: "Appliquer un programme de traitements rapproches : soufre + triazole tous les 7 jours. Effeuiller agressivement les feuilles atteintes. Reduire l'azote dans la fertigation. Augmenter le potassium. Ameliorer la ventilation. Envisager l'application de silicate de potassium en foliaire."
            },
            {
                titre: "Etape 5 : Prevention pour le cycle suivant",
                description: "Choisir des varietes resistantes pour le prochain cycle. Planifier la fertilisation avec un ratio K/N eleve des le depart. Prevoir les traitements preventifs au soufre des le debut de la periode a risque. Eliminer les mauvaises herbes hotes autour de la serre."
            }
        ]
    },

    faq: [
        {
            question: "L'oidium de la tomate peut-il contaminer mes concombres ou courgettes ?",
            reponse: "L. taurica a une gamme d'hotes tres large et peut theoriquement attaquer les cucurbitacees. Cependant, l'oidium des cucurbitacees est generalement cause par d'autres especes (Podosphaera xanthii, Erysiphe cichoracearum). O. neolycopersici est plus specifique des solanacees. Le risque de transmission croisee tomate-concombre est faible mais pas nul pour L. taurica."
        },
        {
            question: "Pourquoi l'oidium se developpe-t-il par temps sec alors que les autres champignons ont besoin d'humidite ?",
            reponse: "Les conidies d'oidium sont parmi les rares spores fongiques a pouvoir germer a faible humidite relative (50-60%). Elles n'ont pas besoin d'eau libre sur la surface foliaire. Paradoxalement, l'eau libre (pluie, aspersion) est defavorable car les conidies eclatent au contact de l'eau par pression osmotique. C'est pourquoi l'oidium est la maladie des periodes seches et chaudes."
        },
        {
            question: "Le soufre est-il compatible avec les insectes auxiliaires utilises en lutte biologique ?",
            reponse: "Le soufre peut etre toxique pour certains auxiliaires, notamment les acariens predateurs (Phytoseiulus persimilis, Amblyseius spp.) et certains parasitoïdes. Il est recommande de ne pas appliquer de soufre dans les 48 heures suivant un lacher d'auxiliaires. Les vapeurs de soufre en sublimation sont plus impactantes que les pulverisations. En lutte biologique integree, privilegier le bicarbonate de potassium ou le lait comme alternatives au soufre."
        },
        {
            question: "Peut-on traiter l'oidium avec du cuivre (bouillie bordelaise) ?",
            reponse: "Non, le cuivre est tres peu efficace contre les oidiums. Le cuivre est principalement actif contre les oomycetes (mildiou) et les bacteries. Pour l'oidium, il faut utiliser du soufre, des triazoles ou des strobilurines. C'est une erreur frequente de traiter l'oidium avec du cuivre."
        }
    ],

    ressources: [
        "INRA Maroc - Fiches techniques sur les maladies des cultures maraicheres sous serre dans la region du Souss-Massa. Publications du Centre Regional de Recherche Agronomique d'Agadir.",
        "ONSSA - Index phytosanitaire du Maroc : liste des produits homologues contre l'oidium de la tomate (fongicides a base de soufre, triazoles, strobilurines). Mise a jour annuelle.",
        "OEPP/EPPO - Norme de diagnostic PM 7/91 : Leveillula taurica. Protocole d'identification standardise.",
        "Centre Technique Interprofessionnel des Fruits et Legumes (CTIFL, France) - Guides de protection des cultures sous serre : chapitres detailles sur la gestion de l'oidium en tomate.",
        "Universite du Minnesota - Extension Service : Powdery Mildew of Tomato in Greenhouses. Fiche technique complete avec photos diagnostiques.",
        "Kiss L. et al. (2001) : Identification of two powdery mildew fungi attacking tomato. Mycological Research 105: 68-72. Article de reference pour la distinction entre les deux especes.",
        "FRAC (Fungicide Resistance Action Committee) - Recommandations pour la gestion des resistances des oidiums aux fongicides. Document technique mis a jour regulierement.",
        "Bettiol W. (1999) : Effectiveness of cow's milk against zucchini squash powdery mildew. Crop Protection 18: 489-492. Etude scientifique de reference sur l'efficacite du lait contre l'oidium."
    ]
};
