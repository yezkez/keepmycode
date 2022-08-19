























// import{make_cross, rcross, blank, beside, stack, show, square, stack_frac, beside_frac } from "rune";

// function fractal(pic, n) {
//     return n === 0
//     ? blank
//     : beside(pic, fractal(stack(pic, pic), n-1));
// }

// show(fractal(make_cross(rcross), 3));

// function hook(n) {
//     return stack_frac(1/2, square, beside_frac(1-n, blank, square));
// }

// function hook(n) {
//     return stack_frac(1/2, square, beside_frac(n, square, blank));
// }

// show(hook(1/2));
































// import { show, stack_frac, heart, sail } from "rune";
// show(stack(heart, stack(heart, heart)));
// show(stack_frac(1/3, heart, sail));

// function stackn(n, rune) {
//     return n === 1
//             ? rune
//             : stack_frac(1/n, rune, stackn(n - 1, rune));
// }

// show(stackn(4, heart));

// function square(x) {
//     return x * x;
// }

// function repeat_pattern (n , pat , init ) {
// return n === 0
//     ? init
//     : pat ( repeat_pattern ( n - 1 , pat , init ));
// }
// repeat_pattern (3, square, 2);

// function repeat_pattern (n , pat , rune ) {
// return n === 0
//     ? rune
//     : repeat_pattern ( n - 1 , pat , pat ( rune ));
// }
// repeat_pattern (
// 3 ,
// square ,
// 2);

// function factorial(n) {
//     return n === 1? 1: n * factorial(n - 1);
// }

// factorial(5);

// function iter ( product , counter , n ) {
// return counter > n
// ? product
// : iter ( counter * product ,
// counter + 1 ,
// n );
// }

// function factorial ( n ) {
// return iter (1 , 1 , n );
// }


// factorial(5);