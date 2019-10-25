# Discord Custom Status Animation

Animate your custom status

**I am not responsible for any bans resulting in using this. Use at your own risk.**

---

# Requirements
- [NodeJS](https://nodejs.org/en/)
- [Basic JSON knowledge](https://www.json.org/)

# Installation
1. Download repository
2. Unzip
3. Open a command prompt inside the folder
4. Enter `npm install`
5. Rename `config.json.example` to `config.json` and adjust it - [Read More](#Config)
6. Enter `node index.js`

# Config
- token `String`: Enter your secret discord token **NEVER SHARE THIS WITH ANYONE** - [How to get your token](#how-to-get-your-token)
- animation `Array`:
	- text `String`: Text to display as custom status
	- emojiID `String|null`: Emoji ID of the emoji you want to display or `null` for nothing
	- emojiName `String|null`: Emoji name of the emoji you want to display or `null` for nothing
	- timeout `Number`: Amount in **milliseconds** how long to wait before continuing to the next one

# How to get your token
Go to Discord and open the developer console using `CTRL` + `SHIFT` + `I`, go to the console tab and enter this code
```JS
var req=webpackJsonp.push([[],{extra_id:(e,r,t)=>e.exports=t},[["extra_id"]]]);for(let e in req.c)if(req.c.hasOwnProperty(e)){let r=req.c[e].exports;if(r&&r.__esModule&&r.default)for(let e in r.default)"getToken"===e&&console.log(r.default.getToken())}
```

It should now output your token which will look like random letters and numbers, etc. That is your token, put the **whole** thing as your token.
