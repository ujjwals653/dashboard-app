'use client';
import { employeesData, employeesGrid } from '@/app/data/dummy'
import { Header } from '@/app/ui'
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Page, Search, Sort, Toolbar } from '@syncfusion/ej2-react-grids'
import React from 'react'

const page = () => {
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
        <Inject services={[Search, Page, Sort, Toolbar]} />
      </GridComponent>
    </div>
  )
}

export default page
