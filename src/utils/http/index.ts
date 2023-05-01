import { instance, Axios } from './utils/instance'
import CONFIG_METHODS, { ConfigModel } from "./utils/Config"

interface ConfigOptsModel {
  url?: string
  method?: string
  baseURL?: string
  transformRequest?: Array<Function>
  transformResponse?: Array<Function>
  headers?: object
  params?: object
  paramsSerializer?: Function
  data?: object
  timeout?: number
  withCredentials?: boolean
  adapter?: Function
  auth?: object
  responseType?: string
  responseEncoding?: string
  xsrfCookieName?: string
  xsrfHeaderName?: string
  onUploadProgress?: Function
  onDownloadProgress?: Function
  maxContentLength?: Function
  validateStatus?: Function
  maxRedirects?: number
  socketPath?: object
  httpAgent?: any
  httpsAgent?: any
  proxy?: object
  cancelToken?: object
}

function urlReplace(url: string, params: any) {
  return url.replace(/\{(\w+)\}/g, (_, $2) => {
    return params?.[$2]
  })
}

function request(requestName: string, configOpts?: ConfigOptsModel): any
function request(requestName: string, params?: any, configOpts?: ConfigOptsModel): any
function request(requestName: string, params?: any, conf?: any): any{
  const config = CONFIG_METHODS[requestName] as ConfigModel
  let parameter: any = params
  const method = config!.method || 'post'
  switch (method) {
      case "get":
        if (params) {
          parameter = params
          config.url = urlReplace(config.url, parameter)
        }
        return instance.get(config.url, conf)
      case "post":
        if (params) {
          parameter = params
          config.url = urlReplace(config.url, parameter)
        }
        return instance.post(config.url, parameter, conf)
      case "put":
        if (params) {
          parameter = params
          config.url = urlReplace(config.url, parameter)
        }
        return instance.put(config.url, parameter, conf)
      case "delete":
        return instance.delete(config.url, conf)
  }
}

export {
  request,
  Axios
}