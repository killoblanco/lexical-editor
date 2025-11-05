import { Wysiwyg } from "@/components/wysiwyg/wysiwyg"

export const LandingPage = () => {
  return (
    <div className="w-full max-w-5xl mx-auto min-h-screen">
      <Wysiwyg namespace="MyEditor" theme={{}} onError={console.error} />
    </div>
  )
}
