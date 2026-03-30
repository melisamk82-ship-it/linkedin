const LinkedInPostGenerator = require('./index.js');

async function main() {
  const generator = new LinkedInPostGenerator();

  // EJEMPLO 1: MANTRA REPETIBLE (VISIBILITY)
  console.log('\n=== EJEMPLO 1: MANTRA REPETIBLE ===\n');
  const post1 = await generator.generatePost({
    objective: 'visibility',
    formulaType: 'mantra-repetible',
    topic: 'contenido de valor',
    details: ['A veces una lista solo suena ordenada', 'Un ejemplo concreto + una regla'],
    cta: '¿Eres más de listas o de ejemplos?'
  });
  console.log(post1.post.content);
  console.log(`\nEngagement Score: ${post1.metadata.estimatedEngagement}/100`);

  // EJEMPLO 2: ANTI BULLSHIT (AUTHORITY)
  console.log('\n\n=== EJEMPLO 2: ANTI BULLSHIT ===\n');
  const post2 = await generator.generatePost({
    objective: 'authority',
    formulaType: 'anti-bullshit',
    topic: 'marca personal',
    details: [
      'No te pagan por ser visible, te pagan por ser claro',
      'Si no dices a quién ayudas, no existes',
      'Si no tienes oferta, no conviertes'
    ]
  });
  console.log(post2.post.content);
  console.log(`\nEngagement Score: ${post2.metadata.estimatedEngagement}/100`);

  // EJEMPLO 3: ESTUDIO DE CASO (LEADS)
  console.log('\n\n=== EJEMPLO 3: ESTUDIO DE CASO ===\n');
  const post3 = await generator.generatePost({
    objective: 'leads',
    formulaType: 'estudio-caso',
    topic: 'cambiar el primer párrafo',
    details: ['Hook corto', 'Escena concreta', 'Lista limpia', 'Pregunta final']
  });
  console.log(post3.post.content);
  console.log(`\nEngagement Score: ${post3.metadata.estimatedEngagement}/100`);

  // ESTADÍSTICAS
  console.log('\n\n=== ESTADÍSTICAS ===\n');
  console.log(JSON.stringify(generator.getStats(), null, 2));
}

main().catch(console.error);
