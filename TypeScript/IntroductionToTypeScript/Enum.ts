enum Role {
  ADMIN,
  READ_ONLY = 5,
  AUTHOR = 'AUTHOR',
}

console.log(Role.ADMIN, Role.READ_ONLY, Role.AUTHOR); //0 5 AUTHOR

// Role.ADMIN = 4; //Cannot assign to 'ADMIN' because it is a read-only property.
