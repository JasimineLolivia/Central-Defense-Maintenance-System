const library = require("base/library");
const myitems = require("base/物品");
const 多功能冶炼炉 = library.MultiCrafter(GenericCrafter, GenericCrafter.GenericCrafterBuild, "多功能冶炼炉", [
  {
    input: {//输入
    items: 
    [
        "Central Defense & Maintenance System-晶石/2",
        "coal/2"
    ],     
    },
    output: {//输出
    items: ["Central Defense & Maintenance System-钢/4"],
    liquids : ["Central Defense & Maintenance System-钢渣液/0.4"]
    },
    craftTime: 28,
  }, 
  
  {
    input: {//输入
    items: 
    [
        "Central Defense & Maintenance System-晶石/2",
        "coal/2"
    ],     
    },
    output: {//输出
    items: ["Central Defense & Maintenance System-镍/4"],
    },
    craftTime: 28,
  }, 
]
)