import {heart, show, beside, stack} from "rune";
function fractal_3(rune, n) {
    if (n === 1) {
        return rune;
    } else { 
        const f = fractal_3(rune, n - 1);
        return beside(rune, stack(f, f));
}
show(fractal_3(heart, 3));

// function f(g) {
//     const x = 3;
//     return x => x + g(x);
// }
// (f(x => 2 * x))(4);

// const x = 5;
// function g(f, y) {
//     const h = (y, f) => y(f);
//     return h(f, y);
// }
// g(y => y + 2, x);
// function product(x) {
//     return x * (x + 1);
// }

// function next(x) {
//     return x + 1;
// }

// function sum(product, a, next, n) {
//     return a > n
//         ? 0
//         : product(a) + sum(product, next(a), next, n);
// }

// function my_sum(n) {
//     return sum(product, 1, next, n);
// }
// my_sum(3);
// function my_sum(n, x){
//     return n > x
//         ? 0
//         : n * (n + 1) + my_sum(n + 1, x);
// }
// my_sum(3, 4);
// // function make_adder ( x ) {
//     function adder ( y ) {
//         return x + y ;
// }
//     return adder ;
// }
// const adder_four = make_adder (4);
// adder_four (6);

// function first_denomination ( kinds_of_coins ) {
//     return kinds_of_coins === 1 ? 5 :
//             kinds_of_coins === 2 ? 10 :
//             kinds_of_coins === 3 ? 20 :
//             kinds_of_coins === 4 ? 50 :
//             kinds_of_coins === 5 ? 100 : 0;
// }

// function cc(amt, kinds_of_coins) {
//     return amt === 0
//             ? 1
//             : amt < 0 || kinds_of_coins === 0
//             ? 0
//             :cc(amt - first_denomination(kinds_of_coins), kinds_of_coins)
//          + cc(amt, kinds_of_coins - 1);
