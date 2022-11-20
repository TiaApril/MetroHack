
import React from "react";

export const AboutUs = () => {
  return (
    <div>
      <section
      class="bg-primary text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
      <div class="container">
        <div class="d-sm-flex align-items-center justify-content-between">
          <div>
            <h1>Become a <span class="text-warning"> Web Developer </span></h1>
            <p class="lead my-4">
              We focus on teaching our students the fundamentals of the latest
              and greatest technologies to prepare them for their first dev role
            </p>
          </div>
          <img
            class="img-fluid w-50 d-none d-sm-block"
            src="img/showcase.svg"
            alt=""
          />
        </div>
      </div>
    </section>
      <section className="p-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md " >
              <div className="card text-light" style={{backgroundColor: '#F35363'}}>
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <i>logo</i>
                  </div>
                  <h3 className="card-title">
                    Vision
                  </h3>
                  <p className="card-text">
                  Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="card text-light" style={{backgroundColor: '#F35363'}}>
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <i>logo</i>
                  </div>
                  <h3 className="card-title">
                    Mision
                  </h3>
                  <p className="card-text">
                  Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="KnowUs" className="p-5 text-light" style={{backgroundColor: '#F67984'}} >
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md p-5">
              <h2>Learn React</h2>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse ultricies tincidunt purus, in dapibus velit
                tincidunt in.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse ultricies tincidunt purus, in dapibus velit
                tincidunt in.Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Suspendisse ultricies tincidunt purus, in dapibus velit
                tincidunt in.
              </p>
              <a href="#" className="btn btn-light mt-3">
                <i className="bi bi-chevron-right"></i> Read More
              </a>
            </div>
            <div className="col-md">
              <img class="img-fluid" alt=""></img>
            </div>
          </div>
        </div>
      </section>
      <section id="KnowUs2" className="p-5 text-light" style={{backgroundColor: '#F67984'}} >
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md">
              <img class="img-fluid" alt=""></img>
            </div>
            <div className="col-md p-5">
              <h2>Learn React</h2>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse ultricies tincidunt purus, in dapibus velit
                tincidunt in.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse ultricies tincidunt purus, in dapibus velit
                tincidunt in.Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Suspendisse ultricies tincidunt purus, in dapibus velit
                tincidunt in.
              </p>
              <a href="#" className="btn btn-light mt-3">
                <i className="bi bi-chevron-right"></i> Read More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;