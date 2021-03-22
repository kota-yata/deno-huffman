import { dividedObj } from "../../global.d.ts";

export const convertSymbolToBits = (symbol: string): string => {
  const bits: string = symbol.charCodeAt(0).toString(2);
  return bits;
}

export const convertBitsToSymbol = (bits: string): string => {
  const symbol: string = String.fromCharCode(parseInt(bits, 2));
  return symbol;
}

export const spliceString = (string: string, divisionNumber: number): dividedObj => {
  const spliced: string = string.slice(0, divisionNumber);
  const remaining: string = string.slice(divisionNumber);
  return { spliced, remaining }
}
