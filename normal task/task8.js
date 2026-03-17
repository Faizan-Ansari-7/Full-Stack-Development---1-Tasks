var test = {
    "division1": {
        "name": ["Z", "B", "H"]

    },
    "division2": {

        "name": ["Y", "A", "G"]
    }
}

test.division1.name.sort();
test.division2.name.sort();

var merge = test.division1.name.concat(test.division2.name);
merge.sort();
console.log(merge);