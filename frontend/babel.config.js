module.exports = {
  presets: [
    // Transformation pour JavaScript moderne
    ['@babel/preset-env', { 
      targets: {
        node: 'current', // Cible la version actuelle de Node.js
        browsers: ['> 1%', 'last 2 versions']
      },
      modules: 'auto'
    }],
    // Transformation pour JSX (ESSENTIEL pour React)
    ['@babel/preset-react', { 
      runtime: 'automatic' // Utilise le nouveau runtime JSX automatique
    }]
  ],
};