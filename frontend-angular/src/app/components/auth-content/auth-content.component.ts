import {Component} from '@angular/core';
import {AxiosService} from "../../services/axios.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-auth-content',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './auth-content.component.html',
  styleUrl: './auth-content.component.css'
})
export class AuthContentComponent {
  data: string[] = [];

  constructor(private axiosService: AxiosService) {
  }

  ngOnInit(): void {
    this.axiosService.request(
      "GET",
      "/messages",
      {}).then(
      (response) => {
        this.data = response.data;
      }).catch(
      (error) => {
        if (error.response.status === 401) {
          this.axiosService.setAuthToken(null);
        } else {
          this.data = error.response.code;
        }

      }
    );
  }

}
