// import { NextResponse } from "next/server";

// const API_URL = "https://api.escuelajs.co/api/v1";
// export async function GET(req: Request) {
//   const { searchParams } = new URL(req.url);
//   const limit = searchParams.get("limit") || 8;
//   const offset = searchParams.get("offset") || 0;
//   try {
//     const res = await fetch(
//       `${API_URL}/products?limit=${limit}&offset=${offset}`
//     );

//     if (!res.ok) {
//       return NextResponse.json(
//         { error: `Failed to fetch products ${res.status}` },
//         { status: res.status }
//       );
//     }

//     const data = await res.json();

//     return NextResponse.json(data);
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     return NextResponse.json(
//       { error: "Failed to fetch products" },
//       { status: 500 }
//     );
//   }
// }

export {};
