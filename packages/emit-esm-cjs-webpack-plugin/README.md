# @x.render/emit-esm-cjs-webpack-plugin

<p>
<a href="https://www.npmjs.com/package/@x.render/emit-esm-cjs-webpack-plugin" target="__blank"><img src="https://img.shields.io/npm/v/@x.render/emit-esm-cjs-webpack-plugin" alt="NPM version" /></a>

<a href="https://www.npmjs.com/package/@x.render/emit-esm-cjs-webpack-plugin" target="__blank"><img src="https://img.shields.io/npm/dm/%40x.render%2Femit-esm-cjs-webpack-plugin" alt="NPM Downloads" /></a>

</p>

[中文文档](./README.zh.md)

## Introduce

Code optimization plugin

## Usage

```bash
npm i @x.render/emit-esm-cjs-webpack-plugin -D
```

```javascript
import EmitEsmCjsWebpackPlugin from "@x.render/emit-esm-cjs-webpack-plugin";

EmitEsmCjsWebpackPlugin.getConfig(compiler, config, options);
```

### Options

| **Name** | **Type** | **Required** | **Default** | **Description**                                  |
| -------- | -------- | ------------ | ----------- | ------------------------------------------------ |
| alias    | `Object` | No           |             | Configure the alias of the module reference path |
