import { Routes } from "@angular/router";
import { SignupComponent } from "./pages/signup/signup.component";
import { LoginComponent } from "./pages/login/login.component";
import { AdminDashboardComponent } from "./pages/admin/admin-dashboard/admin-dashboard.component";
import { UserDashboardComponent } from "./pages/user/user-dashboard/user-dashboard.component";
import { AdminDashboardGuard } from "./guards/admin-dashboard.guard";
import { UserDashboardGuard } from "./guards/user-dashboard.guard";
import { ProfileComponent } from "./pages/profile/profile.component";

export const routes: Routes = [
  {
    path: "signup",
    component: SignupComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "admin-dashboard",
    component: AdminDashboardComponent,
    canActivate:[AdminDashboardGuard],
    children:[
      {
        path:"profile",
        component:ProfileComponent
      }
    ]
  },
  {
    path: "user-dashboard",
    component: UserDashboardComponent,
    canActivate:[UserDashboardGuard]
  },
];
