import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import BookToastMessage from './components/BookToastMessage';
import ListBooks from './components/ListBooks';
import Breadcrumbs from './../Breadcrumbs';

const Books = () => {
  return (
    <div className='pb-0 w-full flex items-stretch flex-auto flex-col justify-between'>
      <div className='py-6 flex-grow xs:px-2 xxl:max-w-1400 w-full mr-auto ml-auto'>
        <div className='flex justify-between items-center'>
          <Breadcrumbs />
          <Link to='/admin/book/add'>
            <Button className='bg-primary' variant="contained" startIcon={<AddIcon />}>
              Thêm mới
            </Button>
          </Link>
          <BookToastMessage />
        </div>
        <ListBooks />
      </div>
    </div>
  )
}

export default Books