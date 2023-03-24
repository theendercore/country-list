type CountryResponse = {
  countries: Country[];
}

type Country = {
  __typename: string;
  name: String;
  native: String;
  code: String;
  emoji: String;
  capital?: String;
  continent: Continent;
  currencies: String[];
  languages: Language[];
  phones: String[];
};

type Continent = {
  __typename: string;
  name: String;
  code: "AF" | "AN" | "AS" | "EU" | "NA" | "OC" | "SA";
};

type Language = {
  __typename: string;
  name: String;
  native: String;
};

type State = {};
