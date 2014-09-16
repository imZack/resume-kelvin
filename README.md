Kelvin - Resume Theme
=====================

Feature
-------
- Based on [Bootstrap 3.0]() Easy to customise!
- Support [Gulp](gulpjs.com)  blazing fast!
- Support [BrowserSync](http://www.browsersync.io/) Synchronising between devices!
- ... and it's beautiful created by [Blacktie.co](http://blacktie.co)!

[Online Demo]()



Installation
------------
**Clone this repo**
```bash
$ git clone https://github.com/imZack/resume-kelvin
```

**Install Node Dependencies & Gulp**
```bash
$ npm install
$ npm install -g gulp
$ npm install gulp
```


Usage
-----
**Writing and Preview**
```bash
$ gulp

  [23:34:27] Using gulpfile ~/resume-kelvin/gulpfile.js
  [23:34:27] Starting 'serve'...
  [23:34:27] Finished 'serve' after 5.25 ms
  [BS] Local: >>> http://localhost:3000
  [BS] External: >>> http://192.168.1.1:3000
  [BS] Serving files from: ./

```
visit `http://localhost:3000` or you could change port with argument `--port <port_you_want>`

**Build (Optional)**
Pack with optimization all source and assests to `build` folder for deploy purpose.

```bash
$ gulp build
```

**Deploy (Optional)**
This command will build & deploy to your remote reposity `gh-pages` branch

```
$ gulp deploy
```


Licence
-------
![](https://i.creativecommons.org/l/by/3.0/88x31.png)

[Creative Commons Attribution 3.0 License](http://creativecommons.org/licenses/by/3.0/)

Modified By [YuLun Shih](http://yulun.me)

Theme created by [Blacktie.co](http://blacktie.co)
