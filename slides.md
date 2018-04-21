# Bundling JavaScript
## The Good, the Dead and the Ugly Code

TNG Technology Consulting, 2018-05-04

---

# I
## A Short History of<br>Bundling

--

## A Short History of JS Modularization

<svg class="full-size-svg fragment">
  <path d="M15,50 V88 h15 h-15 V158 h15 h-15 V228 h15 h-15 V298 h15 h-15 V368 h15 h-15 V438 h15 h-15 V500 l5,-20 l-5,10 l-5,-10 l5,20"
        pathLength="100" class="history-line svg-selfdraw" />

  <g class="fragment none">
    <text x="45" y="100" class="svg-appear" style="animation-delay:0.2s;">
      IIFEs
    </text>
    <path d="M45,113 H300 V500 H750 V50 H300 V113"
          pathLength="100" class="history-line history-box group-selfdraw" />
   </g>

  <g class="fragment none">
    <text x="45" y="170" class="svg-appear" style="animation-delay:0.4s;">
      CJS
    </text>
    <path d="M45,183 H300 V500 H750 V50 H300 V183"
          pathLength="100" class="history-line history-box group-selfdraw" />
  </g>

  <g class="fragment none">
    <text x="45" y="240" class="svg-appear" style="animation-delay:0.6s;">
      AMD
    </text>
    <path d="M45,253 H300 V500 H750 V50 H300 V253"
          pathLength="100" class="history-line history-box group-selfdraw" />
  </g>

  <g class="fragment none">
    <text x="45" y="310" class="svg-appear" style="animation-delay:0.8s;">
      UMD
    </text>
    <path d="M45,323 H300 V500 H750 V50 H300 V323"
          pathLength="100" class="history-line history-box group-selfdraw" />
  </g>

  <g class="fragment none">
    <text x="45" y="380" class="svg-appear" style="animation-delay:1.0s;">
      ESM
    </text>
    <path d="M45,393 H300 V500 H750 V50 H300 V393"
          pathLength="100" class="history-line history-box group-selfdraw" />
  </g>

  <g class="fragment none">
    <text x="45" y="450" class="svg-appear" style="animation-delay:1.2s;">
      SystemJS
    </text>
    <path d="M45,463 H300 V500 H750 V50 H300 V463"
          pathLength="100" class="history-line history-box group-selfdraw" />
  </g>
</svg>

--

Fewer requests <svg class="right-arrow-svg">
  <path d="M5,15 h50 l-10,-10 l30,15 l-30,15 l10,-10 h-50"
        pathLength="100" class="history-line selfdraw" style="animation-delay:0.6s;"/>
</svg> Faster loading
<svg style="display:block; width:800px; height:400px; margin:20px auto">
  <text x="300" y="80" text-anchor="end" class="section-appear" style="animation-delay:0.8s;">jquery.js</text>
  <text x="300" y="140" text-anchor="end" class="section-appear" style="animation-delay:1.0s;">angular.js</text>
  <text x="300" y="200" text-anchor="end" class="section-appear" style="animation-delay:1.2s;">lodash.js</text>
  <text x="300" y="260" text-anchor="end" class="section-appear" style="animation-delay:1.4s;">app.js</text>
  <text x="300" y="320" text-anchor="end" class="section-appear" style="animation-delay:1.6s;">…</text>
  <g class="fragment none">
    <path d="M360,40 h20 V185 h50 l-10,-10 l30,15 l-30,15 l10,-10 h-50 V340 h-20"
          pathLength="100" class="history-line group-selfdraw" />
    <text x="480" y="200" class="group-appear" style="animation-delay:0.6s;">bundle.js</text>
  </g>
</svg>


<!-- Images: Many loaded libs -> one bundle + times -->

--

## A Short History of Tooling

<!-- als Timeline links mit Box rechts -->

<!-- Browserify: CJS, emulate Node runtime -->
<!-- Webpack: CJS, ES6 -->
<!-- Rollup: ES6 (other formats with plugins) 0RT -->

<svg class="full-size-svg fragment">
  <path d="M15,50 V140 h15 h-15 V280 h15 h-15 V420 h15 h-15 V500 l5,-20 l-5,10 l-5,-10 l5,20"
        pathLength="100" class="history-line svg-selfdraw" />

  <g class="fragment none">
    <text x="45" y="152" class="svg-appear" style="animation-delay:0.2s;">
      Browserify
    </text>
    <path d="M45,165 H300 V500 H750 V50 H300 V165"
          pathLength="100" class="history-line history-box group-selfdraw" />
   </g>

  <g class="fragment none">
    <text x="45" y="292" class="svg-appear" style="animation-delay:0.4s;">
      Webpack
    </text>
    <path d="M45,305 H300 V500 H750 V50 H300 V305"
          pathLength="100" class="history-line history-box group-selfdraw" />
  </g>

  <g class="fragment none">
    <text x="45" y="432" class="svg-appear" style="animation-delay:0.6s;">
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

---

# IV
##
