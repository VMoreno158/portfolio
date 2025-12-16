import { Component, inject } from '@angular/core';
import { ExperienceService } from '../../services/experience-service';
import { DatePipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-experience',
  imports: [DatePipe, TitleCasePipe],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  experienceService = inject(ExperienceService)
  experienceList:any
  res:any

  ngOnInit(): void {
    this.experienceService.getAll().subscribe( (res:any) => {
      console.log(`Frontend recieve data: ${res}`)
      this.experienceList = res
      this.experienceList.sort((a:any ,b:any) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime())
    })
    
  }
}
