import { occurrenceArray, treeArray } from "../../global.d.ts";

const partitioning = (
  mda: occurrenceArray,
  start: number,
  end: number,
): number => {
  const pivot: number = mda[end][1];
  let pivotIndex: number = start;
  for (let i: number = start; i < end; i++) {
    if (mda[i][1] > pivot) continue;
    [mda[i], mda[pivotIndex]] = [mda[pivotIndex], mda[i]];
    pivotIndex++;
  }
  [mda[pivotIndex], mda[end]] = [mda[end], mda[pivotIndex]];
  return pivotIndex;
};

const sortQuickly = (
  mda: occurrenceArray,
  start = 0,
  end: number = mda.length - 1,
): void => {
  if (start >= end) return;
  const pivotIndex: number = partitioning(mda, start, end);
  sortQuickly(mda, start, pivotIndex - 1);
  sortQuickly(mda, pivotIndex + 1, end);
};

export const generateTree = (
  occurrenceArray: occurrenceArray,
): occurrenceArray => {
  if (occurrenceArray.length <= 1) return occurrenceArray;
  sortQuickly(occurrenceArray);
  const parsedArray: treeArray = [
    null,
    occurrenceArray[0][1] + occurrenceArray[1][1],
    [occurrenceArray[0], occurrenceArray[1]],
  ];
  occurrenceArray.splice(0, 2);
  occurrenceArray.unshift(parsedArray);
  return generateTree(occurrenceArray);
};
