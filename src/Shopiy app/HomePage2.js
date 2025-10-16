import React from 'react'
import paint from './img/paint.jpeg'
import boycloth from './img/boyshirt.jpeg'
import girlcloth from './img/girldresh.jpeg'
import kidscloth from './img/bebygirl.jpeg'
import shoesFootwear from './img/shoes.jpeg'
import beauty from './img/beauty.jpeg'
import home from './img/homekitchen.jpeg'
import bag from './img/girlbag.jpeg'

function HomePage2() {
  return (
    <>
      
        <header className="bg-dark py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">Lowest Prices Best Quality Shopping</h1>
                    <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                </div>
            </div>
        </header>

        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <div className="col mb-5">
                        <div className="card h-100">
                  
                            <img className="card-img-top" src={bag} height={200} alt="..." />
                   
                               <div className="card-body p-4">
                                <div className="text-center">
             
                                    <h5 className="fw-bolder">Fancy Product</h5>
          
                                    $40.00 - $80.00
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            <div className="badge bg-dark text-white position-absolute" >Sale</div>
                       
                            <img className="card-img-top" src={home} height={200} alt="..." />
                      
                            <div className="card-body p-4">
                                <div className="text-center">
                                  
                                    <h5 className="fw-bolder">Special Item</h5>
                              
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                                  
                                    <span className="text-muted text-decoration-line-through">$20.00</span>
                                    $18.00
                                </div>
                            </div>
                        
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
    
                            <div className="badge bg-dark text-white position-absolute">Sale</div>
                
                            <img className="card-img-top" src={paint} height={200} alt="..." />
                        
                            <div className="card-body p-4">
                                <div className="text-center">
                    
                                    <h5 className="fw-bolder">Sale Item</h5>
                        
                                    <span className="text-muted text-decoration-line-through">$50.00</span>
                                    $25.00
                                </div>
                             </div>
                        
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
            
                            <img className="card-img-top" src={boycloth} height={200} alt="..." />
                
                            <div className="card-body p-4">
                                <div className="text-center">
            
                                    <h5 className="fw-bolder">Popular Item</h5>
                        
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                            
                                    $40.00
                                </div>
                            </div>
                            
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
        
                            <div className="badge bg-dark text-white position-absolute" >Sale</div>
                    
                            <img className="card-img-top" src={girlcloth} height={200} alt="..." />
        
                            <div className="card-body p-4">
                                <div className="text-center">
    
                                    <h5 className="fw-bolder">Sale Item</h5>
        
                                    <span className="text-muted text-decoration-line-through">$50.00</span>
                                    $25.00
                                </div>
                            </div>
        
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
    
                            <img className="card-img-top" src={kidscloth} height={200} alt="..." />
            
                            <div className="card-body p-4">
                                <div className="text-center">
        
                                    <h5 className="fw-bolder">Fancy Product</h5>
            
                                    $120.00 - $280.00
                                </div>
                            </div>
            
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
    
                            <div className="badge bg-dark text-white position-absolute">Sale</div>
                
                            <img className="card-img-top" src={shoesFootwear} height={200} alt="..." />
                        
                            <div className="card-body p-4">
                                <div className="text-center">
                    
                                    <h5 className="fw-bolder">Special Item</h5>
                                
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                        
                                    <span className="text-muted text-decoration-line-through">$20.00</span>
                                    $18.00
                                </div>
                            </div>
                    
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
            
                            <img className="card-img-top" src={beauty} height={200} alt="..." />
                    
                            <div className="card-body p-4">
                                <div className="text-center">
                
                                    <h5 className="fw-bolder">Popular Item</h5>
                            
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                    
                                    $40.00
                                </div>
                            </div>
                    
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      
       
    </>
  )
}

export default HomePage2