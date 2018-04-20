# Bundling JavaScript
## The Good, the Dead and the Ugly Code

TNG Technology Consulting, 2018-05-04

---

# I
## A Short History of<br>Bundling

--

Fewer requests = Faster load times

<!-- Images: Many loaded libs -> one bundle + times -->

--

## A Short History of Tooling

<!-- als Timeline links mit Box rechts -->

<!-- Browserify: CJS -->
<!-- Webpack: CJS, ES6 -->
<!-- Rollup: ES6 (other formats with plugins) -->

<svg class="full-size-svg fragment">
  <path d="M10,0 V490"
        pathLength="100" class="history-line selfdraw" />
  <path d="M10,500 l10,-20 l-10,10 l-10,-10 l10,20 c"
        pathLength="100" class="history-line appear" style="animation-delay:0.4s;" />
  <path d="M10,100 H30"
        pathLength="100" class="history-line selfdraw" />
  <text x="45" y="112"
        class="appear" style="animation-delay:0.2s;">
    Hello
  </text>
  <path d="M10,250 h20"
        pathLength="100" class="history-line selfdraw" style="animation-delay:0.2s;" />
  <text x="45" y="262"
        class="appear" style="animation-delay:0.4s;">
    Hello
  </text>
  <path d="M10,400 h20"
        pathLength="100" class="history-line selfdraw" style="animation-delay:0.4s;" />
  <text x="45" y="412"
        class="appear" style="animation-delay:0.6s;">
    Hello
  </text>
</svg>

--

## A Short History of JS Modules

<!-- als Timeline links mit Box rechts -->

- Multiple script tags
- CommonJS modules (2009?)
- AMD
- UMD
- ESM
- SystemJS

---

# II
## Rollup or<br>The Beauty of ESM

--

Medium article

--

Contrast CJS, ESM

---

# III
## Rollup's build process

--
