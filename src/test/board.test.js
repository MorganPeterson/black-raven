import { test, afterEach, expect } from 'vitest'
import Board from '../lib/Board.svelte'

let host;

afterEach(() => {
  host.remove()
})

test('mount component', async () => {
  host = document.createElement('div')
  host.setAttribute('id', 'host')
  document.body.appendChild(host)

  const instance = new Board({ target: host, props: {} })

  expect(instance).toBeTruthy()
})
