var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/babelPluginImportLib2Es.ts
var babelPluginImportLib2Es_exports = {};
__export(babelPluginImportLib2Es_exports, {
  default: () => babelPluginImportLib2Es_default
});
module.exports = __toCommonJS(babelPluginImportLib2Es_exports);
var import_fs = __toESM(require("fs"));
var import_path = require("path");
var cwd = process.cwd();
function replacePath(path) {
  if (path.node.source && /\/lib\//.test(path.node.source.value)) {
    const esModule = path.node.source.value.replace("/lib/", "/es/");
    const esPath = (0, import_path.dirname)((0, import_path.join)(cwd, `node_modules/${esModule}`));
    if (import_fs.default.existsSync(esPath)) {
      path.node.source.value = esModule;
    }
  }
}
function replaceLib() {
  return {
    visitor: {
      ImportDeclaration: replacePath,
      ExportNamedDeclaration: replacePath
    }
  };
}
var babelPluginImportLib2Es_default = replaceLib;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
