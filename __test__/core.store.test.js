import { beforeEach, describe, expect, test } from '@jest/globals';
import $$Store from '../src/core/Store';
import schema from './instance/schema';
import store from './instance/store';

describe('module: src/code/Store', () => {
  let storeIns;
  beforeEach(() => {
    storeIns = new $$Store('myFormData', store, schema);
  });

  test('instance should be created', () => {
    expect(storeIns).toBeInstanceOf($$Store);
  });

  test('instance should have the correct variables', () => {
    expect(storeIns.path).toBe('myFormData');
    expect(storeIns.store).toBe(store);
    expect(storeIns.schema).toStrictEqual(schema);
  });

  test('instance private getValue method', () => {
    expect(storeIns.getValue('myFormData.title')).toBe(store.myFormData.title);
    expect(storeIns.getValue('myFormData.type')).toBe(store.myFormData.type);
    expect(storeIns.getValue('myFormData.des')).toBe(store.myFormData.des);
  });

  test('instance private setValue method', () => {
    // src/components/index.js 中 registerComponent 注册组件时
    // 会将 defaultValue 设置为'' 从而影响缺省值
    // 故此处断言不是 undefined 而是 '';
    expect(storeIns.getValue('myFormData.title')).toBe('');

    storeIns.setValue('myFormData.title', 'new title');

    expect(storeIns.getValue('myFormData.title')).toBe('new title');
  });

  test('husky', () => {
    expect(1).toBe(2);
  });

  // TODO: add more test cases
  // 测试嵌套对象
  // 测试字段不存在异常
  // 测试对外方法 $getValue
  // 测试对外方法 $get
  // 测试对外方法 $set
  //
});
