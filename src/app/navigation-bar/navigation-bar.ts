import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navigation-bar',
  imports: [FormsModule],
  templateUrl: './navigation-bar.html',
  styleUrl: './navigation-bar.scss',
})
export class NavigationBar {

  text: String = "etiqueta";

  change(event: any) {
    this.text = event.target.value;
  }
}
