# Example project to show how google oauth can be configured in Remix

This is just a default remix project made using `npx create-remix@latest`, I have not changed anything from the default project except add a few files to get oauth running.

## Env

```sh
GOOGLE_CLIENT_ID="Client ID provided by google console"
GOOGLE_CLIENT_SECRET="Client Secret provided by google console"
SESSION_SECRET="Random string"
```

I used `node -e "console.log(crypto.randomBytes(32).toString('hex'))"` to generate session secret

