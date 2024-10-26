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
    <div className={`bg-white p-4 rounded-lg flex flex-col sm:flex-row ${className}`}>
      <div className="w-full sm:w-1/2 mb-4 sm:mb-0 sm:pr-2">
        <label htmlFor={amountInputId} className="text-gray-500 text-xs mb-1 block">
          {label}
        </label>
        <input
          id={amountInputId}
          type="number"
          className="outline-none w-full bg-transparent py-2 px-3 border rounded-md text-black/80"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>
      <div className="w-full sm:w-1/2 flex flex-col items-end sm:pl-2">
        <label className="text-gray-500 text-xs mb-1 block">Currency Type</label>
        <select
          className="w-full sm:w-auto bg-gray-100 border rounded-md px-3 py-2 outline-none cursor-pointer"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
