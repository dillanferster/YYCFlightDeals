import { useState } from "react";
import Papa from "papaparse";

export async function readCSVFile() {
  const response = await fetch("/airports.csv");
  const csvText = await response.text();
  const parsedCsv = Papa.parse(csvText, { header: true }).data;

  return parsedCsv;
}
