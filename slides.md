# Bundling JavaScript
## The Good, the Dead and the Ugly Code

TNG Technology Consulting, 2018-05-04

---

# I
## A Short History of<br>Bundling

--

## Modular JavaScript

<svg class="full-size-svg fragment">
  <path d="M15,50 V88 h15 h-15 V158 h15 h-15 V228 h15 h-15 V298 h15 h-15 V368 h15 h-15 V438 h15 h-15 V500 l5,-20 l-5,10 l-5,-10 l5,20"
        pathLength="100" class="history-line svg-selfdraw" />

  <g>
    <text x="45" y="100" class="svg-appear" style="animation-delay:0.2s;">
      IIFEs
    </text>
  </g>

  <g class="fragment none">
    <text x="45" y="170" class="svg-appear group-highlight" style="animation-delay:0.4s;">
      CJS
    </text>
    <path d="M45,183 H300 V500 H750 V50 H300 V183"
          pathLength="100" class="history-line history-box group-selfdraw" />
    <foreignObject x="310" y="60" width="430" height="430" class="group-appear">
      <div class="group-appear" style="margin-top:100px;">
      <span class="highlight">C</span>ommon <span class="highlight">JS</span>
      <br><br>
      Module format used by
      <br>
      Node.js
      </div>
    </foreignObject>
  </g>

  <g>
    <text x="45" y="240" class="svg-appear" style="animation-delay:0.6s;">
      AMD
    </text>
  </g>

  <g>
    <text x="45" y="310" class="svg-appear" style="animation-delay:0.8s;">
      UMD
    </text>
  </g>

  <g class="fragment none">
    <text x="45" y="380" class="svg-appear group-highlight" style="animation-delay:1.0s;">
      ESM
    </text>
    <path d="M45,393 H300 V500 H750 V50 H300 V393"
          pathLength="100" class="history-line history-box group-selfdraw" />
    <foreignObject x="310" y="60" width="430" height="430" class="group-appear">
      <div class="group-appear" style="margin-top:70px;">
      <span class="highlight">E</span>CMA<span class="highlight">S</span>cript
      <span class="highlight">M</span>odules
      <br><br>
      Native JS module format
      <br><br>
      (introduced with ECMAScript 2015)
      </div>
    </foreignObject>
  </g>

  <g>
    <text x="45" y="450" class="svg-appear" style="animation-delay:1.2s;">
      SystemJS
    </text>
  </g>
</svg>

--

## Modules are bad for performance

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

--

## Tooling

<!-- als Timeline links mit Box rechts -->

<!-- Browserify: CJS, emulate Node runtime -->
<!-- Webpack: CJS, ES6 -->
<!-- Rollup: ES6 (other formats with plugins) 0RT -->

<svg class="full-size-svg fragment">
  <path d="M15,50 V120 h15 h-15 V260 h15 h-15 V400 h15 h-15 V500 l5,-20 l-5,10 l-5,-10 l5,20"
        pathLength="100" class="history-line svg-selfdraw" />

  <g class="fragment none">
    <text x="45" y="132" class="svg-appear group-highlight" style="animation-delay:0.2s;">
      Browserify
    </text>
    <path d="M45,145 H300 V500 H750 V50 H300 V145"
          pathLength="100" class="history-line history-box group-selfdraw" />
    <foreignObject x="310" y="60" width="430" height="430" class="group-appear">
      <div class="group-appear" style="margin-top:20px;">
      <img src="img/browserify.svg" style="display:block;height:180px;margin:30px auto">
      Bundles <span class="highlight">CJS</span> modules
      <br><br>
      Includes emulated Node runtime loader
      </div>
    </foreignObject>
   </g>

  <g class="fragment none">
    <text x="45" y="272" class="svg-appear group-highlight" style="animation-delay:0.4s;">
      Webpack
    </text>
    <path d="M45,285 H300 V500 H750 V50 H300 V285"
          pathLength="100" class="history-line history-box group-selfdraw" />
    <foreignObject x="310" y="60" width="430" height="430" class="group-appear">
      <div class="group-appear" style="margin-top:20px;">
      <img src="img/webpack.svg" style="display:block;height:180px;margin:30px auto">
      Bundles <span class="highlight">CJS</span>, <span class="highlight">AMD</span>,
      <span class="highlight">ESM</span>
      <br><br>
      Includes custom runtime loader
      </div>
    </foreignObject>
  </g>

  <g class="fragment none">
    <text x="45" y="412" class="svg-appear group-highlight" style="animation-delay:0.6s;">
      Rollup
    </text>
    <path d="M45,425 H300 V500 H750 V50 H300 V425"
          pathLength="100" class="history-line history-box group-selfdraw" />
    <foreignObject x="310" y="60" width="430" height="430" class="group-appear">
      <div class="group-appear" style="margin-top:20px;">
      <img src="img/rollup.svg" style="display:block;height:180px;margin:30px auto">
      Bundles <span class="highlight">ESM</span> modules
      <br><br>
      <span class="highlight">NO RUNTIME LOADER!</span>
      </div>
    </foreignObject>
  </g>
</svg>

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
