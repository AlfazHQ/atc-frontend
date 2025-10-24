<template>
  <!-- CONTAINER -->
  <div class="main-container container-fluid">
    <!-- ROW-4 -->
    <div class="row mt-5">
      <div class="col-12 col-sm-12">
        <div class="card">
          <div class="row border-bottom pt-4 px-5">
            <div class="col-md-2 col-sm-12 mb-4">
              <h3>Blog Lists</h3>
            </div>
            <div class="col-md-8 col-sm-12 mb-4">
              <div class="input-group">
                <input type="text" class="form-control " placeholder="Search something..." name="s">
                <span class="input-group-btn ms-0">
                  <button class="btn btn-primary" type="submit">
                    <span class="fe fe-search text-white" />
                  </button>
                </span>
              </div>
            </div>
            <div class="col-md-2 col-sm-12 text-end">
              <button class="btn btn-info" @click="$router.push({ name: 'AddBlogs'})">Add New Blog</button>
            </div>
          </div>
          <div class="card-body pt-4">

            <div class="table-responsive">
              <table
                id="data-table"
                class="table table-bordered text-nowrap mb-0"
              >
                <thead class="border-top">
                  <tr>
                    <th class="bg-transparent border-bottom-0">Thumbnail
                    </th>
                    <th class="bg-transparent border-bottom-0">Title
                    </th>
                    <th
                      class="bg-transparent border-bottom-0"
                    >
                      Date
                    </th>
                    <th class="bg-transparent border-bottom-0">Status
                    </th>
                    <th class="bg-transparent border-bottom-0">Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in items" :key="item.id" class="border-bottom">
                    <td>
                      <img class="rounded-img w-100p" :src="item.thumbnail" alt="Generic placeholder image">
                    </td>
                    <td>
                      {{ item.title }}
                    </td>
                    <td><span class="mt-sm-2 d-block">30 Aug2021</span></td>
                    <td>
                      <div class="mt-sm-1 d-block">
                        <span
                          class="badge bg-success-transparent rounded-pill text-success p-2 px-3"
                        >Active</span>
                      </div>
                    </td>
                    <td>
                      <button class="btn btn-primary" @click="$router.push({ name: 'EditBlogs', params: { id: item.id}})">Edit</button>
                      <button class="btn btn-danger ms-3" @click="handleDelete(item.id)">Delete</button>
<!--                      <el-dropdown trigger="click" @command="handleCommand">-->
<!--                        <el-button type="primary">-->
<!--                          Action<i class="el-icon-arrow-down el-icon&#45;&#45;right" />-->
<!--                        </el-button>-->
<!--                        <el-dropdown-menu slot="dropdown">-->
<!--                          <el-dropdown-item command="edit" @click="$router.push({ name: 'EditBlogs', params: { id: item.id}})">Edit</el-dropdown-item>-->
<!--                          <el-dropdown-item command="delete">Delete</el-dropdown-item>-->
<!--                        </el-dropdown-menu>-->
<!--                      </el-dropdown>-->
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ROW-4 END -->
  </div>
  <!-- CONTAINER END -->
</template>

<script>

import Admin from '@/services/api/Admin'

export default {
  name: 'Blogs',
  data() {
    return {
      items: null
    }
  },
  created() {
    this.getItems()
  },
  methods: {
    getItems() {
      Admin.getBlogs().then(res => {
        this.items = res.data.blogs
      })
    },
    handleDelete(id) {
      this.$confirm('This will permanently delete the file. Continue?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
        return this.deleteItem(id)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'Delete canceled'
        })
      })
    },
    deleteItem(id) {
      Admin.deleteBlog(id).then(res => {
        this.$notify({
          type: 'success',
          title: 'Success',
          message: res.message
        })
        this.getItems()
      })
    },
    handleCommand(command) {
      this.$message('click on item ' + command)
    }
  }
}
</script>
