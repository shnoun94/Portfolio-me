# Portfolio Dev Web — Thème Terminal

Portfolio React avec thème terminal dark, fidèle à l'esthétique CV bash.

## 🚀 Démarrage rapide

```bash
# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Build production
npm run build
```

## 📁 Structure

```
src/
├── data/
│   └── portfolio.js       ← ✏️  TOUTES tes infos ici
├── components/
│   ├── Navbar.jsx / .css
│   ├── Terminal.jsx / .css  ← composant réutilisable
│   ├── Hero.jsx / .css
│   ├── Skills.jsx / .css
│   ├── Projects.jsx / .css
│   ├── Experience.jsx / .css
│   └── Contact.jsx / .css
├── App.jsx
├── App.module.css
├── main.jsx
└── index.css              ← variables CSS globales (couleurs, font)
```

## ✏️ Personnalisation

**Tout se passe dans `src/data/portfolio.js`** :

- Remplace `Prénom` / `Nom` par ton vrai nom
- Remplis `email`, `linkedin`, `github`
- Modifie les `projects` avec tes vrais projets (ajoute un champ `github: "https://..."`)
- Complète `experiences` et `formation`
- Ajuste les `skillLevels` selon ton niveau réel

## 🎨 Changer les couleurs

Dans `src/index.css`, modifie les variables CSS :

```css
:root {
  --green:  #00ff88;  /* couleur principale */
  --cyan:   #00d4ff;  /* accents */
  --amber:  #ffb800;  /* dates, warnings */
}
```

## 🌐 Déploiement

Compatible **Vercel**, **Netlify**, **GitHub Pages** (avec `base` dans vite.config.js).

```bash
npm run build
# → dossier dist/ prêt à déployer
```
