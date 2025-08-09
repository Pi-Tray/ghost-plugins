# @pi-tray/ghost 👻

## Installation

### From server root

```bash
npm run plugin:npm install https://github.com/Pi-Tray/ghost-plugins#release
```

### From plugin-env

```sh
npm install https://github.com/Pi-Tray/ghost-plugins#release
```

## Plugins

### @pi-tray/ghost/tap_key

Tap a keyboard key

| Name      | Description                                                                                                                 | Type       |
|-----------|-----------------------------------------------------------------------------------------------------------------------------|------------|
| key       | The name of the key to press. See https://web.archive.org/web/20161019170550/http://robotjs.io/docs/syntax#keys for a list. | `string`   |
| modifiers | An optional array of modifiers to press: "shift", "control", "alt", "command" (Mac)                                         | `string[]` |
