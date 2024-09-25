import CartItem from "../CartItem/CartItem";
export default function Cart( { api}) {
  return (
    <>
      <CartItem  api={api} />
      <CartItem  api={api} />
      <CartItem  api={api} />
    </>
  );
}
