import { SHA384 } from "crypto-js";

export const hash = (s: string): string => {
  return SHA384(s).toString();
};