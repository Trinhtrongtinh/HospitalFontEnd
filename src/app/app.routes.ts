import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { YHocComponent } from './pages/news/y-hoc/y-hoc.component';
import { SuKienComponent } from './pages/news/su-kien/su-kien.component';
import { HoiThaoComponent } from './pages/news/hoi-thao/hoi-thao.component';
import { BacSiComponent } from './pages/bac-si/bac-si.component';
import { ChuyenKhoaComponent } from './pages/chuyen-khoa/chuyen-khoa.component';
import { LienHeComponent } from './pages/lien-he/lien-he.component';
import { TongQuatComponent } from './pages/dich-vu/tong-quat/tong-quat.component';
import { DoanhNghiepComponent } from './pages/dich-vu/doanh-nghiep/doanh-nghiep.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    {path: 'tin-tuc/y-hoc', component:YHocComponent},
    {path:'tin-tuc/su-kien',component:SuKienComponent},
    {path:'tin-tuc/hoi-thao',component:HoiThaoComponent},
    {path: 'bac-si', component:BacSiComponent},
    {path: 'chuyen-khoa', component:ChuyenKhoaComponent},
    {path: 'lien-he', component:LienHeComponent},
    {path:'dich-vu/tong-quat', component:TongQuatComponent},
    {path:'dich-vu/doanh-nghiep', component:DoanhNghiepComponent}
];
