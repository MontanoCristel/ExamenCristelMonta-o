import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { Observable } from 'rxjs';
import { Componente } from './interfaces/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  componentes: Observable<Componente[]> | undefined;

  ngOnInit(){
    this.componentes = this.DataService.getMenuOpts();
  }
constructor(private DataService: DataService) {

}
initializeApp(){
  this.componentes = this.DataService.getMenuOpts();
}

}
