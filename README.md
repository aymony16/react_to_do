# Description

First exposure to react, this app will create a webserver that allows to add a text (to-do) item into a list and display on a webpage. 

Credit to:
https://www.digitalocean.com/community/tutorials/how-to-build-a-react-to-do-app-with-react-hooks



## Helpful tips from React app defualt README.md

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### Deployment to AWS - Dev
1. Launch instance on EC2, AWS Linux system 

2. SSH into instance
    1. add private key, make sure you have one setup on AWS, if not create one and    download
    2. navigate to location of private key 
    3. chmod 400 Key1.pem
    4. Go to AWS find the instance Public DNS, should look like this
    5. ec2-3-144-244-67.us-east-2.compute.amazonaws.com
    6. Now run the following 
    7. ssh -i "Key1.pem" ec2-user@ec2-3-144-244-67.us-east-2.compute.amazonaws.com


3. Inside the ssh of the instance 
    1. update yum (note: yum as suppose to other linux apt) 
    2. sudo yum update
    3. install compiler this can be python or nodejs
    4. sudo yum install nodejs
    5. check node version
    6. node -v
    7. check npx version
    8. npx -v
    9. check if git exist, if not install
    10. sudo yum install git
    11. clone repo 
    12. git clone link_to_repo
    13. run project 
    14. npm start 