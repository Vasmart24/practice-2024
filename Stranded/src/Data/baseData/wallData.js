const generateWallData = (lvl = 1) => {
  const isStoneRequired = lvl >= 2;
  const isIronRequired = lvl >= 3;
  const isSteelRequired = lvl >= 4;

  const isMintesMore30 = (30 * lvl) % 60 === 0;

  return {
    cost: {
      wood: 3 * (2 ** lvl),
      stone: isStoneRequired ? 2 * (2 ** (lvl - 1)) : null,
      iron: isIronRequired ? 4 * (2 ** (lvl - 2)) : null,
      steel: isSteelRequired ? 5 * (2 ** (lvl - 2)) : null,
    },

    buildTime: {
      minutes: isMintesMore30 ? 0 : 30,
      hours: 10 * lvl + (isMintesMore30 ? 0 : 1),
    },

    def: 150 * (2 ** lvl),
  }
};

export default wallData = {
  lvl1: generateWallData(1),
  lvl2: generateWallData(2),
  lvl3: generateWallData(3),
  lvl4: generateWallData(4),
};
