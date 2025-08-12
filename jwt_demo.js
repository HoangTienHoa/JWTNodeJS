const JWT = require('jsonwebtoken');
const keySecret = 'ThiIsVeryStrongSecretKey';
const token= JWT.sign({userId:123, roles:['admin']},keySecret, {algorithm:'HS256', expiresIn: '1h'});
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywicm9sZXMiOlsiYWRtaW4iXSwiaWF0IjoxNzU1MDE2MzQxLCJleHAiOjE3NTUwMTk5NDF9.XZT6NUl3GFl6rQ9BJ-q4irHcYXucf4BfYvtIENhQfnU
console.log('token: ',token);
JWT.verify(token,keySecret, (err, decoded) => {
    if (err) console.log('Error verify token',err);
    console.log('decoded:'+ JSON.stringify(decoded));
})