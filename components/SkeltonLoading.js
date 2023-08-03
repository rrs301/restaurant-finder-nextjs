import React from 'react'

function SkeltonLoading() {
  return (
    <div>
        <div class="border bg-white shadow rounded-md p-2 w-[187px]">
  <div class="animate-pulse flex flex-col ">
    <div class="rounded-lg bg-slate-200 h-[90px] w-[170px]"></div>
    <div class="flex-1 space-y-2 py-3 ">
      <div class="h-2 bg-slate-200 rounded"></div>
      <div class="space-y-3">
        <div class="grid grid-cols-3 gap-4">
          <div class="h-2 bg-slate-200 rounded col-span-2"></div>
          <div class="h-2 bg-slate-200 rounded col-span-1"></div>
        </div>
        <div class="h-2 bg-slate-200 rounded"></div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default SkeltonLoading