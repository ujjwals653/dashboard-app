'use client';
import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from '@/app/data/dummy';
import { ChartComponent, DateTime, Inject, Legend, LineSeries, SeriesCollectionDirective, SeriesDirective, Tooltip } from '@syncfusion/ej2-react-charts';
import React from 'react'

interface LineChartProps {
  width?: string;
  height?: string;
  currentMode: 'Light' | 'Dark';
}

const LineChart = ({ width = '100%', height = '420px', currentMode = 'Light' }: LineChartProps) => {
  return (
    <ChartComponent
      id='line-chart'
      height={height}
      width={width}
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      chartArea={{ border: { width: 0 }}}
      tooltip={{enable: true}}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      legendSettings={{ background: 'white' }}
    >
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default LineChart
