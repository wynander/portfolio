import { Layout } from '../layout/Layout'
import Hero from '/src/components/Hero/Hero'
import Projects from '/src/components/Projects/Projects'
import Technologies from '/src/components/Technologies/Technologies'
// import default react-pdf entry
import { pdfjs } from 'react-pdf'
// import pdf worker as a url, see `next.config.js` and `pdf-worker.js`
import workerSrc from '../public/pdf-worker'
import dynamic from 'next/dynamic'

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc

const PDFViewer = dynamic(() => import('../src/PDFViewer'), {
  ssr: false,
})

const Resume = () => {
  return (
    <Layout>
      <PDFViewer />
    </Layout>
  )
}

export default Resume
