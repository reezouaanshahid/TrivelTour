import React from 'react'
import Navbar from './pages/components/Navbar/Navbar'
import Topbutton from './pages/components/Topbuttons/Topbuttons'
import Banner from './pages/components/Banner/Banner'
import Carosal from './pages/components/Carosal/carosal'
import Secoundcarosal from './pages/components/Carosal/Secoundcarosal'
import Thirdcarosal from './pages/components/Carosal/Thirdcarosal'

export default function Main() {
  return (
    <div>
        <Navbar/>
        <Topbutton/>
        <Banner/>
        <Carosal/>
        <Secoundcarosal/>
        <Thirdcarosal/>
    </div>
  )
}
