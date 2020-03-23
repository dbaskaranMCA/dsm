import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { GlobalComponent } from './global/global.component';
import { PickupDelivaryComponent } from './pickup-delivary/pickup-delivary.component';
import { LocationComponent } from './location/location.component';
import { ClusterComponent } from './cluster/cluster.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { UserComponent } from './user/user.component';
import { CustomerComponent } from './customer/customer.component'
import { ProductsComponent } from './products/products.component';
import { UserTrackerComponent } from './user-tracker/user-tracker.component';
import { HealthComponent } from './health/health.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { LogsComponent } from './logs/logs.component'
import { AuditsComponent } from './audits/audits.component';
import { MetricsComponent } from './metrics/metrics.component';
import { EnduserComponent } from './enduser/enduser.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { TripsComponent } from './trips/trips.component';
import { ConveyanceComponent } from './conveyance/conveyance.component';
import { TrackuserComponent } from './trackuser/trackuser.component'
import { TasksComponent } from './tasks/tasks.component';
import { OrdersComponent } from './orders/orders.component';
import { ExpensesComponent } from './expenses/expenses.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin', component: HomeComponent,
    children: [
      { path: 'global', component: GlobalComponent },
      { path: 'pickup', component: PickupDelivaryComponent },
      { path: 'location', component: LocationComponent },
      { path: 'cluster', component: ClusterComponent },
      { path: 'warehouse', component: WarehouseComponent },
      { path: 'user', component: UserComponent },
      { path: 'customer', component: CustomerComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'userTracker', component: UserTrackerComponent },
      { path: 'health', component: HealthComponent },
      { path: 'configuration', component: ConfigurationComponent },
      { path: 'logs', component: LogsComponent },
      { path: 'audits', component: AuditsComponent },
      { path: 'metrics', component: MetricsComponent }
    ]
  },
  {
    path: 'enduser', component: EnduserComponent,
    children: [
      { path: 'dashboard', component: UserDashboardComponent },
      { path: 'trips', component: TripsComponent },
      { path: 'conveyance', component: ConveyanceComponent },
      { path: 'trackuser', component: TrackuserComponent },
      { path: 'tasks', component: TasksComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'expenses', component: ExpensesComponent }      
    ]
  },
  {
    path: 'login',
    redirectTo: '/login',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false, enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
