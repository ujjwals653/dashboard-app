'use client';
import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '@/data/dummy';
import { Category, ChartComponent, Inject, Legend, SeriesCollectionDirective, SeriesDirective, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts';
import React from 'react'

interface StackedProps {
  width: string;
  height: string;
  currentMode: 'Light' | 'Dark';
}

const Stacked = ({ width = '600px', height = '400px', currentMode = 'Light' }: StackedProps) => {

  return (
    <ChartComponent
    id='charts'
    primaryXAxis={stackedPrimaryXAxis}
    primaryYAxis={stackedPrimaryYAxis}
    width={width}
    height={height}
    chartArea={{ border: { width: 0 }}}
    tooltip={{ enable: true }}
    background={currentMode === 'Dark' ? '#33373E' : '#fff'}
    legendSettings={{ background: 'white' }}
    >
      <Inject services={[StackingColumnSeries, Category, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default Stacked
