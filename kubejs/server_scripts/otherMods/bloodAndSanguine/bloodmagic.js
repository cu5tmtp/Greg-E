ServerEvents.recipes((event) => {

  event.replaceInput(
    { id: 'bloodmagic:blood_altar' },
    'minecraft:furnace',
    'kubejs:zpmalloy'
  )

/*
event.custom({
    type: 'bloodmagic:altar',
    altarSyphon: 50000,
    consumptionRate: 10000,
    drainRate: 10000,
    input: {
      item: 'kubejs:zpmalloy',
    },
    output: {
      item: 'kubejs:uvalloy',
    },
    upgradeLevel: 4,
  });
  */

});