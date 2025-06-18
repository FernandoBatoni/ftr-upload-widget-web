import * as Collapsible from '@radix-ui/react-collapsible'
import { useState } from 'react'
import { UploadWidgetDropzone } from './upload-widget-dropzone'
import { UploadWidgetHeader } from './upload-widget-header'
import { UploadWidgetMinimizedButto } from './upload-widget-minimized-button'
import { UploadWidgetUploadList } from './upload-widget-upload-list'

function UploadWidget() {
  const [isWidgetOpen, setIsWidgetOpen] = useState(false)

  return (
    <Collapsible.Root onOpenChange={setIsWidgetOpen}>
      <div className='bg-zinc-900 overflow-hidden w-[360px] rounded-xl shape'>
        {!isWidgetOpen && <UploadWidgetMinimizedButto />}
        <Collapsible.Content>
         <UploadWidgetHeader />

          <div className="flex flex-col gap-4 py-3">
            <UploadWidgetDropzone />

            <div className="h-px bg-zinc-800 border-t border-black/50 box-content">

            </div>

            <UploadWidgetUploadList />
          </div>
        </Collapsible.Content>
      </div>
    </Collapsible.Root>
  )
}

export { UploadWidget }

