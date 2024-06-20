import Unit from "../../UnitsClass";

const viper = new Unit(
  'Гадюка', // name
  12, // hp
  2, // atk
  Unit.setDef(1, 5), // def
  Unit.setDmg(2, 3), // dmg
  1,
);


const anaconda = new Unit(
  'Анаконда',
  38,
  6,
  Unit.setDef(5, 12),
  Unit.setDmg(4, 8),
  2,
);
