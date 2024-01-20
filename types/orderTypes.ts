import orderStatus from "@/constants/orderStatus";

export type OrderEntity = {
    id: string;
    date: string;
    productId: string;
    status: keyof typeof orderStatus;
    quantity: number;
    itemComment: string
    wholesaler: string;
    transactionId: string | undefined;
    delivered: boolean;
    tLink: string | undefined;
    tNumber: string | undefined;
    courierPartner: string;
    paymentFlag: boolean;
    retailer: string;
};
