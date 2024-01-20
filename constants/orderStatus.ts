import { OrderEntity } from "@/types/orderTypes";

const orderStatus = {
    0: "Order Placed",
    1: "Awaiting Approval",
    2: "Payment Pending",
    3: "Processing Payment",
    4: "Tracking",
    5: "Delivered",
};

export default orderStatus;

export const orderObject: OrderEntity = {
    id: "11228456",
    date: "January 19, 2024",
    productId: "",
    status: 2,
    quantity: 200,
    itemComment: "Provide green and blue cotton saree",
    wholesaler: "Mungipa Texttile",
    retailer: "Rushil Bansal, RR Enterprises",
    transactionId: "12374848477Ah",
    delivered: false,
    tLink: undefined,
    tNumber: undefined,
    courierPartner: "",
    paymentFlag: true,
};
