ts-nuxt-vuetify-sample
===

Nuxt.js sample with Vuetify on TypeScript

Setup on Mac
---

brewを主体でやっていくが、upgradeしておく(自己責任で)

```
$ brew upgrade
```

### Install Node.js

```
$ brew install nodebrew

$ NODE_HOME=~/.nodebrew/current && export PATH=${PATH}:${NODE_HOME}/bin
```

### v14インストール

```
$ nodebrew install v12.18.1

$ nodebrew use v12.18.1

$ node -v
v12.18.1

$ npm -v
6.14.5

$ npx -v
6.14.5
```

### set up yarn

yarn

```
# 依存で入ってなければ入れる
$ brew install icu4c

# nodeが入っているように偽装
$ mkdir /usr/local/opt/node
$ ln -s ~/.nodebrew/current/ /usr/local/opt/node/

# yarnを入れる
$ brew install yarn --ignore-dependencies

# 確認
$ yarn -v
1.22.4
```

### Install Nuxt.js

```
$ yarn create nuxt-app ts-nuxt-vuetify-sample
yarn create v1.22.4
[1/4] �  Resolving packages...
[2/4] �  Fetching packages...
[3/4] �  Linking dependencies...
[4/4] �  Building fresh packages...
success Installed "create-nuxt-app@3.0.0" with binaries:
      - create-nuxt-app
[#################################################################################################################################################################################################] 344/344
create-nuxt-app v3.0.0
✨  Generating Nuxt.js project in ts-nuxt-vuetify-sample
? Project name ts-nuxt-vuetify-sample
? Choose programming language TypeScript
? Choose the package manager Yarn
? Choose UI framework Vuetify.js
? Choose the runtime for TypeScript @nuxt/typescript-runtime
? Choose Nuxt.js modules (Press <space> to select, <a> to toggle all, \<i\> to invert selection)Axios, Progressive Web App (PWA) Support, Content
? Choose linting tools ESLint, Prettier
? Choose test framework Jest
? Choose rendering mode Universal (SSR / Static)
? Choose development tools (Press <space> to select, <a> to toggle all, \<i\> to invert selection)

warning nuxt > @nuxt/webpack > @nuxt/babel-preset-app > core-js@2.6.11: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to t
he actual version of core-js@3.
warning nuxt > @nuxt/webpack > webpack > watchpack > watchpack-chokidar2 > chokidar@2.1.8: Chokidar 2 will break on node v14+. Upgrade to chokidar 3 with 15x less dependencies.
yarn run v1.22.4
$ eslint --ext .js,.vue --ignore-path .gitignore . --fix
✨  Done in 2.61s.

�  Successfully created project ts-nuxt-vuetify-sample

  To get started:

        cd ts-nuxt-vuetify-sample
        yarn dev

  To build & start for production:

        cd ts-nuxt-vuetify-sample
        yarn build
        yarn start

  To test:

        cd ts-nuxt-vuetify-sample
        yarn test

  For TypeScript users.

  See : https://typescript.nuxtjs.org/cookbook/components/
✨  Done in 311.97s.
```

### 起動確認

```
$ yarn dev
```

Hello World!
---

### ルーティング

`/hello` でHello World!を表示

```
$ mkdir -p pages/hello

$ vim pages/hello/index.vue

$ cat pages/hello/index.vue
<template>
  <h1>Hello World!</h1>
</template>
```

`/hello/<word>` でHello \<Word\>!を表示

```
$ vim pages/hello/_word.vue

$ cat pages/hello/_word.vue
<template>
  <h1>Hello {{word}}!</h1>
</template>
<script>
export default {
  asyncData ({ params }) {
    return { word: params.word }
  },
  validate ({ params }) {
    return /^\w+$/.test(params.word)
  }
}
</script>
```


