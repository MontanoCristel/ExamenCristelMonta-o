import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ComponentsModule } from '../../components/components.module';
import { DataService } from '../../services/data.service';
//crear una interface para definir propiedades que el componente lista va
//a tener
interface Componente {
redirectTo: string|any[]|null|undefined;
icon: string;
name: string;

}
@Component({
selector: 'app-inicio',
templateUrl: './inicio.page.html',
styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
    componentes!: Observable<Componente[]>;

constructor(private menuCtrl: MenuController,
private dataService: DataService) { }
ngOnInit() {
this.componentes = this.dataService.getMenuOpts();
}
mostrarMenu() {
this.menuCtrl.open('first');
}

}