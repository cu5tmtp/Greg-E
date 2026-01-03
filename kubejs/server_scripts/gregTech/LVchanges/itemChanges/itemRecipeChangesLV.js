ServerEvents.recipes((event) => {

    event.shaped(
        Item.of('kubejs:rawsiliconpress', 1),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'minecraft:iron_ingot',
            B: 'ae2:silicon'
        }
    )

    event.shaped(
        Item.of('kubejs:rawengineeringpress', 1),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'minecraft:iron_ingot',
            B: 'minecraft:diamond'
        }
    )

    event.shaped(
        Item.of('kubejs:rawcalculationpress', 1),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'minecraft:iron_ingot',
            B: 'ae2:certus_quartz_crystal'
        }
    )

    event.shaped(
        Item.of('kubejs:rawlogicpress', 1),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'minecraft:iron_ingot',
            B: 'minecraft:gold_ingot'
        }
    )

    event.shaped(
        Item.of('kubejs:rawlogicpress', 1),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'minecraft:iron_ingot',
            B: 'minecraft:gold_ingot'
        }
    )

    //Add recipe for nether quartz from common earth to unlock it
    event.shaped(
        Item.of('kubejs:quartzspile', 1),
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A: 'kubejs:quartzspeck'
        }
    )

    event.shaped(
        Item.of('minecraft:quartz', 1),
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A: 'kubejs:quartzspile'
        }
    )

    //Add recipe for certus quartz from common earth to unlock it
    event.shaped(
        Item.of('kubejs:cquartzspile', 1),
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A: 'kubejs:cquartzspeck'
        }
    )

    event.shaped(
        Item.of('ae2:certus_quartz_crystal', 1),
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A: 'kubejs:cquartzspile'
        }
    )

    //Add recipe for gold dust to unlock gold from common earth
    event.shaped(
        Item.of('kubejs:gspile', 1),
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A: 'kubejs:gspeck'
        }
    )

    event.shaped(
        Item.of('gtceu:gold_dust', 1),
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A: 'kubejs:gspile'
        }
    )

    //Add recipe for diamond from common earth to unlock it
    event.shaped(
        Item.of('kubejs:dcluster', 1),
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A: 'kubejs:dshard'
        }
    )

    event.shaped(
        Item.of('minecraft:diamond', 1),
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A: 'kubejs:dcluster'
        }
    )

    event.shaped(
        Item.of('kubejs:tornconveyor', 1),
        [
            'AAA',
            'BCB',
            'AAA'
        ],
        {
            A: 'kubejs:insulation',
            B: 'gtceu:lv_electric_motor',
            C: 'gtceu:tin_single_cable'
        }
    )

    event.shaped(
        Item.of('gtceu:lv_conveyor_module', 1),
        [
            'AAA',
            'BCB',
            'AAA'
        ],
        {
            A: 'kubejs:insulation',
            B: 'kubejs:tornconveyor',
            C: 'gtceu:tin_single_cable'
        }
    )
    
});