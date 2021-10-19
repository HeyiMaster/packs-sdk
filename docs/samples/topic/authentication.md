# Authentication

The SDK broadly divides authentication into two categories: authentication that is tied to the user of the pack vs authentication that is managed by the system, aka the pack author. In the pack definition the former is known as `defaultAuthentication` and the latter `systemConnectionAuthentication`. You will typically specify one or the other in your pack definition, or neither if your pack does not make http requests or those requests do not require authentication.

Default authentication is the most common. Specify this if each user of your pack should log in with OAuth, or have their own API key, or whatever user-specific token is necessary for the pack to be able to retrieve data that is specific to that user.

Use system authentication if you as the pack author will provide the necessary tokens to successfully make http requests within your pack. An example would be if your pack returns weather forecasts and the API involved requires an API key, but individual users need not provide their own API key. You as the pack author will register an API key and provide it to Coda, and Coda will apply it to all pack requests regardless of the user.

=== "System Authentication"
    ```ts
    pack.setSystemAuthentication({
      // Replace HeaderBearerToken with an authentication type.
      // (Not all authentication types are available for system authentication.)
      type: coda.AuthenticationType.HeaderBearerToken,
    });
    ```
=== "User Authentication"
    ```ts
    pack.setUserAuthentication({
      // Replace None with the authentication type that applies for your pack.
      type: coda.AuthenticationType.None,
    });
    ```