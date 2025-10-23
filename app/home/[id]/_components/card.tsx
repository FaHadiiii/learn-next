"use client";

import { Button } from "@/components/animate-ui/components/buttons/button";
import {
  CardHeader,
  Card,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { useParams, useRouter } from "next/navigation";

export function Preview() {
  const router = useRouter();
  const title = useParams().id;
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
        <CardAction>Card Action</CardAction>
      </CardHeader>
      <CardContent>
        <p>{title}</p>
      </CardContent>
      <CardFooter>
        <Button onClick={() => router.push("/quote")}>Go Quote</Button>
      </CardFooter>
    </Card>
  );
}
