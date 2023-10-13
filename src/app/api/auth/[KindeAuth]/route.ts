import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest, { params }: { params: any }) {

    let endpoint = params.KindeAuth;

    return handleAuth(request,endpoint);
}