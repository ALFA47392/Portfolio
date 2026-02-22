function renderHome() {
    // Scroll en haut
    window.scrollTo(0, 0);
    // Mise à jour de la nav active
    setActiveNav('nav-home');

    content.innerHTML = `
        <section class="page-padding hero">
            <img src="images/flavien.png" alt="Flavien Alcazar" class="hero-img">
            <div>
                <h1>FLAVIEN<br><span>ALCAZAR</span></h1>
                <p style="font-size: 1.4rem; color: var(--text-dim); margin: 1.5rem 0;">
                    Étudiant en BUT 3 AGED à l'IUT Paul Sabatier.<br>
                    Spécialisé en Administration, Gestion et Exploitation des Données.<br>
                    Futur Data Analyst orienté Business Intelligence.
                </p>
                <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                    <span class="badge">Disponibilité Stage : Mars - Juin 2026</span>
                </div>
                <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                    <span class="badge">Disponibilité Alternance : Septembre 2026 - Juin 2028</span>
                </div>

                <div style="margin-top: 2.5rem; display: flex; gap: 1.5rem;">
                    <a href="images/CV_Stage_Alcazar_Flavien.pdf" download style="text-decoration: none;">
                        <div class="badge" style="background: var(--accent); color: #000; padding: 1rem 2rem; font-size: 0.9rem; cursor: pointer; transition: 0.3s;" onmouseover="this.style.opacity='0.8'" onmouseout="this.style.opacity='1'">
                            Téléchargez mon CV
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/flavien-alcazar/" target="_blank" style="text-decoration: none;">
                        <div class="badge" style="background: #0077b5; color: #fff; padding: 1rem 2rem; font-size: 0.9rem; cursor: pointer; transition: 0.3s;" onmouseover="this.style.opacity='0.8'" onmouseout="this.style.opacity='1'">
                            LinkedIn
                        </div>
                    </a>

                    <a href="https://github.com/ALFA47392" target="_blank" style="text-decoration: none;">
                    <div class="badge" style="background: var(--card); color: var(--text); padding: 1rem 2rem; font-size: 0.9rem; cursor: pointer; transition: 0.3s; border: 1px solid var(--border);" onmouseover="this.style.opacity='0.8'" onmouseout="this.style.opacity='1'">                            GitHub
                        </div>
                    </a>
                </div>
            </div>
        </section>

        <section class="page-padding" style="background: var(--card); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);">
            <div style="max-width: 900px; margin: 0 auto;">
                <h3 style="font-size: 2.5rem; margin-bottom: 2.5rem;">QUI <span>SUIS-JE ?</span></h3>
                
                <div style="display: flex; flex-direction: column; gap: 2rem; line-height: 1.8; color: var(--text-dim); font-size: 1.1rem;">
                    
                    <p>
                        L'informatique a toujours été pour moi un terrain de jeu fascinant. J'ai toujours été captivé par la manière dont la logique pouvait résoudre des problèmes concrets. Cette curiosité ne m'a jamais quitté : elle m'a mené du lycée jusqu'à mon BUT en parcours AGED, où j'ai appris à structurer, sécuriser et exploiter la donnée pour en extraire de la valeur.
                    </p>

                    <p>
                        À côté de cet univers numérique, mon caractère s'est forgé dans l'effort brut. Je pratique l'aviron à haut niveau depuis 5 ans, ce qui m'a inculqué mes valeurs fondamentales. Être en équipe de France m'a appris que la réussite est le fruit d'une détermination quotidienne, d'une communication sans faille et d'un esprit d'équipe indestructible.
                    </p>

                    <div style="background: rgba(0, 242, 255, 0.03); padding: 2rem; border-radius: 24px; border: 1px dashed var(--accent); margin: 1rem 0;">
                        <h4 style="color: var(--text); margin-bottom: 1rem; font-size: 1.3rem;">Mes ambitions</h4>
                        <p>
                            Aujourd'hui, je souhaite mettre cette énergie au service de la Data Analyse. Mon projet est d'approfondir mes compétences en Master ou en École d'Ingénieur, avec une volonté forte de réaliser ce cursus en alternance. Je cherche à allier ma passion pour l'informatique à la réalité du terrain pour devenir un expert capable de transformer les données en leviers stratégiques.
                        </p>
                    </div>
                    <h4 style="color: var(--text); font-size: 1.2rem; margin-top: 1rem; margin-bottom: 0;">
                        Ce qui me caractérise :
                    </h4>
                    <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin-top: 1rem;">
                        <div class="card" style="padding: 1.5rem; cursor: default; border-left: 4px solid var(--accent);">
                            <h5 style="color: var(--text); margin-bottom: 0.5rem;">Détermination</h5>

                        </div>
                        <div class="card" style="padding: 1.5rem; cursor: default; border-left: 4px solid var(--accent);">
                            <h5 style="color: var(--text); margin-bottom: 0.5rem;">Esprit d'équipe</h5>

                        </div>
                         <div class="card" style="padding: 1.5rem; cursor: default; border-left: 4px solid var(--accent);">
                            <h5 style="color: var(--text); margin-bottom: 0.5rem;">Adaptabilité</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="page-padding" style="border-top: 1px solid var(--border);">
            <h3 style="font-size: 2.5rem; margin-bottom: 3rem; text-align: center;">ME <span>CONTACTER.</span></h3>
            
<div style="max-width: 800px; margin: 0 auto;">
    <form action="https://formspree.io/f/xgokrrvg" method="POST" style="display: flex; flex-direction: column; gap: 1.5rem;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
            <input type="text" name="name" placeholder="Votre Nom" required 
                style="padding: 1rem; border-radius: 12px; font-family: inherit; background: var(--input-bg); border: 1px solid var(--border); color: var(--text);">
            <input type="email" name="email" placeholder="Votre Email" required 
                style="padding: 1rem; border-radius: 12px; font-family: inherit; background: var(--input-bg); border: 1px solid var(--border); color: var(--text);">
        </div>
        <input type="text" name="subject" placeholder="Objet du message" required 
            style="padding: 1rem; border-radius: 12px; font-family: inherit; background: var(--input-bg); border: 1px solid var(--border); color: var(--text);">
        <textarea name="message" placeholder="Votre message..." rows="6" required 
            style="padding: 1rem; border-radius: 12px; font-family: inherit; resize: none; background: var(--input-bg); border: 1px solid var(--border); color: var(--text);"></textarea>
        
        <button type="submit" class="badge" 
            style="background: var(--accent); color: #000; padding: 1rem; border: none; cursor: pointer; font-size: 1rem; align-self: center; width: 200px; transition: 0.3s;"
            onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
            ENVOYER
        </button>
    </form>
</div>

            <div class="grid" style="margin-top: 4rem; opacity: 0.8;">
                <div class="card" style="text-align: center; cursor: default; padding: 1.5rem;">
                    <h4 style="color: var(--accent); margin-bottom: 0.5rem;">EMAIL</h4>
                    <p style="color: var(--text-dim); font-size: 0.9rem;">alcazar.flavien47@gmail.com</p>
                </div>
                <div class="card" style="text-align: center; cursor: default; padding: 1.5rem;">
                    <h4 style="color: var(--accent); margin-bottom: 0.5rem;">LOCALISATION</h4>
                    <p style="color: var(--text-dim); font-size: 0.9rem;">Toulouse</p>
                </div>
            </div>

            <p style="text-align: center; margin-top: 5rem; font-size: 0.8rem; color: var(--text-dim); opacity: 0.4;">
                © 2026 Flavien Alcazar 
            </p>
        </section>
    `;
}
function renderExpertise() {
    // Scroll en haut
    window.scrollTo(0, 0);
    // Mise à jour de la nav active
    setActiveNav('nav-parcours');

    content.innerHTML = `
<section style="background: linear-gradient(rgba(1,3,7,0.6), rgba(1,3,7,0.6)), url('images/iut.jpg'); background-size: cover; background-position: center; min-height: 40vh; display: flex; align-items: center; justify-content: center; text-align: center; color: white; padding: 4rem 10%;">
    <h2 style="font-size: 3.5rem; font-weight: 800; text-shadow: 0 5px 25px rgba(0,0,0,1);">MON PARCOURS <span>D'ÉTUDIANT</span></h2>

</section>

        <div class="page-padding">
            <div class="story-block">
                <h3>Parcours Académique</h3>
                <div style="border-left: 2px solid var(--accent-purple); padding-left: 1.5rem; margin-bottom: 2rem;">
                    <h4 style="color: var(--text); font-size: 1.1rem;">Baccalauréat Général — Lycée Condorcet, Bordeaux</h4>
                    <p style="color: var(--text-dim); font-size: 0.95rem;">
                        Spécialités Mathématiques & NSI. Initiation à la logique formelle et aux bases du numérique, en parallèle du Pôle Espoir d'Aviron.
                    </p>
                </div>
                <p style="color: var(--text-dim);">
                    À l'IUT de Toulouse, j'ai suivi le parcours Administration, Gestion et Exploitation des Données (AGED). Mon profil hybride permet de maîtriser le développement logiciel, en passant par le réseaux et la sécurité, jusqu'à l'analyse avancée de données pour la prise de décision. Voici un aperçu de mon parcours en BUT Informatique :
                </p>
            </div>

            <div class="timeline-item">
                <div class="timeline-year">BUT 1</div>
                <div class="timeline-content">
                    <h3>Bases de l'informatique & SQL</h3>
                    <p>Découverte de l'algorithmique via ADA (Rigueur et typage fort). Initiation aux bases de données relationnelles et au SQL. Réalisation d'un premier projet de gestion sous Oracle APEX, validant la compétence "Gérer des données" au niveau débutant.</p>
                </div>
            </div>
            
            <div class="timeline-item">
                <div class="timeline-year">BUT 2</div>
                <div class="timeline-content">
                    <h3>Professionnalisation & Décisionnel</h3>
                    <p>Transition vers Java pour la programmation orientée objet. Expertise en Business Intelligence avec Power BI. Développement d'une application de gestion immobilière (Modélisation complète). Stage chez Fortil : immersion totale dans l'administration système et la gestion d'état centralisée.</p>
                </div>
            </div>

            <div class="timeline-item">
                <div class="timeline-year">BUT 3</div>
                <div class="timeline-content">
                    <h3>Expertise Data & IA</h3>
                    <p>Approfondissement du langauge SQL et introduction à l'Intelligence Artificielle. Projet majeur : Création d'un moteur de recherche de films basé sur l'indexation de sous-titres, mobilisant les compétences "Optimiser" et "Gérer des données" en environnement complexe.</p>
                </div>
            </div>

            <h3 style="font-size: 2rem; margin-top: 5rem; margin-bottom: 2rem; text-align: center;">SOCLE <span>TECHNIQUE ACQUIS.</span></h3>

            <div class="grid" style="gap: 1.5rem;">
                
                <div class="card" style="padding: 2rem; border-left: 4px solid var(--accent); cursor: default;">
                    <h4 style="font-size: 1.2rem; margin-bottom: 1rem; color: var(--text);">Architecture de Données</h4>
                    <p style="color: var(--text-dim); font-size: 0.95rem; margin-bottom: 1.5rem;">
                        Capacité à modéliser, structurer et administrer des systèmes d'information complexes. De la conception du modèle conceptuel (MCD) à l'optimisation des requêtes en production.
                    </p>
                    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                        <span class="badge" style="background: rgba(255,255,255,0.05); color: var(--text);">SQL Avancé</span>
                        <span class="badge" style="background: rgba(255,255,255,0.05); color: var(--text);">Admin BDD</span>
                        <span class="badge" style="background: rgba(255,255,255,0.05); color: var(--text);">Sécurité</span>
                    </div>
                </div>

                <div class="card" style="padding: 2rem; border-left: 4px solid var(--accent); cursor: default;">
                    <h4 style="font-size: 1.2rem; margin-bottom: 1rem; color: var(--text);">Développement Applicatif</h4>
                    <p style="color: var(--text-dim); font-size: 0.95rem; margin-bottom: 1.5rem;">
                        Maîtrise du cycle de vie logiciel complet. Rigueur de l'algorithmique, Programmation Orientée Objet (POO) et architectures web modernes.
                    </p>
                    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                        <span class="badge" style="background: rgba(255,255,255,0.05); color: var(--text);">Java / POO</span>
                        <span class="badge" style="background: rgba(255,255,255,0.05); color: var(--text);">Angular</span>
                        <span class="badge" style="background: rgba(255,255,255,0.05); color: var(--text);">API REST</span>
                    </div>
                </div>

                <div class="card" style="padding: 2rem; border-left: 4px solid var(--accent); cursor: default;">
                    <h4 style="font-size: 1.2rem; margin-bottom: 1rem; color: var(--text);">Business Intelligence</h4>
                    <p style="color: var(--text-dim); font-size: 0.95rem; margin-bottom: 1.5rem;">
                        Transformation de la donnée brute en levier stratégique. Création de tableaux de bord décisionnels, nettoyage de données et analyse prédictive.
                    </p>
                    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                        <span class="badge" style="background: rgba(255,255,255,0.05); color: var(--text);">Power BI</span>
                        <span class="badge" style="background: rgba(255,255,255,0.05); color: var(--text);">Data Viz</span>
                        <span class="badge" style="background: rgba(255,255,255,0.05); color: var(--text);">ETL / KNIME</span>
                    </div>
                </div>

            </div>
                                                <p style="text-align: center; margin-top: 5rem; font-size: 0.8rem; color: var(--text-dim); opacity: 0.4;">
                © 2026 Flavien Alcazar 
            </p>
        </div>

    `;
}
function renderProjets() {
    // Scroll en haut
    window.scrollTo(0, 0);
    // Mise à jour de la nav active
    setActiveNav('nav-projets');

    content.innerHTML = `
<section style="background: linear-gradient(rgba(1,3,7,0.6), rgba(1,3,7,0.6)), url('images/fond_code.jpg'); background-size: cover; background-position: center; min-height: 40vh; display: flex; align-items: center; justify-content: center; text-align: center; color: white; padding: 4rem 10%;">
    <h2 style="font-size: 3.5rem; font-weight: 800; text-shadow: 0 5px 25px rgba(0,0,0,1);">EXPÉRIENCES <span>& RÉALISATIONS</span></h2>
</section>

                <div class="page-padding">
                    <h3 style="font-size: 2rem; margin-bottom: 2rem; border-left: 4px solid var(--accent-purple); padding-left: 1rem;">Parcours Professionnel</h3>
                    <div class="grid" style="margin-bottom: 5rem;">
                        <div class="card">
                            <span class="badge">2023</span>
                            <h3>Emploi Saisonnier</h3>
                            <p style="color: var(--text-dim); font-size: 0.9rem; margin-top: 10px;">
                                Entretien des espaces verts — Mairie de Pont-du-Casse (47480)<br>
                                Première expérience en milieu professionnel : travail d'équipe, ponctualité et rigueur opérationnelle.
                            </p>
                        </div>
                        <div class="card">
                            <span class="badge">2024</span>
                            <h3>Emploi Saisonnier</h3>
                            <p style="color: var(--text-dim); font-size: 0.9rem; margin-top: 10px;">
                                Entretien des bâtiments et mécanique — Mairie de Foulayronnes (47510)<br>
                                Développement de ma capacité d'apprentissage, d'adaptation et de résolution de problèmes techniques en autonomie.
                            </p>
                        </div>
                        <div class="card" style="border: 1px solid var(--accent);">
                            <span class="badge">STAGE 2025</span>
                            <h3>Stage — FORTIL</h3>
                            <p style="color: var(--text-dim); font-size: 0.9rem; margin-top: 10px;">
                                Stage de 2 éme année d'études — FORTIL, Toulouse.<br>
                                Conception d'un outil métier de gestion des compétences pour un burreau d'etudes via Angular 19 et NestJS.
                            </p>
                        </div>
                    </div>

                    <h3 style="font-size: 2rem; margin-bottom: 2rem; border-left: 4px solid var(--accent); padding-left: 1rem;">Réalisations Techniques</h3>

<div class="card" style="display: flex; gap: 30px; margin-bottom: 4rem; padding: 0; overflow: hidden; align-items: stretch; cursor: default; border-color: rgba(255,255,255,0.1);">
    <div style="flex: 1; padding: 2.5rem;">
        <h3 style="font-size: 1.8rem; margin: 1rem 0;">Stage FORTIL — Gestion des compétences</h3>
        <p style="color: var(--text-dim); margin-bottom: 1.5rem;">
            Conception intégrale d'un outil métier visant à remplacer des processus Excel obsolètes. 
            Le projet assure la centralisation des compétences des consultants pour optimiser le matching profil-projet. 
            Réalisation du cycle complet : recueil des besoins, prototypage sous Figma, modélisation de la base de données PostgreSQL, développement Fullstack et mise en production.
        </p>
        <div class="skill-tag-box">
            <h4 style="color: var(--accent); font-size: 0.9rem; margin-bottom: 0.5rem;">COMPÉTENCES & OUTILS :</h4>
            <p style="font-size: 0.85rem; color: var(--text-dim);">Angular 19, NestJS (Node.js), PostgreSQL, Figma, Docker.</p>
        </div>
    </div>
    <div style="flex: 1.5; display: flex; align-items: center; justify-content: center; padding: 20px;">
        <img src="images/app.png" style="width: 100%; height: auto; border-radius: 10px; border: 1px solid rgba(255,255,255,0.1);">
    </div>
</div>

            <div class="card" style="display: flex; gap: 30px; margin-bottom: 4rem; padding: 0; overflow: hidden; align-items: stretch; cursor: default; border-color: rgba(255,255,255,0.1);">
                <div style="flex: 1; padding: 2.5rem;">

                    <h3 style="font-size: 1.8rem; margin: 1rem 0;">Moteur de recherche de film</h3>
                    <p style="color: var(--text-dim); margin-bottom: 1.5rem;">
                        Conception d'un moteur de recherche intelligent basé sur l'indexation de sous-titres de films. 
                        Mise en œuvre d'un pipeline complet : nettoyage des données textuelles, vectorisation via le modèle TF-IDF pour la recherche sémantique, et implémentation d'un algorithme de recommandation basé sur les notes attribuées. 
                    </p>
                                        <div class="skill-tag-box">
                        <h4 style="color: var(--accent); font-size: 0.9rem; margin-bottom: 0.5rem;">COMPÉTENCES & OUTILS :</h4>
                        <p style="font-size: 0.85rem; color: var(--text-dim);">Python, PostgreSQL , Flask API.</p>
                    </div>

                </div>
                <div style="flex: 1.5; display: flex; align-items: center; justify-content: center; padding: 20px;">
                    <img src="images/app_tv.png" style="width: 100%; height: auto; border-radius: 10px; border: 1px solid rgba(255,255,255,0.1);">
                </div>
            </div>





<div class="card" style="display: flex; gap: 30px; margin-bottom: 4rem; padding: 0; overflow: hidden; align-items: stretch; cursor: default; border-color: rgba(255,255,255,0.1);">
    <div style="flex: 1; padding: 2.5rem;">
        <h3 style="font-size: 1.8rem; margin: 1rem 0;">Prédiction de Nutri-Score</h3>
        <p style="color: var(--text-dim); margin-bottom: 1.5rem;">
            Analyse de la base de données <b>OpenFoodFacts</b>. Réalisation d'un pipeline complet : nettoyage des données brutes, visualisation via <b>Power BI</b> pour l'extraction de tendances, et conception d'un workflow <b>KNIME</b>. Ce dernier permet de prédire le Nutri-Score des produits via des algorithmes de classification basés sur leurs caractéristiques nutritionnelles.
        </p>
        <div class="skill-tag-box">
            <h4 style="color: var(--accent); font-size: 0.9rem; margin-bottom: 0.5rem;">COMPÉTENCES & OUTILS :</h4>
            <p style="font-size: 0.85rem; color: var(--text-dim);">KNIME (Analytics Platform), Power BI.</p>
        </div>
    </div>
    <div style="flex: 1.5; display: flex; align-items: center; justify-content: center; padding: 20px;">
        <img src="images/PowerBI.png" style="width: 100%; height: auto; border-radius: 10px; border: 1px solid rgba(255,255,255,0.1);">
    </div>
</div>

            <div class="card" style="display: flex; gap: 30px; margin-bottom: 4rem; padding: 0; overflow: hidden; align-items: stretch; cursor: default; border-color: rgba(255,255,255,0.1);">
                <div style="flex: 1; padding: 2.5rem;">
                    <h3 style="font-size: 1.8rem; margin: 1rem 0;">Application de Gestion Immobilière</h3>
                    <p style="color: var(--text-dim); margin-bottom: 1.5rem;">
                        Analyse approfondie des besoins clients et modélisation d'une architecture de données robuste sous Oracle SQL Developer. 
                        Développement intégral de la logique métier et de l'interface utilisateur en Java. 
                    </p>
                    <div class="skill-tag-box">
                        <h4 style="color: var(--accent); font-size: 0.9rem; margin-bottom: 0.5rem;">COMPÉTENCES & OUTILS :</h4>
                        <p style="font-size: 0.85rem; color: var(--text-dim);">Java, Oracle SQL Developer, Modélisation relationnelle (MCD/MLD).</p>
                    </div>
                </div>
                <div style="flex: 1.5; display: flex; align-items: center; justify-content: center; padding: 20px;">
                    <img src="images/immo.png" style="width: 100%; height: auto; border-radius: 10px; border: 1px solid rgba(255,255,255,0.1);">
                </div>
            </div>



            <div class="card" style="display: flex; gap: 30px; margin-bottom: 4rem; padding: 0; overflow: hidden; align-items: stretch; cursor: default; border-color: rgba(255,255,255,0.1);">
                <div style="flex: 1; padding: 2.5rem;">
                    <h3 style="font-size: 1.8rem; margin: 1rem 0;">Data Hub Oracle APEX</h3>
                    <p style="color: var(--text-dim); margin-bottom: 1.5rem;">
                        Conception d'un dashboard décisionnel industriel. Ce projet s'inscrit dans le parcours <b>AGED</b> (Administration, Gestion et Exploitation des Données) pour l'aide à la décision par la donnée.
                    </p>
                    <div style="background: rgba(0,242,255,0.05); padding: 1rem; border-radius: 10px;">
                        <h4 style="color: var(--accent); font-size: 0.9rem; margin-bottom: 0.5rem;">COMPÉTENCES & OUTILS :</h4>
                        <p style="font-size: 0.85rem; color: var(--text-dim);">Oracle APEX, PL/SQL, Triggers, Dashboarding KPI.</p>
                    </div>
                </div>
                <div style="flex: 1.5; display: flex; align-items: center; justify-content: center; padding: 20px;">
                    <img src="images/apex.png" style="width: 100%; height: auto; border-radius: 10px; border: 1px solid rgba(255,255,255,0.1);">
                </div>
            </div>
        <p style="text-align: center; margin-top: 5rem; font-size: 0.8rem; color: var(--text-dim); opacity: 0.4;">
                © 2026 Flavien Alcazar 
            </p>
        </div>
    `;
}

        function renderSport() {
            // Scroll en haut
            window.scrollTo(0, 0);
            // Mise à jour de la nav active
            setActiveNav('nav-sport');

            content.innerHTML = `
<section style="background: linear-gradient(rgba(1,3,7,0.6), rgba(1,3,7,0.6)), url('images/aviron.jpg'); background-size: cover; background-position: center; min-height: 40vh; display: flex; align-items: center; justify-content: center; text-align: center; color: white; padding: 4rem 10%;">
    <h2 style="font-size: 3.5rem; font-weight: 800; text-shadow: 0 5px 25px rgba(0,0,0,1);">L'AVIRON : <span>LA QUÊTE DE L'EXCELLENCE</span></h2>
</section>

                <div class="page-padding">
                    <h3 style="font-size: 2.5rem; margin-bottom: 3rem; text-align: center;">De mes débuts à l'Équipe de France.</h3>

                    <div class="timeline-item">
                        <div class="timeline-year">10 ans</div>
                        <div class="timeline-content">
                            <h3>Les Premiers Coups de Rame</h3>
                            <p>Découverte de l'aviron et de mes premières sensations sur l'eau. Une passion est née.</p>
                        </div>
                    </div>
                    
                    <div class="timeline-item">
                        <div class="timeline-year">Cadet</div>
                        <div class="timeline-content">
                            <h3>L'Ascension Nationale</h3>
                            <p>Première compétition à 11 ans. Rapidement, les résultats suivent : je deviens Vice-Champion de France en double et je me classe 5ème en skiff à ma deuxième année Cadet. C'est la confirmation que la rigueur paie.</p>
                        </div>
                    </div>

                    <div class="timeline-item">
                        <div class="timeline-year">Junior</div>
                        <div class="timeline-content">
                            <h3>L'Équipe de France</h3>
                            <p>Intégration du Pôle Espoir de Bordeaux, un tournant. Je concilie Bac Général (Maths / NSI) et entraînement intensif. Mon travail est récompensé par une sélection en Équipe de France Junior. Je participe aux Championnats d'Europe (4ème place) et à la Coupe de la Jeunesse (4ème place). Ces expériences m'ont appris à gérer le stress de la haute compétition et à travailler en équipe sous pression.</p>
                        </div>
                    </div>

                    <div class="timeline-item">
                        <div class="timeline-year">Senior</div>
                        <div class="timeline-content">
                            <h3>Titres Nationaux</h3>
                            <p>Arrivée au Pôle Universitaire de Toulouse, un nouveau défi : concilier BUT Informatique et mes ambitions sportives. Cette année (2025), j'atteins l'objectif suprême en devenant Champion de France Senior en deux de couple sprint. Je décroche aussi une 3ème place aux Championnats de France Élite sur 2km et une médaille de bronze aux -23 ans en double senior. Chaque médaille est le fruit d'années de persévérance.</p>
                        </div>
                    </div>

                    <div class="story-block">
                        <h3>Mon Quotidien d'Athlète : </h3>
                        <p style="color: var(--text-dim); margin-bottom: 1.5rem;">
                            Mon planning est millimètré : levé aux aurores, deux entraînements par jour (bateau, muscu ou rameur), un programme de la Fédération Française d'Aviron. 4000 km ramés par an. Cette discipline, m'as appris à gérer mon temps, à rester concentré et à persévérer dans mes objectifs. C'est cette rigueur qui me permet de concilier mes études et mon sport.
                        </p>
<div style="aspect-ratio: 16/9; background: #000; border-radius: 15px; overflow: hidden; border: 1px solid var(--accent); margin-top: 2rem;">
    <video autoplay muted loop playsinline style="width: 100%; height: 100%; object-fit: cover;">
        <source src="images/aviron.MOV" type="video/quicktime">
        <source src="images/aviron.MOV" type="video/mp4">
        Votre navigateur ne supporte pas la lecture de vidéos.
    </video>
</div>
                    </div>
                    <p style="text-align: center; margin-top: 5rem; font-size: 0.8rem; color: var(--text-dim); opacity: 0.4;">
                © 2026 Flavien Alcazar 
            </p>
                </div>
            `;
        }