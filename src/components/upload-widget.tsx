import * as Collapsible from '@radix-ui/react-collapsible'
import { motion, useCycle } from 'motion/react'
import { usePendingUploads } from '../store/uploads'
import { UploadWidgetDropzone } from './upload-widget-dropzone'
import { UploadWidgetHeader } from './upload-widget-header'
import { UploadWidgetMinimizedButto } from './upload-widget-minimized-button'
import { UploadWidgetUploadList } from './upload-widget-upload-list'

function UploadWidget() {
  const { isThereAnyPendingUploads } = usePendingUploads()
  const [isWidgetOpen, toggleWidgetOpen] = useCycle(false, true)

  return (
    <Collapsible.Root onOpenChange={() => toggleWidgetOpen()} asChild>
      <motion.div
        className='bg-zinc-900 overflow-hidden w-[360px] rounded-xl data-[state=open]:shadow-shape border border-transparent animate-border-custom data-[state=closed]:rounded-3xl data-[state=closed]:data-[progress=false]:shadow-shape data-[state=closed]:data-[progress=true]:gradient-border-closed-progress'
        data-progress={isThereAnyPendingUploads}
        animate={isWidgetOpen ? 'open' : 'closed'}
        variants={{
          closed: {
            width: 'max-content',
            height: 44,
            transition: {
              type: 'inertia',
            },
          },
          open: {
            width: 360,
            height: 'auto',
            transition: {
              duration: 0.1,
            },
          },
        }}
      >
        {!isWidgetOpen && <UploadWidgetMinimizedButto />}
        <Collapsible.Content>
          <UploadWidgetHeader />

          <div className='flex flex-col gap-4 py-3'>
            <UploadWidgetDropzone />

            <div className='h-px bg-zinc-800 border-t border-black/50 box-content'></div>

            <UploadWidgetUploadList />
          </div>
        </Collapsible.Content>
      </motion.div>
    </Collapsible.Root>
  )
}

export { UploadWidget }
