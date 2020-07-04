import { HumanMan } from './human/index.ts';

const me = new HumanMan({ surName: 'yeo', givenName: 'junho', birth: new Date('2003-07-04') });
console.log(me);
