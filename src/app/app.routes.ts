import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';

export const routes: Routes = [
  // Redirige la ruta raíz a 'dashboard'
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: '', // Ruta base para el layout principal
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent)
      },
      {
        path: 'negocios',
        loadComponent: () => import('./pages/negocios/negocios.component').then(m => m.NegociosComponent)
      },
      {
        path: 'barrios',
        loadComponent: () => import('./pages/barrios/barrios.component').then(m => m.BarriosComponent)
      },
      {
        path: 'blog',
        children: [
          {
            path: '', // Ruta para la lista de blogs
            loadComponent: () => import('./pages/blog/blog-list/blog-list.component').then(m => m.BlogListComponent)
          },
          {
            path: ':id', // Ruta para el detalle del blog
            loadComponent: () => import('./pages/blog/blog-detail/blog-detail.component').then(m => m.BlogDetailComponent)
          }
        ]
      },
      {
        path: 'categorias',
        loadComponent: () => import('./pages/categorias/categorias.component').then(m => m.CategoriasComponent)
      },
      {
        path: 'publicidad',
        loadComponent: () => import('./pages/publicidad/publicidad.component').then(m => m.PublicidadComponent)
      },
      {
        path: 'servicios',
        loadComponent: () => import('./pages/servicios/servicios.component').then(m => m.ServiciosComponent)
      },
      {
        path: 'usuarios',
        loadComponent: () => import('./pages/usuarios/usuarios.component').then(m => m.UsuariosComponent)
      },
    ]
  },
  // Ruta wildcard para cualquier ruta no encontrada, redirige a dashboard
  { path: '**', redirectTo: 'dashboard' }
];
