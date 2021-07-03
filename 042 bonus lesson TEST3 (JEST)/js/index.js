function getFriendlyNumbers(start, end) {
    let i,
            j,
            k,
            sum_1,
            sum_2,
            result = [],
            emptiness = true;
    if (start > end || isNaN(start) || isNaN(end) || start < 0 || end < 0 || parseInt(start) !== start || parseInt(end) !== end) {
        return false;
    } else {
                    for (i = start; i < end; i++) {
                        sum_1 = 0;
                        for (k = 1; k < 1; k++) {
                                if (i%k === 0) {
                                        sum_1 = sum_1 + k;
                                }
                        }
                        for (j = i+1; j <= end; j++) {
                            sum_2 = 0;
                            for (k = 1; k < j; k++) {
                                if (j%k === 0) {
                                        sum_2 = sum_2 + k;
                                }
                            }
                            if ((sum_1 === j) && (sum_2 === i)) {
                                    result.push([i, j]);
                                    emptiness = false;
                            }
                        }
                    }
                    if (emptiness == false) {
                        return result;
                    } else {
                        return [];
                    }
    }
}
module.exports = {
    firstName: 'Name',
    secondName: 'Surname',
    task: getFriendlyNumbers
}