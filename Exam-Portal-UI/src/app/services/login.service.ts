import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_ENDPOINTS } from "../config/api.constants";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(private http: HttpClient) {}

  //generate token
  generateToken(userData: any) {
    return this.http.post(`${API_ENDPOINTS.AUTH.LOGIN}`, userData);
  }

  storeUserDataToLocalStorage(data: any) {
    // store tokens
    localStorage.setItem("accessToken", data.accessToken);
    localStorage.setItem("refreshToken", data.refreshToken);

    // store user object as string
    localStorage.setItem("user", JSON.stringify(data.user));
  }

  logout() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
  }

  getUserDataFromLocalStorage() {
    return JSON.parse(localStorage.getItem("user") || "{}");
  }

  isUserLoggedIn(){
    if(localStorage.getItem('accessToken')){
      return true
    }
    return false;
  }

  getUserRole(){
    return this.getUserDataFromLocalStorage().roles[0];
  }
}
