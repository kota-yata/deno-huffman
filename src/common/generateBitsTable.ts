import { treeArray, rebuiltTreeArray } from "../../global.d.ts";

export const generateBitsTableFromTreeArray = (
  tree: treeArray,
  bitsTable: [string, string][],
  bit: string = "",
): void => {
  if (tree[0] !== null) {
    bitsTable.push([tree[0], bit]);
    return;
  }
  if (!tree[2]) {
    throw new Error("You assigned wrong tree as argument");
  }
  generateBitsTableFromTreeArray(tree[2][0], bitsTable, bit + "0");
  generateBitsTableFromTreeArray(tree[2][1], bitsTable, bit + "1");
};

export const generateBitsTableFromRebuiltTreeArray = (tree: rebuiltTreeArray, bitsTable: [string, string][], bit: string = ""): void => {
  if (tree[0] !== null) {
    bitsTable.push([tree[0], bit]);
    return;
  }
  if (!tree[1]) {
    throw new Error("You assigned wrong tree as argument");
  }
  generateBitsTableFromRebuiltTreeArray(tree[1][0], bitsTable, bit + "0");
  generateBitsTableFromRebuiltTreeArray(tree[1][1], bitsTable, bit + "1");
}
