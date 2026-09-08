import { Routes } from '@angular/router';
import { Dashboard } from "./components/dashboard/dashboard";
import { ProductDetail } from "./components/product-detail/product-detail";
import { ProductForm } from "./components/product-form/product-form";
import { ProductList } from "./components/product-list/product-list";

export const routes: Routes = [
    {
        path: 'dashboard',
        component: Dashboard
    },

    {
        path: 'product-detail/:id',
        component: ProductDetail
    },

    {
        path: 'product-form',
        component: ProductForm
    },
    {
        path: 'product-form/:id',
        component: ProductForm
    },
    {
        path: 'product-list',
        component: ProductList
    },

    {
        path: '', redirectTo:'dashboard', pathMatch: 'full'
        
    },

];
