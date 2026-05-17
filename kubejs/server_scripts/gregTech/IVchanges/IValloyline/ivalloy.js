ServerEvents.recipes((event) =>{ 
    event.recipes.gtceu.extractor('getivcef')
        .itemInputs(
            '#gtceu:circuits/iv'
        )
        .outputFluids(
            'kubejs:ivcas 1000'
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.specmetheat('gethotcloggrum')
        .itemInputs(
            'undergarden:cloggrum_ingot'
        )
        .inputFluids(
            'kubejs:acidinfusedlava 1000'
        )
        .itemOutputs(
            'kubejs:hotcloggrum'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(150)

    event.recipes.gtceu.specmetheat('gethotfrosteel')
        .itemInputs(
            'undergarden:froststeel_ingot'
        )
        .inputFluids(
            'kubejs:acidinfusedlava 1000'
        )
        .itemOutputs(
            'kubejs:hotfroststeel'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(150)

    event.recipes.gtceu.forgef('getpurefroststeel1')
        .itemInputs(
            'kubejs:hotfroststeel'
        )
        .inputFluids(
            'minecraft:lava 1000'
        )
        .itemOutputs(
            'kubejs:purefroststeel',
            'gtceu:ash_dust',
            'gtceu:stone_dust'
        )
        .duration(200)
        .circuit(1)


    event.recipes.gtceu.forgef('getpurecloggrum1')
        .itemInputs(
            'kubejs:hotcloggrum'
        )
        .inputFluids(
            'minecraft:lava 1000'
        )
        .itemOutputs(
            'kubejs:purecloggrum',
            'gtceu:ash_dust',
            'gtceu:stone_dust'
        )
        .duration(200)
        .circuit(1)


    event.recipes.gtceu.forgef('getpurefroststeel2')
        .itemInputs(
            'kubejs:hotfroststeel'
        )
        .inputFluids(
            'kubejs:acidinfusedlava 1000'
        )
        .itemOutputs(
            'kubejs:purefroststeel',
            'gtceu:ash_dust',
            'gtceu:stone_dust'
        )
        .duration(5)
        .circuit(2)


    event.recipes.gtceu.forgef('getpurecloggrum2')
        .itemInputs(
            'kubejs:hotcloggrum'
        )
        .inputFluids(
            'kubejs:acidinfusedlava 1000'
        )
        .itemOutputs(
            'kubejs:purecloggrum',
            'gtceu:ash_dust',
            'gtceu:stone_dust'
        )
        .duration(5)
        .circuit(2)

})