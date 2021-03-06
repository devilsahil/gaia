/* exported MockFontSizeManager */

'use strict';

var MockFontSizeManager = {
  /**
   * Possible scenarios as declared by FontSizeManager.
   */
  DIAL_PAD: 0,
  SINGLE_CALL: 1,
  CALL_WAITING: 2,
  STATUS_BAR: 3,
  SECOND_INCOMING_CALL: 4,

  adaptToSpace: function() {},
  ensureFixedBaseline: function() {},
  resetFixedBaseline: function() {}
};
