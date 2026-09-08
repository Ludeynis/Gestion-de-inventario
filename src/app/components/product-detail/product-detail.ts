import { Component, input, inject, computed } from '@angular/core';
import { ProductoService } from "../../services/producto-service";
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from "@angular/router";


@Component({
  selector: 'app-product-detail',
  imports: [RouterLink, MatCardModule, MatButtonModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {
  id = input<string>();
  productoService = inject(ProductoService);

  producto = computed(() => {
    return this.productoService.productos().find(p => p.id === Number(this.id()));
  }); 

}
