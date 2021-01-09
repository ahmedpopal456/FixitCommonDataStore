# Introduction

This data store library will be used across all Fixit applications to manage application state in a predictable way.

# Build and Test

`npm run test` will run unit tests for this library.

# Contribute

TODO: Explain how other users and developers can contribute to make your code better.

## Installation
⚠️ Before installing, make sure that you have followed the steps to [connect to the azure feed](https://dev.azure.com/FixIt-App/FixIt-Capstone/_packaging?_a=connect&feed=FixitFeed).

#### Install the package
```sh
npm install fixit-common-data-store
```

## Example usage
```ts
import dataStore from 'fixit-common-data-store'
```

#### Accessing the state

```ts
dataStore.store.getState()
```

#### Initializing a slice's actions

```ts
const configFactory = new dataStore.ConfigFactory()

// ... init the config ...

const userService = new dataStore.UserService(configFactory)
const userActions = dataStore.initUserActions(userService)
```

#### Dispatching actions

```ts
dataStore.store.dispatch(userActions.changeUserDisplayName("my new user"))
```
