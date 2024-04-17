# Read Me

## About this repo
This tutorial demonstrates how to work with wix-secrets-backend.v2, along with wix-fetch, wix-auth and wix-web-module to securely retrieve data from a 3rd party API.  

## Files
The tutorial contains code in two files: 
- HOME (this page) - triggers the call to the backend file, and receives the data to be displayed to the site visitor.
- BACKEND/GETDATA.WEB.JS - securely retrieves a key stored in the Secrets Manager and applies it to the third party API URL as an authentification key.

## Setup
To use this code on your Wix Studio website, watch the video tutoral here: https://www.youtube.com/watch?v=93E7Ei5gPNM 
or follow these steps:
1. Create an API key on the 3rd party API of your choice.
2. Store the API key in the Secrets Manager.
3. Modify the code in the GETDATA.WEB.JS file to retrieve the secret's value, and call the API. Test the API call using the run functions button. 
4. Click the button on this page and view the data retrieved in the console.

## More Info
For more info visit https://www.wix.com/velo/reference/wix-secrets-backend-v2

