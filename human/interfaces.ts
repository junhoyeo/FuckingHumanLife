export type TGender = 'male' | 'female';

export interface IBelonging {
  division: string;
  department: string;
}

interface IHumanBaseConstructor {
  surName?: string | null;
  birth?: Date | null;
}

export interface IHumanConstructorWithAlias extends IHumanBaseConstructor {
  givenName?: string | null;
  aliasName: string;
}

export interface IHumanConstructorWithoutAlias extends IHumanBaseConstructor {
  givenName: string;
  aliasName?: null;
}

export type THumanConstructor = IHumanConstructorWithAlias | IHumanConstructorWithoutAlias;
