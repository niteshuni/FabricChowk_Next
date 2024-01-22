import { Product } from "@/types/catalogTypes";
import React, { useRef, useState } from "react";
import MessageTextarea from "../shared/MessageTextArea";
import PartnerCombobox from "../shared/PartnerCombobox";
import OrderPlacedModal from "../OrderModals/OrderPlacedModal";
import { PartnerWholesaler } from "@/types/PartnersType";
import { OrderEntity } from "@/types/orderTypes";
import { wholesalerList } from "@/constants/partnerList";

interface InfoProps {
  data: Product;
}

const ProductInfo: React.FC<InfoProps> = ({ data }) => {

  const [orderPlaced, setOrderPlaced] = useState(false);
  const quantityRef = useRef<HTMLInputElement>(null);
  const [itemText, setItemText] = useState("");
  const [wholesaler, setWholesaler] = useState<PartnerWholesaler>(wholesalerList[8]);

  const onClickBuyHandler = () => {
    const orderObject: OrderEntity = {
      id: "459832",
      courierPartner: "",
      date: "",
      delivered: false,
      itemComment: itemText,
      paymentFlag: false,
      productId: data.id,
      quantity: +(quantityRef.current?.value ?? 0),
      retailer: "Rushil Bansal, RR Enterprises",
      status: 1,
      tLink: undefined,
      tNumber: undefined,
      transactionId: undefined,
      wholesaler: wholesaler.businessName,
    };
    localStorage.removeItem('myOrder');
    localStorage.setItem('myOrder', JSON.stringify(orderObject));    
    setOrderPlaced(true);
  }

  const selectedWholesaler = (person: PartnerWholesaler) => {
    setWholesaler(person);
  }

  const commentEntered = (text: string) => {
    setItemText(text);
  }

  return (
    <div>
      {orderPlaced && <OrderPlacedModal productId={data.id}/>}
      <h1 className="text-3xl bordered font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 items-end justify-between">
        {/* <p className="text-2xl text-gray-900">{data.company}</p> */}
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-2">
        <div className="flex items-center">
          <div>{data.details}</div>
        </div>
        <div className="flex items-center gap-x-2">
          <h3 className="font-semibold text-black">Category:</h3>
          <div>{data.category}</div>
        </div>
        <div className="flex items-center gap-x-2">
          <h3 className="font-semibold text-black">Sub-Category:</h3>
          <div>{data.subCategory}</div>
        </div>
        <div className="flex items-center gap-x-2">
          <h3 className="font-semibold text-black">Sub-Sub-Category:</h3>
          <div>{data.nestedCategory}</div>
        </div>
        <div className="flex items-center gap-x-2">
          <h3 className="font-semibold text-black">Type:</h3>
          <div>{data.type}</div>
        </div>
        <div className="flex items-center gap-x-2">
          <h3 className="font-semibold text-black">Price:</h3>
          <div>{`₹${data.price} - ₹${+data.price + 200}`}</div>
        </div>
        <div className="flex items-center gap-x-2">
          <h3 className="font-semibold text-black">Discount:</h3>
          <span className="badge text-kellygreen bg-semikellygreen font-bold">
            {data.discount}%
          </span>
        </div>
        <span className="badge badge-secondary badge-md font-bold">
          Trending
        </span>
      </div>

      <div className="mt-8 flex items-center gap-x-8">
      <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-lg font-bold">Wholesaler</span>
          </div>
          <PartnerCombobox selectedValue={selectedWholesaler}/>
        </label>
      
      </div>
      <div className="mt-3 flex items-center gap-x-8">
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-lg font-bold">Quantity</span>
          </div>
          <input
            type="number"
            placeholder="9999"
            className="input input-bordered w-24"
            ref={quantityRef}
          />
        </label>
      </div>

      <div className="mt-3 flex items-center gap-x-8">
      <MessageTextarea setItemText={commentEntered}/>
      </div>

      

      <div className="mt-3 flex items-center gap-x-8">
        <button disabled={orderPlaced} onClick={onClickBuyHandler} className="btn btn-primary text-white flex items-center gap-x-3">
          Buy Now
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
