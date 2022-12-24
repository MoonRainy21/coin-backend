## /admin

### GET `/event`
#### Request Header

| Key       | Value  |
| --------- | ------ | 
| x-api-key | string |

(secret key is encrypted with SHA(384))
See `Authorization` at [`docs/setup`](./setup) for details

#### Request Query
| Key       | Value  |
| --------- | ------ | 
| isApproved | string( = "false" || "true") |

#### Response Body
| Status | Message                           |
| ---- | --------------------------------- |
| 200  | Ok                          |
| 400 | Bad Request(when request header is not in the right format) |
| 403 | Forbidden     |
| 404 | Not Found      |

#### Response Body
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