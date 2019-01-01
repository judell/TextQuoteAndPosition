# TextQuoteAndPosition

## Purpose

Hypothesis uses two modules, https://www.npmjs.com/package/dom-anchor-text-position and https://www.npmjs.com/package/dom-anchor-text-quote, to convert between DOM ranges and annotation selectors.

This repo packages those modules for standalone use in the browser. They are exported as `anchoring.TextQuoteAnchor` and `anchoring.TextPositionSelector`.

It also exports https://www.npmjs.com/package/wrap-range-text, as `anchoring.WrapRangeText`, which is needed to wrap highlights around annotation targets.

## Requirements

yarn

webpack

## Build

Run `yarn` to install dependencies

Run `webpack` to build `dist\StandaloneAnchoring.js`

## Use

### To convert a selection in a web page into the same selectors included in the payload when the Hypothesis client creates an annotation.

```
<script src="PATH/StandaloneAnchoring.js"></script>

<script>
const range = selection.getRangeAt(0)
let quoteSelector = anchoring.TextQuoteAnchor.fromRange(document.body, range)
let positionSelector = anchoring.TextPositionAnchor.fromRange(document.body, range)
</script>
```

### To do the reverse: anchor something to a selection based on selectors in a retrieved Hypothesis annotation.

example tbd
