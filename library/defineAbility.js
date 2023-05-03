const { Ability, AbilityBuilder } = require("@casl/ability");

function defineAbility(user) {
  const { can, build } = new AbilityBuilder(Ability);
  if (user === "superadmin") {
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
  } else if (user == "admin") {
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
  } else if (user == "member") {
    can("read", "Product");
    can("read", "Category");

    can("read", "Comment");
    can("create", "Comment");
    can("update", "Comment");
    can("delete", "Comment");
  } else {
    can("read", "Product");
    can("read", "Category");

    can("read", "Comment");

    can("login", "User");
    can("register", "User");
  }

  return build();
}

module.exports = defineAbility;
