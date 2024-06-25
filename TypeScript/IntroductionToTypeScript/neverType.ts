function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

// let variable: never = null; //Type 'null' is not assignable to type 'never'.
// variable = 1;
generateError('An error occrred', 500);
