import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTablesModule } from 'angular-datatables';
import { LoginComponent } from './login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatGridListModule,MatListModule,MatTableModule,MatCardModule,MatMenuModule,MatSidenavModule,MatIconModule,MatToolbarModule,MatSnackBarModule,MatInputModule,MatButtonModule,MatPaginatorModule,MatCheckboxModule,MatSortModule,MatDialogModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { GlobalComponent } from './global/global.component';
import { PickupDelivaryComponent } from './pickup-delivary/pickup-delivary.component';
import { LocationComponent } from './location/location.component';
import { ClusterComponent } from './cluster/cluster.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { UserComponent } from './user/user.component';
import { ProductsComponent } from './products/products.component';
import { UserTrackerComponent } from './user-tracker/user-tracker.component';
import { HealthComponent } from './health/health.component';
import { CustomerComponent } from './customer/customer.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { LogsComponent } from './logs/logs.component';
import { AuditsComponent } from './audits/audits.component';
import { MetricsComponent } from './metrics/metrics.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { EnduserComponent } from './enduser/enduser.component';
import { TripsComponent } from './trips/trips.component';
import { ConveyanceComponent } from './conveyance/conveyance.component';
import { TrackuserComponent } from './trackuser/trackuser.component';
import { TasksComponent } from './tasks/tasks.component';
import { OrdersComponent } from './orders/orders.component';
import { ExpensesComponent } from './expenses/expenses.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    GlobalComponent,
    PickupDelivaryComponent,
    LocationComponent,
    ClusterComponent,
    WarehouseComponent,
    UserComponent,
    ProductsComponent,
    UserTrackerComponent,
    HealthComponent,
    CustomerComponent,
    ConfigurationComponent,
    LogsComponent,
    AuditsComponent,
    MetricsComponent,
    UserDashboardComponent,
    EnduserComponent,
    TripsComponent,
    ConveyanceComponent,
    TrackuserComponent,
    TasksComponent,
    OrdersComponent,
    ExpensesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    DataTablesModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
