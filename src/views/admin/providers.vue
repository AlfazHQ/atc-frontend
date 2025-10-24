<template>
  <!-- CONTAINER -->
  <div class="main-container container-fluid">
    <!-- ROW-4 -->
    <div class="row mt-5">
      <div class="col-12 col-sm-12">
        <user-table role="provider"></user-table>
      </div>
    </div>
    <!-- ROW-4 END -->
  </div>
  <!-- CONTAINER END -->
</template>

<script>

import UserTable from '@/components/UserTable'

export default {
  name: 'Provider',
  components: { UserTable },
  data() {
    return {
    }
  }
}
</script>
