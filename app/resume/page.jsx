export const metadata = {
   title: "Resume — Kenny Chen",
   description: "View and download Kenny Chen's resume.",
};

export default function Page() {
   return (
      <div className="space-y-4 sm:space-y-6">
         <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h1 className="text-h1 font-semibold">Resume</h1>
            <a
               href={`/Kenny_Chen_Resume.pdf?t=${Date.now()}`}
               download
               className="px-4 py-2 rounded-md bg-[--color-secondary] text-[--color-white] hover:opacity-90 text-body text-center"
            >
               Download PDF
            </a>
         </div>

         <div className="rounded-lg border border-gray-700 overflow-hidden bg-[#1b1b1b]">
            <iframe
               title="Kenny Chen Resume"
               src={`/Kenny_Chen_Resume.pdf?t=${Date.now()}#view=FitH`}
               className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh]"
            />
         </div>

         <p className="text-[--color-text-muted] text-body-sm">
            If the embed does not load, <a className="underline" href={`/Kenny_Chen_Resume.pdf?t=${Date.now()}`} target="_blank" rel="noreferrer noopener">open the PDF in a new tab</a>.
         </p>
      </div>
   );
}


