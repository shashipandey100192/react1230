import React, { Fragment } from 'react'
import Myheaderpage from '../sharecomponent/Myheaderpage'
import Myfooterpage from '../sharecomponent/Myfooterpage'

function Mainpage() {
  return (
    <Fragment>
    <Myheaderpage></Myheaderpage>
    <div>Mainpage</div>
    <Myfooterpage></Myfooterpage>
    </Fragment>

  )
}

export default Mainpage