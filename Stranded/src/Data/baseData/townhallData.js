const generateTownhallData = (lvl = 1) => {
  const isStoneRequired = lvl >= 2;
  const isIronRequired = lvl >= 3;
  const isSteelRequired = lvl >= 4;

  const isMintesMore30 = (30 * lvl) % 60 === 0;

  return {
    cost: {
      wood: (5 + lvl - 1) * (2 ** lvl),
      stone: isStoneRequired ? (2 + lvl - 1) * (2 ** lvl - 1) : null,
      iron: isIronRequired ? (3 + lvl - 1) * (2 ** lvl - 2) : null,
      steel: isSteelRequired ? (4 + lvl - 1) * (2 ** lvl - 3) : null,
    },

    buildTime: {
      minutes: isMintesMore30 ? 0 : 30,
      hours: 12 * lvl + (isMintesMore30 ? 0 : 1),
    },

    currenttownHallLvl: 0,
    maxSuppliesBuff: 5 ** lvl,
  };
};

const townhallData = {
  lvl1: generateTownhallData(1),
  lvl2: generateTownhallData(2),
  lvl3: generateTownhallData(3),
  lvl4: generateTownhallData(4),
};

export default townhallData;
