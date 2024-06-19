const generateHousingData = (lvl = 1) => {
  const isStoneRequired = lvl >= 2;
  const isIronRequired = lvl >= 3;
  const isSteelRequired = lvl >= 4;

  const isMintesMore30 = (30 * lvl) % 60 === 0;

  return {
    cost: {
      wood: 5 * (2 ** lvl),
      stone: isStoneRequired ? 2 * (2 ** (lvl - 1)) : null,
      iron: isIronRequired ? 4 * (2 ** (lvl - 2)) : null,
      steel: isSteelRequired ? 3 * (2 ** (lvl - 3)) : null,
    },

    buildTime: {
      minutes: isMintesMore30 ? 0 : 30,
      hours: 8 * lvl + (isMintesMore30 ? 0 : 1),
    },

    housesLvl1: 0,
    housesLvl2: 0,
    housesLvl3: 0, 
    housesLvl4: 0,
    maxCivPerHouse: Math.round(5 * 1.5 ** lvl),
    maxHouses: Math.round(10 - 1.5 ** lvl),
  };
};

const housingData = {
  lvl1: generateHousingData(1),
  lvl2: generateHousingData(2),
  lvl3: generateHousingData(3),
  lvl4: generateHousingData(4),
};

export default housingData;
