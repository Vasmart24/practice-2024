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
      hours: 6 * lvl + (isMintesMore30 ? 0 : 1),
    },

    currentHousesCount: 0,
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

// {
//   lvl1: {
//     cost: {
//       wood: 10,
//     },

//     buildTime: {
//       hours: 5,
//       minutes: 30
//     },

//     housesCount: 0,
//     maxCiv: 5,
//     maxHouses: 8,
//   },

//   lvl2: {
//     cost: {
//       wood: 20,
//       stone: 10,
//     },

//     buildTime: {
//       hours: 11,
//       minutes: 0,
//     },

//     housesCount: 0,
//     maxCiv: 8,
//     maxHouses: 6,
//   },

//   lvl3: {
//     cost: {
//       wood: 50,
//       stone: 25,
//       iron: 10,
//     },

//     buildTime: {
//       hours: 16,
//       minutes: 30,
//     },

//     housesCount: 0,
//     maxCiv: 15,
//     maxHouses: 4,
//   },

//   lvl4: {
//     cost: {
//       wood: 30,
//       stone: 50,
//       iron: 50,
//       steel: 10
//     },

//     buildTime: {
//       hours: 24,
//       minutes: 30,
//     },

//     housesCount: 0,
//     maxCiv: 25,
//     maxHouses: 3,
//   },

//   lvl5: {
//     cost: {
//       wood: 200,
//       stone: 100,
//       iron: 10,
//       steel: 25
//     },

//     buildTime: {
//       hours: 40,
//       minutes: 0,
//     },

//     housesCount: 0,
//     maxCiv: 50,
//     maxHouses: 2,
//   },
// }
