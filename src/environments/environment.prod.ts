export const environment = {
  production: true,
  ce_api_config: {
    ws_url: { host: "/", path: "/diagnosol/ws/socket.io" },
    ce_event_url: { host: "/", path: '/ce-events/ws/socket.io' },
    api_url: "%HREF_API_CI%",
    main_title: 'Ce Forms Manager',
    app_version: "%APP_VERSION%",
  }
};
