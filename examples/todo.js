import { todo } from '../index.js'

export const command = 'todo x'

export const builder = {
  x: {
    type: 'string'
  }
}

export const handler = async ({ x, logger }) => {
  logger.info({ data: todo(x) }, 'TODO')
}
