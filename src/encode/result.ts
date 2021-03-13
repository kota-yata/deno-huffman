import { treeArray } from "../../global.d.ts";

export const generateBitsArray = (
  tree: treeArray,
  resultStringArray: string[],
  resultBitArray: string[],
  bit = "",
): void => {
  if (tree[0] !== null) {
    resultStringArray.push(tree[0]);
    resultBitArray.push(bit);
    return;
  }
  if (!tree[2]) {
    throw Error("You assign wrong array to generateBits() as argument");
  }
  generateBitsArray(tree[2][0], resultStringArray, resultBitArray, bit + "0");
  generateBitsArray(tree[2][1], resultStringArray, resultBitArray, bit + "1");
};

export const generateResultBits = (
  plane: string,
  stringArray: string[],
  bitArray: string[],
): string => {
  let resultString = "";
  for (let i = 0; i < plane.length; i++) {
    const index: number = stringArray.indexOf(plane[i]);
    resultString += bitArray[index];
  }
  return resultString;
};
