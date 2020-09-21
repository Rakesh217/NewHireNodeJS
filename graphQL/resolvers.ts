const models = require("../app/models/AddEmployee");

module.exports = {
  Query: {
    allEmployees: async () => {
      try {
        const allEmployees = await models.find();
        return allEmployees;
      } catch (err) {
        return {
          message: err,
        };
      }
    },
  },

  Mutation: {
    addEmployee: async (temp, req) => {
      try {
        const {
          firstName,
          lastName,
          emailId,
          skills,
          rate,
          city,
          State,
          zip,
        } = req.Employee;
        const addEmp = new models({
          firstName,
          lastName,
          emailId,
          skills,
          rate,
          city,
          State,
          zip,
        });
        await addEmp.save();
        return addEmp;
      } catch (err) {
        return {
          message: err,
        };
      }
    },
  },
};
