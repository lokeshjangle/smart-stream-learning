"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 5] = "READ_ONLY";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
console.log(Role.ADMIN, Role.READ_ONLY, Role.AUTHOR); //0 5 AUTHOR
// Role.ADMIN = 4; //Cannot assign to 'ADMIN' because it is a read-only property.
