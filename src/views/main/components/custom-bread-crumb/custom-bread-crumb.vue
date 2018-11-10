<template>
  <div class="custom-bread-crumb">
    <Breadcrumb>
      <BreadcrumbItem 
        v-for="item in list" 
        :to="item.to" 
        :key="`bread-crumb-${item.name}`">
        {{ showTitle(item) }}
      </BreadcrumbItem>
    </Breadcrumb>
  </div>
</template>
<script>
import { showTitle } from '@/utils/util'
import './custom-bread-crumb.less'
export default {
  name: 'CustomBreadCrumb',
  components: {},
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    showTitle(item) {
      return showTitle(item, this)
    }
  }
}
</script>
