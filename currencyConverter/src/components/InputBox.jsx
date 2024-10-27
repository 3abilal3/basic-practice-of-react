import React, { useId } from 'react';

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "pkr",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();
  return (
    <div className="relative w-full mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
    <div className="flex">
      <input
        type="number"
        value={amount}
        onChange={(e) => onAmountChange(e.target.value)}
        disabled={amountDisable}
        className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:ring-blue-500"
      />
      <select
        value={selectCurrency}
        onChange={(e) => onCurrencyChange(e.target.value)}
        className="border-t border-b border-gray-300 bg-white text-gray-700 rounded-r-md focus:outline-none focus:ring focus:ring-blue-500 w-1/3" // Adjust the width here
      >
        {currencyOptions.map((currency, index) => (
          <option key={index} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  </div>
);
};


export default InputBox;