## /staff

### POST /event
#### Header
x-api-key: string (secret key is encrypted with SHA(384))
#### Query
None
#### Body
```ts
{
    kyoId: string,
    eventName: string
}
```
#### response
status
201 : created
401 : unauthorized
404 : Not Found

body
None
