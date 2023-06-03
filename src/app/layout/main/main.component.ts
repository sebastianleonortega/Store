import { Component } from '@angular/core';
import { FooterComponent } from '@layout/footer/footer.component';

@Component({
  selector: 'app-main',
  templateUrl:'./main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

public loader = '';
public  isLoading = false;
}
