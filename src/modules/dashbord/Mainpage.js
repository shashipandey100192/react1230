import React, { Fragment } from 'react'
import Myheaderpage from '../sharecomponent/Myheaderpage'
import Myfooterpage from '../sharecomponent/Myfooterpage'
import Mysidenav from '../sharecomponent/Mysidenav'
import { Outlet } from 'react-router-dom'

function Mainpage() {
  return (
    <Fragment>
    <Myheaderpage></Myheaderpage>
    <div className='container-fluid page border'>
      <div className='row'>
        <div className='col-md-2'>
          <Mysidenav/>
        </div>
        <div className='col-md-10'>
         <Outlet/>
        </div>
      </div>
    </div>
    <Myfooterpage></Myfooterpage>

    </Fragment>

  )
}

export default Mainpage