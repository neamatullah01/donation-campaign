import { PieChart, Pie, Tooltip, Legend,Cell } from 'recharts';


const Statistics = () => {

    const data = [
        { name: 'Total Donation', value: 12 },
        { name: 'Your Donation', value: 4 },
    ];

    const COLORS = ['#FF5733', '#66FF66'];

    return (
        <div className='flex justify-center items-center'>
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    cx={200}
                    cy={200}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    nameKey="name"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </div>
    );
};

export default Statistics;