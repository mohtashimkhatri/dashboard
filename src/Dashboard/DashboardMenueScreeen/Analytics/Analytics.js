import React from 'react'
// import Card from '../../ComponentsCard/Card'
// import Cardlogo from '../../../Assets/ICON/Icon_Order.svg'
import Card from '../Card/Card'
import Chart from '../../ComponentsCard/CHart1'
import Chart2 from '../../ComponentsCard/Chart2'
import Chart3 from '../../ComponentsCard/Chart3'
import Chart4 from '../../ComponentsCard/Chart4'

function Analytics() {
  return (
    <>
    <div className='flex'>
<div className='opo'>
  <div className='maintext'>
  Dashboard
  </div>
  <div className='priary'>
  Hi, Samantha. Welcome back  to Sedap Admin!
  </div>
  </div>
    </div>
  
  <div className='container'>
    <div className='row'>
      <div className='col-md-3'>
        <Card heading="75" pera="total order" />
      </div>
      <div className='col-md-3'>
        <Card heading="357" pera="Total delivery" />
      </div>
      <div className='col-md-3'>
        <Card heading="65" pera="Total cenceid  " />
      </div>
      <div className='col-md-3'>
        <Card heading="$128" pera="Total Revium" />
      </div>
    </div>
    </div>  


<div className="container ">
<div className="row">
  <div className="col-md-6 p-3">
    <Chart />
    </div>
    <div className="col-md-6 p-3">
    <Chart2 />
    </div>
    <div className="col-md-6 p-3">
    <Chart3 />
    </div>
    <div className="col-md-6 p-3">
    <Chart4 />
    </div>
    </div>  
</div>

    </>
     
  )
}

export default Analytics
