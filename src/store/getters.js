
const getters = {
  // Auth User
  token: state => state.auth.token,
  name: state => state.auth.name,
  email: state => state.auth.email,
  roles: state => state.auth.roles,
  is_admin: state => state.auth.roles.includes('super_admin'),
  is_customer_care: state => state.auth.roles.includes('customer_care'),
  acl: state => state.auth.acl,
  office: state => state.auth.office,
  auth: state => state.auth.info,
  is_logged_in: state => state.auth.roles.length,
  cart: state => state.auth.cart,
  //  Application
  sidebar: state => state.app.sidebar,
  size: state => state.app.size,
  device: state => state.app.device,
  clientWidth: state => state.app.clientWidth,
  permission_routes: state => state.permission.routes,
  // Common uses
  current_date: state => state.common.current_date,
  // Frontend content
  home_page: state => state.frontend.home_page,
  payment_page: state => state.frontend.payment_page,
  development_page: state => state.frontend.development_page,
  faq_page: state => state.frontend.faq_page,
  all_pages: state => state.frontend.all_pages
}
export default getters
