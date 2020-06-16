import React from 'react';
import { Line } from 'react-chartjs-2';

const Bar = () => {
    const data = {
        labels: ['01/05/2020', '02/05/2020', '03/05/2020'],
        datasets: [
          {
            label: 'Approved',
            fill: false,
            lineTension: 0.1,
            borderColor: 'green',
            data: [50, 5, 12]
          },
          {
            label: 'Approved',
            fill: false,
            lineTension: 0.1,
            borderColor: 'orange',
            data: [0, 9, 0]
          },
          {
            label: 'Rejected',
            fill: false,
            lineTension: 0.1,
            borderColor: 'grey',
            data: [5, 20, 2]
          }
        ]
      };
    return (
        <div className="graphics-content">
            <h4>Grafica de Barras</h4>
            <Line data={data} />
        </div>
    );
};

export default Bar;