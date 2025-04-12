'use client';
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { dropdownData } from '@/data/dummy';

const DropDown = ({ currentMode }: { currentMode: 'Light' | 'Dark' }) => {
  return (
    <div className="w-28 border-1 border-gray-300 px-2 py-1 rounded-md">
      <DropDownListComponent
      id="time"
      fields={{ text: 'Time', value: 'Id' }}
      style={{ border: 'none', color: (currentMode === 'Dark') ? 'white' : undefined }}
      value="1"
      dataSource={dropdownData}
      popupHeight="220px"
      popupWidth="120px" />
    </div>
  )
}

export default DropDown;
