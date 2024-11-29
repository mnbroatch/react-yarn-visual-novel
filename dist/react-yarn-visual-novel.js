(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('prop-types'), require('react-dialogue-tree/dist/index')) :
  typeof define === 'function' && define.amd ? define(['react', 'prop-types', 'react-dialogue-tree/dist/index'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.ReactYarnVisualNovel = factory(global.React, global.PropTypes, global.ReactDialogueTree));
})(this, (function (React, PropTypes, ReactDialogueTree) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
  var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
  var ReactDialogueTree__default = /*#__PURE__*/_interopDefaultLegacy(ReactDialogueTree);

  function ReactYarnVisualNovel({
    dialogue
  }) {
    return /*#__PURE__*/React__default["default"].createElement(ReactDialogueTree__default["default"], {
      className: "mnbroatch-react-yarn-visual-novel",
      dialogue: dialogue
    });
  }
  ReactYarnVisualNovel.propTypes = {
    dialogue: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].arrayOf(PropTypes__default["default"].shape({
      title: PropTypes__default["default"].string.isRequired,
      body: PropTypes__default["default"].string.isRequired
    }))])
  };

  return ReactYarnVisualNovel;
}));
