# Integration Guide

## Standalone
```javascript
const LinkedInPostGenerator = require('./linkedin-post-generator');
const generator = new LinkedInPostGenerator();
const post = await generator.generatePost({...});
```

## With Content Machine
```javascript
contentMachine.addSkill('linkedin-post-generator', generator);
const post = await contentMachine.executeSkill('linkedin-post-generator', {...});
```

## Weekly Workflow
```javascript
const schedule = {
  monday: { objective: 'visibility', formulaType: 'mantra-repetible' },
  wednesday: { objective: 'authority', formulaType: 'anti-bullshit' },
  friday: { objective: 'visibility', formulaType: 'pregunta-binaria' }
};
```

## Batch Generation
```javascript
const topics = [
  { objective: 'visibility', topic: 'Strategy' },
  { objective: 'authority', topic: 'Tips' },
  { objective: 'leads', topic: 'Results' }
];

for (const config of topics) {
  const post = await generator.generatePost(config);
  console.log(post.post.content);
}
```
