'use client';
import { useStateContext } from "@/app/context/ContextProvider";
import { PyramidData } from "@/app/data/dummy"
import ChartsHeader from "@/app/ui/ChartsHeader"
import { AccumulationChartComponent, AccumulationDataLabel, AccumulationLegend, AccumulationSelection, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationTooltip, Inject, PyramidSeries } from "@syncfusion/ej2-react-charts"


const Page = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Pyramid" title="Food Comparison Chart" />
      <div className='w-full'>
        <AccumulationChartComponent
          id='pyramid-chart'
          legendSettings={{background: 'white'}}
          tooltip={{enable: true}}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        >
          <Inject services={[PyramidSeries, AccumulationDataLabel, AccumulationTooltip, AccumulationLegend, AccumulationSelection]} />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              dataSource={PyramidData}
              xName='x'
              yName='y'
              type='Pyramid'
              name='Food'
              width='45%'
              height='80%'
              neckWidth='15%'
              gapRatio={0.03}
              explode
              emptyPointSettings={{ mode: 'Drop', fill: 'red'}}
              dataLabel={{
                visible: true,
                position: 'Inside',
                name: 'text',
              }}
            />
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    </div>
  )
}

export default Page
