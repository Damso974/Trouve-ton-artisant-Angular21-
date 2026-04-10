import { Component, computed, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ArtisanService } from '../../services/artisan.service';
import { Artisant } from '../../models/artisantmodèle';

@Component({
  selector: 'app-artisants-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './artisants-list.html',
  styleUrl: './artisants-list.css',
})
export class ArtisantsList {

  // Signal contenant tous les artisans
  artisants = signal<Artisant[]>([]);

  // Signal contenant la catégorie active
  selectedCategory = signal('');

  // Signal contenant le texte recherché
  searchTerm = signal('');

  // Liste filtrée automatiquement selon la catégorie + la recherche
  filteredArtisants = computed(() =>
    this.artisants().filter(artisant => {

      // Vérifie si l'artisan correspond à la catégorie sélectionnée
      const matchesCategory =
        this.selectedCategory() === 'tous' ||
        this.normalizeText(artisant.category) === this.selectedCategory();

      // Texte de recherche normalisé
      const normalizedSearch = this.normalizeText(this.searchTerm());

      // Vérifie si la recherche correspond au nom, à la spécialité ou à la ville
      const matchesSearch =
        normalizedSearch === '' ||
        this.normalizeText(artisant.name).includes(normalizedSearch) ||
        this.normalizeText(artisant.specialty).includes(normalizedSearch) ||
        this.normalizeText(artisant.location).includes(normalizedSearch);

      // L'artisan doit respecter les 2 conditions
      return matchesCategory && matchesSearch;
    })
  );

  constructor(
    private artisanService: ArtisanService,
    private route: ActivatedRoute
  ) {
    // Charge tous les artisans
    this.artisants.set(this.artisanService.getArtisant());

    // Écoute les changements du paramètre "category"
    this.route.paramMap.subscribe(params => {
      const category = params.get('category');

      if (category) {
        this.selectedCategory.set(category);
      }
    });

    // Écoute les changements du paramètre de recherche dans l'URL
    this.route.queryParamMap.subscribe(params => {
      const search = params.get('search') || '';
      this.searchTerm.set(search);
    });
  }
// Génère les étoiles selon la note
  getStars(rate: number): { filled: boolean }[] {
  return Array.from({ length: 5 }, (_, index) => ({
    filled: index < Math.round(rate)
  }));
}

  // Transforme un texte en minuscules sans accents
  normalizeText(text: string): string {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }
}
