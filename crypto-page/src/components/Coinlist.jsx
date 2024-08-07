import React from 'react'
import CoinItem from './CoinItem'

function Coinlist({ coins }) {
  return (
    <div className='lg:max-w-[1268px] max-w-[85%] w-full mx-auto mt-8'>
      <div>
        <div className="text-gray-200 flex justify-between items-center shadow-lg rounded-lg mx-4 my-2 font-bold px-6 py-4 bg-purple-900">
          <p>#</p>
          <p>Coin</p>
          <p>Price</p>
          <p>24h</p>
          <p>24h</p>
          <p className='lg:block hidden'>Volume</p>
          <p className='lg:block hidden'>Market Cap</p>
        </div>
      </div>
      {
        coins.map((coin, idx) => {
          return (
            <CoinItem coins={coin} key={idx} />
          )
        })
      }
    </div>
  )
}

export default Coinlist
