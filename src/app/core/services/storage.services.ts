import { Injectable } from "@angular/core";
import { AuthRespoonse } from "../../shared/models/auth-response.model";

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private authKey = 'orientanet_auth';

  constructor () {}

  setAuthData(data: AuthRespoonse): void {
    localStorage.setItem(this.authKey, JSON.stringify(data));
  }

  getAuthData(): AuthRespoonse | null {
    const data = localStorage.getItem(this.authKey);
    return data ? JSON.parse(data) as AuthRespoonse : null;
  }

  clearAuthData(): void {
    localStorage.removeItem(this.authKey);
  }


}
