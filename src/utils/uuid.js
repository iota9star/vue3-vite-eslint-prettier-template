import { v4 as uuidv4 } from "uuid";

const CHARS = [
  `a`,
  `b`,
  `c`,
  `d`,
  `e`,
  `f`,
  `g`,
  `h`,
  `i`,
  `j`,
  `k`,
  `l`,
  `m`,
  `n`,
  `o`,
  `p`,
  `q`,
  `r`,
  `s`,
  `t`,
  `u`,
  `v`,
  `w`,
  `x`,
  `y`,
  `z`,
  `0`,
  `1`,
  `2`,
  `3`,
  `4`,
  `5`,
  `6`,
  `7`,
  `8`,
  `9`,
  `A`,
  `B`,
  `C`,
  `D`,
  `E`,
  `F`,
  `G`,
  `H`,
  `I`,
  `J`,
  `K`,
  `L`,
  `M`,
  `N`,
  `O`,
  `P`,
  `Q`,
  `R`,
  `S`,
  `T`,
  `U`,
  `V`,
  `W`,
  `X`,
  `Y`,
  `Z`,
];

export function U8() {
  const u32 = U32();
  let u8 = ``;
  for (let i = 0; i < 8; i++) {
    const str = u32.substring(i * 4, i * 4 + 4);
    const hex = parseInt(str, 16);
    u8 += CHARS[hex % 0x3e];
  }
  return u8;
}

export function U32() {
  return U36().replace(/-/gm, ``);
}

export function U36() {
  return uuidv4();
}
