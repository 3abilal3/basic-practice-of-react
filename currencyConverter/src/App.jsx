import React, { useState, useEffect } from 'react';
import InputBox from './components/InputBox';
import useCurrencyInfo from './hooks/useCurrencyInfo';
import bgPic from './assets/49066.jpg';

function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("pkr");
  const [to, setTo] = useState("usd");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const convert = () => {
    if (currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to]);
    }
  };

  useEffect(() => {
    if (currencyInfo[to]) {
      convert();
    }
  }, [currencyInfo, to]);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgPic})`,
      }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}
        className="w-full max-w-md p-8 bg-white/70 backdrop-blur-lg rounded-lg shadow-lg flex flex-col items-center"
      >
        <div className="w-full mb-4">
          <InputBox
            label="From"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={setFrom}
            selectCurrency={from}
            onAmountChange={setAmount}
          />
        </div>
        <div className="relative w-full flex justify-center mb-4">
          <button
            type="button"
            className="border-2 border-white bg-blue-600 text-white rounded-full px-4 py-2"
            onClick={swap}
          >
            Swap
          </button>
        </div>
        <div className="w-full mb-6">
          <InputBox
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={setTo}
            selectCurrency={to}
            amountDisable
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold"
        >
          Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>
      </form>
    </div>
  );
}

export default App;
