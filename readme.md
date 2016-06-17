### Base for starting a lean jekyll project.

Assuming you have jekyll/bundler/node/npm installed...

`git clone -b lean https://github.com/budparr/jekyll-base.git project-name`  
`rm -rf .git`  
`bundle update`  
`npm install`  
`npm start`

For subsequent builds you may want to look just run `npm run watch`.

## Notes:
Do not put anything directly in the `assets` directory; it gets overwritten. All assets go into their appropriate folder in the `_app` folder and get processes and/or copied from their into the assets folder.


## Meta-data aware
https://schema.org/

## Aria