import { Component } from '@angular/core'; //decorador

@Component({
  selector: 'app-root', // de donde se inyecta
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-designicode';
}
