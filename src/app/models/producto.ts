export type Estado = 'disponible' | 'agotado';

export const CATEGORIAS = ['Limpiadores', 'Tonicos', 'Serums', 'Ampollas', 'Cremas hidratantes', 'Protectores solares'] as const;

export type Categoria = typeof CATEGORIAS[number];

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