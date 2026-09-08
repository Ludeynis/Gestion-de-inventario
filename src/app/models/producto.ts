export type Estado = 'disponible' | 'agotado';

export type Categoria = 'Limpiadores' | 'Tonicos' | 'Serums' | 'Ampollas' | 'Cremas hidratantes' | 'Protectores solares';

export interface Producto {
    id: number;
    nombre: string;
    marca: string;
    categoria: Categoria;
    precio: number;
    stock: number;
    descripcion: string;
    imagen: string;
    tipoPiel: string;
    ingredientes: string;
    valoracion: number;
    estado: Estado;

}