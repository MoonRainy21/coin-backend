## /admin

### GET `/event`
#### Request Header

| Key       | Value  |
| --------- | ------ | 
| x-api-key | string |

(secret key is encrypted with SHA(384))  
See `Authorization` at [`docs/setup`](./setup.md) for details

#### Request Query
query is not required; if there is no query, response body will be all events

| Key       | Value  |
| --------- | ------ | 
| isApproved? | string( = "false" or "true") |


#### Response Result
| Status | Message                           |
| ---- | --------------------------------- |
| 200  | Ok                          |
| 400 | Bad Request(when request query is not in the right format) |
| 403 | Forbidden     |
| 404 | Not Found      |

#### Response Body
Event[]

### Get `/users`
#### Request Header

| Key       | Value  |
| --------- | ------ | 
| x-api-key | string |

(secret key is encrypted with SHA(384))  
See `Authorization` at [`docs/setup`](./setup.md) for details

#### Request Query
query is not required; if there is no query, response body will be all users

| Key       | Value  |
| --------- | ------ | 
| kyoId? | string |

#### Response Result
| Status | Message                           |
| ---- | --------------------------------- |
| 200  | Ok                          |
| 400 | Bad Request(when request query is not in the right format) |
| 403 | Forbidden     |
| 404 | Not Found      |

#### Response Body
`User[]` if there is no query
`User` if there is query

### PATCH `/event`
#### Request Header

| Key       | Value  |
| --------- | ------ | 
| x-api-key | string |

(secret key is encrypted with SHA(384))  
See `Authorization` at [`docs/setup`](./setup.md) for details

#### Request Body
```ts
{
    id: string,
    isApproved : boolean // should always be true, not false
}
```
#### Response Result
| Status | Message                           |
| ---- | --------------------------------- |
| 200  | Ok                          |
| 400 | Bad Request(when request body is not in the right format) |
| 403 | Forbidden     |
| 404 | Not Found      |
| 409 | Conflict(when boothEvent is already approved) |


### PATCH `/money`
#### Request Header

| Key       | Value  |
| --------- | ------ | 
| x-api-key | string |

(secret key is encrypted with SHA(384))  
See `Authorization` at [`docs/setup`](./setup.md) for details

#### Request Body
```ts
{
    kyoId: string,
    incresement: number, // beware of spelling typo
    eventName?: string //not required
}
```
#### Response Result
| Status | Message                           |
| ---- | --------------------------------- |
| 200  | Ok                          |
| 400 | Bad Request(when request body is not in the right format) |
| 403 | Forbidden     |
| 404 | Not Found      |

