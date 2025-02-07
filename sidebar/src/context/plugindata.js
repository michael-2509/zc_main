import { trimUrl, filterUrl } from "../utils/filterurl"
import axios from "axios"
import { ACTIONS } from "../root.component"

export const plugindata = async (
  dispatch,
  organizationInfo,
  currentWorkspace,
  userId
) => {
  organizationInfo &&
    organizationInfo.map(pluginInfo => {
      let { plugin } = pluginInfo

      // console.log('plugin info', pluginInfo)

      //Get sidebar url
      let sidebarUrl = plugin.sidebar_url
      //trim sidebar url of extra slashes
      let trimmedUrl = trimUrl(sidebarUrl)
      //filter plugin domain to use as key
      let pluginKey = filterUrl(plugin.sidebar_url)

      //Call each plugin
      axios
        .get(
          `${
            trimmedUrl.includes("https://") || trimmedUrl.includes("http://")
              ? trimmedUrl
              : `https://${trimmedUrl}`
          }?org=${currentWorkspace}&user=${userId}`
        )
        .then(res => {
          try {
            let validPlugin = res.data
            if (validPlugin.name !== undefined) {
              if (typeof validPlugin === "object") {
                //Set plugin data to state
                dispatch({
                  type: ACTIONS.ADD_ITEM,
                  payload: { [pluginKey]: validPlugin }
                })
              }
            }
          } catch (err) {
            console.error(err)
            return null
          }
        })
        .catch(err => console.error(err))
    })
}
