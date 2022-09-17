import React from 'react';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import './ReportsUser.css'
import Chart from "../../components/chart/Chart";
import { userData } from "../../dummyData";

function ReportsUser() {
  return (
    <div className='reports__user__container'>
        <div className='reports__user'><WidgetSm/> </div>
        <Chart data={userData} title="User Analytics" grid dataKey="Active User"/></div>
        

   
  )
}

export default ReportsUser