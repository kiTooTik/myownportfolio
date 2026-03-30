import Footer from '@/components/common/footer/Footer';
import NavBar from '@/components/common/navbar/NavBar'
import Content from '@/components/pages/root/content/Content'
import ScrollToTop from '@/components/reusable/button/Scroll-To-Top';
import React from 'react'
import { Toaster } from 'react-hot-toast';
const page = () => {
  return (
      <>
          <NavBar/>
          <Content/>
          <ScrollToTop />
          <Toaster position="top-right" />
          <Footer/>
      </>
  )
}

export default page