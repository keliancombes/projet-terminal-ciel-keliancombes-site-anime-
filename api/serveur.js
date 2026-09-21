const express = require("express");
const app = express();

// Route de test : GET /
app.get("/", (req, res) => {
  res.json({ message: "Mon API fonctionne" });
});
let animes = [
  { id: 1, nom: "db", episode: 639 },
  { id: 2, nom: "jojo", episode: 190  },
  { id: 3, nom: "naruto", episode: 720  }
];
// GET /animes -> renvoie tout le tableau
app.get("/animes", (req, res) => {
  res.json(animes);
});
// On demarre le serveur sur le port 3000
app.listen(3000, () => {
  console.log("Serveur sur http://localhost:3000");
});
// GET /animes/2 -> renvoie l'anime dont l id vaut 2
app.get("/animes/:id", (req, res) => {
  const id = Number(req.params.id);            // ":id" arrive en texte -> on convertit
  const anime = animes.find((p) => p.id === id);
  if (!anime) {                              // rien trouve
    return res.status(404).json({ erreur: "Anime introuvable" });
  }
  res.json(anime);
});