import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartDataComponent } from './component/cart-data/cart-data.component';
import { PageComponent } from './component/page/page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CartDataComponent, PageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cart-service';
}
