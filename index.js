function add(a, b)
{
    return a + b
}

add(5,10) //these are the arguments

//arguments are the value you pass in (the 5 and 10 inside a and b)
//parameters are the named variables inside the function ie the containers, a and b

function sub (x, y)
{
    return x - y
}

sub (10, 5)

function foo (z = 3)
{
    console.log(z)
}

foo()


function example(a, b, c)
{
return (a + b + c)
}

example (10, 5, 3)
console.log('example = ' + example.length)

// if(example.length == 3)
// {
//     return example(a, b, c)
// }

function hello (x,y,z)
{
    console.log(arguments.length)
}
hello(1, 2)

// function foo(...args)
// {
//     console.log(args[3])
// }

// var arr = [1, 2, 3, 4, 5]

// foo(...arr)

function foo(x, y, z, d, ...args)
{
    return console.log (x, y, z, d, args)
}

foo(1, 2, 3, 4, 5, 6, 7)  //so you can write the letter d in there to add the number 4 into the parameters instead of being part of the array

// function asd(...args) //instead of using variables like x y x, we use ...args (spread operator)
// {                     //and it can hold the all these indexes that you can write down there
//     console.log(args[5]) //so the spread operator is going through the array and finding the 5th index, which is 6, since index starts at zero
// }

// var arr = [1, 2, 3, 4, 5, 6, 7]

// asd(...arr)


function test(...args)
{
    console.log(args[2])
}

var args = [24, 62, 43, 56]
test(...args)