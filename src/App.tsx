import { Stack } from '@mui/material'
import SampleImportService from './core/components/SampleImportService'


export default function App() {
  const config: any = {
    objval:{
      id:"1",
      "name":'From library'
    },
    value:"Save"
  }

  return (
      <Stack className='rest-import-ui'>
        <SampleImportService sampleImportConfig={config} language='en' />
      </Stack>
  )
}