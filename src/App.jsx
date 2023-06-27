import "./App.css";
import SignupForm from "./components/SignupForm";
import Navbar from "./components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  const palaceList = [
    {
      name: "Select",
      value: "Select",
    },
    {
      name: "Hampton Court Palace",
      value: "Hampton Court Palace",
    },
    {
      name: "Tower Of London",
      value: "Tower Of London",
    },
    {
      name: "Banqueting House",
      value: "Banqueting House",
    },
    {
      name: "Kensington Palace",
      value: "Kensington Palace",
    },
    {
      name: "Kew Palace",
      value: "Kew Palace",
    },
    {
      name: "Hillsborough Castle",
      value: "Hillsborough Castle",
    },
  ];

  const countryList = [
    {
      name: "Select",
      value: "Select",
    },
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
    <ChakraProvider>
      <div className="App">
        <Navbar />
        <SignupForm palaces={palaceList} countries={countryList} />
      </div>
    </ChakraProvider>
  );
}

export default App;
