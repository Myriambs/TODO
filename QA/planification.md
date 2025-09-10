# Plan de Tests - Application Todo List MERN

## 1. Introduction

### 1.1. Objet du Document
Ce document décrit la stratégie, l'approche et le plan de test pour le développement de l'application Todo List MERN. Il couvre les activités de test pour le premier sprint et établit le cadre pour les sprints futurs.

### 1.2. Portée
Le présent plan couvre:
- Tests fonctionnels des features CRUD
- Tests d'interface utilisateur
- Tests d'API RESTful
- Tests de régression de base
- Tests smoke/sanity

### 1.3. Références
- Spécifications fonctionnelles v1.0
- User Stories JIRA
- Documentation API Swagger
- Plan de projet Agile

## 2. Stratégie de Test

### 2.1. Approche de Test
Modèle de test agile avec cycles de test alignés sur les sprints de 2 semaines. Tests continus avec intégration dans le pipeline CI/CD.

### 2.2. Types de Tests
| Type de Test | Outil/Méthode | Responsable | Fréquence |
|--------------|---------------|-------------|-----------|
| Tests Unitaires | Jest, React Testing Library | Développeurs | À chaque commit |
| Tests d'Intégration API | Postman, Supertest | QA | Daily |
| Tests Système | Playwright, Tests Manuels | QA | Par sprint |
| Tests de Smoke | Playwright, Checklist | QA | Après chaque déploiement |
| Tests de Régression | Playwright, Tests Manuels | QA | Avant release |

### 2.3. Critères de Complétude
- Couverture de test > 80%
- Tous les tests prioritaires PASS
- 0 bug Blocker/Critical ouvert
- Validation PO obtenue

## 3. Matrice de Traçabilité

### 3.1. Fonctionnalités vs Tests
| ID Fonctionnalité | Description | Priorité | Couverture Test |
|-------------------|-------------|----------|-----------------|
| FR1 | Ajouter tâche | High | Test Manuel + Automatisation |
| FR2 | Afficher tâches | High | Test Manuel + Automatisation |
| FR3 | Modifier état | High | Test Manuel + Automatisation |
| FR4 | Supprimer tâche | High | Test Manuel + Automatisation |
| FR5 | Filtrer tâches | Medium | Test Manuel |
| FR6 | Compteur tâches | Medium | Test Manuel |

### 3.2. User Stories vs Tests
| ID Story | Scénarios de Test | Statut |
|----------|-------------------|--------|
| TODO-101 | 5 scénarios Gherkin | À faire |
| TODO-102 | 3 scénarios Gherkin | À faire |
| TODO-103 | 4 scénarios Gherkin | À faire |

## 4. Planification des Ressources

### 4.1. Équipe de Test
| Rôle | Responsable | Disponibilité |
|------|-------------|---------------|
| QA Lead | [Votre Nom] | 100% |
| Développeur | Dev Team | Support selon besoin |

### 4.2. Environnements de Test
| Environnement | URL | But | Base de Données |
|---------------|-----|-----|-----------------|
| Development | http://localhost:3000 | Dev initial | MongoDB Local |
| Staging | https://todo-staging.herokuapp.com | Tests QA | MongoDB Atlas Test |
| Production | https://todo-app.com | Live | MongoDB Atlas Prod |

### 4.3. Outillage
| Catégorie | Outil | Version |
|-----------|-------|---------|
| Gestion de tests | Xray for JIRA | 3.5.2 |
| Automatisation UI | Playwright | 1.40.0 |
| Tests API | Postman | 10.0+ |
| Navigateurs | Chrome, Firefox | Latest |

## 5. Estimation et Planning

### 5.1. Estimation des Efforts
| Activité | Effort (jours-homme) | Dépendances |
|----------|----------------------|-------------|
| Analyse des besoins | 0.5 | Spécifications finalisées |
| Conception tests manuels | 2 | User Stories finalisées |
| Exécution tests manuels | 1.5 | Environnement disponible |
| Automatisation smoke tests | 1.5 | Tests manuels validés |
| Rapport et documentation | 0.5 | Tests complétés |

### 5.2. Calendrier des Tests
```mermaid
gantt
    title Calendrier des Tests - Sprint 1
    dateFormat  YYYY-MM-DD
    section Analyse et Conception
    Analyse besoins           :a1, 2024-01-15, 1d
    Rédaction plans de test   :a2, after a1, 2d
    section Exécution
    Tests manuels Cycle 1     :b1, after a2, 2d
    Report de bugs            :b2, after b1, 1d
    Tests de regression       :b3, after b2, 1d
    section Automatisation
    Scripts smoke tests       :c1, after a2, 2d
    section Reporting
    Rapport final             :d1, after b3, 1d
    ## 6. Gestion des Risques

### 6.1. Identification des Risques
| Risque | Impact | Probabilité | Statut |
|--------|--------|-------------|--------|
| Retard livraison dev | High | Medium | Mitigé |
| Environnement instable | High | Low | Surveillé |
| Données de test corrompues | Medium | Medium | Mitigé |
| Couverture test insuffisante | High | Low | Accepté |

### 6.2. Plan d'Atténuation
- **R1:** Tests progressifs sur features disponibles
- **R2:** Scripts de reset de base de données
- **R3:** Backup manuel des jeux de test
- **R4:** Revue de couverture avec PO

## 7. Critères d'Entrée/Sortie

### 7.1. Critères d'Entrée
- [ ] Build déployé sur environnement staging
- [ ] Release notes fournies
- [ ] Tests unitaires passants (> 80% coverage)
- [ ] Documentation API à jour

### 7.2. Critères de Sortie
- [ ] 100% des tests planifiés exécutés
- [ ] 0 bug Blocker/Critical ouvert
- [ ] Rapport de test complété
- [ ] Validation PO obtenue

### 7.3. Critères de Suspension/Reprise
- **Suspension:** Environnement inaccessible > 4h
- **Reprise:** Correctif déployé et vérifié

## 8. Livrables de Test

- Plans de test par feature
- Cas de test dans Xray/JIRA
- Scripts d'automatisation Playwright
- Collections Postman
- Rapports d'exécution
- Rapport de bugs
- Rapport final de test

## 9. Annexes

### 9.1. Jeux de Données de Test
```json
{
  "validTask": "Faire les courses",
  "longTask": "A".repeat(255),
  "emptyTask": "",
  "specialCharsTask": "Task @#€%&*"
}