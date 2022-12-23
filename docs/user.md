## /user

### GET /
#### Header
None
#### Query
None
#### Body
None
#### response
status
200 : ok
401 : unauthorized
body
User

### POST /login
#### Header
None
#### Query
None
#### Body
```ts
{
    id: string,
    password: string //password should be encoded with SHA(384)
}
```
#### response
status
200 : ok
401 : unauthorized
body
User