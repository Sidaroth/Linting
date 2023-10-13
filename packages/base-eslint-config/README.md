## ESLint Base
A shared base linting ruleset for javascript projects.

## Usage
Extend the config in your .eslintrc 
```javascript
// .eslintrc.js
module.exports = {
  extends: [
    '@sidaroth/base-eslint-config',
  ],
};
```

### Shareable config documentation
[ESLint docs](https://eslint.org/docs/developer-guide/shareable-configs) 

Note that all plugins and external configs used should be listed as peer dependencies along eslint itself.