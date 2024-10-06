import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";


export default [
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
 {rules:{
  // 'react/react-in-jsx-scope':0,
  // 'no-unused-vars':0,
  // 'no-param-reassign':0,
  // 'no-restricted-syntax':0,
 }}
];