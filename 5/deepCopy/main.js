/**
 * Created by andrew on 16.11.14.
 */
function deepCopy1(a) {
    if(typeof a === 'object'){
        var tmp = JSON.stringify(a);
        b = tmp;
        b = JSON.parse(b);
        return b;
    }
    else{
        alert('Error');
    }
}

function deepCopy2(a) {
    if(typeof a === 'object'){
        var tmp = a.constructor();
        for(var key in a){
            if(typeof a[key]=== "object"){
                tmp[key] = this.deepCopy2(a[key]);
            }
            else{
                tmp[key] = a[key];
            }
        }
        return tmp;
    }
    else{
        alert("Error");
    }
}

var a = {b: 'c', d: {e: 'f'}};
var b1 = deepCopy1(a);
console.log(b1);
var b2 = deepCopy2(a);
console.log(b2);