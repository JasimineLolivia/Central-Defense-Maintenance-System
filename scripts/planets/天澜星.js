const SFlib = require("base/SFlib");
const TBLY = new Planet("天澜星", Planets.sun, 1, 3.3);
TBLY.meshLoader = prov(() => new MultiMesh(
	new HexMesh(TBLY, 8)
));
TBLY.generator = extend(SerpuloPlanetGenerator, {
	getDefaultLoadout() {
		return Schematics.readBase64("bXNjaAF4nA3JMQ6AIBAAwQXFRr9i4XuMBR5XkCAYkP9LphwcbmLO/lHMwRq0SY3vF0sGluRvTQ17XoZNStU9d0na20gDduAHAc0Org==")
	}
});
TBLY.cloudMeshLoader = prov(() => new MultiMesh(
	new HexSkyMesh(TBLY, 2, 0.15, 0.14, 5, Color.valueOf("4DA6FF9A"), 2, 0.42, 1, 0.43),
	new HexSkyMesh(TBLY, 3, 0.6, 0.15, 5, Color.valueOf("66FFE3A7"), 2, 0.42, 1.2, 0.45)
));
TBLY.generator = new SerpuloPlanetGenerator();
TBLY.visible = TBLY.accessible = TBLY.alwaysUnlocked = true;
TBLY.clearSectorOnLose = false;
TBLY.tidalLock = false;
TBLY.localizedName = "天澜星";
TBLY.prebuildBase = false;
TBLY.bloom = false;
TBLY.startSector = 1;
TBLY.orbitRadius = 85;
TBLY.orbitTime = 180 * 60;
TBLY.rotateTime = 90 * 60;
TBLY.atmosphereRadIn = 0.02;
TBLY.atmosphereRadOut = 0.3;
TBLY.atmosphereColor = TBLY.lightColor = Color.valueOf("4DA6FF9A");
TBLY.iconColor = Color.valueOf("66FFE3A7"),
TBLY.hiddenItems.addAll(Items.erekirItems).removeAll(Items.serpuloItems);

const map1pj = new SectorPreset("待定", TBLY, 1);
map1pj.description = "待定";
map1pj.difficulty = 2;
map1pj.alwaysUnlocked = false;
map1pj.addStartingItems = true;
map1pj.captureWave = 0;
map1pj.localizedName = "待定";
exports.map1pj = map1pj;
SFlib.addToResearch(map1pj, {
	parent: "planetaryTerminal",
	objectives: Seq.with(
	new Objectives.SectorComplete(SectorPresets.planetaryTerminal))
});