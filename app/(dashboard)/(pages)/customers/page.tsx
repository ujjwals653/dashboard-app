'use client';
import { customersData, customersGrid } from '@/data/dummy'
import { Header } from '@/components'
import { ColumnDirective, ColumnsDirective, Edit, Filter, GridComponent, Inject, Page as P, Sort, Toolbar, Selection } from '@syncfusion/ej2-react-grids'
import React from 'react'

const Page = () => {
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ['Delete'];
  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='Page' title='Customers' />
      <GridComponent
        dataSource={customersData}
        width='auto'
        allowPaging
        allowSorting
        allowSelection
        selectionSettings={selectionsettings}
        pageSettings={{ pageCount: 5 }}
        editSettings={editing}
        toolbar={toolbarOptions}
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[P, Sort, Toolbar, Selection, Edit, Filter]} />
      </GridComponent>
    </div>
  )
}

export default Page
