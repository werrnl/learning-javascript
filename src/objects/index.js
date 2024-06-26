export function getProperties(obj) {
    return Object.keys(obj);
}

export function getValues(obj) {
    return Object.values(obj);
}

export function getEntries(obj) {
    return Object.entries(obj);
}

export function addProperty(obj, key, value) {
    const newObj = { ...obj, [key]: value };
    return newObj;
}

export function countProperties(obj) {
    return Object.keys(obj).length;
}

export function removeProperty(obj, key) {
    delete obj[key];
}

export function createPeople(obj, count) {
    const peopleArray = Array.from({ length: count }, () => ({ ...obj }));
    console.log(peopleArray);  // Debug statement
    return peopleArray;
}

export function updateAge(obj, newAge) {
    return { ...obj, age: newAge };
}

export function addMethod(obj, methodName, method) {
    obj[methodName] = method;
}
