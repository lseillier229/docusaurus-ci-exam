Configuration de l'intégration continue (CI) avec GitHub Actions :

Dans ce fichier, nous allons expliquer comment configurer l'intégration continue (CI) avec GitHub Actions pour construire et déployer automatiquement un site Docusaurus sur GitHub Pages.

1. Création du fichier de configuration GitHub Actions

Pour configurer l'intégration continue avec GitHub Actions, nous devons créer un fichier de configuration dans le répertoire `.github/workflows` de notre dépôt GitHub. Nous allons créer un fichier nommé `docusaurus.yml`.

Voici un exemple de fichier `docusaurus.yml` :
```yaml
name: Docusaurus CI

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v2

    - name: Install dependencies
      run: npm ci

    - name: Build
      run: npm run build

    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./build
```
Dans cet exemple, nous avons défini un workflow nommé `Docusaurus CI` qui se déclenche à chaque push sur la branche `main`. Le workflow comporte une seule tâche (job) nommée `build` qui s'exécute sur la dernière version d'Ubuntu.

La tâche `build` comporte les étapes suivantes :

* `Checkout code` : cette étape utilise l'action `actions/checkout@v2` pour cloner le code source du dépôt GitHub dans le conteneur d'exécution.
* `Install dependencies` : cette étape utilise la commande `npm ci` pour installer les dépendances du projet.
* `Build` : cette étape utilise la commande `npm run build` pour construire le site Docusaurus.
* `Deploy` : cette étape utilise l'action `peaceiris/actions-gh-pages@v3` pour déployer le site construit sur GitHub Pages.
2. Configuration de GitHub Pages

Avant de pouvoir déployer notre site Docusaurus sur GitHub Pages, nous devons configurer GitHub Pages pour notre dépôt.

Pour ce faire, accédez aux paramètres de votre dépôt GitHub, puis sélectionnez l'onglet `Pages`. Sélectionnez la branche `main` comme source et cliquez sur `Enregistrer`.

Une fois que GitHub Pages est configuré, vous devriez voir l'URL de votre site Docusaurus dans la section `GitHub Pages`.

3. Test du workflow

Maintenant que nous avons configuré notre workflow GitHub Actions et GitHub Pages, nous pouvons tester notre configuration en effectuant un push sur la branche `main`.

Une fois le push effectué, accédez à l'onglet `Actions` de votre dépôt GitHub pour voir l'état du workflow. Si tout s'est bien passé, vous devriez voir un message vert indiquant que le workflow a réussi.

Vous pouvez maintenant accéder à l'URL de votre site Docusaurus pour voir le résultat final.

Conclusion

Dans ce fichier, nous avons expliqué comment configurer l'intégration continue avec GitHub Actions pour construire et déployer automatiquement un site Docusaurus sur GitHub Pages. Nous avons également inclus un exemple de fichier de configuration GitHub Actions et expliqué comment configurer GitHub Pages pour notre dépôt. En suivant ces étapes, vous devriez être en mesure de configurer facilement l'intégration continue pour votre propre site Docusaurus.