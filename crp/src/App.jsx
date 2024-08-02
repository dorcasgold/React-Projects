import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import Home from './routes/Home';
import Signin from './routes/Signin';
import Signup from './routes/Signup';
import Account from './routes/Account';
import CoinPage from './routes/CoinPage';
import axios from 'axios'
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import { AuthContextProvider } from "./context/AuthContext";

export default function App() {
  const [coins, setCoins] = useState([])

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10&sparkline=true'

  useEffect(() => {
    axios.get(url).then(respose => {
      setCoins(respose.data)
    })
  }, [url]);

  return (
    <ThemeProvider>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home coins={coins} />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/account' element={<Account />} />
          <Route path='/coin/:coinId' element={<CoinPage />}>
            <Route path=':coinId' />
          </Route>
        </Routes>
        <Footer />
      </AuthContextProvider>
    </ThemeProvider>
  )
}