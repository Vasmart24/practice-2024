const generateFarmsData = (lvl = 1) => {
  const isStoneRequired = lvl >= 2;
  const isIronRequired = lvl >= 3;
  const isSteelRequired = lvl >= 4;

  const isMintesMore30 = (30 * lvl) % 60 === 0;

  return {
    cost: {
      wood: 6 * (2 ** lvl),
      stone: isStoneRequired ? 2 * (2 ** (lvl - 1)) : null,
      iron: isIronRequired ? 4 * (2 ** (lvl - 2)) : null,
      steel: isSteelRequired ? (2 ** (lvl - 3)) : null,
    },


    buildTime: {
      minutes: isMintesMore30 ? 0 : 30,
      hours: 5 * lvl + (isMintesMore30 ? 0 : 1),
    },

    currentWorkers: 0,
    maxWorkers: 4 * lvl,
    suppiesPerDay: Math.floor(10 * (lvl ** 0.8)),
  }
};

const farmsData = {
  lvl1: generateFarmsData(1),
  lvl2: generateFarmsData(2),
  lvl3: generateFarmsData(3),
  lvl4: generateFarmsData(4),
};

export default farmsData;
