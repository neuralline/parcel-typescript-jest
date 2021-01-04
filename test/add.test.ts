import {add, sum} from '../src/app'
test('add to work', () => {
  expect(add(1, 2)).toBe(3)
})

test('basic', () => {
  expect(sum()).toBe(0)
})

test('basic again', () => {
  expect(sum(1, 2)).toBe(3)
})
/**
 *
 *
 * your test goes here
 */
