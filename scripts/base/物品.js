function newItem(name) {
	exports[name] = (() => {
		let myItem = extend(Item, name, {});
		return myItem;
	})();
}
newItem("钢")
newItem("合成橡胶")
newItem("火药")
newItem("简单机械")
newItem("精密机械")
newItem("晶石")
newItem("镍")
newItem("铷")
newItem("钛合金")
newItem("碳纤维")
newItem("铁镍合金")
newItem("特种息钢")
newItem("芯片")
newItem("灵石")
newItem("钴")