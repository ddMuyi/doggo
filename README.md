# doggo

A web app that uses API from dog.ceo/api to display different breeds of dogs to visitors

## Technology

The App was developed with typescript, Vue, and Vuex, lotifiles for loading animations and axios to make API calls

## Thought Process

Considering that the APi only provides a minimum initial display of data of about 100, and the maximu the APi provides at once is 50, I decided to call the API twice on first load. I used interceptor API and local Lazy loading API to optimize quick loading of the page.



## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
