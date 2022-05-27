import { useState } from 'react'
import ClientOnlyPortal from './ClientOnlyPortal'
import { IoClose } from 'react-icons/io5'

export default function Modal({ key, open, setOpen, children }) {
  return (
    <>
      {open && (
        <ClientOnlyPortal selector='#modal' key={key}>
          <div className='backdrop'>
            <div className='modal'>
              {children}
              <button className='close-button' type='button' onClick={() => setOpen(false)}>
                <IoClose />
              </button>
            </div>
            <div className='backdrop-exit' onClick={() => setOpen(false)} />
            <style jsx>{`
              .backdrop {
                position: fixed;
                background-color: rgba(0, 0, 0, 0.5);
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                z-index: 1040;
              }
              .backdrop-exit {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                z-index: 1041;
              }

              .modal {
                background-color: #202020;
                position: absolute;
                top: 10%;
                right: 10%;
                bottom: 10%;
                left: 10%;
                padding: 1em;
                border-radius: 0.5em;
                z-index: 1050;
              }

              .close-button {
                position: absolute;
                top: 0;
                right: 0;
                padding: 0.5em;
                background-color: #202020;
                border: none;
                color: #fff;
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
