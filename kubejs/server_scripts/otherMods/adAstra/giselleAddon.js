ServerEvents.recipes((event) => {

    event.remove({output: 'ad_astra_giselle_addon:automation_nasa_workbench'})
    event.remove({output: 'ad_astra_giselle_addon:gravity_normalizer'})
    event.remove({id: 'ad_astra_giselle_addon:compat/ae2/inscriber/sky_stone_dust'})
    event.remove({id: 'ad_astra_giselle_addon:compat/ae2/smelting/smooth_sky_stone_block'})

    event.recipes.gtceu.pressuring()
        .itemInputs(
            '64x ad_astra:moon_sand',
            'minecraft:book'
        )
        .itemOutputs(
            Item.of('minecraft:enchanted_book').enchant('ad_astra_giselle_addon:space_breathing', 1)
        )
        .duration(400)
        .addData('pa', 20)

    event.recipes.gtceu.pressuring()
        .itemInputs(
            '64x ad_astra:mars_sand',
            'minecraft:book'
        )
        .itemOutputs(
            Item.of('minecraft:enchanted_book').enchant('ad_astra_giselle_addon:space_fire_proof', 1)
        )
        .duration(400)
        .addData('pa', 24)

    event.recipes.gtceu.pressuring()
        .itemInputs(
            '64x ad_astra:mercury_stone',
            'minecraft:book'
        )
        .itemOutputs(
            Item.of('minecraft:enchanted_book').enchant('ad_astra_giselle_addon:acid_rain_proof', 1)
        )
        .duration(400)
        .addData('pa', 25)

    event.recipes.gtceu.pressuring()
        .itemInputs(
            '64x ad_extendra:saturn_sand',
            'minecraft:book'
        )
        .itemOutputs(
            Item.of('minecraft:enchanted_book').enchant('ad_astra_giselle_addon:gravity_normalizing', 1)
        )
        .duration(400)
        .addData('pa', 25)

    event.recipes.gtceu.infusion_altar_infusing()
        .itemInputs(
            'ad_astra_giselle_addon:oxygen_can',
            'ad_astra_giselle_addon:netherite_oxygen_can',
            'ad_astra:oxygen_gear',
            Item.of('ad_astra:space_suit', '{Damage:0}'),
            Item.of('ad_astra:netherite_space_suit', '{Damage:0}'),
            Item.of('ad_astra:jet_suit', '{Damage:0}'),
            'ad_astra:gas_tank',
            'ad_astra:large_gas_tank',
            'ad_astra:oxygen_distributor'
        )
        .inputFluids(
            'gregecore:aqua_essentia 1000',
            'gregecore:terra_essentia 1000',
            'gregecore:aer_essentia 1000'
        )
        .itemOutputs(
            Item.of('ad_astra_giselle_addon:creative_oxygen_can', '{BotariumData:{StoredFluids:[{Amount:2147483647L,Fluid:"ad_astra:oxygen"}]}}')
        )
        .duration(600)
        .addData('essentia', "1,1,1,0,0,0")

        //aqua, terra, aer, ignis, perditio, ordo

})