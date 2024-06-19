import EnemyUnit from "../enemyClass";

const rat = new EnemyUnit(
  'Крыса', // name
  10, // hp
  1, // atk
  EnemyUnit.setDef(0, 5), // def
  EnemyUnit.setDmg(1, 1), // dmg
  '', // стиль для вставки картинки мыши + стиль самой кнопки
  9, // initiative
);

const boss = new EnemyUnit(
  'Гигантская Крыса', // name
  35, // hp
  5, // atk
  EnemyUnit.setDef(5, 10),
  EnemyUnit.setDmg(4, 6),
  '', // стиль для вставки картинки мега мыши + стиль самой кнопки
  7, // initiative
);
