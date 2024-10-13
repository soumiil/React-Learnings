import { useState, useEffect } from "react";
import CurrencyDropdown from "./CurrencyDropdown";

function CurrencyConverter() {
  const [currencies, setCurrencies] = useState([]);
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [converting, setConverting] = useState(false);

  // currrencies api -> https://api.frankfurter.app/currencies
  async function fetchCurrencies() {
    await fetch("https://api.frankfurter.app/currencies")
      .then(async (res) => {
        const data = await res.json();
        setCurrencies(Object.keys(data));
      })
      .catch((error) => console.log(`Error fetching: ${error}`));
  }

  // conversion api -> https://api.frankfurter.app/latest?amount=1&from=USD&to=INR
  async function convertCurrency() {
    if (!amount) {
      return;
    }

    await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
    )
      .then(async (res) => {
        const data = await res.json();
        setConvertedAmount(data.rates[toCurrency] + " " + toCurrency);
      })
      .catch((error) => {
        console.log(`Error displaying: ${error}`);
      })
      .finally(() => {
        setConverting(false);
      });
  }

  useEffect(() => {
    fetchCurrencies()
  }, []);

  function swapCurrencies() {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  }

  return (
    <div className="max-w-2xl mx-auto my-10 p-5 bg-white rounded-lg shadow-md">
      <div>
        <h2 className="mb-5 text-2xl font-semibold text-gray-70 text-center border border-gray-300 p-2 rounded-md">
          Currency Converter
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
        <CurrencyDropdown
          currencies={currencies}
          title="From:"
          currency={fromCurrency}
          setCurrency={setFromCurrency}
        />
        <div className="flex justify-center -mb-5 sm:-mb-0">
          <button onClick={swapCurrencies} className="px-2 py-1 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">SWAP</button>
        </div>
        <CurrencyDropdown
          currencies={currencies}
          title="To:"
          currency={toCurrency}
          setCurrency={setToCurrency}
        />
      </div>

      <div className="mt-4">
        <label
          htmlFor="amount"
          className="block text-sm font-medium text-gray-700"
        >
          Amount:
        </label>
        <input
          placeholder={`${fromCurrency} to ${toCurrency}`}
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          type="number"
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 mt-1"
        />
      </div>

      <div className="flex justify-end mt-6">
        <button
          onClick={convertCurrency}
          className={`px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
            ${converting ? "animate-pulse" : ""}`}
        >
          Convert
        </button>
      </div>

      {convertedAmount && (
        <div className="mt-2 text-lg font-medium text-right text-green-600">
          Converted Amount: {convertedAmount}
        </div>
      )}
    </div>
  );
}

export default CurrencyConverter;
