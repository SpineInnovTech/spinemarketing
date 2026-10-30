import mediaStyles from "./responsive-media.module.css";

export function WorkbenchShellRecording() {
  return (
    <div id="workbench-recording" aria-labelledby="workbench-recording-title" className="scroll-mt-24">
        <h3 id="workbench-recording-title" className="text-xl font-semibold text-[#082B5E] sm:text-2xl">A quick look inside the app.</h3>
        <p className="mt-3 max-w-[870px] text-sm leading-7 text-[#4E607A]">A short screen recording of the real SpineWorkspace app: opening the menu, switching between team screens, and searching for work.</p>
        <div className="mt-6 overflow-hidden rounded-2xl border border-[#CCE3F5] bg-white">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D8E7F4] px-5 py-3 text-xs font-semibold text-[#082B5E]">
            <span>SpineWorkspace · Founder view</span>
            <span className="rounded-full border border-[#CBE5FA] bg-[#E8F4FF] px-3 py-1 text-[#006FE8]">Live Workbench Views</span>
          </div>
          <div className={`${mediaStyles.frame} bg-[#F7FAFD]`}>
            <video controls playsInline preload="none" width={1440} height={900} poster="/images/workbench/founderops/cockpit-20261014.webp" aria-label="Screen recording of the SpineWorkspace app" aria-describedby="workbench-recording-provenance" className={`${mediaStyles.media} bg-white`}>
              <source src="/videos/workbench/workbench-shell-20261014.mp4" type="video/mp4" />
              <track kind="captions" src="/videos/workbench/workbench-shell-20261014.vtt" srcLang="en" label="English scene descriptions" default />
              <a href="/videos/workbench/workbench-shell-20261014.mp4">Download the recording</a>
            </video>
          </div>
        </div>
        <p id="workbench-recording-provenance" className="mt-4 max-w-[1080px] text-xs leading-6 text-[#5E738B]">Recorded on October 14 from the real app, filled with sample test data (QA fixtures). The clicks are real. The numbers, statuses and connection badge are examples only. They are not live customer data, and they do not show a real tool connection or a completed action.</p>
        <details className="mt-3 text-xs leading-6 text-[#4E607A]">
          <summary className="w-fit cursor-pointer rounded-sm font-semibold text-[#006FE8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#006FE8]">Read the walkthrough transcript</summary>
          <p className="mt-3 max-w-[950px]">The video starts on the founder view. The Sales section opens to show sample deals and contacts. The Marketing section opens to show sample campaigns. The Operations section opens to show sample tasks. The search box opens and closes. Nothing is changed in any connected tool.</p>
        </details>
    </div>
  );
}
