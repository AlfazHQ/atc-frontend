<template>
  <span v-if="!item.hidden">
    <template v-if="hasOneShowingChild(item.children,item) && (!onlyOneChild.children||onlyOneChild.noShowingChildren)&&!item.alwaysShow">
      <router-link v-if="onlyOneChild.meta" :class="{'active': is_active}" :to="resolvePath(onlyOneChild.path)" :aria-expanded="is_active" class="side-menu__item has-link">
        <div class="">
          <feather :type="onlyOneChild.meta.icon" custom-class="side-menu__icon" style="margin-right: 8px;" />
          <span class="side-menu__label">{{ onlyOneChild.meta.title }}</span>
        </div>
      </router-link>
    </template>
    <template v-else>
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
      />
    </template>
  </span>
</template>

<script>
import path from 'path'
import { isExternal } from '@/utils/validate'
export default {
  name: 'SidebarItem',
  props: {
    // route object
    item: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  data() {
    // To fix https://github.com/PanJiaChen/vue-admin-template/issues/237
    // TODO: refactor with render function
    this.onlyOneChild = null
    return {}
  },
  computed: {
    is_active() {
      const that = this
      if (that.item.children && that.item.children.length) {
        return that.item.children.map(itm => itm.name).includes(that.$route.name)
      }
      return that.item === that.$route.name
    }
  },
  methods: {
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false
        } else {
          // Temp set(will be used if only has one showing child)
          this.onlyOneChild = item
          return true
        }
      })

      // When there is only one child router, the child router is displayed by default
      if (showingChildren.length === 1) {
        return true
      }

      // Show parent if there are no child router to display
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ... parent, path: '', noShowingChildren: true }
        return true
      }

      return false
    },
    resolvePath(routePath) {
      if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(this.basePath)) {
        return this.basePath
      }
      return path.resolve(this.basePath, routePath)
    }
  }
}
</script>
