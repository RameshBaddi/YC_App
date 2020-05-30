import React from 'react'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const RenderChart = ({ width, data }) => {
    return (
        <LineChart width={width} height={300} data={data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
            <XAxis dataKey="id"/>
            <YAxis />
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Legend />
            <Line type="monotone" dataKey="votes" stroke="#8884d8"/>
            <Line type="monotone" dataKey="comments" stroke="#82ca9d"/>
        </LineChart>
    )
}

export default RenderChart
