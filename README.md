# TextQuoteAndPosition

## Purpose

Hypothesis uses two modules, https://www.npmjs.com/package/dom-anchor-text-position and https://www.npmjs.com/package/dom-anchor-text-quote, to convert between DOM ranges and annotation selectors.

This repo packages those modules for standalone use in the browser. They are exported as `anchoring.TextQuoteAnchor` and `anchoring.TextPositionSelector`.

## Requirements

yarn

webpack

## Build

Run `yarn` to install dependencies

Run `webpack` to build `dist\StandaloneAnchoring.js`

## Use

```
<script src="PATH/StandaloneAnchoring.js"></script>

<script>
const range = selection.getRangeAt(0)
let quoteSelector = anchoring.TextQuoteAnchor.fromRange(document.body, range)
let positionSelector = anchoring.TextPositionAnchor.fromRange(document.body, range)
</script>
