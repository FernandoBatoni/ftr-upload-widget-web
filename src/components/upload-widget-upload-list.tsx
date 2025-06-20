import { UploadWidgetUploadItem } from './upload-widget-upload-item'

function UploadWidgetUploadList() {
  return (
    <div className='px-3 flex flex-col gap-3'>
      <span className='text-xs font-medium'>
        Uploaded files &nbsp;
        <span className='text-zinc-400'></span>
      </span>

      {false ? (
        <span className='text-xs text-zinc-400'>No uploaded added</span>
      ) : (
        <div className='flex flex-col gap-2'>
          <UploadWidgetUploadItem />
          <UploadWidgetUploadItem />
        </div>
      )}
    </div>
  )
}

export { UploadWidgetUploadList }
