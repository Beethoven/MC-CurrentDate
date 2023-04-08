export default {
  components: [
    {
      name: 'currentdate',
      settings: {},
      permissions: [
        'access_client_kv',
        'provide_server_functionality',
        'provide_widget',
        'serve_static_files',
        'client_network_requests',
        'execute_unsafe_scripts'
      ]
    },
  ],
  target: 'http://127.0.0.1:8000',
  hostname: 'localhost',
  trackPath: '/webcm/track',
  ecommerceEventsPath: '/webcm/ecommerce',
  clientEventsPath: '/webcm/system',
  port: 8080
}