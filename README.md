# Crankscript library blank template

This is a simple template for a Crankscript library project.

## Quick start

Install dependencies:

```bash
npm install
```

To generate a .d.ts and a Lua file:

```bash
npm run transpile
```

## CrankScript & Toybox Compatibility

When you transpile your library, Crankscript will generate both `index.lua` and `index.d.ts` inside the `Source` directory. This allows your library to be:

- **Used via npm** in CrankScript projects (with full TypeScript types)
- **Imported in Toybox projects** with zero setup

Toybox support is enabled by default via the `--toybox` flag:

```jsonc
// ...
"transpile": "crankscript transpile --toybox MyLib"
// ...
```

This will generate a Toybox-compatible `Source/import.lua`, which:
- Automatically exposes your exports under a global table (`MyLib`)
- Can be imported and used by others:

```lua
import "toyboxes"

MyLib.someFunction()
```

### Publishing Tips

- Make sure to commit the `Source/import.lua` file  
- Your library will be usable from Toybox with:

```bash
toybox add github-username/repository-name
```

---

To disable Toybox support, remove the `--toybox` option in your `package.json`.
