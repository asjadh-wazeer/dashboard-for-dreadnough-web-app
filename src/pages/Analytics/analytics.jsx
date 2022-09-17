import React from 'react';
import Chart from "../../components/chart/Chart";
import { userData } from "../../dummyData";
import UserList from '../userList/UserList';
import './analytics.css'

function Analytics() {
  return (
    <div className='analytics__container'>    
         
        {/* <UserList /> */}
        <Chart data={userData} title="Student Analytics" grid dataKey="Active User"/>
    </div>
  )
}

export default Analytics;