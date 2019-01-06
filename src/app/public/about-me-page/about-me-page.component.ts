import { Component, OnInit } from '@angular/core';
import { TimelineEvent } from '../../common-components/timeline/timeline-event';

@Component({
  selector: 'app-about-me-page',
  templateUrl: './about-me-page.component.html',
  styleUrls: ['./about-me-page.component.scss']
})
export class AboutMePageComponent implements OnInit {
  eventLaureaTriennale: TimelineEvent = new TimelineEvent(1, null, "Laurea Triennale", "Nel 2013 mi sono laureata in Scienze e Tecniche Psicologiche, presso l'Università degli Studi di Firenze.", "#d9534f", "fa fa-graduation-cap");
  eventLaureaMagistrale: TimelineEvent = new TimelineEvent(2, null, "Laurea Magistrale", "Nel 2015 ho conseguito la laurea magistrale in Processi di Sviluppo e Tutela dell'Infanzia, presso l'Università Cattolica del Sacro Cuore di Milano.", "#3f903f", "fa fa-graduation-cap");
  eventMaster: TimelineEvent = new TimelineEvent(3, null, "Master Post Laurea", "Nel 2017 mi sono specializzata con un master in Psicodiagnostica Clinica e Forense, Psicologia Giuridica.", "#00009C", "fa fa-book");
  eventNow: TimelineEvent = new TimelineEvent(4, null, "Psicologa e Psicodiagnosta Clinica e Forense", "Adesso lavoro come psicologa competente nei processi di promozione delle risorse in bambini, adolescenti e adulti. <br> <a href='/about-my-work'>Clicca qui per saperne di più sulle mie attività..</a>", "#ff9fdf", "fa fa-briefcase");
  timelineEvents = [this.eventLaureaTriennale, this.eventLaureaMagistrale, this.eventMaster, this.eventNow];

  constructor() { }

  ngOnInit() {
  }

}
