import { Component } from '@angular/core';
import {WelcomeContentComponent} from "../welcome-content/welcome-content.component";
import {AuthContentComponent} from "../auth-content/auth-content.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    WelcomeContentComponent,
    AuthContentComponent,
    NgIf
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
