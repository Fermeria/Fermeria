const MALADIE_THRIPS = {
    id: "thrips",
    nom: "Thrips de la tomate",
    nomScientifique: "Frankliniella occidentalis, Thrips tabaci, Thrips palmi",
    type: "ravageur",
    emoji: "\ud83e\udeb3",
    resumeCourt: "Les thrips sont de minuscules insectes piqueurs-suceurs (1 a 2 mm) qui causent des degats directs sur les feuilles, les fleurs et les fruits de la tomate, et surtout transmettent le redoutable virus du bronzage de la tomate (TSWV). Frankliniella occidentalis (thrips californien) est l'espece la plus nuisible au Maroc. Les pertes dues aux degats directs varient de 10 a 30 %, mais la transmission du TSWV peut entrainer des pertes de 50 a 100 % en cas d'epidemie virale.",
    cultures: ["Tomate", "Tomate cerise", "Tomate sous serre", "Tomate plein champ", "Cultures maraicheres"],

    presentation: {
        description: "Les thrips (ordre des Thysanopteres, famille des Thripidae) sont des insectes de tres petite taille (1 a 2 mm), au corps allonge et aplati, munis d'ailes frangees caracteristiques. Ils se nourrissent en lacérant les cellules epidermiques avec leurs pieces buccales asymetriques (un seul stylet mandibulaire fonctionnel) et en aspirant le contenu cellulaire.\n\nTrois especes principales menacent la tomate au Maroc :\n\n- Frankliniella occidentalis (Pergande) : le thrips californien ou thrips des fleurs de l'Ouest. Espece la plus nuisible au monde sur cultures sous serre. Corps de 1 a 1,5 mm, de couleur jaune a brun clair. Se concentre dans les fleurs (floricole) mais attaque aussi les feuilles et les fruits. Vecteur principal du TSWV (Tomato Spotted Wilt Virus), le virus du bronzage de la tomate.\n\n- Thrips tabaci (Lindeman) : le thrips du tabac ou thrips de l'oignon. Corps de 0,8 a 1,2 mm, jaune pale a brun. Moins floricole que F. occidentalis, s'attaque davantage aux feuilles. Vecteur du TSWV, mais moins efficace que F. occidentalis. Egalement nuisible a l'oignon, l'ail et le poireau.\n\n- Thrips palmi (Karny) : le thrips du melon. Corps de 1 a 1,3 mm, jaune vif. Espece tropicale en expansion au Maroc. Tres polyphage. Vecteur potentiel de tospovirus. Particulierement nuisible dans les serres chaudes du Souss-Massa.\n\nLes thrips sont des ravageurs particulierement difficiles a combattre car ils se cachent dans les fleurs (hors d'atteinte des traitements de contact), ont un cycle court (2 semaines), une forte fecondite et un stade nymphal dans le sol.",

        importance: "Les thrips sont classes parmi les 3 ravageurs les plus importants de la tomate sous serre au Maroc, avec la mouche blanche (Bemisia tabaci) et Tuta absoluta. Frankliniella occidentalis est presente dans plus de 80 % des serres du Souss-Massa. Son importance ne tient pas seulement aux degats directs (decoloration des feuilles, cicatrices sur fruits) mais surtout a son role de VECTEUR du TSWV, un tospovirus devastateur. Le TSWV est transmis sur le mode PERSISTANT-PROPAGATIF : le virus se multiplie dans le corps du thrips et la transmission est tres efficace. Une epidemie de TSWV peut detruire une culture entiere.",

        historique: "Thrips tabaci est present au Maroc depuis tres longtemps sur les cultures d'oignon et de tomate. Frankliniella occidentalis, originaire d'Amerique du Nord, a ete introduite accidentellement en Europe dans les annees 1980 avec le commerce de fleurs coupees et de plants. Elle a ete signalee au Maroc pour la premiere fois au debut des annees 1990 dans le Souss-Massa et s'est rapidement repandue dans toutes les zones de production sous serre.\n\nL'arrivee de F. occidentalis a transforme le paysage phytosanitaire de la tomate car cette espece a introduit le TSWV dans des zones ou il etait absent. Les epidemies de TSWV des annees 1990-2000 ont cause des pertes considerables. La selection de varietes de tomate resistantes au TSWV (gene Sw-5) et le developpement de la lutte biologique avec Amblyseius swirskii et Orius laevigatus ont permis de mieux gerer ce ravageur depuis les annees 2010.",

        impact_economique: "Les pertes economiques causees par les thrips :\n\n- Degats directs sur feuillage : taches argentees, deformation des jeunes feuilles. Reduction de rendement de 10 a 20 %.\n- Degats sur fruits : cicatrices liégeuses, deformations, taches annulaires. Perte de qualite commerciale de 15 a 30 %. Les tomates cerises et les varietes a peau fine sont particulierement affectees.\n- Degats sur fleurs : avortement floral, reduction de la nouaison de 10 a 25 %.\n- Transmission du TSWV (degat LE PLUS GRAVE) : pertes de 30 a 100 % selon la precocite de l'infection. Les plants infectes jeunes ne produisent pas. Le TSWV n'a pas de traitement curatif.\n- Cout des traitements : 4 a 8 applications par cycle, soit 2 000 a 6 000 MAD/ha.\n- Cout de la lutte biologique (Amblyseius, Orius) : 4 000 a 12 000 MAD/ha par cycle.\n- Au Maroc, les thrips et le TSWV representent la premiere cause de perte economique sur tomate sous serre certaines annees."
    },

    origine: {
        agent: "Trois especes principales :\n\n- Frankliniella occidentalis (Pergande, 1895) : famille des Thripidae. Corps allonge, 1-1,5 mm, jaune a brun clair (les males sont plus petits et plus clairs). Ailes etroites bordees de longues franges de soies (cils). Antennes de 8 articles. Pieces buccales asymetriques : un seul stylet mandibulaire (le gauche) fonctionnel, qui lacere les cellules. Le contenu cellulaire est aspire. Espece FLORICOLE : se concentre dans les fleurs ou elle se nourrit de pollen et des tissus floraux. Vecteur le plus efficace du TSWV.\n\n- Thrips tabaci (Lindeman, 1889) : famille des Thripidae. Plus petit (0,8-1,2 mm), jaune pale a brun grisatre. Moins floricole, s'alimente principalement sur les feuilles. Antennes de 7 articles (vs 8 chez Frankliniella). Vecteur du TSWV mais avec une efficacite de transmission 5 a 10 fois inferieure a F. occidentalis. Reproduction parthenogenetique (thelytoque) possible.\n\n- Thrips palmi (Karny, 1925) : famille des Thripidae. Corps de 1-1,3 mm, jaune vif uniforme. Antennes de 7 articles. Espece d'origine tropicale asiatique, en expansion en Mediterranee. Polyphage : tomate, poivron, concombre, aubergine, melon. Vecteur potentiel de Groundnut bud necrosis virus (GBNV) et d'autres tospovirus.\n\nTous les thrips ont un cycle hemimetabole modifie : oeuf -> larve L1 -> larve L2 -> prepupe -> pupe -> adulte. Les stades prepupe et pupe sont dans le SOL (ou dans les debris au sol), ce qui les rend inaccessibles aux traitements foliaires.",

        provenance: "Frankliniella occidentalis est originaire de l'ouest de l'Amerique du Nord (Californie). Elle s'est repandue mondialement depuis les annees 1980 via le commerce horticole. Thrips tabaci est cosmopolite, probablement originaire de la region mediterraneenne. Thrips palmi est originaire d'Asie du Sud et du Sud-Est, en expansion vers l'Afrique et la Mediterranee. Au Maroc, F. occidentalis est l'espece dominante sous serre dans le Souss-Massa, le Gharb et la region orientale. T. tabaci est ubiquiste. T. palmi est en expansion dans les serres les plus chaudes du Souss-Massa.",

        cycle: "1. Ponte : la femelle insere ses oeufs DANS les tissus vegetaux (feuilles, petales, sepales, fruits) grace a son ovipositeur en forme de scie. Les oeufs sont invisibles de l'exterieur. F. occidentalis pond 40 a 100 oeufs dans les tissus floraux et foliaires. Duree d'incubation : 3-5 jours a 25 degres C.\n\n2. Larves L1 et L2 : les larves eclosent sur la plante et commencent immediatement a s'alimenter. La larve L1 (0,5 mm, blanche) mue en L2 (1 mm, jaune) en 2-3 jours. Les larves L2 sont le stade le plus vorace et le plus dommageable. Elles se nourrissent dans les fleurs, sur les feuilles et sur les jeunes fruits pendant 3-5 jours. C'est pendant le stade larvaire que le thrips ACQUIERT le TSWV en se nourrissant sur une plante infectee.\n\n3. Prepupe et pupe : la larve L2 mature quitte la plante et se laisse tomber au SOL pour se transformer en prepupe puis en pupe. Ces stades sont immobiles, ne s'alimentent pas et se trouvent dans les 2-3 premiers centimetres du sol, dans les debris ou dans les plis du paillage plastique. Duree : 3-5 jours. Ces stades sont INACCESSIBLES aux traitements foliaires.\n\n4. Emergence de l'adulte : l'adulte emerge du sol, vole vers la canopee et commence a s'alimenter et a se reproduire. Les adultes vivent 30-45 jours. Les males sont haploides (issus d'oeufs non fecondes, arrhenotoquie).\n\n5. Generations : le cycle complet dure 12-18 jours a 25-30 degres C. F. occidentalis peut produire 12 a 15 generations par an sous serre au Maroc. Les generations se chevauchent completement : tous les stades sont presents simultanement.\n\n6. Transmission du TSWV : le TSWV est transmis sur le mode PERSISTANT-PROPAGATIF. Seules les LARVES (L1, debut L2) peuvent acquérir le virus en se nourrissant sur une plante infectee. Le virus se multiplie dans le corps du thrips (dans les glandes salivaires). L'adulte qui a acquis le virus au stade larvaire le transmet toute sa vie a chaque plante sur laquelle il s'alimente. Un adulte qui n'a pas acquis le virus au stade larvaire ne peut PAS l'acquerir plus tard : la transmission est liee au stade d'acquisition.",

        propagation: [
            "Vol actif des adultes : les thrips adultes sont de bons voiliers malgre leur petite taille. Ils se dispersent activement entre les plants et entre les serres voisines",
            "Transport par le vent : les thrips sont facilement emportes par les courants d'air en raison de leur faible poids. Ils peuvent etre disperses sur plusieurs centaines de metres a plusieurs kilometres",
            "Plants de pepiniere infestes : les oeufs inseres dans les tissus vegetaux et les larves sont invisibles et facilement introduces avec les plants. C'est une voie majeure d'introduction du TSWV dans les serres neuves",
            "Fleurs coupees et materiel vegetal : F. occidentalis s'est repandue mondialement via le commerce de fleurs et de plants ornementaux",
            "Adventices et cultures voisines : les thrips sont tres polyphages. F. occidentalis se reproduit sur plus de 250 especes vegetales. Les adventices fleuries autour des serres sont des reservoirs permanents de thrips ET de TSWV",
            "Pupes dans le sol : les pupes survivent entre deux cultures si le sol n'est pas traite. Elles emergent et colonisent la nouvelle plantation",
            "Fruits et recolte : les thrips peuvent etre transportes avec les fruits recoltes vers d'autres sites"
        ]
    },

    facteurs: {
        climatiques: [
            "Temperatures chaudes (optimum 25-30 degres C pour F. occidentalis). Le cycle de reproduction est accelere par la chaleur : 12 jours a 30 degres C vs 20 jours a 20 degres C. T. palmi est encore plus thermophile (optimum 28-32 degres C)",
            "Faible humidite relative (< 60 %) : les thrips sont favorises par les conditions seches. L'humidite elevee (> 80 %) ralentit leur developpement et favorise les champignons entomopathogenes (Beauveria, Metarhizium, Lecanicillium)",
            "Absence de pluie : la pluie decroche les thrips des feuilles et noie les pupes dans le sol. Les cultures sous serre sont beaucoup plus exposees",
            "Printemps et debut d'ete : pics de population au Maroc (mars-juillet). Les vols de F. occidentalis sont maximaux par temps chaud, sec et ensoleille",
            "Automne doux dans le Souss-Massa : deuxieme pic de population (septembre-novembre)",
            "Luminosite elevee : les thrips sont attires par la lumiere et les surfaces claires (jaune, blanc). Leur activite est maximale en plein jour"
        ],
        sol: [
            "Sols sableux et bien draines : facilitent la nymphose des thrips (les prepupes et pupes s'enfouissent dans les 2-3 premiers cm)",
            "Sols secs en surface : favorisent la survie des pupes. Un sol maintenu humide en surface reduit la survie des pupes de 30 a 50 %",
            "Paillage plastique noir : les thrips se nymphosent dans les plis et sous le paillage, ce qui les protege partiellement des traitements du sol",
            "Sol non desinfecte entre deux cultures : les pupes survivent et emergent sur la nouvelle plantation"
        ],
        pratiques: [
            "Culture sous serre sans filets anti-thrips (Mesh 52-78, maille 0,19-0,27 mm) : les thrips passent a travers les mailles standard anti-mouche blanche (Mesh 40-50)",
            "Presence de fleurs ornementales et d'adventices fleuries autour des serres : sources de thrips et de TSWV",
            "Absence de panneaux bleus collants pour la detection : les thrips sont attires par le bleu (contrairement aux pucerons attires par le jaune)",
            "Monoculture de solanacees sans rotation : maintien des populations et du TSWV d'un cycle a l'autre",
            "Non-elimination des plants atteints de TSWV : les plants infectes sont des sources de virus pour les thrips larves",
            "Traitements insecticides a large spectre (pyrethrinoides, organophosphores) eliminant les auxiliaires predateurs (Orius, Amblyseius) et favorisant les resistances chez F. occidentalis",
            "Non-destruction des residus de culture : les thrips et leurs pupes survivent dans les debris vegetaux",
            "Pas de desinfection du sol entre deux cycles : les pupes persistent dans les premiers centimetres"
        ],
        erreurs: [
            "Confondre les degats de thrips (taches argentees, stries) avec des degats d'acariens (ponctuations, toiles) : les thrips laissent des STRIES argentees allongees et des points noirs d'excrements, les acariens font des ponctuations fines avec des toiles de soie",
            "Ne pas detecter le TSWV a temps : les premiers symptomes viraux (taches annulaires sur feuilles, bronzage) sont souvent confondus avec une carence ou un stress. Arracher immediatement les plants suspects pour limiter la propagation",
            "Traiter uniquement le feuillage : les thrips se cachent dans les FLEURS et les pupes sont dans le SOL. Les traitements de contact sur le feuillage n'atteignent pas ces stades. Il faut des produits systemiques ou des traitements cibles dans les fleurs et au sol",
            "Utiliser des panneaux JAUNES pour pieger les thrips : le jaune attire surtout les pucerons et les mouches blanches. Les thrips sont plus attires par le BLEU. Utiliser des panneaux bleus collants pour le monitoring des thrips",
            "Utiliser uniquement des pyrethrinoides : F. occidentalis a developpe des resistances tres elevees aux pyrethrinoides dans toutes les zones de production intensive. Privilegier les spinosynes, les diamides et la lutte biologique",
            "Croire qu'un insecticide protege contre le TSWV : meme un insecticide systemique ne tue pas le thrips assez vite pour empecher la transmission du virus (qui se fait en quelques minutes d'alimentation). Seules les varietes resistantes (gene Sw-5) et la suppression des sources de virus offrent une vraie protection"
        ]
    },

    symptomes: {
        feuilles: "STADE INITIAL :\nApparition de petites taches argentees ou blanchatres, allongees, sur la face superieure des feuilles. Ces taches correspondent aux cellules videes par les piqures de nutrition des thrips. Les cellules videes se remplissent d'air, donnant un eclat argente. De minuscules points noirs (excrements) sont visibles a la loupe le long des zones de nutrition. Les thrips eux-memes (1-2 mm, allonges, jaune-brun) sont visibles en secouant une feuille au-dessus d'une surface blanche.\n\nSTADE INTERMEDIAIRE :\nLes taches argentees s'etendent et confluent, donnant de larges plages decolorees. Les jeunes feuilles terminales se deforment, se recroquevillent et se gauffrent. Un brunissement des bords foliaires (necrose) apparait en cas de forte infestation. Les excrements noirs deviennent abondants. Des degats visibles dans les fleurs ouvertes (petales decolores et stries).\n\nSTADE AVANCE :\nDefoliation partielle, avec des feuilles seches et cassantes. Si le TSWV est transmis, des symptomes viraux apparaissent : taches annulaires concentriques bronze-pourpre sur les feuilles, mosaique, deformation asymetrique, fletrissement apical. Le bronzage viral est DIFFERENT du bronzage par acariens (Aculops) : le TSWV fait des taches ANNULAIRES en cible, Aculops fait un bronzage UNIFORME et progressif de bas en haut.\n\nATTENTION : les symptomes de TSWV sont le signe d'alerte le plus important. Tout plant suspect doit etre arrache immediatement.",

        tiges: "Les tiges ne sont generalement pas la cible principale des thrips. Cependant, les jeunes pousses terminales tendres peuvent etre attaquees, provoquant une deformation et un enroulement des apex. En cas d'infection par le TSWV, des stries necrotiques brunes-pourpres peuvent apparaitre sur les tiges (streaking viral), en particulier pres des apex et des noeuds. Ces stries sont un symptome grave de TSWV et le plant doit etre arrache.",

        fruits: "Les degats sur fruits sont parmi les consequences les plus couteuses de l'attaque des thrips :\n\n- Cicatrices de ponte (oviposition) : les femelles inserent leurs oeufs dans les tissus du fruit avec leur ovipositeur. Les piqures de ponte creent de petites bosses (pustules) ou des halos clairs de 1-2 mm sur les fruits verts. A maturite, ces zones deviennent des cicatrices liégeuses surélevées.\n- Stries de nutrition argentees : les larves et adultes se nourrissant sur les jeunes fruits creent des stries argentees qui deviennent des cicatrices rugueuses et brunes a maturite.\n- Deformation des fruits : les piqures sur les tres jeunes fruits (stade nouaison) provoquent des deformations et des fruits bosseles.\n- Ghost spot (tache fantome) : anneaux blanchatres sur les fruits murs, dus aux piqures.\n- TSWV sur fruits : le virus du bronzage provoque des taches annulaires concentriques (anneaux jaunes, verts et bruns en cible) spectaculaires sur les fruits, les rendant totalement invendables. C'est le symptome le plus caractéristique du TSWV. Les fruits peuvent aussi presenter des necroses internes et une maturation irreguliere.",

        racines: "Les racines ne sont pas directement affectees par les thrips. Cependant, les stades prepupe et pupe de F. occidentalis se trouvent dans les 2-3 premiers centimetres du sol, a la base des plants. Ils ne causent pas de degats racinaires mais leur presence dans le sol rend le controle difficile (inaccessibles aux traitements foliaires). En cas d'infection par le TSWV, le virus ne provoque pas de symptomes racinaires specifiques mais l'affaiblissement general de la plante reduit l'exploration racinaire.",

        stade: "Les thrips peuvent attaquer la tomate a tous les stades, mais les periodes les plus critiques sont :\n\n- Pepiniere et jeunes plants (0-3 semaines) : les plantules sont tres sensibles. L'acquisition du TSWV a ce stade est catastrophique (perte du plant entier).\n- Floraison (4-8 semaines) : F. occidentalis se concentre dans les fleurs. Les degats sur les fleurs reduisent la nouaison. C'est aussi le moment ou les thrips peuvent transmettre le TSWV aux fruits en formation.\n- Fructification : les degats de ponte et de nutrition sur les jeunes fruits creent des cicatrices irreversibles. Les taches annulaires du TSWV sur fruits rendent la recolte invendable.\n\nAu Maroc, pics d'infestation :\n- Mars-juillet : pic printanier et estival principal, temperatures et luminosite ideales\n- Septembre-novembre : pic automnal dans le Souss-Massa\n- Population reduite en hiver (decembre-fevrier) sauf dans les serres chauffees",

        differenciation: "Acariens (Tetranychus) : ponctuations fines et regulieres (pas de stries allongees), TOILES de soie sur la face inferieure, acariens microscopiques (0,3-0,5 mm) ronds. Les thrips font des stries argentees allongees, PAS de toiles, et sont visibles a l'oeil nu (1-2 mm, allonges).\nAcariose bronzee (Aculops) : bronzage UNIFORME progressant de bas en haut, aspect huile des tiges. Le TSWV (transmis par thrips) fait des taches ANNULAIRES en cible, pas un bronzage uniforme.\nMouche blanche : insectes BLANCS, pas allonges, miellat + fumagine noire. Les thrips ne produisent pas de miellat et n'ont pas d'ailes blanches.\nCarence en potassium : jaunissement et necrose des bords des vieilles feuilles, pas de taches argentees, pas d'excrements noirs.\nVirus de la mosaique (CMV, TMV) : mosaique vert clair / vert fonce sans taches annulaires concentriques. Le TSWV a des taches en CIBLE tres caracteristiques."
    },

    lutte: {
        prevention: [
            "Installer des filets anti-thrips de maille tres fine (Mesh 52-78, soit 0,19-0,27 mm) sur toutes les ouvertures. ATTENTION : les mailles standard anti-mouche blanche (Mesh 40-50) laissent passer les thrips. La maille anti-thrips est plus fine et reduit la ventilation : prevoir une ventilation forcee compensatoire",
            "Installer des panneaux BLEUS collants pour le monitoring et le piegeage : les thrips sont plus attires par le bleu que par le jaune. 1 panneau bleu tous les 10-15 m, a hauteur de la canopee. Relever chaque semaine. Seuil d'alerte : > 10-15 thrips/panneau/semaine",
            "Utiliser des varietes de tomate resistantes au TSWV portant le gene Sw-5 : c'est la protection la plus efficace contre la virose. La plupart des varietes modernes de tomate de serre au Maroc possedent ce gene. Verifier la resistance lors du choix varietal",
            "Eliminer les adventices fleuries autour des serres dans un rayon de 30 m : les adventices sont des reservoirs de thrips ET de TSWV. Les solanacees sauvages (morelle noire, Datura) et les composees (laiteron, senocon) sont particulierement a risque",
            "Controler les plants de pepiniere a la reception : secouer les feuilles au-dessus d'une surface blanche pour detecter les thrips. Inspecter les fleurs ouvertes. Refuser les lots infestes",
            "Introduire des auxiliaires predateurs en preventif des la plantation : Amblyseius swirskii (50-100/m2) et/ou Orius laevigatus (1-2/m2). Les installer AVANT l'arrivee des thrips",
            "Pratiquer la solarisation du sol entre deux cycles (4-6 semaines sous film plastique transparent en ete) : detruit les pupes hivernant dans le sol",
            "Arracher et detruire IMMEDIATEMENT tout plant presentant des symptomes de TSWV (taches annulaires, bronzage, stries necrotiques) : chaque plant infecte est une source de virus pour les thrips",
            "Eviter les cultures intercalaires de poivron ou de laitue (tres sensibles aux thrips et au TSWV) a proximite des serres de tomate",
            "Nettoyer la serre entre deux cycles : eliminer tous les residus vegetaux, desinfecter, traiter le sol si necessaire"
        ],
        biologique: [
            "Amblyseius swirskii : acarien predateur polyvalent de reference contre les thrips sous serre. Consomme les larves L1 de thrips, les oeufs de mouche blanche et le pollen. Introduire 50 a 100 individus par m2 en preventif des la plantation, en sachets a liberation lente (1 sachet pour 2-4 plants). Se maintient grace au pollen en absence de proie. Tolerant aux hautes temperatures (35-38 degres C). Ideal pour le Souss-Massa",
            "Orius laevigatus (punaise pirate) : predateur generaliste tres efficace contre les thrips adultes et les larves L2. L'adulte (2-3 mm, noir avec des taches blanches) poignarde le thrips avec son rostre et aspire le contenu. Consomme 5-10 thrips par jour. Introduire 1-2 individus par m2 toutes les 2-3 semaines. Necessite des fleurs (pollen) pour s'etablir : installer des plantes banquieres fleuries (Alyssum, souci) dans la serre",
            "Amblyseius cucumeris : acarien predateur specifique des larves L1 de thrips. Introduire 50-100/m2 en sachets. Moins tolerant a la chaleur que A. swirskii. Peut etre utilise en complement dans les regions plus fraiches",
            "Steinernema feltiae : nematode entomopathogene applique en arrosage du sol pour tuer les prepupes et pupes de thrips dans les 2-3 premiers cm. 250 000 a 500 000 nematodes par m2. Appliquer le soir sur sol humide. Les nematodes penetrent dans les pupes et liberent des bacteries symbiontiques qui tuent l'hote en 24-48 h. Renouveler toutes les 2-3 semaines. Compatible avec tous les auxiliaires aeriens",
            "Beauveria bassiana : champignon entomopathogene. Pulverisation de spores (2-3 x 10^9 spores/mL) sur le feuillage et dans les fleurs. Les spores germent sur la cuticule du thrips et le tuent en 3-7 jours. Efficace en conditions humides (HR > 60 %). Appliquer le soir. Compatible avec Amblyseius et Orius",
            "Spinosad (Success, Spintor) : insecticide d'origine naturelle (IRAC 5). 0,2-0,4 L/ha. Tres efficace contre les thrips par ingestion et contact. Compatible agriculture biologique. Appliquer le soir pour proteger les pollinisateurs. DAR : 1-3 jours. Alterner avec d'autres methodes pour prevenir les resistances",
            "Piantes banquieres (banker plants) : installer des plants d'Alyssum maritimum (alysse maritime) ou de Calendula (souci) dans la serre. Ces plantes fleuries nourrissent les Orius avec leur pollen et les retiennent dans la serre meme quand les thrips sont peu nombreux"
        ],
        chimique: [
            "Spinetoram (Delegate 250 WG) : spinosyne de 2eme generation (IRAC 5). 0,3-0,5 kg/ha. Plus efficace et plus persistant que le spinosad. Action par ingestion et contact. Tres efficace contre F. occidentalis, y compris les populations resistantes aux pyrethrinoides. Appliquer le soir. DAR : 1 jour",
            "Cyantraniliprole (Benevia 100 OD) : diamide anthranilic (IRAC 28). 0,5-0,75 L/ha. Action par ingestion, contact et systemique. Efficace contre les thrips, les mouches blanches et les mineuses. Bonne selectivite pour les auxiliaires (Orius, Amblyseius). DAR : 1 jour",
            "Abamectine (Vertimec 018 EC) : avermectine (IRAC 6). 0,5-0,75 L/ha. Action translaminiaire. Efficace contre les larves de thrips dans les fleurs et sur le feuillage. Appliquer le soir. Compatible avec Amblyseius 7 jours apres. DAR : 3 jours",
            "Acrinathrine (Rufast 75 EW) : pyrethrinoide specifique acaricide-thripsicide (IRAC 3A). 0,4-0,6 L/ha. Formulation a base d'eau (EW) pour une meilleure penetration dans les fleurs. ATTENTION : resistances frequentes chez F. occidentalis. A utiliser avec precaution et en alternance uniquement. Toxique pour les auxiliaires. DAR : 3 jours",
            "Emamectine benzoate (Affirm 019,2 SG) : avermectine (IRAC 6). 1-1,5 kg/ha. Action par ingestion. Tres efficace contre les larves de thrips. Action translaminiaire. DAR : 3 jours",
            "Methiocarbe (Mesurol 500 SC) : carbamate (IRAC 1A). 1-1,5 L/ha. Action par contact et ingestion. Utilise principalement en appat au sol melange a du son de ble pour cibler les prepupes et pupes. ATTENTION : toxique pour les auxiliaires, les abeilles et la faune. Usage restreint",
            "STRATEGIE ANTI-RESISTANCE : F. occidentalis est connue pour developper rapidement des resistances (resistances documentees aux pyrethrinoides, aux organophosphores, aux carbamates et aux spinosynes dans certaines regions). Alterner obligatoirement les groupes IRAC : spinetoram (IRAC 5) -> cyantraniliprole (IRAC 28) -> abamectine (IRAC 6). Eviter les pyrethrinoides en premiere intention. Combiner TOUJOURS avec la lutte biologique pour reduire la pression de selection"
        ],
        mecanique: [
            "Panneaux bleus collants : les thrips sont tres attires par la couleur bleue (reflet UV specifique). Installer des panneaux bleus englues (40 x 25 cm) a raison de 1 tous les 10-15 m, a hauteur de la canopee. Fonction double : monitoring (comptage hebdomadaire) et piegeage de masse (20-30 panneaux par hectare). Plus efficace que les panneaux jaunes pour les thrips",
            "Aspersion d'eau sur le feuillage : un brouillard fin augmente l'humidite et decroche les thrips des feuilles. Efficace en complement, surtout dans les serres chaudes et seches. A repeter quotidiennement aux heures chaudes",
            "Paillage reflechissant argente au sol : la reflexion des UV desorienter les thrips ailes et reduit le taux de colonisation de 30 a 50 %. Egalement efficace contre les pucerons et les mouches blanches",
            "Elimination des fleurs non productives : les fleurs sont le principal refuge de F. occidentalis. Supprimer les bouquets floraux en exces et les fleurs fanees reduit la population. Mais attention a ne pas reduire la production",
            "Arrachage systematique des plants infectes par le TSWV : c'est la mesure la plus importante pour limiter les epidemies virales. Arracher, mettre dans un sac ferme et sortir de la serre. Ne pas secouer le plant (les thrips s'envoleraient). Remplacer par un plant sain si possible",
            "Solarisation du sol entre deux cultures : couvrir le sol humide avec un film plastique transparent pendant 4-6 semaines en ete. Les temperatures > 45 degres C dans les premiers cm du sol detruisent les pupes de thrips, ainsi que les pathogenes du sol (champignons, nematodes)"
        ]
    },

    produits: [
        {
            nom: "Delegate 250 WG (Spinetoram)",
            type: "Insecticide spinosyne anti-thrips de reference",
            matiere: "Spinetoram 250 g/kg",
            action: "Spinosyne de 2eme generation (groupe IRAC 5). Derive de la fermentation de Saccharopolyspora spinosa. Active les recepteurs nicotiniques de l'acetylcholine et potentialise l'action du GABA. Action rapide par ingestion et contact. Plus efficace et plus persistant que le spinosad (1ere generation). Tres efficace contre F. occidentalis adultes et larves.",
            application: "0,3 a 0,5 kg/ha en pulverisation foliaire. Volume de bouillie : 600-1 000 L/ha. Bien penetrer dans les fleurs ou se cachent les thrips (utiliser des buses a jet fin et un volume de bouillie eleve). Appliquer le SOIR pour proteger les pollinisateurs et les auxiliaires. Renouveler apres 7-10 jours. Maximum 3 applications par cycle.",
            precautions: "DAR : 1 jour. Toxique pour les abeilles et les bourdons pendant les 3 heures suivant l'application (appliquer le soir). Bonne selectivite pour Amblyseius swirskii, Orius et Trichogrammes apres sechage du depot. Alterner avec les diamides et les avermectines. Risque de resistance si utilise seul de maniere repetee.",
            disponibleMaroc: true
        },
        {
            nom: "Benevia 100 OD (Cyantraniliprole)",
            type: "Insecticide diamide systemique",
            matiere: "Cyantraniliprole 100 g/L",
            action: "Diamide anthranilic (groupe IRAC 28). Active les recepteurs de la ryanodine. Action par ingestion, contact et action SYSTEMIQUE (monte dans la plante par le xyleme, atteignant les thrips dans les fleurs et les nouvelles feuilles). Efficace contre les thrips, les mouches blanches et les mineuses. Egalement actif sur les larves de lepidopteres.",
            application: "0,5 a 0,75 L/ha en pulverisation foliaire ou en application racinaire (drench, 0,5 L/ha dans le systeme d'irrigation). L'application racinaire est particulierement interessante car le produit monte dans la plante et atteint les thrips dans les fleurs sans traitement foliaire. Renouveler apres 14-21 jours. Maximum 2 applications par cycle.",
            precautions: "DAR : 1 jour. Bonne selectivite pour Amblyseius swirskii et Orius laevigatus. Compatible avec les programmes IPM. Pas de resistance croisee avec les spinosynes ni les avermectines. Toxique pour les organismes aquatiques.",
            disponibleMaroc: true
        },
        {
            nom: "Vertimec 018 EC (Abamectine)",
            type: "Acaricide-insecticide translaminiaire",
            matiere: "Abamectine 18 g/L",
            action: "Avermectine (groupe IRAC 6). Active les canaux chlorure glutamate-dependants. Paralysie par hyperpolarisation. Action par ingestion et contact. Penetration translaminiaire. Efficace contre les larves de thrips, les acariens et les mineuses.",
            application: "0,5 a 0,75 L/ha en pulverisation foliaire. Volume de bouillie : 800-1 200 L/ha. Bien couvrir les fleurs et la face inferieure des feuilles. Appliquer le soir. Renouveler apres 7-10 jours. Maximum 2-3 applications par cycle.",
            precautions: "DAR : 3 jours. Toxique pour les abeilles (appliquer le soir). Compatible avec Amblyseius swirskii 7 jours apres application. Alterner avec les spinosynes et les diamides.",
            disponibleMaroc: true
        },
        {
            nom: "Amblyseius swirskii (auxiliaire predateur)",
            type: "Agent de lutte biologique - Acarien predateur polyvalent",
            matiere: "Amblyseius swirskii Athias-Henriot, adultes et nymphes",
            action: "Acarien predateur phytoseiide (0,5 mm, beige translucide). Consomme les larves L1 de thrips (3-5 par jour), les oeufs de mouche blanche, les acariens et le pollen. Se maintient dans la culture meme en absence de proie grace au pollen. Plus tolerant aux temperatures elevees (35-38 degres C) et aux faibles humidites que la plupart des autres Phytoseiidae. Ideal pour les conditions du Souss-Massa.",
            application: "Introduction preventive : 50 a 100 individus par m2 des la plantation, en sachets a liberation lente (1 sachet pour 2-4 plants). Les sachets liberent des predateurs pendant 4-6 semaines. Renouveler les sachets si necessaire. Curatif (foyers) : completer avec des lachers en vrac de 100-200/m2.",
            precautions: "Sensible aux pyrethrinoides, aux organophosphores et au soufre. Compatible avec spinetoram/spinosad (si applique le soir), cyantraniliprole (compatible), abamectine (attendre 7 jours). Ne consomme QUE les larves L1 de thrips (pas les L2 ni les adultes) : completer avec Orius pour les stades ages.",
            disponibleMaroc: true
        },
        {
            nom: "Orius laevigatus (auxiliaire predateur)",
            type: "Agent de lutte biologique - Punaise pirate predatrice",
            matiere: "Orius laevigatus (Fieber), adultes et nymphes",
            action: "Hemiptere anthocoride (punaise pirate, 2-3 mm, noir avec des taches blanches). Predateur generaliste tres efficace contre les thrips ADULTES et les larves L2 (les stades non atteints par Amblyseius). Poignarde la proie avec son rostre et aspire le contenu. Consomme 5-10 thrips adultes par jour. Se reproduit dans la culture. Les nymphes sont egalement predatrices. Se nourrit aussi de pollen, ce qui permet son maintien en absence de proie.",
            application: "Introduire 1 a 2 individus par m2 toutes les 2-3 semaines a partir de la floraison. Les adultes sont attires par les fleurs (floricole, comme F. occidentalis). Installer des plantes banquieres fleuries (Alyssum maritimum, Calendula) pour favoriser l'etablissement et la reproduction d'Orius. Distribuer les flacons le matin a l'ombre.",
            precautions: "Necessite des fleurs (pollen) pour s'etablir durablement. Moins efficace avant la floraison. Sensible aux pyrethrinoides et aux organophosphores. Compatible avec spinetoram (si applique le soir), cyantraniliprole et Bt. Les adultes volent et peuvent quitter la serre si les ouvertures ne sont pas protegees. Complementaire d'Amblyseius swirskii (A. swirskii mange les L1, Orius mange les L2 et adultes).",
            disponibleMaroc: true
        },
        {
            nom: "Steinernema feltiae (nematode entomopathogene)",
            type: "Agent de lutte biologique - Nematode du sol anti-pupes",
            matiere: "Steinernema feltiae Filipjev, juveniles infectieux",
            action: "Nematode entomopathogene applique au sol pour cibler les prepupes et pupes de thrips qui se nymphosent dans les 2-3 premiers cm. Les juveniles infectieux (JI) penetrent dans la pupe par les orifices naturels, liberent des bacteries symbiontiques (Xenorhabdus bovienii) qui tuent l'hote en 24-48 h. Les nematodes se reproduisent dans le cadavre et liberent une nouvelle generation de JI.",
            application: "250 000 a 500 000 JI par m2, dilues dans l'eau d'arrosage. Appliquer le SOIR (les nematodes sont sensibles aux UV). Maintenir le sol HUMIDE pendant 48 h apres application. Temperature du sol optimale : 15-25 degres C. Renouveler toutes les 2-3 semaines pendant les periodes de forte pression.",
            precautions: "Stocker au frais (4-8 degres C) et utiliser rapidement apres reception. Les nematodes meurent si le sol est sec ou si la temperature depasse 30 degres C. Inefficaces sur les thrips aeriens (ne ciblent que les stades au sol). Compatible avec TOUS les auxiliaires aeriens et les traitements foliaires. Non toxique pour les vertebres, les plantes et les micro-organismes du sol.",
            disponibleMaroc: true
        }
    ],

    points_cles: [
        "Le TSWV (virus du bronzage de la tomate) transmis par les thrips est le danger PRINCIPAL. C'est un virus sans traitement curatif. La protection repose sur 3 piliers : (1) varietes resistantes au TSWV (gene Sw-5), (2) arrachage immediat des plants infectes, (3) suppression des sources de virus (adventices). Les insecticides ne protegent PAS contre la transmission du TSWV car le virus est transmis en quelques minutes.",
        "F. occidentalis se cache dans les FLEURS : c'est pourquoi les traitements de contact sur le feuillage sont peu efficaces. Il faut des produits SYSTEMIQUES (cyantraniliprole en drench) ou des traitements tres penetrants (spinetoram avec un volume de bouillie eleve dans les fleurs). La lutte biologique avec Orius laevigatus (qui entre dans les fleurs) est la meilleure solution.",
        "Les pupes dans le SOL sont un angle mort de la lutte : les prepupes et pupes dans les 2-3 premiers cm du sol sont inaccessibles aux traitements foliaires. Utilisez les nematodes entomopathogenes Steinernema feltiae (250 000-500 000/m2 en arrosage) pour cibler ce stade. Solarisez le sol entre deux cultures.",
        "La strategie COMBINEE Amblyseius swirskii (50-100/m2 preventif) + Orius laevigatus (1-2/m2 a la floraison) + Steinernema feltiae (au sol) couvre TOUS les stades des thrips : A. swirskii mange les larves L1 sur les feuilles, Orius mange les L2 et adultes dans les fleurs, Steinernema tue les pupes dans le sol. C'est le programme IPM de reference.",
        "Les panneaux BLEUS collants sont indispensables pour le monitoring : les thrips sont plus attires par le bleu que par le jaune. Installez 1 panneau bleu tous les 10-15 m et comptez les captures chaque semaine. Seuil d'alerte : > 10-15 thrips/panneau/semaine. Le monitoring precoce permet d'intervenir AVANT que les populations n'explosent."
    ],

    protocole_traitement: {
        titre: "Protocole de lutte integree contre les thrips de la tomate",
        etapes: [
            {
                titre: "Etape 1 : Prevention structurelle (avant plantation)",
                description: "Choisir une variete de tomate resistante au TSWV (gene Sw-5). Solariser le sol (4-6 semaines sous film transparent en ete) pour detruire les pupes residuelles. Installer des filets anti-thrips (Mesh 52-78) sur toutes les ouvertures. Poser du paillage reflechissant argente au sol. Eliminer les adventices dans un rayon de 30 m. Installer des panneaux bleus collants (1 tous les 10-15 m) et des panneaux jaunes (mouche blanche). Controler les plants de pepiniere."
            },
            {
                titre: "Etape 2 : Lachers preventifs d'auxiliaires (plantation)",
                description: "Des la plantation, introduire Amblyseius swirskii a 50-100 individus par m2 en sachets a liberation lente (1 sachet pour 2-4 plants). Les sachets liberent des predateurs pendant 4-6 semaines. Installer des plantes banquieres fleuries (Alyssum maritimum) tous les 20-30 m pour heberger Orius et les syrphes. Des la premiere floraison, introduire Orius laevigatus (1-2/m2 toutes les 2-3 semaines). Appliquer Steinernema feltiae au sol (250 000/m2) toutes les 3 semaines."
            },
            {
                titre: "Etape 3 : Monitoring et detection precoce",
                description: "Chaque semaine, relever les panneaux bleus et compter les thrips. Seuil d'alerte : > 10-15 thrips/panneau/semaine. Secouer les fleurs au-dessus d'une surface blanche pour estimer la population floricole. Inspecter les jeunes feuilles pour les taches argentees. SURVEILLER les symptomes de TSWV : taches annulaires sur feuilles, stries necrotiques sur tiges, taches en cible sur fruits. Arracher IMMEDIATEMENT tout plant suspect de TSWV."
            },
            {
                titre: "Etape 4 : Intervention chimique raisonnee (si seuils depasses)",
                description: "Si les populations depassent les seuils et les auxiliaires ne suffisent pas : appliquer spinetoram (Delegate, 0,3-0,5 kg/ha) le soir, en penetrant bien dans les fleurs. Si forte pression : completer par cyantraniliprole (Benevia, 0,5 L/ha) en application racinaire (drench) pour une action systemique atteignant les fleurs. Alterner les modes d'action IRAC : IRAC 5 (spinosynes) -> IRAC 28 (diamides) -> IRAC 6 (avermectines). Reintroduire les auxiliaires 7 jours apres le traitement."
            },
            {
                titre: "Etape 5 : Gestion du TSWV et fin de cycle",
                description: "Continuer la surveillance du TSWV pendant toute la culture. Arracher et detruire tout plant infecte SANS le secouer (mettre dans un sac et fermer avant de sortir). Le taux de plants arraches ne devrait pas depasser 2-5 % avec des varietes Sw-5 resistantes. En fin de culture : arracher tous les plants, nettoyer la serre, solariser le sol. Analyser le registre de monitoring pour evaluer l'efficacite du programme et l'adapter au cycle suivant."
            }
        ]
    },

    faq: [
        {
            question: "Les varietes de tomate resistantes au TSWV (gene Sw-5) sont-elles fiables ?",
            reponse: "Oui, le gene Sw-5 confere une tres bonne resistance au TSWV et est la base de la protection contre ce virus. La plupart des varietes modernes de tomate de serre au Maroc portent ce gene. CEPENDANT, des souches de TSWV capables de contourner la resistance Sw-5 (souches RB = resistance-breaking) ont ete detectees en Italie, en Espagne et dans d'autres pays mediterraneens. Au Maroc, ces souches RB sont encore rares mais le risque existe. Il est donc ESSENTIEL de ne pas se reposer uniquement sur la resistance genetique : combiner varietes resistantes + lutte contre les thrips + arrachage des plants infectes + suppression des adventices pour une protection durable."
        },
        {
            question: "Pourquoi les insecticides ne protegent-ils pas contre le TSWV ?",
            reponse: "Le TSWV est transmis sur le mode PERSISTANT-PROPAGATIF. Une fois que le thrips adulte porte le virus (acquis au stade larvaire), il le transmet a CHAQUE plante sur laquelle il se nourrit, et cela en quelques MINUTES d'alimentation. Meme si l'insecticide tue le thrips apres quelques heures, le virus a deja ete injecte dans la plante. Il faudrait un produit qui empeche le thrips de piquer (repulsif total) ou qui le tue instantanement au contact de la plante, ce qui n'existe pas avec les insecticides actuels. C'est pourquoi les BARRIERES PHYSIQUES (filets, paillage reflechissant) et la RESISTANCE GENETIQUE (Sw-5) sont les seules vrais protections. Les insecticides reduisent les populations de thrips (donc le nombre de vecteurs) mais ne protegent pas individuellement chaque plant."
        },
        {
            question: "Comment combiner Amblyseius swirskii et Orius laevigatus contre les thrips ?",
            reponse: "Ces deux auxiliaires sont parfaitement complementaires car ils ciblent des stades DIFFERENTS du thrips : Amblyseius swirskii (0,5 mm) consomme les larves L1 (tres petites, sur les feuilles et les tiges). Il est tres efficace en preventif mais ne peut pas manger les thrips adultes ni les grosses larves L2. Orius laevigatus (2-3 mm) est capable de capturer et tuer les thrips ADULTES et les larves L2 (stades plus gros). Il chasse dans les fleurs, exactement la ou se concentre F. occidentalis. PROGRAMME COMBINE : (1) Plantation : A. swirskii 50-100/m2 en sachets. (2) Premiere floraison : ajouter Orius 1-2/m2 + plantes banquieres fleuries (Alyssum). (3) Sol : Steinernema feltiae toutes les 3 semaines pour les pupes. Ce programme couvre les larves L1 (Amblyseius), les L2 et adultes (Orius), et les pupes (Steinernema) = TOUS les stades du thrips."
        },
        {
            question: "Comment distinguer les symptomes du TSWV de ceux de l'acariose bronzee (Aculops) ?",
            reponse: "La confusion est frequente car les deux provoquent un bronzage du feuillage, mais les symptomes sont bien differents : (1) TSWV (virus transmis par thrips) : taches ANNULAIRES concentriques (motif en cible ou en oeil de boeuf) bronze-pourpre sur les feuilles. Sur les fruits : taches annulaires spectaculaires jaune-vert-brun en cible. Stries necrotiques sur les tiges. Symptomes souvent ASYMETRIQUES sur la plante. (2) Acariose bronzee (Aculops lycopersici) : bronzage UNIFORME et PROGRESSIF, commencant par les TIGES (aspect verni, brillant, bronze). Progression reguliere de BAS en HAUT. Pas de taches annulaires. Les tiges perdent leurs poils (trichomes). Pour confirmer : examinez les tiges a la loupe x20 (Aculops : acariens vermiformes microscopiques sur les tiges bronzees) et cherchez des thrips dans les fleurs (TSWV : thrips presents). En cas de doute, un test ELISA en laboratoire confirme la presence ou l'absence du TSWV."
        }
    ],

    ressources: [
        "INRA Maroc - Les thrips des cultures maraicheres sous serre : biologie, identification et lutte integree",
        "ONSSA - Liste des insecticides homologues contre les thrips sur tomate au Maroc",
        "Riley D.G. et al. (2011) - Thrips vectors of tospoviruses. Journal of Integrated Pest Management 2:1, 1-10",
        "Kirk W.D.J. & Terry L.I. (2003) - The spread of the western flower thrips Frankliniella occidentalis. Agricultural and Forest Entomology 5:301-310",
        "IRAC (Insecticide Resistance Action Committee) - Gestion de la resistance chez Frankliniella occidentalis : mecanismes et strategies",
        "Mouden S. et al. (2017) - Integrated pest management in western flower thrips: past, present and future. Pest Management Science 73:813-822",
        "Koppert Biological Systems - Guide technique : lutte biologique contre les thrips avec Amblyseius swirskii, Orius laevigatus et Steinernema feltiae",
        "IAV Hassan II - Cours d'entomologie appliquee : les thrips des cultures sous serre au Maroc",
        "Pappu H.R. et al. (2009) - Biology and epidemiology of Tomato spotted wilt virus. Annual Review of Phytopathology 47:267-298",
        "EPPO - Fiches de donnees : Frankliniella occidentalis, Thrips tabaci, Tomato spotted wilt tospovirus"
    ]
};
