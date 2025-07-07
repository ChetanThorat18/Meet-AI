import { AppRouter } from "@/trpc/routers/_app";
import { inferRouterOutputs } from "@trpc/server";

export type MeetingtGetOne = inferRouterOutputs<AppRouter>["meetings"]["getOne"]