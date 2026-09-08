import { Injectable, signal } from '@angular/core';
import { Producto } from "../models/producto";
import { Productos } from "../data/mock-products";


@Injectable({
  providedIn: 'root',
})
export class ProductoService {
 private _productos = signal<Producto[]>(Productos);
 productos = this._productos.asReadonly(); //para acceder al servicio que declaramos como privado arriba

 agregarProducto(nuevoProducto: Omit<Producto, 'id' | 'estado'>) { //omit sirve para quitar un campo del array, en mi caso el id del array productos, ya que se genera automáticamente
  const maxId = Math.max(...this._productos().map(producto => producto.id));
  const nuevoId = maxId + 1;
  const nuevoEstado = (nuevoProducto.stock > 0 ? 'disponible' : 'agotado');
  const productoCompleto: Producto = {...nuevoProducto, id: nuevoId, estado: nuevoEstado} // el ... lo que hace es copiar todas las propiedades de nuevoProduco aqui dentro y ademas añadir otras
  this._productos.set([...this._productos(), productoCompleto]);
 }
 
 actualizarProducto(id:string, datosActualizados: Omit<Producto, 'id' | 'estado'>) {
  const nuevoEstado = (datosActualizados.stock > 0 ? 'disponible' : 'agotado');
  this._productos.update(productosActuales => {
     return productosActuales.map(p =>
    p.id === Number(id) ? {...datosActualizados, id: Number(id), estado: nuevoEstado} : p);
 }
 
)};

eliminarProducto(id:string) {
  this._productos.set(this._productos().filter(p => !(p.id === Number(id)))); //quedate con todos los productos cuyo id NO sea igual al que quiero eliminar
}


};
