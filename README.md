# NodeJS Restful API Library App
## Getting Started
### Made With
* Node.js
* Express
* JsonWebToken
### Features
* Auth with jwt
* CRUD
* Cors
* Sorting
* Search
* Pagination
### Flowchart App
[Click Here](https://drive.google.com/file/d/1j7lRzfe3SeHC1U0qld22LBxOtvUiPKEb/view?usp=sharing)
### Installing Library App
> clone repo and install package
```
$ git clone https://github.com/byasaa/restfulapi-library-app.git
$ cd restfulapi-library-app
$ npm install
```
### Environment Configuration
copy .env file from .env.example
```
$ cp .env.example .env
```
setting .env file
### Start Development Server
```
$ npm start
```
## API Documentation
### Scheme
> Endpoint API available in
```
http://localhost:3000/api
```
### HTTP Verbs

| Verbs    | Description                                           |
| -------- | ----------------------------------------------------- |
| `GET`    | Request data from the server                          |
| `POST`   | Sending data to the server                            |
| `PUT`    | Change all data that is already on the server         |
| `PATCH`  | Change Most of the data already exists on the server  |
| `DELETE` | Delete data that is already on the server             |

### Endpoint
| Verbs     | Description      |
| --------- | -----------------|
| `/books`  | Book             |
| `/auth`   | Auth             |
| `/loans`  | Loans            |
| `/authors`| Author           |
| `/genres` | Genre            |
| `/users`  | User             |
## License
© [Muhamad Abiyasa Sastra Wardana](https://github.com/byasaa)
