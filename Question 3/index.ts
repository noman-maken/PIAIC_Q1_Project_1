//Name: Muhammad Noman Aslam (PAIC77162)
const person_name: string = "Muhammad Noman Aslam";
//Uppercase
console.log(`Uppercase: ${person_name.toUpperCase()}`);
//Lowercase
console.log(`Lowercase: ${person_name.toLowerCase()}`);
//title case
const titleCaseName = person_name.replace(/\b\w/g, (match) => match.toUpperCase());
console.log(`Title Case: ${titleCaseName}`);