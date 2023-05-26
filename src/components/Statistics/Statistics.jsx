import React from 'react';
import { PieChart, Pie, Tooltip } from 'recharts';
import vector from "../../assets/images/vector.png"
import vectorOne from "../../assets/images/vector-one.png"

const data = [
    {
      name: 'Assignment-1',
      result: 60,
    },
    {
        name: 'Assignment-2',
        result: 60,
    },
    {
        name: 'Assignment-3',
        result: 60,
    },
    {
        name: 'Assignment-4',
        result: 60,
    },
    {
        name: 'Assignment-5',
        result: 59,
    },
    {
        name: 'Assignment-6',
        result: 57,
    },
    {
        name: 'Assignment-7',
        result: 60,
    },
    {
        name: 'Assignment-8',
        result: 60,
    },
    
  ];

const Statistics = () => {
    return (
        <div>
            <div className='bg-gradient-to-r from-[#F8F9FF] to-[#FAF8FF] pb-[140px] pt-[40px] relative'>
                <h1 className='text-center font-extrabold text-[#1A1919] text-[32px]'>Statistics</h1>
                <img className='absolute left-0 bottom-0' src={vector} alt="" />
            </div>
            <img className='absolute right-0 top-0' src={vectorOne} alt="" />
        <div className='flex justify-center items-center mt-[60px]'>
            <PieChart width={300} height={300}>
                <Pie
                    dataKey="result"
                    isAnimationActive={false}
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    innerRadius={40}
                    fill="#8884d8"
                    label
                />
                <Tooltip />
            </PieChart>
        </div>
        </div>
    );
};

export default Statistics;