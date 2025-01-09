"use strict";(self.webpackChunkdocumentacion=self.webpackChunkdocumentacion||[]).push([[8334],{9729:(e,n,r)=>{r.r(n),r.d(n,{Highlight:()=>F,assets:()=>R,contentTitle:()=>k,default:()=>I,frontMatter:()=>D,metadata:()=>a,toc:()=>N});const a=JSON.parse('{"id":"como-crear-archivo","title":"Como crear Archivo","description":"\ud83e\udd47 Este archivo contiene ejemplos \xfatiles para estructurar documentaci\xf3n en Markdown.","source":"@site/docs/como-crear-archivo.md","sourceDirName":".","slug":"/como-crear-archivo","permalink":"/documentacion/docs/como-crear-archivo","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"sidebar_position":10},"sidebar":"tutorialSidebar","previous":{"title":"manual 01","permalink":"/documentacion/docs/plataforma-web/manual01"}}');var s=r(4848),i=r(8453);const l={blue:"blue_KAWM"};var t=r(6540),o=r(4164),c=r(3104),d=r(6347),h=r(205),u=r(7485),x=r(1682),p=r(679);function j(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return j(e).map((e=>{let{props:{value:n,label:r,attributes:a,default:s}}=e;return{value:n,label:r,attributes:a,default:s}}))}(r);return function(e){const n=(0,x.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function b(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:r}=e;const a=(0,d.W6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,u.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function A(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,s=m(e),[i,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!b({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[o,c]=g({queryString:r,groupId:a}),[d,u]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,p.Dv)(r);return[a,(0,t.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),x=(()=>{const e=o??d;return b({value:e,tabValues:s})?e:null})();(0,h.A)((()=>{x&&l(x)}),[x]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!b({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),u(e)}),[c,u,s]),tabValues:s}}var v=r(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function C(e){let{className:n,block:r,selectedValue:a,selectValue:i,tabValues:l}=e;const t=[],{blockElementScrollPositionUntilNextRender:d}=(0,c.a_)(),h=e=>{const n=e.currentTarget,r=t.indexOf(n),s=l[r].value;s!==a&&(d(n),i(s))},u=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const r=t.indexOf(e.currentTarget)+1;n=t[r]??t[0];break}case"ArrowLeft":{const r=t.indexOf(e.currentTarget)-1;n=t[r]??t[t.length-1];break}}n?.focus()};return(0,s.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:i}=e;return(0,s.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>t.push(e),onKeyDown:u,onClick:h,...i,className:(0,o.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":a===n}),children:r??n},n)}))})}function E(e){let{lazy:n,children:r,selectedValue:a}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,s.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=A(e);return(0,s.jsxs)("div",{className:(0,o.A)("tabs-container",f.tabList),children:[(0,s.jsx)(C,{...n,...e}),(0,s.jsx)(E,{...n,...e})]})}function w(e){const n=(0,v.A)();return(0,s.jsx)(y,{...e,children:j(e.children)},String(n))}const S={tabItem:"tabItem_Ymn6"};function T(e){let{children:n,hidden:r,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,o.A)(S.tabItem,a),hidden:r,children:n})}const D={sidebar_position:10},k="Como crear Archivo",R={},F=({children:e,color:n})=>(0,s.jsx)("span",{style:{backgroundColor:n,borderRadius:"20px",color:"#fff",padding:"10px",cursor:"pointer"},children:e}),N=[{value:"<strong>Tablas</strong>",id:"tablas",level:2},{value:"<strong>Im\xe1genes</strong>",id:"im\xe1genes",level:2},{value:"<strong>Enlaces</strong>",id:"enlaces",level:2},{value:"<strong>C\xf3digo</strong>",id:"c\xf3digo",level:2},{value:"C\xf3digo en l\xednea",id:"c\xf3digo-en-l\xednea",level:3},{value:"Bloques de c\xf3digo",id:"bloques-de-c\xf3digo",level:3},{value:"<strong>Listas</strong>",id:"listas",level:2},{value:"Lista no ordenada:",id:"lista-no-ordenada",level:3},{value:"Lista ordenada:",id:"lista-ordenada",level:3},{value:"<strong>Citas</strong>",id:"citas",level:2},{value:"<strong>Encabezados</strong>",id:"encabezados",level:2},{value:"Encabezado 2",id:"encabezado-2",level:2},{value:"Encabezado 3",id:"encabezado-3",level:3},{value:"<strong>\xc9nfasis</strong>",id:"\xe9nfasis",level:2},{value:"<strong>Listas de tareas</strong>",id:"listas-de-tareas",level:2},{value:"<strong>Arbol</strong>",id:"arbol",level:2},{value:"<strong>Tabs</strong>",id:"tabs",level:2},{value:"<strong>Colapsables</strong>",id:"colapsables",level:2},{value:"<strong>Bloques de informaci\xf3n</strong>",id:"bloques-de-informaci\xf3n",level:2}];function B(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",del:"del",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",img:"img",input:"input",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{Details:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"como-crear-archivo",children:"Como crear Archivo"})}),"\n",(0,s.jsx)(n.p,{children:"\ud83e\udd47 Este archivo contiene ejemplos \xfatiles para estructurar documentaci\xf3n en Markdown."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"tablas",children:(0,s.jsx)(n.strong,{children:"Tablas"})}),"\n",(0,s.jsx)(n.p,{children:"Puedes usar tablas para organizar datos markdown nativo:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Encabezado 1"}),(0,s.jsx)(n.th,{children:"Encabezado 2"}),(0,s.jsx)(n.th,{children:"Encabezado 3"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Dato 1"}),(0,s.jsx)(n.td,{children:"Dato 2"}),(0,s.jsx)(n.td,{children:"Dato 3"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Otro dato 1"}),(0,s.jsx)(n.td,{children:"Otro dato 2"}),(0,s.jsx)(n.td,{children:"Otro dato 3"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"tabla usando etiquetas html"}),"\n",(0,s.jsx)("div",{style:{overflowX:"auto"},children:(0,s.jsxs)("table",{style:{tableLayout:"auto",borderCollapse:"collapse"},children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{style:{whiteSpace:"nowrap"},children:"Encabezado 1"}),(0,s.jsx)("th",{style:{whiteSpace:"nowrap"},children:"Encabezado 2"}),(0,s.jsx)("th",{style:{whiteSpace:"nowrap"},children:"Encabezado 3"}),(0,s.jsx)("th",{style:{whiteSpace:"nowrap"},children:"Encabezado 4"}),(0,s.jsx)("th",{style:{whiteSpace:"nowrap"},children:"Encabezado 5"}),(0,s.jsx)("th",{style:{whiteSpace:"nowrap"},children:"Encabezado 6"}),(0,s.jsx)("th",{style:{whiteSpace:"nowrap"},children:"Encabezado 7"}),(0,s.jsx)("th",{style:{whiteSpace:"nowrap"},children:"Encabezado 8"}),(0,s.jsx)("th",{style:{whiteSpace:"nowrap"},children:"Encabezado 9"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{style:{whiteSpace:"nowrap"},children:"Dato 1"}),(0,s.jsx)("td",{style:{whiteSpace:"nowrap"},children:"Dato 2"}),(0,s.jsx)("td",{style:{whiteSpace:"nowrap"},children:"Dato 3"}),(0,s.jsx)("td",{style:{whiteSpace:"nowrap"},children:"Dato 4"}),(0,s.jsx)("td",{style:{whiteSpace:"nowrap"},children:"Dato 5"}),(0,s.jsx)("td",{style:{whiteSpace:"nowrap"},children:"Dato 6"}),(0,s.jsx)("td",{style:{whiteSpace:"nowrap"},children:"Dato 7"}),(0,s.jsx)("td",{style:{whiteSpace:"nowrap"},children:"Dato 8"}),(0,s.jsx)("td",{style:{whiteSpace:"nowrap"},children:"Dato 9 para probar el autojuste"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{style:{whiteSpace:"nowrap"},children:"Otro dato 1"}),(0,s.jsx)("td",{style:{whiteSpace:"nowrap"},children:"Otro dato 2"}),(0,s.jsx)("td",{style:{whiteSpace:"nowrap"},children:"Otro dato 3"}),(0,s.jsx)("td",{style:{whiteSpace:"nowrap"},children:"Otro dato 4"}),(0,s.jsx)("td",{style:{whiteSpace:"nowrap"},children:"Otro dato 5"}),(0,s.jsx)("td",{style:{whiteSpace:"nowrap"},children:"Otro dato 6"}),(0,s.jsx)("td",{style:{whiteSpace:"nowrap"},children:"Otro dato 7"}),(0,s.jsx)("td",{style:{whiteSpace:"nowrap"},children:"Otro dato 8"}),(0,s.jsx)("td",{style:{whiteSpace:"nowrap"},children:"Otro dato 9"})]})]})]})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"im\xe1genes",children:(0,s.jsx)(n.strong,{children:"Im\xe1genes"})}),"\n",(0,s.jsx)(n.p,{children:"Puedes insertar im\xe1genes con la siguiente sintaxis:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Docusaurus logo",src:r(2152).A+"",width:"200",height:"200"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"enlaces",children:(0,s.jsx)(n.strong,{children:"Enlaces"})}),"\n",(0,s.jsxs)(n.p,{children:["Para agregar un enlace:\r\n",(0,s.jsx)(n.a,{href:"https://docusaurus.io",children:"Enlace a Docusaurus"})]}),"\n",(0,s.jsxs)(n.p,{children:["A new page is now available at ",(0,s.jsx)(n.a,{href:"http://localhost:3000/my-react-page",children:"http://localhost:3000/my-react-page"}),"."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"c\xf3digo",children:(0,s.jsx)(n.strong,{children:"C\xf3digo"})}),"\n",(0,s.jsx)(n.h3,{id:"c\xf3digo-en-l\xednea",children:"C\xf3digo en l\xednea"}),"\n",(0,s.jsxs)(n.p,{children:["Usa backticks para c\xf3digo en l\xednea: ",(0,s.jsx)(n.code,{children:"console.log('Hola, mundo!');"})]}),"\n",(0,s.jsx)(n.h3,{id:"bloques-de-c\xf3digo",children:"Bloques de c\xf3digo"}),"\n",(0,s.jsx)(n.p,{children:"Usa triple backtick con el lenguaje especificado:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'function saludo() {\r\n  console.log("Hola, mundo!");\r\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Bloque de codigo json"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:'title="src/pages/config.json"',children:'{\r\n  "tipoDocumento": 1,\r\n  "id": 1,\r\n  "detalle": [\r\n    {\r\n      "JSON DE FACTURA": "EJ. 001-001-0000001"\r\n    },\r\n    {\r\n      // highlight-next-line\r\n      "JSON DE FACTURA": "EJ. 001-001-0000002"\r\n    },\r\n    {\r\n      "JSON DE FACTURA": "... HASTA 50 FACTURAS"\r\n    }\r\n  ]\r\n}\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"listas",children:(0,s.jsx)(n.strong,{children:"Listas"})}),"\n",(0,s.jsx)(n.h3,{id:"lista-no-ordenada",children:"Lista no ordenada:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Elemento 1","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Sub-elemento 1.1"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Elemento 2"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"lista-ordenada",children:"Lista ordenada:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Paso 1"}),"\n",(0,s.jsx)(n.li,{children:"Paso 2"}),"\n",(0,s.jsx)(n.li,{children:"Paso 3"}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"citas",children:(0,s.jsx)(n.strong,{children:"Citas"})}),"\n",(0,s.jsxs)(n.p,{children:["Usa ",(0,s.jsx)(n.code,{children:">"})," para crear citas:"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Esta es una cita importante."}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"encabezados",children:(0,s.jsx)(n.strong,{children:"Encabezados"})}),"\n",(0,s.jsxs)(n.p,{children:["Usa ",(0,s.jsx)(n.code,{children:"#"})," para crear encabezados:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.h1,{id:"encabezado-1",children:"Encabezado 1"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.h2,{id:"encabezado-2",children:"Encabezado 2"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.h3,{id:"encabezado-3",children:"Encabezado 3"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"\xe9nfasis",children:(0,s.jsx)(n.strong,{children:"\xc9nfasis"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Negrita"}),": Usa ",(0,s.jsx)(n.code,{children:"**texto**"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"Cursiva"}),": Usa ",(0,s.jsx)(n.code,{children:"*texto*"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.del,{children:"Tachado"}),": Usa ",(0,s.jsx)(n.code,{children:"~~texto~~"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("u",{children:"Subrayado"}),": Usa ",(0,s.jsx)(n.code,{children:"<u>texto</u>"})]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"listas-de-tareas",children:(0,s.jsx)(n.strong,{children:"Listas de tareas"})}),"\n",(0,s.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," ","Tarea completada"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," ","Tarea pendiente"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"arbol",children:(0,s.jsx)(n.strong,{children:"Arbol"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"C:\r\n\u251c\u2500\u2500 src\r\n\u2502   \u251c\u2500\u2500 pages\r\n\u2502   \u2502   \u251c\u2500\u2500 styles.module.css\r\n\u2502   \u2502   \u251c\u2500\u2500 index.js\r\n\u2502   \u2502   \u251c\u2500\u2500 ignored.js\r\n\u2502   \u2502   \u251c\u2500\u2500 ignored-folder\r\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 Component1.js\r\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 Component2.js\r\n\u2502   \u2502   \u251c\u2500\u2500 support\r\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 index.js\r\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 styles.module.css\n"})}),"\n",(0,s.jsx)(n.h2,{id:"tabs",children:(0,s.jsx)(n.strong,{children:"Tabs"})}),"\n",(0,s.jsxs)(w,{className:"unique-tabs",children:[(0,s.jsx)(T,{value:"Apple",children:"This is an apple \ud83c\udf4e"}),(0,s.jsx)(T,{value:"Orange",children:"This is an orange \ud83c\udf4a"}),(0,s.jsx)(T,{value:"Banana",children:"This is a banana \ud83c\udf4c"})]}),"\n","\n",(0,s.jsxs)(w,{children:[(0,s.jsx)(T,{value:"apple",label:"Apple",attributes:{className:l.blue},children:(0,s.jsx)(n.p,{children:"This is an apple \ud83c\udf4e"})}),(0,s.jsx)(T,{value:"orange",label:"Orange",attributes:{className:l.blue},children:(0,s.jsx)(n.p,{children:"This is an orange \ud83c\udf4a"})}),(0,s.jsx)(T,{value:"banana",label:"Banana",attributes:{className:l.blue},children:(0,s.jsx)(n.p,{children:"This is a banana \ud83c\udf4c"})})]}),"\n",(0,s.jsx)(n.h2,{id:"colapsables",children:(0,s.jsx)(n.strong,{children:"Colapsables"})}),"\n","\n",(0,s.jsxs)(a,{children:[(0,s.jsx)("summary",{children:"Haz clic para expandir"}),(0,s.jsx)(n.p,{children:"Uso de tabs"}),(0,s.jsxs)(w,{children:[(0,s.jsx)(T,{value:"npm",label:"npm",default:!0,children:(0,s.jsx)("div",{style:{fontFamily:"monospace",fontSize:"1rem",backgroundColor:"#f5f5f5",padding:"10px",borderRadius:"5px",overflowX:"auto"},children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{style:{color:"purple"},children:"npm"})," run swizzle\r\n",(0,s.jsx)("span",{style:{color:"blue"},children:"[theme name]"}),"\r\n",(0,s.jsx)("span",{style:{color:"blue"},children:"[component name]"}),"\r\n",(0,s.jsx)("span",{style:{color:"orange"},children:"--"}),"\r\n",(0,s.jsx)("span",{style:{color:"orange"},children:"--wrap"})]})})}),(0,s.jsx)(T,{value:"yarn",label:"Yarn",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm run swizzle [theme name] [component name] -- --wrap\n"})})}),(0,s.jsx)(T,{value:"pnpm",label:"pnpm",children:(0,s.jsx)(n.p,{children:"conenido para el 3er tabs"})})]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:'title="src/pages/config.json"',children:'{\r\n  "tipoDocumento": 1,\r\n  "id": 1,\r\n  "detalle": [\r\n    {\r\n      "JSON DE FACTURA": "EJ. 001-001-0000001"\r\n    },\r\n    {\r\n      // highlight-next-line\r\n      "JSON DE FACTURA": "EJ. 001-001-0000002"\r\n    },\r\n    {\r\n      "JSON DE FACTURA": "... HASTA 50 FACTURAS"\r\n    }\r\n  ]\r\n}\r\n\n'})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"bloques-de-informaci\xf3n",children:(0,s.jsx)(n.strong,{children:"Bloques de informaci\xf3n"})}),"\n",(0,s.jsx)(n.admonition,{title:"NOTA",type:"note",children:(0,s.jsx)(n.p,{children:"Este es un bloque de nota."})}),"\n",(0,s.jsx)(n.admonition,{title:"TIPS",type:"tip",children:(0,s.jsx)(n.p,{children:"Este es un bloque de consejo."})}),"\n",(0,s.jsx)(n.admonition,{title:"PRECAUCI\xd3N",type:"caution",children:(0,s.jsx)(n.p,{children:"Este es un bloque de advertencia."})}),"\n",(0,s.jsx)(n.admonition,{title:"PELIGRO",type:"danger",children:(0,s.jsx)(n.p,{children:"Este es un bloque de peligro."})}),"\n",(0,s.jsx)(n.admonition,{title:"INFO",type:"info",children:(0,s.jsx)(n.p,{children:"Este es un bloque de informacion."})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.p,{children:["Open ",(0,s.jsx)(n.code,{children:"docs/intro.md"})," (this page) and edit some lines: the site ",(0,s.jsx)(n.strong,{children:"reloads automatically"})," and displays your changes."]}),"\n",(0,s.jsx)(n.hr,{}),"\n","\n",(0,s.jsxs)(n.p,{children:["This is ",(0,s.jsx)(F,{color:"#25c2a0",children:"Boton green"})," !"]}),"\n",(0,s.jsxs)(n.p,{children:["This is ",(0,s.jsx)(F,{color:"#1877F2",children:"Boton blue"})," !"]}),"\n",(0,s.jsxs)(n.p,{children:["This is ",(0,s.jsx)(F,{color:"#FFC300",children:"Boton yellow"})," !"]}),"\n",(0,s.jsxs)(n.p,{children:["This is ",(0,s.jsx)(F,{color:"#900C3F",children:"Boton purple"})," !"]}),"\n",(0,s.jsxs)(n.p,{children:["This is ",(0,s.jsx)(F,{color:"#3498DB",children:"Boton light blue"})," !"]}),"\n",(0,s.jsxs)(n.p,{children:["This is ",(0,s.jsx)(F,{color:"#E74C3C",children:"Boton coral"})," !"]}),"\n",(0,s.jsxs)(n.p,{children:["This is ",(0,s.jsx)(F,{color:"#8E44AD",children:"Boton violet"})," !"]}),"\n",(0,s.jsxs)(n.p,{children:["This is ",(0,s.jsx)(F,{color:"#34495E",children:"Boton dark gray"})," !"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.ol,{start:"0",children:["\n",(0,s.jsx)(n.li,{children:"Diagrama de Flujo simple"}),"\n"]}),"\n",(0,s.jsx)(n.mermaid,{value:"graph TD;\r\n    A--\x3eB;\r\n    A--\x3eC;\r\n    B--\x3eD;\r\n    C--\x3eD;"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Diagrama de Flujo con Condiciones"}),"\n"]}),"\n",(0,s.jsx)(n.mermaid,{value:"graph TD;\r\n    Start[Inicio] --\x3e Check{\xbfFactura v\xe1lida?}\r\n    Check -- S\xed --\x3e Process[Procesar Factura]\r\n    Process --\x3e Payment[Generar Pago]\r\n    Check -- No --\x3e Error[Error: Revisar Datos]\r\n    Error --\x3e End[Fin]\r\n    Payment --\x3e End[Fin]"}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"Diagrama Jer\xe1rquico"}),"\n"]}),"\n",(0,s.jsx)(n.mermaid,{value:"graph TD;\r\n    Empresa --\x3e|Tiene| Clientes\r\n    Empresa --\x3e|Emite| Facturas\r\n    Facturas --\x3e Detalles\r\n    Facturas --\x3e Pagos\r\n    Clientes --\x3e|Realizan| Pedidos\r\n    Pedidos --\x3e|Generan| Facturas"}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:"Diagrama de Secuencia"}),"\n"]}),"\n",(0,s.jsx)(n.mermaid,{value:"sequenceDiagram\r\n    participant Cliente\r\n    participant Servidor\r\n    participant SAT\r\n    Cliente->>Servidor: Solicita Factura\r\n    Servidor->>SAT: Env\xeda Datos\r\n    SAT--\x3e>Servidor: Confirma Factura\r\n    Servidor--\x3e>Cliente: Factura Emitida"}),"\n",(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsx)(n.li,{children:"Diagrama de Clases"}),"\n"]}),"\n",(0,s.jsx)(n.mermaid,{value:"classDiagram\r\n    class Empresa {\r\n        +String nombre\r\n        +String direccion\r\n        +List<Cliente> clientes\r\n    }\r\n    class Cliente {\r\n        +String nombre\r\n        +String email\r\n        +List<Factura> facturas\r\n    }\r\n    class Factura {\r\n        +int numero\r\n        +Date fecha\r\n        +double total\r\n        +void calcularIVA()\r\n    }\r\n    Empresa --\x3e Cliente\r\n    Cliente --\x3e Factura"}),"\n",(0,s.jsxs)(n.ol,{start:"6",children:["\n",(0,s.jsx)(n.li,{children:"Gr\xe1fico Circular"}),"\n"]}),"\n",(0,s.jsx)(n.mermaid,{value:'pie\r\n    title Distribuci\xf3n de Facturaci\xf3n\r\n    "Facturas Electr\xf3nicas" : 70\r\n    "Facturas F\xedsicas" : 20\r\n    "Otros" : 10'}),"\n",(0,s.jsxs)(n.ol,{start:"7",children:["\n",(0,s.jsx)(n.li,{children:"Diagrama de Redes"}),"\n"]}),"\n",(0,s.jsx)(n.mermaid,{value:"graph TD;\r\n    A[Facturaci\xf3n Electr\xf3nica] --\x3e B[Validaci\xf3n de Datos]\r\n    B --\x3e C[Servicio Web SAT]\r\n    C --\x3e D[Generaci\xf3n de UUID]\r\n    B --\x3e E[Notificaci\xf3n al Cliente]\r\n    D --\x3e F[Almac\xe9n de Facturas]\r\n    F --\x3e G[Consulta de Facturas]"}),"\n",(0,s.jsxs)(n.ol,{start:"8",children:["\n",(0,s.jsx)(n.li,{children:"Diagrama de Estados"}),"\n"]}),"\n",(0,s.jsx)(n.mermaid,{value:"stateDiagram-v2\r\n    [*] --\x3e Inicio\r\n    Inicio --\x3e Validaci\xf3n : Verificar Factura\r\n    Validaci\xf3n --\x3e Rechazada : Factura Inv\xe1lida\r\n    Validaci\xf3n --\x3e Aprobada : Factura V\xe1lida\r\n    Aprobada --\x3e Generaci\xf3n : Generar XML\r\n    Generaci\xf3n --\x3e Final : Fin del Proceso\r\n    Rechazada --\x3e [*]"}),"\n",(0,s.jsxs)(n.ol,{start:"9",children:["\n",(0,s.jsx)(n.li,{children:"Diagrama de Flujo Complejo"}),"\n"]}),"\n",(0,s.jsx)(n.mermaid,{value:"graph TD;\r\n    Subgraph1[Recepci\xf3n de Factura] --\x3e Validacion{\xbfFactura v\xe1lida?}\r\n    Validacion -- S\xed --\x3e Emision[Emitir Factura]\r\n    Validacion -- No --\x3e Correccion[Corregir Datos]\r\n    Correccion --\x3e Validacion\r\n    Emision --\x3e Envio[Enviar al Cliente]\r\n    Envio --\x3e Archivar[Archivar Factura]\r\n    Archivar --\x3e Fin[Fin del Proceso]"}),"\n",(0,s.jsx)(n.mermaid,{value:"graph LR\r\n    A[Inicio] --\x3e|Paso 1| B[Proceso 1]\r\n    B --\x3e|Paso 2| C[Proceso 2]\r\n    C --\x3e|Paso 3| D[Proceso 3]\r\n    D --\x3e|Fin| E[Fin]"}),"\n",(0,s.jsx)("div",{style:{width:"100%",overflowX:"auto",border:"1px solid #ccc",padding:"10px",maxWidth:"100%"},children:(0,s.jsx)("div",{style:{minWidth:"1200px"},children:(0,s.jsx)(n.mermaid,{value:"graph LR\r\n    A[Inicio] --\x3e|Configuraci\xf3n Base| B[Base URL]\r\n    B --\x3e|Ruta de Documentaci\xf3n| C[/docs/]\r\n    B --\x3e|Ruta de Blog| D[/blog/]\r\n    B --\x3e|P\xe1gina Principal| E[Home /]\r\n\r\n    C --\x3e|Muestra todas las rutas de Documentos| F[All docs routes]\r\n    D --\x3e|Muestra todas las rutas de Blog| G[All blog routes]\r\n    E --\x3e|Muestra todas las rutas de P\xe1ginas| H[All pages routes]\r\n\r\n    F --\x3e|Acceso Interno| I[Admin Docs]\r\n    F --\x3e|Acceso Externo| J[Public Docs]\r\n    G --\x3e|Entradas Recientes| K[Latest Posts]\r\n    H --\x3e|Landing Pages| L[Landing]\r\n    H --\x3e|FAQs| M[FAQ Pages]"})})})]})}function I(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(B,{...e})}):B(e)}},2152:(e,n,r)=>{r.d(n,{A:()=>a});const a="data:image/png;base64,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"},8453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>t});var a=r(6540);const s={},i=a.createContext(s);function l(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);