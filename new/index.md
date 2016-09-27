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

## authorization-code(user/password)
Obtain an authorization-code from the API (instead of UI)*

### Request
```POST /api/v2016/me/authorize   { email: "xxxx", password: "xxxx" }```

### Response
```{ code: "AAAAAAAAAAAAAAAA", expire_in: 300 }```

## authorization-code(with delegation)

### Allwos a custom application to obtain an OAuth authorization-code from CBD accounts.cbd.int though end-user authorization.

##### Resource


| Parameter     | Description   | 
| ------------- |:-------------:|
| response_type | response_type can be code (recommended for services) or token (recommended for web and native (e.g. iOS, Android) applications). |
| client_id     | custom application client id |
| redirect_uri | The redirec uri is used to redirect the user after he makes a decision to allow or deny your applications access to their account|
| scope | The scope of access your application requires to the users account |


## Exchange authorization-code for access-token
## Authorizing a request




### HTTP Request

`GET http://example.com/kittens/<ID>`

### URL Parameters

Parameter | Description
---- | ----
ID | The ID of the kitten to retrieve

