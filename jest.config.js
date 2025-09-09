// This is just jest config file
module.exports = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"] //this means we want to call this files after jest is setted up
}