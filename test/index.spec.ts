import { encodeHuffman } from "../src/encode/encode.ts";
import { decodeHuffman } from "../src/decode/decode.ts";

const green: string = "\u001b[32m";
const red: string = "\u001b[31m";
const reset: string = "\u001b[0m";

const huffmanTest = (text: string) => {
  console.log(
    `\n${green}-------------------- 😀 Huffman Test --------------------${reset}`,
  );
  console.log(`      Original Text | ${text}`)
  let original: string = "";
  for (let i = 0; i < text.length; i++) {
    original += text[i].charCodeAt(0).toString(2);
  }
  const result: string = encodeHuffman(text);
  const compressionQuality: number =
    Math.round(result.length / original.length * 10000) / 100;
  console.log(`Compression Quality | ${compressionQuality}%`);
  const lengthDiff: number = result.length - original.length;
  const displayDiff: string = lengthDiff >= 0
    ? `${red}${lengthDiff}${reset}`
    : `${green}${lengthDiff}${reset}`;
  console.log(
    `      Length Change | ${original.length} => ${result.length} (${displayDiff})`,
  );
  const decoded: string = decodeHuffman(result);
  if(decoded !== text) throw new Error(`Decode result must be ${text}, but got ${decoded}`);
  console.log(
    `${green}---------------　🎉 Successfully passed!!　---------------${reset}\n`,
  );
};

huffmanTest("go go gophers");
const temp1 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
huffmanTest(temp1);
const temp2 =
  "Hello I'm Kota Yatagai living in Japan. I'm 17 years old now, and I'm going to study abroad this year. Huffman compression of this kind of short sentence is going to be bigger size than original size. Since I don't know how to take over this problem, this gonna be the last version of my compression algorithm";
huffmanTest(temp2);
