module.exports = (fullName) => {
  if(typeof fullName !== 'string')
    return 'Error';

  const fullNameArray = fullName.split(' ');
  const [firstName, lastName] = fullName.split(' ');
  if(fullNameArray.length !== 2 || !firstName || !lastName)
    return 'Error';

  return (firstName[0].toUpperCase() + firstName.slice(1).toLowerCase() + ' ' + lastName[0].toUpperCase() + lastName.slice(1).toLowerCase());
};