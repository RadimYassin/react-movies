import * as React from 'react';
import '../styles/style.css'
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';

import Sheet from '@mui/joy/Sheet';
import styled from 'styled-components';

export default function BasicModal({children,setOpen,open}) {

  return (
    <React.Fragment>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Sheet
          variant="soft"
           className="modaltConatainer"
          sx={{
            borderRadius: 'md',
          
            boxShadow: 'lg',
           width:'70%',
         
     
        
        
          }}
        >
          <ModalClose
            variant="outlined"
            sx={{
              
              top: 'calc(-1/4 * var(--IconButton-size))',
              right: 'calc(-1/4 * var(--IconButton-size))',
              boxShadow: '0 2px 12px 0 rgba(0 0 0 / 0.2)',
              borderRadius: '50%',
              bgcolor: 'background.body',
            }}
          />
          <ContainerD    >
          {
          children
          }
          </ContainerD>
      
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}




const ContainerD=styled.div`
   display:flex;
   justify-content:space-evenly;
   gap:20px;

   @media screen and (max-width:960px){
     flex-direction:column;
     align-items:center;
      height:100%;

   

    }

`



