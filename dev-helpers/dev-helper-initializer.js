/* eslint-disable no-undef */
window.onload = function () {
  window["SampleImportBundle"] = window["sample-import-ui-bundle"];
  window["SampleImportStandalonePreset"] =
    window["sample-import-ui-standalone-preset"];
  // Build a system
  const ui = SampleImportBundle({
    dom_id: "#sample-import-ui",
    language: "English",
    config:{
      id:"1234",
      name:'From library',
      value:"Save"
    },
  });

  window.ui = ui;
};
