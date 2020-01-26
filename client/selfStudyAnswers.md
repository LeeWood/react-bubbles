#### Explain what a token is used for.
- Tokens are used in the authentication process. They are specific strings that are returned when a user is successfully authenticated(like logging into an application). They are added to a url's header (and API calls) and tells the server that a user is allowed access to certain features, pages, or data. The also allow users to make specific user requests.

#### What steps can you take in your web apps to keep your data secure?
- Proper user authentication is one of the main ways to make sure data is kept secure. Making sure that only an autheticated user (one who is given a token upon loggin in for example) has access to private routes would be a way of approaching this.

#### Describe how web servers work.
- A web server is a computer that stores data/code. This can be code for an external website, or programs that are run on that machine. They're connected to the internet and when a user makes specific requests on a site, the request is sent to the server which may or may not return some kind of data in reponse to that request.

#### Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
- Create(POST), Read(GET), Update(PUT), Delete(...DELETE!)