import { ComponentSettings, Manager, MCEvent } from '@managed-components/types'

export default async function (manager: Manager, _settings: ComponentSettings) {
  manager.addEventListener('pageview', async ({ client }: MCEvent) => {
    const today = new Date().toUTCString()
    client.execute("console.log('PageView at " + today + "');")
  })
}
