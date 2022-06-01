import { useState } from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'

export default function PDFViewer() {
  const [numPages, setNumPages] = useState(null)

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages)
  }

  return (
    <div className="pdf-container">
      <iframe
        className="pdf-viewer"
        src="/resume.pdf"
        height="100%"
        width="100%"
      />
    </div>
  )
}
