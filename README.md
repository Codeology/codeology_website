# codeology.berkeley.edu
Welcome to Codeology's new club website!

## Project Structure

The website is rendered as a "singular" React project using React Router. The way this works is that 1 React project is rendered at a time depending on the url. For example, if the route is '/about', then the AboutUs component will be rendered. The components are held in the Components folder in the src folder of the React project. 

## IMPORTANT CAVEATS

Because we're using React router, all css files are loaded, so please do not have conflicting class names!
In addition, to use the image carousel, we are using React Bootstrap which uses some default css class names, so if your css is not working, look for conflicts there!

## Making changes to the website

### Starting Guide 
Make sure you have the `npm` module installed locally! All pages are respectively split up within the `src/Components/` directory.

1. Clone this repo
2. Run `npm install`
3. Run `npm start` to test your changes.

### Commiting Changes
1. Create a feature branch (set branch name as `<name>/<feature>`, e.g. `avo/update`).
2. Push the changes to the repo.
3. Rebase feature branch to `main`.
4. Squash and merge branch, then delete the branch.

Alternatively for direct changes to master branch:
1. Run `npm run build`
2. Stage changes through `git add .` or `git add <files>`
3. Message: `git commit -m "describe changes"`
4. Push to master: `git push`

###  Changing the About Us Page 
1. Download the member photo to `src/images/members` and name it "Name.jpg". If it's a repeat do "Name2.jpg" and so on 
2. Go to `src/Constants/members.js` to add the member information  
3. If it's repeating add "repeating: 2" or 3  or  whatever... 😝 


POC for questions: Raghav Punnam (raghavpu@berkeley.edu)
