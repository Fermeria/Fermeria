const MALADIE_FONTE_DES_SEMIS = {
    id: "fonte-des-semis",
    nom: "Fonte des semis de la tomate",
    nomScientifique: "Pythium spp., Rhizoctonia solani, Fusarium spp., Phytophthora spp.",
    type: "fongique",
    emoji: "\ud83c\udf31",
    resumeCourt: "La fonte des semis (damping-off) est un complexe de maladies fongiques et oomycetes qui attaque les graines en germination et les jeunes plantules de tomate. Elle provoque la pourriture des semences, l'effondrement et la mort rapide des plantules en pepiniere. Les pertes peuvent atteindre 80 a 100 % des semis en l'absence de mesures preventives.",
    cultures: ["Tomate", "Tomate cerise", "Semis en pepiniere", "Semis sous abri"],

    presentation: {
        description: "La fonte des semis, appelee damping-off en anglais, n'est pas une maladie unique mais un complexe pathologique impliquant plusieurs champignons et oomycetes du sol. Les principaux agents responsables sont Pythium spp. (notamment P. ultimum et P. aphanidermatum), Rhizoctonia solani, Fusarium spp. et Phytophthora spp. Ces organismes attaquent les graines pendant la germination (fonte en pre-emergence) ou les jeunes plantules juste apres la levee (fonte en post-emergence).\n\nLa maladie est particulierement redoutee en pepiniere, ou les conditions de forte densite, d'humidite elevee et de temperatures moderees favorisent son developpement. Au Maroc, la fonte des semis est un probleme recurrent dans les pepinieres maraicheres du Souss-Massa, du Gharb et du Loukkos, tant en pepinieres traditionnelles au sol qu'en pepinieres modernes sur plateaux alveoles.\n\nLa fonte des semis se manifeste sous deux formes principales : la fonte en pre-emergence (la graine pourrit avant de lever, on observe des manques dans les lignes de semis) et la fonte en post-emergence (la plantule levee s'affaisse brutalement au niveau du collet, se couche et meurt en quelques heures).",

        importance: "Maladie majeure en pepiniere de tomate, responsable de pertes de 20 a 100 % des plantules si aucune mesure preventive n'est prise. Elle compromet directement la campagne de production en reduisant le nombre de plants disponibles pour la transplantation et en retardant le calendrier cultural.",

        historique: "La fonte des semis est connue depuis les debuts de l'agriculture intensive. Les Pythium sont parmi les premiers organismes phytopathogenes decrits au XIXe siecle. Avec l'intensification de la production de plants en pepiniere au Maroc dans les annees 1970-1980, la fonte des semis est devenue un probleme economique majeur. L'adoption des pepinieres hors-sol sur plateaux alveoles avec substrats steriles a considerablement reduit l'incidence de la maladie, mais elle reste frequente dans les pepinieres traditionnelles et lors d'utilisation de substrats contamines.",

        impact_economique: "Les pertes economiques liees a la fonte des semis sont significatives :\n\n- Pertes directes : 20 a 100 % des semis en pepiniere traditionnelle non traitee.\n- Cout des resemis : obligation de recommencer le semis, perte de temps (10 a 15 jours) et de semences (cout eleve pour les hybrides F1).\n- Retard de plantation : decalage du calendrier cultural de 2 a 3 semaines, impactant la precocite de la recolte et les prix de marche.\n- Cout des traitements preventifs : desinfection du substrat, fongicides de semence et de sol, biofongicides.\n- Au Maroc, le prix des semences hybrides de tomate varie de 0,50 a 2 MAD par graine. La perte de 50 % d'un lot de 10 000 graines represente 2 500 a 10 000 MAD de semences perdues, sans compter les couts de substrat, de main d'oeuvre et de structure."
    },

    origine: {
        agent: "La fonte des semis est causee par un complexe de pathogenes du sol :\n\n- Pythium spp. (P. ultimum, P. aphanidermatum, P. debaryanum) : oomycetes a croissance rapide, principaux responsables de la fonte humide. Produisent des zoospores mobiles attirees par les exsudats des graines en germination.\n- Rhizoctonia solani : champignon basidiomycete tres polyphage. Provoque une fonte seche avec un etranglement brun du collet. Ne produit pas de spores mais se propage par mycelium et scleroties.\n- Fusarium spp. (F. oxysporum, F. solani) : champignons ascomycetes produisant des chlamydospores tres resistantes dans le sol.\n- Phytophthora spp. : oomycetes apparentes aux Pythium, responsables de fontes en conditions fraiches et humides.\n- Autres agents secondaires : Sclerotinia sclerotiorum, Thielaviopsis basicola, Botrytis cinerea.",

        provenance: "Les agents de la fonte des semis sont cosmopolites et presents dans tous les sols agricoles. Au Maroc, Pythium spp. et Rhizoctonia solani sont les agents les plus frequemment isoles dans les pepinieres maraicheres. L'inoculum provient du sol naturel ou reutilise, des substrats contamines, de l'eau d'irrigation non traitee, des plateaux et conteneurs non desinfectes entre deux cycles, et parfois des semences elles-memes (contamination de surface).",

        cycle: "1. Source d'inoculum : les pathogenes survivent dans le sol sous forme de structures de resistance (oospores pour Pythium, scleroties pour Rhizoctonia, chlamydospores pour Fusarium). Ces structures peuvent persister pendant des mois voire des annees dans le sol, meme en l'absence de plante-hote.\n\n2. Stimulation par les exsudats : les graines en germination liberent des sucres, des acides amines et d'autres metabolites qui diffusent dans le substrat humide. Ces exsudats stimulent la germination des oospores de Pythium et l'activite mycelienne de Rhizoctonia.\n\n3. Infection pre-emergence : les zoospores de Pythium nagent dans le film d'eau du sol en direction des exsudats de la graine (chimiotactisme). Elles s'enkystent sur la graine et penetrent directement dans les tissus ramollis par la germination. Le mycelium envahit la graine qui pourrit avant de lever.\n\n4. Infection post-emergence : si la plantule reussit a lever, les pathogenes attaquent la zone du collet (jonction entre la tige et la racine), qui est le point le plus vulnerable. Le mycelium de Rhizoctonia s'enroule autour du collet et provoque un etranglement. Pythium cause une pourriture aqueuse du collet.\n\n5. Effondrement : la plantule s'affaisse au niveau du collet detruit, se couche sur le substrat et meurt en quelques heures. Les tissus du collet sont translucides (Pythium) ou bruns et retrecis (Rhizoctonia).\n\n6. Propagation : les pathogenes se propagent de plantule en plantule par croissance mycelienne a travers le substrat humide, par les eclaboussures d'eau d'arrosage et par les zoospores (Pythium). Des foyers circulaires de mortalite apparaissent et s'etendent rapidement.\n\n7. Survie : apres destruction des plantules, les pathogenes produisent de nouvelles structures de resistance et colonisent la matiere organique morte, prets pour le prochain cycle de semis.",

        propagation: [
            "Sol ou substrat contamine reutilise sans desinfection",
            "Eau d'irrigation contaminee par Pythium (puits, bassins, eau de recyclage)",
            "Croissance mycelienne directe de plantule a plantule dans le substrat humide",
            "Zoospores de Pythium nageant dans le film d'eau du substrat vers les graines en germination",
            "Plateaux alveoles et conteneurs non desinfectes entre deux cycles",
            "Outils et materiel de pepiniere contamines (semoirs, arrosoirs, tables)",
            "Semences contaminees en surface par des spores de Fusarium ou Rhizoctonia",
            "Eclaboussures lors de l'arrosage dispersant les propagules dans le substrat"
        ]
    },

    facteurs: {
        climatiques: [
            "Exces d'humidite du substrat : l'engorgement en eau est le facteur numero 1 favorisant Pythium et Phytophthora",
            "Temperatures du substrat entre 15 et 25 degres C (optimum pour Pythium et Rhizoctonia) ; P. aphanidermatum est actif jusqu'a 35 degres C",
            "Faible luminosite retardant la croissance des plantules et les rendant plus vulnerables",
            "Ventilation insuffisante en pepiniere, maintenant une atmosphere saturee en humidite",
            "Variations brutales de temperature affaiblissant les plantules (stress thermique)",
            "Periodes nuageuses prolongees ralentissant le sechage du substrat entre les arrosages"
        ],
        sol: [
            "Sol ou substrat non sterilise contenant un inoculum eleve de pathogenes",
            "Substrat trop compact avec mauvais drainage, retenant l'eau en exces",
            "pH du substrat trop acide (< 5,5) ou trop alcalin (> 7,5) favorisant certains pathogenes",
            "Substrat riche en matiere organique non decomposee servant de base alimentaire aux Pythium",
            "Reutilisation de substrat de tourbe ou coco sans sterilisation entre deux cycles",
            "Eau d'irrigation de mauvaise qualite (eau de bassin, eau recyclee) contenant des zoospores de Pythium"
        ],
        pratiques: [
            "Semis trop profond : les plantules mettent plus de temps a lever et restent plus longtemps vulnerables",
            "Semis trop dense : forte competition, faible circulation d'air, propagation rapide du pathogene entre plantules",
            "Arrosage excessif et trop frequent, surtout en fin de journee, maintenant le substrat gorge d'eau",
            "Utilisation de semences non traitees (non enrobees de fongicide)",
            "Non-desinfection des plateaux, des tables de culture et du materiel entre deux cycles",
            "Pepiniere mal ventilee ou trop ombragee",
            "Absence de drainage sous les plateaux de semis",
            "Repiqu age trop tardif laissant les plantules trop longtemps en conditions de pepiniere"
        ],
        erreurs: [
            "Arroser abondamment les semis 'pour accelerer la levee' : l'exces d'eau est la cause principale de fonte",
            "Reutiliser du substrat d'un cycle precedent sans le steriliser, en pensant qu'il est encore propre",
            "Semer trop profondement (> 1 cm) les graines de tomate, rallongeant la phase de vulnerabilite",
            "Confondre la fonte des semis avec un manque d'arrosage et arroser encore plus, aggravant le probleme",
            "Ne pas desinfecter les plateaux alveoles entre deux usages",
            "Placer la pepiniere dans un endroit trop ombre et mal ventile",
            "Utiliser de l'eau de bassin ou de puits sans traitement pour arroser les semis"
        ]
    },

    symptomes: {
        feuilles: "STADE INITIAL (pre-emergence) :\nLa graine ne leve pas. On observe des manques irreguliers dans les lignes ou les alveoles de semis. En decouvrant la graine, on la trouve molle, translucide et desagreable, parfois recouverte d'un feutrage blanc cotonneux (Pythium) ou d'un mycelium brun (Rhizoctonia). La radicule, si elle a commence a se developper, est brune et pourrie.\n\nSTADE INITIAL (post-emergence) :\nLa plantule est levee mais presente un aspect affaibli. La tige au niveau du collet (zone au ras du sol) montre un leger retrecissement ou une decoloration. La plantule peut pencher legerement.\n\nSTADE INTERMEDIAIRE :\nLe collet de la plantule se retrecit nettement et prend une teinte aqueuse et translucide (attaque par Pythium) ou brune et seche (attaque par Rhizoctonia). La plantule commence a s'affaisser. Les cotyledons et les premieres feuilles faiblissent.\n\nSTADE AVANCE :\nLa plantule s'effondre completement au niveau du collet detruit, se couche sur le substrat et meurt en quelques heures. Les tissus du collet sont completement detruits : etranglement en 'sablier' pour Rhizoctonia, pourriture molle et aqueuse pour Pythium. Un feutrage blanc (Pythium) ou des filaments bruns (Rhizoctonia) peuvent etre visibles a la surface du substrat autour des plantules mortes. La mortalite s'etend en foyers circulaires.",

        tiges: "La tige des plantules est atteinte exclusivement au niveau du collet (zone de contact avec le substrat). Avec Pythium, la tige devient translucide et aqueuse a la base, comme si elle avait ete echaudee. Avec Rhizoctonia, la tige presente un etranglement sec, brun fonce, nettement delimite, donnant un aspect de 'fil de fer' a la base. Au-dessus de la zone atteinte, la tige reste verte et apparemment saine, ce qui cree un contraste saisissant. La tige ne pourrit pas dans sa totalite : seule la zone du collet est detruite.",

        fruits: "Sans objet. La fonte des semis est une maladie de pepiniere qui affecte les graines et les plantules avant le stade de fructification. Si les plantules survivent a l'attaque, les plants transplantes au champ ne presentent generalement pas de symptomes de fonte des semis.",

        racines: "Les racines sont directement attaquees par les pathogenes. Avec Pythium, les radicules deviennent brunes, molles et translucides. L'ecorce racinaire se detache facilement, laissant apparaitre le cylindre central blanc (symptome en 'queue de rat'). Avec Rhizoctonia, les racines presentent des lesions brunes, seches et nettes. Avec Fusarium, une decoloration vasculaire brun-rouille peut etre visible en coupe longitudinale des racines et de la base de la tige. Dans tous les cas, le systeme racinaire est fortement reduit, ce qui explique l'effondrement de la plantule.",

        stade: "La fonte des semis est strictement une maladie de pepiniere, active du semis jusqu'au stade 3-4 feuilles vraies (environ 3 a 4 semaines apres le semis). Les deux periodes critiques sont :\n- Phase de germination (jours 0 a 7) : fonte en pre-emergence, la graine pourrit avant de lever.\n- Phase de levee et de croissance des cotyledons (jours 7 a 21) : fonte en post-emergence, la plantule s'effondre.\n\nAu-dela du stade 4 feuilles vraies, les plantules ont lignifie la base de leur tige (suberation du collet) et deviennent resistantes a la fonte des semis. Les plants transplantes au champ ne sont plus sensibles a cette maladie.",

        differenciation: "Fonte par Pythium vs Rhizoctonia : Pythium cause une pourriture MOLLE et AQUEUSE (collet translucide, feutrage blanc), tandis que Rhizoctonia cause un etranglement SEC et BRUN (collet retreci en sablier, pas de feutrage).\nBrulure par le soleil : les plantules se dessechent uniformement, pas d'etranglement du collet ni de feutrage.\nExces de sel (salinite du substrat) : jaunissement et dessechement des cotyledons, mais la base de la tige reste intacte.\nDeshydratation : les plantules faiblissent uniformement, mais reprennent apres arrosage. Pas de pourriture du collet.\nDegats de sciarides (mouches du terreau) : les larves de sciarides peuvent endommager les racines et le collet, mais on observe les larves translucides dans le substrat."
    },

    lutte: {
        prevention: [
            "Utiliser un substrat sterile : tourbe neuve, fibre de coco neuve, ou substrat sterilise par solarisation (couvrir le tas humide avec un plastique noir pendant 4 a 6 semaines en ete) ou par traitement vapeur (70 degres C pendant 30 minutes)",
            "Desinfecter les plateaux alveoles et les tables de culture entre chaque cycle avec de l'eau de Javel a 2 % (20 mL/L) pendant 15 minutes, puis rincer abondamment",
            "Utiliser des semences de qualite, certifiees, et si possible pre-traitees (enrobage fongicide avec thirame, metalaxyl ou fludioxonil)",
            "Semer a la bonne profondeur (0,5 a 1 cm maximum pour la tomate) pour reduire la duree de la phase de vulnerabilite",
            "Respecter une densite de semis raisonnable : eviter le semis trop dense qui favorise la propagation du pathogene",
            "Arroser moderement et regulierement : maintenir le substrat humide mais JAMAIS gorge d'eau. Preferer les arrosages le matin",
            "Assurer un bon drainage sous les plateaux : ne jamais laisser les plateaux baigner dans l'eau stagnante",
            "Ventiler la pepiniere pour eviter la saturation en humidite de l'air",
            "Assurer un eclairement suffisant pour favoriser une croissance rapide et vigoureuse des plantules",
            "Utiliser de l'eau d'irrigation propre : eau de ville ou eau traitee (filtree + chloree ou ozonee). Eviter l'eau de bassin non traitee",
            "Ne jamais reutiliser du substrat de pepiniere sans sterilisation prealable",
            "Repiquer les plantules des qu'elles ont 2 a 3 feuilles vraies pour reduire la duree d'exposition en pepiniere"
        ],
        biologique: [
            "Application de Trichoderma harzianum au substrat avant le semis (5 a 10 g/m2 ou selon les recommandations du fabricant). Trichoderma colonise le substrat et antagonise les pathogenes par competition, antibiose et mycoparasitisme",
            "Incorporation de Bacillus subtilis (Serenade) au substrat ou en arrosage a la base des plantules. Produit des lipopeptides antifongiques",
            "Utilisation de Gliocladium virens (SoilGard) en incorporation au substrat. Mycoparasite de Pythium et Rhizoctonia",
            "Inoculation du substrat avec des mycorhizes (Glomus spp.) pour renforcer le systeme racinaire et sa resistance aux pathogenes",
            "Apport de compost mature de bonne qualite (rapport C/N < 20) en melange au substrat : le compost mature contient une microflore antagoniste des pathogenes",
            "Traitement des semences avec des preparations biologiques a base de Pseudomonas fluorescens ou Bacillus amyloliquefaciens",
            "Application d'extrait de neem au substrat pour ses proprietes antifongiques complementaires",
            "Utilisation de substrats suppressifs : certaines tourbes et composts favorisent naturellement les micro-organismes antagonistes des pathogenes de fonte"
        ],
        chimique: [
            "Traitement de semences au thirame (Thiram) : enrobage a 2-4 g/kg de semences. Protection de contact contre Pythium, Rhizoctonia et Fusarium",
            "Traitement de semences au metalaxyl-M (Apron XL) : enrobage specifique contre les Pythium et Phytophthora. Tres efficace en protection systemique de la phase germinative",
            "Traitement de semences au fludioxonil (Celest) : protection de contact a spectre large, efficace contre Rhizoctonia et Fusarium",
            "Arrosage du substrat au metalaxyl-M (Ridomil Gold) apres le semis : 25 mL de produit commercial par 10 L d'eau, a raison de 2-3 L/m2. Specifique contre Pythium et Phytophthora",
            "Arrosage au propamocarbe (Previcur Energy) : 1,5 mL/L en arrosage au collet. Efficace contre Pythium. Peut etre melange avec du fosethyl-Al pour elargir le spectre",
            "Application de pencycuron (Monceren) en arrosage au substrat contre Rhizoctonia solani. Tres specifique, sans effet sur Pythium",
            "Programme combine : metalaxyl (anti-Pythium) + pencycuron (anti-Rhizoctonia) en traitement du substrat avant semis pour une protection a large spectre",
            "Hymexazol (Tachigaren) en arrosage du substrat : fongicide specifique anti-fonte des semis avec une action systemique. Efficace contre Pythium, Fusarium et Rhizoctonia"
        ],
        mecanique: [
            "Solarisation du substrat : couvrir le substrat humide avec un film plastique transparent pendant 4 a 6 semaines en plein ete (juillet-aout au Maroc). Les temperatures atteignent 60-70 degres C en surface, eliminant les pathogenes",
            "Sterilisation a la vapeur : traiter le substrat a 70 degres C pendant 30 minutes. Methode efficace mais couteuse en equipement et en energie",
            "Trempage des plateaux dans l'eau chaude (70 degres C pendant 5 minutes) pour detruire les spores adherentes",
            "Retrait immediat des plantules atteintes et du substrat environnant (rayon de 5 cm autour de chaque plantule morte) pour limiter la propagation",
            "Surelevement des plateaux de semis sur des tables ou des supports pour eviter le contact avec le sol et faciliter le drainage",
            "Ventilation forcee de la pepiniere avec des ventilateurs pour reduire l'humidite ambiante et accelerer le sechage de surface du substrat"
        ]
    },

    produits: [
        {
            nom: "Ridomil Gold MZ 68 WG (Metalaxyl-M + Mancozebe)",
            type: "Fongicide systemique + contact preventif",
            matiere: "Metalaxyl-M 40 g/kg + Mancozebe 640 g/kg",
            action: "Double action : le metalaxyl-M (systemique) est specifiquement actif contre les oomycetes (Pythium, Phytophthora) en inhibant la synthese de l'ARN ribosomal. Le mancozebe (contact) elargit le spectre a Rhizoctonia et Fusarium.",
            application: "2,5 g/L en arrosage du substrat avant le semis ou immediatement apres. Appliquer 2 a 3 L de solution par m2 de surface de semis. Un seul traitement en general suffisant pour proteger la phase germinative.",
            precautions: "Ne pas surdoser pour eviter la phytotoxicite sur les jeunes plantules. Alterner avec d'autres matieres actives pour prevenir les resistances de Pythium au metalaxyl (resistances connues). Contient du mancozebe : porter EPI.",
            disponibleMaroc: true
        },
        {
            nom: "Previcur Energy (Propamocarbe + Fosethyl-Al)",
            type: "Fongicide systemique preventif et curatif",
            matiere: "Propamocarbe 530 g/L + Fosethyl-aluminium 310 g/L",
            action: "Le propamocarbe perturbe la biosynthese des phospholipides membranaires chez les oomycetes. Le fosethyl-Al stimule les defenses naturelles de la plante et a une action directe sur Pythium et Phytophthora. Synergie des deux modes d'action.",
            application: "1,5 a 2,5 mL/L en arrosage au collet des plantules. Appliquer des le semis puis repeter 7 a 10 jours apres si les conditions restent favorables. Volume : 3 a 5 L/m2.",
            precautions: "DAR : non applicable en pepiniere (pas de recolte). Bien adapte aux pepinieres de tomate. Eviter les applications sur substrat trop humide. Compatible avec les agents de biocontrole (Trichoderma).",
            disponibleMaroc: true
        },
        {
            nom: "Monceren 250 SC (Pencycuron)",
            type: "Fongicide de contact specifique anti-Rhizoctonia",
            matiere: "Pencycuron 250 g/L",
            action: "Specifiquement actif contre Rhizoctonia solani. Inhibe la division cellulaire du champignon en perturbant la biosynthese de la paroi. Aucune action sur Pythium ou Phytophthora. Tres bonne persistance dans le substrat.",
            application: "1 mL/L en arrosage du substrat au moment du semis. Peut etre melange avec du metalaxyl pour une protection a large spectre (anti-Rhizoctonia + anti-Pythium). Volume : 2 a 3 L/m2.",
            precautions: "Specifique a Rhizoctonia : ne protege PAS contre Pythium. A combiner avec un anti-oomycetes si les deux pathogenes sont presents. Pas de risque connu de resistance.",
            disponibleMaroc: true
        },
        {
            nom: "Celest XL 035 FS (Fludioxonil + Metalaxyl-M)",
            type: "Traitement de semences",
            matiere: "Fludioxonil 25 g/L + Metalaxyl-M 10 g/L",
            action: "Traitement de semences a double mode d'action : le fludioxonil (contact) inhibe le transport du glucose chez les champignons (Rhizoctonia, Fusarium), le metalaxyl-M (systemique) agit contre les oomycetes (Pythium). Protection de la graine et de la jeune radicule.",
            application: "Traitement de semences par enrobage avant le semis. Dose : 1 mL de produit pour 100 g de semences. Bien homogeneiser l'enrobage. Laisser secher avant le semis.",
            precautions: "Manipuler les semences traitees avec des gants. Ne pas consommer les semences traitees. Stocker les semences traitees a l'abri de l'humidite. Ce traitement ne remplace pas les bonnes pratiques de pepiniere (substrat propre, arrosage modere).",
            disponibleMaroc: true
        },
        {
            nom: "Tachigaren 70 WP (Hymexazol)",
            type: "Fongicide systemique specifique anti-fonte",
            matiere: "Hymexazol 70 %",
            action: "Fongicide specifiquement developpe contre la fonte des semis. Action systemique absorbee par les racines. Inhibe la synthese de l'ADN et de l'ARN chez Pythium, Fusarium et Aphanomyces. Stimule egalement la croissance racinaire des plantules (effet hormonal positif).",
            application: "2 g/L en arrosage du substrat au moment du semis. Volume : 3 L de solution par m2. Repeter 7 a 10 jours apres si necessaire. Peut etre utilise en trempage des mottes avant repiquage.",
            precautions: "Produit specifique et bien tolere par les plantules de tomate. A utiliser en alternance avec d'autres fongicides. Peu efficace contre Rhizoctonia (completer avec pencycuron si necessaire).",
            disponibleMaroc: true
        },
        {
            nom: "Trianum-P (Trichoderma harzianum souche T-22)",
            type: "Biofongicide preventif",
            matiere: "Trichoderma harzianum souche T-22, 1 x 10^9 UFC/g",
            action: "Agent de biocontrole. Trichoderma colonise la rhizosphere et le substrat, entrant en competition avec les pathogenes pour les nutriments et l'espace. Produit des enzymes lytiques (chitinases, glucanases) qui degradent les parois cellulaires de Pythium et Rhizoctonia. Stimule les defenses naturelles des plantules et favorise la croissance racinaire.",
            application: "Incorporer au substrat avant le semis : 1 g/L d'eau d'arrosage. Appliquer a raison de 3 a 5 L/m2 de surface de semis. Renouveler 10 jours apres le semis. Compatible avec la plupart des fongicides (sauf les benzimidazoles et le captane a forte dose).",
            precautions: "Utiliser dans les 2 heures suivant la preparation de la suspension. Stocker au frais (4-8 degres C). Efficacite reduite en conditions tres seches. A integrer dans une approche preventive globale, pas en traitement curatif d'urgence.",
            disponibleMaroc: true
        },
        {
            nom: "Dithane M-45 (Mancozebe)",
            type: "Fongicide de contact preventif",
            matiere: "Mancozebe 80 %",
            action: "Dithiocarbamate a action multi-sites de contact. Active contre un large spectre de champignons incluant Rhizoctonia et Fusarium. Moins efficace contre Pythium (oomycete). Action preventive uniquement.",
            application: "2 g/L en arrosage du substrat. Peut etre utilise en complement du metalaxyl pour elargir le spectre. Volume : 2 a 3 L/m2. Appliquer avant le semis.",
            precautions: "Peu efficace seul contre Pythium. A combiner avec un anti-oomycetes. Porter EPI complets lors de la manipulation. Toxique pour les organismes aquatiques.",
            disponibleMaroc: true
        }
    ],

    points_cles: [
        "L'HYGIENE est la premiere defense contre la fonte des semis : substrat sterile, plateaux desinfectes, eau propre, outils propres. 80 % des problemes de fonte proviennent d'une contamination evitable du substrat ou du materiel.",
        "L'ARROSAGE est le facteur declenchant numero 1 : un exces d'eau dans le substrat cree les conditions ideales pour Pythium. Arroser moderement, le matin, et assurer un excellent drainage. Le substrat doit etre humide, JAMAIS trempe.",
        "La fonte des semis est un COMPLEXE de pathogenes (Pythium + Rhizoctonia + Fusarium) : un seul fongicide ne suffit pas. Combiner les traitements anti-oomycetes (metalaxyl, propamocarbe) avec les anti-champignons (pencycuron, fludioxonil) et les agents biologiques (Trichoderma)."
    ],

    protocole_traitement: {
        titre: "Protocole de protection des semis contre la fonte",
        etapes: [
            {
                titre: "Etape 1 : Preparation du substrat (avant semis)",
                description: "Utiliser un substrat neuf et sterile (tourbe ou fibre de coco neuve). Si vous reutilisez un substrat, le steriliser obligatoirement par solarisation (4-6 semaines sous plastique en ete) ou traitement vapeur (70 degres C pendant 30 min). Incorporer du Trichoderma harzianum au substrat (1 g/L en arrosage, 3-5 L/m2). Desinfecter les plateaux alveoles a l'eau de Javel 2 % pendant 15 min puis rincer."
            },
            {
                titre: "Etape 2 : Traitement des semences (jour du semis)",
                description: "Utiliser des semences certifiees, si possible pre-traitees au fludioxonil + metalaxyl-M (Celest XL). Si les semences ne sont pas traitees, les enrober avec du thirame (2-4 g/kg) ou les tremper 10 min dans une solution de Previcur Energy (1 mL/L) puis les laisser secher. Semer a 0,5-1 cm de profondeur maximum."
            },
            {
                titre: "Etape 3 : Arrosage au fongicide (immediatement apres semis)",
                description: "Arroser le substrat avec une solution de Previcur Energy (1,5 mL/L) ou de Ridomil Gold (2,5 g/L) a raison de 3 L/m2. Cet arrosage initial cree une barriere chimique protectrice autour de la graine. Si Rhizoctonia est un probleme connu, ajouter du pencycuron (Monceren, 1 mL/L) dans la meme solution."
            },
            {
                titre: "Etape 4 : Gestion du climat de pepiniere (quotidien)",
                description: "Maintenir le substrat humide mais PAS sature : arroser le matin par de courts arrosages frequents plutot qu'un gros arrosage. Assurer une ventilation permanente de la pepiniere. Maintenir une temperature du substrat entre 20 et 25 degres C pour favoriser une levee rapide (moins de temps en phase vulnerable). Eclairer suffisamment les semis (lumiere naturelle ou eclairage artificiel)."
            },
            {
                titre: "Etape 5 : Surveillance et intervention d'urgence (quotidien)",
                description: "Inspecter les semis chaque jour. Au premier signe de fonte (plantule affaissee), retirer immediatement les plantules mortes et le substrat environnant (5 cm de rayon). Appliquer un arrosage localise de Previcur Energy ou Tachigaren autour du foyer. Reduire les arrosages sur l'ensemble de la pepiniere. Si la fonte s'etend, traiter l'ensemble des plateaux. Repiquer les plantules saines des qu'elles ont 2-3 feuilles vraies pour les sortir de la zone a risque."
            }
        ]
    },

    faq: [
        {
            question: "Quelle est la difference entre la fonte en pre-emergence et en post-emergence ?",
            reponse: "La fonte en pre-emergence se produit avant que la plantule ne sorte du substrat : la graine pourrit pendant la germination, on observe simplement des manques dans les lignes de semis (la graine n'a jamais leve). La fonte en post-emergence se produit apres la levee : la plantule est visible mais s'effondre au niveau du collet, se couche et meurt. Les deux formes sont causees par les memes pathogenes (Pythium, Rhizoctonia), mais la forme pre-emergence est plus difficile a detecter car il n'y a rien de visible en surface."
        },
        {
            question: "Peut-on reutiliser le substrat apres un episode de fonte des semis ?",
            reponse: "Il est fortement deconseille de reutiliser le substrat sans sterilisation prealable. Si vous devez le reutiliser, sterilisez-le obligatoirement par solarisation (4-6 semaines sous plastique noir en plein ete) ou par traitement a la vapeur (70 degres C pendant 30 minutes minimum). Meme apres sterilisation, il est recommande d'inoculer le substrat avec du Trichoderma harzianum pour recoloniser le milieu avec des micro-organismes benefiques. En pepiniere professionnelle, le cout du substrat neuf est negligeable par rapport au risque de perte d'un lot de semis."
        },
        {
            question: "Le Trichoderma est-il compatible avec les fongicides chimiques ?",
            reponse: "Trichoderma harzianum est compatible avec la plupart des fongicides utilises contre la fonte : metalaxyl, propamocarbe, fosethyl-Al, pencycuron et mancozebe a dose normale. En revanche, il est INCOMPATIBLE avec les benzimidazoles (carbendazime, thiabendazole) et le captane a forte dose, qui le tuent. Idealement, appliquer le Trichoderma 3 a 5 jours avant ou apres le traitement chimique. Le Trichoderma et le Bacillus subtilis peuvent etre appliques ensemble sans probleme."
        },
        {
            question: "Comment savoir si la fonte est causee par Pythium ou par Rhizoctonia ?",
            reponse: "L'observation des symptomes donne de bonnes indications : Pythium provoque une pourriture MOLLE et AQUEUSE du collet (aspect trempe, translucide), souvent avec un feutrage blanc cotonneux visible a la surface du substrat humide. Rhizoctonia provoque un etranglement SEC et BRUN du collet (aspect retreci en sablier), parfois avec des filaments bruns visibles. Pythium est favorise par l'exces d'eau et les substrats gorges, Rhizoctonia par les substrats plus secs et les temperatures entre 15-25 degres C. En pratique, les deux sont souvent presents simultanement, et un traitement combinant metalaxyl (anti-Pythium) et pencycuron (anti-Rhizoctonia) est la meilleure approche."
        }
    ],

    ressources: [
        "INRA Maroc - Guide pratique de la pepiniere maraichere : prevention de la fonte des semis",
        "ONSSA - Liste des produits phytosanitaires homologues pour le traitement des semences au Maroc",
        "Agrios G.N. (2005) - Plant Pathology, 5eme edition. Academic Press. Chapitre sur les maladies de pepiniere (damping-off)",
        "Blancard D. (2012) - Tomato Diseases: Identification, Biology and Control. Academic Press. Section sur la fonte des semis",
        "Martin F.N. & Loper J.E. (1999) - Soilborne plant diseases caused by Pythium spp.: ecology, epidemiology, and prospects for biological control. Critical Reviews in Plant Sciences 18(2):111-181",
        "Harman G.E. (2006) - Overview of mechanisms and uses of Trichoderma spp. Phytopathology 96:190-194. Reference sur l'utilisation de Trichoderma en biocontrole",
        "IAV Hassan II - Supports de cours de phytopathologie : maladies de pepiniere des cultures maraicheres",
        "FAO - Manuel de production de plants maraichers de qualite en pepiniere",
        "CABI Crop Protection Compendium - Pythium ultimum, Rhizoctonia solani : fiches techniques",
        "EPPO - Standards de diagnostic pour Pythium spp. et Rhizoctonia solani en pepiniere"
    ]
};
