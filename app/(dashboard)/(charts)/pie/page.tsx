'use client';
import { useStateContext } from "@/context/ContextProvider"
import { pieChartData } from "@/data/dummy"
import { Pie as PieChart } from "@/components"
import ChartsHeader from "@/components/ui/ChartsHeader"


const Page = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Pie" title="Project Cost Breakdown" />
      <div className='w-full'>
        <PieChart id='chart-pie' data={pieChartData} legendVisiblity height='full' currentMode={currentMode}/>
      </div>
    </div>
  )
}

export default Page
