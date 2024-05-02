#!/usr/bin/env node

import { create } from "create-create-x";
import { resolve } from "node:path";

const templateRoot = resolve(__dirname, "..", "templates");

const caveat = `
Congratulations! You have successfully created a new addon.
`;

create("create-addon", {
  templateRoot,
  defaultTemplate: "",
  caveat,
});
