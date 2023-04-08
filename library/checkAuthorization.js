module.exports = (defineAbility, next) => {
  if (defineAbility) {
    next();
  } else {
    console.log("Authorization Failed 401");
  }
};
