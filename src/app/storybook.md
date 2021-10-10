# Tutorial

https://storybook.js.org/tutorials/intro-to-storybook/angular/en/simple-component/

## Corrections for Angular:

for angular , the styles ar in `src/styles.css` because of `angular.json>architect>build>options>styles`

- so reacts `src/index.css` corresponds to angulars `src/styles.css`
- **NOT NEDDED:** `.storybook/preview.js` : `+ import "import '../src/styles.css';"`
