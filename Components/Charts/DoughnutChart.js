import { Doughnut } from 'react-chartjs-2';


const data = {
    labels: [
        'Cardano',
        'Bitcoin',
        'Dogecoin',
        'Solarcoin',
        'Chia'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [85, 55, 73, 95, 97],
        backgroundColor: [
            '#74c69d',
            '#c9184a',
            '#ff4d6d',
            '#40916c',
            '#1b4332',
        ],
        hoverOffset: 4
    }]
};

const config = {
    type: 'doughnut',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Doughnut Chart'
        }
      }
    },
  };

const DoughnutChart = () => {
    return (
        <>
            <div style={{
                marginLeft: '10rem', 
                marginRight: '10rem', 
                marginTop: '1.5rem',
                display: 'grid', 
                placeContent: 'center', 
            }} className="chart-container">
                <Doughnut
                    width={300}
                    height={450}
                    options={{maintainAspectRatio: false}}
                    data={data} 
                    config={config}
                />
            </div>
        </>
    )
}

export default DoughnutChart
