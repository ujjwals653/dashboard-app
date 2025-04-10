'use client';
import ChartsHeader from '@/app/ui/ChartsHeader';
import { useStateContext } from '@/app/context/ContextProvider';
import { LineChart } from '@/app/ui';

const page = () => {
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

export default page
