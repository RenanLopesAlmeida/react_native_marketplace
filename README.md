# About
GoMarketplace is a react native project to practice some features of an e commerce app, features like: consuming data from an API (in this case, it's a fake api in server.json file),  
list the products and showing them on a grid with 2 columns or 1 column, you can choose which one you want to, as the video is showing down bellow.

You can also add a product to a shopping cart, when you do that, the total items changes as weel as subtotal of shopping cart.

In the shopping cart page, you are able to see the products you added as weel as its quantity. You can change a product quantity and when a product quantity is equal to zero, that product is removed from the cart, and when there are no items in your shopping cart, a friendly info is shown in the middle of the screen


![goMarketplaceGif](https://user-images.githubusercontent.com/17504941/88073911-1eed2600-cb4d-11ea-99d6-fab2179468ae.gif)

## Techs

- React Native
- Typescript
- styled-components
- axios
- State Management with Context API
- Async Storage
- React Navigation
- useContext, useEffect, useState, useMemo
- json-server

## Getting started

#### all you need to do is:
- start your Emulator
- run `yarn` in your terminal on the root project
- open a separated terminal and run `yarn json-server server.json -p 3333` to start a server to provide a fake api
- open one more separeted terminal and run `yarn start`
- you can open one more separated terminal or in your vscode terminal, run: `yarn android` or `yarn ios`
