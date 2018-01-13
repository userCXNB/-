import {filzero} from "./fillzero.js";//为什么名字不能叫filzero

export const date=(time)=>{
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth();
    var day = d.getDate();
    var hour = d.getHours();
    var minute = d.getMinutes();
    var second = d.getSeconds();
    return year+'-'+filzero(month+1)+'-'+filzero(day)+"  "+filzero(hour)+':'+filzero(minute)+':'+filzero(second)
}
