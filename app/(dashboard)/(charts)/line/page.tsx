'use client';
import ChartsHeader from '@/components/ui/ChartsHeader';
import { useStateContext } from '@/context/ContextProvider';
import { LineChart } from '@/components';

const Page = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Line" title="Inflation Rate" />
      <div className='w-full'>
        <LineChart currentMode={currentMode} />
      </div>
    </div>
  )
}

export default Page
