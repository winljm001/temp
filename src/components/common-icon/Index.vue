<template>
  <component 
    :is="iconType" 
    :type="iconName" 
    :color="iconColor" 
    :size="iconSize"
  />
</template>

<script>
import Icons from 'components/icons'
export default {
  name: 'CommonIcon',
  /* eslint-disable-next-line */
  components: { Icons },
  props: {
    type: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: ''
    },
    size: { type: Number, default: 0 }
  },
  computed: {
    iconType() {
      return this.type.indexOf('_') === 0 ? 'Icons' : 'Icon'
    },
    iconName() {
      return this.iconType === 'Icons'
        ? this.getCustomIconName(this.type)
        : this.type
    },
    iconSize() {
      return this.size || (this.iconType === 'Icons' ? 12 : undefined)
    },
    iconColor() {
      return this.color || ''
    }
  },
  methods: {
    getCustomIconName(iconName) {
      return iconName.slice(1)
    }
  }
}
</script>

<style>
</style>
