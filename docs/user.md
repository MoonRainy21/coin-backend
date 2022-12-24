## /user

### GET `/`
requires checking if the hashing of api key in header is inside `USERS`  
GETs the user data after authentication

#### Request Header(Auth)

| Key       | Value  |
| --------- | ------ | 
| x-api-key | string |

(secret key is encrypted with SHA(384))  
See `Authorization` at [`docs/setup`](./setup) for details


#### Request Body
None

#### Response Body
[`User`](./types.md)
```ts
{
    kyoId : string,
    money : number,
    totalMoney : number,
    password: string,
    lastEvents: BoothEvent[]
}
```

#### Response Result

| Status | Message                           |
| ---- | --------------------------------- |
| 200  | Ok                           |
| 403  | Forbidden |


### POST `/login`


#### Request Header

| Key       | Value  |
| --------- | ------ | 
| x-api-key | string |

(secret key is encrypted with SHA(384))  
See `Authorization` at [`docs/setup`](./setup) for details


#### Request Body
None

#### Response Body
[`User`](./types.md)
```ts
{
    kyoId : string,
    money : number,
    totalMoney : number,
    password: string,
    lastEvents: BoothEvent[]
}
```

#### Response Result

| Status | Message                           |
| ---- | --------------------------------- |
| 200  | Ok                           |
| 401  | Unauthorized |

