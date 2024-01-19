import type { NextRequest } from "next/server";
import type { R2Bucket } from "@cloudflare/workers-types";
import { RouteModuleHandleContext } from "next/dist/server/future/route-modules/route-module";

export const runtime = "edge";

interface Env {
  MY_R2: R2Bucket;
}

const env = process.env as any as Env;

export async function GET(
  request: NextRequest,
  context: RouteModuleHandleContext
) {
  const { params } = context;
  if (!params || !params.key)
    return new Response("File not found", { status: 404 });

  // check if params.key is an array

  let objectName = "";
  if (Array.isArray(params.key)) {
    objectName = params.key.join("/");
  } else {
    objectName = params.key;
  }
  console.log(`${request.method} object ${objectName}: ${request.url}`);

  const object = await env.MY_R2.get(objectName);

  if (object === null) {
    return new Response("Not found", { status: 404 });
  }

  // @ts-ignore
  return new Response(object.body);
}
