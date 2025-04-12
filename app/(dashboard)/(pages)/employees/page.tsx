'use client';
import { employeesData, employeesGrid } from '@/data/dummy'
import { Header } from '@/components'
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Page as P, Search, Sort, Toolbar } from '@syncfusion/ej2-react-grids'
import React from 'react'

const Page = () => {
  const toolbarOptions = ['Search'];
  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='Page' title='Employees' />
      <GridComponent
        dataSource={employeesData}
        width='auto'
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 5 }}
        editSettings={editing}
        toolbar={toolbarOptions}
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Search, P, Sort, Toolbar]} />
      </GridComponent>
    </div>
  )
}

export default Page
