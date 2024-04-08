import useCart from "@/common/hooks/useCart";
import { ChangeEvent } from "react";
import remove from "@/assets/icons/remove.svg";
import { Link } from "react-router-dom";

const CartContent = () => {
  const {
    data,
    mutate,
    handleQuantityChange,
    calculateTotal,
    isLoading,
    isError,
  } = useCart();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;

  return (
    <div className="container">
      <div className="cart-content-container">
        <div className="cart-content-left">
          <div className="cart-content-left-header">
            <span className="cart-content-left-header-span1">Product</span>
            <span className="cart-content-left-header-span2">Price</span>
            <span className="cart-content-left-header-span3">Quantity</span>
            <span className="cart-content-left-header-span4">Subtotal</span>
          </div>
          <div className="cart-content-left-shop">
            <table className="cart-table">
              <tbody>
                {data?.products.map((product: any, index: number) => (
                  <tr key={index}>
                    <td className="border-2 product-image-box">
                      <img
                        src={product.image}
                        alt={product.name}
                        style={{
                          maxWidth: "100px",
                          maxHeight: "100px",
                          objectFit: "cover",
                        }}
                      />
                    </td>
                    <td className="cart-content-name border-2">
                      {product.name}
                    </td>
                    <td className="cart-content-price border-2">
                      {product.price}
                    </td>
                    <div className="quantity-container">
                      <button
                        className="quantity-control-btn"
                        onClick={() =>
                          mutate({
                            action: "DECREMENT",
                            productId: product.productId,
                          })
                        }
                      >
                        -
                      </button>
                      <input
                        type="number"
                        className="border border-red-15 quantity-input"
                        value={product.quantity}
                        onChange={(e) =>
                          handleQuantityChange(
                            product.productId,
                            e as ChangeEvent<HTMLInputElement>
                          )
                        }
                      />

                      <button
                        className="quantity-control-btn"
                        onClick={() =>
                          mutate({
                            action: "INCREMENT",
                            productId: product.productId,
                          })
                        }
                      >
                        +
                      </button>
                    </div>

                    <td className="cart-content-subtotal border-2">
                      {product.price * product.quantity}
                    </td>
                    <td className="cart-content-remove border-2">
                      <p
                        onClick={() =>
                          mutate({
                            action: "REMOVE",
                            productId: product.productId,
                          })
                        }
                      >
                        <img src={remove} />
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="cart-content-right">
          <h2>Cart Totals</h2>
          <div className="cart-content-right-subtotal">
            <span>Subtotal</span>
            <p> ${calculateTotal()}</p>
          </div>
          <div className="cart-content-right-total">
            <span>Total</span>
            <p> ${calculateTotal()}</p>
          </div>
          <a href="address.html">
            <Link to="/order"><button className="cart-content-right-btn">Check Out</button></Link>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CartContent;
