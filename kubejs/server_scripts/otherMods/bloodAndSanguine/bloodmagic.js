ServerEvents.recipes((event) => {

  event.replaceInput(
    { id: 'bloodmagic:blood_altar' },
    'minecraft:furnace',
    '#gtceu:circuits/zpm'
  )

  event.custom({
      type: 'bloodmagic:altar',
      altarSyphon: 50000,
      consumptionRate: 10000,
      drainRate: 10000,
      input: {
        item: 'bloodmagic:basemonstersoul',
      },
      output: {
        item: 'kubejs:evilsoul',
      },
      upgradeLevel: 5,
    });

    event.custom({
      type: 'bloodmagic:altar',
      altarSyphon: 200000,
      consumptionRate: 10000,
      drainRate: 10000,
      input: {
        item: 'minecraft:stone_button',
      },
      output: {
        item: 'gregecore:solar_activator',
      },
      upgradeLevel: 5,
    });

});