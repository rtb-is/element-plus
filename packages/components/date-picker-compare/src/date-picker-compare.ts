import { defineComponent, h, provide, ref, renderSlot } from 'vue'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import localeData from 'dayjs/plugin/localeData'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import weekYear from 'dayjs/plugin/weekYear'
import dayOfYear from 'dayjs/plugin/dayOfYear'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import {
  CommonPicker,
  DEFAULT_FORMATS_DATE,
  DEFAULT_FORMATS_DATEPICKER,
  timePickerDefaultProps,
} from '@element-plus/components/time-picker'
import DatePickPanel from './date-picker-compare-com/panel-date-pick.vue'
import DateRangePickPanel from './date-picker-compare-com/panel-date-range.vue'
import MonthRangePickPanel from './date-picker-compare-com/panel-month-range.vue'
import { ROOT_PICKER_INJECTION_KEY } from './date-picker-compare.type'
import type { PropType } from 'vue'
import type { IDatePickerCompareType } from './date-picker-compare.type'

dayjs.extend(localeData)
dayjs.extend(advancedFormat)
dayjs.extend(customParseFormat)
dayjs.extend(weekOfYear)
dayjs.extend(weekYear)
dayjs.extend(dayOfYear)
dayjs.extend(isSameOrAfter)
dayjs.extend(isSameOrBefore)

const getPanel = function (type: IDatePickerCompareType) {
  if (type === 'daterange' || type === 'datetimerange') {
    return DateRangePickPanel
  } else if (type === 'monthrange') {
    return MonthRangePickPanel
  }
  console.log('Bedzie DatePickPanel')
  return DatePickPanel
}

export default defineComponent({
  name: 'ElDatePickerCompare',
  install: null,
  props: {
    ...timePickerDefaultProps,
    type: {
      type: String as PropType<IDatePickerCompareType>,
      default: 'date',
    },
  },
  emits: ['update:modelValue'],
  setup(props, ctx) {
    console.log(props.popperOptions)
    provide('ElPopperOptions', props.popperOptions)
    provide(ROOT_PICKER_INJECTION_KEY, {
      ctx,
    })
    const commonPicker = ref(null)
    const refProps = {
      ...props,
      focus: (focusStartInput = true) => {
        commonPicker.value?.focus(focusStartInput)
      },
    }
    ctx.expose(refProps)
    console.log(props.comparedTo)
    return () => {
      // since props always have all defined keys on it, {format, ...props} will always overwrite format
      // pick props.format or provide default value here before spreading
      const format =
        props.format ??
        (DEFAULT_FORMATS_DATEPICKER[props.type] || DEFAULT_FORMATS_DATE)
      return h(
        CommonPicker,
        {
          ...props,
          format,
          type: props.type,
          ref: commonPicker,
          'onUpdate:modelValue': (value) =>
            ctx.emit('update:modelValue', value),
        },
        {
          default: (scopedProps) => h(getPanel(props.type), scopedProps),
          'range-separator': () => renderSlot(ctx.slots, 'range-separator'),
        }
      )
    }
  },
})