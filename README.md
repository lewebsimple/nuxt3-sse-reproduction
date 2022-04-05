# Nuxt 3 Server-sent events bug reproduction

After starting the dev server, navigate to `http://localhost:3000/api/graphql` and execute the following GraphQL query:
```
subscription {
  time
}
```

The network request that should stay connected drops immediately and the subscription doesn't work.
