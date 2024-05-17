
const divs = ['generator1'];
let stats = {
    pwr: ExpantaNum(10),
    tps: ExpantaNum(1),
    gen1: {mb: ExpantaNum(0),cur: ExpantaNum(0),cost: ExpantaNum(10),mpwr: ExpantaNum(1),scale: ExpantaNum(10)},
    gen2: {mb: ExpantaNum(0),cur: ExpantaNum(0),cost: ExpantaNum(100),mpwr: ExpantaNum(1),scale: ExpantaNum(100)},
    gen3: {mb: ExpantaNum(0),cur: ExpantaNum(0),cost: ExpantaNum(1000),mpwr: ExpantaNum(1),scale: ExpantaNum(1000)},
    gen4: {mb: ExpantaNum(0),cur: ExpantaNum(0),cost: ExpantaNum(10000),mpwr: ExpantaNum(1),scale: ExpantaNum(10000)},
    gen5: {mb: ExpantaNum(0),cur: ExpantaNum(0),cost: ExpantaNum(100000),mpwr: ExpantaNum(1),scale: ExpantaNum(100000)},
    gen6: {mb: ExpantaNum(0),cur: ExpantaNum(0),cost: ExpantaNum(1000000),mpwr: ExpantaNum(1),scale: ExpantaNum(1000000)},
    gen7: {mb: ExpantaNum(0),cur: ExpantaNum(0),cost: ExpantaNum(10000000),mpwr: ExpantaNum(1),scale: ExpantaNum(10000000)},
    gen8: {mb: ExpantaNum(0),cur: ExpantaNum(0),cost: ExpantaNum(100000000),mpwr: ExpantaNum(1),scale: ExpantaNum(100000000)},
    gen9: {mb: ExpantaNum(0),cur: ExpantaNum(0),cost: ExpantaNum(1000000000),mpwr: ExpantaNum(1),scale: ExpantaNum(1000000000)},
    gen10:{mb: ExpantaNum(0),cur: ExpantaNum(0),cost: ExpantaNum(10000000000),mpwr: ExpantaNum(1),scale: ExpantaNum(10000000000)},
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
    stats.gen2.cur = stats.gen2.cur.add(stats.gen3.cur.mul(stats.gen3.mpwr).div(100));
    stats.gen3.cur = stats.gen3.cur.add(stats.gen4.cur.mul(stats.gen4.mpwr).div(100));
    stats.gen4.cur = stats.gen4.cur.add(stats.gen5.cur.mul(stats.gen5.mpwr).div(100));
    stats.gen5.cur = stats.gen5.cur.add(stats.gen6.cur.mul(stats.gen6.mpwr).div(100));
    stats.gen6.cur = stats.gen6.cur.add(stats.gen7.cur.mul(stats.gen7.mpwr).div(100));
    stats.gen7.cur = stats.gen7.cur.add(stats.gen8.cur.mul(stats.gen8.mpwr).div(100));
    stats.gen8.cur = stats.gen8.cur.add(stats.gen9.cur.mul(stats.gen9.mpwr).div(100));
    stats.gen9.cur = stats.gen9.cur.add(stats.gen10.cur.mul(stats.gen10.mpwr).div(100));
    function updgen(num) {
        const gennum = "gen"+num
        document.getElementById(gennum+"buy").innerText = stats[gennum].cost.toFixed(3);
        document.getElementById(gennum+"mul").innerText = `x ${stats[gennum].mpwr.toFixed(3)}`;
        document.getElementById(gennum+"amt").innerText = stats[gennum].cur.toFixed(3);
        document.getElementById(gennum+"bht").innerText = stats[gennum].mb.toFixed(3)+"/10";
    }
    updgen(1);
    updgen(2);
    updgen(3);
    updgen(4);
    updgen(5);
    updgen(6);
    updgen(7);
    updgen(8);
    updgen(9);
    updgen(10);
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