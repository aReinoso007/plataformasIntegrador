import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Info } from '../../models/infor';
import { UserinfoService } from '../../services/userinfo.service';

@Component({
  selector: 'app-Userinfo',
  templateUrl: './Userinfo.page.html',
  styleUrls: ['./Userinfo.page.scss'],
})
export class UserinfoPage implements OnInit {

  user: any;
  info: Info = new Info();

  constructor(private auth: AuthService,
    private direction: UserinfoService,
    private infoService: UserinfoService,
    public router: Router,
    private toastController: ToastController) { }

  ngOnInit() {
    this.auth.user.subscribe(data => {
      this.user = data;
      this.info.uid_usuario = data.uid;
    })
    console.log(this.user)
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
