import { Component } from '@angular/core';
import { InputIcon } from 'primeng/inputicon';
import { IconField } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-filtro',
  standalone: true,
  imports: [InputIcon, IconField, InputTextModule, FormsModule],
  templateUrl: './filtro.component.html',
  styleUrl: './filtro.component.css'
})
export class FiltroComponent {

}
