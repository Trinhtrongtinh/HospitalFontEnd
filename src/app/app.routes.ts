import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { YHocComponent } from './pages/news/y-hoc/y-hoc.component';
import { SuKienComponent } from './pages/news/su-kien/su-kien.component';
import { HoiThaoComponent } from './pages/news/hoi-thao/hoi-thao.component';
import { BacSiComponent } from './pages/bac-si/bac-si.component';
import { ChuyenKhoaComponent } from './pages/chuyen-khoa/chuyen-khoa.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    {path: 'tin-tuc/y-hoc', component:YHocComponent},
    {path:'tin-tuc/su-kien',component:SuKienComponent},
    {path:'tin-tuc/hoi-thao',component:HoiThaoComponent},
    {path: 'bac-si', component:BacSiComponent},
    {path: 'chuyen-khoa', component:ChuyenKhoaComponent}
];
 