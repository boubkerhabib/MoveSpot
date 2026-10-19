// ============================================================
// MoveSpot : données fournies (ne pas modifier la structure)
// ============================================================

// Plan de la salle : 5 rangées (A à E) de 6 tapis.
const rangees = ["A", "B", "C", "D", "E"];
const tapisParRangee = 6;

// Liste des cours.
// Chaque cours contient ses créneaux, et chaque créneau
// contient la liste des emplacements déjà occupés.
const cours = [
  {
    id: "yoga",
    nom: "Yoga Flow",
    categorie: "Yoga",
    duree: "60 min",
    coach: "Camille Roux",
    image: "assets/images/yoga.svg",
    prix: 12,
    creneaux: [
      { id: "yoga-lun-1830", jour: "Lundi", heure: "18:30", occupes: ["A2", "B3", "B4", "D1", "E5"] },
      { id: "yoga-mer-1230", jour: "Mercredi", heure: "12:30", occupes: ["A1", "A2", "C3", "C4"] },
      { id: "yoga-ven-1900", jour: "Vendredi", heure: "19:00", occupes: ["B1", "B2", "B5", "D3", "D4", "E1", "E2"] }
    ]
  },
  {
    id: "hiit",
    nom: "HIIT Express",
    categorie: "Cardio",
    duree: "45 min",
    coach: "Malik Benali",
    image: "assets/images/hiit.svg",
    prix: 10,
    creneaux: [
      { id: "hiit-mar-1800", jour: "Mardi", heure: "18:00", occupes: ["A3", "A4", "C1", "C2", "E6"] },
      { id: "hiit-jeu-1215", jour: "Jeudi", heure: "12:15", occupes: ["B6", "D2"] },
      { id: "hiit-sam-1000", jour: "Samedi", heure: "10:00", occupes: ["A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3"] }
    ]
  },
  {
    id: "crossfit",
    nom: "Cross Training",
    categorie: "Musculation",
    duree: "50 min",
    coach: "Inès Moreau",
    image: "assets/images/crossfit.svg",
    prix: 14,
    creneaux: [
      { id: "cross-lun-1930", jour: "Lundi", heure: "19:30", occupes: ["C3", "C4", "D3", "D4"] },
      { id: "cross-mer-1800", jour: "Mercredi", heure: "18:00", occupes: ["A6", "B5", "E1", "E2", "E3"] },
      { id: "cross-sam-1130", jour: "Samedi", heure: "11:30", occupes: ["A1", "B2", "C3", "D4", "E5"] }
    ]
  },
  {
    id: "pilates",
    nom: "Pilates Core",
    categorie: "Pilates",
    duree: "55 min",
    coach: "Théo Garnier",
    image: "assets/images/pilates.svg",
    prix: 11,
    creneaux: [
      { id: "pil-mar-0900", jour: "Mardi", heure: "09:00", occupes: ["A5", "A6", "B5", "B6"] },
      { id: "pil-jeu-1900", jour: "Jeudi", heure: "19:00", occupes: ["C1", "C2", "D5", "E3", "E4"] },
      { id: "pil-dim-1000", jour: "Dimanche", heure: "10:00", occupes: [] }
    ]
  }
];
