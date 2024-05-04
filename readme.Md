GetYouTube Subscribers Application
Overview
The GetYouTube Subscribers application is a simple Node.js application utilizing MongoDB to store and retrieve subscriber information. This README provides an overview of the project, instructions on how to set it up, and details on its functionality.

Key Objectives
The key objectives of this capstone project include:

Team Collaboration: Encouraging teamwork and collaboration among learners to foster learning from each other's strengths and weaknesses.
Hands-on Work Experience: Providing learners with practical experience in building applications, thereby enhancing their skills and competencies.
Holistic Understanding: Ensuring learners gain a comprehensive understanding of various concepts related to Full Stack Web Development.
How to Do the Capstone Project

1. Project Execution
   Students are expected to have a clear understanding of the project and how to execute it. They can work on the project either individually or in groups. Collaboration is encouraged to maximize learning outcomes.

2. Group Project
   For group projects, students can form teams through community spaces and collaborate on the project together. Each team member should contribute equally to ensure comprehensive learning.

3. Individual Project
   Students can choose to work on the project individually, executing it with clarity and understanding of the tasks involved.

Guidelines for GetYouTube Subscribers
The project involves creating a simple application using MongoDB in Node.js. Below are the acceptance criteria for the application:

Database Setup: Run node src/createDatabase.js to create the database on your local machine (requires MongoDB installed).
Endpoints:
GET http://localhost:3000/subscribers: Response with an array of subscribers.
GET http://localhost:3000/subscribers/names: Response with an array of subscribers with only name and subscribedChannel fields.
GET http://localhost:3000/subscribers/:id: Response with a subscriber object with the given id, or status code 400 and error message if the id does not match.
Installation and Setup
Clone the repository from Subscribers-Mongo-Node-BoilerPlate.
Install dependencies using npm install.
Ensure MongoDB is installed on your local machine.
Run node src/createDatabase.js to create the database.
Start the server using node src/index.js.
Access the endpoints as described in the guidelines.
Files Structure
src/: Contains source code files.
createDatabase.js: Script to create the MongoDB database.
index.js: Main file to start the server.
models/subscribers.js: Model for subscribers.
README.md: Instructions and information about the project.
Conclusion
The GetYouTube Subscribers application provides learners with hands-on experience in building a Node.js application with MongoDB integration. By following the guidelines and objectives of the capstone project, learners can enhance their skills and understanding of Full Stack Web Development concepts.

Thank you for your participation!
