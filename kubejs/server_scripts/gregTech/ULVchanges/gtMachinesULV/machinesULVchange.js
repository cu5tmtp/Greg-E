ServerEvents.recipes((event) => {

    //Change machine recipies so it can act as LUV
    event.shaped(
        Item.of('gtceu:ulv_induction_smelter', 1),
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
            E: 'gtceu:ulv_machine_casing'
        }
    )

    event.shaped(
        Item.of('gtceu:ulv_multiservo_press', 1),
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
            E: 'gtceu:ulv_machine_casing'
        }
    )

    event.shaped(
        Item.of('gtceu:ulv_pulverizer', 1),
        [
            ' A ',
            'BEB',
            'CDC'
        ],
        {
            A: 'minecraft:piston',
            B: 'minecraft:flint',
            C: 'gtceu:small_copper_gear',
            D: 'minecraft:redstone',
            E: 'gtceu:ulv_machine_casing'
        }
    )

    event.shaped(
        Item.of('gtceu:ulv_machine_casing', 1),
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


    event.shaped(
        Item.of('gtceu:ulv_water_well', 1),
        [
            ' A ',
            'DBD',
            'DCD'
        ],
        {
            A: 'gtceu:copper_rod',
            B: 'gtceu:lv_electric_pump',
            C: 'gtceu:ulv_machine_casing',
            D: 'gtceu:rubber_ingot'
        }
    )

});