# autonomo.common

[![npm version](https://img.shields.io/npm/v/@autonomo/common.svg?style=flat-square)](https://www.npmjs.com/package/@autonomo/common)
[![install size](https://img.shields.io/badge/dynamic/json?url=https://packagephobia.com/v2/api.json?p=@autonomo/common&query=$.install.pretty&label=install%20size&style=flat-square)](https://packagephobia.now.sh/result?p=@autonomo/common)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@autonomo/common?style=flat-square)](https://bundlephobia.com/package/@autonomo/common@latest)
[![Known Vulnerabilities](https://snyk.io/test/npm/@autonomo/common/badge.svg)](https://snyk.io/test/npm/@autonomo/common)

A library that contains all needed common resources to be used in [autonomo.api](https://github.com/pabloibanezcom/autonomo.api) and [autonomo.web](https://github.com/pabloibanezcom/autonomo.web) repositories.

## Table of Contents

- [Installing](#installing)
- [Running in development mode](#running-in-development-mode)
- [Building](#building)
- [Publishing](#publishing)

## Installing

```bash
npm install
```

## Running in development mode

```bash
npm run dev
```

This will build the package and will watch for any change to re-build it.

## Building

```bash
npm run build
```

## Publishing

```bash
npm run publish:patch
```

A npm user must be configured in order to be able to publish it.

## Example of use in other client repo

Install first autonomo.common in the repo

```bash
npm install @autonomo.common
```

Then you need to import the resource (interface, type, enum, util, ...) from root package

```js
import { Business } from '@autonomo/common';

const business: Business = {
  key: 'myBusiness',
  name: 'My business',
  ...
}
```
