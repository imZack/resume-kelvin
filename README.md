Kelvin - Resume Theme
=====================

![william t kelvin](https://cloud.githubusercontent.com/assets/690703/4290929/0552ac22-3dc0-11e4-88a6-1ab8c245aab2.png)

[Online Demo](http://imZack.github.io/resume-kelvin)


Features
--------
- Based on [Bootstrap 3.0]() **Easy to customize!**
- Support [Gulp](gulpjs.com)  **Blazing fast!**
- Support [BrowserSync](http://www.browsersync.io/) **Synchronising between devices!**
- ... and it's beautiful created by [Blacktie.co](http://blacktie.co)!


Quick Start
-----------

1. [Fork this repo](https://github.com/imZack/resume-kelvin/fork)
2. Do the following commands:

```bash
$ git clone https://github.com/YOUR_USERNAME/resume-kelvin
$ npm install -g gulp && npm install gulp && npm install
$ git checkout --track origin/gh-pages && git checkout master
/****** Modify some content *****/
$ gulp deploy
```

Go visit https://YOUR_USERNAME.github.io/resume-kelvin



Installation
------------

There are two ways to get this awesome resume:

**1. Fork this repo** (Recommended)

[Click me to fork](https://github.com/imZack/resume-kelvin/fork)

> If you fork this repo, you could simply publish as your project page later without settings.


**2. Clone this repo**
```bash
$ git clone https://github.com/imZack/resume-kelvin
```


**Install Gulp & Node Dependencies**
```bash
$ npm install -g gulp
$ npm install gulp
$ npm install
```

> If you have errors during the installation, please try to clean your npm cache via `$ npm cache clean`.


Usage
-----
**Writing and Live Preview**

```bash
$ gulp

  [23:34:27] Using gulpfile ~/resume-kelvin/gulpfile.js
  [23:34:27] Starting 'serve'...
  [23:34:27] Finished 'serve' after 5.25 ms
  [BS] Local: >>> http://localhost:3000
  [BS] External: >>> http://192.168.1.1:3000
  [BS] Serving files from: ./

```
visit `http://localhost:3000`


**Build (Optional)**

Build and optimize all sources and assests for deploy purpose.

```bash
$ gulp build
```

Once you buit the resume successfully, the files will be generated in `build` folder. You could just upload it to your web hosting or somewhere else.


**Deploy (Optional)**

The steps below are for who forked this repo directly and cloned into local repo.

**At the first time**, you have to do the following commands:

```bash
$ git checkout --track origin/gh-pages
$ git checkout master
```

Above command is for fetching the remote branch to local repo and tracking it. Now modify some words or images and then deploy it!

```bash
$ gulp deploy
```

This command will build & deploy to your remote repository branch `gh-pages`, so if your repo name is `resume-kelvin` go visit https://username.github.io/resume-kelvin That's it!

> Changes may take up to ten minutes to be visible.

> More information about github pages [Link](https://pages.github.com/)


License
-------
[![](https://i.creativecommons.org/l/by/3.0/88x31.png)](http://creativecommons.org/licenses/by/3.0/)

[Creative Commons Attribution 3.0 License](http://creativecommons.org/licenses/by/3.0/)

Modified By [YuLun Shih](http://yulun.me)

Theme created by [Blacktie.co](http://blacktie.co)


[![Analytics](https://ga-beacon.appspot.com/UA-54905027-1/imZack/resume-kelvin)](https://github.com/igrigorik/ga-beacon)
