const spécialité = document.getElementById("spécialité");
const filière = document.getElementById("filière");
const semestre = document.getElementById("str");
const okBtn = document.getElementById("okBtn");
const themeBtn = document.getElementById("themeBtn");
const cart = document.querySelector(".cart");


// ==========================================
// PROGRAMMES
// ==========================================

const programmes = {

    SEI: {

        S5: [

            {
                nom: "Électrotechnique Fondamentale 2",
                coefficient: 2,
                evaluation: [
                    { nom: "TD", poids: 40 },
                    { nom: "Examen", poids: 60 }
                ]
            },

            {
                nom: "Électronique de Puissance",
                coefficient: 3,
                evaluation: [
                    { nom: "TD", poids: 40 },
                    { nom: "Examen", poids: 60 }
                ]
            },

            {
                nom: "Transfert Thermique",
                coefficient: 2,
                evaluation: [
                    { nom: "TD", poids: 40 },
                    { nom: "Examen", poids: 60 }
                ]
            },

            {
                nom: "Asservissements 1",
                coefficient: 2,
                evaluation: [
                    { nom: "TD", poids: 40 },
                    { nom: "Examen", poids: 60 }
                ]
            },

            {
                nom: "Électronique Appliquée",
                coefficient: 2,
                evaluation: [
                    { nom: "TD", poids: 40 },
                    { nom: "Examen", poids: 60 }
                ]
            },

            {
                nom: "Méthodes Numériques Appliquées - Python",
                coefficient: 3,
                evaluation: [
                    { nom: "TD", poids: 20 },
                    { nom: "TP", poids: 20 },
                    { nom: "Examen", poids: 60 }
                ]
            },

            {
                nom: "TP Asservissement",
                coefficient: 1,
                evaluation: [
                    { nom: "TP", poids: 100 }
                ]
            },

            {
                nom: "TP Électronique de Puissance",
                coefficient: 1,
                evaluation: [
                    { nom: "TP", poids: 100 }
                ]
            },

            {
                nom: "TP Électronique Appliquée",
                coefficient: 1,
                evaluation: [
                    { nom: "TP", poids: 100 }
                ]
            },

            {
                nom: "TP Électrotechnique Fondamentale",
                coefficient: 1,
                evaluation: [
                    { nom: "TP", poids: 100 }
                ]
            },

            {
                nom: "Anglais technique en relation avec la spécialité",
                coefficient: 1,
                evaluation: [
                    { nom: "Examen", poids: 100 }
                ]
            }

        ]

    }

};


// ==========================================
// CHOIX SPÉCIALITÉ
// ==========================================

spécialité.addEventListener("change", function () {

    filière.innerHTML = `
        <option value="" disabled selected>
            Votre filière
        </option>
    `;

    semestre.innerHTML = `
        <option value="" disabled selected>
            Votre semestre
        </option>
    `;

    cart.innerHTML = "";


    // Première année
    if (this.value === "ST-1ere") {

        filière.innerHTML = `
            <option value="ST">
                Sciences et Technologies
            </option>
        `;

        semestre.innerHTML = `
            <option value="" disabled selected>
                Votre semestre
            </option>

            <option value="S1">
                Semestre 1
            </option>

            <option value="S2">
                Semestre 2
            </option>
        `;
    }


    // Groupe A
    else if (this.value === "groupe-A") {

        filière.innerHTML = `
            <option value="" disabled selected>
                Votre filière
            </option>

            <option value="grp-A">
                2ème année Filières du groupe A
            </option>

            <option value="SEI">
                Systèmes Électriques Industriels
            </option>

            <option value="ATT">
                Advanced Technologies in Telecommunications
            </option>

            <option value="RSI">
                Robotique et Systèmes Intelligents
            </option>

            <option value="GEI">
                Génie Électronique Industrielle
            </option>
        `;

        semestre.innerHTML = `
            <option value="" disabled selected>
                Votre semestre
            </option>

            <option value="S3">
                Semestre 3
            </option>

            <option value="S4">
                Semestre 4
            </option>
        `;
    }


    // Groupe B
    else if (this.value === "groupe-B") {

        filière.innerHTML = `
            <option value="" disabled selected>
                Votre filière
            </option>

            <option value="grp-B">
                2ème année Filières du groupe B
            </option>

            <option value="GHY">
                Génie Hydraulique
            </option>

            <option value="EDH">
                Équipement de l'Habitat
            </option>

            <option value="CCI">
                Construction Civile et Industrielle
            </option>

            <option value="EM">
                Maintenance et Énergétique
            </option>

            <option value="CSSM">
                Conception des Systèmes et Structures Mécaniques
            </option>
        `;

        semestre.innerHTML = `
            <option value="" disabled selected>
                Votre semestre
            </option>

            <option value="S3">
                Semestre 3
            </option>

            <option value="S4">
                Semestre 4
            </option>
        `;
    }


    // Groupe C
    else if (this.value === "groupe-C") {

        filière.innerHTML = `
            <option value="" disabled selected>
                Votre filière
            </option>

            <option value="grp-C">
                2ème année Filières du groupe C
            </option>

            <option value="GDC">
                Génie des Procédés Chimiques
            </option>

            <option value="TTEUE">
                Technologie du Traitement des Eaux Usées et Exploitations
            </option>
        `;

        semestre.innerHTML = `
            <option value="" disabled selected>
                Votre semestre
            </option>

            <option value="S3">
                Semestre 3
            </option>

            <option value="S4">
                Semestre 4
            </option>
        `;
    }

});


// ==========================================
// CHOIX FILIÈRE
// ==========================================

filière.addEventListener("change", function () {

    cart.innerHTML = "";

    const filièresAvecSemestres =
        [
            "SEI",
            "ATT",
            "RSI",
            "GEI",
            "GHY",
            "EDH",
            "CCI",
            "EM",
            "CSSM",
            "GDC",
            "TTEUE"
        ];

    if (filièresAvecSemestres.includes(this.value)) {

        semestre.innerHTML = `
            <option value="" disabled selected>
                Votre semestre
            </option>

            <option value="S5">
                Semestre 5
            </option>

            <option value="S6">
                Semestre 6
            </option>

            <option value="S7">
                Semestre 7
            </option>

            <option value="S8">
                Semestre 8
            </option>

            <option value="S9">
                Semestre 9
            </option>

            <option value="S10">
                Semestre 10
            </option>
        `;
    }

});


// ==========================================
// AFFICHER LES MATIÈRES
// ==========================================

function afficherMatieres(filiereChoisie, semestreChoisi) {

    cart.innerHTML = "";

    const programme =
        programmes[filiereChoisie]?.[semestreChoisi];


    // Programme non disponible
    if (!programme) {

        cart.innerHTML = `
            <div class="no-result">
                <p>
                    Le programme de ce semestre
                    n'est pas encore disponible.
                </p>
            </div>
        `;

        return;
    }


    // Titre
    cart.innerHTML = `
        <h2>
            Matières — ${semestreChoisi}
        </h2>
    `;


    // Création des cartes
    programme.forEach((matiere, index) => {

        const card = document.createElement("div");

        card.classList.add("matiere-card");


        // Header
        const header = document.createElement("div");

        header.classList.add("matiere-header");

        header.innerHTML = `
            <h3>
                ${matiere.nom}
            </h3>

            <span>
                Coef. ${matiere.coefficient}
            </span>
        `;


        // Évaluations
        const evaluations = document.createElement("div");

        evaluations.classList.add("evaluations");


        matiere.evaluation.forEach((evaluation, evaluationIndex) => {

            const group = document.createElement("div");

            group.classList.add("note-group");


            const label = document.createElement("label");

            label.textContent =
                `${evaluation.nom} (${evaluation.poids}%)`;


            const input = document.createElement("input");

            input.type = "number";

            input.min = "0";

            input.max = "20";

            input.step = "0.01";

            input.placeholder = " /20";

            input.classList.add("note-input");

            input.dataset.poids = evaluation.poids;


            // Calcul automatique
            input.addEventListener("input", function () {

                calculerNoteMatiere(card, matiere);

            });


            group.appendChild(label);

            group.appendChild(input);

            evaluations.appendChild(group);

        });


        // Résultat matière
        const result = document.createElement("div");

        result.classList.add("matiere-result");

        result.innerHTML = `
            <span>
                Note matière :
            </span>

            <span class="note-matiere">
                -- / 20
            </span>
        `;


        card.appendChild(header);

        card.appendChild(evaluations);

        card.appendChild(result);

        cart.appendChild(card);

    });


    // Bouton calcul
    const calculateBtn =
        document.createElement("button");

    calculateBtn.type = "button";

    calculateBtn.classList.add("calculate-btn");

    calculateBtn.textContent =
        "Calculer la moyenne";


    calculateBtn.addEventListener("click", function () {

        calculerMoyenneSemestre(programme);

    });


    cart.appendChild(calculateBtn);


    // Zone résultat final
    const resultatFinal =
        document.createElement("div");

    resultatFinal.classList.add("resultat-final");

    resultatFinal.innerHTML = `
        <h2>
            Moyenne du semestre
        </h2>

        <div class="moyenne">
            -- / 20
        </div>

        <div class="statut">
            En attente
        </div>

        <div class="appreciation">
            Entrez vos notes puis cliquez sur
            "Calculer la moyenne".
        </div>
    `;


    cart.appendChild(resultatFinal);

}


// ==========================================
// CALCUL NOTE D'UNE MATIÈRE
// ==========================================

function calculerNoteMatiere(card, matiere) {

    const inputs =
        card.querySelectorAll(".note-input");

    let total = 0;

    let totalPoids = 0;


    inputs.forEach(input => {

        const valeur =
            parseFloat(input.value);

        const poids =
            parseFloat(input.dataset.poids);


        if (!isNaN(valeur)) {

            total += valeur * poids;

            totalPoids += poids;

        }

    });


    const noteMatiere =
        card.querySelector(".note-matiere");


    if (totalPoids === 0) {

        noteMatiere.textContent =
            "-- / 20";

        return;
    }


    const note =
        total / totalPoids;


    noteMatiere.textContent =
        `${note.toFixed(2)} / 20`;

}


// ==========================================
// CALCUL MOYENNE DU SEMESTRE
// ==========================================

function calculerMoyenneSemestre(programme) {

    const cards =
        cart.querySelectorAll(".matiere-card");


    let totalPoints = 0;

    let totalCoefficients = 0;


    cards.forEach((card, index) => {

        const matiere =
            programme[index];


        const inputs =
            card.querySelectorAll(".note-input");


        let total = 0;

        let totalPoids = 0;


        inputs.forEach(input => {

            const valeur =
                parseFloat(input.value);

            const poids =
                parseFloat(input.dataset.poids);


            if (!isNaN(valeur)) {

                total += valeur * poids;

                totalPoids += poids;

            }

        });


        // Si toutes les notes sont renseignées
        if (totalPoids > 0) {

            const noteMatiere =
                total / totalPoids;


            totalPoints +=
                noteMatiere * matiere.coefficient;


            totalCoefficients +=
                matiere.coefficient;

        }

    });


    const resultatFinal =
        cart.querySelector(".resultat-final");


    // Aucune note
    if (totalCoefficients === 0) {

        resultatFinal.innerHTML = `
            <h2>
                Moyenne du semestre
            </h2>

            <div class="moyenne">
                -- / 20
            </div>

            <div class="statut ajourne">
                Aucune note
            </div>

            <div class="appreciation">
                Veuillez entrer vos notes.
            </div>
        `;

        return;
    }


    // Moyenne
    const moyenne =
        totalPoints / totalCoefficients;


    // ==========================================
    // STATUT
    // ==========================================

    let statut;

    if (moyenne >= 10) {

        statut = "Admis";

    } else {

        statut = "Ajourné";

    }


    // ==========================================
    // APPRÉCIATION
    // ==========================================

    let appreciation;


    if (moyenne < 10) {

        appreciation = "Insuffisant";

    }

    else if (moyenne < 12) {

        appreciation = "Passable";

    }

    else if (moyenne < 14) {

        appreciation = "Assez Bien";

    }

    else if (moyenne < 16) {

        appreciation = "Bien";

    }

    else if (moyenne < 18) {

        appreciation = "Très Bien";

    }

    else {

        appreciation = "Excellent";

    }


    // ==========================================
    // AFFICHER LE RÉSULTAT FINAL
    // ==========================================

    resultatFinal.innerHTML = `

        <h2>
            Moyenne du semestre
        </h2>

        <div class="moyenne">
            ${moyenne.toFixed(2)} / 20
        </div>

        <div class="statut ${moyenne >= 10 ? "admis" : "ajourne"}">
            ${statut}
        </div>

        <div class="appreciation">
            ${appreciation}
        </div>

    `;

}


// ==========================================
// BOUTON OK
// ==========================================

okBtn.addEventListener("click", function () {

    if (
        spécialité.value === "" ||
        filière.value === "" ||
        semestre.value === ""
    ) {

        alert(
            "Enter les Notes"
        );

        return;
    }


    afficherMatieres(
        filière.value,
        semestre.value
    );

});


// ==========================================
// MODE SOMBRE
// ==========================================

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");


    if (
        document.body.classList.contains("dark-mode")
    ) {

        themeBtn.textContent = "☀️";

    }

    else {

        themeBtn.textContent = "🌑";

    }

});