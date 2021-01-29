
//import { storage } from "../main";
export function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  export function CreateGuid() {  
    function _p8(s) {  
       var p = (Math.random().toString(16)+"000000000").substr(2,8);  
       return s ? "-" + p.substr(0,4) + "-" + p.substr(4,4) : p ;  
    }  
    return _p8() + _p8(true) + _p8(true) + _p8();  
 }
 export function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    export  function logUser(action){
      const log = {};
      let user = getCookie('hechtUser');
      let t = new Date();
      if(user===''){
         setCookie('hechtUser',CreateGuid(),1);
         user = getCookie('hechtUser');
      }
      if(!log[user]){
          log[user]={};
      }
      log[user][t.getDate()+'/'+t.getMonth()+1+'/'+t.getFullYear()+' '+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()]=action;
      console.log(log);
    }
