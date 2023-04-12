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


const config = {
    type:'line',
    data: data1,
}

const config2 = {
    type:'bar',
    data: data2,
}

new Chart(document.getElementById("js--chart--1"), config);
new Chart(document.getElementById("js--chart--2"), config2);