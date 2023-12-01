import { Button, Stack } from '@mui/material';
import React from 'react'


export default function SampleImportService({ language, sampleImportConfig }: { language: string, sampleImportConfig: any }) {
    return (
        <>
             <div className="sample-import">
        <div className="information-container">
          <div>
            <p>Language : {language}</p>
            {sampleImportConfig.id}
            <p>{sampleImportConfig.value}</p>
            <p>{sampleImportConfig.name}</p>
          </div>
          <Stack spacing={2} direction="row">
            <Button variant="text">Text</Button>
            <Button variant="contained">{sampleImportConfig.value}</Button>
            <Button variant="outlined">Outlined</Button>
          </Stack>
        </div>
      </div>
        </>
    );
}