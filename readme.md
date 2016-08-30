## WIP Jekyll starter with a focus on a lean workflow. Asset pipeline managed outside of Jekyll, via NPM

Note that this repo is updated on an ongoing basis. I just added a new structure for adding colors, based on Material Design concepts, so the colors on the built site may be funky for the moment.

### Runs on
- Jekyll 3.2  
- [Bundler](http://bundler.io/)
- NPM
- BassCSS/PostCSS
- Uglify/ESLint
- Imagemin
- Browser-sync
- Anatol Broder's Compress HTML

### DEMO
This is what it looks like: [lean-jekyll.surge.sh](http://lean-jekyll.surge.sh)


### To get started:

Clone the repo:
`git clone https://github.com/budparr/jekyll-base.git`  

cd into the repo's directory  
`cd jekyll-base`

Remove the .git folder:  
`rm -rf .git`

Update Gems
`bundle update`  

Update node_modules  
`npm install`  

Initial build:
`npm run initialize`  

Run NPM:
`npm start`


Layouts, includes and assets are located in the `_app` folder. The `assets` folder is built entirely from the build process, so don't add anything directly to it. Note some of the scripts copied over are particular to my use, and/or for future use here.

### Roadmap
- improve the uglify scripts in package.json, which currently reflect too many options are messy.
- clean up design (it's a bit thrown together)
- add basic search functionality via lunr.js
- add page-styling unit tests (ala WP theme unit tests)
- set up as gem-based theme?
- add Jekyll admin (pre-beta gem is installed - needs to be run in a separate instance)
