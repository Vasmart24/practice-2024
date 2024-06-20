const generateWatchtowersData = (lvl = 1) => {
  const isStoneRequired = lvl >= 2;
  const isIronRequired = lvl >= 3;
  const isSteelRequired = lvl >= 4;

  const isMintesMore30 = (30 * lvl) % 60 === 0;

  return {
    cost: {
      wood: 6 * (2 ** lvl) / (lvl >= 3 ? 2 : 1),
      stone: isStoneRequired ? 1 * (2 ** (lvl - 1)) / (lvl >= 3 ? 2 : 1) : null,
      iron: isIronRequired ? 4 * (2 ** (lvl - 1)) / 2 : null,
      steel: isSteelRequired ? 6 * (2 ** (lvl - 3)) : null,
    },

    buildTime: {
      minutes: isMintesMore30 ? 0 : 30,
      hours: 8 * lvl + (isMintesMore30 ? 0 : 1),
    },

    dmg: {
      min: 25 * (lvl ** 1.5),
      max: 50 * (lvl ** 1.8),
    },

    hp: 100 * lvl ** 1.9,
    def: {
      pure: 5 * lvl,
      percent: 10 + (5 * lvl),
    },

    atk: lvl === 1 ? 3 :
    lvl === 2 ? 5 :
    lvl === 3 ? 10 : 16,

    watctowersLvl1: 0,
    watctowersLvl2: 0,
    watctowersLvl3: 0,
    watctowersLvl4: 0,
    maxWatchTowersCount: 8,
    
  };
};

const watchTowersData = {
  lvl1: generateWatchtowersData(1),
  lvl2: generateWatchtowersData(2),
  lvl3: generateWatchtowersData(3),
  lvl4: generateWatchtowersData(4),
};

export default watchTowersData;
