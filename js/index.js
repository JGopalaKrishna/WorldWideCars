document.addEventListener("DOMContentLoaded", function() {
  // Check if user is already logged in
  var isLoggedIn = localStorage.getItem("isLoggedIn");
  var username = localStorage.getItem("username");
  if (isLoggedIn === "true" && username) {
    document.querySelector("#LoginSignup").style.top = "-150%";
    document.querySelector("#login").style.display = "none";
    document.querySelector(".profile").style.display = "flex";
    document.querySelector(".name").innerHTML = username;
    document.querySelector(".profilepic").innerHTML = username[0];
    document.querySelector(".profilepic").style.backgroundColor = randomcolor();
  }
  document.querySelector("#profilepic").addEventListener("click", function() {
    document.querySelector("#menu").style.right = "0%";
  });
  document.querySelector("#menuButton").addEventListener("click", function() {
    document.querySelector("#menu").style.right = "0%";
  });
  document.querySelector("#close").addEventListener("click", function() {
    document.querySelector("#menu").style.right = "-130%";
  });

  Shery.makeMagnet(".magnet");
  function randomcolor() {
    var lightColors = [
      "#d9e8fb", "#e4f9e4", "#fff9db", "#fdeef4",
      "#f3e8ff", "#e0f7f9", "#ffe6d5", "#e8f7e4",
      "#f5f5f5", "#ffd9d6"
    ];
    var colorIndex = Math.floor(Math.random() * lightColors.length);
    return lightColors[colorIndex];
  }
  document.querySelector("form").addEventListener("submit", function(val) {
    val.preventDefault();
  });
  document.querySelector("#login").addEventListener("click", function() {
    document.querySelector("#LoginSignup").style.top = "0%";
  });
  document.querySelector(".ri-close-large-line").addEventListener("click", function() {
    document.querySelector("#LoginSignup").style.top = "-150%";
  });
  var userEmail = ["vijayyathagiri@gmail.com"];
  var userPass = ["Vijayram7"];
  var userNames = ["vijay7"];
  var data = [];
  document.getElementById("Lbtn").addEventListener("click", function() {
    var localdata = localStorage.getItem("data");
    if (!localdata) {
      localdata = {
        email: userEmail,
        username: userNames,
        pass: userPass
      };
    } else {
      localdata = JSON.parse(localdata);
    }
    var localusername = localdata.username;
    var localemail = localdata.email;
    var localpass = localdata.pass;
    var lemail = document.getElementById("lemail").value;
    var lpass = document.getElementById("lpass").value;
    var condition = false;
    var index = localemail.indexOf(lemail);
    if (index !== -1 && lemail === localemail[index] && lpass === localpass[index]) {
      document.querySelector("#LoginSignup").style.top = "-150%";
      document.querySelector("#login").style.display = "none";
      document.querySelector(".profile").style.display = "flex";
      var name = localusername[index];
      document.querySelector(".name").innerHTML = name;
      document.querySelector(".profilepic").innerHTML = name[0];
      document.querySelector(".profilepic").style.backgroundColor = randomcolor();
      // Save login state
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("username", name);
      condition = true;
    }
    if (!condition) {
      document.querySelector(".lmsg").innerHTML = "Please Sign Up to Login";
    }
  });
  document.getElementById("Sbtn").addEventListener("click", function() {
    var suser = document.getElementById("suser").value.trim();
    var semail = document.getElementById("semail").value;
    var spass = document.getElementById("spass").value;
    document.querySelector(".smsg").innerHTML = "Please Login";
    var localdata = localStorage.getItem("data");
    if (!localdata) {
      localdata = {
        email: [],
        username: [],
        pass: []
      };
    } else {
      localdata = JSON.parse(localdata);
    }
    localdata.username.push(suser);
    localdata.email.push(semail);
    localdata.pass.push(spass);
    data = JSON.stringify(localdata);
    localStorage.setItem("data", data);
  });
  document.getElementById('show-signup').addEventListener('click', function() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
  });
  document.getElementById('show-login').addEventListener('click', function() {
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
  });
  document.getElementsByClassName("log-out")[0].addEventListener("click", function() {
    localStorage.removeItem("isLoggedIn");
    alert("Logged Out Successfully !")
    localStorage.removeItem("username");
    document.querySelector("#login").style.display = "block";
    document.querySelector(".profile").style.display = "none";
  });
  var swiperConfig = {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      991: { slidesPerView: 3 },
    },
  };
  var swiperConfig2 = {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      991: { slidesPerView: 3 },
    },
  };
  new Swiper(".brand-slider", swiperConfig2);
  new Swiper(".reviews-slider", swiperConfig);
  // Text movement effect with GSAP
  gsap.to("#page1 #supra",{
    left : "60%" ,
    duration : 2 ,
    delay : 1
  })
  gsap.from("#page1 #animtext div h1",{
    y : 200 ,
    duration : 1 ,
    stagger : 0.4 ,
    
  })
  gsap.from("#page1 #animtext div video",{
    y : 200 ,
    duration : 1 ,
    stagger : 0.4 ,
    
  })
  gsap.from("#page1 #nav div",{
    y : -200 ,
    duration : 1 ,
    stagger : 0.2
  })
  gsap.to(".pop",{
    right : "5%" ,
    ease : "elastic.out" ,
    duration : 1.5 ,
    delay : 3
  })
document.querySelector("#dismiss").onclick = function(){
  gsap.to(".pop",{
    right : "-100%" ,
    ease : "elastic.out" ,
    duration : 1.5 ,
  })
}    
var initial = `M 10 150 Q 600 150 1190 150`;
var final = `M 10 150 Q 600 150 1190 150`;
var str = document.querySelector("#str");
str.addEventListener("mousemove", function(val) {
  final = `M 10 150 Q ${val.clientX} ${val.clientY} 1190 150`;
  gsap.to("#str svg path", {
    attr: {d: final},
    duration: 0.5
  });
});
str.addEventListener("mouseleave", function() {
  gsap.to("#str svg path", {
    attr: {d: initial},
    duration: 1,
    ease: "elastic.out(1.2,0.1)"
  });
});
});
var categ = document.querySelector(".categories")
categ.addEventListener("wheel", (e) => {
  e.preventDefault()
  categ.scrollLeft += e.deltaY
  categ.style.scrollBehavior = "auto"
})