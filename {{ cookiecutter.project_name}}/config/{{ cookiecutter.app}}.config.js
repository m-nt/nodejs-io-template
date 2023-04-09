"use strict";

module.exports = {
    SERVICE_NAME: '{{ cookiecutter.app}}-service',
    PORT: 3000,
    ENV: 'dev',
    DATABASE_URL: 'mongodb://localhost:27017/',
    SECRET: 'secret',
    ALGORITHM: 'HS256'
}