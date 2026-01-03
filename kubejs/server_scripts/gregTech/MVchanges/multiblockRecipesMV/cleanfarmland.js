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
        .itemOutputs('4x minecraft:wheat')
        .duration(1000)
        .EUt(120)
        
    event.recipes.gtceu
        .cleanfarmland('wheatmedium')
        .notConsumable('minecraft:wheat_seeds')
        .inputFluids('minecraft:water 500')
        .itemOutputs('8x minecraft:wheat')
        .duration(500)
        .EUt(120)

    event.recipes.gtceu
        .cleanfarmland('wheatfast')
        .notConsumable('minecraft:wheat_seeds')
        .itemInputs('gtceu:fertilizer')
        .inputFluids('minecraft:water 500')
        .itemOutputs('16x minecraft:wheat')
        .duration(250)
        .EUt(120)

    event.recipes.gtceu
        .cleanfarmland('carrotslow')
        .notConsumable('minecraft:carrot') 
        .itemOutputs('4x minecraft:carrot')
        .duration(1000)
        .EUt(120)

    event.recipes.gtceu
        .cleanfarmland('carrotmedium')
        .notConsumable('minecraft:carrot')
        .inputFluids('minecraft:water 500')
        .itemOutputs('8x minecraft:carrot')
        .duration(500)
        .EUt(120)

    event.recipes.gtceu
        .cleanfarmland('carrotfast')
        .notConsumable('minecraft:carrot')
        .itemInputs('gtceu:fertilizer')
        .inputFluids('minecraft:water 500')
        .itemOutputs('16x minecraft:carrot')
        .duration(250)
        .EUt(120)

    event.recipes.gtceu
        .cleanfarmland('potatoslow')
        .notConsumable('minecraft:potato') 
        .itemOutputs('4x minecraft:potato')
        .duration(1000)
        .EUt(120)

    event.recipes.gtceu
        .cleanfarmland('potatomedium')
        .notConsumable('minecraft:potato')
        .inputFluids('minecraft:water 500')
        .itemOutputs('8x minecraft:potato')
        .duration(500)
        .EUt(120)

    event.recipes.gtceu
        .cleanfarmland('potatofast')
        .notConsumable('minecraft:potato')
        .itemInputs('gtceu:fertilizer')
        .inputFluids('minecraft:water 500')
        .itemOutputs('16x minecraft:potato')
        .duration(250)
        .EUt(120)

});