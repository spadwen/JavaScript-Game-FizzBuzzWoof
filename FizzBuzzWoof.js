
var num  = 1;
    var FIZZ = 3;   
    var BUZZ = 5;   
    var WOOF = 7;
    var mytotal = 1500; 
                   

    while (num < mytotal)
    {
        var flag = false;
        if (num % FIZZ == 0) { document.write ("Fizz"); flag = true; }
        if (num % BUZZ == 0) { document.write ("Buzz"); flag = true; }
         if (num % WOOF == 0) { document.write ("Woof"); flag = true; }
        if (flag == false)   { document.write (num); }
        document.write ("<br>");
        num += 1;
    }


