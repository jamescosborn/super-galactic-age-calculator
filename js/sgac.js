//business logic
function Entry(entryLog) {
  this.log = entryLog;
}

Entry.prototype.sixWingedTieFighter = function(userAge) {
  var ageInSeconds = (60 * (60 * (24 * (365 * (parseToInt(userAge))))))
  return ageInSeconds;
};

exports.sgac = Entry;
