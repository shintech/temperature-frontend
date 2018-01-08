const config = {}

config.postgresURI = {
  development: 'postgres://postgres:postgres@localhost:5432/api_development',
  test: 'postgres://postgres:postgres@localhost:5432/api_test',
  production: process.env['DATABASE_URL']
}

config.domainName = {
  development: 'dev.shintech.ninja',
  production: 'shintech.ninja'
}

config.sslPath = '/etc/letsencrypt/live/'

export default config
