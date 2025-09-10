module.exports = {
  // Environnement de test pour React
  testEnvironment: 'jsdom',
  
  // Fichier de setup
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  
  // Mapping pour les fichiers CSS
  moduleNameMapping: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  
  // Transformation des fichiers avec Babel
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  
  // Fichiers à ignorer pour la transformation
  transformIgnorePatterns: [
    '/node_modules/(?!(axios|other-module)/)',
  ]
};