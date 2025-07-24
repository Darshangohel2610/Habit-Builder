import type { NextApiRequest, NextApiResponse } from "next";
import supabase from "@/lib/client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { data:habit, error } = await supabase.from("habit").select("*");
    console.log(habit);

    if (error) {
      throw error;
    }

    return NextResponse.json({
      message: "Supabase is connected 🚀",
      tables: habit,
    });
  } catch (err: any) {
    return NextResponse.json(
      { message: "Supabase NOT connected", error: err.message },
      { status: 500 }
    );
  }
}
