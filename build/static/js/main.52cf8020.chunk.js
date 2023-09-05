(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(7),s=t.n(i),r=(t(13),t(1)),o=t(2),c=t(4),m=t(3),u=t(5),p=function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://drive.google.com/file/d/1a2rfj33ADILGaZdtV_Qz6cZEYkxFVSFs/view?usp=sharing",target:"_blank"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Projects")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},e.name),l.a.createElement("h2",{style:{color:"#fff",fontFamily:"sans-serif "},className:"responsive-headline"},e.role),l.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},e.roleDescription),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("i",{className:e.className})))})))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(n.Component),h=function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:"images/headshot.png",alt:""})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,e.aboutme),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e.name),l.a.createElement("br",null),l.a.createElement("span",null,e.address),l.a.createElement("br",null),l.a.createElement("span",null,e.phone),l.a.createElement("br",null),l.a.createElement("span",null,e.website)))))))}}]),a}(n.Component),d=(n.Component,function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Check Out Some of My Projects"),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e.portfolio&&e.portfolio.map(function(e){return l.a.createElement("div",{className:"columns portfolio-item"},l.a.createElement("a",{href:e.github,target:"_blank"},l.a.createElement("button",{className:"portfolio-button"},"Github")," "),l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("button",{className:"portfolio-button"},"Website")," "),l.a.createElement("div",{className:"item-wrap"},l.a.createElement("img",{src:"".concat(e.imgurl),className:"item-img",alt:"".concat(e.description)}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",null,e.name),l.a.createElement("p",null,e.description)))))})))))}}]),a}(n.Component)),f=(n.Component,function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",null,l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component)),b={imagebaseurl:"https://hudnellmarcus.github.io/",name:"Marcus Hudnell",role:"Full-Stack Software Developer",linkedinId:"",skypeid:"Your skypeid",roleDescription:"As a driven and detail-oriented software engineer with experience in both front-end and back-end technologies, I am passionate about creating innovative solutions that help businesses thrive. With a solid foundation in programming fundamentals and a natural ability to problem-solve, I strive to stay up-to-date on the latest industry trends and technologies to help clients achieve their goals. I am a collaborative team player with excellent communication skills, and I approach each project with a strong sense of ownership and a dedication to quality.",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/marcus-hudnell/",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/hudnellmarcus",className:"fa fa-github"}],aboutme:"Beyond professional work, I am  also a musician who loves to explore new sounds and create original music in my spare time. My passion for music inspires my work in technology, encouraging me to think creatively and seek innovative solutions to every problem. I am constantly amazed at the creative and critical thinking overlap between creating music and software development. I'm not afraid of any challenge as I truly believe that diamonds are made under the greatest pressure.",address:"Los Angeles, CA",website:"hudnell.marcus@gmail.com",phone:"561.389.6421",education:[{UniversityName:"Colgate University",specialization:"Liberal Arts",MonthOfPassing:"May",YearOfPassing:"2011"},{UniversityName:"General Assembly",specialization:"Software Engineering Certificate",MonthOfPassing:"Jul",YearOfPassing:"2022"}],work:[{CompanyName:"Some Company",specialization:"Some specialization",MonthOfLeaving:"Jan",YearOfLeaving:"2018",Achievements:"Some Achievements"},{CompanyName:"Some Company",specialization:"Some specialization",MonthOfLeaving:"Jan",YearOfLeaving:"2018",Achievements:"Some Achievements"}],skillsDescription:"Your skills here",skills:[{skillname:"images/icons/icons8-javascript-50.png"},{skillname:"images/icons/icons8-react-100.png"},{skillname:"images/icons/icons8-c++-50.png"},{skillname:"images/icons/icons8-firebase-96.png"}],portfolio:[{name:"Full Stack Streamer",description:"webapp",imgurl:"images/full_stack_streamer.png",url:"https://full-stack-spotify.vercel.app/",github:"https://github.com/hudnellmarcus/full-stack-spotify"},{name:"Spotify Clone",description:"webapp",imgurl:"images/spotify.png",url:"https://hudnellmarcus.github.io/spotify_clone/",github:"https://github.com/hudnellmarcus/spotify_clone"},{name:"Step-Sequencer",description:"webapp",imgurl:"images/step_sequencer.png",url:"https://hudnellmarcus.github.io/Step-Sequencer-Demo/",github:"https://github.com/hudnellmarcus/Step-Sequencer-Demo"},{name:"TeeTime",description:"webapp",imgurl:"images/TeeTime.png",github:"https://github.com/hudnellmarcus/TeeTime-front"}]},g=function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(p,{resumeData:b}),l.a.createElement(h,{resumeData:b}),l.a.createElement(d,{resumeData:b}),l.a.createElement(f,{resumeData:b}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,t){e.exports=t(15)}},[[8,2,1]]]);
//# sourceMappingURL=main.52cf8020.chunk.js.map