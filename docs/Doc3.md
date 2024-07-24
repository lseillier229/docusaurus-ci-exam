Déploiement du site sur GitHub Pages :

Dans ce fichier, nous allons expliquer comment déployer un site Docusaurus sur GitHub Pages.

1. Création d'une branche `gh-pages`

Pour déployer notre site Docusaurus sur GitHub Pages, nous devons créer une nouvelle branche nommée `gh-pages` dans notre dépôt GitHub.

Pour ce faire, exécutez la commande suivante dans votre terminal :
```bash
git checkout -b gh-pages
```
2. Création d'un fichier `CNAME`

Si vous souhaitez utiliser un nom de domaine personnalisé pour votre site Docusaurus, vous devez créer un fichier `CNAME` dans le répertoire racine de votre projet.

Le fichier `CNAME` doit contenir le nom de domaine complet de votre site, par exemple :
```
www.example.com
```
3. Construction du site

Pour construire notre site Docusaurus, exécutez la commande suivante dans votre terminal :
```sql
npm run build
```
Cette commande génère un répertoire `build` contenant tous les fichiers nécessaires pour déployer notre site.

4. Déploiement du site

Pour déployer notre site sur GitHub Pages, nous devons copier le contenu du répertoire `build` dans la branche `gh-pages` de notre dépôt GitHub.

Pour ce faire, exécutez les commandes suivantes dans votre terminal :
```bash
git add .
git commit -m "Deploy to GitHub Pages"
git subtree push --prefix build origin gh-pages
```
La commande `git subtree push` envoie le contenu du répertoire `build` vers la branche `gh-pages` de notre dépôt GitHub.

5. Configuration de GitHub Pages

Pour configurer GitHub Pages pour notre dépôt, accédez aux paramètres de votre dépôt GitHub, puis sélectionnez l'onglet `Pages`.

Sélectionnez la branche `gh-pages` comme source et cliquez sur `Enregistrer`.

Une fois que GitHub Pages est configuré, vous devriez voir l'URL de votre site Docusaurus dans la section `GitHub Pages`.

6. Vérification du déploiement

Pour vérifier que notre site Docusaurus est correctement déployé sur GitHub Pages, accédez à l'URL de votre site.

Si tout s'est bien passé, vous devriez voir votre site Docusaurus en ligne.

Conclusion

Dans ce fichier, nous avons expliqué comment déployer un site Docusaurus sur GitHub Pages. Nous avons également expliqué comment créer une branche `gh-pages`, créer un fichier `CNAME`, construire notre site et configurer GitHub Pages pour notre dépôt. En suivant ces étapes, vous devriez être en mesure de déployer facilement votre propre site Docusaurus sur GitHub Pages.