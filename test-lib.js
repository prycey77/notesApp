(function (exports) {
  var assert = {
    isTrue: function (assertionToCheck) {
      if (!assertionToCheck) {
        throw new Error(
          "Assertion failed: " + assertionToCheck + " is not truthy"
        );
      }
    },
    isEqualTo: function (a, b) {
      if (a !== b) {
        throw new Error("Assertion failed: " + a + " is not equal to" + b);
      }
    },
  };
  exports.assert = assert;
})(this);
