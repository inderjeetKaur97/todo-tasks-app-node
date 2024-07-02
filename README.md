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
<li>git clone ["git-http-utl](https://github.com/inderjeetKaur97/planet-x-dynamic_questionnaire_system.git)</li>
<li>npm install //node_modules</li>
</ol>

<h4><strong>How to use the project </strong> </h4>
<p>Below is the api documentation url for the project . The documentation is written with all request , response and other parameters</p>
<h5>Postman collection documentaion URL - </h5>
<a href="https://documenter.getpostman.com/view/32959700/2sA3JNa11Z">https://documenter.getpostman.com/view/32959700/2sA3JNa11Z</a>

<h4><strong>Project Folder Structure</strong> </h4>
<p>Following are the project modules</p>
<ol>
<li>config - has env variables(to be used directly as variables) and db configuration file</li>
<li>controller - has controller function for user and questionnaire module</li>
<li>helpers - has modular function like generate auth token and response handler class.</li>
<li>middleware - has auth middleware used in questionnaire apis</li>
<li>models - has mongodb collection schema written with mongoose library</li>
 <li> mongodb_collection- has json sample collection data. import it locally .</li>
<li>resources - has function to read/write into databse collection</li>
<li>routes - has user and questionnaire route modules</li>
<li>validation - has joi validation functions used as middleware in apis</li>
<li>.gitignore - has has node modules in gitignore. .env is added to repo as it is a sample project</li>
<li>app.js - has the app logic in the file</li>
<li>server.js - has server and port logic in the file</li>
</ol>

<h4><strong>Project Flow</strong> </h4>
<ol>
<li>The project user authentication and role authorisation for admin and user</li>
<li>Admin needs to be created manually. user can be created by admin only/li>
<li>admin can create a questionnaire . The questionnaire fields can have various validations. The validations are added in a meta collection where certain propeties like a number can have min_limit ,max_limit is given . many more properties can be created/li>
<li>Frontend can fetch these properties and can show what validation admin wants to add/li>
<li>Admin can add those validations to the questionnaire and create it/li>
<li>User are then allowed to submit questionnaire/li>
<li>Admin can view analytics like , total views , total submissions , total views by a particular user etc</li>
</ol>

<h4>My Journey with the project</h4>
<p>I really like developing the project . This was a simple yet commanly used task where user wants to create on the go forms. This system can be used in that. The challanges I face in the project include How to make the project more scalable. I wanted to create the collection of database in such a way that it can handle different validations in future as well. </p>
<p>The projects Backend was done in a manageable timeline.But could not develop front end in the time frame. I could have deployed the backend on any AWS or any other server if credential was provided. </p>
<p>Apart from above he project was fun to do .Have implenated various libraries in the project for it to be modular and understanble for new developer. The project is scalable and the project structure is moduler for further addition</p>

