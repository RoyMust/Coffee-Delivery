import { Routes, Route } from 'react-router-dom'
import Checkout from './Pages/checkout/Checkout'
import Home from './Pages/home/Home'
import  OrderConfirmed from './Pages/orderConfirm/OrderConfirmed';

export default function RoutePages() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path="/orderConfirmed" element={<OrderConfirmed />} />
    </Routes>
  )
}
