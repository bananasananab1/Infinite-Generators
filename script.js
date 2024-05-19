
const saveloc = 'saveb';
const divs = ['generators','HypPwr'];
let stats = {
    pwr: ExpantaNum(10),
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
    gen11:{mb: ExpantaNum(0),mbt: ExpantaNum(0),cur: ExpantaNum(0),cost: ExpantaNum(100000000000),mpwr: ExpantaNum(1),scale: ExpantaNum(100000000000)},
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
    HypUpgPwr: {cur: ExpantaNum(0),cost: ExpantaNum(1),buff: ExpantaNum(1),max: ExpantaNum(1e4)},
    HypUpgHyp: {cur: ExpantaNum(0),cost: ExpantaNum(1),buff: ExpantaNum(1),max: ExpantaNum(1e4)},
    tps: {cur: ExpantaNum(0),cost: ExpantaNum(1),buff: ExpantaNum(1),}
};
function load() {
    let savedData = localStorage.getItem(saveloc);

    if (savedData) {
        try {
            let loadedData = JSON.parse(savedData);
            if (loadedData && typeof loadedData === 'object') {
                Object.keys(loadedData).forEach(key => {
                    if (stats.hasOwnProperty(key)) {
                        if (key === 'pwr' || key === 'tps' || key === 'HypPwr') {
                            stats[key] = ExpantaNum(loadedData[key]);
                        } else if (typeof loadedData[key] === 'object' && stats[key] && typeof stats[key] === 'object') {
                            Object.keys(loadedData[key]).forEach(subKey => {
                                if (stats[key].hasOwnProperty(subKey)) {
                                    stats[key][subKey] = ExpantaNum(loadedData[key][subKey]);
                                }
                            });
                        } else {
                            stats[key] = loadedData[key];
                        }
                    } else {
                        // Add new keys that might not exist in the current stats object
                        if (key === 'pwr' || key === 'tps' || key === 'HypPwr') {
                            stats[key] = ExpantaNum(loadedData[key]);
                        } else if (typeof loadedData[key] === 'object') {
                            stats[key] = {};
                            Object.keys(loadedData[key]).forEach(subKey => {
                                stats[key][subKey] = ExpantaNum(loadedData[key][subKey]);
                            });
                        } else {
                            stats[key] = loadedData[key];
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
    const statsToSave = {};

    Object.keys(stats).forEach(key => {
        if (key === 'pwr' || key === 'tps' || key === 'HypPwr') {
            statsToSave[key] = stats[key].toString();  // Assuming ExpantaNum has a toString method
        } else if (typeof stats[key] === 'object' && stats[key] !== null) {
            statsToSave[key] = {};
            Object.keys(stats[key]).forEach(subKey => {
                statsToSave[key][subKey] = stats[key][subKey].toString();
            });
        } else {
            statsToSave[key] = stats[key];
        }
    });

    localStorage.setItem(saveloc, JSON.stringify(statsToSave));
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
    document.getElementById("hypergdis").innerText = ` gain ${HyperPower(true).toFixed(4)} Hyper Power`;
    stats.pwr = stats.pwr.add(stats.gen1.cur.mul(stats.gen1.mpwr).mul(stats.HypUpgPwr.buff).div(100));
    function gaingen(num){
        let num2 = String(Number(num)+1);
        stats["gen"+num].cur = stats["gen"+num].cur.add(stats["gen"+num2].cur.mul(stats["gen"+num2].mpwr).div(100));
    }
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
        gaingen(num);
    }
    
    document.getElementById("gPwrco").innerText = `${stats["HypUpgPwr"].cost.toFixed(3)} Hyper Power`;
    document.getElementById("gPwrP").innerText = `x ${stats["HypUpgPwr"].buff.toFixed(3)} Power`;
    document.getElementById("gHypco").innerText = `${stats["HypUpgHyp"].cost.toFixed(3)} Hyper Power`;
    document.getElementById("gHypP").innerText = `x ${stats["HypUpgHyp"].buff.toFixed(3)} Hyper Power`;
    document.getElementById("gtpsco").innerText = `${stats.tps.cost.toFixed(3)} Hyper Power`;
    document.getElementById("gtpsP").innerText = `x ${stats.tps.buff.toFixed(3)} TickSpeed`;
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
        let hypamt = ExpantaNum(truediv(pwrt,ExpantaNum(10))).mul(stats.HypUpgHyp.buff);
        return hypamt;
    }
    if (stats.pwr.gte(1e33)) {
        let pwrt = stats.pwr.div(1e33);
        let hypamt = ExpantaNum(truediv(pwrt,ExpantaNum(10))).mul(stats.HypUpgHyp.buff);
        hypamt = stats.HypPwr.add(hypamt).add(1);
        stats.pwr = ExpantaNum(10);
        console.log(stats);
        stats.HypPwr = hypamt;
        function reset(numGens) {
            for (let i = 1; i <= numGens; i++) {
                stats["gen"+String(i)].cur = ExpantaNum(0);
                stats["gen"+String(i)].mb = ExpantaNum(0);
                stats["gen"+String(i)].cost = ExpantaNum(`10^${i}`);
                stats["gen"+String(i)].mpwr = ExpantaNum(1);
            }
        }
        reset(10);
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
            if(typeof(num)=="number"){
                if (upg.rate.eq(0)){
                    upg.rate = ExpantaNum(10);
                    setInterval(function() {
                        buygen(num);

                    }, upg.rate.toNumber() * 1000);
                    
                } else {
                    upg.rate = upg.rate.div(2);
                }
            } else {
                upg.buff = upg.buff.add(upg.cost);
            }
            upg.cost = ExpantaNum(2).pow(upg.cur).mul(upg.cost);
        }
    }
}
function TickSpeed(){
    if (stats.HypPwr.eq(stats.tps.cost)){
        stats.HypPwr = stats.HypPwr.sub(stats.tps.cost);
        stats.tps.buff = stats.tps.buff.mul(1.25);
        stats.tps.cost = stats.tps.cost.mul(1e3);
        stats.tps.cur = stats.tps.cur.add(1);
    }
}
setInterval(updateall,10);
setInterval(save,15000);
window.onload = function() {
    load();
};