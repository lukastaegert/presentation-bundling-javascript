# Bundling JavaScript
## The Good, the Dead and the Ugly Code

Lukas Taegert<br>
TNG Technology Consulting, 2018-05-04
<a href="https://www.tngtech.com/"><img src="img/tng.svg"></img></a>

[[

@audience:
- Works with JS? Webpack? Rollup?
- Own involvement
- Maybe you should, why you should, what's special about R

---

<a href="https://nolanlawson.com/2016/08/15/the-cost-of-small-modules">
<p>nolanlawson.com/2016/08/15/the-cost-of-small-modules</p>
<img src="img/small-modules-article.png" style="width:550px"></a>

[[

Nolan Lawson, Microsoft Edge team

---

# I
## A Short History of<br>Bundling

[[

Part of the "JS Fatigue"

--

## Modular JavaScript

<svg class="full-size-svg section-appear" style="animation-delay:0.4s">
  <path d="M15,50 V88 h15 h-15 V158 h15 h-15 V228 h15 h-15 V298 h15 h-15 V368 h15 h-15 V438 h15 h-15 V500 l5,-20 l-5,10 l-5,-10 l5,20"
        pathLength="100" class="history-line section-selfdraw" style="animation-delay:0.6s" />

  <g>
    <text x="45" y="100" class="section-appear" style="animation-delay:0.8s;">
      IIFEs
    </text>
  </g>

  <g class="fragment none">
    <text x="45" y="170" class="section-appear group-highlight" style="animation-delay:1.0s;">
      CJS
    </text>
    <path d="M45,183 H300 V500 H750 V50 H300 V183"
          pathLength="100" class="history-line history-box group-selfdraw" />
    <foreignObject x="310" y="60" width="430" height="430" class="group-appear">
      <div style="margin-top:100px;">
      <span class="highlight">C</span>ommon <span class="highlight">JS</span>
      <br><br>
      Module format used by
      <br>
      Node.js
      </div>
    </foreignObject>
  </g>

  <g>
    <text x="45" y="240" class="section-appear" style="animation-delay:1.2s;">
      AMD
    </text>
  </g>

  <g>
    <text x="45" y="310" class="section-appear" style="animation-delay:1.4s;">
      UMD
    </text>
  </g>

  <g class="fragment none">
    <text x="45" y="380" class="section-appear group-highlight" style="animation-delay:1.6s;">
      ESM
    </text>
    <path d="M45,393 H300 V500 H750 V50 H300 V393"
          pathLength="100" class="history-line history-box group-selfdraw" />
    <foreignObject x="310" y="60" width="430" height="430" class="group-appear">
      <div style="margin-top:70px;">
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
    <text x="45" y="450" class="section-appear" style="animation-delay:1.8s;">
      SystemJS
    </text>
  </g>
</svg>

--

## Modules are bad for performance

Fewer requests <svg class="right-arrow-svg">
  <path d="M5,15 h30 l-2,-10 l15,20 l-15,20 l2,-10 h-30"
        pathLength="100" class="history-line svg-selfdraw" style="animation-delay:0.6s;"/>
</svg> Faster loading
<svg style="display:block; width:800px; height:400px; margin:20px auto">
  <text x="300" y="80" text-anchor="end" class="section-appear" style="animation-delay:0.8s;">jquery.js</text>
  <text x="300" y="140" text-anchor="end" class="section-appear" style="animation-delay:1.0s;">angular.js</text>
  <text x="300" y="200" text-anchor="end" class="section-appear" style="animation-delay:1.2s;">lodash.js</text>
  <text x="300" y="260" text-anchor="end" class="section-appear" style="animation-delay:1.4s;">app.js</text>
  <text x="300" y="320" text-anchor="end" class="section-appear" style="animation-delay:1.6s;">…</text>
  <g class="fragment none">
    <path d="M360,40 h20 V185 h30 l-2,-10 l15,20 l-15,20 l2,-10 h-30 V340 h-20"
          pathLength="100" class="history-line group-selfdraw" />
    <text x="480" y="200" class="group-appear" style="animation-delay:0.6s;">bundle.js</text>
  </g>
</svg>

--

## Tooling

<svg class="full-size-svg section-appear" style="animation-delay:0.4s">
  <path d="M15,50 V120 h15 h-15 V260 h15 h-15 V400 h15 h-15 V500 l5,-20 l-5,10 l-5,-10 l5,20"
        pathLength="100" class="history-line section-selfdraw" style="animation-delay:0.6s" />

  <g class="fragment none">
    <text x="45" y="132" class="section-appear group-highlight" style="animation-delay:0.8s;">
      Browserify
    </text>
    <path d="M45,145 H300 V500 H750 V50 H300 V145"
          pathLength="100" class="history-line history-box group-selfdraw" />
    <foreignObject x="310" y="60" width="430" height="430" class="group-appear">
      <div style="margin-top:20px;">
      <img src="img/browserify.svg" style="display:block;height:180px;margin:30px auto">
      Bundles <span class="highlight">CJS</span> modules
      <br><br>
      Includes emulated Node runtime loader
      </div>
    </foreignObject>
   </g>

  <g class="fragment none">
    <text x="45" y="272" class="section-appear group-highlight" style="animation-delay:1.0s;">
      Webpack
    </text>
    <path d="M45,285 H300 V500 H750 V50 H300 V285"
          pathLength="100" class="history-line history-box group-selfdraw" />
    <foreignObject x="310" y="60" width="430" height="430" class="group-appear">
      <div style="margin-top:20px;">
      <img src="img/webpack.svg" style="display:block;height:180px;margin:30px auto">
      Bundles <span class="highlight">CJS</span>, <span class="highlight">AMD</span>,
      <span class="highlight">ESM</span>
      <br><br>
      Includes custom runtime loader
      </div>
    </foreignObject>
  </g>

  <g class="fragment none">
    <text x="45" y="412" class="section-appear group-highlight" style="animation-delay:1.2s;">
      Rollup
    </text>
    <path d="M45,425 H300 V500 H750 V50 H300 V425"
          pathLength="100" class="history-line history-box group-selfdraw" />
    <foreignObject x="310" y="60" width="430" height="430" class="group-appear">
      <div style="margin-top:20px;">
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

<!-- .slide: data-transition="slide" -->
## Why no runtime loader?

<div style="text-align:left;display:inline-block">
<h3 class="section-appear" style="animation-delay:0.4s">Execution order</h3>
<table class="section-appear" style="animation-delay:0.6s">
  <tr>
    <th><span class="highlight">CJS</span><span class="fragment" data-fragment-index="2">: dynamic</span></th>
    <th class="section-appear" style="animation-delay:1.2s"><span class="highlight">ESM</span><span class="fragment" data-fragment-index="4">: statically known</span></th>
  </tr>
  <tr>
    <td class="section-appear" style="animation-delay:0.8s">
    `main.js`
    <pre class="section-appear" style="animation-delay:1.0s"><code class="lang-javascript hljs">const x = 1;
const y = require('./other.js');
console.log(x, y);</code></pre></td>
    <td class="section-appear" style="animation-delay:1.4s">
    `main.js`
    <pre class="section-appear" style="animation-delay:1.6s"><code class="lang-javascript hljs">const x = 1;
import {y} from './other.js';
console.log(x, y);</code></pre></td>
  </tr>
  <tr class="fragment" data-fragment-index="1">
    <td><ol>
      <li>`const x = 1`</li>
      <li class="fragment highlight-red" data-fragment-index="2">`<Execute other.js>`</li>
      <li>`const y = ...`</li>
      <li>`console.log(x,y)`</li>
    </ol></td>
    <td class="fragment" data-fragment-index="3"><ol>
      <li class="fragment highlight-red" data-fragment-index="4">`<Execute other.js>`</li>
      <li>`<Import y>`</li>
      <li>`const x = 1`</li>
      <li>`console.log(x,y)`</li>
    </ol></td>
  </tr>
</table>
</div>

--

<!-- .slide: data-transition="slide" -->
## Why no runtime loader?

<div style="text-align:left;display:inline-block">
<h3 class="section-appear" style="animation-delay:0.4s">Live bindings</h3>
<table class="section-appear" style="animation-delay:0.6s">
  <tr>
    <th><span class="highlight">CJS</span></th>
    <th class="section-appear" style="animation-delay:1.4s"><span class="highlight">ESM</span></th>
  </tr>
  <tr>
    <td class="section-appear" style="animation-delay:0.8s">
    `main.js`
    <pre class="section-appear" style="animation-delay:1.0s"><code class="lang-javascript hljs">const y = require('./other.js');
setTimeout(() =>
  console.log(y), 2000);</code></pre>
    `other.js`
    <pre class="section-appear" style="animation-delay:1.2s"><code class="lang-javascript hljs">module.exports = 1;
setTimeout(() =>
  module.exports = 2, 1000);</code></pre>
    </td>
    <td class="section-appear" style="animation-delay:1.6s">
    `main.js`
    <pre class="section-appear" style="animation-delay:1.8s"><code class="lang-javascript hljs">import {y} from './other.js';
setTimeout(() =>
  console.log(y), 2000);</code></pre>
    `other.js`
    <pre class="section-appear" style="animation-delay:2.0s"><code class="lang-javascript hljs">export let y = 1;
setTimeout(() => y = 2, 1000);</code></pre>
    </td>
  </tr>
  <tr class="fragment">
    <td>
      Output: `"1"`
    </td>
    <td class="fragment">
      Output: `"2"`
    </td>
  </tr>
</table>
</div>

--

<!-- .slide: data-transition="slide" -->
## Scope hoisting

<div class="left-align-box section-appear" style="animation-delay:0.4s">
  `main.js`
  <pre class="section-appear" style="animation-delay:0.6s"><code id="scope-hoisting-in-2" contenteditable class="lang-javascript hljs">import {y} from './other.js';
setTimeout(() =>
  console.log(y), 2000);</code></pre>
  `other.js`
  <pre class="section-appear" style="animation-delay:0.8s"><code id="scope-hoisting-in-1" contenteditable class="lang-javascript hljs">export let y = 1;
setTimeout(() => y = 2, 1000);</code></pre>
</div>
<div class="left-align-box section-appear" style="margin-left: 40px; min-width:300px;animation-delay:1.0s">
  <button class="rollup-button" onclick="rollupToBlock({
      './other.js': 'scope-hoisting-in-1',
      './main.js': 'scope-hoisting-in-2'
    },
    './main.js',
    'scope-hoisting-out')">
    <svg style="width:105px;height:60px">
      <image x="0" y="0" height="60px" href="img/rollup.svg" class="rollup-button-image" style="animation-delay:1.2s"/>
      <path d="M70,10 v30 l-10,-2 l20,15 l20,-15 l-10,2 v-30"
            pathLength="100" class="history-line rollup-button-line" style="animation-delay:1.4s;"/>
    </svg>
  </button>
  `bundle.js`
  <pre class="section-appear" style="animation-delay:1.6s"><code id="scope-hoisting-out" class="lang-javascript hljs"></code></pre>
</div>

--

No reassigned exports,<br>
shared variables across modules

<svg class="down-arrow-svg">
  <path d="M15,5 v30 l-10,-2 l20,15 l20,-15 l-10,2 v-30"
        pathLength="100" class="history-line svg-selfdraw" style="animation-delay:0.4s;"/>
</svg>

<p class="section-appear" style="animation-delay:0.6s">Better dead code elimination?</p>

---

# III
## Tree-shaking

--

<a href="https://medium.com/@Rich_Harris/tree-shaking-versus-dead-code-elimination-d3765df85c80">
<p>medium.com/@Rich_Harris/<br>tree-shaking-versus-dead-code-elimination-d3765df85c80</p>
<img src="img/tree-shaking-article.png" style="width:550px"></a>

[en.wikipedia.org/wiki/Tree_shaking](https://en.wikipedia.org/wiki/Tree_shaking)

--

<!-- .slide: data-transition="slide" -->
## Traditional DCE

<pre class="section-appear" style="display:inline-block; margin-right:300px;animation-delay:0.4s"><code class="lang-javascript hljs" data-noescape><span class="fragment turn-red" data-fragment-index="1">import {getValue} from './y.js';</span><span class="fragment show-red-once" data-fragment-index="1">No included usages</span>

<span class="fragment turn-red" data-fragment-index="0">function unUsed() {}</span><span class="fragment show-red-once" data-fragment-index="0">No usages</span>

function ciruclar1(){circular2()}
function circular2(){ciruclar1()}

export let x;

if (true) {
  x = 'default';
}<span class="fragment turn-red" data-fragment-index="0"> else {
  x = getValue();
}</span><span class="fragment show-red-once" data-fragment-index="0">Dead branch</span><span class="fragment none" data-fragment-index="100"></span></code></pre>

--

<!-- .slide: data-transition="slide" -->
## Tree-Shaking
("Mark-and-Sweep DCE")

<pre class="section-appear" style="display:inline-block; margin-right:300px;animation-delay:0.4s"><code class="lang-javascript hljs" data-noescape>import {getValue} from './getValue.js';

function unUsed() {}

function ciruclar1(){ circular2() }
function circular2(){ ciruclar1() }

<span class="fragment turn-green" data-fragment-index="0">export let x;</span><span class="fragment show-green-once" data-fragment-index="0">Part of API</span>

if (true) <span class="fragment turn-green" data-fragment-index="1">{
  x = 'default';
}</span> else {<span class="fragment show-green-once" data-fragment-index="1">Modifies included variable</span>
  x = getValue();
}<span class="fragment none" data-fragment-index="100"></span></code></pre></code></pre>

---

# IV
## Rolling it up

--

<!-- .slide: data-transition="slide" -->
## Let's bundle

<div style="margin-top:40px">
  <div class="section-appear" style="animation-delay:0.4s">
    <span class="highlight">1. Parse</span> code to AST,<br>
    create scope hierarchy,<br>
    collect declared variables,<br>
    bind identifiers to declarations;<br>
    repeat with discovered dependencies
  </div>
  
  <div class="selfdraw-container fragment">
    <svg class="down-arrow-svg" style="margin:0 auto">
      <path d="M15,5 v30 l-10,-2 l20,15 l20,-15 l-10,2 v-30"
            pathLength="100" class="history-line selfdraw"/>
    </svg>
    <span class="highlight">2. Link</span> imports and exports across modules
  </div>
  
  <div class="selfdraw-container fragment">
    <svg class="down-arrow-svg" style="margin:0 auto">
      <path d="M15,5 v30 l-10,-2 l20,15 l20,-15 l-10,2 v-30"
            pathLength="100" class="history-line selfdraw"/>
    </svg>
    <span class="highlight">3. Mark</span> external exports,<br>
    mark statements to be included (multi-pass)
  </div>
  
  <div class="selfdraw-container fragment">
    <svg class="down-arrow-svg" style="margin:0 auto">
      <path d="M15,5 v30 l-10,-2 l20,15 l20,-15 l-10,2 v-30"
            pathLength="100" class="history-line selfdraw"/>
    </svg>
    <span class="highlight">4. Render</span> concatenated transformed modules
  </div>
</div>

--

## Marking included statements

<div style="text-align:left;display:inline-block">
  <ul>
    <li class="section-appear" style="animation-delay:0.4s">Based on custom AST extensions:
      <ul>
        <li class="section-appear" style="animation-delay:0.6s"><span class="highlight">`ASTNode.hasEffects()`</span></li>
      </ul>
    </li>
    <li class="fragment" data-fragment-index="1">ca. summer 2017:
      <ul>
        <li class="fragment appear" data-fragment-index="1" style="animation-delay:0.4s">Only removed certain top-level statements</li>
        <li class="fragment" data-fragment-index="2"><span class="highlight">`CallExpression.hasEffects()`</span>:
          <br>Several hundred buggy lines of
          <br>custom logic duplicating other code
        </li>
      </ul>
    </li>
  </ul>
</div>

--

<!-- .slide: data-transition="slide" -->
## Welcoming the<br>Open-Closed-Principle

<ul>
  <li class="section-appear" style="animation-delay:0.4s">New effect types for expressions:
    <ul>
      <li class="section-appear" style="animation-delay:0.6s"><span class="highlight">`.hasEffectsWhenCalled()`</span></li>
      <li class="fragment" data-fragment-index="1"><span class="highlight">`.hasEffectsWhenAccessed()`</span></li>
    </ul>
  </li>
  <li class="fragment" data-fragment-index="2">New effect type for expressions<br>and patterns:
    <ul>
      <li class="fragment appear" data-fragment-index="2" style="animation-delay:0.4s"><span class="highlight">`.hasEffectsWhenAssigned()`</span></li>
    </ul>
  </li>
</ul>

--

<!-- .slide: data-transition="slide" -->
## Checking for side-effects

<div style="text-align:left;display:inline-block">
  <pre class="section-appear" style="margin-right:300px;animation-delay:0.4s"><code class="lang-javascript hljs" data-noescape><span class="fragment turn-green" data-fragment-index="0">export let x;</span><span class="fragment show-green-once" data-fragment-index="0">Part of API</span><span class="fragment show-blue-once" data-fragment-index="6">hasEffectsWhenAssigned?</span><span class="fragment show-green-once" data-fragment-index="7">hasEffectsWhenAssigned: true</span><span class="fragment show-blue-once" data-fragment-index="10">hasEffectsWhenAssigned?</span><span class="fragment show-green-once" data-fragment-index="11">hasEffectsWhenAssigned: true</span>
let y;<span class="fragment show-red-once" data-fragment-index="1">hasEffects: false</span><span class="fragment show-red-once" data-fragment-index="8">hasEffects: false</span><span class="fragment show-blue-once" data-fragment-index="12">hasEffectsWhenAssigned?</span><span class="fragment show-red-once" data-fragment-index="13">hasEffectsWhenAssigned: false</span><span class="fragment show-blue-once" data-fragment-index="15">hasEffectsWhenAssigned?</span><span class="fragment show-red-once" data-fragment-index="16">hasEffectsWhenAssigned: false</span>

function doubleY() {<span class="fragment show-red-once" data-fragment-index="2">hasEffects: false</span><span class="fragment show-red-once" data-fragment-index="9">hasEffects: false</span><span class="fragment show-blue-once" data-fragment-index="14">hasEffectsWhenCalled?</span>
  y = 2 * y;<span class="fragment show-blue-once" data-fragment-index="15">hasEffects?</span>
}

<span class="fragment turn-green" data-fragment-index="7">function assignValues() {</span><span class="fragment show-red-once" data-fragment-index="3">hasEffects: false</span><span class="fragment show-blue-once" data-fragment-index="4">hasEffectsWhenCalled?</span>
  <span class="fragment turn-green" data-fragment-index="11">x = 1;</span><span class="fragment show-blue-once" data-fragment-index="6">hasEffects?</span><span class="fragment show-blue-once" data-fragment-index="10">hasEffects?</span><span class="fragment show-green-once" data-fragment-index="11">hasEffects: true</span>
  y = 1;<span class="fragment show-blue-once" data-fragment-index="12">hasEffects?</span><span class="fragment show-red-once" data-fragment-index="13">hasEffects: false</span>
  doubleY();<span class="fragment show-blue-once" data-fragment-index="14">hasEffects?</span><span class="fragment show-red-once" data-fragment-index="16">hasEffects: false</span>
<span class="fragment turn-green" data-fragment-index="7">}</span>

<span class="fragment turn-green" data-fragment-index="7">assignValues();</span><span class="fragment show-blue-once" data-fragment-index="4">hasEffects?</span><span class="fragment show-green-once" data-fragment-index="7">hasEffects: true</span>
</code></pre>
  
  <div class="fragment" data-fragment-index="0"><span class="fragment" data-fragment-index="17" style="position:absolute;color:green">Done</span><span class="fragment fade-out" data-fragment-index="16">Pass <span class="fragment" data-fragment-index="8" style="position:absolute;">2</span><span class="fragment fade-out" data-fragment-index="7">1<span class="fragment" data-fragment-index="7">, second pass needed</span></span></span></div>
</div>

--

## A foundation for<br>new features

<ol>
  <li class="section-appear" style="animation-delay:0.4s"><span class="highlight">Value</span>-Tracking</li>
  <li class="section-appear" style="animation-delay:0.6s"><span class="highlight">Object-Shape</span>-Tracking</li>
  <li class="section-appear" style="animation-delay:0.8s">Function <span class="highlight">Return-Value</span>-Tracking</li>
</ol>

--

<!-- .slide: data-transition="slide" -->
## 1. Value-Tracking

<ul>
  <li class="section-appear" style="animation-delay:0.4s">Separate <span class="highlight">Variable</span> objects from declarations
    <ul>
      <li class="section-appear" style="animation-delay:0.6s">Variables <span class="highlight">track</span> initial values<br>and reassignments</li>
      <li class="fragment" data-fragment-index="1">A variable "value" is an <span class="highlight">AST node</span></li>
    </ul>
  </li>
  <li class="fragment" data-fragment-index="2">Due to performance considerations:
    <ul>
      <li class="fragment appear" data-fragment-index="2" style="animation-delay:0.4s">Value of reassigned variables is<br><span class="highlight">UNKNOWN_NODE</span></li>
    </ul>
  </li>
</ul>

--

<!-- .slide: data-transition="slide" -->
## Value-Tracking in action

<div class="left-align-box section-appear" style="min-width:300px;animation-delay:0.4s">
  `main.js`
  <pre class="section-appear" style="animation-delay:0.6s"><code id="value-tracking-in" contenteditable class="lang-javascript hljs">console.log('effect');

let x = 0;
const setX = globalVar
   ? () => x = 1
   : () => x = 2;
setX();

const a = [1, 2, 3];
const aString = a
  .map(v => 2 * v)
  .join();
</code></pre>
</div>
<div class="left-align-box" style="margin-left: 40px; min-width:300px;">
  <button class="rollup-button" onclick="rollupToBlock({
      './main.js': 'value-tracking-in'
    },
    './main.js',
    'value-tracking-out')">
    <svg style="width:105px;height:60px">
      <image x="0" y="0" height="60px" href="img/rollup.svg" class="rollup-button-image" style="animation-delay:0.8s" />
      <path d="M70,10 v30 l-10,-2 l20,15 l20,-15 l-10,2 v-30"
            pathLength="100" class="history-line rollup-button-line" style="animation-delay:1.0s;"/>
    </svg>
  </button>
  <span class="section-appear" style="animation-delay:1.2s">`bundle.js`</span>
  <pre class="section-appear" style="animation-delay:1.4s"><code id="value-tracking-out" class="lang-javascript hljs"></code></pre>
</div>

--

<!-- .slide: data-transition="slide" -->
## 2. Object shape tracking

<div style="text-align:left;display:inline-block">
  <p class="section-appear" style="animation-delay:0.4s">
  Make new effects shape-aware:
  </p>
  <ul>
    <li class="section-appear" style="animation-delay:0.6s">`hasEffectsWhenCalled`<span class="highlight section-appear" style="animation-delay:1.0s">`AtPath`</span></li>
    <li class="section-appear" style="animation-delay:0.8s">`hasEffectsWhenAccessed`<span class="highlight section-appear" style="animation-delay:1.2s">`AtPath`</span></li>
    <li class="section-appear" style="animation-delay:1.0s">`hasEffectsWhenAssigned`<span class="highlight section-appear" style="animation-delay:1.4s">`AtPath`</span></li>
  </ul>
</div>

--

<!-- .slide: data-transition="slide" -->
## Tracking member access

<pre class="section-appear" style="display:inline-block;margin-right:400px;animation-delay:0.4s"><code class="lang-javascript hljs" data-noescape>const <span class="fragment turn-blue-once" data-fragment-index="3">obj</span> = <span class="fragment turn-blue-once" data-fragment-index="4">{
  nested: <span class="fragment turn-blue-once" data-fragment-index="5">{
    x: <span class="fragment turn-blue-once" data-fragment-index="6"><span class="fragment turn-red-once" data-fragment-index="7">() => {}</span></span><span class="fragment show-blue-once" data-fragment-index="6">hasEffectsWhenCalledAtPath([])?</span><span class="fragment show-red-once" data-fragment-index="7">hasEffectsWhenCalledAtPath([]): false</span>
  }</span><span class="fragment show-blue-once" data-fragment-index="5">hasEffectsWhenCalledAtPath(["x"])?</span>
}</span><span class="fragment show-blue-once" data-fragment-index="4">hasEffectsWhenCalledAtPath(["nested", "x"])?</span>
  
<span class="fragment turn-blue-once" data-fragment-index="0"><span class="fragment turn-blue-once" data-fragment-index="1"><span class="fragment turn-blue-once" data-fragment-index="2"><span class="fragment turn-blue-once" data-fragment-index="3">obj</span>.nested</span>.x</span>()</span>;<span class="fragment show-blue-once" data-fragment-index="0">hasEffects?</span><span class="fragment show-red-once" data-fragment-index="7">hasEffects: false</span><span class="fragment show-blue-once" data-fragment-index="1">hasEffectsWhenCalledAtPath([])?</span><span class="fragment show-blue-once" data-fragment-index="2">hasEffectsWhenCalledAtPath(["x"])?</span><span class="fragment show-blue-once" data-fragment-index="3">hasEffectsWhenCalledAtPath(["nested", "x"])?</span>
</code></pre>

--

<!-- .slide: data-transition="slide" -->
## 3. Return value tracking

<ul>
  <li class="section-appear" style="animation-delay:0.4s">Return statements register themselves<br>on the function scope</li>
  <li class="fragment" data-fragment-index="1">Allows tree-shaking curried functions</li>
  <li class="fragment" data-fragment-index="2">New method:<br><span class="highlight fragment appear" data-fragment-index="2" style="animation-delay:0.4s">`someReturnExpressionWhenCalledAtPath()`</span></li>
</ul>

--

<!-- .slide: data-transition="slide" -->
## Tracking return values

<pre class="section-appear" style="display:inline-block;margin-right:400px;animation-delay:0.4s"><code class="lang-javascript hljs" data-noescape>function <span class="fragment turn-blue-once" data-fragment-index="2">getValue</span>(x) {
  if (x > 0) {
    return <span class="fragment turn-blue-once" data-fragment-index="3"><span class="fragment turn-red-once" data-fragment-index="4">() => 1</span></span>;<span class="fragment show-blue-once" data-fragment-index="3">hasEffectsWhenCalledAtPath([])?</span><span class="fragment show-red-once" data-fragment-index="4">hasEffectsWhenCalledAtPath([]): false</span>
  } else if (x === 0) {
    return <span class="fragment turn-blue-once" data-fragment-index="3"><span class="fragment turn-red-once" data-fragment-index="4">() => 0</span></span>;<span class="fragment show-blue-once" data-fragment-index="3">hasEffectsWhenCalledAtPath([])?</span><span class="fragment show-red-once" data-fragment-index="4">hasEffectsWhenCalledAtPath([]): false</span>
  }
  <span class="fragment add-red" data-fragment-index="3">return <span class="fragment turn-blue-once" data-fragment-index="3"><span class="fragment turn-green-once" data-fragment-index="4">undefined</span></span>;</span><span class="fragment show-blue-once" data-fragment-index="3">hasEffectsWhenCalledAtPath([])?</span><span class="fragment show-green-once" data-fragment-index="4">hasEffectsWhenCalledAtPath([]): true</span>
}
const val = <span class="fragment turn-blue-once" data-fragment-index="0"><span class="fragment turn-blue-once" data-fragment-index="1"><span class="fragment turn-blue-once" data-fragment-index="2">getValue</span>(1)</span>()</span>;<span class="fragment show-blue-once" data-fragment-index="0">hasEffects?</span><span class="fragment show-blue-once" data-fragment-index="1">hasEffectsWhenCalledAtPath([])?</span><span class="fragment show-blue-once" data-fragment-index="2">someReturnExpressionWhenCalledAtPath([],<br>  hasEffectsWhenCalledAtPath([])?)?</span><span class="fragment show-green-once" data-fragment-index="4">hasEffects: true</span>
</code></pre>
</div>

--

## What's on the road map?

<ul>
  <li class="section-appear" style="animation-delay:0.4s">Extend known builtin globals</li>
  <li class="fragment" data-fragment-index="1">Object literal property tree-shaking</li>
  <li class="fragment" data-fragment-index="2">Value inlining</li>
  <li class="fragment appear" data-fragment-index="2" style="animation-delay:0.4s">…</li>
</ul>

---

# V
## Should you use Rollup?

--

<a href="https://medium.com/webpack/webpack-and-rollup-the-same-but-different-a41ad427058c">
<p>medium.com/webpack/<br>webpack-and-rollup-the-same-but-different-a41ad427058c</p>
<img src="img/rollup-for-libraries-article.png" style="width:550px"></a>

--

<!-- .slide: data-transition="slide" -->
## Built for optimizing libraries

- <!-- .element class="section-appear" style="animation-delay:0.4s" -->Many supported output formats:<br>
  <span class="highlight">IIFE</span>,  <span class="highlight">CJS</span>, <span class="highlight">AMD</span>, <span class="highlight">UMD</span>, <span class="highlight">ESM</span>, <span class="highlight">SystemJS</span>
- <!-- .element class="fragment" --><span class="highlight">Readable</span> output:<br>
  Preserves original formatting
- <!-- .element class="fragment" --><span class="highlight">Preserves</span> annotations and other comments
- <!-- .element class="fragment" -->No runtime loader overhead!

--

<!-- .slide: data-transition="slide" -->
## Rich plugin ecosystem

<div class="section-appear" style="text-align:left;display:inline-block;animation-delay:0.4s">
  <p><a href="https://github.com/rollup/rollup/wiki/Plugins">github.com/rollup/rollup/wiki/Plugins</a></p>
  <ul>
    <li class="section-appear" style="animation-delay:0.6s">CJS, AMD module import</li>
    <li class="section-appear" style="animation-delay:0.8s">Babel, Uglify, Closure Compiler</li>
    <li class="section-appear" style="animation-delay:1.0s">TypeScript, Elm, ReasonML/OCaml,<br>WebAssembly</li>
    <li class="section-appear" style="animation-delay:1.2s">In memory bundling via plugin<br>(even in browsers!)</li>
    <li class="section-appear" style="animation-delay:1.4s">Import code from markdown documents</li>
    <li class="section-appear" style="animation-delay:1.6s">…</li>
  </ul>
</div>

--

## Trusted by some of the best

<span class="section-appear" style="animation-delay:0.4s">React,</span>
<span class="section-appear" style="animation-delay:0.6s">Vue,</span>
<span class="section-appear" style="animation-delay:0.8s">Ember,</span>
<span class="section-appear" style="animation-delay:1.0s">Angular,</span><br>
<span class="section-appear" style="animation-delay:1.2s">D3,</span>
<span class="section-appear" style="animation-delay:1.4s">Three.js,</span>
<span class="section-appear" style="animation-delay:1.6s">Moment,</span><br>
<span class="section-appear" style="animation-delay:1.8s">Jest,</span>
<span class="section-appear" style="animation-delay:2.0s">Prettier,</span>
<span class="section-appear" style="animation-delay:2.2s">Bootstrap,</span><br>
<span class="section-appear" style="animation-delay:2.4s">Babylon,</span>
<span class="section-appear" style="animation-delay:2.6s">Leaflet…</span>

--

<!-- .slide: data-transition="slide" -->
## What about web apps?

<div class="section-appear" style="text-align:left;display:inline-block;animation-delay:0.4s">
<ul>
  <li>Plugins for CSS, LESS, SASS</li>
  <li class="section-appear" style="animation-delay:0.6s">Dev server plugin<br>(combines nicely with watch mode)</li>
  <li class="section-appear" style="animation-delay:0.8s">HTML template plugin</li>
</ul>
<p class="section-appear" style="animation-delay:1.0s">But there is more…</p>
</div>

--

<!-- .slide: data-transition="slide" -->
## Code-Splitting <span class="highlight section-appear" style="animation-delay:0.4s">(new!)</span>

<div class="section-appear" style="text-align:left;display:inline-block;animation-delay:0.6s">
  <ul>
    <li class="section-appear" style="animation-delay:0.8s">No code duplication</li>
    <li class="fragment" data-fragment-index="1">Still no runtime loader!
      <ul class="fragment appear" data-fragment-index="1" style="animation-delay:0.4s">
        <li>bring your own AMD/SystemJS loader,<br>
            or use ES6 modules in modern browsers,<br>
            CJS modules in Node)
        </li>
      </ul>
    <li class="fragment" data-fragment-index="2">Dynamic "`import(…)`" support</li>
    <li class="fragment" data-fragment-index="3">Dependency-content-aware hashes<br>in file names</li>
    <li class="fragment appear" data-fragment-index="3" style="animation-delay:0.4s">…</li>
  </ul>
</div>

---

# VI
## The core team

--

<!-- .slide: data-transition="slide" -->
## Rich-Harris

![rich-harris](img/rich-harris.jpg) <!-- .element class="section-appear" style="float:left; height: 300px; animation-delay:0.4s" -->

- <!-- .element class="section-appear" style="animation-delay:0.6s" -->Created Rollup in 2015
- <!-- .element class="section-appear" style="animation-delay:0.8s" -->Journalist and creator of<br>*countless* JS frameworks<br>(check out Svelte!)

--

<!-- .slide: data-transition="slide" -->
## Guy Bedford

![guy-bedford](img/guy-bedford.jpg) <!-- .element class="section-appear" style="float:left; height: 300px; animation-delay:0.4s" -->

- <!-- .element class="section-appear" style="animation-delay:0.6s" -->Created SystemJS and JSPM
- <!-- .element class="section-appear" style="animation-delay:0.8s" -->Brought code-splitting to Rollup
- <!-- .element class="section-appear" style="animation-delay:1.0s" -->Core team since Dec 2017

--

<!-- .slide: data-transition="slide" -->
## Lukas Taegert (i.e. myself)

![lukas-taegert](img/lukas-taegert.jpg) <!-- .element class="section-appear" style="float:left; height: 300px; animation-delay:0.4s" -->

- <!-- .element class="section-appear" style="animation-delay:0.6s" -->Refactored tree-shaking<br>since Jul 2017
- <!-- .element class="section-appear" style="animation-delay:0.8s" -->Core team since Sep 2017
- <!-- .element class="section-appear" style="animation-delay:1.0s" -->Released all versions of Rollup<br>since Nov 2017

--

<!-- .slide: data-transition="slide" -->
## And countless contributors!

<div class="section-appear" style="text-align:left;display:inline-block;animation-delay:0.4s">
  Recent notable contributions:<br>
  <ul>
    <li  class="section-appear" style="animation-delay:0.6s"><span class="highlight">Kelly Selden</span>: Module-preserving rendering
      <br>to get tree-shaking for Ember.js
    </li>
    <li class="fragment"><span class="highlight">Sven Sauleau</span>: Core web assembly support for
      <br>Webpack and Rollup (in development)
    </li>
  </ul>
</div>

--

# Thank you!

Supported by <!-- .element: class="section-appear" style="animation-delay:0.4s; margin-top:60px" -->

<a href="https://www.tngtech.com/"><img src="img/tng.svg" class="section-appear" style="animation-delay:0.6s"></a>
