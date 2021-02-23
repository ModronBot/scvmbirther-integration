import React, { useEffect, useState } from 'react'

const Status = {
  IDLE: 'IDLE',
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR'
}

async function tcp(fn) {
  return new Promise((r) => {
    fn()
      .then((v) => r(v))
      .catch((e) => {
        console.error(e)
        r(e)
      })
  })
}

function Modron({ character }) {
  const [authorization, setAuthorization] = useState('')
  const [status, setStatus] = useState(Status.IDLE)

  useEffect(() => {
    let params

    params = new URLSearchParams(window.location.search)
    if (!params.has('modron_authorization')) return

    setAuthorization(params.get('modron_authorization'))
  }, [])

  const onClick = async () => {
    let body, headers, response

    body = JSON.stringify(character)
    headers = { authorization }

    setStatus(Status.PENDING)

    response = await tcp(() => fetch('https://api.modron.pw/mork_borg/api/characters/import_scvmbirther', { body, headers, method: 'POST' }))
    if (response instanceof Error) return setStatus(Status.ERROR)

    setStatus(Status.SUCCESS)
  }

  return (
    authorization && (
      <button disabled={[Status.PENDING, Status.SUCCESS].includes(status)} onClick={onClick} type='button'>
        {status === Status.IDLE && 'Import this on Modron'}
        {status === Status.PENDING && 'Importing on Modron'}
        {status === Status.SUCCESS && 'Imported on Modron'}
        {status === Status.ERROR && 'Import failed'}
      </button>
    )
  )
}

export default Modron
