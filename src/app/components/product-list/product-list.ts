import { Component, signal, computed } from '@angular/core';
import { ProductoService } from "../../services/producto-service";
import { inject } from "@angular/core";
import { RouterLink } from "@angular/router";
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-product-list',
  imports: [RouterLink, MatCardModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  productoService = inject(ProductoService);

  eliminar(id:number) {
    return this.productoService.eliminarProducto(String(id));
  }

  textoBusqueda = signal('');
  categoriaSeleccionada = signal<string>('');

  productosFiltrados = computed(() => {
    const quitarAcentos = (texto: string) => texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const texto = quitarAcentos(this.textoBusqueda().toLowerCase());
    const categoria = this.categoriaSeleccionada();
    return this.productoService.productos().filter(p => {
      const coincideNombre = quitarAcentos(p.nombre.toLowerCase()).includes(texto);
      const coincideCategoria = categoria === '' || p.categoria === categoria;
      return coincideNombre && coincideCategoria;
    });
  });

}
