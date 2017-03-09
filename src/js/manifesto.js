(function () {
  var e, t, a, n, o, r, i, l, s;
  s = 0,
  r = [
    [2e3, "Hi."],
    [2e3, "I'm Manu"],
    [2500, "I don't know who you are"],
    [2500, "but it's nice to meet you."],
    [3e3, "I'm a freelance developer and designer"],
    [3e3, "currently living in North-East Italy."],
    [3e3, "As you can see, I love minimalism."],
    [2200, "I also love reading."],
    [4e3, "I'm halfway through <a target='_blank' href='http://en.wikipedia.org/wiki/The_Selfish_Gene'>The selfiesh gene</a>, by <a href='http://en.wikipedia.org/wiki/Richard_Dawkins' rel='external' target='_blank'>Richard Dawking</a> at the moment."],
    [2500, "If you're a twitter kind of person"],
    [5e3, "you should follow these friends on mine: <a target='_blank' href='https://www.twitter.com/matteo_belfiore'>@Matteo_Belfiore</a>, <a href='https://twitter.com/rob_hope'>@Rob_Hope</a>, <a href='https://twitter.com/matcompagnucci'>@MatCompagnucci</a>"],
    [2500, "They're all great guys."],
    [2200, "To get in touch"],
    [5e3, "you can use one of these things: <a href='mailto:hello@manuelmoreale.com?subject=Hi Manu' title='Feel free to contact me' rel='external'>mail</a> - <a target='_blank' href='https://twitter.com/manuelmoreale/' title='Sometimes I tweet' rel='external'>twitter</a> - <a href='skype:niuenso?add' title='Add me if you want to chat' rel='external'>skype</a>"],
    [3e3, "(my English sucks, I warn you.)"],
    [4e3, "You can also go on <a target='_blank' href='https://www.behance.net/manuelmoreale/' title='Here you can find my works' rel='external'>behance</a> to check my works."],
    [2500, "That's all."],
    [3e3, "Thanks for the visit."],
    [2500, "Bye."],
    [2e3, "<small>manuelmoreale</small>"]
  ],
  l = document.getElementById("text"),
  a = 0,
  l.innerHTML = r[a][1],
  a++,
  i = function () {
    var e, t, n, o, m, u;
    return s = r[a][0],
    u = 700,
    t = u,
    o = 2 * u,
    m = 3 * u,
    n = s + m,
    setTimeout(function () {
      return l.className = "hide"
    },t),
    setTimeout(function () {
      return l.innerHTML = r[a][1], a++
    }, o),
    setTimeout(function () {
      return l.className = ""
    }, m),
    a === r.length - 1 ? (e = document.getElementsByTagName("footer"),
    setTimeout(function () {
      return e[0].className = ""
    }, m), !1) : setTimeout(i, n)
  },
  setTimeout(i, 3e3), o = "night", t = "day", n = "", e = 1,
  window.addEventListener("keypress", function (a) {
    var r;
    return n += String.fromCharCode(a.keyCode), n === o.substring(0, e) || t.substring(0, e) ? (e++, (n === o || n === t) && (r = document.getElementsByTagName("body"), r[0].className = n, n = "", e = 1)) : (n = "", e = 1), console.log(n + e)
  })
}).call(this);

/*
* {
-moz-box-sizing:border-box;
-webkit-box-sizing:border-box;
box-sizing:border-box;
-webkit-tap-highlight-color:transparent;
-webkit-text-size-adjust:100%;
-ms-text-size-adjust:100%;
-webkit-font-smoothing:antialiased;
}

:after,.before {
-moz-box-sizing:border-box;
-webkit-box-sizing:border-box;
box-sizing:border-box;
}

html,body,div,main,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video {
-moz-box-sizing:border-box;
-webkit-box-sizing:border-box;
box-sizing:border-box;
border:0;
outline:0;
font-size:100%;
font-weight:inherit;
font-style:inherit;
font-family:inherit;
vertical-align:baseline;
margin:0;
padding:0;
}

article,aside,details,figcaption,figure,footer,header,hgroup,nav,section,summary,main {
display:block;
}

a {
text-decoration:none;
cursor:pointer;
-webkit-transition:color 300ms;
transition:color 300ms;
border-bottom:1px dotted #1b1b1b;
color:#1b1b1b;
}

body {
line-height:1;
font-size:100%;
height:100%;
background-color:#f6f5f0;
color:#1b1b1b;
-webkit-transition:color 500ms 500ms;
transition:color 500ms 500ms;
overflow:hidden;
}

ol,ul {
list-style-type:none;
}

table {
border-collapse:collapse;
border-spacing:0;
}

caption,th,td {
text-align:left;
font-weight:400;
}

input,textarea {
-webkit-border-radius:0;
-moz-border-radius:0;
}

button,input[type="button"] {
background:0;
}

:required {
-webkit-box-shadow:none;
-o-box-shadow:none;
-ms-box-shadow:none;
box-shadow:none;
}

em,i {
font-style:italic;
}

strong,b {
font-weight:700;
}

u {
text-decoration:underline;
}

pre,code {
font-family:Monaco,Courier,monospace;
}

pre {
white-space:pre-line;
word-wrap:break-word;
}

img {
-ms-interpolation-mode:bicubic;
}

html {
font-size:10px;
height:100%;
font-family:HelveticaMonospacedW01,Monaco,Consolas,"Lucida Console",monospace;
background-color:#f6f5f0;
overflow:hidden;
}

.night {
color:#f6f5f0;
background-color:#1b1b1b;
}

.night a {
color:#f6f5f0;
border-bottom:1px dotted #f6f5f0;
}

.night small::before {
background-color:#f6f5f0;
}

main {
min-height:100%;
height:100%;
font-size:2.2rem;
line-height:1.45em;
overflow:hidden;
display:flex;
-webkit-box-orient:horizontal;
-webkit-box-direction:normal;
-webkit-flex-direction:row;
-moz-box-orient:horizontal;
-moz-box-direction:normal;
-ms-flex-direction:row;
flex-direction:row;
-webkit-flex-wrap:wrap;
-ms-flex-wrap:wrap;
flex-wrap:wrap;
-webkit-box-pack:center;
-webkit-justify-content:center;
-moz-box-pack:center;
-ms-flex-pack:center;
justify-content:center;
-webkit-box-align:center;
-webkit-align-items:center;
-moz-box-align:center;
-ms-flex-align:center;
align-items:center;
-webkit-align-content:center;
-ms-flex-line-pack:center;
align-content:center;
white-space:normal;
padding:2.2rem;
}

a:hover {
color:#8583da;
}

h1 {
-webkit-align-self:center;
-ms-flex-item-align:center;
align-self:center;
text-align:center;
display:inline-block;
opacity:1;
-webkit-animation:fadeIn 2000ms;
animation:fadeIn 2000ms;
-webkit-transition:0 700ms 700ms;
transition:transform 700ms 700ms;
-webkit-box-flex:0;
-webkit-flex:0 1 auto;
-moz-box-flex:0;
-ms-flex:0 1 auto;
flex:0 1 auto;
}

.hide {
-webkit-transform:translateY(3rem);
-ms-transform:translateY(3rem);
transform:translateY(3rem);
opacity:0;
}

small {
padding-left:1em;
display:block;
}

small::before {
content:"";
display:inline-block;
width:2px;
height:32px;
background-color:#1b1b1b;
-webkit-animation:blink 1.2s infinite;
animation:blink 1.2s infinite;
margin:0 10px -10px 0;
}

footer {
font-size:1rem;
line-height:1.2em;
position:absolute;
bottom:0;
left:0;
right:0;
text-align:center;
-webkit-transition:0 700ms 700ms;
transition:transform 700ms 700ms;
opacity:1;
padding:1rem;
}

noscript {
position:absolute;
top:0;
right:0;
bottom:0;
left:0;
z-index:9999;
background-color:#f6f5f0;
font-size:1.6rem;
line-height:1.5em;
padding:5rem;
}

blockquote:before,blockquote:after,q:before,q:after {
content:"";
}

input[type="submit"],input[type="button"],button,label[for] {
cursor:pointer;
}

::-moz-selection,::selection {
background:#1b1b1b;
color:#f6f5f0;
}

.night ::-moz-selection,.night ::selection {
background:#f6f5f0;
color:#1b1b1b;
}

to,100% {
opacity:1;
}

50%,.hide-f {
opacity:0;
}

*/
