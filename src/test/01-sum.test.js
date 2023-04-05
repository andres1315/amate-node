
import { sum, multi, divide } from './01-sum'
describe('math number', () => {
  test('sum two number 1 and 2', () => {
    expect(sum(1, 2)).toBe(3)
  })

  test('multiply two number', () => {
    expect(multi(2, 2)).toBe(4)
  })

  test('divide two number', () => {
    expect(divide(10, 2)).toBe(5)
    expect(divide(10)).toBe('no can divide by 0')
    expect(divide(0, 10)).toBe(0)
  })

  test('object', () => {
    const data = { referece: 12313123, pi: '123adas14 sd', name: 'jose' }
    expect(data).toEqual({ referece: 123131231, pi: '123adas14 sd', name: 'jose' })
  })
})
