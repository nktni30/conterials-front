import React from "react";


export function ConCategoriesCard({ img, title, }) {
      return (
            <div className="cat-card">
                  <div className="categories-image">
                        <img alt="categories" className="img-fluid" src={img} />
                  </div>
                  <div className="img-overlay"></div>
                  <div className="categories-title">
                        {title}
                  </div>

            </div>
      )
}


export function BrandsListCard({ img, }) {
      return (
            <div className="brand-card">
                  <img alt="brands" className="brand-img border-0" src={img} />
            </div>


      )
}
