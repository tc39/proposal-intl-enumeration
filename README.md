# Intl Enumeration API Specification
List supported values of options in pre-existing ECMA 402 API.

## Stage 1 
Propose to [move to Stage 1 in TC June 2020 meeting](https://docs.google.com/presentation/d/17bkiVWuYxhMc24If72d6oENK3G6G-irO2EB4EEQCgxU/edit#slide=id.g881894be7c_0_156). Agreed by TC39 meeting 2020-06-03 to advanced to Stage 1

## Motivation


## Overview

```
Intl.getSupportedCalendars()
Intl.getSupportedCurrencies()
Intl.getSupportedNumberingSystems()
Intl.getSupportedTimeZones()
Intl.getSupportedUnits()
```


## Background

https://github.com/tc39/ecma402/issues/435

## Usage example
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

// Find out the supported units
Intl.getSupportedUnits()
// ['acre', 'bit', 'byte', 'celsius', 'centimeter', 'day',
//  'degree', 'fahrenheit', 'fluid-ounce', 'foot', 'gallon',
//  ...
//  'terabit', 'terabyte', 'week', 'yard', 'year'];
```



## Authors
* Frank Tang (@FrankYFTang)

## Reviewers
*

## Proposal

### Spec

## References


Implementation Status



This repo is setup by following instruction on [TC39 template-for-proposals](https://github.com/tc39/template-for-proposals)


=================== from the template , will be deleted later ==========

  1.  Avoid merge conflicts with build process output files by running:
      ```sh
      git config --local --add merge.output.driver true
      git config --local --add merge.output.driver true
      ```

1.  Add a post-rewrite git hook to auto-rebuild the output on every commit:
      ```sh
      cp hooks/post-rewrite .git/hooks/post-rewrite
      chmod +x .git/hooks/post-rewrite
      ```
  1.  ["How to write a good explainer"][explainer] explains how to make a good first impression.

      > Each TC39 proposal should have a `README.md` file which explains the purpose
      > of the proposal and its shape at a high level.
      >
      > ...
      >
      > The rest of this page can be used as a template ...

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
