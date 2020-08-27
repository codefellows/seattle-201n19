'use strict';

var clicksArray = [12, 19, 3, 5, 2, 3];
var viewedArray = [15, 24, 17, 9, 4, 6];
var pictureNameArray = ['sweep', 'bag', 'banana', 'cthulhu', 'tauntaun', 'scissors'];

var chartObject = {
  type: 'bar',
  data: {
    labels: pictureNameArray,
    datasets: [{
      label: '# of Votes',
      data: clicksArray,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      hoverBackgroundColor: 'teal',
      borderWidth: 1
    }, {
      label: '# of Views',
      data: viewedArray,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      hoverBackgroundColor: 'yellow',
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    responsive: false,
  }
};

var ctx = document.getElementById('myChart').getContext('2d');

var myChart = new Chart(ctx, chartObject); //eslint-disable-line
