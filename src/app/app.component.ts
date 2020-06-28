import { Component, OnInit } from '@angular/core';
import { SpinnerService } from './pages/services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pokemon-project';
  show = false;
  constructor(private spinnerService: SpinnerService) {

  }

  ngOnInit(): void {
    this.spinnerService.spinnerStatus().subscribe((res) => {
      this.show = res;
    })
  }
}
