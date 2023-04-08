const { Ability, AbilityBuilder } = require("@casl/ability");

function defineAbility(user) {
  const { can, build } = new AbilityBuilder(Ability);
  if (user.authorization === "superadmin") {
    console.log("superadmin");
    can("read", "User");
    can("create", "User");
    can("update", "User");
    can("delete", "User");

    can("read", "Product");
    can("create", "Product");
    can("update", "Product");
    can("delete", "Product");

    can("read", "Category");
    can("create", "Category");
    can("update", "Category");
    can("delete", "Category");

    can("read", "Comment");
    can("create", "Comment");
    can("update", "Comment");
    can("delete", "Comment");
  } else if (user.authorization == "admin") {
    console.log("admin");
    can("read", "User");

    can("read", "Product");
    can("create", "Product");
    can("update", "Product");
    can("delete", "Product");

    can("read", "Category");
    can("create", "Category");
    can("update", "Category");
    can("delete", "Category");

    can("read", "Comment");
    can("create", "Comment");
    can("update", "Comment");
    can("delete", "Comment");
  } else if (user.authorization == "member") {
    console.log("member");
    can("read", "Product");
    can("read", "Category");

    can("read", "Comment");
    can("create", "Comment");
    can("update", "Comment");
    can("delete", "Comment");
  } else {
    console.log("guest");
    can("read", "Product");
    can("read", "Category");

    can("read", "Comment");

    can("login", "User");
    can("register", "User");
  }

  return build();
}

module.exports = defineAbility;
