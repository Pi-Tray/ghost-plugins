# @pi-tray/ghost 👻

## Installation

### One click

<a target="_blank" rel="noreferrer noopener" href="https://pi-tray.github.io/express-redirect/?pkgname=@pi-tray/ghost">
    <img width=300 alt="One click install @pi-tray/ghost with Pi-Tray Editor" src="https://raw.githubusercontent.com/Pi-Tray/express-list/refs/heads/main/express_button.svg" />
</a>


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
| key       | The name of the key to press.<br>See https://web.archive.org/web/20161019170550/http://robotjs.io/docs/syntax#keys for a list. | `string`   |
| modifiers | An optional array of modifiers to press: "shift", "control", "alt", "command" (Mac)                                         | `string[]` |
