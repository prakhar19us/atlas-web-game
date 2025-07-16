const places = [
  "afghanistan", "albania", "algeria", "andorra", "angola", "antigua and barbuda",
  "argentina", "armenia", "australia", "austria", "azerbaijan", "bahamas",
  "bahrain", "bangladesh", "barbados", "belarus", "belgium", "belize", "benin",
  "bhutan", "bolivia", "bosnia and herzegovina", "botswana", "brazil", "brunei",
  "bulgaria", "burkina faso", "burundi", "cabo verde", "cambodia", "cameroon",
  "canada", "central african republic", "chad", "chile", "china", "colombia",
  "comoros", "congo", "costa rica", "croatia", "cuba", "cyprus",
  "czech republic", "democratic republic of congo", "denmark", "djibouti",
  "dominica", "dominican republic", "ecuador", "egypt", "el salvador",
  "equatorial guinea", "eritrea", "estonia", "eswatini", "ethiopia", "fiji",
  "finland", "france", "gabon", "gambia", "georgia", "germany", "ghana",
  "greece", "grenada", "guatemala", "guinea", "guinea-bissau", "guyana", "haiti",
  "honduras", "hungary", "iceland", "india", "indonesia", "iran", "iraq",
  "ireland", "israel", "italy", "jamaica", "japan", "jordan", "kazakhstan",
  "kenya", "kiribati", "kuwait", "kyrgyzstan", "laos", "latvia", "lebanon",
  "lesotho", "liberia", "libya", "liechtenstein", "lithuania", "luxembourg",
  "madagascar", "malawi", "malaysia", "maldives", "mali", "malta",
  "marshall islands", "mauritania", "mauritius", "mexico", "micronesia",
  "moldova", "monaco", "mongolia", "montenegro", "morocco", "mozambique",
  "myanmar", "namibia", "nauru", "nepal", "netherlands", "new zealand",
  "nicaragua", "niger", "nigeria", "north korea", "north macedonia", "norway",
  "oman", "pakistan", "palau", "palestine", "panama", "papua new guinea",
  "paraguay", "peru", "philippines", "poland", "portugal", "qatar", "romania",
  "russia", "rwanda", "saint kitts and nevis", "saint lucia",
  "saint vincent and the grenadines", "samoa", "san marino",
  "sao tome and principe", "saudi arabia", "senegal", "serbia", "seychelles",
  "sierra leone", "singapore", "slovakia", "slovenia", "solomon islands",
  "somalia", "south africa", "south korea", "south sudan", "spain", "sri lanka",
  "sudan", "suriname", "sweden", "switzerland", "syria", "taiwan", "tajikistan",
  "tanzania", "thailand", "timor-leste", "togo", "tonga", "trinidad and tobago",
  "tunisia", "turkey", "turkmenistan", "tuvalu", "uganda", "ukraine",
  "united arab emirates", "united kingdom", "united states", "uruguay",
  "uzbekistan", "vanuatu", "vatican city", "venezuela", "vietnam", "yemen",
  "zambia", "zimbabwe",
  "andhra pradesh", "arunachal pradesh", "assam", "bihar", "chhattisgarh", "goa",
  "gujarat", "haryana", "himachal pradesh", "jharkhand", "karnataka", "kerala",
  "madhya pradesh", "maharashtra", "manipur", "meghalaya", "mizoram", "nagaland",
  "odisha", "punjab", "rajasthan", "sikkim", "tamil nadu", "telangana",
  "tripura", "uttar pradesh", "uttarakhand", "west bengal",
  "andaman and nicobar islands", "chandigarh",
  "dadra and nagar haveli and daman and diu", "delhi", "jammu and kashmir",
  "ladakh", "lakshadweep", "puducherry",
  "kabul", "tirana", "algiers", "andorra la vella", "luanda", "saint john's",
  "buenos aires", "yerevan", "canberra", "vienna", "baku", "nassau", "manama",
  "dhaka", "bridgetown", "minsk", "brussels", "belmopan", "porto-novo",
  "thimphu", "sucre", "sarajevo", "gaborone", "brasília",
  "bandar seri begawan", "sofia", "ouagadougou", "gitega", "praia",
  "phnom penh", "yaounde", "ottawa", "bangui", "n'djamena", "santiago",
  "beijing", "bogotá", "moroni", "brazzaville", "san jose", "zagreb", "havana",
  "nicosia", "prague", "kinshasa", "copenhagen", "djibouti", "roseau",
  "santo domingo", "quito", "cairo", "san salvador", "malabo", "asmara",
  "tallinn", "mbabane", "addis ababa", "suva", "helsinki", "paris", "libreville",
  "banjul", "tbilisi", "berlin", "accra", "athens", "saint george's",
  "guatemala city", "conakry", "bissau", "georgetown", "port-au-prince",
  "tegucigalpa", "budapest", "reykjavík", "new delhi", "jakarta", "tehran",
  "baghdad", "dublin", "jerusalem", "rome", "kingston", "tokyo", "amman",
  "nur-sultan", "nairobi", "south tarawa", "kuwait city", "bishkek",
  "vientiane", "riga", "beirut", "maseru", "monrovia", "tripoli", "vaduz",
  "vilnius", "luxembourg", "antananarivo", "lilongwe", "kuala lumpur", "male",
  "bamako", "valletta", "majuro", "nouakchott", "port louis", "mexico city",
  "palikir", "chișinău", "monaco", "ulaanbaatar", "podgorica", "rabat",
  "maputo", "naypyidaw", "windhoek", "yaren", "kathmandu", "amsterdam",
  "wellington", "managua", "niamey", "abuja", "pyongyang", "skopje", "oslo",
  "muscat", "islamabad", "ngerulmud", "ramallah", "panama city", "port moresby",
  "asunción", "lima", "manila", "warsaw", "lisbon", "doha", "bucharest",
  "moscow", "kigali", "basseterre", "castries", "kingstown", "apia", "san marino",
  "são tome", "riyadh", "dakar", "belgrade", "victoria", "freetown", "singapore",
  "bratislava", "ljubljana", "honiara", "mogadishu", "cape town", "seoul",
  "juba", "madrid", "sri jayawardenepura kotte", "khartoum", "paramaribo",
  "stockholm", "bern", "damascus", "taipei", "dushanbe", "dodoma", "bangkok",
  "dili", "lome", "nuku'alofa", "port of spain", "tunis", "ankara", "ashgabat",
  "funafuti", "kampala", "kyiv", "abu dhabi", "london", "washington d.c.",
  "montevideo", "tashkent", "port vila", "vatican city", "caracas", "hanoi",
  "sana'a", "lusaka", "harare",
  "mumbai", "delhi", "bangalore", "hyderabad", "chennai", "kolkata", "pune",
  "ahmedabad", "jaipur", "surat", "lucknow", "kanpur", "nagpur", "patna",
  "indore", "thane", "bhopal", "visakhapatnam", "vadodara", "firozabad",
  "ludhiana", "rajkot", "agra", "siliguri", "nashik", "faridabad",
  "pimpri-chinchwad", "ghaziabad", "howrah", "ranchi", "salem", "mira-bhayandar",
  "jabalpur", "kota", "gwalior", "vijayawada", "jodhpur", "madurai", "raipur",
  "kochi", "amritsar", "allahabad", "virar", "aurangabad", "dhanbad", "amravati",
  "navi mumbai", "kalyan-dombivli", "vasai-virar", "varanasi", "srinagar",
  "trichinopoly", "bareilly", "mysore", "tiruppur", "gurgaon", "aligarh",
  "jalandhar", "bhubaneswar", "meerut", "rajkot", "coimbatore", "jamshedpur",
  "akola", "belgaum", "kannur", "kolhapur", "ajmer", "gulbarga", "jhansi", "loni",
  "sikar", "jhunjhunu", "ulhasnagar", "malegaon", "jalgaon", "udaipur", "sangli",
  "nanded", "panipat", "karnal", "thanjavur", "bhilwara", "saharanpur",
  "gorakhpur", "guntur", "bikaner", "bhavnagar", "rohtak", "tumkur", "korba",
  "raurkela", "bhilai", "brahmapur", "muzaffarpur", "ahmednagar", "mathura",
  "kollam", "avadi", "kadapa", "kamarhati", "sambalpur", "bilaspur",
  "shahjahanpur", "satara", "bijapur", "rampur", "shivamogga", "chandrapur",
  "junagadh", "thrissur", "alwar", "bardhaman", "kulti", "kakinada", "nizamabad",
  "parbhani", "tumkur", "khammam", "ozhukarai", "lancashire", "panihati",
  "kamarhati", "durg", "rajahmundry", "tirunelveli",
  "barcelona", "florence", "venice", "bruges", "dubrovnik", "salzburg", "nice",
  "cannes", "granada", "seville", "porto", "sintra", "santorini", "mykonos",
  "hallstatt", "cesky krumlov", "rothenburg ob der tauber", "neuschwanstein",
  "mont saint-michel", "carcassonne", "avignon", "annecy", "colmar",
  "strasbourg", "heidelberg", "bamberg", "garmisch-partenkirchen", "innsbruck",
  "zermatt", "lucerne", "interlaken", "grindelwald", "gimmelwald",
  "lauterbrunnen", "wengen", "murren", "jungfraujoch", "giethoorn",
  "kinderdijk", "keukenhof", "volendam", "marken", "zaanse schans", "ghent",
  "antwerp", "dinant", "leuven", "mechelen", "ypres", "sinaia", "brasov",
  "sighisoara", "sibiu", "cluj-napoca", "timisoara", "konstanz", "freiburg",
  "wurzburg", "regensburg", "passau", "berchtesgaden", "oberammergau",
  "mittenwald", "lindau", "meersburg", "baden-baden", "cochem", "rüdesheim",
  "quedlinburg", "goslar", "lubeck", "wismar", "rostock", "stralsund", "rügen",
  "usedom", "sylt", "helgoland", "borkum", "norderney", "langeoog"
]
;

let used = [];
let lastLetter = null;
let score = 0;
let map = L.map("map").setView([20, 0], 2);
let marker;
let previousCoords = null;
let currentFlightLine = null;
let aircraftMarker = null;

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

const speakBtn = document.getElementById("speak-btn");
const userText = document.getElementById("user-text");
const aiText = document.getElementById("ai-text");
const statusDiv = document.getElementById("status");
const synth = window.speechSynthesis;

const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = "en-IN";
recognition.continuous = false;      // keep listening even after pauses
recognition.interimResults = false; // we only care about final results

let isListening = false;
let listenTimeout;


function getFlagImg(countryCode) {
  if (!countryCode) return '';
  return `<img src="https://flagcdn.com/24x18/${countryCode}.png" alt="${countryCode}" style="margin-right: 5px; vertical-align: middle;">`;
}


function capitalize(str) {
  return str
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
}

async function showOnMap(placeName) {
  const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(placeName)}&addressdetails=1&limit=1`);
  const data = await res.json();
  if (data.length === 0) return null;

  const { lat, lon, display_name, address } = data[0];
  const newCoords = [parseFloat(lat), parseFloat(lon)];

  const countryCode = address?.country_code?.toLowerCase() || null;

  // Clear previous flight path
  if (currentFlightLine) {
    map.removeLayer(currentFlightLine);
    currentFlightLine = null;
  }

  if (previousCoords && aircraftMarker) {
    await animateAircraftFlight(previousCoords, newCoords);
  }

  if (marker) map.removeLayer(marker);
  marker = L.marker(newCoords).addTo(map).bindPopup(display_name).openPopup();

  if (!aircraftMarker) {
    aircraftMarker = L.marker(newCoords, {
      icon: L.divIcon({
        html: '<div class="aircraft-icon">✈️</div>',
        className: 'aircraft-marker',
        iconSize: [30, 30],
        iconAnchor: [15, 15]
      })
    }).addTo(map);
  }

  map.flyTo(newCoords, 4, {
    duration: 1.5,
    easeLinearity: 0.25
  });

  previousCoords = newCoords;

  return countryCode;
}


async function animateAircraftFlight(fromCoords, toCoords) {
  return new Promise((resolve) => {
    // Create flight path line
    currentFlightLine = L.polyline([fromCoords, toCoords], {
      color: '#FF6B6B',
      weight: 3,
      opacity: 0.7,
      dashArray: '10, 10',
      className: 'flight-path'
    }).addTo(map);
    
    // Animate the line drawing
    const pathElement = currentFlightLine.getElement();
    if (pathElement) {
      const length = pathElement.getTotalLength();
      pathElement.style.strokeDasharray = length + ' ' + length;
      pathElement.style.strokeDashoffset = length;
      pathElement.style.animation = 'drawLine 2s ease-in-out forwards';
    }

    // Calculate aircraft rotation angle
    const angle = Math.atan2(toCoords[1] - fromCoords[1], toCoords[0] - fromCoords[0]) * 180 / Math.PI;
    
    // Animate aircraft movement
    const totalSteps = 60; // 60 frames for smooth animation
    const latStep = (toCoords[0] - fromCoords[0]) / totalSteps;
    const lngStep = (toCoords[1] - fromCoords[1]) / totalSteps;
    
    let currentStep = 0;
    
    const animationInterval = setInterval(() => {
      currentStep++;
      const currentLat = fromCoords[0] + (latStep * currentStep);
      const currentLng = fromCoords[1] + (lngStep * currentStep);
      
      // Update aircraft position
      aircraftMarker.setLatLng([currentLat, currentLng]);
      
      // Rotate aircraft to face direction of travel
      const aircraftIcon = aircraftMarker.getElement();
      if (aircraftIcon) {
        const iconDiv = aircraftIcon.querySelector('.aircraft-icon');
        if (iconDiv) {
          iconDiv.style.transform = `rotate(${angle + 90}deg)`;
        }
      }
      
      if (currentStep >= totalSteps) {
        clearInterval(animationInterval);
        // Remove flight path after animation completes
        setTimeout(() => {
          if (currentFlightLine) {
            map.removeLayer(currentFlightLine);
            currentFlightLine = null;
          }
        }, 1000);
        resolve();
      }
    }, 33); // ~30 FPS
  });
}

function speak(text, onEnd = null) {
  console.log("Speaking:", text);
  const plainText = text.replace(/<[^>]*>/g, "");
  const utter = new SpeechSynthesisUtterance(plainText);

  const voices = window.speechSynthesis.getVoices();
  utter.voice = voices.find(v => v.name === "Google UK English Female");

  utter.pitch = 1.2;
  utter.rate = 0.90;

  // 👉 Call onEnd after speaking finishes
  if (onEnd) {
    utter.onend = onEnd;
  }

  speechSynthesis.speak(utter);
}




function findNextPlace(startChar) {
  const options = places.filter((p) => p.startsWith(startChar) && !used.includes(p));
  if (options.length === 0) return null;
  return options[Math.floor(Math.random() * options.length)];
}


async function isValidPlace(place, expectedStart) {
  place = place.toLowerCase();
  if (expectedStart && !place.startsWith(expectedStart)) return false;
  if (places.includes(place) && !used.includes(place)) return true;

  try {
    const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(place)}`);
    const data = await res.json();
    return data.length > 0;
  } catch {
    return false;
  }
}

recognition.onresult = (event) => {
  clearTimeout(listenTimeout);
  isListening = false;
  speakBtn.classList.remove("listening");
    const transcript = event.results[0][0].transcript.toLowerCase().trim();
  const capitalized = capitalize(transcript);
  userText.textContent = capitalized;

  const userLastChar = transcript.slice(-1);
  recognition.onstart = () => {
  speakBtn.classList.add("listening");
};

recognition.onend = () => {
   if (isListening) {
    recognition.start();
  }
    speakBtn.classList.remove("listening");
};

recognition.onerror = (e) => {
  speakBtn.classList.remove("listening");
  statusDiv.textContent = "🎤 Error: " + e.error;
};


  isValidPlace(transcript, lastLetter).then(async (valid) => {
    if (!valid) {
  statusDiv.textContent = "❌ Couldn't find the place you mentioned. Try again!";
  speak("I couldn't find the place you mentioned. Try again!");
  return;
}

if (used.includes(transcript)) {
  statusDiv.textContent = "⚠️ This place has already been mentioned. Try a new one!";
  speak("This place has already been mentioned. Try a new one!");
  return;
}


    used.push(transcript);
    const userCountryCode = await showOnMap(transcript);
    userText.innerHTML = getFlagImg(userCountryCode) + capitalized;

    const aiPlace = findNextPlace(userLastChar);
    if (!aiPlace) {
      statusDiv.textContent = "🎉 You win! I can't think of a place.";
      speak("You win! I can't think of a place.");
      speakBtn.disabled = true;
      score += 1;
      document.getElementById("score").textContent = score;
      return;
    }

    used.push(aiPlace);
    const aiCapitalized = capitalize(aiPlace);
    const aiLastLetter = aiPlace.slice(-1);

    statusDiv.textContent = `🤔 Thinking...`;
    speak(`Okay... let me think of a place starting with ${userLastChar.toUpperCase()}`);

    setTimeout(async () => {
      const aiCountryCode = await showOnMap(aiPlace);
      aiText.innerHTML = getFlagImg(aiCountryCode) + aiCapitalized;
      speak(`My turn. ${aiCapitalized}`);

      score += 1;
      document.getElementById("score").textContent = score;

      lastLetter = aiLastLetter;
        await new Promise((resolve) => setTimeout(resolve, 1500)); // 1.5 second delay
          const yourTurnText = `Your turn! Say a place starting with ${lastLetter.toUpperCase()}`;
    statusDiv.textContent = `🎤 ${yourTurnText}`;
    speak(yourTurnText,() => {
      // Auto-click the Speak button to start listening
      //speakBtn.classList.add("listening")
      speakBtn.click();
    });

      //statusDiv.textContent = `🎤 Your turn! Say a place starting with ${lastLetter.toUpperCase()}`;
    }, 2500);
  });
};

recognition.onerror = (e) => {
  statusDiv.textContent = "🎤 Error: " + e.error;
};

speakBtn.addEventListener("click", () => {
  clearTimeout(listenTimeout);
  isListening = true;
  speakBtn.classList.add("listening");

  statusDiv.textContent = lastLetter
    ? `🎤 Your turn! Say a place starting with ${lastLetter.toUpperCase()}`
    : "🎤 Say a place to start!";

  recognition.start();

  // custom timeout 30 seconds
  listenTimeout = setTimeout(() => {
    if (isListening) {
      recognition.stop();
      isListening = false;
      speakBtn.classList.remove("listening");
      statusDiv.textContent = "⏳ Listening timed out. Tap the mic to try again!";
    }
  }, 30000);
});



function resetGame() {
  used = [];
  lastLetter = null;
  score = 0;
  userText.textContent = "-";
  aiText.textContent = "-";
  statusDiv.textContent = "🎤 Say a place to start!";
  document.getElementById("score").textContent = "0";
  speakBtn.disabled = false;
  
  // Clear flight path and aircraft
  if (currentFlightLine) {
    map.removeLayer(currentFlightLine);
    currentFlightLine = null;
  }
  
  if (aircraftMarker) {
    map.removeLayer(aircraftMarker);
    aircraftMarker = null;
  }
  
  previousCoords = null;
  
  if (marker) {
    map.removeLayer(marker);
    marker = null;
  }
  
  // Reset map view
  map.setView([20, 0], 2);
}

resetGame();