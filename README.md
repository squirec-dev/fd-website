# Fluid Designs

## Contents

- [About](#about)
- [Pre-requisites](#pre-requisites)
- [Getting Started](#getting-started)
- [Architecture](#architecture)
- [Lighthouse](#lighthouse)
- [Finally](#finally)

## About

:heavy_exclamation_mark: Work in progress :heavy_exclamation_mark:    

## Pre-requisites

You will need to install NodeJS & Git to run locally

## Getting Started

1. Install npm packages 
```
npm i
```

2. Run locally!
```
npm run dev
```
This will run the development server and let you view on localhost:3000 by default. Check out the package.json for full list of scripts  
  
## Architecture

[SEMVER](https://semver.org/) versioning, MAJOR.MINOR.PATCH i.e.;
MAJOR bump covers breaking changes.
MINOR bump is for new features/ backwards compatible changes.
PATCH bump for bug fixes.

[ITCSS (Inverted Triangle CSS)](http://www.csswizardry.com), a way of organising CSS into levels of specifity (low to high).

[BEM](http://getbem.com/) naming convention; **B**lock, **E**lement, **M**odifier.

Commit messages should use the format `type: description`. Refer [here](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional#type-enum) for type options. 

## Lighthouse

Lighthouse is an important tool to review changes. Pre-commit, this should be run and documented here:
<!-- TODO: this should be automated -->

<details>

![Report: 09-05-2021](/public/images/reports/lighthouse-report--09-05-2021.PNG)

</details>

## Finally
Thanks for taking a look! Feel free to connect with me on LinkedIn or just drop me a message :ocean: 

