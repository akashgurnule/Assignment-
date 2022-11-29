let num=10;   
 count=0;
    for(i=1;i<=num;i++)
    {
        if(num%i==0)
        {
            count++;
        }
    }
    if(count==2)
    {
        console.log("it is a prime number ")
    }
    else{
        console.log("is not a prime number")
    }