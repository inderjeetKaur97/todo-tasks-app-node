<h1><strong>Todo tasks Backend app</strong></h1>

<h3>Description</h3> 
This is a backend developed on node.js , express framework with typescript for the project . The Application creates a todo tasks by authenticated users , who can then update completed and set reminders to there tasks.

<li>Server - Node.js</li> 
<li>Language - Typescript</li>
<li>Framework - express.js</li>
<li>Data base - MongoDB</li>

<h4><strong>How to Install and Run the Project</strong> </h4>
steps to install the git repo
<ol>
<li>git clone ["git-http-url"](https://github.com/inderjeetKaur97/todo-tasks-app-node/tree/master)</li>
<li>npm install //node_modules</li>
</ol>

<h4><strong>How to use the project </strong> </h4>
<p>Below is the api documentation url for the project . The documentation is written with all request , response and other parameters</p>
<h5>Postman collection documentaion URL - </h5>
<a href="https://documenter.getpostman.com/view/35052813/2sA3dxCWsb">https://documenter.getpostman.com/view/35052813/2sA3dxCWsb</a>

<h4><strong>Project Folder Structure</strong> </h4>
<p>Following are the project modules</p>
<ol>
<li>config - has env variables(to be used directly as variables) and db configuration file</li>
<li>controller - has controller function for user and todos module</li>
<li>helpers - has modular function like generate auth token and response handler class.</li>
<li>middleware - has auth middleware used in todo apis</li>
<li>models - has mongodb collection schema written with mongoose library</li>
<li> mongodb_collection- has json sample collection data. import it locally .</li>
<li>resources - has function to read/write into databse collection</li>
<li>routes - has user and todo route modules</li>
<li>validation - has joi validation functions used as middleware in apis</li>
 <li>Services - has cron service and node mailer service for sending email notification</li>
<li>.gitignore - has has node modules in gitignore. .env is added to repo as it is a sample project</li>
<li>app.js - has the app logic in the file</li>
<li>server.js - has server and port logic in the file</li>
</ol>

<h4><strong>Project Flow</strong> </h4>
<ol>
<li>The project user authentication and role authorisation for user</li>
<li>Only authenticated user can create todo task</li>
<li>The todo task has crud apis </li>
<li>User can update completed status and set reminder with update api</li>
<li>every day at 8 am mail will be sent to all users who has todo task in that day/li>
</ol>


