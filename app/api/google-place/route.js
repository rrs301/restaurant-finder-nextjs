import { NextResponse } from "next/server";

const BASE_URL = "https://maps.googleapis.com/maps/api/place";
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

export async function GET(request){

    const {searchParams}=new URL(request.url)
    const category=searchParams.get('category');
    const radius = searchParams.get("radius");
    const lat = searchParams.get("lat");
    const lng = searchParams.get("lng");
    console.log( BASE_URL + "/textsearch/json?query="+category+ 
    "&location="+lat+","+lng+
    '&radius='+radius+
    "&key=" + GOOGLE_API_KEY)
    const res=await fetch(
        BASE_URL + "/textsearch/json?query="+category+ 
    "&location="+lat+","+lng+
    '&radius='+radius+
    "&key=" + GOOGLE_API_KEY,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
    );
    const product = await res.json();

    return NextResponse.json({ product });
}
