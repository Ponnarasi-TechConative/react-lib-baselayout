/**
 * @prettier
 */
import layout from "core/plugins/layout"
import spec from "core/plugins/spec"
import view from "core/plugins/view"
import logs from "core/plugins/logs"
import App from "core/components/app"
import BaseLayout from "core/components/layouts/base"
import SampleImportService from "../../jsx/core/components/SampleImportService"
export default function () {
  let coreComponents = {
    components: {
      App,
      SampleImportService,
      BaseLayout
    },
  }

  return [
    logs,
    view,
    spec,
    layout,
    coreComponents,
  ]
}
