import React, { useState, useEffect } from 'react';
import InputBox from './components/InputBox';
import useCurrencyInfo from './hooks/useCurrencyInfo';
import bgPic from './assets/49066.jpg';
function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("pkr");
  const [to, setTo] = useState("usd");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyFullNames = {
    "1000sats": "1000 Satoshis",
    "1inch": "1inch Network",
    "aave": "Aave",
    "ada": "Cardano",
    "aed": "United Arab Emirates Dirham",
    "afn": "Afghan Afghani",
    "agix": "SingularityNET",
    "akt": "Akash Network",
    "algo": "Algorand",
    "all": "Albanian Lek",
    "amd": "Armenian Dram",
    "amp": "Amp",
    "ang": "Netherlands Antillean Guilder",
    "aoa": "Angolan Kwanza",
    "ape": "ApeCoin",
    "apt": "Aptos",
    "ar": "Arweave",
    "arb": "Arbitrum",
    "ars": "Argentine Peso",
    "atom": "Cosmos",
    "ats": "Austrian Schilling",
    "aud": "Australian Dollar",
    "avax": "Avalanche",
    "awg": "Aruban Florin",
    "axs": "Axie Infinity",
    "azm": "Azerbaijani Manat (Old)",
    "azn": "Azerbaijani Manat",
    "bake": "BakeryToken",
    "bam": "Bosnia-Herzegovina Convertible Mark",
    "bat": "Basic Attention Token",
    "bbd": "Barbadian Dollar",
    "bch": "Bitcoin Cash",
    "bdt": "Bangladeshi Taka",
    "bef": "Belgian Franc",
    "bgn": "Bulgarian Lev",
    "bhd": "Bahraini Dinar",
    "bif": "Burundian Franc",
    "bmd": "Bermudian Dollar",
    "bnb": "Binance Coin",
    "bnd": "Brunei Dollar",
    "bob": "Bolivian Boliviano",
    "brl": "Brazilian Real",
    "bsd": "Bahamian Dollar",
    "bsv": "Bitcoin SV",
    "bsw": "Biswap",
    "btc": "Bitcoin",
    "btcb": "Bitcoin BEP2",
    "btg": "Bitcoin Gold",
    "btn": "Bhutanese Ngultrum",
    "btt": "BitTorrent",
    "busd": "Binance USD",
    "bwp": "Botswanan Pula",
    "byn": "Belarusian Ruble",
    "byr": "Belarusian Ruble (Old)",
    "bzd": "Belize Dollar",
    "cad": "Canadian Dollar",
    "cake": "PancakeSwap",
    "cdf": "Congolese Franc",
    "celo": "Celo",
    "cfx": "Conflux",
    "chf": "Swiss Franc",
    "chz": "Chiliz",
    "clp": "Chilean Peso",
    "cnh": "Chinese Yuan (Offshore)",
    "cny": "Chinese Yuan",
    "comp": "Compound",
    "cop": "Colombian Peso",
    "crc": "Costa Rican Colón",
    "cro": "Crypto.com Coin",
    "crv": "Curve DAO Token",
    "cspr": "Casper",
    "cuc": "Cuban Convertible Peso",
    "cup": "Cuban Peso",
    "cve": "Cape Verdean Escudo",
    "cvx": "Convex Finance",
    "cyp": "Cypriot Pound",
    "czk": "Czech Republic Koruna",
    "dai": "Dai",
    "dash": "Dash",
    "dcr": "Decred",
    "dem": "German Mark",
    "dfi": "DeFiChain",
    "djf": "Djiboutian Franc",
    "dkk": "Danish Krone",
    "doge": "Dogecoin",
    "dop": "Dominican Peso",
    "dot": "Polkadot",
    "dydx": "dYdX",
    "dzd": "Algerian Dinar",
    "eek": "Estonian Kroon",
    "egld": "Elrond",
    "egp": "Egyptian Pound",
    "enj": "Enjin Coin",
    "eos": "EOS",
    "ern": "Eritrean Nakfa",
    "esp": "Spanish Peseta",
    "etb": "Ethiopian Birr",
    "etc": "Ethereum Classic",
    "eth": "Ethereum",
    "eur": "Euro",
    "fei": "Fei Protocol",
    "fil": "Filecoin",
    "fim": "Finnish Markka",
    "fjd": "Fijian Dollar",
    "fkp": "Falkland Islands Pound",
    "flow": "Flow",
    "flr": "Flare",
    "frax": "Frax",
    "frf": "French Franc",
    "ftm": "Fantom",
    "ftt": "FTX Token",
    "fxs": "Frax Share",
    "gala": "Gala",
    "gbp": "British Pound Sterling",
    "gel": "Georgian Lari",
    "ggp": "Guernsey Pound",
    "ghc": "Ghanaian Cedi (Old)",
    "ghs": "Ghanaian Cedi",
    "gip": "Gibraltar Pound",
    "gmd": "Gambian Dalasi",
    "gmx": "GMX",
    "gnf": "Guinean Franc",
    "gno": "Gnosis",
    "grd": "Greek Drachma",
    "grt": "The Graph",
    "gt": "GateToken",
    "gtq": "Guatemalan Quetzal",
    "gusd": "Gemini Dollar",
    "gyd": "Guyanaese Dollar",
    "hbar": "Hedera",
    "hkd": "Hong Kong Dollar",
    "hnl": "Honduran Lempira",
    "hnt": "Helium",
    "hot": "Holo",
    "hrk": "Croatian Kuna",
    "ht": "Huobi Token",
    "htg": "Haitian Gourde",
    "huf": "Hungarian Forint",
    "icp": "Internet Computer",
    "idr": "Indonesian Rupiah",
    "iep": "Irish Pound",
    "ils": "Israeli New Sheqel",
    "imp": "Isle of Man Pound",
    "imx": "Immutable X",
    "inj": "Injective",
    "inr": "Indian Rupee",
    "iqd": "Iraqi Dinar",
    "irr": "Iranian Rial",
    "isk": "Icelandic Króna",
    "itl": "Italian Lira",
    "jep": "Jersey Pound",
    "jmd": "Jamaican Dollar",
    "jod": "Jordanian Dinar",
    "jpy": "Japanese Yen",
    "kas": "Kaspa",
    "kava": "Kava",
    "kcs": "KuCoin Token",
    "kda": "Kadena",
    "kes": "Kenyan Shilling",
    "kgs": "Kyrgystani Som",
    "khr": "Cambodian Riel",
    "klay": "Klaytn",
    "kmf": "Comorian Franc",
    "knc": "Kyber Network",
    "kpw": "North Korean Won",
    "krw": "South Korean Won",
    "ksm": "Kusama",
    "kwd": "Kuwaiti Dinar",
    "kyd": "Cayman Islands Dollar",
    "kzt": "Kazakhstani Tenge",
    "lak": "Laotian Kip",
    "lbp": "Lebanese Pound",
    "ldo": "Lido DAO",
    "leo": "UNUS SED LEO",
    "link": "Chainlink",
    "lkr": "Sri Lankan Rupee",
    "lrc": "Loopring",
    "lrd": "Liberian Dollar",
    "lsl": "Lesotho Loti",
    "ltc": "Litecoin",
    "ltl": "Lithuanian Litas",
    "luf": "Luxembourgian Franc",
    "luna": "Terra",
    "lunc": "Terra Classic",
    "lvl": "Latvian Lats",
    "lyd": "Libyan Dinar",
    "mad": "Moroccan Dirham",
    "mana": "Decentraland",
    "matic": "Polygon",
    "mbx": "MARBLEX",
    "mdl": "Moldovan Leu",
    "mga": "Malagasy Ariary",
    "mgf": "Malagasy Franc",
    "mina": "Mina",
    "mkd": "Macedonian Denar",
    "mkr": "Maker",
    "mmk": "Myanmar Kyat",
    "mnt": "Mongolian Tugrik",
    "mop": "Macanese Pataca",
    "mro": "Mauritanian Ouguiya (Old)",
    "mru": "Mauritanian Ouguiya",
    "mtl": "Maltese Lira",
    "mur": "Mauritian Rupee",
    "mvr": "Maldivian Rufiyaa",
    "mwk": "Malawian Kwacha",
    "mxn": "Mexican Peso",
    "myr": "Malaysian Ringgit",
    "mzn": "Mozambican Metical",
    "nad": "Namibian Dollar",
    "near": "NEAR Protocol",
    "neo": "NEO",
    "nexo": "NEXO",
    "ngn": "Nigerian Naira",
    "nio": "Nicaraguan Córdoba",
    "nok": "Norwegian Krone",
    "npr": "Nepalese Rupee",
    "nzd": "New Zealand Dollar",
    "okb": "OKB",
    "omr": "Omani Rial",
    "one": "Harmony",
    "op": "Optimism",
    "pab": "Panamanian Balboa",
    "paxg": "PAX Gold",
    "pen": "Peruvian Nuevo Sol",
    "pgk": "Papua New Guinean Kina",
    "php": "Philippine Peso",
    "pkr": "Pakistani Rupee",
    "pln": "Polish Zloty",
    "polygon": "Polygon",
    "ppt": "Populous",
    "pyg": "Paraguayan Guarani",
    "qar": "Qatari Rial",
    "qnt": "Quant",
    "qtum": "Qtum",
    "ron": "Romanian Leu",
    "rsd": "Serbian Dinar",
    "rub": "Russian Ruble",
    "rune": "THORChain",
    "rwf": "Rwandan Franc",
    "sand": "The Sandbox",
    "sar": "Saudi Riyal",
    "sbd": "Solomon Islands Dollar",
    "scr": "Seychellois Rupee",
    "sdg": "Sudanese Pound",
    "sek": "Swedish Krona",
    "sgd": "Singapore Dollar",
    "shib": "Shiba Inu",
    "shp": "Saint Helena Pound",
    "sll": "Sierra Leonean Leone",
    "sol": "Solana",
    "sos": "Somali Shilling",
    "srd": "Surinamese Dollar",
    "std": "São Tomé and Príncipe Dobra (Old)",
    "stn": "São Tomé and Príncipe Dobra",
    "stx": "Stacks",
    "svc": "Salvadoran Colón",
    "syp": "Syrian Pound",
    "szl": "Swazi Lilangeni",
    "thb": "Thai Baht",
    "theta": "Theta Network",
    "tjs": "Tajikistani Somoni",
    "tmt": "Turkmenistani Manat",
    "tnc": "Tranchess",
    "tnc3": "TNC Coin",
    "tnx": "Tedex",
    "top": "Tongan Paʻanga",
    "try": "Turkish Lira",
    "ttd": "Trinidad and Tobago Dollar",
    "ttt": "Tap",
    "tusd": "TrueUSD",
    "twd": "New Taiwan Dollar",
    "tzs": "Tanzanian Shilling",
    "uah": "Ukrainian Hryvnia",
    "ugx": "Ugandan Shilling",
    "uni": "Uniswap",
    "usd": "United States Dollar",
    "usdc": "USD Coin",
    "usdp": "Pax Dollar",
    "usdt": "Tether",
    "uyu": "Uruguayan Peso",
    "uzs": "Uzbekistan Som",
    "vet": "VeChain",
    "vnd": "Vietnamese Dong",
    "vuv": "Vanuatu Vatu",
    "waves": "Waves",
    "wbtc": "Wrapped Bitcoin",
    "wemix": "WEMIX",
    "wst": "Samoan Tala",
    "xaf": "CFA Franc BEAC",
    "xag": "Silver Ounce",
    "xau": "Gold Ounce",
    "xcd": "East Caribbean Dollar",
    "xch": "Chia",
    "xdc": "XDC Network",
    "xem": "NEM",
    "xet": "ETL",
    "xlm": "Stellar",
    "xmr": "Monero",
    "xof": "CFA Franc BCEAO",
    "xpf": "CFP Franc",
    "xrp": "Ripple",
    "xtz": "Tezos",
    "yfi": "yearn.finance",
    "zar": "South African Rand",
    "zec": "Zcash",
    "zil": "Zilliqa",
    "zmk": "Zambian Kwacha (Old)",
    "zmw": "Zambian Kwacha",
    "zwl": "Zimbabwean Dollar"
  };
  
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);
    
    const fullNameOptions = options.map(shortcut => currencyFullNames[shortcut] || shortcut);

    console.log(fullNameOptions);
    
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
        <div className="w-full">
          <InputBox
            label="From"
            amount={parseFloat(amount.toFixed(4))}
            currencyOptions={Object.keys(currencyFullNames)}
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
        <div className="w-full">
          <InputBox
            label="To"
            amount={parseFloat(convertedAmount.toFixed(4))}
            currencyOptions={Object.keys(currencyFullNames)}
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