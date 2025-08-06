const StockData = [
  {
    name: "VBTC-500",
    stocks: [
      { ticker: "Tick", name: "Roku Technologies Inc", marketCap: "64.66B", price: "142.10", portfolioShare: "62.27%", marginHigh: "-4.13%" },
      { ticker: "Tick", name: "Coinbase Global Inc", marketCap: "21.78B", price: "89.45", portfolioShare: "45.23%", marginHigh: "-7.84%" },
      { ticker: "Tick", name: "Tesla Inc", marketCap: "780.12B", price: "245.78", portfolioShare: "32.18%", marginHigh: "-3.56%" },
      { ticker: "Tick", name: "Amazon.com Inc", marketCap: "1.56T", price: "137.91", portfolioShare: "27.51%", marginHigh: "-5.71%" },
      { ticker: "Tick", name: "NVIDIA Corporation", marketCap: "2.36T", price: "922.41", portfolioShare: "21.80%", marginHigh: "-2.15%" },
      { ticker: "Tick", name: "Apple Inc", marketCap: "3.02T", price: "187.42", portfolioShare: "15.94%", marginHigh: "-6.41%" },
      { ticker: "Tick", name: "Meta Platforms Inc", marketCap: "945.64B", price: "366.87", portfolioShare: "13.12%", marginHigh: "-8.73%" },
    ],
  },
  {
    name: "Tenet",
    stocks: [
      { ticker: "Tick", name: "Tenet Healthcare Corp", marketCap: "6.51B", price: "85.74", portfolioShare: "64.14%", marginHigh: "-3.21%" },
      { ticker: "Tick", name: "UnitedHealth Group", marketCap: "478.99B", price: "519.28", portfolioShare: "43.66%", marginHigh: "-6.47%" },
      { ticker: "Tick", name: "CVS Health Corp", marketCap: "91.13B", price: "65.87", portfolioShare: "34.72%", marginHigh: "-4.97%" },
      { ticker: "Tick", name: "HCA Healthcare Inc", marketCap: "78.51B", price: "294.10", portfolioShare: "29.11%", marginHigh: "-5.03%" },
      { ticker: "Tick", name: "Humana Inc", marketCap: "58.22B", price: "442.36", portfolioShare: "25.10%", marginHigh: "-9.22%" },
      { ticker: "Tick", name: "Cigna Group", marketCap: "89.48B", price: "285.60", portfolioShare: "18.77%", marginHigh: "-2.89%" },
      { ticker: "Tick", name: "Pfizer Inc", marketCap: "156.31B", price: "29.41", portfolioShare: "14.29%", marginHigh: "-11.34%" },
    ],
  },
  {
    name: "Iron-dome",
    stocks: [
      { ticker: "Tick", name: "Lockheed Martin Corp", marketCap: "116.78B", price: "475.32", portfolioShare: "70.52%", marginHigh: "-4.98%" },
      { ticker: "Tick", name: "Raytheon Technologies", marketCap: "133.14B", price: "91.25", portfolioShare: "51.36%", marginHigh: "-5.12%" },
      { ticker: "Tick", name: "Northrop Grumman", marketCap: "74.93B", price: "469.02", portfolioShare: "44.26%", marginHigh: "-6.18%" },
      { ticker: "Tick", name: "General Dynamics", marketCap: "85.11B", price: "248.74", portfolioShare: "35.09%", marginHigh: "-7.04%" },
      { ticker: "Tick", name: "BAE Systems plc", marketCap: "41.23B", price: "47.50", portfolioShare: "29.83%", marginHigh: "-3.39%" },
      { ticker: "Tick", name: "Elbit Systems Ltd", marketCap: "6.02B", price: "168.90", portfolioShare: "20.43%", marginHigh: "-5.93%" },
      { ticker: "Tick", name: "Boeing Co", marketCap: "125.67B", price: "178.12", portfolioShare: "15.71%", marginHigh: "-6.66%" },
    ],
  },
  {
    name: "Global-Stars",
    stocks: [
      { ticker: "Tick", name: "ARK Innovation ETF", marketCap: "9.33B", price: "47.24", portfolioShare: "65.31%", marginHigh: "-5.77%" },
      { ticker: "Tick", name: "ARK Genomic Revolution ETF", marketCap: "2.11B", price: "33.08", portfolioShare: "48.76%", marginHigh: "-8.91%" },
      { ticker: "Tick", name: "ARK Fintech Innovation ETF", marketCap: "1.94B", price: "23.45", portfolioShare: "39.44%", marginHigh: "-7.12%" },
      { ticker: "Tick", name: "ARK Autonomous Tech ETF", marketCap: "1.53B", price: "25.86", portfolioShare: "33.27%", marginHigh: "-4.80%" },
      { ticker: "Tick", name: "ARK Space Exploration ETF", marketCap: "1.21B", price: "11.97", portfolioShare: "27.40%", marginHigh: "-6.62%" },
      { ticker: "Tick", name: "ARK Israel Innovative Tech", marketCap: "650M", price: "17.88", portfolioShare: "22.19%", marginHigh: "-5.19%" },
      { ticker: "Tick", name: "ARK Next Generation Internet", marketCap: "3.41B", price: "52.19", portfolioShare: "15.88%", marginHigh: "-4.93%" },
    ],
  },
  {
    name: "Moonshots",
    stocks: [
      { ticker: "Tick", name: "Worldcoin Ltd", marketCap: "1.98B", price: "3.12", portfolioShare: "60.22%", marginHigh: "-7.39%" },
      { ticker: "Tick", name: "Sam Altman Holdings", marketCap: "2.34B", price: "4.78", portfolioShare: "49.75%", marginHigh: "-6.13%" },
      { ticker: "Tick", name: "OpenAI Equity", marketCap: "20.00B", price: "25.65", portfolioShare: "42.01%", marginHigh: "-5.91%" },
      { ticker: "Tick", name: "Tools For Humanity", marketCap: "900M", price: "2.34", portfolioShare: "35.90%", marginHigh: "-4.10%" },
      { ticker: "Tick", name: "WLD Infrastructure Fund", marketCap: "1.12B", price: "1.89", portfolioShare: "26.70%", marginHigh: "-3.50%" },
      { ticker: "Tick", name: "HumanID Technologies", marketCap: "780M", price: "0.95", portfolioShare: "18.41%", marginHigh: "-6.44%" },
      { ticker: "Tick", name: "BiometricChain", marketCap: "600M", price: "1.22", portfolioShare: "10.12%", marginHigh: "-9.12%" },
    ],
  },
  {
    name: "ETFs-Index-Funds",
    stocks: [
      { ticker: "Tick", name: "Newmont Corporation", marketCap: "35.62B", price: "39.87", portfolioShare: "52.35%", marginHigh: "-4.12%" },
      { ticker: "Tick", name: "Barrick Gold Corp", marketCap: "28.91B", price: "17.63", portfolioShare: "45.71%", marginHigh: "-3.75%" },
      { ticker: "Tick", name: "Franco-Nevada Corp", marketCap: "25.78B", price: "129.45", portfolioShare: "38.22%", marginHigh: "-6.83%" },
      { ticker: "Tick", name: "Wheaton Precious Metals", marketCap: "21.42B", price: "45.38", portfolioShare: "30.65%", marginHigh: "-5.19%" },
      { ticker: "Tick", name: "Agnico Eagle Mines", marketCap: "28.13B", price: "49.12", portfolioShare: "24.78%", marginHigh: "-4.54%" },
      { ticker: "Tick", name: "Gold Fields Ltd", marketCap: "11.78B", price: "12.96", portfolioShare: "17.10%", marginHigh: "-7.06%" },
      { ticker: "Tick", name: "Royal Gold Inc", marketCap: "8.41B", price: "104.82", portfolioShare: "10.88%", marginHigh: "-8.73%" },
    ],
  },
];

export default StockData;
