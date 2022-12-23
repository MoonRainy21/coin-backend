## /user

### GET `/`
requires checking if the hashing of api key in header is inside `USERS`  
GETs the user data after authentication

### Request Header(Auth)

| Key       | Value  | 
| x-api-key | string |


### Request Body

None

### Response Body
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

### Response Result

| code | message                           |
| ---- | --------------------------------- |
| 200  | Success                           |
| 401  | Unauthorized |


### POST `/login`

### Request Header(Auth)
None
| Key       | Value  | 
| --------- | ------ |

### Request Body
```ts
{
    id: string,
    password: string //password should be encoded with SHA(384)
}
```

### Response Body
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

### Response Result

| code | message                           |
| ---- | --------------------------------- |
| 200  | Success                           |
| 401  | Unauthorized |

