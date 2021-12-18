const BASE = 1;
const LENGTH = 16;
const MULTIPLIER = 0x1_00_00;

export const id = () =>
  Math.floor((BASE + Math.random()) * MULTIPLIER)
    .toString(LENGTH)
    .slice(BASE);
