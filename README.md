# Continuiamo a lavorare su EPICBOOKS!

1. Installato pacchetto npm: npm i react-router-dom

2. Installati i pacchetti aggiuntivi 'react-redux', 'axios', 'redux-logger', 'redux-thunk' e 'redux-devtools-extension'

3. Creata una rotta [Home] per l'homepage dell'applicazione: punta a '/' e carica il componente [LatestRelease]

4. Creato un componente [NotFound] a cui l'utente viene renderizzato ogni volta che naviga su una rotta non gestita

5. Creata una rotta per un nuovo componente [BookDetails] che passa un parametro ASIN tramite useParams

6. Premendo su una [Card] di un libro si viene indirizzati a questa nuova rotta dinamica per consentire di caricare i dettagli del libro selezionato su una nuova Card. Cliccando invece sul pulsante 'Recensioni' si accede ad un modale che consente la visione dei commenti inseriti dagli utenti, oltre che l'inserimento e la cancellazione, attraverso delle chiamate 'POST' e 'DELETE'

7. Creato un custom hook [useFetchComment] che viene utilizzato dal componente [CommentArea] per renderizzare nel modale bootstrap le recensioni inserite dagli utenti relative al libro selezionato

8. Creato in componente [BookDetails], che recupera il parametro ASIN dall'url e carica i dettagli del libro su cui si è cliccato. Per recuperare le informazioni del libro selezionato è stato implementato uno [store] con React-Redux

9. I libri vengono renderizzati da [LatestRelease] attraverso una chiamata fetch al server e non più dal file locale 'fantasy.json'. Inoltre l'array dei libri e lo stato di caricamento vengono inseriti nello [store] con React-Redux

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
