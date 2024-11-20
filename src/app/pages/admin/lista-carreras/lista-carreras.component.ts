import { Component, OnInit } from '@angular/core';
import { CarreraService } from '../../../core/services/carrera.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Carrera } from '../../../shared/models/carrera.model';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AlertDialogComponent } from '../../../shared/dialogs/alert-dialog/alert-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-lista-carreras',
  standalone: true,
  imports: [CommonModule, MatSnackBarModule,RouterLink, RouterOutlet, MatDialogModule, MatButtonModule],
  templateUrl: './lista-carreras.component.html',
  styleUrl: './lista-carreras.component.css'
})
export class ListaCarrerasComponent implements OnInit {
  carreras: Carrera[] = [];
  cargando = false;

  constructor(
    private carreraService: CarreraService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.cargarCarreras();
  }

  cargarCarreras(): void {
    this.cargando = true;
    this.carreraService.getCarreras().subscribe({
      next: (carreras) => {
        this.carreras = carreras;
        this.cargando = false;
      },
      error: () => {
        this.cargando = false;
        this.snackBar.open('Error al cargar las carreras', 'Cerrar', { duration: 3000 });
      },
    });
  }


}
