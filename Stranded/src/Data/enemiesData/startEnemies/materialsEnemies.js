import EnemyUnit from "../enemyClass";

const viper = new EnemyUnit(
  'Гадюка', // name
  12, // hp
  2, // atk
  EnemyUnit.setDef(1, 5), // def
  EnemyUnit.setDmg(2, 3), // dmg
  1,
);


const anaconda = new EnemyUnit(
  'Анаконда',
  38,
  6,
  EnemyUnit.setDef(5, 12),
  EnemyUnit.setDmg(4, 8),
  2,
);
