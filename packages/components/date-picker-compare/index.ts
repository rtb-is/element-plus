import DatePickerCompare from './src/date-picker-compare'

import type { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils'

const _DatePickerCompare = DatePickerCompare as SFCWithInstall<
  typeof DatePickerCompare
>

_DatePickerCompare.install = (app: App) => {
  app.component(_DatePickerCompare.name, _DatePickerCompare)
}

export default _DatePickerCompare
export const ElDatePickerCompare = _DatePickerCompare
