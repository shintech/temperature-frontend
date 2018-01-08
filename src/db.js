import promise from 'bluebird'
import pg from 'pg-promise'
import chalk from 'chalk'

export default function initDB (options) {
  const {environment, config, logger} = options

  const pgOptions = {
    promiseLib: promise
  }

  const pgp = pg(pgOptions)
  const connectionString = config.postgresURI[environment]
  const init = pgp(connectionString)
  const databaseName = connectionString.split('/')

  if (environment === 'development') {
    logger.info(`Connected to database: ${chalk.bgBlack.green(databaseName[databaseName.length - 1])}`)
  }

  return init
}
