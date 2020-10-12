(function (exports) {
  var assert = {
    isTrue: function (assertionToCheck) {
      if (!assertionToCheck) {
        throw new Error(
          "Assertion failed: " + assertionToCheck + " is not truthy"
        );
      }
    },
    isEqual: function (a, b) {
      if (a !== b) {
        throw new Error("Assertion failed: is not equal");
      }
    },
  };
  exports.assert = assert;
})(this);
