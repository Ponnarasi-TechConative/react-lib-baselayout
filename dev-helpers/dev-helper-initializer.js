/* eslint-disable no-undef */
window.onload = function () {
  window["SampleImportBundle"] = window["rest-import-ui-bundle"];
  window["SampleImportStandalonePreset"] =
    window["rest-import-ui-standalone-preset"];
  // Build a system
  const ui = SampleImportBundle({
    dom_id: "#rest-import-ui",
    language: "English",
    config:{
      id:"1234",
      name:'From library',
      value:"Save"
    },
  });

  window.ui = ui;
};
