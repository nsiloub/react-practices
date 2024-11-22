- npm commands:
```shell
npm install --save-dev eslint-config-prettier

npm install --save-dev eslint-plugin-prettier eslint-config-prettier

npm install --save-dev --save-exact prettier
```

- ```eslint.config.js``` configs:

```json
// ...
import eslintConfigPrettier from "eslint-config-prettier"

// ...

    extends: [
        // ...
      "plugin:react-hooks/recommended",
      "prettier",
      "eslintPluginPrettierRecommended",
        //   ...
    ]
// ...
  eslintConfigPrettier,
// ...
```