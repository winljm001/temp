import CommonIcon from '@/components/common-icon'
import { showTitle } from '@/utils/util'
export default {
  components: {
    CommonIcon
  },
  methods: {
    showTitle(item) {
      return showTitle(item, this)
    },
    showChildren(item) {
      return item.children && item.children.length > 0
    }
  }
}
