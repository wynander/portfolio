import { Layout } from '../layout/Layout'
// import default react-pdf entry
import { pdfjs } from 'react-pdf'
// import pdf worker as a url, see `next.config.js` and `pdf-worker.js`
import workerSrc from '../public/pdf-worker'
import dynamic from 'next/dynamic'

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc

const PDFViewer = dynamic(() => import('../src/constants/PDFViewer'), {
  ssr: false,
})

const Resume = () => {
  return (
    <Layout>
      <div>
        <PDFViewer />
      </div>
    </Layout>
  )
}

export default Resume
