import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import Chart from 'chart.js/auto';
import { Date } from '../date';

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss',
})
export class BarChartComponent implements OnInit {
  chart: any;
  selectedDate: string = '2023';
  dateList: Date[] = [
    { value: '2023', viewValue: '2023' },
    { value: '2024', viewValue: '2024' },
  ];

  ngOnInit() {
    this.createChart(this.selectedDate);
  }

  ngOnChanges() {
    this.createChart(this.selectedDate);
  }

  createChart(selectedDate: string) {
    if (selectedDate === '2024') {
      this.chart = new Chart('MyChart', {
        type: 'bar',

        data: {
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
    } else if (selectedDate === '2023') {
      this.chart = new Chart('MyChart', {
        type: 'bar',

        data: {
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
              data: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
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
}
