'use client';
import React from "react";
import { Inject, SparklineComponent, SparklineTooltip } from '@syncfusion/ej2-react-charts';

interface SparklineProps {
  id: string;
  height: string;
  width: string;
  color: string;
  type: "Line" | "Column" | "WinLoss" | "Pie" | "Area" | undefined;
  currentColor: string;
  data: object[];
}

const SparkLine:React.FC<SparklineProps> = ({id, height, width, color, data, type, currentColor}) => {
  return (
    <SparklineComponent
        id={id}
        height={height}
        width={width}
        lineWidth={1}
        valueType="Numeric"
        fill={color}
        border={{ color: currentColor, width: 2 }}
        tooltipSettings={{
          visible: true,
          format: '${x} : data ${yval}',
          trackLineSettings: {
            visible: true,
          },
        }}
        markerSettings={{ visible: ['All'], size: 2.5, fill: currentColor }}
        dataSource={data}
        xName="x"
        yName="yval"
        type={type}
      >
        <Inject services={[SparklineTooltip]} />
      </SparklineComponent>
  )
}

export default SparkLine;
