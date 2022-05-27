import styled from 'styled-components';

export const BackDrop = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1040;
`

export const ModalContent = styled.div`
  background-color: #fff;
  position: absolute;
  top: 10%;
  right: 10%;
  bottom: 10%;
  left: 10%;
  padding: 1em;
`