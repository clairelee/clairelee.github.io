var md = new MobileDetect(window.navigator.userAgent);
if(!md.phone()) {
    document.getElementById("main").innerHTML = "This site only works on phones";
}

var pixelRatio = window.devicePixelRatio || 1;
var width = screen.width * pixelRatio;
var height = screen.height * pixelRatio;
var headerHeight = height * 0.27;
var bodyHeight = height * 0.57;
var timeHeight = bodyHeight / 10;
var timeWidth = Math.floor(timeHeight * 0.8);
var timeCenter = timeWidth / 2;
var blockOutline = 2;
var bodyWidth = width - timeWidth - (blockOutline / 2);
var stages = 6;
var blockWidthDefault = bodyWidth / stages;
var footerHeight = height - (headerHeight + bodyHeight);

// colors
var bgColor = "#333";
var gridColor = "#fff";
var labelColor = "000";

var blue = "#2596ff";
var purple = "#a700e5";
var green = "#17e202";
var pink = "#e5008e";
var orange = "#ff8c25";
var red = "#ff4545";
var waterColor = "#5ae6fe";

function Artist(name, stage, start, end) {
  //constructor(name, stage, start, end) {
    this.name = name.toUpperCase();
    this.startTime = start;
    this.endTime = end;
    switch (stage) {
        case "kineticField":
            this.stageNum = 0;
            this.stageColor = blue;
            break;
        case "cosmicMeadow":
            this.stageNum = 1;
            this.stageColor = orange;
            break;
        case "circuitGrounds":
            this.stageNum = 2;
            this.stageColor = purple;
            break;
        case "neonGarden":
            this.stageNum = 3;
            this.stageColor = pink;
            break;
        case "bassPod":
            this.stageNum = 4;
            this.stageColor = green;
            break;
        case "others":
            this.stageNum = 5;
            this.stageColor = red;
        default:
    }
    this.stage = stage;
    var startDec = start.split(":");
    var endDec = end.split(":");
    this.start = parseInt(startDec[0]) + (parseInt(startDec[1]) / 60) - 1;
    this.duration = parseInt(endDec[0]) + (parseInt(endDec[1]) / 60) - 1 - this.start;
  //}
}
var artists;

function friday() {
  artists = [
    new Artist("Dombresky", "kineticField", "7:00", "8:13"),
    new Artist("Firebeatz vs. DubVision", "kineticField", "8:13", "9:25"),
    new Artist("JOYRYDE", "kineticField", "9:25", "10:37"),
    new Artist("kineticFIELD Opening Ceremony", "kineticField", "10:37", "10:43"),
    new Artist("Dimitri Vegas & Like Mike", "kineticField", "10:43", "11:55"),
    new Artist("kineticFIELD Ceremony: Intermezzo Greece", "kineticField", "11:55", "11:58"),
    new Artist("Kaskade", "kineticField", "11:58", "1:25"),
    new Artist("Fireworks / kineticFIELD Ceremony: Intermezzo Asia", "kineticField", "1:25", "1:35"),
    new Artist("Diplo", "kineticField", "1:35", "3:02"),
    new Artist("kineticFIELD Ceremony: Intermezzo Sci-Fi Egypt", "kineticField", "3:02", "3:04"),
    new Artist("Slushii", "kineticField", "3:04", "4:16"),
    new Artist("kineticFIELD Ceremony: Intermezzo Middle East", "kineticField", "4:16", "4:18"),
    new Artist("Alan Walker", "kineticField", "4:18", "5:30"),
    new Artist("Adin", "cosmicMeadow", "4:00", "5:00"),
    new Artist("Chris Lake b2b Chris Lorenzo", "cosmicMeadow", "5:00", "6:45"),
    new Artist("Parker", "cosmicMeadow", "7:00", "8:00"),
    new Artist("GG Magree", "cosmicMeadow", "8:00", "9:00"),
    new Artist("Whethan", "cosmicMeadow", "9:00", "10:00"),
    new Artist("Mike WiLL Made-It", "cosmicMeadow", "10:00", "11:00"),
    new Artist("Jai Wolf", "cosmicMeadow", "11:00", "12:00"),
    new Artist("San Holo", "cosmicMeadow", "12:00", "1:00"),
    new Artist("Snails", "cosmicMeadow", "1:00", "2:00"),
    new Artist("Borgore", "cosmicMeadow", "2:00", "3:00"),
    new Artist("Loudpvck", "cosmicMeadow", "3:15", "4:15"),
    new Artist("Getter", "cosmicMeadow", "4:15", "5:30"),
    new Artist("Robotaki", "circuitGrounds", "7:00", "8:30"),
    new Artist("Lost Frequencies", "circuitGrounds", "8:30", "9:45"),
    new Artist("Gryffin (DJ Set)", "circuitGrounds", "9:45", "10:45"),
    new Artist("Claude VonStroke", "circuitGrounds", "10:45", "12:00"),
    new Artist("Virtual Self", "circuitGrounds", "12:00", "1:30"),
    new Artist("NGHTMRE & Slander present Gud Vibrations", "circuitGrounds", "1:30", "3"),
    new Artist("Excision", "circuitGrounds", "3:00", "4:15"),
    new Artist("Mija", "circuitGrounds", "4:15", "5:30"),
    new Artist("Shmitty B2B No Requests", "neonGarden", "7:00", "8:00"),
    new Artist("Lauren Lane", "neonGarden", "8:00", "9:15"),
    new Artist("Latmun", "neonGarden", "9:15", "10:30"),
    new Artist("Lee Foss", "neonGarden", "10:30", "12:00"),
    new Artist("Hot Since 82", "neonGarden", "12:00", "2:00"),
    new Artist("Jamie Jones", "neonGarden", "2:00", "4:00"),
    new Artist("Cirez D", "neonGarden", "4:00", "5:30"),
    new Artist("Fury B2B Fallen", "bassPod", "7:00", "8:30"),
    new Artist("Ivy Lab", "bassPod", "8:30", "9:30"),
    new Artist("Yheti B2B Toadface", "bassPod", "9:30", "10:30"),
    new Artist("Calyx & TeeBee B2B Break", "bassPod", "10:30", "11:30"),
    new Artist("Boogie T B2B Squnto", "bassPod", "11:30", "12:30am"),
    new Artist("Herobust", "bassPod", "12:30am", "1:30"),
    new Artist("G Jones B2B Eprom", "bassPod", "1:30", "2:30"),
    new Artist("Flux Pavilion B2B Doctor P", "bassPod", "2:30", "3:30"),
    new Artist("Pendulum (DJ Set)", "bassPod", "3:30", "4:30"),
    new Artist("Eptic", "bassPod", "4:30", "5:30")
  ];
    loadBG();
}

function saturday() {
    artists = [
      new Artist("Dombresky", "kineticField", "7:00", "8:13"),
      new Artist("Firebeatz vs. DubVision", "kineticField", "8:13", "9:25"),
      new Artist("JOYRYDE", "kineticField", "9:25", "10:37"),
      new Artist("kineticFIELD Opening Ceremony", "kineticField", "10:37", "10:43"),
      new Artist("Dimitri Vegas & Like Mike", "kineticField", "10:43", "11:55"),
      new Artist("kineticFIELD Ceremony: Intermezzo Greece", "kineticField", "11:55", "11:58"),
      new Artist("Kaskade", "kineticField", "11:58", "1:25"),
      new Artist("Fireworks / kineticFIELD Ceremony: Intermezzo Asia", "kineticField", "1:25", "1:35"),
      new Artist("Diplo", "kineticField", "1:35", "3:02"),
      new Artist("kineticFIELD Ceremony: Intermezzo Sci-Fi Egypt", "kineticField", "3:02", "3:04"),
      new Artist("Slushii", "kineticField", "3:04", "4:16"),
      new Artist("kineticFIELD Ceremony: Intermezzo Middle East", "kineticField", "4:16", "4:18"),
      new Artist("Alan Walker", "kineticField", "4:18", "5:30"),
      new Artist("Adin", "cosmicMeadow", "4:00", "5:00"),
      new Artist("Chris Lake b2b Chris Lorenzo", "cosmicMeadow", "5:00", "6:45"),
      new Artist("Parker", "cosmicMeadow", "7:00", "8:00"),
      new Artist("GG Magree", "cosmicMeadow", "8:00", "9:00"),
      new Artist("Whethan", "cosmicMeadow", "9:00", "10:00"),
      new Artist("Mike WiLL Made-It", "cosmicMeadow", "10:00", "11:00"),
      new Artist("Jai Wolf", "cosmicMeadow", "11:00", "12:00"),
      new Artist("San Holo", "cosmicMeadow", "12:00", "1:00"),
      new Artist("Snails", "cosmicMeadow", "1:00", "2:00"),
      new Artist("Borgore", "cosmicMeadow", "2:00", "3:00"),
      new Artist("Loudpvck", "cosmicMeadow", "3:15", "4:15"),
      new Artist("Getter", "cosmicMeadow", "4:15", "5:30"),
      new Artist("Robotaki", "circuitGrounds", "7:00", "8:30"),
      new Artist("Lost Frequencies", "circuitGrounds", "8:30", "9:45"),
      new Artist("Gryffin (DJ Set)", "circuitGrounds", "9:45", "10:45"),
      new Artist("Claude VonStroke", "circuitGrounds", "10:45", "12:00"),
      new Artist("Virtual Self", "circuitGrounds", "12:00", "1:30"),
      new Artist("NGHTMRE & Slander present Gud Vibrations", "circuitGrounds", "1:30", "3"),
      new Artist("Excision", "circuitGrounds", "3:00", "4:15"),
      new Artist("Mija", "circuitGrounds", "4:15", "5:30"),
      new Artist("Shmitty B2B No Requests", "neonGarden", "7:00", "8:00"),
      new Artist("Lauren Lane", "neonGarden", "8:00", "9:15"),
      new Artist("Latmun", "neonGarden", "9:15", "10:30"),
      new Artist("Lee Foss", "neonGarden", "10:30", "12:00"),
      new Artist("Hot Since 82", "neonGarden", "12:00", "2:00"),
      new Artist("Jamie Jones", "neonGarden", "2:00", "4:00"),
      new Artist("Cirez D", "neonGarden", "4:00", "5:30"),
      new Artist("Fury B2B Fallen", "bassPod", "7:00", "8:30"),
      new Artist("Ivy Lab", "bassPod", "8:30", "9:30"),
      new Artist("Yheti B2B Toadface", "bassPod", "9:30", "10:30"),
      new Artist("Calyx & TeeBee B2B Break", "bassPod", "10:30", "11:30"),
      new Artist("Boogie T B2B Squnto", "bassPod", "11:30", "12:30am"),
      new Artist("Herobust", "bassPod", "12:30am", "1:30"),
      new Artist("G Jones B2B Eprom", "bassPod", "1:30", "2:30"),
      new Artist("Flux Pavilion B2B Doctor P", "bassPod", "2:30", "3:30"),
      new Artist("Pendulum (DJ Set)", "bassPod", "3:30", "4:30"),
      new Artist("Eptic", "bassPod", "4:30", "5:30")
    ];

    loadBG();
}

function sunday() {
    artists = [
      new Artist("Dombresky", "kineticField", "7:00", "8:13"),
      new Artist("Firebeatz vs. DubVision", "kineticField", "8:13", "9:25"),
      new Artist("JOYRYDE", "kineticField", "9:25", "10:37"),
      new Artist("kineticFIELD Opening Ceremony", "kineticField", "10:37", "10:43"),
      new Artist("Dimitri Vegas & Like Mike", "kineticField", "10:43", "11:55"),
      new Artist("kineticFIELD Ceremony: Intermezzo Greece", "kineticField", "11:55", "11:58"),
      new Artist("Kaskade", "kineticField", "11:58", "1:25"),
      new Artist("Fireworks / kineticFIELD Ceremony: Intermezzo Asia", "kineticField", "1:25", "1:35"),
      new Artist("Diplo", "kineticField", "1:35", "3:02"),
      new Artist("kineticFIELD Ceremony: Intermezzo Sci-Fi Egypt", "kineticField", "3:02", "3:04"),
      new Artist("Slushii", "kineticField", "3:04", "4:16"),
      new Artist("kineticFIELD Ceremony: Intermezzo Middle East", "kineticField", "4:16", "4:18"),
      new Artist("Alan Walker", "kineticField", "4:18", "5:30"),
      new Artist("Adin", "cosmicMeadow", "4:00", "5:00"),
      new Artist("Chris Lake b2b Chris Lorenzo", "cosmicMeadow", "5:00", "6:45"),
      new Artist("Parker", "cosmicMeadow", "7:00", "8:00"),
      new Artist("GG Magree", "cosmicMeadow", "8:00", "9:00"),
      new Artist("Whethan", "cosmicMeadow", "9:00", "10:00"),
      new Artist("Mike WiLL Made-It", "cosmicMeadow", "10:00", "11:00"),
      new Artist("Jai Wolf", "cosmicMeadow", "11:00", "12:00"),
      new Artist("San Holo", "cosmicMeadow", "12:00", "1:00"),
      new Artist("Snails", "cosmicMeadow", "1:00", "2:00"),
      new Artist("Borgore", "cosmicMeadow", "2:00", "3:00"),
      new Artist("Loudpvck", "cosmicMeadow", "3:15", "4:15"),
      new Artist("Getter", "cosmicMeadow", "4:15", "5:30"),
      new Artist("Robotaki", "circuitGrounds", "7:00", "8:30"),
      new Artist("Lost Frequencies", "circuitGrounds", "8:30", "9:45"),
      new Artist("Gryffin (DJ Set)", "circuitGrounds", "9:45", "10:45"),
      new Artist("Claude VonStroke", "circuitGrounds", "10:45", "12:00"),
      new Artist("Virtual Self", "circuitGrounds", "12:00", "1:30"),
      new Artist("NGHTMRE & Slander present Gud Vibrations", "circuitGrounds", "1:30", "3"),
      new Artist("Excision", "circuitGrounds", "3:00", "4:15"),
      new Artist("Mija", "circuitGrounds", "4:15", "5:30"),
      new Artist("Shmitty B2B No Requests", "neonGarden", "7:00", "8:00"),
      new Artist("Lauren Lane", "neonGarden", "8:00", "9:15"),
      new Artist("Latmun", "neonGarden", "9:15", "10:30"),
      new Artist("Lee Foss", "neonGarden", "10:30", "12:00"),
      new Artist("Hot Since 82", "neonGarden", "12:00", "2:00"),
      new Artist("Jamie Jones", "neonGarden", "2:00", "4:00"),
      new Artist("Cirez D", "neonGarden", "4:00", "5:30"),
      new Artist("Fury B2B Fallen", "bassPod", "7:00", "8:30"),
      new Artist("Ivy Lab", "bassPod", "8:30", "9:30"),
      new Artist("Yheti B2B Toadface", "bassPod", "9:30", "10:30"),
      new Artist("Calyx & TeeBee B2B Break", "bassPod", "10:30", "11:30"),
      new Artist("Boogie T B2B Squnto", "bassPod", "11:30", "12:30am"),
      new Artist("Herobust", "bassPod", "12:30am", "1:30"),
      new Artist("G Jones B2B Eprom", "bassPod", "1:30", "2:30"),
      new Artist("Flux Pavilion B2B Doctor P", "bassPod", "2:30", "3:30"),
      new Artist("Pendulum (DJ Set)", "bassPod", "3:30", "4:30"),
      new Artist("Eptic", "bassPod", "4:30", "5:30")
    ];

    loadBG();
}

var map = new Image();
var bg = new Image();
function loadBG() {
    bg.onload = function() {
        loadMap();
    };
    bg.src = "./bg.jpg";
}
function loadMap() {

    map.onload = function() {
        magic();
    };
    map.src = "./map-15p.png";
}

function magic() {
    var output = document.getElementById("out");
    var canvas = document.getElementById("canvas");
    var c = canvas.getContext("2d");
    canvas.setAttribute("width", width);
    canvas.setAttribute("height", height);

    // TOOLS------------------
    // fillRect(x,y,width,height)

    // wallpaper bg
    c.fillStyle = bgColor;
    c.fillRect(0,0,width,height);
    var bgRatio = 1440/2560;
    var bgWidth = height * bgRatio;
    c.drawImage(bg, 0, 0, bgWidth, height);


    // body section-------------
    //c.fillStyle = "#FF0000";
    //c.fillRect(0,headerHeight,width,bodyHeight);
    // set up time grid
    c.lineWidth = 2;
    c.textBaseline="middle";
    c.textAlign="center";
    c.fillStyle = gridColor;
    c.strokeStyle = gridColor;
    var timeFontSize = Math.floor(timeHeight) / 2;
    c.font= timeFontSize + "px Stellar";
    for(var i = 0; i < 11; i++) {
        var currentY = headerHeight + timeHeight * i;
        // x, y
        c.beginPath();
        c.moveTo(timeWidth - 8, currentY);
        c.lineTo(width, currentY);
        c.stroke();

        // left of time
        c.beginPath();
        c.moveTo(0, currentY);
        c.lineTo(8, currentY);
        c.stroke();

        c.fillText((i + 1), timeCenter, currentY);
    }
    c.font = "bold 0px Stellar";
    c.lineWidth = blockOutline;
    c.strokeStyle = "#000";
    // artist blocks
    for(var i = 0; i < artists.length; i++) {
        //console.log(artists[i].name);
        c.fillStyle = artists[i].stageColor;
        var blockX = timeWidth + blockWidthDefault * artists[i].stageNum;
        var blockY = headerHeight + timeHeight * artists[i].start;
        var blockHeight = timeHeight * artists[i].duration;
        c.fillRect(blockX, blockY, blockWidthDefault, blockHeight);
        c.strokeRect(blockX, blockY, blockWidthDefault, blockHeight);
        //c.globalAlpha = 0.6;
        c.fillStyle = gridColor;
        var nameSize = Math.min(1.6 * blockWidthDefault / artists[i].name.length, blockHeight * 0.6);
        var nameTopPad = nameSize * 0.1;
        c.font = nameSize + "px Stellar";
        c.textBaseline="middle";
        c.fillText(artists[i].name, blockX + blockWidthDefault / 2, nameTopPad + blockY + blockHeight / 2);
        //c.globalAlpha = 1;

        c.textBaseline="bottom";
        c.font = "16px Stellar";
        if(blockHeight < 45) {
            c.font = "12px Stellar";
            if(blockHeight < 30) {
                c.font = "6px Stellar";
            }
        }
        c.fillText(artists[i].startTime + " - " + artists[i].endTime, blockX + blockWidthDefault / 2, blockY + blockHeight);
    }

    // time grid overlay
    c.strokeStyle = "#fff";
    c.globalAlpha = 0.2;
    for(var i = 0; i < 11; i++) {
        var currentY = headerHeight + timeHeight * i;
        // x, y
        c.beginPath();
        c.moveTo(timeWidth, currentY);
        c.lineTo(width, currentY);
        c.stroke();
    }
    c.globalAlpha = 1;

    // map
    var mapRatio = 176/202;
    var mapHeight, mapWidth;
    var mapHeight1 = height * 0.15;
    var mapWidth1 = mapHeight1 * mapRatio;
    //console.log(mapHeight1 + " x " + mapWidth1);
    var mapWidth2 = (width - 400) / 2;
    var mapHeight2 = mapWidth2 / mapRatio;
    //console.log(mapHeight2 + " x " + mapWidth2);
    //console.log((mapHeight1 / 202) + " vs. " + (mapWidth2 / 176));
    if (mapHeight1 / 202 < mapWidth2 / 176) {
        mapHeight = mapHeight1;
        mapWidth = mapWidth1;
    }
    else {
        mapHeight = mapHeight2;
        mapWidth = mapWidth2;
    }
    var statusBarPadding = 40;
    var mapY = statusBarPadding + (headerHeight - mapHeight) / 2;
    var mapX = width - mapWidth - 4;
    c.drawImage(map, mapX, mapY, mapWidth, mapHeight);

    c.textBaseline = "top";
    c.font = "bold 26px Stellar";
    // index
    c.textAlign="left";
    c.fillStyle = waterColor;
    c.fillText("WATER", mapX + 42, mapY - 38);
    c.beginPath();
    c.arc(mapX + 28, mapY - 34 + 8, 8, 0, 2 * Math.PI);
    c.fill();

    // stage labels
    c.textAlign = "center";
    c.fillStyle = blue;
    // c.fillRect(10, mapY + (mapHeight / 3) + 5, 15, 15);
    // c.fillText("HARD", 30, mapY + (mapHeight / 3));
    c.fillText("HARD", timeWidth + blockWidthDefault * 0 + blockWidthDefault / 2, height - footerHeight + 8);

    c.fillStyle = orange;
    // c.fillRect(10, mapY + 35 + (mapHeight / 3), 15, 15);
    // c.fillText("HARDER", 30, mapY + 30 + (mapHeight / 3));
    c.fillText("HARDER", timeWidth + blockWidthDefault * 1 + blockWidthDefault / 2, height - footerHeight + 8);

    c.fillStyle = purple;
    c.fillText("PURPLE", timeWidth + blockWidthDefault * 2 + blockWidthDefault / 2, height - footerHeight + 8);

    c.fillStyle = pink;
    c.fillText("PINK", timeWidth + blockWidthDefault * 3 + blockWidthDefault / 2, height - footerHeight + 8);

    c.fillStyle = green;
    c.fillText("GREEN", timeWidth + blockWidthDefault * 4 + blockWidthDefault / 2, height - footerHeight + 8);

    c.fillStyle = red;
    c.fillText("SMIRNOFF", timeWidth + blockWidthDefault * 5 + blockWidthDefault / 2, height - footerHeight + 8);

    // @aurnik
    c.textAlign="center";
    c.textBaseline="alphabetic";
    c.fillStyle = gridColor;
    c.font = "20px Stellar";
    c.fillText("@aurnik", width / 2, height * 0.97);

    out.src = canvas.toDataURL();
    document.getElementById("daySelect").remove();
    document.getElementById("overlay").className += "on";
};
