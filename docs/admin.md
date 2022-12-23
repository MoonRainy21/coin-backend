## /admin

### GET /event
#### Header
x-api-key: string (secret key is encrypted with SHA(384))
#### Query
approved?: boolean (used as a filter)
#### Body
None
#### response
status
200 : ok
401 : unauthorized

body
Event[]

### POST /event
#### Header
x-api-key: string (secret key is encrypted with SHA(384))
#### Query
None
#### Body
```ts
{
    id: string,
    isApproved : boolean
}
```
#### response
status
200 : ok
401 : unauthorized
404 : Not Found

body
Event

### POST /money
#### Header
x-api-key: string (secret key is encrypted with SHA(384))
#### Query
None
#### Body
```ts
{
    kyoId: string,
    increasement: number
}
```
#### response
status
200 : ok
401 : unauthorized
404 : Not Found

body
User