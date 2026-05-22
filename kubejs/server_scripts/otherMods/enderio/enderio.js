ServerEvents.recipes((event) => {

    event.remove({type: 'enderio:alloy_smelting'})
    let alloys = [
        {output: 'enderio:copper_alloy_ingot', inputs: ['minecraft:copper_ingot', 'ae2:silicon'], duration: 300, energy: GTValues.VA[GTValues.LV]},
        {output: 'enderio:energetic_alloy_ingot', inputs: ['minecraft:gold_ingot', 'minecraft:glowstone_dust'], duration: 300, energy: GTValues.VA[GTValues.LV]},
        {output: 'enderio:vibrant_alloy_ingot', inputs: ['enderio:energetic_alloy_ingot', 'minecraft:ender_pearl'], duration: 300, energy: GTValues.VA[GTValues.LV]},
        {output: 'enderio:redstone_alloy_ingot', inputs: ['minecraft:redstone', 'ae2:silicon'], duration: 400, energy: GTValues.VA[GTValues.MV]},
        {output: 'enderio:conductive_alloy_ingot', inputs: ['enderio:copper_alloy_ingot', 'minecraft:redstone'], duration: 400, energy: GTValues.VA[GTValues.MV]},
        {output: 'enderio:pulsating_alloy_ingot', inputs: ['minecraft:iron_ingot', 'minecraft:ender_pearl'], duration: 400, energy: GTValues.VA[GTValues.MV]},
        {output: 'enderio:dark_steel_ingot', inputs: ['minecraft:obsidian', 'minecraft:iron_ingot'], duration: 500, energy: GTValues.VA[GTValues.HV]},
        {output: 'enderio:soularium_ingot', inputs: ['minecraft:copper_ingot', '#minecraft:soul_fire_base_blocks'], duration: 500, energy: GTValues.VA[GTValues.HV]},
        {output: 'enderio:end_steel_ingot', inputs: ['minecraft:end_stone', 'enderio:dark_steel_ingot'], duration: 500, energy: GTValues.VA[GTValues.HV]},
    ]

    alloys.forEach((items) => {

        event.recipes.gtceu.alloy_smelter(items.output + '_converted')
            .itemInputs(
                items.inputs
            )
            .itemOutputs(
                items.output
            )
            .EUt(items.energy)
            .duration(items.duration)

    })



    event.remove({type: 'enderio:sag_milling'})

    let mill = [
        {output: 'enderio:ender_crystal_powder', input: 'enderio:ender_crystal', duration: 300, energy: GTValues.VA[GTValues.LV]},
        {output: 'enderio:prescient_powder', input: 'enderio:prescient_crystal', duration: 300, energy: GTValues.VA[GTValues.LV]},
        {output: 'enderio:vibrant_powder', input: 'enderio:vibrant_crystal', duration: 300, energy: GTValues.VA[GTValues.MV]},
        {output: 'enderio:pulsating_powder', input: 'enderio:pulsating_crystal', duration: 300, energy: GTValues.VA[GTValues.HV]},
        {output: 'enderio:withering_powder', input: 'minecraft:wither_skeleton_skull', duration: 300, energy: GTValues.VA[GTValues.LV]},
    ]

    mill.forEach((items) => {

        event.recipes.gtceu.macerator(items.output + '_converted')
            .itemInputs(
                items.input
            )
            .itemOutputs(
                items.output
            )
            .EUt(items.energy)
            .duration(items.duration)

    })

    event.remove('enderio:primitive_alloy_smelter')
    event.remove('enderio:alloy_smelter')
    event.remove('enderio:painting_machine')
    event.remove('enderio:stirling_generator')
    event.remove('enderio:sag_mill')
    event.remove('avaritia:eio_creative_power')
    event.remove('enderio:staff_of_levity')

})