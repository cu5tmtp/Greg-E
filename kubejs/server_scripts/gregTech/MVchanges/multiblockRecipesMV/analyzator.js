ServerEvents.recipes((event) => {
    
    event.shaped(
        Item.of('gtceu:analyzator', 1),
        [
            ' A ',
            'DBD',
            'CEC'
        ],
        {
            A: '#gtceu:circuits/mv',
            B: 'minecraft:iron_block',
            C: 'gtceu:mv_conveyor_module',
            D: 'gtceu:mv_robot_arm',
            E: 'gtceu:mv_machine_hull'
        }
    )

    event.recipes.gtceu
        .analyzator('researchthatdamncompound')
        .itemInputs('kubejs:uncomp')   
        .itemOutputs('kubejs:supingot')
        .duration(2000)
        .EUt(120)

    event.recipes.gtceu
        .analyzator('researchthatdamnsentientpile')
        .itemInputs('kubejs:seniron')   
        .itemOutputs('kubejs:senplate')
        .duration(2000)
        .EUt(120)

    event.recipes.gtceu
        .analyzator('researchthatdamnlootfabricator')
        .itemInputs(
            '3x kubejs:senplate',
            '2x minecraft:diamond',
            'minecraft:comparator',
            'gtceu:mv_machine_hull'
        )   
        .itemOutputs('hostilenetworks:loot_fabricator')
        .duration(2000)
        .EUt(120)
        .circuit(1)

    event.recipes.gtceu
        .analyzator('researchthatdamnsimchamber')
        .itemInputs(
            '3x kubejs:senplate',
            '2x minecraft:diamond',
            '2x minecraft:lapis_lazuli',
            'minecraft:comparator',
            'gtceu:mv_machine_hull'
        )   
        .itemOutputs('hostilenetworks:sim_chamber')
        .duration(2000)
        .EUt(120)
        .circuit(2)

});