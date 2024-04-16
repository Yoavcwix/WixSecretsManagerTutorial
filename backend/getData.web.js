//Watch the setup tutorial here: https://www.youtube.com/watch?v=93E7Ei5gPNM

import { Permissions, webMethod } from "wix-web-module";
import {secrets} from 'wix-secrets-backend.v2';
import {fetch} from 'wix-fetch';
import * as wixAuth from 'wix-auth';


export const getData = webMethod(Permissions.Anyone, () => { 
    const elevateSecret = wixAuth.elevate(secrets.getSecretValue)
    return elevateSecret('MySecret')
    .then((apiKey) => {
      return fetch(`https://www.someendpoint.com/api/?authkey=${apiKey.value}&additionalParams=123`, { "method": "get" }) 
      .then((httpResponse) => {
        if (httpResponse.ok) {
          return httpResponse.json()
        } else {
          return Promise.reject("Error getting data")
        }
      })
      .then(json => {return json})
      .catch (err => console.log(err))
    })


  }
);
