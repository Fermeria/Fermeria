const MALADIE_ANTHRACNOSE = {
    id: "anthracnose",
    nom: "Anthracnose de la tomate",
    nomScientifique: "Colletotrichum coccodes (Wallr.) S.J. Hughes / Colletotrichum dematium / Colletotrichum gloeosporioides",
    type: "fongique",
    emoji: "\uD83D\uDD34",
    resumeCourt: "L'anthracnose est une maladie fongique majeure de la tomate causee principalement par des champignons du genre Colletotrichum. Elle se manifeste surtout par des lesions circulaires deprimees sur les fruits murs ou en cours de maturation, avec des anneaux concentriques de fructifications orangees a noires. Tres repandue dans les zones de production du Maroc (Souss-Massa, Gharb, Doukkala, Saiss), elle provoque des pertes considerables en rendement et en qualite, particulierement en conditions chaudes et humides.",
    cultures: ["Tomate", "Poivron", "Piment", "Aubergine", "Fraisier", "Haricot", "Cucurbitacees", "Pomme de terre"],

    presentation: {
        description: "L'anthracnose de la tomate est une maladie fongique causee par plusieurs especes du genre Colletotrichum, principalement Colletotrichum coccodes (la plus frequente sur tomate), Colletotrichum dematium, Colletotrichum gloeosporioides et Colletotrichum acutatum. Ces champignons appartiennent au phylum des Ascomycota, classe des Sordariomycetes, ordre des Glomerellales, famille des Glomerellaceae.\n\nL'anthracnose est avant tout une maladie des FRUITS. Contrairement a beaucoup d'autres maladies fongiques de la tomate qui affectent principalement le feuillage, l'anthracnose cible preferentiellement les fruits murs ou en debut de muraison, causant des pourritures deprimees qui les rendent invendables. Le champignon peut egalement attaquer les feuilles, les tiges et les racines (notamment C. coccodes qui provoque la pourriture noire des racines), mais c'est l'atteinte des fruits qui cause les degats economiques les plus importants.\n\nLe nom 'anthracnose' vient du grec 'anthrax' (charbon), en reference a l'aspect noiratre des lesions avancees. La maladie est presente dans toutes les zones de production de tomate du monde, des regions tropicales aux regions temperees. Au Maroc, elle est particulierement problematique dans les cultures de plein champ du Gharb, du Saiss et de l'Oriental, ainsi que dans les serres du Souss-Massa en fin de cycle quand les temperatures sont elevees et les fruits abondants.",

        importance: "L'anthracnose est consideree comme la maladie des fruits de tomate la plus importante au niveau mondial. Au Maroc, elle constitue l'une des principales causes de pertes post-recolte sur la tomate, affectant aussi bien les marches locaux que les exportations vers l'Europe. Les pertes peuvent atteindre 20 a 40 % de la production en l'absence de traitement dans les conditions favorables (chaleur, humidite, fruits murs). Elle est particulierement redoutable car les infections peuvent rester latentes sur les fruits verts et ne se manifester qu'a la maturation, rendant le tri a la recolte difficile. Les regions du Gharb et du Loukkos, ou les precipitations estivales sont plus frequentes, sont particulierement exposees.",

        historique: "Le genre Colletotrichum a ete decrit pour la premiere fois par Corda en 1831. L'espece C. coccodes a ete initialement decrite par Wallroth en 1833 sous le nom de Chaetomium coccodes, puis reclassee par Hughes en 1958 dans le genre Colletotrichum. L'anthracnose de la tomate est reconnue comme une maladie importante depuis les annees 1930-1940 aux Etats-Unis, ou elle causait des pertes considerables dans les cultures destinees a la transformation industrielle. Au Maroc, la maladie a pris de l'importance avec l'intensification de la culture de tomate a partir des annees 1980, en particulier dans les zones de plein champ irriguees. Les etudes recentes de l'INRA Maroc ont identifie C. coccodes et C. gloeosporioides comme les especes dominantes dans les vergers et les cultures maraicheres marocaines.",

        impact_economique: "L'impact economique de l'anthracnose sur la tomate au Maroc est significatif et souvent sous-estime car une partie des pertes survient apres la recolte. Les pertes directes sur les fruits (pourritures, fruits non commercialisables) representent 10 000 a 30 000 MAD par hectare dans les cas moderes a severes. Les pertes post-recolte pendant le transport et le stockage peuvent atteindre 10 a 25 % des lots recoltes en periode chaude et humide, ce qui est particulierement penalisant pour les exportateurs. Le cout des traitements fongicides preventifs represente 3 000 a 8 000 MAD par hectare et par campagne. A cela s'ajoutent les couts de tri supplementaire a la recolte et en station de conditionnement. Pour la tomate industrielle (concentre, sauce), l'anthracnose est le principal facteur de declassement des lots, avec des penalites de 15 a 30 % sur le prix d'achat par les conserveries."
    },

    origine: {
        agent: "Colletotrichum coccodes (Wallr.) S.J. Hughes est l'espece la plus frequemment associee a l'anthracnose de la tomate au Maroc et dans le monde. C'est un champignon filamenteux de la division des Ascomycota, classe des Sordariomycetes, ordre des Glomerellales. Il produit des acervules (structures de fructification asexuee) sous-epidermiques qui percent la surface des fruits pour liberer des masses de conidies. Les conidies sont unicellulaires, hyalines (transparentes), cylindriques a fusiformes, mesurant 16-24 x 2,5-4,5 micrometres. Les acervules portent des soies (setae) rigides et foncees, visibles au microscope, qui sont un critere d'identification important. Le champignon produit egalement des microsclérotes (petits amas de cellules a paroi epaisse et melanisee) dans les tissus infectes et dans le sol, qui assurent sa survie a long terme. En conditions favorables, les acervules produisent une masse mucilagineuse de spores de couleur rose-saumon a orange, visible a l'oeil nu sur les lesions des fruits.",

        provenance: "Les especes de Colletotrichum responsables de l'anthracnose sont cosmopolites et presentes dans toutes les zones de production de tomate du monde. Au Maroc, C. coccodes est endemique dans les sols agricoles des principales regions maraicheres. L'inoculum primaire provient principalement du sol contamine (microsclérotes), des residus de culture infectes, des semences contaminees et des fruits repousses. Les microsclérotes de C. coccodes peuvent survivre dans le sol pendant 3 a 8 ans en l'absence de plantes hotes, ce qui rend la rotation culturale seule insuffisante pour eliminer la maladie. Les etudes pedologiques menees dans le Souss-Massa et le Gharb ont confirme la presence generalisee de microsclérotes de C. coccodes dans les sols ayant porte des solanacees.",

        cycle: "1. SURVIE DANS LE SOL : Le champignon survit entre les cultures principalement sous forme de microsclérotes dans le sol et dans les residus de culture. Les microsclérotes sont des structures de resistance extremement durables, melanisees, capables de survivre 3 a 8 ans dans le sol. Ils resistent a la secheresse, aux temperatures extremes et a la plupart des desinfectants superficiels. C'est la source d'inoculum primaire la plus importante.\n\n2. GERMINATION ET INFECTION : Lorsque les conditions deviennent favorables (temperature 20-30 degres C, humidite elevee, presence d'eau libre), les microsclérotes germent et produisent des conidies. Les conidies sont dispersees par les eclaboussures d'eau de pluie ou d'irrigation vers les fruits et les parties aeriennes des plants. Sur les fruits, les conidies germent en presence d'eau libre et forment un appressorium (structure de penetration melanisee) qui adhere fermement a la surface du fruit.\n\n3. PENETRATION ET INFECTION LATENTE : L'appressorium exerce une pression mecanique et secrete des enzymes (cutinases, cellulases) qui permettent la penetration de la cuticule et de l'epiderme du fruit. Sur les fruits VERTS, le champignon penetre mais reste en etat de quiescence (dormance) : le mycelium forme une vesicule d'infection sous la cuticule mais ne se developpe pas davantage. Cette phase d'infection latente peut durer plusieurs semaines, tant que le fruit reste vert et immature. C'est cette phase latente qui rend la maladie si insidieuse : les fruits paraissent sains a la recolte mais developpent des symptomes pendant le transport et le stockage.\n\n4. ACTIVATION ET DEVELOPPEMENT DES SYMPTOMES : Lorsque le fruit commence a murir (changement de couleur, ramollissement des tissus, modification du pH et de la teneur en sucres), l'infection latente est reactivee. Le mycelium reprend sa croissance, penetre profondement dans les tissus du fruit et provoque la destruction cellulaire. Les symptomes visibles apparaissent alors rapidement (2 a 5 jours apres l'activation). Le ramollissement des tissus murs, la baisse de l'acidite et l'augmentation des sucres constituent les signaux de reactivation du champignon.\n\n5. SPORULATION ET DISSEMINATION SECONDAIRE : Sur les lesions des fruits, le champignon forme des acervules sous-epidermiques qui percent la surface et liberent des masses de conidies enrobees de mucilage rose-orange. Ces conidies sont dispersees par la pluie, les eclaboussures d'irrigation, les insectes et les manipulations humaines vers les fruits voisins. Chaque lesion peut produire des millions de conidies, assurant une contamination massive des fruits adjacents.\n\n6. FORMATION DE MICROSCLÉROTES : Dans les tissus morts (fruits pourris, debris de culture), le champignon produit abondamment des microsclérotes qui tombent au sol avec les debris et assurent la survie inter-saisonniere. Le cycle se referme.",

        propagation: [
            "Par les eclaboussures d'eau de pluie ou d'irrigation : c'est le mode de propagation PRINCIPAL. Les gouttes de pluie ou d'irrigation par aspersion projettent les conidies du sol vers les fruits et dispersent les spores produites sur les lesions vers les fruits sains voisins. Les irrigations par aspersion sont le facteur aggravant le plus important.",
            "Par le sol contamine : les microsclérotes presents dans le sol constituent le reservoir permanent d'inoculum. Le contact direct des fruits avec le sol (fruits tombants, fruits des grappes basses) est une voie d'infection importante.",
            "Par les semences contaminees : Colletotrichum spp. peuvent etre transmis par les graines de tomate, en surface ou en infection interne. Les taux de contamination sont generalement faibles (1-5 %) mais suffisants pour introduire la maladie dans de nouvelles parcelles.",
            "Par les residus de culture infectes : les debris de fruits pourris, les tiges et les feuilles infectees laisses au sol apres la recolte sont des sources majeures de microsclérotes et de conidies pour la saison suivante.",
            "Par les insectes : les mouches des fruits (Drosophila, Ceratitis), les punaises et d'autres insectes sont attires par les fruits murs et peuvent transporter des conidies sur leur corps d'un fruit a l'autre.",
            "Par le materiel de recolte contamine : les caisses, les couteaux, les mains des ouvriers peuvent transporter des conidies et contaminer les fruits sains lors de la recolte. La recolte par temps humide est particulierement a risque.",
            "Par les plants de pepiniere infectes : les plants portant des infections latentes sur les racines (C. coccodes) ou les tiges peuvent introduire la maladie dans les parcelles.",
            "Par le vent : contrairement aux eclaboussures d'eau, le vent joue un role secondaire dans la dissemination de l'anthracnose car les conidies sont enrobees de mucilage qui les retient sur les lesions. Cependant, les conidies sechees peuvent etre transportees sur de courtes distances."
        ]
    },

    facteurs: {
        climatiques: [
            "Temperatures chaudes : optimum entre 22 et 28 degres C pour la germination des conidies et le developpement de la maladie. L'infection est possible entre 10 et 35 degres C mais tres ralentie en dessous de 15 degres C. Les temperatures estivales du Maroc sont ideales pour le developpement de l'anthracnose.",
            "Humidite elevee et pluies frequentes : la presence d'eau libre sur les fruits est indispensable pour la germination des conidies et l'infection. Les periodes de pluies prolongees, les irrigations par aspersion et les rosees abondantes sont les facteurs declenchants les plus importants.",
            "Alternance periodes humides / periodes chaudes et seches : les periodes humides permettent l'infection, tandis que les periodes seches et chaudes accelerent la maturation des fruits et donc la reactivation des infections latentes. Cette alternance est typique du climat marocain en saison de production.",
            "Rosee matinale prolongee : meme en l'absence de pluie, la condensation matinale sur les fruits peut fournir l'humidite suffisante pour la germination des conidies. Au Maroc, les rosees sont particulierement abondantes dans les zones cotieres et en plaine.",
            "Precipitations accompagnees de vent : la combinaison pluie + vent maximise la dispersion des conidies par eclaboussures et les microblessures sur les fruits qui facilitent la penetration du champignon.",
            "Periodes prolongees de temperatures superieures a 25 degres C : accelerent la maturation des fruits et donc l'activation des infections latentes. Les vagues de chaleur au Maroc (chergui) peuvent provoquer une acceleration brutale de l'apparition des symptomes sur les fruits en cours de muraison."
        ],
        sol: [
            "Sols lourds et mal draines : l'exces d'humidite au sol favorise la germination des microsclérotes et maintient une hygrometrie elevee au niveau des fruits des grappes basses.",
            "Sols riches en microsclérotes : les parcelles ayant porte des solanacees de maniere repetee (tomate, pomme de terre, poivron) accumulent des microsclérotes de C. coccodes qui peuvent persister 3 a 8 ans.",
            "Sols pauvres en matiere organique : une faible activite biologique du sol reduit la competition microbienne naturelle qui limite normalement la survie et la germination des microsclérotes.",
            "Sols compactes avec mauvaise structure : favorisent la stagnation de l'eau en surface et les eclaboussures de terre contaminee vers les fruits lors des pluies ou irrigations.",
            "Sols acides (pH < 5.5) : les conditions acides favorisent la survie des microsclérotes et la sporulation du champignon."
        ],
        pratiques: [
            "Irrigation par aspersion : mouille les fruits et le feuillage, cree les conditions d'humidite necessaires a l'infection et disperse les conidies par eclaboussures. C'est le facteur cultural aggravant numero 1 de l'anthracnose.",
            "Absence de paillage : le contact direct des fruits avec le sol contamine est une voie d'infection majeure. Les fruits des grappes basses touchant le sol nu sont les premiers atteints.",
            "Recolte tardive : laisser les fruits murs ou surmurs sur les plants augmente considerablement le risque d'anthracnose. Plus un fruit est mur, plus il est susceptible de developper des symptomes.",
            "Absence de rotation des cultures : la culture repetee de solanacees accumule les microsclérotes dans le sol. Une rotation de 3 a 4 ans minimum est necessaire.",
            "Non-destruction des residus de culture : les fruits pourris et les debris laisses au sol constituent le reservoir principal d'inoculum pour la saison suivante.",
            "Densites de plantation excessives : reduisent la circulation d'air, maintiennent une humidite elevee et ralentissent le sechage des fruits apres la pluie ou la rosee.",
            "Absence de palissage ou tuteurage : les plants non palisses laissent les fruits en contact avec le sol, augmentant le risque d'infection par les microsclérotes.",
            "Recolte par temps humide sans precautions : les blessures de recolte sur les fruits mouilles sont des portes d'entree ideales pour le champignon. Les caisses de recolte non desinfectees propagent la contamination.",
            "Fertilisation azotee excessive : produit un feuillage dense qui maintient l'humidite et retarde le sechage des fruits apres la pluie."
        ],
        erreurs: [
            "Ignorer les premieres lesions sur les fruits en pensant qu'il s'agit de coups de soleil ou de blessures mecaniques. Les lesions d'anthracnose sont caracteristiques : deprimees, circulaires, avec des anneaux concentriques et des fructifications orangees.",
            "Recolter les fruits sans eliminer ceux presentant les premiers symptomes. Un seul fruit infecte dans une caisse peut contaminer tous les fruits sains pendant le transport.",
            "Irriguer par aspersion en fin de journee, laissant les fruits mouilles pendant la nuit. L'humidite nocturne prolongee sur les fruits est le facteur le plus favorable a l'infection.",
            "Ne pas pailler le sol, laissant les fruits des grappes basses en contact direct avec le sol contamine par les microsclérotes.",
            "Appliquer les fongicides uniquement sur le feuillage en oubliant de traiter les fruits. L'anthracnose est avant tout une maladie des fruits : la couverture fongicide des fruits est essentielle.",
            "Ne pas trier soigneusement les fruits a la recolte. Les infections latentes ne sont pas visibles sur les fruits verts, mais un tri rigoureux des fruits presentant le moindre symptome est indispensable.",
            "Stocker les fruits recoltes a temperature ambiante elevee (> 25 degres C). Le refroidissement rapide apres recolte (12-15 degres C) ralentit considerablement le developpement des infections latentes.",
            "Cultiver des varietes a fruits tres fins (peau fine) sans programme de protection renforce. Les varietes a peau fine sont beaucoup plus sensibles a l'anthracnose que les varietes a peau epaisse."
        ]
    },

    symptomes: {
        feuilles: "Les feuilles sont moins frequemment et moins severement atteintes que les fruits, mais l'anthracnose foliaire existe et peut contribuer a l'affaiblissement des plants.\n\nSTADE INITIAL : Apparition de petites taches circulaires a irregulieres, de 3 a 8 mm de diametre, de couleur brun clair a brun fonce, sur les folioles les plus basses et les plus agees. Les taches sont souvent entourees d'un leger halo jaune chlorotique.\n\nSTADE INTERMEDIAIRE : Les taches s'agrandissent et peuvent atteindre 10 a 20 mm. Le centre des taches devient plus clair (gris-brun) et peut se dessecher et se craqueler. Des petits points noirs (acervules) peuvent etre visibles au centre des taches a la loupe. En conditions humides, des masses de spores rose-orange peuvent apparaitre sur les acervules.\n\nSTADE AVANCE : En cas de forte infection, les taches confluent et les folioles se dessechent completement. La defoliation peut etre importante sur les etages inferieurs. Cependant, la defoliation par anthracnose seule est rarement aussi severe que celle causee par l'alternariose ou le mildiou.\n\nNOTE : Sur les feuilles, l'anthracnose est souvent confondue avec l'alternariose. La difference cle est que les taches d'anthracnose n'ont PAS les anneaux concentriques reguliers et nets en 'cible de tir' typiques de l'alternariose. Les taches d'anthracnose ont un centre plus clair avec des acervules ponctuelles, tandis que les taches d'alternariose ont des anneaux concentriques brun fonce reguliers.",

        tiges: "Les tiges peuvent etre atteintes par Colletotrichum spp., en particulier dans les conditions de forte humidite.\n\nSTADE INITIAL : Apparition de petites lesions allongees, legerement deprimees, de couleur brun fonce a noire, generalement localisees pres des noeuds ou a la base de la tige au niveau du collet.\n\nSTADE INTERMEDIAIRE : Les lesions s'allongent et s'approfondissent, formant des chancres legerement concaves. En conditions humides, des masses de conidies rose-saumon peuvent etre visibles dans les chancres. Les lesions peuvent ceinturer partiellement la tige, reduisant le flux de seve.\n\nSTADE AVANCE : Chez les jeunes plants, les chancres au collet peuvent provoquer un etranglement et la mort du plant (fonte des semis par Colletotrichum). Chez les plants adultes, les chancres caulinaires affaiblissent la tige et peuvent provoquer un fletrissement partiel ou la cassure de la tige.\n\nNOTE IMPORTANTE : Colletotrichum coccodes cause egalement une pourriture noire des racines ('black dot root rot') caracterisee par le noircissement de la base de la tige et des racines principales, avec la presence de nombreux microsclérotes noirs visibles comme de petits points noirs a la surface des tissus atteints. Cette atteinte racinaire est souvent associee a l'anthracnose des fruits et contribue a l'affaiblissement general du plant.",

        fruits: "Les fruits sont la cible PRINCIPALE de l'anthracnose. L'atteinte des fruits est le symptome le plus important et le plus dommageable economiquement.\n\nINFECTION LATENTE (fruits verts) : Le champignon infecte les fruits verts mais reste en dormance. Les fruits paraissent parfaitement sains. Aucun symptome n'est visible a l'oeil nu. Cette phase latente peut durer plusieurs semaines. Les fruits infectes de maniere latente ne peuvent etre detectes que par des techniques de laboratoire (coloration, PCR). C'est cette phase qui rend la maladie si insidieuse et si difficile a gerer.\n\nSTADE INITIAL (debut de muraison) : Lorsque le fruit commence a changer de couleur (du vert au rouge), les premieres lesions apparaissent. Ce sont de petites taches circulaires, legerement deprimees (enfoncees), de 5 a 10 mm de diametre, de couleur brun clair a brun fonce. Les taches sont souvent centrees sur une blessure, une microfissure ou la zone d'attache du pedoncule. La surface de la lesion est lisse et legerement concave.\n\nSTADE INTERMEDIAIRE : Les taches s'agrandissent rapidement et atteignent 15 a 40 mm de diametre. Elles deviennent nettement deprimees (concaves) et presentent des ANNEAUX CONCENTRIQUES de fructifications : les acervules, qui apparaissent comme des cercles de petits points noirs ou brun fonce disposes en anneaux. En conditions humides, les acervules liberent des masses de conidies enrobees de MUCILAGE ROSE-SAUMON a ORANGE, qui est le signe diagnostique le plus caracteristique de l'anthracnose. Plusieurs lesions peuvent etre presentes sur le meme fruit.\n\nSTADE AVANCE : Les lesions confluent et couvrent une grande partie du fruit. La chair sous les lesions se ramollit, brunit et se decompose. Des pourritures secondaires (bacteriennes, fongiques) s'installent, accelerant la decomposition. Le fruit entier finit par se ramollir completement et tomber au sol. Les fruits au sol constituent un reservoir massif d'inoculum.\n\nCAS PARTICULIER - POURRITURE DE STOCKAGE : Les fruits recoltes avec des infections latentes (pas de symptomes visibles) developpent des pourritures d'anthracnose pendant le transport et le stockage, surtout si la temperature depasse 20 degres C. Un seul fruit infecte dans une caisse peut contaminer les fruits adjacents par contact. Cette pourriture post-recolte est le probleme le plus critique pour les exportateurs marocains de tomates.",

        racines: "Le systeme racinaire est directement attaque par Colletotrichum coccodes, qui provoque une maladie specifique appelee 'pourriture noire des racines' ou 'black dot root rot'.\n\nSYMPTOMES RACINAIRES : Les racines principales et secondaires presentent un brunissement progressif, devenant brun fonce a noires. La cortex racinaire (ecorce) se detache facilement, revelant le cylindre central brunâtre. L'element diagnostique CLE est la presence de tres nombreux MICROSCLÉROTES noirs, visibles a l'oeil nu comme de fins points noirs (0,1-0,5 mm) a la surface des racines et du collet. Ces microsclérotes sont suffisamment caracteristiques pour permettre un diagnostic presomptif sur le terrain.\n\nIMPACT : La pourriture noire des racines reduit l'absorption d'eau et de nutriments, provoquant un fletrissement progressif du plant, un retard de croissance, une maturation precoce et incomplete des fruits, et une senescence acceleree du feuillage. Les plants atteints sont plus sensibles au stress hydrique et aux maladies foliaires.\n\nDIFFERENCIATION : La pourriture noire des racines par C. coccodes est distincte de la fusariose (brunissement vasculaire interne sans microsclérotes externes) et de la verticilliose (brunissement vasculaire asymetrique). Les microsclérotes noirs en surface sont le critere distinctif cle.",

        stade: "L'anthracnose peut survenir a tous les stades de developpement de la tomate, mais avec une incidence tres variable :\n\n- SEMIS ET PEPINIERE : Colletotrichum coccodes peut provoquer une fonte des semis avec des lesions au collet et un fletrissement rapide des plantules. Le traitement des semences est la mesure preventive cle.\n\n- STADE VEGETATIF : Attaque faible a moderee sur les feuilles basses. Debut de la colonisation des racines par C. coccodes (infection latente racinaire). Peu de symptomes visibles.\n\n- FLORAISON ET NOUAISON : Infection latente des jeunes fruits verts. Le champignon penetre les fruits mais reste en dormance. Phase critique pour les traitements preventifs.\n\n- MURAISON ET RECOLTE : Periode de sensibilite MAXIMALE. L'activation des infections latentes lors de la maturation des fruits provoque l'apparition brutale des lesions. Plus les fruits sont murs, plus les symptomes apparaissent rapidement. Les recoltes echelonnees sur plusieurs semaines sont particulierement a risque.\n\n- POST-RECOLTE : Le developpement des infections latentes continue apres la recolte, surtout si les fruits sont stockes a temperature ambiante (> 20 degres C). Le refroidissement rapide a 12-15 degres C est essentiel.\n\n- PERIODE LA PLUS CRITIQUE AU MAROC : Juin a septembre pour les cultures de plein champ (chaleur + pluies orageuses + fruits murs). Avril a juillet pour les cultures sous serre du Souss-Massa (fin de cycle, temperatures elevees, charge en fruits importante).",

        differenciation: "L'anthracnose des fruits de tomate peut etre confondue avec plusieurs autres affections :\n\n1. ALTERNARIOSE DES FRUITS : Les lesions d'alternariose sont egalement deprimees et presentent des anneaux concentriques, mais elles sont localisees preferentiellement autour du CALICE (zone d'attache du pedoncule) et leur surface est SECHE et LIEGEREUSE. L'anthracnose produit des lesions plus lisses, plus humides, avec des masses de conidies ROSE-ORANGE (mucilage) absentes dans l'alternariose. L'alternariose donne un velours brun-olivatre, l'anthracnose donne du mucilage rose.\n\n2. POURRITURE APICALE (BER - Blossom End Rot) : Lesion brune a noire a la base du fruit (extremite opposee au pedoncule). C'est un desordre PHYSIOLOGIQUE (carence en calcium), pas une maladie. La lesion est seche, ferme, sans fructifications fongiques, et localisee exclusivement a l'apex du fruit. L'anthracnose peut apparaitre n'importe ou sur le fruit et produit des fructifications (acervules, mucilage).\n\n3. COUP DE SOLEIL (Sunscald) : Plage blanchatre a jaunatre sur la face exposee au soleil, sans depression nette et sans fructifications fongiques. Peut evoluer en pourriture secondaire mais l'aspect initial est tres different de l'anthracnose.\n\n4. BOTRYTIS SUR FRUITS : Pourriture molle recouverte d'un feutrage GRIS cendre (pas de mucilage rose-orange). Le botrytis attaque souvent par les blessures et les cicatrices florales. La couleur grise est le critere distinctif.\n\n5. POURRITURE BACTERIENNE (Erwinia, Pectobacterium) : Pourriture molle, aqueuse, malodorante, a progression rapide. Pas de lesions deprimees nettes ni de fructifications fongiques. L'odeur de pourriture est un critere distinctif.\n\nTEST DE TERRAIN : Prelever un fruit suspect avec des lesions fraiches. Le placer dans un sac plastique ferme avec un papier humide a 25 degres C pendant 48-72 heures. Si c'est de l'anthracnose, des masses de conidies ROSE-SAUMON a ORANGE apparaitront dans les lesions. Ce test permet une confirmation presomptive fiable."
    },

    lutte: {
        prevention: [
            "Choisir des varietes tolerantes a l'anthracnose : les varietes a peau epaisse et a chair ferme sont naturellement moins sensibles. Certains hybrides modernes portent des genes de tolerance. Consulter les catalogues de semences pour les niveaux de tolerance indiques.",
            "Traiter les semences avant le semis : trempage dans une solution de thirame a 3 g/L ou de carbendazime a 2 g/L pendant 30 minutes. Utiliser de preference des semences certifiees et traitees industriellement.",
            "Privilegier absolument l'irrigation au GOUTTE-A-GOUTTE : c'est la mesure preventive la plus efficace. L'elimination de l'aspersion reduit de 60 a 80 % l'incidence de l'anthracnose en supprimant le mouillage des fruits et la dispersion des conidies par eclaboussures.",
            "Pailler le sol avec un film plastique noir ou argente, ou un paillage organique epais (paille, BRF) : le paillage cree une barriere entre le sol (source de microsclérotes) et les fruits, et reduit les eclaboussures de terre contaminee de 70 a 85 %.",
            "Tuteurer et palisser les plants pour eloigner les fruits du sol : maintenir les grappes de fruits a au moins 15-20 cm du sol. Le palissage vertical sur fil est la methode la plus efficace.",
            "Pratiquer une rotation des cultures d'au moins 3 ans (idealement 4 ans) en excluant toutes les solanacees. Inclure des cereales ou des legumineuses dans la rotation pour reduire l'inoculum dans le sol.",
            "Detruire les residus de culture immediatement apres la derniere recolte : arracher les plants, collecter tous les fruits tombes au sol, et bruler ou enfouir profondement (> 30 cm) les debris. Ne jamais laisser des fruits pourris au sol.",
            "Recolter les fruits avant leur pleine maturite (stade rose a rouge tournant) pour limiter le developpement des infections latentes. Recolter frequemment (tous les 2-3 jours) pour eviter les fruits surmurs.",
            "Recolter par temps sec, de preference le matin apres evaporation de la rosee. Eviter la recolte par temps de pluie ou lorsque les fruits sont mouilles.",
            "Desinfecter le materiel de recolte (caisses, couteaux, secateurs) avec une solution d'eau de Javel a 2 % ou d'ammonium quaternaire entre chaque passage.",
            "Refroidir les fruits recoltes le plus rapidement possible a 12-15 degres C pour ralentir le developpement des infections latentes. La chaine du froid est essentielle pour la conservation post-recolte.",
            "Effeuiller les etages inferieurs pour ameliorer la ventilation et reduire l'humidite autour des fruits des grappes basses.",
            "Eliminer les fruits blesses, fissures ou presentant le moindre symptome lors de la recolte. Un tri rigoureux au champ est la premiere ligne de defense contre la pourriture post-recolte."
        ],
        biologique: [
            "Application preventive de Bacillus subtilis (Serenade) en pulverisation sur les fruits et le feuillage, a raison de 2 a 4 L/ha tous les 7 a 10 jours. Le Bacillus produit des lipopeptides antifongiques et colonise les surfaces, competitionnant le pathogene.",
            "Utilisation de Trichoderma harzianum en traitement du sol et en pulverisation foliaire. Le Trichoderma parasite les microsclérotes dans le sol et produit des enzymes qui degradent les parois cellulaires du champignon.",
            "Application de chitosan (extrait de carapaces de crustaces) en pulverisation foliaire a 2-5 g/L. Le chitosan stimule les defenses naturelles de la plante et forme un film protecteur sur les fruits qui inhibe la germination des conidies.",
            "Utilisation de Bacillus amyloliquefaciens en pulverisation preventive. Produit des metabolites antifongiques et induit la resistance systemique de la plante.",
            "Application de soufre mouillable a faible dose (2-3 g/L) en traitement preventif. Action fongistatique sur Colletotrichum.",
            "Stimulateurs de defenses naturelles (SDN) : extraits d'algues (laminarine), phosphonates de potassium, acide salicylique. Ces produits activent les mecanismes de defense de la plante contre les infections fongiques.",
            "Trempage post-recolte des fruits dans une solution d'eau chaude (48-52 degres C pendant 2-3 minutes) suivi d'un refroidissement rapide. Ce traitement thermique reduit de 50 a 70 % les pourritures de stockage sans affecter la qualite des fruits."
        ],
        chimique: [
            "Chlorothalonil (500 g/L SC) en traitement preventif de contact, tres efficace contre Colletotrichum. Dose : 2 a 2,5 L/ha. Application tous les 10 a 14 jours des la nouaison. Bien couvrir les fruits et les grappes. DAR : 3 jours.",
            "Mancozebe (80 % WP) en traitement preventif de contact. Dose : 2 a 2,5 kg/ha. Bonne efficacite en programme d'alternance. DAR : 7 jours. Pas de risque de resistance (multi-sites).",
            "Azoxystrobine (250 g/L SC) en traitement preventif et curatif. Strobilurine a action systemique et translaminiaire. Dose : 0,8 a 1 L/ha. Excellente efficacite contre l'anthracnose. Limiter a 2-3 applications par saison pour prevenir les resistances. DAR : 3 jours.",
            "Difenoconazole (250 g/L EC) en traitement preventif et curatif. Triazole systemique. Dose : 0,3 a 0,5 L/ha. Bonne efficacite curative sur infections recentes. DAR : 7 jours. Alterner avec d'autres familles chimiques.",
            "Boscalid + Pyraclostrobine (Signum WG) en traitement preventif et curatif. Double mode d'action (SDHI + QoI). Dose : 1 a 1,5 kg/ha. Tres bonne efficacite et large spectre. Maximum 2 applications par saison. DAR : 3 jours.",
            "Propinebe (70 % WP) en traitement preventif de contact. Dose : 2 a 3 kg/ha. Alternative au mancozebe avec un bon profil de securite. DAR : 7 jours.",
            "Cuivre (hydroxyde de cuivre, bouillie bordelaise) en traitement preventif. Dose : 1,5 a 3 kg/ha de cuivre metal. Efficacite moderee mais complementaire dans les programmes integres. Utilisable en agriculture biologique. DAR : variable selon formulation.",
            "Programmes d'alternance obligatoires : alterner les familles chimiques (strobilurines, triazoles, dithiocarbamates, chloronitriles) pour prevenir l'apparition de resistances. Commencer les traitements des la nouaison et poursuivre jusqu'a la derniere recolte."
        ],
        mecanique: [
            "Paillage du sol avec film plastique noir ou argente : barriere physique empechant les eclaboussures de sol contamine vers les fruits. Le film argente a l'avantage supplementaire de repousser les pucerons et de reflechir la lumiere vers les fruits.",
            "Palissage et tuteurage soigneux des plants : maintenir les grappes de fruits eloignees du sol (minimum 15-20 cm). Le palissage vertical sur fil avec pincement regulier est la methode la plus efficace.",
            "Effeuillage sanitaire des feuilles basses : supprimer les feuilles des 30-40 premiers centimetres pour ameliorer l'aeration et reduire l'humidite autour des grappes basses.",
            "Ramassage et destruction de tous les fruits tombes au sol : les fruits pourris sont des reservoirs massifs d'inoculum. Passage au moins 2 fois par semaine pour collecter et detruire les fruits au sol.",
            "Solarisation du sol entre deux cycles de culture : couvrir le sol humide avec un film plastique transparent pendant 4 a 6 semaines en plein ete (juillet-aout au Maroc). Les temperatures atteintes (> 50 degres C en surface) reduisent significativement les microsclérotes.",
            "Installation de goutteurs sureleves ou de systemes d'irrigation enterres pour eviter toute eclaboussure d'eau sur les fruits.",
            "Tri rigoureux et elimination des fruits symptomatiques au champ et en station de conditionnement. Ne jamais melanger des fruits sains avec des fruits suspects."
        ]
    },

    produits: [
        {
            nom: "Bravo 500 SC (Chlorothalonil)",
            type: "Fongicide de contact preventif multi-sites",
            matiere: "Chlorothalonil 500 g/L",
            action: "Action de contact multi-sites inhibant la germination des spores et la croissance mycelienne de Colletotrichum. Ne penetre pas dans les tissus mais forme un film protecteur sur la surface des fruits et des feuilles. Pas de risque de resistance grace au mode d'action multi-sites.",
            application: "2 a 2,5 L/ha en pulverisation foliaire. Commencer les applications des la nouaison (premiers fruits noues). Renouveler tous les 10 a 14 jours ou apres chaque pluie superieure a 20 mm. Bien couvrir les grappes de fruits en orientant les buses vers les fruits.",
            precautions: "DAR : 3 jours. Irritant pour les yeux et la peau. Toxique pour les organismes aquatiques. Porter EPI complets (masque, gants, combinaison). Ne pas appliquer par vent fort. Ne pas melanger avec des produits alcalins.",
            disponibleMaroc: true
        },
        {
            nom: "Amistar 250 SC (Azoxystrobine)",
            type: "Fongicide systemique preventif et curatif",
            matiere: "Azoxystrobine 250 g/L",
            action: "Strobilurine a action systemique et translaminiaire. Inhibe la respiration mitochondriale de Colletotrichum (complexe III, site Qo). Action preventive, curative et anti-sporulante. Reduit la production de conidies et la formation d'acervules meme apres infection.",
            application: "0,8 a 1 L/ha en pulverisation foliaire et sur les fruits. Appliquer preventivement des la nouaison ou des les premiers symptomes. Renouveler apres 14 jours. Limiter a 2-3 applications par saison pour prevenir les resistances.",
            precautions: "DAR : 3 jours. Risque de resistance croisee avec les autres strobilurines (pyraclostrobine, trifloxystrobine). Alternance obligatoire avec d'autres familles chimiques (triazoles, dithiocarbamates). Dangereux pour les organismes aquatiques.",
            disponibleMaroc: true
        },
        {
            nom: "Score 250 EC (Difenoconazole)",
            type: "Fongicide systemique preventif et curatif",
            matiere: "Difenoconazole 250 g/L",
            action: "Triazole systemique. Inhibe la biosynthese de l'ergosterol (demethylation C14), composant essentiel des membranes cellulaires du champignon. Action preventive et curative sur infections recentes. Bonne efficacite contre les infections latentes grâce a sa systemie.",
            application: "0,3 a 0,5 L/ha en pulverisation foliaire. Appliquer preventivement ou des l'apparition des premiers symptomes. Renouveler apres 10 a 14 jours si necessaire. Maximum 3 applications par saison.",
            precautions: "DAR : 7 jours. Alterner avec des fongicides d'autres familles pour prevenir les resistances. Respecter les doses : risque de phytotoxicite a dose elevee par temps chaud. Toxique pour les organismes aquatiques.",
            disponibleMaroc: true
        },
        {
            nom: "Dithane M-45 (Mancozebe)",
            type: "Fongicide de contact preventif multi-sites",
            matiere: "Mancozebe 80 %",
            action: "Dithiocarbamate a action multi-sites de contact. Inhibe plusieurs enzymes fongiques en se liant aux groupes sulfhydryles. Action preventive uniquement. Bonne efficacite contre la germination des conidies de Colletotrichum. Pas de risque de resistance.",
            application: "2 a 2,5 kg/ha en pulverisation foliaire. Commencer les traitements en preventif des la nouaison. Renouveler tous les 7 a 10 jours. Peut etre melange avec des fongicides systemiques pour elargir le spectre.",
            precautions: "DAR : 7 jours. Contient du manganese et du zinc (oligoelements). Peut laisser des residus blancs visibles sur les fruits. Toxique pour les organismes aquatiques. Porter EPI complets lors de l'application.",
            disponibleMaroc: true
        },
        {
            nom: "Signum WG (Boscalid + Pyraclostrobine)",
            type: "Fongicide combine preventif et curatif",
            matiere: "Boscalid 267 g/kg + Pyraclostrobine 67 g/kg",
            action: "Double mode d'action synergique : le boscalid inhibe la succinate deshydrogenase (SDHI, complexe II), la pyraclostrobine inhibe le cytochrome bc1 (QoI, complexe III). Excellente efficacite preventive et curative contre Colletotrichum. Action anti-sporulante marquee. Large spectre incluant anthracnose, alternariose et botrytis.",
            application: "1 a 1,5 kg/ha en pulverisation foliaire et sur les fruits. Appliquer preventivement ou des les premiers symptomes. Renouveler apres 12 a 14 jours. Maximum 2 applications par cycle cultural.",
            precautions: "DAR : 3 jours. Contient une strobilurine : alternance obligatoire avec d'autres familles. Ne pas depasser 2 applications par saison. Dangereux pour les abeilles pendant la floraison. Produit couteux a reserver aux periodes de forte pression.",
            disponibleMaroc: true
        },
        {
            nom: "Serenade ASO (Bacillus subtilis)",
            type: "Biofongicide preventif",
            matiere: "Bacillus subtilis souche QST 713",
            action: "Biofongicide a base de bacterie antagoniste. Produit des lipopeptides (iturine, surfactine, fengycine) qui desorganisent les membranes cellulaires de Colletotrichum. Competition pour les nutriments et l'espace sur la surface des fruits. Stimulation des defenses naturelles de la plante (ISR). Compatible avec l'agriculture biologique.",
            application: "2 a 4 L/ha en pulverisation preventive sur les fruits et le feuillage. Appliquer des la nouaison et renouveler tous les 7 a 10 jours. Compatible avec la plupart des fongicides chimiques. Peut etre utilise jusqu'a la recolte.",
            precautions: "DAR : 0 jour (utilisable jusqu'a la recolte). Efficacite reduite en conditions de tres forte pression. A utiliser en complement d'autres methodes dans un programme integre. Stocker a l'abri de la chaleur. Appliquer de preference le matin ou en fin de journee (sensibilite aux UV).",
            disponibleMaroc: true
        },
        {
            nom: "Cuivre (Bouillie bordelaise / Hydroxyde de cuivre)",
            type: "Fongicide de contact preventif mineral",
            matiere: "Cuivre metal (variable selon formulation : 20-50 %)",
            action: "Action de contact multi-sites. Les ions cuivre inhibent la germination des spores et la croissance mycelienne en perturbant les systemes enzymatiques du champignon. Efficacite moderee mais complementaire dans les programmes integres. Utilisable en agriculture biologique.",
            application: "1,5 a 3 kg/ha de cuivre metal (adapter selon la formulation). Appliquer en preventif. Renouveler tous les 7 a 10 jours ou apres chaque pluie. Ne pas depasser 6 kg/ha/an de cuivre metal pour limiter l'accumulation dans le sol.",
            precautions: "DAR : variable selon formulation (3 a 14 jours). Risque de phytotoxicite par temps chaud et humide (ne pas appliquer au-dessus de 35 degres C). Peut laisser des traces bleues sur les fruits. Toxique pour les organismes aquatiques. L'accumulation de cuivre dans le sol peut devenir problematique a long terme.",
            disponibleMaroc: true
        }
    ],

    points_cles: [
        "L'anthracnose est avant tout une maladie des FRUITS : les infections latentes sur les fruits verts, invisibles a l'oeil nu, se reactivent a la maturation et provoquent des pourritures deprimees avec un mucilage rose-orange caracteristique. Le controle doit cibler prioritairement la protection des fruits, de la nouaison a la recolte.",
        "Les ECLABOUSSURES D'EAU sont le principal vecteur de dissemination : le passage a l'irrigation au goutte-a-goutte et le paillage du sol sont les deux mesures preventives les plus efficaces, reduisant l'incidence de 60 a 85 %. Eviter absolument l'aspersion.",
        "La gestion POST-RECOLTE est critique : refroidir les fruits rapidement a 12-15 degres C, trier rigoureusement et eliminer tout fruit suspect. Un seul fruit infecte peut contaminer une caisse entiere. La chaine du froid est votre meilleur allie contre les pertes de stockage."
    ],

    protocole_traitement: {
        titre: "Protocole de lutte integree contre l'anthracnose de la tomate",
        etapes: [
            {
                titre: "Etape 1 : Prevention culturale (avant et pendant la culture)",
                description: "Installer le paillage plastique noir ou argente avant la plantation pour isoler les fruits du sol. Mettre en place l'irrigation au goutte-a-goutte (jamais d'aspersion). Espacer les plants de 50-60 cm en rang et 100-120 cm entre rangs. Tuteurer et palisser les plants pour maintenir les fruits a 15-20 cm du sol minimum. Pratiquer une rotation de 3-4 ans sans solanacees. Choisir une variete a peau epaisse si disponible."
            },
            {
                titre: "Etape 2 : Programme fongicide preventif (des la nouaison)",
                description: "Debuter les traitements fongicides des l'apparition des premiers fruits noues (taille d'une cerise). Alterner les familles chimiques toutes les 2 semaines : semaine 0 = chlorothalonil ou mancozebe (contact), semaine 2 = azoxystrobine ou boscalid+pyraclostrobine (systemique), semaine 4 = difenoconazole (triazole), semaine 6 = retour au contact. Bien orienter les buses vers les grappes de fruits. Integrer des applications de Bacillus subtilis entre les traitements chimiques."
            },
            {
                titre: "Etape 3 : Surveillance et hygiene (en continu)",
                description: "Inspecter les fruits en cours de muraison au moins 2 fois par semaine. Rechercher les premieres lesions deprimees avec mucilage rose-orange. Eliminer immediatement les fruits symptomatiques et les sortir de la parcelle. Ramasser les fruits tombes au sol a chaque passage. Desinfecter le materiel de recolte entre les rangs. Former les ouvriers a reconnaitre les symptomes d'anthracnose."
            },
            {
                titre: "Etape 4 : Recolte et post-recolte",
                description: "Recolter les fruits au stade rose-tournant plutot que rouge mur. Recolter par temps sec, jamais par temps de pluie. Trier les fruits au champ en eliminant tout fruit suspect. Refroidir les fruits dans les 2 heures suivant la recolte a 12-15 degres C. Maintenir la chaine du froid pendant le transport et le stockage. Ne jamais melanger des lots de dates de recolte differentes."
            },
            {
                titre: "Etape 5 : Fin de cycle et preparation du cycle suivant",
                description: "Apres la derniere recolte, arracher tous les plants et collecter tous les fruits restants (au sol et sur les plants). Detruire les residus par brulage ou enfouissement profond (> 30 cm). Solariser le sol si possible (film transparent 4-6 semaines en ete). Desinfecter les tuteurs, les fils et le materiel. Pour le cycle suivant, choisir une parcelle n'ayant pas porte de solanacees depuis 3-4 ans."
            }
        ]
    },

    faq: [
        {
            question: "Comment distinguer l'anthracnose de la pourriture apicale (BER) sur les fruits de tomate ?",
            reponse: "La pourriture apicale (BER) est un desordre PHYSIOLOGIQUE (carence en calcium), pas une maladie. Elle se localise toujours a l'APEX du fruit (extremite opposee au pedoncule), la lesion est seche, ferme, brune a noire, sans fructifications fongiques. L'anthracnose peut apparaitre n'importe ou sur le fruit, les lesions sont DEPRIMEES (concaves), et en conditions humides, un MUCILAGE ROSE-ORANGE apparait dans les lesions (masses de conidies). De plus, la pourriture apicale apparait souvent sur les fruits encore verts, tandis que l'anthracnose se manifeste principalement sur les fruits en cours de maturation."
        },
        {
            question: "Les fruits verts sont-ils infectes par l'anthracnose meme s'ils paraissent sains ?",
            reponse: "OUI, c'est le phenomene d'infection LATENTE, qui est la caracteristique la plus insidieuse de l'anthracnose. Le champignon infecte les fruits verts, penetre la cuticule et forme une vesicule d'infection, mais reste en dormance tant que le fruit est vert et immature. Les symptomes n'apparaissent qu'a la maturation, lorsque les changements physiologiques du fruit (ramollissement, augmentation des sucres, baisse de l'acidite) reactivent le champignon. C'est pourquoi les traitements preventifs des la nouaison sont essentiels : il faut proteger les fruits AVANT l'infection, pas apres."
        },
        {
            question: "Pourquoi le passage au goutte-a-goutte est-il si important contre l'anthracnose ?",
            reponse: "L'irrigation au goutte-a-goutte est la mesure la plus efficace contre l'anthracnose pour trois raisons : (1) Elle ne mouille PAS les fruits, eliminant les conditions d'humidite necessaires a la germination des conidies sur les fruits. (2) Elle supprime les ECLABOUSSURES qui projettent les conidies et les microsclérotes du sol vers les fruits. (3) Elle reduit l'humidite ambiante dans la canopee, accelerant le sechage des fruits apres la rosee ou la pluie. Des etudes ont montre que le passage de l'aspersion au goutte-a-goutte reduit l'incidence de l'anthracnose de 60 a 80 %."
        },
        {
            question: "Comment gerer l'anthracnose en post-recolte pour les tomates destinees a l'exportation ?",
            reponse: "La gestion post-recolte est critique pour les exportateurs : (1) Recolter au stade rose-tournant (pas rouge mur) pour minimiser le developpement des infections latentes. (2) Trier rigoureusement au champ et en station : eliminer tout fruit presentant la moindre lesion suspecte. (3) Refroidir les fruits dans les 2 heures suivant la recolte a 12-15 degres C. (4) Maintenir la chaine du froid sans interruption pendant le transport. (5) Un trempage post-recolte dans de l'eau chaude (50 degres C pendant 2-3 minutes) peut reduire les infections latentes de 50 a 70 %. (6) L'utilisation de fongicides post-recolte (imazalil, thiabendazole) est possible mais soumise a la reglementation du pays importateur. (7) Ne jamais stocker les tomates avec des fruits blesses ou suspects."
        }
    ],

    ressources: [
        "INRA Maroc - Fiches techniques : Maladies fongiques de la tomate au Maroc",
        "ONSSA - Liste des produits phytosanitaires homologues pour la tomate au Maroc (mise a jour annuelle)",
        "EPPO Global Database - Colletotrichum coccodes : distribution, biologie et mesures de lutte",
        "Blancard D. (2012) - Tomato Diseases: Identification, Biology and Control. Academic Press. Reference mondiale sur les maladies de la tomate",
        "Jones J.B. et al. (2014) - Compendium of Tomato Diseases and Pests. APS Press. 2eme edition",
        "Dillard H.R. (1989) - Effect of temperature, wetness duration, and inoculum density on infection and lesion development of Colletotrichum coccodes on tomato fruit. Phytopathology 79:1063-1066",
        "Byrne J.M. et al. (1997) - Effect of temperature and relative humidity on solar radiation-induced photodegradation of azoxystrobin on Colletotrichum-infected tomato fruit. Plant Disease 81:1166-1170",
        "IAV Hassan II - Supports de cours de phytopathologie : champignons des cultures maraicheres au Maroc",
        "FAO - Guide pratique de lutte integree contre les maladies des solanacees en region mediterraneenne",
        "CABI Crop Protection Compendium - Colletotrichum coccodes : biologie, epidemiologie et strategies de controle"
    ]
};
