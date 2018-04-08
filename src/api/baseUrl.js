/*It will return Base Url on basis of Environment
If it is dev then it will return http://localhost/3000
Otherwise for prod it will return root (/) url
*/

export default function getBaseUrl() {
  return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3000/' : '/';
}

function getQueryStringParameterByName(name,url){
  if(!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name +"(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if(!results) return null;
    if(!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g," "));
}
