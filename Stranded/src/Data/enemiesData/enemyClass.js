export default class EnemyUnit {
  static setDef(pure, percent) {
    return {pure, percent};
  }

  static setDmg(min, max) {
    return {min, max};
  }
  constructor ( name = '', hp = 1, atk = 1,
    def = {pure: 0, percent: 0},
    dmg = {min: 1, max: 1},
    initiative = 1,
    picture = '',
    count = 1,
  ) 
    {
    this.name = name;
    this.hp = hp;
    this.atk = atk;
    this.def = def;
    this.dmg = dmg;
    this.picture = picture;
    this.initiative = initiative;
    this.count = count;
  }
}
