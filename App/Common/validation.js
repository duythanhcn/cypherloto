const validate = require("validate.js");

const rules = {
  email: {
    presence: {
      message: '^Please enter an email address'
    },
    email: {
      message: '^Please enter a valid email address'
    }
  },

  password: {
    presence: {
      message: '^Please enter a password'
    },
    length: {
      minimum: 5,
      message: '^Your password must be at least 5 characters'
    }
  }
}

export default function validation(fieldName, value) {
  var formValues = {}
  formValues[fieldName] = value
  var formFields = {}
  formFields[fieldName] = rules[fieldName]
  const result = validate(formValues, formFields)
  if (result) {
    return result[fieldName][0]
  }
  return null
}

