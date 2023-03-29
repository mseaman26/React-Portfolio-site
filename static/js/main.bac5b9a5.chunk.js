(this["webpackJsonpportfolio-site"]=this["webpackJsonpportfolio-site"]||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var i=a(1),n=a(5),c=a.n(n),s=(a(10),a(2)),o=a(0);var r=function(e){var t=e.currentPage,a=e.handlePageChange;return Object(o.jsxs)("div",{className:"nav-links",children:[Object(o.jsx)("div",{className:"nav-links",children:Object(o.jsx)("h1",{id:"nav_header",children:"Welcome to Michael Seaman's Portfolio Site!"})}),Object(o.jsxs)("div",{className:"nav_items",children:[Object(o.jsx)("a",{href:"#about",onClick:function(){return a("About")},className:"About"===t?"nav_link_active":"nav_link",children:"About"}),Object(o.jsx)("a",{href:"#projects",onClick:function(){return a("Projects")},className:"Projects"===t?"nav_link_active":"nav_link",children:"Projects"}),Object(o.jsx)("a",{href:"#resume",onClick:function(){return a("Resume")},className:"Resume"===t?"nav_link_active":"nav_link",children:"Resume"}),Object(o.jsx)("a",{href:"#contact",onClick:function(){return a("Contact")},className:"Contact"===t?"nav_link_active":"nav_link",children:"Contact"})]})]})};var l=function(){return Object(o.jsx)("div",{className:"nav-links",children:Object(o.jsxs)("div",{className:"nav_items",children:[Object(o.jsx)("a",{href:"https://github.com/mseaman26",target:"blank",className:"nav_link",children:Object(o.jsx)("p",{children:"Visit my GitHub Page"})}),Object(o.jsx)("a",{href:"https://www.linkedin.com/in/michael-seaman-120a59250/",target:"blank",className:"nav_link",children:Object(o.jsx)("p",{children:"Visit my LinkedIn"})}),Object(o.jsx)("a",{href:"https://medium.com/@mseaman26",target:"blank",className:"nav_link",children:Object(o.jsx)("p",{children:"View my Medium Blog posts"})})]})})},d=a.p+"static/media/mike.1cb93181.png";var m=function(){return Object(o.jsxs)("div",{id:"about_page",children:[Object(o.jsx)("img",{src:d,id:"mikePic"}),Object(o.jsxs)("div",{id:"about_me",children:[Object(o.jsxs)("h1",{id:"about-header",children:["About Michael Seaman",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"* * *"]}),Object(o.jsx)("p",{className:"about_p",children:"I grew up in the beautiful redwood tree forests of Mt. Tamalpias in Marin County, CA.  I\u2019ve had a wide range of interests throughout my life, including classical piano, electronic music, surfing, hiking, and of course, coding.  My real introduction to coding began while I was studying music at UC Santa Cruz.  My favorite music professor, David Cope, taught classes and summer workshops in algorithmic computer music, all of which I attended.  While applying my interest in music to the field of coding, I discovered an aptitude and an enthusiasm for the type of problem-solving that coding entails.  I love debugging and making things work! I did a few independent projects after college, but I really began to code seriously when I enrolled in the UC Berkeley Extension Full-Stack Web Development Coding Bootcamp.  It was thrilling to re-engage with this usage of my mind and to learn more current tools.  I\u2019m ready for a career in web development and I am really excited to continue my learning! I am passionate about and proficient in the following skills:"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)("p",{className:"about_p",children:"Front End Development"})}),Object(o.jsx)("li",{children:Object(o.jsx)("p",{className:"about_p",children:"Back End Development"})}),Object(o.jsx)("li",{children:Object(o.jsx)("p",{className:"about_p",children:"MERN"})}),Object(o.jsx)("li",{children:Object(o.jsx)("p",{className:"about_p",children:"Javascript/ES6"})}),Object(o.jsx)("li",{children:Object(o.jsx)("p",{className:"about_p",children:"HTML 5, CSS"})}),Object(o.jsx)("li",{children:Object(o.jsx)("p",{className:"about_p",children:"Relational Databases: SQL, MySQL, MongoDB, Mongoose, GraphQL"})}),Object(o.jsx)("li",{children:Object(o.jsx)("p",{className:"about_p",children:"Debugging, Problem-Solving"})}),Object(o.jsx)("li",{children:Object(o.jsx)("p",{className:"about_p",children:"Communication"})}),Object(o.jsx)("li",{children:Object(o.jsx)("p",{className:"about_p",children:"...and Much More!"})})]})]})]})},j=a.p+"static/media/wordleScreenshot.8d132c47.png",p=a.p+"static/media/MikesWordle.ed206c4d.gif",h=a.p+"static/media/SoundsLikeStill.cd17bcba.png",u=a.p+"static/media/SoundsLikeInYourAreaGif.eb75f18b.gif",b=a.p+"static/media/fetchStill.74363a76.png",f=a.p+"static/media/fetchGif.fe3fddee.gif",g=(a.p,a.p,a.p+"static/media/socialMediaStill.072d3f1b.png"),x=a.p+"static/media/socialMediaGif.80d81ec6.gif",k=a.p+"static/media/Pokemon_Still.8f1944dc.png",O=a.p+"static/media/pokemon_gif.cdd186f3.gif",v=a.p+"static/media/surfShopStill.0ad88080.png",_=a.p+"static/media/surfShopOverview.39a36445.gif",S=[v,k,j,b,h,g],N=[_,O,p,f,u,x];var y=function(e){var t=document.createElement("div");function a(a){t.innerHTML="<a class='project_link' href='".concat(e.projects[a.target.id].link1,'\' target="_blank">').concat(e.projects[a.target.id].link1Text,"</a><br><a class='project_link' href='").concat(e.projects[a.target.id].link2,'\' target="_blank">').concat(e.projects[a.target.id].link2Text,"</a>"),a.target.parentElement.appendChild(t),a.target.src=N[a.target.id]}function i(e){e.target.src=S[e.target.id]}return e.projects.map((function(e){return Object(o.jsxs)("div",{className:"project-card",children:[Object(o.jsxs)("div",{className:"project_title",children:[Object(o.jsx)("h3",{className:"project_header",children:e.name}),Object(o.jsx)("p",{children:e.description})]}),Object(o.jsx)("div",{className:"project_image_div",children:Object(o.jsx)("img",{id:e.imageIndex,src:S[e.imageIndex],className:"project_image",alt:e.alt,onMouseOver:a,onMouseOut:i})})]})}))};var w=function(){return Object(o.jsxs)("div",{className:"portfolio_page",children:[Object(o.jsx)("div",{className:"portfolio_header",children:Object(o.jsx)("h1",{children:"Please Check out Some of my Coding Projects!"})}),Object(o.jsx)("div",{className:"projects_container",children:Object(o.jsx)(y,{projects:[{name:"SurfShop",description:"A one-stop shop e-commerce site for all things surf!",imageIndex:0,alt:"image of surfShop",link1:"https://github.com/mseaman26/Surf-Shop-E-Commerce",link1Text:'<i style="font-size:24px" class="fa">&#xf09b;</i> GitHub Repo Link',link2:"https://surfshop.herokuapp.com/",link2Text:"*Visit Deployed App"},{name:"Pokedex Tracker",description:"A Place to keep track of all the Pokemon you've caught!  Features: React.js, JavaScript, HTML/CSS",imageIndex:1,alt:"image of pokedex tracker",link1:"https://github.com/AJManzione/Pokemon-Trading-Center",link1Text:'<i style="font-size:24px" class="fa">&#xf09b;</i> GitHub Repo Link',link2:"https://pokemon-app.herokuapp.com/",link2Text:"*Visit Deployed App"},{name:"Mike's Wordle",description:"A remake of the NYT Wordel Game! Feel free to visit and solve the daily word!  Features: JavaScript, JQery, HTML/CSS",imageIndex:2,alt:"image of Mikes wordle game",link1:"https://github.com/mseaman26/Mike-s-Wordle",link1Text:'<i style="font-size:24px" class="fa">&#xf09b;</i> GitHub Repo Link',link2:"https://mseaman26.github.io/Mike-s-Wordle/",link2Text:"*Visit Deployed App"},{name:"Fetch",description:"An app for rating the Cuteness of dogs. Features: JavaScript, Web APIs, Express, MySQL, user authentication, Handlebars",imageIndex:3,alt:"Image/gif of the Fetch Application",link1:"https://github.com/mseaman26/Fetch",link1Text:'<i style="font-size:24px" class="fa">&#xf09b;</i> GitHub Repo Link',link2:"https://fetchdograter.herokuapp.com/",link2Text:"*Visit Deployed App"},{name:"Sounds Like All Over The World",description:"An app for finding concerts and other events in your area. Features: Fetch/Web API, Bulma, JS, HTML/CSS",imageIndex:4,alt:"image of Sounds like All Over The World app",link1:"https://github.com/mattjgatsby/artist-event-and-rec",link1Text:'<i style="font-size:24px" class="fa">&#xf09b;</i> GitHub Repo Link',link2:"https://mattjgatsby.github.io/artist-event-and-rec/",link2Text:"*Visit Deployed App"},{name:"NoSQL Social Network Back-End API",description:"A back-end for a social media site. Features: MongoDB, Mongoose, Insomnia",imageIndex:5,alt:"Image/Gif of NoSQL Social Network Back-End API app",link1:"https://github.com/mseaman26/NoSQL-Social-Network-API",link1Text:'<i style="font-size:24px" class="fa">&#xf09b;</i> GitHub Repo Link',link2:"https://www.youtube.com/watch?v=OrUoTL_nuFo",link2Text:"* Watch a Demo of this back-end app"}]})})]})},C=a.p+"static/media/Michael_Seaman2.e6394f60.png",M=a.p+"static/media/Michael_Seaman1.8097dafd.png",I=a.p+"static/media/Resume.c7ae599a.pdf";var A=function(){return Object(o.jsxs)("div",{id:"resume_page",children:[Object(o.jsx)("h1",{id:"resume_header",children:"If you'd like to download my resume, simply click on it!"}),Object(o.jsx)("div",{id:"resume_div",children:Object(o.jsxs)("a",{href:I,download:!0,id:"resume_a",children:[Object(o.jsx)("img",{className:"resume_pic",src:M,alt:"Resume for Mike Seaman"}),Object(o.jsx)("img",{className:"resume_pic",src:C,alt:"Resume for Mike Seaman"})]})})]})};var T=a(4);var L=function(){var e=Object(i.useState)(""),t=Object(s.a)(e,2),a=t[0],n=t[1],c=Object(i.useState)(""),r=Object(s.a)(c,2),l=r[0],d=r[1],m=Object(i.useState)(""),j=Object(s.a)(m,2),p=j[0],h=j[1],u=Object(i.useState)(""),b=Object(s.a)(u,2),f=b[0],g=b[1],x=Object(i.useState)(""),k=Object(s.a)(x,2),O=k[0],v=k[1],_=function(e){var t=e.target,a=t.name,i=t.value;"email"===a?n(i):"firstName"===a?d(i):"lastName"===a?h(i):g(i)};return Object(o.jsx)("div",{id:"conact_page",children:Object(o.jsxs)("div",{id:"contact_form_div",children:[Object(o.jsxs)("div",{className:"contact_header_div",children:[Object(o.jsx)("h1",{id:"contact_header",children:"Contact Michael Seaman At:"}),Object(o.jsx)("a",{id:"email_mike",href:"mailto:mseaman26@gmail.com",target:"_blank",children:"mseaman26@gmail.com"}),Object(o.jsx)("h1",{id:"contact_header",children:"Or Fill Out the Following Contact Form:"})]}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsxs)("form",{className:"form",id:"contact_form",children:[Object(o.jsx)("input",{value:a,name:"email",onChange:_,type:"email",placeholder:"email",className:"contact_form_item"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{value:l,name:"firstName",onChange:_,type:"text",placeholder:"First Name",className:"contact_form_item"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{value:p,name:"lastName",onChange:_,type:"text",placeholder:"Last Name",className:"contact_form_item"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{value:f,name:"message",onChange:_,type:"text",placeholder:"Enter your message here",className:"contact_form_item",rows:"4"}),Object(o.jsx)("br",{}),Object(o.jsx)("button",{type:"button",onClick:function(e){if(e.preventDefault(),function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(a))if(l&&p)if(f){var t=document.getElementById("contact_form");T.a.sendForm("service_603mx0m","template_x04vxpm",t,"u1xtN4l27HdhYjBd0").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),d(""),h(""),n(""),v(""),g(""),alert("message sent!")}else v("your message cannot be blank!");else v("!!!please provide a first and last name");else v("!!!Email is invalid")},children:"Submit"})]}),O&&Object(o.jsx)("div",{children:Object(o.jsx)("p",{className:"error-text",children:O})})]})})};var P=function(){var e=Object(i.useState)("About"),t=Object(s.a)(e,2),a=t[0],n=t[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)(r,{currentPage:a,handlePageChange:function(e){return n(e)}}),"About"===a?Object(o.jsx)(m,{}):"Projects"===a?Object(o.jsx)(w,{}):"Resume"===a?Object(o.jsx)(A,{}):"Contact"===a?Object(o.jsx)(L,{}):void 0,Object(o.jsx)(l,{})]})};a(12);var F=function(){return Object(o.jsx)("div",{children:Object(o.jsx)(P,{})})};c.a.render(Object(o.jsx)(F,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.bac5b9a5.chunk.js.map