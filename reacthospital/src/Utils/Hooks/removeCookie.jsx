import Cookie from "js-cookie";

const RemoveCookie = (cookiesname)=>{
    return Cookie.remove(cookiesname);
};
export default RemoveCookie;