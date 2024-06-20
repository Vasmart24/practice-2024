import Unit from "../../UnitsClass";

const dog = new Unit(
  'Бешеный пёс', // name
  8, // hp
  3, // atk
  Unit.setDef(0, 0), // def
  Unit.setDmg(0, 2), // dmg
  12, // initiative | count and picture are default
);

const boss = new Unit(
  'Заражённый пёс', // name
  25, // hp
  8, // atk
  Unit.setDef(3, 8),
  Unit.setDmg(2, 8),
  14, // initiative | count and picture are default
);
