import * as React from "react";
import CountryTable from "./components/CountryTable/CountryTable";
import Header from "./components/Header/Header";
import { useQuery, gql } from "@apollo/client";
import "./App.css";

const GET_LOCATIONS = gql`
  query Countries {
    countries {
      name
      native
      code
      emoji
      capital
      continent {
        name
        code
      }
      currencies
      languages {
        name
        native
      }
      phones
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery<CountryResponse>(GET_LOCATIONS);
  if (loading) return <p>Loading...</p>;
  if (error || data == undefined) return <p>Error : {error!.message}</p>;

  return (
    <div className="App">
      <Header />
      <div className="Content">
        <CountryTable countries={data.countries} />
      </div>
    </div>
  );
}

export default App;
