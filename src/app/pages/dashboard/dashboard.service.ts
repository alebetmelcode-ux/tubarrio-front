import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DashboardStats } from './dashboard.model';
import { Categoria } from '../categorias/categoria.model';
import { Barrio } from '../barrios/barrio.model';
import { Negocio } from '../negocios/models/negocio.interface';
import { Servicio } from '../../shared/models/servicio.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  getDashboardStats(): Observable<DashboardStats> {
    // En una aplicación real, aquí llamarías a los servicios correspondientes
    // para obtener los conteos de la base de datos.
    // Para este ejemplo, usaremos datos simulados.
    const stats: DashboardStats = {
      totalNegocios: 150,
      totalBarrios: 25,
      totalCategorias: 12,
      totalServicios: 45
    };
    return of(stats);
  }
}