import EnemyUnit from "../enemyClass";

const dog = new EnemyUnit(
  'Бешеный пёс', // name
  8, // hp
  3, // atk
  EnemyUnit.setDef(0, 0), // def
  EnemyUnit.setDmg(0, 2), // dmg
  12, // initiative | count and picture are default
);

const boss = new EnemyUnit(
  'Заражённый пёс', // name
  25, // hp
  8, // atk
  EnemyUnit.setDef(3, 8),
  EnemyUnit.setDmg(2, 8),
  14, // initiative | count and picture are default
);
