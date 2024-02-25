import {md5} from "js-md5";

const date = new Date()

const year = date.getFullYear()

const month = date.getMonth() + 1

const day = date.getDate()

const authKey = md5(`Valantis_${year}${month < 10 ? '0' + month : month}${day < 10 ? '0' + day : day}`)

console.log(authKey)
export default authKey