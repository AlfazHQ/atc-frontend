<template>
  <div class="card">
    <div class="row border-bottom pt-4 px-5">
      <div class="col-md-2 col-sm-12 mb-4">
        <h3 class="text-capitalize">{{ role }} List</h3>
      </div>
      <div class="col-md-8 col-sm-12 mb-4">
        <div class="input-group">
          <input v-model="query" type="text" class="form-control " placeholder="Search something..." name="s">
          <span class="input-group-btn ms-0">
            <button class="btn btn-primary" type="submit">
              <span class="fe fe-search text-white" />
            </button>
          </span>
        </div>
      </div>
      <div class="col-md-2 col-sm-12 mb-4 text-end">
        <el-select v-model="filter.status" class="form-item-wrapper" placeholder="Select" @change="getItems">
          <el-option
            v-for="el in statuses"
            :key="el.id"
            :label="el.title"
            :value="el.id"
          />
        </el-select>
      </div>
    </div>
    <div class="card-body pt-4">

      <div class="table-responsive">
        <table
          v-if="filteredItems.length"
          id="data-table"
          class="table table-bordered text-nowrap mb-0"
        >
          <thead class="border-top">
            <tr>
              <th class="bg-transparent border-bottom-0">Avatar
              </th>
              <th class="bg-transparent border-bottom-0">Name
              </th>
              <th class="bg-transparent border-bottom-0">
                Email
              </th>
              <th class="bg-transparent border-bottom-0">
                Mobile
              </th>
              <th class="bg-transparent border-bottom-0">
                Address
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
            <tr v-for="el in filteredItems" :key="el.id" class="border-bottom">
              <td>
                <img class="rounded-img" :src="el.avatar" alt="Generic placeholder image">
              </td>
              <td>
                <h4 class="mt-0">{{ el.name }}</h4>
              </td>
              <td><span class="mt-sm-2 d-block">{{ el.email }}</span></td>
              <td><span class="mt-sm-2 d-block">{{ el.mobile }}</span></td>
              <td><span class="mt-sm-2 d-block">{{ el.address }}</span></td>
              <td><span class="mt-sm-2 d-block">{{ el.date }}</span></td>
              <td>
                <div class="mt-sm-1 d-block">
                  <span class="badge bg-success-transparent rounded-pill text-success p-2 px-3">{{ el.status }}</span>
                </div>
              </td>
              <td>
                <el-dropdown trigger="click" @command="handleDropdown">
                  <el-button type="primary">
                    Action<i class="el-icon-arrow-down el-icon--right" />
                  </el-button>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item :command="{ action: 'view', id: el.id}">View</el-dropdown-item>
                    <el-dropdown-item v-if="el.status_id !== 5 && is_admin" :command="{ action: 'ban', id: el.id, status: 5}">Ban</el-dropdown-item>
                    <el-dropdown-item v-if="el.status_id !== 5 && el.status_id !== 6 && is_admin" :command="{ action: 'suspend', id: el.id, status: 6}">Suspend</el-dropdown-item>
                    <el-dropdown-item v-if="el.status_id === 6 && is_admin" :command="{ action: 'suspend', id: el.id, status: 1}">Active</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </td>
            </tr>
          </tbody>
        </table>
        <h3 v-else class="text-center p-8">No Data Found !</h3>
        <pagination class="justify-content-center mt-5" :data="item" @pagination-change-page="getItems"/>
      </div>
    </div>
  </div>
</template>

<script>
import Admin from '@/services/api/Admin'
import Utils from '@/services/api/Utils'
import Pagination from 'laravel-vue-pagination'
import { mapGetters } from "vuex";

export default {
  name: 'UserTable',
  components: { Pagination },
  props: {
    role: {
      type: String,
      required: true,
      defaults: null
    }
  },
  data() {
    return {
      filter: {
        status: null
      },
      item: {
        data: null
      },
      statuses: null,
      query: null
    }
  },
  computed: {
    ...mapGetters([
      'is_admin',
    ]),
    filteredItems() {
      const result = this.item.data
      if (!this.query) {
        return result
      }
      const query = this.query.toLowerCase()
      return result.filter(item => item.name.toLowerCase().includes(query))
    }
  },
  created() {
    this.getItems()
    this.getStatuses()
  },
  methods: {
    getItems(page = 1) {
      Admin.getUsers(page, this.role, this.filter.status).then(res => {
        this.item = res.data.items
      })
    },
    getStatuses() {
      Utils.getStatuses().then(res => {
        this.statuses = res.data.statuses
      })
    },
    handleDropdown(command) {
      if (command.action === 'view') {
        this.$router.push({ name: 'UserProfile', params: { id: command.id }})
      }
      if (command.action === 'ban' || command.action === 'suspend') {
        this.updateUserStatus(command.id, command.status)
      }
    },
    updateUserStatus(id, status) {
      Admin.updateUserStatus(id, status).then(res => {
        this.$notify({
          title: 'Success',
          type: 'success',
          message: res.message
        })
        this.getItems()
      })
    }
  }
}
</script>
