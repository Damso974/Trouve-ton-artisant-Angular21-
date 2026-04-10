import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  // Valeur tapée dans la barre de recherche
  searchTerm = '';

  constructor(private router: Router) {}

  // Lance la recherche
  onSearch(): void {
    this.router.navigate(['/artisants/tous'], {
      queryParams: { search: this.searchTerm }
    });
  }
}
