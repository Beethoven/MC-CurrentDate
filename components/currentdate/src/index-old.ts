import { ComponentSettings, Manager, MCEvent } from '@managed-components/types'

const onEvent = () => async (event: MCEvent) => {
  const { client } = event
  console.log('event:', event.payload)

  const now = Date.now()
  const consoleInfo = `Pageview processed at ${now}`
  console.log('event:', consoleInfo)
  client.execute("console.log('Hello World');")
}

export default async function (manager: Manager, _settings: ComponentSettings) {
  manager.addEventListener('pageview', onEvent())
}
