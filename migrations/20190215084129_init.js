exports.up = async knex =>
  knex.schema.createTable("users", t => {
    t.uuid("id")
      .unique()
      .primary();
    t.string("email")
      .unique()
      .notNullable();
    t.timestamps(true, true);
  });

exports.down = function(knex, Promise) {};
