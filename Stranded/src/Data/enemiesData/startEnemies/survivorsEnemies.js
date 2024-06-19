import EnemyUnit from "../enemyClass";

const dog = new EnemyUnit(
  'Бешеный пёс', // name
  8, // hp
  3, // atk
  EnemyUnit.setDef(0, 0), // def
  EnemyUnit.setDmg(1, 2), // dmg
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
