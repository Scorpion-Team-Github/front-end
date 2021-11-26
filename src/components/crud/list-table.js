import { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@mui/material';
import { getInitials } from '../../utils/get-initials';

export const ListTable = ({ listData, header, ...rest }) => {
  const [selectedIds, setselectedIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newselectedIds;

    if (event.target.checked) {
      newselectedIds = listData.map((item) => item.id);
    } else {
      newselectedIds = [];
    }

    setselectedIds(newselectedIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedIds.indexOf(id);
    let newselectedIds = [];

    if (selectedIndex === -1) {
      newselectedIds = newselectedIds.concat(selectedIds, id);
    } else if (selectedIndex === 0) {
      newselectedIds = newselectedIds.concat(selectedIds.slice(1));
    } else if (selectedIndex === selectedIds.length - 1) {
      newselectedIds = newselectedIds.concat(selectedIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newselectedIds = newselectedIds.concat(
        selectedIds.slice(0, selectedIndex),
        selectedIds.slice(selectedIndex + 1)
      );
    }

    setselectedIds(newselectedIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedIds.length === listData.length}
                    color="primary"
                    indeterminate={
                      selectedIds.length > 0
                      && selectedIds.length < listData.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                {header.map((item) => (
                  <TableCell>
                    {item}
                  </TableCell>
                ))}

              </TableRow>
            </TableHead>
            <TableBody>
              {listData.slice(0, limit).map((item) => (
                <TableRow
                  hover
                  key={item.id}
                  selected={selectedIds.indexOf(item.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedIds.indexOf(item.id) !== -1}
                      onChange={(event) => handleSelectOne(event, item.id)}
                      value="true"
                    />
                  </TableCell>
                  {header.map((item_description) => (
                    <TableCell>
                      {item[item_description]}
                    </TableCell>
                  ))}
                  <TableCell>
                    <a href="#">Editar</a> | <a href="#">Detalles</a> | <a href="#">Eliminar</a>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={listData.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

ListTable.propTypes = {
  listData: PropTypes.array.isRequired
};
