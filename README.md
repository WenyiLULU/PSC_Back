<img src="https://res.cloudinary.com/cocktail-lab/image/upload/v1659478720/pscImage/logo_v3_w_rg8t3u.png" alt="logo" width="100"/> 

# Pet Social Club Back-end 

## Description
PSC is an application that connects people looking for pet sitters to take care of their animals with users who are available to do so in a selected timeframe. 
 
For best performance use a computer with a Chrome or Firefox browser to view the site. It is also supported for mobile phone use. 

The project was to create an online app with MERN stack. We used Express.js, JavaScript, Mongo, Node.js, React as well as Mantine. The app includes sign up, log in & log out functionality with encrypted passwords and the private routes are protected. Further technical improvements could be made to the website in the future.

For this project, the back-end and front-end are seperated in two repositories.

The website was first launched in July 2022 via Heroku and Netlify.

<img src="https://res.cloudinary.com/cocktail-lab/image/upload/v1659479079/pscImage/homepage_hgdp0h.png" alt="homepage" width="800"/> 


## User Stories
- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault 
- **homepage** - As a user I want to be able to access the homepage so that I see what the app is about and login and signup
- **sign up** - As a user I want to sign up on the webpage so that I can see all the events that I could attend
- **login** - As a user I want to be able to log in on the webpage so that I can get back to my account
- **logout** - As a user I want to be able to log out from the webpage so that I can make sure no one will access my account
- **user profile create and edit** - As a user I can choose a nice picture and present my self as well as edit my profile as I want
- **pets create and edit** - As a user I can create and edit a profiles for each of my pets
- **propose availabilities** - As a user I can share all my availabilities of setting pets to let other uses know
- **search and create appointments** - As a user I want to be able to find and book offers or requirements of pets setting service


## Backlog
- Ad banners (maybe)
- Editable availabilities and appointments, edit photos. 
- Improve interactions and flow: confirm deletion, warnings, etc.
- Notification and conversation system between users after appointment requests, before confirming appointments (create pending / agreed status).
- Comment / Rating system for Users after appointments to improve search and decision making ability of users.
- See profiles of other users / pets
- Create more pet interaction features, e.g. a best friend list.
- Create a places component to incorporate outdoor venues in a city


## API ROUTES:
The root for the API is:
**`https://github.com/WenyiLULU/PSC_Back.git`**.

The available endpoints are the following:

| method | Endpoint | Response | Action |
| --- | --- | --- | --- |
| POST | /auth/signup | 201 | Create new user |
| GET | /auth/login | 200 | Login and create token |
| GET  | /auth/verify | payload  |  |
| GET | /api/user/:userId | {user’s information } | Find a user by Id and return his information |
| PUT | /api/user/:userId | 201 | Update user’s information |
| PUT | /api/user/:userId/password | 201 | Update user’s password |
| PUT | /api/user/:userId/image | 201 | Update user’s photo |
| GET | /api/pet | [{pet info}] | Get all pets information |
| POST | /api/pet/create | 200 | Create a new pet |
| GET | /api/pet/:petId | {pet info} | Get one pet information by id |
| PUT | /api/pet/:petId | 200 | Update pet information |
| DELETE | /api/pet/:petId | 200 | Delete a pet |
| GET | /api/availability | [{availability info}] | Get all availability informations |
| POST | /api/availability/create | 201 | Create a new availability |
| GET | /api/availability/:availId | {availability info} | Get an availability information |
| PUT | /api/availability/:availId | 201 | Update an availability |
| DELETE | /api/availability/:availId | 200 | Delete an availability |
| GET | /api/appointment | [{appointment info}] | Get all availabilites informations |
| POST | /api/appointment/create | 201 | Create a new appointment |
| GET | /api/appointment/:appointID | {appointment info} | Get an appointment information |
| PUT | /api/appointment/:appointID | 201 | Update an appointment |
| DELETE | /api/appointment/:appointID | 200 | Delete an appointment |


## Models
| Pets | Users | Avalibilities | appointment |
| --- | --- | --- | --- |
| name : string | user name : string (required) | author : id of user | place id |
| age : number | e-mail : string (unique, required) | type : offer / require | time : { start, end} |
| breed : string | address : { country, city} (required) | start time | city: string |
| img : [ string (url) ] | password : (required) | end time | sitter: user id reference |
| habits : string | img : string (url) | city:  | pet owner: used id ref |
|  | owner : boolean | place: | pets : [ pet id ]  |
| special needs (description) : string | sitter: boolean |  |  |
| id of owner : reference | pets : [ id of pets ] |  |  |
| category: enum (cat, dog, bird) | payment: free/not, exchange |  |  |
| size : enum (s, m, l) | experience level : string |  |  |
|  | description: string |  |  |
| best friends : [other pets ids] |  |  |  |
|  |  |  |  |


## Links
### Notion
[Plan of the project](https://torpid-snapdragon-5a3.notion.site/PSC-PETS-SOCIAL-CLUB-99f8eb8fdf234f0ba84e3c2f75ce92c4) 

### Git

[Front-end Repository Link](https://github.com/WenyiLULU/PSC_Front.git)

[Back-end Repository Link](https://github.com/WenyiLULU/PSC_Back.git)

[Front-end Deploy Link](https://petsocialclub.netlify.app/)

[Back-end Deploy Link](https://psc-back-tofly.fly.dev/)

### Slides

[Slides Link](https://docs.google.com/presentation/d/1IWbvzr0XME-KFSlnaHSUaDQjtWv4_fp14Kuvp34et9I/edit#slide=id.g12c83e1429a_0_0)

