const message = {
  userExists: 'User already registered',
  invalidLengthName: '"displayName" length must be at least 8 characters long',
  invalidEmail: '"email" must be a valid email',
  requiredEmail: '"email" is required',
  invalidLengthPassword: '"password" length must be 6 characters long',
  requiredPassword: '"password" is required',
  emailExists: 'User already registered',
  emptyEmail: '"email" is not allowed to be empty',
  emptyPassword: '"password" is not allowed to be empty',
  userNotExists: 'Invalid fields',
  tokenNotExists: 'Token not found',
  invalidToken: 'Expired or invalid token',
  listUserNotExists: 'User does not exist',
  requiredName: '"name" is required',
  requiredTitle: '"title" is required',
  requiredContent: '"content" is required',
  requiredCategoryId: '"categoryIds" is required',
  categoryIdsNotExists: '"categoryIds" not found',
  postNotExists: 'Post does not exist',
  noPermissionEditCategorys: 'Categories cannot be edited',
  withoutAuthorization: 'Unauthorized user',
  deletedOk: '',
};

module.exports = message;
