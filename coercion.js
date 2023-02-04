console.log("45"-30);
console.log(4);


const loginDetails = [] //suppose we get data from an api to login the user

const loginID=loginDetails[0];

if(loginID){   //instead of writin loginID!==undefined
    console.log("Login");
}else{
    console.log("Auth Failed");
}

// values that can be interpreted as zero
null;
undefined;
""
false;
0;

// values that can be interpreted as 1
{}
[]
" "
1
true
