import { TGender, IBelonging, THumanConstructor } from './interfaces.ts';
import { isValidDate } from './utils.ts';

export class Human {
  birth?: Date | null = null;
  surName: string | null = null;
  givenName?: string | null = null;
  aliasName: string = '';
  gender: TGender | null = null;
  belongings: IBelonging[];

  get today(): Date {
    return new Date();
  }

  get age(): number | null {
    if (!this.birth || !isValidDate(this.birth))
      return null;
    return this.today.getFullYear() - this.birth.getFullYear();
  }

  constructor({
    surName = null,
    givenName = null,
    aliasName = null,
    birth = null,
  }: THumanConstructor) {
    // with given name
    if (givenName) {
      this.givenName = givenName;
      this.aliasName = aliasName ? aliasName : givenName;
    } else if (aliasName) {
      this.aliasName = aliasName;
    }
    if (surName) {
      this.surName = surName;
    }
    if (isValidDate(birth)) {
      this.birth = birth;
    }
    this.belongings = [];
  }
}

export class HumanMan extends Human {
  constructor(props: THumanConstructor) {
    super(props);
    this.gender = 'male';
  }
}

export class HumanWoman extends Human {
  constructor(props: THumanConstructor) {
    super(props);
    this.gender = 'female';
  }
}
