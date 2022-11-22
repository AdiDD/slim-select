import{e as M,d as $,_ as I,o as O,c as V,a as o,f as B,t as E,b as L}from"./index.js";var R={exports:{}};(function(d,w){(function(y,v){d.exports=v()})(M,function(){return function y(v,j,k){var n=window,m="application/octet-stream",r=k||m,e=v,c=!j&&!k&&e,t=document.createElement("a"),_=function(s){return String(s)},i=n.Blob||n.MozBlob||n.WebKitBlob||_,p=j||"download",l,S;if(i=i.call?i.bind(n):Blob,String(this)==="true"&&(e=[e,r],r=e[0],e=e[1]),c&&c.length<2048&&(p=c.split("/").pop().split("?")[0],t.href=c,t.href.indexOf(c)!==-1)){var u=new XMLHttpRequest;return u.open("GET",c,!0),u.responseType="blob",u.onload=function(s){y(s.target.response,p,m)},setTimeout(function(){u.send()},0),u}if(/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(e))if(e.length>1024*1024*1.999&&i!==_)e=x(e),r=e.type||m;else return navigator.msSaveBlob?navigator.msSaveBlob(x(e),p):f(e);else if(/([\x80-\xff])/.test(e)){var b=0,C=new Uint8Array(e.length),N=C.length;for(b;b<N;++b)C[b]=e.charCodeAt(b);e=new i([C],{type:r})}l=e instanceof i?e:new i([e],{type:r});function x(s){var a=s.split(/[:;,]/),h=a[1],A=a[2]=="base64"?atob:decodeURIComponent,D=A(a.pop()),U=D.length,g=0,T=new Uint8Array(U);for(g;g<U;++g)T[g]=D.charCodeAt(g);return new i([T],{type:h})}function f(s,a){if("download"in t)return t.href=s,t.setAttribute("download",p),t.className="download-js-link",t.innerHTML="downloading...",t.style.display="none",document.body.appendChild(t),setTimeout(function(){t.click(),document.body.removeChild(t),a===!0&&setTimeout(function(){n.URL.revokeObjectURL(t.href)},250)},66),!0;if(/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent))return/^data:/.test(s)&&(s="data:"+s.replace(/^data:([\w\/\-\+]+)/,m)),window.open(s)||confirm(`Displaying New Document

Use Save As... to download, then click back to return to this page.`)&&(location.href=s),!0;var h=document.createElement("iframe");document.body.appendChild(h),!a&&/^data:/.test(s)&&(s="data:"+s.replace(/^data:([\w\/\-\+]+)/,m)),h.src=s,setTimeout(function(){document.body.removeChild(h)},333)}if(navigator.msSaveBlob)return navigator.msSaveBlob(l,p);if(n.URL)f(n.URL.createObjectURL(l),!0);else{if(typeof l=="string"||l.constructor===_)try{return f("data:"+r+";base64,"+n.btoa(l))}catch{return f("data:"+r+","+encodeURIComponent(l))}S=new FileReader,S.onload=function(s){f(this.result)},S.readAsDataURL(l)}return!0}})})(R);const H=R.exports,G="slim-select",J="Slim advanced select dropdown",q="2.0.1",z="Brian Voelker <brian@webiswhatido.com> (http://webiswhatido.com)",F="https://slimselectjs.com",K="MIT",W={url:"https://github.com/brianvoe/slim-select/issues"},X="dist/slimselect.cjs.js",P="dist/slimselect.umd.js",Q="dist/slimselect.es.js",Y="dist/slimselect.umd.min.js",Z="dist/index.d.ts",ee="dist/index.d.ts",se="dist/slimselect.css",te="src/slim-select/slimselect.scss",ne={type:"git",url:"git+https://github.com/brianvoe/slim-select.git"},oe=["select","vanilla","dropdown","search","multiselect"],ie={dev:"vite --port=1111",format:'prettier --write --cache --parser typescript "src/**/*.ts"',build:"npm run build:clean && npm run build:docs && npm run build:library","build:clean":"rimraf ./dist/*","build:docs":"vite build","build:library":"npm run build:library:js && npm run build:library:css","build:library:js":"cd src/slim-select && rollup --config ./rollup.config.mjs && cd ../../","build:library:css":"cd src/slim-select && sass ./slimselect.scss ../../dist/slimselect.css --style=compressed && cd ../../",test:"jest"},le={"@jest/globals":"^29.3.1","@rollup/plugin-babel":"^6.0.2","@rollup/plugin-commonjs":"^23.0.2","@rollup/plugin-node-resolve":"^15.0.1","@rollup/plugin-terser":"^0.1.0","@rollup/plugin-typescript":"^9.0.2","@types/downloadjs":"^1.4.3","@vitejs/plugin-vue":"^3.2.0",clipboard:"^2.0.11",downloadjs:"^1.4.7",jest:"^29.3.1","jest-environment-jsdom":"^29.3.1",prettier:"^2.7.1",prismjs:"^1.29.0",rimraf:"^3.0.2",rollup:"^2.79.1",sass:"^1.56.1","ts-jest":"^29.0.3",tslib:"^2.4.1",typescript:"^4.9.3",vite:"^3.2.4",vue:"^3.2.45","vue-router":"^4.1.6","vue-tsc":"^1.0.9",vuex:"^4.0.2"},re={name:G,description:J,version:q,author:z,homepage:F,license:K,bugs:W,main:X,browser:P,module:Q,unpkg:Y,types:Z,typings:ee,style:se,sass:te,repository:ne,keywords:oe,scripts:ie,devDependencies:le},ce=$({name:"Install",data:()=>({version:re.version}),methods:{downloadLink(){H(`https://cdnjs.cloudflare.com/ajax/libs/slim-select/${this.version}/slimselect.min.js`)}}}),ae={id:"install",class:"contents"},de=L(`<div id="npm" class="content"><h2>Npm</h2><p>Most common usage is npm</p><pre class="install-code">        <code class="language-bash">
          npm install slim-select
        </code>
      </pre><pre class="example-code">        <code class="language-javascript">
          import SlimSelect from &#39;slim-select&#39;

          new SlimSelect({
            select: &#39;#selectElement&#39;
          })
        </code>
      </pre></div>`,1),me={id:"cdn",class:"content"},pe=L('<h2>Cdn</h2><p> Cdn has a url link you can grab. Cdn exists on both <a target="_blank" href="https://cdnjs.com">cdnjs.com</a> and <a target="_blank" href="https://unpkg.com">unpkg.com</a></p><p> See full list of available options.<br><strong>cdnjs</strong> - <a target="_blank" href="https://cdnjs.com/libraries/slim-select">cdnjs.com/libraries/slim-select</a><br><strong>unpkg</strong> - <a target="_blank" href="https://unpkg.com/browse/slim-select/dist/">https://unpkg.com/browse/slim-select/dist/</a></p><ul><li>slimselct.js - UMD unminified</li><li>slimselct.min.js - UMD minified</li><li>slimselect.cjs.js - CommonJS (for Node) and ES module (for bundlers) build</li><li>slimselect.umd.js - UMD build for browsers</li><li>slimselect.es.js - ES module build for modern browsers</li><li>slimselect.global.js - IIFE build for modern browsers</li></ul><div class="alert info">New releases may be delayed until the next time its indexed</div>',5),ue={class:"install-code"},be={class:"language-html"},fe={id:"download",class:"content"},he=o("h2",null,"Download",-1),ge=o("p",null,"Download the latest minified umd version of slim select",-1),ve=o("p",null,[B(" See full list of available downloadable options. "),o("a",{target:"_blank",href:"https://cdnjs.com/libraries/slim-select"},"cdnjs.com/libraries/slim-select")],-1);function we(d,w,y,v,j,k){return O(),V("div",ae,[de,o("div",me,[pe,o("pre",ue,[B("        "),o("code",be,`
          <html>
            <head>
              <script src="unpkg.com/slim-select@`+E(d.version)+`/dist/slimselect.min.js"><\/script>
              <link href="unpkg.com/slim-select@`+E(d.version)+`/dist/slimselect.css" rel="stylesheet"></link>
              
              <script>
                new SlimSelect({
                  select: '#selectElement'
                })
              <script>
            </head>
            <body>
              <select id="selectElement">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </body>
          </html>
        `,1),B(`
      `)])]),o("div",fe,[he,ge,ve,o("div",{class:"btn",onClick:w[0]||(w[0]=n=>d.downloadLink())},"Click Here To Download")])])}const je=I(ce,[["render",we]]);export{je as default};