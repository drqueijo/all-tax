import React, { useMemo } from 'react';
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { getSalesData } from '../../services/sales';

function Chart({brandId, brandName}) {
  const chartConfig = useMemo(() => getSalesData(brandId, brandName), [brandId])

  return (
    <div style={{width: '1000px'}}>
        <Line data={chartConfig} />
    </div>
  )
}

export default Chart