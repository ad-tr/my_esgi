# Projet ESGI Intranet

## Description

Ce projet est une application en cours de développement par Adrien, Ahmad et Raphael. Notre objectif est de créer un intranet pour l'ESGI, où les utilisateurs peuvent :

- Publier et consulter des posts entre étudiants et membres du campus.
- Emprunter du matériel pour leurs projets, comme des Raspberry Pi, etc.

Le développement est toujours en cours, et nous avons mis l'accent sur les tests unitaires à la fois pour le front-end et le back-end. Ahmad se concentre sur l'API, tandis que Raphael et moi travaillons sur le front-end. Pour l'instant, nos tests concernent principalement la partie inscription, notamment les critères de validation des mots de passe et des identifiants.

**NB :** Actuellement, l'authentification API n'est pas encore connectée. Pour passer la page de connexion, utilisez simplement un identifiant et un mot de passe valide comme suit :

- **Identifiant** : Minimum 5 caractères
- **Mot de passe** : Exemple valide `qwertyQWERTY1234`

---

## Fonctionnalités (en cours de développement)

- **Gestion des posts** : Créer et consulter des posts.
- **Gestion du matériel** : Réserver et emprunter des équipements.
- **Inscription et connexion** : Validation des identifiants et mots de passe (tests en cours).
- **Tests unitaires** : Vérification du bon fonctionnement des modules du front-end et du back-end.

---

## Getting Started

### Prérequis

Assurez-vous d'avoir les outils suivants installés :

- [Node.js](https://nodejs.org)
- [pnpm](https://pnpm.io/)

### Installation

Pour installer les dépendances du projet, exécutez la commande :

```bash
pnpm install
```

### Lancement du projet

Pour démarrer le projet en mode développement, utilisez :

```bash
pnpm dev
```

### Tests

Pour exécuter les tests unitaires :

```bash
pnpm test
```

---

## Collaboration

### Membres de l'équipe

- **Ahmad** : Développement de l'API.
- **Raphael** et **Adrien** : Développement du front-end.

### Progrès actuel

- Tests d'inscription : Validation des critères d'identifiant et de mot de passe.
- Les deux parties (front-end et back-end) doivent encore être connectées.

---

## Notes supplémentaires

- Cette application est destinée aux étudiants et membres du campus ESGI.
- Beaucoup de fonctionnalités sont encore à implémenter.
- Vous avez probablement déjà reçu le lien GitHub de l'API de la part d'Ahmad.
