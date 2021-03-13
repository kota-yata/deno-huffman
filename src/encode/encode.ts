import { occurrenceArray, treeArray } from "../../global.d.ts";
import { getOccurence } from "./occurrence.ts";
import { generateTree } from "./tree.ts";
import { generateBitsArray, generateResultBits } from "./result.ts";

export const encodeHuffman = (plane: string) => {
  const occurrenceArray: occurrenceArray = getOccurence(plane);
  const huffmanTree: treeArray = generateTree(occurrenceArray)[0];
  const stringArray: string[] = [];
  const bitArray: string[] = [];

  generateBitsArray(huffmanTree, stringArray, bitArray);
  const result: string = generateResultBits(plane, stringArray, bitArray);
  return result;
};
