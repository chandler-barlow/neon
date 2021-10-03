import { Line } from 'react-chartjs-2';

const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: 'My Portfolio',
      data: [12, 19, 3, 5, 3, 11],
      fill: true,
      pointBackgroundColor: '#fff',
      backgroundColor: '#00a2ff4b',
      borderColor: '#00A2FF',
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