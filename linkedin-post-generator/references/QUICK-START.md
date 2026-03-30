# Quick Start - 5 Minutes

## Run Example
```bash
node example.js
```

## Your First Post
```javascript
const LinkedInPostGenerator = require('../index.js');
const generator = new LinkedInPostGenerator();

const post = await generator.generatePost({
  objective: 'visibility',
  formulaType: 'mantra-repetible',
  topic: 'LinkedIn content',
  details: ['Lists sound organized', 'Real example + rule'],
  cta: 'Lists or examples?'
});

console.log(post.post.content);
```

## 3 Objectives
- VISIBILITY: comments, shares
- AUTHORITY: saves, profile views
- LEADS: DMs, opportunities

## First Week Plan
- Monday: Mantra Repetible
- Wednesday: Anti Bullshit
- Friday: Pregunta

Repeat 3 times, change only examples.

## 15 Tips
1. Hook like headline
2. Scene > opinion
3. Frame shift
4. Debate questions
5-15. See TIPS-15.md
