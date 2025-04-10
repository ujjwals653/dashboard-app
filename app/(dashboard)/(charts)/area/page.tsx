'use client';

import { useStateContext } from "@/app/context/ContextProvider";
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from "@/app/data/dummy";
import ChartsHeader from "@/app/ui/ChartsHeader";
import { ChartComponent, DateTime, Inject, Legend, SeriesCollectionDirective, SeriesDirective, SplineAreaSeries } from "@syncfusion/ej2-react-charts";

const page = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Area" title="Inflation Rate in Percentage" />
      <div className='w-full'>
        <ChartComponent
          id='charts'
          primaryXAxis={areaPrimaryXAxis}
          primaryYAxis={areaPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
          legendSettings={{ background: 'white' }}
        >
          <SeriesCollectionDirective>
            {areaCustomSeries.map((item, index) =>
              <SeriesDirective key={index} {...item} />
            )}
          </SeriesCollectionDirective>
          <Inject services={[SplineAreaSeries, DateTime, Legend]} />
        </ChartComponent>
      </div>
    </div>
  )
}

export default page
