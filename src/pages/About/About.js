import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { getBrandByFatherId } from '../../services/brand';
import product from '../../services/product';

function About() {
  return (
    <div className="about">
      {product.map(product =>
      <Accordion key={product.id}>
        <AccordionSummary
          aria-controls="panel1a-content"
          id={product.id}
        >
          <Typography>{product.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {getBrandByFatherId(product.id).map((brand) => 
            <Typography>
              {brand.name}
            </Typography>
          )}
        </AccordionDetails>
      </Accordion>
      )}

    </div>
  )
}

export default About