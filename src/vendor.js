/*This file contains references to vendor libraries
  w're using in this project. This is used by webpack
  in production build only. A separate bundle for vendor
  code is useful since it's unlikely to change as often
  as the application's code. So all the libraries we reference
  here will be written to vendor.js so they can be
  cached until one of them change. So basically this avoids
  customers having to download a huge JS file anytime a line
  of code changes. They only have to download vendor.js when
  a vendor library changes which should be less frequent.
  Any files that aren't referenced here will be bundeled into
  main.js for the production build.
*/

/* eslint-disable no-unused-vars */

import fetch from 'whatwg-fetch';
