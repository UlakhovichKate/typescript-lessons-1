// const person: {
//     name: string,
//     age: number
// } = {

// const ADMIN = 0;
// const READ_ONLY = 1;
// const USER = 2;

enum Role { ADMIN, READ_ONLY, AUTHOR};

const person = {
    name: 'Ula',
    age: 29,
    hobbies: ['Sports', 'Cats'],
    role: Role.ADMIN
}

//person.role.push('admin');
//person.role[1] = '10';

//person.role = [0, 'admin', 'user'];

let favoriveActivities: any[];
favoriveActivities = ['Sport', 5];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    //console.log(hobby.map());
}

if (person.role === Role.ADMIN) {
    console.log('is read only');
}
