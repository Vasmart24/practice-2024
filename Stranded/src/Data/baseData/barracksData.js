const generateBarracksData = (lvl = 1) => {
  const isStoneRequired = lvl >= 2;
  const isIronRequired = lvl >= 3;
  const isSteelRequired = lvl >= 4;

  const isMintesMore30 = (30 * lvl) % 60 === 0;

  return {
    cost: {
      wood: 4 * (2 ** lvl),
      stone: isStoneRequired ? 1 * (3 ** (lvl - 1)) : null,
      iron: isIronRequired ? 5 * (2 ** (lvl - 2)) : null,
      steel: isSteelRequired ? (2 ** (lvl - 3)) : null,
    },


    buildTime: {
      minutes: isMintesMore30 ? 0 : 30,
      hours: 5 * lvl + (isMintesMore30 ? 0 : 1),
    },

    currentWorkers: 0,
    maxWorkers: 4 * lvl,
    suppiesPerDay: Math.floor(10 * (lvl ** 0.8)),
    barracklvl1: 0,
    barracklvl2: 0,
    barracklvl3: 0,
    barracklvl4: 0,
    
  }
};

const farmsData = {
  lvl1: generateBarracksData(1),
  lvl2: generateBarracksData(2),
  lvl3: generateBarracksData(3),
  lvl4: generateBarracksData(4),
}

  // generateFarmsData(2),
  // generateFarmsData(3),
  // generateFarmsData(4),


export default farmsData;
