export type PartnerWholesaler = {
    businessName: string;
    address: string;
    city: string;
    zone: string;
    proprietor: string;
    phone: string;
    category: string;
    emailID: string;
    annualRevenue?: string;
};

export type PartnerRetailer = PartnerWholesaler & {reference: string};

export const Partners = {
    navdurgaFabrics: "Navdurga Fabrics Mumbai",
    MPFab: "M.P. Fab Pvt. Ltd, Surat",
    bilashraiK: "Bilashrai Kailashnath, Mumbai",
    arvindKomar: "Arvind Komar Rajesh Kumar, Ahmedabadh",
    poonamChand: "Poonamchand Ratthi, Jaipur",
} as const;

export type Partners = typeof Partners;