'use client';
import { kanbanData, kanbanGrid } from '@/app/data/dummy'
import { Header } from '@/app/ui'
import { ColumnDirective, ColumnsDirective, KanbanComponent } from '@syncfusion/ej2-react-kanban'
import React from 'react'

const Page = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='App' title='Kanban' />
      <KanbanComponent
        height={'650px'}
        id='kanban'
        keyField='Status'
        dataSource={kanbanData}
        cardSettings={{ contentField: 'Summary', headerField: 'Id' }}
      >
        <ColumnsDirective>
          {kanbanGrid.map((item, index) =>
          <ColumnDirective key={index} {...item} />
          )}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  )
}

export default Page
