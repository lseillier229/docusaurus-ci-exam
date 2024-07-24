Ajout et exécution des tests pour le site :

Dans ce fichier, nous allons expliquer comment ajouter et exécuter des tests pour notre site Docusaurus.

1. Installation des dépendances

Pour ajouter des tests à notre site Docusaurus, nous avons besoin d'installer quelques dépendances.

Exécutez les commandes suivantes dans votre terminal :
```csharp
npm install --save-dev jest @testing-library/react @testing-library/jest-dom babel-jest @babel/core @babel/preset-env @babel/preset-react
```
Ces commandes installent Jest, React Testing Library, Babel et les dépendances associées.

2. Configuration de Jest

Pour configurer Jest, créez un fichier `jest.config.js` dans le répertoire racine de votre projet avec le contenu suivant :
```js
module.exports = {
  preset: 'react-app',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testMatch: ['<rootDir>/src/**/*.test.{js,jsx,ts,tsx}'],
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!@testing-library)'],
};
```
Cette configuration indique à Jest d'utiliser le preset `react-app`, d'étendre les méthodes d'assertion de Jest avec React Testing Library et de rechercher les fichiers de test dans le répertoire `src`.

3. Ajout de tests

Pour ajouter un test à notre site Docusaurus, créez un fichier dans le répertoire `src` avec l'extension `.test.js` ou `.test.jsx`.

Par exemple, pour tester notre page d'accueil, créez un fichier `src/pages/index.test.js` avec le contenu suivant :
```jsx
import { render } from '@testing-library/react';
import Homepage from '../index';

describe('Homepage', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Homepage />);
    expect(asFragment()).toMatchSnapshot();
  });
});
```
Ce test utilise React Testing Library pour rendre la page d'accueil et vérifier qu'elle correspond à un snapshot.

4. Exécution des tests

Pour exécuter les tests, exécutez la commande suivante dans votre terminal :
```
npm test
```
Cette commande exécute tous les tests dans le répertoire `src` et affiche les résultats dans le terminal.

5. Intégration continue

Pour intégrer les tests dans notre processus d'intégration continue, nous devons ajouter une étape d'exécution des tests dans notre workflow GitHub Actions.

Ajoutez la section suivante à votre fichier `.github/workflows/main.yml` :
```yaml
- name: Test
  run: npm test
```
Cette étape exécute la commande `npm test` et vérifie que tous les tests ont réussi avant de déployer le site.

Conclusion

Dans ce fichier, nous avons expliqué comment ajouter et exécuter des tests pour notre site Docusaurus. Nous avons également expliqué comment configurer Jest, ajouter des tests et intégrer les tests dans notre processus d'intégration continue avec GitHub Actions. En suivant ces étapes, vous devriez être en mesure d'ajouter facilement des tests à votre propre site Docusaurus.