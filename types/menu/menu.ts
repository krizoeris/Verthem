import { MenuItem } from "./menu-item";

export type Menu = {
  type: "main" | "account" | "legal";
  accessibility: "public" | "private";
  items: MenuItem[];
};
