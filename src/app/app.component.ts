import { Component } from '@angular/core';
import { ProductlistService } from './shared/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  viewProviders: [ProductlistService]
})
export class AppComponent {
  title = 'app works fine!';
}
