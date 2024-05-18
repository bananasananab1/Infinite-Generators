
const saveloc = 'dfsgtt';
const divs = ['generators','HypPwr'];
let stats = {
    pwr: ExpantaNum(10),
    tps: ExpantaNum(1),
    HypPwr: ExpantaNum(0), 
    gen1: {mb: ExpantaNum(0),mbt: ExpantaNum(0),cur: ExpantaNum(0),cost: ExpantaNum(10),mpwr: ExpantaNum(1),scale: ExpantaNum(10)},
    gen2: {mb: ExpantaNum(0),mbt: ExpantaNum(0),cur: ExpantaNum(0),cost: ExpantaNum(100),mpwr: ExpantaNum(1),scale: ExpantaNum(100)},
    gen3: {mb: ExpantaNum(0),mbt: ExpantaNum(0),cur: ExpantaNum(0),cost: ExpantaNum(1000),mpwr: ExpantaNum(1),scale: ExpantaNum(1000)},
    gen4: {mb: ExpantaNum(0),mbt: ExpantaNum(0),cur: ExpantaNum(0),cost: ExpantaNum(10000),mpwr: ExpantaNum(1),scale: ExpantaNum(10000)},
    gen5: {mb: ExpantaNum(0),mbt: ExpantaNum(0),cur: ExpantaNum(0),cost: ExpantaNum(100000),mpwr: ExpantaNum(1),scale: ExpantaNum(100000)},
    gen6: {mb: ExpantaNum(0),mbt: ExpantaNum(0),cur: ExpantaNum(0),cost: ExpantaNum(1000000),mpwr: ExpantaNum(1),scale: ExpantaNum(1000000)},
    gen7: {mb: ExpantaNum(0),mbt: ExpantaNum(0),cur: ExpantaNum(0),cost: ExpantaNum(10000000),mpwr: ExpantaNum(1),scale: ExpantaNum(10000000)},
    gen8: {mb: ExpantaNum(0),mbt: ExpantaNum(0),cur: ExpantaNum(0),cost: ExpantaNum(100000000),mpwr: ExpantaNum(1),scale: ExpantaNum(100000000)},
    gen9: {mb: ExpantaNum(0),mbt: ExpantaNum(0),cur: ExpantaNum(0),cost: ExpantaNum(1000000000),mpwr: ExpantaNum(1),scale: ExpantaNum(1000000000)},
    gen10:{mb: ExpantaNum(0),mbt: ExpantaNum(0),cur: ExpantaNum(0),cost: ExpantaNum(10000000000),mpwr: ExpantaNum(1),scale: ExpantaNum(10000000000)},
    HypUpg1: {cur: ExpantaNum(0),cost: ExpantaNum(1),rate: ExpantaNum(0),max: ExpantaNum(15)},
    HypUpg2: {cur: ExpantaNum(0),cost: ExpantaNum(10),rate: ExpantaNum(0),max: ExpantaNum(15)},
    HypUpg3: {cur: ExpantaNum(0),cost: ExpantaNum(100),rate: ExpantaNum(0),max: ExpantaNum(15)},
    HypUpg4: {cur: ExpantaNum(0),cost: ExpantaNum(1000),rate: ExpantaNum(0),max: ExpantaNum(15)},
    HypUpg5: {cur: ExpantaNum(0),cost: ExpantaNum(10000),rate: ExpantaNum(0),max: ExpantaNum(15)},
    HypUpg6: {cur: ExpantaNum(0),cost: ExpantaNum(100000),rate: ExpantaNum(0),max: ExpantaNum(15)},
    HypUpg7: {cur: ExpantaNum(0),cost: ExpantaNum(1000000),rate: ExpantaNum(0),max: ExpantaNum(15)},
    HypUpg8: {cur: ExpantaNum(0),cost: ExpantaNum(10000000),rate: ExpantaNum(0),max: ExpantaNum(15)},
    HypUpg9: {cur: ExpantaNum(0),cost: ExpantaNum(100000000),rate: ExpantaNum(0),max: ExpantaNum(15)},
    HypUpg10: {cur: ExpantaNum(0),cost:ExpantaNum(1000000000),rate: ExpantaNum(0),max: ExpantaNum(15)},
};
const base = {
    pwr: ExpantaNum(10),
    tps: ExpantaNum(1),
    HypPwr: ExpantaNum(0), 
    gen1: {mb: ExpantaNum(0),mbt: ExpantaNum(0),cur: ExpantaNum(0),cost: ExpantaNum(10),mpwr: ExpantaNum(1),scale: ExpantaNum(10)},
    gen2: {mb: ExpantaNum(0),mbt: ExpantaNum(0),cur: ExpantaNum(0),cost: ExpantaNum(100),mpwr: ExpantaNum(1),scale: ExpantaNum(100)},
    gen3: {mb: ExpantaNum(0),mbt: ExpantaNum(0),cur: ExpantaNum(0),cost: ExpantaNum(1000),mpwr: ExpantaNum(1),scale: ExpantaNum(1000)},
    gen4: {mb: ExpantaNum(0),mbt: ExpantaNum(0),cur: ExpantaNum(0),cost: ExpantaNum(10000),mpwr: ExpantaNum(1),scale: ExpantaNum(10000)},
    gen5: {mb: ExpantaNum(0),mbt: ExpantaNum(0),cur: ExpantaNum(0),cost: ExpantaNum(100000),mpwr: ExpantaNum(1),scale: ExpantaNum(100000)},
    gen6: {mb: ExpantaNum(0),mbt: ExpantaNum(0),cur: ExpantaNum(0),cost: ExpantaNum(1000000),mpwr: ExpantaNum(1),scale: ExpantaNum(1000000)},
    gen7: {mb: ExpantaNum(0),mbt: ExpantaNum(0),cur: ExpantaNum(0),cost: ExpantaNum(10000000),mpwr: ExpantaNum(1),scale: ExpantaNum(10000000)},
    gen8: {mb: ExpantaNum(0),mbt: ExpantaNum(0),cur: ExpantaNum(0),cost: ExpantaNum(100000000),mpwr: ExpantaNum(1),scale: ExpantaNum(100000000)},
    gen9: {mb: ExpantaNum(0),mbt: ExpantaNum(0),cur: ExpantaNum(0),cost: ExpantaNum(1000000000),mpwr: ExpantaNum(1),scale: ExpantaNum(1000000000)},
    gen10:{mb: ExpantaNum(0),mbt: ExpantaNum(0),cur: ExpantaNum(0),cost: ExpantaNum(10000000000),mpwr: ExpantaNum(1),scale: ExpantaNum(10000000000)},
    HypUpg1: {cur: ExpantaNum(0),cost: ExpantaNum(1),rate: ExpantaNum(0),max: ExpantaNum(15)},
    HypUpg2: {cur: ExpantaNum(0),cost: ExpantaNum(10),rate: ExpantaNum(0),max: ExpantaNum(15)},
    HypUpg3: {cur: ExpantaNum(0),cost: ExpantaNum(100),rate: ExpantaNum(0),max: ExpantaNum(15)},
    HypUpg4: {cur: ExpantaNum(0),cost: ExpantaNum(1000),rate: ExpantaNum(0),max: ExpantaNum(15)},
    HypUpg5: {cur: ExpantaNum(0),cost: ExpantaNum(10000),rate: ExpantaNum(0),max: ExpantaNum(15)},
    HypUpg6: {cur: ExpantaNum(0),cost: ExpantaNum(100000),rate: ExpantaNum(0),max: ExpantaNum(15)},
    HypUpg7: {cur: ExpantaNum(0),cost: ExpantaNum(1000000),rate: ExpantaNum(0),max: ExpantaNum(15)},
    HypUpg8: {cur: ExpantaNum(0),cost: ExpantaNum(10000000),rate: ExpantaNum(0),max: ExpantaNum(15)},
    HypUpg9: {cur: ExpantaNum(0),cost: ExpantaNum(100000000),rate: ExpantaNum(0),max: ExpantaNum(15)},
    HypUpg10: {cur: ExpantaNum(0),cost:ExpantaNum(1000000000),rate: ExpantaNum(0),max: ExpantaNum(15)},
};
let savedData = localStorage.getItem(saveloc);

if (savedData) {
    try {
        let loadedData = JSON.parse(savedData);
        if (loadedData && typeof loadedData === 'object') {
            Object.keys(loadedData).forEach(key => {
                if (stats.hasOwnProperty(key)) {
                    if (key === 'pwr' || key === 'tps' || key === 'HypPwr') {
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
function notify(msg) {
    var notificationDiv = document.createElement("div");
    notificationDiv.className = "notification";
    var paragraph = document.createElement("p");
    paragraph.textContent = msg;
    notificationDiv.appendChild(paragraph);
    document.body.appendChild(notificationDiv);
    setTimeout(function() {
        document.body.removeChild(notificationDiv);
    }, 2000);
}

function save() {
    localStorage.setItem(saveloc, JSON.stringify(stats));
    notify("Saved");
}
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
    document.getElementById("hyperdis").innerText = stats.HypPwr.toFixed(4);
    document.getElementById("hypergdis").innerText = ` gain ${ExpantaNum(HyperPower(true)).toFixed(4)} Hyper Power`;
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
    function updupgs(num) {
        const upg = "g"+num
        document.getElementById(upg+"ausp").innerText = `1 Per ${stats["HypUpg"+num].rate.toFixed(3)} seconds`;
        document.getElementById(upg+"auco").innerText = `${stats["HypUpg"+num].cost.toFixed(3)} Hyper Power`;
    }
    function upd(num){
        updupgs(num);
        updgen(num);
    }
    upd('1');
    upd('2');
    upd('3');
    upd('4');
    upd('5');
    upd('6');
    upd('7');
    upd('8');
    upd('9');
    upd('10');
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
function truediv(num1,num2) {
    let iterations = 0;
    while (num1.gte(num2)) {
        num1 = num1.div(num2);
        iterations++;
    }
    return iterations;
}
function HyperPower(nfgvhcd) {
    if (nfgvhcd == true) {
        let pwrt = stats.pwr.div(1e33);
        let hypamt = truediv(pwrt,ExpantaNum(1e3));
        return hypamt;
    }
       if (stats.pwr.gte(1e33)) {
        let pwrt = stats.pwr.div(1e33);
        let hypamt = truediv(pwrt,ExpantaNum(1e3));
        hypamt = stats.HypPwr.add(hypamt);
        stats.pwr = base.pwr;
        stats.tps = base.tps;
        stats.HypPwr = hypamt;
        stats.gen1.mpwr =  base.gen1.mpwr;
        stats.gen2.mpwr =  base.gen2.mpwr;
        stats.gen3.mpwr =  base.gen3.mpwr;
        stats.gen4.mpwr =  base.gen4.mpwr;
        stats.gen5.mpwr =  base.gen5.mpwr;
        stats.gen6.mpwr =  base.gen6.mpwr;
        stats.gen7.mpwr =  base.gen7.mpwr;
        stats.gen8.mpwr =  base.gen8.mpwr;
        stats.gen9.mpwr =  base.gen9.mpwr;
        stats.gen10.mpwr = base.gen10.mpwr;
        stats.gen1.cost =  base.gen1.cost;
        stats.gen2.cost =  base.gen2.cost;
        stats.gen3.cost =  base.gen3.cost;
        stats.gen4.cost =  base.gen4.cost;
        stats.gen5.cost =  base.gen5.cost;
        stats.gen6.cost =  base.gen6.cost;
        stats.gen7.cost =  base.gen7.cost;
        stats.gen8.cost =  base.gen8.cost;
        stats.gen9.cost =  base.gen9.cost;
        stats.gen10.cost = base.gen10.cost;
        stats.gen1.cur =  ExpantaNum(0);
        stats.gen2.cur =  ExpantaNum(0);
        stats.gen3.cur =  ExpantaNum(0);
        stats.gen4.cur =  ExpantaNum(0);
        stats.gen5.cur =  ExpantaNum(0);
        stats.gen6.cur =  ExpantaNum(0);
        stats.gen7.cur =  ExpantaNum(0);
        stats.gen8.cur =  ExpantaNum(0);
        stats.gen9.cur =  ExpantaNum(0);
        stats.gen10.cur = ExpantaNum(0);
        stats.gen1.mb =  ExpantaNum(0);
        stats.gen2.mb =  ExpantaNum(0);
        stats.gen3.mb =  ExpantaNum(0);
        stats.gen4.mb =  ExpantaNum(0);
        stats.gen5.mb =  ExpantaNum(0);
        stats.gen6.mb =  ExpantaNum(0);
        stats.gen7.mb =  ExpantaNum(0);
        stats.gen8.mb =  ExpantaNum(0);
        stats.gen9.mb =  ExpantaNum(0);
        stats.gen10.mb = ExpantaNum(0);
       }
}
let autos = {1:false,2:false,3:false,4:false,5:false,6:false,7:false,8:false,9:false,10:false};
function HypUpg(num){
    const upg = stats['HypUpg'+num];
    if (autos[num] == false && !upg.rate.eq(0)) {
        setInterval(function() {
            buygen(num);
        }, upg.rate.toNumber() * 1000);
    }
    if (upg.cur.lt(upg.max)){
        if (stats.HypPwr.gte(upg.cost)){
            stats.HypPwr = stats.HypPwr.sub(upg.cost);
            upg.cur = upg.cur.add(ExpantaNum(1));
            if (upg.rate.eq(0)){
                upg.rate = ExpantaNum(10);
                setInterval(function() {
                    buygen(num);

                }, upg.rate.toNumber() * 1000);
                
            } else {
                upg.rate = upg.rate.div(2);
            }
            upg.cost = ExpantaNum(2).pow(upg.cur).mul(upg.cost);
        }
    }
}
setInterval(updateall,10);
setInterval(save,15000);