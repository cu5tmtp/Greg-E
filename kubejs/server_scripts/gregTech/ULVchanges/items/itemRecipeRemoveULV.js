ServerEvents.recipes(event => {

    event.remove({id: 'gtceu:smelting/smelt_dust_sintercoke_to_ingot'})
    event.remove({id: 'gtceu:arc_furnace/arc_sintercoke_block'})
    event.remove({id: 'gtceu:arc_furnace/arc_sintercoke_dust'})

})