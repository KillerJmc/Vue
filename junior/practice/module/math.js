export default class math {
  static add(a, b) {
    console.log('%d + %d = %d', a, b, a + b)
    return a + b
  }

  static sub(a, b) {
    console.log('%d - %d = %d', a, b, a - b)
    return a - b
  }

  static mul(a, b) {
    console.log('%d * %d = %d', a, b, a * b)
    return a * b
  }

  static div(a, b) {
    console.log('%d / %d = %f', a, b, a / b)
    return a / b
  }
}