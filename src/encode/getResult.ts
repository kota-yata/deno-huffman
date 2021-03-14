import { treeArray, bitsArray } from "../../global.d.ts";

export const generateBitsArray = (
  tree: treeArray,
  bitsArray: [string, string][],
  bit: string = "",
): void => {
  if (tree[0] !== null) {
    bitsArray.push([tree[0], bit]);
    return;
  }
  if (!tree[2]) {
    throw new Error("You assign wrong array to generateBits() as argument");
  }
  generateBitsArray(tree[2][0], bitsArray, bit + "0");
  generateBitsArray(tree[2][1], bitsArray, bit + "1");
};

export const generateResultBits = (
  plane: string,
  bitsArray: bitsArray,
): string => {
  let stringArray: string[] = [];
  let bitArray: string[] = [];
  for (let i = 0; i < bitsArray.length; i++) {
    [stringArray[i], bitArray[i]] = [bitsArray[i][0], bitsArray[i][1]];
  }
  let resultString = "";
  for (let i = 0; i < plane.length; i++) {
    const index: number = stringArray.indexOf(plane[i]);
    resultString += bitArray[index];
  }
  return resultString;
};
