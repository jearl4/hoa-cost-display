import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss',
})
export class BarChartComponent {
  chart: any;

  ngOnInit() {
    this.createChart();
  }

  createChart() {
    this.chart = new Chart('MyChart', {
      type: 'bar',

      data: {
        // values on X-Axis
        labels: [
          '1500',
          '1501',
          '1505',
          '1511',
          '1514',
          '1517',
          '1520',
          '1524',
          '1525',
          '1528',
        ],
        datasets: [
          {
            label: 'Expenditures',
            data: ['0', '0', '0', '0', '0', '0', '0', '0', '32500', '0'],
            backgroundColor: 'red',
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
      },
    });
  }
}
