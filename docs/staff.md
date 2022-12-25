## /staff

### POST `/event`
#### Request Header(Auth)

| Key       | Value  |
| --------- | ------ | 
| x-api-key | string |

(secret key is encrypted with SHA(384))  
See `Authorization` at [`docs/setup`](./setup.md) for details

#### Request Body
```ts
{
    kyoId: string,
    eventName: string
}
```

#### Response Result
| Status | Message                           |
| ---- | --------------------------------- |
| 201  | Created                           |
| 400 | Bad Request(when request body is not in the right format) |
| 403 | Forbidden     |
| 404 | Not Found      |

#### Response Body
None
