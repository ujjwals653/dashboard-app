'use client';
import { useStateContext } from "@/app/context/ContextProvider";
import { financialChartData, FinancialPrimaryXAxis, FinancialPrimaryYAxis } from "@/app/data/dummy";
import ChartsHeader from "@/app/ui/ChartsHeader"
import { ChartComponent, Crosshair, DateTime, HiloSeries, Inject, Logarithmic, SeriesCollectionDirective, SeriesDirective, Tooltip, Zoom } from "@syncfusion/ej2-react-charts";

type FinancialChartData = {
  x: Date;
  high: number;
  low: number;
};

const Page = () => {
  const { currentMode } = useStateContext();

  const date1 = new Date('2027-01-01');
  function filterValue(value: FinancialChartData) {
    if (value.x >= date1) {
      return value.x, value.high, value.low;
    }
  }

  const returnValue = financialChartData.filter(filterValue);

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Stacked" title="Food Comparison Chart" />
      <div className='w-full'>
        <ChartComponent
          id='charts'
          primaryXAxis={FinancialPrimaryXAxis}
          primaryYAxis={FinancialPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true, shared: true }}
          crosshair={{ enable: true, lineType: 'Vertical', line: { width: 0 } }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        >
          <Inject services={[HiloSeries, Tooltip, DateTime, Logarithmic, Crosshair, Zoom]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={returnValue}
              xName='x'
              yName='low'
              name='Orange Inc'
              low='low'
              high='high'
              type='Hilo'
            />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  )
}

export default Page
