---
title: SCBD OAuth Refernce
layout: layout
version: v1.0
lang: en

language_tabs:
  - node: NodeJS

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
## Where do I create an application?
Currently SCBD restricts access to OAuth application. please contact SCBD's IT team to create application for you.
## How long does an access token last?
Access tokens expires in 24 hours. Your access token will be invalid if there is a change in scope
 or if a Twitter admin suspends your application.
## What do I do if an access token expires?
You can request renewal of the existing token by proving a refresh token.
## What is a refresh token?
A refresh token is another token with higher expiry date which can be used to renew expired access tokens.
## How long does an refresh token last?
A refresh token has a expiry of 365 days.
### HTTP Request

`GET http://example.com/kittens/<ID>`

### URL Parameters

Parameter | Description
---- | ----
ID | The ID of the kitten to retrieve

