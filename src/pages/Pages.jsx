import React from 'react';
import Home from './Home';
import Cuisine from './Cuisine';
import Item from './Item';
import Recipedetail from './Recipedetail';

import { Routes, Route} from 'react-router-dom'

const Pages = () => {
  return (
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/cuisine/:type' element={<Cuisine />}></Route>
        <Route path='/searched/:item' element={<Item/>}></Route>
        <Route path='/recipe/:name' element={<Recipedetail/>}></Route>
      </Routes>

  )
}

export default Pages
