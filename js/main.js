const labels1 = [
    "radio",
    "laptop",
    "oven",
    "wasmachine",
    "Kagel",
    "PC",
    "air pods"
];

const labels2 = [
    "Playstation 3",
    "Nintendo DS",
    "Playstation 4",
    "Computer",
    "Xbox",
];

const labels3 = [
    "januari",
    "februari",
    "maart",
    "april",
    "mei",
    "juni"
];


const data1 = {
    labels: labels2,
    datasets: [{
      label: 'Most played console in days',
      backgroundColor: 'rgb(0, 0, 0)',
      borderColor: 'rgb(255, 99, 132)',
      data: [20, 10, 35, 45, 3,],
    }]
  };



const data2 = {
    labels: labels1,
    datasets:[
        {
            label: "Energie verbruik van apparaten in de week",
            data: [125, 165, 250, 325, 350, 175, 50 ],
            backgroundColors: ['#FF6B6B','#FFD93D','#6BCB77','#4D96FF','#F473B9']
        }
    ]
}

const config1 = {
    type:'line',
    data: data1,
}

const config2 = {
    type:'bar',
    data: data2,
}

new Chart(document.getElementById("js--chart--1"), config1);
new Chart(document.getElementById("js--chart--2"), config2);


function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var d = today.getDate();
    var y = today.getFullYear();
    var month = today.getMonth() + 1;
    h = checkTime(h);
    m = checkTime(m);
    document.getElementById("js--time").innerHTML = h + ":" + m;
    document.getElementById("js--day").innerHTML = d + "-" + month + "-" + y;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}