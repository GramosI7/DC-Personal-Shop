module.exports = {
  roots: ['<rootDir>'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
    '^@pages(.*)$': '<rootDir>/pages$1',
    '^@components(.*)$': '<rootDir>/components$1',
    '^@context(.*)$': '<rootDir>/context$1',
    '^@hooks(.*)$': '<rootDir>/hooks$1',
    '^@styles(.*)$': '<rootDir>/styles$1',
    '^@lib(.*)$': '<rootDir>/lib$1',
    '^@icons(.*)$': '<rootDir>/components/icons$1',
    '^@root(.*)$': '<rootDir>/root$1',
  },
}
