# Bundling<br>JavaScript
<h2 style="margin:50px 0"> The Good, the Dead and the Ugly Code</h2>

Lukas Taegert<br>
@Big Techday 11, 2018-05-18<br>
<a href="https://www.tngtech.com/"><img src="img/tng.svg"></img></a>

[[

@audience:
- Works with JS? Webpack? Rollup?
- Maybe you should, why you should, what's special about R

---

<a href="https://nolanlawson.com/2016/08/15/the-cost-of-small-modules">
<p>nolanlawson.com/2016/08/15/the-cost-of-small-modules</p>
<img src="img/small-modules-article.png" style="width:550px"></a>

[[

- Nolan Lawson, Microsoft Edge team
- Rollup much better (except GCC), why is that?

---

## About RollupJS

<!-- .slide: data-transition="slide" -->
![rollup-logo](img/rollup.svg) <!-- .element class="section-appear" style="float:left; height: 300px; animation-delay:0.4s" -->

- <!-- .element class="section-appear" style="animation-delay:0.6s" -->Created by Rich Harris in 2015
- <!-- .element class="section-appear" style="animation-delay:0.8s" -->Bundles and optimizes JavaScript
- <!-- .element class="fragment" data-fragment-index="1" -->Used by many popular JS projects:<br>
  <span class="fragment appear" data-fragment-index="1" style="animation-delay:0.4s">React,</span>
  <span class="fragment appear" data-fragment-index="1" style="animation-delay:0.6s">Vue,</span>
  <span class="fragment appear" data-fragment-index="1" style="animation-delay:0.8s">Ember,</span>
  <span class="fragment appear" data-fragment-index="1" style="animation-delay:1.0s">Angular,<br></span>
  <span class="fragment appear" data-fragment-index="1" style="animation-delay:1.2s">D3,</span>
  <span class="fragment appear" data-fragment-index="1" style="animation-delay:1.4s">Jest,</span>
  <span class="fragment appear" data-fragment-index="1" style="animation-delay:1.6s">Prettier…</span>

---

## About myself
### (i.e. Lukas Taegert)

<!-- .slide: data-transition="slide" -->
![lukas-taegert](img/lukas-taegert.jpg) <!-- .element class="section-appear" style="float:left; height: 300px; animation-delay:0.4s" -->

- <!-- .element class="section-appear" style="animation-delay:0.6s" -->Contributing to Rollup<br>
  since Jul 2017 mainly improving<br>
  the "tree-shaking" algorithm
- <!-- .element class="section-appear" style="animation-delay:0.8s" -->Core team since Sep 2017
- <!-- .element class="section-appear" style="animation-delay:1.0s" -->Released all versions of Rollup<br>since Nov 2017

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


[[

- Node.js:2009
- Performance overhead of modularity


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
    <th><span class="highlight">CJS</span><span class="fragment" data-fragment-index="1">: import values</span></th>
    <th class="section-appear" style="animation-delay:1.4s"><span class="highlight">ESM</span><span class="fragment" data-fragment-index="2">: import bindings</span></th>
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
  <tr class="fragment" data-fragment-index="1">
    <td>
      Output: `"1"`
    </td>
    <td class="fragment" data-fragment-index="2">
      Output: `"2"`
    </td>
  </tr>
</table>
</div>

--

<!-- .slide: data-transition="slide" -->
## “Scope hoisting”

<div class="left-align-box section-appear" style="animation-delay:0.4s;">
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

---

# III
## “Tree-shaking”

--

<a href="https://medium.com/@Rich_Harris/tree-shaking-versus-dead-code-elimination-d3765df85c80">
<p>medium.com/@Rich_Harris/<br>tree-shaking-versus-dead-code-elimination-d3765df85c80</p>
<img src="img/tree-shaking-article.png" style="width:550px"></a>

[en.wikipedia.org/wiki/Tree_shaking](https://en.wikipedia.org/wiki/Tree_shaking)


[[

Shakes the syntax tree, not the module graph


--

<!-- .slide: data-transition="slide" -->
## Traditional DCE

<pre class="section-appear" style="display:inline-block; margin-right:300px;animation-delay:0.4s"><code class="lang-javascript hljs" data-noescape><span class="fragment turn-red" data-fragment-index="1">import {getValue} from './y.js';</span><span class="fragment show-red-once" data-fragment-index="1">No included usages</span>

<span class="fragment turn-red" data-fragment-index="0">function unused() {}</span><span class="fragment show-red-once" data-fragment-index="0">No usages</span>

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
(“Mark-and-Sweep DCE”)

<pre class="section-appear" style="display:inline-block; margin-right:300px;animation-delay:0.4s"><code class="lang-javascript hljs" data-noescape>import {getValue} from './getValue.js';

function unused() {}

function ciruclar1(){ circular2() }
function circular2(){ ciruclar1() }

<span class="fragment turn-green" data-fragment-index="0">export let x;</span><span class="fragment show-green-once" data-fragment-index="0">Part of API</span>

if (true) <span class="fragment turn-green" data-fragment-index="1">{
  x = 'default';
}</span> else {<span class="fragment show-green-once" data-fragment-index="1">Modifies included variable</span>
  x = getValue();
}<span class="fragment none" data-fragment-index="100"></span></code></pre></code></pre>


[[

That was the theory - how does Rollup do it?


---

# IV
## Rolling it up

[[

Also how I got into this project

--

<!-- .slide: data-transition="slide" -->
## Let's bundle


<svg class="full-size-svg section-appear" style="animation-delay:0.4s">
  <path d="M15,50 V90 h15 h-15 V200 h15 h-15  V310 h15 h-15 V420 h15 h-15 V500 l5,-20 l-5,10 l-5,-10 l5,20"
        pathLength="100" class="history-line section-selfdraw" style="animation-delay:0.6s" />

  <g class="fragment none" data-fragment-index="1">
    <text x="45" y="102" class="section-appear group-highlight" style="animation-delay:0.8s;">
      Parse
    </text>
    <path d="M45,115 H300 V500 H750 V50 H300 V115"
          pathLength="100" class="history-line history-box group-selfdraw" />
    <foreignObject x="310" y="60" width="430" height="430" class="group-appear">
      <div style="text-align:left;margin: 12px;margin-top:20px;">
        <ul>
          <li>Parse code to AST</li>
          <li>Create scope hierarchy</li>
          <li>Collect declarations</li>
          <li>Bind identifiers to declarations</li>
        </ul>
        <p>Repeat with discovered dependencies</p>
      </div>
    </foreignObject>
   </g>

  <g class="fragment none" data-fragment-index="2">
    <text x="45" y="212" class="section-appear group-highlight" style="animation-delay:1.0s;">
      Link
    </text>
    <path d="M45,225 H300 V500 H750 V50 H300 V225"
          pathLength="100" class="history-line history-box group-selfdraw" />
    <foreignObject x="310" y="60" width="430" height="430" class="group-appear">
      <div style="text-align:left;margin: 12px;margin-top:20px;">
        <ul>
          <li>Link imports and exports across modules</li>
        </ul>
      </div>
    </foreignObject>
  </g>

  <g class="fragment none" data-fragment-index="3">
    <text x="45" y="322" class="section-appear group-highlight" style="animation-delay:1.0s;">
      Mark
    </text>
    <path d="M45,335 H300 V500 H750 V50 H300 V335"
          pathLength="100" class="history-line history-box group-selfdraw" />
    <foreignObject x="310" y="60" width="430" height="430" class="group-appear">
      <div style="text-align:left;margin: 12px;margin-top:20px;">
        <ul>
          <li>Mark external exports</li>
        </ul>
        <p>
        In multiple passes:
        </p>
        <ul>
          <li>Mark statements to be included</li>
        </ul>
      </div>
    </foreignObject>
  </g>

  <g class="fragment none" data-fragment-index="4">
    <text x="45" y="432" class="section-appear group-highlight" style="animation-delay:1.2s;">
      Render
    </text>
    <path d="M45,445 H300 V500 H750 V50 H300 V445"
          pathLength="100" class="history-line history-box group-selfdraw" />
    <foreignObject x="310" y="60" width="430" height="430" class="group-appear">
      <div style="text-align:left;margin: 12px;margin-top:20px;">
        <ul>
          <li>Render concatenated transformed modules as bundle</li>
        </ul>
      </div>
    </foreignObject>
  </g>
</svg>

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
## Tree-shaking today

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

<ul>
  <li class="section-appear" style="animation-delay:0.4s"><span class="highlight">Value</span>-Tracking</li>
  <li class="section-appear" style="animation-delay:0.6s"><span class="highlight">Object-Shape</span>-Tracking</li>
  <li class="section-appear" style="animation-delay:0.8s">Function <span class="highlight">Return-Value</span>-Tracking</li>
</ul>

--

<!-- .slide: data-transition="slide" -->
## New tracking abilities

<div class="left-align-box section-appear" style="min-width:300px;animation-delay:0.4s">
  `main.js`
  <pre class="section-appear" style="animation-delay:0.6s"><code id="value-tracking-in" contenteditable class="lang-javascript hljs">console.log('effect');

const arr = [1, 2, 3];
const aString = arr
  .map(v => 2 * v)
  .join();
  
const obj = {
  nested: () => {}
}
obj.nested();

const curried = function() {
  return () => {};
};
curried()();
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

## What's on the road map?

<ul>
  <li class="section-appear" style="animation-delay:0.4s">Tree-shake object properties
    <ul>
      <li class="fragment" data-fragment-index="1">Remove unused methods and values</li>
      <li class="fragment appear" data-fragment-index="1" style="animation-delay:0.4s">Better CJS tree-shaking</li>
    </ul>
  </li>
  <li class="fragment" data-fragment-index="2">Inline variable values only used once</li>
    <ul>
      <li class="fragment" data-fragment-index="3">Avoid unnecessary property accesses</li>
    </ul>
  <li class="fragment appear" data-fragment-index="3" style="animation-delay:0.4s">…</li>
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

<!-- .slide: data-transition="slide" -->
## What about web apps?

<div class="section-appear" style="text-align:left;display:inline-block;animation-delay:0.4s">
  <ul>
    <li>Plugins for CSS, LESS, SASS</li>
    <li class="section-appear" style="animation-delay:0.6s">Dev server plugin<br>(combines nicely with watch mode)</li>
    <li class="section-appear" style="animation-delay:0.8s">HTML template plugin</li>
  </ul>
  <p class="section-appear" style="animation-delay:1.0s">and…</p>
  <ul>
    <li class="fragment" data-fragment-index="1">Code-splitting! <span class="highlight fragment appear" data-fragment-index="1" style="animation-delay:0.4s">(new!)</span></li>
  </ul>
  <p class="fragment" data-fragment-index="2">Lots of things in the pipeline here!</p>
</div>

---

# Thank you!

<p style="margin-top:40px">Special thanks to:</p>

<a class="section-appear" style="animation-delay:0.4s" href="https://github.com/Rich-Harris">Rich Harris,</a><br>
<a class="section-appear" style="animation-delay:0.6s" href="https://github.com/guybedford">Guy Bedford,</a><br>
<a class="section-appear" style="animation-delay:0.8s" href="https://github.com/rollup/rollup/graphs/contributors">countless other contributors,</a><br>
<a href="https://www.tngtech.com/"><img src="img/tng.svg" class="section-appear" style="animation-delay:1.0s"></a><br>
<span class="fragment" data-fragment-index="1">and of course</span><br>

<h2 class="fragment appear" data-fragment-index="1" style="animation-delay:0.4s">you!</h2>

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
