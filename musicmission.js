function simplify_rhythm(rhythm) {
    function play_times(r, n) {
        return n === 1
            ? r 
            : append(r, play_times(r, n - 1));
    }
    return is_null(rhythm)
        ? null 
        : is_pair(rhythm)
        ? simplify_rhythm(play_times(head(rhythm), tail(rhythm)))
        : is_list(rhythm)
        ? append(simplify_rhythm(head(rhythm)), simplify_rhythm(tail(rhythm)))
        : is_number(rhythm)
        ? list(rhythm)
        : null ;
} 

// Test
const my_rhythm = pair(list(pair(list(1,2,0,1), 2), list(1,3,0,1,3,1,0,3)), 3);
const my_simple_rhythm = simplify_rhythm(my_rhythm);
display_list(my_simple_rhythm);

const correct_simple_rhythm = list(
1,2,0,1,
1,2,0,1,
1,3,0,1,3,1,0,3,
1,2,0,1,
1,2,0,1,
1,3,0,1,3,1,0,3,
1,2,0,1,
1,2,0,1,
1,3,0,1,3,1,0,3);
equal(my_simple_rhythm, correct_simple_rhythm);