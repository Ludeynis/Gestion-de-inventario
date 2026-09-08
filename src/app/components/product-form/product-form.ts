import { Component, inject, input, OnInit, computed } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductoService } from "../../services/producto-service";
import { Categoria } from "../../models/producto";
import {Router, RouterLink} from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-product-form',
  imports: [ReactiveFormsModule, RouterLink, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule ],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css',
})
export class ProductForm implements OnInit {
  id = input<string>();
  productoService = inject(ProductoService);
  router = inject(Router);


  ngOnInit(){
    const productoEncontrado = this.productoService.productos().find(p => p.id === Number(this.id())); 

    if (productoEncontrado) {
      this.productForm.patchValue(productoEncontrado);

    } else {
      console.log('no hay, creando uno nuevo');
    }
  }

  onSubmit() {
    if (this.productForm.invalid){
      return;
    }
  
    const idActual = this.id();
    if (idActual){
      this.productoService.actualizarProducto(idActual, this.productForm.getRawValue());
    }else{
      this.productoService.agregarProducto(this.productForm.getRawValue());
    }
      this.router.navigate(['/product-list'])
    }
  

  productForm = new FormGroup({
    nombre: new FormControl('', {nonNullable: true, validators: Validators.required }),
    marca: new FormControl('', {nonNullable: true, validators: Validators.required }),
    categoria: new FormControl<Categoria>('Limpiadores', {nonNullable: true, validators: Validators.required }),
    precio: new FormControl(0, {nonNullable: true, validators: Validators.min(1)}),
    stock: new FormControl(0, {nonNullable: true, validators: Validators.min(0)}),
    descripcion: new FormControl('', {nonNullable: true, validators: Validators.required }),
    imagen: new FormControl('', {nonNullable: true }),
    tipoPiel: new FormControl('', {nonNullable: true, validators: Validators.required }),
    ingredientes: new FormControl('', {nonNullable: true, validators: Validators.required }),
    valoracion: new FormControl(0, { nonNullable: true }),
  });

  tituloFormulario = computed(() => this.id() ? 'Editar producto' : 'Crear producto');



  }
 

