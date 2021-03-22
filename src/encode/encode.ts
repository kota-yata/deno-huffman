import { bitsTable, occurrenceArray, treeArray } from "../../global.d.ts";
import { getOccurence } from "./getOccurrence.ts";
import { generateTree } from "./generateTree.ts";
import { generateResultBits } from "./getResult.ts";
import { encodeTree, getEncodedTreeLength } from "./encodeTree.ts";
import { generateBitsTableFromTreeArray } from "../common/generateBitsTable.ts";

export const encodeHuffman = (plane: string): string => {
  const occurrenceArray: occurrenceArray = getOccurence(plane);
  const huffmanTree: treeArray = generateTree(occurrenceArray)[0];
  const bitsTable: bitsTable = new Array(0) as [string, string][];
  generateBitsTableFromTreeArray(huffmanTree, bitsTable);
  const encodedTree: string = encodeTree(huffmanTree);
  const encodedTreeLength: string = getEncodedTreeLength(encodedTree);
  const result: string = generateResultBits(plane, bitsTable);
  return encodedTreeLength + encodedTree + result;
};
