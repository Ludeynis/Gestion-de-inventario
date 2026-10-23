import { Component, inject, computed } from '@angular/core';
import { ProductoService } from "../../services/producto-service";
import { RouterLink } from "@angular/router";
import { MatCardModule } from '@angular/material/card';
import { CurrencyPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-dashboard',
  imports: [RouterLink, MatCardModule, CurrencyPipe, MatIconModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  productoService = inject(ProductoService);

  productosAgotados = computed(() => {
    return this.productoService.productos().filter(p => p.estado === 'agotado').length;
    });

  totalProductos = computed (() =>{
    return this.productoService.productos().length;

    });

  stockBajo = computed (() =>{
    return this.productoService.productos().filter(p => p.stock > 0 && p.stock <= 3).length;
  });

  valorTotal = computed (()=>{
    return this.productoService.productos().reduce((acc, p) => acc + ( p.precio * p.stock), 0);
  });


}
