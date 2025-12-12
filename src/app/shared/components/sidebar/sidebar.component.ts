import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    DrawerModule,
    ButtonModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  visible = false;
}

