export function Evaluatename(name) {

      if (typeof name === "undefined" || name.length === 0) {
            return "*Name cannot be Empty!...*";
      }

      return /^[A-Za-z\s]+$/.test(name)? "": "*Invalid Name*";
}

export function EvaluatePassword(password) {
      
      if (typeof password === "undefined" || password.length === 0) {
            return "*Password cannot be Empty!...*";
      }

      if (password.length < 8){
            return "*Password Length cannot be less than 8 characters*";
      }
}
