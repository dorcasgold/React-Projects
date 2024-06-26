import { useEffect, useState } from "react"
import './index.css'
import axios from "axios"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Coinlist from './components/Coinlist'
import CoinPage from "./components/CoinPage"

export default function App() {
  const [coin, setCoin] = useState([])

  const API_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&sparkline=false'

  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        setCoin(response.data)
        console.log(response.data[0]);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Coinlist coins={coin} />} />
        <Route path=":coinId" element={<CoinPage />} />
      </Routes>
    </div>
  )
}