import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
export default function Footer() {
  return (
  
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='https://facebook.com'target='_blank' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href='https://twiter.com'target='_blank' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='twitter' />
          </a>
          <a href='https://google.com'target='_blank' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='google' />
          </a>
          <a href='https://instagram.com'target='_blank' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
          <a href='https://linkedin.com' target='_blank' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='linkedin' />
          </a>
          <a href='https://github.com' target='_blank' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='github' />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                FreeMind
              </h6>
              <p>
                
                here you can save your time to use this site feature like block YouTube and facebook and 
                instagram and other distribution app.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Project used Technology</h6>
              <p>
                <a href='https://developer.mozilla.org/en-US/docs/Web/HTML' target='_blank' className='text-reset' title='Hyper Text Transfer Language'>
                  HTML
                </a>
              </p>
              <p>
                <a href='https://developer.mozilla.org/en-US/docs/Web/CSS' target='_blank' className='text-reset' title='Casscadign Style sheet'>
                  CSS
                </a>
              </p>
              <p>
                <a href='https://www.typescriptlang.org/docs/handbook/jsx.html#:~:text=JSX%20is%20an%20embeddable%20XML,seen%20other%20implementations%20as%20well.' className='text-reset' target='_blank' title='Java Script'>
                  JS
                </a>
              </p>
              <p>
                <a href='https://legacy.reactjs.org/docs/introducing-jsx.html'target='_blank' className='text-reset'>
                  REACT
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='/article' className='text-reset'>
                  Article
                </a>
              </p>
              <p>
                <a href='/feature' className='text-reset'>
                  Features
                </a>
              </p>
              <p>
                <a href='/contact' className='text-reset'>
                  contact
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                Mathura Gla University , NH2 10012, Chauma
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                <a href="mailto:digambar14062004@gmail.com">digambar14062004@gmail.com</a>
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> +91 7088323289
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> +91 8273134901
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          FreeMind.com
        </a>
      </div>
    </MDBFooter>
  );
}