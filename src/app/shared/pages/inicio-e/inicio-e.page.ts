import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SolicitudService } from '../../services/solicitud.service';
import { Respuesta } from '../../models/respuesta';
import { Solicitudes } from '../../models/solicitudes';

@Component({
  selector: 'app-inicio-e',
  templateUrl: './inicio-e.page.html',
  styleUrls: ['./inicio-e.page.scss'],
})
export class InicioEPage implements OnInit {

  user: any;
  servicios = []
  //solicitudes: Observable<any[]>;
  solicitudes: any[] = [];
  resultados = []
  constructor(private auth: AuthService,
    private activatedRoute: ActivatedRoute,
    public router: Router,
    public solicitudservice: SolicitudService) { }

  ngOnInit() {
    this.auth.user.subscribe(user => {
      this.user = user;
      if (user != null) {
        this.servicios = user.servicios;
        this.solicitudservice.getSolicitudes()
        .subscribe(data =>{
          this.solicitudes = JSON.parse(JSON.stringify(data));
          this.resultados = this.solicitudes;
          console.log("solicitudes "+this.solicitudes[0].descripcion);
        })
      }
    })
  }

  trackByFn(index, obj) {
    return obj.uid;
  }

  abrirSolicitud(id) {
    this.router.navigate([`solicitud/${id}`])
  }
  /*
    enviarAyuda(uid_usuario, uid_solicitud) {
      let respuesta: Respuesta = new Respuesta
      respuesta.uid_solicitud = uid_solicitud
      respuesta.uid_usuario = uid_usuario
      respuesta.uid_empresa = this.user.uid
      
      this.solicitudservice.enviarRespuesta(respuesta)
    }*/

}
