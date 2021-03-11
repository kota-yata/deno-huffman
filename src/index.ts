// エンコード
// 平文を解析して出現する文字の数と各文字の出現回数を計算する
// 出現回数でソートした文字と出現回数の配列で木構造を作る
// 木構造を元に各文字のビット列を計算する

import { occurrenceArray, treeArray } from '../global.d.ts';
import { sortQuickly } from './encode/sort.ts';

const getOccurence = (plane: string): occurrenceArray => {
  let string: string = plane;
  const occurrenceArray: occurrenceArray = new Array(0) as occurrenceArray;
  while(string.length > 0) {
    const regExp: RegExp = new RegExp(string[0], "g");
    const occurrence: number = (string.match(regExp) || []).length;
    const relation: treeArray = [string[0], occurrence];
    console.log(relation);
    occurrenceArray.push(relation);
    string = string.replace(regExp, '');
  }
  return occurrenceArray;
}

const generateTree = (occurrenceArray: occurrenceArray): occurrenceArray => {
  if(occurrenceArray.length <= 1) return occurrenceArray;
  sortQuickly(occurrenceArray);
  const parsedArray: treeArray = [null, occurrenceArray[0][1] + occurrenceArray[1][1], [occurrenceArray[0], occurrenceArray[1]]];
  occurrenceArray.splice(0, 2);
  occurrenceArray.unshift(parsedArray);
  return generateTree(occurrenceArray);
}

const generateBitsArray = (tree: treeArray, resultStringArray: string[], resultBitArray: string[] ,bit: string = ''): void => {
  if(tree[0] !== null) {
    resultStringArray.push(tree[0]);
    resultBitArray.push(bit);
    return;
  }
  if(!tree[2]) throw Error('You assign wrong array to generateBits() as argument');
  generateBitsArray(tree[2][0], resultStringArray, resultBitArray, bit + '0');
  generateBitsArray(tree[2][1], resultStringArray, resultBitArray, bit + '1');
}

const generateResultBits = (plane: string, stringArray: string[], bitArray: string[]): string => {
  let resultString: string = '';
  for(let i: number = 0; i < plane.length; i++) {
    const index: number = stringArray.indexOf(plane[i]);
    resultString += bitArray[index];
  }
  return resultString;
}

const encodeHuffman = (plane: string) => {
  const occurrenceArray: occurrenceArray = getOccurence(plane);
  const huffmanTree: treeArray = generateTree(occurrenceArray)[0];
  const stringArray: string[] = [];
  const bitArray: string[] = [];

  generateBitsArray(huffmanTree, stringArray, bitArray);
  const result: string = generateResultBits(plane, stringArray, bitArray);
  return result;
}

console.log(encodeHuffman('Hello, I am a high school student living in Japan. Nice to meet you.'));
