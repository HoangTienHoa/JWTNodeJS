# JWTNodeJS
 This project apply JWT for registry new user, create token, login, re-create token base on refresh token and delete token.
# Run Project
````
	npm i
	node authServer.js
	node resourceServer.js
````

# Register User:

POST: http://localhost:3000/register

BODY -> Raw -> JSON : 
````
{
    "username":"Hoa",
    "email":"ht.hoa.0603@gmail.com",
    "password":"123456789"
}
````
# Login

POST: http://localhost:3000/login

BODY -> Raw -> JSON : 
````
{
    "username":"Hoa",
    "email":"ht.hoa.0603@gmail.com",
    "password":"123456789"
}
````
# Resutl:
````
{
    "AccessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imh0LmhvYS4wNjAzQGdtYWlsLmNvbSIsImlhdCI6MTY5Mjk3NjQ0MiwiZXhwIjoxNjkyOTc2NTYyfQ.m8gwYJrJiVcuFEN2pQQ7j216tQrHADzgCJ89sxJEU7U",
    "RefreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imh0LmhvYS4wNjAzQGdtYWlsLmNvbSIsImlhdCI6MTY5Mjk3NjQ0Mn0.T3clbQVB0hKxiKLBjHSH4jiDcHHrDVrpfulzzLFk6Rc",
    "message": "You are logged-in"
}
````

# Generate new AccessToken base on RefreshToken

POST: http://localhost:3000/token

Headers: 
	Add new key-value 'authorization' and 'RefreshToken'


# Delete Token

DELETE: http://localhost:3000/delRefreshToken

Headers: 
	Add new key-value 'authorization' and 'RefreshToken'

# Test

GET: http://localhost:4000/greet

Authorization -> Bearer Token -> Paste the 'AccessToken'

# Ref

https://medium.com/swlh/authentication-and-authorization-using-jwts-in-node-js-2311468b9ff7
