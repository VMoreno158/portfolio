import { Component, inject } from '@angular/core';
import { ProyectService } from '../../services/proyect-service';

@Component({
  selector: 'app-proyects',
  imports: [],
  templateUrl: './proyects.html',
  styleUrl: './proyects.css',
})
export class Proyects {
  proyectService = inject(ProyectService)
  proyectList:any

  ngOnInit(): void {
    this.proyectService.getAll().subscribe((res:any) => {
      console.log(res)
      this.proyectList = res
    })
  }
}
