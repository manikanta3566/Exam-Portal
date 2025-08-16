import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { LoginService } from "../services/login.service";

@Injectable({
  providedIn: 'root'   // <-- makes the guard available globally
})
export class AdminDashboardGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    if (
      this.loginService.isUserLoggedIn() &&
      this.loginService.getUserRole() === "ADMIN"
    ) {
      return true;
    }
    return this.router.createUrlTree(["/login"]);
  }
}
