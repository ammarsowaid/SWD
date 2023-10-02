import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DefaultLayoutComponent} from "./containers";

const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: "full",


    },
    {
        path: '',
        component: DefaultLayoutComponent,
        // canActivate: [AuthGuard],
        title: 'home',
        data: {
            title: 'home',
        },
        children: [
            {
                path: 'dashboard',
                data: {title: 'dashboard'},
                loadChildren: () =>
                    import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule)
            },  {
                path: 'rptSales',
                data: {title: 'rptSales'},
                loadChildren: () =>
                    import('./views/sales-reports/sales-reports.module').then((m) => m.SalesReportsModule)
            }, {
                path: '',
                data: {title: ''},
                loadChildren: () =>
                    import('./views/widget-core/widget-core.module').then((m) => m.WidgetCoreModule)
            },{
                path: '',
                data: {title: ''},
                loadChildren: () =>
                    import('./views/dynamic-view/dynamic-view.module').then((m) => m.DynamicViewModule)
            },
        ]
    },
    /*{
      path: '404',
      component: Page404Component,
      data: {
        title: 'Page 404'
      }
    },
    {
      path: '500',
      component: Page500Component,
      data: {
        title: 'Page 500'
      }
    },
    {
      path: 'login',
      component: LoginComponent,
      title: 'login',
      data: {
        title: 'login'
      }
    },
    {
      path: 'register',
      component: RegisterComponent,
      data: {
        title: 'Register Page'
      }
    },*/
    {path: '**', redirectTo: '404'}
];


@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            scrollPositionRestoration: 'top',
            anchorScrolling: 'enabled',
            initialNavigation: 'enabledBlocking',
            // relativeLinkResolution: 'legacy'
        })
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
