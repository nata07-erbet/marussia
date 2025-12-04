import { createAction } from '@reduxjs/toolkit';

const inc = createAction('INC');
const dec = createAction('DEC');
const setValue = createAction<number>('VALUE');

export { inc, dec, setValue };