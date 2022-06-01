import { useState } from 'react'
import ClientOnlyPortal from './ClientOnlyPortal'
import { IoClose } from 'react-icons/io5'
import { useThemeContext } from 'src/styles/theme'

const Modal = ({ key, open, setOpen, children }) => {
  const { theme } = useThemeContext()
  return (
    <>
      {open && (
        <ClientOnlyPortal selector="#modal" key={key}>
          <div className="backdrop">
            <div className="modal">
              {children}
              <button
                className="close-button"
                type="button"
                onClick={() => setOpen(false)}
              >
                <IoClose />
              </button>
            </div>
            <div className="backdrop-exit" onClick={() => setOpen(false)} />
            <style jsx>{`
              .backdrop {
                position: fixed;
                background-color: transparent;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                z-index: 1040;
                display: flex;
                justify-content: center;
                align-items: center;
              }

              .backdrop-exit {
                position: absolute;
                background-color: ${theme
                  ? 'rgba(0, 0, 0, 0.1)'
                  : 'rgba(0, 0, 0, 0.3)'};
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                z-index: 1041;
              }

              .modal {
                background-color: ${theme ? '#fff' : '#202020'};
                position: absolute;
                width: 70vw;
                padding: 1em;
                border-radius: 0.5em;
                z-index: 1050;
                height: auto;
              }

              .close-button {
                position: absolute;
                top: 0;
                right: 0;
                padding: 0.5em;
                background-color: ${theme ? '#fff' : '#202020'};
                border: none;
                color: ${theme ? '#121212' : '#fff'};
                z-index: 1041;
                height: 2em;
                width: 3em;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 10px;
              }
              .close-button:hover {
                background-color: red;
              }

              .close-button > svg > path {
                fill: #fff;
                color: #fff;
              }
            `}</style>
          </div>
        </ClientOnlyPortal>
      )}
    </>
  )
}

export default Modal
