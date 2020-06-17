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
$ git clone https://github.com/byasaa/library-app.git
$ cd library-app
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

| Verbs    | Description                |
| -------- | ---------------------------|
| `GET`    | request data from server   |
| `POST`   | send data to server        |
| `PUT`    | change all data            |
| `PATCH`  | change some data           |
| `DELETE` | delete data                |

### Endpoint
| Verbs     | Description      |
| --------- | -----------------|
| `/books`  | Book             |
| `/auth`   | Auth             |
| `/loans`  | Loans            |
| `/authors`| author           |
| `/genres` | genre data       |
| `/users`  | user             |
## License
© [Muhamad Abiyasa Sastra Wardana](https://github.com/byasaa)