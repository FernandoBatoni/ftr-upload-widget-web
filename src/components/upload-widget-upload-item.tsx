import * as ProgressBar from '@radix-ui/react-progress'
import { Download, ImageUp, Link2, RefreshCcw, X } from 'lucide-react'
import { motion } from 'motion/react'
import type { Upload } from '../@types/Upload'
import { useUploads } from '../store/uploads'
import { formatBytes } from '../utils/format-bytes'
import { Button } from './ui/button'

interface UploadWidgetUplaodItemProps {
  upload: Upload
  uploadId: string
}

function UploadWidgetUploadItem({
  upload,
  uploadId,
}: UploadWidgetUplaodItemProps) {
  const cancelUpload = useUploads(store => store.cancelUpload)

  const progress = Math.min(
    Math.round((upload.uploadSizeInBytes * 100) / upload.originalSizeInBytes),
    100,
  )

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
          <span className='line-through'>
            {formatBytes(upload.originalSizeInBytes)}
          </span>
          <div className='size-1 rounded-full bg-zinc-700' />
          <span>
            300KB
            <span className='text-green-400 ml-1'>-94%</span>
          </span>
          <div className='size-1 rounded-full bg-zinc-700' />
          {upload.status === 'success' && <span>100%</span>}
          {upload.status === 'progress' && <span>{progress}%</span>}
          {upload.status === 'error' && (
            <span className='text-red-400'>Error</span>
          )}
          {upload.status === 'canceled' && (
            <span className='text-yellow-400'>Canceled</span>
          )}
        </span>
      </div>

      <ProgressBar.Root
        className='group bg-zinc-800 rounded-full h-1 overflow-hidden'
        data-status={upload.status}
        value={progress}
      >
        <ProgressBar.Indicator
          className='bg-indigo-500 h-1 group-data-[status=success]:bg-green-400 group-data-[status=error]:bg-red-400 group-data-[status=canceled]:bg-yellow-400 transition-all'
          style={{
            width: upload.status === 'progress' ? `${progress}%` : '100%',
          }}
        />
      </ProgressBar.Root>

      <div className='absolute top-2.5 right-2.5 flex items-center gap-1'>
        <Button disabled={upload.status !== 'success'} size='icon-sm'>
          <Download className='size-4' strokeWidth={1.5} />
          <span className='sr-only'>Download compressed image</span>
        </Button>

        <Button disabled={upload.status !== 'success'} size='icon-sm'>
          <Link2 className='size-4' strokeWidth={1.5} />
          <span className='sr-only'>Copy remote URL</span>
        </Button>

        <Button
          disabled={!['canceled', 'error'].includes(upload.status)}
          size='icon-sm'
        >
          <RefreshCcw className='size-4' strokeWidth={1.5} />
          <span className='sr-only'>Retry upload</span>
        </Button>

        <Button
          disabled={upload.status !== 'progress'}
          size='icon-sm'
          onClick={() => cancelUpload(uploadId)}
        >
          <X className='size-4' strokeWidth={1.5} />
          <span className='sr-only'>Cancel upload</span>
        </Button>
      </div>
    </motion.div>
  )
}

export { UploadWidgetUploadItem }
