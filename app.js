/* ===== DATA ===== */
var posts = [
  {
    id: 1, loc: "Deutschland 1945", time: "Vor 3 Stunden", likes: 2847,
    emoji: "&#127962;", bg: "#0d0d0d",
    cap: "<strong>literatur_nach45</strong> Der 8. Mai 1945 markiert das Ende des Zweiten Weltkriegs und fuer die deutsche Literatur den Beginn eines voellig neuen Kapitels. Man nannte es die <strong>Stunde Null</strong>: ein totaler Neuanfang. <span class='hh'>#stundenull #literatur1945 #deutschegeschichte #neuanfang #abitur</span>",
    html: "<div class='pii is' style='position:relative;width:100%;height:100%;'><div class='yr'>1945</div><div class='cnt'><div class='bar'></div><h2>Die Stunde Null</h2><div class='dt'>8. Mai 1945</div><p>Deutschland kapitulierte bedingungslos. Staedte in Truemmern. Millionen Tote. Und trotzdem begann etwas Neues.</p></div></div>"
  },
  {
    id: 2, loc: "Deutschland 1945-1950", time: "Vor 1 Tag", likes: 1503,
    emoji: "&#128221;", bg: "#d4c9b5",
    cap: "<strong>literatur_nach45</strong> Die <strong>Truemmerliteratur</strong> ist die erste grosse literarische Bewegung nach dem Krieg. Kurz. Direkt. Ehrlich. <span class='hh'>#truemmerliteratur #literaturgeschichte #deutschunterricht #kurzgeschichte</span>",
    html: "<div class='pii it' style='width:100%;height:100%;flex-direction:column;'><div class='inner'><h2>Was ist Truemmerliteratur?</h2><div class='mk'><div class='mkd'></div><p><strong>Sprache:</strong> Kurze Saetze, karg, nuechtern, keine Ornamente</p></div><div class='mk'><div class='mkd'></div><p><strong>Themen:</strong> Ruinen, Heimkehr, Schuld, Verlust, Trauma</p></div><div class='mk'><div class='mkd'></div><p><strong>Form:</strong> Kurzgeschichte, Kurzprosa, Hoerspiel</p></div><div class='mk'><div class='mkd'></div><p><strong>Zeitraum:</strong> ca. 1945 bis 1950</p></div><div class='mk'><div class='mkd'></div><p><strong>Hintergrund:</strong> Abkehr von der NS-Sprache, bewusst und radikal</p></div></div></div>"
  },
  {
    id: 3, loc: "Hamburg", time: "Vor 2 Tagen", likes: 4219,
    emoji: "&#9997;", bg: "#1a0a00",
    cap: "<strong>literatur_nach45</strong> <strong>Wolfgang Borchert</strong> - trotz nur 26 Lebensjahren hinterliess er Werke wie Draussen vor der Tuer und Nachts schlafen die Ratten doch, die bis heute Pflichtlektuere sind. <span class='hh'>#borchert #truemmerliteratur #deutsch</span>",
    html: "<div class='pii ib' style='width:100%;height:100%;'><div class='ph'>&#9997;</div><h2>Wolfgang Borchert</h2><div class='yrs'>1921 - 1947</div><div class='qt'>Wir sind die Generation ohne Abschluss und ohne Tiefe. Er starb mit 26 Jahren - einen Tag vor der Urauffuehrung seines Stuecks.</div></div>"
  },
  {
    id: 4, loc: "Koeln", time: "Vor 3 Tagen", likes: 3108,
    emoji: "&#127894;", bg: "#0a1a0a",
    cap: "<strong>literatur_nach45</strong> <strong>Heinrich Boell</strong> - Nobelpreistraeger 1972. Er schrieb gegen das Vergessen und gegen die Selbstgefaelligkeit der Wirtschaftswundergesellschaft. <span class='hh'>#heinrichboell #nobelpreis #gruppe47 #deutscheliteratur</span>",
    html: "<div class='pii ibo' style='width:100%;height:100%;'><div class='ph'>&#127894;</div><h2>Heinrich Boell</h2><div class='yrs'>1917 - 1985</div><div class='tags'><span class='tg'>Nobelpreis 1972</span><span class='tg'>Gruppe 47</span><span class='tg'>Kriegskritik</span></div><div class='qt'>Der Zug war puenktlich (1949), Wo warst du Adam? - Boell schrieb ueber Krieg, Moral und die BRD.</div></div>"
  },
  {
    id: 5, loc: "Deutschland 1947-1967", time: "Vor 4 Tagen", likes: 2091,
    emoji: "&#128101;", bg: "#1C1E2D",
    cap: "<strong>literatur_nach45</strong> Kein Verein. Kein Manifest. Keine Mitgliedsliste. Und trotzdem das einflussreichste Netzwerk der deutschen Nachkriegsliteratur: die <strong>Gruppe 47</strong>. <span class='hh'>#gruppe47 #hanswernerrichter #guentergrass #ingeborgbachmann</span>",
    html: "<div class='pii ig' style='width:100%;height:100%;'><h2>Die Gruppe 47</h2><div class='sub'>Gegruendet von Hans Werner Richter</div><div class='mgrid'><div class='mg'><div class='mg-n'>Guenter Grass</div><div class='mg-s'>Nobelpreis 1999</div></div><div class='mg'><div class='mg-n'>Heinrich Boell</div><div class='mg-s'>Nobelpreis 1972</div></div><div class='mg'><div class='mg-n'>I. Bachmann</div><div class='mg-s'>Lyrik &amp; Prosa</div></div><div class='mg'><div class='mg-n'>Martin Walser</div><div class='mg-s'>BRD-Kritiker</div></div><div class='mg'><div class='mg-n'>Uwe Johnson</div><div class='mg-s'>DDR / Exil</div></div><div class='mg'><div class='mg-n'>W. Schnurre</div><div class='mg-s'>Mitgruender</div></div></div></div>"
  },
  {
    id: 6, loc: "Borchert 1947", time: "Vor 5 Tagen", likes: 5774,
    emoji: "&#128196;", bg: "#e0d5c0",
    cap: "<strong>literatur_nach45</strong> Kurze Saetze. Kaum Adjektive. Ein Kind das Truemmer bewacht. Borchert sagt in 200 Woertern mehr ueber den Krieg als manche Romane in 400 Seiten. <span class='hh'>#borchert #kurzgeschichte #textanalyse #deutsch #abitur</span>",
    html: "<div class='pii itp' style='width:100%;height:100%;'><div class='paper'><div class='ptag'>Textauszug - Truemmerliteratur</div><p>Das hohle Fenster des ausgebombten Hauses gaehnte blaurot voll frueher Abendsonne. Staubgewoelke lagen davor. Ausgedoerrt.</p><br><p>Was ist da drin? fragte der Junge.<br>Kaninchen, sagte der Alte.<br>Weisse? fragte der Junge.<br>Auch weisse, antwortete der Alte.</p><div class='pcred'>W. Borchert: Nachts schlafen die Ratten doch (1947)</div></div></div>"
  },
  {
    id: 7, loc: "Quiz", time: "Vor 6 Tagen", likes: 987,
    emoji: "&#129504;", bg: "#5a1212",
    cap: "<strong>literatur_nach45</strong> Habt ihr aufgepasst? Testet euer Wissen! <span class='hh'>#quiz #truemmerliteratur #deutschunterricht</span>",
    html: "<div class='pii iq' style='width:100%;height:100%;flex-direction:column;align-items:flex-start;padding:clamp(14px,3vw,24px);overflow-y:auto;'><div class='qq'>Quiz</div><h2>Was ist das wichtigste Merkmal der Truemmerliteratur?</h2><button class='qo' onclick='quiz(this,false)'>A) Lange, komplexe Satzstrukturen</button><button class='qo' onclick='quiz(this,true)'>B) Kurze, nuechterne Sprache ohne Ornamente</button><button class='qo' onclick='quiz(this,false)'>C) Romantische Naturbeschreibungen</button><button class='qo' onclick='quiz(this,false)'>D) Historische Heldenepen</button></div>"
  }
];

var accounts = {
  borchert: {
    handle: "w_borchert_1947", name: "Wolfgang Borchert", emoji: "&#9997;",
    bg: "linear-gradient(160deg,#1a0a00,#3d1a00)",
    followers: "18.4K", following: "0", posts: "6",
    bio: "Dichter - Hamburg 1921-1947\nDraussen vor der Tuer | Nachts schlafen die Ratten doch\nWir sind die Generation ohne Abschluss und ohne Tiefe.",
    thumbs: ["#1a0a00", "#2a1200", "#3d1a00", "#1a0800", "#2a1000", "#1a0a00"],
    thumbE: ["&#128220;", "&#127962;", "&#128214;", "&#9997;", "&#128316;", "&#128394;"]
  },
  boell: {
    handle: "heinrich_boell", name: "Heinrich Boell", emoji: "&#127894;",
    bg: "linear-gradient(160deg,#0a1a0a,#0f2e1a)",
    followers: "31.2K", following: "3", posts: "12",
    bio: "Schriftsteller - Koeln 1917-1985\nNobelpreis fuer Literatur 1972\nDer Zug war puenktlich | Wo warst du, Adam?\nGruppe 47 - Kritiker der BRD-Gesellschaft",
    thumbs: ["#0a1a0a", "#0f2e1a", "#1a3a1a", "#0a200a", "#0f2a0f", "#1a3010"],
    thumbE: ["&#127894;", "&#128214;", "&#9997;", "&#127942;", "&#128220;", "&#127758;"]
  },
  gruppe47: {
    handle: "gruppe47_official", name: "Die Gruppe 47", emoji: "&#128101;",
    bg: "linear-gradient(135deg,#1C1E2D,#2a2d42)",
    followers: "9.8K", following: "47", posts: "47",
    bio: "1947-1967 - Gegruendet von Hans Werner Richter\nKein Manifest. Keine Mitgliedsliste. Nur Literatur.\nMitglieder: Grass, Boell, Bachmann, Walser, Johnson, Schnurre",
    thumbs: ["#1C1E2D", "#252738", "#1C1E2D", "#2a2d42", "#1C1E2D", "#252738"],
    thumbE: ["&#128101;", "&#9997;", "&#128214;", "&#127917;", "&#128394;", "&#128220;"]
  },
  aichinger: {
    handle: "ilse_aichinger", name: "Ilse Aichinger", emoji: "&#127800;",
    bg: "linear-gradient(160deg,#2d1a2d,#4a1a4a)",
    followers: "7.3K", following: "2", posts: "5",
    bio: "Schriftstellerin - Wien 1921-2016\nDie groessere Hoffnung (1948)\nMitglied der Gruppe 47 - Oesterreichische Stimme der Nachkriegsliteratur",
    thumbs: ["#2d1a2d", "#3d2a3d", "#4a1a4a", "#2d1a2d", "#3a1a3a", "#4a2a4a"],
    thumbE: ["&#127800;", "&#128214;", "&#9997;", "&#128314;", "&#128220;", "&#128394;"]
  },
  schnurre: {
    handle: "wolfdietrich_schnurre", name: "Wolfdietrich Schnurre", emoji: "&#128394;",
    bg: "linear-gradient(160deg,#1a1a0a,#2e2e0f)",
    followers: "4.1K", following: "1", posts: "8",
    bio: "Schriftsteller - Berlin 1920-1989\nMitgruender der Gruppe 47\nMeister der lakonischen Kurzgeschichte",
    thumbs: ["#1a1a0a", "#2e2e0f", "#1a1a0a", "#252500", "#2a2a0a", "#1a1a05"],
    thumbE: ["&#128394;", "&#128214;", "&#127962;", "&#9997;", "&#128220;", "&#128038;"]
  }
};

/* ===== STATE ===== */
var cur = 0;
var liked = {};
var txStart = 0;

/* ===== GRID ===== */
function renderGrid() {
  var g = document.getElementById("grid");
  var html = "";
  for (var i = 0; i < posts.length; i++) {
    var p = posts[i];
    html += '<div class="gi" onclick="openPost(' + i + ')" style="background:' + p.bg + '">';
    // Show actual mini post content inside grid tile
    html += '<div class="mini-content">' + p.html + '</div>';
    html += '<div class="go">';
    html += '<div class="gs"><svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>' + p.likes.toLocaleString("de-DE") + '</div>';
    html += '<div class="gs"><svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>' + Math.floor(p.likes / 12) + '</div>';
    html += '</div></div>';
  }
  g.innerHTML = html;
}

/* ===== POST MODAL ===== */
function openPost(i) {
  cur = i;
  renderPost();
  document.getElementById("postModal").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function renderPost() {
  var p = posts[cur];
  document.getElementById("mimg").innerHTML = p.html + '<div class="swh">&#8592; wischen &#8594;</div>';
  document.getElementById("mloc").textContent = p.loc;
  document.getElementById("mcap").innerHTML = p.cap;
  document.getElementById("mtime").textContent = p.time;
  var l = p.likes + (liked[p.id] ? 1 : 0);
  document.getElementById("mlikes").textContent = l.toLocaleString("de-DE") + " Gefaellt mir";
  document.getElementById("mheart").classList.toggle("liked", !!liked[p.id]);
  document.getElementById("mprev").style.display = cur === 0 ? "none" : "flex";
  document.getElementById("mnext").style.display = cur === posts.length - 1 ? "none" : "flex";

  var imgEl = document.getElementById("mimg");
  imgEl.ontouchstart = function (e) { txStart = e.touches[0].clientX; };
  imgEl.ontouchend = function (e) {
    var dx = e.changedTouches[0].clientX - txStart;
    if (Math.abs(dx) > 50) {
      cur = Math.max(0, Math.min(posts.length - 1, cur + (dx < 0 ? 1 : -1)));
      renderPost();
    }
  };
}

function mnav(d) {
  cur = Math.max(0, Math.min(posts.length - 1, cur + d));
  renderPost();
  return false;
}

function toggleLike() {
  var p = posts[cur];
  liked[p.id] = !liked[p.id];
  var h = document.getElementById("mheart");
  h.classList.toggle("liked", !!liked[p.id]);
  h.classList.add("hpop");
  h.addEventListener("animationend", function () { h.classList.remove("hpop"); }, { once: true });
  document.getElementById("mlikes").textContent = (p.likes + (liked[p.id] ? 1 : 0)).toLocaleString("de-DE") + " Gefaellt mir";
}

function closePost() {
  document.getElementById("postModal").classList.add("hidden");
  document.body.style.overflow = "";
}

function bgCP(e) {
  if (e.target === document.getElementById("postModal")) closePost();
}

/* ===== ACCOUNT MODAL ===== */
function openAcc(key) {
  var a = accounts[key];
  if (!a) return;
  var hd = document.getElementById("accHead");
  hd.style.background = a.bg;
  hd.innerHTML = '<button class="acl" onclick="closeAcc()">&#10005;</button>'
    + '<div class="aab"><div class="aab-in">' + a.emoji + '</div></div>'
    + '<div><div class="ahandle">@' + a.handle + '</div>'
    + '<div class="arname">' + a.name + '</div>'
    + '<div class="astats">'
    + '<div><div class="asn">' + a.posts + '</div><div class="asl">Beitraege</div></div>'
    + '<div><div class="asn">' + a.followers + '</div><div class="asl">Follower</div></div>'
    + '<div><div class="asn">' + a.following + '</div><div class="asl">Gefolgt</div></div>'
    + '</div></div>';

  var thumbHtml = "";
  for (var i = 0; i < a.thumbs.length; i++) {
    thumbHtml += '<div class="apt" style="background:' + a.thumbs[i] + '">' + a.thumbE[i] + '</div>';
  }
  document.getElementById("accBody").innerHTML = '<div class="abio">' + a.bio + '</div>'
    + '<div class="apg">' + thumbHtml + '</div>'
    + '<button class="afbtn" onclick="toggleFollow(this)">Folgen</button>';

  document.getElementById("accModal").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function toggleFollow(btn) {
  btn.classList.toggle("following");
  btn.textContent = btn.classList.contains("following") ? "Gefolgt" : "Folgen";
}

function closeAcc() {
  document.getElementById("accModal").classList.add("hidden");
  document.body.style.overflow = "";
}

function bgCA(e) {
  if (e.target === document.getElementById("accModal")) closeAcc();
}

/* ===== QUIZ ===== */
function quiz(btn, correct) {
  var opts = btn.parentNode.querySelectorAll(".qo");
  for (var i = 0; i < opts.length; i++) {
    opts[i].disabled = true;
    opts[i].style.cursor = "default";
  }
  btn.classList.add(correct ? "correct" : "wrong");
  if (!correct) opts[1].classList.add("correct");
}

/* ===== KEYBOARD ===== */
document.addEventListener("keydown", function (e) {
  if (!document.getElementById("postModal").classList.contains("hidden")) {
    if (e.key === "ArrowLeft") mnav(-1);
    if (e.key === "ArrowRight") mnav(1);
    if (e.key === "Escape") closePost();
  }
  if (!document.getElementById("accModal").classList.contains("hidden") && e.key === "Escape") closeAcc();
});

/* ===== QR CODE GENERATOR ===== */
// Minimal QR code generator for a URL (version 3, ECC L)
// Uses qrcode-generator library loaded via CDN
function generateQR(url, canvasId, size) {
  var canvas = document.getElementById(canvasId);
  if (!canvas) return;
  var ctx = canvas.getContext("2d");
  canvas.width = size;
  canvas.height = size;

  try {
    // Use qrcode library
    var qr = qrcode(0, 'M');
    qr.addData(url);
    qr.make();

    var moduleCount = qr.getModuleCount();
    var cellSize = size / moduleCount;

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, size, size);

    ctx.fillStyle = "#000000";
    for (var row = 0; row < moduleCount; row++) {
      for (var col = 0; col < moduleCount; col++) {
        if (qr.isDark(row, col)) {
          ctx.fillRect(
            Math.floor(col * cellSize),
            Math.floor(row * cellSize),
            Math.ceil(cellSize),
            Math.ceil(cellSize)
          );
        }
      }
    }
  } catch (e) {
    // Fallback: show URL text if library fails
    ctx.fillStyle = "#f5f5f5";
    ctx.fillRect(0, 0, size, size);
    ctx.fillStyle = "#333";
    ctx.font = "9px monospace";
    ctx.textAlign = "center";
    ctx.fillText("QR: " + url, size / 2, size / 2);
  }
}

/* ===== INIT ===== */
document.addEventListener("DOMContentLoaded", function () {
  renderGrid();
  // Generate QR code after qrcode library is ready
  setTimeout(function () {
    generateQR("https://vrpioneerpaul.github.io/Literatur/", "qrCanvas", 128);
  }, 100);
});
