function viewMore() {
    var images2 = document.getElementsByClassName("images2")[0];
    images2.style.display = 'flex'; 
    var viewless = document.getElementsByClassName("viewless")[0];
    viewless.style.display = 'flex';
    var viewmore = document.getElementsByClassName("viewmore")[0];
    viewmore.style.display = 'none';
}
function viewMore1() {
    var images2 = document.getElementsByClassName("images2")[1];
    images2.style.display = 'flex';
    var viewless = document.getElementsByClassName("viewless")[1];
    viewless.style.display = 'flex';
    var viewmore = document.getElementsByClassName("viewmore")[1];
    viewmore.style.display = 'none';
}
function viewMore2() {
    var images2 = document.getElementsByClassName("images2")[2];
    images2.style.display = 'flex';
    var viewless = document.getElementsByClassName("viewless")[2];
    viewless.style.display = 'flex';
    var viewmore = document.getElementsByClassName("viewmore")[2];
    viewmore.style.display = 'none';
}
function viewMore3() {
    var images2 = document.getElementsByClassName("images2")[3];
    images2.style.display = 'flex';
    var viewless = document.getElementsByClassName("viewless")[3];
    viewless.style.display = 'flex';
    var viewmore = document.getElementsByClassName("viewmore")[3];
    viewmore.style.display = 'none';
}
function viewLess() {
    var images2 = document.getElementsByClassName("images2")[0];
    images2.style.display = 'none';

    var viewless = document.getElementsByClassName("viewless")[0];
    viewless.style.display = 'none';

    var viewmore = document.getElementsByClassName("viewmore")[0];
    viewmore.style.display = 'flex';
}
function viewLess1() {
    var images2 = document.getElementsByClassName("images2")[1];
    images2.style.display = 'none';
    var viewless = document.getElementsByClassName("viewless")[1];
    viewless.style.display = 'none';
    var viewmore = document.getElementsByClassName("viewmore")[1];
    viewmore.style.display = 'flex';
}
function viewLess2() {
    var images2 = document.getElementsByClassName("images2")[2];
    images2.style.display = 'none';
    var viewless = document.getElementsByClassName("viewless")[2];
    viewless.style.display = 'none';
    var viewmore = document.getElementsByClassName("viewmore")[2];
    viewmore.style.display = 'flex';
}
function viewLess3() {
    var images2 = document.getElementsByClassName("images2")[3];
    images2.style.display = 'none';
    var viewless = document.getElementsByClassName("viewless")[3];
    viewless.style.display = 'none';
    var viewmore = document.getElementsByClassName("viewmore")[3];
    viewmore.style.display = 'flex';
}
function closePopUp() {
    document.body.classList.remove('noscroll');
    var popUp = document.getElementsByClassName("inner")[0];
    popUp.style.display = 'none';
    var main1 = document.getElementsByClassName("page")[0];
    main1.style.opacity = '1';
}
var arr = [
    {
        id: 0,
        source1: "../img/CarImages/Lamborghini/LamborghiniRevulto/1.1.jpg",
        source2: "../img/CarImages/Lamborghini/LamborghiniRevulto/1.2.jpg",
        source3: "../img/CarImages/Lamborghini/LamborghiniRevulto/LamborghiniRevultoInterior.jpg",
        source4: "../img/CarImages/Lamborghini/LamborghiniRevulto/1.3.jpg",
        name: "Lamborghini Revulto",
        milage: "6.3 KMPL &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp; 563 BHP",
        price: "$311,000 USD.",
        rating: "(368 Ratings)",
        stars1: "../img/Stars-cart/star2.png",
        stars2: "../img/Stars-cart/star2.png",
        stars3: "../img/Stars-cart/star2.png",
        stars4: "../img/Stars-cart/star2.png",
        stars5: "../img/Stars-cart/star1.png",
        description: "The Lamborghini Revulto is a renowned supercar known for its powerful V10 engine and aggressive styling. It offers exhilarating performance and exceptional handling, making it a favorite among car enthusiasts..",
        fav1: "../img/Stars-cart/heart2.png",
        fav2: "../img/Stars-cart/heart1.png",
        favorite: false,
        cart: false
    },
    {
        id: 1,
        source1: "../img/CarImages/Ferrari/FerrariPortofino/1.1.avif",
        source2: "../img/CarImages/Ferrari/FerrariPortofino/1.2.jpg",
        source3: "../img/CarImages/Ferrari/FerrariPortofino/1.3.jpg",
        source4: "../img/CarImages/Ferrari/FerrariPortofino/FerrariPortofinoInterior.avif",
        name: "Ferrari Portofino",
        milage: "6.5 KMPL &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp; 561 BHP",
        price: "$304,000 USD.",
        rating: "(350 Ratings)",
        stars1: "../img/Stars-cart/star2.png",
        stars2: "../img/Stars-cart/star2.png",
        stars3: "../img/Stars-cart/star2.png",
        stars4: "../img/Stars-cart/star2.png",
        stars5: "../img/Stars-cart/star1.png",
        description: "The Ferrari Portofino is a sleek and stylish convertible grand tourer known for its blend of performance and luxury. Featuring a powerful V8 engine and elegant design, it offers an exhilarating driving experience with top-down pleasure.",
        fav1: "../img/Stars-cart/heart2.png",
        fav2: "../img/Stars-cart/heart1.png",
        favorite: false,
        cart: false
    },
    {
        id: 2,
        source1: "../img/CarImages/RollsRoyce/RollsRoyceGhost/1.1.webp",
        source2: "../img/CarImages/RollsRoyce/RollsRoyceGhost/1.2.avif",
        source3: "../img/CarImages/RollsRoyce/RollsRoyceGhost/1.3.avif",
        source4: "../img/CarImages/RollsRoyce/RollsRoyceGhost/RollsRoyceGhostInterior.jpg",
        name: "RollsRoyce Ghost",
        milage: "6.6 KMPL &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp; 554 BHP",
        price: "$318,000 USD.",
        rating: "(308 Ratings)",
        stars1: "../img/Stars-cart/star2.png",
        stars2: "../img/Stars-cart/star2.png",
        stars3: "../img/Stars-cart/star2.png",
        stars4: "../img/Stars-cart/star2.png",
        stars5: "../img/Stars-cart/star2.png",
        description: "The Rolls-Royce Ghost offers unparalleled luxury and comfort with its extra spacious interior and refined ride quality. It combines classic elegance with advanced technology and bespoke craftsmanship for a truly opulent experience.",
        fav1: "../img/Stars-cart/heart2.png",
        fav2: "../img/Stars-cart/heart1.png",
        favorite: false,
        cart: false
    },
    {
        id: 3,
        source1: "../img/CarImages/Lamborghini/LamborghiniSianFKP37/1.1.jpg",
        source2: "../img/CarImages/Lamborghini/LamborghiniSianFKP37/1.2.jpg",
        source3: "../img/CarImages/Lamborghini/LamborghiniSianFKP37/1.3.jpg",
        source4: "../img/CarImages/Lamborghini/LamborghiniSianFKP37/LamborghiniSianInterior.jpg",
        name: "Lamborghini Sian",
        milage: "7.0 KMPL &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp; 560 BHP",
        price: "$450,000 USD.",
        rating: "(398 Ratings)",
        stars1: "../img/Stars-cart/star2.png",
        stars2: "../img/Stars-cart/star2.png",
        stars3: "../img/Stars-cart/star2.png",
        stars4: "../img/Stars-cart/star2.png",
        stars5: "../img/Stars-cart/star2.png",
        description: "The Lamborghini Sián FKP 37 is a limited-edition hybrid supercar that combines a powerful V12 engine with an electric motor, delivering breathtaking performance. Its futuristic design and innovative technology make it one of the most advanced and exclusive Lamborghinis ever produced.",
        fav1: "../img/Stars-cart/heart2.png",
        fav2: "../img/Stars-cart/heart1.png",
        favorite: false,
        cart: false
      
    },
    {
        id: 4,
        source1: "../img/CarImages/Ferrari/FerrariSF90/1.1.jpg",
        source2: "../img/CarImages/Ferrari/FerrariSF90/1.2.avif",
        source3: "../img/CarImages/Ferrari/FerrariSF90/1.3.jpg",
        source4: "../img/CarImages/Ferrari/FerrariSF90/FerrariSF90Interior.jpg",
        name: "Ferrari SF90",
        milage: "6.0 KMPL &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp; 503 BHP",
        price: "$410,000 USD.",
        rating: "(300 Ratings)",
        stars1: "../img/Stars-cart/star2.png",
        stars2: "../img/Stars-cart/star2.png",
        stars3: "../img/Stars-cart/star2.png",
        stars4: "../img/Stars-cart/star2.png",
        stars5: "../img/Stars-cart/star1.png",
        description: "The Ferrari SF90 Stradale is a plug-in hybrid supercar that combines a twin-turbo V8 engine with three electric motors for blistering performance. It features cutting-edge technology and aerodynamic design, offering a blend of speed, efficiency, and luxury.",
        fav1: "../img/Stars-cart/heart2.png",
        fav2: "../img/Stars-cart/heart1.png",
        favorite: false,
        cart: false
      
    },
    {
        id: 5,
        source1: "../img/CarImages/RollsRoyce/RollsRoyceSilverSpur/1.1.jpg",
        source2: "../img/CarImages/RollsRoyce/RollsRoyceSilverSpur/1.2.jpg",
        source3: "../img/CarImages/RollsRoyce/RollsRoyceSilverSpur/1.3.jpg",
        source4: "../img/CarImages/RollsRoyce/RollsRoyceSilverSpur/RollsRoyceSilverSpurInterior.jpg",
        name: "RollsRoyce Silver Spur",
        milage: "6.8 KMPL &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp; 493 BHP",
        price: "$498,000 USD.",
        rating: "(409 Ratings)",
        stars1: "../img/Stars-cart/star2.png",
        stars2: "../img/Stars-cart/star2.png",
        stars3: "../img/Stars-cart/star2.png",
        stars4: "../img/Stars-cart/star1.png",
        stars5: "../img/Stars-cart/star1.png",
        description: "The Rolls-Royce Silver Spur is a luxury sedan known for its exceptional comfort, handcrafted interiors, and smooth ride quality. It embodies classic British luxury and elegance, making it a timeless choice for discerning buyers.",
        fav1: "../img/Stars-cart/heart2.png",
        fav2: "../img/Stars-cart/heart1.png",
        favorite: false,
        cart: false
      
    },
    {
        id: 6,
        source1: "../img/Luxury-and-Mainstream/BMW/BMW 3 Series_FV.jpeg",
        source2: "../img/Luxury-and-Mainstream/BMW/BMW 3 Series_RV.jpeg",
        source3: "../img/Luxury-and-Mainstream/BMW/BMW 3 Series_IV.jpeg",
        source4: "../img/Luxury-and-Mainstream/BMW/BMW 3 Series_SV.jpeg",
        name: "BMW 3 Series",
        milage: "6.7 KMPL &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp; 524 BHP",
        price: "$290,900 USD.",
        rating: "(442 Ratings)",
        stars1: "../img/Stars-cart/star2.png",
        stars2: "../img/Stars-cart/star2.png",
        stars3: "../img/Stars-cart/star2.png",
        stars4: "../img/Stars-cart/star2.png",
        stars5: "../img/Stars-cart/star2.png",
        description: "The BMW 3 Series is renowned for its sporty performance, elegant design, and advanced features. It offers a thrilling driving experience with precise handling and powerful engine options. The 3 Series is highly rated for its blend of performance, comfort, and technology, making it a standout in the compact luxury sedan segment.",
        fav1: "../img/Stars-cart/heart2.png",
        fav2: "../img/Stars-cart/heart1.png",
        favorite: false,
        cart: false

        
    },
    {
        id: 7,
        source1: "../img/Luxury-and-Mainstream/Audi/1.1.jpeg",
        source2: "../img/Luxury-and-Mainstream/Audi/1.2.jpeg",
        source3: "../img/Luxury-and-Mainstream/Audi/1.3.jpeg",
        source4: "../img/Luxury-and-Mainstream/Audi/1.4.jpeg",
        name: "Audi A8",
        milage: "6.5 KMPL &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp; 595 BHP",
        price: "$280,900 USD.",
        rating: "(441 Ratings)",
        stars1: "../img/Stars-cart/star2.png",
        stars2: "../img/Stars-cart/star2.png",
        stars3: "../img/Stars-cart/star2.png",
        stars4: "../img/Stars-cart/star2.png",
        stars5: "../img/Stars-cart/star1.png",
        description: "The Audi A8 is praised for its luxurious interiors, advanced technology, and smooth performance. It offers a spacious and comfortable ride with a range of powerful engines. The A8 receives high marks for its refinement, cutting-edge features, and driving dynamics, making it a top contender in the luxury sedan market.",
        fav1: "../img/Stars-cart/heart2.png",
        fav2: "../img/Stars-cart/heart1.png",
        favorite: false,
        cart: false
    },
    {
        id: 8,
        source1: "../img/Luxury-and-Mainstream/Mercedes-Benz/Mercedes-Benz A-Class Limousine_FV.jpeg",
        source2: "../img/Luxury-and-Mainstream/Mercedes-Benz/Mercedes-Benz A-Class Limousine_RV.jpeg",
        source3: "../img/Luxury-and-Mainstream/Mercedes-Benz/Mercedes-Benz A-Class Limousine_SV.jpeg",
        source4: "../img/Luxury-and-Mainstream/Mercedes-Benz/Mercedes-Benz A-Class Limousine_IV.jpeg",
        name: "Benz A-Class",
        milage: "6.3 KMPL &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp; 498 BHP",
        price: "$475,900 USD.",
        rating: "(398 Ratings)",
        stars1: "../img/Stars-cart/star2.png",
        stars2: "../img/Stars-cart/star2.png",
        stars3: "../img/Stars-cart/star2.png",
        stars4: "../img/Stars-cart/star2.png",
        stars5: "../img/Stars-cart/star1.png",
       description: "The A-Class Limousine is known for its stylish design, efficient performance, and advanced features. It offers a premium feel at a relatively affordable price point. Reviewers appreciate its comfortable ride, modern interiors, and the inclusion of high-end technology typically found in more expensive models.",
       fav1: "../img/Stars-cart/heart2.png",
        fav2: "../img/Stars-cart/heart1.png",
        favorite: false,
        cart: false
      
    },
    {
        id:9,
        source1: "../img/Luxury-and-Mainstream/Mercedes-Benz/Mercedes-Benz S-Class_FV.jpeg",
        source2: "../img/Luxury-and-Mainstream/Mercedes-Benz/Mercedes-Benz S-Class_RV.jpeg",
        source3: "../img/Luxury-and-Mainstream/Mercedes-Benz/Mercedes-Benz S-Class_SV.jpeg",
        source4: "../img/Luxury-and-Mainstream/Mercedes-Benz/Mercedes-Benz S-Class_IV.jpeg",
        name: "BMW 7 Series",
        milage: "6.8 KMPL &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp; 545 BHP",
        price: "$196,000 USD.",
        rating: "(387 Ratings)",
        stars1: "../img/Stars-cart/star2.png",
        stars2: "../img/Stars-cart/star2.png",
        stars3: "../img/Stars-cart/star2.png",
        stars4: "../img/Stars-cart/star2.png",
        stars5: "../img/Stars-cart/star1.png",

        description: "The BMW 7 Series is lauded for its opulent interiors, cutting-edge technology, and powerful performance. It offers a blend of luxury and sporty handling, making it a favorite among luxury sedan buyers. The 7 Series receives high marks for its comfort, innovation, and driving dynamics.",
        fav1: "../img/Stars-cart/heart2.png",
        fav2: "../img/Stars-cart/heart1.png",
        favorite: false,
        cart: false
    },
    {
        id: 10,
        source1: "../img/Luxury-and-Mainstream/Audi/2.1.jpeg",
        source2: "../img/Luxury-and-Mainstream/Audi/2.2.jpeg",
        source3: "../img/Luxury-and-Mainstream/Audi/2.3.jpeg",
        source4: "../img/Luxury-and-Mainstream/Audi/2.4.jpeg",
        name: "Audi Q7",
        milage: "6.8 KMPL &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp; 601 BHP",
        price: "$140,700 USD.",
        rating: "(402 Ratings)",
        stars1: "../img/Stars-cart/star2.png",
        stars2: "../img/Stars-cart/star2.png",
        stars3: "../img/Stars-cart/star2.png",
        stars4: "../img/Stars-cart/star1.png",
        stars5: "../img/Stars-cart/star1.png",
        description: "The Audi Q7 is appreciated for its spacious and upscale interiors, versatile performance, and advanced technology. It combines the practicality of an SUV with Audi's signature luxury and refinement. The Q7 is highly rated for its comfort, safety features, and driving dynamics, making it a popular choice in the luxury SUV segment.",
        fav1: "../img/Stars-cart/heart2.png",
        fav2: "../img/Stars-cart/heart1.png",
        favorite: false,
        cart: false
    },
    {
        id: 11,
        source1: "../img/Luxury-and-Mainstream/Mercedes-Benz/Mercedes-Benz GLE_FV.jpeg",
        source2: "../img/Luxury-and-Mainstream/Mercedes-Benz/Mercedes-Benz GLE_RV.jpeg",
        source3: "../img/Luxury-and-Mainstream/Mercedes-Benz/Mercedes-Benz GLE_SV.jpeg",
        source4: "../img/Luxury-and-Mainstream/Mercedes-Benz/Mercedes-Benz GLE_IV.jpeg",
        name: "Benz GLE",
        milage: "6.8 KMPL &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp; 569 BHP",
        price: "$353,700 USD.",
        rating: "(402 Ratings)",
        stars1: "../img/Stars-cart/star2.png",
        stars2: "../img/Stars-cart/star2.png",
        stars3: "../img/Stars-cart/star2.png",
        stars4: "../img/Stars-cart/star2.png",
        stars5: "../img/Stars-cart/star1.png",
        description: "The Mercedes-Benz GLE is praised for its spacious and luxurious interiors, robust performance, and off-road capabilities. It combines luxury with practicality, making it a popular choice among luxury SUV buyers. The GLE also features advanced infotainment and driver-assistance systems, contributing to its high ratings.",
        fav1: "../img/Stars-cart/heart2.png",
        fav2: "../img/Stars-cart/heart1.png",
        favorite: false,
        cart: false
    },
    {
        id: 12,
        source1: "../img/PremiumImages/tesla/tesla1.jpg",
        source2: "../img/PremiumImages/tesla/tesla3.jpg",
        source3: "../img/PremiumImages/tesla/tesla7.jpg",
        source4: "../img/PremiumImages/tesla/tesla4.webp",
        name: "Tesla Model X",
        milage: "6.2 KMPL &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp; 520 BHP",
        price: "$201,000 USD.",
        rating: "(420 Ratings)",
        stars1: "../img/Stars-cart/star2.png",
        stars2: "../img/Stars-cart/star2.png",
        stars3: "../img/Stars-cart/star2.png",
        stars4: "../img/Stars-cart/star2.png",
        stars5: "../img/Stars-cart/star2.png",
         description:"The Tesla Model X is an all-electric SUV with advanced technology, notable for its impressive range and performance. It features distinctive Falcon Wing doors and offers a spacious, high-tech interior.",
         fav1: "../img/Stars-cart/heart2.png",
        fav2: "../img/Stars-cart/heart1.png",
        favorite: false,
        cart: false
    },
    {
        id: 13,
        source1: "../img/PremiumImages/volvo/volvo1.webp",
        source2: "../img/PremiumImages/volvo/volvo2.webp",
        source3: "../img/PremiumImages/volvo/volvo5.webp",
        source4: "../img/PremiumImages/volvo/volvo3.webp",
        name: "Volvo XC90",
        milage: "6.1 KMPL &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp; 515 BHP",
        price: "$190,000 USD.",
        rating: "(403 Ratings)",
        stars1: "../img/Stars-cart/star2.png",
        stars2: "../img/Stars-cart/star2.png",
        stars3: "../img/Stars-cart/star2.png",
        stars4: "../img/Stars-cart/star1.png",
        stars5: "../img/Stars-cart/star1.png",
        description: "The Volvo XC60 is a luxury compact SUV known for its elegant design, advanced safety features, and comfortable interior. It offers a range of powerful and efficient engines, including hybrid options, and is praised for its smooth and refined ride.",
        fav1: "../img/Stars-cart/heart2.png",
        fav2: "../img/Stars-cart/heart1.png",
        favorite: false,
        cart: false
    },
    {
        id: 14,
        source1: "../img/PremiumImages/infinite/infinate11.jpg",
        source2: "../img/PremiumImages/infinite/infinate12.jpg",
        source3: "../img/PremiumImages/infinite/infinate13.jpg",
        source4: "../img/PremiumImages/infinite/infinti5.avif",
        name: "Infiniti QX55",
        milage: "5.9 KMPL &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp; 478 BHP",
        price: "$99,000 USD.",
        rating: "(388 Ratings)",
        stars1: "../img/Stars-cart/star2.png",
        stars2: "../img/Stars-cart/star2.png",
        stars3: "../img/Stars-cart/star2.png",
        stars4: "../img/Stars-cart/star1.png",
        stars5: "../img/Stars-cart/star1.png",
        description: "The Infiniti QX55 is a stylish crossover coupe that combines sporty design with luxury features. It offers a turbocharged engine, advanced technology, and a spacious, high-quality interior.",
        fav1: "../img/Stars-cart/heart2.png",
        fav2: "../img/Stars-cart/heart1.png",
        favorite: false,
        cart: false
    },
    {
        id: 15,
        source1: "../img/PremiumImages/tesla/tesla21.jpg",
        source2: "../img/PremiumImages/tesla/tesla22.jpg",
        source3: "../img/PremiumImages/tesla/tesla23.jpg",
        source4: "../img/Luxury-and-Mainstream/Mercedes-Benz/Mercedes-Benz GLE_IV.jpeg",
        name: "Telsa Model Y",
        milage: "6.0 KMPL &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp; 540 BHP",
        price: "$120,000 USD.",
        rating: "(387 Ratings)",
        stars1: "../img/Stars-cart/star2.png",
        stars2: "../img/Stars-cart/star2.png",
        stars3: "../img/Stars-cart/star2.png",
        stars4: "../img/Stars-cart/star2.png",
        stars5: "../img/Stars-cart/star1.png",
        description:"The Tesla Model Y is a compact all-electric SUV known for its impressive range, quick acceleration, and advanced technology. It offers a spacious interior with optional third-row seating and features Tesla's signature Autopilot and Full Self-Driving capabilities.",
        fav1: "../img/Stars-cart/heart2.png",
        fav2: "../img/Stars-cart/heart1.png",
        favorite: false,
        cart: false
    },
    {
        id: 16,
        source1: "../img/PremiumImages/volvo/volvo6.jpg",
        source2: "../img/PremiumImages/volvo/volvo7.jpg",
        source3: "../img/PremiumImages/volvo/volvo8.jpg",
        source4: "../img/PremiumImages/volvo/volvo3.jpg",
        name: "Volvo S90",
        milage: "6.1 KMPL &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp; 522 BHP",
        price: "$234,000 USD.",
        rating: "(432 Ratings)",
        stars1: "../img/Stars-cart/star2.png",
        stars2: "../img/Stars-cart/star2.png",
        stars3: "../img/Stars-cart/star2.png",
        stars4: "../img/Stars-cart/star2.png",
        stars5: "../img/Stars-cart/star1.png",
        description:"The Volvo S90 is a luxury sedan that stands out for its elegant design, advanced safety features, and comfortable, high-quality interior. It offers a range of powerful and efficient engines, including hybrid options, and is praised for its smooth, refined ride",
        fav1: "../img/Stars-cart/heart2.png",
        fav2: "../img/Stars-cart/heart1.png",
        favorite: false,
        cart: false
    },
    {
        id: 17,
        source1: "../img/PremiumImages/infinite/infinate3.avif",
        source2: "../img/PremiumImages/infinite/infinate6.jpg",
        source3: "../img/PremiumImages/infinite/infinate4.avif",
        source4: "../img/PremiumImages/infinite/infinti5.avif",
        name: "Infiniti ESQ",
        milage: "6.8 KMPL &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp; 501 BHP",
        price: "$49,700 USD.",
        rating: "(220 Ratings)",
        stars1: "../img/Stars-cart/star2.png",
        stars2: "../img/Stars-cart/star2.png",
        stars3: "../img/Stars-cart/star2.png",
        stars4: "../img/Stars-cart/star2.png",
        stars5: "../img/Stars-cart/star2.png",
        description: "The Infiniti ESQ is a compact luxury crossover primarily sold in the Chinese market. It features a sporty design, turbocharged engine, and a well-appointed interior with modern technology and comfort features.",
        fav1: "../img/Stars-cart/heart2.png",
        fav2: "../img/Stars-cart/heart1.png",
        favorite: false,
        cart: false
    }
    ,
    {
        id: 18,
        source1: "../img/Luxury-and-Mainstream/Toyota/1.1.jpeg",
        source2: "../img/Luxury-and-Mainstream/Toyota/1.2.jpeg",
        source3: "../img/Luxury-and-Mainstream/Toyota/1.3.jpeg",
        source4: "../img/Luxury-and-Mainstream/Toyota/1.4.jpeg",
        name: "Toyota Camry",
        milage: "5.2 KMPL &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp; 420 BHP",
        price: "$84,000 USD.",
        rating: "(320 Ratings)",
        stars1: "../img/Stars-cart/star2.png",
        stars2: "../img/Stars-cart/star2.png",
        stars3: "../img/Stars-cart/star2.png",
        stars4: "../img/Stars-cart/star1.png",
        stars5: "../img/Stars-cart/star1.png",
        description: "The Toyota Camry is known for its comfortable ride, spacious interiors, and fuel efficiency, especially in its hybrid variant. It offers a smooth driving experience with advanced safety features and technology. The Camry is highly rated for its reliability, luxury feel, and value for money, making it a top choice in the midsize sedan segment.",
        fav1: "../img/Stars-cart/heart2.png",
        fav2: "../img/Stars-cart/heart1.png",
        favorite: false,
        cart: false
    },
    {
        id: 19,
        source1: "../img/Luxury-and-Mainstream/Ford/1.1.jpeg",
        source2: "../img/Luxury-and-Mainstream/Ford/1.2.jpeg",
        source3: "../img/Luxury-and-Mainstream/Ford/1.3.jpeg",
        source4: "../img/Luxury-and-Mainstream/Ford/1.4.jpeg",
        name: "Ford Endeavoru",
        milage: "6.1 KMPL &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp; 495 BHP",
        price: "$48,900 USD.",
        rating: "(411 Ratings)",
        stars1: "../img/Stars-cart/star2.png",
        stars2: "../img/Stars-cart/star2.png",
        stars3: "../img/Stars-cart/star2.png",
        stars4: "../img/Stars-cart/star2.png",
        stars5: "../img/Stars-cart/star1.png",
        description: "The Ford Endeavour, also known as Everest in some markets, is praised for its rugged build, off-road capabilities, and powerful performance. It offers a spacious and luxurious interior with advanced features. The Endeavour is highly rated for its durability, comfort, and versatile performance.",
        fav1: "../img/Stars-cart/heart2.png",
        fav2: "../img/Stars-cart/heart1.png",
        favorite: false,
        cart: false
    },
    {
        id: 20,
        source1: "../img/Luxury-and-Mainstream/Kia/1.1.jpeg",
        source2: "../img/Luxury-and-Mainstream/Kia/1.2.jpeg",
        source3: "../img/Luxury-and-Mainstream/Kia/1.3.jpeg",
        source4: "../img/Luxury-and-Mainstream/Kia/1.4.jpeg",
        name: "Kia Seltos",
        milage: "5.9 KMPL &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp; 467 BHP",
        price: "$91,000 USD.",
        rating: "(376 Ratings)",
        stars1: "../img/Stars-cart/star2.png",
        stars2: "../img/Stars-cart/star2.png",
        stars3: "../img/Stars-cart/star2.png",
        stars4: "../img/Stars-cart/star1.png",
        stars5: "../img/Stars-cart/star1.png",
        description: "The Kia Seltos is highly praised for its stylish design, spacious interiors, and advanced features. It offers a comfortable and smooth ride with a variety of engine options. The Seltos is highly rated for its blend of performance, fuel efficiency, and value for money, making it a popular choice in the compact SUV segment.",
        fav1: "../img/Stars-cart/heart2.png",
        fav2: "../img/Stars-cart/heart1.png",
        favorite: false,
        cart: false
    },
    {
        id: 21,
        source1: "../img/Luxury-and-Mainstream/Toyota/1.1.jpeg",
        source2: "../img/Luxury-and-Mainstream/Toyota/2.2.jpeg",
        source3: "../img/Luxury-and-Mainstream/Toyota/2.3.jpeg",
        source4: "../img/Luxury-and-Mainstream/Toyota/2.4.jpeg",
        name: "Toyota Fortuner",
        milage: "6.0 KMPL &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp; 498 BHP",
        price: "$45,000 USD.",
        rating: "(367 Ratings)",stars1: "../img/Stars-cart/star2.png",
        stars2: "../img/Stars-cart/star2.png",
        stars3: "../img/Stars-cart/star2.png",
        stars4: "../img/Stars-cart/star2.png",
        stars5: "../img/Stars-cart/star1.png",
        description: "The Toyota Fortuner is appreciated for its robust build, off-road capabilities, and powerful performance. It offers a spacious and comfortable cabin with a commanding road presence. The Fortuner is highly rated for its durability, reliability, and versatility, making it a popular choice in the SUV segment.",
        fav1: "../img/Stars-cart/heart2.png",
        fav2: "../img/Stars-cart/heart1.png",
        favorite: false,
        cart: false
    },
    {
        id: 22,
        source1: "../img/Luxury-and-Mainstream/Ford/2.1.jpeg",
        source2: "../img/Luxury-and-Mainstream/Ford/2.2.jpeg",
        source3: "../img/Luxury-and-Mainstream/Ford/2.3.jpeg",
        source4: "../img/Luxury-and-Mainstream/Ford/2.4.jpeg",
        name: "Ford EcoSport",
        milage: "6.1 KMPL &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp; 432 BHP",
        price: "$185,000 USD.",
        rating: "(432 Ratings)",
        stars1: "../img/Stars-cart/star2.png",
        stars2: "../img/Stars-cart/star2.png",
        stars3: "../img/Stars-cart/star2.png",
        stars4: "../img/Stars-cart/star2.png",
        stars5: "../img/Stars-cart/star2.png",
        description: "The Ford EcoSport is appreciated for its compact size, sporty design, and agile handling. It offers a comfortable ride with a well-equipped interior and advanced safety features. The EcoSport is highly rated for its performance, fuel efficiency, and overall value.",
        fav1: "../img/Stars-cart/heart2.png",
        fav2: "../img/Stars-cart/heart1.png",
        favorite: false,
        cart: false
    },
    {
        id: 23,
        source1: "../img/Luxury-and-Mainstream/Kia/2.1.jpeg",
        source2: "../img/Luxury-and-Mainstream/Kia/2.2.jpeg",
        source3: "../img/Luxury-and-Mainstream/Kia/2.3.jpeg",
        source4: "../img/Luxury-and-Mainstream/Kia/2.4.jpeg",
        name: "Kia Carnival",
        milage: "5.8 KMPL &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp; 401 BHP",
        price: "$37,000 USD.",
        rating: "(220 Ratings)",
        stars1: "../img/Stars-cart/star2.png",
        stars2: "../img/Stars-cart/star2.png",
        stars3: "../img/Stars-cart/star2.png",
        stars4: "../img/Stars-cart/star1.png",
        stars5: "../img/Stars-cart/star1.png",
        description: "The Kia Carnival is known for its luxurious and spacious interiors, making it an ideal choice for families. It offers a smooth and powerful performance with advanced safety features and technology. The Carnival is highly rated for its comfort, practicality, and premium feel, making it a standout in the MPV segment.",
        fav1: "../img/Stars-cart/heart2.png",
        fav2: "../img/Stars-cart/heart1.png",
        favorite: false,
        cart: false
    }
];
function popup2(value) {
    document.body.classList.add('noscroll');
    var i1 = document.getElementsByClassName("slider")[1].getElementsByTagName("img")[0];
    var i2 = document.getElementsByClassName("slider")[2].getElementsByTagName("img")[0];
    var i3 = document.getElementsByClassName("slider")[3].getElementsByTagName("img")[0];
    var i4 = document.getElementsByClassName("slider")[4].getElementsByTagName("img")[0];
    i1.src = arr[value].source1;
    i2.src = arr[value].source2;
    i3.src = arr[value].source3;
    i4.src = arr[value].source4;
    var name = document.getElementsByClassName("namee")[0];
    var details = document.getElementsByClassName("detailss")[0];
    var price = document.getElementsByClassName("costt")[0];
    name.innerHTML = arr[value].name;
    details.innerHTML = arr[value].milage;
    price.innerHTML = arr[value].price;
    var stars = document.getElementsByClassName("icon");
    var s1 = stars[0].getElementsByTagName("img")[0];
    var s2 = stars[1].getElementsByTagName("img")[0];
    var s3 = stars[2].getElementsByTagName("img")[0];
    var s4 = stars[3].getElementsByTagName("img")[0];
    var s5 = stars[4].getElementsByTagName("img")[0];
    s1.src = arr[value].stars1;
    s2.src = arr[value].stars2;
    s3.src = arr[value].stars3;
    s4.src = arr[value].stars4;
    s5.src = arr[value].stars5;
    var rating = document.getElementsByClassName("matter")[0];
    var description = document.getElementsByClassName("desc")[0];
    rating.innerHTML = arr[value].rating;
    description.innerHTML = arr[value].description;
    var popup1 = document.getElementsByClassName("inner")[0];
    popup1.style.display = 'flex';
    popup1.style.zIndex = '999999';
    var main2 = document.getElementsByClassName("page")[0];
    main2.style.opacity = '0.4';
    var fav = document.getElementsByClassName("fav")[0].getElementsByTagName("img")[0];
    fav.src = arr[value].favorite ? arr[value].fav2 : arr[value].fav1;
    fav.onclick = function() {
        favFun(value);
    };
    var cart = document.getElementsByClassName("cartt")[0].getElementsByTagName("img")[0];
    cart.src = arr[value].cart ? "../img/Stars-cart/cart-check-fill.svg" : "../img/Stars-cart/shopping-cart.svg";
    cart.onclick = function() {
        cartFun(value, cart);
    };
}
function favFun(index) {
    var fav = document.getElementsByClassName("fav")[0].getElementsByTagName("img")[0];
    arr[index].favorite = !arr[index].favorite;
    fav.src = arr[index].favorite ? arr[index].fav2 : arr[index].fav1;
    updateFavorites();
}
function cartFun(index, cartIcon) {
    arr[index].cart = !arr[index].cart;
    cartIcon.src = arr[index].cart ? "../img/Stars-cart/cart-check-fill.svg" : "../img/Stars-cart/shopping-cart.svg";

    if (arr[index].cart) {
        addToCart(arr[index].id);
    } else {
        removeFromCart(arr[index].id);
    }
}
function updateFavorites() {
    var favorites = arr.filter(car => car.favorite);
    localStorage.setItem('favoriteCars', JSON.stringify(favorites));
}
function addToCart(id) {
    var cartCars = JSON.parse(localStorage.getItem('cartCars')) || [];
    const car = arr.find(c => c.id === id);
    if (!cartCars.some(c => c.id === car.id)) {
        cartCars.push(car);
        localStorage.setItem('cartCars', JSON.stringify(cartCars));
    }
    updateCart();
}
function removeFromCart(id) {
    var cartCars = JSON.parse(localStorage.getItem('cartCars')) || [];
    cartCars = cartCars.filter(c => c.id !== id);
    localStorage.setItem('cartCars', JSON.stringify(cartCars));
    updateCart();
}
function updateCart() {
    var cartCars = JSON.parse(localStorage.getItem('cartCars')) || [];
    localStorage.setItem('cartCars', JSON.stringify(cartCars));
}
// FILTER JS
var filter_sym,fil_opt,suFP=0,brIt,prIt,RaIt,suB=0,suP=0,suR=0,filter_suc=0;
function filtr_op(){
    filter_sym=document.getElementsByClassName("filter_logo")[0];
    if(filter_suc==0){
        filter_sym.innerHTML='<i class="fa-solid fa-filter-circle-xmark"></i>';
        filter_suc=1;
    }
    else{
        location.reload();
        filter_suc=0;
    }
    fil_opt=document.getElementsByClassName("filter_options")[0];
    if(suFP==0){
        fil_opt.style.display="block";
        fil_opt.style.display="flex";
        suFP=1;
    }else{
        fil_opt.style.display="none";
        suFP=0;
    }   
}
function Brands_itm(){
    brIt=document.getElementsByClassName("Brands_items")[0];
    if(suB==0){
        brIt.style.display="block";
        brIt.style.display="flex";
        suB=1;
    }
    else{
        brIt.style.display="none";
        suB=0;
    }
    prIt=document.getElementsByClassName("Prise_items")[0];
    prIt.style.display="none"; suP=0;
}
function Pri_itm(){
    prIt=document.getElementsByClassName("Prise_items")[0];
    if(suP==0){
        prIt.style.display="block";
        suP=1;
    }
    else{
        prIt.style.display="none";
        suP=0;
    }
    brIt=document.getElementsByClassName("Brands_items")[0];
    brIt.style.display="none"; suB=0;
}
var mainDiv,filterDiv,CarBrDiv,PriseDiv,inputChekV,NoFliter,DivExcit=0;
function Filter_fun_C(Brands_Name,indexOfInput){
    mainDiv=document.getElementsByClassName("page")[0];
    mainDiv.style.display="none";

    filterDiv=document.getElementsByClassName("Filter_cars_display")[0];
    filterDiv.style.display="block";
    filterDiv.style.display="flex";

    inputChekV=document.getElementsByTagName("input")[indexOfInput];
    if(inputChekV.checked){
        for(let i=0;i<2;i++){
            CarBrDiv=document.getElementsByClassName(Brands_Name)[i];
            CarBrDiv.style.display="block";
        }
        DivExcit++;
        if(DivExcit>0){
            NoFliter=document.getElementsByClassName('Filter_Not_Aply')[0];
            NoFliter.style.display="none";
        }
    }
    else{
        for(let i=0;i<2;i++){
            CarBrDiv=document.getElementsByClassName(Brands_Name)[i];
            CarBrDiv.style.display="none";
        }
        DivExcit--;
        if(DivExcit==0){
            NoFliter=document.getElementsByClassName('Filter_Not_Aply')[0];
            NoFliter.style.display="block";
        }
    }
}
function Filter_fun_P(Price_Name,indexOfInput){
    mainDiv=document.getElementsByClassName("page")[0];
    mainDiv.style.display="none";
    filterDiv=document.getElementsByClassName("Filter_cars_display")[0];
    filterDiv.style.display="block";
    filterDiv.style.display="flex";
    inputChekV=document.getElementsByTagName("input")[indexOfInput];
    var i=0;
    if(inputChekV.checked){
        for(let i=0;i<4;i++){
            PriseDiv=document.getElementsByClassName(Price_Name)[i];
            PriseDiv.style.display="block";
        }
        DivExcit++;
        if(DivExcit>0){
            NoFliter=document.getElementsByClassName('Filter_Not_Aply')[0];
            NoFliter.style.display="none";
        }
    }
    else{
        for(let i=0;i<4;i++){
            PriseDiv=document.getElementsByClassName(Price_Name)[i];
            PriseDiv.style.display="none";
        }
        DivExcit--;
        if(DivExcit==0){
            NoFliter=document.getElementsByClassName('Filter_Not_Aply')[0];
            NoFliter.style.display="block";
        }
    }
}
var buy = document.getElementsByClassName("buy")[0];
buy.onclick = function() {
    window.location.href = 'buy_car.html';
}