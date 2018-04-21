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

<!-- Browserify: CJS, emulate Node runtime -->
<!-- Webpack: CJS, ES6 -->
<!-- Rollup: ES6 (other formats with plugins) 0RT -->

<svg class="full-size-svg fragment">
  <path d="M15,50 V140 h15 h-15 V280 h15 h-15 V420 h15 h-15 V500 l5,-20 l-5,10 l-5,-10 l5,20"
        pathLength="100" class="history-line selfdraw" />

  <g class="fragment none">
    <text x="45" y="152"
          class="appear" style="animation-delay:0.2s;">
      Browserify
    </text>
    <path d="M45,165 H300 V500 H750 V50 H300 V165"
          pathLength="100" class="history-line history-box group-selfdraw" />
   </g>

  <g class="fragment none">
    <text x="45" y="292"
          class="appear" style="animation-delay:0.4s;">
      Webpack
    </text>
    <path d="M45,305 H300 V500 H750 V50 H300 V305"
          pathLength="100" class="history-line history-box group-selfdraw" />
  </g>

  <g class="fragment none">
    <text x="45" y="432"
          class="appear" style="animation-delay:0.6s;">
      Rollup
    </text>
    <path d="M45,445 H300 V500 H750 V50 H300 V445"
          pathLength="100" class="history-line history-box group-selfdraw" />
  </g>
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
## Tree-shaking

--
