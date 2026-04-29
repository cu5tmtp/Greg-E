ServerEvents.recipes((event) => {
    
    event.shaped(
        Item.of('gtceu:cleanfarmland', 1),
        [
            ' A ',
            'DBD',
            'CEC'
        ],
        {
            A: '#gtceu:circuits/mv',
            B: 'minecraft:water_bucket',
            C: 'minecraft:iron_block',
            D: 'gtceu:mv_electric_pump',
            E: 'gtceu:mv_machine_hull'
        }
    )

    event.recipes.gtceu
        .cleanfarmland('wheatslow')
        .notConsumable('minecraft:wheat_seeds')   
        .itemOutputs(
            '16x minecraft:wheat',
            '4x minecraft:wheat_seeds'
        )
        .duration(1000)
        .EUt(120)
        .circuit(1)
        
    event.recipes.gtceu
        .cleanfarmland('wheatmedium')
        .notConsumable('minecraft:wheat_seeds')
        .inputFluids('minecraft:water 500')
        .itemOutputs(
            '64x minecraft:wheat',
            '16x minecraft:wheat_seeds'
        )
        .duration(500)
        .EUt(120)
        .circuit(2)

    event.recipes.gtceu
        .cleanfarmland('wheatfast')
        .notConsumable('minecraft:wheat_seeds')
        .chancedInput('gtceu:fertilizer', 1000, -100)
        .inputFluids('minecraft:water 500')
        .itemOutputs(
            '256x minecraft:wheat',
            '64x minecraft:wheat_seeds'
        )
        .duration(250)
        .EUt(120)
        .circuit(3)

    event.recipes.gtceu
        .cleanfarmland('carrotslow')
        .notConsumable('minecraft:carrot') 
        .itemOutputs('16x minecraft:carrot')
        .chancedOutput('16x minecraft:carrot', 1000, 1000)
        .duration(1000)
        .EUt(120)
        .circuit(1)

    event.recipes.gtceu
        .cleanfarmland('carrotmedium')
        .notConsumable('minecraft:carrot')
        .inputFluids('minecraft:water 500')
        .itemOutputs('64x minecraft:carrot')
        .chancedOutput('64x minecraft:carrot', 1000, 1000)
        .duration(500)
        .EUt(120)
        .circuit(2)

    event.recipes.gtceu
        .cleanfarmland('carrotfast')
        .notConsumable('minecraft:carrot')
        .chancedInput('gtceu:fertilizer', 1000, -100)
        .inputFluids('minecraft:water 500')
        .itemOutputs('256x minecraft:carrot')
        .chancedOutput('256x minecraft:carrot', 1000, 1000)
        .duration(250)
        .EUt(120)
        .circuit(3)

    event.recipes.gtceu.cleanfarmland('potatoslow')
        .notConsumable('minecraft:potato') 
        .itemOutputs('16x minecraft:potato')
        .chancedOutput('16x minecraft:potato', 1000, 1000)
        .duration(1000)
        .EUt(120)
        .circuit(1)

    event.recipes.gtceu.cleanfarmland('potatomedium')
        .notConsumable('minecraft:potato')
        .inputFluids('minecraft:water 500')
        .itemOutputs('64x minecraft:potato')
        .chancedOutput('64x minecraft:potato', 1000, 1000)
        .duration(500)
        .EUt(120)
        .circuit(2)

    event.recipes.gtceu.cleanfarmland('potatofast')
        .notConsumable(
            'minecraft:potato'
        )
        .chancedInput('gtceu:fertilizer', 1000, -100)
        .inputFluids(
            'minecraft:water 500'
        )
        .itemOutputs(
            '256x minecraft:potato'
        )
        .chancedOutput('256x minecraft:potato', 1000, 1000)
        .duration(250)
        .EUt(120)
        .circuit(3)

});