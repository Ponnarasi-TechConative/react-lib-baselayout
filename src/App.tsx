import { Stack } from '@mui/material'
import WebServiceModal from './core/components/WebServiceModal'
import { Provider } from 'react-redux'

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
        <WebServiceModal restImportConfig={config} language='en' />
      </Stack>
  )
}