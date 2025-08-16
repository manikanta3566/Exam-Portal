import { Component } from "@angular/core";
import { MatCard } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { FormsModule, ɵInternalFormsSharedModule } from "@angular/forms";
import { JsonPipe } from "@angular/common";
import { LoginService } from "../../services/login.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  imports: [
    MatCard,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ɵInternalFormsSharedModule,
    FormsModule,
    JsonPipe,
  ],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.css",
})
export class LoginComponent {
  constructor(private loginService: LoginService, private router: Router) {}

  userData = {
    username: "",
    password: "",
  };

  formSubmit() {
    console.log(this.userData);
    this.loginService.generateToken(this.userData).subscribe(
      (data: any) => {
        console.log(data);
        this.loginService.storeUserDataToLocalStorage(data);
        if (this.loginService.getUserRole() == "ADMIN") {
          this.router.navigate(["admin-dashboard"]);
        } else if (this.loginService.getUserRole() == "USER") {
          this.router.navigate(["user-dashboard"]);
        }else{
          this.loginService.logout();
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  reset() {
    this.userData = {
      username: "",
      password: "",
    };
  }
}
