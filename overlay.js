import {circle, square, blank, ribbon, beside, scale, beside_frac, hollusion, stackn, overlay_frac, show} from "rune";

// function cone(n, rune){
//     return n === 0
//     ? blank
//     : overlay_frac(1/n, scale(1/n, rune), cone(n - 1, rune));
// }
function cone(n, rune){
    return n === 0
    ? rune
    : overlay_frac(1 - (1/n), scale(1 - (1/n), cone(n - 1, rune)), rune);
}
// Tests
show(cone(4, circle));
hollusion(cone(4, circle));



































// function mosaic(bottom_right) {
//     return stack(beside(circle, blank), beside(square, bottom_right));
// }
// either or
// function mosaic(bottom_right, n) {
//     return beside_frac(1 / n, stack_frac(1 / n, circle, square), stack_frac(1 / n, blank, bottom_right));
// }
// // show(mosaic(ribbon, 5));
// function moony_1(bottom_right, n) {
//     return mosaic(bottom_right, n);
// }
// // show(moony_1(ribbon, 7));

// function moony(n) {
//     return n === 1
//         ? circle
//         : moony_1(moony(n - 1), n); 
// }
// // show(moony(6));

// function alt_moony(n) {
//     return n === 1
//         ? circle
//         : beside_frac(1 / n, stack_frac(1 / n, circle, square), stack_frac(1 / n, blank, alt_moony(n - 1)));
// }
// show(alt_moony(7));

// function moony_1(rune, n) {
//     return stack_frac(1/n, beside_frac(1/n, circle, blank), beside_frac(1/n, square, rune));
// }

// function moony_2(n) {
//     return n === 1
//         ? ribbon
//         : moony_1(moony_2(n - 1), n);
//          stack_frac(1/n, beside_frac(1/n, circle, blank), beside_frac(1/n, square, moony_2(n - 1)));
                                                                                        //moony_1(rune, n-1)
// function moony(n) {
//     return n === 1
//         ? ribbon
//         : 
// }
