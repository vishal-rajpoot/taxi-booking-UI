import { redirect } from "next/navigation"

export default function BookPage() {
  // Redirect to homepage where the booking form is located
  redirect("/#booking")
}
