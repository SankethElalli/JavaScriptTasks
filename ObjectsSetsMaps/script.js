class Person {
    constructor(name, age, gender, occupation) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.occupation = occupation;
    }
}

function getUniqueNumbers(arr) {
    return new Set(arr);
}

function setUnion(setA, setB) {
    return new Set([...setA, ...setB]);
}

function setIntersection(setA, setB) {
    return new Set([...setA].filter(x => setB.has(x)));
}

function setDifference(setA, setB) {
    return new Set([...setA].filter(x => !setB.has(x)));
}

function isSubset(setA, setB) {
    return [...setA].every(elem => setB.has(elem));
}

document.getElementById('printButton').addEventListener('click', function() {

    console.log("=== Objects ===");
    const person1 = new Person("John Doe", 30, "Male", "Developer");
    const person2 = new Person("Jane Smith", 25, "Female", "Designer");
    
    console.log("Person 1:", person1);
    console.log("Person 2:", person2);

    console.log("\n=== Sets ===");
    const numbers = [1, 2, 2, 3, 3, 4, 5, 5];
    console.log("Original array:", numbers);
    console.log("Unique numbers:", [...getUniqueNumbers(numbers)]);

    const setA = new Set([1, 2, 3, 4]);
    const setB = new Set([3, 4, 5, 6]);
    console.log("\nSet A:", [...setA]);
    console.log("Set B:", [...setB]);
    console.log("Union:", [...setUnion(setA, setB)]);
    console.log("Intersection:", [...setIntersection(setA, setB)]);
    console.log("Difference (A-B):", [...setDifference(setA, setB)]);
    console.log("Is setA subset of setB:", isSubset(setA, setB));

    console.log("\n=== Maps ===");
    const userMap = new Map();
    userMap.set('user1', { name: 'John', role: 'Admin' });
    userMap.set('user2', { name: 'Jane', role: 'User' });

    console.log("Original Map:", Object.fromEntries(userMap));
    console.log("Get user1:", userMap.get('user1'));
    
    userMap.set('user2', { name: 'Jane', role: 'Manager' });
    console.log("After updating user2:", Object.fromEntries(userMap));
    
    userMap.delete('user1');
    console.log("After deleting user1:", Object.fromEntries(userMap));
});
