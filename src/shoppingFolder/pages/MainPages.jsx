import React,{useState} from 'react'
import Header from '../coponents/Header'
import Banner from '../coponents/Banner'
import Collections from '../../Collections'
import Footer from '../../Footer'
import { Gents, Ladies } from '../data'
import Womentcollection from '../Womentcollection'

const MainPages = () => {
  const [gentsFashion , setGentsFashion] = useState(Gents)
  const [ladiesFashion , setLadiesFashion] = useState(Ladies)
  console.log(Gents)
  return (
    <div>
      <Header/>
      <Banner/>
      <Collections gentsFashion = {gentsFashion}/>
      <Womentcollection ladiesFashion = {ladiesFashion}/>
      <Footer/>

    </div>
  )
}

export default MainPages
