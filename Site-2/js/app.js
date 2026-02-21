/**
 * APPLICATION PRINCIPALE - Classe Numerique Agricole
 *
 * Gere :
 * - Navigation et menu mobile
 * - Scroll animations (Intersection Observer)
 * - Page d'accueil : affichage des maladies en vedette
 * - Page modules : grille des maladies + filtres
 * - Page maladie : rendu dynamique du contenu complet (10 sections)
 * - Navigation entre maladies (precedent/suivant)
 * - Sections enrichies : points cles, protocole, FAQ
 */

document.addEventListener('DOMContentLoaded', function () {

    // ============================================
    // UTILITAIRE : convertir les \n en <br> et les paragraphes
    // ============================================
    function formatText(text) {
        if (!text) return '';
        // Convertir les doubles sauts de ligne en paragraphes
        var paragraphs = text.split('\n\n');
        if (paragraphs.length > 1) {
            return paragraphs.map(function (p) {
                return '<p>' + p.replace(/\n/g, '<br>') + '</p>';
            }).join('');
        }
        // Convertir les simples sauts de ligne en <br>
        return '<p>' + text.replace(/\n/g, '<br>') + '</p>';
    }

    // ============================================
    // 1. NAVIGATION
    // ============================================

    var navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 80) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    var mobileToggle = document.getElementById('mobileToggle');
    var navMenu = document.getElementById('navMenu');
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function () {
            navMenu.classList.toggle('open');
        });
        navMenu.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                navMenu.classList.remove('open');
            });
        });
    }

    // ============================================
    // 2. SCROLL ANIMATIONS (Intersection Observer)
    // ============================================

    var fadeElements = document.querySelectorAll('.fade-in');
    if (fadeElements.length > 0 && 'IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        fadeElements.forEach(function (el) { observer.observe(el); });
    } else {
        fadeElements.forEach(function (el) { el.classList.add('visible'); });
    }

    // ============================================
    // 3. PAGE D'ACCUEIL - Maladies en vedette
    // ============================================

    var featuredContainer = document.getElementById('featured-diseases');
    if (featuredContainer && typeof MALADIES_DATA !== 'undefined') {
        var featured = ['mildiou', 'tuta-absoluta', 'fusariose'];
        var html = '';
        featured.forEach(function (id) {
            var m = MALADIES_DATA.find(function (d) { return d.id === id; });
            if (m) { html += renderDiseaseCard(m); }
        });
        featuredContainer.innerHTML = html;
    }

    // ============================================
    // 4. PAGE MODULES - Grille + Filtres
    // ============================================

    var diseasesGrid = document.getElementById('diseases-grid');
    var filtersContainer = document.getElementById('filters');

    if (diseasesGrid && typeof MALADIES_DATA !== 'undefined') {
        renderDiseasesGrid('all');
        if (filtersContainer) {
            filtersContainer.addEventListener('click', function (e) {
                if (e.target.classList.contains('filter-btn')) {
                    filtersContainer.querySelectorAll('.filter-btn').forEach(function (btn) {
                        btn.classList.remove('active');
                    });
                    e.target.classList.add('active');
                    renderDiseasesGrid(e.target.getAttribute('data-filter'));
                }
            });
        }
    }

    function renderDiseasesGrid(filter) {
        if (!diseasesGrid) return;
        var filtered = filter === 'all' ? MALADIES_DATA : MALADIES_DATA.filter(function (m) { return m.type === filter; });
        var html = '';
        filtered.forEach(function (m) { html += renderDiseaseCard(m); });
        diseasesGrid.innerHTML = html;
    }

    // ============================================
    // 5. RENDU CARTE MALADIE
    // ============================================

    function renderDiseaseCard(m) {
        var badgeClass = 'badge-' + m.type;
        var typeLabels = { 'fongique': 'Fongique', 'bacterienne': 'Bacterienne', 'virale': 'Virale', 'ravageur': 'Ravageur', 'carence': 'Carence', 'physiologique': 'Physiologique' };
        var typeLabel = typeLabels[m.type] || m.type;
        // Compter le nombre de sections disponibles
        var sectionCount = 7;
        if (m.points_cles) sectionCount++;
        if (m.protocole_traitement) sectionCount++;
        if (m.faq) sectionCount++;

        return '<a href="maladie.html?id=' + m.id + '" class="disease-card">' +
            '<div class="disease-card-image">' +
            '<img src="img/maladies/' + m.id + '.jpg" alt="' + m.nom + '" class="disease-card-photo" onerror="this.style.display=\'none\';this.nextElementSibling.removeAttribute(\'hidden\');">' +
            '<div class="disease-card-placeholder" hidden>' +
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" class="placeholder-camera-icon"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>' +
            '<span class="placeholder-text">Photo a venir</span>' +
            '</div>' +
            '</div>' +
            '<div class="disease-card-body">' +
            '<span class="badge ' + badgeClass + '">' + typeLabel + '</span>' +
            '<h3 class="disease-card-title">' + m.nom + '</h3>' +
            '<p class="disease-card-desc">' + m.resumeCourt.substring(0, 180) + '...</p>' +
            '<div class="disease-card-footer">' +
            '<span class="disease-card-meta">&#128218; ' + sectionCount + ' sections</span>' +
            '<span class="disease-card-link">Etudier &#8594;</span>' +
            '</div>' +
            '</div>' +
            '</a>';
    }

    // ============================================
    // 6. PAGE DETAIL MALADIE (version enrichie)
    // ============================================

    var diseaseHeader = document.getElementById('disease-header');
    var diseaseContent = document.getElementById('disease-content');
    var tocList = document.getElementById('toc-list');
    var breadcrumbCurrent = document.getElementById('breadcrumb-current');

    if (diseaseHeader && diseaseContent && typeof MALADIES_DATA !== 'undefined') {
        var params = new URLSearchParams(window.location.search);
        var diseaseId = params.get('id');

        if (!diseaseId) { window.location.href = 'modules.html'; return; }

        var maladie = MALADIES_DATA.find(function (m) { return m.id === diseaseId; });
        if (!maladie) {
            diseaseHeader.innerHTML = '<div style="text-align:center;padding:3rem;"><h2>Maladie non trouvee</h2><p>Retournez aux <a href="modules.html" style="color:var(--primary);">modules</a>.</p></div>';
            return;
        }

        document.title = maladie.nom + ' | Classe Numerique Agricole';
        if (breadcrumbCurrent) { breadcrumbCurrent.textContent = maladie.nom; }

        var badgeClass = 'badge-' + maladie.type;
        var typeLabels = { 'fongique': 'Fongique', 'bacterienne': 'Bacterienne', 'virale': 'Virale', 'ravageur': 'Ravageur', 'carence': 'Carence' };

        // --- HEADER ---
        diseaseHeader.innerHTML =
            '<div>' +
            '<span class="badge ' + badgeClass + '" style="margin-bottom:1rem;">' + (typeLabels[maladie.type] || maladie.type) + '</span>' +
            '<h1 class="disease-detail-title">' + maladie.nom + '</h1>' +
            '<p class="disease-detail-subtitle"><em>' + maladie.nomScientifique + '</em></p>' +
            '<p class="disease-detail-subtitle">' + maladie.resumeCourt + '</p>' +
            '<div class="disease-key-points">' +
            '<div class="disease-key-point"><span class="kp-icon">&#127758;</span><span><strong>Cultures :</strong> ' + maladie.cultures.join(', ') + '</span></div>' +
            '<div class="disease-key-point"><span class="kp-icon">&#129516;</span><span><strong>Type :</strong> ' + (typeLabels[maladie.type] || maladie.type) + '</span></div>' +
            '<div class="disease-key-point"><span class="kp-icon">&#128218;</span><span><strong>Module complet :</strong> Contenu detaille avec protocoles et FAQ</span></div>' +
            '</div>' +
            '</div>' +
            '<div class="disease-image-area">' +
            '<img src="img/maladies/' + maladie.id + '.jpg" alt="' + maladie.nom + '" class="disease-hero-photo" onerror="this.style.display=\'none\';this.nextElementSibling.removeAttribute(\'hidden\');">' +
            '<div class="disease-placeholder" hidden>' +
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" class="placeholder-camera-icon placeholder-camera-large"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>' +
            '<div class="placeholder-label">Photo a venir</div>' +
            '</div>' +
            '</div>';

        // --- TABLE DES MATIERES (dynamique selon les sections presentes) ---
        var sections = [
            { id: 'presentation', icon: '&#129516;', label: 'Presentation generale' },
            { id: 'origine', icon: '&#127758;', label: 'Origine de la maladie' },
            { id: 'facteurs', icon: '&#127777;', label: 'Facteurs favorisants' },
            { id: 'symptomes', icon: '&#128270;', label: 'Symptomes detailles' },
            { id: 'lutte', icon: '&#128737;', label: 'Methodes de lutte' },
            { id: 'produits', icon: '&#129514;', label: 'Produits recommandes' }
        ];
        if (maladie.points_cles) {
            sections.push({ id: 'points-cles', icon: '&#11088;', label: 'Points cles a retenir' });
        }
        if (maladie.protocole_traitement) {
            sections.push({ id: 'protocole', icon: '&#128203;', label: 'Protocole de traitement' });
        }
        if (maladie.faq) {
            sections.push({ id: 'faq', icon: '&#10067;', label: 'Questions frequentes' });
        }
        sections.push({ id: 'ressources', icon: '&#128218;', label: 'Ressources' });

        if (tocList) {
            var tocHtml = '';
            sections.forEach(function (s) {
                tocHtml += '<a href="#section-' + s.id + '">' + s.icon + ' ' + s.label + '</a>';
            });
            tocList.innerHTML = tocHtml;
        }

        // --- CONTENU PRINCIPAL ---
        var contentHtml = '';

        // === Section 1 : Presentation ===
        contentHtml += '<div class="disease-section" id="section-presentation">';
        contentHtml += '<h2 class="disease-section-title"><span class="section-icon">&#129516;</span> Presentation generale</h2>';
        contentHtml += formatText(maladie.presentation.description);
        contentHtml += '<div class="alert-box alert-box-info"><span>&#9432;</span><div><strong>Importance :</strong> ' + maladie.presentation.importance + '</div></div>';
        if (maladie.presentation.historique) {
            contentHtml += '<h4>&#128214; Historique</h4>';
            contentHtml += formatText(maladie.presentation.historique);
        }
        if (maladie.presentation.impact_economique) {
            contentHtml += '<h4>&#128176; Impact economique</h4>';
            contentHtml += formatText(maladie.presentation.impact_economique);
        }
        contentHtml += '</div>';

        // === Section 2 : Origine ===
        contentHtml += '<div class="disease-section" id="section-origine">';
        contentHtml += '<h2 class="disease-section-title"><span class="section-icon">&#127758;</span> Origine de la maladie</h2>';
        contentHtml += '<h4>Agent pathogene</h4>';
        contentHtml += formatText(maladie.origine.agent);
        contentHtml += '<h4>Provenance</h4>';
        contentHtml += formatText(maladie.origine.provenance);
        contentHtml += '<h4>Cycle de developpement</h4>';
        contentHtml += formatText(maladie.origine.cycle);
        contentHtml += '<h4>Modes de propagation</h4><ul>';
        maladie.origine.propagation.forEach(function (item) { contentHtml += '<li>' + item + '</li>'; });
        contentHtml += '</ul></div>';

        // === Section 3 : Facteurs favorisants ===
        contentHtml += '<div class="disease-section" id="section-facteurs">';
        contentHtml += '<h2 class="disease-section-title"><span class="section-icon">&#127777;</span> Facteurs favorisants</h2>';
        contentHtml += '<h4>&#127777; Conditions climatiques</h4><ul>';
        maladie.facteurs.climatiques.forEach(function (item) { contentHtml += '<li>' + item + '</li>'; });
        contentHtml += '</ul>';
        contentHtml += '<h4>&#127793; Sol</h4><ul>';
        maladie.facteurs.sol.forEach(function (item) { contentHtml += '<li>' + item + '</li>'; });
        contentHtml += '</ul>';
        contentHtml += '<h4>&#128104;&#8205;&#127806; Pratiques culturales a risque</h4><ul>';
        maladie.facteurs.pratiques.forEach(function (item) { contentHtml += '<li>' + item + '</li>'; });
        contentHtml += '</ul>';
        contentHtml += '<div class="alert-box alert-box-warning"><span>&#9888;</span><div><strong>Erreurs frequentes des agriculteurs :</strong><ul style="margin-top:0.5rem;margin-bottom:0;">';
        maladie.facteurs.erreurs.forEach(function (item) { contentHtml += '<li>' + item + '</li>'; });
        contentHtml += '</ul></div></div></div>';

        // === Section 4 : Symptomes detailles ===
        contentHtml += '<div class="disease-section" id="section-symptomes">';
        contentHtml += '<h2 class="disease-section-title"><span class="section-icon">&#128270;</span> Symptomes detailles</h2>';
        contentHtml += '<h4>&#127811; Feuilles</h4>';
        contentHtml += formatText(maladie.symptomes.feuilles);
        contentHtml += '<h4>&#127793; Tiges</h4>';
        contentHtml += formatText(maladie.symptomes.tiges);
        contentHtml += '<h4>&#127813; Fruits</h4>';
        contentHtml += formatText(maladie.symptomes.fruits);
        contentHtml += '<h4>&#129716; Racines</h4>';
        contentHtml += formatText(maladie.symptomes.racines);
        contentHtml += '<h4>&#128197; Stade d\'apparition</h4>';
        contentHtml += formatText(maladie.symptomes.stade);
        contentHtml += '<div class="alert-box alert-box-info"><span>&#128161;</span><div><strong>Differenciation avec d\'autres maladies :</strong><br>' + maladie.symptomes.differenciation.replace(/\n/g, '<br>') + '</div></div>';
        contentHtml += '</div>';

        // === Section 5 : Methodes de lutte ===
        contentHtml += '<div class="disease-section" id="section-lutte">';
        contentHtml += '<h2 class="disease-section-title"><span class="section-icon">&#128737;</span> Methodes de lutte</h2>';
        contentHtml += '<h4>&#9989; Prevention (bonnes pratiques culturales)</h4><ul>';
        maladie.lutte.prevention.forEach(function (item) { contentHtml += '<li>' + item + '</li>'; });
        contentHtml += '</ul>';
        contentHtml += '<h4>&#127793; Lutte biologique</h4><ul>';
        maladie.lutte.biologique.forEach(function (item) { contentHtml += '<li>' + item + '</li>'; });
        contentHtml += '</ul>';
        contentHtml += '<h4>&#129514; Lutte chimique</h4><ul>';
        maladie.lutte.chimique.forEach(function (item) { contentHtml += '<li>' + item + '</li>'; });
        contentHtml += '</ul>';
        contentHtml += '<h4>&#128295; Lutte mecanique</h4><ul>';
        maladie.lutte.mecanique.forEach(function (item) { contentHtml += '<li>' + item + '</li>'; });
        contentHtml += '</ul></div>';

        // === Section 6 : Produits recommandes ===
        contentHtml += '<div class="disease-section" id="section-produits">';
        contentHtml += '<h2 class="disease-section-title"><span class="section-icon">&#129514;</span> Produits agricoles recommandes</h2>';
        // Afficher chaque produit en carte individuelle pour plus de lisibilite
        maladie.produits.forEach(function (p) {
            contentHtml += '<div class="practice-card" style="border-left-color:var(--primary);margin-bottom:1.5rem;">';
            contentHtml += '<h3 class="practice-card-title">&#129514; ' + p.nom + '</h3>';
            contentHtml += '<p style="margin-bottom:0.5rem;"><span class="badge" style="font-size:0.8rem;padding:0.25rem 0.6rem;">' + p.type + '</span>';
            if (p.disponibleMaroc) {
                contentHtml += ' <span class="badge badge-fongique" style="font-size:0.8rem;padding:0.25rem 0.6rem;background:rgba(39,174,96,0.1);border-color:rgba(39,174,96,0.3);color:#27ae60;">&#127474;&#127462; Disponible au Maroc</span>';
            }
            contentHtml += '</p>';
            contentHtml += '<p><strong>Matiere active :</strong> ' + p.matiere + '</p>';
            contentHtml += '<p><strong>Mode d\'action :</strong> ' + p.action + '</p>';
            contentHtml += '<p><strong>Application :</strong> ' + p.application + '</p>';
            contentHtml += '<div class="alert-box alert-box-warning" style="margin-top:0.75rem;margin-bottom:0;"><span>&#9888;</span><div><strong>Precautions :</strong> ' + p.precautions + '</div></div>';
            contentHtml += '</div>';
        });
        var prodMaroc = maladie.produits.filter(function (p) { return p.disponibleMaroc; });
        if (prodMaroc.length > 0) {
            contentHtml += '<div class="alert-box alert-box-success"><span>&#127474;&#127462;</span><div><strong>Disponibilite au Maroc :</strong> ' + prodMaroc.length + ' produit(s) sur ' + maladie.produits.length + ' sont disponibles ou courants au Maroc. Verifiez toujours l\'homologation aupres de l\'ONSSA avant utilisation.</div></div>';
        }
        contentHtml += '</div>';

        // === Section 7 : Points cles (si presente) ===
        if (maladie.points_cles && maladie.points_cles.length > 0) {
            contentHtml += '<div class="disease-section" id="section-points-cles">';
            contentHtml += '<h2 class="disease-section-title"><span class="section-icon">&#11088;</span> Points cles a retenir</h2>';
            contentHtml += '<div style="display:flex;flex-direction:column;gap:1rem;">';
            maladie.points_cles.forEach(function (point, idx) {
                contentHtml += '<div class="alert-box alert-box-success" style="margin:0;"><span style="font-size:1.5rem;font-weight:700;color:var(--primary);">' + (idx + 1) + '</span><div>' + point + '</div></div>';
            });
            contentHtml += '</div></div>';
        }

        // === Section 8 : Protocole de traitement (si present) ===
        if (maladie.protocole_traitement) {
            contentHtml += '<div class="disease-section" id="section-protocole">';
            contentHtml += '<h2 class="disease-section-title"><span class="section-icon">&#128203;</span> ' + maladie.protocole_traitement.titre + '</h2>';
            contentHtml += '<div class="timeline">';
            maladie.protocole_traitement.etapes.forEach(function (etape) {
                contentHtml += '<div class="timeline-item">';
                contentHtml += '<h3 class="timeline-item-title">' + etape.titre + '</h3>';
                contentHtml += '<p class="timeline-item-text">' + etape.description + '</p>';
                contentHtml += '</div>';
            });
            contentHtml += '</div></div>';
        }

        // === Section 9 : FAQ (si presente) ===
        if (maladie.faq && maladie.faq.length > 0) {
            contentHtml += '<div class="disease-section" id="section-faq">';
            contentHtml += '<h2 class="disease-section-title"><span class="section-icon">&#10067;</span> Questions frequentes</h2>';
            maladie.faq.forEach(function (item) {
                contentHtml += '<div class="practice-card" style="border-left-color:var(--accent);margin-bottom:1rem;">';
                contentHtml += '<h3 class="practice-card-title" style="color:var(--accent);">&#10067; ' + item.question + '</h3>';
                contentHtml += '<p class="practice-card-text">' + item.reponse + '</p>';
                contentHtml += '</div>';
            });
            contentHtml += '</div>';
        }

        // === Section 10 : Ressources ===
        contentHtml += '<div class="disease-section" id="section-ressources">';
        contentHtml += '<h2 class="disease-section-title"><span class="section-icon">&#128218;</span> Ressources complementaires</h2>';
        contentHtml += '<p>Pour approfondir vos connaissances, consultez les sources suivantes :</p>';
        maladie.ressources.forEach(function (r) {
            contentHtml += '<div class="resource-card" style="margin-bottom:0.75rem;"><div class="resource-card-icon">&#128214;</div><div><p class="resource-card-text" style="margin:0;">' + r + '</p></div></div>';
        });
        contentHtml += '<div class="alert-box alert-box-warning" style="margin-top:1.5rem;"><span>&#9888;</span><div>Les informations presentees ont une vocation educative et informative. Elles ne remplacent pas l\'expertise d\'un agronome de terrain. Pour tout probleme specifique, consultez un professionnel qualifie. Respectez toujours la reglementation en vigueur concernant l\'utilisation des produits phytosanitaires.</div></div>';
        contentHtml += '</div>';

        diseaseContent.innerHTML = contentHtml;

        // --- NAVIGATION PRECEDENT / SUIVANT ---
        var prevBtn = document.getElementById('prev-disease');
        var nextBtn = document.getElementById('next-disease');
        if (prevBtn && nextBtn) {
            var currentIndex = MALADIES_DATA.findIndex(function (m) { return m.id === diseaseId; });
            if (currentIndex > 0) {
                var prev = MALADIES_DATA[currentIndex - 1];
                prevBtn.href = 'maladie.html?id=' + prev.id;
                prevBtn.textContent = '\u2190 ' + prev.nom;
                prevBtn.style.visibility = 'visible';
            }
            if (currentIndex < MALADIES_DATA.length - 1) {
                var next = MALADIES_DATA[currentIndex + 1];
                nextBtn.href = 'maladie.html?id=' + next.id;
                nextBtn.textContent = next.nom + ' \u2192';
                nextBtn.style.visibility = 'visible';
            }
        }

        // --- HIGHLIGHT TOC on scroll ---
        if (tocList) {
            var tocLinks = tocList.querySelectorAll('a');
            var diseaseSections = diseaseContent.querySelectorAll('.disease-section');
            window.addEventListener('scroll', function () {
                var scrollPos = window.scrollY + 120;
                diseaseSections.forEach(function (section, index) {
                    if (section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
                        tocLinks.forEach(function (link) { link.classList.remove('active'); });
                        if (tocLinks[index]) { tocLinks[index].classList.add('active'); }
                    }
                });
            });
        }
    }

});
