import { AES } from "crypto-js";
import CryptoJS from 'crypto-js';


const key = '2jsUH1rxG4XS5XVeabwJBP9K69TPSc';

export const userDataStore = (data) => {
    var ciphertext = AES.encrypt(JSON.stringify(data), key).toString();
    localStorage.setItem('userData',ciphertext)
};


export const getUserData = () => {

    const ciphertext = localStorage.getItem('userData');
    if (ciphertext) {
        var bytes = AES.decrypt(ciphertext, key);
        var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        return { ...decryptedData }
    } else {
        return { result: false, rolesAllowed: [], useremail: "" }
    }
   

}
export const stringDecrypt = (ciphertext) => {
    const s = ciphertext.toString().split("&&&");
    s.forEach(x => {
        ciphertext = ciphertext.replace("&&&","/") 
    })
    return AES.decrypt(ciphertext, key).toString(CryptoJS.enc.Utf8);
}