function palindrome() {  
    var a, b, no, temp = 0;  
    no = Number(document.getElementById ("palindrome").value);  
    b = no;  
    while (no > 0)  
    {  
    a = no % 10;  
    no = parseInt( no / 10);  
    temptemp = temp*10 + a;  
    }  
    if (temp == b)  
    {  
    console.log( "It is a Palindrome Number");  
    }  
    else  
    {  
    console.log("it is not a Palindrome Number");  
    }  
    }  
    