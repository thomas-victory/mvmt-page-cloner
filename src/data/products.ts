
import { Product } from "@/components/ProductCard";

export const productsData: Product[] = [
  {
    id: "1",
    name: "Classic Black",
    price: 138,
    images: [
      "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1619134778706-7015b6640850?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    ],
    category: "men",
    isBestseller: true,
    slug: "classic-black",
    colorOptions: [
      { name: "Black", color: "#000000" },
      { name: "Silver", color: "#c0c0c0" }
    ]
  },
  {
    id: "2",
    name: "Nova Series",
    price: 158,
    images: [
      "https://images.unsplash.com/photo-1549972574-8e3e1ed6a347?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    ],
    category: "men",
    isNew: true,
    slug: "nova-series",
    colorOptions: [
      { name: "Blue", color: "#354F6B" },
      { name: "Black", color: "#000000" }
    ]
  },
  {
    id: "3",
    name: "Voyager Minimalist",
    price: 145,
    originalPrice: 175,
    images: [
      "https://images.unsplash.com/photo-1539874754764-5a96559165b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    ],
    category: "men",
    slug: "voyager-minimalist",
    colorOptions: [
      { name: "Brown", color: "#8B572A" },
      { name: "Black", color: "#000000" }
    ]
  },
  {
    id: "4",
    name: "Eclipse Rose Gold",
    price: 168,
    images: [
      "https://images.unsplash.com/photo-1548169874-53e85f753f1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518131672697-613becd4fab5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    ],
    category: "women",
    isBestseller: true,
    slug: "eclipse-rose-gold",
    colorOptions: [
      { name: "Rose Gold", color: "#B76E79" },
      { name: "Gold", color: "#D4AF37" }
    ]
  },
  {
    id: "5",
    name: "Luna Mesh",
    price: 148,
    images: [
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    ],
    category: "women",
    isNew: true,
    slug: "luna-mesh",
    colorOptions: [
      { name: "Silver", color: "#C0C0C0" },
      { name: "Gold", color: "#D4AF37" }
    ]
  },
  {
    id: "6",
    name: "Stellar Diamond",
    price: 195,
    originalPrice: 225,
    images: [
      "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1537217547330-11f21d69ccae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    ],
    category: "women",
    slug: "stellar-diamond",
    colorOptions: [
      { name: "White", color: "#FFFFFF" },
      { name: "Black", color: "#000000" }
    ]
  },
  {
    id: "7",
    name: "Meridian Chronograph",
    price: 180,
    images: [
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    ],
    category: "men",
    slug: "meridian-chronograph",
    colorOptions: [
      { name: "Silver", color: "#C0C0C0" },
      { name: "Black", color: "#000000" }
    ]
  },
  {
    id: "8",
    name: "Solstice Gold",
    price: 178,
    images: [
      "https://images.unsplash.com/photo-1548169874-53e85f753f1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518131672697-613becd4fab5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    ],
    category: "women",
    slug: "solstice-gold",
    colorOptions: [
      { name: "Gold", color: "#D4AF37" },
      { name: "Rose Gold", color: "#B76E79" }
    ]
  }
];
