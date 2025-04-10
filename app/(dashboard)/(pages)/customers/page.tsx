import { customersData, customersGrid } from '@/app/data/dummy'
import { Header } from '@/app/ui'
import { ColumnDirective, ColumnsDirective, Edit, Filter, GridComponent, Inject, Page, Sort, Toolbar } from '@syncfusion/ej2-react-grids'
import React from 'react'

const Page = () => {
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ['Delete'];
  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='Page' title='Employees' />
      <GridComponent
        dataSource={customersData}
        width='auto'
        allowPaging
        allowSorting
        allowSelection
        selectionSettings={selectionsettings}
        PageSettings={{ PageCount: 5 }}
        editSettings={editing}
        toolbar={toolbarOptions}
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Page, Sort, Toolbar, Selection, Edit, Filter]} />
      </GridComponent>
    </div>
  )
}

export default Page
