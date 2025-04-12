'use client';
import { scheduleData } from '@/data/dummy'
import { Header } from '@/components'
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { Agenda, Day, DragAndDrop, Inject, Month, ScheduleComponent, Week, WorkWeek, Resize } from '@syncfusion/ej2-react-schedule'
import React from 'react'


const Page = () => {
  const [schedule, setSchedule] = React.useState<ScheduleComponent | null>(null);


  const change = (args: {value: Date}) => {
    if (!schedule) return;
    schedule.selectedDate = args.value;
    schedule.dataBind();
  };

  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='App' title='Calendar'/>
      <ScheduleComponent
        height='650px'
        ref={(schedule: ScheduleComponent) => setSchedule(schedule)}
        eventSettings={{ dataSource: scheduleData }}
        selectedDate={new Date(2025, 0, 10)}
      >
        <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
      </ScheduleComponent>
      <div className='mt-5'>
        <table style={{width: '100%', background: 'white'}}>
          <tbody>
            <tr style={{ height: '50px' }}>
              <td style={{ width: '100%' }}>
                <DatePickerComponent
                  value={new Date(2025, 0, 10)}
                  showClearButton={false}
                  placeholder="Current Date"
                  floatLabelType="Always"
                  change={change}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Page
