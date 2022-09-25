import { writable } from 'svelte/store'

export const board = writable([
  [null, null, null, 0, null, null, null],
  [null, null, null, 1, null, null, null],
  [null, null, null, 8, null, null, null],
  [2, 3, 9, 10, 11, 4, 5],
  [null, null, null, 12, null, null, null],
  [null, null, null, 6, null, null, null],
  [null, null, null, 7, null, null, null],
])

export const selected = writable(null)

export const legalMoves = writable(null)

export const turn = writable(true)

export const logs = writable([])
