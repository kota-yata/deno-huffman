import { occurrenceArray, treeArray, bitsArray } from "../global.d.ts";
import { getOccurence } from "./encode/getOccurrence.ts";
import { generateTree } from "./encode/generateTree.ts";
import { generateBitsArray, generateResultBits } from "./encode/getResult.ts";
import { sortQuickly } from './common/sort.ts';

export const encodeHuffman = (plane: string): [string, bitsArray] => {
  const occurrenceArray: occurrenceArray = getOccurence(plane);
  const huffmanTree: treeArray = generateTree(occurrenceArray)[0];
  const bitsArray: bitsArray = new Array(0) as [string, string][];
  generateBitsArray(huffmanTree, bitsArray);
  const result: string = generateResultBits(plane, bitsArray);
  return [result, bitsArray];
};

export const decodeHuffman = (encodeResult: [string, bitsArray]) => {
  const bitsArray: bitsArray = encodeResult[1];
  
}
