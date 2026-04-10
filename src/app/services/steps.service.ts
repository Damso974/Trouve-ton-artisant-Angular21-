import { Injectable } from '@angular/core';
import { Step } from '../models/step.modele';

@Injectable({
  providedIn: 'root',
})
export class StepsService {

  // Tableau contenant les 4 étapes du fonctionnement du site
  private steps: Step[] = [
     {
      id: 1,
      title: "Choisir la catégorie d’artisanat dans le menu",
      description: "Naviguez dans notre menu pour sélectionner la catégorie d’artisanat qui correspond à vos besoins.",
    },
    {
      id: 2,
      title: "Choisir un artisan",
      description: "Explorez les profils des artisans disponibles dans la catégorie choisie.",
    },
    {
      id: 3,
      title: "Le contacter via le formulaire de contact",
      description: "Une fois votre artisan choisi, contactez-le directement via notre formulaire.",
    },
    {
      id: 4,
      title: "Une réponse sous 48h",
      description: "Votre demande sera traitée rapidement et vous recevrez une réponse sous 48 heures.",
    }
  ];

  // Retourne toutes les étapes
  getSteps(): Step[] {
    return this.steps;
  }
}
