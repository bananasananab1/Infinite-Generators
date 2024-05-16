
const divs = ['generator1'];
const base = {
    pwr: ExpantaNum(10),
    tps: ExpantaNum(1),
    gen1: {mb: ExpantaNum(0),cur: ExpantaNum(0),cost: ExpantaNum(10),mpwr: ExpantaNum(1),scale: ExpantaNum(10)},
    gen2: {mb: ExpantaNum(0),cur: ExpantaNum(0),cost: ExpantaNum(100),mpwr: ExpantaNum(1),scale: ExpantaNum(100)},
};
let stats = {
    pwr: ExpantaNum(10),
    tps: ExpantaNum(1),
    gen1: {mb: ExpantaNum(0),cur: ExpantaNum(0),cost: ExpantaNum(10),mpwr: ExpantaNum(1),scale: ExpantaNum(10)},
    gen2: {mb: ExpantaNum(0),cur: ExpantaNum(0),cost: ExpantaNum(100),mpwr: ExpantaNum(1),scale: ExpantaNum(100)},
};
let savedData = localStorage.getItem("sav");

if (savedData) {
    try {
        let loadedData = JSON.parse(savedData);
        if (loadedData && typeof loadedData === 'object') {
            Object.keys(loadedData).forEach(key => {
                if (stats.hasOwnProperty(key)) {
                    if (key === 'pwr' || key === 'tps') {
                        stats[key] = ExpantaNum(loadedData[key]);
                    } else if (typeof loadedData[key] === 'object') {
                        Object.keys(loadedData[key]).forEach(subKey => {
                            if (stats[key].hasOwnProperty(subKey)) {
                                stats[key][subKey] = ExpantaNum(loadedData[key][subKey]);
                            }
                        });
                    }
                }
            });
            console.log('Data loaded successfully.');
        } else {
            console.error('Invalid data format in localStorage');
        }
    } catch (error) {
        console.error('Error parsing saved data:', error);
    }
} else {
    console.warn('No saved data found in localStorage');
}

function save() {
    localStorage.setItem("sav", JSON.stringify(stats));
    const saveNotification = document.getElementById('saveNotification');
    saveNotification.style.display = 'block';
    setTimeout(() => {
        saveNotification.style.display = 'none';
    }, 2000);
}
const one = new ExpantaNum(1)
function HideOthers(not_hide) {
    console.log(`All But ${not_hide}`);
    divs.forEach(divName => {
        const divElement = document.getElementById(divName);
        if (divElement) {
            if (divName === not_hide) {
                divElement.style.display = 'block';
            } else {
                divElement.style.display = 'none';
            }
        }
    });
}
function updateall(){
    document.getElementById("pwrdis").innerText = stats.pwr.toFixed(4);
    stats.pwr = stats.pwr.add(stats.gen1.cur.mul(stats.gen1.mpwr.mul(stats.tps)).div(100));
    stats.gen1.cur = stats.gen1.cur.add(stats.gen2.cur.mul(stats.gen2.mpwr).div(100));

    document.getElementById("gen1buy").innerText = stats.gen1.cost.toString();
    document.getElementById("gen1mul").innerText = `x ${stats.gen1.mpwr.toFixed(4)}`;
    document.getElementById("gen1amt").innerText = stats.gen1.cur.toString();
    document.getElementById("gen1bht").innerText = stats.gen1.mb.toString()+"/10";

    document.getElementById("gen2buy").innerText = stats.gen2.cost.toString();
    document.getElementById("gen2mul").innerText = `x ${stats.gen2.mpwr.toFixed(3)}`;
    document.getElementById("gen2amt").innerText = stats.gen2.cur.toString();
    document.getElementById("gen2bht").innerText = stats.gen2.mb.toString()+"/10";
}
function buygen(num){
    const gen = stats['gen'+num]
    if (stats.pwr.gte(gen.cost)){
        stats.pwr = stats.pwr.sub(gen.cost);
        gen.cur = gen.cur.add(1);
        gen.mb = gen.mb.add(1);
        if (gen.mb.gte(10)){
        gen.cost = gen.cost.mul(gen.scale);
        gen.mb = ExpantaNum(0);
        gen.mpwr = gen.mpwr.mul(1.5);
        }
    }
}
setInterval(updateall,10);
setInterval(save,15000)