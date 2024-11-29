import { Component, OnInit } from '@angular/core';
import { RecursoService } from '../../../core/services/recurso.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Recurso } from '../../../shared/models/recurso.model';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-recursos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-recursos.component.html',
  styleUrls: ['./lista-recursos.component.css']
})
export class ListaRecursosEstudianteComponent implements OnInit {
  recursos: Recurso[] = [];
  cargando = false;

  constructor(
    private recursoService: RecursoService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute
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
      }
    });
  }
}
