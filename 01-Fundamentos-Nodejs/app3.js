
const fs = require('fs')

const content = fs.readFileSync('readme.md', 'utf-8');

const wordCount = content.split(' ')

// Mi solucion
const reactWordCount = wordCount.filter( e => e.toLowerCase().includes('react')).length

// Fernanado
const reactWordCount2 = content.match(/react/gi ?? []).length



console.log('Palabras: ', wordCount.length )
console.log('Palabras React: ', reactWordCount2)