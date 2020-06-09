export default {
  subscribe: (statusHandler) => {
    setTimeout(() => {
      statusHandler(true);
      console.log('---- subscribed ----');
    }, 3000);
  },
  unsubscribe: (statusHandler) => {
    statusHandler(false);
    console.log('---- unsubscribed ----');
  },
};
