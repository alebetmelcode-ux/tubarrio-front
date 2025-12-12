import { Component, ElementRef, ViewChild } from '@angular/core';

// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// PrimeNG
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Toolbar } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { SharedModule } from 'primeng/api';



// Router
import { Router, RouterModule } from '@angular/router';

// Leaflet
import * as L from 'leaflet';

// Componentes propios
import { FiltroComponent } from '../filtro/filtro.component';
import { Drawer } from "primeng/drawer";




@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    AvatarModule, SharedModule,
    FiltroComponent,
    Drawer,
    
]
})
export class HeaderComponent {


  // Menú móvil
  mobileMenuOpen = false;

  // Modal / mapa
  @ViewChild('mapContainer', { static: false }) mapContainer!: ElementRef<HTMLDivElement>;
  showLocationModal = false;
  map: L.Map | null = null;
  marker: L.Marker | null = null;

  // Ubicación
  manualAddress = '';
  selectedLocation: { lat: number; lng: number } | null = null;
menuOpen: any;
user: any;
visible: any;

  constructor(private router: Router) {}

  // ------------------------------------------------------
  // 🔄 Menú móvil
  // ------------------------------------------------------
  toggleMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  // ------------------------------------------------------
  // 🚪 Logout
  // ------------------------------------------------------
  logout(): void {
    // Limpia credenciales (ajusta según tu auth)
    localStorage.removeItem('token');
    // Si guardas más cosas:
    // localStorage.removeItem('user');

    // Cierra menús / modales
    this.mobileMenuOpen = false;
    this.showLocationModal = false;

    // Redirige a login
    this.router.navigate(['/login']);
  }

  // ------------------------------------------------------
  // 🔵 Abrir el modal
  // ------------------------------------------------------
  openLocationModal(): void {
    this.showLocationModal = true;

    // Inicializa el mapa después de que el modal se renderice
    setTimeout(() => this.initMap(), 200);
  }

  // ------------------------------------------------------
  // 🟢 Inicializar mapa Leaflet
  // ------------------------------------------------------
  initMap(): void {
    // Si el mapa ya existe, destruirlo para evitar errores
    if (this.map) {
      this.map.remove();
      this.map = null;
    }

    if (!this.mapContainer) return;

    this.map = L.map(this.mapContainer.nativeElement).setView([6.2442, -75.5812], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19
    }).addTo(this.map);

    // Evento: clic en el mapa
    this.map.on('click', (e: L.LeafletMouseEvent) => {
      this.setMarker(e.latlng.lat, e.latlng.lng);
    });
  }

  // ------------------------------------------------------
  // 📍 Crear/actualizar marcador
  // ------------------------------------------------------
  setMarker(lat: number, lng: number): void {
    if (!this.map) return;

    if (this.marker) {
      this.marker.remove();
      this.marker = null;
    }

    this.marker = L.marker([lat, lng]).addTo(this.map);
    this.selectedLocation = { lat, lng };
  }

  // ------------------------------------------------------
  // 🔎 Buscar dirección manual
  // ------------------------------------------------------
  async searchAddress(): Promise<void> {
    if (!this.manualAddress.trim()) {
      return;
    }

    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(this.manualAddress)}`;

    try {
      const res = await fetch(url);
      const data: any[] = await res.json();

      if (!data || data.length === 0) {
        alert('Ubicación no encontrada');
        return;
      }

      const loc = data[0];
      const lat = parseFloat(loc.lat);
      const lon = parseFloat(loc.lon);

      this.setMarker(lat, lon);

      if (this.map) {
        this.map.setView([lat, lon], 15);
      }
    } catch (error) {
      console.error('Error buscando dirección', error);
      alert('Ocurrió un error buscando la ubicación');
    }
  }

  // ------------------------------------------------------
  // 🟩 Botón: Establecer ubicación
  // ------------------------------------------------------
  confirmLocation(): void {
    if (!this.selectedLocation) {
      alert('Selecciona una ubicación primero');
      return;
    }

    console.log('📍 Ubicación establecida:', this.selectedLocation);

    // Ejemplo: guardar en localStorage
    // localStorage.setItem('ubicacion', JSON.stringify(this.selectedLocation));

    this.showLocationModal = false;
  }
}
