# sonic

A [re-frame](https://github.com/Day8/re-frame) application designed to not suck.

## Docs

You can take a look at our docs [here](https://docs.google.com/document/d/1oBdpKyHLnqYU64qiFBKMHDBjYq8ppL9W1twelGQt-Kw/edit?usp=sharing)

## Development Mode

### Run application:

```
lein clean
lein figwheel dev
```

Figwheel will automatically push cljs changes to the browser.

Wait a bit, then browse to [http://localhost:3449](http://localhost:3449).

## Production Build


To compile clojurescript to javascript:

```
lein clean
lein cljsbuild once min
```
