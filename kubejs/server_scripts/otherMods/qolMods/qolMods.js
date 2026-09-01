ServerEvents.recipes((event) => {

    //SFM
    event.replaceInput(
        'sfm:manager',
        'minecraft:repeater',
        '#gtceu:circuits/hv'
    )

    //building wand
    event.replaceInput(
        'constructionwand:infinity_wand',
        'minecraft:nether_star',
        '#gtceu:circuits/ev'
    )

    //baubly
    event.remove('bhc:yellow_heart')
    event.remove('bhc:red_heart')
    event.remove('bhc:blue_heart')
    event.remove('bhc:green_heart')

    event.recipes.gtceu.assembler('getgreeenheart')
        .itemInputs(
            'bhc:yellow_heart'
        )
        .inputFluids(
            'gregecore:superelement27'
        )
        .itemOutputs(
            'bhc:green_heart'
        )
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(600)

    //entangled
    event.replaceInput(
        'entangled:block',
        '#forge:chests/wooden',
        'kubejs:voidhole'
    )

    event.replaceInput( 
        {id: "enchantinginfuser:enchanting_infuser"},
        "minecraft:crying_obsidian",
        "minecraft:obsidian"
    )  

    event.replaceInput( 
        {id: "enchantinginfuser:advanced_enchanting_infuser"},
        "minecraft:crying_obsidian",
        "minecraft:obsidian"
    )

    //quality
    event.remove({id: 'quality_forked:reforging_station_recipe'})
    event.shaped(Item.of('quality_forked:reforging_station', 1), 
    [
        'AEA',
        'BCF',
        'DDD'
    ], 
    {
        A: 'minecraft:smooth_stone_slab',
        B: '#gtceu:tools/crafting_screwdrivers',
        C: 'minecraft:anvil',
        D: 'minecraft:obsidian',
        E: '#gtceu:tools/crafting_hammers',
        F: '#gtceu:tools/crafting_files'

    })

    event.remove({id: 'justdirethings:portal_fluid_catalyst'})
    event.recipes.gtceu.large_chemical_reactor()
        .itemInputs(
            'justdirethings:ferricore_ingot',
            'gtceu:steel_ingot',
            'botania:manasteel_ingot'
        )
        .inputFluids(
            'gtceu:sulfuric_acid 250',
            'gtceu:nickel 100'
        )
        .itemOutputs(
            '6x justdirethings:portal_fluid_catalyst'
        )
        .EUt(GTValues.VA[GTValues.LV])
        .duration(300)


    //tf
    event.shaped(Item.of(Item.of('twilightforest:giant_pickaxe'), 1), 
        [
            'AAA',
            ' B ',
            ' B '
        ], 
        {
            A: Item.of('kubejs:cobblethree', 1),
            B: Item.of('64x minecraft:oak_log', 64)
        })

})