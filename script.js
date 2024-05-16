
const divs = ['generator1'];
let stats = {
    pwr: ExpantaNum(10),
    tps: ExpantaNum(100),
    gen1: {mb: ExpantaNum(0),cur: ExpantaNum(0),cost: ExpantaNum(10),mpwr: ExpantaNum(1),scale: ExpantaNum(10)},
};
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
    document.getElementById("pwrdis").innerText = stats.pwr.toFixed(3);
    document.getElementById("gen1amt").innerText = stats.gen1.cur.toString();
    stats.pwr = stats.pwr.add(stats.gen1.cur.mul(stats.gen1.mpwr).div(100));
    document.getElementById("gen1buy").innerText = stats.gen1.cost.toString();
}
function buygen1(){
    if (stats.pwr.gte(stats.gen1.cost)){
        stats.pwr = stats.pwr.sub(stats.gen1.cost);
        stats.gen1.cur = stats.gen1.cur.add(1);
        stats.gen1.mb = stats.gen1.mb.add(1);
        if (stats.gen1.mb.gte(10)){
        stats.gen1.cost = stats.gen1.cost.mul(stats.gen1.scale);
        stats.gen1.mb = ExpantaNum(0);
        stats.gen1.mpwr = stats.gen1.mpwr.mul(1.5);
        }
    }
}
setInterval(updateall,one.div(stats.tps).toNumber);