import { Component, OnInit } from '@angular/core';
import { RecursoService } from '../../../core/services/recurso.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Recurso } from '../../../shared/models/recurso.model';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AlertDialogComponent } from '../../../shared/dialogs/alert-dialog/alert-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-lista-recursos',
  standalone: true,
  imports: [CommonModule, MatSnackBarModule,RouterLink, RouterOutlet, MatDialogModule, MatButtonModule],
  templateUrl: './lista-recursos.component.html',
  styleUrl: './lista-recursos.component.css'
})
export class ListaRecursosComponent implements OnInit {
  recursos: Recurso[] = [];
  cargando = false;

  constructor(
    private recursoService: RecursoService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.cargarRecursos();
  }

  cargarRecursos(): void {
    this.cargando = true;
    this.recursoService.getRecurso().subscribe({
      next: (recursos) => {
        this.recursos = recursos;
        this.cargando = false;
      },
      error: () => {
        this.cargando = false;
        this.snackBar.open('Error al cargar los recursos', 'Cerrar', { duration: 3000 });
      },
    });
  }


}

