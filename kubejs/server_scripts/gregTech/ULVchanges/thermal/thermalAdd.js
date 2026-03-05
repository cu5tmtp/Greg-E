ServerEvents.recipes((event) => {
    
    //Change recipies in machines so it can act as LUV
    event.recipes.thermal.pulverizer(
        'gtceu:coal_dust',
        'minecraft:coal'
    );

    event.recipes.thermal.pulverizer(
        '4x gtceu:wood_dust',
        'minecraft:oak_log'
    );

    event.recipes.thermal.smelter(
        'gtceu:red_alloy_ingot', 
        ['minecraft:copper_ingot', '4x minecraft:redstone']
    );

    event.recipes.thermal.smelter(
        'minecraft:charcoal', 
        'minecraft:coal'
    );
  
    event.custom({
        type: 'thermal:smelter',
        ingredients: [
        { item: 'minecraft:iron_ingot' },
        { item: 'minecraft:coal', count: 4 }
            ],
        results: [
        { item: 'gtceu:steel_ingot' }
            ],
        energy: 10000,
        processingTime: 1000
    })

    event.recipes.thermal.press(
        'gtceu:glass_tube',
        'gtceu:glass_dust'
    );

    event.recipes.thermal.press(
        'minecraft:paper',
        'minecraft:sugar_cane'
    );

    event.recipes.thermal.press(
        'gtceu:wood_plate',
        '2x gtceu:wood_dust'
    );

    event.recipes.minecraft.campfire_cooking(
        'minecraft:glass',
        'gtceu:glass_dust',
        0,
        600
    )

    event.recipes.minecraft.campfire_cooking(
        'minecraft:string',
        '#minecraft:leaves',
        0,
        200
    )

    event.shapeless(
        Item.of('minecraft:iron_nugget', 9),
        [
            'minecraft:iron_ingot'
        ]
    )

});