import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-footer',
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class Footer {
  siteName: string = "TelecomShop";
  year: number = new Date().getFullYear()
}
