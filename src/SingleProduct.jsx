import PropTypes from 'prop-types';
const SingleProduct = ({product,handleCart}) => {
    const {title,price,description,image}=product;
    return (
        <div>
            <div className="card">
                <img className='card-img' src={image} alt="" />
                <h1>{title.slice(0,10)}</h1>
                <p>{description.slice(0,100)}</p>
                <div className="card-footer">
                    <h1>Price:<span>{price}</span>$</h1>
                    <button  onClick={()=>handleCart(product)} className='add-btn'>Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

SingleProduct.propTypes={
    product:PropTypes.object,
    handleCart:PropTypes.func
}
export default SingleProduct;