export const add = (a: number, b: number) => {
  return a + b
}

export const sum = (...a: number[]) => a.reduce((acc, val) => acc + val, 0)
