function checkAbbreviation(a, b) {
    let bCopy = [...b];
    let currentTarget = bCopy.pop();
    let currTry = "";
    let found = false;
    let answer = "";
    for (let i = a.length - 1; i >= 0; i--) {
        if (a[i] == currentTarget || a[i].toUpperCase() == currentTarget) {
            if (
                a[i - 1] &&
                a[i].toUpperCase() == a[i - 1].toUpperCase() &&
                bCopy.slice(0, 1)[0] &&
                bCopy.slice(0, 1)[0].toUpperCase() != a[i - 1].toUpperCase()
            ) {
                continue;
            }

            currTry += a[i];
            currentTarget = bCopy.pop();
        } else if (
            currTry.length > 0 &&
            a[i] == a[i].toUpperCase() &&
            currentTarget != a[i]
        ) {
            currTry = "";
            if (found) {
                answer = "NO";
            }
        } else if (
            currTry.length == 0 &&
            a[i] == a[i].toUpperCase() &&
            currentTarget != a[i]
        ) {
            answer = "NO";
            return "NO";
        }
        if (currTry.length == b.length) {
            found = true;
        }
    }
    if (found) answer = "YES";
    return answer.length ? answer : "NO";
}

const abbreviation = (a, b) => {
    a = "beFgH";
    b = "EFG";
    console.log(checkAbbreviation(a.split(""), b.split("")));
}

export default abbreviation;
