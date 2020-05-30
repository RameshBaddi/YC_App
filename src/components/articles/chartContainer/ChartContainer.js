import React, { useEffect, useState, useContext, useCallback } from 'react'
import RenderChart from './RenderChart'
import { ListContext } from '../../../AppContext/ListContext';

const ChartContainer = () => {
    const {listData, chartData} = useContext(ListContext)
    const [width, setWidth] = useState(800)

    const renderChart = useCallback(() => {
        return <RenderChart width={width} data={chartData} />
    }, [width, chartData])

    const setChartWidth = () => {
        let width = document.getElementsByClassName('chartContainer')[0].offsetWidth
        setWidth(width)
    }

    useEffect(() => {
        setChartWidth()
        window.addEventListener('resize', setChartWidth)

        return () => window.removeEventListener("resize", setChartWidth)
    }, [])

    useEffect(() => {
       renderChart()
    }, [chartData, listData, renderChart])

    return (
        <section className='p-3 bg-light mt-3 mb-3'>
            <div className='pt-4 chartContainer'>
                {listData.length
                    ? renderChart()
                    : <p>No chart data</p>
                }
            </div>
        </section>
    )
}

export default ChartContainer
