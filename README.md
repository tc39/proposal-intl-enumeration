# Intl Enumeration API Specification
List supported values of options in pre-existing ECMA 402 API.

## Stage 2
* [Advanced to Stage 1 in TC39 June 2020 meeting](https://docs.google.com/presentation/d/17bkiVWuYxhMc24If72d6oENK3G6G-irO2EB4EEQCgxU/edit#slide=id.g881894be7c_0_156). 
* [Advanced to Stage 2 in TC39 September 2020](https://docs.google.com/presentation/d/1IWOHZVkXL_qbjz4T76bXmtLh7VOrWkT-HJIH2ZwY6NU/edit#slide=id.g96c285a300_1_0) meeting.

### Entrance Criteria for Stage 1 (Proposal)
* Identified “champion” who will advance the addition: **Frank Yung-Fong Tang**
* Prose outlining the problem or need and the general shape of a solution: **See this document**
* Illustrative examples of usage: **See this document**
* High-level API: **See this document**
* Discussion of key algorithms, abstractions and semantics
* Identification of potential “cross-cutting” concerns and implementation challenges/complexity
* A publicly available repository for the proposal that captures the above requirements: [**https://github.com/tc39/proposal-intl-enumeration**](https://github.com/tc39/proposal-intl-enumeration)
### Entrance Criteria for Stage 2 (Draft)
* Above
* Initial spec text: [**https://tc39.es/proposal-intl-enumeration**](https://tc39.es/proposal-intl-enumeration)
* **Acceptance Signifies**: The committee expects the feature to be developed and eventually included in the standard

### Entrance Criteria for Stage 3 (Candidate)
* Above
* Complete spec text
* Designated reviewers have signed off on the current spec text
* All ECMAScript editors have signed off on the current spec text
* **Acceptance Signifies**: The solution is complete and no further work is possible without implementation experience, significant usage and external feedback.

## Motivation


## Overview

### Option I
Several methods of Intl, each return an array

```
Intl.getSupportedCalendars()
Intl.getSupportedCurrencies()
Intl.getSupportedNumberingSystems()
Intl.getSupportedTimeZones([options])
Intl.getSupportedUnits()
```
### Option II
One method of Intl, return iteratable based on options
```
Intl.supportedValuesOf(key, [options])

```

## Background

https://github.com/tc39/ecma402/issues/435

## Use case
Feature Tests for newly added values in options supported in Intl API.
For example, web developer may want to use Chinese calendar if avaiable, or ROC calendar as a fallback if avaiable, otherwise Gregorian calendar as final resort. This API allow the code to check which calendar are avaiable and therefor to decide the fallback logic.



## Usage example

### For Option I
```
// Find out the supported calendars
Intl.getSupportedCalendars()
// ['buddhist', 'chinese', 'coptic', 'dangi', 'ethioaa', 'ethiopic', 
//  'gregory', 'hebrew', 'indian', 'islamic', 'islamic-umalqura',
//  'islamic-tbla', 'islamic-civil', 'islamic-rgsa', 'japanese', 
//  'persian', 'roc', 'islamicc'];

// Find out the supported currencies
Intl.getSupportedCurrencies()
// ['AED', 'AFN', 'ALL', 'AMD', 'ANG', 'AOA', 'ARS', 'AUD', 'AWG', 
//  'AZN', 'BAM', 'BBD', 'BDT', 'BGN', 'BHD', 'BIF', 'BMD', 'BND',
//  ...
//  'YER', 'ZAR', 'ZMW', 'SVC', 'XDR', 'XSU', 'ZWL'];

// Find out the supported numbering systems
Intl.getSupportedNumberingSystems()
// ['adlm', 'ahom', 'arab', 'arabext', 'bali', 'beng', 'bhks', 
//  'brah', 'cakm', 'cham', 'deva', 'fullwide', 'gong', 'gonm',
//  ...
// 'thai', 'tibt', 'tirh', 'vaii', 'wara', 'wcho'];

// Find out the supported time zones
Intl.getSupportedTimeZones()
// ['Africa/Abidjan', 'Africa/Accra', 'Africa/Addis_Ababa', 'Africa/Algiers',
//  'Africa/Asmera', 'Africa/Bamako', 'Africa/Bangui', 'Africa/Banjul',
//  ...
//   'Pacific/Truk', 'Pacific/Wake', 'Pacific/Wallis'];

// Find out the supported time zones of region "US"
Intl.getSupportedTimeZones({region: "US"})
// ["America/Adak", "America/Anchorage", "America/Boise", "America/Chicago", 
// "America/Denver", "America/Detroit", "America/Indiana/Knox", "America/Indiana/Marengo", 
// "America/Indiana/Petersburg", "America/Indiana/Tell_City", "America/Indiana/Vevay", 
// "America/Indiana/Vincennes", "America/Indiana/Winamac", "America/Indianapolis",
// "America/Juneau", "America/Kentucky/Monticello", "America/Los_Angeles", "America/Louisville",
// "America/Menominee", "America/Metlakatla", "America/New_York", "America/Nome",
// "America/North_Dakota/Beulah", "America/North_Dakota/Center", 
// "America/North_Dakota/New_Salem", "America/Phoenix", "America/Sitka", 
// "America/Yakutat", "Pacific/Honolulu"]

// Find out the supported units
Intl.getSupportedUnits()
// ['acre', 'bit', 'byte', 'celsius', 'centimeter', 'day',
//  'degree', 'fahrenheit', 'fluid-ounce', 'foot', 'gallon',
//  ...
//  'terabit', 'terabyte', 'week', 'yard', 'year'];
```

### For Option II
```
// Find out the supported calendars
for (const calendar of Intl.supportedValuesOf("calendar")) {
   // 'buddhist', 'chinese',  ... 'islamicc'
}
// Find out the supported currencies
for (const currency of Intl.supportedValuesOf("currency")) {
   // 'AED', 'AFN', 'ALL', ... 'ZWL'
}
// Find out the supported numbering systems
for (const numberingSystem of Intl.supportedValuesOf("numberingSystem")) {
  // 'adlm', 'ahom', 'arab', ...  'wara', 'wcho'
}
// Find out the supported time zones
for (const timeZone of Intl.supportedValuesOf("timeZone")) {
  // 'Africa/Abidjan', 'Africa/Accra', ... 'Pacific/Wallis'
}
// Find out the supported time zones of region "US"
for (const timeZoneInUS of Intl.supportedValuesOf("timeZone", {region: "US")) {
  // "America/Adak", "America/Anchorage", ... "America/Yakutat", "Pacific/Honolulu"
}
// Find out the supported units
for (const unit of Intl.supportedValuesOf("unit") {
  // 'acre', 'bit', 'byte', ... 'year'
}
// Find out the supported units of 'digital' kind
for (const unit of Intl.supportedValuesOf("unit", {kind: "digital"}) {
  // 'bit', 'byte', 'gigabit', ... 'terabit', 'terabyte'
}

// Find out the supported collation
for (const collation of Intl.supportedValuesOf("collation", {region: "TW")}) {
  // 'stroke', 'pinyin', ... 'zhuyin'
}
```


## Authors
* Frank Tang (@FrankYFTang)

## Reviewers
*

## Proposal

### Spec
* https://tc39.es/proposal-intl-enumeration/

## References
*

## Implementation Status
* [v8 prototype patch](https://chromium-review.googlesource.com/c/v8/v8/+/2301115)
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
