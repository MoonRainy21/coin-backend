### Prerequisites
Make sure you installed [Node.js](https://nodejs.org/) and [npm](https://npmjs.com).
When using windows, install unix tools and git bash from [git](https://git-scm.com/download/win).


### Initial setup

Clone this repository and install all dependencies: 

``` shell
$ git clone https://github.com/SSHS-pebble/coin-backend.git
$ cd coin-backend
$ npm install
```

This repository uses typescript, so run the following before starting server:

```shell
tsc
npm -g install tsc-watch
tsc-watch --on-Success "node dist"
```


### env

This repository does not contain a .env file; db connection uri and user information is within a directory called `secret`.

To run this script, run the following:

```shell
cd ./src
mkdir secret
cd ./secret
touch admins.ts boothEvents.ts mongoURL.ts staffs.ts users.ts
```

Edit `mongoURL.ts` by:
```shell
vim mongoURL.ts
```
and add the following:
```ts
export const MONGODB_URI: string = //(your mongodb uri)
```

Next, add the booth events as a list of type [`BasicBoothEvent`](docs/types.md) in `boothEvents.ts`.
As an example, add:
```ts
import { BasicBoothEvent } from "../util/types";

export const BOOTHEVENTS: BasicBoothEvent[] = [{
    boothName: 'samoong',
    eventName: 'pushup',
    value: 10
}]
```

Finally, add the required information in the rest of the files within `./secret`.
As an example, see `users.ts`:
```ts
export const USERS: string[] = //[list of hashed user api keys as string]
```


### Authorization

To authenticate a user, you should include api keys(in the form of kyoId+(extra string)) in the request headers and include the hashed api key within `secret/users.ts`.
To authenticate a staff or administrator, you should include api keys(any form) in the request headers and include the hashed api key within `secret/staffs.ts` and `secret/admins.ts` respectively.
See [`./src/middleware/auth.ts`](src/middleware/auth.ts) for details.