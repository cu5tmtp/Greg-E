ServerEvents.tags('item', (event) => {

    event.remove('forge:ingots/neutronium', 'avaritia:neutron_ingot')
    event.remove('forge:nuggets/neutronium', 'avaritia:neutron_nugget')
    event.remove('forge:ingots/uranium', 'ad_extendra:uranium_ingot')
    event.remove('forge:nuggets/uranium', 'ad_extendra:uranium_nugget')
    event.remove('forge:plates/uranium', 'ad_extendra:uranium_plate')
    event.remove('forge:ingots/plutonium', 'ad_extendra:plutonium_ingot')
    event.remove('forge:nuggets/plutonium', 'ad_extendra:plutonium_nugget')
    event.remove('forge:plates/plutonium', 'ad_extendra:plutonium_plate')
    event.remove('forge:dusts/obsidian', 'enderio:silicon')
    event.remove('forge:silicon', 'enderio:silicon')

    let materialy = [
        'iron', 'gold', 'copper', 'tin', 'ender_pearl', 'obsidian', 'cobalt', 'coal', 'lapis',
    ]

    materialy.forEach(mat => {
        event.remove(`forge:dusts/${mat}`, /enderio:.*/)
    })

})