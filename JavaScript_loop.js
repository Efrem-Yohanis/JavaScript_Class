// // For Loop 

for (let i = 1; i < 5; i++)
{
  console.log(i);
}
// Using the JavaScript for loop without the initializer example
let j = 1;
for (; j < 10; j += 2) {
  console.log(j);
}

// // Using the JavaScript for loop without the condition example

for (let j = 1; ; j += 2) 
{
    console.log(j);
    if (j > 10) 
    {
      break;
    }
  }

//   // Using the JavaScript for loop statement without any expression example

let k = 1;
for (;;) {
  if (k > 10) {
    break;
  }
  console.log(k);
  k += 2;
}

// while loop 

let count1 = 1;
while (count1 < 10)
 {
    console.log(count1);
    count1 +=2;
}

var i =0;

while(i < 5)
{
    console.log(i);
    i++;
}

// do...while loop

// program to display numbers
let count = 0;
do {
  console.log(count);
  count++;
} while (count < 5)


