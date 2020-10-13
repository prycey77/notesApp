class assert {
  static isTrue(text, assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error(
        "%c Assertion failed: " + text + " is not truthy",
        "background-color: floralwhite; color: red"
      );
    } else {
      console.log(
        "%c Smashed it: " + text,
        "background-color: floralwhite; color: green"
      );
    }
  }
}

// (function (exports) {
//   var assert = {
//     isTrue: function (assertionToCheck) {
//       if (!assertionToCheck) {
//         throw new Error(
//           "Assertion failed: " + assertionToCheck + " is not truthy"
//         );
//       }
//     },
//     isEqualTo: function (a, b) {
//       if (a !== b) {
//         throw new Error("Assertion failed: " + a + " is not equal to" + b);
//       }
//     },
//     isConstructedFrom: function (object, constructor) {
//       if (object instanceof constructor === true) {
//         throw new Error(
//           "Assertion failed: " +
//             object +
//             " is not an instance of " +
//             constructor
//         );
//       }
//     },
//   };
//   exports.assert = assert;
// })(this);
