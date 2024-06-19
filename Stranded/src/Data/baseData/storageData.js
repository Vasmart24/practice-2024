const generateStorageData = (lvl = 1) => {
  const isStoneRequired = lvl >= 2;
  const isIronRequired = lvl >= 3;
  const isSteelRequired = lvl >= 4;

  const isMintesMore30 = (30 * lvl) % 60 === 0;

  return {
    cost: {
      wood: 3 * (2 ** lvl),
      stone: isStoneRequired ? 5 * (2 ** (lvl - 1)) : null,
      iron: isIronRequired ? 4 * (2 ** (lvl - 2)) : null,
      steel: isSteelRequired ? 2 * (2 ** (lvl - 3)) : null,
    },

    buildTime: {
      minutes: isMintesMore30 ? 0 : 30,
      hours: 6 * lvl + (isMintesMore30 ? 0 : 1),
    },

    bonus: lvl === 4 ? 15 : 0, // скидка на постройки
    storagesLvl1: 0, // текущее кол-во складов 1-го уровня
    storagesLvl2: 0, // текущее кол-во складов 2-го уровня
    storagesLvl3: 0, // текущее кол-во складов 3-го уровня
    storagesLvl4: 0, // текущее кол-во складов 4-го уровня
    maxStoragesForCurrentLvl: Math.floor((10 * lvl) / (2 ** lvl)), 
    SupplyStorage: 15 * 2 ** lvl + lvl === 4 ? 5 : 0, // сколько добавляет места для рес-ов
  };
};

export default storageData = {
  lvl1: generateStorageData(1),
  lvl2: generateStorageData(2),
  lvl3: generateStorageData(3),
  lvl4: generateStorageData(4),
};

// 1 - 5/30
// 2 - 5/60
// 3 - 3/120
// 4 - 2/245
