const fs = require("fs");

const data = fs.readFileSync("menu.csv", "utf-8");

const rows = data.split("\n");

let result = [];

rows.slice(1).forEach(r => {
  if (!r.trim()) return;

  let cols = r.split(",");

  let name = (cols[0] || "").trim();
  let variant = (cols[1] || "").trim();
  let price = Number(cols[2]) || 0;
  let cost = Number(cols[3]) || 0;

  let fullName = (name + " " + variant).trim();

  if(fullName){
    result.push({
      name: fullName,
      price: price,
      cost: cost
    });
  }
});

console.log("const defaultMenu = [\n");

result.forEach(i=>{
  console.log(`{name:"${i.name}",price:${i.price},cost:${i.cost}},`);
});

console.log("\n]");