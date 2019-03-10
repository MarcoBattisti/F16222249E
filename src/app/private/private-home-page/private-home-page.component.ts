import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../../app.component';
import {StatsService} from './services/stats.service';
import {CardChart} from './models/card-chart';

@Component({
  selector: 'app-private-home-page',
  templateUrl: './private-home-page.component.html',
  styleUrls: ['./private-home-page.component.scss']
})
export class PrivateHomePageComponent implements OnInit {

  env = this.appComponent.env;

  // Card chart users online
  usersOnline;

  // Card chart time average
  timeAverage;

  // options
  color = '#000';
  bandColor = '#A10A28';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // Line chart settings

  lineChartValues = [
    {
      "name": "Visite",
      "series": [
        {
          "name": "7 giorni fa",
          "value": 10
        },
        {
          "name": "6 giorni fa",
          "value": 20
        },
        {
          "name": "4 giorni fa",
          "value": 15
        },
        {
          "name": "3 giorni fa",
          "value": 17
        },
        {
          "name": "2 giorni fa",
          "value": 25
        },
        {
          "name": "1 giorno fa",
          "value": 32
        },
        {
          "name": "Oggi",
          "value": 50
        }
      ]
    }
  ]

  showYAxis = true;
  showYAxisLabel = true;
  yAxisLabel = 'Visite';
  showXAxis = true;
  showXAxisLabel = true;
  xAxisLabel = 'Giorni';
  gradient = true;
  showLegend = false;

  constructor(private statsService: StatsService, private appComponent: AppComponent) { }

  ngOnInit() {
    this.getVisitorsOnline();
    this.getTimeAverage();
  }

  getVisitorsOnline() {
    this.statsService.getVisitorsOnline(this.env.apiUrl).subscribe(
      data => {
        const cardChart = new CardChart();
        cardChart.name = '';
        cardChart.value = data[0].dates[0].items[0].value;
        this.usersOnline = [cardChart];
      },
      err => console.error(err)
    );
  }

  getTimeAverage() {
    this.statsService.getTimeAverage(this.env.apiUrl).subscribe(
      data => {
        const cardChart = new CardChart();
        cardChart.name = '';
        cardChart.value = data[0].dates[0].items[0].value;
        this.timeAverage = [cardChart];
      },
      err => console.error(err)
    );
  }

  onSelect(event) {
    console.log(event);
  }

}
