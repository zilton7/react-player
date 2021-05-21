(this["webpackJsonpreact-player"]=this["webpackJsonpreact-player"]||[]).push([[0],{21:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c.n(a),r=c(10),i=c.n(r),s=c(3),o=c(6),j=c(7),l=c(5),b=c(0),d=function(e){var t=e.currentSong,c=e.isPlaying,n=e.setIsPlaying,r=Object(a.useRef)(null),i=function(e){return Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2)},d=Object(a.useState)({currentTime:0,duration:0}),u=Object(s.a)(d,2),m=u[0],h=u[1],O=function(e){var t=e.target.currentTime,c=e.target.duration;h(Object(o.a)(Object(o.a)({},m),{},{currentTime:t,duration:c}))};return Object(b.jsxs)("div",{className:"player",children:[Object(b.jsxs)("div",{className:"time-control",children:[Object(b.jsx)("p",{children:i(m.currentTime)}),Object(b.jsx)("input",{min:0,max:m.duration,value:m.currentTime,onChange:function(e){r.current.currentTime=e.target.value,h(Object(o.a)(Object(o.a)({},m),{},{currentTime:e.target.value}))},type:"range"}),Object(b.jsx)("p",{children:i(m.duration)})]}),Object(b.jsxs)("div",{className:"play-control",children:[Object(b.jsx)(j.a,{className:"skip-back",size:"2x",icon:l.a}),Object(b.jsx)(j.a,{onClick:function(){c?(r.current.pause(),n(!c)):(r.current.play(),n(!c))},className:"play",size:"2x",icon:c?l.c:l.d}),Object(b.jsx)(j.a,{className:"skip-forward",size:"2x",icon:l.b})]}),Object(b.jsx)("audio",{onLoadedMetadata:O,onTimeUpdate:O,ref:r,src:t.audio})]})},u=function(e){var t=e.currentSong;return Object(b.jsxs)("div",{className:"song-container",children:[Object(b.jsx)("img",{alt:t.name,src:t.cover}),Object(b.jsx)("h2",{children:t.name}),Object(b.jsx)("h3",{children:t.artist})]})},m=(c(21),c(24));var h=function(){return[{name:"Beaver Creek",cover:"https://i.scdn.co/image/ab67616d0000b27392ea33b2d11348d692352a33",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10075",color:["#205950","#2ab3bf"],id:Object(m.a)(),active:!0},{name:"Misha, Jussi Halme",cover:"https://i.scdn.co/image/ab67616d0000b2734dbbff68622228d0949f9803",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=9248",color:["#205950","#2ab3bf"],id:Object(m.a)(),active:!0},{name:"Hears of Mumbai",cover:"https://i.ibb.co/86yd9nX/hears-of-mumbai-cover-min.png",artist:"The KPS",audio:"http://emusic.lt/download.php?id=7802",color:["#205950","#2ab3bf"],id:Object(m.a)(),active:!0}]},O=function(e){var t=e.song;return Object(b.jsxs)("div",{className:"library-song",children:[Object(b.jsx)("img",{alt:t.name,src:t.cover}),Object(b.jsxs)("div",{className:"song-description",children:[Object(b.jsx)("h3",{children:t.name}),Object(b.jsx)("h4",{children:t.artist})]})]})},p=function(e){var t=e.songs;return Object(b.jsxs)("div",{className:"library",children:[Object(b.jsx)("h2",{children:"Library"}),Object(b.jsx)("div",{className:"library-songs",children:t.map((function(e){return Object(b.jsx)(O,{song:e},e.id)}))})]})};var v=function(){var e=Object(a.useState)(h()),t=Object(s.a)(e,2),c=t[0],n=(t[1],Object(a.useState)(c[2])),r=Object(s.a)(n,2),i=r[0],o=(r[1],Object(a.useState)(!1)),j=Object(s.a)(o,2),l=j[0],m=j[1];return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(u,{isPlaying:l,currentSong:i}),Object(b.jsx)(d,{isPlaying:l,setIsPlaying:m,currentSong:i}),Object(b.jsx)(p,{songs:c})]})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,25)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),r(e),i(e)}))};i.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root")),g()}},[[22,1,2]]]);
//# sourceMappingURL=main.a950d0ba.chunk.js.map