import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Tabs.css';

import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import { FaPlus } from "react-icons/fa";

function Toopltip() {
  return (
    <>
      {['bottom'].map((placement) => (
        <OverlayTrigger
          key={placement}
          placement={placement}
          overlay={
            <Tooltip id={`tooltip-${placement}`}>
              Create Post
            </Tooltip>
          }
        >
          <FaPlus/>
        </OverlayTrigger>
      ))}
      {['bottom'].map((placement) => (
        <OverlayTrigger
          key={placement}
          placement={placement}
          overlay={
            <Tooltip id={`tooltip-${placement}`}>
              Create Post 2
            </Tooltip>
          }
        >
          <Button variant="secondary"><FaPlus/></Button>
        </OverlayTrigger>
      ))}
    </>
  );
}

export default Toopltip;
