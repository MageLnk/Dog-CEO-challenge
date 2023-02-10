const mayusFirstLetter = (pokeName) => {
  const mayusName = pokeName.charAt(0).toUpperCase() + pokeName.slice(1);
  return mayusName;
};

export default mayusFirstLetter;
