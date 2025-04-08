var x =10;

var str = x.toString();

console.log(typeof str, str);

var str = x + "";

console.log(typeof str, str);

String(1);
String(NaN);
String(Infinity);

(1).toString();
1+'';


Number('0')
Number('-1');

Number(true);

parseInt('0');

+'0';
+false;

'0'*1;

false*1;

Boolean('x');
Boolean(0);
Boolean(NaN);
Boolean(Infinity);

Boolean({});
Boolean([]);

!!'x'


'Cat' && 'Dog';

var elem = null;
var value = elem && elem.value;

function getStringLength(str) {
    str = str || '';
    return str.length;
}

getStringLength();
getStringLength('hi');


function getStringLength(str =''){
    return str.length;
}
getStringLength();
getStringLength('hi');

var elem = null;
var value = elem?.value;
console.log(value);

var elem = null;
var value = elem && elem.value;
console.log(value);

var str = ''
var length = str && str.length;
console.log(length);

var foo =null ?? 'default string';
console.log(foo);

var foo = '' || 'default string';
console.log(foo);

var foo = '' ?? 'default string';
 