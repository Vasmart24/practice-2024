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

    currentHousesCount: 0,
    maxCivPerHouse: Math.round(5 * 1.5 ** lvl),
    maxHouses: Math.round(10 - 1.5 ** lvl),
  };
};

export default storageData = {
  lvl1: {
    StorageCount: 0,
    maxSupplies: 30,
    maxStorage: 8,
  },
  lvl2: {
    StorageCount: 0,
    maxSupplies: 50,
    maxStorage: 6,
  },
  lvl3: {
    StorageCount: 0,
    maxSupplies: 90,
    maxStorage: 4,
  },
  lvl4: {
    StorageCount: 0,
    maxSupplies: 140,
    maxStorage: 2,
  },
}
