# TextQuoteAndPosition

## Purpose

Hypothesis uses two modules, https://www.npmjs.com/package/dom-anchor-text-position and https://www.npmjs.com/package/dom-anchor-text-quote, to convert between DOM ranges and annotation selectors.

This repo packages those modules for standalone use in the browser. They are exported as `anchoring.TextQuoteAnchor` and `anchoring.TextPositionSelector`. 

It also exports https://www.npmjs.com/package/wrap-range-text, as `anchoring.WrapRangeText`, in order to wrap highlights around annotation targets.

## Requirements

yarn

webpack

## Build

Run `yarn` to install dependencies

Run `webpack` to build `dist\standalone-anchoring.js`

## Use

### To convert a selection in a web page into the same selectors included in the payload when the Hypothesis client creates an annotation.

Visit a web page. 

In a browser console, paste these lines to load the module.

```
s = document.createElement('script')
s.src = 'https://jonudell.info/hlib/standalone-anchoring.js'
document.body.appendChild(s)
```

Now make a selection in the page, then paste these lines into the console:

```
range = getSelection().selection.getRangeAt(0)
quoteSelector = anchoring.TextQuoteAnchor.fromRange(document.body, range)
positionSelector = anchoring.TextPositionAnchor.fromRange(document.body, range)
```

And inspect the values of the selectors:

positionSelector: {start: 51, end: 72}

quoteSelector: {exact: "illustrative examples", prefix: "n↵    This domain is for use in ", suffix: " in documents. You may use this↵"}

### To do the reverse: anchor to a target using selectors in a Hypothesis annotation.

The target for the example above is the exact phrase "illustrative examples" on the web page example.com. 

Visit http://example.com

In a browser console, paste these lines to load the module.

```
s = document.createElement('script')
s.src = 'https://jonudell.info/hlib/standalone-anchoring.js'
document.body.appendChild(s)
```

Assume we've retrieved an annotation from the Hypothesis service. The TextQuoteSelector in its JSON payload may have been created programmatically, as above, or by using the Hypothesis client. 

Its value is as shown below.

Paste these lines to anchor the annotation by painting a highlight.

```
exact = 'illustrative examples'
prefix = '\n    This domain is for use in '
range = anchoring.TextQuoteAnchor.toRange(document.body, {"exact":exact,"prefix":prefix})
highlight = document.createElement('mark')
anchoring.WrapRangeText(highlight, range)
```

The phrase "illustrative examples" should be highlighted.