import EnemyUnit from "../enemyClass";

const purpleHawkmoth = new EnemyUnit(
  'Лиловый бражник',
  10,
  0,
  EnemyUnit.setDef(1, 4),
  EnemyUnit.setDmg(1, 1),
  1,
);


const nidusWorm = new EnemyUnit(
  'Червь Нидуса',
  30,
  4,
  EnemyUnit.setDef(6, 10),
  EnemyUnit.setDmg(3, 7),
  2,
);
