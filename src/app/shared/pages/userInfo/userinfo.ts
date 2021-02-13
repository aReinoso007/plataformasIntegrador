import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Info } from '../../models/infor';
import { UserinfoService } from '../../services/userinfo.service';
import { DireccionService } from '../../services/direccion.service';

@Component({
  selector: 'app-Userinfo',
  templateUrl: './Userinfo.page.html',
  styleUrls: ['./Userinfo.page.scss'],
})
export class UserinfoPage implements OnInit {

  user: any;
  info: Info = new Info();

  /* De Taisha*/
  title = 'AGM (Angular google maps)';
  lat = -2.383980;
  long = -77.503930;
  zoom=7;

  currentLocation: any = {
    latitude: null,
    longitude: null,
    street: "",
    active: true
  };

  centerLocation: any = {
    latitude: null,
    longitude: null,
    address: "",
  };

  icons = {
    client: "https://cdn1.iconfinder.com/data/icons/ecommerce-61/48/eccomerce_-_location-48.png",
    shop: "https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/48/Map-Marker-Marker-Outside-Chartreuse.png",
    center: "https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/48/Map-Marker-Marker-Inside-Chartreuse.png",
    pointer: "https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/48/Map-Marker-Ball-Azure.png"
  };

  constructor(private auth: AuthService,
    private infoService: UserinfoService,
    public router: Router,
    private toastController: ToastController,
    private direccionService: DireccionService
    ) { }

  async ngOnInit() {
    this.auth.user.subscribe(data => {
      this.user = data;
      this.info.uid_usuario = data.uid;
    })
    console.log(this.user)

    this.currentLocation = await this.direccionService.getCurrentLocation(true);
    if (this.currentLocation == null || this.currentLocation == undefined){
      this.currentLocation ={
        latitude: -2.383980,
        longitude: -77.503930,
        street: "Centro histórico de Cuenca",
        active: true
      }
    }
  }

  newAddress(event) {
    if (event) {
      this.centerLocation.latitude = event.lat;
      this.centerLocation.longitude = event.lng;
      this.direccionService.getAddressOfLocation(this.centerLocation);
      this.info.longitud = event.lng;
      this.info.latitud = event.lat;
      this.info.direccion = this.centerLocation.address;
      console.log(this.info.direccion);

    } 
  }
  
  addUserInfo(){
    this.infoService.addUserData(this.info);
    this.toast('Exito en registro');
    this.router.navigate([`inicio`])  
  }

  async toast(text: string, duration: number = 2000, position?) {
    const toast = await this.toastController.create({
      message: text,
      position: position || 'middle',
      duration: duration
    });
    toast.present();
  }

}
