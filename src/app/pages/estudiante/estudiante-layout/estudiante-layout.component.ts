import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-estudiante-layout',
  standalone: true,
  imports: [ CommonModule, NavbarComponent, FooterComponent, RouterOutlet, RouterLink],
  templateUrl: './estudiante-layout.component.html',
  styleUrl: './estudiante-layout.component.css'
})
export class EstudianteLayoutComponent {
  constructor(private authService: AuthService, private router: Router) {}


}
