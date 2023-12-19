import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { StakeholderReportPage } from './stakeholder-report/stakeholder-report.page';  // Assuming the correct path
import { RichiamoCoffeePage } from './richiamo-coffee/richiamo-coffee.page';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'stakeholder',
    loadChildren: () => import('./stakeholder/stakeholder.module').then( m => m.StakeholderPageModule)
  },
  {
    path: 'stakeholder-report',
    loadChildren: () => import('./stakeholder-report/stakeholder-report.module').then( m => m.StakeholderReportPageModule)
  },
  // {
  //   path: 'richiamo-coffee',
  //   loadChildren: () => import('./richiamo-coffee/richiamo-coffee.module').then( m => m.RichiamoCoffeePageModule)
  // },

  { path: '', redirectTo: '/stakeholder-report', pathMatch: 'full' },
  { path: 'stakeholder-report', component: StakeholderReportPage },
  { path: 'richiamo-coffee', loadChildren: () => import('./richiamo-coffee/richiamo-coffee.module').then(m => m.RichiamoCoffeePageModule) },
  
  { path: 'richiamo-coffee', component: RichiamoCoffeePage }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
