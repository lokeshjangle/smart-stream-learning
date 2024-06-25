"use strict";
var _a;
const fetchedUserData = {
    id: 'u1',
    name: 'Lokesh',
    //   job: { title: 'JSE', description: 'Junior Software Engineer' },
};
// console.log(fetchedUserData.job.title); //TypeError: Cannot read properties of undefined (reading 'title')
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title); //undefined
