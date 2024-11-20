import { UserProfileService } from './../../../core/services/user-profile.service';
import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../../../shared/models/usuario.model';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario-detalle',
  standalone: true,
  imports: [CommonModule, MatSnackBarModule, ReactiveFormsModule],
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuarioDetalleComponent implements OnInit {
  usuarioForm: FormGroup; // Formulario para ingresar el ID
  usuario: Usuario | null = null; // Objeto para almacenar los datos del usuario
  cargando: boolean = false; // Indicador de carga

  constructor(
    private fb: FormBuilder,
    private userProfileService: UserProfileService,
    private snackBar: MatSnackBar
  ) {
    // Configurar el formulario reactivo
    this.usuarioForm = this.fb.group({
      id: ['', [Validators.required, Validators.pattern(/^\d+$/)]], // Validar que sea un número
    });
  }

  ngOnInit(): void {}

  // Método para buscar el usuario por ID
  buscarUsuario(): void {
    if (this.usuarioForm.invalid) {
      this.snackBar.open('Por favor, ingresa un ID válido', 'Cerrar', {
        duration: 3000,
      });
      return;
    }

    const id = this.usuarioForm.value.id;
    this.cargando = true;
    this.usuario = null;

    this.userProfileService.getUsuarioById(id).subscribe({
      next: (usuario) => {
        this.usuario = usuario; // Guardar los datos del usuario
        this.cargando = false;
      },
      error: (err) => {
        this.cargando = false;
        this.snackBar.open(
          'No se encontró el usuario o hubo un error en la carga',
          'Cerrar',
          {
            duration: 3000,
          }
        );
        console.error('Error:', err);
      },
    });
  }
}
