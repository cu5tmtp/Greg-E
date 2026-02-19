ServerEvents.recipes((event) => {
  event.custom({
    type: 'sanguine_networks:catalyst',
    catalyst: {
      item: 'kubejs:zpmalloy',
    },
    multiplier: 10,
    uses: -1,
  });
});