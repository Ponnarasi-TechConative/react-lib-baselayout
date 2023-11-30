/* eslint-disable no-undef */
window.onload = function () {
  window["RestImportBundle"] = window["rest-import-ui-bundle"];
  window["RestImportStandalonePreset"] =
    window["rest-import-ui-standalone-preset"];
  // Build a system
  const ui = RestImportBundle({
    dom_id: "#rest-import-ui",
    language: "en",
    config:{
      id:"1234",
      name:'From library',
      value:"Save"
    },
  });

  window.ui = ui;
};
