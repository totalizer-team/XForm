/* eslint-disable no-param-reassign */
import { configure, makeAutoObservable } from 'mobx';
import { $$default, $$get, $$set } from '../../src/XForm';
import schema from './schema';

configure({
  enforceActions: 'never',
});

class Store {
  /**
   *
   */
  data = {};

  constructor() {
    makeAutoObservable(this);

    // console.log($$merge(schema, {
    //   en: 1, b: 1, meaning: { en: 1, a: 1 }, examples: [{}, 1],
    // }));
    this.data = $$default(schema);
    // this.data = $$merge(schema, { en: 1, examples: [{}] });
  }

  $$set(path, value) {
    $$set(this, path, value);
  }

  $$get(path) {
    return $$get(this, path);
  }
}

export default new Store();
