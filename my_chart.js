var ctx = document.getElementById('myChart').getContext('2d');
var earning = document.getElementById('earning').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ['Completed', 'Pending', 'Inprogress'],
        datasets: [{
            label: 'Traffic Source',
            data: [1100, 1500, 2205],
            backgroundColor: [
                '#9662bb',
                'rgb(240, 66, 153)',
                '#3eccdf'
            ],
            
        }]
    },
    options: {
        responsive: true,
    }
});


var myChart = new Chart(earning, {
  type: 'bar',
  data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [{
          label: 'Earning',
          data: [4500, 4106, 7005, 6754, 5154, 4554,7815,3152,12204,4457,8740,11000],
          backgroundColor: [
              'rgb(230, 63, 146)',
              'rgb(33, 130, 194)',
              'rgb(219, 153, 86)',
              'rgb(15, 182, 182)',
              'rgb(99, 45, 207)',
              'rgb(224, 148, 72)',
              'rgb(161, 40, 172)',
              'rgb(39, 114, 163)',
              'rgb(223, 179, 69)',
              'rgb(26, 138, 138)',
              'rgb(83, 39, 170)',
              'rgb(238, 157, 70)'
          ],
      }]
  },
  options: {
    responsive: true,
  }
});