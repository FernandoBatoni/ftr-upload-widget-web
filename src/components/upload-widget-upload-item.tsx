import * as ProgressBar from '@radix-ui/react-progress'
import { Download, ImageUp, Link2, RefreshCcw, X } from 'lucide-react'
import { motion } from 'motion/react'
import type { Upload } from '../@types/Upload'
import { formatBytes } from '../utils/format-bytes'
import { Button } from './ui/button'

interface UploadWidgetUplaodItemProps {
  upload: Upload
}

function UploadWidgetUploadItem({ upload }: UploadWidgetUplaodItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.4,
      }}
      className='p-3 rounded-lg flex flex-col gap-3 shape-content bg-white/[0.2] relative overflow-hidden'
    >
      <div className='flex flex-col gap-1'>
        <span className='text-xs font-medium flex items-center gap-1'>
          <ImageUp className='size-3 text-zinc-300' strokeWidth={1.5} />
          {upload.name}
        </span>

        <span className='text-[10px] text-zinc-400 flex gap-1.5 items-center'>
          <span className='line-through'>{formatBytes(upload.file.size)}</span>
          <div className='size-1 rounded-full bg-zinc-700' />
          <span>
            300KB
            <span className='text-green-400 ml-1'>-94%</span>
          </span>
          <div className='size-1 rounded-full bg-zinc-700' />
          <span>45%</span>
        </span>
      </div>

      <ProgressBar.Root className='bg-zinc-800 rounded-full h-1 overflow-hidden'>
        <ProgressBar.Indicator
          className='bg-indigo-500 h-1'
          style={{ width: '43%' }}
        />
      </ProgressBar.Root>

      <div className='absolute top-2.5 right-2.5 flex items-center gap-1'>
        <Button size='icon-sm'>
          <Download className='size-4' strokeWidth={1.5} />
          <span className='sr-only'>Download compressed image</span>
        </Button>

        <Button size='icon-sm'>
          <Link2 className='size-4' strokeWidth={1.5} />
          <span className='sr-only'>Copy remote URL</span>
        </Button>

        <Button size='icon-sm'>
          <RefreshCcw className='size-4' strokeWidth={1.5} />
          <span className='sr-only'>Retry upload</span>
        </Button>

        <Button size='icon-sm'>
          <X className='size-4' strokeWidth={1.5} />
          <span className='sr-only'>Cancel upload</span>
        </Button>
      </div>
    </motion.div>
  )
}

export { UploadWidgetUploadItem }
