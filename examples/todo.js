import { todo } from '../index.js'

export const command = 'todo x'

export const describe = 'TODO'

export const builder = {
  x: {
    type: 'string',
    default: 'TODO',
    describe: 'TODO'
  }
}

export const handler = async ({ x, logger }) => {
  logger.info({ data: todo(x) }, 'TODO')
}
