import EnemyUnit from "../enemyClass";

const suppliesEnemies = {
  rat: new EnemyUnit(
    "Крыса", // name
    10, // hp
    1, // atk
    EnemyUnit.setDef(0, 5), // def
    EnemyUnit.setDmg(1, 1), // dmg
    9 // initiative | count and picture are default
  ),
  boss: new EnemyUnit(
    "Гигантская Крыса", // name
    35, // hp
    5, // atk
    EnemyUnit.setDef(5, 10),
    EnemyUnit.setDmg(3, 6),
    7 // initiative | count and picture are default
  ),
};

// export const rat = new EnemyUnit(
//   "Крыса", // name
//   10, // hp
//   1, // atk
//   EnemyUnit.setDef(0, 5), // def
//   EnemyUnit.setDmg(1, 1), // dmg
//   9 // initiative | count and picture are default
// );

// export const boss = new EnemyUnit(
//   "Гигантская Крыса", // name
//   35, // hp
//   5, // atk
//   EnemyUnit.setDef(5, 10),
//   EnemyUnit.setDmg(3, 6),
//   7 // initiative | count and picture are default
// );

export default suppliesEnemies;
