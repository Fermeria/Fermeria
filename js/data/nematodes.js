const MALADIE_NEMATODES = {
    id: "nematodes",
    nom: "Nematodes a galles de la tomate",
    nomScientifique: "Meloidogyne incognita, M. javanica, M. arenaria, M. hapla",
    type: "ravageur",
    emoji: "\ud83e\udeb1",
    resumeCourt: "Les nematodes a galles (Meloidogyne spp.) sont des vers microscopiques du sol qui parasitent les racines de la tomate en y formant des renflements caracteristiques appeles galles. Presents dans tous les sols marocains, ils provoquent un affaiblissement general du plant, une reduction du rendement de 25 a 80 % et facilitent l'entree d'autres pathogenes telluriques. C'est l'un des bioagresseurs les plus destructeurs de la tomate a l'echelle mondiale.",
    cultures: ["Tomate", "Tomate cerise", "Tomate sous serre", "Tomate plein champ", "Cultures maraicheres en general"],

    presentation: {
        description: "Les nematodes a galles appartiennent au genre Meloidogyne, qui compte plus de 100 especes decrites, dont quatre sont particulierement nuisibles a la tomate : M. incognita, M. javanica, M. arenaria et M. hapla. Ce sont des vers ronds (nematodes) microscopiques (0,5 a 1,5 mm de long), invisibles a l'oeil nu, qui vivent dans le sol et parasitent les racines des plantes.\n\nLe symptome le plus caracteristique est la formation de galles (renflements) sur les racines. Ces galles, de taille variable (2 mm a 2 cm), resultent de la multiplication et de l'hypertrophie des cellules racinaires induites par les secretions du nematode. A l'interieur de chaque galle se trouve une ou plusieurs femelles sedentaires, en forme de poire, qui pondent des centaines d'oeufs.\n\nAu Maroc, les nematodes a galles sont presents dans toutes les zones de production de tomate, mais ils sont particulierement problematiques dans les sols sableux et sablo-limoneux des regions du Souss-Massa, du Gharb, du Loukkos et du Saiss. La culture intensive sous serre, avec des rotations courtes et des sols rechauffe, favorise la multiplication rapide de ces ravageurs. M. incognita et M. javanica sont les especes dominantes dans les regions chaudes du Maroc, tandis que M. hapla est plus frequente dans les zones d'altitude.",

        importance: "Ravageur tellurique majeur de la tomate au Maroc et dans le monde. Les pertes de rendement varient de 25 a 80 % selon le niveau d'infestation. Les nematodes a galles sont classes parmi les 5 bioagresseurs les plus importants de la tomate a l'echelle mondiale. Leur gestion est rendue difficile par leur invisibilite, leur capacite de survie dans le sol et la large gamme de plantes-hotes.",

        historique: "Le genre Meloidogyne a ete decrit pour la premiere fois par Berkeley en 1855 sur des racines de concombre en Angleterre. Les galles racinaires ont ete observees sur tomate des les annees 1870. Au Maroc, les premiers signalements de degats importants datent des annees 1960-1970, avec l'intensification de la culture maraichere. Le retrait progressif du bromure de methyle (protocole de Montreal, interdiction complete en 2015 pour les pays en developpement) a profondement modifie les strategies de lutte, obligeant les producteurs a se tourner vers des alternatives : varietes resistantes portant le gene Mi, greffage sur porte-greffes resistants, agents de biocontrole et nematicides de nouvelle generation.\n\nLe gene Mi, identifie chez la tomate sauvage Solanum peruvianum dans les annees 1940, confere une resistance aux trois especes principales (M. incognita, M. javanica, M. arenaria). Cependant, cette resistance est contournee a des temperatures du sol superieures a 28 degres C et par certaines populations virulentes de nematodes. De nouvelles sources de resistance (Mi-2 a Mi-9) sont en cours d'evaluation.",

        impact_economique: "Les pertes economiques causees par les nematodes a galles sont considerables :\n\n- Pertes de rendement directes : 25 a 80 % selon le niveau d'infestation, pouvant atteindre 100 % en cas d'infestation massive sur variete sensible.\n- Reduction de la qualite : fruits plus petits, maturation irreguliere, teneur en sucres reduite.\n- Cout du greffage : 0,80 a 1,50 MAD supplementaire par plant greffe sur porte-greffe resistant.\n- Cout des nematicides : 3 000 a 8 000 MAD/ha selon les produits utilises.\n- Cout de la solarisation : 2 000 a 4 000 MAD/ha (film plastique + main d'oeuvre).\n- Interactions pathologiques : les blessures racinaires causees par les nematodes facilitent l'entree de Fusarium oxysporum, Verticillium dahliae et des bacteries du sol, aggravant les pertes.\n- Au Maroc, les nematodes a galles sont estimes responsables de pertes annuelles de plusieurs centaines de millions de MAD sur l'ensemble des cultures maraicheres."
    },

    origine: {
        agent: "Les nematodes a galles (Meloidogyne spp.) sont des nematodes endoparasites sedentaires. Les quatre especes les plus importantes sur tomate sont :\n\n- Meloidogyne incognita : l'espece la plus repandue et la plus nuisible en climat chaud. Predominante au Maroc dans le Souss-Massa et les plaines cotieres. Se reproduit par parthenogenese mitotique (pas de males necessaires).\n- Meloidogyne javanica : frequente en sols sableux et en regions chaudes. Co-dominante avec M. incognita au Maroc.\n- Meloidogyne arenaria : presente dans les sols sableux. Moins frequente mais virulente.\n- Meloidogyne hapla : l'espece des climats temperes. Presente dans les zones d'altitude au Maroc (Moyen Atlas, Haut Atlas). Se reproduit par parthenogenese meiotique (males parfois presents).\n\nCe sont des organismes microscopiques (larves de stade 2 : 0,4 mm ; femelles adultes : 0,5-1,5 mm en forme de poire). Ils se nourrissent du contenu des cellules racinaires via un stylet buccal perforant.",

        provenance: "Les Meloidogyne sont cosmopolites et presents dans tous les sols cultives des regions tropicales, subtropicales et temperees chaudes. Au Maroc, ils sont omnipresents dans les sols agricoles, avec des niveaux d'infestation variables. Les sols sableux et sablo-limoneux, bien draines et rechauffe, sont les plus favorables. L'inoculum provient du sol de la parcelle, des plants de pepiniere contamines (mottes avec oeufs et larves), du sol transporte par les outils et les chaussures, et de l'eau d'irrigation contaminee par des particules de sol infeste.",

        cycle: "1. Survie dans le sol : les oeufs, contenus dans des masses gelatineuses (matrices) deposees par les femelles a la surface des galles ou dans le sol, peuvent survivre plusieurs mois dans le sol en l'absence de plante-hote. Les larves de stade 2 (J2) sont la forme infestante mobile.\n\n2. Eclosion et attraction : lorsqu'une racine de tomate se developpe a proximite, les exsudats racinaires (CO2, acides amines) stimulent l'eclosion des oeufs et attirent les J2 par chimiotactisme. Les J2 se deplacent dans le film d'eau du sol a la vitesse de quelques centimetres par jour.\n\n3. Penetration : les J2 penetrent dans la racine au niveau de la zone d'elongation, juste derriere la coiffe racinaire. Elles perforent les cellules avec leur stylet buccal et progressent entre les cellules corticales vers le cylindre central.\n\n4. Etablissement du site nourricier : une fois dans le cylindre central, la J2 injecte des secretions de ses glandes oesophagiennes dans 5 a 7 cellules adjacentes. Ces secretions reprogramment les cellules vegetales, qui fusionnent et forment des cellules geantes multinucleees (cellules geantes a parois epaissies). Ce site nourricier constitue la source de nutrition permanente du nematode.\n\n5. Formation de la galle : les cellules environnantes se multiplient (hyperplasie) et grossissent (hypertrophie), formant la galle visible a l'oeil nu. La galle perturbe le flux de seve dans les vaisseaux conducteurs de la racine.\n\n6. Developpement et reproduction : la J2 mue trois fois (stades J3, J4, adulte) et se transforme en femelle sedentaire en forme de poire. La femelle pond 200 a 500 oeufs dans une masse gelatineuse (matrice) deposee a la surface de la galle ou dans le cortex racinaire. Le cycle complet (oeuf a oeuf) dure 25 a 30 jours a 25-28 degres C.\n\n7. Nouvelles generations : les J2 issues de ces oeufs quittent la racine et infestent de nouvelles racines. Plusieurs generations (4 a 8) se succedent au cours d'un cycle cultural de tomate, provoquant une augmentation exponentielle de la population de nematodes dans le sol.",

        propagation: [
            "Dissemination par les plants de pepiniere infestes (mottes contenant des oeufs et des larves) - mode principal d'introduction dans les parcelles saines",
            "Deplacement actif des larves J2 dans le film d'eau du sol (quelques centimetres par jour) de racine en racine",
            "Transport passif de sol infeste par les outils agricoles (charrues, motoculteurs, beches), les chaussures et les roues d'engins",
            "Eau d'irrigation contaminee par des particules de sol infeste (irrigation gravitaire, canaux)",
            "Substrat de culture contamine reutilise sans sterilisation",
            "Engrais organique (fumier, compost) contenant du sol infeste non composte a haute temperature",
            "Ruissellement d'eau entre parcelles transportant des particules de sol avec oeufs et larves",
            "Plantes adventices (mauvaises herbes) servant de plantes-hotes et maintenant les populations entre deux cultures"
        ]
    },

    facteurs: {
        climatiques: [
            "Temperatures du sol elevees (optimum 25-30 degres C pour M. incognita et M. javanica). Le cycle est accelere en sols chauds : 25 jours a 28 degres C contre 60 jours a 18 degres C",
            "Sols chauds sous serre ou tunnel plastique : la temperature du sol peut depasser 30 degres C, accelerant les cycles de reproduction",
            "Climat chaud et sec favorisant la concentration des populations dans les zones irriguees",
            "Contournement de la resistance Mi a des temperatures du sol superieures a 28 degres C",
            "Humidite du sol moderee : les nematodes se deplacent dans le film d'eau du sol mais sont genes par l'engorgement (faible aeration) ou la secheresse extreme"
        ],
        sol: [
            "Sols sableux et sablo-limoneux : la texture grossiere facilite le deplacement des J2 et le drainage rapide evite l'asphyxie des nematodes",
            "Sols legers, bien draines et bien aeres : conditions ideales pour Meloidogyne",
            "Sols a faible teneur en matiere organique : microbiome du sol appauvri, moins d'antagonistes naturels",
            "pH du sol entre 5,5 et 7,5 (gamme optimale pour Meloidogyne)",
            "Sols fatigues par la monoculture de solanacees : accumulation progressive des populations sur plusieurs cycles",
            "Sols pauvres en champignons nematophages (Pochonia, Paecilomyces, Arthrobotrys) et en bacteries antagonistes"
        ],
        pratiques: [
            "Monoculture de tomate ou rotation avec d'autres plantes-hotes sensibles (aubergine, poivron, melon, pastèque, concombre)",
            "Utilisation de plants de pepiniere non certifies, potentiellement infestes",
            "Absence de desinfection du sol entre deux cycles de culture",
            "Irrigation excessive favorisant la dissemination des larves et le maintien de l'humidite du sol propice aux nematodes",
            "Non-elimination des racines de la culture precedente : les galles contiennent des milliers d'oeufs qui se liberent dans le sol",
            "Labour superficiel ne permettant pas d'exposer les nematodes a la dessiccation et au gel",
            "Non-utilisation de varietes ou porte-greffes resistants (gene Mi) dans les parcelles infestees",
            "Apport d'engrais organique non composte a haute temperature, pouvant contenir du sol infeste",
            "Absence d'analyse nematologique du sol avant la plantation"
        ],
        erreurs: [
            "Attribuer le fletrissement et le retard de croissance a un manque d'eau et irriguer davantage, ce qui favorise encore plus les nematodes",
            "Ne pas examiner les racines lors de l'arrachage en fin de culture : les galles passent inaperçues et le sol reste massivement infeste",
            "Croire que le labour suffit a eliminer les nematodes : les oeufs survivent des mois dans le sol meme sans plante-hote",
            "Confondre les galles racinaires avec des nodosites de fixation d'azote (legumineuses) ou des excroissances naturelles",
            "Utiliser des varietes resistantes Mi en plein ete sous serre (sol > 28 degres C) sans savoir que la resistance est contournee a haute temperature",
            "Ne pas analyser le sol avant la plantation pour connaitre le niveau d'infestation et adapter la strategie de lutte",
            "Penser que la solarisation est efficace en hiver : elle ne fonctionne qu'en ete (juillet-aout) quand les temperatures du sol atteignent 45-55 degres C en profondeur",
            "Transporter du sol d'une parcelle infestee a une parcelle saine avec des outils non nettoyes"
        ]
    },

    symptomes: {
        feuilles: "STADE INITIAL :\nLes symptomes aeriens sont discrets et non specifiques. Les plants infestes montrent un leger retard de croissance par rapport aux plants sains. Les feuilles peuvent presenter un jaunissement leger (chlorose) des folioles inferieures, souvent confondu avec un stress hydrique ou une carence azotee. Par temps chaud, les plants infestes fletrissent legerement en milieu de journee et recuperent le soir, donnant l'impression d'un simple manque d'eau.\n\nSTADE INTERMEDIAIRE :\nLe fletrissement diurne devient plus prononce et plus frequent. La croissance est nettement ralentie : les plants sont plus petits, les entre-noeuds plus courts, le feuillage moins dense. Les feuilles jaunissent de maniere plus marquee, en commencant par les etages inferieurs. La floraison est reduite et la nouaison plus faible. Les plants peuvent presenter un aspect general affaibli et desequilibre.\n\nSTADE AVANCE :\nLe fletrissement est permanent, meme apres arrosage. Les feuilles jaunissent et se dessechent progressivement de la base vers le sommet. La production de fruits est tres reduite, avec des fruits petits et mal colores. Dans les cas extremes, les plants peuvent mourir prematureement, surtout si l'infestation est combinee a une fusariose ou une verticilliose (complexe parasitaire racinaire). Les symptomes ressemblent a ceux d'un stress hydrique severe mais ne repondent pas a l'irrigation.",

        tiges: "Les tiges ne sont pas directement attaquees par les nematodes. Cependant, la base de la tige (collet) peut montrer un retrecissement et un brunissement dans les cas d'infestation severe avec surinfection par Fusarium ou Rhizoctonia, qui penetrent par les blessures racinaires causees par les nematodes. En coupe longitudinale de la base de la tige, on peut parfois observer un brunissement vasculaire cause par Fusarium oxysporum entre par les galles nematiques.",

        fruits: "Les fruits ne sont pas directement attaques. L'impact est indirect : les plants infestes produisent moins de fruits, de calibre reduit (20 a 40 % plus petits), avec une coloration souvent irreguliere (marbrures jaunes et rouges). La maturation est retardee et inegale. La teneur en sucres est reduite, affectant la qualite gustative. En cas d'infestation severe, la production peut chuter de 50 a 80 %.",

        racines: "C'est le symptome CLE et PATHOGNOMONIQUE de l'attaque par nematodes a galles. Les racines presentent des renflements (GALLES) de taille variable :\n\n- Petites galles (2-5 mm) : infestation legere, une seule femelle par galle.\n- Galles moyennes (5-15 mm) : infestation moderee, plusieurs femelles par galle.\n- Grosses galles (1-3 cm) : coalescence de plusieurs galles, infestation severe.\n- Aspect en 'chapelet de perles' : succession de galles le long de la racine.\n- Racines en 'massue' : extremites racinaires fortement deformees.\n\nLes galles sont fermes, non detachables de la racine (contrairement aux nodosites de Rhizobium chez les legumineuses qui se detachent facilement). En coupe transversale, on peut observer les femelles en forme de poire, blanches et nacrees, de 0,5 a 1 mm, a l'interieur de la galle. Les masses d'oeufs (matrices gelatineuses brunes) sont parfois visibles a la surface des galles.\n\nLe systeme racinaire est globalement desorganise : les racines secondaires sont rares, le chevelu racinaire est reduit, et l'absorption d'eau et de nutriments est severement compromise.",

        stade: "Les nematodes peuvent attaquer la tomate a tous les stades de developpement, mais les jeunes plants sont les plus vulnerables. Les premiers symptomes racinaires (petites galles) apparaissent 15 a 20 jours apres la plantation si le sol est infeste. Les symptomes aeriens (fletrissement, chlorose) deviennent visibles 4 a 6 semaines apres la plantation.\n\nLa severite augmente au cours du cycle cultural car les nematodes se multiplient exponentiellement (une femelle pond 200-500 oeufs, cycle de 25-30 jours a 25 degres C). Ainsi, un sol faiblement infeste a la plantation peut devenir massivement infeste en fin de culture, compromettant les cultures suivantes.\n\nEn pepiniere, les plants peuvent deja etre infestes si le substrat est contamine. Verifier systematiquement les racines des plants a la reception.",

        differenciation: "Fusariose vasculaire : pas de galles racinaires, brunissement vasculaire visible en coupe de tige, fletrissement unilateral au debut.\nVerticilliose : pas de galles, symptomes foliaires en V jaune partant du bord des feuilles, brunissement vasculaire leger.\nCarence hydrique : pas de galles racinaires, le plant recupere apres arrosage (contrairement a l'attaque nematodes).\nCarence en azote : jaunissement uniforme des feuilles basses, pas de galles, pas de fletrissement.\nNodosites de Rhizobium (legumineuses) : les nodosites se DETACHENT facilement de la racine, sont roses a l'interieur (leghemoglobine). Les galles de Meloidogyne sont SOLIDAIRES de la racine et blanches a l'interieur.\nExcroissances du crown gall (Agrobacterium) : tumeurs a la base de la tige et au collet, pas sur les racines fines."
    },

    lutte: {
        prevention: [
            "Analyser le sol avant la plantation : prelevement d'echantillons de sol (250 g de sol dans les 30 premiers cm, 10 a 15 points par parcelle) et analyse nematologique en laboratoire pour identifier les especes presentes et estimer le niveau d'infestation",
            "Utiliser des varietes de tomate portant le gene de resistance Mi (Mi-1.2) : confere une resistance aux trois especes principales (M. incognita, M. javanica, M. arenaria). Attention : resistance contournee au-dessus de 28 degres C au niveau du sol",
            "Greffer la tomate sur des porte-greffes resistants aux nematodes (Maxifort, Beaufort, Emperador, He-Man) pour une resistance plus stable que le gene Mi seul",
            "Pratiquer la rotation culturale avec des plantes non-hotes ou pieges : cereales (ble, orge, mais), cruciferes (chou, brocoli, moutarde), oignon, ail, poireau. Eviter absolument la rotation avec d'autres solanacees ou cucurbitacees",
            "Utiliser des engrais verts nematicides : Tagetes (oeillet d'Inde) pendant 2-3 mois entre deux cultures. Les Tagetes produisent de l'alpha-terthienyle, toxique pour Meloidogyne. Le sorgho fourrager est egalement antagoniste",
            "Eliminer integralement les racines de la culture precedente a la fin du cycle : arracher les plants avec leurs racines et les detruire (bruler ou composter a haute temperature > 55 degres C)",
            "Solariser le sol entre deux cultures : couvrir le sol humide avec un film plastique transparent de 40 microns pendant 6 a 8 semaines en plein ete (juillet-aout au Maroc). Les temperatures atteignent 45-55 degres C a 20 cm de profondeur, tuant les nematodes et de nombreux autres pathogenes",
            "Utiliser des plants de pepiniere certifies indemnes de nematodes. Verifier systematiquement les racines a la reception : aucune galle ne doit etre presente",
            "Desinfecter les outils agricoles, les chaussures et les roues d'engins entre les parcelles pour eviter le transport de sol infeste",
            "Maintenir une bonne teneur en matiere organique du sol (> 2 %) : les sols riches en matiere organique hebergent davantage de champignons nematophages et de micro-organismes antagonistes",
            "Installer des engrais verts de cruciferes (moutarde, radis fourrager) avant la plantation : leur incorporation au sol libere des isothiocyanates, toxiques pour les nematodes (biofumigation)",
            "Eviter la monoculture de tomate : ne pas replanter de tomate ou de solanacee sur la meme parcelle avant 3 a 4 ans minimum"
        ],
        biologique: [
            "Application de Purpureocillium lilacinum (= Paecilomyces lilacinus) au sol : champignon parasite des oeufs de Meloidogyne. Appliquer 2-4 kg/ha au moment de la plantation, en incorporation au sol ou en arrosage au pied des plants",
            "Inoculation du sol avec Pochonia chlamydosporia (= Verticillium chlamydosporium) : champignon nematophage qui colonise les masses d'oeufs et les femelles de Meloidogyne. Appliquer au sol 2 a 4 semaines avant la plantation",
            "Application de Bacillus firmus (Votivo) en traitement de semences ou en application au sol : bacterie qui colonise la rhizosphere et produit des metabolites nematotoxiques",
            "Utilisation de Trichoderma harzianum en combinaison avec les nematicides biologiques : Trichoderma ne tue pas directement les nematodes mais renforce la croissance racinaire et compete avec les pathogenes secondaires (Fusarium) qui profitent des blessures nematiques",
            "Application de tourteaux de neem (Azadirachta indica) au sol : 200-400 kg/ha en incorporation avant la plantation. Les limonoides du neem perturbent la mue et la reproduction des nematodes",
            "Culture de Tagetes (oeillet d'Inde) en engrais vert intercalaire ou en precultural pendant 60 a 90 jours : les racines de Tagetes produisent de l'alpha-terthienyle et d'autres polythienyles toxiques pour les J2 de Meloidogyne",
            "Biofumigation : incorporation au sol de cruciferes broyees (moutarde, chou, brocoli) a raison de 20-40 t/ha de matiere fraiche. La degradation des glucosinolates libere des isothiocyanates, toxiques pour les nematodes. Arroser immediatement et couvrir de plastique pendant 2-3 semaines",
            "Application de chitine ou de chitosan au sol (200-500 kg/ha) : stimule la proliferation des champignons chitinolytiques qui degradent les parois des oeufs de nematodes"
        ],
        chimique: [
            "Oxamyl (Vydate 24 SL) : nematicide-insecticide systemique carbamate. Application en arrosage au sol a 5-10 L/ha apres la plantation, ou par le systeme de goutte-a-goutte. Peut aussi etre utilise en pulverisation foliaire (absorption systemique). Effet curatif et preventif",
            "Fluopyram (Velum Prime 400 SC) : nematicide SDHI de nouvelle generation. Application par le systeme de goutte-a-goutte a 0,5 L/ha. Tres bonne efficacite contre Meloidogyne avec un profil toxicologique favorable. Egalement actif contre les maladies fongiques du sol",
            "Fosthiazate (Nemathorin 10 G) : nematicide organophosphore granule. Incorporation au sol avant la plantation a 20-30 kg/ha. Bonne efficacite de contact sur les J2 et les oeufs. Duree de protection : 8 a 12 semaines",
            "Abamectine (Vertimec 018 EC) : lactone macrocyclique a activite nematicide. Application en arrosage au sol au moment de la plantation. Dose : 2-3 L/ha. Action par paralysie neuromusculaire des J2. Egalement actif contre les acariens",
            "Fenamiphos (Nemacur 400 EC) : nematicide organophosphore systemique. Application au sol par arrosage ou goutte-a-goutte a 5-10 L/ha. Tres efficace mais progressivement retire dans certains pays en raison de sa toxicite. Verifier l'homologation au Maroc",
            "Dazomet (Basamid Granule) : fumigant du sol sous forme de granules. Incorporation au sol humide a 40-50 g/m2, 3 a 4 semaines avant la plantation. Couvrirde plastique pendant 2 semaines. Tres efficace a large spectre (nematodes, champignons, graines d'adventices) mais necessite un delai d'attente avant plantation",
            "1,3-Dichloropropene (Telone II) : fumigant liquide du sol, alternative au bromure de methyle. Injection dans le sol a 20-30 cm de profondeur, a 150-250 L/ha, 3 semaines avant plantation. Tres efficace mais reglemente. Verifier la disponibilite au Maroc",
            "Fluensulfone (Nimitz 480 EC) : nematicide non-fumigant de nouvelle generation. Application par le systeme de goutte-a-goutte a 3-5 L/ha avant ou au moment de la plantation. Inhibe la motilite et la capacite de penetration des J2. Profil environnemental favorable"
        ],
        mecanique: [
            "Solarisation du sol : couvrir le sol prealablement irrigue (humide sur 40 cm de profondeur) avec un film plastique transparent de 25-40 microns pendant 6 a 8 semaines en plein ete (juillet-aout). Les temperatures du sol atteignent 45-55 degres C a 20 cm, tuant les nematodes jusqu'a 30-40 cm de profondeur. Technique tres efficace au Maroc grace au fort ensoleillement estival",
            "Biofumigation : broyer et incorporer au sol 20-40 tonnes/ha de cruciferes (moutarde brune, chou, radis fourrager, roquette) a l'aide d'un broyeur puis d'un rotavator. Irriguer immediatement et couvrir de plastique. Les isothiocyanates liberes pendant la decomposition sont toxiques pour les nematodes. Laisser agir 2 a 3 semaines",
            "Inondation du sol : maintenir le sol sature d'eau pendant 4 a 6 semaines entre deux cultures. L'anaerobiose tue les nematodes par asphyxie. Technique possible dans les sols lourds et les zones a eau abondante",
            "Labour profond (30-40 cm) en ete : exposer les couches profondes du sol au soleil et a la dessiccation. Completer par un assec (laisser le sol nu et sec pendant 4 a 6 semaines en ete). Moins efficace que la solarisation mais complementaire",
            "Retrait complet des racines de la culture precedente : arracher les plants en tirant sur la tige pour extraire le maximum de racines. Les racines non retirees libereront des millions d'oeufs dans le sol",
            "Filtration de l'eau d'irrigation : installer des filtres a sable ou a disque sur le reseau d'irrigation pour eliminer les particules de sol pouvant contenir des oeufs et des larves de nematodes"
        ]
    },

    produits: [
        {
            nom: "Velum Prime 400 SC (Fluopyram)",
            type: "Nematicide systemique de nouvelle generation",
            matiere: "Fluopyram 400 g/L",
            action: "Inhibiteur de la succinate deshydrogenase (SDHI, complexe II de la chaine respiratoire). Action nematicide par inhibition du metabolisme energetique des nematodes. Egalement actif contre les champignons telluriques (Fusarium, Rhizoctonia). Absorbe par les racines et transloque dans la plante.",
            application: "0,5 L/ha en application par le systeme de goutte-a-goutte, au moment de la plantation ou dans les 2 semaines suivantes. Peut etre fractionne en 2 applications de 0,25 L/ha a 14 jours d'intervalle. Bien irriguer apres application pour amener le produit dans la zone racinaire.",
            precautions: "DAR : 7 jours. Profil toxicologique favorable par rapport aux anciens nematicides organophosphores. Ne pas depasser 2 applications par cycle cultural. Alterner avec d'autres modes d'action pour prevenir les resistances.",
            disponibleMaroc: true
        },
        {
            nom: "Vydate 24 SL (Oxamyl)",
            type: "Nematicide-insecticide systemique",
            matiere: "Oxamyl 240 g/L",
            action: "Carbamate systemique. Inhibe l'acetylcholinesterase des nematodes, provoquant une paralysie et la mort. Action de contact et systemique. Absorbe par les racines et transloque dans la plante. Egalement actif contre les pucerons, les aleurodes et les thrips.",
            application: "5 a 10 L/ha en arrosage au sol ou par le systeme de goutte-a-goutte. Premiere application au moment de la plantation, renouveler toutes les 4 a 6 semaines selon la pression. Volume de bouillie : 2 000 a 5 000 L/ha pour amener le produit dans la zone racinaire.",
            precautions: "DAR : 7 jours. Produit TRES TOXIQUE (classe Ib OMS). Manipuler avec des EPI complets (combinaison, gants, masque, lunettes). Ne pas entrer dans la parcelle pendant 48 h apres traitement. Stocker sous cle. Interdit en agriculture biologique.",
            disponibleMaroc: true
        },
        {
            nom: "Nemathorin 10 G (Fosthiazate)",
            type: "Nematicide granule de contact",
            matiere: "Fosthiazate 10 %",
            action: "Organophosphore de contact et d'ingestion. Inhibe l'acetylcholinesterase des nematodes. Action sur les oeufs (ovicide) et les larves J2 (larvicide). Longue persistance dans le sol (8-12 semaines).",
            application: "20-30 kg/ha en incorporation au sol avant la plantation. Epandre les granules uniformement sur le sol et les incorporer par un passage de rotavator a 15-20 cm de profondeur. Planter 3 a 5 jours apres le traitement.",
            precautions: "Produit toxique (classe II OMS). Porter EPI. Ne pas appliquer a la main. Respecter les zones de non-traitement (ZNT) vis-a-vis des points d'eau. Conservation au sec et a l'abri de la chaleur.",
            disponibleMaroc: true
        },
        {
            nom: "Basamid Granule (Dazomet)",
            type: "Fumigant du sol polyvalent",
            matiere: "Dazomet 98 %",
            action: "Fumigant generateur de methylisothiocyanate (MITC) dans le sol humide. Action a tres large spectre : nematicide, fongicide, herbicide, insecticide. Detruit les nematodes a tous les stades (oeufs, larves, adultes), les champignons du sol (Fusarium, Verticillium, Pythium, Rhizoctonia), les graines d'adventices et les insectes du sol.",
            application: "40-50 g/m2 (400-500 kg/ha). Epandre les granules sur sol prealablement irrigue et bien emiette. Incorporer immediatement a 20-30 cm avec un rotavator. Couvrir de film plastique pendant 14 jours. Aerer le sol pendant 10 a 14 jours apres retrait du film. Faire un test de cresson avant plantation pour verifier la dissipation complete du produit.",
            precautions: "Delai obligatoire de 3 a 4 semaines entre le traitement et la plantation. Test de cresson indispensable : semer quelques graines de cresson dans le sol traite. Si elles germent normalement en 3 jours, le sol est pret. TRES IRRITANT : manipuler avec masque et gants. Ne pas inhaler les vapeurs.",
            disponibleMaroc: true
        },
        {
            nom: "Nimitz 480 EC (Fluensulfone)",
            type: "Nematicide non-fumigant de nouvelle generation",
            matiere: "Fluensulfone 480 g/L",
            action: "Nematicide a mode d'action unique. Inhibe de maniere irreversible la motilite des nematodes J2, les empechant de penetrer dans les racines. Perturbe egalement le developpement et la reproduction des femelles. Pas d'action sur les champignons ou les insectes.",
            application: "3 a 5 L/ha en application au sol par le systeme de goutte-a-goutte, 7 a 14 jours avant la plantation. Irriguer avec 10-15 mm d'eau apres application pour distribuer le produit dans la zone racinaire (0-30 cm). Une seule application par cycle cultural.",
            precautions: "Respecter le delai de 7 jours minimum entre l'application et la plantation. Profil environnemental favorable (faible toxicite pour les vertebres). Ne pas appliquer sur culture en place. Compatible avec Trichoderma et les agents de biocontrole.",
            disponibleMaroc: true
        },
        {
            nom: "Bio-Nematicide (Purpureocillium lilacinum)",
            type: "Bionematicide a base de champignon parasite des oeufs",
            matiere: "Purpureocillium lilacinum souche 251, 1 x 10^9 spores/g",
            action: "Champignon entomopathogene et nematophage. Colonise les masses d'oeufs (matrices) de Meloidogyne et parasite les oeufs en penetrant a travers la paroi. Reduit l'eclosion des J2 de 40 a 70 %. Colonise egalement les femelles sedentaires. Action preventive a moyen et long terme.",
            application: "2-4 kg/ha en incorporation au sol ou en arrosage au pied des plants, au moment de la plantation. Renouveler apres 4-6 semaines. Appliquer sur sol humide. Compatible avec la plupart des fongicides et insecticides (sauf les benzimidazoles).",
            precautions: "Action lente : ne pas attendre un effet immediat. L'efficacite se construit sur plusieurs semaines. A integrer dans un programme de lutte integree, pas en remplacement total des nematicides chimiques en cas de forte infestation. Stocker au frais (4-8 degres C).",
            disponibleMaroc: true
        },
        {
            nom: "Tourteau de neem (Azadirachta indica)",
            type: "Amendement organique nematicide naturel",
            matiere: "Tourteau de graines de neem : azadirachtine, nimbidin, salanine",
            action: "Les limonoides du neem (azadirachtine, nimbidin, salanine) perturbent la mue, l'alimentation et la reproduction des nematodes. Le tourteau enrichit egalement le sol en matiere organique et en azote, stimulant la microflore antagoniste. Action progressive et durable.",
            application: "200-400 kg/ha en incorporation au sol 15 a 21 jours avant la plantation. Epandre uniformement et incorporer a 15-20 cm par un passage de rotavator. Irriguer pour activer la decomposition. Peut etre renouvele a chaque cycle cultural.",
            precautions: "Action lente (2-3 semaines pour atteindre l'effet maximum). L'odeur peut etre forte lors de l'incorporation. Compatible avec tous les agents de biocontrole. Utilisable en agriculture biologique. Disponible au Maroc aupres des fournisseurs d'intrants biologiques.",
            disponibleMaroc: true
        }
    ],

    points_cles: [
        "Le DIAGNOSTIC RACINAIRE est indispensable : les symptomes aeriens (fletrissement, chlorose, retard de croissance) sont trop generiques pour identifier les nematodes. Il faut ARRACHER un plant suspect et examiner ses racines a la recherche des GALLES caracteristiques. Prenez l'habitude d'examiner les racines a chaque arrachage en fin de culture.",
        "La PREVENTION est la strategie la plus efficace et la plus economique. Une fois que les nematodes sont installes dans un sol, il est extremement difficile de les eliminer completement. L'analyse nematologique du sol avant la plantation, la rotation avec des cultures non-hotes (cereales, oignon, Tagetes), la solarisation estivale et le greffage sur porte-greffes resistants constituent les piliers de la lutte durable.",
        "La RESISTANCE VARIETALE (gene Mi) est un outil puissant mais PAS infaillible. Le gene Mi est CONTOURNE a des temperatures du sol superieures a 28 degres C (frequentes sous serre au Maroc en ete). Le greffage sur porte-greffes resistants (Maxifort, Beaufort) offre une resistance plus large et plus stable que le gene Mi seul. Combinez toujours resistance genetique + gestion du sol + biocontrole.",
        "La LUTTE INTEGREE est la seule strategie durable : aucune methode seule ne suffit. Combinez rotation culturale (3-4 ans sans solanacees), solarisation (ete), agents biologiques (Purpureocillium, Trichoderma, neem), greffage sur porte-greffe resistant, et nematicides chimiques cibles uniquement si necessaire. L'objectif est de maintenir les populations sous le seuil de nuisibilite, pas de les eliminer completement.",
        "L'ANALYSE DE SOL est votre meilleur investissement : une analyse nematologique (comptage des J2 dans 250 g de sol) coute 200-400 MAD et vous permet de connaitre le niveau d'infestation AVANT la plantation. Un seuil de 50-100 J2/250 g de sol justifie des mesures de lutte. Au-dessus de 500 J2/250 g, les mesures doivent etre intensives."
    ],

    protocole_traitement: {
        titre: "Protocole de lutte integree contre les nematodes a galles",
        etapes: [
            {
                titre: "Etape 1 : Diagnostic et analyse de sol (2-3 mois avant plantation)",
                description: "Prelever des echantillons de sol : 10-15 sous-echantillons par parcelle, a 15-30 cm de profondeur, melanges pour obtenir un echantillon composite de 500 g. Envoyer au laboratoire d'analyse nematologique (INRA, IAV, laboratoires prives). Demander : identification des especes de Meloidogyne + comptage des J2 par 250 g de sol. Seuils : < 50 J2/250 g = risque faible, 50-500 J2/250 g = risque modere, > 500 J2/250 g = risque eleve. Examiner egalement les racines de la culture precedente pour detecter des galles."
            },
            {
                titre: "Etape 2 : Desinfection du sol (6-8 semaines avant plantation)",
                description: "En ete (juillet-aout) : solarisation. Irriguer le sol a saturation (40 cm de profondeur), couvrir immediatement avec un film plastique transparent de 25-40 microns, bien tendu et enfoui sur les bords. Laisser 6-8 semaines. En complement ou alternative : biofumigation avec 20-40 t/ha de moutarde brune broyee incorporee au sol, irriguee et couverte de plastique pendant 2-3 semaines. Pour les infestations severes : traitement chimique au Basamid (40-50 g/m2) ou Nimitz (3-5 L/ha via goutte-a-goutte) 2-3 semaines avant plantation."
            },
            {
                titre: "Etape 3 : Preparation biologique du sol (2-3 semaines avant plantation)",
                description: "Apres la desinfection, recoloniser le sol avec des micro-organismes benefiques. Incorporer du tourteau de neem (200-400 kg/ha). Appliquer Purpureocillium lilacinum (2-4 kg/ha) et Trichoderma harzianum (2-5 kg/ha) au sol en arrosage. Ajouter du compost mature (10-20 t/ha) pour enrichir la microflore antagoniste. Ces apports biologiques sont d'autant plus efficaces que le sol a ete prealablement desinfecte (moins de competition avec les pathogenes)."
            },
            {
                titre: "Etape 4 : Plantation avec protection (jour de plantation)",
                description: "Choisir une variete portant le gene Mi OU, mieux, greffer sur un porte-greffe resistant (Maxifort, Beaufort, Emperador). Verifier les racines des plants a la reception : aucune galle acceptable. Au moment de la plantation, appliquer Velum Prime (0,5 L/ha) ou Vydate (5-10 L/ha) par le goutte-a-goutte pour proteger les jeunes racines. Si infestation severes : combiner nematicide chimique + apport biologique (Purpureocillium)."
            },
            {
                titre: "Etape 5 : Suivi et fin de cycle (pendant et apres culture)",
                description: "Surveiller les plants pendant la culture : tout signe de fletrissement inexplique ou de retard de croissance doit conduire a arracher un plant pour examiner les racines. Si des galles sont detectees en cours de culture, appliquer Vydate (5-10 L/ha) via le goutte-a-goutte. En fin de culture : arracher TOUS les plants avec leurs racines, les sortir de la parcelle et les detruire. Ne jamais laisser les racines se decomposer dans le sol (liberation de millions d'oeufs). Planifier la rotation : la culture suivante doit etre une non-hote (cereale, oignon, ail, Tagetes). Refaire une analyse de sol pour evaluer l'evolution des populations."
            }
        ]
    },

    faq: [
        {
            question: "Comment savoir si mon sol est infeste par les nematodes avant de planter ?",
            reponse: "La seule methode fiable est l'analyse nematologique en laboratoire. Prelevez 10-15 sous-echantillons de sol a 15-30 cm de profondeur, repartis dans toute la parcelle, et melangez-les pour obtenir un echantillon composite de 500 g. Envoyez-le a un laboratoire (INRA, IAV Hassan II, laboratoires prives agrees). Le laboratoire identifiera les especes presentes et comptera les larves J2 par 250 g de sol. Cout : 200-400 MAD. Un autre indice fiable : examinez les racines de la culture precedente lors de l'arrachage. La presence de galles confirme l'infestation."
        },
        {
            question: "Le greffage sur porte-greffe resistant est-il vraiment efficace contre les nematodes ?",
            reponse: "Oui, le greffage est l'une des solutions les plus efficaces et durables. Les porte-greffes resistants (Maxifort, Beaufort, Emperador, He-Man) portent des genes de resistance a Meloidogyne qui restent efficaces meme a des temperatures du sol superieures a 28 degres C (contrairement au gene Mi des varietes non greffees). Le greffage reduit les populations de nematodes de 70 a 90 % et ameliore aussi la vigueur generale du plant, la tolerance aux maladies du sol (Fusarium, Verticillium) et le rendement (+15 a 30 %). Le surcout du greffage (0,80 a 1,50 MAD/plant) est largement compense par les gains de rendement et la reduction des traitements nematicides."
        },
        {
            question: "La solarisation est-elle vraiment efficace contre les nematodes au Maroc ?",
            reponse: "Oui, la solarisation est tres efficace au Maroc grace au fort ensoleillement estival. En ete (juillet-aout), les temperatures du sol sous plastique atteignent 45-55 degres C a 20 cm de profondeur et 38-45 degres C a 30 cm, largement suffisant pour tuer les nematodes. L'efficacite est de 80 a 95 % dans les 30 premiers centimetres. Cependant, elle est INEFFICACE en hiver ou en automne (temperatures trop basses). Pour une efficacite maximale : irriguer le sol a saturation avant de poser le plastique, utiliser un film transparent (pas noir) de 25-40 microns, et laisser en place 6 a 8 semaines minimum. La solarisation a l'avantage supplementaire de tuer les champignons du sol, les graines d'adventices et de nombreux insectes."
        },
        {
            question: "Les Tagetes (oeillets d'Inde) sont-ils vraiment efficaces comme plante-piege ?",
            reponse: "Oui, les Tagetes sont reconnus scientifiquement comme l'une des meilleures plantes antagonistes des nematodes a galles. Leurs racines produisent des polythienyles (alpha-terthienyle) qui sont toxiques pour les larves J2 de Meloidogyne. Les J2 penetrent dans les racines de Tagetes mais ne peuvent pas completer leur cycle : ils sont tues par les substances toxiques. Apres 2-3 mois de culture de Tagetes, les populations de nematodes sont reduites de 60 a 90 %. Les especes les plus efficaces sont Tagetes erecta (grand oeillet d'Inde) et Tagetes patula (oeillet d'Inde nain). Il est important de les cultiver pendant au moins 60 jours pour obtenir un bon effet, et de les broyer et les incorporer au sol en fin de culture pour un effet biofumigant supplementaire."
        }
    ],

    ressources: [
        "INRA Maroc - Guide de lutte integree contre les nematodes a galles en cultures maraicheres",
        "ONSSA - Liste des nematicides homologues au Maroc (mise a jour annuelle)",
        "Perry R.N. & Moens M. (2013) - Plant Nematology, 2eme edition. CABI. Reference mondiale sur la nematologie vegetale",
        "Sikora R.A., Coyne D., Hallmann J. & Timper P. (2018) - Plant Parasitic Nematodes in Subtropical and Tropical Agriculture. CABI. 3eme edition",
        "Abad P., Gouzy J. et al. (2008) - Genome sequence of the metazoan plant-parasitic nematode Meloidogyne incognita. Nature Biotechnology 26:909-915",
        "Verdejo-Lucas S. & Talavera M. (2019) - Root-knot nematodes on tomato. Chapter in: Catala-Forner (eds) Tomato Crop Management. IntechOpen",
        "IAV Hassan II - Cours de nematologie appliquee : nematodes phytoparasites des cultures maraicheres au Maroc",
        "FAO - Guide pratique de lutte contre les nematodes a galles en culture protegee de tomate",
        "EPPO - Normes diagnostiques pour Meloidogyne spp. : identification morphologique et moleculaire",
        "Collange B. et al. (2011) - Root-knot nematode (Meloidogyne) management in vegetable crop production: the challenge of an agronomic system analysis. Crop Protection 30:1251-1262"
    ]
};
