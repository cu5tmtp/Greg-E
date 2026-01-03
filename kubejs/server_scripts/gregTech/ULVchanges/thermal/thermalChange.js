ServerEvents.recipes((event) => {

    //Change machine recipies so it can act as LUV
    event.shaped(
        Item.of('thermal:machine_smelter', 1),
        [
            ' A ',
            'BEB',
            'CDC'
        ],
        {
            A: 'minecraft:furnace',
            B: 'minecraft:copper_ingot',
            C: 'gtceu:small_iron_gear',
            D: 'minecraft:redstone',
            E: 'thermal:machine_frame'
        }
    )

    event.shaped(
        Item.of('thermal:machine_press', 1),
        [
            ' A ',
            'BEB',
            'CDC'
        ],
        {
            A: 'minecraft:iron_block',
            B: 'minecraft:copper_ingot',
            C: 'gtceu:small_iron_gear',
            D: 'minecraft:redstone',
            E: 'thermal:machine_frame'
        }
    )

    event.shaped(
        Item.of('thermal:machine_pulverizer', 1),
        [
            ' A ',
            'BEB',
            'CDC'
        ],
        {
            A: 'minecraft:piston',
            B: 'minecraft:flint',
            C: 'thermal:copper_gear',
            D: 'minecraft:redstone',
            E: 'thermal:machine_frame'
        }
    )

    event.shaped(
        Item.of('thermal:machine_frame', 1),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'minecraft:iron_ingot',
            B: 'gtceu:sticky_resin',
            C: 'gtceu:small_iron_gear'
        }
    )

    event.replaceInput(
        { id: 'thermal:machine_pulverizer' },
        'thermal:rf_coil',
        'minecraft:redstone'
    )

    event.shaped(
        Item.of('thermal:copper_gear', 1),
        [
            ' A ',
            'CBD',
            ' A '
        ],
        {
            A: 'gtceu:copper_rod',
            B: 'gtceu:copper_plate',
            C: '#gtceu:tools/crafting_hammers',
            D: '#forge:tools/wire_cutters'
        }
    )

    event.shaped(
        Item.of('thermal:device_water_gen', 1),
        [
            ' A ',
            'DBD',
            'DCD'
        ],
        {
            A: 'gtceu:copper_rod',
            B: 'gtceu:lv_electric_pump',
            C: 'gtceu:lv_machine_hull',
            D: 'gtceu:rubber_ingot'
        }
    )
});