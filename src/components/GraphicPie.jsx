import React from 'react';
import { Pie } from "react-chartjs-2";

const GraphicPie = () => {
    const data = {
        labels: [
            'APPROVED',
            'REJECTED',
            'PENDING'
        ],
        datasets: [{
            label: 'Pie',
            borderWidth: 1,
            data: [16162169, 2745685, 5372273],
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#70ad46'
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#70ad46'
            ]
        }]
    };
    return (
        <div className="graphics-content">
            <h4>Grafica de Torta</h4>
            <Pie data={data} options={{
            maintainAspectRatio: false
          }} />
        </div>
    );
};

export default GraphicPie;