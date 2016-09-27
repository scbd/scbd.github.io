---
title: SCBD OAuth Refernce
layout: layout
version: v1.0
lang: en

language_tabs:
- http
- ruby:NodeJS


toc_footers:
  - <a href='#'>Sign Up for a Developer Key</a>
  - <a href='http://github.com/tripit/slate'>Documentation Powered by Slate</a>

includes:
  - _errors

search: true
---

# Introduction

Understanding the way OAuth works can help create and debug applications which use SCBD's API. To use OAuth, an application must:

Obtain access tokens to act on behalf of a user account.
Authorize all HTTP requests it sends to SCBD's APIs.

The following pages will cover exactly how to obtain authorization through OAuth.


# OAuth FAQ

## What is OAuth?
OAuth is an authentication protocol that allows users to approve application to act on their behalf without sharing their password. 
More information can be found at [oauth.net]oauth.net 
## Where do I create an OAuth application?
Currently SCBD restricts access to OAuth application. please contact SCBD's IT team to create application for you. Please provide
following information to create a new application
1. Application Name
2. Application Logo
3. Application Website
4. Callback URL
The redirect URI is where the service will redirect the user after they authorize (or deny) your application, and therefore the part of your application that will handle authorization codes or access tokens.

## What do you get from a new OAuth application?
Once your application is registered, you will be issue "client credentials" which consists of client ID and a client secret. 
The Client ID is a publicly exposed string that is used to identify the application, and is also used to build authorization URLs. 
The Client Secret is used to authenticate identity of the application when the application is making calls like get access token, renew access token.
The Client Secret should be securely stored.
## How long does an access token last?
Access tokens are valid for 365 days. Your access token will be invalid if there is a change in scope or if the user explicitly revokes your application
 or if a SCBD admin suspends your application.
## What do I do if an access token expires?
You can request renewal of the existing token by proving a refresh token.
## What is a refresh token?
A refresh token is another token which never expires and can be used to renew expired access tokens.
## How long does an refresh token last?
A refresh token never expires unless if there is a change in scope or if the user explicitly revokes your application or if a SCBD admin suspends your application..


# OAuth API calls

## Authorization-code(user/password)
Obtain an authorization-code from the API (instead of UI)*

#### Request
```
POST /api/v2016/me/authorize   { email: "xxxx", password: "xxxx" }
```

#### Response
```
{ code: "AAAAAAAAAAAAAAAA", expire_in: 300 }
```

## Authorization-code(with delegation)

Allows a custom application to obtain an OAuth authorization-code from CBD accounts.cbd.int though end-user authorization.

##### Resource
```
https://accounts.cbd.int/authorize?response_type=code&client_id=1111&redirect_uri=xyzxyzxyz&scope=all
```

| Parameter     | Description   | 
| ------------- |:-------------|
| response_type | response_type can be code (recommended for services) or token (recommended for web and native (e.g. iOS, Android) applications). |
| client_id     | custom application client id |
| redirect_uri | The redirec uri is used to redirect the user after he makes a decision to allow or deny your applications access to their account|
| scope | The scope of access your application requires to the users account |

#### Response
If code, the AUTHORIZATION_CODE will be returned as below.
```
https://client.com/callback?code=AUTHORIZATION_CODE
```

If token, the ACCESS_TOKEN will be returned as below. Note the # instead of the ?.
```
https://client.com/callback#token=ACCESS_TOKEN
```

## Exchange authorization-code for access-token
In case if you have a `authorization_code` you can exchange it for a `access_token`

##### Resource
```
POST /api/v2016/oauth2/token
{ client_id: "1111", secret: "xxxx", code: "AAAAAAAAAAAAAAAA" }
```

| Parameter     | Description   | 
| ------------- |:-------------|
| client_id     | custom application client id |
| client_secret | The applications client secret|
| code | The newly received code from the Authorization-code call |

#### Response

```
{ access_token: "BBBBBBBBBBBBBBBB", expire_in: 31536000, scope: "ALL", refresh_token: "CCCCCCCCCCCCCCCC", token_type: "Bearer" }
```
| Parameter     | Description   | 
| ------------- |:-------------|
| access_token     | The `access_token` exchanged for the code |
| expire_in | The expiration of the `access_token` in seconds|
| scope | The authorised scope for the application |
| refresh_token | The `refresh_token` for this authorization which can be used to renew `access_token` |
| token_type | The type of the token which should be used when authorizing a request|


## Authorizing a request
All SCBD API calls should be authorised by proving a `access_token` type `Bearer` in the Authorization http-header
```
GET /api/v2016/me
Content-Type: application/json
Authorization: Bearer="BBBBBBBBBBBBBBBB"
```
### HTTP Request

`GET http://example.com/kittens/<ID>`

### URL Parameters

Parameter | Description
---- | ----
ID | The ID of the kitten to retrieve

