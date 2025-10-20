import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about The blog and its mission.",
};

export default function AboutPage() {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the about page of the blog.</p>
    </div>
  );
}
