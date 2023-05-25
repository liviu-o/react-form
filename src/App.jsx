import "./App.css";
import SignupForm from "./components/SignupForm";
import Header from "./components/Header";

function App() {
  const palaceList = [
    {
      name: "Hampton Court Palace",
      value: "hamptonCourtPalace",
    },
    {
      name: "Tower Of London",
      value: "towerOfLondon",
    },
    {
      name: "Banqueting House",
      value: "banquetingHouse",
    },
    {
      name: "Kensington Palace",
      value: "kensingtonPalace",
    },
    {
      name: "Kew Palace",
      value: "kewPalace",
    },
    {
      name: "Hillsborough Castle",
      value: "hillsboroughCastle",
    },
  ];

  const countryList = [
    {
      name: "United Kingdom",
      value: "GB",
    },
    {
      name: "Australia",
      value: "AU",
    },
    {
      name: "Brazil",
      value: "BR",
    },
    {
      name: "Canada",
      value: "CA",
    },
    {
      name: "China",
      value: "CN",
    },
    {
      name: "France",
      value: "FR",
    },
    {
      name: "Germany",
      value: "DE",
    },
    {
      name: "Ireland",
      value: "IE",
    },
    {
      name: "Italy",
      value: "IT",
    },
    {
      name: "Japan",
      value: "JP",
    },
    {
      name: "Portugal",
      value: "PT",
    },
    {
      name: "Russia",
      value: "RU",
    },
    {
      name: "Spain",
      value: "ES",
    },
    {
      name: "United States",
      value: "US",
    },
    {
      name: "Other",
      value: "other",
    },
  ];
  return (
    <div>
      <Header />
      <SignupForm palaces={palaceList} countries={countryList} />
    </div>
  );
}

export default App;
