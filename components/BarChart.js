import React, { useState, useEffect, useContext } from 'react';
import { DataContext } from '@/pages/_app';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
)

const BarChart = () => {
    const { shift, employeeList, setEmployeeList } = useContext(DataContext);

    const [chartData, setChartData] = useState({
        datasets: [],
    });

    const [chartOptions, setChartOptions] = useState({
        plugins: {
            legend: {
                position: 'Top',
            },
            title: {
                display: true,
                text: 'Vaction Remaining',
            }
        },
        maintainAspectRatio: false,
        responive: true
    });

    useEffect(() => {
        setChartData({
            labels: employeeList.filter(employee => employee.shift === shift).map((employee) => employee.name.first),
            datasets: [
                {
                    label: 'Vacation Hrs',
                    data: employeeList.map((employee) => employee.vactionRemaining),
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgb(53, 162, 235)'
                },
            ]
        })
    }, [shift])

    return (
        <>
            <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white'>
                <Bar data={chartData} options={chartOptions} />
            </div>
        </>
    )
}

export default BarChart