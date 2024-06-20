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

    def: {
      pure: 
      lvl === 4 ?
      Math.floor((5 ** lvl) / 5) :
      lvl > 1 ?
      (5 ** lvl) / 2.5 : 5,
      percent: 10 * lvl,
    },

    hp: 150 * (2 ** lvl) * (lvl >= 3 ? (lvl) : 1),
  }
};

const wallData = {
  lvl1: generateWallData(1),
  lvl2: generateWallData(2),
  lvl3: generateWallData(3),
  lvl4: generateWallData(4),
};

export default wallData;

// 1 - 300|5/10%
// 2 - 600|10/20%
// 3 - 1800|50/30%
// 4 - 4800|125/40%
