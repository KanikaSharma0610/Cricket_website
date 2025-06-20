const players = [
  {
    name: "Rohit Sharma",
    role: "Captain",
    info: "Opening batsman",
    photo: "https://static.cricbuzz.com/a/img/v1/152x152/i1/c616514/rohit-sharma.jpg"
  },
  {
    name: "Virat Kohli",
    role: "Batsman",
    info: "Top-order batsman",
    photo: "https://static.cricbuzz.com/a/img/v1/152x152/i1/c616517/virat-kohli.jpg"
  },
  {
    name: "Jasprit Bumrah",
    role: "Bowler",
    info: "Fast bowler",
    photo: "https://static.cricbuzz.com/a/img/v1/152x152/i1/c591949/jasprit-bumrah.jpg"
  },
  {
    name: "KL Rahul",
    role: "Wicket Keeper",
    info: "Middle-order batsman",
    photo: "https://static.cricbuzz.com/a/img/v1/152x152/i1/c616523/kl-rahul.jpg"
  },
  {
    name: "Hardik Pandya",
    role: "All-rounder",
    info: "Right-hand bat, medium-fast bowler",
    photo: "https://static.cricbuzz.com/a/img/v1/152x152/i1/c616519/hardik-pandya.jpg"
  },
  {
    name: "Ravindra Jadeja",
    role: "All-rounder",
    info: "Left-hand bat, spinner",
    photo: "https://static.cricbuzz.com/a/img/v1/152x152/i1/c616520/ravindra-jadeja.jpg"
  },
  {
    name: "Shubman Gill",
    role: "Batsman",
    info: "Top-order right-hand batsman",
    photo: "https://static.cricbuzz.com/a/img/v1/152x152/i1/c616515/shubman-gill.jpg"
  },
  {
    name: "Mohammed Siraj",
    role: "Bowler",
    info: "Right-arm fast bowler",
    photo: "https://static.cricbuzz.com/a/img/v1/152x152/i1/c616526/mohammed-shami.jpg"
  },
  {
    name: "Kuldeep Yadav",
    role: "Bowler",
    info: "Left-arm chinaman spinner",
    photo: "https://static.cricbuzz.com/a/img/v1/152x152/i1/c616525/kuldeep-yadav.jpg"
  },
  {
    name: "Suryakumar Yadav",
    role: "Batsman",
    info: "Middle-order explosive batsman",
    photo: "https://static.cricbuzz.com/a/img/v1/152x152/i1/c352481/suryakumar-yadav.jpg"
  },
  {
    name: "Axar Patel",
    role: "All-rounder",
    info: "Left-arm orthodox spinner",
    photo: "https://static.cricbuzz.com/a/img/v1/152x152/i1/c616521/axar-patel.jpg"
  },
  {
    name: "Yuzvendra Chahal",
    role: "Bowler",
    info: "Leg spinner",
    photo: "https://static.cricbuzz.com/a/img/v1/152x152/i1/c244981/yuzvendra-chahal.jpg"
  },
  {
    name: "Ruturaj Gaikwad",
    role: "Batsman",
    info: "Opening batsman",
    photo: "https://static.cricbuzz.com/a/img/v1/152x152/i1/c333874/ruturaj-gaikwad.jpg"
  },
  {
    name: "Ishan Kishan",
    role: "Wicket Keeper",
    info: "Aggressive left-hand batsman",
    photo: "https://static.cricbuzz.com/a/img/v1/152x152/i1/c352492/ishan-kishan.jpg"
  },
  {
    name: "Shardul Thakur",
    role: "Bowler",
    info: "Medium-fast bowler",
    photo: "https://static.cricbuzz.com/a/img/v1/152x152/i1/c352487/shardul-thakur.jpg"
  }
];
//spin wheel creation
const wheel = document.getElementById("wheel");
const resultBox = document.getElementById("result");
const totalSegments = 15;
const anglePerSegment = 360 / totalSegments;
players.forEach((player, index) => {
  const segment = document.createElement("div");
  segment.className = "segment";
  const angle = 360 / players.length;
  const rotation = anglePerSegment * index;
  segment.style.transform = `rotate(${rotation}deg)`;
  segment.style.background = "linear-gradient(to right, #2c1c47, #000000)";
  wheel.appendChild(segment);
});
const audio = document.getElementById("spin-sound"); // audio sound
let currentRotation = 0;
function spin() {
  audio.currentTime = 0;
  audio.play();
  const totalSegments = players.length;
  const anglePerSegment = 360 / totalSegments;
  const randomIndex = Math.floor(Math.random() * totalSegments);
  const rotateTo = 360 * 5 + (360 - randomIndex * anglePerSegment) - (anglePerSegment / 2);
  currentRotation += rotateTo;
  wheel.style.transform = `rotate(${currentRotation}deg)`;
  launchRockets(200);

  // SHOW MESSAGE
  const scrollMsg = document.getElementById("scroll-message");
  scrollMsg.style.animation = "floatUp 1.2s ease-out";
  scrollMsg.style.opacity = "1";

  // HIDE AFTER 8 SECONDS
  setTimeout(() => {
    scrollMsg.style.opacity = "0";
    scrollMsg.style.animation = "none"; // reset animation
  }, 8000);



  function launchRockets(count = 200) {
    const container = document.getElementById("rocket-container");  // rocket launch

    for (let i = 0; i < count; i++) {
      const rocket = document.createElement("div");
      rocket.className = "rocket";
      rocket.style.left = `${Math.random() * 100}vw`;
      rocket.style.animationDuration = `${1.2 + Math.random()}s`;

      container.appendChild(rocket);

      // rocket removal
      setTimeout(() => {
        rocket.remove();
      }, 5000);
    }
  }
  // displaying players' info
  setTimeout(() => {
    const p = players[randomIndex];
    resultBox.innerHTML = `
      <img src="${p.photo}" alt="${p.name}" style="width: 200px; border-radius: 10px;"><br><br>
      <strong style="font-size:22px;">${p.name} </strong><br>
       <span style="font-size:22px;"> Role: ${p.role}</span><br>
       <span style="font-size:22px;">Info: ${p.info}</span>
    `;
    for(let i =0;i<10;i++){
    confetti({
    particleCount: 120,
    spread: 70,
    origin: { y: 0.6 }
  });
}
  }, 5200);
}

