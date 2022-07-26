import { useState} from "react";
import { imgUrl } from "../services/frontend";
export default function CartContents(){

    let [cart, setCart] = useState(JSON.parse(localStorage.getItem('caRt')) || []);

    const clubArray = (arr) => {
        return arr.reduce((acc, val) => {
           const index = acc.findIndex(el => el.id === val.id);
           if(index !== -1){
              const key = Object.keys(val)[1];
              acc[index][key] = val[key];
           } else {
              acc.push(val);
           };
           return acc;
        }, []);
    };

    const filteredCart = clubArray(cart);

    let totalQuantity = (id) => cart.filter(item => item.id === id)
    .reduce((total, item) => total + item.quantity, 0);

    let totalPrice = cart.reduce((total, item) => total + item.totalPrice, 0);

    function removeItemFromCart(id){
       const newCart = cart.filter(elem => elem.id !== id );
       localStorage.setItem('caRt', JSON.stringify(newCart));
        setCart(newCart);
    }

    

    if(cart.length === 0){
        return (
            <div className="empty-cart text-center">
                <i className="bi-cart-x"></i>
                <h5 className="mt-2">Your cart is empty</h5>
            </div>
        )
    }else{
        return (
            <div className="cart-with-products">
                <div className="prod-items py-2 container-fluid">
                    {filteredCart.map(item => 
                        <div className="row align-items-center border-bottom pb-2 mb-2 gx-2" key={item.id}>
                            <div className="col-4">
                                <img src={`${imgUrl}/thumbnails/${item.thumbnail}`} alt="" className="w-75 border" />
                            </div>
                            <div className="col-8">
                                <div className="prod-details">
                                    <h6 className="mb-1">{item.name}</h6>
                                    <p className="mb-1">৳{item.price} x {totalQuantity(item.id)} = ৳{ item.price * totalQuantity(item.id) }</p>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div>

                                            Total Quantity: {totalQuantity(item.id)}

                                        </div>
                                        {/* <select className="form-select custom-select p-2 w-25 h-auto" aria-label="Default select example">
                                            <option selected>1</option>
                                            <option value="1">2</option>
                                            <option value="2">3</option>
                                            <option value="3">4</option>
                                        </select> */}
                                        <button className="ms-3 btn btn-outline-danger btn-sm p-1" onClick={() => removeItemFromCart(item.id)}>
                                            <i className="bi bi-x-lg"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="cart-total-wrapper">
                    <div className="d-flex justify-content-end align-items-center bg-light p-3">
                    <div>Total</div>
                    <h6 className="ms-4 text-dark mb-0">৳{ totalPrice }</h6>
                    </div>
                    <div className="d-flex p-3">
                        <a href="cart.php" className="btn btn-outline-secondary p-2 w-50"><i className="bi bi-bag"></i> View Cart</a>
                        <a href="checkout.php" className="btn btn-secondary p-2 w-50 ms-2">Checkout</a>
                    </div>
                </div>
            </div>
        )
    }

}