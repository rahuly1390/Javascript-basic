//Write a function called compute

const input = {
    A: (a,b,c) => a+b+c,
    B: (a,b,c) => a-b-c,
    C: (a,b,c) => a+bc,
    D:{ 
        E:(a,b,c) => a+b+c
    },
}

compute(1,1,1)
//O/P:{A:3,B:-1:C:1:D:{E:3}}