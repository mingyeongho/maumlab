import { atom } from "recoil";
import { sessionStorageEffect } from "./effects";

export const userState = atom<string | undefined>({
  key: "userState",
  default: undefined,
  effects: [sessionStorageEffect("user")],
});
