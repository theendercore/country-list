import { MouseEvent, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CountryTableCSS from "./CountryTable.module.css";

type CountryTableProps = {
  countries: Country[];
};

export default function CountryTable({ countries }: CountryTableProps) {
  const [selected, setSelected] = useState<string | null>(null);

  function handleClick(
    e: MouseEvent<HTMLTableRowElement, globalThis.MouseEvent>
  ) {
    let newValue = e.currentTarget.getAttribute("data-id");
    if (newValue === selected) newValue = null;
    setSelected(newValue);
    console.log(selected);
  }

  return (
    <TableContainer component={Paper} className={CountryTableCSS.Table}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell size="small">Flag</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="center">Currency</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {countries.map((country) => (
            <>
              <TableRow
                key={country.name.replaceAll(" ", "-")}
                data-id={country.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                className={
                  selected === country.name
                    ? CountryTableCSS.SelectedRow
                    : CountryTableCSS.Row
                }
                onClick={handleClick}
              >
                <TableCell size="small">{country.emoji}</TableCell>
                <TableCell> {`${country.name} (${country.code})`}</TableCell>
                <TableCell align="center">{country.currencies[0]}</TableCell>
              </TableRow>
              {selected === country.name && (
                <div key={country.name.replaceAll(" ", "-") + "-content"} >Content Here</div>
              )}
            </>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
