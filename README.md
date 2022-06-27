# E-commerce Store

Front-end project implementing features of an E-commerce store. The user is able to preview various products by category, post comments for every product in given category, use shopping bag and perform multi-step checkout to complete order.

Note: This project could be considered as a legacy codebase based on
ReactJS 17 tested with enzyme library (integrated with enzyme-adapter-react-17).

## The front-end project is implementing the following features:

* Home Page with various product related sections
* Change default language (component level i18n, supported languages: BG, EN)
* Product preview by category (currently is implemented for only one category)
* Full-size / sidebar menu navigation based on user device
* Add products to shopping bag
* Post comments for every product in given category
* Preview products both in mini or full-size shopping bag
* Increment or decrement the quantity of given item
* Remove given item from shopping bag
* Perform the following steps in checkout process to complete order:
    * Billing
    * Shipping
    * Payment
    * Preview

## The front-end project is using the following technologies:

* Initial structure is created with **create-react-app**
* Integrated **babel/eslint-parser** with added various rules
* Integrated **ReactJS 17**
* Component prop validation with **prop-types**
* Integrated **redux**
* Enabled persistent redux store with **redux-persist**
* Integrated **react-router v6**
* Integrated **webpack v5** - able to run webpack serve for development purposes and to produce build ready for deployment
* Implemented custom component level **i18n (HOC based)**
* Integrated **bootstrap 4.5**
* Integrated **react-bootstrap**
* Integrated **scss**
* Integrated **axios / redux-axios-middleware / axios-mock-adapter**
* Integrated **notifications with react-toastify**
* Integrated **react-final-form**
* Integrated **mocha**
* Integrated **sinon**
* Integrated **chai**
* Integrated **enzyme**
* Integrated **cypress.io** end to end testing framework
