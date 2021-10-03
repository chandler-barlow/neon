import { Line } from 'react-chartjs-2';

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Market Watch',
      data: [12, 19, 3, 5, 3, 11, 10, 3, 4, 17, 8, 5],
      fill: true,
      yAxesId: 'y',
      pointBackgroundColor: '#fff',
      backgroundColor: '#00a2ff4b',
      borderColor: '#00A2FF',
    },
    {
      label: 'Neon $120',
      data: [1, 4, 6, 5, 3, 8, 12, 6, 8, 9, 4, 10],
      fill: true,
      yAxesId: 'y1',
      pointBackgroundColor: '#fff',
      backgroundColor: '#1f8a0c86',
      borderColor: '#1f8a0c',
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    xAxes: [{
       gridLines: {
          display: false
       }
    }],
    yAxes: [{
       gridLines: {
          display: false
       }
    }]
  },
  grid: {
    drawOnChartArea: false,
  }
};

const LineChart = () => (
  <>
    <div style={{
        marginLeft: '20rem', 
        marginRight: 126, 
        display: 'grid', 
        placeContent: 'center', 
      }} className="chart-container">
        <Line 
            width={100} 
            height={400} 
            data={data} 
            options={options}
        />
    </div>
  </>
);

export default LineChart;