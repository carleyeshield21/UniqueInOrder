function uniqueInOrder(iterable) {
    // We assign the length of the given string or array
    iterlength = iterable.length

    // We initialize the value of i and j to 0 because we are going to use the while loop
    i = 0
    j = 0

    // We assign an array arr so we can push the values that we need depending on the value of the index j, the initial value would be the first element of the string or array, which has the index of 0
    arr = [iterable[i]]

    // We use the while loop and set the condition to increment each time by 1 until the value is minus 2 of its length so we can avoid the undefined value in the array arr
    while (i <= iterlength - 2) {
        // console.log(i, j)
        //console.log(iterable[i],i, iterable[j],j)
        //console.log(iterable[i], iterable[j])
        i++

        // We set this condition inside the while loop so that everytime it finds an unequal value, the value of j will be set to the index i because that is the index where it found the inequality, then push the value to the array arr
        if (iterable[i] != iterable[j]) {
            j = i
            // arr.push(j)
            arr.push(iterable[j])
        }

    }

    console.log(arr)

}
uniqueInOrder('AAAABBBCCDAABBB')
uniqueInOrder('ABBCcAD')
uniqueInOrder([1, 2, 2, 3, 3])
uniqueInOrder('AABBBCC')

// This table is an example so we can figure out the relationship of the index i and j
// iterable = ('AABBBCC')
// i	j	iterable[i]	iterable[j]
// 0	0	    A	            A
// 1	0	    A	            A
// 2	0	    B	            A
// 3	2	    B	            B
// 4	2	    B	            B
// 5	2	    C	            B
// 6	5	    C	            C
