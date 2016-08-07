## WIP Jekyll starter with a focus on a lean workflow. Asset pipeline managed outside of Jekyll, via NPM

Note that this repo is updated on an ongoing basis.

### Runs on
- Jekyll 3.2  (dep: [Bundler](http://bundler.io/))
- NPM
- BassCSS/PostCSS
- Browser-sync



### To get started:

Clone the repo:
`git clone https://github.com/budparr/jekyll-base.git`  

cd into the repo's directory  
`cd jekyll-base`

Remove the .git folder:  
`rm -rf .git`

Run NPM:
`npm run start:fresh`  

(after the first run, you can just run `npm start`)


Layouts, includes and assets are located in the `_app` folder. The `assets` folder is built entirely from the build process, so don't add anything directly to it.

### Roadmap
- add basic search functionality via lunr.js
- add page-styling unit tests (ala WP theme unit tests)
- set up as gem-based theme?

