
![](https://uploads-ssl.webflow.com/604a92a57d10a08b57c386d0/604a92a57d10a042cdc386ed_header-logo-dark.svg)

# Matador.ai Node.js SDK

## Version 0.1.2

# Introduction

The Matador Node.js SDK gives you an easy and reliable way to interact with the Matador Public API’s. This documentation provides a description of all the resources available in this NPM package. 

# Full Documentation

Here is a link to the complete package documentation on Notion.
[https://matadordev.notion.site/Matador-Node-js-SDK-226bb6a4a7aa4c82b5cc3f74ceb4833c](https://matadordev.notion.site/Matador-Node-js-SDK-226bb6a4a7aa4c82b5cc3f74ceb4833c)

# Getting started

## Installation

The installation is as easy as any other package. Use the package manager of your choice.

```bash
yarn add matadorai
```

## API Key

This package requires an API key, which is a JWT.

## The Matador Client

The package provides a core object which takes care of all the background API communication. The MatadorClient object will be more than enough to perform most operations. 

On initialization, these arguments should to the constructor:

1. `apiKey` required to perform all operations


💡 More optional configuration params will be available in future releases

Here is an example:

```jsx
const {MatadorClient} = require("matadorai");

const matador = new MatadorClient(YOUR_API_KEY);