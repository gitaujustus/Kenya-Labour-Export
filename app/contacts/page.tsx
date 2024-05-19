/**
 * v0 by Vercel.
 * @see https://v0.dev/t/IDstrWdlr37
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
// import { Label } from "@/components/ui/label"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto w-[350px] space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Contact Us</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" placeholder="Enter your first name" />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" placeholder="Enter your last name" />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="email">Email</label>
              <input id="email" placeholder="Enter your email" type="email" />
            </div>
            <div className="space-y-2">
              <label htmlFor="message">Message</label>
              <textarea className="min-h-[100px]" id="message" placeholder="Enter your message" />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div className="hidden bg-gray-100 lg:block dark:bg-gray-800">
        <img
          alt="Image"
          className="h-full w-full object-cover"
          height="1080"
          src="/images/GRADUATES.jpeg"
          style={{
            aspectRatio: "1920/1080",
            objectFit: "cover",
          }}
          width="1920"
        />
      </div>
    </div>
  )
}