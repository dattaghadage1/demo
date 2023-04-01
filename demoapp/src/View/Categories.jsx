import React from 'react'
import '../Style/Categori.css'
function Categories({ Categorie }) {
    return (
        <div>
            <h2>Categories</h2>
            <div className="container">
                <div className="row d-flex Categories-row">
                    {
                        Categorie.map((ele) => (
                            <>
                            <div className="col-lg-2 col-4 col-md-2 ">
                            <div className="  text-center Categories">{ele}</div>
                            <br />
                            <span className='ms-4'>{ele}</span>
                            </div>
                                
                            </>
                        ))
                    }
                   
                </div>
            </div>
        </div>
    )
}

export default Categories