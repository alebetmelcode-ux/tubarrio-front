// File: negocios.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { TooltipModule } from 'primeng/tooltip';


export interface Establecimiento {
id: number;
name: string;
address: string;
namebarrio: string;
image: string;
status: 'Abierto' | 'Cerrado' | 'Horario limitado';
favorite?: boolean;
}


@Component({
selector: 'app-negocios',
standalone: true, // componente standalone como solicitado,
imports: [CommonModule, CardModule, ButtonModule, BadgeModule, AvatarModule, TooltipModule],
templateUrl: './negocios.component.html',
styleUrls: ['./negocios.component.css']
})
export class NegociosComponent {
establecimientos: Establecimiento[] = [
{
id: 1,
name: 'Surtidora De Aves',
address: 'Cra 113 # 81 -45',
image: '/assets/img/barrios.jpg',
status: 'Cerrado',
namebarrio: 'Villa del Prado'
},
{
id: 2,
name: 'Natural Broaster',
address: 'Calle 88 # 112 1 -15',
image: 'assets/img/barrios.jpg',
status: 'Cerrado',
namebarrio: 'Villa del Prado'
},
{
id: 3,
name: 'Natural Broaster',
address: 'Calle 88 # 112 1 -15',
image: 'assets/img/barrios.jpg',
status: 'Cerrado',
namebarrio: 'Villa del Prado'
},
{
id: 4,
name: 'Natural Broaster',
address: 'Calle 88 # 112 1 -15',
image: 'assets/img/barrios.jpg',
status: 'Cerrado',
namebarrio: 'Villa del Prado'
},
{
id: 5,
name: 'Natural Broaster',
address: 'Calle 88 # 112 1 -15',
image: 'assets/img/barrios.jpg',
status: 'Cerrado',
namebarrio: 'Villa del Prado'
},

{
id: 6,
name: 'Natural Broaster',
address: 'Calle 88 # 112 1 -15',
image: 'assets/img/barrios.jpg',
status: 'Cerrado',
namebarrio: 'Villa del Prado'
},
{
id: 7,
name: 'Surtidora De Aves',
address: 'Cra 113 # 81 -45',
image: '/assets/img/barrios.jpg',
status: 'Cerrado',
namebarrio: 'Villa del Prado'
},
{
id: 8,
name: 'Natural Broaster',
address: 'Calle 88 # 112 1 -15',
image: 'assets/img/barrios.jpg',
status: 'Cerrado',
namebarrio: 'Villa del Prado'
},
{
id: 9,
name: 'Natural Broaster',
address: 'Calle 88 # 112 1 -15',
image: 'assets/img/barrios.jpg',
status: 'Cerrado',
namebarrio: 'Villa del Prado'
},
{
id: 10,
name: 'Natural Broaster',
address: 'Calle 88 # 112 1 -15',
image: 'assets/img/barrios.jpg',
status: 'Cerrado',
namebarrio: 'Villa del Prado'
},
{
id: 11,
name: 'Natural Broaster',
address: 'Calle 88 # 112 1 -15',
image: 'assets/img/barrios.jpg',
status: 'Cerrado',
namebarrio: 'Villa del Prado'
},

{
id: 12,
name: 'Natural Broaster',
address: 'Calle 88 # 112 1 -15',
image: 'assets/img/barrios.jpg',
status: 'Cerrado',
namebarrio: 'Villa del Prado'
},
// --- agrega más items o carga desde API ---
];
console: any;


toggleFavorite(e: MouseEvent, item: Establecimiento) {
e.stopPropagation();
item.favorite = !item.favorite;
}


openDetail(item: Establecimiento) {
// aquí puedes navegar a la página de detalle o abrir un dialog
console.log('abrir detalle', item);
}
}