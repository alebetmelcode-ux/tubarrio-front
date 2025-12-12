import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, CheckboxModule, InputTextModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {
checked1 = signal<boolean>(true);
}
