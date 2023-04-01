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
                                <div className="  text-center Categories">{ele}</div>
                            </>
                        ))
                    }
                    <div className="row d-flex Categories-second-row">
                        {
                            Categorie.map((ele) => (
                                <>
                                    <div className="text-center col-2 Categories-two ">{ele}</div>
                                </>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories