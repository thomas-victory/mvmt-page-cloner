
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
    freeShipping: true,
    colorOptions: [
      { name: "Black", color: "#000000" },
      { name: "Silver", color: "#c0c0c0" }
    ],
    reviews: [
      {
        id: "r1",
        username: "Michael T.",
        rating: 5,
        reviewText: "This watch is exactly what I was looking for. The minimalist design goes with everything, and the build quality is excellent.",
        date: "2023-12-15",
        verified: true
      },
      {
        id: "r2",
        username: "Sarah J.",
        rating: 4,
        reviewText: "Beautiful timepiece. Sleek design and comfortable. Only giving 4 stars because the band was slightly stiff at first, but it's breaking in nicely.",
        date: "2023-11-28",
        verified: true
      },
      {
        id: "r3",
        username: "David R.",
        rating: 5,
        reviewText: "Perfect everyday watch. I've received so many compliments! The face is the perfect size and not too bulky.",
        date: "2023-10-05",
        verified: true
      }
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
    ],
    reviews: [
      {
        id: "r4",
        username: "Robert M.",
        rating: 5,
        reviewText: "The Nova Series is a game-changer. The blue face is stunning in person and the watch feels substantial without being heavy.",
        date: "2023-12-20",
        verified: true
      },
      {
        id: "r5",
        username: "Jessica L.",
        rating: 5,
        reviewText: "Bought this for my husband and he absolutely loves it. The design is modern and versatile.",
        date: "2023-11-15",
        verified: true
      }
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
    freeShipping: true,
    colorOptions: [
      { name: "Brown", color: "#8B572A" },
      { name: "Black", color: "#000000" }
    ],
    saleEndsAt: new Date(new Date().getTime() + 48 * 60 * 60 * 1000).toISOString(),
    reviews: [
      {
        id: "r6",
        username: "Chris T.",
        rating: 4,
        reviewText: "Great watch for the price. The leather strap has a premium feel and the minimalist face is exactly what I wanted.",
        date: "2023-12-03",
        verified: true
      },
      {
        id: "r7",
        username: "Alex K.",
        rating: 3,
        reviewText: "Good watch but the leather band needed breaking in. Still, good value for the money.",
        date: "2023-11-22",
        verified: false
      }
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
    ],
    reviews: [
      {
        id: "r8",
        username: "Olivia S.",
        rating: 5,
        reviewText: "This watch is absolutely gorgeous! The rose gold color is subtle and elegant. It's the perfect accessory for both casual and formal outfits.",
        date: "2023-12-10",
        verified: true
      },
      {
        id: "r9",
        username: "Emma D.",
        rating: 5,
        reviewText: "I'm in love with this watch! It's lightweight and the perfect size for my wrist. The rose gold finish is beautiful.",
        date: "2023-11-30",
        verified: true
      }
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
    freeShipping: true,
    colorOptions: [
      { name: "Silver", color: "#C0C0C0" },
      { name: "Gold", color: "#D4AF37" }
    ],
    reviews: [
      {
        id: "r10",
        username: "Sophia L.",
        rating: 5,
        reviewText: "The Luna Mesh is my new favorite! The mesh band is comfortable and adjusts easily. Looks more expensive than it is.",
        date: "2023-12-12",
        verified: true
      },
      {
        id: "r11",
        username: "Hannah J.",
        rating: 4,
        reviewText: "Beautiful watch that goes with everything. The only issue is that the clasp sometimes comes undone, but otherwise perfect.",
        date: "2023-11-05",
        verified: true
      }
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
    saleEndsAt: new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toISOString(),
    colorOptions: [
      { name: "White", color: "#FFFFFF" },
      { name: "Black", color: "#000000" }
    ],
    reviews: [
      {
        id: "r12",
        username: "Grace H.",
        rating: 5,
        reviewText: "This watch is a showstopper! The diamond accents catch the light beautifully. Worth every penny.",
        date: "2023-12-14",
        verified: true
      },
      {
        id: "r13",
        username: "Nicole P.",
        rating: 4,
        reviewText: "Gorgeous watch that looks very high-end. The only reason for 4 stars is that it's a bit heavier than I expected.",
        date: "2023-10-18",
        verified: true
      }
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
    freeShipping: true,
    colorOptions: [
      { name: "Silver", color: "#C0C0C0" },
      { name: "Black", color: "#000000" }
    ],
    reviews: [
      {
        id: "r14",
        username: "James B.",
        rating: 5,
        reviewText: "The chronograph function is smooth and the watch face is very readable. Great for everyday wear.",
        date: "2023-12-01",
        verified: true
      },
      {
        id: "r15",
        username: "Thomas G.",
        rating: 4,
        reviewText: "Solid watch with great functionality. The only drawback is that the band is a bit thin for the weight of the watch face.",
        date: "2023-11-14",
        verified: false
      }
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
    ],
    reviews: [
      {
        id: "r16",
        username: "Ava M.",
        rating: 5,
        reviewText: "The gold tone is perfect - not too yellow or brassy. Looks incredibly luxurious on the wrist.",
        date: "2023-12-07",
        verified: true
      },
      {
        id: "r17",
        username: "Lily R.",
        rating: 3,
        reviewText: "Beautiful watch but the clasp is a bit difficult to secure. The gold color is lovely though.",
        date: "2023-11-19",
        verified: true
      }
    ]
  }
];
