import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

// PrimeNG 20 (Standalone)
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';

interface Category {
  id: string;
  label: string;
  img: string;
}

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [CommonModule, ButtonModule, TooltipModule],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent {

  categories: Category[] = [
    { id: 'rest', label: 'Restaurantes', img: 'assets/img/restaurant.jpg' },
    { id: 'pan', label: 'Panaderías', img: 'assets/img/panaderia.jpg' },
    { id: 'tiendas', label: 'Tiendas', img: 'assets/img/tiendas.jpg' },
    { id: 'med', label: 'Medicamentos', img: 'assets/img/medicamentos.jpg' },
    { id: 'rep', label: 'Reparación', img: 'assets/img/reparacion.jpg' },
    { id: 'belleza', label: 'Salud y Belleza', img: 'assets/img/belleza.jpg' },
    { id: 'educ', label: 'Educación', img: 'assets/icons/book.png' },
    { id: 'audio', label: 'Audio', img: 'assets/icons/headphones.png' },
    { id: 'masc', label: 'Mascotas', img: 'assets/icons/pet.png' },
    { id: 'deporte', label: 'Deporte', img: 'assets/icons/football.png' },
    { id: 'entre', label: 'Entretenimiento', img: 'assets/icons/games.png' },
    { id: 'manual', label: 'Manualidades', img: 'assets/icons/cards.png' }
  ];

  scrollAmount = 300;

  @HostListener('window:resize')
  onResize() {
    this.adjustScrollAmount();
  }

  ngOnInit() {
    this.adjustScrollAmount();
  }

  private adjustScrollAmount() {
    if (window.innerWidth < 480) this.scrollAmount = 220;
    else if (window.innerWidth < 768) this.scrollAmount = 260;
    else this.scrollAmount = 300;
  }

  scrollLeft(container: HTMLElement) {
    container.scrollBy({ left: -this.scrollAmount, behavior: 'smooth' });
  }

  scrollRight(container: HTMLElement) {
    container.scrollBy({ left: this.scrollAmount, behavior: 'smooth' });
  }
}




