import { Button, Stack } from '@mui/material';
import React, { ReactNode, useEffect, useState } from 'react'


export default function WebServiceModal({ language, restImportConfig }: { language: string, restImportConfig: any }) {
    return (
        <>
             <div className="rest-import">
        <div className="information-container">
          <div>
            {restImportConfig.url}
            <p>{restImportConfig.value}</p>
            <p>{restImportConfig.objval.name}</p>
          </div>
          <Stack spacing={2} direction="row">
            <Button variant="text">Text</Button>
            <Button variant="contained">{restImportConfig.value}</Button>
            <Button variant="outlined">Outlined</Button>
          </Stack>
        </div>
      </div>
        </>
    );
}