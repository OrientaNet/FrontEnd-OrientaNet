import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { PlanService } from '../../../core/services/plan.service';
import { SuscripcionService } from '../../../core/services/suscripcion.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-suscripcion',
  standalone: true,
  imports: [CommonModule, MatSnackBarModule],
  templateUrl: './suscripcion.component.html',
  styleUrl: './suscripcion.component.css',
})
export class SuscripcionComponent implements OnInit {
  planes: any[] = [];
  isLoading: boolean = true;

  private planService = inject(PlanService);
  private suscripcionService = inject(SuscripcionService);
  private snackBar = inject(MatSnackBar);
  private authService = inject(AuthService);

  ngOnInit(): void {
    this.obtenerPlanes();
  }

  obtenerPlanes(): void {
    this.planService.obtenerPlanes().subscribe({
      next: (planes) => {
        this.planes = planes;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.showSnackBar('Error al cargar los planes.');
      }
    });
  }

  suscribirse(plan: any): void {
    const authData = this.authService.getUser();
    if (!authData || !authData.id) {
      this.showSnackBar('Error: No se pudo obtener el ID del usuario.');
      return;
    }

    const usuarioId = authData.id;
    const metodoPago = 'PAYPAL';

    // Paso 1: Suscribirse al plan
    this.suscripcionService.suscribirse(usuarioId, plan.id, plan.precio, metodoPago).subscribe({
      next: (suscripcionResponse) => {
        const suscripcionId = suscripcionResponse.id; // Obtiene el ID de la suscripción creada

        if (!suscripcionId) {
          this.showSnackBar('Error: No se recibió el ID de la suscripción.');
          return;
        }

        // Paso 2: Registrar el pago en el backend
        this.suscripcionService.registrarPago(suscripcionId, plan.precio, metodoPago).subscribe({
          next: (pagoResponse) => {
            if (pagoResponse.linkDePagoPaypal) {
              window.location.href = pagoResponse.linkDePagoPaypal; // Redirigir a PayPal
            } else {
              this.showSnackBar('No se pudo generar el enlace de pago.');
            }
          },
          error: () => {
            this.showSnackBar('Error al registrar el pago.');
          }
        });
      },
      error: () => {
        this.showSnackBar('Error al iniciar la suscripción.');
      }
    });
  }

  private showSnackBar(message: string): void {
    this.snackBar.open(message, 'Cerrar', {
      duration: 3000,
      verticalPosition: 'top',
    });
  }
}
