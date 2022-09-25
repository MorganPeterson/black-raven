import { cleanup, render /*, screen*/ } from '@testing-library/svelte'
import { test, afterEach, expect } from 'vitest'
import Board from '../lib/Board.svelte'

afterEach(() => {
  cleanup()
})

test('mount component', async () => {
  const { container } = render(Board)
  expect(container).toBeTruthy()
})
