import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ColDef, ModuleRegistry ,AllCommunityModule  } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css'; // Material Theme

import { Box, Typography } from '@mui/material';


const rowData = [
    { id: 1, name: 'Alice', age: 25, email: 'alice@example.com' },
    { id: 2, name: 'Bob', age: 30, email: 'bob@example.com' },
    { id: 3, name: 'Charlie', age: 28, email: 'charlie@example.com' }
];

const columnDefs: ColDef[] = [
    { field: 'id', headerName: 'ID', sortable: true, filter: true },
    { field: 'name', headerName: 'Name', sortable: true, filter: true },
    { field: 'age', headerName: 'Age', sortable: true, filter: true },
    { field: 'email', headerName: 'Email', sortable: true, filter: true }
];

const Report: React.FC = () => {
 ModuleRegistry.registerModules([ AllCommunityModule ]);

    return (
        <Box sx={{ height: 400, width: '100%', mt: 3 }}>
            <Typography variant="h6" gutterBottom>
                User Table
            </Typography>
            <div className="ag-theme-material" style={{ height: '100%', width: '100%' }}>
                <AgGridReact
                    rowData={rowData}
                    columnDefs={columnDefs}
                    pagination={true}
                    paginationPageSize={5}
                    domLayout="autoHeight"
                />
            </div>
        </Box>
    );
};

export default Report;
