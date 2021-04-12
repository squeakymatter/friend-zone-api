# Friend Zone 
A social network API 

## Description
This is a backend for an social network site built using MongoDB, Mongoose, Express and dayjs.
- Link to video walkthrough: https://youtu.be/4EGoVql65wM
---
## Table of Contents

- [User Story](###user_story)
- [Acceptance Criteria](###acceptance_criteria)
- [Installation](#installation)
- [Questions](#questions)
---
### User Story

AS A social media startup
- I WANT an API for my social network that uses a NoSQL database
    - SO THAT my website can handle large amounts of unstructured data

### Acceptance Criteria

GIVEN a social network API
- WHEN I enter the command to invoke the application
    - THEN my server is started and the Mongoose models are synced to the MongoDB database
- WHEN I open API GET routes in Insomnia Core for users and thoughts
    - THEN the data for each of these routes is displayed in a formatted JSON
- WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
    - THEN I am able to successfully create, update, and delete users and thoughts in my database
- WHEN I test API POST and DELETE routes in Insomnia Core
    - THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

---
### Installation

Prerequisite: This app requires MongoDB to be installed. Please visit [Install MongoDB](https://docs.mongodb.com/manual/installation/) for installation instructions. 
1. Clone the repo.
2. To install dependencies, navigate to the app's root directory and run
```
npm install
```

4. Connect to the mongoDB database.

5. Start the server
```
% node server.js
```
---
### Questions

If you have any questions, please contact repo owner:

- [GitHub](https:/github.com/squeakymatter)






