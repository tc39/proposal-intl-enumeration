# Intl Enumeration API Specification
List supported values of options in pre-existing ECMA 402 API.

## Stage 3
* [Advanced to Stage 1 in TC39 June 2020 meeting](https://docs.google.com/presentation/d/17bkiVWuYxhMc24If72d6oENK3G6G-irO2EB4EEQCgxU). 
  * [2020-06-03 Meeting Notes](https://github.com/tc39/notes/blob/master/meetings/2020-06/june-3.md#intl-enumeration-api-for-stage-1)
* [Advanced to Stage 2 in TC39 September 2020](https://docs.google.com/presentation/d/1IWOHZVkXL_qbjz4T76bXmtLh7VOrWkT-HJIH2ZwY6NU) meeting.
  * [2020-09-22 Meeting Notes](https://github.com/tc39/notes/blob/master/meetings/2020-09/sept-22.md#intl-enumeration-api-for-stage-2)
* [Update in TC39 Nov 2020](https://docs.google.com/presentation/d/1t0P8SKpcU9K_h-jYQ6ix5-02_mF1sAKt6v9AzipX3pw) meeting.
  * [2020-11-18 Meeting Notes](https://github.com/tc39/notes/blob/master/meetings/2020-11/nov-18.md#intl-enumeration-api-update)
* [Update in TC39 Apr 2021](https://docs.google.com/presentation/d/1LLuJJvGsppQfFf0eCBBcplub_E7NY4EdbSVeE2duyoA) meeting.
  * [2021-04-21 Meeting Notes](https://github.com/tc39/notes/blob/master/meetings/2021-04/apr-21.md#intl-enumeration-api-update)
* [Update in TC39 May 2021](https://docs.google.com/presentation/d/1rg5FMmU0vpi--KoxoIZPpNEWxhX-MfBUeoA0y_o94FQ/edit) meeting.
  * [2021-05-25 Meeting Notes](https://github.com/tc39/notes/blob/master/meetings/2021-05/may-25.md#intl-enumeration-api-stage-2-update)
* [Advanced Stage 3 advancement in TC39 July 2021](https://docs.google.com/presentation/d/1zL3lb4stb4wrfDlOeMsmW5NqjX_TxTWL5pMjTa1qHVw/edit)  meeting
  * [2021-07-13 Meeting Notes](https://github.com/tc39/notes/blob/master/meetings/2021-07/july-13.md#intl-enumeration-api-for-stage-3)
* [Update in TC39 Dec 2021](https://docs.google.com/presentation/d/1wR8Yg3JVwa1RAPgQGqUPsRtP0EeMXy_Q8zqgRIKRiQI) meeting.

### TG2 (ECMA402) Working Meeting Notes:
* [2020-05-20 TG2 Meeting Notes](https://github.com/tc39/ecma402/blob/master/meetings/notes-2020-05-21.md#enumeration-of-timezones-435)
* [2020-08-13 TG2 Meeting Notes](https://github.com/tc39/ecma402/blob/master/meetings/notes-2020-08-13.md#intl-enumeration-api)
* [2020-11-05 TG2 Meeting Notes](https://github.com/tc39/ecma402/blob/master/meetings/notes-2020-11-05.md#intl-enumeration-api-specification)
* [2021-03-11 TG2 Meeting Notes](https://github.com/tc39/ecma402/blob/master/meetings/notes-2021-03-11.md#privacy-evaluation-of-the-api-3)
* [2021-04-08 TG2 Meeting Notes](https://github.com/tc39/ecma402/blob/master/meetings/notes-2021-04-08.md#intl-enumeration-api-privacy-evaluation)
* [2021-05-06 TG2 Meeting Notes](https://github.com/tc39/ecma402/blob/master/meetings/notes-2021-05-06.md#intl-enumeration-api-for-stage-3)
* [2021-06-03 TG2 Meeting Notes](https://github.com/tc39/ecma402/blob/master/meetings/notes-2021-06-03.md#remove-region-option-for-timezone)
* [2021-07-01 TG2 Meeting Notes](https://github.com/tc39/ecma402/blob/master/meetings/notes-2021-07-01.md#intl-enumeration-api-for-stage-3)

## Need Help!
This proposal is now reaching stage 3, we need help to add tests into [Test262](https://github.com/tc39/test262) now. See [Issue 3131 in test262 for details](https://github.com/tc39/test262/issues/3131). We would also love to see polyfill available to web developers.
## Motivation

ECMA402 allows the set of supported local time zones, collations, calendars, numbering systems and  currency as implementation dependents. This proposal provides an API to identify the supported values of these options in the implementation. 

The proposed API empower the caller to feature detect the support in the implementation easily and could be used to download polyfill for missing support easily in the beginning of the loading time. For example, a web page could exam the return value and decide it need to import and install a DateTimeFormat polyfill because the return time zones does not contains the server stored user time zone preference and will not be able to use Intl.DateTimeFormat to format the time according to the server side stored time zone preferences. Users may set up their account and store their time zone preferences in the server side while previously using a different user agent which already supports such a time zone and need to use the user agent in another machine in an internet cafe to access the web application. The proposed API allows the web application to do an up front check and import polyfill from server side while the prefered time zone is not available in the user agent. Similarly, the web application may check for the supported set of currency and unit to implement the bootstrap logic of dynamic import polyfill for some javascript library. For example, engineers in Google are currently changing the closure library implementation to use ECMA402 support if the functionality is available to avoid unnecessary data download, but still download the necessary data and import polyfill while the desired support is not available. The proposed API allows the library to determine the logic with a very minimum amount of data.

Web applications can also combine the use of the proposed API with Intl.DisplayNames and Intl.NumberFormat to build a powerful UI without downloading a lot of data. For example, web applications can use the proposed API to get the list of supported currency, then use Intl.DisplayNames to get back the display name of the currency to build a menu for user to select the calendar, and format the currency amount by using Intl.NumberFormat API. The return value could also support the code to decide which set of the currency conversion information should be downloaded from the server and only download the set of currency the implementation knows how to format correctly, or download all the currency tables and then import polifil to support the one which is not supported. Without the proposed API the web application may either download an extra currency exchange table for currency which won’t be formatted correctly by Intl.NumberFormat and neither be able to efficiently determine which set of currency format data need to be imported with the polyfill. The proposed API empowers the web developer to design an efficient system to import minimum information from the server to implement such a fallback mechanism. 

ECMA 402 is also used on the server side. A server side application code running on top of Node.js, which is built based on v8 and can access ECMA402 code can call the proposed API to generate a list of time zone names known by the server into html and return to the client in a calendar application. 

In summary, the proposed API is an important facility to allow web developers to detect missing support and import fallback polyfills efficiently with a minimum amount of data in the application initialization time. It also allows web application, in conjunction with using other ECMA402 API to program powerful internationalization UI with very minimum information from server side. It is also a vital facility for server side usage of ECMA402.


## Overview

One method of Intl, return an array.

```javascript
Intl.supportedValuesOf(key)
```
### Supported Keys
* calendar
* collation
* currency
* numberingSystem
* timeZone
* unit


## Background

https://github.com/tc39/ecma402/issues/435

## Use case

### Use Case 1 - Detect Missing Features to Trigger the Import of Polifill
The user stores their application user preference in the server side to express they want to use the ROC calendar. While the user logs into the application from his new mobile phone, the application code calls this API and found the "roc" calendar is not in the support set, the application imports polyfill from the server side which implements the ROC calendar and uses the polyfill. The user then logs into the application from his desktop, and the application calls this API and found the “roc” calendar is supported, the application therefore just calls the Intl.DateTimeFormat directly.

### Use Case 2 - Server Side Programming
The web programmer is programming javascript running on top of Node.js by using ECMA402 code. The application (server side javascript running on top of Node.js) call this API to find out all the support set of calendar, collation, currency, numbering system, and time zone, and unit, and use that to generate UI selector in html and send to the client  to let the user to select in their application preference. After the user submits their choice, the server side application stores the user’s application preference into server side storage. The application code (server side javascript running on Node.js) later uses these preference values to output the html to the client. 

### Use Case 3 - Building Time Zone picker inside WebGL
Developer is working on a video game by using JavaScript to program WebGL and therefore all what users see on the screen is not HTML rendering and everything is 3D in WebGL. The programmer is writing the code to let the character the player control go enter a virtual store and select the currency they like to use to trade the virtual goodie, the programmer therefore need to build a 3D GUI in WebGL which list all the currency Intl.NumberFormat can support to format. A non-existing HTML solution won’t help them even if all the user agents support such a feature in HTML one day.


## Prior Arts
### Get the List of TimeZone

* Use Cases:
  * [How to get list of all timezones in javascript on Stack Overflow](https://stackoverflow.com/questions/38399465/how-to-get-list-of-all-timezones-in-javascript)
* Prior Arts:
  * [momentjs moment.tz.names](https://momentjs.com/timezone/docs/#/data-loading/getting-zone-names/)
  * [tzdb](https://github.com/vvo/tzdb/)
  * [countries-and-timezones](https://www.npmjs.com/package/countries-and-timezones)
  * [country-timezone](https://www.npmjs.com/package/country-timezone)

### Get the List of Currency Codes

* Use Cases:
  * [User request on Stack Overflow](https://stackoverflow.com/questions/58029344/get-list-of-supported-currencies)
* Prior Arts:
  * [currency-codes](https://www.npmjs.com/package/currency-codes)
  * 


## Usage example


```javascript
// Find out the supported calendars
Intl.supportedValuesOf("calendar").forEach(function(calendar) {
   // 'buddhist', 'chinese',  ... 'islamicc'
});

// Find out the supported currencies
Intl.supportedValuesOf("currency").forEach(function(currency) {
   // 'AED', 'AFN', 'ALL', ... 'ZWL'
});

// Find out the supported numbering systems
Intl.supportedValuesOf("numberingSystem").forEach(function(nu) {
  // 'adlm', 'ahom', 'arab', ...  'wara', 'wcho'
});

// Find out the supported time zones
Intl.supportedValuesOf("timeZone").forEach(function(timeZone) {
  // 'Africa/Abidjan', 'Africa/Accra', ... 'Pacific/Wallis'
});

// Find out the supported units
Intl.supportedValuesOf("unit").forEach(function(unit) {
  // 'acre', 'bit', 'byte', ... 'year'
});

```


## Authors
* Frank Tang (@FrankYFTang)

## Designated reviewers
* Shane Carr @sffc
* Jordan Harband @ljharb
## ECMAScript editors
* Richard Gibson @gibson042

## Proposal

### Spec
* https://tc39.es/proposal-intl-enumeration/

## References
### Analysis of Privacy / Fingerprinting Concerns
* [“Intl.Enumeration Privacy Implications Mozilla’s Recommendation”.](https://docs.google.com/document/d/1Zw6cYNJpL69HtQfA4-S7bKlCPywhhmoF6Mja-qy-JpU), Tom Ritter, Anne van Kesteren, Steven Englehardt, Zibi Braniecki, Mozilla, Feb 4, 2021.
* [Discussion during 2021-03 ECMA402 Meeting](https://github.com/tc39/ecma402/blob/master/meetings/notes-2021-03-11.md#privacy-evaluation-of-the-api-3)
* Duscussion during 2021-04 ECMA402 Meeting (link to be added soon)

## Implementation Status
* [v8 tracking bug](https://bugs.chromium.org/p/v8/issues/detail?id=10743)
* Mozilla
* JSC
* Test262




============================ Ignore Text Below ============================


#### The following are from the template, will be deleted later 

This repo is setup by following instruction on [TC39 template-for-proposals](https://github.com/tc39/template-for-proposals)

      Your explainer can point readers to the `index.html` generated from `spec.emu`
      via markdown like

      ```markdown
      You can browse the [ecmarkup output](https://ACCOUNT.github.io/PROJECT/)
      or browse the [source](https://github.com/ACCOUNT/PROJECT/blob/master/spec.emu).
      ```

      where *ACCOUNT* and *PROJECT* are the first two path elements in your project's Github URL.
      For example, for github.com/**tc39**/**template-for-proposals**, *ACCOUNT* is "tc39"
      and *PROJECT* is "template-for-proposals".


## Maintain your proposal repo

  1. Make your changes to `spec.emu` (ecmarkup uses HTML syntax, but is not HTML, so I strongly suggest not naming it ".html")
  1. Any commit that makes meaningful changes to the spec, should run `npm run build` and commit the resulting output.
  1. Whenever you update `ecmarkup`, run `npm run build` and commit any changes that come from that dependency.
  
  [explainer]: https://github.com/tc39/how-we-work/blob/master/explainer.md
